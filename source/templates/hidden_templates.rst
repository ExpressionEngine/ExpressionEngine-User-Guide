Hidden Templates
================

Sometimes it is undesirable to allow access to a template via a URL. For
instance, a template that you only use as an `embedded
template <./embedding_templates.html>`_ would likely be an incomplete
HTML document, and not something you would want your users to be able to
come across on its own, even accidentally.

"Hidden" templates are just that: templates that cannot be accessed from
a URL, but can be used as embedded templates. What makes a template
"hidden"?

Hiding Templates
----------------

ExpressionEngine uses a convention that is common among many
file-systems, so it may already be familiar to you. To make a template
"hidden", simply give it a name preceded by a period, e.g.
".my\_hidden\_template".

When a Hidden Template is Requested in the URL
----------------------------------------------

When someone attempts to access a hidden template via the URL, one of
two things will occur. If you have specified a 404 template in your
`Global Template
Preferences <../cp/design/templates/global_template_preferences.html>`_,
then the 404 template will be displayed, with 404 headers. If you have
not specified a 404 template, then the index template of the requested
template group will be displayed.

Example
~~~~~~~

::

	{embed="site/.navigation" loc="books"}

In this example, if the URL
http://example.com/index.php/site/.navigation was requested, the site's
404 template would be shown if it was defined, or the site/index
template if it were not.
