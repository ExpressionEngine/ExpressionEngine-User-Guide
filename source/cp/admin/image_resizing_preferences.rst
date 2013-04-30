Image Resizing Preferences
==========================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> System Administration --> Image Resizing Preferences`

This section of the Control Panel allows you to define preferences for
image resizing, such as creating thumbnails or resizing uploaded images.

.. _image-resizing-protocol-label:

Image Resizing Protocol
~~~~~~~~~~~~~~~~~~~~~~~

This is where you indicate which resizing protocol to use. You may need
to contact your Host or server admin to determine which protocols are
installed and available on your server. The options are:

- `GD <http://www.boutell.com/gd/>`_
- `GD 2 <http://www.boutell.com/gd/>`_
- `ImageMagick <http://www.imagemagick.org/>`_
- `NetPBM <http://netpbm.sourceforge.net/>`_

Image Converter Path
~~~~~~~~~~~~~~~~~~~~

If you specified either "ImageMagick" or "NetPBM" in the preference
above, then you **must** list the *server path* to the library in this
setting. If you do not know the server path, contact your Host or server
admin.

Image Thumbnail Suffix
~~~~~~~~~~~~~~~~~~~~~~

You may specify a suffix to be automatically added to the filename of
any generated thumbnail. This will ensure that the thumbnail image does
not overwrite the original and will also make it easy to see that it is
a thumbnail image. "thumb" is used by default.

If the original image was flowers.jpg then the thumbnail would be
flowers\_thumb.jpg.
