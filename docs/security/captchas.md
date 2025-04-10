<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# CAPTCHAs

[TOC]

A CAPTCHA, as a general concept, is a computer-generated test that humans can easily pass, but that is computationally difficult for a computer to do. They are used when you want to ensure that a human is performing an action, not an automated script -- often to block spam.

ExpressionEngine has built-in support for CAPTCHAs (Completely Automated Public Turing tests to tell Computers and Humans Apart), and can also use (Google's reCAPTCHA v3)[https://cloud.google.com/security/products/recaptcha].

So how does the built-in CAPTCHA functionality work? 

When a user loads a web page with a form protected by a CAPTCHA, EE generates a unique image in real time. This image contains a word that the user must enter when they submit a form. The CAPTCHA is effective because computers are generally not very good at reading images, but it is something humans can do with little effort.

In ExpressionEngine, CAPTCHAs can be used in several places:

- [To submit a comment](#comment-forms) 
- [To register a new member](#member-registration-forms)
- [In the Contact and Tell-a-Friend email forms](#contact-and-tell-a-friend-email-forms) 
- [In Channel Forms](#channel-forms) 

The settings to require CAPTCHAs for these forms are located at [`Settings --> CAPTCHA`](control-panel/settings/captcha.md) in the control panel. 

The CAPTCHA settings are applied site-wide. If you have CAPTCHAS required, they will be required for all of the following uses with the same settings. If other add-ons integrate the use of EE's captcha system, they will also be controlled by the same settings.

## Comment Forms

If you have CAPTCHAS required, you'll need to add the CAPTCHA code to your [Comment Submission Form](comment/form.md). See below for the [CAPTCHA Code](#captcha-code).

## Member Registration Forms

The necessary CAPTCHA code already exists in the Member Templates by default, so you should not need to add it. If you have a version of ExpressionEngine from before the CAPTCHA feature was added or if you otherwise need the code, see below for the [CAPTCHA Code](#captcha-code).

## Contact and Tell-a-Friend Email Forms

If you have CAPTCHAS required, you'll need to add the CAPTCHA code to these forms in order to submit properly. See below for the [CAPTCHA Code](#captcha-code).

## Channel Forms

If you have CAPTCHAS required, you'll need to add the CAPTCHA code to your [Channel Entry Form](channels/channel-form/overview.md#captcha). See below for the [CAPTCHA Code](#captcha-code).

## CAPTCHA Code

This is the code for Comment forms, Contact forms, and Channel Entry forms.

    {if captcha}
        <p>Please enter the word you see in the image below:</p>
        <p>{captcha}<br />
        <input type="text" name="captcha" value="{captcha_word}" size="20" maxlength="20" style="width:140px;" /></p>
    {/if}

The contents of the conditional `{if captcha}` tag will be displayed if you:

- have the CAPTCHA setting turned on
- are not logged in as a superadmin (Superadmins never have to pass a CAPTCHA test)
- are not logged in (only if you have "Require CAPTCHA while logged in?" enabled)

The `{captcha}` tag itself will be an image tag if you are using the built-in CAPTCHA. 

The code used in the Member Registration Form is very similar, with only the omission of the {captcha_word} variable:

    {if captcha}
        <p>Please enter the word you see in the image below:</p>
        <p>{captcha}<br />
        <input type="text" name="captcha" value="" size="20" maxlength="20" style="width:140px;" /></p>
    {/if}

If you are using [Google's  reCAPTCHA v3](security/captchas.md), use this simplified code in all cases. The `{captcha}` tag will output the required JavaScript, the CAPTCHA is invisible, and there is no need for an input field.

    {if captcha}
        {captcha}
    {/if}

## Notes

It is important to note that there is a downside to using CAPTCHAs. While they can be very successful in stopping automated bots from being able to post comments or sign up for memberships, it can also have the same effect on blind or visually impaired users of your site. If you enable CAPTCHAs, then you will be making it extremely difficult for these legitimate users to be able to use your site.

You should determine for yourself whether or not CAPTCHAs are appropriate for your situation and your website audience.

For ExpressionEngine installations that power multiple domains or subdomains, you may need to place the _server_ path for the **Relative Path to Captcha Folder** setting under `Settings --> CAPTCHA`. A server path is typically something similar to /home/domain.com/http_docs/images/captchas/. The specific setting will vary from server to server so you may need to contact your Host or server admin to determine what your correct "server path" is.

## CAPTCHA Words

The CAPTCHA system uses a default dictionary. You can override these by adding a special user config file that returns an array of words you want to use instead. Create a PHP file at `system/user/config/captcha.php` with the format:

    <?php

    return [
      'your',
      'words',
      'here',
      /* ... */
    ];
