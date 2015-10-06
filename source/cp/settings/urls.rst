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

.. _general-config-index-name-label:

Website index page
~~~~~~~~~~~~~~~~~~

This is the filename of your site's "index" page. By default, this will
be index.php, which is located in the base folder. You will only need to
alter this setting if you have changed the filename.

.. _general-config-url-root-label:

Website root directory
~~~~~~~~~~~~~~~~~~~~~~

The URL to the folder containing your site's index page. For
example, if your index file is located at:

http://example.com/index.php

Then the correct setting would be any of the following:

 - http://example.com/
 - ///example.com/
 - /

.. _general-config-url-cp-label:

Control panel directory
~~~~~~~~~~~~~~~~~~~~~~~

The URL to your ExpressionEngine Control Panel. In most cases, this
will be similar to:

 - http://example.com/admin.php
 - ///example.com/admin.php
 - /admin.php

.. _general-config-theme-url-label:

Themes directory
~~~~~~~~~~~~~~~~

The URL to your "themes" folder. In most cases, this will be
similar to:

 - http://example.com/themes/
 - ///example.com/themes/
 - /themes/

.. _general-config-theme-path-label:

Themes path
~~~~~~~~~~~

The *server path* to the "themes" folder. A server path often looks
similar to::

	/home/usr/domain.com/public_html/themes/

Server paths will vary from server to server, so you should contact your
Host or server admin if you are unsure of what your setting should be.

Documentation directory
~~~~~~~~~~~~~~~~~~~~~~~

The full URL to location of the ExpressionEngine User Guide. This URL is
used to create the User Guide link at the top of your Control Panel.

Profile URL segment
~~~~~~~~~~~~~~~~~~~

When this word is encountered in your URL it will display your member
profile area. The word you choose cannot be the name of an existing
template group. The default value of this is "member". That means that a
URL like the following would trigger ExpressionEngine to display the
member profile area:

http://example.com/index.php/member/profile/

Category URL segment
~~~~~~~~~~~~~~~~~~~~

If you turn on the preceding preference, you must designate a special
"indicator" word, which will be used in the URL whenever a category is
intended. For example, URLs that indicate a category normally use the ID
number like this by default::

	http://example.com/index.php/site/C12/

If you instead specify that the category URL title should be used, the
URL will look like this::

	http://example.com/index.php/site/category/blogging/

In this example, the *indicator* is "category" and the category URL
title is "blogging".

The "indicator" word that you choose will become a 'reserved' word,
which means that it **cannot** be used for Template Group or Template
names.

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

URL title separator
~~~~~~~~~~~~~~~~~~~

When creating an entry in the PUBLISH page, if you do not manually enter
a "URL Title" then the system will automatically create one based on the
entry Title. This preference determines whether underscore characters
(\_) or dashes (-) should be used when automatically creating the URL
Title.