Email Configuration
===================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Email Configuration`

This section of the Control Panel allows an administrator to set the
preferences relating to how email is sent within an ExpressionEngine
site. These settings affect not only how emails are sent via the
Communicate section of the Control Panel but also how emails are
generally sent by the system.

Return email address for auto-generated emails
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This setting specifies the From and Reply-to **email address** to use
with system generated emails. With the increase in spam on the internet,
many email servers will not accept emails without a valid From or
Reply-to address, therefore we strongly recommend filling this field
out.

Webmaster or site name for auto-generated emails
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This setting lets you specify a **name** to be used in the From and
Reply-to email fields. As with the above field, we encourage you to set
it to help prevent your emails from being filtered as spam.

.. _email-character-encoding-label:

Email Character Encoding
~~~~~~~~~~~~~~~~~~~~~~~~

Specifies the character encoding that the emails will be sent with.

.. _email-enable-debugging-label:

Enable Email Debugging
~~~~~~~~~~~~~~~~~~~~~~

When this option is enabled, detailed messages will be displayed
whenever you send an email using the Communicate page. This information
can be useful in helping to track down any problems you may be
experiencing. If you are having difficulty sending email you are
encouraged to enable this option.

.. _email-protocol-label:

Email Protocol
~~~~~~~~~~~~~~

Email can be sent by ExpressionEngine by one of three protocols.

-  **PHP Mail**: This is PHP's native method of sending email, the
   `mail <http://us2.php.net/manual/en/function.mail.php>`_ function. It
   is compatible with most servers. ExpressionEngine uses the "PHP mail"
   setting by default. For most people, this is the best choice. It is
   not the most efficient way to send email, so if you are maintaining a
   large mailing list you might consider using one of the following two
   other methods if it is permissible by your server.
-  **Sendmail**: This is more efficient than using "PHP Mail",
   particularly if you maintain a large mailing list, since a direct
   socket connection is opened to the Sendmail server, however, not all
   hosting providers allow a socket connection to Sendmail. To determine
   if this protocol is allowed on your server, select Sendmail as your
   email protocol, update your Email Configuration preferences, and
   attempt to send an email to yourself via the Communicate section of
   the Control Panel. If your email is received then you may use this
   option.
-  **SMTP**: This protocol is recommended in cases where your host
   requires it. SMTP is not commonly available on Unix servers so you
   might check with your hosting provider. In some cases you can use
   your normal POP3 email account to send ExpressionEngine email. This
   may only be possible if your POP3 account is on the same server where
   ExpressionEngine is installed due to "relaying" security
   restrictions. SMTP usually requires authentication, so you will
   likely need to fill out the three fields following it to use this
   protocol.

SMTP Server Address
~~~~~~~~~~~~~~~~~~~

If you chose SMTP as your email protocol above, then you will need to
fill out this field, which specifies the server address of the SMTP
server. This setting is ignored if "SMTP" is not selected as the email
protocol.

.. _email-smtp-server-port-label:

SMTP Server Port
~~~~~~~~~~~~~~~~

The username used to log in to your SMTP server. Not all SMTP servers require 
you to authenticate, but many of them do. In those cases you will need to specify 
the username and password (below).

SMTP Username
~~~~~~~~~~~~~

The username used to log in to your SMTP server. Not all SMTP servers
require you to *authenticate*, but many of them do. In those cases you
will need to specify the username and password (below).

SMTP Password
~~~~~~~~~~~~~

The password used to log in to your SMTP server. Not all SMTP servers
require you to *authenticate*, but many of them do. In those cases you
will need to specify the username (above) and password.

.. _email-use-batch-mode-label:

Use Batch Mode?
~~~~~~~~~~~~~~~

ExpressionEngine's mail handling routine allows the use of a "batch
mode" whenever it sends email via the Communicate section of your
Control Panel. This mode splits up large numbers of emails into small
batches which get sent at short intervals. This gives you the ability to
send email to very large mailing lists without being in danger of
exceeding your server's execution time limit. By default, PHP limits any
process to 30 seconds, which is not enough time to send a large amount
of email. Enabling the Batch Mode can prevent server time-outs. A
secondary benefit is that it is less taxing on your mail server and, in
the case of people on shared hosting accounts, less likely to cause
problems with your server administrator.

Batch mode is turned off by default in ExpressionEngine. To enable batch
mode, you must change the "Use Batch Mode" preference to Yes and then
set the number of emails per batch in the "Number of Emails Per Batch"
preference (below).

.. _email-number-per-batch-label:

Number of Emails Per Batch
~~~~~~~~~~~~~~~~~~~~~~~~~~

This setting is used in conjunction with the "Use Batch Mode?"
preference above. This setting determines how many emails will be sent
in each batch. The batch size you should use depend on many things;
among them the email protocol you have chosen, the server configuration,
and the server power, so you may need to experiment a little to get it
right.

If you are using one of the more robust mail protocols, like Sendmail or
SMTP, you can set a greater batch total, possibly as high as several
hundred or even more if you are on a dedicated server. A batch size of
300 in these cases is a good starting point. If you are having good
success you can increase it until you begin experiencing time-outs.
Note: Unless your mailing list numbers in the thousands you won't gain
much of a speed gain from setting large batches. If you are using the
less efficient "PHP mail" protocol then you will usually need to set a
lower batch size; 50-100 is typical.

.. _email-default-format-label:

Default Mail Format
~~~~~~~~~~~~~~~~~~~

When you send email via the Communicate section of your Control Panel,
you are able to send HTML formatted emails. This preference sets whether
the Communicate section has "Plain text" or "HTML" selected by default.

Enable Word-wrapping by Default?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether to have the email sending routine "word wrap" email
messages. This setting can be overridden when sending email using the
Communicate page. It's generally recommended to enable this setting, as
this is required to comply with the email specification.

.. _email-console-timelock-label:

Email Console Timelock
~~~~~~~~~~~~~~~~~~~~~~

The number of minutes that must lapse before a member is allowed to send
another email. Note: This only applies to the Email Console in the
member profile pages.

.. _email-log-console-messages-label:

Log Email Console Messages
~~~~~~~~~~~~~~~~~~~~~~~~~~

This preference lets you keep a copy of all messages sent via the Email
Console in the member profile pages by logging them.

.. _email-enable-captchas-label:

Enable CAPTCHAs for Tell-a-Friend and Contact emails
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

With this enabled, users will need to fill out a
:doc:`CAPTCHA </security/captchas>` when using the Tell-a-Friend
or Contact email forms. You will need to ensure that your tags for those
forms contain the appropriate CAPTCHA code.
