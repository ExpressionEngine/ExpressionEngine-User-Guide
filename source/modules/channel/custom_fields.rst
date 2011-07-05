Channel Fields
==============

All fields assigned to a channel can be accessed using the "short name"
of the field

::

	{body}
	{summary}
	{extended}
	
	etc..

These are totally dynamic in that any field you create for your channel
will automatically be available by its "short name" as a variable.
Channel fields can be assigned as different types, a few of which have
more formatting options to simplify their use.

Channel fields are managed in your control panel at:

Admin > Channel Administration > Channel Fields


File Fields
-----------

::

	{news_image}

The file field will contain the full url to the uploaded file. You may
want to use parts of that path, such as the filename. In order to
accommodate this you can use the field as a tag pair

::

	{news_image}
	    The file is a: {extension}
	{/news_image}

The available variables are:

-  {path} - the path to the parent folder
-  {filename} - the name of the file
-  {extension} - the file extension

Wrap Parameter
~~~~~~~~~~~~~~

You will frequently want to link to the file in your entry. Using the
wrap parameter can simplify this process::

	{news_image wrap="link"}

Will render as::

	<a href="http://example.com/dir/filename.ext">filename</a>

It can also be used to create image tags. In this case the filename will
be used to create the alt parameter. ::

	{news_image wrap="image"}

Which will output as::

	<img src="http://example.com/dir/filename.ext" alt="filename" />

Checkbox Fields
---------------

Like file fields, checkbox fields are special in that they can be used
as a single tag and as a tag pair. 

::

	{poll_options}
	    {item}<br />
	{/poll_options}

Limit Parameter
~~~~~~~~~~~~~~~

This parameter limits the number of selected items output by the tag. It
works for both the single variable, as well as the tag pair.

Markup Parameter
~~~~~~~~~~~~~~~~

As a single tag, the multi option fields will display a comma seperated
list of values. If you want an html list, you can use markup="ul" or
markup="ol" to change the output to the equivalent html list

::

	{poll_options markup="ul"}

Which will render as

::

	<ul>
	    <li>Green</li>
	    <li>Blue</li>
	    <li>Orange</li>
	</ul>

Backspace Parameter
~~~~~~~~~~~~~~~~~~~

When used as a tag pair, the multi option fields are a looping pair.
Backspacing removes characters (including spaces and line breaks) from
the last iteration of the loop. For example, if you put a <br /> tag
after each item you'll have this

::

	{poll_options backspace="7"}
	    {item}<br />
	{/poll_options}

Which will render as

::

	<ul>
	    <li>Green</li><br />
	    <li>Blue</li><br />
	    <li>Orange</li><br />
	</ul>

You might, however, not want the <br /> tag after the final item. Simply
count the number of characters (including spaces and line breaks) you
want to remove and add the backspace parameter to the tag. The <br />
tag has 6 characters plus a new line character.

Multi-Select Fields
-------------------

Multiselect fields are identical to `Checkbox
Fields <#checkbox_fields>`_ in their usage.

Member Fields
-------------

All member profile fields can be accessed using the "short name" of the
field

::

	{age} 
	{gender} 
	{zodiac} 
	etc...

These are totally dynamic in that any profile field you create for your
members will automatically be available by its "short name" as a
variable.

Date Fields
-----------

Any field that is a date type can be formatted just like other dates.
Simply use the name of the field at the beginning of the tag. For
example, if your field is named **my\_date**, you'll format it like
this

::

	{my_date format="%Y %m %d"}

See `Date Variable
Formatting <../../templates/date_variable_formatting.html>`_ for more
information.
