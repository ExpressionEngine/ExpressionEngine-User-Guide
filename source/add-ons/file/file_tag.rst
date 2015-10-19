File Entries Tag
================

.. contents::
   :local:
   :depth: 1

.. note:: If you're looking for how to use file fields in your channel
  entries loops, you should look at :ref:`the file field variable
  usage documentation <file_field_variable_usage>` in the channel fields
  documentation.

Introduction
------------

The File Entries tag allows you to display files and their associated
meta-data on the frontend through the use of standard ExpressionEngine
tags.


Here is a simple example of a possible usage of this tag::

	{exp:file:entries limit="20" paginate="both" directory_id="3"}
		<p><strong>{title}</strong> - posted: {entry_date format='%h:%i %A'}</p>

		{categories}
			{category_image} - <a href="{path='about/test'}">{category_name}</a><br>
		{/categories}

		{if medium_file_url}
			<p><a href="{id_path='gallery/comments'}"><img src="{medium_file_url}" width="{medium_width}" height="{medium_height}" alt="{title}" title="{title}" /></a></p>
		{/if}

		{caption}
	{/exp:file:entries}

Parameters
----------

.. contents::
	:local:

category=
~~~~~~~~~

::

	category="2"

Categories are specified by ID number (the ID number of each
:doc:`category </cp/channel/cat/form-cat>` is displayed in the
Control Panel). The reason we use the ID is because categories can be
called anything (with spaces, quotes, etc.), and also renamed. It would
be much more difficult to have to update the tag parameters every time
you updated a category name. Further, you can have multiple categories
with the same name either in different Category Groups or in different
parts of the hierarchy within the same Category Group.

And as with some of the other parameters, you can stack categories to
get entries with any of those categories::

	category="2|45|4|9"

Or use "not" to exclude categories

::

	category="not 4|5|7"

.. note:: When you use the category="3\|4" parameter (not excluding),
	you are implicitly telling ExpressionEngine to only deal with
	entries that have been assigned one or more categories. If you have
	entries that haven't been categorized then they will be ignored and
	not included in the results. However, if you are using exclusion
	(``category="not 3|4"``), then you will be shown all entries without
	those categories *including* those without any categories assigned.
	To change this behavior when excluding categories use the
	`uncategorized_entries=`_ parameter.

.. note:: Using this parameter will automatically cause ExpressionEngine
	to *ignore* any category information specified via the URL. For
	instance, if you are on a "category page" (e.g. a "/C13/" segment in
	the URL) that will be completely ignored in favor of whatever you
	have specified via the parameter.

category\_group=
~~~~~~~~~~~~~~~~

::

	category_group="2"

Category Groups are specified by ID number (the ID number of each
:doc:`category group </cp/channel/cat/index>` is
displayed in the Control Panel). The reason we use the ID is because
category groups can be called anything (with spaces, quotes, etc.), and
also renamed. It would be much more difficult to have to update the tag
parameters every time you updated a category name.

And as with some of the other parameters, you can stack category groups::

	category_group="1|2|4"

Or use "not" to exclude categories

::

	category_group="not 2"

.. note:: Using this parameter will automatically cause ExpressionEngine
	to *ignore* any category information specified via the URL. For
	instance, if you are on a "category page" (e.g. a "/C13/" segment in
	the URL) that will be completely ignored in favor of whatever you
	have specified via the parameter.

directory\_id=
~~~~~~~~~~~~~~

::

	directory_id="3"

From which :doc:`file upload directory
</cp/files/index>` to show the files (will
show files from any directory if none is specified). Additionally, you
can use the pipe character to separate multiple directories::

	directory_id="1|2|3"

Or you can add the word "not" (with a space after it) to exclude
directories::

	directory_id="not 1|2|3"

disable=
~~~~~~~~

::

	disable="categories"

