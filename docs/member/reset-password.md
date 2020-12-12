<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Reset Password Form Tag

[TOC]

## Overview

Output a reset password form that allows members accessing it via a link from a forgotten email form to reset their password while logged out.

    {exp:member:reset_password_form}

            <label>Your New Password</label><br />
            <input type="password" name="password" value="" maxlength="50" size="40" />

            <label>Confirm New Password</label><br />
            <input type="password" name="password_confirm" value="" maxlength="50" size="40" />

			<input type="submit" name="submit" value="Submit" />

    {/exp:member:reset_password_form}

## Parameters

### `error_handling=`

    error_handling="inline"

Choose to display error messages inline (see [Error Messages](#errormy_field_name)). By default, errors are displayed with the user message template.

### `return=`

    return="member/login/success"


## Form Inputs

### Password

            <label>Your New Password</label><br />
            <input type="password" name="password" value="" maxlength="50" size="40" />

The new password to set.

### Password Confirmation

            <label>Confirm New Password</label><br />
            <input type="password" name="password_confirm" value="" maxlength="50" size="40" />


Duplicate of the new password set in the password form input.


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

    {exp:member:reset_password_form
        return="member/login/success"
        error_handling="inline"
        }

        {if errors}
            <fieldset class="error">
                <legend>Errors</legend>
                {errors}
                    <p>{error}</p>
                {/errors}
            </fieldset>
        {/if}

        <p>
            <label>Your New Password</label><br />
            <input type="password" name="password" value="" maxlength="50" size="40" />
        </p>

        <p>
            <label>Confirm New Password</label><br />
            <input type="password" name="password_confirm" value="" maxlength="50" size="40" />
        </p>

        <p><input type="submit" name="submit" value="Submit" /></p>

        <p><a href="{path='member/login'}">Login</a> &nbsp; &nbsp; <a href="{path='member/registration'}">Register</a></p>
    {/exp:member:reset_password_form}

