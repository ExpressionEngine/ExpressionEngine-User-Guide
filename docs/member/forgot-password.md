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

The purpose of this tag .

    {exp:member:forgot_password_form}

            <label>Your Email Address</label><br />
            <input type="email" name="email" value="" maxlength="120" size="40" />

			<input type="submit" name="submit" value="Submit" />

    {/exp:member:forgot_password_form}

## Parameters

### `inline_errors=`

    inline_errors="yes"

The name (short name) of the channel. This is a **required** parameter.

### `password_reset_email_template=`

    password_reset_email_template="member/email-password-reset"

### `password_reset_url=`

    password_reset_url="member/reset-password"

### `return=`

    return="member/forgot-password/sent"
	
	
# Form Inputs

### Email

Member email address. This is a **required** field:

    <label for="email">Email</label>
    <input type="email" name="email" value="" maxlength="120" size="40" />



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

    {exp:member:forgot_password_form
        return="mymb/forgot-password/sent"
        inline_errors="yes"
        password_reset_url="mymb/reset-password"
        password_reset_email_template="mymb/email-password-reset"
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
            <label>Your Email Address</label><br />
            <input type="email" name="email" value="" maxlength="120" size="40" />
        </p>

        <p><input type="submit" name="submit" value="Submit" /></p>

        <p><a href="{path='mymb/login'}">Login</a> &nbsp; &nbsp; <a href="{path='mymb/registration'}">Register</a></p>
    {/exp:member:forgot_password_form}
