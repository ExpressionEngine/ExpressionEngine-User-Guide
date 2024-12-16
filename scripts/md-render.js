/*!
 * This source file is part of the open source project
 * ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2019, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
 */

const Fs         = require('fs')
const Path       = require('path')
const MarkedJs   = require('marked')


const isUrl      = require('is-url')
const { bsToFs } = require('./utility.js')
const Logger     = require('./logger.js')
const PageTocGenerator	= require('./page-toc-generator.js')

const HlJs       = require('highlight.js')

// Register the ee language
HlJs.registerLanguage('ee', require('./ee-lang.js'))
// Only allow auto detection of the languages the docs use. This drastically increases compile speed.
HlJs.configure({ languages: ['xml', 'ee', 'php', 'apache', 'bash', 'javascript'] })

// -------------------------------------------------------------------

let currentPageInfo = {}
let tocGenerator    = null

const defaultRenderer = new MarkedJs.Renderer()
let renderer          = new MarkedJs.Renderer()

MarkedJs.setOptions({
	smartypants: true,
	highlight: function(str, lang) {
		// Use the code block lang
		if (lang && HlJs.getLanguage(lang))
			return HlJs.highlight(lang, str).value
		// Use the global page lang
		if (currentPageInfo.codeLang && HlJs.getLanguage(currentPageInfo.codeLang))
			return HlJs.highlight(currentPageInfo.codeLang, str).value
		// Auto highlight
		else
			return HlJs.highlightAuto(str).value
	}
})

// -------------------------------------------------------------------

// Render custom alerts
renderer.paragraph = function (text) {
	let pClass = ''

	let tocTagId = tocGenerator.getTag(text)

	if (tocTagId) {
		// Replace the toc tag with it's temporary id
		return tocTagId
	}

	// Render message boxes
	let alerts = [
		{ tag: 'TIP',  class: 'alert alert--hint' },
		{ tag: 'NOTE', class: 'alert alert--warn' },
		{ tag: 'WARN', class: 'alert alert--error' }
	]

	for (let box of alerts) {
		let reg = new RegExp('^' + box.tag + ':(.*)', 'gm')

		if (text.match(reg)) {
			pClass = box.class
			text = text.replace(reg, '$1')
			break
		}
	}

	if (pClass != '')
		return `<p class="${pClass}">${text}</p>`

	return `<p>${text}</p>`
}

// -------------------------------------------------------------------

// Render headings with an anchor
renderer.heading = function (text, level, raw, slugger) {
	let slug = currentPageInfo.slugify(raw)

	tocGenerator.addHeading(text, level, slug)

	BuildInfo.pages[currentPageInfo.pageId].headingSlugs.push(slug)

	return `
		<h${level}>
		<span class="anchor" id="${slug}"></span>
		<a href="#${slug}">${text}</a>
		</h${level}>`
}

// -------------------------------------------------------------------

// Validate links and make doc links relative
renderer.link = function (href, title, text) {
	if (text.trim() == '' ) Logger.warn('Empty link title', `[${text}](${href})`, currentPageInfo.pageId)
	if (href.trim() == '' ) Logger.warn('Empty link href', `[${text}](${href})`, currentPageInfo.pageId)

	// Don't do anything if it's a url or email
	if (isUrl(href) || href.includes('mailto:')) {
		return defaultRenderer.link(href, title, text)
	}

	// Don't do anything if it's an anchor link
	if (href.match(/(^ *#[\w-]* *$)/gi)) {
		// Add the anchor to the in-page anchor list for validation
		BuildInfo.pages[currentPageInfo.pageId].inPageLinks.push({ page: currentPageInfo.path, text, anchor: href })

		return defaultRenderer.link(href, title, text)
	}

	let pageParts = (/(.*)(\.md)($|#.*|\s+$)/gi).exec(href)

	// Is it a link to a doc page?
	if (pageParts != null) {
		// Make the path relative
		let linkPath = Path.join(currentPageInfo.relPath, pageParts[1])

		// Warn if the file does not exist
		let locatedFile = Path.resolve(Path.dirname(currentPageInfo.path), linkPath + '.md')
		if (!Fs.existsSync(locatedFile))
			Logger.warn('Unknown page in link:', `[${text}](${href})`, currentPageInfo.pageId)

		BuildInfo.foundFiles.push(locatedFile)

		let anchor = pageParts[3]
		if (anchor !== '')	{
			BuildInfo.pages[currentPageInfo.pageId].inPageLinks.push({ page: locatedFile, text, anchor })
		}

		// Change the extension to .html and add back the anchor
		href = bsToFs(linkPath  + '.html' + anchor)

		return defaultRenderer.link(href, title, text)
	}


	// Assume any other links are file paths that are not doc pages
	let filePath = Path.join(currentPageInfo.relPath, href)

	// Warn if the file does not exist
	let locatedFile = Path.resolve(Path.dirname(currentPageInfo.path), filePath)
	if (!Fs.existsSync(locatedFile))
		Logger.warn('Unknown link:', `[${text}](${href})`, currentPageInfo.pageId)

	BuildInfo.foundFiles.push(locatedFile)

	href = bsToFs(filePath)

	return defaultRenderer.link(href, title, text)
}

// -------------------------------------------------------------------

// Make image paths relative
renderer.image = function(href, title, text) {
	let imagePath = Path.normalize(Path.join(currentPageInfo.relPath, href))

	// Warn if the image does not exist
	let locatedImage = Path.resolve(Path.dirname(currentPageInfo.path), imagePath)
	if (!Fs.existsSync(locatedImage))
		Logger.warn('Unknown image:', `${text}  ${href}`, currentPageInfo.pageId)

	BuildInfo.foundFiles.push(locatedImage)

	return defaultRenderer.image(bsToFs(imagePath), title, text)
}

// -------------------------------------------------------------------

// Surround tables with a wrapper
renderer.table = function(header, body) {
	if (body) body = '<tbody>' + body + '</tbody>'

	return `<div class="table-wrapper"><table><thead>${header}</thead>${body}</table></div>`
}


// The sectionLevel will help us prevent matching the same header multiple times.
let sectionLevel = 0;

// Creating regular expressions is expensive so we create them once.
// Create 7 sections since that is the maximum heading level.
const sectionRegexps = new Array(7).fill().map((e, i) => new RegExp(`^(#{${i + 1}} )[^]*?(?:\\n(?=\\1)|$)`));

const sectionExtension = {
    name: 'sectionBlock',
    level: 'block',
    start(src) {
      // Match when # is at the beginning of a line.
      return src.match(/^#/m)?.index;
    },
    tokenizer(src) {
      const match = src.match(sectionRegexps[sectionLevel]);
      if (!match) {
        return;
      }


      sectionLevel++;
      // Tokenize text inside the section.
      // Only add sectionBlock token for headers one level up from current level.
      const tokens = this.lexer.blockTokens(match[0]);
      sectionLevel--;

      return {
        type: 'sectionBlock',
        raw: match[0],
        level: sectionLevel + 1,
        tokens
      };
    },
    renderer(token) {
      const tag = token.level === 1 ? 'article' : 'section';
      return `<${tag}>\n${this.parser.parse(token.tokens)}</${tag}>\n`;
    }
};

// -------------------------------------------------------------------

module.exports = function (text, info) {
	currentPageInfo = info
	tocGenerator = new PageTocGenerator()

	MarkedJs.marked.use({ renderer: renderer, extensions: [sectionExtension] })
    let renderedContent = MarkedJs.marked.parse(text)


	renderedContent = tocGenerator.renderTocs(renderedContent, currentPageInfo)

	return renderedContent
}
