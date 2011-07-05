File Tag Variables
==================

:doc:`Variable Pairs <variable_pairs>`

Single Variables
----------------


absolute\_count
~~~~~~~~~~~~~~~

::

	{absolute_count}

The absolute "count" out of the current file being displayed by the tag,
including those files on previous pages (if using pagination).

If five entries are being displayed per page, then for the fourth entry
on the second page the {absolute\_count} variable would have a value of
"9".

caption
~~~~~~~

::

	{caption}

The caption associated with the entry.

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

count
~~~~~

::

	{count}

The "count" out of the current file being displayed by the tag on the
current page.

If five entries are being displayed per page, then for the fourth entry
on the page the {count} variable would have a value of "4".

custom\_field\_one
~~~~~~~~~~~~~~~~~~

Up to six custom fields can be shown, with the following syntax::

	{custom_field_one}
	{custom_field_two}
	{custom_field_three}
	{custom_field_four}
	{custom_field_five}
	{custom_field_six}

filename
~~~~~~~~

::

	{filename}

The raw filename of the file associated with the entry. For instance,
zoo.jpg.

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

file\_url
~~~~~~~~~

::

	{file_url}

The URL to the file.

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

Single Variable Dates
---------------------

Several date variables are available for use. As with other date
variables, these require the "format" parameter in order to define how
the date should be displayed. See the `date variable
formatting <../../templates/date_variable_formatting.html>`_ page for
more information.


entry\_date
~~~~~~~~~~~

::

	{entry_date format="%Y %m %d"}

The date of the entry.

edit\_date
~~~~~~~~~~

::

	{edit_date format="%Y %m %d"}

The date on which the file was edited through the system.

Thumbnail Variables
-------------------

Each file upload directory may be set to automatically generate
thumbnail versions of an uploaded image file. You may display the
following information for each auto-generated thumbnail:

-  height
-  width
-  size
-  url

The variable for each of the above is created by combining the resize
setting short name with the desired information, separated by an
underscore. For example, if you have two resized images created with
shortnames 'small' and 'medium', the code to display the url for each
would be::

	{small_url}
	{medium_url}

Variable Pairs
--------------

Variable pairs contain an opening and closing tag as well as content
in-between. Example::

	{date_heading}
		<h1>{entry_date format="%Y %m %d"}</h1>
	{/date_heading}

Conditionals
------------

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
