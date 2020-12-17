---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# CP/Sidebar Service

[TOC]

## Simple Example

```php
// The Control Panel's left sidebar is built with the Sidebar Service:
$sidebar = ee('CP/Sidebar')->make();

// You can add items:
$item = $sidebar->addItem(lang('new'), ee('CP/URL', 'addons/settings/fortune_cookie/create'));

// Items can have an icon:
$item->withIcon('truck');

// Items may be marked as active:
$item->isActive();

// You can add dividers:
$sidebar->addDivider();

// You can add a header:
$header = $sidebar->addHeader('Settings');

// Header's may have a list. A list may be a basic list or a folder list:
$basic_list  = $header->addBasicList();
$folder_list = $header->addFolderList($name);

// Lists have items:
$basic_item  = $basic_list->addItem($text, $url);
$folder_item = $folder_list->addItem($text, $url)
    ->withEditUrl($url)
    ->withRemoveConfirmation($msg)
    ->identifiedBy($id);

// Folder list items may also be marked as default:
$folder_item->asDefaultItem();

// Basic list items may also be marked as a delete action:
$basic_item->asDeleteAction();

// You can add a folder list directly to a sidebar without a header:
$folder_list = $sidebar->addFolderList($name);
```

## Reorderable Folder Lists

Folder lists can be reordered:

    $folder_list->canReorder();

Calling `canReorder()` will automatically bind the appropriate JavaScript and styles to the list to enable its folder items to be dragged and sorted. Reordering list items won't cause them to stick from request to request, that's something you would need to implement to suit your particular add-on. To hook into the sort event to perform custom operations on sort, set a callback like so:

    EE.cp.folderList.onSort('list-name', function(list) {
      // Do as you wish with the passed list object
    });

Where `'list-name'` is the unique name you have your folder list. A jQuery object of the folder list element will be passed to the callback, in which you have access to various data about your list items. For example, you may want to gather the unique identifiers for the folder items and send them to an AJAX request, as we do for template groups:

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

## CP/Sidebar Methods

**class `ExpressionEngine\Service\Sidebar\Sidebar`**

[TOC=3]

### `make()`

Makes a new Sidebar object.

| Parameter | Type  | Description |
| --------- | ----- | ----------- |
| Returns   | `URL` | \$this      |

### `render()`

Renders the sidebar

| Parameter | Type     | Description                      |
| --------- | -------- | -------------------------------- |
| Returns   | `String` | The rendered HTML of the sidebar |

### `addHeader($text, $url = NULL)`

Adds a header to the sidebar

| Parameter | Type             | Description                                                         |
| --------- | ---------------- | ------------------------------------------------------------------- |
| \$text    | `String`         | The text of the header                                              |
| \$url     | CP/URL or string | An optional CPURL object or string containing the URL for the text. |
| Returns   | `Header`         | A new Header object.                                                |

### `addItem($text, $url = NULL)`

Adds a BasicItem to the sidebar

| Parameter | Type             | Description                                                         |
| --------- | ---------------- | ------------------------------------------------------------------- |
| \$text    | `String`         | The item text                                                       |
| \$url     | CP/URL or string | An optional CPURL object or string containing the URL for the text. |
| Returns   | `BasicItem`      | A new BasicItem object.                                                |

### `addDivider()`

Adds a divider to the sidebar

### `addFolderList($name)`

Adds a folder list to the sidebar

| Parameter | Type         | Description                 |
| --------- | ------------ | --------------------------- |
| \$name    | `String`     | The name of the folder list |
| Returns   | `FolderList` | A new FolderList object     |

### `addActionBar()`

Adds an action bar to the bottom of the sidebar

| Parameter | Type        | Description            |
| --------- | ----------- | ---------------------- |
| Returns   | `ActionBar` | A new ActionBar object |

## Header Methods

**class `ExpressionEngine\Service\Sidebar\Header`**

[TOC=3]

### `isActive()`

Marks the header as active

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| Returns   | `Header` | \$this      |

### `withButton($text, $url)`

Sets the button property of the header

| Parameter | Type             | Description                                                 |
| --------- | ---------------- | ----------------------------------------------------------- |
| \$text    | `String`         | The text of the button                                      |
| \$url     | CP/URL or string | A CPURL object or string containing the URL for the button. |
| Returns   | `Header`         | \$this                                                      |

