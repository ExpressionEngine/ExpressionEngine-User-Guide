.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

.. todo:: These are now named Template Variables.

Template Partials
=================

Template partials are small bits of reusable template or tag parts. You could
create a Template partial for any number of purposes, anywhere that you need to
reuse a small portion of a template, including partial or complete tags,
other variables, etc. Template partials add flexibility and reusability, while
making it simple to make site-wide changes by editing the Template partial's
source instead of having to modify many templates.

One idea would be to hold a particular :doc:`date format string
</templates/date_variable_formatting>` that you wish to reuse over and
over. By making it a Template partial you can change it in one place and
immediately see the effects everywhere that you've used it. For example,
you could create a Template partial named ``my_date_formatting`` with a value of
``format="%m-%d-%Y"`` and use it in any date variable thusly:

.. code-block:: text

	{entry_date {my_date_formatting}}

It will be instantly expanded before your template is parsed, just as if
you had put the expanded text into the template itself:

.. code-block:: text

	{entry_date format="%m-%d-%Y"}

You can create and edit Template partials at :menuselection:`Developer --> Templates --> Template Partials`.

.. note:: Template partials may not be nested inside other Template partials.

What is the difference between a Template partial and a Template variable?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Template partials are expanded at a very early stage on each template, making it
possible for them to hold dynamic content, ExpressionEngine tags, other
variables, PHP, etc. (Read more about :doc:`the rendering stages of the
template engine </templates/template_engine>`.) They shine when you need
to reuse dynamic information but don't need the extra overhead of
access control or separate preferences of an embedded template.
:doc:`Template variables <template_variable>` are the polar
opposites, expanded during one of the final rendering stages of the
template engine, and should be used for static text, HTML, JavaScript,
and other static content that would not affect other tags and variables
on the template.

What is the difference between a Template partial and an Embedded Template?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Template partials can be considered to actually be part of the template that they
are used on, with their expanded contents parsed simultaneous to other
tags and variables on the template. :doc:`Embedded
templates <../embedding>` are separate templates, with
their own preferences (caching, PHP parsing, access, etc.), and are
parsed individually. Put another way, embedded templates are not
*included* in the parent template, but rather *added to them* after the
fact, using a separate query and full page parsing resources for each
template.

Multiple Site Manager Tip
~~~~~~~~~~~~~~~~~~~~~~~~~

If you are using the Multiple Site Manager, you'll notice that you have
a new preference when editing each Template partial: make it available to all
your MSM sites or this site only. To easily identify the difference when
reading your templates, consider prefixing your Template partial names with the
site's short name or, for Template partials available to all sites, *global*::

	{ellislab_date_formatting}

	{expressionengine_date_formatting}

	{global_date_formatting}
