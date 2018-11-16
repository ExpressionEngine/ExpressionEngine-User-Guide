.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Create/Edit
============

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Members --> Member Fields --> New/Edit`

.. Overview


.. Screenshot (optional)

.. Permissions

Permission Restrictions
-----------------------

Fields
------

.. contents::
  :local:
  :depth: 1

.. Each Field

Type
~~~~

You may choose what type of field this is. There are three choices:

1. Text Input: This is a single input line for text. It is the type of field you might use for a title, name, or other short information.
2. Textarea: This is a standard text entry box with multiple lines. This is what you would use for larger amount of text.
3.  Drop-down List: This creates a standard HTML <select> drop-down list. You will need to define contents of the list in the provided form.

Name
~~~~

This is the descriptive name for the field. It will appear as the field title. This is a required field and it may contain spaces or punctuation.

Short name
~~~~~~~~~~

This is the internal or 'short name' for the field. This is a required field and must be a single word with no spaces or punctuation. The short name is typically used as the variable name in your member profile and registration templates.

.. note:: The fields are typically added automatically by the system so you do not need to edit the templates.

.. note:: Some words are reserved and cannot be used. Please see Reserved Words for details.


You may optionally add a description of the field, which can be useful if you need to provide instructions for the field’s use.

Require field?
~~~~~~~~~~~~~~

You may optionally add a description of the field, which can be useful if you need to provide instructions for the field’s use.

Exclude from Anonymization Actions?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

When enabled, the contents of the field will **not** be removed it the user requests to be 'forgotten'. Otherwise the custom field data will be deleted if the user is anonymized.

Show in Registration
~~~~~~~~~~~~~~~~~~~~

When enabled, the field will be available in the public member registration form.

Show in Profile
~~~~~~~~~~~~~~~

When enabled, the field will be available within the Member Profile areas (both the public one and the My Account page in the Control Panel).






