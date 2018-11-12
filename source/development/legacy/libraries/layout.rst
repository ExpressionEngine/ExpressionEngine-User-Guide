.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Layout Class
============

.. contents::
  :local:

.. highlight:: php

Calling the Layout Class
------------------------

.. class:: Layout

  Administrators may extensively customize publish pages on a per member
  group and per channel basis. Since these custom layouts are saved as a
  serialized array in the database, any additions or deletions to publish
  page tabs and fields must be synced to any saved layouts. The control
  panel library provides 4 methods to facilitate custom layout updates.

  ::

    ee()->load->library('layout');

Add Tabs
~~~~~~~~

.. method:: add_layout_tabs([$tabs = array()[, $namespace = ''[, $channel_id = array()]]])

  Adds tabs and any associated fields to currently saved publish
  layouts. If there is an existing tab with the same name, the method
  will return false::

    ee()->layout->add_layout_tabs($tabs);

  :param array $tabs: Associative nested array with the top level where
    the key is the name of the tab. All fields are represented as nested
    arrays within the initial array (see below)
  :param string $namespace: Namespace of the add-on
  :param mixed $channel_id: Limits the channels affected to a single
    channel ID or array of channel IDs
  :rtype: Void

  ``$tabs`` must be an associative array where the top level array(s)
  is the name of the tab. If the tab contains any fields, as it likely
  does, include them as elements of their tab's array, with the field
  name as a key and containing the required elements: visible, collapse,
  htmlbuttons and width::

    $tabs['pages'] = array(
        'pages_uri' => array(
            'visible'     => 'true',
            'collapse'    => 'false',
            'htmlbuttons' => 'true',
            'width'       => '100%'
        ),
        'pages_template_id' => array(
            'visible'     => 'true',
            'collapse'    => 'false',
            'htmlbuttons' => 'true',
            'width'       => '100%'
        )
    );

Delete Tabs
~~~~~~~~~~~

.. method:: delete_layout_tabs([$tabs = array()[, $namespace = ''[, $channel_id = array()]]])

  This method will remove tabs and all associated fields from the
  saved publish page layouts. The $tabs variable must be an associative
  array, with the top level array's key the name of the tab. As in the
  :meth:`Layout::add_layout_tabs` method, any associated fields should
  be included as keys within the tab's array::

    ee()->layout->delete_layout_tabs($tabs);

  :param array $tabs: Associative nested array with the top level where
    the key is the name of the tab. All fields are represented as nested
    arrays within the initial array (see above)
  :param string $namespace: Namespace of the add-on
  :param mixed $channel_id: Limits the channels affected to a single
    channel ID or array of channel IDs
  :returns: ``TRUE`` if successful, otherwise an array of errors
  :rtype: Mixed

Add Fields
~~~~~~~~~~

.. method:: add_layout_fields([$tabs = array()[, $channel_id = array()]])

  Used to add new fields to an already existing tab. Because custom
  layouts may have moved the field(s) to a different tab and deleted the
  tab originally associated with the fields, a new tab will be created
  if none exists in the layout. The $tabs array takes the same format as
  the :meth:`Layout::add_layout_tabs` method::

    ee()->layout->add_layout_fields($tabs, $channel_id);

  :param array $tabs: Associative nested array with the top level where
    the key is the name of the tab. All fields are represented as nested
    arrays within the initial array (see above)
  :param mixed $channel_id: Limits the channels affected to a single
    channel ID or array of channel IDs
  :returns: ``TRUE`` if successful, otherwise an array of errors
  :rtype: Mixed

Delete Fields
~~~~~~~~~~~~~

.. method:: delete_layout_fields([$tabs = array()[, $channel_id = array()]])

  Used to delete fields without removing the existing tab. This method
  removes all matching field names from the saved layouts, regardless of
  the tab they are currently saved in. The $tabs array takes the same
  format as the :meth:`Layout::add_layout_tabs` method, while
  ``$channel_id`` is an optional parameter that limits the update to
  layouts associated with a given channel and should generally be
  omitted from third party usage. ::

    ee()->layout->delete_layout_fields($tabs, $channel_id);

  :param array $tabs: Associative nested array with the top level where
    the key is the name of the tab. All fields are represented as nested
    arrays within the initial array (see above)
  :param mixed $channel_id: Limits the channels affected to a single
    channel ID or array of channel IDs
  :returns: ``TRUE`` if successful, otherwise an array of errors
  :rtype: Mixed
