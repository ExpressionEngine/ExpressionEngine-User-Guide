<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Signatures and Avatars

Users in your forum can create Avatars and Signatures, if you allow it. Avatars are small images that get displayed along with the user's name in posts and replies they make. Signatures are small pieces of text and/or an image that is displayed at the bottom of each post the user makes. Signatures often contain a link to the user's site or a favorite quote. Avatars and Signatures are used throughout ExpressionEngine and are not specific to the forum.

Avatars and signatures allow for users to upload images. There are many configuration settings that can be customized. Visit [System Config Overrides](general/system-configuration-overrides.html#system-configuration-overrides) to see all of these.

Admins can edit some of these settings directly in the cp by visiting the Settings page. This can be found under System Settings &gt; Signatures and System Settings &gt; Avatars. 

Once signatures and avatars are enabled, users can update these by visiting My Profile &gt; Personal Settings.

NOTE:
    **NOTE** For signature images to be allowed another setting must be added.


Example Usage:

    $config['sig_allow_img_upload'] = 'y'; 



By default, Avatars and Signatures are _disabled_.
