.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Category Group Details Tab
==========================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Developer --> Categories --> New/Edit Category Group -> Fields`


Permission Restrictions
-----------------------

* Access settings: Design & Content
* Channel categories: Create Categories
* Channel categories: Edit Categories
* Channel categories: Delete Categories

Fields
------

.. contents::
  :local:
  :depth: 1

.. Each Field

Type
~~~~

ExpressionEngine includes the following types of fields for use
in your Category fields:

#. **Text Input**: This is a single input line for text. It is the type
   of field you might use for a title, name, or other short information.
#. **Textarea**: This is a standard text entry box with multiple lines.
   This is often used for the body text of entries.
#. **Select Dropdown**: This creates a standard HTML <select> drop-down
   list. You can define the contents of the list manually or
   pre-populate it from another field.


Name
~~~~

This is the descriptive name for the field. This is a **required** field
and it may contain spaces or punctuation. Unlike the Field Name, the
label does not need to be unique within the system, so you can use the
same descriptive label on multiple fields in different field groups. The
label is what will be displayed next to the field on the entry form in
your PUBLISH page.

Short name
~~~~~~~~~~

This is the internal or "short name" for the field. This is a
**required** field and must be a single word with no spaces or
punctuation. The field name must be unique within the system, which
means that you cannot have two field groups each containing a field with
the field name of "body". The short name is typically used as the
variable name in your :doc:`/channel/channel_entries`

.. note:: Some words are reserved and cannot be used. Please
   see :doc:`/general/reserved_words` for details.

Require field?
~~~~~~~~~~~~~~

You may determine whether this field is required. If the field is
required and the user leaves it blank, upon submission they will receive
an error message prompting them to correct it.
