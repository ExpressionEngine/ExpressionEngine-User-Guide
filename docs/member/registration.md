<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Registration Form Tag

[TOC]

## Overview

Output a member registration form.

NOTE: **Important:** In order for site visitors to be allowed to register for accounts via front-end forms the [Allow Registrations](control-panel/settings/members.md#allow-registrations) must be set to allow registrations under Settings > Member Settings.

{{embed:_tips/form-validation.md}}

## Parameters

{{embed:_tips/form-attributes.md}}

### `return=`

    return="member/registration/success"

### `form_class=`

    form_class="register"

 ### `primary_role=`

    primary_role="7"

This parameter allows you to specify the primary role to assign the new member, overriding the default member setting.

### `error_handling="inline"`
    error_handling="inline"

This parameter allows you to use inline errors in your registration form. The errors can be displayed using the `{error:field_name}` tag where `field_name` would need to be replaced with the name of the field that has an error, as used to compose the form.

### `include_assets=`

    include_assets="yes"

Adds the Javascript and CSS that is required by custom member fields to your form. By default, these are **not** included

### `datepicker=`

    datepicker="no"

Adds the datepicker to your date fields. Defaults to "yes".

NOTE: **Note:** If you are manually constructing a date field, in order to apply the date picker you must include `rel="date-picker"`.

### `include_css=`

    include_css="no"

Allows you to manage the inclusion of required CSS independently from the `include_assets` parameter. Defaults to "yes".

### `include_jquery=`

    include_jquery="no"

Includes jQuery automatically. Defaults to "yes".

NOTE: **Note:** If you are using your own copy of jQuery you will need to load it **before** the form.

## Form Inputs
NOTE: Be sure to include the required JavaScript and CSS to use the native [Password Validation](member/password-validation.md).

### Email

Member email address. This is a **required** field:

    <label for="email">Email</label>
    <input type="email" name="email" value="" maxlength="120" size="40" />


### Terms of Service

Terms of Service acceptance. This is a **required** field:

    <input type="checkbox" name="accept_terms" value="y" >

### Password

Member password. This is a **required** field.

    <label>Your New Password</label><br />
    <input type="password" name="password" value="" maxlength="50" size="40" />


### Password Confirmation

Password confirmation. This is a **required** field and must match the entered password.

            <label>Confirm New Password</label><br />
            <input type="password" name="password_confirm" value="" maxlength="50" size="40" />

### Screen name

Member username. This is a **required** field:

    <label for="screen_name">Screen Name</label>
    <input type="text" name="screen_name" value="" maxlength="120" size="40" />

### Username

Member username. This is a **required** field and must be unique across the site:

    <label for="username">Username</label>
    <input type="text" name="username" value="" maxlength="120" size="40" />

### Custom Member Fields

Custom member fields that have "Show in registration?" setting turned on can be used in member registration form.
Please note you need to address those by ID and not name, e.g. `m_field_id_8`

    <label for="work_title">Work title</label>
    <input type="text" id="work_title" name="m_field_id_1" size="40" value="{if m_field_id_1}{m_field_id_1}{/if}" />

And easier way to display the field's input is to use the special tag:

    <label for="work_title">Work title</label>
    {field:work_title}

Custom fields can also be output inside the ``{custom_fields}`` variable tag pair.

        {custom_fields}
            <p>
                <label>{lang:profile_field}</label><br>
                <small>{lang:profile_field_description}</small><br>

                {form:custom_profile_field}

                {if error}
                    <span class="error">{error}</span>
                {/if}
            </p>
         {/custom_fields}

### `{custom_fields}` Pair Variables

#### `{lang:profile_field}`
#### `{field_name}`

Outputs the custom field's name.

#### `{lang:profile_field_description}`
#### `{field_description}`

Outputs the field's description, if any.

#### `{form:custom_profile_field}`
#### `{field}`

Shows the fully parsed custom member form field.

#### `{if required}`

Indicates whether the field is marked as required

## Variables

### `{accept_terms}`

    {if accept_terms == 'y'}checked="checked"{/if}

### `{error:accept_terms}`

    {if error:accept_terms}{error:accept_terms}{/if}

### `{email}`

    {if email}{email}{/if}

### `{error:email}`

    {if error:email}{error:email}{/if}

### `{password}`

    {if password}{password}{/if}

### `{error:password}`

    {if error:password}{error:password}{/if}
This will show errors with the submitted password as well as password confirm.

### `{password_confirm}`

    {if password_confirm}{password_confirm}{/if}

### `{screen_name}`

    {if screen_name}{screen_name}{/if}

### `{username}`

    {if username}{username}{/if}

### `{error:username}`

    {if error:username}{error:username}{/if}

### `{field:field_name}`

Displays the custom field input form for the given field (substitute `field_name` with the actual field name). Note that the field must be set as "visible on registration" in order to show up.

## Example

    {exp:member:registration_form
        return="member/registration/success"
        inline_errors="yes"
    }

        <p>* Required fields</p>
    <fieldset>
        <h4>Login details</h4>

        <p>
            <label for="username">Username*: {if error:username}{error:username}{/if}</label><br />
            <input type="text" name="username" id="username" value="{if username}{username}{/if}"/><br />
        </p>

        <p>
            <label for="email">Email*: {if error:email}{error:email}{/if}</label><br />
            <input type="text" name="email" id="email" value="{if email}{email}{/if}"/><br />
        </p>

        <p>
            <label for="something">Something*: {if error:m_field_id_1}{error:m_field_id_1}{/if}</label><br />
            <input type="text" name="m_field_id_1" id="something" value="{if m_field_id_1}{m_field_id_1}{/if}"/><br />
        </p>

        <p>
            <label for="password">Password*: {if error:password}{error:password}{/if}</label><br />
            <input type="password" name="password" id="password" value="{if password}{password}{/if}"/>
        </p>

        <p>
            <label for="password_confirm">Confirm password*: </label><br />
            <input type="password" name="password_confirm" id="password_confirm" value="{if password_confirm}{password_confirm}{/if}"/>
        </p>

        <p>
            <label for="terms_of_service">Terms of service:</label><br />
            <div>All messages posted at this site express the views of the author, and do not necessarily reflect the views of the owners and administrators
                of this site.By registering at this site you agree not to post any messages that are obscene, vulgar, slanderous, hateful, threatening, or that violate any laws. We will
                permanently ban all users who do so.We reserve the right to remove, edit, or move any messages for any reason.</div>
        </p>

        <p>
            <label><input type="checkbox" name="accept_terms" value="y" {if accept_terms == 'y'}checked="checked"{/if} /> I accept these terms {if error:accept_terms}{error:accept_terms}{/if}</label>
        </p>

        {if captcha}
        <p>
            <label for="captcha">{lang:captcha}*</label>
            {captcha}<br/>
            <input type="text" id="captcha" name="captcha" value="" size="20" maxlength="20" style="width:140px;"/>
            {if error:captcha}
                <span class="error">{error:captcha}</span>
            {/if}
        </p>
        {/if}
    </fieldset>

    <input type="submit" value="Register" class="btn btn-primary" />
    {/exp:member:registration_form}
