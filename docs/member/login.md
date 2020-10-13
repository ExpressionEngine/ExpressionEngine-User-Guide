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

Output a forgotten password form that sends an email with instructions for resetting a member password when unable to login.

    {exp:member:login_form}

            <label>Username</label><br />
            <input type="text" name="username" value="" maxlength="32" size="25" />
            <label>Password</label><br />
            <input type="password" name="password" value="" maxlength="32" size="25" />

			<input type="submit" name="submit" value="Submit" />

    {/exp:member:login_form}

## Parameters

### `inline=`

    inline_errors="yes"

Something something.


# Form Inputs

### Password

Member password. This is a **required** field:

    <label for="password">Password</label>
    <input type="password" name="password" value="" maxlength="32" size="25" />

### Username

Member username. This is a **required** field:

    <label for="username">Username</label>
    <input type="text" name="username" value="" maxlength="32" size="25" />


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

        <p><a href="{path='mymb/forgot-password'}">Forgot password?</a> &nbsp; &nbsp; <a href="{path='mymb/forgot-username'}">Forgot username?</a></p>
    {/exp:member:login_form}