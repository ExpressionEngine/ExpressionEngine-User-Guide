File
====

File fields store uploaded files and images, and utilize the built-in file browser for your publishers to upload and insert files. Your site must have at least one upload directory before you can create a file field.

Field Options
-------------

Allowed File Types
~~~~~~~~~~~~~~~~~~

Gives the option to limit the file field to images only, or allow all safe file types.

Allowed Directory
~~~~~~~~~~~~~~~~~

Gives the option to limit the file field's ability to browse and upload to certain directories. You can allow all directories, or only allow one directory to browse and upload to.

Show Existing Files?
~~~~~~~~~~~~~~~~~~~~

When the form is rendered on the front-end using :doc:`/channel/channel_form/index`, this setting allows you to specify whether or not you'd like to show existing files in the selected upload directory and allow the user to choose from those in addition to being able to upload a new file, or do not show existing files and only allow the user to upload a new file.

Existing Files Limit
~~~~~~~~~~~~~~~~~~~~

Regarding the **Show Existing Files?** option above, allows you to limit the number of files that appear in the existing files drop down.

.. _file_field_variable_usage:

Template Tags
-------------

Single Variable Usage
~~~~~~~~~~~~~~~~~~~~~

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
^^^^^^^^^^^^^^

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
~~~~~~~~~~~~~~~~~~~

You can show detailed information about the file by using it as a tag
pair and then referencing any of the available variables::

  {news_image}
    This file is a {extension} and was uploaded on {upload_date format="%Y %m %d"}
    <a href="{url}">View it now</a>
  {/news_image}

.. contents::
  :local:

credit
^^^^^^

::

  {credit}

The credit assigned to the file.

description
^^^^^^^^^^^

::

  {description}

The description assigned to the file.

extension
^^^^^^^^^

::

  {extension}

The file's extension, if it has one.

file_id
^^^^^^^

::

  {file_id}

The unique id of the file.

file_name
^^^^^^^^^

::

  {file_name}

The full name of the file (including its extension).

file_size
^^^^^^^^^

::

  {file_size}

The size of the file (in bytes).

height
^^^^^^

::

  {height}

The height of the image (in pixels) if applicable.

If you have defined any :ref:`image_manipulations` you can modify this
tag with the Short Name of the manipulation. For example, if you've
defined a "small" manipulation, the following will output the height of
that version::

  {height:small}

location
^^^^^^^^

::

  {location}

The location assigned to the file.

mime_type
^^^^^^^^^

::

  {mime_type}

The automatically-detected MIME type of the file.

modified_date
^^^^^^^^^^^^^

::

  {modified_date format="%Y %m %d"}

The date the file was last modified. See :doc:`Date Variable Formatting
</templates/date_variable_formatting>` for more information.

path
^^^^

::

  {path}

The URL to the folder containing the file, including a trailing slash.

title
^^^^^

::

  {title}

The title assigned to the file.

upload_date
^^^^^^^^^^^

::

  {upload_date format="%Y %m %d"}

The date the file was first uploaded. See `Date Variable Formatting
</templates/date_variable_formatting>` for more information.

.. _image_manipulation_pair:

url
^^^

::

  {url}

The full URL to the file.

If you have defined any :ref:`image_manipulations` you can modify this
tag with the Short Name of the manipulation. For example, if you've
defined a "small" manipulation, the following will output the URL to
that version::

  {url:small}

width
^^^^^

::

  {width}

The width of the image (in pixels) if applicable.

If you have defined any :ref:`image_manipulations` you can modify this
tag with the Short Name of the manipulation. For example, if you've
defined a "small" manipulation, the following will output the width of
that version::

  {width:small}
