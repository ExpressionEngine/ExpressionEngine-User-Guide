.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

**************
Plugin Changes
**************

.. highlight:: php

.. contents::
  :local:
  :depth: 1

Remove Plugin Info
==================

The ``$plugin_info`` array is no longer needed and will be ignored by 3.0. All
of this data should already be in your :doc:`addon.setup.php file </development/addon_setup_php_file>`
and will be read from there.

Typography Flag
===============

To make your plugin available as a typography plugin, you must add a ``plugin.typography``
key to your :doc:`addon.setup.php file </development/addon_setup_php_file>` array,
and assign it a value of ``TRUE``::

'plugin.typography' => TRUE

Install Plugin
==============

All plugins must be installed via the Add-On Manager before they can be used. If
your plugin is not working as expected, double check to make sure it is installed.
