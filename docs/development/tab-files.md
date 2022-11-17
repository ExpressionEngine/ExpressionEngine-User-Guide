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

### `tabs()`

| Parameter | Type    | Description                                      |
| --------- | ------- | ------------------------------------------------ |
| Returns   | `Array` | Associative array of the tab name and tab fields |

An optional function, included only if the module adds a tab to the publish page. This function should return an multidimensional associative array, the top array key consisting of the tab name, followed by any field names, with each field having a variety of default settings. Note that when the fields are added to the publish page, they are namespaced to prevent variable collisions:

    function tabs()
    {
        $tabs['tab_name'] = array(
            'field_name_one'=> array(
                'visible'   => 'true',
                'collapse'  => 'false',
                'htmlbuttons'   => 'true',
                'width'     => '100%'
                ),
            'field_name_two'=> array(
                'visible'   => 'true',
                'collapse'  => 'false',
                'htmlbuttons'   => 'true',
                'width'     => '100%'
                ),
            );

        return $tabs;
    }



### module tab label

In addition to the two required fields you can have a custom tab label for your publish fields. Just assign the desired label to a key which shares the name of your module name:

    // Additional Key => Value pairs go here

    /**
     * Tab Label for publish fields
     *
     * Assign the label you wish to use to the module_name array key
     * Remember only alphanumeric characters, underscores, dashes and spaces are allowed.
     */

    'module_name' => 'Tab label'

## The Tab File (tab.module_name.php)

**class `Module_name_tab`**

This is an optional file, required only if your module needs to include a tab on the publish page. It must have a class with a name that is a combination of the package's name with a `_tab` suffix. There are no required class variables. Because multiple modules may be adding fields to the publish page, all third party tab fields are namespaced using the package name when displayed on the publish page. This namespacing will be stripped prior to any data being returned to the tab functions.

NOTE: **Note:** if your module includes a tab, do not forget to indicate this in the update file when installing the module. Further, be sure to include the `tabs()` function in the update file, and use it when updating custom layouts on installation and uninstallation.

## Tab File Function Reference

**class `Module_name_tab`**

[TOC=3]

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
| \$values  | `array`                                                                      | an associative array with field names as keys and form submission data as the value (i.e. `array('fortune' => 'All your hard work will soon pay off.'))`. The keys are derrived from the data returned by `display()`. |
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
| \$values  | `array`         | an associative array with field names as keys and form submission data as the value (i.e. `array('fortune' => 'All your hard work will soon pay off.'))`. The keys are derrived from the data returned by `display()`. |
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
| \$values  | `array`                                                                      | an associative array with field names as keys and form submission data as the value (i.e. `array('fortune' => 'Do not make extra work for yourself.'))`. The keys are derrived from the data returned by `display()`. |
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