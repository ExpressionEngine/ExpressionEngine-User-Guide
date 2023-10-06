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

# Channel Entry Model

**class `ExpressionEngine\Model\Channel\ChannelEntry`**

[TOC]

## Properties

| Name                      | Validation                            | Type              | Description  |
| -----------------------   |------------                           | --------------    | -----------  |
| `site_id`                 |                                       |                   | |
| `entry_id`                |                                       |                   | |
| `author_id`               | required, isNatural, validateAuthorId | int               | |
| `channel_id`              | required, validateMaxEntries          |                   | |
| `title`                   | required, maxLength[200], limitHtml[b,cite,code,del,em,i,ins,markspan,strong,sub,sup] | |
| `url_title`               | required, maxLength[URL_TITLE_MAX_LENGTH], alphaDashPeriodEmoji, validateUniqueUrlTitle[channel_id] | See example below for built-in methods. |
| `status`                  | required                              |                   | |
| `status_id`               |                                       |                   | |
| `entry_date`              | required                              | int               | |
| `expiration_date`         |                                       | int               | |
| `edit_date`               |                                       | timestamp         | |
| `forum_topic_id`          |                                       |                   | |
| `ip_address`              | ip_address                            |                   | |
| `versioning_enabled`      | enum[y,n]                             | boolString        | |
| `view_count_one`          |                                       |                   | |
| `view_count_two`          |                                       |                   | |
| `view_count_three`        |                                       |                   | |
| `view_count_four`         |                                       |                   | |
| `allow_comments`          | enum[y,n]                             | boolString        | |
| `sticky`                  | enum[y,n]                             | boolString        | |
| `year`                    |                                       |                   | |
| `month`                   |                                       |                   | |
| `day`                     |                                       |                   | |
| `comment_expiration_date` |                                       |                   | |
| `recent_comment_date`     |                                       | timestamp         | |
| `comment_total`           |

## Relationships

### `Channel`

The Channel the entry belongs to.

### `Author`

The user that published the entry.

### `Status`

The current status of the entry.

### `Categories`

Selected categories the entry has.

### `Autosaves`

If enabled, the entry autosaves.

### `Parents`

Entries that are related to this entry.

### `Children`

Entries that are related to this entry.

### `Versions`

If enabled, previous versions of the entry.

### `Comments`

Comments for the entry.

### `CommentSubscriptions`

Comment subscriptions for the entry.

### `Site`

The site the entry is apart of.  Used in MSM sites.

## Methods

- `validateMaxEntries`
- `validateAuthorId`
- `validateUrlTitle`
- `validateUniqueUrlTitle`
- `saveTabData`
- `saveVersion`
- `getStructure`
- `getDisplay`
- `populateAllowComments`
- `populateChannels`
- `populateAuthors`
- `populateCommentExpiration`
- `populateStatus`
- `getAuthorName`
- `getModChannelResultsArray`
- `hasPageURI`
- `getPageURI`
- `getPageTemplateID`
- `isLivePreviewable`
- `hasLivePreview`

## Events

- `beforeDelete`
- `beforeInsert`
- `beforeSave`
- `beforeUpdate`
- `afterDelete`
- `afterInsert`
- `afterSave`
- `afterUpdate`

## Examples

### Get an Entry by ID

```php
$entry_id = 50;

$entry_object = ee('Model')
                ->get('ChannelEntry')
                ->filter('entry_id', $entry_id)
                ->first();
```

### Alternatively using the Entry ID as the Primary Key

```php
$entry_id = 50;

$entry_object = ee('Model')
                ->get('ChannelEntry', $entry_id)
                ->first();
```

### Create a new simple entry

```php
$entry              = ee('Model')->make('ChannelEntry');
$entry->author_id   = ee()->session->userdata('member_id'); // Returns currently Logged-in user ID.
$entry->channel_id  = 1;
$entry->title       = 'An Awesome Title';
$entry->url_title   = ee('Format')->make('Text', 'An Awesome Title')->urlSlug()->compile(); // Returns an-awesome-title. Must be unique.
$entry->status      = ee('Model')->get('Status', 1)->first()->status; // Returns 'open';
$entry->entry_date  = ee()->localize->now; // Returns time in seconds from epoch: 1623945317

// Validate and Save.
$result = $entry->validate();

if ($result->isValid()) {
    $entry->save();
}

$entry->entry_id; // Will now return the new Entry ID.
```