### `addBasicList()`

Adds a basic list under this header

| Parameter | Type        | Description            |
| --------- | ----------- | ---------------------- |
| Returns   | `BasicList` | A new BasicList object |

### `addFolderList($name)`

Adds a folder list under this header

| Parameter | Type         | Description                 |
| --------- | ------------ | --------------------------- |
| \$name    | `String`     | The name of the folder list |
| Returns   | `FolderList` | A new FolderList object     |

### `withUrl($url)`

Sets the URL property of the header

WARN: **Deprecated** since v6.0.0. When a link is needed, a sidebar item should be used instead: `$sidebar->addItem()`. Headers should be used to mark sections of the sidebar, not as links.

### `urlIsExternal($external = TRUE)`

Sets the URL is external property

WARN: **Deprecated** since v6.0.0. When a link is needed, a sidebar item should be used instead: `$sidebar->addItem()`. Headers should be used to mark sections of the sidebar, not as links.

## BasicList Methods

### `addItem($text, $url = NULL)`

Adds an item to the list

| Parameter | Type             | Description                                               |
| --------- | ---------------- | --------------------------------------------------------- |
| \$text    | `String`         | The text of the item                                      |
| \$url     | CP/URL or string | A CPURL object or string containing the URL for the item. |
| Returns   | `BasicItem`      | A new BasicItem object.                                   |

## BasicItem Methods

**class `ExpressionEngine\Service\Sidebar\BasicItem`**

[TOC=3]

### `withIcon($icon)`

Sets the icon for the item

| Parameter | Type             | Description                                               |
| --------- | ---------------- | --------------------------------------------------------- |
| \$icon    | string           | Name of the icon                                          |
| Returns   | `BasicItem`      | \$this                                                    |

### `withUrl($url)`

Sets the URL property of the item

| Parameter | Type             | Description                                               |
| --------- | ---------------- | --------------------------------------------------------- |
| \$url     | CP/URL or string | A CPURL object or string containing the URL for the item. |
| Returns   | `BasicItem`      | \$this                                                    |

### `urlIsExternal($external = TRUE)`

Sets the URL is external property

| Parameter  | Type             | Description                          |
| ---------- | ---------------- | ------------------------------------ |
| \$external | `Bool`(optional) | TRUE if it is external, FALSE if not |
| Returns    | `BasicItem`      | \$this                               |

### `isActive()`

Marks the item as active

| Parameter | Type        | Description |
| --------- | ----------- | ----------- |
| Returns   | `BasicItem` | \$this      |

### `asDeleteAction($modal_name = '')`

Marks the item as a delete action

| Parameter    | Type        | Description                                           |
| ------------ | ----------- | ----------------------------------------------------- |
| \$modal_name | `String`    | The name of the modal this delete action will trigger |
| Returns      | `BasicItem` | \$this                                                |

## FolderList Methods

**class `ExpressionEngine\Service\Sidebar\FolderList`**

[TOC=3]

### `addItem($text, $url = NULL)`

Adds an item to the list

| Parameter | Type             | Description                                                         |
| --------- | ---------------- | ------------------------------------------------------------------- |
| \$text    | `String`         | The text of the item                                                |
| \$url     | CP/URL or string | An optional CPURL object or string containing the URL for the item. |
| Returns   | `FolderList`     | A new FolderList object.                                            |

### `withRemoveUrl($url)`

Sets the URL to use when removing an item

| Parameter | Type             | Description                                                         |
| --------- | ---------------- | ------------------------------------------------------------------- |
| \$url     | CP/URL or string | A CPURL object or string containing the URL to use when removing an |
| Returns   | `FolderList`     | \$this                                                              |

### `withRemovalKey($key)`

Sets the name of variable passed with the removal action.

| Parameter | Type         | Description                    |
| --------- | ------------ | ------------------------------ |
| \$key     | `String`     | The name of the variable with. |
| Returns   | `FolderList` | \$this                         |

### `withNoResultsText($msg)`

Sets the no results text which will display if this header's list(s) are empty.

| Parameter | Type         | Description                                     |
| --------- | ------------ | ----------------------------------------------- |
| \$msg     | `String`     | The text to display when the list(s) are empty. |
| Returns   | `FolderList` | \$this                                          |

### `canReorder()`

Allows the folder list to be reordered.

