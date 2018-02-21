Create Template
===============

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Developer --> Templates --> Create New Template`

.. Overview


.. Screenshot (optional)

.. Permissions

Permission Restrictions
-----------------------

* Access settings: Design & Content
* Template Management Allowed actions: Create New Templates
* Template Management Allowed template groups

Fields
------

.. contents::
  :local:
  :depth: 1

.. Each Field

Name
~~~~

The name of the Template. This must be a single word with no spaces. You may
use the letters a-z, the numbers 0-9, and the underscore and hyphen/dash
characters. You should refrain from creating all-numeric Template names as they
can cause confusion with Entry IDs used in URLs.

.. _template-type-label:

Type
~~~~

Here you may specify the type of Template:

-  **Webpage**: This is the most common type of Template. Unless you
   specifically need one of the other two types you should use this one.
-  **CSS**: This type is used for Stylesheets. It tells
   ExpressionEngine to serve the Template as "text/css" MIME type.
   Further, the Template will *not* be parsed for EE Tags like normal.
   The Template is served "as-is".
-  **RSS Page**: Used for RSS and Atom syndication feeds. It tells
   ExpressionEngine to serve the Template as "text/xml" MIME type.
-  **JavaScript**: Used for outputting JavaScript code. It tells
   ExpressionEngine to send "text/javascript" MIME type server headers
   when being viewed.
-  **Static**: Used for static content with absolutely no
   ExpressionEngine rendered tags. Useful for HTML design elements
   embedded in other templates.
-  **XML**: Used for outputting XML pages with EE. It tells
   ExpressionEngine to send "text/xml" MIME type server headers when
   being viewed.

Duplicate existing template?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You may choose one of your existing Templates to duplicate its contents. The
options are listed by Template\_Group/Template.
