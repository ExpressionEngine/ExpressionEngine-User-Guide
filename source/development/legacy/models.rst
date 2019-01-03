.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

######
Models
######

Models are **optionally** available for those who want to use a more traditional MVC approach.

.. note:: With 3.0, the older style of models (what this page documents) are no longer preferred. **They are not deprecated at the moment**, however we recommend using the new :doc:`/development/services/model`.

.. highlight:: php

.. contents::
	:local:
	:depth: 1

What is a Model?
================

Models are PHP classes that are designed to work with information in your database. For example, let's say you're creating an add-on to manage events. You might have a model class that contains functions to insert, update, and retrieve your blog data. Here is an example of what such a model class might look like::

	class Event_model extends CI_Model {

		public $title;
		public $content;
		public $date;

		public function __construct()
		{
			// Call the CI_Model constructor
			parent::__construct();
		}

		public function get_last_ten_events()
		{
			$query = ee()->db->get('events', 10);
			return $query->result();
		}

		public function insert_event()
		{
			$this->title	= $_POST['title']; // please read the below note
			$this->content	= $_POST['content'];
			$this->date	= time();

			ee()->db->insert('events', $this);
		}

		public function update_event()
		{
			$this->title	= $_POST['title'];
			$this->content	= $_POST['content'];
			$this->date	= time();

			ee()->db->update('events', $this, array('id' => $_POST['id']));
		}
	}

.. note:: The methods in the above example use the :doc:`/development/legacy/database/active_record` database methods.

.. note:: For the sake of simplicity in this example we're using ``$_POST`` directly. This is generally bad practice, and a more common approach would be to use the :doc:`/development/legacy/libraries/input` ``ee()->input->post('title')``.

Anatomy of a Model
==================

Model classes are stored in your ``system/user/ee/addons/my_addon/models/`` directory. They can be nested within sub-directories if you want this type of organization.

The basic prototype for a model class is this::

	class Model_name extends CI_Model {

		public function __construct()
		{
			parent::__construct();
		}

	}

Where ``Model_name`` is the name of your class. Class names **must** have the first letter capitalized with the rest of the name lowercase. Make sure your class extends the base Model class.

The file name must match the class name. For example, if this is your class::

	class User_model extends CI_Model {

		public function __construct()
		{
			parent::__construct();
		}

	}

Your file will be this::

	system/user/ee/addons/my_addon/models/User_model.php

Loading a Model
===============

Your models will typically be loaded and called from within your :doc:`controller <controllers>` methods. To load a model you will use the following method::

	ee()->load->model('model_name');

If your model is located in a sub-directory, include the relative path from your models directory. For example, if you have a model located at ``system/user/ee/addons/my_addon/models/blog/Queries.php`` you'll load it using::

	ee()->load->model('blog/queries');

Once loaded, you will access your model methods using an object with the same name as your class::

	ee()->load->model('model_name');

	ee()->model_name->method();

If you would like your model assigned to a different object name you can specify it via the second parameter of the loading method::

	ee()->load->model('model_name', 'foobar');

	ee()->foobar->method();

Here is an example of a controller, that loads a model, then serves a view::

	class Blog_controller extends CI_Controller {

		public function blog()
		{
			ee()->load->model('blog');

			$data['query'] = ee()->blog->get_last_ten_events();

			ee()->load->view('blog', $data);
		}
	}
