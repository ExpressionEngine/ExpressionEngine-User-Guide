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

    {exp:member:forgot_password_form}

            <label>Your Email Address</label><br />
            <input type="email" name="email" value="" maxlength="120" size="40" />

			<input type="submit" name="submit" value="Submit" />

    {/exp:member:forgot_password_form}

## Parameters

### `error_handling=`

    error_handling="inline"

Choose to display error messages inline (see [Error Messages](#errormy_field_name)). By default, errors are displayed with the user message template.

### `password_reset_email_template=`

    password_reset_email_template="member/email-password-reset"

### `password_reset_url=`

    password_reset_url="member/reset-password"

By default, emails will use the dedicated [Email Templates](control-panel/template-manager#email-templates) to control the layout of the forgotten username email.  This parameter allows use of the full templates:

	Hello {name},

	To reset your password, please go to the following page:

	{reset_url}

	Then log in with your username: {username}

	If you do not wish to reset your password, ignore this message. It will expire in 24 hours.

	{site_name}
	{site_url}

### `return=`

    return="member/forgot-password/sent"


## Form Inputs

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
        return="member/forgot-password/sent"
        error_handling="inline"
        password_reset_url="member/reset-password"
        password_reset_email_template="member/email-password-reset"
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

        <p><a href="{path='member/login'}">Login</a> &nbsp; &nbsp; <a href="{path='member/registration'}">Register</a></p>
    {/exp:member:forgot_password_form}
