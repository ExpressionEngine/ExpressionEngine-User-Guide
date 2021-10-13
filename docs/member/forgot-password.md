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

### `email_template=`

    email_template="member/email-password-reset"

### `password_reset_url=`

    password_reset_url="member/reset-password"

### `return=`

    return="member/forgot-password/sent"

This parameter allows you to define where the user will be returned after successfully completing the form. The parameter can be defined in two ways:

1.  Use the standard Template_Group/Template syntax to specify where to return the user. For instance, if you want the user to be returned to the "local" Template in the "news" Template Group, you would use: return="news/local"
2.  Use a full URL. For example: return="<https://example.com/return.html>"


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
        password_reset_url="member/reset-password"
        password_reset_email_template="member/email-password-reset"
        }

        <p>
            <label>Your Email Address</label><br />
            <input type="email" name="email" value="" maxlength="120" size="40" />
        </p>

        <p><input type="submit" name="submit" value="Submit" /></p>

        <p><a href="{path='member/login'}">Login</a> &nbsp; &nbsp; <a href="{path='member/registration'}">Register</a></p>
    {/exp:member:forgot_password_form}