### Edit a Status

```php
$entry_id = 3;

// Get the entry object.
$entry = ee('Model')->get('ChannelEntry', $entry_id)->first();

// Returns 'closed'.
$entry->status = ee('Model')->get('Status', 2)->first()->status;

// Validate and Save.
$result = $entry->validate();

if ($result->isValid())
{
  $entry->save();
}
```

### Get an Entry's Children

```php
// The parent entry.
$entry_id = 1;

// Get the Entry's object.
$entry = ee('Model')->get('ChannelEntry', $entry_id)->first();

// Get the children relationship, and returns entry objects.
$children = $entry->Children;

$children_ids = $children->pluck('entry_id');
// Output array(2, 3, 4...etc);
```

Or as One Line:

```php
$children_ids = ee('Model')->get('ChannelEntry', 1)->first()->Children->pluck('entry_id');
```

## Standard Custom Fields

### Get an Entry's Custom Field

```php
// Get a Channel Entry object.
$entry = ee('Model')->get('ChannelEntry', 5)->first();

// Get the field data.
$field_data = $entry->field_id_5;

// Using Variables.
$field_id = 5;
$field_data = $entry->{'field_id_'.$field_id};
```

### Set a Standard Custom Field

```php
// Get a Channel Entry object.
$entry = ee('Model')->get('ChannelEntry', 5)->first();

// Set the field data.
$entry->field_id_5 = 'New Data';

// Validate and Save.
$result = $entry->validate();

if ($result->isValid())
{
  $entry->save();
}
```

## Advanced Custom Fields

Grid, Fluid and Relationship fieldtypes take additional handling. We will cover just the basics to recall and save data here.

### Grid

The Grid fieldtype was created before the newer EE Model Service. If you tried to recall a Grid field with `$entry->field_id_8` the result will be `null`, so we have to use a Grid-specific process.

To start, the Grid fieldtype has a legacy model that must be loaded once per class to use the helper methods.

```php
ee()->load->model('grid_model');
```

Grid fields contains an array of rows with arrays of the columns for each row.

#### Rows

New rows are created by using the prefix `new_row_` and then the zero-indexed row ID for that instance. For example, the 2nd row would be `new_row_1`.  If the page is reloaded then the ID returns to zero. The ID is not actually required, but recommended, especially if row order is important.

```php
'new_row_0' => array(
    'col_id_1' => 'data for column 1',
    'col_id_2' => 'data for column 2',
    'col_id_3' => 'data for column 3',
),
```

Existing rows start with the prefix `row_id_` and then the unique row ID.  When a row is saved for the first time it is given a unique ID across all of the grid rows in your ExpressionEngine site.

#### Columns

In each row is an array of columns.  Columns start with `col_id_` and then the row ID such as `col_id_1`, `col_id_2`.  Data for each column can be any fieldtype compatable with Grid and is set in the same way as if it were out of a Grid field.

It is important to note that columns have to be set ahead time, and their IDs are also global to the ExpressionEngine site.  In other words, when saving data if a column does not exist in the array, the saving process will not automatically create a new column.  Depending on the method used to save the data, EE may also throw an error if a column is missing.

#### Get Grid Data

To get Grid data for a specific entry ID and field ID, use the `get_entry` method:

```php

$grid_data = ee()->grid_model->get_entry($entry_id, $grid_field_id, 'channel');

```

Returns an array similar to this:

```php
array(

    // First row.
    array(
        'row_id' => 3, // Unique ID to all Grid rows in EE.
        'entry_id' => 8, // Entry ID this is linked to.
        'row_order' => 0, // Order of the row in the entry. Zero-index.
        'fluid_field_data_id' => 0,
        'col_id_9' => 'field data from the first column', // Each column's data.
        'col_id_10' => 'more field data from the second column', // Each column's data.
    ),

    // Second row.
    array(
        'row_id' => 4,
        'entry_id' => 8,
        'row_order' => 1,
        'fluid_field_data_id' => 0,
        'col_id_9' => 'field data from the first column',
        'col_id_10' => 'more field data from the second column',
    ),
)
```

