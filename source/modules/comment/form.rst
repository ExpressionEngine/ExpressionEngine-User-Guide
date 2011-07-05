Comment Submission Form
=======================

``{exp:comment:form} {/exp:comment:form}``

The comment form is created very similar to a standard web form, only
you don't specify the opening and closing form tags. There are a few
variables that are required in order to enable people's personal
information (name, email, url, etc.) to appear in the form. Here's how
the comment form is typically created::

	{exp:comment:form channel="news" preview="channel/preview"}              {if logged_out}         <label for="name">Name:</label> <input type="text" name="name" value="{name}" size="50" /><br />          <label for="email">Email:</label> <input type="text" name="email" value="{email}" size="50" /><br />          <label for="location">Location:</label> <input type="text" name="location" value="{location}" size="50" /><br />          <label for="url">URL:</label> <input type="text" name="url" value="{url}" size="50" /><br />      {/if}          <label for="comment">Comment:</label><br />      <textarea name="comment" cols="70" rows="10">{comment}</textarea>     <label><input type="checkbox" name="save_info" value="yes" {save_info} /> Remember my personal information</label><br />      <label><input type="checkbox" name="notify_me" value="yes" {notify_me} /> Notify me of follow-up comments?</label><br />           {if captcha}         <label for="captcha">Please enter the word you see in the image below:</label><br />          <p>{captcha}<br />         <input type="text" name="captcha" value="{captcha_word}" maxlength="20" /></p>     {/if}          <input type="submit" name="submit" value="Submit" />     <input type="submit" name="preview" value="Preview" />      {/exp:comment:form}

Parameters
----------


entry\_id=
~~~~~~~~~~

::

	entry_id="24"

You can hard code the comment form tag to display a comment form for a
specific channel entry by its entry ID.

**Note:** This parameter takes precedence over any entry specified
dynamically in the URL, so when using this parameter you will want to
make sure it is clear to the user which entry the displayed comment form
belongs to.

preview=
~~~~~~~~

::

	preview="channel/preview"

This is a **required** parameter if you are using comment previews
indicating which template should be used for comment previews. Like
other "path" variables in ExpressionEngine you will use the Template
Group/Template name. More on previewing can be found on the `Comment
Previewing <preview.html>`_ page.

url\_title=
~~~~~~~~~~~

::

	url_title="my_wedding"

You can hard code the comment for tag to display a comment form for a
specific channel entry by its URL title.

**Note:** This parameter takes precedence over any entry specified
dynamically in the URL, so when using this parameter you will want to
make sure it is clear to the user which entry the displayed comment form
belong to.

channel=
~~~~~~~~

::

	channel="news"

With this parameter you can specify exactly which channel you want the
submitted comment associated to. This is an important, but optional,
parameter.

If you link to your comment form page using the entry's URL Title, then
you are **strongly encouraged** to include this parameter in your tag.

Because you can have the same URL Title in different channels, using
this parameter will ensure that the comment submitted will be associated
with the correct entry. Without this parameter, it is possible that the
comment could be associated with an entry in a different channel that
happens to have the same URL Title.

form\_class=
~~~~~~~~~~~~

::

	form_class="news_comment_form"

With this parameter, you can specify the css class you want the form to
have, enabling fine-grained styling of the comment form.

form\_id=
~~~~~~~~~

::

	form_id="news_comment_form"

With this parameter, you can specify the css id you want the form to
have. The default value is 'comment\_form'

return=
~~~~~~~

::

	return="template_group/template/url_title"

This parameter allows you to define where the user will be returned
after submitting a comment. The parameter can be defined in two ways:

#. Use the standard Template\_Group/Template syntax to specify where to
   return the user. For instance, if you want the user to be returned to
   the "local" Template in the "news" Template Group, you would use:
   return="news/local"
#. Use a full URL. For example: return="http://example.com/return.html"

If this parameter is not defined, they will be returned to the form
page.
Conditionals
------------


logged\_out
~~~~~~~~~~~

::

	{if logged_out}

The conditional variable {if logged\_out} allows the system to show the
short form (textarea only) if the user is a logged in member. We
recommend you use the form this way because if a member is logged in,
their personal data is fetched automatically.

captcha
~~~~~~~

::

	{if captcha}

As noted in the `captcha
section <../../general/captchas.html#thecode>`_, the contents of the
conditional ({if captcha}) tag will only appear if you have the CAPTCHA
preference turned on for comments in the channel the entry is associated
with.

comments\_expired
~~~~~~~~~~~~~~~~~

::

	{if comments_expired}

If commenting has expired (and expiration is not set to be `overridden
by moderation <control_panel/index.html#settings>`_), the contents of
this conditional will replace all other tag contents.

comments\_disabled
~~~~~~~~~~~~~~~~~~

::

	{if comments_disabled}

If commenting has been disabled, the contents of this conditional will
replace all other tag contents.

Notes
-----

Notice the variables in the "value" form fields? These allow us to show
the user's information in the form automatically if they click the
"remember personal info" option.

This form should be placed on a "single-entry" type page such as a
comments page, of course.
