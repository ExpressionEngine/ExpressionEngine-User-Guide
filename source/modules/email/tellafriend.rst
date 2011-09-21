##################
Tell-A-Friend Form
##################

.. contents::
   :local:
   :depth: 1
   
************
Introduction
************

The purpose of this tag is to display a form used to share an entry with
someone by sending them an email about it. To show your tell-a-friend
form use this tag pair::

	{exp:email:tell_a_friend} {/exp:email:tell_a_friend}

The tell-a-friend form is created similar to a standard web form, only
you don't specify the opening and closing form tags; ExpressionEngine
takes care of those for you.

There are numerous variations possible for this feature (using
parameters and variables described below). Here's an example showing how
a tell-a-friend form might be created::

	{exp:email:tell_a_friend charset="utf-8" allow_html='no'}
		<p>
			<label for="from">Your Email: </label><br />
			<input type="text" id="from" name="from" size="40" maxlength="35" value="{member_email}" />
		</p>
		<p>
			<label for="name">Your Name: </label><br />
			<input type="text" id="name" name="name" size="40" maxlength="35" value="{member_name}" />
		</p>
		<p>
			<label for="to">To: </label><br />
			<input type="text" id="to" name="to" size="40" maxlength="35" />
		</p>
		<p>
			<label for="subject">Subject: </label><br />
			<input type="text" id="subject" name="subject" size="40" value="Entry by: {author}" />
		</p>
		<p>
			<label for="message">Message: </label><br />
			<textarea id="message" name="message" readonly="readonly" rows="18" cols="40">
				{summary}
				{body}
				{permalink="template_group/template"}
			</textarea>
		</p>
		<p>
			<input name="submit" type='submit' value='Submit Form' />
		</p>
	{/exp:email:tell_a_friend}

.. important:: Make sure to use the correct template_group and template so the
permalink that is sent in the tell-a-friend email is correct


*********************************
Linking to the Tell-a-Friend page
*********************************

In order to use the Tell-a-Friend feature, you will need to link to it.
First, create a Template and place the Tell-a-Friend form in this
Template.

You will then need to add a link to your new Tell-a-Friend Template from
within your channel entries. In your channel tag {exp:channel:entries}
you can point to it using the permalink variable::

	<a href="{permalink='channel/friend'}">Tell-a-Friend</a>

In the above example, the Template "friend" contains the Tell-a-Friend
form.

**********
Parameters
**********

.. contents::
   :local:

allow\_html=
~~~~~~~~~~~~

::

	allow_html="yes" ``allow_html="<p>,<a>"`` ``allow_html="no"``

The channel entry variables (see Channel Variables below) are formatted
according to the formatting specified when the entry was submitted, so
there is a possibility of HTML being output. This parameter allows you
the choice of whether to keep the HTML in the form fields, allow only
certain HTML tags (by specifying the tags as a comma-separated list), or
allow no HTML to remain. If HTML is left in, then the email will be
automatically sent as an HTML email.

charset=
~~~~~~~~

::

	charset="utf-8"

This allows you to set the character set of the email being sent. Use
this if your form's template is using a character set other than
iso-8859-1.

recipients=
~~~~~~~~~~~

::

	recipients="admin@example.com"

You may specify hidden recipients for the form. This is who will receive
the submitted information. You may specify more than one recipient by
separating the email addresses with commas::

	recipients="admin@example.com,ceo@example.com,president@example.com"

**Note**: In the situation where recipients are specified with this
parameter and the regular "To:" field is *also* filled out, the
recipients specified with this parameter will be mailed using BCC (Blind
Carbon Copy) so that the "To:" recipient does not see those "hidden"
email recipients.

redirect=
~~~~~~~~~

::

	redirect="5"

After the form is submitted, the user will be shown a page stating that
the submission was successful. With this parameter, you can determine
how long ExpressionEngine displays that page. The value for this
parameter is set in the number of seconds. For instance, if you want the
message displayed for six seconds, you would use

::

	redirect="6"

You may also set ExpressionEngine to not redirect the user after they
reach the message page. In that case, the user would simply remain on
the message page. To do this, set the value to none::

	redirect="none"

replyto=
~~~~~~~~

::

	replyto="yes"

By default the email address sending the email will be put in the From
header for the email. If this parameter is set to "yes", then that email
address will be put into the Reply-To field and the site's webmaster
email will be put in the From header. This is necessary at times because
certain email servers will not send an email with an address not from
its domain, so ExpressionEngine will use the site's webmaster email
address to get past this restriction while still allowing any replies to
go to the sender of the email.

return=
~~~~~~~

::

	return="http://example.com/index.php"

This parameter lets the admin specify to where the user is directed
after the form is submitted. Upon submission, the user is presented with
a standard "thank you" message and a link. The return parameter lets the
location, as well as the text, for the link be specified. If this
parameter is **not** specified, then the link will point to the page
they were on prior to arriving at the email form and the text for the
link will be the Site Name.

The return URL and link text can be specified by separating the two
pieces of information with the pipe character. If you are only
specifying the second piece (the link text) then you must preceed it by
the pipe character. For example, these would all be legitimate examples
of the parameter::

	return="http://example.com/index.php"

