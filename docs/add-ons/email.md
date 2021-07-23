---
lang: ee
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Email

[TOC]

ExpressionEngine includes an Email Module in order to provide the ability to create contact forms and tell-a-friend forms.

- The [Contact Form](#email-contact-form) tag allows your visitors to send you email directly from your site.
- The [Tell-a-Friend](#tell-a-friend-form) tag allows your visitors to share your content via email with someone else.

NOTE: **Note:** The Email Module is not installed by default, so before using these tags make sure it is installed via the `/cp/addons/index` at `Developer --> Add-Ons`.

## Email Contact Form

The purpose of this tag is to create a contact form on one of your pages that your users can use to send you email. To show your contact form use this tag pair:

    {exp:email:contact_form}  {/exp:email:contact_form}

The contact form is created similar to a standard web form, only you **do not** specify the opening and closing form tags; ExpressionEngine takes care of those for you. There are a few variables that are available in order to auto-fill fields in the form, and also a few tag parameters to specify form handling and hidden recipients. Here's an example showing how you might typically create a contact form:

    {exp:email:contact_form user_recipients="no" recipients="admin@example.com" charset="utf-8"}
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

## Parameters

[TOC=3]

### `charset=`

    charset="utf-8"

This allows you to set the character set of the email being sent. Use this if your form's template is using a character set other than iso-8859-1.

### `name=`

    name="myForm"

This allows you to set a name= attribute for the form. Keep in mind that name= is deprecated in XHTML.

### `recipients=`

This optional parameter allows you to specify an email address to receive the email:

    recipients="admin@example.com"

To specify more than one recipient, separate each email address with a comma:

    recipients="admin@example.com,ceo@example.com,president@example.com"

NOTE: **Note:** In the event that recipients are specified with this parameter and the regular "To:" field is _also_ filled out, the recipients specified with this parameter will be mailed using BCC (Blind Carbon Copy) so that the "To:" recipient does not see those "hidden" email recipients.

### `redirect=`

    redirect="5"

After the form is submitted, the user will be shown a message stating that the submission was successful. With this parameter you can determine how long ExpressionEngine should display the message. The value for this parameter is set in the number of seconds. For instance, if you want the message displayed for six seconds, you would use

    redirect="6"

You may also set ExpressionEngine to not redirect the user after they reach the message page. In that case, the user would simply remain on the message page. To do this, set the value to none:

    redirect="none"

### `replyto=`

    replyto="yes"

By default the email address sending the email will be put in the From header for the email. If this parameter is set to "yes", then that email address will be put into the Reply-To field and the site's webmaster email will be put in the From header. This is necessary at times because certain email servers will not send an email with an address not from its domain, so ExpressionEngine will use the site's webmaster email address to get past this restriction while still allowing any replies to go to the sender of the email.

### `return=`

    return="email/thanks"

This parameter lets you specify a path (or full URL) where the user should be directed after the form is submitted. Upon submission, the user is presented with a standard "thank you" message and a link. If this parameter is **not** used, then the link will point to the page they were on prior to arriving at the email form.

    return="email/thanks"

If used with the redirect="none" parameter, the link text can be specified by adding the pipe character and the desired link text. If you are specifying only the link text, then you must precede it by the pipe character:

    return="about|Return to About Page"

    return="|Return to the Site"

### `preview=`

    preview="about/contact-preview"

Specify a URL where the user can preview their message before sending it. This can be used in conjunction with the [markdown=](#markdown) parameter.

### `markdown=`

    markdown="yes"

Optionally enable [Markdown](https://daringfireball.net/projects/markdown/) processing for [message](#message) of the contact form.

### `user_recipients=`

    user_recipients="yes"

    user_recipients="no"

The user_recipients parameter specifies whether or not the form will accept having the user input recipients via a 'to' field in the form. If set to true, then you can create a form field with the name "to" in which a user can input addresses where the email should be sent. The default value is "no".

### `form_class=`

    form_class="my_form"

With this parameter, you can specify the css class you want the form to have, enabling fine-grained styling of the form.

### `form_id=`

    form_id="contact_form"

With this parameter, you can specify the css id you want the form to have. The default value is 'contact_form'.

## Variables

[TOC=3]

### `{author_email}`

If you create a permalink to a page containing the {exp:email:contact_form} tag, then the form allows the use of this variable to put in the email address of the author who wrote the linked entry. This feature allows the creation of a "contact author" page.

### `{author_name}`

If you create a permalink to a page containing the {exp:email:contact_form} tag, then the form allows the use of this variable to put in the screen name of the author who wrote the linked entry. This feature allows the creation of a "contact author" page.

### `{member_email}`

If a user is logged in, then it will display their email address as recorded in their member profile.

### `{member_name}`

If a user is logged in, then it will display their screen name as recorded in their member profile.

## Form Fields

[TOC=3]

### `captcha`

    <input type="text" name="captcha" value="" maxlength="20" />

The CAPTCHA input for the form. It is usually used with a conditional so that it is only displayed if necessary:

    {if captcha}
        <p>Please enter the word you see in the image below:</p>
        <p>{captcha}<br /> <input type="text" name="captcha" value="" maxlength="20" /></p>
    {/if}

The setting to disable or enable CAPTCHA for the contact form can be found in the [Email Configuration](control-panel/settings/email.md) preferences.

### `from`

    <input type="text" name="from" size="40" />

Email address of person who is sending the email. You must include this form field, even if it is just a hidden field.

### `message`

    <textarea name="message" rows="10" cols="40"></textarea>

Main message of the email. You must include this form field, even if it is just a hidden field.

You may specify multiple fields by making the name= attribute an array by using "message\[\]". For example:

    Home Phone: <input type="text" name="message[]" size="12" maxlength="15" /><br /> <br />
    Cell Phone: <input type="text" name="message[]" size="12" maxlength="15" />

### `name`

    <input type="text" name="name" size="40" />

Name of person who is sending the email.

### `required`

    <textarea name="required" rows="5" cols="40" readonly="readonly"></textarea>

This field allows you to have required information that is included at top of each email. Useful for support emails where the information can be readonly or hidden.

You may specify multiple fields by making the name= attribute an array by using "required\[\]". For example:

    Age: <input type="text" name="required[]" size="3" maxlength="3" /><br /> <br />
    Bio: <textarea name="required[]" rows="5" cols="40"></textarea>

### `subject`

    <input type="text" name="subject" size="40" />

Subject of the email that is being sent. You must include this form field, even if it is just a hidden field.

### `to`

    <input type="text" name="to" size="40" />

Email address to which the email is being sent. Multiple email addresses may be specified by separating them with a comma. You must include this form field, even if it is just a hidden field. This data may also be specified with the [recipients=](#recipients) parameter of the tag.

WARN: **Warning:** If you leave this field open to user input, you are potentially giving spammers an easy way to send anonymous emails. If you allow users to access this field, consider using a &lt;select&gt; field to limit the email address to specific choices. Further, you should enable CAPTCHAs to help prevent automated abuse.

### `Preview`

Occasionally you'll want to provide a way for users to preview their email message before sending it. You'll start by specifying a [preview=](#preview) parameter in your opening tag:

    {exp:email:contact_form preview="about/contact-preview"}

    OR

    {exp:email:tell_a_friend preview="about/tellafriend-preview"}

Next, you'll need to add a preview submit input to your form, probably somewhere near the submit input:

    <input name="preview" type='submit' value='Preview' />
    <input name="submit" type='submit' value='Send' />

Last, you'll need to use the `{exp:email:preview}` tagpair in the template specified in the [preview=](#preview) parameter. You can use all of the [Form Fields](#form-fields) specified above and you'll typically have the preview directly above or below the email form:

    {exp:email:preview}
      <dl>
        <dt>From</dt>
        <dd>{name} ({from})</dd>
        <dt>To</dt>
        <dd>{to}</dd>
        <dt>Subject</dt>
        <dd>{subject}</dd>
      </dl>
      {message}
    {/exp:email:preview}

    {exp:email:contact_form}
      ...

You can optionally specify that the `{message}` contents should be parsed with Markdown by using the same [markdown=](#markdown) parameter that the contact form uses:

    {exp:email:preview markdown="yes"}

## Tell-A-Friend Form

The purpose of this tag is to display a form used to share an entry with someone by sending them an email about it. To show your tell-a-friend form use this tag pair:

    {exp:email:tell_a_friend} {/exp:email:tell_a_friend}

The tell-a-friend form is created similar to a standard web form, only you don't specify the opening and closing form tags; ExpressionEngine takes care of those for you.

There are numerous variations possible for this feature (using parameters and variables described below). Here's an example showing how a tell-a-friend form might be created:

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

NOTE: **Important:** Make sure to use the correct template_group and template so the permalink that is sent in the tell-a-friend email is correct

### Linking to the Tell-a-Friend page

In order to use the Tell-a-Friend feature, you will need to link to it. First, create a Template and place the Tell-a-Friend form in this Template.

You will then need to add a link to your new Tell-a-Friend Template from within your channel entries. In your channel tag {exp:channel:entries} you can point to it using the permalink variable:

    <a href="{permalink='channel/friend'}">Tell-a-Friend</a>

In the above example, the Template "friend" contains the Tell-a-Friend form.

## Parameters

[TOC=3]

### `allow_attachments=`
     
     allow_attachments="yes"

This allows you to add a file input field to your form, make sure to give your file input field the name of `attachment`. Adding this parameter automatically gives the form the `enctype='multipart/form-data'` attribute.

### `allow_html=`

    allow_html="yes" allow_html="<p>,<a>" allow_html="no"

The channel entry variables (see Channel Variables below) are formatted according to the formatting specified when the entry was submitted, so there is a possibility of HTML being output. This parameter allows you the choice of whether to keep the HTML in the form fields, allow only certain HTML tags (by specifying the tags as a comma-separated list), or allow no HTML to remain. If HTML is left in, then the email will be automatically sent as an HTML email.

### `charset=`

    charset="utf-8"

This allows you to set the character set of the email being sent. Use this if your form's template is using a character set other than iso-8859-1.

### `recipients=`

    recipients="admin@example.com"

You may specify hidden recipients for the form. This is who will receive the submitted information. You may specify more than one recipient by separating the email addresses with commas:

    recipients="admin@example.com,ceo@example.com,president@example.com"

NOTE: **Note:** In the situation where recipients are specified with this parameter and the regular "To:" field is _also_ filled out, the recipients specified with this parameter will be mailed using BCC (Blind Carbon Copy) so that the "To:" recipient does not see those "hidden" email recipients.

### `redirect=`

    redirect="5"

After the form is submitted, the user will be shown a page stating that the submission was successful. With this parameter, you can determine how long ExpressionEngine displays that page. The value for this parameter is set in the number of seconds. For instance, if you want the message displayed for six seconds, you would use

    redirect="6"

You may also set ExpressionEngine to not redirect the user after they reach the message page. In that case, the user would simply remain on the message page. To do this, set the value to none:

    redirect="none"

### `replyto=`

    replyto="yes"

By default the email address sending the email will be put in the From header for the email. If this parameter is set to "yes", then that email address will be put into the Reply-To field and the site's webmaster email will be put in the From header. This is necessary at times because certain email servers will not send an email with an address not from its domain, so ExpressionEngine will use the site's webmaster email address to get past this restriction while still allowing any replies to go to the sender of the email.

### `return=`

    return="email/thanks"

This parameter lets you specify a path (or full URL) where the user should be directed after the form is submitted. Upon submission, the user is presented with a standard "thank you" message and a link. If this parameter is **not** used, then the link will point to the page they were on prior to arriving at the email form.

    return="email/thanks"

If used with the redirect="none" parameter, the link text can be specified by adding the pipe character and the desired link text. If you are specifying only the link text, then you must precede it by the pipe character:

    return="about|Return to About Page"

    return="|Return to the Site"

### `status=`

    status="open"

The channel [status](control-panel/channels.md#statuses-tab) you would like entries restricted to. This is useful if you will be displaying entries with a status other than "open". You can choose multiple statuses using a pipe:

    status="draft|reviewed|published"

Or exclude statuses using "not"

    status="not submitted|processing|closed"

### `channel=`

    channel="news"

Specify from which channel you would like to allow Tell-a-Friend emails to be sent. This parameter is useful if you have multiple entries with the same URL Title in different channels. Unless you restrict this EE tag to a particular channel then you might get Tell-a-Friend forms for all entries matching the URL Title.

### `preview=`

    preview="about/tell-a-friend-preview"

Specify a URL where the user can preview their message before sending it. This can be used in conjunction with the [markdown=](#markdown) parameter.

### `markdown=`

    markdown="yes"

Optionally enable [Markdown](https://daringfireball.net/projects/markdown/) processing for [message](#message) of the Tell-a-Friend form.

### `form_class=`

    form_class="tellafriend_form"

With this parameter, you can specify the css class you want the form to have, enabling fine-grained styling of the form.

### `form_id=`

    form_id="tellafriend_form"

With this parameter, you can specify the css id you want the form to have. The default value is 'tellafriend_form'

### Channel Parameters

While some of the [Channel Entries Tag Parameters](channels/entries.md#parameters) are also available to the Tell-a-Friend form, most of them will not be beneficial to use in that context. One exception that can be valuable is show_future_entries=, which would let you use the Tell-a-Friend form with entries dated in the future.

## Variables

[TOC=3]

### `{member_email}`

If a user is logged in, then it will display their email address as recorded in their member profile.

### `{member_name}`

If a user is logged in, then it will display their screen name as recorded in their member profile.

### Channel Variables

    {title}     {permalink}     {author}     {body}     et cetera...

Many of the [Channel Entries Tag Variables](channels/entries.md#single-variables) are available for the tell-a-friend form. Notable exceptions are all category related variables and custom member fields.

NOTE: **Note:** To ease the usability of this form with multiple channels, which will possibly contain different channel fields, all Channel Variables that are unfulfillable will be removed from the form.

For example, if you have a channel with the fields "summary" and "body", and then another channel with the fields "ingredients" and "directions", you will be able to put the following in the "message" textarea: {summary} {body} {ingredients} {directions}. If an entry linking to the tell-a-friend form is from channel one, then the first two fields will be filled and the second two will be ignored. If an entry from channel 2 is linking to the tell-a-friend form, then the first two will be ignored and the second two will be filled out.

## Form Fields

[TOC=3]

### `captcha`

    <input type="text" name="captcha" value="" maxlength="20" />

The CAPTCHA input for the form. It is usually used with a conditional so that it is only displayed if necessary:

    {if captcha}
        <p>Please enter the word you see in the image below:</p>
        <p>{captcha}<br /> <input type="text" name="captcha" value="" maxlength="20" /></p>
    {/if}

The setting to disable or enable CAPTCHA for the tell-a-friend form can be found in the [Email Configuration](control-panel/settings/email.md) preferences.

### `from`

    <input type="text" name="from" size="40" />

Email address of person who is sending the email.

WARN: **Warning:** If you leave this field open to user input, be aware that it is a potential for abuse by spammers, who could use your form pretending to be someone they are not (i.e. keying in <admin@paypal.com>). If the user is allowed to modify both this and the message field, you have essentially created a [phishing](http://dictionary.reference.com/browse/phishing) form ripe for abuse.

### `message`

    <textarea name="message" rows="10" cols="40"></textarea>

Main message of the email. If you do not wish to have the tell-a-friend message modified then we suggest using a hidden form field or setting the textarea as read only (ex: &lt;textarea readonly="readonly"&gt;&lt;/textarea&gt;). You must include this form field, even if it is just a hidden field.

WARN: **Warning:** If you leave this field open to user input, be aware that it is a potential for abuse by spammers, who could use your form for email advertising. If the user is allowed to modify both this and the from field, you have essentially created a [phishing](http://dictionary.reference.com/browse/phishing) form ripe for abuse.

### `name`

    <input type="text" name="name" size="40" />

Name of person who is sending the email.

### `required`

    <textarea name="required" rows="5" cols="40" readonly="readonly"></textarea>

Field allows you to have required information that is included at top of each email message. Useful for support emails where the information can be read only or hidden.

### `subject`

    <input type="text" name="subject" size="40" />

Subject of the email that is being sent. You must include this form field, even if it is just a hidden field.

### `to`

    <input type="text" name="to" size="40" />

Email address where the email is being sent. Multiple email addresses may be specified by separating them with a comma. You must include this form field, even if it is just a hidden field. This data may also be specified with the [recipients=](#recipients) parameter of the tag.

### `Preview`

Occasionally you'll want to provide a way for users to preview their email message before sending it. You'll start by specifying a [preview=](#preview) parameter in your opening tag:

    {exp:email:contact_form preview="about/contact-preview"}

    OR

    {exp:email:tell_a_friend preview="about/tellafriend-preview"}

Next, you'll need to add a preview submit input to your form, probably somewhere near the submit input:

    <input name="preview" type='submit' value='Preview' />
    <input name="submit" type='submit' value='Send' />

Last, you'll need to use the `{exp:email:preview}` tagpair in the template specified in the [preview=](#preview) parameter. You can use all of the [Form Fields](#form-fields) specified above and you'll typically have the preview directly above or below the email form:

    {exp:email:preview}
      <dl>
        <dt>From</dt>
        <dd>{name} ({from})</dd>
        <dt>To</dt>
        <dd>{to}</dd>
        <dt>Subject</dt>
        <dd>{subject}</dd>
      </dl>
      {message}
    {/exp:email:preview}

    {exp:email:contact_form}
      ...

You can optionally specify that the `{message}` contents should be parsed with Markdown by using the same [markdown=](#markdown) parameter that the contact form uses:

    {exp:email:preview markdown="yes"}
