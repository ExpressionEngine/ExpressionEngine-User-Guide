<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Error Messages

[TOC]

## A problem was encountered while attempting to upload your file

When trying to upload a file, ExpressionEngine returns the following error: **"A problem was encountered while attempting to upload your file."**

### Troubleshooting File Upload Issues

This error is usually caused by insufficient permissions or incorrect configuration:

- The Upload Directory needs sufficient permissions for PHP to write files to the filesystem. See [File Permissions](troubleshooting/general.md#file-permissions) for details.
- The error can also occur if ExpressionEngine could not copy or move the uploaded file from the temporary upload directory, as specified by the server. The upload directory needs appropriate permissions.
- In a similar vein, the error may be triggered if there is insufficient disk space available. A zero byte file may result in this case.
- In `Files`, a full server path must be provided in the **Server Path to Upload Directory** preference. This is neither a relative path nor a URL. If the exact path is not known contact the host or server administrator to obtain that information.
- In some cases this error has been reported due to a trailing slash (/) at the end of the directory name under `Files` (or Gallery or Forum Preferences).

## Allowed memory size of ... bytes exhausted

ExpressionEngine returns the following error: **"Allowed memory size of ... bytes exhausted."**

### Troubleshooting memory issues

This error indicates that a PHP process on the server ran out of memory. The amount of available memory for PHP will vary from server to server. ExpressionEngine 2.0 requires a minimum of 32MB memory allocated to PHP.

The solution to this error is to increase the memory limit. This would have to be done by the server administrator or host.

## Call to undefined function: imagettftext()

ExpressionEngine returns the following error: **"Call to undefined function: imagettftext()."**

### Troubleshooting

This error---and similar warnings such as **"Warning: imagettftext(): Could not find/open font in ..."**---indicate that ExpressionEngine is running on a server where PHP is missing TrueType font support. Resolving this problem requires contacting the host support or server admin and have them upgrade to a PHP version that has such support compiled in.

If that is not an option, **Use TrueType Font for Captcha?** should be set to _No_ under `Settings --> CAPTCHA` or CAPTCHAs should be disabled altogether.

## Warning: Cannot modify header information

ExpressionEngine returns the following warning: **"Cannot modify header information."**

### Troubleshooting

This error is often caused by blank lines or superfluous white space in a PHP file before the opening or after the closing PHP tag. The offending PHP file is usually named in the PHP error message.

This error can also be triggered by another PHP error, in which case the originating error should be resolved first.

## Can't open file: exp_online_users.MYI

ExpressionEngine returns the following error: **"Can't open file: exp_online_users.MYI."**

### Troubleshooting

In these cases, MySQL usually returns "Error 145" which means that a "table is marked as crashed and should be repaired." This is usually caused by a file associated with that particular database becoming corrupted so that the database needs to be repaired.

### Repairing the database through ExpressionEngine

If ExpressionEngine's Control Panel is still accessible, the database can be repaired via the built-in SQL Manager at `Tools --> Utilities --> SQL Manager`. Select the tables to repair, then choose _Repair selected tables_ at the bottom and click Submit.

### Repairing the database by other means

If the Control Panel is no longer accessible the database must be repaired by some other means. This can be done by using the MySQL command line tools, or some external application such as phpMyAdmin. If these attempts fails, or the error occurs with some frequency, the database administrator should be notified.

## Client does not support authentication protocol requested by server

ExpressionEngine returns the following error: **"Client does not support authentication protocol requested by server."**

### Troubleshooting

Running MySQL v4.1 or newer, the follow error is returned:

    Warning: mysql_pconnect(): Client does not support authentication protocol requested by server; consider upgrading MySQL client

New versions of MySQL use an **authentication protocol** based on a password hashing algorithm that is **incompatible** with that used by older (pre-4.1) clients. MySQL can be configured to use the old algorithm, however. The MySQL documentation has [more information on the issue](http://dev.mysql.com/doc).

## ExpressionEngine has detected the modification of a core file

ExpressionEngine displays the error: **One or more core files have been altered**

### Troubleshooting

This means that one of the files that runs ExpressionEngine like the front-end index.php file or your control panel admin.php file has changed on disk. You will see this message after intentionally modifying those files, to change the system path for instance, or when updating a major version that instructs you to replace those files.

However, ExpressionEngine is careful to alert you since these files are executed by the server every time that ExpressionEngine runs. If your server is compromised, these types of files are common targets for hackers, since they know they will be requested frequently.

If you made these changes yourself, you can click Accept and the modifications will be accepted by the system. If you did not alter the files yourself, it may indicate a hacking attempt. Check the files listed for any suspicious contents (JavaScript or iFrames). If you **do** find that your server was compromised or are unsure of how to check or what to do about it, please contact your host and a web professional.

## MySQL Error 1366: Incorrect string value

ExpressionEngine returns the following error: **"MySQL Error 1366: Incorrect string value: 'xF0x9Fx98x9B' for column 'field_id_1'."**

### Troubleshooting

This error happens when ExpressionEngine tries to save content with an emoji to the database, and that database is not using the `utf8mb4` character set. Use our [Emoji Support add-on](https://github.com/ellislab/emoji-support) to update your database.

## MySQL Error 1064: You have an error in your SQL syntax

### Troubleshooting

This happens when the query has a syntax error.  However, if you can't see an obvious syntax error and the query runs in other environments, it may be a server configuration issue.  Make certain MySQL is not running with  [ANSI_QUOTES](https://dev.mysql.com/doc/refman/5.7/en/sql-mode.html#sqlmode_ansi_quotes) on.

## PHP Fatal error:  Uncaught PDOException: SQLSTATE[HY000] [2002]

This may happen when attempting to use the CLI when the ExpressionEngine intallation is running on [MAMP](https://www.mamp.info/).

### Troubleshooting

Check following configuration values in config.php: hostname, port.  Hostname may need to be ```127.0.0.1``` instead of ``localhost`` and the port may differ from the default 3306.  You can check the port used in the MAMP MySQL settings.  For example:

```php
$config['database'] = array(
	'expressionengine' => array(
		'hostname' => '127.0.0.1',
		'database' => 'EEdb',
		'username' => 'root',
		'password' => 'root',
		'dbprefix' => 'exp_',
		'char_set' => 'utf8mb4',
		'dbcollat' => 'utf8mb4_unicode_ci',
		'port'     => '8889'
	)
);
```

## Missing Encryption Keys

ExpressionEngine displays the error: **You do not have value set for \[encryption_key/session_crypt_key\] in your config.php. This may leave your install open to security vulnerabilities. Restore the keys or see this troubleshooting article in the user guide for help.**

### Troubleshooting

This means you are missing the corresponding item from your `system/user/config/config.php` file. This shouldn't occur, and generally means that someone modified your file or removed those values by accident. They will look like this:

```php
$config['encryption_key']    = '26791dcd5c7cc9e569cc05b16b96235985cc9f03';
$config['session_crypt_key'] = 'd9e776dc9a5de0cd83e7c76a76756daa64ff4b8b';
```

Since some content in your database or generated by third-party add-ons may already be encrypted using these keys, it would be best to restore them from a backup. If you do not have a backup available, or it is also missing these keys, you should generate new keys. Do **NOT** use the random samples above, use the tools below to create a new random string.

### Generating new encryption keys

Using `openssl`:

    openssl rand 128 | openssl dgst -sha1

Using `php` from the command line:

    php -r 'echo sha1(uniqid(random_int(-PHP_INT_MAX, PHP_INT_MAX), TRUE));echo "\n";'

For Windows systems, if you have not modified your environment, you will need to supply the path to php.exe:

    C:\PHP7\php.exe -r 'echo sha1(uniqid(random_int(-PHP_INT_MAX, PHP_INT_MAX), TRUE));echo "\r";'

## MySQL Error 1030: Got error 28

ExpressionEngine returns the following error: **"MySQL Error 1030: Got error 28."**

### Troubleshooting

Error 28 means "No space left on device". This is typically caused by the database server not having sufficient disk space to perform the requested query. Even if there seems to be enough space left, the query might have to create temporary tables which require more disk space than is currently available.

Reducing the size of the database can often help: one easy way to do this is by clearing out Template Revisions. (If Template Revisions are not needed, that feature can be disabled altogether under `Settings --> Template Settings`.) If MySQL runs on localhost, increasing the available disk space by deleting other files such as the cache might also work. In all cases the database administrator should be notified of the issue.

## No Suitable Nodes Available

"No Suitable Nodes Available" appears when loading an ExpressionEngine page.

### Repair and Optimize the Database Tables

This is a database error and can be repaired by _optimizing and repairing your database tables &lt;/cp/tools/data/sql_manage_tables&gt;_.

## Supplied argument is not a valid MySQL-Link resource

ExpressionEngine returns the following warning: **"Supplied argument is not a valid MySQL-Link resource."**

### Troubleshooting

This error is usually returned in one of two cases:

### The MySQL server is down

This can only be resolved by the database administrator who should be contacted immediately.

### MySQL has run out of database connections

If the server is working properly, MySQL might be running out of database connections. If that's the case, ensure that the database is using non-persistent connections by adding the following line to config.php:

    $config['db_conntype'] = "0";

## Unable to perform the SQL queries needed to install this program.

MySQL returns the error message **"Unable to perform the SQL queries needed to install this program."**

### Troubleshooting

This error most frequently occurs with some versions of MySQL 5. ExpressionEngine requires the following database privileges:

- `ALTER`
- `CREATE`
- `DELETE`
- `DROP`
- `INSERT`
- `SELECT`
- `UPDATE`

Depending on the configuration of the MySQL server, these permissions may have to be granted explicitly. Also, ExpressionEngine **does not work in STRICT_TRANS_TABLES mode**. The MySQL manual will have more information on the subject.

## Unable to receive your comment at this time

When trying to submit a comment ExpressionEngine returns the following error message: "**Unable to receive your comment at this time."**

### Troubleshooting Comments

This message appears when a user tries to submit a comment identical to an already-existing one. This anti-spam measure can be turned off with the **Deny Duplicate Data?** preference under `Settings --> Security & Privacy`.

## Cannot Fetch Current ExpressionEngine Version

ExpressionEngine displays the error: **An unexpected error occurred attempting to download the current ExpressionEngine version number.**

### Troubleshooting

Ensure this install has access to the internet and has no restrictions accessing update.expressionengine.com. Some servers may allow/block the outbound sites that scripts can connect to.

Ensure cURL is installed and enabled in your PHP installation.

View the contents of `system/user/cache/current_version`. If you see an error similar to "Unknown SSL protocol error", you may need to upgrade PHP to a version that supports connecting to sites over modern SSL protocols.

If you're still getting the error after trying the above and deleting the `current_version` file, use a support channel for more helps and include the contents of your `current_version` file.

## Error On View Template

Loading a template results in Parse error: syntax error, unexpected T_STRING in path/to/system/core/core.functions.php(626) : eval()'d code on line 1

### Troubleshoot Template

This indicates an error in the template being loaded, at the line indicated at the error.

One common cause is whitespace in Javascript code that is causing the Javascript to be parsed as a conditional.

```html
<script>
  function foo(){if(cond...) ...code... };
</script>
```

Add whitespace around the curly bracket to fix the error:

```html
<script>
  function foo() { if (cond...) ...code... };
</script>
```

## You are not authorized to perform this action

When accessing certain locations within the control panel ExpressionEngine returns the following error message: "**You are not authorized to perform this action".**

### Troubleshooting Authorization Issues

### Logging into the Control Panel

Only members of the "Superadmin" Role can access the Control Panel under all circumstances. Users not assigned a Superadmin role, need to have appropriate role permissions to access the Control Panel. By default, ExpressionEngine expects user's browsers to send a **valid IP address** and **User Agent information**. This is meant to help prevent hacking attempts. Some firewalls and other third-party software installed on the user's computer might block this information.

This requirement can be disabled:

- If the Control Panel can be accessed, it is possible to simply turn off the "**Require IP Address and User Agent for Login?**" and "**Require IP Address and User Agent when receiving comments?**" settings in Admin › Security and Session Preferences.
- The settings can also be overridden by adding the following line to the **config.php** file:

      $config['require_ip_for_login'] = "n";

### Banned or Block listed Users

This error will also occur for users that have been banned, or are being blocked by the **Block list**. It is possible to block particular **User Agents** or **domain names** under Modules › Block/Allow in the Control Panel and specific **IP addresses** under Admin › User Banning.
