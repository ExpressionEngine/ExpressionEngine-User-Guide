<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2021, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Cookies management

ExpressionEngine Pro provides additional tools to improve cookies management.

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

Under Settings -> Cookie Settings all cookies set by your ExpressionEngine installation are listed. It is possible to set your own cookie title, description and lifetime in seconds.

## Export Consent Audit Log

ExpressionEngine Pro adds "export" button in the top right of Consent Audit Log in CP which allows to download the CSV file with log records based on filters applied.
