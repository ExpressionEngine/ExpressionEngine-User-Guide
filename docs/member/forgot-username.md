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

Output a forgotten username form that sends an email with instructions for resetting a member username when unable to login.

    {{exp:member:forgot_username_form}

            <label>Your Email Address</label><br />
            <input type="email" name="email" value="" maxlength="120" size="40" />

			<input type="submit" name="submit" value="Submit" />

    {/{exp:member:forgot_username_form}

## Parameters

### `email_subject=`

    email_subject="Your Username"

### `email_template=`

    email_template="member/email-forgot-username"

### `inline_errors=`

    inline_errors="yes"

Something something.

### `return=`

    return="member/login/forgot-username"


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
            <input type="email" name="email" value="" maxlength="120" size="40" />
        </p>

        <p><input type="submit" name="submit" value="Submit" /></p>

        <p><a href="{path='mymb/login'}">Login</a> &nbsp; &nbsp; <a href="{path='mymb/registration'}">Register</a></p>
    {/exp:member:forgot_username_form}