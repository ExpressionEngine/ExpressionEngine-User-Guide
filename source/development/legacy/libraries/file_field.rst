.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

################
File Field Class
################

.. contents::
  :local:

.. highlight:: php

***********************
Recommended Alternative
***********************

     The file field class is not recommended for use in ExpressionEngine version 3.  
     When creating a file upload in the control panel, use the :doc:`CP/FilePicker Service </development/services/filepicker>`.

****************************
Calling the File Field Class
****************************

.. class:: File_field

  ExpressionEngine uses the File Field class whenever a file field and
  file browser is needed. To use the file browser in your add-on, you'll
  need to load the File Field library::

    ee()->load->library('file_field');

*********************
Creating a File Field
*********************

.. method:: field($field_name[, $data = ''[, $allowed_file_dirs = 'all'[, $content_type = 'all']]])

  Before you can use the file browser, you need a field that the file
  browser knows how to work with. To create that field, you'll use the
  field method::

    ee()->file_field->field($field_name, $data = '', $allowed_file_dirs = 'all', $content_type = 'all')

  :param string $field_name: the name of the field being created
  :param string $data: the data that already exists for this field
  :param string $allowed_file_dirs: ``'all'`` for all directories, or
    the ID of a particular directory
  :param string $content_types: ``'all'`` for all content types, or
    ``'image'`` for images only
  :returns: the HTML representation of the field
  :rtype: String

***************************
Initializing a File Browser
***************************

.. method:: browser($config = array()[, $endpoint_url = 'C=content_publish&M=filemanager_actions'])

  What you need to do is
  initialize the file browser by optionally passing it two parameters::

    ee()->file_field->browser($config, $endpoint_url);

  :param array $config: Associative array containing configuration
    options (see below)
  :param string $endpoint_url: the URL the file browser will hit

  The ``$config`` parameter is technically optional, but if you don't
  pass it, the library will assume you're on the Publish page and
  working with standard file fields and textareas. The ``$config``
  parameter is an associative array that can handle five different key-
  value pairs:

    - ``publish`` (*optional*): If set to ``TRUE``, it will setup the
      file browsers as if you were  on the publish page. If no
      ``$config`` parameter exists, this will be assumed. If this is
      set, all other key-value pairs are ignored.
    - ``trigger``: The selector representing the choose file button that
      will be passed to jQuery to establish an event handler.
    - ``field_name`` (*optional*): The input field's name that you want
      the results to go to. If undefined, it will assume the name is
      ``userfile``
    - ``settings`` (*optional*): JSON object defining the content type
      and directory ID::

      {"content_type": "all/image", "directory": "all/<directory_id>"}

    - callback: Javascript function that will be called when an image is
      selected. There are two parameters available to the callback:
      ``file`` is an object of the selected file's data, and ``field``
      is a jQuery object representing the field from the field_name
      given::

        function (file, field) {
            console.log(file, field);
        }

     You will need to add CSS and JavaScript to achieve a fully functioning file browser.

***************************************
Validating the data from the File Field
***************************************

.. method:: validate($data, $field_name[, $required = 'n'])

  When using the File Field library's ``field()`` method to generate the
  file field for you, it creates two fields: one that facilitates
  uploading using the file browser, and one that works when Javascript
  is disabled. If Javascript is disabled, it will then upload the file.
  Either way, the ``validate()`` method will return the name of the file
  in an array::

    ee()->file_field->validate($data, $field_name, $required = 'n');

  :param string $data: the data to validate
  :param string $field_name: the name of the field being validated
  :param string $required: ``'n'`` if the field isn't required, ``'y'``
    if it is
  :returns: Associative array with a ``'value'`` key with a value that's
    uploaded file's name
  :rtype: Array

*******************
Formatting the data
*******************

.. method:: format_data($file_name[, $directory_id = 0])

  After you've validated the data, you now have to format the data for
  use in templates::

    ee()->file_field->format_data($file_name, $directory_id = 0);

  :param string $file_name: the file name
  :param integer $directory_id: the directory id where the file is
    located
  :returns: the formatted field data (e.g. ``{filedir_1}filename.ext``)
  :rtype: String

**************************
Parsing the Formatted Data
**************************

.. method:: parse_field($data)

  This method is of more use to ExpressionEngine than anyone else, but
  it's here if you need it. When you have template content that has
  ``{filedir_n}``'s all over the place, you need to parse them, so the
  ``{filedir_n}`` tag is replaced with the actual URL::

    ee()->file_field->parse_field($data);

  :param string $data: the template to parse
  :returns: the template with ``{filedir_n}`` parsed out
  :rtype: String

*********************************
Parsing ``{filedir_n}`` Variables
*********************************

.. method:: parse_string($data[, $parse_encoded = FALSE])

  This method parses all ``{filedir_n}`` variables within a given string
  (``$data``) and can optionally look for already encoded
  ``{filedir_n}`` tags (e.g. ``&#123;filedir_n&#125;``)::

    ee()->file_field->parse_string($data);

  :param string $data: The string to parse ``{filedir_n}`` in
  :param bool $parse_encoded: Set to ``TRUE`` to parse encoded (e.g.
    ``&#123;``) tags
  :returns: The original string with all ``{filedir_n}``'s parsed
  :rtype: String
