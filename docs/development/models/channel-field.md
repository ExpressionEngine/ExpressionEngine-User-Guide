---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2022, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Channel Field Model

**class `ExpressionEngine\Model\Channel\ChannelField`**

[TOC]

## Properties

### Required
| Name                      | Validation                        | Type       | Description  |
| -----------------------   |------------                       | ---------- | -----------  |
| `site_id`                 | required                          | integer    |              |
| `field_name`              | required, alphaDash, unique(installation wide), validateNameIsNotReserved, maxLength[32]|            |              |
| `field_label`             | required, maxLength[50]           |            |              |
| `field_type`              | required, validateIsCompatibleWithPreviousValue, enum[checkboxes, colorpicker, date, duration, email_address , file, file_grid, fluid_field, grid, multi_select, notes, radio, range_slider, relationship, rte, select, selectable_buttons, slider, text, textarea, toggle, url] (or the name of a custom field type)|     |validateIsCompatibleWithPreviousValue is used when modifying the field_type of an existing field. Please see [Fieldtype Compatibility Options](development//addon-setup-php-file.md#fieldtypes) for more details.       |
| `field_order`             |                                   | integer    |              |
| `field_list_items`        | required (can be an empty string) |            | The simplest of three mutual exclusive ways to populate a list of items is using a string with items separated by line breaks \n. Used with listing field types  (Checkboxes, Multi Select, Radio Buttons, Select Dropdown and Selectable Buttons) when field_settings['value_label_pairs'] is not set and 'field_pre_populate' == 'n' (do not populate from channel entries)|

### Optional
| Name                      | Validation                        | Type       | Description  |
| -----------------------   |------------                       | ---------- | -----------  |
| `field_id`                |                                   | integer    |              |
| `field_instructions`      |                                   |            |              |
| `field_pre_populate`      | enum[y,n,v]                       | boolString | if 'y' populate a list of items from channel entries. Used in conjunction with the  two properties `field_pre_channel_id` and `field_pre_field_id` |
| `field_pre_channel_id`    |                                   | integer    |              |
| `field_pre_field_id`      |                                   | integer    |              |
| `field_ta_rows`           |                                   | integer    | height of a textarea field in rows |
| `field_maxl`              |                                   | integer    | max length of a text input field |
| `field_required`          | enum[y,n]                         | boolString |              |
| `field_text_direction`    | enum[ltr,rtl]                     |            |              |
| `field_search`            | enum[y,n]                         | boolString |              |
| `field_is_hidden`         | enum[y,n]                         | boolString |              |
| `field_fmt`               |                                   | enum[br,xhtml,none]           | used only by some field types, 'br' stands for auto line break              |
| `field_show_fmt`          | enum[y,n]                         | boolString |              |
| `field_content_type`      | enum[all,any,image,integer,text]  |            |              |
| `field_settings`          |                                   | base64Serialized | Specific settings depending on the field type. See the following table.             |
| `legacy_field_data`       |                                   | boolString |              |

## Field settings

The property `field_settings` consists in an array of settings that depend on the field type. Here are the most common settings for the standard field types. field settings are stored in the database column 'field_settings' as a base64 encoded string of the serialized array.

| Field types             | Setting name                      | Values          | Description  |
| -------------------     |------------                       | ----------      | -----------  |
| Checkboxes, Multi Select, Radio Buttons, Select Dropdown, Selectable Buttons  | `value_label_pairs`               | associative array |     |
| Color Picker            | `allowed_colors`                  | enum[any,swatches] |              |
| Color Picker            | `colorpicker_default_color`       |                 |  hex color code, or null |
| Color Picker            | `value_swatches`                  | array           | array of hex color codes, used when `populate_swatches` is set to 'v' (value)              |
| Color Picker            | `manual_swatches`                 |                 | hex color codes separated by line breaks, or null, used when `populate_swatches` is set to 'm' (manual) |
| Color Picker            | `populate_swatches`               | enum[m,v]       | 'm' manual or 'v' value |
| Duration                | `units`                           | enum[seconds,minutes,hours]  |              |
| File, file_grid         | `field_content_type`              | enum[image,all] |              |
| File, file_grid         | `allowed_directories`             | 'all' (or integer for upload directory id) | required             |
| File                    | `show_existing`                   | enum[y,n]       | When enabled, a drop down with existing files will be shown to authors. |
| File                    | `num_existing`                    | integer         | Maximum number of files to show in the drop down. |
| File, Rich text editor  | `field_fmt`                       | 'none'          |              |
| file_grid, grid         | `grid_min_rows`                   | integer         | default 0 |
| file_grid, grid         | `grid_max_rows`                   | integer         |              |
| file_grid, grid         | `allow_reorder`                   | enum[y,n]       |              |
| fluid_field             | `field_channel_fields`            | array           | channel IDs used in the fluid field  |
| Notes                   | `note_content`                    | text            | default is ''|
| Notes                   | `field_hide_title`                | bool            | default is true |
| Notes                   | `field_hide_publish_layout_collapse`| bool          | default is true |
| Range slider, value slider  | `field_min_value`             | integer         | default to 0 |
| Range slider, value slider  | `field_max_value`             | integer         | default to 100|
| Range slider, value slider  | `field_step`                  | integer         | default to 1 |
| Range slider, value slider  | `field_prefix`,`field_suffix` |                 |              |
| Range slider, value slider, Text input  | `field_content_type`          | enum[all,number,integer,decimal]     |              |
| relationship            | `channels`                        | array           | channel IDs  |
| relationship            | `expired`, `future`               |                 | Allow expired or future entries in this relationships field |
| relationship            | `categories`, `authors`, `statuses`| array          | limit the entries by categories, authors or statuses IDs  |
| relationship            | `limit`                           | integer         | Sets the number of entries displayed in the field's dropdown  |
| relationship            | `order_field`, `order_dir`        | enum[title,entry_date] , enum[asc,desc]        | Default ordering of entries  |
| relationship            | `display_entry_id`                | enum[y,n]       |              |
| relationship            | `allow_multiple`                  | enum[y,n]       |              |
| Rich text editor        | `toolset_id`                      | integer         | see Rich Text Editor addon for details, for a standard installation: 1 CKEditor Basic, 2 CKEditor Full, 3 Redactor Basic, 4 Redactor Full |
| Rich text editor        | `defer`                           | enum[y,n]       | Defer Editor initialization |
| Rich text editor, Textarea  | `db_column_type`                  | enum[text,mediumtext]| Column type in database: TEXT(64Kb) MEDIUMTEXT(16Mb) |
| Rich text editor        | `field_wide`                      | bool            | default true, full width  |
| Rich text editor        | `field_show_fmt`                  | enum[y,n]       | default 'n'  |
| Text input              | `field_maxl`                      | integer         | Maximum characters  |
| Text input, Textarea    | `field_show_smileys`              | enum[y,n]       |              |
| Text input, Textarea    | `field_show_file_selector`        | enum[y,n]       |              |
| Textarea                | `field_show_formatting_btns`      | enum[y,n]       |              |
| Toggle                  | `field_default_value`             | enum[0,1]       |              |
| URL                     | `allowed_url_schemes`             | array           | example ['http://','https://'] |
| URL                     | `url_scheme_placeholder`          |                 | example 'http://' |


## Relationships

- `ChannelFieldGroups`
- `Channels`
- `SearchExcerpts`

## Methods

- `getStructure`
- `getDataTable`
- `getContentType`
- `getSettingsValues`
- `getAllChannels`
- `validateNameIsNotReserved` the list of reserved words is in /ee/legacy/libraries/Cp.php: invalid_custom_field_names()
- `validateIsCompatibleWithPreviousValue`

## Events

- `beforeInsert'`
- `afterInsert'`
- `beforeDelete'`

## Examples

### Get a Channel Field

Field #4 is the "About Images" field in the sample installation.

```php
ee('Model')->get('ChannelField', 4)->first();
```

### Change a field name

```php
// Get the field object.  #4 is the About Images field.
$field = ee('Model')->get('ChannelField', 4)->first();

// Change the title using the parameter.
$field->field_name = 'new_field_name';

// Validate and Save.
$result = $field->validate();

if ($result->isValid())
{
  $field->save();
}
```

### Get the Channels the Field is used in

Note that this only finds channels where fields were assigned individually and not when included within a field group.

```php
// Get the field object.  #4 is the About Images field.
$field = ee('Model')->get('ChannelField', 4)->first();

// Get the Channel's object using the Channel relationship.
$channels = $field->Channels;

// Returns an array of channel IDs.
$channel_ids = $channels->pluck('channel_id');

// As one line:
 $channel_ids = ee('Model')->get('ChannelField', 4)->first()->Channels->pluck('channel_id');
```

### Create a Basic New Field

```php
$field = ee('Model')->make('ChannelField');

// Set required fields.
$field->site_id     = ee()->config->item('site_id');
$field->field_name  = 'my_field_name';
$field->field_label = 'Field Label';
$field->field_type  = 'text';
$field->field_list_items  = '';
$field->field_order = 1;

// Set field-specific settings
$settings = $field->getSettingsValues();
$settings['field_settings']['field_show_file_selector'] = 'y';
$field->setProperty('field_settings', $settings['field_settings']);

// Validate and Save.
$result = $field->validate();

if ($result->isValid())
{
  $field->save();
}

// Field ID is now available.
$field->field_id;
```

Field types `Relationships`, `Grid` and `Fluid` require additional steps. Their data will be `NULL`.

### Add Field to a Field Group

```php
// Get an existing field.
$field = ee('Model')->get('ChannelField', 4)->first();

// Add the field groups by ID.  Note the plural differences. This overwrites any existing assignments.
$field->ChannelFieldGroups = ee('Model')->get('ChannelFieldGroup', array(1,2))->all();

// Validate and Save.
$result = $field->validate();

if ($result->isValid())
{
  $field->save();
}
```

### Populate a field compatible with list field types

For fields like Checkboxes, Multi Select, Radio Buttons, Select Dropdown and Selectable Buttons there are three ways to populate their options: value-labels pairs, manually or from other channel.

```php
// populate manually
$field->setProperty('field_list_items', "first\nsecond\nthird");
// Validate and Save.
```
```php
// populate with value-labels pairs
$checkboxes_settings = array(
		    'value_label_pairs' => array('winner' => 'first', 'player' => 'second', 'loser' => 'third')
			);
// change field settings
$changing_settings = $field->getSettingsValues()['field_settings'];
foreach ($checkboxes_settings as $s => $s_value) {
			$changing_settings[$s] = $s_value;
		}
$field->setProperty('field_settings', $changing_settings);
// Validate and Save.
```
```php
// or populate from other channel field
$field->setProperty('field_pre_populate','y'); // default is 'n'
$field->setProperty('field_pre_channel_id',4); //channel id
$field->setProperty('field_pre_field_id',80); // field id
// Validate and Save.
```

### Create a relationship field

```php
//Relationships with channel #4

//all properties are required
$relata_properties = array(
		'field_label' => 'relata',
		'field_name' => 'relata',
		'field_type' => 'relationship',
		'field_list_items' => ''
);

//all settings are optional
$relata_settings = array(
	'channels' => array(4), // if missing relates to all channels
	'expired' => true, // if missing defaults to false
	'future' => true, // if missing defaults to false
	'categories' => array(), // if missing or empty allows relationships with all categories
	'authors' => array(), // if missing or empty allows relationships with all authors
	'statuses' => array('open'), // if missing or empty allows relationships with all statuses
	'order_field' => 'entry_date', // default is by title
	'order_dir' => 'desc', // default is ascending
	'display_entry_id' => null, //default is false
	'allow_multiple' => true, // default is true
	'rel_min' => 0,  //Minimum number of related entries
	'rel_max' => null  // Maximum number of related entries
);

$field = ee('Model')->make('ChannelField');

$site_id = ee()->config->item('site_id');
$field->site_id     = $site_id;
// field_order: increment the last field order number of fields belonging to this site
$ordernumber = 1 + ee('Model')->get('ChannelField')->filter('site_id',$site_id)->order('field_order', 'DESC')->first()->field_order;
$field->field_order = $ordernumber;

// field settings
$changing_settings = $field->getSettingsValues()['field_settings'];
foreach ($relata_settings as $s => $s_value) {
	$changing_settings[$s] = $s_value;
}
$field->setProperty('field_settings', $changing_settings);

// field properties
foreach ($relata_properties as $p => $p_val) {
	$field->setProperty($p, $p_val);
}
// Validate and Save.
```
