<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Member Tools

[TOC]

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

## Member Import

**Control Panel Location:** `Tools > Utilities > Member Import`

The Member Import Utility enables you to import members from other systems utilizing ExpressionEngine's [special Member Import XML format](general/member-import-xml-format.md).
