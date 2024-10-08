<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# CAPTCHA Settings

**Control Panel Location: `Settings > CAPTCHA`**

This section of the Control Panel allows you to set [CAPTCHA](security/captchas.md) preferences for your website.

## Settings

### Require CAPTCHA?

If you enable this preference, then site visitors will be required to pass a CAPTCHA to submit any front-end form, including Channel Form, comment forms, and member registrations. If members are logged in, they will not have to enter a CAPTCHA unless the [Require CAPTCHA while logged in?](#require-captcha-while-logged-in) preference is enabled below.

### Use TrueType font?

If your server supports TrueType Fonts, then you can enable this setting. If you receive errors such as Call to undefined function: imagettftext() on your site then your server does not support TrueType Fonts and you should set this to "No".

### Add random number?

Specify whether to add a random three-digit number to the end of each generated CAPTCHA word. This makes it more difficult for scripts to guess or brute-force the form submission.

### Require CAPTCHA while logged in?

If you enable this preference, then members who are logged in will need to fill out CAPTCHA information in order to post comments (assuming you've enabled CAPTCHA support for comment posting). If you disable this setting, then members who are logged in can bypass the CAPTCHA check.

### CAPTCHA directory

The URL to your [CAPTCHA](security/captchas.md) images. In most cases, this will be similar to:

- `https://example.com/images/captchas/`
- `///example.com/images/captchas/`
- `/images/captchas/`

### CAPTCHA path

Here you set the _server path_ (**not** the URL) to your [CAPTCHA](security/captchas.md) images folder. By default, it is the captchas folder inside the images folder.

The server path might look something like:

    /home/example.com/public_html/images/captchas/

If you do not know what to use for your full server path, contact your Host or server admin. Remember that this upload folder must be writable. See [File Permissions](troubleshooting/general.md#file-permissions) for details.

## reCAPTCHA v3 Settings

If you wish to use Google reCAPTCH v3 as a replacement you will need to ensure that the site is set up with Google to gain the required site key and secret. See https://www.google.com/recaptcha/admin/create

### Use reCAPTCHA v3?

If you enable this preference then the system will use reCAPTCHA v3 in place of the older image based solution.

### reCAPTCHA site key

Enter your site key here

### reCAPTCHA site secret

Enter your site secret here

### Threshold score

Enter the minimum score to pass the CAPTCHA test (a number between 0.1 and 1.0).  The default is 0.5
