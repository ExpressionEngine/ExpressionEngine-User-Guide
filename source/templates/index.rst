##########################
Template Language Overview
##########################

This page is a quick overview of the syntax and terminology used
throughout the user guide when talking about ExpressionEngine Templates
(:ref:`What are Templates? <getting_started_templates>`). For more
information on each topic, please refer to the additional pages linked
in the sidebar under this area of the guide for an
exhaustive list of all pages covering the template engine. If you're new
to ExpressionEngine you may want to begin with the :doc:`News Site
Tutorial <../how_to/building_a_simple_news_site>`.

If you are a developer, you may also wish to read the
:doc:`../development/legacy/libraries/template` documentation.

.. contents::
   :local:
   :depth: 2


*********************
ExpressionEngine Code
*********************

The content for your template is controlled by ExpressionEngine code. A
lot of the syntax used for ExpressionEngine code is modeled after the
HTML you already know, making it quick and easy to pick up.
ExpressionEngine code must always begin with a ``{`` character and end
with a ``}`` character.

******************
Template Variables
******************

Variables are the primary way to show content in your template.
When you need something output to the page, you will usually use a
variable.

Single Variables
================

Single variables will output a single piece of content::

  {logged_in_username}

*More Information:* :doc:`globals/single_variables`

Variable Pairs
==============

Variable pairs expose several single variables between them to allow
for more granular access to the data than their single variable
counterparts::

  {news_image} {!-- shows: <img src="image.ext" alt="file_name" /> --}

  {news_image}
      File name: {file_name}
      File extension: {extension}
      Url: {url}
  {/news_image}

*More Information:* :ref:`File Field Variable Pair
<channel_entry_file_field_pair>`

*************
Template Tags
*************

Template tags are the control structures of your template. They can
provide and manipulate variables and template contents, but they
typically will not output much data on their own.

Comment Tags
============

Comments are removed from the template before it is shown::

  {!-- This is a comment --}

*More Information:* :doc:`Commenting Template Code <./comments>`

Module and Plugin Tags
======================

Modules and Plugins are your main data providers. They can be easily
spotted, because they all start with ``{exp:``. They most frequently
come in pairs that loop over rows of content. The template chunk between
them will be repeated for each row they represent, and the variables
between them will be replaced with the values of each row of content::

  {!-- show a list of all entry titles and their author --}
  {exp:channel:entries}
    <h1>{title} <span>{author}</h1>
  {/exp:channel:entries}

.. note:: Occasionally these can be used as single tags. In those cases
  they work like single variables. Refer to the documentation of each
  add-on to learn about how it is used.

*More Information:* :doc:`Channel Module
<../channel/channel_entries>`, :doc:`../add-ons/index`,
:doc:`./plugins`

Conditionals
============

You can show or hide template data based on the current user or based
on any other content using conditional tags. Please note that when
variables are used inside conditionals they do not need to be surrounded
by ``{`` or ``}``::

  {logged_in_username} {!-- outputs Bob --}
  {if logged_in_username == "Bob"}Hi Bob{/if}

*More Information:* :doc:`Conditionals <./conditionals>`

Embedded Templates
==================

Templates can be embedded in other templates. This way you can create
reusable template partials::

  {embed="template_group/template"}

*More Information:* :doc:`Embeds <./embedding>`

Layouts
=======

You can wrap a template in a layout to reuse wrapping code between
several templates::

  {layout="template_group/template"}

*More Information:* :doc:`Layouts <./layouts>`

**********
Parameters
**********

Many ExpressionEngine tags and variables can accept parameters.
Parameters are used to change how the tag or variable behaves. They look
just like HTML parameters, with a name and a value::

  {!-- show the five latest news entry titles --}
  {exp:channel:entries channel="news" limit="5"}
    <h1>{title}</h1>
  {/exp:channel:entries}

************
Common Tasks
************

Modifying Variables
===================

Most `Single Variables`_ can be modified by applying... a modifier!

::

  <meta name="description" content="{seo_descrip:attr_safe limit='150'}">

*More Information:* :doc:`./variable_modifiers`

Creating Links
==============

All regular HTML links will work. The paths to ExpressionEngine pages
can be created with the ``{path=`` tag::

  <a href="{path="template_group/template"}">Great template</a>

*More Information:* :doc:`./globals/path`, :ref:`Channel Entry Path
<channel_entries_url_title_path>`

Formatting Dates
================

ExpressionEngine stores dates as unix timestamps (seconds since 1970).
The format parameter is used to to create flexible date output::

  {current_time format="%F %d %Y"} {!-- March 22 2014 --}

*More Information:* :doc:`Date Formatting <./date_variable_formatting>`

Accessing the URL
=================

The ``{segment_#}`` variables allow you to access the different parts of
the current ExpressionEngine URL::

  {segment_1} {!-- usually the template group --}
  {segment_2} {!-- usually the template name --}

The ``{current_url}`` and ``{current_path}`` variables give you access
to the full url and the path (all segments), respectively::

  {current_url} {!-- https://example.com/something/great --}
  {current_path} {!-- /something/great --}

*More Information:* :doc:`./globals/url_segments`

Adding CSS and JavaScript
=========================

Your external assets can be linked to as you normally would. They do not
themselves need to be templates::

  <link rel="stylesheet" href="/styles/main.css" type="text/css" />
  <script src="/js/main.js"></script>

If you do want to keep your CSS in a template, you can use the
``{stylesheet=`` tag to let ExpressionEngine attempt to optimize
how it serves the template::

  <link rel="stylesheet" href="{stylesheet='group/template'}" type="text/css" />

*More Information:* :doc:`./globals/stylesheet`,
:doc:`ExpressionEngine Code in Stylesheets<../troubleshooting/templates/php_and_ee_tags_not_parsed_in_css>`


.. toctree::
	:glob:
	:titlesonly:
	:maxdepth: 1
	:hidden:

	*
	globals/index
