<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Form Validation

[TOC]

ExpressionEngine provides several template tags that produce interactive forms.  When a user submits a form the input is validated and any errors are then shown to the user.  The two methods for presenting these errors to your users are through a system error template or by using inline errors in your own custom templates.

## Error Template

By default ExpressionEngine will show validation errors to your users with a system template. You can configure the look and feel of this page by using [Custom System Messages](control-panel/template-manager.md#custom-system-messages).

## Inline Errors

Alternatively you can show users any validation errors on the same page where they are providing input with inline errors.  The following template tags support inline errors and can make use of the following parameters and variables.

*Supported Template Tags:*

- [Comment Submission Form](/comment/form.md) `{exp:comment:form}`
- [Email Contact Form](/add-ons/email.md#email-contact-form) `{exp:email:contact_form}`
- [Member Edit Profile](/member/edit-profile.md) `{exp:member:edit_profile}`
- [Member Forgot Password](/member/forgot-password.md) `{exp:member:forgot_password_form}`
- [Member Forgot Username](/member/forgot-username.md) `{exp:member:forgot_username_form}`
- [Member Login](/member/login.md) `{exp:member:login_form}`
- [Member Registration](/member/registration.md) `{exp:member:registration_form}`
- [Member Reset Password](/member/reset-password.md) `{exp:member:reset_password_form}`

### Parameters

[TOC=4]

#### `inline_errors=`

    inline_errors="yes"

This parameter allows you to use inline errors in your form. The errors can be displayed using the `{errors}` variable pair or individually using the `{error:field_name}` tag (where `field_name` would be replaced with the name of your field).

#### `return_error=`

    return_error="template_group/error"

When inline errors are enabled, this parameter allows you to specify the template to return to if there are errors in the form. The default is the same template that the form is on.

### Variables

[TOC=4]

#### Errors Pair

    {errors}...{error}...{/errors}

When inline errors enabled, this tag pair will display all errors in a loop. Each individual error message is available as an `{error}` variable within the loop.

This is useful for displaying all errors at once, for example, in a fieldset at the top of the form. It can also be used as a conditional to check if there are any errors at all: `{if errors}`.

    {if errors}
        <p class="error">Please correct the following errors:</p>
        <ul>
            {errors}
                <li>{error}</li>
            {/errors}
        </ul>
    {/if}

#### Field Error Single

    {error:field_name}

You can also access an error for a specific field.  This can be desirable if you want to show the error next to the input element that was invalid.

#### Field Value Single

    {old:field_name}

Retrieve a value for a specific field that was sent during the invalid submission.

NOTE: **Note:** These values are only flashed to the session for a single request and fields with sensitive names like "password" will not be stored

### Example Usage

```
<p>
    <label for="username">Username:</label>
    <input type="text" name="username" value="{if old:username}{old:username}{/if}" />
    {if error:username}
        <span class="error">{error:username}</span>
    {/if}
</p>
```
