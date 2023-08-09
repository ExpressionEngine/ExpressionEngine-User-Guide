---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Image Manipulation Class

[TOC]

ExpressionEngine's Image Manipulation class lets you perform the following actions:

- Image Resizing
- Thumbnail Creation
- Image Cropping
- Image Rotating
- Image Watermarking

While the Image Manipulation library can support other image libraries, ExpressionEngine requires and uses GD2.

NOTE: **Note:** Watermarking is only available using the GD/GD2 library. In addition, even though other libraries are supported, GD is required in order for the script to calculate the image properties. The image processing, however, will be performed with the library you specify.

## Initializing the Class

Like most other classes in ExpressionEngine, the image class is initialized in your controller using the `ee()->load->library` function:

    ee()->load->library('image_lib');

### Processing an Image

Regardless of the type of processing you would like to perform (resizing, cropping, rotation, or watermarking), the general process is identical. You will set some preferences corresponding to the action you intend to perform, then call one of four available processing functions. For example, to create an image thumbnail you'll do this:

    $config['image_library'] = 'gd2';
    $config['source_image'] = '/path/to/image/mypic.jpg';
    $config['create_thumb'] = TRUE;
    $config['maintain_ratio'] = TRUE;
    $config['width']     = 75;
    $config['height']   = 50;

    ee()->load->library('image_lib', $config);

    ee()->image_lib->resize();

The above code tells the image_resize function to look for an image called `mypic.jpg` located in the source_image folder, then create a thumbnail that is 75 X 50 pixels using the GD2 image_library. Since the maintain_ratio option is enabled, the thumb will be as close to the target width and height as possible while preserving the original aspect ratio. The thumbnail will be called `mypic_thumb.jpg`

NOTE: **Note:** In order for the image class to be allowed to do any processing, the folder containing the image files must have write permissions.

NOTE: **Note:** Image processing can require a considerable amount of server memory for some operations. If you are experiencing out of memory errors while processing images you may need to limit their maximum size, and/or adjust PHP memory limits.

### Processing Methods

There are four available processing methods:

- `EE_Image_lib::resize()`
- `EE_Image_lib::crop()`
- `EE_Image_lib::rotate()`
- `EE_Image_lib::watermark()`

These methods return boolean `TRUE` upon success and `FALSE` for failure. If they fail you can retrieve the error message using this function:

    echo ee()->image_lib->display_errors();

A good practice is use the processing function conditionally, showing an error upon failure, like this:

    if ( ! ee()->image_lib->resize())
    {
        echo ee()->image_lib->display_errors();
    }

NOTE: **Note:** You can optionally specify the HTML formatting to be applied to the errors, by submitting the opening/closing tags in the function, like this :

ee()-&gt;image_lib-&gt;display_errors('&lt;p&gt;', '&lt;/p&gt;');

### Preferences

The preferences described below allow you to tailor the image processing to suit your needs.

Note that not all preferences are available for every function. For example, the x/y axis preferences are only available for image cropping. Likewise, the width and height preferences have no effect on cropping. The "availability" column indicates which functions support a given preference.

Availability Legend:

- R - Image Resizing
- C - Image Cropping
- X - Image Rotation
- W - Image Watermarking

