<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Data Caching and Performance

[TOC]

Although ExpressionEngine renders your web pages very fast, you'll find that there is a direct correlation between page load speed and the amount of dynamic information contained within your pages. The greater the number of tags and variables you use, the more processing cycles the template rendering engine has to perform.

For this reason, we highly recommend that you use the caching systems and techniques described below. Doing so will increase the performance of your site and utilize server resources more efficiently.

The caching technology in ExpressionEngine is comprised of several independent data caching systems and preferences.

## Tag Caching

The Tag Caching system lets you cache the output of individual tags. This enables you to display sections of your pages completely dynamically while leaving others to display statically. By caching individual tags you will reduce the amount of scripting and server resources needed to display any given page while maintaining a fully dynamic presentation for things that require it.

Tag caching is time-based, meaning the cache is used for a user-definable time interval. When the time expires, the cache is automatically refreshed.

To enable tag caching, add these two parameters to **any** tag:

    cache="yes" refresh="10"

NOTE: **Note:** Refresh indicates the time, in minutes, between cache refreshes.

For example, to cache your channel tag in 30 minute intervals you'll do this:

    {exp:channel:entries cache="yes" refresh="30"}

By default, the caches are created separately for each URI. If you want certain cached tag to be reused on other pages (e.g. footer) you can do it by specifying `cache_prefix` parameter.

    {exp:channel:entries cache="yes" refresh="30" cache_prefix="global"}

## Template Caching

Template Caching (or Dynamic Page Caching) lets you cache entire templates, making your pages much more light-weight. Because ExpressionEngine requires some scripting and a few database queries in order to manage core resources, we can't achieve 100% static pages, but we can get close.

Template caching, like tag caching, is time-based. To enable Template caching, click the "Preferences" link in your Templates page. There you will enable caching as well as set the time interval of the refreshes.

We call it Dynamic Page Caching because the system will clear itself automatically when certain events happen. For example, if you cache your comments page, when someone submits a comment, the cache will be cleared, momentarily overriding the normal caching preferences.

NOTE: **Note:** Dynamic Page Caching will supersede Tag Caching. There is no increased benefit to using tag caching and page caching together. When page caching is on, no other caching setting matters. Therefore, if you want to cache individual tags, turn off page caching.

## Dynamic Channel Query Caching

This feature is found under `Settings --> Content & Design`. This feature will improve the speed at which the {exp:channel:entries} tag is rendered by caching queries that are normally executed dynamically. This option cannot be used for all people, though.

Enable this feature only if you **do not** use future entries, expiring entries, or random entries.

## Query Disabling

The disable= parameter is available in the {exp:channel:entries} tag. It allows you to turn off aspects of the tag that you might not be using in order to improve performance. The channel tag is designed to fetch a lot of information by default: Categories, fields, member data, etc. Depending on how you use the tag, some of this data may not be needed. Through the use of the "disable" parameter you can turn off aspects of the tag in order to make it more lightweight.

The syntax for the disable parameter is this: disable="ITEM YOU WANT TO DISABLE". There are five items that can be turned off:

- categories
- category_fields
- custom_fields
- member_data
- pagination

You may specify multiple items to disable by separating them with the pipe character:

    disable="categories|member_data"

The best approach is to examine the data you are showing in each instance of the tag. If there is a type of data you are not utilizing, turn it off.

For example, let's say you are using an instance of your channel tag to show your 10 most recent entry titles:

    {exp:channel:entries orderby="date" sort="desc" limit="10"}
        <h1 href="{title_permalink='channel/comments'}">{title}</h1>
    {/exp:channel:entries}

In this example you are only showing the title of your entries and nothing else; yet, the channel tag automatically fetches categories and other data. Using the disable= parameter you can turn off the unneeded features from being queried. In this case, you don't need any of the features that can be disabled.

    {exp:channel:entries orderby="date" sort="desc" limit="10" disable="categories|custom_fields|member_data|pagination"}
        <h1 href="{title_permalink='channel/comments'}">{title}</h1>
    {/exp:channel:entries}

