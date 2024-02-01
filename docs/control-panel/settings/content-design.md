<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Content & Design

**Control Panel Location: `Settings > Content & Design`**

This section of the Control Panel allows you to define settings for caching, image resizing, and emoticons.

## Settings

### Clear cache for new entries?

You can determine whether your caches will be cleared when you post an entry. If set to "no", the new entry will not appear on your site until any cache expires.

### Cache dynamic channel queries?

This feature will improve the speed at which your channel pages load by caching queries that are normally executed dynamically.

NOTE: **Note:** Enable this preference only if you **do not** use the "future entries" or "expiring entries" feature.

### Enable entry cloning
Enables cloning the entries by using "Clone to New Entry" option in saving dropdown on entry edit page. When enabled globally, can also be disabled individually for each channel in channel preferences.

### Assign category parents?

Set whether to assign an entry to both the selected category and its parent category.

### Run File Manager in Compatibility Mode?

WARN:**Note:** Compatibility Mode is enabeld by default for sites upgrading from ExpressionEngine versions less than ExpressionEngine 7.

When Compatibility Mode is enabled, files will be stored in the database using a format compatiblie with ExpressionEngine versions 6 and prior. Compatibility Mode disables many newer File Manager features and prevents issues with add-ons that are not ExpressionEngine 7+ compatible. See [`File Manager > Compatibility Mode`](/control-panel/file-manager/file-manager.md#compatibility-mode) for more information.

### Protocol

This is where you indicate which resizing protocol to use. You may need to contact your Host or server admin to determine which protocols are installed and available on your server. The options are:

- [GD](https://www.php.net/manual/en/intro.image.php)
- [GD 2](https://www.php.net/manual/en/intro.image.php)
- [ImageMagick](https://www.imagemagick.org/script/index.php)
- [NetPBM](https://sourceforge.net/projects/netpbm/)

### Converter path

If you specified either "ImageMagick" or "NetPBM" in the preference above, then you **must** list the _server path_ to the library in this setting. If you do not know the server path, contact your Host or server admin.

### Thumbnail suffix

You may specify a suffix to be automatically added to the filename of any generated thumbnail. This will ensure that the thumbnail image does not overwrite the original and will also make it easy to see that it is a thumbnail image. "thumb" is used by default.

If the original image was flowers.jpg then the thumbnail would be flowers_thumb.jpg.

### Enable emoticons?

With this preference you can choose whether or not to auto-convert text-based smileys (`:P`, `>:-(`) to their emoji counterparts (😛, 😡). If this preference is disabled, then text that contains smileys such as `:-)` will not be converted to emoji.

### URL

This setting specifies the URL of the folder where you have your smiley graphics located. This setting will automatically be filled in during installation, so you should only need to change it if you have altered where your smiley graphics are stored.
