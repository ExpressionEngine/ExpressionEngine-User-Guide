<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Multi-Factor Authentication Links

NOTE: **Note:** This tag is available only if [ExpressionEngine Pro](https://expressionengine.com/pro) is installed and the license is valid.

## `{exp:member:mfa_links}`

This tag is providing links to help people manage their MFA settings.

    {exp:member:mfa_links}
      {if mfa_enabled}
        <a href="{disable_mfa_link}">Disable MFA</a>
      {if:else}
        <a href="{enable_mfa_link}">Enable MFA</a>
      {/if}
    {/exp:member:mfa_links}

### Parameters

#### `return=`

    return="member"

URL to return to. Defaults to current page.

### Variables

#### `{enable_mfa_link}`

Invoke dialog to set up multi-factor authentication, if it's not enabled for member..

#### `{disable_mfa_link}`

Invoke dialog to disable multi-factor authentication. Only avaiable is member is logged in and authenticated with MFA.
