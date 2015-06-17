***********************************
ExpressionEngine 3.0 Module Changes
***********************************

.. highlight:: php

In addition to the :doc:`syntax changes <syntax>` already discussed, modules
require some fundamental alterations to the control panel file. A new
:doc:```addon.setup.php`` <development/addon_setup_php_file>` file has been
introduced.

A fictional Fortune Cookies module is used in the following examples.
For more examples, see the :doc:`full Module Development
tutorial </development/module_tutorial>`.

.. contents::
  :local:

3.0 Module Overview
===================

Basic file structure
--------------------

The typical file structure for a third party module that employs a
control panel should look like:

- ``system/user/addons/package_name/``

  - ``system/user/addons/package_name/addon.setup.php``
    (metadata file)
  - ``system/user/addons/package_name/mcp.package_name.php``
    (control panel file)
  - ``system/user/addons/package_name/mod.package_name.php``
    (front end file)
  - ``system/user/addons/package_name/upd.package_name.php``
    (installation, uninstall and updates)
  - ``system/user/addons/package_name/views/`` (contains all
    views)

      - ``system/user/addons/package_name/views/index.php``
      - ``system/user/addons/package_name/views/another_page.php``

  - ``system/user/addons/package_name/language/english/package_name_lang.php``

The reference page for :doc:`Add-on Packages </development/packages>`
gives greater detail on the above structure.

.. note:: It is recommended to put a placeholder index.html file in any
  of your folders.

URL Logic
---------

The Control Panel URLs for your module follow the pattern
``addons/settings/package_name/method_name/arguments``. For example, if we had
a fortune cookie module with a view for list our cookies its URL would be
``addons/settings/fortune_cookie/cookies``. Like 2.x the routing is automatic;
all public methods in your ``mcp.package_name.php`` are automatically routed.
We will also pass any arguments to your method found in the url. If the URL is
``addons/settings/fortune_cookie/edit_cookie/3`` we would need to have the
following method signagure::

  public function edit_cookie($id) {...}

The addon.setup.php File
========================

With 3.0 we are introducing a new metadata provider file named
``addon.setup.php``. It defines required and basic information about your
add-on. It is a **required** file; if it is absent your add-on will be absent
from the Add-On Manger.

See :doc:`/development/addon_setup_php_file` for full documentation.

Control Panel File (mcp.package_name.php)
=========================================

If your module does not have a control panel, you still need an mcp file
in the format::

  <?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

  class Package_name_mcp
  {
      var $version = '1.0';

  }
  /* END Class */

  /* End of file mcp.package_name.php */
  /* Location: ./system/system/user/addons/package_name/mcp.package_name.php */

Control Panel Output, Breadcrumbs, and Headings
-----------------------------------------------

There are two ways to output your control panels. You may either return an HTML
string, or you may return an associative array.

If you return a string that data will be used in the "body" section of the
Control Panel layout inside our Add-On Manager. The breadcrumb will default to
``Add-On Manager / Your Add-On Name`` and the heading will default to ``Your
Add-On Name Configuration``. In our fortune cookie module example we would have
``Add-On Manager / Fortune Cookies`` as the breadcrumb and ``Fortune Cookie
Configuration`` as the heading.

If you return an associative array it must contain the keys ``body``,
``heading``, and ``breadcrumb``. The ``body`` key should contain an HTML string
which will be used in the "body" section of the Control Panel layout inside our
Add-On Manager. The ``heading`` key should contain a string for use as the
heading (i.e. ``Fortune Cookie Management``). Finally, the ``breadcrumb`` key
should contain an associative array of URLs as keys and strings for the bodies.
The first pair in the array should be ``ee('CP/URL', 'addons') =>
lang('addon_manager')``. You need to only define the path to you; the header
value will be added as the final segment in the breadcrumb.

Example
~~~~~~~

::

  return array(
    'body'       => ee()->load->view('index', $vars, TRUE),
    'heading'    => lang('edit_fortune_cookie'),
    'breadcrumb' => array(
	  ee('CP/URL', 'addons') => lang('addon_manager'),
	  ee('CP/URL', 'addons/settings/fortune_cookie') => lang('fortune_cookie_management')
	),
  );

Display Tools
=============

We have a few display tools available that are useful when creating your output.

The Table Service
-----------------

At some point we'll have a real overview here with a link to the full
documentation. For now enjoy this cryptic bit of code::

  $table = ee('CP/Table', array('autosort' => TRUE, 'autosearch' => FALSE, 'limit' => 20));
  $table->setColumns(
  	array(
  		'tool_set',
  		'status',
  		'manage' => array(
  			'type'	=> Table::COL_TOOLBAR
  		),
  		array(
  			'type'	=> Table::COL_CHECKBOX
  		)
  	)
  );

  $table->setNoResultsText('no_tool_sets');
  $table->setData($data);

  $vars['table'] = $table->viewData($this->_base_url);
  $vars['base_url'] = clone $vars['table']['base_url'];

The Pagination Service
----------------------

At some point we'll have a real overview here with a link to the full
documentation. For now enjoy this cryptic bit of code::

  $pagination = new Pagination(
  	$vars['table']['limit'],
  	$vars['table']['total_rows'],
  	$vars['table']['page']
  );
  $vars['pagination'] = $pagination->cp_links($this->_base_url);


The Alert Service
-----------------

At some point we'll have a real overview here with a link to the full
documentation. For now enjoy this cryptic bit of code::

  ee('Alert')->makeInline('fortune-cookie-form')
	->asIssue()
	->withTitle(lang('toolset_error'))
	->addToBody(lang('toolset_error_desc'))
	->now();

And::

  <?=ee('Alert')->get('fortune-cookie-form')?>

The Shared Settings Form
------------------------

At some point we'll have a real overview here with a link to the full
documentation. For now enjoy this cryptic bit of code::

  $vars['sections'] = array(
  	array(
  		array(
  			'title' => 'tool_set_name',
  			'desc' => 'tool_set_name_desc',
  			'fields' => array(
  				'toolset_name' => array(
  					'type' => 'text',
  					'value' => $toolset_name,
  					'required' => TRUE
  				)
  			)
  		),
  		array(
  			'title' => 'choose_tools',
  			'desc' => 'choose_tools_desc',
  			'fields' => array(
  				'tools' => array(
  					'type' => 'checkbox',
  					'choices' => $tools,
  					'value' => $toolset['tools'],
  					'wrap' => FALSE
  				)
  			)
  		)
  	)
  );

And::

  <?php $this->ee_view('_shared/form')?>