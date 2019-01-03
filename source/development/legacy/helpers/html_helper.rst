.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

###########
HTML Helper
###########

.. highlight:: php

The HTML Helper file contains functions that assist in working with HTML. This helper is loaded using the following code::

	ee()->load->helper('html');

*******************
Available Functions
*******************

.. function:: heading([$data = ''[, $h = '1'[, $attributes = '']]])

	:param	string	$data: Content
	:param	string	$h: Heading level
	:param	array	$attributes: HTML attributes
	:returns:	HTML heading tag
	:rtype:	string

	Lets you create HTML heading tags. The first parameter will contain the data, the second the size of the heading. Example::

		echo heading('Welcome!', 3);

	The above would produce: <h3>Welcome!</h3>

	Additionally, in order to add attributes to the heading tag such as HTML classes, ids or inline styles, a third parameter is available::

		echo heading('Welcome!', 3, 'class="pink"')

	The above code produces:

	.. code-block:: html

		<h3 class="pink">Welcome!<h3>

.. function:: img([$src = ''[, $index_page = FALSE[, $attributes = '']]])

	:param	string	$src: Image source data
	:param	bool	$index_page: Whether to treat $src as a routed URI string
	:param	array	$attributes: HTML attributes
	:returns:	HTML image tag
	:rtype:	string

	Lets you create HTML ``<img />`` tags. The first parameter contains the image source. Example::

		echo img('images/picture.jpg'); // gives <img src="http://site.com/images/picture.jpg" />

	There is an optional second parameter that is a ``TRUE``/``FALSE`` value that specifics if the ``src`` should have the page specified by ``$config['index_page']`` added to the address it creates. Presumably, this would be if you were using a media controller::

		echo img('images/picture.jpg', TRUE); // gives <img src="http://site.com/index.php/images/picture.jpg" alt="" />

	Additionally, an associative array can be passed to the ``img()`` function for complete control over all attributes and values. If an ``alt`` attribute is not provided, CodeIgniter will generate an empty string.

	Example::

		$image_properties = array(
			'src' 	=> 'images/picture.jpg',
			'alt' 	=> 'Me, demonstrating how to eat 4 slices of pizza at one time',
			'class' => 'post_images',
			'width' => '200',
			'height'=> '200',
			'title' => 'That was quite a night',
			'rel' 	=> 'lightbox'
		);

		img($image_properties);
		// <img src="http://site.com/index.php/images/picture.jpg" alt="Me, demonstrating how to eat 4 slices of pizza at one time" class="post_images" width="200" height="200" title="That was quite a night" rel="lightbox" />

.. function:: link_tag([$href = ''[, $rel = 'stylesheet'[, $type = 'text/css'[, $title = ''[, $media = ''[, $index_page = FALSE]]]]]])

	:param	string	$href: What are we linking to
	:param	string	$rel: Relation type
	:param	string	$type: Type of the related document
	:param	string	$title: Link title
	:param	string	$media: Media type
	:param	bool	$index_page: Whether to treat $src as a routed URI string
	:returns:	HTML link tag
	:rtype:	string

	Lets you create HTML ``<link />`` tags. This is useful for stylesheet links, as well as other links. The parameters are ``href``, with optional ``rel``, ``type``, ``title``, ``media`` and ``index_page``.

	``index_page`` is a boolean value that specifies if the ``href`` should have the page specified by ``$config['index_page']`` added to the address it creates.

	Example::

		echo link_tag('css/mystyles.css');
		// gives <link href="http://site.com/css/mystyles.css" rel="stylesheet" type="text/css" />

	Further examples::

		echo link_tag('favicon.ico', 'shortcut icon', 'image/ico');
		// <link href="http://site.com/favicon.ico" rel="shortcut icon" type="image/ico" />

		echo link_tag('feed', 'alternate', 'application/rss+xml', 'My RSS Feed');
		// <link href="http://site.com/feed" rel="alternate" type="application/rss+xml" title="My RSS Feed" />

	Additionally, an associative array can be passed to the ``link()`` function for complete control over all attributes and values::

		$link = array(
			'href'	=> 'css/printer.css',
			'rel'	=> 'stylesheet',
			'type'	=> 'text/css',
			'media'	=> 'print'
		);

		echo link_tag($link);
		// <link href="http://site.com/css/printer.css" rel="stylesheet" type="text/css" media="print" />


