<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2021, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# ExpressionEngine Pro Change Log

## Version 1.2.1 (Release: March 30, 2022)

  - Resolved [#1787](https://github.com/ExpressionEngine/ExpressionEngine/issues/1787) where advanced conditionals in Grid field were breaking template when using front-end editing
  - Resolved [#1814](https://github.com/ExpressionEngine/ExpressionEngine/issues/1814) where `{!-- disable frontedit --}` was not working outside of `exp:channel:entries` tag
  - Resolved [#1849](https://github.com/ExpressionEngine/ExpressionEngine/issues/1849) where using Pro front-end editing on template with modifier on file field was causing PHP error
  - Resolved the issue where PHP notices were shown in CP during multi-factor authorization

## Version 1.2.0 (Release: February 10, 2022)

  - Added [entry cloning](pro/entry_cloning.md) using the "Clone to New Entry" option in entry Save dropdown options.
  - Resolved [#1791](https://github.com/ExpressionEngine/ExpressionEngine/issues/1791) where non-existing image was requested by Dock.

## Version 1.1.0 (Release: January 13, 2022)

  - Updated native Entries Prolet to use the Live Preview setting of the an entry's channel instead of current page.
  - Added [`provider` parameter to `consent:cookies` tag.](pro/cookies.md#provider)
  - Added ability to enable/disable frontedit links on a per field basis via the [field's settings](control-panel/field-manager/field-manager-settings.md#createedit-field).
  - Added [Multi-Factor Authentication](pro/mfa.md).

## Version 1.1.0 (Release: January 13, 2022)

  - Updated native Entries Prolet to use the Live Preview setting of the an entry's channel instead of current page.
  - Added [`provider` parameter to `consent:cookies` tag.](pro/cookies.md#provider)
  - Added ability to enable/disable frontedit links on a per field basis via the [field's settings](control-panel/field-manager/field-manager-settings.md#createedit-field).
  - Added [Multi-Factor Authentication](pro/mfa.md).

## Version 1.0.3 (Release: November 11, 2021)

  - Resolved [#1511](https://github.com/ExpressionEngine/ExpressionEngine/issues/1511) where using `{encode}` tag was causing issues with front-end editing.

## Version 1.0.2 (Release: October 22, 2021)

  - Added "Login" button for login dialog on prolets. 

## Version 1.0.1 (Release: October 13, 2021)

  - Added `{if frontedit}` contional

## Version 1.0.0 (Release: October 6, 2021)

  - Initial Release!
