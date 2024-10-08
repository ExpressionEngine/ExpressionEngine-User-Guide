<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Members Fieldtype

The Members Fieldtype allows selecting one or multiple members and associating those with a channel entry

[TOC]

The Members fieldtype helps you connect Members to Channel Entries. This lets you create powerful relationships between Members and content in your Channel entries. For example, you could create a Channel called "Articles" and a Channel Field called "Authors" that uses the Members fieldtype. You could then associate one or more Members with each Article entry. This would allow you to display the author's name, bio, photo, etc. on the Article page.

![members field](_images/field_members.png)

## Field Settings

#### Roles to include

Only allow selecting member with chosen primary roles. Note that secondary roles are not being taken into account when working with Members field.

#### Maximum number of available members

Sets the number of members displayed in the field's dropdown. Leave blank to allow all members.  All members are still available to the search, this is simply a display setting.

#### Order By

Default ordering of members in the field's dropdown.

#### Allow Multiple Relationships?

When set to yes, authors will be allowed to create multiple relationships in a single field.

#### Minimum selection
The minimum number of members that can be added to the field.

#### Maximum selection
The maximum number of members that can be added to the field.

#### Display Member IDs?
When enabled, member IDs will be displayed together with member screen name inside the field.

#### Defer field initialization?
When enabled, this field won’t initialize until the Edit Members button is clicked on. This can result in faster control panel page load times.

## Template Tag Pair

The field is most useful when used as tag pair in the template. All variables are prefixed with the field's short name, followed by semicolon, to avoid naming conflicts.

    {members_field}
        <div class="{members_field:switch="one|two"} id="row-{members_field:count}>
            <b>{members_field:screen_name}</b>
            - {members_field:username}
            - {members_field:custom_field}
        </div>
    {/members_field}

### Parameters

#### `backspace=`

    backspace="7"

Just like the backspace parameter on the [Channel Entries](channels/entries.md) module, backspacing removes characters (including spaces and line breaks) from the last iteration of the loop.

### Variables

All variables inside field's tag pair are prefixed with the field's name and semicolon. So if the field is `members_field` you'll be accessing the related member's screen name as `{members_field:screen_name}`

#### `member_id`

#### `username`

#### `screen_name`

#### `email`

#### `join_date`

#### `last_visit`

#### `last_activity`

#### `last_entry_date`

#### `last_comment_date`

#### `last_forum_post_date`

#### `total_entries`

#### `total_comments`

#### `total_forum_topics`

#### `language`

#### `timezone`

#### `total_forum_posts`

##### `join_date`

    {members_field:join_date format="%m/%d/%Y"}

##### `last_visit`

    {members_field:last_visit format="%m/%d/%Y"}

#### `avatar_url`

#### `avatar_filename`

#### `avatar_width`

#### `avatar_height`

#### `role_id`

#### `primary_role_id`

#### `primary_role_name`

#### `primary_role_description`

#### `primary_role_short_name`

#### Custom Member Fields

All custom member fields as available using their prefixed short name.

    {members_field:member_custom_field}

## Single Template Tag Modifiers

In addition to using as template tag pair, the Members field can display its data as single tag, when used with some pre-defined template modifiers.

### `:member_ids`
Fetching Member IDs Only

Sometimes it's useful to get just a list of IDs of related members to pass on to another tag as a parameter. If you need to do this you can use the single variable `:member_ids` shortcut modifier:

    {members_field:member_ids}

Which outputs the member IDs in the following format:

    43|58|127

#### Parameters

The member field tag with the `:member_ids` modifier has an optional `delimiter` parameter.

By default the member IDs will be pipe-delimited, but you can choose to have them delimited with something else:

    {members_field:member_ids delimiter=","}

Would output in the following format:

    43,48,127

### `:length`
### `:total_rows`

Both of these modifiers can be used to display the number of members that are related via a certain field

    {members_field:length} // 2
    {members_field:total_rows} // 2
