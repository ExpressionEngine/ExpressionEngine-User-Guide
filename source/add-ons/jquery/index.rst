.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

###################
jQuery (Deprecated)
###################

.. warning:: This module has been deprecated and will be removed in the next version of ExpressionEngine. Instead, include jQuery in your templates from any reputable CDN, such as:

  - `<http://code.jquery.com>`_
  - `<https://cdnjs.com/libraries/jquery/>`_
  - `<https://developers.google.com/speed/libraries/#jquery>`_
  - `<https://www.jsdelivr.com/package/npm/jquery>`_

.. contents::
   :local:
   :depth: 1

************
Introduction
************

The ExpressionEngine jQuery module simplifies how you access jQuery in
your templates, and allows you to use the provided jQuery resources
included with ExpressionEngine, without disclosing the system folder
location or requiring that it reside in a publicly accessible location.

.. _jquery_script_tag:

**********
Script Tag
**********

The Script Tag tag outputs a full script tag to the requested jQuery
resource.::

	{exp:jquery:script_tag}

When used as above, with no tag parameters, the outputted tag will
request the main jQuery file, e.g.::

  <script type="text/javascript" charset="utf-8" src="https://example.com?ACT=jquery"></script>

The following tag parameters allow you to request tags for specific
jQuery resources.

Parameters
==========

.. contents::
   :local:

plugin=
-------

::

	{exp:jquery:script_tag plugin='corner'}

The name of the requested plugin. Note that the 'js' file extension is
not used, just the name of the plugin.

Output example::

  <script type="text/javascript" charset="utf-8" src="https://example.com?ACT=jquery&amp;plugin=corner"></script>

ui=
---

::

	{exp:jquery:script_tag ui='datepicker'}

The name of the requested UI Widget/Interaction. Note that the 'ui'
prefix and 'js' file extension is not used, just the name of the UI
item.

Output example::

  <script type="text/javascript" charset="utf-8" src="https://example.com?ACT=jquery&amp;ui=datepicker"></script>

Before using jQuery UI effects you must first call the jQuery UI Core::

	{exp:jquery:script_tag ui='core'}

effect=
-------

::

	{exp:jquery:script_tag effect='slide'}

The name of the requested UI Effect. Note that the 'effect' prefix and
'js' file extension is not used, just the name of the UI Effect.

Output example::

  <script type="text/javascript" charset="utf-8" src="https://example.com?ACT=jquery&amp;effect=slide"></script>

file=
-----

::

	{exp:jquery:script_tag file='foo'}

The name of the requested non-jQuery file. Outputs a URL to a JavaScript
file in the main javascript folder in ExpressionEngine's system folder.

Output example::

  <script type="text/javascript" charset="utf-8" src="https://example.com?ACT=jquery&amp;file=foo"></script>

*****************
Script Source Tag
*****************

The Script Source tag outputs a URL to the requested jQuery resource. ::

	{exp:jquery:script_src}

When used as above, with no tag parameters, the outputted URL will
request the main jQuery file, e.g.
``https://example.com?ACT=jquery``. The following tag parameters
allow you to request URLs to specific jQuery resources.

Parameters
==========

.. contents::
   :local:

plugin=
-------

::

	{exp:jquery:script_src plugin='corner'}

The name of the requested plugin. Note that the 'js' file extension is
not used, just the name of the plugin.

Output example::

  https://example.com?ACT=jquery&amp;plugin=corner

ui=
---

::

	{exp:jquery:script_src ui='datepicker'}

The name of the requested UI Widget/Interaction. Note that the 'ui'
prefix and 'js' file extension is not used, just the name of the UI
item.

Output example::

  https://example.com?ACT=jquery&amp;ui=datepicker

effect=
-------

::

	{exp:jquery:script_src effect='slide'}

The name of the requested UI Effect. Note that the 'effect' prefix and
'js' file extension is not used, just the name of the UI Effect.

Output example::

  https://example.com?ACT=jquery&amp;effect=slide

file=
-----

::

	{exp:jquery:script_src file='foo'}

The name of the requested non-jQuery file. Outputs a URL to a JavaScript
file in the main javascript folder in ExpressionEngine's system folder.

Output example::

  https://example.com?ACT=jquery&amp;file=foo

*********************
Output JavaScript Tag
*********************

Outputs the actual script to the browser, with proper headers.

.. note:: This tag will output content identically as if it were
	requested via one of the URLs output with the tags above. No other
	content from the template this tag is used on will be output, and
	execution will be halted as soon as this tag is processed. It is
	typically not necessary to use these tags in a template, but the
	option exists if for some reason you need a specific URL structure
	to your jQuery resources.

::

	{exp:jquery:output_javascript}

When used as above, with no tag parameters, the main jQuery file will be
output.

Parameters
==========

.. contents::
   :local:

plugin=
-------

::

	{exp:jquery:output_javascript plugin='corner'}

The name of the requested plugin. Note that the 'js' file extension is
not used, just the name of the plugin.

ui=
---

::

	{exp:jquery:output_javascript ui='datepicker'}

The name of the requested UI Widget/Interaction. Note that the 'ui'
prefix and 'js' file extension is not used, just the name of the UI
item.

effect=
-------

::

	{exp:jquery:output_javascript effect='slide'}

The name of the requested UI Effect. Note that the 'effect' prefix and
'js' file extension is not used, just the name of the UI Effect.

file=
-----

::

	{exp:jquery:output_javascript file='foo'}

The name of the requested non-jQuery file.
