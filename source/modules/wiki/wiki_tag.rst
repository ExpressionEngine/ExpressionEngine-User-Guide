Wiki Tag
========

The Wiki module only has one tag that is used in a ExpressionEngine
Template::

	{exp:wiki}

This tag is placed in the **index template** of the Template Group that
you are using for your wiki as described in the `Wiki
Installation <wiki_installation.html>`_ instructions. The tag displays
the wiki within the specified ExpressionEngine template.

**Note:** Modifying the wiki's theme (visual design) is described in the
`Wiki Theme Template <wiki_templates.html>`_ section of the User Guide.

Wiki Tag Parameters
-------------------


base\_path
~~~~~~~~~~

::

	{exp:wiki base_path='wiki/index'}

The template\_group/template location of the Wiki tag in your site. This
parameter is used for creating all links in the Wiki, so make sure it is
correct.

This is a **required** parameter.

profile\_path
~~~~~~~~~~~~~

When this parameter is used, you can direct the member paths from the
default member area of your ExpressionEngine installation to the
Discussion Forum member area.

The value for the **profile\_path=''** parameter is the
template\_group/template or trigger word for your Discussion Forum. The
variable will then create the URL automatically.

For example if you had this in the wiki tag::

	{exp:wiki profile_path='site/my_forum'}

The {path:register} variable would render::

	http://example.com/index.php/site/my_forum/member/register/

Here is an example using the Discussion Forum trigger word::

	{exp:wiki profile_path='forums'}

The {path:register} variable would render::

	http://example.com/index.php/forums/member/register/

theme
~~~~~

::

	{exp:wiki theme="default"}

The theme to use for your Wiki. Themes are located in the
themes/wiki\_themes/ directory. The parameter specifies the name of your
theme's folder and that folder's theme file. This means that a theme's
folder and its main php file will match. For example the default theme
structure is default/default.php so the parameter would be default. See
the `Wiki Templates <wiki_templates.html>`_ section for more information
on themes.

wiki
~~~~

::

	{exp:wiki wiki="default_wiki"}

Use the **Short Name** of the wiki you want to display in the template.
If no value is set, ExpressionEngine will attempt to use the
'default\_wiki' created when the module is installed. You can only
specify one wiki in this parameter.


