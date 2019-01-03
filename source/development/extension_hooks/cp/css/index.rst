.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

CSS Controller Extension Hooks
==============================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

cp_css_end
----------

.. function:: cp_css_end()

  Allows you add custom CSS to every Control Panel page::

    $str = $this->extensions->call('cp_css_end');

  :returns: CSS to add to every Control Panel page
  :rtype: String

  .. versionadded:: 2.1.2
