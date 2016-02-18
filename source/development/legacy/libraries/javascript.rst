################
Javascript Class
################

.. highlight:: php

***************
Class Reference
***************

.. class:: EE_Javascript

	The library is loaded using the following code::

		ee()->load->library('benchmark');

.. method:: set_global($var[, $val = ''])

	:param string $var: The variable name to add to the EE javascript object
	:param string $val: The value of the variable being added
	:rtype: void

	Add a variable to the EE javascript object.  Useful if you need to dynamically set variables for your external script.  Will intelligently resolve namespaces (i.e. ``filemanager.filelist``) so please use them.

.. method:: compile([$view_var = 'script_foot'[, $script_tags = TRUE]])

	:param string $view_var: The element to attach the foot to
	:param boolean $script_tags: Set to ``TRUE`` to output the ``<script>`` tags, otherwise doesn't add them
	:rtype: void

	Gather together all scripts needing to be output for the given ``$view_var``.

.. method:: get_global()

	:returns: The HTML markup containing our JS
	:rtype: string

	Prepares and returns the HTML+JS for injecting variables into the EE namespace.

.. method:: script_foot()

	:returns: The HTML markup containing our foot JS
	:rtype: string

	Prepares and returns the JS to be output in the foot.
