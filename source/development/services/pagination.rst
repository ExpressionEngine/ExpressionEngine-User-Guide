CP\\Pagination Service
=====================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

Simple Example
--------------

Adding pagination to the control panel is a common task and we created a
pagination service to assist. This service follows our `style-guide
<https://ellislab.com/style-guide/c/listings#pagination>`_ handling all the
mathematical calculations. All you need is the number of items you are going to
paginate and a URL object::

  $base_url = ee('CP/URL', 'publish/edit');
  $pagination = ee('CP/Pagination')->make($total_count)
  	->render($base_url);

CP\Pagination Service Methods
-----------------------------

.. class:: EllisLab\\ExpressionEngine\\Library\\CP\\Pagination

.. method:: perPage($per_page)

  Sets the number of items per page

  :param int $per_page: The number of items per page
  :returns: $this
  :rtype: Alert

.. method:: currentPage($current_page)

  Sets page number being displayed

  :param int $current_page: The current page (defaults to 1)
  :returns: $this
  :rtype: Alert

.. method:: queryStringVariable($page_variable)

  Sets the query string variable name

  :param string $page_variable: The name of the page variable in the query string (defaults to 'page')
  :returns: $this
  :rtype: Alert

.. method:: displayPageLinks($pages_to_display)

  Sets the number of numbered pages to calculate

  :param int $pages: The number of numbered pages to calculate (defaults to 3)
  :returns: $this
  :rtype: Alert

.. method:: render($base_url)

  Renders the pagination to HTML

  :param Url $base_url: A CP\URL object
  :returns: The rendered HTML of the pagination
  :rtype: string
