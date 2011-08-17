Email Class
===========

.. contents::
	:local:

Calling the Email Class
-----------------------

ExpressionEngine uses the Email class for the sending of email via
whatever protocol is specified in the site's Email Preferences. This
class is a library, so you have to load the Email library before using
it.

::

    $this->EE->load->library('email'); 

Sending an Email
----------------

The Email class will automatically create all email headers and will
process the data in various ways depending on the parameters set (ex:
word wrapping and email validity). So, you simply have to send the class
the relevant information and it will take care of the rest. Below is an
example pice of code used for sending a single email.

::

    $this->EE->load->library('email');
    $this->EE->load->helper('text'); 

    $this->EE->email->wordwrap = true;
    $this->EE->email->mailtype = 'text';    
    $this->EE->email->from($from);
    $this->EE->email->to($receipient); 
    $this->EE->email->subject($email_subject);
    $this->EE->email->message(entities_to_ascii($email_msg));
    $this->EE->email->Send();

First, load the email library and the text helper. Second, there are a
few variables that you may wish to set.

charset
~~~~~~~

Specifies the character set of the email. Since ExpressionEngine uses
the character set in the Control Panel and in the default templates, the
default is set for UTF-8. However, in certain circumstances you might
wish to change this. Note: There are email clients that will ignore any
character specified in an email and will attempt to auto-detect,
sometimes erroneously.

debug
~~~~~

Specifies whether to enable debugging mode for the class. If emails are
not being sent, then it might be prudent to set this to TRUE and see if
any errors are being sent by the Email class.

mailtype
~~~~~~~~

Specifies whether to send this email as a simple text email or an HTML
email. The default type is 'text', so you only need to set this
parameter when sending HTML email ('html').

validate
~~~~~~~~

specifies whether to validate all emails sent to the class. By default
this is FALSE, and it must be set to TRUE to perform the validation.

wordwrap
~~~~~~~~

Specifies whether the words in the email should be wrapped after a
certain number of characters. By default, this is set to false, so you
only need to set its value if you want to use wordwrap.

wrapchars
~~~~~~~~~

Specifies the number of characters to wrap at, if **wordwrap** is set to
true.

Third, after setting any class variables, you can proceed to send the
class the sender, recipient(s), subject, and message for the email. The
values for the various recipient functions can be either sent as an
array with each member of the array being an email address *or* a string
with multiple email addresses separated by commas. The to, subject,
message functions must be sent as strings through.

$this->EE->email->from($from, $name)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The function for specifying the sender of the email. The first variable
is the email address of the sender, and the optional second parameter is
the name/title of the sender. If you send the first variable in the form
of 'webmaster@example.com <Site Webmaster>, then the function will parse
the email address and name for you.

$this->EE->email->reply\_to($reply\_to)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The function for specifying the Reply-To header of the email. The
variable is the email address(es) that when a person replies to this
email, it will be in the To box automatically.

$this->EE->email->to($recipient)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The function for specifying the general recipient(s) of the email. The
variable is the email address(es) that are to receive the email, either
in an array or a comma separated list.

$this->EE->email->cc($cc\_emails)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The function for specifying the recipient(s) receiving a carbon copy of
the email. The variable should be set as an array or a comma separated
list.

$this->EE->email->bcc($bcc\_emails, $limit)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The function for specifying the recipient(s) receiving a blind carbon
copy of the email. The first variable should be set as an array or a
comma separated list. The second, optional variable will allow you to
determine a batch side for any BCC emails. Use it if you are sending a
large amount of emails via BCC to ease the load on your server.

Next, use the **$this->EE->email->subject()** and
**$this->EE->email->message()** functions to set the subject and message
of the email.

***NOTE:** If you are using data from a channel entry and not sending an
HTML email, then you should use the entities\_to\_ascii() function (text
helper) to convert any HTML entities back into ASCII characters before
sending the message to the class.*

Finally, to send the message, call the $this->EE->email->Send()
function, and the class will process and send the email. If the email is
not sent or there was an error, then this function will return false.

Sending Multiple Emails
-----------------------

If you are sending multiple emails in a function either for
notifications or because each message has a separate message, then you
must use the $this->EE->email->initialize() function between each email
to reset certain variables in the class. If you do not, then it is
possible that the emails will not be sent or sent incorrectly.

::

    $this->EE->load->library('email');
    $this->EE->load->helper('text'); 

    $this->EE->email->wordwrap = true;
    $this->EE->email->mailtype = 'text';

    foreach($member_emails as $username => $from)
    {
        $this->EE->email->initialize()
        $this->EE->email->from($from);
        $this->EE->email->to($recipient); 
        $this->EE->email->subject("Account Expiration: {$username}");
        $this->EE->email->message(entities_to_ascii($message));
        $this->EE->email->Send();
    }

