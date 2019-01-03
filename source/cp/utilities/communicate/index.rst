.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Communicate
===========

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Developer --> Utilities --> Communicate`

.. Overview

The Communicate tab in the Control Panel provides access to the email
sending part of the system. Email can be sent in plain text or HTML
format, and supported email sending protocols are
`SMTP <http://www.webopedia.com/TERM/S/SMTP.html>`_,
`Sendmail <http://www.sendmail.org/>`_, and PHP
`mail <http://us2.php.net/manual/en/function.mail.php>`_.

.. note:: In the Settings area of the Control Panel you'll find the
	:doc:`/cp/settings/email` page.

.. Screenshot (optional)

.. Permissions

Permission Restrictions
-----------------------

* Access Tools sections: Utilities
* Access Tools sections: Communicate

Fields
------

.. contents::
  :local:
  :depth: 1

.. Each Field

Email Subject
~~~~~~~~~~~~~

The subject of the email that is to be sent. The field may not contain
any HTML or PHP. This is a **required** field.

Email Body
~~~~~~~~~~

The message of the email that is to be sent. If you wish to send an HTML
formatted email message to the recipients of this email, the HTML will
be put in this field. Remember to use absolute URLs for any images, CSS
files, javascript files, or links. This is a **required** field.

send as
~~~~~~~

How the email's message should be formatted. Options include:

#. **Plain Text**: The message will be sent as plain, unformatted text.
#. **Markdown**: The message will be converted from Markdown to HTML before being sent.
#. **HTML**: The message will be sent in HTML format and will be
   rendered in compatible email applications. **You must submit your
   email as a complete HTML document if you choose this format.** Note
   that not all email applications will correctly display HTML formatted
   emails, HTML emails are more likely to be flagged as spam, and that
   many people prefer not to receive such emails.

.. note:: If you choose to send your email in the HTML Format, an
	optional field will appear allowing you specify a Plain Text
	Alternative to the HTML email. This allows email clients who have
	HTML email disabled or unavailable to still view the email in a form
	that is still easily readable, opposed to be the original HTML email
	with all tags stripped.

word wrap
~~~~~~~~~

If word wrapping is on, the content of your message will automatically
be given line breaks to insure that each line's length does not exceed a
certain number of characters. Email programs that do not automatically
wrap lines or insert their own line breaks will then be able to better
view emails. 72 characters per line is considered the email standard.

.. note:: Word wrapping affects only plain text emails.

Your email
~~~~~~~~~~

The email address which you wish to have set as the reply-to for the
email. This is a **required** field and the structure of the email
address will be checked before the email is sent.

Attachment
~~~~~~~~~~

Attach a file to the email. These attachments are not saved after sending.

Primary recipient(s)
~~~~~~~~~~~~~~~~~~~~

The email address of the recipient. When sending to multiple addresses,
please separate each address with a comma (ex: joe@example.com,
fred@example.com). If you are sending this email to a member group or
mailing list (see below), then you *may* leave this field blank.
However, you may also fill it out and thus include more emails than just
the ones in the member group or mailing list. Before sending the email,
the program will check and remove all duplicate email addresses to
ensure that multiple emails are not sent to the same user.

CC recipient(s)
~~~~~~~~~~~~~~~

Carbon Copy. Recipients you wish to send a copy to. Multiple emails must
be separated by commas.

BCC recipient(s)
~~~~~~~~~~~~~~~~

Blind Carbon Copy. Recipients to whom you wish to send a copy of this
email but do not wish them to see who else received this email via BCC.
Useful for keeping addresses and other recipients unknown to the main
recipients of an email. Multiple emails must be separated by commas.

Add member group(s)
~~~~~~~~~~~~~~~~~~~

If you wish to send your email to one or more Member Groups you may do
so by selecting them.

.. toctree::
  :glob:
  :hidden:
  :titlesonly:

  *