| Parameter | Type         | Description |
| --------- | ------------ | ----------- |
| Returns   | `FolderList` | \$this      |

## FolderItem Methods

**class `ExpressionEngine\Service\Sidebar\FolderItem`**

[TOC=3]

### `withIcon($icon)`

Sets the icon for the item

| Parameter | Type             | Description                                               |
| --------- | ---------------- | --------------------------------------------------------- |
| \$icon    | string           | Name of the icon                                          |
| Returns   | `FolderItem`      | \$this                                                    |

### `withUrl($url)`

Sets the URL property of the item

| Parameter | Type             | Description                                               |
| --------- | ---------------- | --------------------------------------------------------- |
| `$url`    | CP/URL or string | A CPURL object or string containing the URL for the item. |
| Returns   | `FolderItem`     | \$this                                                    |

### `urlIsExternal($external = TRUE)`

Sets the URL is external property

| Parameter  | Type             | Description                          |
| ---------- | ---------------- | ------------------------------------ |
| \$external | `Bool`(optional) | TRUE if it is external, FALSE if not |
| Returns    | `FolderItem`     | \$this                               |

### `isActive()`

Marks the item as active

| Parameter | Type         | Description |
| --------- | ------------ | ----------- |
| Returns   | `FolderItem` | \$this      |

### `asDefaultItem()`

Marks the item as default

| Parameter | Type         | Description |
| --------- | ------------ | ----------- |
| Returns   | `FolderItem` | \$this      |

### `canEdit()`

Shows the edit button on the sidebar item.

| Parameter | Type         | Description |
| --------- | ------------ | ----------- |
| Returns   | `FolderItem` | \$this      |

### `cannotEdit()`

Hides the edit button on the sidebar item.

| Parameter | Type         | Description |
| --------- | ------------ | ----------- |
| Returns   | `FolderItem` | \$this      |

### `canRemove()`

Shows the delete button on the sidebar item.

| Parameter | Type         | Description |
| --------- | ------------ | ----------- |
| Returns   | `FolderItem` | \$this      |

### `cannotRemove()`

Hides the delete button on the sidebar item.

| Parameter | Type         | Description |
| --------- | ------------ | ----------- |
| Returns   | `FolderItem` | \$this      |

### `withEditUrl($url)`

Sets the edit URL property of the item

| Parameter | Type             | Description                                                            |
| --------- | ---------------- | ---------------------------------------------------------------------- |
| \$url     | CP/URL or string | A CPURL object or string containing the URL in order to edit the item. |
| Returns   | `FolderItem`     | \$this                                                                 |

### `withRemoveConfirmation($msg)`

Sets the remove confirmation message for this item.

| Parameter | Type         | Description                                                                                |
| --------- | ------------ | ------------------------------------------------------------------------------------------ |
| \$msg     | `String`     | The message that will be displayed as the confirmation when attempting to remove this item |
| Returns   | `FolderItem` | \$this                                                                                     |

### `identifiedBy($val)`

Sets the identity value for this item which is used when this item is removed.

| Parameter | Type         | Description                                                            |
| --------- | ------------ | ---------------------------------------------------------------------- |
| \$val     | `String`     | The value to place in the data attribute for use when removing an item |
| Returns   | `FolderItem` | \$this                                                                 |

## ActionBar Methods

**class `ExpressionEngine\Service\Sidebar\ActionBar`**

[TOC=3]

### `withLeftButton($text, $url, $rel = NULL)`

Sets the button that appears on the left side of the bar.

| Parameter | Type             | Description                                                   |
| --------- | ---------------- | ------------------------------------------------------------- |
| \$text    | `String`         | The text of the item                                          |
| \$url     | CP/URL or string | A CPURL object or string containing the URL for the item.     |
| \$rel     | `String`         | Optional string to set on the `rel=` attribute of the button. |
| Returns   | `ActionBar`      | \$this                                                        |

### `withRightButton($text, $url, $rel = NULL)`

Sets the button that appears on the right side of the bar.

| Parameter | Type             | Description                                                   |
| --------- | ---------------- | ------------------------------------------------------------- |
| \$text    | `String`         | The text of the item                                          |
| \$url     | CP/URL or string | A CPURL object or string containing the URL for the item.     |
| \$rel     | `String`         | Optional string to set on the `rel=` attribute of the button. |
| Returns   | `ActionBar`      | \$this                                                        |
