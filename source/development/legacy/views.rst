.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

#####
Views
#####

.. highlight:: php

.. note:: With 3.0, the older style of views (what this page documents) are no longer preferred. **They are not deprecated at the moment**, however we recommend using the new :doc:`/development/services/view`.

.. contents::
	:local:
	:depth: 1

A view is simply a web page, or a page fragment, like a header, footer, sidebar, etc. In fact, views can flexibly be embedded within other views (within other views, etc., etc.) if you need this type of hierarchy.

Views are never called directly, they must be loaded by a :doc:`controller <controllers>`. Remember that in an MVC framework, the Controller acts as the traffic cop, so it is responsible for fetching a particular view. If you have not read the :doc:`Controllers <controllers>` page you should do so before continuing.

Using the example controller you created in the :doc:`controller <controllers>` page, let's add a view to it.

***************
Creating a View
***************

Using your text editor, create a file called ``view.php``, and put this in it::

	<h1>Welcome to my add-on!</h1>
	<p>Hello world.</p>

Then save the file in your ``system/user/ee/addons/my_addon/views/`` directory.

**************
Loading a View
**************

To load a particular view file you will use the following method::

	ee()->load->view('name');

Where name is the name of your view file.

.. note:: The ``.php`` file extension does not need to be specified unless you use something other than ``.php``.

Now, open the controller file you made earlier called ``mcp.my_addon.php``, and replace the ``return`` statement with the view loading method::

	<?php
	class My_addon_mcp {

		public function index()
		{
			return ee()->load->view('view');
		}
	}

If you visit your site using the URL you did earlier you should see your new view. The URL was similar to this::

	example.com/system/index.php?/cp/addons/settings/my_addon

************************************
Storing Views within Sub-directories
************************************

Your view files can also be stored within sub-directories if you prefer that type of organization. When doing so you will need to include the directory name loading the view. Example::

	ee()->load->view('directory_name/file_name');

*******************************
Adding Dynamic Data to the View
*******************************

Data is passed from the controller to the view by way of an ``array`` or an ``object`` in the second parameter of the view loading method. Here is an example using an array::

	$data = array(
		'title' => 'My Title',
		'heading' => 'My Heading',
		'message' => 'My Message'
	);

	ee()->load->view('view', $data);

And here's an example using an object::

	$data = new Someclass();
	ee()->load->view('view', $data);

.. note:: If you use an object, the class variables will be turned into array elements. The new :doc:`/development/services/view` does **not** convert objects into arrays.

Let's try it with your controller file. Open it add this code::

	<?php
	class My_addon_mcp {

		public function index()
		{
			$data['title'] = "Welcome to my add-on!";
			$data['message'] = "Hello world.";

			ee()->load->view('view', $data);
		}
	}

Now open your view file and change the text to variables that correspond to the array keys in your data::

	<h1><?= $title ?></h1>
	<p><?= $message ?></p>

Then load the page at the URL you've been using and you should see the variables replaced.

**************
Creating Loops
**************

The data array you pass to your view files is not limited to simple variables. You can pass multi dimensional arrays, which can be looped to generate multiple rows. For example, if you pull data from your database it will typically be in the form of a multi-dimensional array.

Here's a simple example. Add this to your controller::

	<?php
	class My_addon_mcp {

		public function index()
		{
			$data['todo_list'] = array('Clean House', 'Call Mom', 'Run Errands');

			$data['title'] = "Welcome to my add-on!";
			$data['message'] = "Hello world.";

			ee()->load->view('view', $data);
		}
	}

Now open your view file and create a loop::

	<h1><?= $title ?></h1>
	<p><?= $message ?></p>
	<h3>Todos:</h3>
	<ul>
	<?php foreach ($todo_list as $item):?>
		<li><?php echo $item;?></li>
	<?php endforeach;?>
	</ul>

***********************
Returning views as data
***********************

There is a third **optional** parameter lets you change the behavior of the method so that it returns data as a string rather than sending it to your browser. This can be useful if you want to process the data in some way. If you set the parameter to ``TRUE`` (boolean) it will return data. The default behavior is false, which sends it to your browser. Remember to assign it to a variable if you want the data returned::

	$string = ee()->load->view('myfile', '', TRUE);
