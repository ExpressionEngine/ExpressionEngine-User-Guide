.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

CP Class
========

.. contents::
  :local:

.. highlight:: php

Calling the CP Class
--------------------

.. class:: Cp

  This class is initialized automatically in the control panel.

Breadcrumbs
-----------

.. method:: set_breadcrumb($link, $title)

  Adds a new breadcrumb to the initial breadcrumb array. The system will
  automatically output the final array::

    ee()->cp->set_breadcrumb($link, $title);

  :param type $link: URL the breadcrumb should go to
  :param type $title: Text to go in the link
  :rtype: Void

Sub Navigation
--------------

.. method:: set_right_nav($nav = array())

  The right hand subnavigation can be used as the main navigation for a
  module. This method takes an associative array where the keys are
  language keys and the values are the full url to link to::

    ee()->cp->set_right_nav(array(
        'edit_avatar' => BASE.AMP.'C=my_account'.AMP.'M=edit_avatar',
        'edit_profile' => BASE.AMP.'C=my_account'.AMP.'M=edit_profile'
    ));

  :param array $nav: Associative array containing pairs of language keys
    as the keys and URLs as the values
  :rtype: Void

Set Variables
-------------

.. method:: set_variable($name, $value)

  .. deprecated:: 2.6
    Use ``$this->EE->view->cp_page_title = '...'`` instead.

  This is a simple alternative for setting a page variable. It is used
  almost exclusively for setting the title of a control panel page::

    $this->EE->cp->set_variable('cp_page_title', lang('page_title'));

  :param string $name: Name of the variable to set
  :param string $value: Value to set
  :rtype: Void

Adding Header Data
------------------

.. method:: add_to_head($data)

  The ``<head>`` tag of the control panel can be extended with new
  styles, meta tags, and other data. Multiple calls to this method are
  additive::

    ee()->cp->add_to_head('<style type="text/css" media="screen">div { display: none; }</style>');

  :param string $data: String to add to the ``<head>`` of the control
    panel
  :rtype: Void

Add JavaScript Files to the JavaScript Combo Loader
---------------------------------------------------

.. method:: add_js_script($script_type, $script_name)

  This method allows you to include scripts found in the main
  JavaScript directory in the combo load routine, thus reducing HTTP
  requests. As an example, the call to load ``filename.js`` file from
  the ``themes/javascript`` directory would look like this::

    ee()->cp->add_js_script('file', 'filename');

  :param string $script_type: Type of script to load
  :param string $script_name: Name of script to load
  :returns: Associative array of loaded js files
  :rtype: Array

  .. note:: This method will only load files from
     the ``themes/javascript`` directory. To load a third-party add-on
     package's JavaScript files, use :meth:`Cp::load_package_js`.

  Several custom jQuery plugins are included with ExpressionEngine and
  available for third-party developers to use. Plugins available include
  :ref:`ee_interact.event <jquery-interact>`, `tablesorter
  <http://tablesorter.com/docs/>`__, :doc:`ee_table
  </development/cp_javascript/table>`, and :doc:`wysihat
  </development/cp_javascript/rte/wysihat_api>`.

  An example call to load one of the jQuery plugins::

    ee()->cp->add_js_script('plugin', 'tablesorter');

  The `jQuery UI <http://jqueryui.com>`__ interactions and widgets are
  also included with ExpressionEngine for third-party developers to use.
  The call to load the jQuery UI Autocomplete plugin would look like
  this, for example::

    ee()->cp->add_js_script('ui', 'autocomplete');

.. method:: add_js_script([$script = array()[, $in_footer = TRUE]])

  Several scripts can be included in a single call as an array::

    ee()->cp->add_js_script(
        array(
            'ui'      => array('widget', 'position', 'autocomplete'),
            'plugins'  => array('ee_notice', 'ee_table')
        )
    );

  :param array $script: Associative array containing the scripts you
    need to load
  :param boolean $in_footer: Adds to the footer if set to ``TRUE``,
    otherwise it's added to the ``<head>``
  :returns: Associative array of loaded js files
  :rtype: Array

Loading Third-Party JavaScript Files
------------------------------------

.. method:: load_package_js($file)

  Use this method to load a third-party add-on package's JavaScript files::

    ee()->cp->load_package_js('my_file');

  This will load from the current package's ``javascript`` directory::

    system/user/addons/my_package/javascript/my_file.js

  :param string $file: JavaScript file to load, path relative to the current package's JavaScript directory
  :rtype: Void

Masking the Control Panel URL in links
--------------------------------------

.. method:: masked_url($url)

  When creating external links in the users Control Panel, the system
  folder should not show in server referral logs::

    ee()->cp->masked_url('https://example.com');

  Creates the a the following link:
  ``https://example.com?URL=https://example.com``

  :param string $url: URL to mask
  :returns: The masked URL
  :rtype: String

Allowed Group
-------------

.. method:: allowed_group($which)

  When a user or logged in member visits an EE site, the Session class
  ascribes user data to them that, among other things, pertains to their
  member groups's access to various parts of the site. Returns ``FALSE``
  if they have access, ``TRUE`` if they do::

    if ( ! ee()->cp->allowed_group('can_delete_all_entries'))
    {
        show_error(lang('unauthorized_to_delete_others'));
    }

  :param string $which: permission string to check for
  :returns: ``TRUE`` if they have access, ``FALSE`` if they don't or if
    the permission doesn't exist
  :rtype: String

Safe Refresh
------------

.. method:: get_safe_refresh()

  Some pages of the control panel can only be reached after the user
  submits a form. If you need to perform an action elsewhere and the
  redirect to the current page, ``get_safe_refresh()`` will return a url
  that takes these considerations into account. To use the result,
  prefix it with ``BASE.AMP``::

    <?=form_open(
        'C=myaccount'.AMP.'M=notepad_update',
        array('id' => 'notepad_form'),
        array('redirect_to' => $this->cp->get_safe_refresh())
    )?>

  :returns: URL to the current page unless ``POST`` data exists, in that
    case it goes to the root controller
  :rtype: String

Fetch an Action ID
------------------

.. method:: fetch_action_id($class, $method)

  Modules have certain actions for forms, links, etc. that are
  recognized via an action ids that are inserted into the database upon
  installation of that module. This method returns the action id
  number from the database. (See also :ref:`functions->fetch_action_id
  <fetch_action_id>`)::

    $aid = $this->EE->cp->fetch_action_id($class, $method);

  :param string $class: Class that contains the method
  :param string $method: Name of the method
  :returns: Action ID
  :rtype: Integer


Publish Page Layout Methods
---------------------------

Administrators may extensively customize publish pages on a per member
group and per channel basis. Since these custom layouts are saved as a
serialized array in the database, any additions or deletions to publish
page tabs and fields must be synced to any saved layouts. The control
panel library provides 4 methods to facilitate custom layout updates.
(See also :ref:`tab-file-function-reference`)
