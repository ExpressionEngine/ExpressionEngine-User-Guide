################
RSS Parser Class
################

The RSS Parser Class is singularly used as a factory to create
`SimplePie <http://simplepie.org>`_ objects.

.. method:: create($url[, $duration = 180[, $cache_name = '']])

  Creates a SimplePie object given a `url`, and optionally a cache
  duration and name::

    ee()->load->library('rss_parser');
    $feed = ee()->rss_parser->create(
        'http://ellislab.com/blog/rss-feed',
        30, // 30 minute cache
        'blog_feed'
    );

    // Perform operations on SimplePie object...

  :param string $url: URL of the RSS feed to parse
  :param int $duration: (*optional*) Length of the cache in minutes
  :param string $cache_name: (*optional*) Name of the directory within
    ExpressionEngine's cache directory
  :returns: SimplePie object
  :rtype: Object

  .. note:: If the ``$url`` of the feed cannot be found an ``Exception``
    is thrown.
