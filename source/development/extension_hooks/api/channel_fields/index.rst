.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Channel Fields API Extension Hooks
===================================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

custom_field_modify_data
------------------------

.. function:: custom_field_modify_data(EE_Fieldtype $ft, $method, $data)

  Modify the main custom field data array before a custom field method is called.

  How it's called::

    $data = ee()->extensions->universal_call('custom_field_modify_data', $obj, $method, $data);

  :param object $ft: Fieldtype object that the method will be called on.
  :param string $method: Name of the method to be called
  :param mixed $data: Data passed to the fieldtype. Varies by method.
  :returns: Modified $data parameter
  :rtype: Mixed

  .. versionadded:: 2.7.0
