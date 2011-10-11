###########
Wiki Module
###########

.. contents::
	:local:
	:depth: 2

************
Introduction
************

The ExpressionEngine Wiki Module provides a powerful wiki that
integrates seamlessly with ExpressionEngine. See `Getting Started with the Wiki <getting_started.html>`_ 
for a more detailed explanation of what a wiki is and what you can do with it.

.. note:: The Wiki Module requires a `Non-Commercial <http://expressionengine.com/overview/pricing/>`_ or
   `Commercial <http://expressionengine.com/overview/pricing/>`_ license.

-  Integrates with ExpressionEngine's Membership Module
-  Supports multiple wikis on a single ExpressionEngine installation
-  Namespace support with unique editing and admin restrictions permissions
-  Add pages by going to
   http://example.com/index.php/wiki/index/NewPage, by using the Find
   Page search in the sidebar, or creating a link using wiki syntax
-  Admins can easily delete articles and categories
-  Edit the content of existing pages
-  View the history of previous revisions of a page
-  Redirect a page to another page (Admins)
-  Lock a page to prevent further editing (Admins)
-  Moderate a page to accept only approved revisions (Admins)
-  Notify moderators by email
-  Special Pages for Recent Changes, Searching, Atom/RSS, File Uploads, and a full Title List
-  Easy to use nested categories
-  Template-based themes

****************
First-Time Setup
****************

#. If you have not already installed the Wiki Module, do so at
   :menuselection:`Add-Ons --> Modules --> Wiki`.
#. Click on **Wiki** to open the Wiki Module Control Panel and then
   `create a wiki and configure the preferences <wiki_cp.html>`_.
#. Go into the Templates section of your ExpressionEngine Control Panel.
   Create a Template Group specifically for your wiki and in the 'index'
   template place a tag with a format similar to::

	{exp:wiki base_path='Template_Group/index' wiki="wiki_short_name" theme="default"}

For example, lets say you created a Template Group for your wiki called
"wiki", your wiki's short name is "default_wiki," and you are using
the default theme. If that's the case your tag would look like this::

	{exp:wiki base_path='wiki/index' wiki="default_wiki" theme="default"}

.. important:: *Do not* enable caching on the template containing the Wiki
   module tag.

That's it! Point your browser to the 'wiki/index' template to view your
wiki. Keep reading for more information on the wiki tag.

.. _wiki-tag:

********
Wiki Tag
********

The Wiki module only has one tag that is used in a ExpressionEngine
Template::

	{exp:wiki}

This tag is placed in the **index template** of the Template Group that
you are using for your wiki as described above in the `First-Time Setup`_
instructions. The tag displays the wiki within the specified ExpressionEngine template.

.. note:: Modifying the wiki's theme (visual design) is described in the
   `Wiki Theme Template <wiki_templates.html>`_ section of the User Guide.

Parameters
==========

.. contents::
	:local:

base\_path
----------

::

	{exp:wiki base_path='wiki/index'}

The template\_group/template location of the Wiki tag in your site. This
parameter is used for creating all links in the Wiki, so make sure it is
correct.

This is a **required** parameter.

profile\_path
-------------

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
-----

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
----

::

	{exp:wiki wiki="default_wiki"}

Use the **Short Name** of the wiki you want to display in the template.
If no value is set, ExpressionEngine will attempt to use the
'default\_wiki' created when the module is installed. You can only
specify one wiki in this parameter.


***************************
Control Panel and Templates
***************************

-  `Control Panel <wiki_cp.html>`_
-  `Setting Up Namespaces <wiki_cp.html#namespaces>`_
-  `Templates <wiki_templates.html>`_

**************
Using the Wiki
**************

All page creation, category creation, and editing is done by users
directly on the wiki using special **wiki syntax**.

-  `Getting Started with the Wiki <getting_started.html>`_
-  `Wiki Search <wiki_search.html>`_
-  `Wiki Syntax <wiki_syntax.html>`_
-  `Wiki Users <wiki_users.html>`_

************
Update Notes
************

See the `Wiki Module Update Notes <wiki_update_notes.html>`_  page.

.. toctree::
	:glob:
	:titlesonly:
	:hidden:
	
	*