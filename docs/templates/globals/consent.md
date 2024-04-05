<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Consent Variables

[TOC]

If you use and manage user consents with your site, you can take advantage of Consent Variables in your templates. This way you can control what actions you take based on whether or not the user has given you permission to do so. This can greatly assist you with compliance with regulations such as the .

    {if consent:ee:cookies_performance}
      <!-- Google Analytics -->
      <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-XXXXX-Y', 'auto');
      ga('send', 'pageview');
      </script>
      <!-- End Google Analytics -->
    {/if}

## Variables

All Consent variables are boolean values, intended for use in conditionals to determine whether or not to do something in your template, and all of them are accessed with the `consent:` prefix:

    {if consent:consent_short_name}

### Native Consent Requests

Native Consent requests are prefixed with `ee:`.

#### ee:cookies_functionality

Consent to "Functionality" cookies. These cookies help personalize content and functionality, including remembering changes that a user has made to parts of the website that they can customize, or selections for services made on previous visits. Outside of cookies that are strictly necessary for the website to function properly, these are the most innocuous of cookies. They should typically never store any personally identifiable information, and simply retain selections and preferences from one visit to the next.

#### ee:cookies_performance

Consent to "Performance" cookies. These cookies are the type that help a web site measure performance and metrics. A common example is Google Analytics. Unless custom data is being explicitly collected, typically these cookies are aggregated and anonymous, and cannot be used to identify a specific visitor.

#### ee:cookies_targeting

Consent to "Targeting" cookies. These cookies are often referred to as "marketing" or "advertising" cookies. They are often placed by third-party networks, which may use personally identifiable information to build profiles of specific visitors so that they can be used to deliver relevant advertising and content across many websites.

### Add-on Consent Requests

Add-on Consent request are prefixed with the add-on's shortname that corresponds to its folder name and tags. For example if the add-on is named Marketing and has its own consents, the consent variables would be:

    {if consent:marketing:consent-name}
      {exp:marketing:action}
        Do Something
      {/exp:marketing:action}
    {/if}

Please check the documentation for your add-on for any available consent variables.

### User-Created Consent Requests

User-created Consent requests, that you as the site builder create, are referenced simply with their short name. For example, if you had a Terms of Service consent, with a short name of `terms-of-service`, you can determine in your template whether or not the visitor has consented to your ToS with:

    {if consent:terms-of-service}
      User has consented, so take some particular action
    {/if}

### Checking if the User has Responded

All of the above variables act like a boolean—`TRUE` if the user has given consent and `FALSE` if they've not given consent, or have denied or withdrawn it. But what about folks who haven't responded yet? You can use the `has_responded:` prefix with any consent variable. For example, you could ask for consent for using a cool widget, but only if they've not responded. If they told you no, you don't want to keep asking.

has_responded: :

    {if ! consent:has_responded:my_cool_widget}
      {exp:consent:requests consent='my_cool_widget'}
        <h1>{consent_title}</h1>
        <div>{consent_request}</div>

        <ul>
          <li><a href="{consent_grant_url}">Allow</a></li>
          <li><a href="{consent_withdraw_url}">Decline</a></li>
        </ul>
      {/exp:consent:requests}
    {/if}

    {if consent:my_cool_widget}
      {exp:my_cool_widget:display}
        {!-- this is super cool! --}
      {/exp:my_cool_widget}
    {/if}
