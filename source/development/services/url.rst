CP\\URL Service
===============

.. contents::
  :local:
  :depth: 1

.. highlight:: php

Simple Example
--------------

Building URLs in the Control Panel is a common, but exacting task. We have a
CP\\URL Service to make building these URLs simple. For example::

  $url = ee('CP/URL', 'publish/create/1');

The service automatically takes care of appending the session ID, if it is
required. We also provide means of adding arbitrary query string variables::

  $url = ee('CP/URL', 'publish/edit', array('filter_by_channel' => 1));

Or::

  $url = ee('CP/URL', 'publish/edit')
  	->setQueryStringVariable('filter_by_channel', 1);

CP\\URL Service Methods
-----------------------

.. namespace:: EllisLab\ExpressionEngine\Library\CP

.. class:: URL

.. method:: setQueryStringVariable($key, $value)

  Sets a key and value which will become the Query String of the request

  :param string $key: The name of the query string variable
  :param string $value: The value of the query string variable
  :returns: $this
  :rtype: URL

.. method:: addQueryStringVariables($values)

  Sets a values in bulk which will become the Query String of the request

  :param array $values: An associative array of keys and values
  :returns: $this
  :rtype: URL

.. method:: compile()

  Compiles and returns the URL as a string. Typically this is used when you
  need to use a URL as an array key, or want to json_encode() a URL.

  :returns: string
  :rtype: The URL
