<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Troubleshooting Email

[TOC]

## Emails sent via ExpressionEngine are never reaching their destination

### Troubleshooting

1.  Navigate to `Settings --> Outgoing Email`.
2.  Check that Return email address for auto-generated emails contains a valid e-mail address. (Some servers may require outgoing emails to be sent from an email address on the domain that EE is running on. If debugging shows a 553 error, make certain the return address complies with this requirement.)
3.  Try a different Email Protocol.
4.  Attempt to send an email via `Developer --> Utilities --> Communicate`. If that fails it will output an error that will assist with troubleshooting the problem.
5.  If no error message is received it means that EE is successfully opening a socket to the email server, writing the email headers and data to the mail queue, and closing the connection. In this case, the next step is to contact the hosting provider or server administrator for further troubleshooting.

## Using a Gmail account to send or receive

### Access to Gmail account is denied

A Gmail account can be used both to send emails and as an account for the Moblog. To enable ExpressionEngine to connect, you will need to turn on 'Access for less secure apps' in your [Gmail settings](https://www.google.com/settings/security/lesssecureapps)
