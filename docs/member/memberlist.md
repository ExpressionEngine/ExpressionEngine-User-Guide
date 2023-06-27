<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Member List Tag

[TOC]

## Overview

Outputs a searchable list of members, including form filters to sort and limit the members.

## Parameters

{{embed:_tips/form-attributes.md}}

### `return=`

    return="member/memberlist"

### `form_class=`

    form_class="login"

This parameter allows you to specify the class attribute for the search &lt;form&gt; tag.

### `form_id=`

    form_id="login"

This parameter allows you to specify the id attribute for the search &lt;form&gt; tag.

### `form_name=`

    form_name="login"

This parameter allows you to specify a name attribute for the search &lt;form&gt; tag.

## Form Variables

### `{form_declaration}`

This is a **required** variable in order to use the search form.  It creates the opening form tag.

### `{role_options}`

Form submission errors are displayed using a "looping pair" as there can be more than 1 error in a form submission.

    <select name='role_id' class='select'>
        {role_options}
    </select>

### `{order_by_options}`

Form submission errors are displayed using a "looping pair" as there can be more than 1 error in a form submission.

    <select name='order_by' class='select'>
        {order_by_options}
    </select>

### `{row_limit_options}`

Form submission errors are displayed using a "looping pair" as there can be more than 1 error in a form submission.

    <select name='row_limit' class='select'>
        {row_limit_options}
    </select>

### `{sort_order_options}`

Form submission errors are displayed using a "looping pair" as there can be more than 1 error in a form submission.

    <select name='sort_order' class='select'>
        {sort_order_options}
    </select>

## Variable Pairs

### `{errors}`

Form submission errors are displayed using a "looping pair" as there can be more than 1 error in a form submission.

    {errors}
        <p>{error}</p>
    {/errors}

#### Error Tag Pair Parameters

##### `backspace=`

    backspace="3"

The `backspace=` parameter will remove characters, including spaces and line breaks, from the last iteration of the tag pair.

#### Error Tag Pair Variables

##### `{error}`

    {error}

The error text.



### `{member_rows}`

Data for each member are shown using a "looping pair".

    {member_rows}
        <p>{name}</p>
    {/member_rows}

#### Member Row Tag Pair Parameters

##### `backspace=`

    backspace="3"

The `backspace=` parameter will remove characters, including spaces and line breaks, from the last iteration of the tag pair.

#### Member Row Tag Pair Variables

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

#### `total_posts`

#### `role`

    Primary role name

##### `{member_css}`

    {member_css}

##### `{join_date}`

    {join_date format="%m/%d/%Y"}

##### `{last_visit}`

    {last_visit format="%m/%d/%Y"}


##### `{total_combined_posts}`

    {total_combined_posts}

##### `{if accept_email}`

    Check whether the user can accept emails from site members

##### `{email_console}`

    Link to pop-up with legacy email console

#### `{profile_path}`

    Path to member profile page

#### `{if avatar}`

#### `{avatar_filename}`

#### `{avatar_width}`

#### `{avatar_height}`

#### `{path:avatar}`

    Avatar URL

### `{paginate}`

    {paginate}
        <p>Page {current_page} of {total_pages} pages {pagination_links}</p>
    {/paginate}


See [pagination](templates/pagination.md) for more details.

## Example

    {exp:member:memberlist
        orderby="screen_name"
        sort="asc"
        }

        {form_declaration}

            <table id="memberlist" class='tableborder' border="0" cellpadding="3" cellspacing="0" style="width:100%;">
            <thead>
            <tr>
                <td class='memberlistHead' style="width:21%;">Name</td>
                <td class='memberlistHead' style="width:13%;">Forum Posts</td>
                <td class='memberlistHead' style="width:8%;">Email Short</td>
                <td class='memberlistHead' style="width:13%;">Join Date</td>
                <td class='memberlistHead' style="width:13%;">Last Visit</td>
            </tr>
            </thead>
            <tbody>
            {member_rows}
                <tr>
                    <td class='{member_css}' style="width:20%;">
                        <span class="defaultBold"><a href="{path:profile}">{name}</a></span>
                    </td>
                    <td class='{member_css}'>{total_combined_posts}</td>
                    <td class='{member_css}'>
                        {if accept_email}
                            <a href="#" {email_console}>Email Console</a>
                        {/if}
                    </td>
                    <td class='{member_css}'>{join_date  format="%m/%d/%Y"}</td>
                    <td class='{member_css}'>{last_visit  format="%m/%d/%Y"}</td>
                </tr>
            {/member_rows}

            <tr>
                <td class='memberlistFooter' colspan="5" align='center' valign='middle'>
                    <div class="defaultSmall">
                        <b>show</b>

                        <select name='group_id' class='select'>
                            {group_id_options}
                        </select>

                        &nbsp; <b>sort</b>

                        <select name='order_by' class='select'>
                            {order_by_options}
                        </select>

                        &nbsp;  <b>order</b>

                        <select name='sort_order' class='select'>
                            {sort_order_options}
                        </select>

                        &nbsp; <b>rows</b>

                        <select name='row_limit' class='select'>
                            {row_limit_options}
                        </select>

                        &nbsp; <input type='submit' value='submit' class='submit' />
                    </div>
                </td>
            </tr>
            </tbody>
            </table>

            {paginate}
            <div class="itempadbig">
                <table cellpadding="0" cellspacing="0" border="0" class="paginateBorder">
                <tr>
                    <td><div class="paginateStat">{current_page} of {total_pages}</div></td>
                    {pagination_links}
                </tr>
                </table>
            </div>
            {/paginate}

        </form>
    {/exp:member:memberlist}