To Save New Grid Data:

```php

ee()->load->model('grid_model');

$entry_id = 5;
$grid_field_id = 1;

$new_grid_data =  array(

    'new_row_0' => array(
        'col_id_1' => 'data for column 1',
        'col_id_2' => 'data for column 2',
        'col_id_3' => 'data for column 3',
    ),

    'new_row_1' => array(
        'col_id_1' => 'data for column 1',
        'col_id_2' => 'data for column 2',
        'col_id_3' => 'data for column 3',
    ),
);

// Option 1, save to the Object (recommended)
$entry = ee('Model')->get('ChannelEntry', $entry_id)->first();
$entry->{$entry->getCustomFieldPrefix() . $grid_field_id} = $new_grid_data;
$entry->save();

// Option 2, save using the Grid method.
ee()->grid_model->save_field_data($new_grid_data, $grid_field_id, 'channel', $entry_id);

```

Edit Grid Data:

```php

ee()->load->model('grid_model');

$entry_id = 5;
$grid_field_id = 1;

$new_grid_data =  array(

    'row_id_5' => array(
        'col_id_1' => 'new data for column 1',
        'col_id_2' => 'new data for column 2',
        'col_id_3' => 'new data for column 3',
    ),

    'row_id_6' => array(
        //...etc
    ),
);

// Option 1, save to the Object (recommended)
$entry = ee('Model')->get('ChannelEntry', $entry_id)->first();
$entry->{$entry->getCustomFieldPrefix() . $grid_field_id} = $new_grid_data;
$entry->save();

// Option 2, save using the Grid method.
ee()->grid_model->save_field_data($new_grid_data, $grid_field_id, $entry->getContentType(), $entry_id);

```

### Fluid

Fluid has its own model to fetch fields.  Fluid fields are existing fields that are grouped into a Fluid field.

#### Get data from an entry's fluid field

```php

$field_objects = ee('Model')
                    ->get('fluid_field:FluidField')
                    ->filter('entry_id', $entry_id) // The Entry ID
                    ->filter('fluid_field_id', $fluid_field_id) // The fluid field in the entry.
                    ->order('order') // Important to maintain the field order within the fluid field.
                    ->all(); // Get all the individual fields within the fluid field.

// Get an array of field IDs
$field_objects->pluck('field_id'); // array(3, 45, 2, 5);

// Get an array of data from each field within a Fluid fieldtype:
$field_objects->fetchFieldData();

// Example Return:
array(
    array(
        'id'         => 2
        'entry_id'   => 4,
        'field_id_1' => 'your field data',
        'field_ft_1' => 'none',
    ),
    array(
        'id'          => 5
        'entry_id'    => 4,
        'field_id_5'  => 'your field data',
        'field_ft_5'  => 'xhtml',
    ),
)
```

The next two examples assumes a text field with and ID of 5 has already been created, and added to this fluid field as an option to use.

#### Edit and replace exiting data

Note this will overwrite the entire fluid field.

```php
$entry->{$entry->getCustomFieldPrefix() . $fluid_field_id} = array(
    'fields' => array(

        // Replace/edit data
        // The ID in the Fluid Field table, $fluid->id.
        'field_7' => array(

            // The existing field ID.
            'field_id_5' => 'Field data'
        ),
    )
);
```

#### Add a new field in the fluid grid

```php
// $entry->field_id_x
$entry->{$entry->getCustomFieldPrefix() . $fluid_field_id} = array(
    'fields' => array(

        // Adding a new field.
        // Each is appended with a number, starting with 1.
        'new_field_1' => array(
            'field_id_5' => 'New field data'
        )
    )
);
```

### Relationship

Relationships are set by passing an array of entry IDs.

```php
$entry_id = 8;

$entry = ee('Model')->get('ChannelEntry', $entry_id)->first();

$related_entry_ids = array( 'data' => array('9', '10', '11') )

$entry->field_id_10 = $related_entry_ids;

$entry->save();
```
