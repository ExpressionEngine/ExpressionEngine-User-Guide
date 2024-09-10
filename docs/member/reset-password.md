<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Reset Password Form Tag

[TOC]
The Reset Password Form Tag is intended to be used on a page which users are directed to from an email link which is provided when using the [Forgot Password](member/forgot-password.md) functionality.

## Overview

Output a reset password form that allows members accessing it via a link from a forgotten email form to reset their password while logged out.

    {exp:member:reset_password_form}

            <label>New Password</label><br />
            <input name="password" value="" maxlength="72" autocomplete="off" size="40" />

            <label>Confirm Password</label><br />
            <input name="password_confirm" value="" maxlength="72" autocomplete="off" size="40" />

			<input type="submit" name="submit" value="Submit" />

    {/exp:member:reset_password_form}

{{embed:_tips/form-validation.md}}

## Parameters

### `return=`

    return="member/login/success"

This parameter allows you to define where the user will be returned after successfully completing the form. The parameter can be defined in two ways:

1.  Use the standard Template_Group/Template syntax to specify where to return the user. For instance, if you want the user to be returned to the "local" Template in the "news" Template Group, you would use: return="news/local"
2.  Use a full URL. For example: return="<https://example.com/return.html>"

## Form Inputs
NOTE: Be sure to include the required Javascript and CSS to use the native [Password Validation](member/password-validation.md).

### Password

            <label>Your New Password</label><br />
            <input type="password" name="password" value="" maxlength="50" size="40" />

The new password to set.

### Password Confirmation

            <label>Confirm New Password</label><br />
            <input type="password" name="password_confirm" value="" maxlength="50" size="40" />


Duplicate of the new password set in the password form input.

## Example

    {exp:member:reset_password_form
        return="member/login/success"
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
            {if error:password}
                <span class="error">{error:password}</span>
            {/if}
        </p>

        <p>
            <label>Confirm New Password</label><br />
            <input type="password" name="password_confirm" value="" maxlength="50" size="40" />
            {if error:password_confirm}
                <span class="error">{error:password_confirm}</span>
            {/if}
        </p>

        <p><input type="submit" name="submit" value="Submit" /></p>

        <p><a href="{path='member/login'}">Login</a> &nbsp; &nbsp; <a href="{path='member/registration'}">Register</a></p>
    {/exp:member:reset_password_form}
