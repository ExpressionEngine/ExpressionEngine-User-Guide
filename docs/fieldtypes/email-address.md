<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Email Address Fieldtype

Email Address is a field type for storing email addresses. Only valid emails are allowed to be saved in this field.

## Template Tag

In its standard form, an Email Address field outputs the raw email address:

    {contact_email_address}
    {!-- Outputs: contact@example.com  --}

You can encode the email for spam protection using ExpressionEnigne's [encode tag](templates/globals/single-variables.md#encode):

    {encode="{contact_email_address}?subject=Some%20Subject" title="Send an Email to {first_name}"}

## Mailto Modifier

The Email Address field can also conveniently output links for you using the `mailto` modifier, with optional titles and subjects. For spam protection, Mailto modifiers are encoded by default, but you can override this parameter if you wish. Here is an example with all of the options:

    {contact_email_address:mailto title="Email about their dog" subject="Question about your dog" encode="no"}
    {!-- Outputs: --}
    <a href="mailto:username@example.com?subject=Question%20about%20your%dog">Email about their dog</a>

Mailto modifier parameters:

|Parameter|Description|
|-:|-|
|`title=`|The link title. If not supplied, the email address is used instead.|
|`subject=`|A pre-set subject for the email. It is automatically URL-encoded.|
|`encode=`|Values: yes/no. Whether or not to encode the email link to help prevent spammers from crawling the address. Enabled by default, so you only need to use it if you wish to keep the link from being encoded with JavaScript.|
