---
lang: js
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Global JavaScript Variables

ExpressionEngine Control Panel is making use of `EE` global javascript object, which contains multiple variable and methods that can be used throughout the CP.
The object elements can be accessed as `EE.variable_name` or `window.EE.variable_name`.

To add the element to global object, call [`ee()->javascript->set_global()`](development/legacy/libraries/javascript.md#set_globalvar-val--) function.

**The list of object elements here is not complete**

### `fileManagerCompatibilityMode`

Indicates whether File Manager is running in [Compatibility Mode](control-panel/file-manager/file-manager.md#compatibility-mode).

    if (EE.fileManagerCompatibilityMode) {
        input.val('{filedir_' + data.upload_location_id + '}' + data.file_name)
    } else {
        input.val('{file:' + data.file_id + ':url}')
    }
