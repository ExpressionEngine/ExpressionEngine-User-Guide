.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Output Library Extension Hooks
==============================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

output_show_message
-------------------

.. function:: output_show_message($data, $output)

  Modify the output of front-end system messages.

  How it's called::

    if (ee()->extensions->active_hook('output_show_message') === TRUE)
    {
      $output = ee()->extensions->call('output_show_message', $data, $output);
    }

  :param array $data: Array of data describing the message
  :param string $output: HTML rendered from the default message template
  :returns: New rendered output for the message
  :rtype: String

  .. versionadded:: 3.2.0

template_types
--------------

See the Design controller's :func:`template_types`.
