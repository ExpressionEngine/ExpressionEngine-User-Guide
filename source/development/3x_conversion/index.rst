*************************
3.0 Conversion Guidelines
*************************

Overview
========

This guide is an overview of the changes you will need to make to have your
add-ons up and running under 3.0. The most notable changes to add-ons are the
:doc:`/development/addon_setup_php_file` and the new :doc:`Control Panel Style Reference </development/cp_styles/index>`.

There are some deprecated features and code, so be sure to check the
:doc:`/cp/logs/developer` in the control panel for messages regarding method
deprecation to make sure your add-on is not calling any deprecated code.

Required Changes
================

Create an ``addon.setup.php`` File
----------------------------------

In ExpressionEngine 3.0, all add-ons must have a file called
``addon.setup.php``. It defines basic information about your add-on, such as its
name, version, and some namespace. It is a **required** file, without it your
add-on will not be recognized.

To get started, create a file called `addon.setup.php` in the main directory of
your add-on. Then fill it in with this template, changing the values to match your add-on::

  <?php

  return array(
    'author'      => 'Example, Inc',
    'author_url'  => 'http://example.com',
    'name'        => 'Hello World',
    'description' => 'Displays a friendly "Hello world!" message.',
    'version'     => '2.0.0',
    'namespace'   => 'Example\HelloWorld'
  );

Your addon should now be visible in the Add-Ons section of the control panel. See
:doc:`/development/addon_setup_php_file` for full documentation of available keys.


Component Changes
-----------------

Depending on what parts your add-on has, you should also review the following pages:

- :doc:`Plugin Specific Changes <plugins>`
- :doc:`Module Specific Changes <modules>`
- :doc:`Extension Specific Changes <extensions>`
- :doc:`Fieldtype Specific Changes <fieldtypes>`


In-App Documentation
====================

Add-ons can now provide some in-app documentation by including a ``README.md`` file
in the main directory of the add-on. This file will be parsed as markdown. Please
note that the first h1 heading will be ignored. All other headings will automatically
be listed in the sidebar.

Resources
=========

If you're just getting started, we recommend reviewing some of the new service
documentation as well as the following pages:

- :doc:`/development/addon_setup_php_file`
- :doc:`General Syntax Changes <syntax>`
- :doc:`Control Panel Pages </development/cp_styles/index>`


.. toctree::
  :glob:
  :hidden:
  :titlesonly:

  *
  ../cp_styles/index
