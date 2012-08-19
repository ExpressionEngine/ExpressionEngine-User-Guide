Snippets
========

Snippets are small bits of reusable template or tag parts. You could
create a Snippet for any number of purposes, anywhere that you need to
reuse a small portion of a template, including partial or complete tags,
other variables, etc. Snippets add flexibility and reusability, while
making it simple to make site-wide changes by editing the Snippet's
source instead of having to modify many templates.

One idea would be to hold a particular `date format
string <../date_variable_formatting.html>`_ that you wish to reuse over
and over. By making it a Snippet you can change it in one place and
immediately see the effects everywhere that you've used it. For example,
you could create a Snippet named my\_date\_formatting with a value of
format="%m-%d-%Y" and use it in any date variable thusly::

	{entry_date {my_date_formatting}}

It will be instantly expanded before your template is parsed, just as if
you had put the expanded text into the template itself::

	{entry_date format="%m-%d-%Y"}

You can create and edit Snippets at :menuselection:`Design --> Templates
--> Snippets`.

What is the difference between a Snippet and a User-defined Global Variable?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Snippets are expanded at a very early stage on each template, making it
possible for them to hold dynamic content, ExpressionEngine tags, other
variables, PHP, etc. They shine when you need to reuse dynamic
information, but don't need the extra overhead of access control or
separate preferences of an embedded template. `User-defined Global
Variables <user_defined.html>`_ are the polar opposites, expanded at the
very end of all template parsing, and should be used for static text,
HTML, JavaScript, and other static content that would not affect other
tags and variables on the template.

What is the difference between a Snippet and an Embedded Template?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Snippets can be considered to actually be part of the template that they
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

If you are using the Multiple Site Manager, you'll notice that Snippets
can be private to a particular site, or shared between all sites. To
easily identify the difference when reading your templates, consider
prefixing your Snippet names with the site's short name, or "global"::

	{ellislab_date_formatting}
	
	{codeigniter_date_formatting}
	
	{global_date_formatting}
