<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Signatures and Avatars

Users in your forum can create Avatars and Signatures that are attached to their forum activity. Avatars are small images that get displayed along with the user's name in posts and replies they make. Signatures are small pieces of text and/or an image that is displayed at the bottom of each post the user makes. Signatures often contain a link to the user's site or a favorite quote. Avatars and Signatures are used throughout ExpressionEngine and are not specific to the forum.

Avatar settings can be updated in the Control Panel by going to the [Avatar Settings](/control-panel/settings/avatars.md) located at `Settings --> Avatars`.

Signature images are _disabled_ by default. However, Signature images can be enabled via the [`sig_allow_img_upload` config override](/general/system-configuration-overrides.md#sig_allow_img_upload). 

## Available config overrides for Forum Signatures:

NOTE:**Note:** These settings only exist as config overrides and do not have matching Control Panel settings.

- [`sig_allow_img_upload`](/general/system-configuration-overrides.md#sig_allow_img_upload)
- [`sig_allow_img_hotlink`](/general/system-configuration-overrides.md#sig_allow_img_hotlink)
- [`sig_img_max_height`](/general/system-configuration-overrides.md#sig_img_max_height)
- [`sig_img_max_kb`](/general/system-configuration-overrides.md#sig_img_max_kb)
- [`sig_img_max_width`](/general/system-configuration-overrides.md#sig_img_max_width)
- [`sig_img_path`](/general/system-configuration-overrides.md#sig_img_path)
- [`sig_img_url`](/general/system-configuration-overrides.md#sig_img_url)
- [`sig_maxlength`](/general/system-configuration-overrides.md#sig_maxlength)