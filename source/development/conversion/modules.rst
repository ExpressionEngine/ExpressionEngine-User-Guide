**************
Module Changes
**************

.. highlight:: php

Most of the changes to modules in ExpressionEngine 3 will be in the control panel
files. All parsing code should be backwards compatible.

A fictional Fortune Cookies module is used in the following examples.

.. contents::
  :local:
  :depth: 1

3.0 Module Overview
===================

The module changes in ExpressionEngine 3 are mostly related to the control panel
redesign. Your parsing code should remain identical, which means you can focus
just on updating the control panel.

New URL Logic
-------------

The Control Panel URLs for your module follow the pattern::

  addons/settings/package_name/method_name/arguments

For example, if we had a fortune cookie module with a method to list our cookies
its URL might be::

  addons/settings/fortune_cookie/cookies

Like 2.x the routing is automatic; all public methods in your ``mcp.package_name.php``
are automatically routed. We will also pass any arguments to your method found in the url.
For this URL::

  addons/settings/fortune_cookie/edit_cookie/3

We would need to have the following method signature::

  public function edit_cookie($id) {...}



Control Panel File (``mcp.package_name.php``)
=============================================

If your module does not have a control panel, you still need an blank mcp file
in the format::

  <?php

  class Package_name_mcp
  {
      var $version = '1.0';

  }

.. _module_mcp_output:

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

If you return an associative array it must contain the key ``body`` and may
contain the keys ``breadcrumb``, and ``heading``. The ``body`` key
should contain an HTML string which will be used in the "body" section of the
Control Panel layout inside our Add-On Manager.
The ``breadcrumb`` key should contain an associative array of URLs as
keys and strings for the bodies. The header value will be added as the final
segment in the breadcrumb.  The ``heading`` key should
contain a string for use as the heading (i.e. ``Fortune Cookie Management``).

If your add-on needs a :style_guide:`sidebar <c/structure#content-box-sidebar>`
use the :doc:`Sidebar Service </development/services/sidebar>`.

Example
~~~~~~~

::

  $url = ee('CP/URL', 'addons/settings/fortune_cookie')->compile();

  return array(
    'body'       => ee('View')->make('fortune_cookie:index')->render($vars),
    'breadcrumb' => array(
      $url => lang('fortune_cookie_management')
    ),
    'heading'  => lang('edit_fortune_cookie'),
  );

Publish Tab File (``tab.package_name.php``)
===========================================

We have made a few changes to the Publish Tab API. We have renamed the methods
we call within the class, and a few have changes to their parameters:

  * ``publish_tabs()`` has been renamed to ``display()`` and now returns an
    associative array using the ``field_id`` as the key.
  * ``validate_publish()`` has been renamed to ``validate()``.  It is now passed
    two arguments (in order): a ``ChannelEntry`` instance and an associative
    array with field names as keys and form submission data as the value (i.e.
    ``array('fortune' => 'All your hard work will soon pay off.'))``. The keys
    are derrived from the data returned by ``display()``.
  * ``publish_data_db()`` has been renamed to ``save()``.  It is now passed
    two arguments (in order): a ``ChannelEntry`` instance and an associative
    array with field names as keys and form submission data as the value (i.e.
    ``array('fortune' => 'Do not make extra work for yourself.'))``. The keys
    are derrived from the data returned by ``display()``.
  * ``publish_data_delete_db()`` has been renamed to ``delete()``. It is now
    passed an indexed array of Entry IDs that have been deleted.

A tab's ``save()`` method is called during a ``ChannelEntry`` entity's
``afterSave`` event. Likewise a tab's ``delete()`` method is called during a
``ChannelEntry`` entity's ``beforeDelete`` event.

Display Tools
=============

We have a few display tools available that are useful when creating your output.

The Table Service
-----------------

Tables are the most common way to view and navigate data in the
ExpressionEngine control panel. Since tables share a lot of common
functionality, we've abstracted most of it out to a Table service to
handle tasks such as displaying the table markup, and sorting and
filtering tabular content::

  $table = ee('CP/Table', array('autosort' => TRUE, 'autosearch' => FALSE, 'limit' => 20));
  $table->setColumns(
    array(
      'tool_set',
      'status',
      'manage' => array(
        'type'  => Table::COL_TOOLBAR
      ),
      array(
        'type'  => Table::COL_CHECKBOX
      )
    )
  );

  $table->setData($data);

See :doc:`/development/services/table` for full documentation.

The Pagination Service
----------------------

Adding pagination to the control panel is a common task and we created a
pagination service to assist. This service follows our :style_guide:`style-guide
<c/listings#pagination>` handling all the
mathematical calculations. All you need is the number of items you are going to
paginate and a URL object::

  $base_url = ee('CP/URL', 'publish/edit');
  $pagination = ee('CP/Pagination')->make($total_count)
  	->render($base_url);

See :doc:`/development/services/pagination` for full documentation.

The CP/Alert Service
--------------------

Alerts are for providing feedback on an action and calling attention to
warnings or errors. We describe, in detail, how to build different kinds
of alerts in our :style_guide:`CP style-guide <c/alerts>`. We have also
created an Alert Service for creating alerts in your code. For example::

  ee('CP/Alert')->makeInline('fortune-cookie-form')
	->asIssue()
	->withTitle(lang('fortune_cookie_save_error'))
	->addToBody(lang('fortune_cookie_save_error_desc'))
	->now();

And::

  <?=ee('CP/Alert')->get('fortune-cookie-form')?>

See :doc:`/development/services/alert` for full documentation.

The Shared Settings Form
------------------------

Forms are created by creating an array of field descriptions. This keeps the
view code consistent and modular. Below is an example of a simple form with
a text input and a checkbox::

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

  <?php $this->embed('ee:_shared/form')?>


See :doc:`/development/shared_form_view` for full documentation.

Modals
------

Under 3.0 modals belong to a specific spot in the Control Panel's DOM, and that
place isn't accessible from a module's view. To solve that we have created a
modal service. There are two basic calls to use it within your view files,
``ee('CP/Modal')->startModal($name);`` and ``ee('CP/Modal')->endModal();``.
Everything between those two lines will be be stored in the modals block and
output in the correct spot of the DOM.

::

  <?php ee('CP/Modal')->startModal($name); ?>
  <div class="modal-wrap modal-test">
  	<div class="modal">
  		<div class="col-group">
  			<div class="col w-16">
  				<div class="box">
  					...
  				</div>
  			</div>
  		</div>
  	</div>
  </div>
  <?php ee('CP/Modal')->endModal(); ?>

See :doc:`/development/services/modal` for full documentation.
