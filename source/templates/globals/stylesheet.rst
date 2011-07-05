Linking to Stylesheets
======================

Stylesheet Global Variable
--------------------------

The stylesheet global variable is meant for generating URLs for use when
linking to stylesheets. The basic syntax is this::

	{stylesheet='template_group/css_template'}

Make sure you substitute "template\_group" and "css\_template" with the
name of your actual template group and CSS template.

The stylesheet variables is used exclusively in the CSS declaration in
your pages. It must contain the template group/template name where your
stylesheet is located::

	<link rel="stylesheet" type="text/css" media="all" href="{stylesheet='channel/channel_css'}" />

In many respects, this variable works much like the {path=''} global
variable. However, there are some special considerations for the
stylesheet variable:

-  Pages that are linked through the stylesheet tag will **not** be
   parsed as normal Templates. ExpressionEngine Tags and PHP inside the
   Template will not be parsed. The Template will be sent exactly as it
   is stored. This means that your CSS files will be much more
   light-weight as they do not require the use of ExpressionEngine's
   template parser.
-  When the stylesheet tag is used, "text/css" MIME headers will be sent
   to the browser. Some browsers will not treat the CSS file as such
   without these headers.

Triggering a Stylesheet Via the URL
-----------------------------------

It is also possible to point to a stylesheet templates by directly
adding a "css" trigger word in the URL. For instance, if your stylesheet
is the "channel\_css" Template of the "channel" Template Group, you
could point to it using the URL:

http://example.com/index.php/css/channel/channel\_css/

Using Tags and PHP in a Stylesheet
----------------------------------

Additionally, you can allow your stylesheets to run through the full
template parser so tags and PHP can be used. To do so, just use a normal
`path variable <./path.html>`_ to access your stylesheet. If you specify
a template this way make sure that it is set to "CSS Stylesheet" as the
Template Type.
