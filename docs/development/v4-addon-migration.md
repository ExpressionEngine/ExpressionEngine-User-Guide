---
lang: javascript
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# v4 Add-on Migration

[TOC]

Provided your add-on is compatible ExpressionEngine 3, it's very likely your add-on works unencumbered in ExpressionEngine 4. But here's the gist on what's changed in ExpressionEngine 4, just in case.

## What's new?

- React 16 is included in the control panel, should you like to use it. We are now using it for Relationship fields and many of the filterable selection lists throughout the CP.
- If any of your fieldtype settings need JavaScript to instantiate, there is a new callback to implement to ensure your fieldtype's settings load correctly in the new channel manager:

      FieldManager.on('fieldModalDisplay', function(modal) {
        // Do something where modal contains your fieldtype's settings form
      });

- There is a new fieldtype called Fluid for creating fluid content in an entry. Like Grid, your fieldtype must opt-in to accept the `fluid_field` content type via the `accepts_content_type()` method in your fieldtype. Supporting Fluid should be similar to Grid in that if your field is relatively simple and does not require its own table for storage, it should just work.
- Speaking of which, if your fieldtype needs JavaScript to instantiate itself on the publish form AND is compatible with the new Fluid field type, there is a new callback to implement, similar to Grid. There are other JS callbacks available in the Fluid field docs.:

      FluidField.on('fieldtype_short_name', 'add', function(row) {
        // Do something where row contains your fieldtype's publish markup
      });

- Added a keyword filter to the Filter service.
- Added a newer, simpler way to implement the Spam module in your add-ons with an improved moderation, approval, and rejection API.
- Spam module can now accept any third-party content types.
- Added `withFilterLink()` to control panel Menu service to allow "View All" links with search boxes.
- Added Member ID as new parameter to the `member_process_reset_password` extension hook.
- Added a `entry_submission_redirect` hook to change the redirect URL after a member clicks Save on the publish form.
- Added the following methods to Text Formatter:
  - `accentToAscii()`
  - `attributeSafe()`
  - `censor()`
  - `convertToEntities()`
  - `decrypt()`
  - `encodeEETags()`
  - `encrypt()`
  - `formPrep()`
  - `json()`
  - `length()`
  - `limitChars()`
  - `replace()`
  - `urlDecode()`
  - `urlEncode()`
  - `urlSlug()`
- Added the following methods to Number Formatter:
  - `currency()`
  - `ordinal()`
  - `spellout()`
- The Sidebar service supports Folder Lists without needing a Heading.

## What's changed?

- ExpressionEngine now requires at least PHP 5.4 and MySQL 5.5.3.
- Channel field entry data is now stored in a table per field to allow for virtually-infinite scaling. Existing installs will keep data for existing fields in the `channel_data` table, but any new fields will use the new storage format. New installs will not use `channel_data` for field data at all. If you primarily use the `ChannelEntry` models for querying data, good news: the change is transparent to you. But if you manually query for entry data, you'll likely need to make some changes.
- The relationships between channels, field groups, and fields have changed. It's basically now a many-to-many, or `hasAndBelongsToMany` in modal parlance, between everything. So again, if you're doing any manual querying and depending on the old field relationship structure, changes will be needed.
- Status groups are no longer a thing. Statuses are unique install-wide and are a `hasAndBelongsToMany` relationship between them and Channels.
- The default database encoding for new installs is based on `utf8mb4` to support emojis. Existing installs can convert via an add-on available on our GitHub account.
- Control panel form markup has changed, but good news: if you use the shared form view, your form views should just work and look up to date. If your form views appear to have an extra border around them, remove the `.box` div.
- Your shared field definitions for selection lists no longer need a `wrap` setting, it's handled automatically.
- Fieldtypes don't need a `field_wide` setting, all fields are now wide. For now ;)
- Fixed a bug with the `serialize` Model column type, allows for Model entities to be stored in the database.
- Fixed a bug where `EE_Fieldtype::content_id()` returned `0` for fields inside of a Grid when its row or the parent entry was being deleted.

## What's been removed?

- Removed the deprecated jQuery notification plugin.
- The following columns have been dropped from the members table: `url`, `location`, `occupation`, `interests`, `bday_d`, `bday_m`, `bday_y`, `aol_im`, `yahoo_im`, `msn_im`, `icq`, `bio`. Any of the fields that had content in them were replaced by custom member fields with the same name.
- Deprecated:
  - URL Helper: `url_title()`, use `ee('Format')->make('Text', $str)->urlSlug()` instead.
  - Text Helper: `convert_accented_characters()`, use `ee('Format')->make('Text', $str)->accentToAscii()` instead.
  - Text Helper: `word_censor()`, use `ee('Format')->make('Text', $str)->censor()` instead.
  - `Api_channel_fields::get_single_field()`, use `ee('Variables/Parser')->parseVariableProperties()` instead.
  - `Functions::assign_variables()`, use `ee('Variables/Parser')->extractVariables()` instead.
  - `Functions::assign_parameters()`, use `ee('Variables/Parser')->parseTagParameters()` instead.
