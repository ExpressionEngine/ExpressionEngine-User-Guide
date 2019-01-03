.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

############################
Channel Category Heading Tag
############################

.. contents::
   :local:
   :depth: 1

************
Introduction
************

The purpose of this tag is to show the currently viewed Category as a
heading. 

::

	{exp:channel:category_heading}
	    <h1>{category_name}</h1>
	    {if category_description}
	        <p>{category_description}</p>
	    {/if}
	{/exp:channel:category_heading}


When you visit one of your Category links your Channel Entries are shown
sorted by the chosen Category. This tag lets you dynamically show the
name of the Category being viewed.

If no Categories are being shown, the tag will not show anything
contained within the opening and closing pair.

**********
Parameters
**********

.. contents::
   :local:

disable=
--------

::

	disable="category_fields"

The disable= parameter allows you to turn off aspects of the tag that
you might not be using in order to improve performance. Valid options
are:

-  category\_fields

relaxed\_categories=
--------------------

::

	relaxed_categories="yes"

This parameter allows you use the category indicator in your URLs with
an entries tag specifying multiple channels that do **not** share
category groups.

channel=
--------

::

	channel="news"

The name (short name) of the channel that the categories are assigned
to. 

.. note:: Unless you are using the ``relaxed_categories`` parameter,
	you can only list one channel name, since each channel can have
	separate category groups.

You must specify this parameter if you use the :doc:`Category URL Titles
In Links </cp/settings/content-design>` feature.

*********
Variables
*********

.. contents::
   :local:

category\_description
---------------------

::

	{category_description}

This variable simply displays the content from the "category
description" field. The variable may also be wrapped in a conditional
statement so that it only displays if there is content in the field:

::

	{if category_description}{category_description}{/if}

category\_id
------------

::

	{category_id}

The category ID associated with the category.

parent\_id
----------

::

	{parent_id}

The category ID associated with the category's parent (or 0 in the case
of a top level category).

category\_image
---------------

::

	{category_image}

The image link (or other information) you can optionally store with each
category within the Control Panel.

category\_name
--------------

::

	{category_name}

The name of the category being viewed.

category\_url\_title
--------------------

::

	{category_url_title}

The URL title of the category.

Custom Category Fields
----------------------

All custom fields assigned to a category can be accessed using the
"short name" of the field:

::

	{class} {extended_description} {category_name_fr} etc..

These are totally dynamic in that any field you create for your category
will automatically be available by its "short name" as a variable.
