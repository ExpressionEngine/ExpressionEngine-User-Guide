Create/Edit Category Groups
===========================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Developer --> Categories --> New/Edit Category Group`

.. Overview


.. Screenshot (optional)

.. Permissions

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

The channel form is broken out into 3 tabs: Details, Permissions, Fields.

Details tab
***********

Name
~~~~

Field group name

HTML formatting
~~~~~~~~~~~~~~~

This setting determines how raw HTML code within custom category fields
is handled. There are three options:

#. **Convert HTML into character entities**: This will convert the HTML
   tags so that they will display as plain text on a page when viewed.
   This would be useful if you want to display example code often.
#. **Allow only safe HTML**: This will allow "safe" HTML (<b>, <i>, <u>,
   <em>, <strike>, <strong>, <pre>, <code>, <blockquote>, <h2>, <h3>,
   <h4>, <h5>, <h6>) to be kept so that they are interpreted by the
   browser when the entry is viewed. All other HTML is converted to
   character entities and the raw code will be seen upon viewing.
#. **Allow ALL HTML**: This leaves the HTML code as written and the code
   will then be interpreted by the browser when the entry is viewed.


Exclude group from?
~~~~~~~~~~~~~~~~~~~

Both channel entries and files can be assigned to categories, the categories available are limited to the member group(s) assigned.

Some category groups may only make sense for files and some may only make sense for entries.  With this setting, you can set the category group not to show as an option available when assigning channel
or upload preferences.

Permissions tab
***************

Edit Categories
~~~~~~~~~~~~~~~

Member groups who have "Can Edit Categories" privileges will be
displayed in this list. You can select or deselect from these member
groups to selectively allow or disallow access to editing categories
within this group.

Delete Categories
~~~~~~~~~~~~~~~~~

Member groups who have "Can Delete Categories" privileges will be
displayed in this list. You can select or deselect from these member
groups to selectively allow or disallow access to deleting categories
within this group.


Fields tab
**********

Add Field
~~~~~~~~~

Opens the **New Category Field** model.


Modal Fields
------------

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

