<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Consent

[TOC]

The Consent module allows you to build tools to allow visitors to manage their consent. In conjunction with [Consent Variables](templates/globals/consent.md) and [Custom Consent Requests](control-panel/settings/consents.md), you can build rich sites that respect activity that a visitor has consented to.

For example, consenting to use of certain cookies, of using their information for marketing purposes, and so on. These tags enable you to ensure that a visitor is freely giving their consent, for specific granular purposes, to inform them of the nature of what they are consenting to, to actively and unambiguously indicate their consent, and to see and manage (grant or withdraw) their consent to individual items.

NOTE: **Note:** [Require user consent to set cookies](
control-panel/settings/security-privacy.md#require-user-consent-to-set-cookies) must be enabled before any restrictions on will take effect.


## Consent Form

Consent Forms allow the visitor to grant or withdraw consent to one or more Consent Requests:

    {exp:consent:form consent='ee:cookies_functionality'}
      {consents}
          <h2>{consent_title}</h2>

          {consent_request}

          Accepted: <input type="checkbox" name="{consent_short_name}" value="y" {if consent_granted}checked{/if}>
      {/consents}

      <input type="submit" name="submit" value="Submit">

    {/exp:consent:form}

## Parameters

The Consent Form Tag will create an HTML form and include within its opening tag the minimum attributes necessary for it to work.  If you need additional attributes to be specified, The Simple Search Form Tag allows you to specify these attributes as additional parameters within the tag itself.  See the entry for [pass_through_attributes](#pass_through_attributes) in the parameter listing for more information.

[TOC=3]

### `consent=`

    consent='ee:cookies_functionality'

You can specify consent requests by their short name. You may specify multiple requests by separating them with the pipe character:

    consent='ee:cookies_functionality|terms_of_service'

Or use "not" to exclude entries:

    consent='not twitter_app'

### `form_class=`

    form_class='consent_form'

Specify the HTML `class=` attribute.

### `form_id=`

    form_id='consent_form'

Specify the HTML `id=` attribute.

### `pass through attributes`

    data-automobile_type="buick" role="search" name="some name"

You can include in your tag a parameter with a name identical to any valid [HTML Form}(https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) attribute, any [HTML Global Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes), or the [ARIA Search role attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Search_role).  

If you assign a value to your parameter the value will be assigned to the attribute in the completed Form tag.  To include an attribute which does not take a value (e.g. `novalidate`) you need to define a null value for the parameter (i.e. `novalidate=""`).

If you specify a parameter with a name that is the same as an attribute already being set by Consent Form, the parameter value you enter will be ignored.

### `return=`

    return='site/consent'

Specify a path to redirect the user to after submission. If not specified, they will be returned to the current page. Unused for Ajax-submitted forms.

### `user_created=`

    user_created='only'

Filter the consent requests based on whether or not they are user-created (as opposed to app / add-on created).

| value       | result                          |
| ----------- | ------------------------------- |
| y (default) | Include user-created consents   |
| n           | Exclude user-created consents   |
| only        | Show only user-created consents |


## Variables

[TOC=3]

### `{consents}{/consents}`

A pair variable used to loop through all of the consent requests you are displaying with this form. It has the following variables:

### `{consent_creation_date}`

The date the consent was created.

    {consent_creation_date format='%Y %m %d'}

The date the request was created. See [Date Variable Formatting](templates/date-variable-formatting.md) for more information.

### `{consent_given_via}`

The method that consent was provided, can be useful for conditionals. Typically `online_form`:

    {if consent_given_via == 'online_form'}
      Consent was granted via an online form.
    {/if}

### `{consent_grant_url}`

A URL that when clicked will grant the user's consent for this request.

    <a href="{consent_grant_url}">Grant</a>

Optionally accepts a `return=` parameter if the action should redirect somewhere other than the current page:

    <a href="{consent_grant_url return='preferences/saved'}">Grant</a>

### `{consent_granted}`

A boolean variable for conditionals that returns `TRUE` or `FALSE`. Returns `TRUE` if the user has granted permission to the consent request, `FALSE` otherwise.

    {if consent_granted}
        Set that cookie!
    {/if}

### `{consent_id}`

The ID number of the consent.

### `{consent_request}`

The description of the consent request.

### `{consent_response_date}`

    {consent_response_date format='%Y %m %d'}

The date that consent was granted or withdrawn. See [Date Variable Formatting](templates/date-variable-formatting.md) for more information.

### `{consent_short_name}`

The short name of the consent.

### `{consent_title}`

The title of the consent request.

### `{consent_user_created}`

A boolean variable for conditionals that returns `TRUE` or `FALSE`. Returns `TRUE` if this consent request was user-created or not (by a site admin in the control panel). Returns `FALSE` otherwise (app or add-on created consent requests).

    {if consent_user_created}
        This consent request is a custom request created by a site administrator.
    {/if}

### `{consent_version_id}`

The version_id of the consent request.

    {version_id}

### `{consent_withdraw_url}`

A URL that when clicked will withdraw the user's consent for this request.

    <a href="{consent_withdraw_url}">Withdraw</a>

Optionally accepts a `return=` parameter if the action should redirect somewhere other than the current page:

    <a href="{consent_grant_url return='preferences/saved'}">Grant</a>

### `{if no_results}`

If this tag would not output any consent requests due to your filters, the contents of this conditional will be displayed instead.

    {if no_results}
      No Consent Requests Available
    {/if}

## Examples

### Simple Bulk Consent Form

    {exp:consent:alert}
      <div class="alert {alert_type}">
        <p>{alert_message}</p>
      </div>
    {/exp:consent:alert}

    {exp:consent:form}
      {if no_results}
        <h1>No Consent Requests to Display</h1>
      {/if}

      {consents}
        <fieldset>
          <dl>
            <dt>{consent_title}</dt>
            <dd>{consent_request}</dd>
          </dl>
          <label>
            <input type="radio" name="{consent_short_name}" value="y" {if consent_granted}checked{/if}>
            Accept
          </label>
          <label>
            <input type="radio" name="{consent_short_name}" value="n" {if ! consent_granted}checked{/if}>
            Decline
          </label>
        </fieldset>
      {/consents}

      <fieldset>
        <input type="submit" name="submit" value="Save">
      </fieldset>
    {/exp:consent:form}

### AJAX-Driven Consent Form

    <html>
      <head>
        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
      </head>
      <body>
        {exp:consent:form
          consent='ee:cookies_functionality|ee:cookies_performance|ee:cookies_targeting'
          form_id='cookieConsentForm'
        }
        <p>This website uses a variety of cookies, which you consent to if you continue to use this site. You can read our <a href="{path='privacy'}">Privacy Policy</a> for details about how these cookies are used, and to grant or withdraw your consent for certain types of cookies.</p>

        {consents}
          <label>
            <input type="checkbox" name="{consent_short_name}" value="y" {if consent_granted}checked{if:elseif ! consent_response_date}checked{/if}>
            {consent_title}
          </label>
        {/consents}

        <input type="submit" name="submit" value="Ok">
        {/exp:consent:form}

        <script src="//code.jquery.com/jquery-3.2.1.min.js"></script>

        <!--using the jQuery Form plugin http://jquery.malsup.com/form/-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.form/4.2.2/jquery.form.js" type="text/javascript"></script>

        <script type="text/javascript">
          $(document).ready(function(){
            $('#cookieConsentForm').ajaxForm({
              dataType: 'json',
              success: function(data) {
                if (data.success) {
                  alert(data.success);
                } else {
                  alert('Failed with the following errors: '+data.errors.join(', '));
                }
              }
            });
          });
        </script>
      </body>
    </html>

## Alert Tag

The Alert tag works in concert with standard POSTed forms, as one way to let users know that their consent preferences were saved, and which ones.

    {exp:consent:alert}
      <div class="alert {alert_type}">
        <p>{alert_message}</p>
      </div>
    {/exp:consent:alert}

If you want to provide custom classes and response text, you can do that here as well. The Alert tag will only render when there is something to be displayed. For instance, for a completely bespoke success message that will only display after the user submits a consent form:

    {exp:consent:alert}
      {if alert_type == 'success'}
        <div class="alert alert-success" role="alert">
          We've saved your consent preferences, thank you!
        </div>
      {/if}
    {/exp:consent:alert}

## Variables

[TOC=3]

### `{alert_message}`

The alert message. "Your consent preferences have been saved for:" followed by a list of the Consent Request titles the user submitted.

    {alert_message}
    {!-- Your consent preferences have been saved for: Functionality Cookies, Performance Cookies, Targeting Cookies --}

### `{alert_type}`

One of `issue`, `success`, or `warn`. Can be useful to set CSS classes.

    <div class="{alert_type}">

## Requests Tag

The Requests tag lets you list or loop through available Consent Requests, without automatically wrapping them in a form tag. This can be useful for dynamically outputting information about your site's Consents in a Terms of Service or Privacy Policy page. It can also be used to output links that let a user grant/withdraw consent to individual consents.

**Tip:** Link-based Grant & Withdraw actions are fully compatible with the Alert Tag.

    {exp:consent:requests}
      {if no_results}
        <h1>No Consent Requests to Display</h1>
      {/if}

      <h1>{consent_title}</h1>
      <div>{consent_request}</div>

      <ul>
        <li><a href="{consent_grant_url}">Grant</a></li>
        <li><a href="{consent_withdraw_url}">Withdraw</a></li>
      </ul>
    {/exp:consent:requests}

## Parameters

[TOC=3]

### `consent=`

    consent='ee:cookies_functionality'

You can specify consent requests by their short name. You may specify multiple requests by separating them with the pipe character:

    consent='ee:cookies_functionality|terms_of_service'

Or use "not" to exclude entries:

    consent='not twitter_app'

Specify a path to redirect the user to after submission. If not specified, they will be returned to the current page. Unused for Ajax-submitted forms.

### `user_created=`

    user_created='only'

Filter the consent requests based on whether or not they are user-created (as opposed to app / add-on created).

|value| result| |y (default) |Include user-created consents| |n |Exclude user-created consents| |only | Show only user-created consents|

## Variables

[TOC=3]

The Requests tag has the same variables available to the Consents Form, but without the need to wrap them in a `{consents}{/consents}` tag pair.

### `{consent_creation_date}`

The date the consent was created.

    {consent_creation_date format='%Y %m %d'}

The date the request was created. See [Date Variable Formatting](templates/date-variable-formatting.md) for more information.

### `{consent_given_via}`

The method that consent was provided, can be useful for conditionals. Typically `online_form`:

    {if consent_given_via == 'online_form'}
      Consent was granted via an online form.
    {/if}

### `{consent_grant_url}`

A URL that when clicked will grant the user's consent for this request.

    <a href="{consent_grant_url}">Grant</a>

Optionally accepts a `return=` parameter if the action should redirect somewhere other than the current page:

    <a href="{consent_grant_url return='preferences/saved'}">Grant</a>

### `{consent_granted}`

A boolean variable for conditionals that returns `TRUE` or `FALSE`. Returns `TRUE` if the user has granted permission to the consent request, `FALSE` otherwise.

    {if consent_granted}
        Set that cookie!
    {/if}

### `{consent_id}`

The ID number of the consent.

### `{consent_request}`

The description of the consent request.

### `{consent_response_date}`

    {consent_response_date format='%Y %m %d'}

The date that consent was granted or withdrawn. See [Date Variable Formatting](templates/date-variable-formatting.md) for more information.

### `{consent_short_name}`

The short name of the consent.

### `{consent_title}`

The title of the consent request.

### `{consent_user_created}`

A boolean variable for conditionals that returns `TRUE` or `FALSE`. Returns `TRUE` if this consent request was user-created or not (by a site admin in the control panel). Returns `FALSE` otherwise (app or add-on created consent requests).

    {if consent_user_created}
        This consent request is a custom request created by a site administrator.
    {/if}

### `{consent_version_id}`

The version_id of the consent request.

    {version_id}

### `{consent_withdraw_url}`

A URL that when clicked will withdraw the user's consent for this request.

    <a href="{consent_withdraw_url}">Withdraw</a>

Optionally accepts a `return=` parameter if the action should redirect somewhere other than the current page:

    <a href="{consent_grant_url return='preferences/saved'}">Grant</a>

### `{if no_results}`

If this tag would not output any consent requests due to your filters, the contents of this conditional will be displayed instead.

    {if no_results}
      No Consent Requests Available
    {/if}
