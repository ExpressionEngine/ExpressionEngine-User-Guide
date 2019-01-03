.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Cookie Service
==============

.. contents::
  :local:
  :depth: 1

.. highlight:: php

.. versionadded:: 5.1.2

The Cookie service provides a convenient way to set and read
cryptographically-signed cookies. Setting cryptographically-signed cookies helps
ensure the cookies you set are not altered client-side.

Simple Examples
---------------

Set a cookie::

  ee('Cookie')->setSignedCookie('my_cookie_name', $data);

Retriving cookie data::

  ee('Cookie')->getSignedCookie('my_cookie_name');

Cookie Methods
---------------

.. namespace:: EllisLab\ExpressionEngine\Service\Cookie

.. class:: Cookie

.. method:: getSignedCookie($cookie_name, $xss_clean = FALSE)

  Gets cryptographically-signed cookie data by name.

  :param string $cookie_name: Cookie name
  :param boolean $xss_clean: Clean the data for XSS or not
  :returns: Cookie data, or FALSE if cookie not found or verified
  :rtype: mixed

.. method:: setSignedCookie($cookie_name, $cookie_data, $expire = NULL)

  Set cryptographically-signed cookies.

  :param string $cookie_name: Cookie name
  :param string $cookie_data: Cookie data
  :param int $expire: Cookie expiration in seconds
  :rtype: void
