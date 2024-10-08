<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Edit Avatar Tag

[TOC]

## Overview

    {exp:member:edit_avatar}

This tag allows users to edit their avatar image. The image will be uploaded to Avatar directory as set in [Avatar Settings](control-panel/settings/avatars.md) and is required to be less than [maximum file size](control-panel/settings/avatars.md#maximum-file-size-kb) specified in the settings. If the image exceeds maximum width or height, it will be automatically resized.


## Parameters

{{embed:_tips/form-attributes.md}}

### `return=`

    return="member/profile"

### `form_class=`

    form_class="login"

This parameter allows you to specify the class attribute for the &lt;form&gt; tag.

### `form_id=`

    form_id="login"

This parameter allows you to specify the id attribute for the &lt;form&gt; tag.

### `form_name=`

    form_name="login"

This parameter allows you to specify a name attribute for the &lt;form&gt; tag.

## Form Inputs

### `userfile`

File input to upload new avatar.

    <label for="email">Select file to upload as avatar</label>
    <input type="file" name="userfile" />

### `remove`

Submitting the input with this name will remove current avatar.

    <input type="button" name="remove" value="Remove avatar" />

## Conditionals

### `if avatar`

    {if avatar}
        Your current avatar:
        <img src="{avatar_url}" width="{avatar_width}" height="{avatar_height}">
    {/if}

The content is shown if the user has an avatar uploaded.

### `if no_avatar`

    {if avatar}
        No avatar image.
    {/if}

The content is shown if the user does not have an avatar.

## Variables

### `avatar_url`

### `avatar_filename`

### `avatar_width`

### `avatar_height`

## Example

    {exp:member:edit_avatar return="{segment_1}/profile-avatar"}

        Current Avatar:
        {if avatar}
        My avatar: <img src="{avatar_url}" border="0" width="{avatar_width}" height="{avatar_height}" />
        {/if}
        {if no_avatar}No avatar{/if}

        <div>
        Upload an avatar: <input type="file" name="userfile" size="20" class="input" /><br>
        </div>

        <input type='submit' class='submit' value='Upload Avatar' />

        {if avatar}
        <input type='submit' class='submit' value='Remove Avatar' name="remove" />
        {/if}

    {/exp:member:edit_avatar}
