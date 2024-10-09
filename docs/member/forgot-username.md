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

Output a forgotten username form that sends an email with instructions for addressing a forgotten member username when unable to login.

    {exp:member:forgot_username_form}

            <label>Your Email Address</label><br />
            <input type="email" name="email" value="" maxlength="120" size="40" />

			<input type="submit" name="submit" value="Submit" />

    {/exp:member:forgot_username_form}

{{embed:_tips/form-validation.md}}

## Parameters

### `email_subject=`

    email_subject="Your Username"

Subject of email sent to user.


### `email_template=`

    email_template="member/email-forgot-username"

Template to use for email which is sent to user.

If no template is defined or if the template defined does not exist, the default [Member Profile Template](control-panel/template-manager.md#member-profile-templates) for a forgotten username will be used.

### `inline_errors=`

    inline_errors="yes"

This parameter is for use with [form validation and error handling](/templates/form-validation.md) and determines the type of error reporting: inline or error template.

### `return=`

    return="member/login/forgot-username"

This parameter allows you to define where the user will be returned after successfully completing the form. The parameter can be defined in two ways:

1.  Use the standard Template_Group/Template syntax to specify where to return the user. For instance, if you want the user to be returned to the "local" Template in the "news" Template Group, you would use: return="member/login/forgot-username"
2.  Use a full URL. For example: return="<https://example.com/member/login/forgot-username.html>"

### `return_error=`

    return_error="template_group/error"

This parameter is for use with [form validation and error handling](/templates/form-validation.md) and determines the template to return to if validation errors are detected.

## Form Inputs

### Email

Member email address. This is a **required** field:

    <label for="email">Email</label>
    <input type="email" name="email" value="" maxlength="120" size="40" />

## Example

    {exp:member:forgot_username_form
        return="member/login/forgot-username"
        inline_errors="yes"
        email_subject="Your Username"
        email_template="member/email-forgot-username"
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
    {/exp:member:forgot_username_form}
