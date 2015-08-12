Sidebar Service
===============

.. contents::
  :local:
  :depth: 1

.. highlight:: php

Simple Example
--------------

The Control Panel's left sidebar is built with the Sidebar Service::

  $sidebar = ee('Sidebar')->make();

In accordance with our `style guide <https://ellislab.com/style-guide/c/structure#content-box-sidebar>`_ sidebars have headers::

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

Complete Example
----------------

This will build a sidebar with a header, which has a button and two items underneath it::

  $sidebar = ee('Sidebar')->make();

  $fortunes = $sidebar->addHeader(lang('forutnes))
    ->withButton(lang('new'), ee('CP/URL', 'addons/settings/fortune_cookie/create'));

  $fortunes_list = $fortunes->addBasicList();
  $fortunes_list->addItem(lang('recent_fortunes'), ee('CP/URL', 'addons/settings/fortune_cookie/recent'))
  $fortunes_list->addItem(lang('archived_fortunes'), ee('CP/URL', 'addons/settings/fortune_cookie/archived'));

Sidebar Methods
---------------

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

Header Methods
--------------

.. class:: Header

.. method:: withUrl($url)

  Sets the URL property of the header

  :param $url: A CP\URL object or string containing the URL for the header.
  :type $url: CP/URL or string
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

.. method:: isActive()

  Marks the item as active

  :returns: $this
  :rtype: BasicItem

.. method:: asDeleteAction()

  Marks the item as a delete action

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

FolderItem Methods
------------------

.. class:: FolderItem

.. method:: withUrl($url)

  Sets the URL property of the item

  :param $url: A CP\URL object or string containing the URL for the item.
  :type $url: CP/URL or string
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
