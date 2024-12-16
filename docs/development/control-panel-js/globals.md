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

The elements of global `EE` JavaScript objects could vary depending on the Control Panel page you are viewing, the below is rather generic list of elements available on all page.

To add the element to global object, call [`ee()->javascript->set_global()`](development/legacy/libraries/javascript.md#set_globalvar-val--) function.

## `BASE`

Control Panel base URL.

    $.get(EE.BASE + '&C=login&M=lock_cp');

## `CSRF_TOKEN`

The current [Cross Site Request Forgery](development/guidelines/security.md#cross-site-request-forgery) token

    headers: { 'X-CSRF-TOKEN': EE.CSRF_TOKEN },

## `PATH_CP_GBL_IMG`

Path to `themes/ee/asset/img` directory

## `THEME_URL`

URL to `themes/ee/cp` folder

## `username`

Username of currently logged in member

## `lang`

Object of language strings available for JavaScript function in member's preferred language

    text: EE.lang.loading

## `hasRememberMe`

Indicates whether the "remember me" checkbox was toggled on when member logged in.

## `cp.appVer`

The version number of ExpressionEngine release.
    data: {
        appVer: EE.cp.appVer,
    }

## `site_id`

ID of MSM site that is currently active in Control Panel

## `site_name`

The configured site name

## `site_url`

The URL to the site's front-end

    meta: [
        {
            site_name: EE.site_name,
            site_id: EE.site_id,
            site_url: EE.site_url
        }
    ]

## `fileManagerCompatibilityMode`

Indicates whether File Manager is running in [Compatibility Mode](control-panel/file-manager/file-manager.md#compatibility-mode).

    if (EE.fileManagerCompatibilityMode) {
        input.val('{filedir_' + data.upload_location_id + '}' + data.file_name)
    } else {
        input.val('{file:' + data.file_id + ':url}')
    }
