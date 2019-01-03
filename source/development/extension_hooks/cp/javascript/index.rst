.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Javascript Controller Extension Hooks
=====================================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

cp_js_end
---------

.. function:: cp_js_end()

  Allows you add javascript to every Control Panel page.

  How it's called::

    $str = $this->extensions->call('cp_js_end');

  :returns: Javascript to add to the end of the control panel
  :rtype: String

  .. versionadded:: 2.1.2
