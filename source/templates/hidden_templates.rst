################
Hidden Templates
################

Sometimes it is undesirable to allow access to a template via a URL. For
instance, a template that you only use as an :doc:`embedded
template <embedding>` would likely be an incomplete
HTML document, and you wouldn't want visitors to be able to view that template by itself on the front-end of your site.

"Hidden" templates are just that: templates that cannot be accessed from
a URL, but can be used as embedded templates. What makes a template
"hidden"?

ExpressionEngine uses a convention that is common among many
file-systems, so it may already be familiar to you. To make a template
"hidden", simply give it a name preceded by a dot, e.g.
``.my_hidden_template``.


********************************************
When a Hidden Template is Requested as a URL
********************************************

When someone attempts to access a hidden template via a URL, one of
two things will occur. If you have specified a 404 template in your
:doc:`/cp/design/templates/global_template_preferences`, then the 404
template will be displayed, with 404 headers. If you have not specified
a 404 template, then the index template of the requested template group
will be displayed.

Changing the Hidden Template Indicator
======================================

By default, a template is hidden when a dot prefixes the template name, but this can be changed with a configuration variable set in ``system/expressionengine/config/config.php``::

  $config['hidden_template_indicator'] = '_';
