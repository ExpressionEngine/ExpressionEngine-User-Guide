/*!
 * This source file is part of the open source project
 * ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2020, EllisLab, Inc. (https://packettide.com)
 * @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
 */

"use strict";

// -------------------------------------------------------------------
// closest() Polyfill
// -------------------------------------------------------------------

;(function() {
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.msMatchesSelector ||
									Element.prototype.webkitMatchesSelector;
		}

		if (!Element.prototype.closest) {
		Element.prototype.closest = function(s) {
			var el = this;

			do {
			if (el.matches(s)) return el;
			el = el.parentElement || el.parentNode;
			} while (el !== null && el.nodeType === 1);
			return null;
		};
	}
})();

// -------------------------------------------------------------------
// Global Functions
// -------------------------------------------------------------------

// Toggles the mobile menu visibility
function toggleMobileMenu() {
	var menuButton = document.querySelector('.mobile-menu-button');
	var menu = document.querySelector('.sidebar-container');

	menuButton.classList.toggle('close');

	var showMenu       = menuButton.classList.contains('close');
	menu.style.display = showMenu ? 'block' : 'none';

	if (showMenu) {
		setTimeout(function() {
			scrollActiveTocLinkIntoView();
		}, 10);
	}
}

function scrollActiveTocLinkIntoView() {
	var activePage = document.querySelector('li[data-active-page="true"]');

	if (activePage) {
		activePage.scrollIntoView(false);
	}
}

// -------------------------------------------------------------------
// Private
// -------------------------------------------------------------------

;(function() {

	// -------------------------------------------------------------------
	// Init
	// -------------------------------------------------------------------

	window.addEventListener('resize', function() {
		var sideBarContainer = document.querySelector('.sidebar-container');
		var menuButton       = document.querySelector('.mobile-menu-button');

		var menuButtonShown  = window.getComputedStyle(menuButton).getPropertyValue('display') == 'block';

		// Make sure the sidebar is visible if the sidebar is not acting as the mobile menu
		// This fixes a bug where the user would close the mobile menu,
		// then make the window size larger, causing the sidebar to be invisible.
		if (!menuButtonShown) {
			menuButton.classList.remove('close');
			sideBarContainer.style.display = '';
		}
	});

	// -------------------------------------------------------------------

	var items = document.querySelectorAll('.sidebar-toc li > ul');

	// Hide every toc ul that is not the active one
	for (var i = 0; i < items.length; i++) {
		;(function() {
			let item = items[i];

			item = item.closest('li');

			if (!item.classList.contains('active')) {
				closeNavItem(item);
			}

			item.addEventListener('click', function(event) {
				event.stopPropagation();
				expandNavItem(event);
			})
		})();
	}

	// Make the toc visible now that the uls have been hidden
	document.querySelector('.sidebar-toc').style.visibility = 'visible';

	// -------------------------------------------------------------------

	var hiddenTocs = document.querySelectorAll('.table-of-contents.collapse');

	// Hide any page TOCS that need to be hidden
	for (let i = 0; i < hiddenTocs.length; i++) {
		;(function() {
			var toc = hiddenTocs[i];

			var tocButton = toc.querySelector('.toc-overview-button');
			var tocList   = toc.querySelector('ul');

			if (!tocButton || !tocList) {
				return;
			}

			tocButton.addEventListener('click', function() {
				var show = (tocList.style.display != 'block');
				tocButton.innerText  = show ? 'Hide List' : 'Show List';
				tocList.style.display = show ? 'block' : 'none';
			});

			tocList.style.display = 'none';
		})();
	}

	// -------------------------------------------------------------------

	// Scroll the active page toc item into view

	scrollActiveTocLinkIntoView();

	// -------------------------------------------------------------------

	// Allow dropdown menus to work on touch

	var dropDownMenus = document.querySelectorAll('.dropdown');

	for (let i = 0; i < dropDownMenus.length; i++) {
		;(function() {
			const menu = dropDownMenus[i];

			menu.addEventListener('click', function(e) {
				e.stopPropagation();
				menu.classList.toggle('show');
			})

			var dropDown = menu.querySelector('.dropdown-menu');

			if (dropDown) {
				dropDown.addEventListener('click', function(e) {
					e.stopPropagation();
				})
			}
		})();
	}

	function hideDropdowns() {
		for (let i = 0; i < dropDownMenus.length; i++) {
			var menu = dropDownMenus[i];
			menu.classList.remove('show');
		}
	}

	document.addEventListener('touchstart', hideDropdowns);
	document.addEventListener('click', hideDropdowns);

	// -------------------------------------------------------------------
	// Methods
	// -------------------------------------------------------------------

	// Gets the current active page item in the toc
	function getActivePage() {
		return document.querySelector('li[data-active-page="true"]');
	}

	// Expands a toc list
	function expandNavItem(e) {
		function expand (item) {
			var ul = item.getElementsByTagName('ul')[0];

			item.classList.add('active');

			if (ul) {
				ul.style.display = 'block';
			}

			var parentEl = item.parentNode.closest('li');
			if (parentEl) {
				expand(parentEl);
			}
		}

		var item = e.currentTarget;
		var itemLink = item.querySelector('a');

		// Don't close the item is it's open and the user is not clicking the item head link
		if (e.target != item && e.target != itemLink && item.className == 'active') {
			return;
		}

		if (item.className == 'active') {
			var itemList = item.querySelector('ul');

			item.classList.remove('active');

			if (itemList) {
				itemList.style.display = 'none';
			}
		} else {
			closeAllNavItems();
			expand(item);

			var activePage = getActivePage();
			if (activePage) {
				activePage.classList.add('active');
			}
		}
	}

	// Closes a toc item list
	function closeNavItem(item) {
		item.classList.remove('active');

		var ul = item.getElementsByTagName('ul')[0];
		if (ul) {
			ul.style.display = 'none';
		}
	}

	// Closes all toc lists
	function closeAllNavItems() {
		var items = document.querySelectorAll('.sidebar-toc li > ul');

		for (var i = 0; i < items.length; i++) {
			var item = items[i];

			item = item.closest('li');
			closeNavItem(item);
		}
	}

	// -------------------------------------------------------------------

})();


;(function() {
	var parameters = document.querySelectorAll('.code-parameters');

	parameters.forEach(block => {
		block.querySelectorAll('h3').forEach(head => {
			var siblings = [];
			var nextEl = head.nextElementSibling;

			// Get all of the items next to the head until another head
			while (nextEl) {
				if (nextEl.matches('h3')) break;

				siblings.push(nextEl);

				nextEl = nextEl.nextElementSibling;
			}

			// Create a wrapper to wrap the items
			var wrapper = document.createElement('div')
			wrapper.classList.add('code-parameter')

			// Insert the wrapper before the head
			block.insertBefore(wrapper, head);

			// Add the head and it's siblings to the wrapper
			wrapper.appendChild(head)

			siblings.forEach(item => {
				wrapper.appendChild(item)
			})
		})
	});
})();
