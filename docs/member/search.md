<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Forgot Username Form Tag

[TOC]

## Overview

    {exp:member:member_search}
        {form_declaration}
            <input type="text" name="search_keywords_1" />
            <select name='search_field_1' class='select' >
                <option value='screen_name'>Search Field</option>
                <option value='screen_name'>Screen Name</option>
                <option value='email'>Email Address</option>
                {custom_profile_field_options}
            </select>

            <select name='search_group_id' class='select' >
                {group_id_options}
            </select>

            <div class="itempadbig">&nbsp; <input type='submit' value='search' class='submit' /></div>
        </form>
    {/exp:member:member_search}

## Parameters

### `inline_errors=`

    inline_errors="yes"

### `memberlist_url=`

    memberlist_url="mymb/memberlist"


### `return=`

    return="mymb/memberlist"


## Form Variables

### `{form_declaration}`

This is a **required** variable in order to use the search form.  It creates the opening form tag.

### `{custom_profile_field_options}`

## Form Inputs

### Search Keywords

    <label for="search_keywords_1">Search</label>
    <input type="text" name="search_keywords_1" />

### Search Field

The field to search in.

            <select name='search_field_1' class='select' >
                <option value='screen_name'>Search Field</option>
                <option value='screen_name'>Screen Name</option>
                <option value='email'>Email Address</option>
                {custom_profile_field_options}
            </select>


### Member Group

Limit search by member group.

            <select name='search_group_id' class='select' >
                {group_id_options}
            </select>
