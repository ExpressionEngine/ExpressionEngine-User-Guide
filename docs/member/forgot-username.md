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

## Parameters

### `email_subject=`

    email_subject="Your Username"

Subject of email sent to user.


### `email_template=`

    email_template="member/email-forgot-username"

Template to use for email which is sent to user. 

If no template is defined or if the template defined does not exist, the default [Member Profile Template](control-panel/template-manager.md#member-profile-templates) for a forgotten username will be used.

### `return=`

    return="member/login/forgot-username"

This parameter allows you to define where the user will be returned after successfully completing the form. The parameter can be defined in two ways:

1.  Use the standard Template_Group/Template syntax to specify where to return the user. For instance, if you want the user to be returned to the "local" Template in the "news" Template Group, you would use: return="member/login/forgot-username"
2.  Use a full URL. For example: return="<https://example.com/member/login/forgot-username.html>"

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

    {exp:member:forgot_username_form
        return="member/login/forgot-username"
        email_subject="Your Username"
        email_template="member/email-forgot-username"
        }

        <p>
            <label>Your Email Address</label><br />
            <input type="email" name="email" value="" maxlength="120" size="40" />
        </p>

        <p><input type="submit" name="submit" value="Submit" /></p>

        <p><a href="{path='member/login'}">Login</a> &nbsp; &nbsp; <a href="{path='member/registration'}">Register</a></p>
    {/exp:member:forgot_username_form}
