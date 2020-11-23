<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://www.packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Troubleshooting Installation

[TOC]

## Main page content appears on every page / I get 404s except on the main page / "No Input File Specified"

The main/first page of your site works fine. When you go to another page, the URL changes but the content is still from your main page OR all pages but your main page display 404 errors.

The problem here is that your server isn’t correctly supporting the ”path_info” server variable. You might want to contact your Host or server admin about having it supported, since that would be the ideal way to run ExpressionEngine. However, you can also run EE without that setting. In the Control Panel Settings, turn on the “Force Query String” preference in the Debugging and Output section.

When you force query strings, ExpressionEngine will add a '?' to system generated frontend URLs:

    https://example.com?/blog/11245/

If you are using .htaccess to remove the index.php from your URLs, don't force query strings. Instead, [add the query string to your htaccess code](installation/best-practices.md#removing-indexphp-from-your-urls)

## Running PHP as CGI

People using servers that run PHP as a CGI process tend to encounter more difficulties than those with servers running PHP as a web server module. Here are some additional things you can try.

Typically, these tips will **not** apply to people on servers running PHP as a web server module. Usually, they only apply to people on servers running PHP as a CGI process and even then not every user will need to do any of these.

## Add "shebangs"

This tip will only apply to **some** people on web servers running PHP as a CGI process. Please consult your Host or server admin to determine if you will need to perform this.

On some servers, you will need to add a "shebang" line to two files in order to have ExpressionEngine work. **The actual syntax of the line can vary from server to server**, so be sure to consult your Host or server admin for the correct syntax.

In the following two files:

1. `index.php`
2. `system/index.php`

You will need to add the following "shebang" line immediately before the opening PHP code. The top of your files will look similar to:

    #!/usr/bin/php <?php

## File Permissions

Some "PHP as CGI" servers automatically set uploaded files so that they do not have permission to "execute", which can cause problems with ExpressionEngine. Make sure that all of your .php files are set to 755 (except those that are specifically mentioned as having other permissions in the instructions above).

## HTTP Headers

Some "PHP as CGI" servers also do not like it if ExpressionEngine explicitly sends its own HTTP Headers. In this case, try setting [Generate HTTP Page Headers?](control-panel/settings/debug-output.md) to "No".

If you cannot log into the Control Panel, then you can manually change the setting via system/user/config/config.php:

```php
$config['send_headers'] = 'n';
```

## Browser downloading install.php

When attempting to install the browser tries to download install.php instead of run it.

### Troubleshooting running PHP files

This behavior is usually an indication that PHP is either not running or not properly configured on the account or server. Check with the admin/Host to see if the account has PHP available. If it does, then make sure it is set to process .php files (as opposed - or in addition -to something like .php4).

NOTE: **Note:** This problem can also be caused by memory leaks in the browser. Close all browser windows and try again.

## Emoji Support

In order to support emojis in your content your MySQL server and client libraries must support the `utf8mb4` character set. Your MySQL server version must be 5.5.3 or newer. The client libraries that PHP uses to connect to MySQL must be 5.5.3 or higher, unless you are using the `mysqlnd` driver in which case the minimum version is 5.0.9.

If you originally installed ExpressionEngine in an environment that did not support `utf8mb4` but now are in an environment that supports it, you can use our [Emoji Support add-on](https://github.com/ellislab/emoji-support) to update your database.

## "Table already exists" error when upgrading

You receive an error such as "Table 'exp_extensions' already exists" when performing an upgrade.

### Troubleshooting

There are several possible reasons for a duplicate table, column or key error:

- If you had previously restored your database, ensure it was restored into a completely empty database. Otherwise there will be duplicate data.
- Never use your browser's Back button during an upgrade, as that can cause actions to run twice.
- Your server's PHP max_execution_time may be set too low, forcing the upgrade script to end prematurely. Check with your host about increasing this value from the typical default of 30 seconds.
- If you're using Firefox to perform the upgrade, try using Chrome or Safari instead. In some cases Firefox can re-send requests following a server error, effectively preventing the error from being seen.
