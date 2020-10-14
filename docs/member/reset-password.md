<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Forgot Password Form Tag

[TOC]

## Overview

Output a forgotten password form that sends an email with instructions for resetting a member password when unable to login.

    {exp:member:reset_password_form}

            <label>Your Email Address</label><br />
            <input type="email" name="email" value="" maxlength="120" size="40" />

			<input type="submit" name="submit" value="Submit" />

    {/exp:member:reset_password_form}

## Parameters

### `inline_errors=`

    inline_errors="yes"

Something something.

### `return=`

    return="mymb/login/success"


# Form Inputs

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
        return="mymb/login/success"
        inline_errors="yes"
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

        <p><a href="{path='mymb/login'}">Login</a> &nbsp; &nbsp; <a href="{path='mymb/registration'}">Register</a></p>
    {/exp:member:reset_password_form}

