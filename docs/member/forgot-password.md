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

## Parameters

### `email_template=`

    email_template="member/email-password-reset"

Template to use for email which is sent to user. 

NOTE: **Note:** If no template is defined, the default [Member Profile Template](control-panel/template-manager.md#member-profile-templates) for a forgotten password will be used.

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

### `error_handling="inline"`
    error_handling="inline"

This parameter allows you to use inline errors in your registration form. The errors can be displayed using the `{error:field_name}` tag where `field_name` would need to be replaced with the name of the field that has an error or using [`{errors}` variable pair](templates/globals/single-variables.md#error-variables).

### `return_error=`

When inline errors are enabled, this parameter allows you to specify the template to return to if there are errors in the form. The default is the same template that the form is on.

    return_error="member/error"

## Form Inputs
NOTE: Be sure to include the required Javascript and CSS to use the native [Password Validation](member/password-validation.md).

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
        password_reset_url="member/reset-password"
        email_template="member/email-password-reset"
        }

        <p>
            <label>Your Email Address</label><br />
            <input type="email" name="email" value="" maxlength="120" size="40" />
        </p>

        <p><input type="submit" name="submit" value="Submit" /></p>

        <p><a href="{path='member/login'}">Login</a> &nbsp; &nbsp; <a href="{path='member/registration'}">Register</a></p>
    {/exp:member:forgot_password_form}
