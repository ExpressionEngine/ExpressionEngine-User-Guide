.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

URL and Path Settings
=====================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Settings --> URL and Path Settings`

.. Overview

This section of the Control Panel allows you to define the URL and path
settings of your site. If you are using the :doc:`/cp/msm/index`, note that
these settings are per-site.

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

.. _general-config-base-url-label:

Default base URL
~~~~~~~~~~~~~~~~

The value given to the ``{base_url}`` control panel variable.  This is one of few tags than can be used in control panel settings, and it is highly recommended as it makes your site more portable.

Typically the value of the default path will be the URL to the folder containing your site's index page.  For example, if your index file is located at::

	https://example.com

Then the correct setting would be::

	https://example.com

.. _general-config-base-path-label:

Default base path
~~~~~~~~~~~~~~~~~

The value given to the ``{base_path}`` control panel variable.  This is one of few tags than can be used in control panel settings, and it is highly recommended as it makes your site more portable.

Typically the value of the default base path will be the full path to the folder containing your site's index page, though you don't want to go so deep in the directory structure that you can't use the tag when defining any of your control panel paths.

.. _general-config-index-name-label:

Website index page
~~~~~~~~~~~~~~~~~~

This is the filename of your site's "index" page. By default, this will
be index.php, which is located in the base folder. You will only need to
alter this setting if you have changed the filename.  If you remove index.php from your urls, then you'll want this field to be empty.

.. _general-config-url-root-label:

Website root directory
~~~~~~~~~~~~~~~~~~~~~~

The URL to the folder containing your site's index page. For
example, if you have defined your ``{base_url}`` as recommended and your index file is located at::

	https://example.com

Then the correct setting would be::

	{base_url}/index.php

.. _general-config-url-cp-label:

Control panel directory
~~~~~~~~~~~~~~~~~~~~~~~

The URL to your ExpressionEngine Control Panel. In most cases, this
will be similar to::

	{base_url}/admin.php

.. _general-config-theme-url-label:

Themes directory
~~~~~~~~~~~~~~~~

The URL to your "themes" folder. In most cases, this will be
similar to::

	{base_url}/themes/


.. _general-config-theme-path-label:

Themes path
~~~~~~~~~~~

The *server path* to the "themes" folder. A server path often looks
similar to::

	{base_path}themes/

Server paths will vary from server to server, so you should contact your
Host or server admin if you are unsure of what your setting should be.

.. _general-config-url-docs-label:

Documentation directory
~~~~~~~~~~~~~~~~~~~~~~~

The full URL to location of the ExpressionEngine User Guide. This URL is
used to create the User Guide link at the top of your Control Panel.

.. _profile-trigger-word-label:

Profile URL segment
~~~~~~~~~~~~~~~~~~~

When this word is encountered in your URL it will display your member
profile area. The word you choose cannot be the name of an existing
template group. The default value of this is "member". That means that a
URL like the following would trigger ExpressionEngine to display the
member profile area::

     https://example.com/member/profile/

.. _global-channel-category-url-indicator-label:

Category URL segment
~~~~~~~~~~~~~~~~~~~~

If you turn on the preceding preference, you must designate a special
"indicator" word, which will be used in the URL whenever a category is
intended. For example, URLs that indicate a category normally use the ID
number like this by default::

	https://example.com/site/C12/

If you instead specify that the category URL title should be used, the
URL will look like this::

	https://example.com/site/category/blogging/

In this example, the *indicator* is "category" and the category URL
title is "blogging".

The "indicator" word that you choose will become a 'reserved' word,
which means that it **cannot** be used for Template Group or Template
names.

.. _global-channel-category-url-titles-label:

Category URL
~~~~~~~~~~~~

This preference sets the system to generate category links with category
URL IDs (e.g. ``/C12/``) or titles.

In order to use this titles, you **must** use the channel= parameter in
the following tags, and if you specify multiple channels, they **must**
share identical Category Groups:

-  {exp:channel:categories}
-  {exp:channel:category\_heading}
-  {exp:channel:entries}

.. _global-channel-word-seperator-label:

URL title separator
~~~~~~~~~~~~~~~~~~~

When creating an entry in the PUBLISH page, if you do not manually enter
a "URL Title" then the system will automatically create one based on the
entry Title. This preference determines whether underscore characters
(\_) or dashes (-) should be used when automatically creating the URL
Title.
