<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Password Validation

[TOC]

## Overview

It is recommended to select good a [password security policy](control-panel/settings/security-privacy.md#password-security-policy) that the site members would need to adhere to. Since the password rank is measured using complex algorithm, ExpressionEngine is providing an AJAX endpoint that can return password strength prior to for submission.

## Validation URL

    {exp:member:validation_url fields="password_rank"}

Return URL that is serving as the endpoint for validating member data and getting password rank. It can only accept POST requests sent via AJAX.
It returns a JSON string that can contain following keys:
 - `success` - (boolean) indicates whether the posted values validate. Is not included for `password_rank` requests
 - `errors` - array of validation errors, if present
 - `rank` - (int) password rank
 - `rank_text` - (string) password rank name (Weak, Good, Strong, Very Strong)

### Parameters

    fields="password_rank"

Specify which fields you want to validate. The default value is `all` which means all posted fields are validated.
Other supported options are:
 - `username` - validate posted username. Returns 
 - `email` - validate posted email
 - `screen_name` - validate posted screen name
 - `password` - validate posted password, and also return password rank
 - `password_rank` - return password rank only

## Example of JavaScript for the password strength indicator

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

## Example of styles for the password strength indicator

    <style type="text/css">
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