| Preference       | Default Value | Options                      | Description                                                                                                                                                                                                                                                                                                                                                                                             | Availability       |
| ---------------- | ------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| image_library    | GD2           | GD, GD2, ImageMagick, NetPBM | Sets the image library to be used.                                                                                                                                                                                                                                                                                                                                                                      | R, C, X, W         |
| library_path     | None          | None                         | Sets the server path to your ImageMagick or NetPBM library. If you use either of those libraries you must supply the path.                                                                                                                                                                                                                                                                              | R, C, X R, C, S, W |
| source_image     | None          | None                         | Sets the source image name/path. The path must be a relative or absolute server path, not a URL.                                                                                                                                                                                                                                                                                                        |                    |
| dynamic_output   | FALSE         | TRUE/FALSE (boolean)         | Determines whether the new image file should be written to disk or generated dynamically. Note: If you choose the dynamic setting, only one image can be shown at a time, and it can’t be positioned on the page. It simply outputs the raw image dynamically to your browser, along with image headers.                                                                                                | R, C, X, W         |
| file_permissions | 0644          | (integer)                    | File system permissions to apply on the resulting image file, writing it to the disk. WARNING: Use octal integer notation!                                                                                                                                                                                                                                                                              | R, C, X, W         |
| quality          | 90%           | 1 - 100%                     | Sets the quality of the image. The higher the quality the larger the file size.                                                                                                                                                                                                                                                                                                                         | R, C, X, W         |
| new_image        | None          | None                         | Sets the destination image name/path. You’ll use this preference when creating an image copy. The path must be a relative or absolute server path, not a URL.                                                                                                                                                                                                                                           | R, C, X, W         |
| width            | None          | None                         | Sets the width you would like the image set to.                                                                                                                                                                                                                                                                                                                                                         | R, C               |
| height           | None          | None                         | Sets the height you would like the image set to.                                                                                                                                                                                                                                                                                                                                                        | R, C               |
| create_thumb     | FALSE         | TRUE/FALSE (boolean)         | Tells the image processing function to create a thumb.                                                                                                                                                                                                                                                                                                                                                  | R                  |
| thumb_marker     | \_thumb       | None                         | Specifies the thumbnail indicator. It will be inserted just before the file extension, so mypic.jpg would become mypic_thumb.jpg                                                                                                                                                                                                                                                                        | R                  |
| maintain_ratio   | TRUE          | TRUE/FALSE (boolean)         | Specifies whether to maintain the original aspect ratio when resizing or use hard values.                                                                                                                                                                                                                                                                                                               | R, C               |
| master_dim       | auto          | auto, width, height          | Specifies what to use as the master axis when resizing or creating thumbs. For example, let’s say you want to resize an image to 100 X 75 pixels. If the source image size does not allow perfect resizing to those dimensions, this setting determines which axis should be used as the hard value. “auto” sets the axis automatically based on whether the image is taller than wider, or vice versa. | R                  |
| rotation_angle   | None          | 90, 180, 270, vrt, hor       | Specifies the angle of rotation when rotating images. Note that PHP rotates counter-clockwise, so a 90 degree rotation to the right must be specified as 270.                                                                                                                                                                                                                                           | X                  |
| x_axis           | None          | None                         | Sets the X coordinate in pixels for image cropping. For example, a setting of 30 will crop an image 30 pixels from the left.                                                                                                                                                                                                                                                                            | C                  |
| y_axis           | None          | None                         | Sets the Y coordinate in pixels for image cropping. For example, a setting of 30 will crop an image 30 pixels from the top.                                                                                                                                                                                                                                                                             | C                  |

## Image Watermarking

The Watermarking feature requires the GD/GD2 library.

### Two Types of Watermarking

There are two types of watermarking that you can use:

- **Text**: The watermark message will be generating using text, either with a True Type font that you specify, or using the native text output that the GD library supports. If you use the True Type version your GD installation must be compiled with True Type support (most are, but not all).
- **Overlay**: The watermark message will be generated by overlaying an image (usually a transparent PNG or GIF) containing your watermark over the source image.

### Watermarking an Image

Just as with the other methods (resizing, cropping, and rotating) the general process for watermarking involves setting the preferences corresponding to the action you intend to perform, then calling the watermark function. Here is an example:

    $config['source_image'] = '/path/to/image/mypic.jpg';
    $config['wm_text'] = 'Copyright 2006 - John Doe';
    $config['wm_type'] = 'text';
    $config['wm_font_path'] = './system/fonts/texb.ttf';
    $config['wm_font_size'] = '16';
    $config['wm_font_color'] = 'ffffff';
    $config['wm_vrt_alignment'] = 'bottom';
    $config['wm_hor_alignment'] = 'center';
    $config['wm_padding'] = '20';

    ee()->image_lib->initialize($config);

    ee()->image_lib->watermark();

The above example will use a 16 pixel True Type font to create the text "Copyright 2006 - John Doe". The watermark will be positioned at the bottom/center of the image, 20 pixels from the bottom of the image.

