Path Variables
==============

The Path variable is one of the most commonly used variables within
templates. It's purpose is to enable you to easily create links to other
templates within your site. Here is the basic format::

	{path='template_group/template'}

Make sure you substitute "template_group" and "template" with the name
of an actual template group and template.

When the path variable is rendered it will automatically include your
site URL, as you've defined in your :doc:`URL and Path Settings
</cp/settings/urls>`.

For example, a variable like this::

	{path='channel/comments'}

Will be rendered like this::

	https://example.com/channel/comments

The path variable is most commonly used to create a link, like this::

	<a href="{path='channel/archives'}">My Archives Page</a>

You can also provide additional URL segments, which can later be used
as :doc:`Segment Variables </templates/globals/url_segments>`::

    <a href="{path='company/employees/customer-service/joe'}">Joe, Customer Service</a>

Route Variables
~~~~~~~~~~~~~~~

If you are using Template Routes you may wish to generate paths
based on your defined template route instead of the default URL
structure. The syntax for doing so looks like so::

    {route='group/template'}

Where "group" is the name of the group your template belongs to and
"template" is the template name.

If your template has a Template Route with defined segment variables
you can assign values to your segment variables and generate a path
like so::

	{route='channel/archives' year='2009' month='june'}

If the template has the following Template Route assigned::

	/archive/{year}/{month}

The previous route variable will be rendered as::

	https://example.com/archive/2009/june


Why not hard code URLs instead?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The biggest advantage to using the path variable whenever you must
create a link is that if your site URL ever changes you can simply
update your :doc:`URL and Path Settings </cp/settings/urls>` page with the
new URL and every link in your templates will update accordingly. Using the path variable is also less prone to errors since you only need to know two pieces of information: The Template Group name and the template name.

Other Path Variables
--------------------

There are several other "path" variables for specific purposes:

Site Index
~~~~~~~~~~

You can use site_index in your path to point to your main site index::

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
information regarding these in the :ref:`creating_member_links` section.
