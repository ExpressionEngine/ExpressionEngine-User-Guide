File Field Class
================

.. contents::
	:local:

Calling the File Field Class
----------------------------

ExpressionEngine uses the File Field class whenever a file field and file
browser is needed. To use the file browser in your add-on, you'll need to
load the File Field library

::

    ee()->load->library('file_field');


Creating a File Field
---------------------

Before you can use the file browser, you need a field that the file browser
knows how to work with. To create that field, you'll use the field method::

	ee()->file_field->field($field_name, $data = '', $allowed_file_dirs = 'all', $content_type = 'all')


+-----------------------+-----------------------------------------------------+
|Parameter              |Value                                                |
+=======================+=====================================================+
|``$field_name``        |(string) the name of the field being created         |
+-----------------------+-----------------------------------------------------+
|``$data``              |(string) the data that already exists for this field |
+-----------------------+-----------------------------------------------------+
|``$allowed_file_dirs`` |(string) 'all' for all directories, or the ID of a   |
|                       |particular directory                                 |
+-----------------------+-----------------------------------------------------+
|``$content_types``     |(string) 'all' for all content types, or 'image' for |
|                       |images only                                          |
+-----------------------+-----------------------------------------------------+

:returns:
	String: the html representation of the field


Initializing a File Browser
---------------------------

The File Field class loads most of what you need for your file browser:
javascript and css especially. What you need to do is initialize the file
browser by optionally passing it two parameters::

	ee()->file_field->browser($config, $endpoint_url);


``$config`` parameter
~~~~~~~~~~~~~~~~~~~~~

The ``$config`` parameter is technically optional, but if you don't pass it, the
library will assume you're on the Publish page and working with standard file
fields and textareas. The ``$config`` parameter is an associative array that can
handle five different key-value pairs:

	- publish (*optional*): If set to ``TRUE``, it will setup the file browsers as if you were	on the publish page. If no ``$config`` parameter exists, this will be assumed. If this is set, all other key-value pairs are ignored.
	- trigger: The selector representing the choose file button that will be passed to jQuery to establish an event handler.
	- field_name (*optional*): The input field's name that you want the results to go to. If undefined, it will assume the name is ``userfile``
	- settings (*optional*): JSON object defining the content type and directory ID::

		{"content_type": "all/image", "directory": "all/<directory_id>"}

	- callback: Javascript function that will be called when an image is selected. There are two parameters available to the callback: ``file`` is an object of the selected file's data, and ``field`` is a jQuery object representing the field from the field_name given::

		function (file, field) {
			console.log(file, field);
		}


``$endpoint_url`` parameter
~~~~~~~~~~~~~~~~~~~~~~~~~~~

``$endpoint_url`` is an optional parameter and it's recommended that unless you
know what you're getting into, to just leave this parameter off. The
``$endpoint_url`` defines the URL where the file browser will attempt to
retrieve the file browser HTML, directories, directory contents, and directory
categories.


Validating the data from the File Field
---------------------------------------

When using the File Field library's ``field()`` method to generate the file
field for you, it creates two fields: one that facilitates uploading using the
file browser, and one that works when Javascript is disabled. If Javascript is
disabled, it will then upload the file. Either way, the ``validate()`` method
will return the name of the file in an array.

::

	ee()->file_field->validate($data, $field_name, $required = 'n');


+---------------+-------------------------------------------------------------+
|Parameter      |Value                                                        |
+===============+=============================================================+
|``$data``      |(string) the data to validate                                |
+---------------+-------------------------------------------------------------+
|``$field_name``|(string) the name of the field being validated               |
+---------------+-------------------------------------------------------------+
|``$required``  |(string) 'n' if the field isn't required, 'y' if it is       |
+---------------+-------------------------------------------------------------+

:returns:
	Array: (value => uploaded file's name)


Formatting the data
-------------------

After you've validated the data, you now have to format the data for use in
templates::

	ee()->file_field->format_data($file_name, $directory_id = 0);

+-----------------+-----------------------------------------------------------+
|Parameter        |Value                                                      |
+=================+===========================================================+
|``$file_name``   |(string) the file name                                     |
+-----------------+-----------------------------------------------------------+
|``$directory_id``|(integer) the directory id where the file is located       |
+-----------------+-----------------------------------------------------------+

:returns:
	String: the formated field data e.g. {filedir_1}filename.ext


Parsing the Formatted Data
--------------------------

This method is of more use to ExpressionEngine than anyone else, but it's here
if you need it. When you have template content that has ``{filedir_n}``s all
over the place, you need to parse them, so the ``{filedir_n}`` tag is replaced
with the actual URL::

	ee()->file_field->parse_field($data);

+-----------------+-----------------------------------------------------------+
|Parameter        |Value                                                      |
+=================+===========================================================+
|``$data``        |(string) the template to parse                             |
+-----------------+-----------------------------------------------------------+

:returns:
	String: the template with ``{filedir_n}`` parsed out
