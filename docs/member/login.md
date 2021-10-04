<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Login Form Tag

[TOC]

## Overview

Output a login form.

    {exp:member:login_form}

            <label>Username</label><br />
            <input type="text" name="username" value="" maxlength="32" size="25" />
            <label>Password</label><br />
            <input type="password" name="password" value="" maxlength="32" size="25" />

			<input type="submit" name="submit" value="Submit" />

    {/exp:member:login_form}

## Parameters

### `action=`

    action="https://example.com/"

Allows you to specify the action attribute of the &lt;form&gt; tag. Handy if you need to ensure that authentication points to SSL portions of your site from non-SSL portions. Often used in conjunction with the return= parameter and the [{current_url} global variable](templates/globals/single-variables.md#current_url) so your visitors will go back to the page and domain they logged in from.

### `form_class=`

    form_class="login"

This parameter allows you to specify the class attribute for the &lt;form&gt; tag.

### `form_id=`

    form_id="login"

This parameter allows you to specify the id attribute for the &lt;form&gt; tag.

### `form_name=`

    form_name="login"

This parameter allows you to specify a name attribute for the &lt;form&gt; tag.

### `return=`

    return="site/index"

This parameter allows you to define where the user will be returned after successfully logging in. The parameter can be defined in two ways:

1.  Use the standard Template_Group/Template syntax to specify where to return the user. For instance, if you want the user to be returned to the "local" Template in the "news" Template Group, you would use: return="news/local"
2.  Use a full URL. For example: return="<https://example.com/return.html>"



## Form Inputs

### `Anon`

Determines whether user is included in the online user list.

        <input type="checkbox" name="anon" value="1" checked="checked" /> Show my name in the online users list

Logged in users can be displayed using the [Statistics Module](add-ons/statistics.md).

### `Auto Login`

Option to automatically be logged back in on future visits.

      <input class="checkbox" type="checkbox" name="auto_login" value="1"> Auto-login on future visits

### Password

Member password. This is a **required** field:

    <label for="password">Password</label>
    <input type="password" name="password" value="" maxlength="32" size="25" />

### Username

Member username. This is a **required** field:

    <label for="username">Username</label>
    <input type="text" name="username" value="" maxlength="32" size="25" />


## Variables

#### `{if auto_login}`

    {if auto_login} {/if}

It is recommended that you use this variable as indicated in the example code at the top. This conditional will display the contents inside (typically the "stay logged in" checkbox) based on how your session preference is set. In order for this feature to work you must be set to use "cookies only" and not sessions.:

    {if auto_login}
      <p><input class="checkbox" type="checkbox" name="auto_login" value="1"> Auto-login on future visits</p>
    {/if}


## Example


    {exp:member:login_form return="member/index"}
        <p>
            <label>Username</label><br />
            <input type="text" name="username" value="" maxlength="32" size="25" />
        </p>
        <p>
            <label>Password</label><br />
            <input type="password" name="password" value="" maxlength="32" size="25" />
        </p>
        {if auto_login}
        <p>
            <input type="checkbox" name="auto_login" value="1" /> Auto-login on future visits
        </p>
        {/if}

        <p>
            <input type="checkbox" name="anon" value="1" checked="checked" /> Show my name in the online users list
        </p>

        <p><input type="submit" name="submit" value="Submit" /></p>

        <p><a href="{path='member/forgot-password'}">Forgot password?</a> &nbsp; &nbsp; <a href="{path='member/forgot-username'}">Forgot username?</a></p>
    {/exp:member:login_form}
