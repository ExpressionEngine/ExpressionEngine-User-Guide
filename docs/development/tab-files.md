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


# Adding Publish Layout Tabs

[TOC]

## Overview

Add-ons can also add tabs which are visible on in [Publish Layouts](control-panel/channels.md#publish-layouts). Respectively these tabs would also be visible on the Entry Publish/Edit page if selected in the publish layout. Tabs can also optionally display the associated data as columns in Entry Manager.

Two things are required for your add-on to have this functionality:

- [`tabs()` method](/development/add-on-update-file.md#add-publish-tabs-with-your-add-on-tabs) added to the Update File
- The Tab File (`tab.[addon_name].php`)

Here is an example of the publish layout's tab for the Structure add-on:
![structure tab](_images/structure_tab.png)

NOTE:Before adding a tab to your add-on, you need to already have an add-on in place. See [Building An Add-On: Getting Started](development/addon-development-overview.md#getting-started) for how to generate the starter files for your add-on.

## Creating An Amazing Tab File
Tab files are not currently able to be generated through the CLI, thus you will need to manually create the file `tab.[addon_name].php` in the root of your add-on's folder.

```
amazing_add_on
...
┣ tab.amazing_add_on.php
┗...
```

## Anatomy Of A Tab File

```
<?php

class Amazing_add_on_tab
{

    public function display($channel_id, $entry_id = ''){

        $settings = [
            //array of settings
        ]
        return $settings;
    }

    public function validate($entry, $values){
        $validator = ee('Validation')->make(array(
            'amazing_field_one' => 'required',
            'amazing_field_two' => 'required|enum[y,n]',
        ));

        return $validator->validate($values);
    }

    public function cloneData($entry, $values){

        return $values;
    }

    public function save($entry, $values){

    }

    public function delete($entry_ids){

    }
    

    // This function is needed to display data as an Entry Manager column
    public function renderTableCell($data, $field_id, $entry)
    {
        $entry_meta = $this->getEntryMeta($entry->entry_id);
        return json_encode($entry_meta);
    }

}
```

**class `Add_on_name_tab`**

There are no required class variables. Because multiple modules may be adding fields to the publish page, all third party tab fields are namespaced using the package name when displayed on the publish page. This namespacing will be stripped prior to any data being returned to the tab functions.

NOTE: **Note:** if your module includes a tab, do not forget to indicate this in the update file when installing the module. Further, be sure to include the `tabs()` function in the update file, and use it when updating custom layouts on installation and uninstallation.


### `display($channel_id, $entry_id = '')`

| Parameter    | Type    | Description                                           |
| ------------ | ------- | ----------------------------------------------------- |
| \$channel_id | `int`   | Channel ID where the entry is being created or edited |
| \$entry_id   | `int`   | Entry ID if this is an edit, empty otherwise          |
| Returns      | `Array` | Settings (see below)                                  |

This function creates the fields that will be displayed on the publish page. It must return `$settings`, an associative array specifying the display settings and values associated with each of your fields.

The settings array elements:

    Array(
      '...' => Array( // name of the field (same as 'field_id' below)
        'field_id'              => '...', // name of the field
        'field_label'           => '...', // field label, typically a language variable is used here
        'field_required'        => '...', // whether to include the 'required' class next to the field label: y/n
        'field_data'            => '...', // current data, if applicable
        'field_list_items'      => '...', // array of options, otherwise empty string
        'options'               => '...', // array of options, otherwise empty string
        'selected'              => '...', // selected value if applicable to the field_type
        'field_fmt'             => '...', // allowed field format options, if applicable
        'field_instructions'    => '...', // instructions to be displayed for this field on the publish page
        'field_show_fmt'        => '...', // whether the field format dropdown shows: y/n. Note: if 'y', you must specify the options available in field_fmt
        'field_pre_populate'    => '...', // can pre-populate a field when it's a new entry
        'field_text_direction'  => '...', // direction of the text: ltr/rtl
        'field_type'            => '...'  // may be any existing field type
      )
    )

### `validate($entry, $values)`

| Parameter | Type                                                                         | Description                                                                                                                                                                                                            |
| --------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \$entry   | <small>`ExpressionEngine\Module\Channel\Model\ChannelEntry`</small> | The channel entry entity                                                                                                                                                                                               |
| \$values  | `array`                                                                      | an associative array with field names as keys and form submission data as the value (i.e. `array('fortune' => 'All your hard work will soon pay off.'))`. The keys are derived from the data returned by `display()`. |
| Returns   | <small>`ExpressionEngine\Service\Validation\Result`</small>         | A result object                                                                                                                                                                                                        |

Allows you to validate the data after the publish form has been submitted but before any additions to the database:

    function validate($entry, $values)
    {
      $validator = ee('Validation')->make(array(
        'foo_field_one' => 'required',
        'foo_field_two' => 'required|enum[y,n]',
      ));

      return $validator->validate($values);
    }

### `cloneData($entry, $values)`

| Parameter | Type                                                                | Description                         |
| --------- | ------------------------------------------------------------------- | ------ ----------------------------- |
| \$entry   | <small>`ExpressionEngine\Module\Channel\Model\ChannelEntry`</small> | The channel entry entity            |
| \$values  | `array`         | an associative array with field names as keys and form submission data as the value (i.e. `array('fortune' => 'All your hard work will soon pay off.'))`. The keys are derived from the data returned by `display()`. |
| Returns   | `array`         | $values modified array of values  |

Code that needs to be executed when an entry is being [cloned](/channels/entry_cloning.md). This function is called before `validate`, so if you need to modify the data that will be passed to validation service (as well as `$_POST` array), this is the place to do it.

    public function cloneData(ChannelEntry $entry, $values)
    {
        if ($values['pages_uri'] == '') {
            return $values;
        }
        //check if submitted URI exists
        $static_pages = ee()->config->item('site_pages');
        $uris = $static_pages[ee()->config->item('site_id')]['uris'];

        //exclude current page from check
        if (isset($uris[$entry->entry_id])) {
            unset($uris[$entry->entry_id]);
        }
        //ensure leading slash is present
        $value = '/' . trim($values['pages_uri'], '/');

        while (in_array($value, $uris)) {
            $value .= '_1';
        }
        $_POST['pages__pages_uri'] = $values['pages_uri'] = $value;

        return $values;
    }

### `save($entry, $values)`

| Parameter | Type                                                                         | Description                                                                                                                                                                                                           |
| --------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \$entry   | <small>`ExpressionEngine\Module\Channel\Model\ChannelEntry`</small> | The channel entry entity                                                                                                                                                                                              |
| \$values  | `array`                                                                      | an associative array with field names as keys and form submission data as the value (i.e. `array('fortune' => 'Do not make extra work for yourself.'))`. The keys are derived from the data returned by `display()`. |
| Returns   | `Void`                                                                       |                                                                                                                                                                                                                       |

Called during a `ChannelEntry` entity's `afterSave` event, this allows you to insert data/update data:

    function save($entry, $values)
    {
        if (! isset($values['field_name_one']) OR $values['field_name_one'] == '')
        {
            return;
        }

        $data = array(
            'entry_id' => $entry->entry_id,
            'file_id' => $values['field_name_one']
        );

        ee()->db->insert('table_name', $data);
    }

### `delete($entry_ids)`

| Parameter   | Type    | Description                                           |
| ----------- | ------- | ----------------------------------------------------- |
| \$entry_ids | `array` | Channel ID where the entry is being created or edited |
| Returns     | `Void`  |                                                       |

Called during a `ChannelEntry` entity's `beforeDelete` event, this allows you to sync your records if any are tied to channel entry_ids.

### `renderTableCell($data, $field_id, $entry)`

Display the tab data as column in the Entry Manager

| Parameter | Type     | Description                               |
| --------- | -------- | ----------------------------------------- |
| \$data    | `Array`  | Ignored by tab files                      |
| \$field_id| `Int`    | Ignored by tab files                      |
| \$entry   | `Array`  | Current `ChannelEntry` object             |
| Returns   | `String` | The string to display in Entry Manager column  |

#### `getTableColumnConfig()`

Sets [table column configuration](development/services/table.html#setting-the-columns) for Entry Manager

Returns `Array`
