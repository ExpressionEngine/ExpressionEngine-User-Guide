/*!
 * This source file is part of the open source project
 * ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2019, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
 */

const CONFIG       = require('./config.js')
const Path         = require('path')
const MarkdownSlug = require('markdown-slug')
const Fs          = require('fs')


// Converts back slashes to forward slashes. Used to convert paths to URLs
const bsToFs = (p) => p.replace(/\\/g, '/')

// Gets the folder depth of the specified path
const dirDepth = (myDir) => myDir.split(Path.sep).length

// Renders handlebar style template variables from an object
const renderTemplate = (template, vars) => {
	for (let [key, value] of Object.entries(vars)) {
		template = template.replace(new RegExp('{{\\s*' + key + '\\s*}}', 'gi'), value)
	}

	
	template = template.replace(new RegExp('{{include\:([^"\']*)}}', 'gi'),Fs.readFileSync('./docs/$1', { encoding: 'utf8' }));
	//find all {{template:$1}} instances as regex
	//get data from $1
	//replace tag with data from $1
	//continue

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

module.exports = { dirDepth, bsToFs, renderTemplate, getSlugger, getRelativeRootFromPage, relFromSource }
