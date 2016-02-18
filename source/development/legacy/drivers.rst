#########################
Using CodeIgniter Drivers
#########################

.. highlight:: php

.. contents::
	:local:
	:depth: 1

Drivers are a special type of Library that has a parent class and any number of potential child classes. Child classes have access to the parent class, but not their siblings. Drivers provide an elegant syntax in your :doc:`controllers <controllers>` for libraries that benefit from or require being broken down into discrete classes.

Drivers are found in the ``system/ee/user/addons/my_addon/libraries/`` directory, in their own sub-directory which is identically named to the parent library class. Also inside that directory is a subdirectory named drivers, which contains all of the possible child class files.

To use a driver you will initialize it within a controller using the following initialization method::

	ee()->load->driver('class_name');

Where class name is the name of the driver class you want to invoke. For example, to load a driver named ``Some_parent`` you would do this::

	ee()->load->driver('some_parent');

Methods of that class can then be invoked with::

	ee()->some_parent->some_method();

The child classes, the drivers themselves, can then be called directly through the parent class, without initializing them::

	ee()->some_parent->child_one->some_method();
	ee()->some_parent->child_two->another_method();

*************************
Creating Your Own Drivers
*************************

Sample driver directory and file structure layout:

- ``/application/libraries/Driver_name/``

  - ``Driver_name.php``
  - ``drivers/``

  	- ``Driver_name_subclass_1.php``
    - ``Driver_name_subclass_2.php``
    - ``Driver_name_subclass_3.php``

.. note:: In order to maintain compatibility on case-sensitive file systems, the ``Driver_name`` directory must be named in the format returned by ``ucfirst()``.

.. note:: The Driver library's architecture is such that the subclasses don't extend and therefore don't inherit properties or methods of the main driver.
