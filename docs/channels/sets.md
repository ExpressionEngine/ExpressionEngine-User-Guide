---
lang: json
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Channel Sets

[TOC]

## Overview

Channel Sets allow you to save the structure of a Channel as a JSON file and import it elsewhere. The structure of a channel is made up of its [Channel Settings](control-panel/channels.md#settings-tab), [Channel Categories](control-panel/channels.md#categories-tab), [Channel Fields](control-panel/channels.md#fields-tab), and [Statuses](control-panel/channels.md#statuses-tab). When you [export your Channel Set](control-panel/channels.md), you're provided with a zip file that contains all of the data needed to recreate that same Channel on any other ExpressionEngine installation by using the [Channel Set Import](control-panel/channels.md#channel-set-import) page.

When using Relationships, your Channel Set export will follow all relationships and export them. For example, if you have a Game Channel that has a Team Channel relationship selected, the Team Channel will also be exported. This applies to the Team Channel as well; if that Channel has a Player Channel relationship selected, the Player Channel will be exported.

## Channel Set Structure

Channel Sets are zip files containing the following files:

    ├── channel_set.json
    └── custom_fields
        └── <field group name>
            ├── <custom field name>.<fieldtype>
            ├── <custom field name>.<fieldtype>
            └── ...

### Custom Fields

Custom fields are all represented as JSON objects. Each custom field exports its own properties, but `label`, `instructions`, and `order` are always inclued. If after exporting you realize you want to order your fields differently, simply set the `order` property in the order you want the field to appear in:

    {
        "label": "Content",
        "instructions": "Content for this blog entry.",
        "order": 1,
        "search": "y",
        "ta_rows": 10,
        "settings": {
            "field_show_smileys": "n",
            "field_show_file_selector": "n",
            "field_show_formatting_btns": "n"
        }
    }

NOTE: **Note:** All fieldtypes included in the channel set must already be installed in order to import the channel set.

### `channel_set.json`

Your `channel_set.json` file ties everything together. It will contain structural data about `channels`, `status_groups`, `category_groups`, and `upload_destinations`.

#### `channels`

    {
        "channels": [
            {
                "channel_title": "Blog",
                "status_group": "Default",
                "field_group": "blog",
                "cat_groups": [
                    "Blog"
                ]
            }
        ],
    }

The array of channels will contain objects that represent each Channel. Each Channel has a `channel_title`, `status_group`, `field_group`, and `cat_groups`, though they can be empty. In addition, you can supply `title_field_label` to change the Title Label on the publish page.

#### `statuses`

    {
      "statuses": [
            {
                "name": "Default Page",
                "highlight": "2051B3"
            }
      ],
    }

We don't export the default "open" or "closed" status, only any additional statuses.

Each object will contain an array of `statuses` that have objects defining the status that contain the `status`'s name and _optionally_ the `highlight` color.

#### `category_groups`

    {
        "category_groups": [
            {
                "name": "Blog",
                "categories": [
                    "News",
                    "Personal",
                    "Photos",
                    "Videos",
                    "Music"
                ]
            }
        ],
    }

The array of `category_groups` contains a `name` for the category group, and an array of `categories` representing the group's categories.

NOTE: **Note:** Nested categories are not currently supported.

#### `upload_destinations`

    {
        "upload_destinations": [
            {
                "name": "Blog Images",
            }
        ]
    }

In the event that there's a file field that contains a specified upload destination, you'll find an `upload_destinations` object. It contains an object representing upload destinations and those objects contains a `name`.

## Sample Channel Sets

We created a few sample Channel Sets as examples and starting points. You can find them on GitHub:

- [Blog Channel Set](https://github.com/EllisLab/channel-set-blog): a blog channel with an image, body, and a set of categories
- [Portfolio Channel Set](https://github.com/EllisLab/channel-set-portfolio): a portfolio channel with support for multiple images and files, along with a brief description and a set of categories
- [Event Channel Set](https://github.com/EllisLab/channel-set-event): an event channel with location information, contact information, and related events
- [Staff Channel Set](https://github.com/EllisLab/channel-set-staff): a staff channel with email address, phone number, position, and biography
- [Game Channel Set](https://github.com/EllisLab/channel-set-game): three channels that relate to each other:
  - Game is a channel that contains a location, start time and a relationship to select two Teams
  - Team is a channel that contains team history, location, a home page, their mascot, and their current Player roster
  - Player is a channel that contains a biography, height and weight, position, hometown, and whether they're currently eligible to play
