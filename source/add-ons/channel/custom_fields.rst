##############
Channel Fields
##############

All fields assigned to a Channel can be accessed using the Short Name
of the field::

	{body}
	{summary}
	{extended}

	etc..

There are a number of field types included with ExpressionEngine, and
add-ons can make even more available. Channel fields are managed in your
control panel at
:menuselection:`Developer Tools --> Channel Manager --> Field Groups`.

.. contents::
	:local:
	:depth: 1

.. _file_field_variable_usage:

**********
File Field
**********

.. contents::
	:local:
	:depth: 1

Single Variable Usage
=====================

In its most basic form, a File field can be used as a single tag that
simply outputs the URL of the file::

	{news_image}

.. _image_manipulation_single:

If you have defined any :ref:`image_manipulations` you can modify the
tag with the Short Name of the manipulation. For example, if you've
defined a "small" manipulation, the following will output the URL to
that version::

	{news_image:small}

Wrap Parameter
--------------

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

.. _channel_entry_file_field_pair:

Variable Pair Usage
===================

You can show detailed information about the file by using it as a tag
pair and then referencing any of the available variables::

	{news_image}
		This file is a {extension} and was uploaded on {upload_date format="%Y %m %d"}
		<a href="{url}">View it now</a>
	{/news_image}

.. contents::
	:local:

credit
------

::

	{credit}

The credit assigned to the file.

description
-----------

::

	{description}

The description assigned to the file.

extension
---------

::

	{extension}

The file's extension, if it has one.

file_id
-------

::

	{file_id}

The unique id of the file.

file_name
---------

::

	{file_name}

The full name of the file (including its extension).

file_size
---------

::

	{file_size}

The size of the file (in bytes).

height
------

::

	{height}

The height of the image (in pixels) if applicable.

location
--------

::

	{location}

The location assigned to the file.

mime_type
---------

::

	{mime_type}

The automatically-detected MIME type of the file.

modified_date
-------------

::

	{modified_date format="%Y %m %d"}

The date the file was last modified. See :doc:`Date Variable Formatting
</templates/date_variable_formatting>` for more information.

path
----

::

	{path}

The URL to the folder containing the file, including a trailing slash.

title
-----

::

	{title}

The title assigned to the file.

upload_date
-----------

::

	{upload_date format="%Y %m %d"}

The date the file was first uploaded. See `Date Variable Formatting
</templates/date_variable_formatting>` for more information.

.. _image_manipulation_pair:

url
---

::

	{url}

The full URL to the file.

If you have defined any :ref:`image_manipulations` you can modify this
tag with the Short Name of the manipulation. For example, if you've
defined a "small" manipulation, the following will output the URL to
that version::

	{url:small}

width
-----

::

	{width}

The width of the image (in pixels) if applicable.

***************
Checkbox Fields
***************

Like file fields, checkbox fields are special in that they can be used
as a single tag and as a tag pair.

::

	{poll_options}
	    {item}<br />
	{/poll_options}

Limit Parameter
===============

This parameter limits the number of selected items output by the tag. It
works for both the single variable, as well as the tag pair.

Markup Parameter
================

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
===================

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

*******************
Multi-Select Fields
*******************

Multiselect fields are identical to `Checkbox
Fields <#checkbox_fields>`_ in their usage.

*************
Member Fields
*************

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

***********
Date Fields
***********

Any field that is a date type can be formatted just like other dates.
Simply use the name of the field at the beginning of the tag. For
example, if your field is named **my\_date**, you'll format it like
this

::

	{my_date format="%Y %m %d"}

See :doc:`Date Variable Formatting
</templates/date_variable_formatting>` for more information.
