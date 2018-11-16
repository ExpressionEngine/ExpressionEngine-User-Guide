.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Member Module Settings Extension Hooks
======================================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

member_edit_preferences
-----------------------

.. function:: member_edit_preferences($element)

  Allows adding of preferences to user side preferences form by
  modifying the preference form template.

  How it's called::

    $element = ee()->extensions->call('member_edit_preferences', $element);

  :param string $element: Preference form template
  :returns: Modified preference form template (``$element``)
  :rtype: String

  .. versionadded:: 1.4.0

member_update_preferences
-------------------------

.. function:: member_update_preferences($data)

  Allows updating of added preferences via user side preferences form.

  How it's called::

    ee()->extensions->call('member_update_preferences', $data);
    if (ee()->extensions->end_script === TRUE) return;

  :param array $data: Array of data from standard form
  :rtype: Void

  .. versionadded:: 1.4.0
