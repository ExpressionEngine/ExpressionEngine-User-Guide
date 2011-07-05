File Entries - Variable Pairs
=============================

Variable pairs contain an opening and closing tag as well as content
in-between. The reason variable pairs have an opening and closing pair
is because the information between the pairs can be shown or not shown
if the criteria for each tag is met. Variable pairs also allow you to
'loop through' content when there is more than one value for a variable,
such as a file that has multiple categories to show.

categories
----------

::

	{categories}  {category_image} <a href="{path='gallery/index'}">{category_name}</a>  {/categories}

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

	{path='gallery/index'}

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
