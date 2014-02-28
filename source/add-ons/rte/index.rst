Rich Text Editor
================

.. contents::
   :local:
   :depth: 1

Introduction
------------

ExpressionEngine's built-in Rich Text Editor (RTE) is usually used
inside the Control Panel. This module allows you to also use the RTE
outside of the Control Panel, in your site's front-end templates.

Its primary purpose is to output the URL of the RTE's JavaScript and
apply it to the desired elements (usually textareas) in your templates.
For example, to load the RTE's JavaScript via a template and apply it
to all elements with the class "my-class", you would place this inside your
document's **head** element::

	<script type="text/javascript" src="{exp:rte:script_url selector=".my-class"}"></script>

.. important:: If you're using the :doc:`Channel Form </add-ons/channel/channel_form/index>`,
   it's preferable to use the :ref:`channel_form_rte_selector` parameter instead
   of this module's tag.

Parameters
----------

.. contents::
   :local:

include_jquery=
~~~~~~~~~~~~~~~

::

	include_jquery="no"

The versions of jQuery and jQuery UI that ship with ExpressionEngine are
loaded by default since the RTE depends on them. If you are already loading
these libraries separately, you may set this to "no".

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

The id of the toolset to use. If this parameter is not specified, the RTE will
attempt to load the Toolset preference of the currently logged-in user as chosen
in :ref:`my_account_rte_prefs`. If the user has not chosen a Toolset or is not
logged in, the site's :ref:`rte_mcp_default_toolset` will be used.

Control Panel
-------------

See the :doc:`control_panel/index` page.

.. toctree::
	:glob:
	:titlesonly:
	:hidden:

	control_panel/index