.. function:: ul($list[, $attributes = ''])

	:param	array	$list: List entries
	:param	array	$attributes: HTML attributes
	:returns:	HTML-formatted unordered list
	:rtype:	string

	Permits you to generate ordered or unordered HTML lists from simple or multi-dimensional arrays. Example::

		$list = array(
			'red',
			'blue',
			'green',
			'yellow'
		);

		$attributes = array(
			'class'	=> 'boldlist',
			'id'	=> 'mylist'
		);

		echo ul($list, $attributes);

	The above code will produce this:

	.. code-block:: html

		<ul class="boldlist" id="mylist">
			<li>red</li>
			<li>blue</li>
			<li>green</li>
			<li>yellow</li>
		</ul>

	Here is a more complex example, using a multi-dimensional array::

		$attributes = array(
			'class'	=> 'boldlist',
			'id'	=> 'mylist'
		);

		$list = array(
			'colors'  => array(
				'red',
				'blue',
				'green'
			),
			'shapes'  => array(
				'round',
				'square',
				'circles' => array(
					'ellipse',
					'oval',
					'sphere'
				)
			),
			'moods'  => array(
				'happy',
				'upset' => array(
					'defeated' => array(
						'dejected',
						'disheartened',
						'depressed'
					),
					'annoyed',
					'cross',
					'angry'
				)
			)
		);

		echo ul($list, $attributes);

	The above code will produce this:

	.. code-block:: html

		<ul class="boldlist" id="mylist">
			<li>colors
				<ul>
					<li>red</li>
					<li>blue</li>
					<li>green</li>
				</ul>
			</li>
			<li>shapes
				<ul>
					<li>round</li>
					<li>suare</li>
					<li>circles
						<ul>
							<li>elipse</li>
							<li>oval</li>
							<li>sphere</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>moods
				<ul>
					<li>happy</li>
					<li>upset
						<ul>
							<li>defeated
								<ul>
									<li>dejected</li>
									<li>disheartened</li>
									<li>depressed</li>
								</ul>
							</li>
							<li>annoyed</li>
							<li>cross</li>
							<li>angry</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>

.. function:: ol($list, $attributes = '')

	:param	array	$list: List entries
	:param	array	$attributes: HTML attributes
	:returns:	HTML-formatted ordered list
	:rtype:	string

	Identical to :func:`ul()`, only it produces the ``<ol>`` tag for ordered lists instead of ``<ul>``.

.. function:: meta([$name = ''[, $content = ''[, $type = 'name'[, $newline = "\n"]]]])

	:param	string	$name: Meta name
	:param	string	$content: Meta content
	:param	string	$type: Meta type
	:param	string	$newline: Newline character
	:returns:	HTML meta tag
	:rtype:	string

	Helps you generate meta tags. You can pass strings to the function, or simple arrays, or multidimensional ones.

	Examples::

		echo meta('description', 'My Great site');
		// Generates:  <meta name="description" content="My Great Site" />

		echo meta('Content-type', 'text/html; charset=utf-8', 'equiv');
		// Note the third parameter.  Can be "equiv" or "name"
		// Generates:  <meta http-equiv="Content-type" content="text/html; charset=utf-8" />

		echo meta(array('name' => 'robots', 'content' => 'no-cache'));
		// Generates:  <meta name="robots" content="no-cache" />

		$meta = array(
			array(
				'name' => 'robots',
				'content' => 'no-cache'
			),
			array(
				'name' => 'description',
				'content' => 'My Great Site'
			),
			array(
				'name' => 'keywords',
				'content' => 'love, passion, intrigue, deception'
			),
			array(
				'name' => 'robots',
				'content' => 'no-cache'
			),
			array(
				'name' => 'Content-type',
				'content' => 'text/html; charset=utf-8', 'type' => 'equiv'
			)
		);

		echo meta($meta);
		// Generates:
		// <meta name="robots" content="no-cache" />
		// <meta name="description" content="My Great Site" />
		// <meta name="keywords" content="love, passion, intrigue, deception" />
		// <meta name="robots" content="no-cache" />
		// <meta http-equiv="Content-type" content="text/html; charset=utf-8" />


.. function:: doctype([$type = 'xhtml1-strict'])

	:param	string	$type: Doctype name
	:returns:	HTML DocType tag
	:rtype:	string

	Helps you generate document type declarations, or DTD's. XHTML 1.0 Strict is used by default, but many doctypes are available.

	Example::

		echo doctype(); // <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

		echo doctype('html4-trans'); // <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

	The following is a list of doctype choices.

	=============================== =================== ==================================================================================================================================================
	Document type                   Option              Result
	=============================== =================== ==================================================================================================================================================
	XHTML 1.1                       xhtml11             <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
	XHTML 1.0 Strict                xhtml1-strict       <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
	XHTML 1.0 Transitional          xhtml1-trans        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	XHTML 1.0 Frameset              xhtml1-frame        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
	HTML 5                          html5               <!DOCTYPE html>
	HTML 4 Strict                   html4-strict        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
	HTML 4 Transitional             html4-trans         <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
	HTML 4 Frameset                 html4-frame         <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
	=============================== =================== ==================================================================================================================================================

.. function:: br([$count = 1])

	:param	int	$count: Number of times to repeat the tag
	:returns:	HTML line break tag
	:rtype:	string

	Generates line break tags (``<br />``) based on the number you submit. Example::

		echo br(3);

	The above would produce:

	.. code-block:: html

		<br /><br /><br />

	.. deprecated:: 3.2.0
		Use the native ``str_repeat()`` in combination with ``<br />`` instead.

.. function:: nbs([$num = 1])

	:param	int	$num: Number of space entities to produce
	:returns:	A sequence of non-breaking space HTML entities
	:rtype:	string

	Generates non-breaking spaces (``&nbsp;``) based on the number you submit. Example::

		echo nbs(3);

	The above would produce:

	.. code-block:: html

		&nbsp;&nbsp;&nbsp;

	.. deprecated:: 3.2.0
	 	Use the native ``str_repeat()`` in combination with ``&nbsp;`` instead.
