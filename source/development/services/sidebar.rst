.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

CP/Sidebar Service
==================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

Simple Example
--------------

The Control Panel's left sidebar is built with the Sidebar Service::

  $sidebar = ee('CP/Sidebar')->make();

You can add a header::

  $header = $sidebar->addHeader($text, $url);

Headers may have a button::

  $header->withButton($text, $url);

Header's may have a list. A list may be a basic list or a folder list::

  $basic_list  = $header->addBasicList();
  $folder_list = $header->addFolderList($name);

Lists have items::

  $basic_item  = $basic_list->addItem($text, $url);
  $folder_item = $folder_list->addItem($text, $url)
    ->withEditUrl($url)
    ->withRemoveConfirmation($msg)
    ->identifiedBy($id);

All list items may be marked as active::

  $item->isActive();

Folder list items may also be marked as default::

  $folder_item->asDefaultItem();

Basic list items may also be marked as a delete action::

  $basic_item->asDeleteAction();

You can add a folder list directly to a sidebar without a header::

  $folder_list = $sidebar->addFolderList($name);

Sidebars can have an action bar at the bottom with one or two buttons::

  $sidebar->addActionBar()
    ->withLeftButton(
      $left_button_text,
      $left_button_url
    )->withRightButton(
      $right_button_text,
      $right_button_url
    );

Complete Example
----------------

This will build a sidebar with a header, which has a button and two items underneath it::

  $sidebar = ee('CP/Sidebar')->make();

  $fortunes = $sidebar->addHeader(lang('fortunes'))
    ->withButton(lang('new'), ee('CP/URL', 'addons/settings/fortune_cookie/create'));

  $fortunes_list = $fortunes->addBasicList();
  $fortunes_list->addItem(lang('recent_fortunes'), ee('CP/URL', 'addons/settings/fortune_cookie/recent'));
  $fortunes_list->addItem(lang('archived_fortunes'), ee('CP/URL', 'addons/settings/fortune_cookie/archived'));

Reorderable Folder Lists
------------------------

Folder lists can be reordered::

  $folder_list->canReorder();

Calling ``canReorder()`` will automatically bind the appropriate JavaScript and styles to the list to enable its folder items to be dragged and sorted. Reordering list items won't cause them to stick from request to request, that's something you would need to implement to suit your particular add-on. To hook into the sort event to perform custom operations on sort, set a callback like so:

.. code-block:: javascript

  EE.cp.folderList.onSort('list-name', function(list) {
    // Do as you wish with the passed list object
  });

Where ``'list-name'`` is the unique name you have your folder list. A jQuery object of the folder list element will be passed to the callback, in which you have access to various data about your list items. For example, you may want to gather the unique identifiers for the folder items and send them to an AJAX request, as we do for template groups:

.. code-block:: javascript

  // Reorder template groups
  EE.cp.folderList.onSort('template-group', function(list) {
    // Create an array of template group names
    var template_groups = $.map($('> li', list), function(list_item) {
      return $(list_item).data('group_name');
    });

    $.ajax({
      url: EE.templage_groups_reorder_url,
      data: { 'groups': template_groups },
      type: 'POST',
      dataType: 'json'
    });
  });

CP/Sidebar Methods
------------------

.. namespace:: EllisLab\ExpressionEngine\Service\Sidebar

.. class:: Sidebar

.. method:: make()

  Makes a new Sidebar object.

  :returns: $this
  :rtype: URL

.. method:: render()

  Renders the sidebar

  :returns: The rendered HTML of the sidebar
  :rtype: String

.. method:: addHeader($text, $url = NULL)

  Adds a header to the sidebar

  :param string $text: The text of the header
  :param $url: An optional CP\URL object or string containing the URL for the text.
  :type $url: CP/URL or string
  :returns: A new Header object.
  :rtype: Header

.. method:: addFolderList($name)

  Adds a folder list to the sidebar

  :param string $name: The name of the folder list
  :returns: A new FolderList object
  :rtype: FolderList

.. method:: addActionBar()

  Adds an action bar to the bottom of the sidebar

  :returns: A new ActionBar object
  :rtype: ActionBar

Header Methods
--------------

.. class:: Header

.. method:: withUrl($url)

  Sets the URL property of the header

  :param $url: A CP\URL object or string containing the URL for the header.
  :type $url: CP/URL or string
  :returns: $this
  :rtype: Header

.. method:: urlIsExternal($external = TRUE)

  Sets the URL is external property

  :param bool $external: (optional) TRUE if it is external, FALSE if not
  :returns: $this
  :rtype: Header

.. method:: isActive()

  Marks the header as active

  :returns: $this
  :rtype: Header

.. method:: withButton($text, $url)

  Sets the button property of the header

  :param string $text: The text of the button
  :param $url: A CP\URL object or string containing the URL for the button.
  :type $url: CP/URL or string
  :returns: $this
  :rtype: Header

.. method:: addBasicList()

  Adds a basic list under this header

  :returns: A new BasicList object
  :rtype: BasicList

