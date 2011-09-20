######################
Channel Categories Tag
######################

.. contents::
   :local:
   :depth: 1

************
Introduction
************

The Channel Categories tag enables you to show your Categories in a
list. Here is the basic syntax:

::

    {exp:channel:categories}
        {category_name}
    {/exp:channel:categories}

Everything contained between the opening and closing tag will be
repeated for each category, so if you want to wrap each category with
some markup you'll do this:

::

    {exp:channel:categories}
        <a href="{path='channel/index'}">{category_name}</a> 
        {if category_description}{category_description}{/if}    
    {/exp:channel:categories}


**********
Parameters
**********

.. contents::
   :local:

backspace=
----------

::

	backspace="5"

Backspacing removes characters (including spaces and line breaks) from
the last iteration of the loop. For example, if you put a <br> tag
after each category you'll have this

::

    Local News<br>
    Health News<br>
    Science News<br>

You might, however, not want the <br> tag after the final item. Simply
count the number of characters (including spaces and line breaks) you
want to remove and add the backspace parameter to the tag. The <br>
tag has 4 characters plus a new line character, so you would do this

::

	{exp:channel:categories style="linear" backspace="5"}
	    {category_name}<br>
	{/exp:channel:categories}

That will produce code like:

::

    Local News<br>
    Health News<br>
    Science News


The "backspace" parameter is only allowed if you are using the "linear"
style. It is not applicable if you use the "nested" style for the
display of the list.

category\_group=
----------------

::

	category_group="2"

Category Groups are specified by ID number (the ID number of each
`category
group <../../cp/admin/content_admin/category_management.html>`_ is
displayed in the Control Panel). The reason we use the ID is because
category groups can be called anything (with spaces, quotes, etc.), and
also renamed. It would be much more difficult to have to update the tag
parameters every time you updated a category name.

And as with many other parameters, you can stack category groups

::

	category_group="1|2|4"

Or use "not" to exclude categories

::

	category_group="not 2"

channel=
--------

::

	channel="channel_name"

The name (short name) of the channel that the categories are assigned
to. This variable is **required** unless you only have a single channel.

You must specify this parameter if you use the `category name in
URL <../../cp/admin/content_admin/global_channel_preferences.html>`_
feature.

class=
------

::

	class="my_custom_class"

When using the "nested" style of display (see the `style= <#par_style>`_
parameter), this lets you specify the value of the "class" attribute in
the opening <ul> tag. The default value is "nav\_categories".

For instance, if you set the parameter as class="my\_custom\_class",
then the beginning of the nested category output would be

::

	<ul class="my_custom_class">

disable=
--------

::

	disable="category_fields"

The disable= parameter allows you to turn off aspects of the tag that
you might not be using in order to improve performance. Valid options
are:

-  category\_fields

id=
---

::

	id="my_custom_id"

When using the "nested" style of display (see the `style= <#par_style>`_
parameter), this lets you specify the value of the "id" attribute in the
opening <ul> tag. The default value is "nav\_categories".

For instance, if you set the parameter as id="my\_custom\_id", then the
beginning of the nested category output would be

::

	<ul id="my_custom_id">

parent\_only=
-------------

::

	parent_only="yes"

This parameter allows you to limit the category display to only "parent"
categories; no sub-categories will be displayed.

restrict\_channel=
------------------

::

	restrict_channel="no" ``restrict_channel="yes"``

This parameter may be used to alter the behavior of the `show\_empty
parameter <#par_show_empty>`_ and has no effect unless that parameter is
set to not show empty categories. When restrict\_channel is set to "no",
the show\_empty parameter will display categories that have no entries
from all channels, rather than categories that have no entries from the
specified channel. By default, the empty categories shown will be
restricted to the specified channel.

show=
-----

::

	show="4|7"

With this parameter, you can specify which categories will be included
in the list. For instance, if you wanted to keep a particular category
from being listed you could specify only those you wanted displayed to
be included. Category IDs are separated by the pipe character to specify
more than one category.

You may alternatively specify which categories to not show

::

	show="not 3|6|8"

**Note:** If you specify that a parent category is not shown, then any
children of that parent category are then unable to be shown by the tag.
The parent category is required for any and all children categories.

show\_empty=
------------

