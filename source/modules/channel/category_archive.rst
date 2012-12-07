Channel Category Archive Tag
============================

This tag is designed to let you list all of your channel entries and
have them organized by category. 

::

    {exp:channel:category_archive channel="default_site" style="linear"}  
        {categories}
            <h3>{category_name}</h3> 
            {if category_description}
                <p>{category_description}</p>
            {/if} 
        {/categories}
        {entry_titles}
            <a href="{path='SITE_INDEX'}">{title}</a><br />
        {/entry_titles}
    {/exp:channel:category_archive}

This tag allows you to show your entry titles organized by category in a
master archive that looks like this

::

	<h3>Category one</h3>
	<p>Category one is our first category.</p>
	<a href="www.mysite.com/1/">title one</a><br />
	<a href="www.mysite.com/2/">title two</a><br />
	<a href="www.mysite.com/3/">title three</a><br />
	<a href="www.mysite.com/4/">title four</a><br />
	<a href="www.mysite.com/5/">title five</a><br />
	
	<h3>Category two</h3>
	<p>This was our second category ever created.</p>
	<a href="www.mysite.com/6/">title one</a><br />
	<a href="www.mysite.com/7/">title two</a><br />
	<a href="www.mysite.com/8/">title three</a><br />
	<a href="www.mysite.com/9/">title four</a><br />
	<a href="www.mysite.com/10/">title five</a><br /> 
	
	etc...

It shows the name of each category, and the channel entry titles
assigned to them. **Note:** Once you have hundreds of channel entries,
it might become cumbersome to use this tag on your page.


Parameters
----------


backspace=
~~~~~~~~~~

::

	backspace="7"

Backspacing removes characters (including spaces and line breaks) from
the last iteration of the loop. For example, if you put a <br /> tag
after each listed entry you'll have this

::

	Category one
	
	<a href="www.mysite.com/1/">title one</a><br />
	<a href="www.mysite.com/2/">title two</a><br />
	<a href="www.mysite.com/3/">title three</a><br />
	<a href="www.mysite.com/4/">title four</a><br />
	<a href="www.mysite.com/5/">title five</a><br />
	
	Category two
	
	<a href="www.mysite.com/6/">title one</a><br />
	<a href="www.mysite.com/7/">title two</a><br />

You might, however, not want the <br /> tag after the final item. Simply
count the number of characters (including spaces and line breaks) you
want to remove and add the backspace parameter to the tag. The <br />
tag has 6 characters plus a new line character, so you would do this

::

	{exp:channel:category_archive channel="default_site" style="linear" backspace="7"}
	    {categories}
	        <h3>{category_name}</h3>
	    {/categories}
	    {entry_titles}
	        <a href="{path='SITE_INDEX'}">{title}</a><br />
	    {/entry_titles} 
	{/exp:channel:category_archive}


That will produce code like this

::

	<h3>Category one</h3>
	<a href="www.mysite.com/1/">title one</a><br />
	<a href="www.mysite.com/2/">title two</a><br />
	<a href="www.mysite.com/3/">title three</a><br />
	<a href="www.mysite.com/4/">title four</a><br />
	<a href="www.mysite.com/5/">title five</a> 
	<h3>Category two</h3>
	<a href="www.mysite.com/6/">title one</a><br />
	<a href="www.mysite.com/7/">title two</a>

The "backspace" parameter is only allowed if you are using the "linear"
style. It is not applicable if you use the "nested" style for the
display of the list.

channel=
~~~~~~~~

::

	channel="channel"

This indicates the name of the channel that the categories are assigned
to. The channel parameter is **required** unless you only have a single
channel. Multiple channels may also be specified.

class=
~~~~~~

::

	class="my_custom_class"

When using the "nested" style of display (see the `style= <#par_style>`_
parameter), this lets you specify the value of the "class" attribute in
the opening <ul> tag. The default value is "nav\_cat\_archive".

disable=
~~~~~~~~

::

	disable="category_fields"

The disable= parameter allows you to turn off aspects of the tag that
you might not be using in order to improve performance. Valid options
are:

-  category\_fields

id=
~~~

::

	id="my_custom_id"

When using the "nested" style of display (see the `style= <#par_style>`_
parameter), this lets you specify the value of the "id" attribute in the
opening <ul> tag. The default value is "nav\_cat\_archive".

For instance, if you set the parameter as id="my\_custom\_id", then the
beginning of the nested category output would be::

	<ul id="my_custom_id">

orderby=
~~~~~~~~

::

	orderby="date"

The "order" parameter sets the display order of the entries. Setting
options for this parameter include:

-  orderby="date"
-  orderby="title"
-  orderby="comment"
-  orderby="most\_recent\_comment"

If this parameter is not set, it will default to ordering by the title.

show=
~~~~~

::

	show="4|7"

With this parameter, you can specify which categories will be included
in the list. For instance, if you wanted to keep a particular category
from being listed you could specify only those you wanted displayed to
be included. Category IDs are separated by the pipe character to specify
more than one category.

You may alternatively specify which categories to not show::

	show="not 3|6|8"

show\_empty=
~~~~~~~~~~~~

::

	show_empty="no"

This parameter determines whether or not categories that contain no
entries are displayed. If you set the parameter to "no" then categories
which do not contain any entries will not be included in the list.

By default, categories with no entries **will** be included.

