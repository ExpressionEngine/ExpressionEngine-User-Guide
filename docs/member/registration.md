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

## Parameters

### `return=`

    return="member/registration/success"

### `form_class=`

    form_class="register"

This parameter allows you to specify the class attribute for the &lt;form&gt; tag.

## Form Inputs

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

Member username. This is a **required** field and must be unique across the site:

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
    <input type="text" id="work_title" name="m_field_id_1" size="40" />

## Variables

### `{accept_terms}`

    {if accept_terms == 'y'}checked="checked"{/if}

### `{email}`

    {if email}{email}{/if}

### `{password}`

    {if password}{password}{/if}

### `{password_confirm}`

    {if password_confirm}{password_confirm}{/if}

### `{screen_name}`

    {if screen_name}{screen_name}{/if}

### `{username}`

    {if username}{username}{/if}


## Example

    {exp:member:registration_form
        return="member/registration/success"
        }

            <p>* Required fields</p>
        <fieldset>
            <h4>Login details</h4>

            <p>
                <label for="username">Username*:</label><br />
                <input type="text" name="username" id="username" value="{if username}{username}{/if}"/><br />
            </p>

            <p>
                <label for="email">Email*:</label><br />
                <input type="text" name="email" id="email" value="{if email}{email}{/if}"/><br />
            </p>

            <p>
                <label for="something">Something*:</label><br />
                <input type="text" name="something" id="something" value="{if something}{something}{/if}"/><br />
            </p>

            <p>
                <label for="password">Password*:</label><br />
                <input type="password" name="password" id="password" value="{if password}{password}{/if}"/>
            </p>

            <p>
                <label for="password_confirm">Confirm password*:</label><br />
                <input type="password" name="password_confirm" id="password_confirm" value="{if password_confirm}{password_confirm}{/if}"/>
            </p>

            <p>
                <label for="terms_of_service">Terms of service:</label><br />
                <div>All messages posted at this site express the views of the author, and do not necessarily reflect the views of the owners and administrators
                    of this site.By registering at this site you agree not to post any messages that are obscene, vulgar, slanderous, hateful, threatening, or that violate any laws. We will
                    permanently ban all users who do so.We reserve the right to remove, edit, or move any messages for any reason.</div>
            </p>

            <p>
                <label><input type="checkbox" name="accept_terms" value="y" {if accept_terms == 'y'}checked="checked"{/if} /> I accept these terms</label>
            </p>

            {if captcha}
            <p>
                <label for="captcha">{lang:captcha}*</label>
                {captcha}<br/>
                <input type="text" id="captcha" name="captcha" value="" size="20" maxlength="20" style="width:140px;"/>
            </p>
            {/if}
        </fieldset>

        <input type="submit" value="Register" class="btn btn-primary" />
    {/exp:member:registration_form}
