---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Email Class

[TOC]

## Calling the Email Class

**class `Email`**

ExpressionEngine uses the Email class for the sending of email via whatever protocol is specified in the site's Email Preferences. This class is a library, so you have to load the Email library before using it:

    ee()->load->library('email');

## Sending an Email

The Email class will automatically create all email headers and will process the data in various ways depending on the parameters set (ex: word wrapping and email validity). So, you simply have to send the class the relevant information and it will take care of the rest. Below is an example piece of code used for sending a single email.

    ee()->load->library('email');
    ee()->load->helper('text');

    ee()->email->set_wordwrap(TRUE);
    ee()->email->set_mailtype('html');

    ee()->email->from($from);
    ee()->email->to($recipient);
    ee()->email->subject($email_subject);
    ee()->email->message(entities_to_ascii($email_msg));
    ee()->email->send();

### Properties

[TOC=4]

#### `$charset`

Specifies the character set of the email. Since ExpressionEngine uses the character set in the Control Panel and in the default templates, the default is set for UTF-8. However, in certain circumstances you might wish to change this.

NOTE: **Note:** There are email clients that will ignore any character specified in an email and will attempt to auto-detect, sometimes erroneously.

#### `$debug`

Specifies whether to enable debugging mode for the class. If emails are not being sent, then it might be prudent to set this to `TRUE` and see if any errors are being sent by the Email class.

#### `$mailtype`

Specifies whether to send this email as a simple text email or an `HTML` email. The default type is `'text'`, so you only need to set this parameter when sending HTML email (`'html'`).

#### `$validate`

Specifies whether to validate all emails sent to the class. By default this is `FALSE`, and it must be set to TRUE to perform the validation.

#### `$wordwrap`

Specifies whether the words in the email should be wrapped after a certain number of characters. By default, this is set to `FALSE`, so you only need to set its value if you want to use wordwrap.

#### `$wrapchars`

Specifies the number of characters to wrap at, if `Email::$wordwrap` is set to true.

### Methods

[TOC=4]

#### `Email::from($from[, $name = ''[, $return_path = NULL]])`

| Parameter     | Type     | Description                                |
| ------------- | -------- | ------------------------------------------ |
| \$from        | `String` | The email address of the sender            |
| \$name        | `String` | The name of the sender                     |
| \$return_path | `String` | Email address to redirect undelivered mail |
| Returns       | `Object` | Email class object                         |

The method for specifying the sender of the email:

    ee()->email->from('you@example.com', 'Your Name');

#### `reply_to($replyto[, $name = ''])`

| Parameter | Type     | Description                        |
| --------- | -------- | ---------------------------------- |
| \$replyto | `String` | The email address for the reply-to |
| \$name    | `String` | The name of the sender             |
| Returns   | `Object` | Email class object                 |

The method for specifying the Reply-To header of the email:

    ee()->email->reply\_to('you@example.com', 'Your Name');

#### `to($to)`

| Parameter | Type     | Description                                        |
| --------- | -------- | -------------------------------------------------- |
| \$to      | `Mixed`  | Array or comma separated string of email addresses |
| Returns   | `Object` | Email class object                                 |

The method for specifying the general recipient(s) of the email:

    ee()->email->to('someone@example.com');
    ee()->email->to('one@example.com, two@example.com, three@example.com');

#### `cc($cc)`

| Parameter | Type     | Description                                        |
| --------- | -------- | -------------------------------------------------- |
| \$cc      | `Mixed`  | Array or comma separated string of email addresses |
| Returns   | `Object` | Email class object                                 |

The method for specifying the recipient(s) receiving a carbon copy of the email:

    ee()->email->cc('someone@example.com');

#### `bcc($bcc[, $limit = ''])`

| Parameter | Type      | Description                                                 |
| --------- | --------- | ----------------------------------------------------------- |
| \$bcc     | `Mixed`   | Array or comma separated string of email addresses          |
| \$limit   | `Integer` | Number of emails to send at a time, will batch if necessary |
| Returns   | `Object`  | Email class object                                          |

