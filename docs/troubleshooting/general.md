<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Troubleshooting General

[TOC]

## File Permissions

When configuring a web app, there are often files and directories on the server that the app needs to be able to read and write to. Image uploads, caches, etc. Anywhere that ExpressionEngine indicates that it needs _write_ access needs the permissions below.

### Unix-based Systems

Unix-based systems are the most common to find hosting PHP/MySQL applications. When referring to file permission modes, we are using a 3-digit (octal) representation of Unix file permissions, which are separated into three scopes: owner, group, and others (world).

|          | Owner | Group | World |
| :------- | :---- | :---- | :---- |
| Octal    | 7     | 5     | 5     |
| Symbolic | rwx   | r-x   | r-x   |

In the table below note how the symbolic notation--that you would see when using `ls -l` on a Unix system--maps to the numeric representation.

- `-`: doesn't allow
- `r`: allows read
- `w`: allows write
- `x`: allows execute, or on directories, allows access to contents

| Number | Permission                               | Symbolic Notation |
| :----- | :--------------------------------------- | :---------------- |
| 0      | None                                     | ---               |
| 1      | Execute only                             | –x                |
| 2      | Write only                               | -w-               |
| 3      | Execute and write (1 + 2 = 3)            | -wx               |
| 4      | Read only                                | r--               |
| 5      | Read and execute (4 + 1 = 5)             | r-x               |
| 6      | Read and write (4 + 2 = 6)               | rw-               |
| 7      | Read, write, and execute (4 + 2 + 1 = 7) | rwx               |

NOTE: **Note:** Always use the **least permissive settings** that your web server allows. Contact your host for details.

### Directory/Folder Permissions

Directories need to allow for access to their contents, so for each scope (owner, group, world), directory permissions will nearly always be one of the _execute_ permissions: 1, 3, 5, or 7.

On servers that are configured with security in mind, **only the owner** needs write permissions, and group/world just need read.

**Most secure: 755**

**Least secure: 777**

### File Permissions

In a web app like ExpressionEngine, no files themselves need execute privileges because the web server is controlling the process that actually executes the PHP. So the typical options will be 4 or 6.

Again, on servers that are configured with security in mind, **only the owner** needs write permissions, and group/world just need read.

**Most secure: 644**

**Least secure: 666**

### IIS Servers

IIS manages permissions using access control lists, and the needs can vary depending on the IIS version and how the administrator has configured the server for PHP applications. Commonly, the app folder should have **Full control** set for the **IUSR** user.

Please consult your system administrator to determine what the least privilege is necessary for the IIS user in order to have the ability to read, write, create, and delete folders and files.

## Troubleshooting Automatic Updates

Below are potential issues you may run into while using ExpressionEngine's automatic update methods.

### "The following paths are not writable:"

This error occurs when the process running the updater does not have proper filesystem permissions to move the new ExpressionEngine files into place. Take a look at the [Set File Permissions](troubleshooting/general.md#file-permissions) section of the installation guide to make sure correct permissions are set.

### Cannot rollback a failed upgrade

If an error occurs while ExpressionEngine is updating its files or database, the updater should provide a link to rollback to your previous installation. But in the rare case that doesn't work, here is how you can get back up and running again.

1.  Navigate to `system/user/cache/ee_update/backups/` and check to make sure there are backups in the `system_ee` folders and `themes_ee` folders.
2.  Delete the contents of `system/ee/` and move the contents of `system_ee` to `system/ee/`.
3.  Delete the contents of `themes/ee/` and move the contents of `themes_ee` to `themes/ee/`.
4.  If there is an SQL file located at `system/user/cache/ee_update/database.sql`, import that into your database to rollback database changes. This is only a partial backup to restore what the updater has changed, so do NOT delete the contents of your database first.
5.  Open `system/user/config/config.php` and set the `is_system_on` config to `y`.

At this point, your site should be restored and you should be able to re-enter your control panel.

If there are no files in your backup directory, it's likely the updater failed before it could make a backup and your files and database are still intact. You likely just need to remove the folder located at `system/ee/updater/` to access your control panel again.

If you hit an error you cannot resolve there should be a log file located at `system/user/cache/ee_update/update.log` that may contain helpful information to help diagnose the issue.

## Blank Pages

Blank pages in ExpressionEngine, where the source is also empty, are usually the result of a suppressed PHP error.

TIP: **Tip:** If you have just installed ExpressionEngine and chose the "None- Empty Installation" Site Theme, your site's homepage will appear blank because no templates or data have been created yet.

### Troubleshooting

Follow these instructions until you are able to see the error message(s) being output by your server:

- Open your site's main index.php file and under the Error Reporting section change:

```
$debug = 0;
```

to:

    $debug = 1;

- Go to `Settings --> Debugging & Output` and ensure that **Debug Preference** is set to _1: PHP/SQL error messages shown only to Super Admins_.
- Go to `Developer --> Utilities --> PHP Info` and search the page for "display_errors". Ensure it is set to _On_ under the Local column. If it is not, your host can help change this setting for you.
- Check your server's error logs or contact your host to assist you in cases where errors are being output to logs and not to the screen.

## Submitting a form has no effect and the page simply reloads

Form submissions that silently fail are typically caused by a URL mismatch. Check if your server is configured to re-write URLs by:

- Forcing the addition or removal of the "www" subdomain
- Forcing the addition or removal of trailing forward slashes in your URLs

### Troubleshooting

Such URL re-writing rules are often found in a .htaccess file located in the web root of your site. Temporarily disable this file (if it exists) by renaming it to anything else and testing again. Your host can also help you determine if any such rules are in effect or possibly configured elsewhere.
