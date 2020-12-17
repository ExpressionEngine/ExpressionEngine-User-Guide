<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Forum Boards

[TOC]

The Discussion Forum module allows you to create multiple forum "boards" enabling you to run separate forums on one installation. Each board can have its own URL, making it possible for you to have separate boards for each site, or even run multiple distinct boards on a single site.

Aliases allow you to use alternative URLs from which to display your boards.

## Managing Boards

The "Forum Boards" are displayed in the left navigation. From there you can add new boards and edit or delete existing ones.

### Adding/Editing a Forum Board

#### Enable board

When set to **enable**, this forum board will be accessible to member roles with proper permissions

#### Name

Full descriptive name of this board.

#### Short name

The "short name" for the forum board, used in the board= parameter of the Forum tag when running forums through regular templates. No spaces. Underscores and dashes are allowed.

#### Forum directory

URL location to the forum. This is the URL to the main forum page.

#### Forum URL segment

Word that triggers forum display. Cannot be the same as a template or template group. The trigger word causes the forum to be processed apart from standard templates. If you are outputting the forum via tag on a standard template, this field should be blank.

#### Default theme

Forum theme for this forum.

#### Allow PHP?

Allows the use of standard PHP within forum templates.

#### PHP parsing stage

When set to **output**, PHP will be parsed after the template.

#### Attachments per post

Maximum attachments allowed per post.

#### Upload directory

URL location of this upload directory.

#### Allowed file types?

The type of files that can be uploaded as attachments.

#### File size

Maximum file size in megabytes.

#### Image width

Maximum image width in pixels.

#### Image height

Maximum image height in pixels.

#### Enable thumbnail creation?

When set to **enable**, clickable thumbnails will be shown in posts.

#### Thumbnail width

Maximum thumbnail width in pixels.

#### Thumbnail height

Maximum thumbnail height in pixels.

## Forum Board Alias Details

### Forum Board Alias Settings

The Forum Board Alias settings are essentially the same as the General Settings for a normal forum board. The difference is that an existing forum board is selected as the one being aliased. This enables you to display a forum board on different sites / locations within the same ExpressionEngine installation as the normal location.

#### Forum Board Label

The label that is displayed for the forum board alias.

#### Forum Board Short Name

The "short name" for the forum board alias, used in the board= parameter of the Forum tag when running forums through regular templates.

#### Forum URL

The base URL where the forum board alias will be displayed.

#### Site for Forum

If the [Multiple Site Manager](msm/overview.md) is enabled, this allows you to determine which Site the forum board belongs to.

#### Forum Triggering Word

When this word is encountered in your URL it will display your forum. The word you choose cannot be the name of an existing template group.

#### Enable Forum Board

Yes / No. Whether or not the forum board alias is turned on.

#### Forum Board Being Aliased

The Forum Board that this Alias points to.
