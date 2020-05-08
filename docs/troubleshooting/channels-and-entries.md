<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Troubleshooting Channels and Entries

[TOC]

## Times, Localization, and Entry Dates

The Entry Time jumps when updating an entry.

### Troubleshooting Localization

When setting up the ExpressionEngine installation ensure that several settings are accurate:

- `Settings --> General Settings` are set properly for the hosting server's environment.
- `Profile --> Personal Settings` are set appropriately for the visiting user's environment.

NOTE: **Note:** ExpressionEngine does not auto-detect localization settings so these must be updated by the administrator and user when they change in that environment's time zone.

If the time an entry was posted should not have any reference to the localization of the author, then use [gmt_entry_date](channels/entries.md#gmt_entry_date).

## Changing the field formatting for existing entries

Changing the default field formatting does not affect existing entries.

### Troubleshooting

Changing the default formatting options for a channel field at `Developer --> Categories` will only affect future entries.

If the new formatting is to be applied to existing fields as well, care must be taken to select **Update all existing weblog entries with your new formatting choice?** at the bottom of the page whenever the default field formatting is changed.

## A new entry does not appear on the site right away

A newly posted channel entry does not appear on the site right away. It will show at some later point.

### Troubleshooting

The site is probably using template caching and ExpressionEngine was not configured to automatically recreate the cache after posting a new entry. This setting can be found at `Settings --> Content & Design`.

Another possibility to check for is that the [entry date lies in the future](#how-to-display-future-entries).

## How to display future entries

Future entries are not shown by default.

### Troubleshooting

By default, ExpressionEngine will not include entries whose entry date lies in the future. This behavior can be modified using the [show_future_entries=](channels/entries.md#show_future_entries) parameter:

    {exp:channel:entries channel="foobar" show_future_entries="yes"}

## New members do not appear as an option in the author list

Newly added members aren't appearing as a selectable option in the author list of the Control Panel's publish page.

### Troubleshooting

Members must be specifically added to the multi-author list. For individual members, this can be done via `Members`, clicking the member's name and checking **Include user in PUBLISH page multi-author list?** under "Member Preferences".

The appropriate permission for entire member groups can be set at `Members --> Member Groups --> Create/Edit`

## Moving entries to another channel

A user wishes to move an entry from one channel to another.

### Troubleshooting

In order to move channel entries from one channel to another, both channels must share the same

- category groups
- fields and field groups
- and statuses.

If they do, the channel of each entry can simply be selected from the drop-down menu in the Options tab of the Control Panel.
