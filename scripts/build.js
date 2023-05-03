/*!
 * This source file is part of the open source project
 * ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2019, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
 */

const Fs          = require('fs')
const Path        = require('path')

const gulp        = require('gulp')
const glob        = require('glob')
const Through2    = require('through2')
const FrontMatter = require('front-matter')
const replaceExt  = require('replace-ext')
const Yaml        = require('js-yaml')

const RenderMd     = require('./md-render.js')
const Logger       = require('./logger.js')
const CONFIG       = require('./config.js')

const { getSlugger, renderTemplate, getRelativeRootFromPage, relFromSource, bsToFs } = require('./utility.js')

// Used for saving build information from other files
global.BuildInfo = { }


// -------------------------------------------------------------------


// Build
module.exports = () => {
	Logger.reset()
	BuildInfo = { foundFiles: [], pages: {} }

	var masterToc = getMasterToc()

	// Get the page template
	let themeTemplate = GLOBAL_buildThemeFile || CONFIG.pageTemplatePath
	const pageTemplate = Fs.readFileSync(themeTemplate, { encoding: 'utf8' })

	// Get all the markdown files
	return gulp.src(CONFIG.sourceDir + '/**/*.md')

	// Build Each File
	.pipe(Through2.obj((file, _, cb) => {
		let pageId = relFromSource(file.path)
		console.time(pageId.green)

		let pageFM  = FrontMatter(file.contents.toString())
		let relPath = getRelativeRootFromPage(file.path)

		BuildInfo.pages[pageId] = { inPageLinks: [], headingSlugs: [] }

		let currentPageInfo = {
			pageId: pageId,
			path: file.path,
			relPath: relPath,
			codeLang: pageFM.attributes.lang || null,
			slugify: getSlugger()
		}


		let pageContent = pageFM.body

		// Use the first h1 in the page for the title
		let pageTitle = /^# *(?!#)(.*)/gm.exec(pageContent)
		pageTitle = pageTitle ? pageTitle[1] : 'Doc Page'

		// Render the markdown
		let pageHtml = RenderMd(pageContent, currentPageInfo)

		// Render the template
		let templateVariables = {
			...CONFIG.customVariables,

			page_title: pageTitle,
			page_content: pageHtml,
			page_path: pageId,
			root_dir: relPath,
			getting_started_toc: masterToc.make(file.path, relPath, "getting_started_toc"),
			the_fundamentals_toc: masterToc.make(file.path, relPath, "the_fundamentals_toc"),
			advanced_usage_toc: masterToc.make(file.path, relPath, "advanced_usage_toc"),
			development_toc: masterToc.make(file.path, relPath, "development_toc"),
			best_practices_toc: masterToc.make(file.path, relPath, "best_practices_toc"),
			community_toc: masterToc.make(file.path, relPath, "community_toc"),
		}

		let page = renderTemplate(pageTemplate, templateVariables, currentPageInfo)

		file.contents = Buffer.from(page)
		file.path     = replaceExt(file.path, '.html')

		console.timeEnd(pageId.green)

		cb(null, file)
	}))

	// Output the the new pages
	.pipe(gulp.dest(CONFIG.outputDir))

	// Log any messages or warnings when done
	.on('end', () => {
		let allFiles   = glob.sync(CONFIG.sourceDir + '/**/*.*', { ignore: [CONFIG.tocPath] }).map(e => Path.resolve(e))
		let foundFiles = BuildInfo.foundFiles.map(e => Path.resolve(e))

		// Warn for any unused files
		allFiles.filter(i => foundFiles.indexOf(i) < 0).forEach(e => Logger.warn('Unused file:', relFromSource(e)))

		// Check for broken in-page links
		for (let [pagePath, page] of Object.entries(BuildInfo.pages)) {
			for (let link of page.inPageLinks) {
				let outPagePath = relFromSource(link.page)
				let pageToCheck = BuildInfo.pages[outPagePath]

				if (pageToCheck) {
					if (!pageToCheck.headingSlugs.includes(link.anchor.trim().replace(/^#/, ''))) {
						Logger.warn('Link does not point to valid anchor', `[${link.text}](${outPagePath == pagePath ? '' : outPagePath}${link.anchor})`, pagePath)
					}
				}
			}
		}

		// Display any warnings
		Logger.showMessages()
		console.log('\nFinished Build! Did you remember to update Authors and Contributors?'.green)
	})
}


// -------------------------------------------------------------------
// Get master toc
// -------------------------------------------------------------------


function getMasterToc() {
	let toc

	const recurse = (item) => {
		if (item.href) {
			let itemPath = Path.resolve(Path.join(CONFIG.sourceDir, item.href))
			// Warn if the toc is linking to a file that does not exist
			if (!Fs.existsSync(itemPath)) {
				Logger.warn('Unknown file in toc:', relFromSource(itemPath), '_toc.yml')
			}

			BuildInfo.foundFiles.push(itemPath)

			item.href = relFromSource(replaceExt(itemPath, '.html'))
		}

		if (item.items) {
			for (let child of item.items)
				recurse(child)
		}
	}

	


	return {
		make: (page, relPath, tocSection) => {
			page = relFromSource(replaceExt(page, '.html'))

			const makeItem = (item) => {
				let isSelected    = (item.href && item.href == page)
				let isCurrentPage = isSelected

				// Create any sub item children
				let subItems = ''
				if (item.items) {
					subItems += '<ul>'
					for (let child of item.items) {
						let newChild = makeItem(child)
						isSelected = isSelected != true ? newChild.isSelected : isSelected
						subItems += newChild.html
					}
					subItems += '</ul>'
				}

				let itemHTml   = `<li ${isCurrentPage ? 'data-active-page="true"' : ''} class="${isSelected ? 'active' : ''}">`
				itemHTml += `<a ${item.href ? `href="${item.href ? bsToFs(Path.join(relPath + item.href)) : ''}"` : ''}>${item.name}</a>`

				itemHTml += subItems

				return { html: itemHTml + '</li>', isSelected: isSelected }
			}

			let html = ''
			let tocSectionPath;

			switch(tocSection) {
			case 'getting_started_toc':
				tocSectionPath = 'docs/toc_sections/_getting_started_toc.yml';
				break;
			case 'the_fundamentals_toc':
				tocSectionPath = 'docs/toc_sections/_the_fundamentals_toc.yml';
				break;
			case 'advanced_usage_toc':
				tocSectionPath = 'docs/toc_sections/_advanced_usage_toc.yml';
				break;
			case 'development_toc':
				tocSectionPath = 'docs/toc_sections/_development_toc.yml';
				break;
			case 'best_practices_toc':
				tocSectionPath = 'docs/toc_sections/_best_practices_toc.yml';
				break;
			case 'community_toc':
				tocSectionPath = 'docs/toc_sections/_community_toc.yml';
				break;
			}
			
			
			try {
				toc = Yaml.safeLoad(Fs.readFileSync(tocSectionPath, 'utf8'))
			} catch (e) {
				throw 'Error reading _toc.yml:\n' + e
			}

			for (let item of toc)
			recurse(item)

			for (let item of toc)
				html += makeItem(item).html

			return '<ul>' + html + '</ul>'
		}
	}
}