The disable= parameter allows you to turn off aspects of the tag that
you might not be using in order to improve performance. The File tag
is designed to fetch a lot of information by default, but through the
use of the "disable" parameter you can turn off aspects of the tag in
order to make it more lightweight.

The syntax for the disable parameter is this: disable="ITEM YOU WANT TO
DISABLE". The following items can be turned off:

-  categories
-  pagination

.. note:: If you disable categories, category fields will automatically
	be disabled.

You may specify multiple items to disable by separating them with the
pipe character::

	disable="categories|pagination"

The best approach is to examine the data you are showing in each
instance of the tag. If there is a type of data you are not utilizing,
turn it off.

dynamic=
~~~~~~~~

::

	dynamic="no"

The file display engine sets some parameters dynamically, based on what
is in the URL. There are times, however, where you do not want the
parameters affected by what the URL contains. To override the dynamic
nature of the file tag, use dynamic="no".

file\_id=
~~~~~~~~~

::

	file_id="22"

You can hard code the file entries tag to show specific files. You may
also specify multiple files by separating them with the pipe character.
This parameter takes precedence over any entry specified in the url.

limit=
~~~~~~

::

	limit="30"

Allows you to limit the number of files. The limit will default to 100
if a value is not specified. If you are using
:doc:`pagination </templates/pagination>` then this
will determine the number of files shown per page.

orderby=
~~~~~~~~

::

	orderby="date"

The "order" parameter sets the display order of the files. Setting
options for this parameter include:

-  orderby="date"
-  orderby="random"

relaxed\_categories=
~~~~~~~~~~~~~~~~~~~~

::

	relaxed_categories="yes"

This parameter allows you to use the category indicator in your URLs
with an entries tag specifying multiple channels that do **not** share
category groups.

sort=
~~~~~

::

	sort="desc"

The sort order can be "asc" (ascending order or "oldest item first" for
dates) or "desc" (descending order or "newest item first" for dates). If
you do not use a sort order the default is desc.

uncategorized\_entries=
~~~~~~~~~~~~~~~~~~~~~~~

::

	uncategorized_entries="no"

By default, when specifying the `category=`_ parameter with 'not ' at the
beginning , ExpressionEngine will show all files without those
categories *including* any files without categories assigned. If you
would prefer that ExpressionEngine not show these uncategorized files,
then set this parameter to "no" and they will be ignored.


Variables
---------

.. contents::
	:local:

absolute\_count
~~~~~~~~~~~~~~~

::

	{absolute_count}

The absolute "count" out of the current file being displayed by the tag,
including those files on previous pages (if using pagination).

If five entries are being displayed per page, then for the fourth entry
on the second page the {absolute\_count} variable would have a value of
"9".

count
~~~~~

::

	{count}

The "count" out of the current file being displayed by the tag on the
current page.

If five entries are being displayed per page, then for the fourth entry
on the page the {count} variable would have a value of "4".

credit
~~~~~~

::

	{credit}

The credit information associated with the entry, typically used for photo
attributions.

description
~~~~~~~~~~~

::

	{description}

The description associated with the entry.


directory\_id
~~~~~~~~~~~~~

::

	{directory_id}

The ID number of the file upload directory

directory\_title
~~~~~~~~~~~~~~~~

::

	{directory_title}

This variable simply displays the content from the "Descriptive name of
upload directory" setting for the directory that the file is in.

entry\_date
~~~~~~~~~~~

::

	{entry_date format="%Y %m %d"}

The date of the file entry. As with other date variables, these require
the "format" parameter in order to define how the date should be
displayed. See the :doc:`date variable formatting
</templates/date_variable_formatting>` page for more information.

edit\_date
~~~~~~~~~~

::

	{edit_date format="%Y %m %d"}

The date on which the file was edited through the system. As with other
date variables, these require the "format" parameter in order to define
how the date should be displayed. See the :doc:`date variable formatting
</templates/date_variable_formatting>` page for more information.

filename
~~~~~~~~

::

	{filename}

