<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Outgoing Email

**Control Panel Location: `Settings > Outgoing Email`**

This section of the Control Panel allows an administrator to set the preferences relating to how Email is sent within an ExpressionEngine site. These settings affect not only how Emails are sent via the Communicate section of the Control Panel but also how Emails are generally sent by the system.

## Settings

### Address

This setting specifies the From and Reply-to **Email address** to use with system generated Emails. With the increase in spam on the internet, many Email servers will not accept Emails without a valid From or Reply-to address, therefore we strongly recommend filling this field out.

### From name

This setting lets you specify a **name** to be used in the From and Reply-to email fields. As with the above field, we encourage you to set it to help prevent your emails from being filtered as spam.

### Character encoding

Specifies the character encoding that the emails will be sent with.

### Protocol

Email can be sent by ExpressionEngine by one of three protocols.

- **PHP Mail**: This is PHP's native method of sending email, the [mail](https://us2.php.net/manual/en/function.mail.php) function. It is compatible with most servers. ExpressionEngine uses the "PHP mail" setting by default. For most people, this is the best choice. It is not the most efficient way to send email, so if you are maintaining a large mailing list you might consider using one of the following two other methods if it is permissible by your server.
- **Sendmail**: This is more efficient than using "PHP Mail", particularly if you maintain a large mailing list, since a direct socket connection is opened to the Sendmail server, however, not all hosting providers allow a socket connection to Sendmail. To determine if this protocol is allowed on your server, select Sendmail as your email protocol, update your Email Configuration preferences, and attempt to send an email to yourself via the Communicate section of the Control Panel. If your email is received then you may use this option.
- **SMTP**: This protocol is recommended in cases where your host requires it. SMTP is not commonly available on Unix servers so you might check with your hosting provider. In some cases you can use your normal POP3 email account to send ExpressionEngine email. This may only be possible if your POP3 account is on the same server where ExpressionEngine is installed due to "relaying" security restrictions. SMTP usually requires authentication, so you will likely need to fill out the three fields following it to use this protocol.

*Related ExpressionEngine University articles:* [Using Mailgun to Send Emails from your Website](https://u.expressionengine.com/article/using-mailgun-to-send-emails-from-your-website)

### Server address

If you chose SMTP as your email protocol above, then you will need to fill out this field, which specifies the server address of the SMTP server. This setting is ignored if "SMTP" is not selected as the email protocol.

### Username

The username used to log in to your SMTP server. Not all SMTP servers require you to _authenticate_, but many of them do. In those cases you will need to specify the username and password (below).

### Password

The password used to log in to your SMTP server. Not all SMTP servers require you to _authenticate_, but many of them do. In those cases you will need to specify the username (above) and password.

### Connection type

Cryptographic protocol for SMTP. Can be set to Unencrypted (not recommended), SSL or TLS

### TLS version

When using TLS, provide the version that you can find in the instructions from your SMTP provider. Version 1.2 is the most commonly used

### Mail format

When you send email via the Communicate section of your Control Panel, you are able to send HTML formatted emails. This preference sets whether the Communicate section has "Plain text" or "HTML" selected by default.

### Enable word-wrapping?

Determines whether to have the email sending routine "word wrap" email messages. This setting can be overridden when sending email using the Communicate page. It's generally recommended to enable this setting, as this is required to comply with the email specification.
