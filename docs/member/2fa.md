<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Two-Factor Authentication Links

NOTE: **Note:** This tag is available only if [ExpressionEngine Pro](https://expressionengine.com/pro) is installed and the license is valid.

## `{exp:member:two_fa_links}`

This tag is providing links to help people manage their 2FA settings.

    {exp:member:two_fa_links}
      {if 2fa_enabled}
        <a href="{reset_2fa_link}">Reset 2FA</a>
      {if:else}
        <a href="{enable_2fa_link}">Enable 2FA</a>
      {/if}
      {if !2fa_authorized}
        <a href="{invoke_2fa_link}">Validate or setup 2FA</a>
      {if:else}
        <a href="{disable_2fa_link}">Disable 2FA</a>
      {/if}
    {/exp:member:two_fa_links}

### Parameters

#### `return=`

    return="member"

URL to return to. Defaults to current page.

### Variables

#### `{invoke_2fa_link}`

Invokes Two-Factor authentication dialog, or dialog to set up 2FA, if it's not enabled for member.

#### `{enable_2fa_link}`

Invoke dialog to set up two-factor authentication.

#### `{disable_2fa_link}`

Invoke dialog to disable two-factor authentication. Only avaiable is member is logged in and authenticated with 2FA.

#### `{reset_2fa_link}`

Invoke dialog to reset two-factor authentication.
