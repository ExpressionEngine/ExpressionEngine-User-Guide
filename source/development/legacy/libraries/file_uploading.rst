####################
File Uploading Class
####################

.. highlight:: php

ExpressionEngine's File Uploading Class permits files to be uploaded. You can set various preferences, restricting the type and size of the files.

.. contents::
  :local:

***********
The Process
***********

Uploading a file involves the following general process:

- An upload form is displayed, allowing a user to select a file and upload it.
- When the form is submitted, the file is uploaded to the destination you specify.
- Along the way, the file is validated to make sure it is allowed to be uploaded based on the preferences you set.
- Once uploaded, the user will be shown a success message.

To demonstrate this process here is brief tutorial. Afterward you'll find reference information.

Creating the Upload Form
========================

Create a view called ``upload_form.php``. In it, place this code and save it to your ``addon/views/`` directory::

	<?php echo $error;?>
	<?php echo form_open_multipart('upload/do_upload');?>
    <input type="file" name="userfile" size="20" />
    <br /><br />
    <input type="submit" value="upload" />
	</form>

You'll notice we are using a form helper to create the opening form tag. File uploads require a multipart form, so the helper creates the proper syntax for you. You'll also notice we have an ``$error`` variable. This is so we can show error messages in the event the user does something wrong.

The Success Page
================

Create a view called ``upload_success.php``. In it, place this code and save it to your ``addon/views/`` directory::

	<h3>Your file was successfully uploaded!</h3>

	<ul>
  	<?php foreach ($upload_data as $item => $value):?>
    	<li><?php echo $item;?>: <?php echo $value;?></li>
  	<?php endforeach; ?>
	</ul>

	<p><?php echo anchor('upload', 'Upload Another File!'); ?></p>

The Controller
==============

Inside your controller (most likely in a ``mcp.addon.php`` file) you'll need to add a few methods. First create a method to display your ``upload_form.php`` view::

		public function index()
		{
			ee()->load->view('upload_form', array('error' => ' ' ));
		}

Then, you'll need to create a method to handle the form::

		public function do_upload()
		{
			$config['upload_path']   = './uploads/';
			$config['allowed_types'] = 'gif|jpg|png';
			$config['max_size']      = 100;
			$config['max_width']     = 1024;
			$config['max_height']    = 768;

			ee()->load->library('upload', $config);

			if ( ! ee()->upload->do_upload())
			{
				$error = array('error' => ee()->upload->display_errors());

				ee()->load->view('upload_form', $error);
			}
			else
			{
				$data = array('upload_data' => ee()->upload->data());

				ee()->load->view('upload_success', $data);
			}
		}
	}

Inside that method, you can see that we're initializing the Upload library and checking to see if the upload was sucessful. If not, we kick back to the ``upload_form.php`` view.

The Upload Directory
====================

You'll need a destination directory for your uploaded images, most likely created by the person installing your add-on. If you're only using the file temporarily, you can use the ``PATH_CACHE`` constant.

***************
Reference Guide
***************

Initializing the Upload Class
=============================

Like most other classes in ExpressionEngine, the Upload class is initialized in your controller using the ``ee()->load->library()`` method::

	ee()->load->library('upload');

Setting Preferences
===================

Similar to other libraries, you'll control what is allowed to be upload based on your preferences. In the controller you built above you set the following preferences::

	$config['upload_path'] = './uploads/';
	$config['allowed_types'] = 'gif|jpg|png';
	$config['max_size']	= '100';
	$config['max_width'] = '1024';
	$config['max_height'] = '768';

	ee()->load->library('upload', $config);

	// Alternately you can set preferences by calling the ``initialize()`` method. Useful if you auto-load the class:
	ee()->upload->initialize($config);

The above preferences should be fairly self-explanatory. Below is a table describing all available preferences.

Preferences
===========

The following preferences are available. The default value indicates what will be used if you do not specify that preference.

============================ ================= ======================= ======================================================================
Preference                   Default Value     Options                 Description
============================ ================= ======================= ======================================================================
``upload_path``              None              None                    The path to the directory where the upload should be placed. The
                                                                       directory must be writable and the path can be absolute or relative.
``allowed_types``            None              None                    The mime types corresponding to the types of files you allow to be
                                                                       uploaded. Usually the file extension can be used as the mime type.
                                                                       Can be either an array or a pipe-separated string.
``file_name``                None              Desired file name       If set ExpressionEngine will rename the uploaded file to this name. The
                                                                       extension provided in the file name must also be an allowed file type.
                                                                       If no extension is provided in the original file_name will be used.
``file_ext_tolower``         FALSE             TRUE/FALSE (boolean)    If set to TRUE, the file extension will be forced to lower case
``overwrite``                FALSE             TRUE/FALSE (boolean)    If set to true, if a file with the same name as the one you are
                                                                       uploading exists, it will be overwritten. If set to false, a number will
                                                                       be appended to the filename if another with the same name exists.
``max_size``                 0                 None                    The maximum size (in kilobytes) that the file can be. Set to zero for no
                                                                       limit. Note: Most PHP installations have their own limit, as specified
                                                                       in the php.ini file. Usually 2 MB (or 2048 KB) by default.