::

	show_empty="no" ``show_empty="yes"``

This parameter determines whether or not categories that contain no
entries for the specific channel are displayed. If you set the parameter
to "no" then categories which do not contain entries will not be
included in the list. If you want only categories that have no entries
assigned from **any** channels, use the `restict\_channel
parameter <#par_restrict_channel>`_ in conjunction with show\_empty

By default, categories with no entries **will** be included.

status=
-------

::

	status="open"

You may restrict to categories with entries with a particular
`status <../../cp/admin/content_admin/statuses.html>`_ . The two
statuses "open" and "closed" are default statuses that are always
available, so you can always specify those if needed. You can choose
multiple statuses using a pipe

::

	status="draft|reviewed|published"

Or exclude statuses using "not"

::

	status="not submitted|processing|closed"

By default, the Categories tag will display categories that contain any
entries with a status *other than* closed.

style=
------

::

	style="nested"

There are two list "styles" for your categories: "nested" and "linear".

A "nested" category is one that shows the parent/child hierarchy. It
will display the categories as nested "unordered lists" and will
automatically enclose the contents in <li> tags and nest them correctly
to show the hierarchy:

::

    <ul id="nav_categories">
      <li>News
        <ul>
          <li>Regional</li>
          <li>World</li>
        </ul>
        </li>
      <li>Sports
        <ul>
          <li>National
            <ul>
              <li>Football</li>
              <li>Basketball
                <ul>
                  <li>Lakers</li>
                  <li>Knicks</li>
                </ul>
                </li>
            </ul>
            </li>
        </ul>
        </li>
    </ul>

A "linear" category is one that shows a pure list with no HTML inserted

::

	News Regional World Sports National Football Basketball Lakers Knicks

By default, if you do not specify the "style" parameter then you will
get a "nested" list.

When using the "nested" style of display, the opening <ul> tag of the
list will have an id of "nav\_categories" applied to it. This can be
used as a "hook" for javascript or CSS in providing DHTML or other
functionality. You may change this by using the `id= <#par_id>`_
parameter.

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
statement so that it only displays if there is content in the field

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

This variable simply displays the name of the category.

category\_url\_title
--------------------

::

	{category_url_title}

This variable displays the URL title of the category

count
-----

::

	{count}

The "count" out of the current categories being displayed. If five
categories are being displayed, then for the fourth category the {count}
variable would have a value of "4".

path='
------

::

	{path=template_group/template'}

The path (template\_group/template) where you want to show the
categories. This is typically used within a standard HTML link tag

::

	<a href="{path='channel/index'}">{category_name}</a>

You can also use SITE\_INDEX in your path to point to your main site
index page. If you show your channel on your home page, using
SITE\_INDEX is preferable since it will make the URL cleaner.

::

	<a href="{path='SITE_INDEX'}">{category_name}</a>

total\_results
--------------

::

	{total_results}

The total number of categories being displayed.

Custom Category Fields
----------------------

All custom fields assigned to a category can be accessed using the
"short name" of the field::

	{class} {extended_description} {category_name_fr} etc..

These are totally dynamic in that any field you create for your category
will automatically be available by its "short name" as a variable.

**********************
Category Dropdown Menu
**********************

You can also display categories in a dropdown menu using the following code:

::

	<form name="catmenu" action="">
	    <select name="selcat" onchange="location=document.catmenu.selcat.options[document.catmenu.selcat.selectedIndex].value;">
	        <option value="">--Select Category--</option> 
	        {exp:channel:categories channel="yourchannel" style="linear"}     
	            <option value="{path='channel'}">{category_name}</option> 
	        {/exp:channel:categories}
	    </select>
	</form>

********
Examples
********

Here are a few examples of the categories tag in use

::

    {exp:channel:categories channel="news" style="linear" backspace="7"}
        <a href="{path='news/entry'}">{category_name}</a><br /> 
    {/exp:channel:categories}

This code would create a list of the categories in the "news" channel
and link to the "news/entry" Template. It would also remove the <br />
from the last entry. 

::

	{exp:channel:categories channel="politics" style="nested"}  
	    <a href="{path='SITE_INDEX'}">{category_name}</a>  
	{/exp:channel:categories}

This code would create a nested, unordered list of the categories from
the "politics" channel as links to the main channel page.
