##########################
Template Language Overview
##########################

This page is a quick overview of the syntax and terminology used
throughout the user guide when talking about ExpressionEngine Templates
(:ref:`What are Templates? <getting_started_templates>`). For more
information on each topic, please refer to the additional pages linked
in each section or go to the :doc:`index` area of this guide for an
exhaustive list of all pages covering the template engine. If you're new
to ExpressionEngine you may want to begin with the :doc:`News Site
Tutorial <../how_to/building_a_simple_news_site>`.

.. contents::
   :local:
   :depth: 2


*************
Template Tags
*************

Content for your template comes from ExpressionEngine tags. Tags should
begin with a ``{`` character and end with a ``}`` character. If you are
used to writing HTML, their format should be familiar.

Commenting
==========

::

  {!-- This is a comment --}

*More Information:* :doc:`Commenting Template Code <./comments>`

Single Tags
===========

Single tags will output a single piece of content::

  {logged_in_username}

*More Information:* :doc:`globals/single_variables`

Tag Pairs
=========

Some tags have both an open and a closing tag. Tag pairs will frequently
be used to loop over rows of content, as in the
:doc:`Channel Module<../add-ons/channel/channel_entries>`::

  {!-- show a list of all entry titles --}
  {exp:channel:entries}
    <h1>{title}</h1>
  {/exp:channel:entries}

*More Information:* :doc:`../add-ons/index`, :doc:`./plugins`


Tag Parameters
==============

Both single tags and tag pairs can accept parameters. Parameters are
used to change how the tag behaves. They look just like HTML parameters,
with a name and a value::

  {!-- show the five latest news entry titles --}
  {exp:channel:entries channel="news" limit="5"}
    <h1>{title}</h1>
  {/exp:channel:entries}

************
Conditionals
************

You can show or hide template data based on the current user or based
on any other content using conditional tags. Please note that when
variables are used inside conditionals they do not require ``{`` and
``}``::

  {logged_in_username} // outputs Bob
  {if logged_in_username == "Bob"}Hi Bob{/if}

*More Information:* :doc:`Date Formatting <./conditionals>`

*********************
Embedding and Layouts
*********************

Templates can be embedded in other templates. This way you can create
reusable template partials::

  {embed="templategroup/template"}

You can also wrap a template in a layout to create a reuse wrapping code
between all of your templates::

  {layout="templategroup/template"}

*More Information:* :doc:`Embeds <./embedding>`,
:doc:`Layouts <./layouts>`

************
Common Tasks
************

Creating Links
==============

All regular HTML links will work. The paths to ExpressionEngine pages
can be created with the ``{path=`` tag::

  <a href="{path="templategroup/template"}">Great template</a>

*More Information:* :doc:`Path Variables <./globals/path>`,
:ref:`Channel Entry Path<channel_entries_url_title_path>`

Formatting Dates
================

ExpressionEngine stores dates as unix timestamps (seconds since 1970).
The format parameter is used to to create flexible date output::

  {current_time format="%F %d %Y"} {!-- March 22 2014 --}

*More Information:* :doc:`Date Formatting <./date_variable_formatting>`