You can also use disable="category_fields" in the [channel categories](channels/categories.md) tag, the [category heading](channels/category-heading.md) tag, and the [category archives](channels/category-archive.md) tag.

## Caching Drivers

**Control Panel Location:** `Settings --> Debugging & Output`

By default, ExpressionEngine uses a file-based caching driver, meaning cached items are written to disk. This is the most-compatible option for all servers and works well in most cases. However, the traffic on your site may reach a point where the file-based caching becomes a bottleneck due to disk I/O, or may cause issues in some Network File System instances, in which case you may want to use a memory-based caching driver.

ExpressionEngine currently supports Memcached and Redis for memory-based caching. You can set which driver is being used in the control panel or via the [cache_driver](general/system-configuration-overrides.md#cache_driver) config override. [Memcached](general/system-configuration-overrides.md#memcached) and [Redis](general/system-configuration-overrides.md#redis) server information can also be set in `config.php`, otherwise ExpressionEngine will try to connect to the default respective ports on localhost.

A [backup driver](general/system-configuration-overrides.md#cache_driver_backup) can also be specified in the case your primary driver is unavailable. By default, the backup driver is the file driver and it's likely the best failover option due to its reliability, but the backup driver is configurable.

Add-on developers can find more information about using caching drivers to store and retrieve items in the [Cache Class](development/legacy/libraries/cache.md) documentation.

NOTE: **Note:** The Memcached driver is set to use PHP's [Memcached](https://www.php.net/manual/en/book.memcached.php) extension by default. If it's not available, the driver will try to use [Memcache](https://www.php.net/manual/en/book.memcache.php) instead.

NOTE: **Note:** The Redis driver uses the [PhpRedis](https://github.com/nicolasff/phpredis) extension.

NOTE: **Note:** A Dummy driver is available for selection to disable caching entirely.

## Clearing Caches

Caches are cleared automatically when certain actions occur:

- Ordering categories (clears database cache)
- Updating, creating or deleting a Category Custom Field (clears all caches)
- Deleting a Field Group (clears all caches)
- Updating, creating or deleting a Custom Field (clears all caches)
- Updating Multi Entries (clears if needed either all or sql cache)
- Updating Multi Categories (clears if needed either all or sql cache)
- Deleting Watermark Preferences (clears db cache)
- Updating or Deleting Upload Preferences (clears db cache)
- Updating or creating a Template partial (clears all caches)
- Updating or creating a Template variable (clears all caches)
- Updating a Template (clears all caches)
- Creating a Template from File (clears db cache)
- Updating an Email Notification (clears all caches)
- Updating a Theme Template (clears all caches)
- Running a Template Sync (clears all caches)
- Submission, updating or deleting of an Entry through API (clears if needed either all or sql cache). See [Clear cache for new ntries?](control-panel/settings/content-design.md#clear-cache-for-new-entries).
- Comment Module:
  - Creating, updating or deleting a Comment (clears all caches)
  - Change Comment Status (clears all caches)
  - Comment Preview (clears all caches)
- Metaweblog Module:
  - Publish or Edit Metaweblog Post (clears if needed either all or sql cache)
  - Set Metaweblog Post Category (clears if needed either all or sql cache)
- Moblog Module:
  - Checking Moblog (clears if needed either all or sql cache)
- Simple Commerce Module:
  - Create or Update Simple Commerce item (clears page cache)
- Wiki Module:
  - Deleting files from Wiki (clears db cache)
  - Update Wiki Template (clears all caches)
  - Editing Wiki Article (clears db cache)
  - Opening or closing a Wiki Revision (clears db cache)
- Deleting a Category Group (clears all caches)

You may also [manually clear caches](control-panel/utilities/data-operations.md#cache-manager) through the control panel.
