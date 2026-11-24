<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
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

If an update stops while replacing files or updating the database, follow the rollback link in the updater. On the command line, use the command printed after **To roll back, run** if you see it. You can also start a rollback with the following command while the recovery files are available.

    php eecli.php update --rollback

If PHP cannot start the next step, the rollback script prints a command to continue. Run the printed command and follow the PowerShell instructions if shown. Keep the updater backups and log until recovery finishes.

If automatic rollback cannot finish, check `system/user/cache/ee_update/update.log` to see how far the update progressed. The updater's backups can contain only the files and database changes it reached. If you need to restore manually, retain the recovery files and restore matching files and database from your [pre-update backups](general/database-backup.md).

### The update did not finish its final steps

If ExpressionEngine reports that the new version was installed but the final steps did not finish, retry those steps with:

    php eecli.php update --complete

If an add-on extension is causing the failure, disable that extension and run the command again. Keep the updater backups and log until the command succeeds. Wait for any update or recovery in progress to finish before starting another update.

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
- Go to `Tools --> Utilities --> PHP Info` and search the page for "display_errors". Ensure it is set to _On_ under the Local column. If it is not, your host can help change this setting for you.
- Check your server's error logs or contact your host to assist you in cases where errors are being output to logs and not to the screen.

## Submitting a form has no effect and the page simply reloads

Form submissions that silently fail are typically caused by a URL mismatch. Check if your server is configured to re-write URLs by:

- Forcing the addition or removal of the "www" subdomain
- Forcing the addition or removal of trailing forward slashes in your URLs
- Removing index.php from URLs while your settings still include index.php in URL and Path settings

### Troubleshooting

Such URL re-writing rules are often found in a .htaccess file located in the web root of your site. Temporarily disable this file (if it exists) by renaming it to anything else and testing again. Your host can also help you determine if any such rules are in effect or possibly configured elsewhere.

## Submitting a form fails

There are a variety of reasons beyond redirects that form submissions may fail.

- Mod Security rules may be triggered by some content in the post itself.
- Server configurations such as [post_max_size](https://www.php.net/manual/en/ini.core.php#ini.post-max-size) or [max_input_vars](https://www.php.net/manual/en/info.configuration.php#ini.max-input-vars) may prevent submission or silently drop data.

### Troubleshooting

Your host may be able to tell you if any security filters have been triggered and if so, why.

Another option you might try is copying the form to a standalone php file and having it post to itself and output the $_POST array.  If the data is lost, you'll know it's something outside of ExpressionEngine at work.
