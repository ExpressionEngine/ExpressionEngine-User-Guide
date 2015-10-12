Create/Edit Category Groups
===========================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Developer Tools --> Channel Manager --> Category Groups --> New/Edit Category Groups`

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

Exclude group from?
~~~~~~~~~~~~~~~~~~~

If you choose an option from this drop down list, you can pick one item
to to keep a particular member group from being able to assign channel
or upload preferences.