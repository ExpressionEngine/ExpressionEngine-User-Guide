/**
 * @description
 * Adopted from: Vanilla Javascript Tabs
 *
 * @class
 * @param {string} options.elem - HTML class of the tabs containers
 * @param {number} [options.open = 0] - Render the tabs with this item open
 */
var Tabs = function(options) {
    var elms         = document.querySelectorAll('.' + options.elem),
        open         = options.open || 0,
        titleClass   = 'tab',
        activeClass  = 'tab-active',
        contentClass = 'js-tabs__content';
        
        
    render();
    
    /**
     * Initial rendering of the tabs.
     */
    function render(n) {

        [].forEach.call(elms, function(div) {
            

            var tabsNum = div.querySelectorAll('.' + titleClass).length;
            var init = (n == null) ? checkTab(open) : checkTab(n);

            div.addEventListener("click", function(e){
                if (e.target.className.indexOf(titleClass) === -1) return;
                e.preventDefault();
                openTab(e.target.getAttribute('data-index') , div, tabsNum);
            });
            
            var maxTabContentsHeight = 0;
            [].forEach.call(div.querySelectorAll('.js-tabs__content'), function(div) {
                if(div.clientHeight > maxTabContentsHeight){
                    maxTabContentsHeight = div.clientHeight;
                }
            });

            [].forEach.call(div.querySelectorAll('.js-tabs__content'), function(div) {
                div.style.height = maxTabContentsHeight + "px";
            });

            

    
            for (var i = 0; i < tabsNum; i++) {
                div.querySelectorAll('.' + titleClass)[i].setAttribute('data-index', i);
                if (i === init) openTab(i , div, tabsNum);
            }

            


        });
    }

   
    /**
     * Hide all tabs and re-set tab titles.
     */
    function reset(div) {
        [].forEach.call(div.querySelectorAll('.' + contentClass), function(item) {
            item.style.display = 'none';
        });
        
        [].forEach.call(div.querySelectorAll('.' + titleClass), function(item) {
            item.className = removeClass(item.className, activeClass);
        });
    }
    
    /**
     * Utility function to remove the open class from tab titles.
     *
     * @param {string} str - Current class.
     * @param {string} cls - The class to remove.
     */
    function removeClass(str, cls) {
        var reg = new RegExp('(\ )' + cls + '(\)', 'g');
        return str.replace(reg, '');
    }

    /**
     * Utility function to remove the open class from tab titles.
     *
     * @param n - Tab to open.
     */
    function checkTab(n, tabsNum) {
        return (n < 0 || isNaN(n) || n > tabsNum) ? 0 : n;
    }
    
    /**
     * Opens a tab by index.
     * 
     * @param {number} n - Index of tab to open. Starts at 0.
     * 
     * @public
     */
    function openTab(n , div, tabsNum) {
        reset(div);

        var i = checkTab(n, tabsNum);

        div.querySelectorAll('.' + titleClass)[i].className += ' ' + activeClass;
        div.querySelectorAll('.' + contentClass)[i].style.display = '';
    }

    /**
     * Updates the tabs.
     * 
     * @param {number} n - Index of tab to open. Starts at 0.
     * 
     * @public
     */
    function update(n) {
        destroy(div);
        reset(div);
        render(n);
    }

    /**
     * Removes the listeners from the tabs.
     * 
     * @public
     */
    function destroy(div) {
        div.removeEventListener('click', onClick);
    }

    return {
        open: openTab,
        update: update,
        destroy: destroy
    };
};
