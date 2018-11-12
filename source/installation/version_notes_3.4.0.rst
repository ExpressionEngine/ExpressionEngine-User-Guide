.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

#######################
Version Notes for 3.4.0
#######################

With 3.4.0 we made some improvements to the security of the forums by adding additional CSRF checks. We have updated the forum themes, but if you have customized your forum theme you may need to update your HTML.

In ``forum_global/html_footer.html`` if you use the theme chooser you will need to wrap it in a ``<form>`` tag::

    <form method="post" action="{path:set_theme}">
        <input type="hidden" name="csrf_token" value="{csrf_token}" />
        <select name="theme" class="select" onchange="if (this.value != '') this.form.submit()">
        {include:theme_option_list}
        </select>
    </form>

In ``forum_threads/threads.html`` if you use the subscribe and unsubscribe feature you will need to add some JavaScript:

.. code-block:: javascript

    function post(path, params, method) {
        method = method || "post"; // Set method to post by default if not specified.

        // The rest of this code assumes you are not using a library.
        // It can be made less wordy if you use one.
        var form = document.createElement("form");
        form.setAttribute("method", method);
        form.setAttribute("action", path);

        for(var key in params) {
            if(params.hasOwnProperty(key)) {
                var hiddenField = document.createElement("input");
                hiddenField.setAttribute("type", "hidden");
                hiddenField.setAttribute("name", key);
                hiddenField.setAttribute("value", params[key]);

                form.appendChild(hiddenField);
             }
        }

        document.body.appendChild(form);
        form.submit();
    }

    function subscribe(el)
    {
    	var csrf_token = "{csrf_token}",
    	         parts = el.href.slice(0, -1).split('/'),
    		  topic_id = parts.pop(),
    		       url = parts.join('/');

    	post(url, {
    		topic_id: topic_id,
    		csrf_token: csrf_token
    	});

    	return false;
    }

And update your HTML::

    <a href="{path:subscribe}" onclick="return subscribe(this)"><b>{lang:subscribe}</b></a>