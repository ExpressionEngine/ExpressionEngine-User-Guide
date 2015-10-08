Create/Edit Watermark
=====================

.. .. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Files --> Watermarks --> New/Edit`

.. Overview

This section of the Control Panel allows you to create or edit a watermark.

.. Screenshot (optional)

.. Permissions

Permission Restrictions
-----------------------

.. todo:: Confirm the permissions for this

* File upload directories: Create Upload Directories
* File upload directories: Edit Upload Directories
* File upload directories: Delete Upload Directories
* Files: Upload New Files
* Files: Edit Files
* Files: Delete Files

Fields
------

.. contents::
  :local:
  :depth: 1

.. Each Field

Name
~~~~

A descriptive name for the watermark

Type
~~~~

The type of watermark.

Alignment
~~~~~~~~~

The vertical and horizontal position of the watermark.

Padding
~~~~~~~

This is the amount of padding that will automatically be applied to the
watermark to set it away from the edge of your images.

Offset
~~~~~~

You may specify a horizontal offset (in pixels) to apply to the watermark
position. If you have your alignment set to "right" then your offset value will
move the watermark toward the "center" of the image.

You may also specify a vertical offset (in pixels) to apply to the watermark
position. If you have your alignment set to "bottom" then your offset value
will move the watermark toward the "center" of the image.

Enable True Type?
~~~~~~~~~~~~~~~~~

Specify whether or not to use a True Type font. In order to be able to use this
option, True Type font support must be included in your PHP installation. Not
all Hosts and servers support this. True Type fonts will appear to be smoother
than if you disable this option.

Text
~~~~

Specify the text you wish to be used for the watermark.

Font face
~~~~~~~~~

This is a drop-down of the available True Type fonts. By default, the
"texb" font is included with ExpressionEngine. If you wish to use a
different font then you will need to upload it to your system/fonts/
directory.

.. note:: The font selection works only when "Use True Type Font" is
	enabled.

Text size
~~~~~~~~~

The font size (in px) you wish to use with the watermark text. Note that
this is the font size that will be applied to the full-size image. The
font size will be scaled proportionally with the image size if applied
to the thumbnail or medium sized image.

.. note:: The font size selection works only when "Use True Type Font"
	is enabled.

Text color
~~~~~~~~~~

You may specify any standard hex code for the font color. You may also click
the color swatch image next to the preference to launch a pop-up window
containing a library of colors from which you can choose.

Enable dropshadow?
~~~~~~~~~~~~~~~~~~

You may specify to have a dropshadow applied to your watermark text.
Dropshadows usually make the text easier to read, especially when used on
images with greatly varying color.

Dropshadow distance
~~~~~~~~~~~~~~~~~~~

The distance (in pixels) to offset the dropshadow from the regular text.

Dropshadow color
~~~~~~~~~~~~~~~~

You may specify any standard hex code for the dropshadow color. You may also
click the color swatch image next to the preference to launch a pop-up window
containing a library of colors from which you can choose.

Path
~~~~

If you wish to test your watermark settings then you may specify the server
path to a test image. This will allow you to see how it would actually appear
on a real image. A server path is typically something similar to
/home/domain.com/http\_docs/cp\_images/watermark\_test.jpg. The specific
setting will vary from server to server so you may need to contact your Host or
server admin to determine what your correct "server path" is.

Opacity
~~~~~~~

You may specify the opacity (i.e. transparency) of your watermark image. This
allows the watermark to be faint and not completely obscure the details from
the original image behind it. A 50% opacity is typical.

Image transparency map
~~~~~~~~~~~~~~~~~~~~~~

If your watermark image is a PNG or GIF image, you may specify a color on the
image to be "transparent". This setting (along with the next) will allow you to
specify that color. This works by specifying the "X" and "Y" coordinate pixel
(measured from the upper left) within the image that corresponds to a pixel
representative of the color you want to be transparent.

Along with the previous setting, this allows you to specify the coordinate to a
pixel representative of the color you want to be transparent.