NOTE: **Note:** In order for the image class to be allowed to do any processing, the image file must have "write" file permissions. See [File Permissions](troubleshooting/general.md#file-permissions) for details.

### Watermarking Preferences

This table shown the preferences that are available for both types of watermarking (text or overlay)

| Preference       | Default Value | Options              | Description                                                                                                                                                                                                                                                                                              |
| ---------------- | ------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wm_type          | text          | text, overlay        | Sets the type of watermarking that should be used.                                                                                                                                                                                                                                                       |
| source_image     | None          | None                 | Sets the source image name/path. The path must be a relative or absolute server path, not a URL.                                                                                                                                                                                                         |
| dynamic_output   | FALSE         | TRUE/FALSE (boolean) | Determines whether the new image file should be written to disk or generated dynamically. Note: If you choose the dynamic setting, only one image can be shown at a time, and it can't be positioned on the page. It simply outputs the raw image dynamically to your browser, along with image headers. |
| quality          | 90%           | 1 - 100%             | Sets the quality of the image. The higher the quality the larger the file size.                                                                                                                                                                                                                          |
| wm_padding       | None          | A number             | The amount of padding, set in pixels, that will be applied to the watermark to set it away from the edge of your images.                                                                                                                                                                                 |
| wm_vrt_alignment | bottom        | top, middle, bottom  | Sets the vertical alignment for the watermark image.                                                                                                                                                                                                                                                     |
| wm_hor_alignment | center        | left, center, right  | Sets the horizontal alignment for the watermark image.                                                                                                                                                                                                                                                   |
| wm_hor_offset    | None          | None                 | You may specify a horizontal offset (in pixels) to apply to the watermark position. The offset normally moves the watermark to the right, except if you have your alignment set to "right" then your offset value will move the watermark toward the left of the image.                                  |
| wm_vrt_offset    | None          | None                 | You may specify a vertical offset (in pixels) to apply to the watermark position. The offset normally moves the watermark down, except if you have your alignment set to "bottom" then your offset value will move the watermark toward the top of the image.                                            |

#### Text Preferences

This table shown the preferences that are available for the text type of watermarking.

| Preference         | Default Value | Options | Description                                                                                                                                                                                                            |
| ------------------ | ------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wm_text            | None          | None    | The text you would like shown as the watermark. Typically this will be a copyright notice.                                                                                                                             |
| wm_font_path       | None          | None    | The server path to the True Type Font you would like to use. If you do not use this option, the native GD font will be used.                                                                                           |
| wm_font_size       | 16            | None    | The size of the text. Note: If you are not using the True Type option above, the number is set using a range of 1 - 5. Otherwise, you can use any valid pixel size for the font you're using.                          |
| wm_font_color      | ffffff        | None    | The font color, specified in hex. Both the full 6-length (ie, 993300) and the short three character abbreviated version (ie, fff) are supported.                                                                       |
| wm_shadow_color    | None          | None    | The color of the drop shadow, specified in hex. If you leave this blank a drop shadow will not be used. Both the full 6-length (ie, 993300) and the short three character abbreviated version (ie, fff) are supported. |
| wm_shadow_distance | 3             | None    | The distance (in pixels) from the font that the drop shadow should appear.                                                                                                                                             |

#### Overlay Preferences

This table shown the preferences that are available for the overlay type of watermarking.

| Preference         | Default Value | Options | Description                                                                                                                                                                                                            |
| ------------------ | ------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wm_text            | None          | None    | The text you would like shown as the watermark. Typically this will be a copyright notice.                                                                                                                             |
| wm_font_path       | None          | None    | The server path to the True Type Font you would like to use. If you do not use this option, the native GD font will be used.                                                                                           |
| wm_font_size       | 16            | None    | The size of the text. Note: If you are not using the True Type option above, the number is set using a range of 1 - 5. Otherwise, you can use any valid pixel size for the font you're using.                          |
| wm_font_color      | ffffff        | None    | The font color, specified in hex. Both the full 6-length (ie, 993300) and the short three character abbreviated version (ie, fff) are supported.                                                                       |
| wm_shadow_color    | None          | None    | The color of the drop shadow, specified in hex. If you leave this blank a drop shadow will not be used. Both the full 6-length (ie, 993300) and the short three character abbreviated version (ie, fff) are supported. |
| wm_shadow_distance | 3             | None    | The distance (in pixels) from the font that the drop shadow should appear.                                                                                                                                             |

## Class Reference

**class `EE_Image_lib`**

[TOC=3]

### `initialize([$props = array()])`

| Parameter | Type    | Description                                        |
| --------- | ------- | -------------------------------------------------- |
| \$props   | `Array` | Image processing preferences                       |
| Returns   | `Bool`  | TRUE on success, FALSE in case of invalid settings |

Initializes the class for processing an image.

### `resize()`

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| Returns   | `Bool` | TRUE on success, FALSE on failure |

The image resizing method lets you resize the original image, create a copy (with or without resizing), or create a thumbnail image.

For practical purposes there is no difference between creating a copy and creating a thumbnail except a thumb will have the thumbnail marker as part of the name (i.e. mypic_thumb.jpg).

All preferences listed in the `processing-preferences` table are available for this method except these three: `rotation_angle`, `x_axis` and `y_axis`.

**Creating a Thumbnail**

The resizing method will create a thumbnail file (and preserve the original) if you set this preference to TRUE:

    $config['create_thumb'] = TRUE;

This single preference determines whether a thumbnail is created or not.

**Creating a Copy**

The resizing method will create a copy of the image file (and preserve the original) if you set a path and/or a new filename using this preference:

    $config['new_image'] = '/path/to/new_image.jpg';

Notes regarding this preference:

- If only the new image name is specified it will be placed in the same folder as the original
- If only the path is specified, the new image will be placed in the destination with the same name as the original.
- If both the path and image name are specified it will placed in its own destination and given the new name.

**Resizing the Original Image**

If neither of the two preferences listed above (create_thumb, and new_image) are used, the resizing method will instead target the original image for processing.

### `crop()`

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| Returns   | `Bool` | TRUE on success, FALSE on failure |

The cropping method works nearly identically to the resizing function except it requires that you set preferences for the X and Y axis (in pixels) specifying where to crop, like this:

    $config['x_axis'] = 100;
    $config['y_axis'] = 40;

All preferences listed in the `processing-preferences` table are available for this method except these: _rotation_angle_, _create_thumb_ and _new_image_.

Here's an example showing how you might crop an image:

    $config['image_library'] = 'imagemagick';
    $config['library_path'] = '/usr/X11R6/bin/';
    $config['source_image'] = '/path/to/image/mypic.jpg';
    $config['x_axis'] = 100;
    $config['y_axis'] = 60;

    ee()->image_lib->initialize($config);

    if ( ! ee()->image_lib->crop())
    {
        echo ee()->image_lib->display_errors();
    }

NOTE: **Note:** Without a visual interface it is difficult to crop images, so this method is not very useful unless you intend to build such an interface.

### `rotate()`

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| Returns   | `Bool` | TRUE on success, FALSE on failure |

The image rotation method requires that the angle of rotation be set via its preference:

    $config['rotation_angle'] = '90';

There are 5 rotation options:

1.  90 - rotates counter-clockwise by 90 degrees.
2.  180 - rotates counter-clockwise by 180 degrees.
3.  270 - rotates counter-clockwise by 270 degrees.
4.  hor - flips the image horizontally.
5.  vrt - flips the image vertically.

Here's an example showing how you might rotate an image:

    $config['image_library'] = 'netpbm';
    $config['library_path'] = '/usr/bin/';
    $config['source_image'] = '/path/to/image/mypic.jpg';
    $config['rotation_angle'] = 'hor';

    ee()->image_lib->initialize($config);

    if ( ! ee()->image_lib->rotate())
    {
        echo ee()->image_lib->display_errors();
    }

### `watermark()`

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| Returns   | `Bool` | TRUE on success, FALSE on failure |

Creates a watermark over an image, please refer to the [Watermarking an Image](#image-watermarking) section for more info.

### `clear()`

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| Returns   | `Void` |             |

The clear method resets all of the values used when processing an image. You will want to call this if you are processing images in a loop.

    ee()->image_lib->clear();

### `display_errors([$open = '<p>[, $close = '</p>']])`

| Parameter | Type     | Description               |
| --------- | -------- | ------------------------- |
| \$open    | `String` | Error message opening tag |
| \$close   | `String` | Error message closing tag |
| Returns   | `String` | Error messages            |

Returns all detected errors formatted as a string.

    echo ee()->image_lib->display_errors();
