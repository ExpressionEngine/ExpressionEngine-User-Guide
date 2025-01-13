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

const tocTagRegex    = /^\[ *TOC(?:=(\d)(?:-(\d))?)? *(hide)? *\]/

class PageTocGenerator {

	// -------------------------------------------------------------------

	constructor() {
		this.tocs     = {}
		this.tocCount = 0
	}

	// -------------------------------------------------------------------

	// Attempts to get a toc tag from the specified text.
	getTag(text) {
		var parts = tocTagRegex.exec(text)

		if (!parts) {
			return false
		}

		let level    = parts[1] ? 1*parts[1] : 2
		let maxLevel = parts[2] ? 1*parts[2] : level
		maxLevel = maxLevel < level ? level : maxLevel

		let id = `{{PAGE_TOC_ID_${this.tocCount}}}`
		this.tocs[id] = { level: level, maxLevel: maxLevel, hide: parts[3] == 'hide', items: [], receivesHeadings: true }

		this.tocCount += 1

		return id
	}

	// -------------------------------------------------------------------

	// Adds the heading to any tocs that need it
	addHeading(text, level, slug) {
		let heading = { level: level, content: text, slug: slug }

		for (let key of Object.keys(this.tocs)) {
			// Is the toc ready for headings?
			if (!this.tocs[key].receivesHeadings) continue

			// If the heading is higher up than the toc, stop accepting headings.
			if (heading.level < this.tocs[key].level) {
				this.tocs[key].receivesHeadings = false
				continue
			}

			// Add the heading to the toc if it's within the tocs range
			if (heading.level >= this.tocs[key].level && heading.level <= this.tocs[key].maxLevel) {
				this.tocs[key].items.push(heading)
			}
		}
	}

	// -------------------------------------------------------------------

	renderTocs(pageContent, currentPageInfo) {
		// Replace the temporary toc ids with the new tocs
		for (let [key, toc] of Object.entries(this.tocs))
		{
			let li   = listItem()
			let list = ''

			// Generate a markdown toc from the tocs headings
			for (let i in toc.items)
			{
				let heading = toc.items[i]

				// Flatten the headings so that they start at zero
				let lvl = heading.level - toc.level;
				let prevLvl = toc.items[i - 1] ? toc.items[i - 1].level - toc.level : false

				// Don't let smaller headings jump inward by more than one
				if (prevLvl && prevLvl + 1 < lvl) {
					lvl = lvl - (prevLvl + 1)
				}

				// Escape markdown link characters. Prevents render problems when the heading content has a markdown link in it.
				let escapedContent = heading.content.replace(/(\[|\(|\)|\])/g, '\\$1')

				list += li(lvl, `[${escapedContent}](#${heading.slug})`) + '\n'
			}

			if (toc.items.length == 0) {
				Logger.warn('[TOC] tag did not display anything', '', currentPageInfo.pageId)
			}

			let start = toc.hide ? '<div class="table-of-contents collapse"><div class="toc-overview-button">Show List</div>' : '<div class="table-of-contents">'
			// Render the list as html
			let tocContent = start + Marked.marked.parse(list) + '</div>'
			// Replace the temporary id with the new html
			pageContent    = pageContent.replace(key, tocContent)
		}

		return pageContent
	}

	// -------------------------------------------------------------------
}


module.exports = PageTocGenerator