.. method:: addFolderList($name)

  Adds a folder list under this header

  :param string $name: The name of the folder list
  :returns: A new FolderList object
  :rtype: FolderList

BasicList Methods
-----------------

.. class:: BasicList

.. method:: addItem($text, $url = NULL)

  Adds an item to the list

  :param string $text: The text of the item
  :param $url: A CP\URL object or string containing the URL for the item.
  :type $url: CP/URL or string
  :returns: A new BasicItem object.
  :rtype: BasicItem

BasicItem Methods
-----------------

.. class:: BasicItem

.. method:: withUrl($url)

  Sets the URL property of the item

  :param $url: A CP\URL object or string containing the URL for the item.
  :type $url: CP/URL or string
  :returns: $this
  :rtype: BasicItem

.. method:: urlIsExternal($external = TRUE)

  Sets the URL is external property

  :param bool $external: (optional) TRUE if it is external, FALSE if not
  :returns: $this
  :rtype: BasicItem

.. method:: isActive()

  Marks the item as active

  :returns: $this
  :rtype: BasicItem

.. method:: asDeleteAction($modal_name = '')

  Marks the item as a delete action

  :param string $modal_name: The name of the modal this delete action will trigger
  :returns: $this
  :rtype: BasicItem

FolderList Methods
------------------

.. class:: FolderList

.. method:: addItem($text, $url = NULL)

  Adds an item to the list

  :param string $text: The text of the item
  :param $url: An optional CP\URL object or string containing the URL for the item.
  :type $url: CP/URL or string
  :returns: A new FolderList object.
  :rtype: FolderList

.. method:: withRemoveUrl($url)

  Sets the URL to use when removing an item

  :param $url: A CP\URL object or string containing the URL to use when removing an item.
  :type $url: CP/URL or string
  :returns: $this
  :rtype: FolderList

.. method:: withRemovalKey($key)

  Sets the name of variable passed with the removal action.

  :param string $key: The name of the variable with.
  :returns: $this
  :rtype: FolderList

.. method:: withNoResultsText($msg)

  Sets the no results text which will display if this header's list(s) are empty.

  :param string $msg: The text to display when the list(s) are empty.
  :returns: $this
  :rtype: FolderList

.. method:: canReorder()

  Allows the folder list to be reordered.

  :returns: $this
  :rtype: FolderList

FolderItem Methods
------------------

.. class:: FolderItem

.. method:: withUrl($url)

  Sets the URL property of the item

  :param $url: A CP\URL object or string containing the URL for the item.
  :type $url: CP/URL or string
  :returns: $this
  :rtype: FolderItem

.. method:: urlIsExternal($external = TRUE)

  Sets the URL is external property

  :param bool $external: (optional) TRUE if it is external, FALSE if not
  :returns: $this
  :rtype: FolderItem

.. method:: isActive()

  Marks the item as active

  :returns: $this
  :rtype: FolderItem

.. method:: asDefaultItem()

  Marks the item as default

  :returns: $this
  :rtype: FolderItem

.. method:: canEdit()

  Shows the edit button on the sidebar item.

  :returns: $this
  :rtype: FolderItem

.. method:: cannotEdit()

  Hides the edit button on the sidebar item.

  :returns: $this
  :rtype: FolderItem

.. method:: canRemove()

  Shows the delete button on the sidebar item.

  :returns: $this
  :rtype: FolderItem

.. method:: cannotRemove()

  Hides the delete button on the sidebar item.

  :returns: $this
  :rtype: FolderItem

.. method:: withEditUrl($url)

  Sets the edit URL property of the item

  :param $url: A CP\URL object or string containing the URL in order to edit the item.
  :type $url: CP/URL or string
  :returns: $this
  :rtype: FolderItem

.. method:: withRemoveConfirmation($msg)

  Sets the remove confirmation message for this item.

  :param string $msg: The message that will be displayed as the confirmation when attempting to remove this item
  :returns: $this
  :rtype: FolderItem

.. method:: identifiedBy($val)

  Sets the identity value for this item which is used when this item is removed.

  :param string $val: The value to place in the data attribute for use when removing an item
  :returns: $this
  :rtype: FolderItem

ActionBar Methods
-----------------

.. class:: ActionBar

.. method:: withLeftButton($text, $url, $rel = NULL)

  Sets the button that appears on the left side of the bar.

  :param string $text: The text of the item
  :param $url: A CP\URL object or string containing the URL for the item.
  :param string $rel: Optional string to set on the ``rel=`` attribute of the button.
  :type $url: CP/URL or string
  :returns: $this
  :rtype: ActionBar

.. method:: withRightButton($text, $url, $rel = NULL)

  Sets the button that appears on the right side of the bar.

  :param string $text: The text of the item
  :param $url: A CP\URL object or string containing the URL for the item.
  :param string $rel: Optional string to set on the ``rel=`` attribute of the button.
  :type $url: CP/URL or string
  :returns: $this
  :rtype: ActionBar
