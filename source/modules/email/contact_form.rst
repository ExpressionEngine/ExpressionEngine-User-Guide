Email Contact Form
==================

.. contents::

.. note:: The Email Module is not installed by default, so before using
   these tags make sure it is installed via the `Modules
   Page <../../cp/add-ons/module_manager.html>`_ at :menuselection:`Admin --> Modules`.

The purpose of this tag is to create a contact form on one of your pages
that your users can use to send you email. To show your contact form use
this tag pair::

	{exp:email:contact_form}  {/exp:email:contact_form}

The contact form is created similar to a standard web form, only you
**do not** specify the opening and closing form tags; ExpressionEngine
takes care of those for you. There are a few variables that are
available in order to auto-fill fields in the form, and also a few tag
parameters to specify form handling and hidden recipients. Here's an
example showing how you might typically create a contact form::

	{exp:email:contact_form user_recipients="false" recipients="admin@example.com" charset="utf-8"}
		<h2>Support Form</h2>
		<p>
			<label for="from">Your Email:</label><br />
			<input type="text" id="from" name="from" size="40" maxlength="35" value="{member_email}" />
		</p>
		<p>
			<label for="subject">Subject:</label><br />
			<input type="text" id="subject" name="subject" size="40" value="Contact Form" />
		</p>
		<p>
			<label for="message">Message:</label><br />
			<textarea id="message" name="message" rows="18" cols="40">
				Support Email from: {member_name}
				Sent at:  {current_time format="%Y %m %d"}
			</textarea>
		</p>
		<p>
			<input name="submit" type='submit' value='Submit Form' />
		</p>
	{/exp:email:contact_form}


Parameters
----------

charset=
~~~~~~~~

::

	charset="utf-8"

This allows you to set the character set of the email being sent. Use
this if your form's template is using a character set other than
iso-8859-1.

name=
~~~~~

::

	name="myForm"

This allows you to set a name= attribute for the form. Keep in mind that
name= is deprecated in XHTML.

recipients=
~~~~~~~~~~~

::

	recipients="admin@example.com"

The recipients parameter allows you to specify the email address of the
person (or persons) you want to receive the email. If you have more than
one recipient, please separate each email address with a commas::

	recipients="admin@example.com,ceo@example.com,president@example.com"

.. note:: In the event that recipients are specified with this parameter
   and the regular "To:" field is *also* filled out, the recipients
   specified with this parameter will be mailed using BCC (Blind Carbon
   Copy) so that the "To:" recipient does not see those "hidden" email
   recipients.

redirect=
~~~~~~~~~

::

	redirect="5"

After the form is submitted, the user will be shown a message stating
that the submission was successful. With this parameter you can
determine how long ExpressionEngine should display the message. The
value for this parameter is set in the number of seconds. For instance,
if you want the message displayed for six seconds, you would use

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

This parameter lets you specify a URL where the user should be directed
after the form is submitted. Upon submission, the user is presented with
a standard "thank you" message and a link. If this parameter is **not**
used, then the link will point to the page they were on prior to
arriving at the email form. ::

	return="http://example.com/index.php"

If used with the redirect="none" parameter, the link text can be
specified by adding the pipe character and the desired link text. If you
are specifying only the link text, then you must precede it by the pipe
character::

	return="http://example.com/index.php|Return to Home Page"

::

	return="|Return to the Site"

user\_recipients=
~~~~~~~~~~~~~~~~~

::

	user_recipients="true" ``user_recipients="false"``

The user\_recipients parameter specifies whether or not the form will
accept having the user input the recipients via the 'to' field in the
form. If set to true, then you can create a 'to' form field where the
user can input the addresses where the email should be sent.

form\_class=
~~~~~~~~~~~~

::

	form_class="my_form"

With this parameter, you can specify the css class you want the form to
have, enabling fine-grained styling of the form.

form\_id=
~~~~~~~~~

::

	form_id="contact_form"

With this parameter, you can specify the css id you want the form to
have. The default value is 'contact\_form'.

Variables
---------


author\_email
~~~~~~~~~~~~~

::

	{author_email}

If you create a permalink to a page containing the
{exp:email:contact\_form} tag, then the form allows the use of this
variable to put in the email address of the author who wrote the linked
entry. This feature allows the creation of a "contact author" page.

author\_name
~~~~~~~~~~~~

::

	{author_name}

If you create a permalink to a page containing the
{exp:email:contact\_form} tag, then the form allows the use of this
variable to put in the screen name of the author who wrote the linked
entry. This feature allows the creation of a "contact author" page.

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

Form Fields
-----------


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

The setting to disable or enable CAPTCHA for the contact form can be
found in the `Email
Configuration <../../cp/admin/system_admin/email_configuration.html>`_
preferences.

from
~~~~

::

	<input type="text" name="from" size="40" />

Email address of person who is sending the email. You must include this
form field, even if it is just a hidden field.

message
~~~~~~~

::

	<textarea name="message" rows="10" cols="40"></textarea>

Main message of the email. You must include this form field, even if it
is just a hidden field.

You may specify multiple fields by making the name= attribute an array
by using "message[]". For example::

	Home Phone: <input type="text" name="message[]" size="12" maxlength="15" /><br /> <br />
	Cell Phone: <input type="text" name="message[]" size="12" maxlength="15" />

name
~~~~

::

	<input type="text" name="name" size="40" />

Name of person who is sending the email.

required
~~~~~~~~

::

	<textarea name="required" rows="5" cols="40" readonly="readonly"></textarea>

This field allows you to have required information that is included at
top of each email. Useful for support emails where the information can
be readonly or hidden.

You may specify multiple fields by making the name= attribute an array
by using "required[]". For example::

	Age: <input type="text" name="required[]" size="3" maxlength="3" /><br /> <br />
	Bio: <textarea name="required[]" rows="5" cols="40"></textarea>

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

Email address to which the email is being sent. Multiple email addresses
may be specified by separating them with a comma. You must include this
form field, even if it is just a hidden field. This data may also be
specified with the `recipients= <#par_recipients>`_ parameter of the
tag.

.. warning:: If you leave this field open to user input, you are
   potentially giving spammers an easy way to send anonymous emails. If you
   allow users to access this field, consider using a <select> field to
   limit the email address to specific choices. Further, you should enable
   CAPTCHAs to help prevent automated abuse.
