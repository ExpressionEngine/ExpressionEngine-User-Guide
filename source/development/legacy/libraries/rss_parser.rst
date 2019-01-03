.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

################
RSS Parser Class
################

The RSS Parser Class is singularly used as a factory to create
`SimplePie objects <http://simplepie.org/api/class-SimplePie.html>`_.

.. method:: create($url[, $duration = 180[, $cache_name = '']])

  Creates a SimplePie object given a `url`, and optionally a cache
  duration and name::

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

  :param string $url: URL of the RSS feed to parse
  :param int $duration: (*optional*) Length of the cache in minutes
  :param string $cache_name: (*optional*) Name of feed for namespacing
    in the cache
  :returns: SimplePie object
  :rtype: Object

  .. note:: If the ``$url`` of the feed cannot be found an ``Exception``
    is thrown.
