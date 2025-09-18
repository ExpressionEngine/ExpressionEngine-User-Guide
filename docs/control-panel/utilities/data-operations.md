<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Data Operation Tools

[TOC]

## Cache Manager

**Control Panel Location: `Tools > Utilities > Cache Manager`**

This section of the Control Panel allows you clear the cached data for the different types of [caching](optimization/caching.md) that are available.

![Manage Add-on Extensions](_images/utilities-cache.png)

TIP: **Tip:** To quickly access this section, press `Ctrl / cmd` + `J` to invoke the Jump Menu and pick "Cache Manager"

## Search Reindex

**Control Panel Location:** `Tools > Utilities > Search Reindex`

Search reindexing refreshes the searchable words stored by Grid and Fluid fields that are used by the search module when performing a search. Reindexing is needed when:

- a Grid field's search setting changes
- the search settings for columns in a Grid field change
- fields are removed from a Fluid field
- the Search and Replace tool acted on a Grid or Fluid field
- a new Toggle field was added

This tool will cycle through all Channel Entries that have a Grid or Fluid field assigned to them and re-index the entry data in those fields.

ExpressionEngine is capable of determining whether updating search indexes is needed in most cases.

## Sync Conditional Fields

**Control Panel Location: `Tools > Utilities > Sync Conditional Fields`**

When a [condition](/control-panel/field-manager/conditional-fields.md) is added or updated for field, the entries that are using that field need to be synchronized for field to behave properly.

This utility syncs the conditional logic for each of the channels. You will be redirected to this page automatically after a change in field conditions sets is made, but you can choose to do this only once after making all the updates to the fields, should you need multiple of those.

![Sync Conditional Logic](_images/utilities-sync-conditional-fields.png)

NOTE: **Note:** You can also use `php eecli.php sync:conditional-fields` [CLI command](cli/built-in-commands/sync-conditional-fields.md)

## Update File Usage Information

**Control Panel Location: `Tools > Utilities > Update File Usage`**

NOTE: **Note:** This utility is only needed for sites that have been upgraded from ExpressionEngine versions below 7 and generally only needs to be run once, though re-running the update is not problematic.

Run this utility to convert all files stored in the database from sites previous to ExpressionEngine 7 to the new ExpressionEngine 7 file format. This must be completed before newer File Manager features may be used.

It is recommended that you make sure all installed add-ons are compatible with ExpressionEngine 7 and newer, and that you have made a backup of your database before running the utility.

After the update operation is completed, visit `Content & Design Settings` to disable [Compatibility Mode](control-panel/file-manager/file-manager.md#compatibility-mode) for File Manager.

## Manage Statistics

**Control Panel Location: `Tools > Utilities > Statistics`**

This section of the Control Panel allows you to recount different types of statistics. This section is rarely necessary, but every once in a while a statistic can become out of sync or otherwise not reflect the correct data. This section will allow you to make the system update the information.

![Manage Statistics](_images/utilities-stats.png)

## Data Search and Replace

**Control Panel Location: `Tools > Utilities > Search and Replace`**

This section of the Control Panel allows you to search for text within your site and replace it with another piece of text. This search and replace operation can be performed on your entry titles, within any of the entry fields, or within your Templates.

- **Search for this text** -- Here you can input the text for which you would like to search. You must be very careful about what text you search for. If you input "car", then words such as "carnivore" and "cartoon" will also be matched. If you want to make sure you match only the word "car" then you must place spaces on each side of the term, like " car ". In those cases you need to make sure that your replacement term also contains the spaces in a similar fashion or else you won't get the results you expect.
- **Replace with this text** -- Here you specify what text you would like to replace the text for which you are searching. Be sure that the syntax you uses matches the "search" text. For instance, if your search text is for a specific word or phrase and uses spaces on either side of the search term, then your replacement text also needs to include those spaces on either side so that the resulting text has the correct format.
- **Search and replace in** -- This setting consists of a drop-down list of the possible database areas for which you can perform the search and replace. The list includes:
  - **Site Preferences**: Select a site to search and replace text within the site's preferences (including such prefs as those for Channels and Upload Directories).
  - **Channel Entry Titles**: Select this to search and replace text within the entry titles.
  - **Channel Fields**: Under this heading, each of the available [Fields](control-panel/field-manager/field-manager-settings.md) is listed.
  - **Templates**: Select this to search and replace text within all of your Templates, or in certain template groups.
  - **Template Partials**: Select this to search and replace text within reusable dynamic Template Partials.
  - **Template Variables**: Select this to search and replace text within static Template Variables.
  - **System Templates**: Select this to search and replace text within System Templates.

![Search and Replace Utility](_images/utilities-sandr.png)
