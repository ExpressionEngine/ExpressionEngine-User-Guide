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

# RSS Parser Class

The RSS Parser Class is singularly used as a factory to create [SimplePie objects](https://simplepie.org/api/class-SimplePie.html).

### `create($url[, $duration = 180[, $cache_name = '']])`

| Parameter    | Type     | Description                                            |
| ------------ | -------- | ------------------------------------------------------ |
| \$url        | `String` | URL of the RSS feed to parse                           |
| \$duration   | `Int`    | (_optional_) Length of the cache in minutes            |
| \$cache_name | `String` | (_optional_) Name of feed for namespacing in the cache |
| Returns      | `Object` | SimplePie object                                       |

Creates a SimplePie object given a _url_, and optionally a cache duration and name:

    ee()->load->library('rss_parser');
    $feed = ee()->rss_parser->create(
        'https://ellislab.com/blog/rss-feed',
        30, // 30 minute cache
        'blog_feed'
    );

    // Perform operations on SimplePie object...
    $offset = 0;
    $limit = 5;
    foreach ($feed->get_items($offset, $limit) as $index => $item)
    {
      $title = $item->get_title();
      $content = $item->get_content();
      ...

NOTE: **Note:** If the `$url` of the feed cannot be found an `Exception` is thrown.
