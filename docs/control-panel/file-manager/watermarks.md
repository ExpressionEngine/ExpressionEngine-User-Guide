<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->
# Watermarks

**Control Panel Location: `Files sidebar > Watermarks`**

This section of the Control Panel allows you to manage watermark settings. A watermark is a unique text string or graphic that is automatically added to your images to mark them as "yours" and to hamper other people from being able to "steal" your images. You can create as many watermark types as you need and apply them to your automatically created thumbnails while [creating or editing an upload directory](control-panel/file-manager/upload-directories.md#createedit-upload-directory).

Watermarks have the following options:

- **Name** -- A descriptive name for the watermark
- **Type** -- The type of watermark. Can be either a image or text.
- **Alignment** -- The vertical and horizontal position of the watermark.
- **Padding** -- The amount of padding between the watermark and the image edge.

Text Watermarks have the following extra options:

- **Text** -- Specify the text you wish to be used for the watermark.
- **Font face** -- The True Type font for the text to use. By default, the "texb" font is included with ExpressionEngine. If you wish to use a different font then you will need to upload it to your system/fonts/ directory. **Note:** The font selection works only when "Use True Type Font" is enabled.
- **Text size** -- The font size of the watermark text, in pixels. Note that this is the font size that will be applied to the full-size image. The font size will be scaled proportionally with the image size if applied to the thumbnail or medium sized image. **Note:** The font size selection works only when "Use True Type Font" is enabled.
- **Text color** -- The watermark text color, in hex.
- **Enable dropshadow?** -- If enabled, a dropshadow will be added to the watermark text. Dropshadows usually make the text easier to read, especially when used on images with greatly varying color.
- **Dropshadow distance** -- The distance to offset the dropshadow from the regular text, in pixels.
- **Dropshadow color** -- The dropshadow color, in hex.

Image Watermarks have the following extra options:

- **Path** -- If you wish to test your watermark settings then you may specify the server path to a test image. This will allow you to see how it would actually appear on a real image. A server path is typically something similar to `/home/domain.com/http_docs/cp_images/watermark_test.jpg`. The specific setting will vary from server to server so you may need to contact your Host or server admin to determine what your correct "server path" is.
- **Opacity** -- The opacity (i.e. transparency) of the watermark image. This allows the watermark to be faint and not completely obscure details from the original image behind it. A 50% opacity is typical.
- **Image transparency map** -- Specify a color on the image to be "transparent" for PNG or GIF images. This works by specifying the "X" and "Y" coordinate pixel (measured from the upper left) within the image that corresponds to a pixel representative of the color you want to be transparent.