<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Troubleshooting the Control Panel

[TOC]

## Control Panel is Unstyled

CSS is not being applied to the Control Panel

### Troubleshooting Control Panel CSS

If the control panel appears without styling, first check to make sure that the **themes** folder exists and contains a complete **ee/cp** folder. You may wish to re-upload the **themes/ee** folder to ensure it is complete.

If all themes files are present, you will want to double check your **Themes directory** and **Themes path** in your [URL and Path Settings](control-panel/settings/urls.md). Keep in mind that **Themes path** is a _full server path_, for instance `/home/example.com/public_html/themes/`. If you do not know what to use for your full server path, contact your web host or sysadmin.

## Missing Icon UI Elements

Icon UI elements in the control panel are not loading. Your browser may have logged console errors indicating "Bad URI or cross-site access not allowed".

### Problem

For security reasons, many modern browsers do not allow font resources to be downloaded and used from domains other than their origin. This can be so strict that it even affects subdomains. So if your [Themes directory URL](control-panel/settings/urls.md) is set to `example.com/themes/`, but you are accessing your control panel from `www.example.com` or `anotherdomain.com`, the browser may prevent the icons from being loaded.

### Solution

ExpressionEngine ships with an `.htaccess` file in the themes folder that should loosen these restrictions on Apache servers that support the mod_headers module.

If your environment does not support mod_headers, contact your host and ask how to enable Cross-Origin Resource Sharing.

If the missing icons are only an issue when accessing the control panel using www vs without www, then another option is to use a canonical redirect to [remove or force www](https://yoast.com/how-to-remove-www-from-your-url-with-mod_rewrite/) (this is a good idea in any case).

## Category List is not appearing in the Edit tab

When navigating to the Edit tab in the Control Panel and choose the Category drop-down list in the filter options, only "All" and "None" are shown, not any specific categories.

### Making Categories appear

In order to use the category filter a channel must first be chosen. Select a channel from the channel filter drop-down and the associated categories will appear in the category filter.

## Logging into the front-end does not cause a login to the Control Panel

### Troubleshooting

ExpressionEngine can use two pieces of information to control login sessions: cookies and a PHP "session". With the default EE settings, Control Panel access uses both cookies and sessions. User logins (i.e. logins on the regular, non-Control Panel, site) only use cookies.

So, when logging in through the regular site a cookie is set for the login. Then when visiting then go to the Control Panel EE notes that the correct cookie is set; however the PHP session is not set. So EE displays the login in order to have the session set.

To login to both at once, navigate to `Settings --> Security & Privacy` and change the **Control Panel Session Type** and **User Session Type** to _Cookies only_. After doing that, all logins will automatically be logged in to both the Control Panel and front-end at the same time. It should be mentioned, however, that requiring PHP sessions to access the Control Panel adds an additional layer of security and the site administrator should assess whether to remove that added security layer by only requiring cookies.

## I've Lost or Forgotten My Username or Password and Can't Log In

### Problem

We've all been there. And since ExpressionEngine is self-installed, no one but you or someone at your organization can really help. For security, your password isn't stored in your database in a method that would be useful to look at. That protects you even if a hacker broke in and had access to your database.

If you find yourself unable to log in to your control panel, follow the steps below.

### Solution

1.  The first thing to try is the "Forgot Password?" link, which will ask for your email address. If the address is associated with an account in your installation, you will receive an email with a link that lets you reset your password. **phew**! Don't forget to check your Spam/Junk folder in your email app for the email, just in case.
2.  If that doesn't work, ask another Super Admin on your site to log in and reset your password for you (and/or let you know what your username is.)
3.  If neither of those work, then you will need someone who has direct access to the database on your server to do the following:

> 1.  Find your member record in the `exp_members` table.
> 2.  Set the email address in the `email` column to an email that you own.
> 3.  Go back to Step 1 above using the "Forgot Password?" link to reset your password.

1.  If none of those work, you will need to contact an engineer who is familiar with ExpressionEngine member records to be able to create one from scratch for you. That engineer will also need direct access to your MySQL database.

## Can not log into the Control Panel on Windows Based server

Log in to the Control Panel fails on a Windows-based server.

### Troubleshooting

Open system/user/config/config.php and add the following line:

    $config['redirect_method'] = "refresh";
