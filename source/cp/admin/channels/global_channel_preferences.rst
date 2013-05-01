Global Channel Preferences
==========================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Channel Administration --> Global Channel Preferences`

This section of the Control Panel sets global preferences for your
channels. The following preferences are available:

Use Category URL Titles In Links?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This preference lets the name of each category appear in your URLs
rather than the numeric indicator (e.g. "/C12/") on pages such as your
Category Archive page.

In order to use this feature, you **must** use the channel= parameter in
the following tags, and if you specify multiple channels, they **must**
share identical Category Groups:

-  {exp:channel:categories}
-  {exp:channel:category\_heading}
-  {exp:channel:entries}

.. _global-channel-category-url-indicator-label:

Category URL Indicator
~~~~~~~~~~~~~~~~~~~~~~

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

.. _auto-assign-categoryP-label:

Auto-Assign Category Parents
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If this option is set to "yes", when new entries that contain category
assignments are submitted, the "parent" category of any sub-categories
will be automatically assigned. If set to "no", the entry will only be
assigned to the child category.

.. _global-channel-clear-cache-label:

Clear all caches when new entries are posted?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You can determine whether your caches will be cleared when you post an
entry. If set to "no", the new entry will not appear on your site until
any cache expires.

Cache Dynamic Channel Queries?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This feature will improve the speed at which your channel pages load by
caching queries that are normally executed dynamically. **Note:** Enable
this preference only if you **do not** use the "future entries" or
"expiring entries" feature.

Word Separator for URL Titles
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

When creating an entry in the PUBLISH page, if you do not manually enter
a "URL Title" then the system will automatically create one based on the
entry Title. This preference determines whether underscore characters
(\_) or dashes (-) should be used when automatically creating the URL
Title.
