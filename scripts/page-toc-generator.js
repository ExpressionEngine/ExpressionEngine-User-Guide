/*!
 * This source file is part of the open source project
 * ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2019, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
 */

const listItem       = require('list-item')
const Marked         = require('marked')

const Logger         = require('./logger.js')
const { getSlugger } = require('./utility.js')

const headingReg     = /^ {0,2}(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/
const tocTagRegex    = /^\[ *TOC(?:=(\d)(?:-(\d))?)? *(hide)? *\]/gm


// Renders all toc tags in a page and also returns all the headings in a page
function renderPage(pageContent, pageInfo) {
	let Slugify  = getSlugger()
	let tocs     = {}
	let headings = []
	let tocCount = 0

	// Get all the toc tags in the page and replace them with a unique id for use later
	pageContent = pageContent.replace(tocTagRegex, (match, g1, g2, g3) => {
		let level    = g1 ? 1*g1 : 2
		let maxLevel = g2 ? 1*g2 : level
		maxLevel = maxLevel < level ? level : maxLevel

		// Store the tocs information and id
		let id = `{{PAGE_TOC_ID_${tocCount}}}`
		tocs[id] = { level: level, maxLevel: maxLevel, hide: g3 == 'hide', items: [], state: 0 }

		tocCount += 1

		return id
	})

	let lines = pageContent.split(/\r?\n/)

	// Add the headings to the tocs
	for (let line of lines) {
		let heading = headingReg.exec(line)

		let tocTag = /\{\{PAGE_TOC_ID_(\d+)\}\}/.exec(line)
		// If there's a toc tag, it can now start accepting headings
		if (tocTag && tocs[tocTag[0]]) {
			tocs[tocTag[0]].state = 1
		}

		// Is this line a heading?
		if (heading) {
			heading = { level: heading[1].length, content: heading[2], slug: Slugify(heading[2]) }

			headings.push(heading)

			// Add the heading to any tocs that need it
			for (let key of Object.keys(tocs)) {
				// Is the toc ready for headings?
				if (tocs[key].state != 1) continue

				// If the heading is higher up than the toc, stop accepting headings.
				if (heading.level < tocs[key].level) {
					tocs[key].state = 2
					continue
				}

				// Add the heading to the toc if it's within the tocs range
				if (heading.level >= tocs[key].level && heading.level <= tocs[key].maxLevel) {
					tocs[key].items.push(heading)
				}
			}
		}
	}

	// Replace the temporary toc ids with the new tocs
	for (let [key, toc] of Object.entries(tocs)) {
		let li   = listItem()
		let list = ''

		// Generate a markdown toc from the tocs headings
		for (let i in toc.items) {
			let heading = toc.items[i]
			// Flatten the headings so that they start at zero
			var lvl = heading.level - toc.level;
			let prevLvl = toc.items[i - 1] ? toc.items[i - 1].level - toc.level : false
			// Don't let smaller headings jump inward by more than one
			if (prevLvl && prevLvl + 1 < lvl) {
				lvl = lvl - (prevLvl + 1)
			}

			list += li(lvl, `[${heading.content}](#${heading.slug})`) + '\n'
		}

		if (toc.items.length == 0) {
			Logger.warn('[TOC] tag did not display anything', '', pageInfo.pageId)
		}

		let start = toc.hide ? '<div class="table-of-contents collapse"><div class="toc-overview-button">Show List</div>' : '<div class="table-of-contents">'
		// Render the list as html
		let tocContent = start + Marked(list) + '</div>'
		// Replace the temporary id with the new html
		pageContent    = pageContent.replace(key, tocContent)
	}

	return {
		headings: headings,
		content: pageContent
	}
}


module.exports = { renderPage }
