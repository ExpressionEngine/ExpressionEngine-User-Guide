.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

*****************
Fieldtype Changes
*****************
.. highlight:: php

.. contents::
  :local:
  :depth: 1

Add Fieldtypes to Addon.setup.php
=================================

For ExpressionEngine 3, you should enumerate your fieldtypes in your ``addon.setup.php``
file. To start, create a new 'fieldtypes' array in you addon.setup.php file. For
each fieldtype, list its shortname as a key and then an array of its name::

  'fieldtypes' => array(
    'rte' => array(
      'name' => 'Rich Text Editor'
    )
  )

Define Compatibility
====================

Changing from one field type to another can lead to unexpected results, as for
example switching from a file field to a date field. On the other hand, many
fieldtypes contain similar data, such as text.

If your fieldtypes stores a common datatype, you should list it in its compatibility
field::

  'fieldtypes' => array(
    'rte' => array(
      'name' => 'Rich Text Editor',
      'compatibility' => 'text'
    )
  )

Compatibility can be any string values, the commonly used ones are listed in
:ref:`this section<fieldtype_compatibility_options>` of the addon.setup.php documentation.

Update Settings Format
======================

The format for the fieldtype settings pages has been changed to the more consistent
:doc:`/development/shared_form_view` format. Please refer to the :ref:`Fieldtype Settings <fieldtype_settings>`
documentation for an example.

Use the Validation Service in Settings
======================================

ExpressionEngine 3.0 comes with a new :doc:`Validation Service </development/services/validation>`.
Your fieldtypes settings validation should return a result object from this service::

  function validate_settings($settings)
  {
    $validator = ee('Validation')->make(array(
        'size' => 'required|numeric'
    ));

    return $validator->validate($settings);
  }