::

	return="http://example.com/index.php|Home Page"

::

	return="|Return to the Entry"

status=
~~~~~~~

::

	status="open"

The channel `status <../../cp/admin/content_admin/statuses.html>`_ you
would like entries restricted to. This is useful if you will be
displaying entries with a status other than "open". You can choose
multiple statuses using a pipe::

	status="draft|reviewed|published"

Or exclude statuses using "not"

::

	status="not submitted|processing|closed"

channel=
~~~~~~~~

::

	channel="news"

Specify from which channel you would like to allow Tell-a-Friend emails
to be sent. This parameter is useful if you have multiple entries with
the same URL Title in different channels. Unless you restrict this EE
tag to a particular channel then you might get Tell-a-Friend forms for
all entries matching the URL Title.

form\_class=
~~~~~~~~~~~~

::

	form_class="tellafriend_form"

With this parameter, you can specify the css class you want the form to
have, enabling fine-grained styling of the form.

form\_id=
~~~~~~~~~

::

	form_id="tellafriend_form"

With this parameter, you can specify the css id you want the form to
have. The default value is 'tellafriend\_form'

******************
Channel Parameters
******************

While some of the `Channel Entries Tag
Parameters <../../modules/channel/parameters.html>`_ are also available
to the Tell-a-Friend form, most of them will not be beneficial to use in
that context. One exception that can be valuable is
show\_future\_entries=, which would let you use the Tell-a-Friend form
with entries dated in the future.

*********
Variables
*********

.. contents::
   :local:

member\_email
~~~~~~~~~~~~~

::

	{member_email}

If a user is logged in, then it will display their email address as
recorded in their member profile.

member\_name
~~~~~~~~~~~~

::

	{member_name}

If a user is logged in, then it will display their screen name as
recorded in their member profile.

*****************
Channel Variables
*****************

::

	{title}     {permalink}     {author}     {body}     et cetera...

Many of the `Channel Entries Tag
Variables <../../modules/channel/variables.html>`_ are available for the
tell-a-friend form. Notable exceptions are all category related
variables and custom member fields.

.. note:: To ease the useability of this form with multiple channels,
   which will possibly contain different channel fields, all Channel
   Variables that are unfillable will be removed from the form.

For example, if you have a channel with the fields "summary" and "body",
and then another channel with the fields "ingredients" and "directions",
you will be able to put the following in the "message" textarea:
{summary} {body} {ingredients} {directions}. If an entry linking to the
tell-a-friend form is from channel one, then the first two fields will
be filled and the second two will be ignored. If an entry from channel 2
is linking to the tell-a-friend form, then the first two will be ignored
and the second two will be filled out.

***********
Form Fields
***********

.. contents::
   :local:

captcha
~~~~~~~

::

	<input type="text" name="captcha" value="" maxlength="20" />

The CAPTCHA input for the form. It is usually used with a conditional so
that it is only displayed if necessary::

	{if captcha}
		<p>Please enter the word you see in the image below:</p>
		<p>{captcha}<br /> <input type="text" name="captcha" value="" maxlength="20" /></p>
	{/if}

The setting to disable or enable CAPTCHA for the tell-a-friend form can
be found in the `Email
Configuration <../../cp/admin/system_admin/email_configuration.html>`_
preferences.

from
~~~~

::

	<input type="text" name="from" size="40" />

Email address of person who is sending the email.

.. warning:: If you leave this field open to user input, be aware that
   it is a potential for abuse by spammers, who could use your form
   pretending to be someone they are not (i.e. keying in admin@paypal.com).
   If the user is allowed to modify both this and the message field, you
   have essentially created a
   `phishing <http://dictionary.reference.com/search?q=phishing>`_ form
   ripe for abuse.

message
~~~~~~~

::

	<textarea name="message" rows="10" cols="40"></textarea>

Main message of the email. If you do not wish to have the tell-a-friend
message modified then we suggest using a hidden form field or setting
the textarea as read only (ex: <textarea
readonly="readonly"></textarea>). You must include this form field, even
if it is just a hidden field.

.. warning:: If you leave this field open to user input, be aware that
   it is a potential for abuse by spammers, who could use your form for
   email advertising. If the user is allowed to modify both this and the
   from field, you have essentially created a
   `phishing <http://dictionary.reference.com/search?q=phishing>`_ form
   ripe for abuse.

name
~~~~

::

	<input type="text" name="name" size="40" />

Name of person who is sending the email.

required
~~~~~~~~

::

	<textarea name="required" rows="5" cols="40" readonly="readonly"></textarea>

Field allows you to have required information that is included at top of
each email message. Useful for support emails where the information can
be read only or hidden.

subject
~~~~~~~

::

	<input type="text" name="subject" size="40" />

Subject of the email that is being sent. You must include this form
field, even if it is just a hidden field.

to
~~

::

	<input type="text" name="to" size="40" />

Email address where the email is being sent. Multiple email addresses
may be specified by separating them with a comma. You must include this
form field, even if it is just a hidden field. This data may also be
specified with the `recipients=`_ parameter of the
tag.
