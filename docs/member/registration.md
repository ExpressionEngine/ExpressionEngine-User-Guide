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

## Example of styles for the password strength indicator

<style>
    form label {
        display: block;
        color: #0d0d19;
        margin-bottom: 5px;
        font-weight: 500;
    }

    form input:not([type="submit"]) {
        display: block;
        width: 100%;
        padding: 8px 15px;
        font-size: 1rem;
        line-height: 1.6;
        color: #0d0d19;
        background-color: #fff;
        background-image: none;
        transition: border-color .2s ease,box-shadow .2s ease;
        -webkit-appearance: none;
        border: 1px solid #cbcbda;
        border-radius: 5px;
    }

/* Styles for the main password strength indicator wrapper */

    .rank-wrap {
        position: absolute;
        right: 15px;
        top: 10px;
        background: #fff;
        text-transform: uppercase;
    }

/* Default styles for the password strength indicator text wrap */

    .rank-wrap .status-tag {
        background: none;
        text-transform: uppercase;
        border: 1px solid transparent;
        font-family: Roboto,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",Oxygen,Cantarell,sans-serif;
        display: inline-block;
        padding: 3px 8px 2px;
        color: #8f90b0;
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 1px;
        border-radius: 3px;
        margin: 0;
    }

/* Styles for strong and very strong password */

    .rank-wrap .status-tag.strong {
        border-color: #00c571;
        color: #00c571;
    }

/* Styles for good password */

    .rank-wrap .status-tag.good {
        border-color: #ffb40b;
        color: #ffb40b;
    }

/* Styles for weak password */

    .rank-wrap .status-tag.weak {
        border-color: #fa5252;
        color: #fa5252;
    }
</style>

## Example of JavaScrip for the password strength indicator

<script type="text/javascript">
    var validationUrl = '{exp:member:validation_url fields="password_rank"}';

    // Creat visual password strength meter block
    var rankWrap = '<div class="rank-wrap"><p class="status-tag "><span class="rank_text"></span></p></div>';

    // Find password input
    var passwordInput = document.querySelector('input[name="password"]');

    // Create wrapper container. It can be added in the html part and needed for the correct positioning of the password strength meter block on the page 
    var wrapper = document.createElement('span');

    passwordInput.parentNode.insertBefore(wrapper, passwordInput);

    // move passwordInput into wrapper
    wrapper.appendChild(passwordInput);

    // Closest parent for password input
    var passwordInputContainer = passwordInput.parentElement;

    passwordInputContainer.style.position = 'relative';
    passwordInputContainer.style.display = 'block';

    // Insert visual password strength meter block after password input
    passwordInput.insertAdjacentHTML('afterend', rankWrap);

document.getElementsByName('password')[0].addEventListener('keyup', function(e){
    var inputValLength = this.value.length;

    //create a new XMLHttpRequest object
    var request = new XMLHttpRequest();

    //configure it to do an asynchronous GET request for some URL
    request.open("POST", validationUrl, true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.setRequestHeader("X-Requested-With", "XMLHttpRequest");

    //add a listener for the "load" event, which
    //will happen when the data returns
    request.addEventListener("load", function() {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            if (inputValLength == 0) {
                document.querySelector('.rank-wrap').style.display = 'none';
                document.querySelector('.rank-wrap > p').className = '';
                document.querySelector('.rank-wrap .rank_text').textContent = '';
            } else {
                var rank_text = data['rank_text'].toLowerCase();
                var classList = 'status-tag ' + rank_text;
                document.querySelector('.rank-wrap > p').className = classList;
                document.querySelector('.rank-wrap .rank_text').textContent = rank_text;
                document.querySelector('.rank-wrap').style.display = 'block';
            }
        } else {

        }
    });

    //finally, send the request to the server
    request.send('password=' + e.target.value);
});
</script>