``max_width``                0                 None                    The maximum width (in pixels) that the image can be. Set to zero for no
                                                                       limit.
``max_height``               0                 None                    The maximum height (in pixels) that the image can be. Set to zero for no
                                                                       limit.
``min_width``                0                 None                    The minimum width (in pixels) that the image can be. Set to zero for no
                                                                       limit.
``min_height``               0                 None                    The minimum height (in pixels) that the image can be. Set to zero for no
                                                                       limit.
``max_filename``             0                 None                    The maximum length that a file name can be. Set to zero for no limit.
``max_filename_increment``   100               None                    When overwrite is set to FALSE, use this to set the maximum filename
                                                                       increment for ExpressionEngine to append to the filename.
``encrypt_name``             FALSE             TRUE/FALSE (boolean)    If set to TRUE the file name will be converted to a random encrypted
                                                                       string. This can be useful if you would like the file saved with a name
                                                                       that can not be discerned by the person uploading it.
``remove_spaces``            TRUE              TRUE/FALSE (boolean)    If set to TRUE, any spaces in the file name will be converted to
                                                                       underscores. This is recommended.
``detect_mime``              TRUE              TRUE/FALSE (boolean)    If set to TRUE, a server side detection of the file type will be
                                                                       performed to avoid code injection attacks. DO NOT disable this option
                                                                       unless you have no other option as that would cause a security risk.
``mod_mime_fix``             TRUE              TRUE/FALSE (boolean)    If set to TRUE, multiple filename extensions will be suffixed with an
                                                                       underscore in order to avoid triggering `Apache mod_mime
                                                                       <http://httpd.apache.org/docs/2.0/mod/mod_mime.html#multipleext>`_.
                                                                       DO NOT turn off this option if your upload directory is public, as this
                                                                       is a security risk.
============================ ================= ======================= ======================================================================

***************
Class Reference
***************

.. class:: EE_Upload

.. method:: initialize([array $config = array()[, $reset = TRUE]])

	:param	array	$config: Preferences
	:param	bool	$reset: Whether to reset preferences (that are not provided in $config) to their defaults
	:returns:	EE_Upload instance (method chaining)
	:rtype:	EE_Upload

.. method:: do_upload([$field = 'userfile'])

	:param	string	$field: Name of the form field
	:returns:	TRUE on success, FALSE on failure
	:rtype:	bool

	Performs the upload based on the preferences you've set.

	.. note:: By default the upload routine expects the file to come from a form field called userfile, and the form must be of type ``multipart``.

	::

		<form method="post" action="some_action" enctype="multipart/form-data" />

	If you would like to set your own field name simply pass its value to the ``do_upload()`` method::

		$field_name = "some_field_name";
		ee()->upload->do_upload($field_name);

.. method:: display_errors([$open = '<p>'[, $close = '</p>']])

	:param	string	$open: Opening markup
	:param	string	$close: Closing markup
	:returns:	Formatted error message(s)
	:rtype:	string

	Retrieves any error messages if the ``do_upload()`` method returned false. The method does not echo automatically, it returns the data so you can assign it however you need.

	**Formatting Errors**

		By default the above method wraps any errors within <p> tags. You can set your own delimiters like this::

			ee()->upload->display_errors('<p>', '</p>');


.. method:: data([$index = NULL])

	:param	string	$data: Element to return instead of the full array
	:returns:	Information about the uploaded file
	:rtype:	mixed

	This is a helper method that returns an array containing all of the data related to the file you uploaded. Here is the array prototype::

		Array
		(
			[file_name]	=> mypic.jpg
			[file_type]	=> image/jpeg
			[file_path]	=> /path/to/your/upload/
			[full_path]	=> /path/to/your/upload/jpg.jpg
			[raw_name]	=> mypic
			[orig_name]	=> mypic.jpg
			[client_name]	=> mypic.jpg
			[file_ext]	=> .jpg
			[file_size]	=> 22.2
			[is_image]	=> 1
			[image_width]	=> 800
			[image_height]	=> 600
			[image_type]	=> jpeg
			[image_size_str] => width="800" height="200"
		)

	To return one element from the array::

		ee()->upload->data('file_name');	// Returns: mypic.jpg

	Here's a table explaining the above-displayed array items:

	================== ====================================================================================================
	Item               Description
	================== ====================================================================================================
	``file_name``      Name of the file that was uploaded, including the filename extension
	``file_type``      File MIME type identifier
	``file_path``      Absolute server path to the file
	``full_path``      Absolute server path, including the file name
	``raw_name``       File name, without the extension
	``orig_name``      )riginal file name. This is only useful if you use the encrypted name option.
	``client_name``    File name as supplied by the client user agent, prior to any file name preparation or incrementing
	``file_ext``       Filename extension, period included
	``file_size``      File size in kilobytes
	``is_image``       Whether the file is an image or not. ``1`` = image. ``0`` = not.
	``image_width``    Image width
	``image_height``   Image height
	``image_type``     Image type (usually the file name extension without the period)
	``image_size_str`` A string containing the width and height (useful to put into an image tag)
	================== ====================================================================================================