show\_future\_entries=
~~~~~~~~~~~~~~~~~~~~~~

::

	show_future_entries="yes"

You can determine whether you wish for entries dated in the "future" to
be included. This option is useful when doing things like creating a
list of events, some of which have not occurred yet.

sort=
~~~~~

::

	sort="asc"

::

	sort="desc"

The sort order can be "asc" (ascending order or "oldest item first") or
"desc" (descending order or "newest item first"). If you do not use a
sort order the default is desc.

**Note**: The order of the categories will always follow the Category
Order specified in the control panel. The only things the sort parameter
changes is the order of the *entries* within each category.

status=
~~~~~~~

::

	status="open"

You may restrict to entries with a particular
`status <../../cp/admin/channels/statuses.html>`_. You can choose
multiple statuses using a pipe

::

	status="draft|reviewed|published"

Or exclude statuses using "not"

::

	status="not submitted|processing|closed"

style=
~~~~~~

::

	style="linear"

There are two list "styles" for your categories: "nested" and "linear".

By default, the category list is displayed fully "nested" to show the
parent/child hierarchy between the categories. It will display the
categories as nested "unordered lists" and will automatically enclose
the contents in <li> tags and nest them correctly to show the hierarchy.

When using the "nested" style of display, the opening <ul> tag of the
list will have an id of "nav\_cat\_archive" applied to it. This can be
used as a "hook" for javascript or CSS in providing DHTML or other
functionality. 

::

	<ul id="nav_cat_archive">

The list can also be shown in a flat "linear" style.

For more information about how this option works see the parameter
description on the :doc:`Channel Categories <categories>` page.

Variable Pairs
--------------

There are two variable pairs to delineate where the category markup
starts/ends and where the title markup starts/ends.


{categories} Variable Pair
--------------------------

There are several variables available for use inside the
{categories}{/categories} variable pair.


active
~~~~~~

::

	{if active} This category is active {/if}

You may use this conditional to test whether the category shown is the
active category or not, based on the dynamic URI segment.

category\_description
~~~~~~~~~~~~~~~~~~~~~

::

	{categories}
	    <p>{category_description}</p>
	{/categories}

This displays the content of the "category description" field associated
with the category. The variable may also be wrapped in a conditional
statement so that it only displays if there is content in the field::

	{categories} 
	    {if category_description}{category_description}{/if}
	{/categories}

category\_id
~~~~~~~~~~~~

::

	{category_id}

The category ID associated with the category.

parent\_id
~~~~~~~~~~

::

	{parent_id}

The category ID associated with the category's parent (or 0 in the case
of a top level category).

category\_image
~~~~~~~~~~~~~~~

::

	{category_image}

The image link (or other information) you can optionally store with each
category within the Control Panel.

category\_name
~~~~~~~~~~~~~~

::

	{categories}
	    <h3>{category_name}</h3>
	{/categories}

This displays the name of the category.

category\_url\_title
~~~~~~~~~~~~~~~~~~~~

::

	{category_url_title}

This variable displays the URL title of the category

path
~~~~

::

	{categories}
	    <a href="{path='site/categories'}">{category_name}</a>
	{/categories}

The path (template\_group/template) is used to create a URL to display a
list of the entries belonging to this category. 

::

	<a href="{path='site/categories'}">{category_name}</a>

You can also use SITE\_INDEX in your path to point to your main site
index page. If you show your categories on your home page, using
SITE\_INDEX is preferable since it will make the URL cleaner. 

::

	<a href="{path='SITE_INDEX'}">{category_name}</a>

Custom Category Fields
~~~~~~~~~~~~~~~~~~~~~~

All custom fields assigned to a category can be accessed using the
"short name" of the field

::

	{class} {extended_description} {category_name_fr} etc..

These are totally dynamic in that any field you create for your category
will automatically be available by its "short name" as a variable.

{entry\_titles} Variable Pair
-----------------------------

There are several variables available for use inside the
{entry\_titles}{/entry\_titles} variable pair.


entry\_date
~~~~~~~~~~~

::

	{entry_date format="%Y %m %d"}

The date the entry was submitted

entry\_id\_path
~~~~~~~~~~~~~~~

::

	{entry_titles}
	    <a href="{entry_id_path='site/index'}">{title}</a>
	{/entry_titles}

The path (template\_group/template) is used to create a URL to display
this entry. This variable uses the entry's id number in the URL. This is
typically used within a standard HTML link tag

::

	<a href="{entry_id_path='site/index'}">{title}</a>

You can also use SITE\_INDEX in your path to point to your main site
index page. If you show your channel on your home page, using
SITE\_INDEX is preferable since it will make the URL cleaner.

::

	<a href="{entry_id_path='SITE_INDEX'}">{title}</a>

path
~~~~

::

	{entry_titles} <a href="{path='site/index'}">{title}</a> {/entry_titles}

The path (template\_group/template) is used to create a URL to display
this entry. This variable uses the entry's url\_title in the URL. This
is typically used within a standard HTML link tag

::

	<a href="{path='site/index'}">{title}</a>

You can also use SITE\_INDEX in your path to point to your main site
index page. If you show your channel on your home page, using
SITE\_INDEX is preferable since it will make the URL cleaner. 

::

	<a href="{path='SITE_INDEX'}">{title}</a>

title
~~~~~

::

	{entry_titles} {title} {/entry_titles}

This variable is replaced by the title of the entry.
