/*!
 * This source file is part of the open source project
 * ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2019, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
 */

const CONFIG        = require('./config.js')
const Path          = require('path')
const MarkdownSlug  = require('markdown-slug')
const RenderEmbed = require('./embed-render.js')
const Fs            = require('fs')
const Logger       = require('./logger.js')
var parentPageInfo = "";


// Converts back slashes to forward slashes. Used to convert paths to URLs
const bsToFs = (p) => p.replace(/\\/g, '/')

// Gets the folder depth of the specified path
const dirDepth = (myDir) => myDir.split(Path.sep).length

const returnEmbedContents = (match, p1, p2, p3, offset, string) => {	
		console.log("Found Embed: " + p1);
	try {
		embedContents = Fs.readFileSync('./docs/'+p1, { encoding: 'utf8' });
		embedContents = RenderEmbed(embedContents, parentPageInfo);
	  } catch (err) {
		embedContents = "";
		Logger.warn('Unable to embed ' + p1 + ' on page:', parentPageInfo.path, 'Failed Embeds')
	  }
	return embedContents;
}
// Renders handlebar style template variables from an object
const renderTemplate = (template, vars, currentPageInfo) => {;
	parentPageInfo = currentPageInfo;
	for (let [key, value] of Object.entries(vars)) {
		template = template.replace(new RegExp('{{\\s*' + key + '\\s*}}', 'gi'), value)
	}

	
	template = template.replace(new RegExp('(?<!code>){{embed\:([^"\']*?)}}', 'gi'),returnEmbedContents);

	return template
}

// Gets the relative path to the source dir from a docs page
const getRelativeRootFromPage = (pagePath) => {
	let depth = dirDepth(pagePath) - dirDepth(Path.resolve(CONFIG.sourceDir))
	let relPath = ('..' + Path.sep).repeat(depth - 1)

	return relPath
}

// Returns a function that will slugify a heading and also handle future duplicate slugs when called again
const getSlugger = () => {
	var slugs = {}

	return (heading) => {
		let slug = MarkdownSlug(heading)
		// Increase the slug use count
		slugs[slug] = slugs[slug] == undefined ? 0 : slugs[slug] + 1

		// Add the count to the heading slug
		if (slugs[slug] > 0) {
			slug += '-' + slugs[slug]
		}

		return slug
	}
}

const relFromSource = (p) => Path.relative(CONFIG.sourceDir, p)

const pageUrlFunc = (p) => {
	var str = Path.relative(CONFIG.sourceDir, p);
	var new_url = str.replace('.md', '.html');
	return new_url;
}

module.exports = { dirDepth, bsToFs, renderTemplate, getSlugger, getRelativeRootFromPage, relFromSource, pageUrlFunc }
