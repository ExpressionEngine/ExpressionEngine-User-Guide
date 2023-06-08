<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Edit Profile Tag

[TOC]

## Overview

Edit member profile.

## Parameters

### `datepicker=`

Include the datepicker javascript.  This should be set to ``yes`` if there is a date type member custom field in order to output the calendar.

    datepicker="yes"

### `include_assets=`

Include the CSS for the custom member fields.

    include_assets="yes"

### `return=`

    return="member/registration/success"

### `form_class=`

    form_class="login"

This parameter allows you to specify the class attribute for the &lt;form&gt; tag.

### `form_id=`

    form_id="login"

This parameter allows you to specify the id attribute for the &lt;form&gt; tag.

### `form_name=`

    form_name="login"

This parameter allows you to specify a name attribute for the &lt;form&gt; tag.

## Form Inputs
NOTE: Be sure to include the required Javascript and CSS to use the native [Password Validation](member/password-validation.md).

### Email

Member email address.

    <label for="email">Email</label>
    <input type="email" name="email" value="{email}" maxlength="120" size="40" />

### Password

Member password. This is a **required** field.

            <label>Your New Password</label><br />
            <input type="password" name="password" value="" maxlength="50" size="40" />

### Password Confirmation

Password confirmation. If a new password is submitted, the password confirmation field is **required** and must match the entered password.

            <label>Confirm New Password</label><br />
            <input type="password" name="password_confirm" value="" maxlength="50" size="40" />

### Current Password

If the password or the email address is submitted, the current password field is **required**.

            <label>Confirm New Password</label><br />
            <input type="password" name="current_password" value="" maxlength="50" size="40" />

### Screen name

Member Screen name. This is a **required** field:

    <label for="screen_name">Screen Name</label>
    <input type="text" name="screen_name" value="{screen_name}" maxlength="120" size="40" />

### Username

Member username. This is a **required** field and must be unique across the site:

    <label for="username">Username</label>
    <input type="text" name="username" value="{username}" maxlength="120" size="40" />

## Custom Profile Field Variable Pair

All custom fields are output inside the ``{custom_profile_fields}`` varialble tag pair.

        {custom_profile_fields}
            <p>
                <label>{lang:profile_field}</label><br>
                <small>{lang:profile_field_description}</small><br>

                {form:custom_profile_field}

            </p>
         {/custom_profile_fields}

## Custom Profile Field Variables

#### {lang:profile_field}

Outputs the custom field's name.

#### {lang:profile_field_description}

Outputs the field's description, if any.

#### {form:custom_profile_field}

Shows the fully parsed custom member form field.

## Example

    {exp:member:edit_profile
        return="member/registration/success"
		include_assets="yes"
		datepicker="yes"
        }

            <p>* Required fields</p>
        <fieldset>
            <h4>Profile</h4>

            <p>
                <label for="username">Username*:</label><br />
                <input type="text" name="username" id="username" value="{username}"/><br />
            </p>

            <p>
                <label for="email">Email:</label><br />
                <input type="text" name="email" id="email" value="{email}"/><br />
            </p>

            <p>
                <label for="password">Password:</label><br />
                <input type="password" name="password" id="password" value=""/>
            </p>

            <p>
                <label for="password_confirm">Confirm password*:</label><br />
                <input type="password" name="password_confirm" id="password_confirm" value=""/>
            </p>

            <p>
                <label for="current_password">Current password*:</label><br />
					<em>You <b>must</b> enter your current password to change your password, username or email.</em>
                 <input type="password" name="current_password" id="current_password" value=""/>
            </p>


        {custom_profile_fields}
            <p>
                <label>{lang:profile_field}</label><br>
                <small>{lang:profile_field_description}</small><br>

                {form:custom_profile_field}

            </p>
         {/custom_profile_fields}

        </fieldset>

        <input type="submit" value="Register" class="btn btn-primary" />
    {/exp:member:edit_profile}
