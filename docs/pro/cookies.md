<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2021, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Cookie and Consent Management

[TOC]

ExpressionEngine Pro provides additional tools to improve management of cookies.

## Displaying the list of cookies

    {exp:consent:cookies type="necessary"}
        Cookie name: {cookie_name}<br />
        Title: {cookie_title}<br />
        Description: {cookie_description}<br />
        Is set by: {cookie_provider}<br />
        Lifetime: {cookie_lifetime}<hr />
    {/exp:consent:cookies}

### Parameters

#### `type=`

    type='necessary'

Type of cookies to display. Possible options are `necessary`, `functionality`, `performance` and `targeting`. If omited, all cookies will be displayed.

It is also possible to combine several types, e.g. `type="performance|targeting"`.

If you need to exclude one or several types from display, use `not ` before the values:

    type='not performance|targeting'

#### `provider=`

    provider='ee'

Limits display of cookies by cookie provider. 
If the cookie is provided by an add-on, the provider matches the add-ons short name, e.g. `comment` or `forum`
The core ExpressionEngine cookies are identified by `ee` as provider.
If cookie is only being used in Control Panel, the provider is set to `cp`.
Possible options are `necessary`, `functionality`, `performance` and `targeting`. If omited, all cookies will be displayed.

It is also possible to combine several providers, e.g. `type="ee|cp"`.

If you need to exclude one or several providers from display, use `not ` before the values

    provider='not forum|cp'

### Variables

#### `{cookie_name}`

Cookie name

#### `{cookie_title}`

Cookie title

#### `{cookie_description}`

Cookie description

#### `{cookie_provider}`

Cookie provider (`ee` or add-on short name)

#### `{cookie_lifetime}`

Cookie lifetime in seconds. `0` represents session cookies (killed after browsing session ends).

## Setting cookies lifetime
**Control Panel Location: `Settings > Cookie Settings`**

In the Cookie Settings all cookies set by your ExpressionEngine installation are listed. It is possible to set your own cookie title, description and lifetime in seconds.

![pro cookie settings](/_images/pro_cookie_settings.png)

## Export Consent Audit Log
**Control Panel Location: `Tools > Logs > Consent`**

ExpressionEngine Pro adds "export" button ( <img style="margin-bottom: 0px; vertical-align: middle;" src="../_images/pro_consent_export.png" alt="pro consent export icon">) in the top right of Consent Audit Log in CP which allows users to download the CSV file with log records based on filters applied.
