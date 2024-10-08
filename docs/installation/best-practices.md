<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Post-Installation Best Practices

[TOC]

## Increasing Security

ExpressionEngine's system files and directories are typically safe from direct HTTP access on a properly configured server.

However, for increased security, we recommend that the `system` folder either be renamed or moved entirely above the public web root folder (commonly named `public_html` or referred to as simply "webroot") and that `admin.php` be renamed as well. This document describes the renaming process.

## Renaming the System Directory

This is an easily followed procedure that makes it difficult for the location of your system folder to be known.

1.  FTP to your server and change the name of the system folder to something else that is not easily guessed. For example, let's say you've renamed it to dazzle.
2.  Open index.php **and** admin.php (both found in your site's root) and update the name of the system directory **in both files**:

```php
$system_path = './dazzle';
```

## Moving the System Directory Above Webroot

Tip: System Directory Above Webroot
<div class="video-wrapper">
<iframe src="https://www.youtube.com/embed/aj4_JzdiNwY?si=SNKpm0sXpdTMfX3-" title="System Directory Above Webroot in ExpressionEngine" width="1920" height="1080" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>

This is a more advanced procedure that provides even better security, but is not supported in all environments.

1.  FTP to your server and move the entire system folder above webroot, but still within your user's account folder.
2.  Open **index.php** and **admin.php** (both found in your site's root) and update the relative path to the system directory **in both files**. Here's an example:

### Before

Your folder structure looked like:

    └── public_html
        ├── admin.php
        ├── index.php
        ├── images
        ├── system
        └── themes

And the paths in index.php and admin.php having:

    $system_path = './system';

### After

Now your your folder structure looks like:

    ├── public_html
    |   ├── admin.php
    |   ├── index.php
    |   ├── images
    │   └── themes
    └── system

And the path in index.php and admin.php now have:

    $system_path = '../system';

Note the extra period, indicating that the system folder is now one level up, above webroot where it cannot be directly accessed from a web browser.

**Note:** There may also be some areas in the Control Panel where you will need to update the server path. For example:

- `Settings --> URL and Path Settings`
- `Files`

## Renaming admin.php

In the same way that we've renamed the system folder (or moved it above webroot entirely) it is recommended that you rename admin.php to something less obvious as well.

1.  FTP to your server and change the name of the admin.php file to something else that is not easily guessed. For example, let's say you've renamed it to razzle.php.
2.  Visit `Settings --> URL and Path Settings` and update the Control Panel URL setting. Alternatively you can open `system/user/config/config.php` (or whatever you have renamed the system folder to) and update the URL using the _cp_url_ override:

        $config['cp_url'] = "https://example.com/razzle.php";

## Removing index.php from your URLs

The `index.php` appears in your URLs because it is the file responsible for processing all ExpressionEngine requests. Consider the following URL:

```md
https://example.com/index.php/template_group/template
```

The `template_group/template` segments are simply information passed to `index.php` and do not refer to actual files or folders in the server's filesystem.

Many servers support a technique called URL rewriting, which allows you to hide the `index.php` portion of the URL, but still process the request normally. Rewriting URLs requires UNIX-based hosting and Apache 2.x or later with `mod_rewrite` installed and enabled.

### 1. Create an .htaccess file

Using your FTP client, create a new file named `.htaccess` (including the leading dot) in the same folder as your site's main `index.php` file.

NOTE: **Note:** Files beginning with a dot are hidden by default on some operating systems, including Mac OS X. Ensure your FTP client is set to show **all** files, including hidden ones.

Then add the following code to this newly created `.htaccess` file.

    <IfModule mod_rewrite.c>
        RewriteEngine On
        RewriteBase /

        # Removes index.php from ExpressionEngine URLs
        RewriteCond %{THE_REQUEST} ^GET.*index\.php [NC]
        RewriteCond %{REQUEST_URI} !/system/.* [NC]
        RewriteRule (.*?)index\.php/*(.*) /$1$2 [R=301,NE,L]

        # Directs all EE web requests through the site index file
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule ^(.*)$ /index.php/$1 [L]
    </IfModule>

#### Exceptions

- If your site's system directory (`/system/`) [has been renamed](installation/best-practices.md#renaming-the-system-directory) and is still accessible by URL, modify the RewriteCond line above:

      RewriteCond %{REQUEST_URI} !/newdirectoryname/.* [NC]

- If you are running EE from a sub-directory rather from the root of your domain (e.g. `https://example.com/myeesite/` instead of `https://example.com/`), just remove the slash preceding `index.php` in the RewriteRule line above, like so:

      RewriteRule ^(.*)$ index.php/$1 [L]

- If you are running EE from a sub-directory and it still doesn't work after removing the slash, you may need to specify the sub-directory in your rewrite rule. For example, if your sub-folder is named testing, change:

      RewriteRule (.*?)index\.php/*(.*) /$1$2 [R=301,NE,L]

  To:

      RewriteRule (.*?)index\.php/*(.*) testing/$1$2 [R=301,NE,L]

  And change:

      RewriteRule ^(.*)$ /index.php/$1 [L]

  To:

      RewriteRule ^(.*)$ testing/index.php/$1 [L]

- If your host requires forcing query strings, try adding a question mark following `index.php` in the RewriteRule line above, like so:

      RewriteRule ^(.*)$ /index.php?/$1 [L]

- If your host is running PHP-FPM and you get a 503 Internal Server Error in the browser, and this error in your server error logs:

  > Request exceeded the limit of 10 internal redirects due to probable configuration error.

  Your host may be running PHP through a Unix socket. To make sure your rewrites do not end up in an infinite loop you should add:

      RewriteCond %{REQUEST_URI} !^/php-fpm/*

  If that does not work, check with your host on what `Alias` directive is defined in your Apache config, and replace `php-fpm` above with the correct alias.

### 2. Update General Configuration

In the Control Panel, go to `Settings --> URL and Path Settings`, set **Website index page** to blank (empty), and click Submit.

### 3. Test

Test your site's links to ensure they are working correctly with `index.php` removed.

TIP: **Note:** If using Multiple Site Manager, you can repeat the above steps for each site, assuming each site has its own web root.

Some common problems include links returning 404s, a "No Input File Specified" error, or all links returning the same content. This can often be the case with hosts (such as GoDaddy) that require you to force query strings. If this happens, follow the exception above for hosts that force query strings.

If you encounter a problem, you can rename `.htaccess` to something else (it only takes effect when it is named `.htaccess`) and set **Name of your site's index page** in the CP back to `index.php`.
