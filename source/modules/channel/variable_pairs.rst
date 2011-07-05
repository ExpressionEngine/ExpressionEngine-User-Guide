Channel Entries - Variable Pairs
================================

Variable pairs contain an opening and closing tag as well as content
in-between. Example::

	{date_heading}  <h1>{entry_date format="%Y %m %d"}</h1>  {/date_heading}

The reason variable pairs have an opening and closing pair is because
the information between the pairs can be shown or not shown if the
criteria for each tag is met.

In the case of the "date\_heading" pair, for example, it only appears at
a certain interval that you set (hourly, daily, weekly, monthly, etc.).
By using a pair of variables you can put HTML formatting between them
that only gets shown when the interval is met. Otherwise, the chunk is
not displayed.


date\_footer
------------

::

	{date_footer display="daily"}  <p>That's all from today!</p>  {/date_footer}

The date footer can be used to show a footer at certain intervals. The
interval can be set to show hourly, daily, weekly, monthly, or yearly.

Display Parameter
~~~~~~~~~~~~~~~~~

The opening {date\_footer} tag has an optional "display" parameter used
to set the display interval::

	{date_footer display="daily"}

Choices for the "display" parameter are:

-  {date\_footer display="hourly"}
-  {date\_footer display="daily"}
-  {date\_footer display="weekly"}
-  {date\_footer display="monthly"}
-  {date\_footer display="yearly"}

If no parameter is specified it will default to "daily".

**Note:** You can use as many date\_footers as you want in the same tag.
There is a bit of a performance hit, however, since date parsing is the
most processor intensive. Read the caching section for information on
improving performance.

date\_heading
-------------

::

	{date_heading}  <h1>{entry_date format="%Y %m %d"}</h1>  {/date_heading}

The date heading can be used to show a heading at certain intervals. The
interval can be set to show hourly, daily, weekly, monthly, or yearly.

When using weekly intervals, the
`{week\_date} <variables.html#var_week_date>`_ variable would typically
be used. ::

	{date_heading display="weekly"}Week of {week_date format="%Y %m %d"}{/date_heading}

Display Parameter
~~~~~~~~~~~~~~~~~

The opening {date\_heading} tag has an optional "display" parameter used
to set the display interval::

	{date_heading display="daily"}

Choices for the "display" parameter are:

-  {date\_heading display="hourly"}
-  {date\_heading display="daily"}
-  {date\_heading display="weekly"}
-  {date\_heading display="monthly"}
-  {date\_heading display="yearly"}

If no parameter is specified it will default to "daily".

**Note:** You can use as many date\_headers as you want in the same tag.
There is a bit of a performance hit, however, since date parsing is the
most processor intensive. Read the caching section for information on
improving performance.

categories
----------

::

	{categories}  {category_image} <a href="{path='channel/index'}">{category_name}</a>  {/categories}

Categories are unique in that they are a "looping pair". Since you can
have multiple categories per entry, we need a mechanism to show as many
categories as exist for each entry.

Parameters
----------


backspace=
~~~~~~~~~~

::

	{categories backspace="7"}

Backspacing removes characters (including spaces and line breaks) from
the last iteration of the loop. For example, if you put a <br /> tag
after each category you'll have this::

	Local News<br />          Health News<br />  Science News<br />

You might, however, not want the <br /> tag after the final item. Simply
count the number of characters (including spaces and line breaks) you
want to remove and add the backspace parameter to the tag. The <br />
tag has 6 characters plus a new line character, so you would do this::

	{categories backspace="7"}    {category_name}<br /> {/categories}

That will produce code like this::

	   Local News<br />             Health News<br />        Science News

limit=
~~~~~~

::

	{categories limit="1"}

This parameter limits the number of categories output by this variable
pair. When in use, it will limit the output to the number provided,
using the specified order in the Category Management page to determine
which categories get shown.

show=
~~~~~

::

	{categories show="4|7"}

With this parameter, you can specify which categories can be included
when listing them with the {categories} variable pair. For instance, if
you had entries that belonged to several categories, you could use this
parameter to limit the display to only those categories you specified.
While the entries may actually belong to more categories, only those you
specify would be shown. Category IDs are separated by the pipe character
to specify more than one category.

You may alternatively specify which categories to not show::

	{categories show="not 3|6|8"}

show\_group=
~~~~~~~~~~~~

::

	{categories show_group="1|3"}

With this parameter, you can specify which category groups can be
included when listing categories with the {categories} variable pair.
For instance, if you had entries in a channel that had multiple category
groups but only wanted to show the categories for one of those groups,
you could specify that category group's ID number with this parameter.
Category Group IDs are separated by the pipe character to specify more
than one category group.

You may alternatively specify which category groups to not show::

	{categories show_group="not 2|4"}

Variables
---------


category\_description
~~~~~~~~~~~~~~~~~~~~~

::

	{category_description}

The description associated with the category.

category\_group
~~~~~~~~~~~~~~~

::

	{category_group}

The category group ID of the category.

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

	{category_name}

This displays the name of the category.

category\_url\_title
~~~~~~~~~~~~~~~~~~~~

::

	{category_url_title}

This variable displays the URL title of the category

path=''
~~~~~~~

::

	{path='channel/index'}

This variable will be replaced by a URL to the specifies Template
Group/Template. The category designation information will automatically
be added to the end of the URL so that the target page will know which
category to display.

If you want the category links to point to your site index instead of a
particular template group/template you can use SITE\_INDEX instead::

	{categories}  <a href="{path='SITE_INDEX'}">{category_name}</a>  {/categories}

Custom Category Fields
~~~~~~~~~~~~~~~~~~~~~~

All custom fields assigned to a category can be accessed using the
"short name" of the field::

	{class} {extended_description} {category_name_fr} etc..

These are totally dynamic in that any field you create for your category
will automatically be available by its "short name" as a variable.
