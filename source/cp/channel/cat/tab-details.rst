Category Group Details Tab
==========================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Developer --> Categories --> New/Edit Category Group -> Details`

.. Overview


.. Screenshot (optional)

.. Permissions

Permission Restrictions
-----------------------

* Access settings: Design & Content
* Channel categories: Create Categories
* Channel categories: Edit Categories
* Channel categories: Delete Categories



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