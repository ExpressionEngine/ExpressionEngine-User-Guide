Multiple Site Manager Variables and Parameter
=============================================

Parameter
---------

The Multiple Site Manager enables the use of the site="" parameter
installation wide. This parameter will be used when you want to pull the
content of one Site into another Site's templates. The value of the
parameter is always the Site's Short Name.

The site="" parameter is available to the following:

-  Channel Module: Every single tag.
-  Comment Module: Every single tag.
-  RSS Module

When you use the site="" parameter it will exclude all other Sites. If
the site="" parameter is not specified then the current site is used.

Embedding Templates from Another Site
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To embed a template from another Site, simply prefix the template group
and template specified with the short name of the site you wish to pull
the template from as follows::

	{embed="site_short_name:template_group/template"}

So if the Site's Short Name is "siteA" and you want to embed the
"global/footer" template::

	{embed="siteA:global/footer"}

Specifying Multiple Sites (prepare for a head trip)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Note:** Specifying multiple Sites does not work with the {embed=""}
tag.

When using the site="" parameter in the Channel, Comment, Statistics,
and RSS modules you can specify multiple Sites like so::

	site="siteA|siteB|siteC"

Like other ExpressionEngine parameters, you can also use 'not' to
specify what Sites not to show::

	site="not SiteD"

Let's pause a moment to remember that each Site is independent of other
Sites. This means you can have Channels that have the same short\_name.
The implications of this are far reaching and provide a lot of
flexibility but will also require careful consideration.

For example, let's say you have SiteA, SiteB, and SiteC. Each of these
Sites has a "news" channel which uses the Channel Short Name of "news".
The following code would display the "news" channels from all the Sites::

	{exp:channel:entries channel="news" site="siteA|siteB|siteC"}

Parameters
----------

Within the channel entries tag, it is possible to output a list of
entries from multiple Sites while ordering by Site and Channel Field.
Read more about the :ref:`Multiple Site Manager and
orderby= <channel-entries-orderby>`.

.. _msm-variables:

Variables
---------

The following Global Variables are available with the Multiple Site
Manager:

-  *{site\_id}*: Displays the Site's ID number.
-  *{site\_label}*: Displays the Site's Label.
-  *{site\_short\_name}*: Displays the Site's Short Name.

Next: :doc:`Manage existing Sites <managesites>`
=================================================

