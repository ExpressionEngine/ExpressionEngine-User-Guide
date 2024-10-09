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


NOTE: **Note:** This form will only email the user if the user requesting the password reset is not currently logged in.

{{embed:_tips/form-validation.md}}

## Parameters

### `email_template=`

    email_template="member/email-password-reset"

Template to use for email which is sent to user.

NOTE: **Note:** If no template is defined, the default [Member Profile Template](control-panel/template-manager.md#member-profile-templates) for a forgotten password will be used.

### `inline_errors=`

    inline_errors="yes"

This parameter is for use with [form validation and error handling](/templates/form-validation.md) and determines the type of error reporting: inline or error template.

### `password_reset_url=`

    password_reset_url="member/reset-password"

URL that is sent to the user (followed by the hash) to reset the user's password. The parameter can be defined in two ways:

1.  Use the standard Template_Group/Template syntax to specify where to return the user. For instance, if you want the user to be returned to the "local" Template in the "news" Template Group, you would use: return="member/reset-password"
2.  Use a full URL. For example: return="<https://example.com/member/reset-password.html>"

### `return=`

    return="member/forgot-password/sent"

This parameter allows you to define where the user will be returned after successfully completing the form. The parameter can be defined in two ways:

1.  Use the standard Template_Group/Template syntax to specify where to return the user. For instance, if you want the user to be returned to the "local" Template in the "news" Template Group, you would use: return="member/forgot-password/sent"
2.  Use a full URL. For example: return="<https://example.com/member/forgot-password/sent.html>"

### `return_error=`

    return_error="template_group/error"

This parameter is for use with [form validation and error handling](/templates/form-validation.md) and determines the template to return to if validation errors are detected.


## Form Inputs
NOTE: Be sure to include the required Javascript and CSS to use the native [Password Validation](member/password-validation.md).

### Email

Member email address. This is a **required** field:

    <label for="email">Email</label>
    <input type="email" name="email" value="" maxlength="120" size="40" />

## Example

    {exp:member:forgot_password_form
        return="member/forgot-password/sent"
        inline_errors="yes"
        password_reset_url="member/reset-password"
        email_template="member/email-password-reset"
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
            <input type="email" name="email" value="{if old:email}{old:email}{/if}" maxlength="120" size="40" />
        </p>

        <p><input type="submit" name="submit" value="Submit" /></p>

        <p><a href="{path='member/login'}">Login</a> &nbsp; &nbsp; <a href="{path='member/registration'}">Register</a></p>
    {/exp:member:forgot_password_form}
