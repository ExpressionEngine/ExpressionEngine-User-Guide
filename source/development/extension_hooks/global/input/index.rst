.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Input Library Extension Hooks
=============================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

set_cookie_end
--------------

.. function:: set_cookie_end($data)

  Take control of setting cookies after cookie parameters have been
  normalized according to the cookie configuration settings.

  How it's called::

    ee()->extensions->call('set_cookie_end', $data);
    if (ee()->extensions->end_script === TRUE) return;

  :param array $data: Array of prepped cookie parameters, which include
    the following keys: ``prefix``, ``name``, ``value``, ``expire``,
    ``path``, ``domain``, ``secure_cookie``
  :rtype: Void

  .. versionadded:: 2.5.0
