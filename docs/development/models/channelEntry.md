---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2021, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Channel Entry Model

**class `ExpressionEngine\Model\Channel\ChannelEntry`**

[TOC]

## Properties

### Required:
#### `author_id`
#### `channel_id`
#### `title`
#### `url_title`
#### `status`
#### `entry_date`

### Optional:
#### `entry_id` Key
#### `site_id`
#### `forum_topic_id`
#### `ip_address`
#### `status_id`
#### `versioning_enabled`
#### `view_count_one`
#### `view_count_two`
#### `view_count_three`
#### `view_count_four`
#### `allow_comments`
#### `sticky`
#### `year`
#### `month`
#### `day`
#### `expiration_date`
#### `comment_expiration_date`
#### `edit_date`
#### `recent_comment_date`
#### `comment_total`

## Relationships

#### `Channel`

#### `Author`

#### `Status`

#### `Categories`

#### `Autosaves`

#### `Parents`

#### `Children`

#### `Versions`

#### `Comments`

#### `CommentSubscriptions`

#### `Site`


## Methods

#### `validateMaxEntries`

#### `validateAuthorId`

#### `validateUrlTitle`

#### `validateUniqueUrlTitle`

#### `onBeforeSave`

#### `onAfterSave`

#### `onAfterInsert`

#### `onBeforeInsert`

#### `onBeforeUpdate`

#### `onAfterUpdate`

#### `onBeforeDelete`

#### `onAfterDelete`

#### `saveTabData`

#### `saveVersion`

#### `getStructure`

#### `getDisplay`

#### `populateAllowComments`

#### `populateChannels`

#### `populateAuthors`

#### `populateCommentExpiration`

#### `populateStatus`

#### `getAuthorName`

#### `getModChannelResultsArray`

#### `hasPageURI`

#### `getPageURI`

#### `getPageTemplateID`

#### `isLivePreviewable`

#### `hasLivePreview`


## Events
#### `beforeDelete`
#### `beforeInsert`
#### `beforeSave`
#### `beforeUpdate`
#### `afterDelete`
#### `afterInsert`
#### `afterSave`
#### `afterUpdat`

## Examples

#### Get an Entry by ID
```
$entry_id = 50;

$entry_object = ee('Model')
                ->get('ChannelEntry')
                ->filter('entry_id', $entry_id)
                ->first();

```

Alternatively using the Entry ID as the Primary Key:
```
$entry_id = 50;

$entry_object = ee('Model')
                ->get('ChannelEntry', $entry_id)
                ->first();
```

#### Create a new simple entry
```
$entry              = ee('Model')->make('ChannelEntry');
$entry->author_id   = ee()->session->userdata('member_id'); // Returns currently Logged-in user ID.
$entry->channel_id  = 1,
$entry->title       = 'An Awesome Title';
$entry->url_title   = ee('Format')->make('Text', 'An Awesome Title')->urlSlug()->compile(); // Returns an-awesome-title. Must be unique.
$entry->status      = ee('Model')->get('Status', 1)->first()->status; // Returns 'open';
$entry->entry_date  = ee()->localize->now; // Returns time in seconds: 1623945317

// Create the entry.
$entry->save();

$entry->entry_id; // Will now return the new Entry ID.
```

#### Edit a Status
```
$entry_id = 3;

// Get the entry object.
$entry = ee('Model')->get('ChannelEntry', $entry_id)->first(); 

// Returns 'closed'.
$entry->status = ee('Model')->get('Status', 2)->first()->status; 

// Save the changes.
$entry->save();
```

#### Get an Entry's Children
```
// The parent entry.
$entry_id     = 1; 

// Get the Entry's object.
$entry        = ee('Model')->get('ChannelEntry', $entry_id)->first(); 

// Get the children relationship.  Returns entry objects.
$children     = $entry->Children; 

// Will output array(2, 3, 4...etc);
$children_ids = $children->pluck('entry_id'); 
```

As One Line:
```
$children_ids = ee('Model')->get('ChannelEntry', 1)->first()->Children->pluck('entry_id');
```