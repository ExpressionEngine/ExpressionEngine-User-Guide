###########
Email Class
###########

.. contents::
  :local:

.. highlight:: php

***********************
Calling the Email Class
***********************

.. class:: Email

  ExpressionEngine uses the Email class for the sending of email via
  whatever protocol is specified in the site's Email Preferences. This
  class is a library, so you have to load the Email library before using
  it::

    ee()->load->library('email');

****************
Sending an Email
****************

The Email class will automatically create all email headers and will
process the data in various ways depending on the parameters set (ex:
word wrapping and email validity). So, you simply have to send the class
the relevant information and it will take care of the rest. Below is an
example piece of code used for sending a single email.

::

    ee()->load->library('email');
    ee()->load->helper('text');

    ee()->email->wordwrap = true;
    ee()->email->mailtype = 'text';
    ee()->email->from($from);
    ee()->email->to($recipient);
    ee()->email->subject($email_subject);
    ee()->email->message(entities_to_ascii($email_msg));
    ee()->email->Send();

Properties
==========

.. attr:: charset

  Specifies the character set of the email. Since ExpressionEngine uses
  the character set in the Control Panel and in the default templates,
  the default is set for UTF-8. However, in certain circumstances you
  might wish to change this.

  .. note:: There are email clients that will ignore any character
    specified in an email and will attempt to auto-detect, sometimes
    erroneously.

.. attr:: debug

  Specifies whether to enable debugging mode for the class. If emails
  are not being sent, then it might be prudent to set this to ``TRUE``
  and see if any errors are being sent by the Email class.

.. attr:: mailtype

  Specifies whether to send this email as a simple text email or an
  ``HTML`` email. The default type is ``'text'``, so you only need to
  set this parameter when sending HTML email (``'html'``).

.. attr:: validate

  Specifies whether to validate all emails sent to the class. By default
  this is ``FALSE``, and it must be set to TRUE to perform the
  validation.

.. attr:: wordwrap

  Specifies whether the words in the email should be wrapped after a
  certain number of characters. By default, this is set to ``FALSE``, so
  you only need to set its value if you want to use wordwrap.

.. attr:: wrapchars

  Specifies the number of characters to wrap at, if
  :attr:`Email::$wordwrap` is set to true.

Methods
=======

.. method:: from($from[, $name = ''[, $return_path = NULL]])

  The function for specifying the sender of the email::

    ee()->email->from('you@example.com', 'Your Name');

  :param string $from: The email address of the sender
  :param string $name: The name of the sender
  :param string $return_path: Email address to redirect undelivered mail
  :returns: Email class object
  :rtype: Object

.. method:: reply_to($replyto[, $name = ''])

  The function for specifying the Reply-To header of the email::

    ee()->email->reply\_to('you@example.com', 'Your Name');

  :param string $replyto: The email address for the reply-to
  :param string $name: The name of the sender
  :returns: Email class object
  :rtype: Object

.. method:: to($to)

  The function for specifying the general recipient(s) of the email::

    ee()->email->to('someone@example.com');
    ee()->email->to('one@example.com, two@example.com, three@example.com');

  :param mixed $to: Array or comma separated string of email addresses
  :returns: Email class object
  :rtype: Object

.. method:: cc($cc)

  The function for specifying the recipient(s) receiving a carbon copy
  of the email::

    ee()->email->cc('someone@example.com');

  :param mixed $cc: Array or comma separated string of email addresses
  :returns: Email class object
  :rtype: Object

.. method:: bcc($bcc[, $limit = ''])

  The function for specifying the recipient(s) receiving a blind carbon
  copy of the email::

    ee()->email->bcc('someone@example.com', 200);

  :param mixed $bcc: Array or comma separated string of email addresses
  :param integer $limit: Number of emails to send at a time, will batch
    if necessary
  :returns: Email class object
  :rtype: Object

.. method:: subject($subject)

  Sets the email subject::

    ee()->email->subject('This is my subject');

  :param string $subject: Subject of the email
  :returns: Email class object
  :rtype: Object

.. method:: message($body)

  Sets the email message body::

    ee()->email->message('This is my message');

  :param string $body: The message body
  :returns: Email class object
  :rtype: Object

.. method:: send_alt_message($str = '')

  This is an optional message string which can be used if you send HTML
  formatted email. It lets you specify an alternative message with no
  HTML formatting which is added to the header string for people who do
  not accept HTML email. If you do not set your own message CodeIgniter
  will extract the message from your HTML email and strip the tags::

    ee()->email->set_alt_message('This is the alternative message');

  .. note:: If you are using data from a channel entry and not sending an
    HTML email, then you should use the ``entities_to_ascii()`` function
    (text helper) to convert any HTML entities back into ASCII
    characters before sending the message to the class.

  :param string $str: Alternative message with no HTML formatting sent
    to people who do not accept HTML email
  :returns: Email class object
  :rtype: Object

.. method:: send($auto_clear = TRUE)

  The Email sending method::

    ee()->email->send();

  :param boolean $auto_clear: When set to ``FALSE`` will prevent
    parameters from being cleared after sending the email
  :returns: ``TRUE`` if successful, ``FALSE`` otherwise
  :rtype: Boolean

  .. note:: In order to use the ``print_debugger()`` method, you need
    to avoid clearing the email parameters.

.. method:: print_debugger($include = array('headers', 'subject', 'body'))

  Returns a string containing any server messages, the email headers, and the
  email message::

    ee()->email->print_debugger();

  :param array $include: Optionally specify which parts of the message
    should be printed. Valid options are: headers, subject, body.
  :returns: String of data requested
  :rtype: String

.. method:: clear($clear_attachments = FALSE)

  Clears out all parameters set either by property or method::

    ee()->email->clear();

  :param boolean $clear_attachments: If set to ``TRUE`` attachments will
    be cleared out, otherwise they're left alone.
  :returns: Email class object
  :rtype: Object

***********************
Sending Multiple Emails
***********************

If you are sending multiple emails in a function either for
notifications or because each message has a separate message, then you
should use the :meth:`Email::clear` function between each email to reset
certain variables in the class. If you do not, then it is possible that
the emails will not be sent or sent incorrectly::

  ee()->load->library('email');
  ee()->load->helper('text');

  ee()->email->wordwrap = true;
  ee()->email->mailtype = 'text';
  $errors = array();

  foreach($member_emails as $username => $from)
  {
      ee()->email->from($from);
      ee()->email->to($recipient);
      ee()->email->subject("Account Expiration: {$username}");
      ee()->email->message(entities_to_ascii($message));
      ee()->email->send();

  if ( ! ee()->email->send())
  {
      $errors[] = ee()->email->print_debugger();

      // Send failed, data was not cleared
      ee()->email->clear();
  }