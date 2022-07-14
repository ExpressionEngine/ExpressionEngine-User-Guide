<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Utilities

**Control Panel Location: `Tools > Utilities`**

[TOC]

## Communicate

**Control Panel Location: `Tools > Utilities > Communicate`**

The Communicate tab in the Control Panel provides access to the email sending part of the system. Email can be sent in plain text or HTML format, and supported email sending protocols are [SMTP](https://www.webopedia.com/TERM/S/SMTP.html), [Sendmail](https://www.sendmail.org/), and PHP [mail](https://us2.php.net/manual/en/function.mail.php).

NOTE: **Note:** In the Settings area of the Control Panel you'll find the [Outgoing Email](control-panel/settings/email.md) page.

### Sent Emails

**Control Panel Location: `Tools > Utilities > Sent`**

This section of the Control Panel shows a table of all the previously sent emails. It lists the email title (subject), when it was sent, number of recipients, a re-send link, and a delete checkbox.

## Language Files

**Control Panel Location: `Tools > Utilities > CP Translate`**

This Translation Utility page of the Control Panel allows you to translate the core language files into other languages.

When you use this utility it will create a copy of any file you have translated and put it into the following folder: `system/user/language`

In order to be able to create translation files, the `system/user/language` folder must be writable. See [File Permissions](troubleshooting/general.md#file-permissions) for details.

The main Translation Utility screen shows a list of all the language files currently installed.

### Translation

**Control Panel Location: `Tools > Utilities > CP Translate > Edit`**

Once you have translated all the text for a particular file you will click the Save Changes button and ExpressionEngine will create the new translated file inside the translations folder.

You can also Save Changes at any point you like; you don't have to complete the translation before saving.

## PHP Info

**Control Panel Location: `Tools > Utilities > PHP Info`**

The PHP Info page of the Control Panel allows you to see the configuration details of your PHP installation, via the standard [phpinfo()](https://www.php.net/phpinfo) command.

The page will show a great deal of information about your server, server configuration, PHP installation, etc., which can be very useful if you are trying to troubleshoot a problem or determine whether your server supports a certain feature.

## Manage Add-on Extensions

**Control Panel Location: `Tools > Utilities > Manage Extensions`**

Since Extensions are calling code within the ExpressionEngine code there is a chance that an extension will interfere with how your site is working. If you are unsure of which extension might be causing a problem you can either turn them off one by one until the problem disappears.

## Member Import File Converter

**Control Panel Location: `Tools > Utilities > File Converter`**

The Convert Delimited Data to XML utility enables you to take member information from a third party application that exports a delimited data file and create an XML file in ExpressionEngine’s Member XML Format. Nearly all delimited formats are accepted, such as the common tab-delimited, comma-delimited, and quote-enclosed formats.

The utility itself contains the instructions needed to assist you with the XML creation, and you should read each area carefully as you proceed. Username, Screen Name, and Email are required, and all standard member database fields are available to you. It is recommended that you do not use member_id, so ExpressionEngine can automatically generate unique Member IDs when the members are later imported from the XML file.

NOTE: **Note:** Many applications export field headings as the first line of a delimited data file. You must delete this row, or it will be included as a member element. Field assignment takes place during the conversion process, so those field headings will not be necessary to define your file’s structure.

## Mass Notification Export

**Control Panel Location: `Tools > Utilities > Mass Notification Export`**

The Mass Notification Export utility enables you to export a CSV file of the ID, screen name, username, and email address for all your Members. This action will be logged to the `/cp/logs/cp`.

This can be used to notify users in the unfortunate event of a data breach, such as is required by the . We recommend to validating the email addresses before sending any mass notification emails, otherwise your server could end up blocked. Any of the following services will validate email addresses:

- [Email Verifier App](https://www.emailverifierapp.com)
- [VerifyEmailAddress.org](https://www.verifyemailaddress.org)
- [Hunter](https://hunter.io/email-verifier)

Options:

- **Validate email addresses?** -- When enabled each email address will be checked to ensure it matches the syntax specified in [RFC 822](https://tools.ietf.org/html/rfc822). Additionally the domain will be checked to ensure it exists. This will produce two CSV files, one for all the valid addresses, and another for the invalid addresses.

## Database Backup Utility

**Control Panel Location: `Tools > Utilities > Backup Utility`**

This utility allows you to make simple SQL dump backups of your ExpressionEngine database. For file backups, or more robust and automated database backup options, please refer to [Back-up your ExpressionEngine database and files](general/database-backup.md).

When you click "Backup Database", a SQL dump will be created and stored in your `system/user/cache/` folder, named based on the date and time of the backup, e.g.: `my_database_2017-10-20_09h20mPDT.sql`

## SQL Manager

**Control Panel Location: `Tools > Utilities > SQL Manager`**

This section of the Control Panel allows you to manage your database. You can view information about the database, run queries, optimize your tables, and more.

The main SQL Manager screen shows a table of your basic database information.

## SQL Query Form

**Control Panel Location: `Tools > Utilities > Query Form`**

This section presents a form that you can use to submit any standard database query. This feature is intended for **advanced** users since any changes you may make with a query are permanent.

Buttons at the bottom of the form can be used to provide you with a base query for many commonly used queries.

By default MySQL query errors are displayed.

## Cache Manager

**Control Panel Location: `Tools > Utilities > Cache Manager`**

This section of the Control Panel allows you clear the cached data for the different types of [caching](optimization/caching.md) that are available.

## Manage Statistics

**Control Panel Location: `Tools > Utilities > Statistics`**

This section of the Control Panel allows you to force the system to recount different types of statistics. This section is rarely necessary, but every once in a while a statistic can become out of sync or otherwise not reflect the correct data. This section will allow you to make the system update the information.

## Data Search and Replace

**Control Panel Location: `Tools > Utilities > Search and Replace`**

This section of the Control Panel allows you to search for text within your site and replace it with another piece of text. This search and replace operation can be performed on your entry titles, within any of the entry fields, or within your Templates.

- **Search for this text** -- Here you can input the text for which you would like to search. You must be very careful about what text you search for. If you input "car", then words such as "carnivore" and "cartoon" will also be matched. If you want to make sure you match only the word "car" then you must place spaces on each side of the term, like " car ". In those cases you need to make sure that your replacement term also contains the spaces in a similar fashion or else you won't get the results you expect.
- **Replace with this text** -- Here you specify what text you would like to replace the text for which you are searching. Be sure that the syntax you uses matches the "search" text. For instance, if your search text is for a specific word or phrase and uses spaces on either side of the search term, then your replacement text also needs to include those spaces on either side so that the resulting text has the correct format.
- **Search and replace in** -- This setting consists of a drop-down list of the possible database areas for which you can perform the search and replace. The list includes:
  - **Site Preferences**: Select a site to search and replace text within the site's preferences (including such prefs as those for Channels and Upload Directories).
  - **Channel Entry Titles**: Select this to search and replace text within the entry titles.
  - **Channel Fields**: Under this heading, each of the available [Fields](control-panel/field-manager/field-manager-settings.md) is listed.
  - **Templates**: Select this to search and replace text within all of your Templates.

## Member Import

**Control Panel Location:** `Tools > Utilities > Member Import`

The Member Import Utility enables you to import members from other systems utilizing ExpressionEngine's [special Member Import XML format](general/member-import-xml-format.md).

## Search Reindex

**Control Panel Location:** `Tools > Utilities > Search Reindex`

Search reindexing refreshes the searchable words stored by Grid and Fluid fields that are used by the search module when performing a search. Reindexing is needed when:

- a Grid field's search setting changes
- the search settings for columns in a Grid field change
- fields are removed from a Fluid field
- the Search and Replace tool acted on a Grid or Fluid field

This tool will cycle through all Channel Entries that have a Grid or Fluid field assigned to them and re-index the entry data in those fields.

### Permission Restrictions

- Access Tools sections: Utilities
