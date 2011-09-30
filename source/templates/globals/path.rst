Path Variables
==============

The Path variable is one of the most commonly used variables within
templates. It's purpose is to enable you to easily create links to other
templates within your site. Here is the basic format::

	{path='template_group/template'}

Make sure you substitute "template\_group" and "template" with the name
of an actual template group and template.

When the path variable is rendered it will automatically include your
site URL, as you've defined in your `General
Configuration <../../cp/admin/system_admin/general_configuration.html>`_.

For example, a variable like this::

	{path='channel/comments'}

Will be rendered like this::

	http://example.com/index.php/channel/comments/

The path variable is most commonly used to create a link, like this::

	<a href="{path='channel/archives'}">My Archives Page</a>

Why not hard code URLs instead?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The biggest advantage to using the path variable whenever you must
create a link is that if your site URL ever changes you can simply
update your `General
Configuration <../../cp/admin/system_admin/general_configuration.html>`_
page with the new URL and every link in your templates will update
accordingly. Using the path variable is also less prone to errors since
you only need to know two pieces of information: The Template Group name
and the template name.

Other Path Variables
--------------------

There are several other "path" variables for specific purposes:

Site Index
~~~~~~~~~~

You can use site\_index in your path to point to your main site index::

	{path='site_index'}

Log-out
~~~~~~~

Using logout in your path variable will let you create a link that
logged-in members can used to log out with::

	{path='logout'}

Member Related Links
~~~~~~~~~~~~~~~~~~~~

The path variable can be used to create a number of different links that
point to areas with the Member Profile pages. You'll find more
information regarding these in the :ref:`creating-member-links` section.
