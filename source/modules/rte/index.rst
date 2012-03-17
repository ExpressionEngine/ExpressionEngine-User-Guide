Rich Text Editor Module
=======================

.. contents::
   :local:
   :depth: 1
   
Introduction
------------

ExpressionEngine's built-in Rich Text Editor (RTE) is used in the
Control Panel to provide a WYSIWYG editing experience inside
particular Channel Fields.

This module gives you the power of the RTE on your site's front-end,
outside of the Control Panel. It provides a tag that links to the
RTE's JavaScript and applies it to the desired textarea element(s)
on a front-end template.

.. important:: If you're using :doc:`SafeCracker </modules/safecracker/index>`,
   use its :ref:`safecracker-rte-selector` parameter instead of this tag.

For example, to load the RTE's JavaScript into a template and apply it
to all elements with the class "my-class"::

	<script type="text/javascript" src="{exp:rte:get_js selector=".my-class"}"></script>


Parameters
----------

.. contents::
   :local:

include_jquery=
~~~~~~~~~~~~~~~

::

	include_jquery="no"

jQuery is included by default since it is required for the RTE to work.
However, if you are already loading jQuery elsewhere in your template, set
this to "no".

selector=
~~~~~~~~~

::

	selector=".my-custom-class"

The jQuery selector that determines which element(s) the RTE will be applied
to. Any valid jQuery selector is acceptable. If this parameter is not specified,
it will default to ".rte", selecting all elements having "rte" as a class.

toolset\_id=
~~~~~~~~~~~~

::

	toolset_id="1"

The id of the toolset to use. If this parameter is not specified, the
custom toolset of the currently logged in user will be used. If they
do not have a custom toolset, or are not logged in, the site's Default
Toolset will be used.
