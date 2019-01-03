.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Content & Design
================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Settings --> Content & Design`

.. Overview

This section of the Control Panel allows you to define settings for caching, image resizing, and emoticons.

.. Screenshot (optional)

.. Permissions

Permission Restrictions
-----------------------

* Access settings: General Settings

Settings
--------

.. contents::
  :local:
  :depth: 1

.. Each Action/Section

.. _global-channel-clear-cache-label:

Clear cache for new entries?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You can determine whether your caches will be cleared when you post an
entry. If set to "no", the new entry will not appear on your site until
any cache expires.

Cache dynamic channel queries?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This feature will improve the speed at which your channel pages load by
caching queries that are normally executed dynamically.

.. note:: Enable this preference only if you **do not** use the "future
  entries" or "expiring entries" feature.

.. _auto-assign-category-parents-label:

Assign category parents?
~~~~~~~~~~~~~~~~~~~~~~~~

Set whether to assign an entry to both the selected category and its
parent category.

.. _image-resizing-protocol-label:

Protocol
~~~~~~~~

This is where you indicate which resizing protocol to use. You may need
to contact your Host or server admin to determine which protocols are
installed and available on your server. The options are:

- `GD <http://www.boutell.com/gd/>`_
- `GD 2 <http://www.boutell.com/gd/>`_
- `ImageMagick <http://www.imagemagick.org/script/index.php>`_
- `NetPBM <http://netpbm.sourceforge.net/>`_

.. _image-converter-path-label:

Converter path
~~~~~~~~~~~~~~

If you specified either "ImageMagick" or "NetPBM" in the preference
above, then you **must** list the *server path* to the library in this
setting. If you do not know the server path, contact your Host or server
admin.

Thumbnail suffix
~~~~~~~~~~~~~~~~

You may specify a suffix to be automatically added to the filename of
any generated thumbnail. This will ensure that the thumbnail image does
not overwrite the original and will also make it easy to see that it is
a thumbnail image. "thumb" is used by default.

If the original image was flowers.jpg then the thumbnail would be
flowers\_thumb.jpg.

.. _emoticon-display-smileys-label:

Enable emoticons?
~~~~~~~~~~~~~~~~~

With this preference you can choose whether or not to auto-convert text-based smileys (``:P``, ``>:-(``) to their emoji counterparts (😛, 😡). If this preference is disabled, then text that contains smileys such as ``:-)`` will not be converted to emoji.

.. _emoticon-url-folder-label:

URL
~~~

This setting specifies the URL of the folder where you have your smiley
graphics located. This setting will automatically be filled in during
installation, so you should only need to change it if you have altered
where your smiley graphics are stored.

.. |Smile| image:: /images/smile.gif
.. |image1| image:: /images/smile.gif
.. |LOL| image:: /images/lol.gif
