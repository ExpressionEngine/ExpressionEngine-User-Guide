File Browser Class
==================

.. contents::
	:local:

Calling the File Browser Class
------------------------------

ExpressionEngine uses the File Browser class whenever a file browser modal
window is needed. To use the file browser in your add-on, you'll need to 
load the File Browser library

::

    $this->EE->load->library('file_browser');


Initializing a File Browser
---------------------------

The File Browser class loads most of what you need for your file browser:
javascript and css especially. What you need to do is initialize the file
browser by optionally passing it two parameters::

	$this->EE->file_browser->init($config, $endpoint_url);


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