The raw filename of the file associated with the entry. For instance,
zoo.jpg.

file\_url
~~~~~~~~~

::

	{file_url}

The URL to the file.

height
~~~~~~

::

	{height}

The height (in pixels) of the full-size image. (Empty for non-image
files.)

id\_path
~~~~~~~~

::

	{id_path='gallery/full_image'}

The URL to the specified template. The ID number of the entry will be
automatically added. For example, this::

	<a href="{id_path='gallery/full_image'}">my picture</a>

Would be rendered like this::

	<a href="http://example.com/index.php/gallery/full_image/234/">my picture</a>

location
~~~~~~~~

::

	{location}

The user-defined geographic location information associated with the
entry, typically used for photos.

size
~~~~

::

	{size}

The size (in MB) of the file.

switch=
~~~~~~~

::

	{switch="option_one|option_two|option_three"}

This variable permits you to rotate through any number of values as the
entries are displayed. The first entry will use "option\_one", the
second will use "option\_two", the third "option\_three", the fourth
"option\_one", and so on.

The most straightforward use for this would be to alternate colors. It
could be used like so::

	{exp:file:entries} <div class="{switch="one|two"}"> <h1>{filename}</h1> {caption} </div> {/exp:file:entries}

The entries would then alternate between <div class="one"> and <div
class="two">.

Multiple instances of the {switch=} tag may be used and the system will
intelligently keep track of each one.

title
~~~~~

::

	{title}

The title of the entry.

total\_results
~~~~~~~~~~~~~~

::

	{total_results}

The total number of files being displayed by this tag on the current
page.

width
~~~~~

::

	{width}

The width (in pixels) of the full-size image. (Empty for non-image
Files.)


Thumbnail Variables
-------------------

Each file upload directory may be set to automatically generate
thumbnail versions of an uploaded image file. You may display the
following information for each auto-generated thumbnail:

-  height
-  width
-  size
-  file_url

The variable for each of the above is created by combining the resize
setting short name with the desired information, separated by an
underscore. For example, if you have two resized images created with
shortnames 'small' and 'medium', the code to display the url for each
would be::

	{small_file_url}
	{medium_file_url}


Categories Variable Pair
------------------------

.. contents::
	:local:

::

	{categories}
		{category_image} <a href="{path='gallery/index'}">{category_name}</a>
	{/categories}

Categories are a "looping pair". Since you can
have multiple categories per file, we need a mechanism to show as many
categories as exist for each file.

The backspace parameter is also supported. For example, if you put a <br /> tag
after each category you'll have this::

	Local News<br />          Health News<br />  Science News<br />

You might, however, not want the <br /> tag after the final item. Simply
count the number of characters (including spaces and line breaks) you
want to remove and add the backspace parameter to the tag. The <br />
tag has 6 characters plus a new line character, so you would do this::

	{categories backspace="7"}    {category_name}<br /> {/categories}

That will produce code like this::

	   Local News<br />             Health News<br />        Science News


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

Conditionals
------------

.. contents::
	:local:

Conditionals work in the file tag::

	{if name=="bozo"}  You've got a big nose!  {/if}

if viewable\_image
~~~~~~~~~~~~~~~~~~

::

	{if viewable_image} content {/if}

You may use this conditional to identify images viewable in the browser
('bmp','gif','jpeg','jpg','jpe','png'), particularly useful for image
tags.

if no\_results
~~~~~~~~~~~~~~

::

	{if no_results} content {/if}

You may use this conditional for displaying a message in the case when
no files are returned. The contents inside of the conditional will be
displayed in cases where there are no results returned for the tag. ::

	{if no_results}  <p>There are no current files to view.</p>  {/if}

Further, you may specify that another Template be shown in a case when
there are no results. In order to do that, you must use the redirect=
variable::

	{if no_results} {redirect="site/noresult"} {/if}

Pagination
----------

The File module supports :doc:`/templates/pagination`.