The method for specifying the recipient(s) receiving a blind carbon copy of the email:

    ee()->email->bcc('someone@example.com', 200);

#### `subject($subject)`

| Parameter | Type     | Description          |
| --------- | -------- | -------------------- |
| \$subject | `String` | Subject of the email |
| Returns   | `Object` | Email class object   |

Sets the email subject:

    ee()->email->subject('This is my subject');

#### `message($body)`

| Parameter | Type     | Description        |
| --------- | -------- | ------------------ |
| \$body    | `String` | The message body   |
| Returns   | `Object` | Email class object |

Sets the email message body:

    ee()->email->message('This is my message');

#### `set_alt_message($str = '')`

| Parameter | Type     | Description                                                                             |
| --------- | -------- | --------------------------------------------------------------------------------------- |
| \$str     | `String` | Alternative message with no HTML formatting sent to people who do not accept HTML email |
| Returns   | `Object` | Email class object                                                                      |

This is an optional message string which can be used if you send HTML formatted email. It lets you specify an alternative message with no HTML formatting which is added to the header string for people who do not accept HTML email. If you do not set your own message CodeIgniter will extract the message from your HTML email and strip the tags:

    ee()->email->set_alt_message('This is the alternative message');

NOTE: **Note:** If you are using data from a channel entry and not sending an HTML email, then you should use the `entities_to_ascii()` method (text helper) to convert any HTML entities back into ASCII characters before sending the message to the class.

#### `attach($filename, $disposition = '', $newname = NULL, $mime = '')`

| Parameter     | Type      | Description                                                                                                                                                                    |
| ------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \$filename    | `String`  | The full local path to the file to attach                                                                                                                                      |
| \$disposition | `String`  | Optionally set the HTTP header [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) for the attachment (default: `attachment`) |
| \$newname     | `String`  | Optionally set a different name for the attachment  (default same as $filename)                                                                                                |
| \$mime        | `String`  | Optionally set the HTTP header [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) for the attachment                                       |
| Returns       | `Object`  | Email class objects                                                                                                                                                            |

Adds an attachment to a message:

    ee()->email->attach($filename);

#### `send($auto_clear = TRUE)`

| Parameter    | Type      | Description                                                                            |
| ------------ | --------- | -------------------------------------------------------------------------------------- |
| \$auto_clear | `Boolean` | When set to `FALSE` will prevent parameters from being cleared after sending the email |
| Returns      | `Boolean` | `TRUE` if successful, `FALSE` otherwise                                                |

The Email sending method:

    ee()->email->send();

NOTE: **Note:** In order to use the `print_debugger()` method, you need to avoid clearing the email parameters.

#### `print_debugger($include = array('headers', 'subject', 'body'))`

| Parameter | Type     | Description                                                                                                 |
| --------- | -------- | ----------------------------------------------------------------------------------------------------------- |
| \$include | `Array`  | Optionally specify which parts of the message should be printed. Valid options are: headers, subject, body. |
| Returns   | `String` | String of data requested                                                                                    |

Returns a string containing any server messages, the email headers, and the email message:

    ee()->email->print_debugger();

#### `clear($clear_attachments = FALSE)`

| Parameter           | Type      | Description                                                                     |
| ------------------- | --------- | ------------------------------------------------------------------------------- |
| \$clear_attachments | `Boolean` | If set to `TRUE` attachments will be cleared out, otherwise they're left alone. |
| Returns             | `Object`  | Email class object                                                              |

Clears out all the message-specific parameters set either by property or method (text, recipient, subject, etc.), but not including the overall parameters like the charset, wordwrap, mailtype, and the sending method (smtp, etc.):

    ee()->email->clear();

## Sending Multiple Emails

If you are sending multiple emails in a method either for notifications or because each message has a separate message, then you should use the `Email::clear` method between each email to reset certain variables in the class. If you do not, then it is possible that the emails will not be sent or sent incorrectly:

    ee()->load->library('email');
    ee()->load->helper('text');

    ee()->email->set_wordwrap(TRUE);
    ee()->email->set_mailtype('html');
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
