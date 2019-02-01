<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Email Address

[TOC]

Email Address is a field type for storing email addresses. This field type is validated for the content author, ensuring only proper email addresses are stored.

## Template Tags

### Basic Usage

In its standard form, an Email Address field can be used to output the raw email address:

    {contact_email_address}

or as an email link:

    <a href="mailto:{contact_email_address}">Send an Email</a>

or with other custom data and encoded by ExpressionEngine for spam protection (see [encode](templates/globals/single-variables.md#encode) for more details):

    {encode="{contact_email_address}?subject=Some%20Subject" title="Send an Email to {first_name}"}

## Mailto Modifier

The Email Address field can also conveniently output links for you using the `mailto` modifier, with optional titles and subjects. For spam protection, Mailto modifiers are encoded by default, but you can override this parameter if you wish. Here is an example with all of the options:

    {contact_email_address:mailto title="Email about their dog" subject="Question about your dog" encode="no"}

outputs:

    <a href="mailto:username@example.com?subject=Question%20about%20your%dog">Email about their dog</a>

## Parameters

### `title=`

    title="Email about their dog"

The link title. If not supplied, the email address will be used as the link title.

### `subject=`

    subject="Question about your dog"

A pre-set subject for the email. Most email clients will read and use this to pre-fill the subject line. It is URL-encoded automatically for you.

### `encode=`

    encode="no"

Values: yes/no. Whether or not to encode the email link to help prevent spammers from crawling the address. Enabled by default, so you only need to use it if you wish to keep the link from being encoded with JavaScript.
