<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# System Requirements

[TOC]

## Recommended Requirements

**For the best experience**, ExpressionEngine requires:

- [PHP](https://www.php.net/) 7.4 or newer, running with [PHP-FPM](https://php.net/manual/en/install.fpm.php)
- [MySQL](https://www.mysql.com/) 5.6 or newer **OR** [Percona](https://www.percona.com/software/mysql-database/percona-server) 5.6 or newer

## Server Compatibility Wizard

If you're not sure whether your server meets the minimum requirements, the server wizard will run some tests and give you an answer.

- [Server Wizard](https://github.com/ExpressionEngine/ExpressionEngine-Server-Wizard) visit the repo and download the zip.
- Upload the folder to your server.
- Point your web browser to the folder. For example: `https://example.com/ee_wizard`

## The Bare Minimums

If you are stuck in an older environment, ExpressionEngine _can_ run on PHP 7.2.5+ with 32M of memory, and MySQL 5.5.3+. PHP-FPM is also optional, but [tends to handily outperform mod_php](https://www.cloudways.com/blog/php-fpm-on-cloud/). That said,running older versions not only hurts performance—increasing the cost of your website—but also puts your site **at risk of security vulnerabilities**. The PHP Group stopped providing support for PHP 5.6 [on December 31, 2018](https://php.net/supported-versions.php). Oracle also ceased providing support for MySQL 5.5 at the same time.

Why not save yourself the worry and hassle, enjoy a faster and more secure site that costs less to maintain, and upgrade now? Here's an email you can send to your host if they need a little nudge:

```md
Hey there!

I'm running the PHP/MySQL based content management system ExpressionEngine, and would like to make sure it's speedy, secure, and making the most efficient use of the resources available on my server.

Could I speak with someone about moving to an environment that has PHP 7+ and MySQL 5.6+? If they are available, I'd love to use PHP-FPM to implement PHP, and Percona as a drop-in replacement for MySQL, too.

Thanks!
```

## Control Panel Browser Requirements

ExpressionEngine's Control Panel targets compatibility with the final-release versions of the web browsers listed here, so it's important to keep your browser up to date. These requirements do not apply to your website, which **you are 100% in control of**, just ExpressionEngine's control panel.

- Chrome
- Safari
- Firefox
- Opera
- Microsoft Edge

NOTE: **Note:** In all cases, JavaScript must be enabled to use the Control Panel.

## Details and Notes

You can safely ignore the rest of this page unless you are experiencing problems, or are a sysadmin setting up a custom environment. All of the following are readily available in most managed environments.

### PHP Extensions Required

Though the following are available in PHP by default, some hosts may have them disabled until you ask for them.

- [GD (or GD 2) library](https://www.php.net/manual/en/ref.image.php) 
- [File Information (fileinfo)](https://php.net/manual/en/book.fileinfo.php)
- [ZIP](https://www.php.net/manual/en/book.zip.php)
- [iconv](https://www.php.net/manual/en/book.iconv.php)


NOTE: **Note:** If you're on MediaTemple you will need [to create a phprc file](https://help.dreamhost.com/hc/en-us/articles/214894037-How-do-I-create-a-phprc-file-via-FTP-) that contains the following: `extension = fileinfo.so`

### PHP Extensions Recommended

These are recommended, but not required.

- The [Internationalization](https://php.net/manual/en/book.intl.php) extension, for full functionality of [variable modifiers](templates/variable-modifiers.md)
- [Multibyte String](https://php.net/manual/en/mbstring.installation.php) handling

### MySQL Privileges

The MySQL user connecting to the database must have the following privileges:

- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`
- `CREATE`
- `INDEX`
- `ALTER`
- `DROP`

### Apache Server

If you are hosted on an Apache server, the `AcceptPathInfo` option needs to be enabled for URLs to work properly. Most servers are configured this way by default, but if yours is not, you have a few options:

- Include `AcceptPathInfo On` in your `.htaccess` file to enable it
- Ask your web host or server admin to enable the option
- Set your site's URLs to use [query strings](general/url-structure.md#query-strings)

### URL Segment Support

If the [Server Compatibility Wizard](#server-compatibility-wizard) lists URL Segment Support as _Unsupported_, you will need to set your site's URLs to use [query strings](general/url-structure.md#query-strings).

## Local Development

ExpressionEngine can be ran locally on a number of local development environments. Below are just a few to help you get started. 

NOTE: **Note:** When setting up your local environment, you must make sure it still meets the requirements listed above.

- **[Valet](https://laravel.com/docs/8.x/valet)** - (macOS only) Valet is the ExpressionEngine's team recommended local development environment. Super fast and easy to use.

- **[DDEV Local](https://www.ddev.com/ddev-local/)** - (macOS, Windows, Linux) DDEV Local makes working with Docker containers a breeze. Quickly setup and share environments that mirror your production.  

- **[Devilbox](http://devilbox.org/)** - (macOS, Windows, Linux) Devilbox is another great stack which allows user to quickly get up and running with Docker environments. To install ExpressionEngine on Devilbox simply follow the [Setup ExpressionEngine Docs](https://devilbox.readthedocs.io/en/latest/examples/setup-expressionengine.html). 

- **[MAMP](https://www.mamp.info/en/)** - (macOS, Windows) MAMP can be very convenient for local development, but it has some quirks. If you are using MAMP, you will need to use PHP 7+ due to outdated cURL and OpenSSL libraries that MAMP ships with its older versions of PHP.
