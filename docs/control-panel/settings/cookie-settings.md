<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

**Control Panel Location: `Settings > Cookie Settings`**

Cookie Settings lists the cookie policies registered by your ExpressionEngine installation. You can edit the title, description, and lifetime in seconds for policies that allow those changes.

The **MFA Session** policy is strictly necessary. Its lifetime is read-only and displays the `mfa_session_length` configuration value. A value of `0` means remembered MFA verification is disabled. See [MFA cookies](general/cookies.md#mfa-cookies) for the cookies covered by this policy.

![pro cookie settings](/_images/pro_cookie_settings.png)