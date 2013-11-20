Cache Class
===========

.. contents::
  :local:

.. highlight:: php

Introduction
------------

ExpressionEngine's Cache Class gives developers easy ways to cache data.
The Cache Class provides access to a key-value store. The storage driver
can either file-based or memory-based.

Unlike the :ref:`Session Cache <session_cache>`, items stored using the
Cache class can persist across multiple page loads because cache items
are either stored on disk or in a memory-based cache store not
dependent on ExpressionEngine.

It's highly recommended you use the Cache Class when possible instead of
manually writing to the cache directory so that cache items can be
easily managed and seamlessly moved to a memory-based cache store so
those with high traffic or network file systems can take advantage of
the speed and versatility a memory-based cache offers and not be bogged
down by file locks on the disk.

This class is initialized by the system automatically so there is no
need to do it manually.

Unique key names
----------------

Since a server may be running multiple installs of ExpressionEngine, or
an install of ExpressionEngine may be running multiple sites, and most
caching drivers are server-wide and the server may have other sites
using that driver, the Cache Class will attempt to make a key name
unique to the particular site making the call.

For example, if you save an item to the cache with a key name of
``query``, it will be prefixed with the site's URL and save as
``http://example.com:query``.

The Cache Class also offers the ability to namespace cache items, either
for organizational purposes or to prevent possible collisions with
other keys. For example, if we're developing a module, "My Module"
perhaps, we may want to namespace our key names to my module if they are
a little generic. Our previous ``query`` key would now be saved as
``http://example.com:mymodule:query``

Another reason to namespace is for easy management of groups of cache
items. For example, we store tag and page caches in different
namespaces. If we need to clear all tag caches but page cache items can
remain, we can use the Cache Class to clear all items under the tag
namespace.

Class Methods
-------------

.. class:: Cache

.. method:: save($key, $value[, $ttl = 60[, $namespace = '']])

  Given a key and a value to store, stores the item to the cache with the
  specified expiration time and namespace::

    ee()->cache->save('query', $results, 3600, 'mymodule');

  :param string $key: Key name of item saving to the cache
  :param mixed $value: Data to store in the cache, can be strings,
    integers, arrays or objects
  :param int $ttl: Amount of time in seconds the item should last
    in the cache
  :param string $namespace: Cache items can be grouped together under
    a namespace to avoid possible collision with other keys
  :returns: Success (TRUE) or failure (FALSE)
  :rtype: Boolean


.. method:: get($key[, $namespace = ''])

  Returns a previously saved item from the cache::

    ee()->cache->get('query', 'mymodule');

  :param string $key: Key name of item in the cache
  :param string $namespace: Namespace name
  :returns: Returns the saved item from the cache, or FALSE if item
    isn't found or is expired
  :rtype: Mixed


.. method:: delete($key[, $namespace = ''])

  Deletes an item from the cache::

    ee()->cache->delete('query', 'mymodule');

  :param string $key: Key name of item in the cache
  :param string $namespace: Namespace name
  :returns: Success (TRUE) or failure (FALSE)
  :rtype: Boolean

.. method:: clear_namespace($namespace)

  Deletes all items under a particular namespace::

    ee()->cache->clear_namespace('mymodule');

  :param string $key: Key name of item in the cache
  :param string $namespace: Namespace name
  :returns: Success (TRUE) or failure (FALSE)
  :rtype: Boolean

.. method:: clean()

  Flushes the cache for the entire site completely::

    ee()->cache->clean();

  :returns: Success (TRUE) or failure (FALSE)
  :rtype: Boolean

.. method:: cache_info([$type = NULL])

  Returns information about items stored in the cache under the current
  caching driver::

    $info = ee()->cache->cache_info();

  :param string $type: The APC driver accepts values of ``user`` to
    return information about the user cache, and ``filehits`` to return
    information about files served from the bytecode cache; this
    parameter isn't used in any other drivers
  :returns: Array of information about items in cache, structure varies
    based on caching driver being used
  :rtype: Array

.. method:: get_metadata($key[, $namespace = ''])

  Returns metadata about a particular item in the cache::

    $info = ee()->cache->get_metadata('query', 'mymodule');

  :param string $key: Key name of item in the cache
  :param string $namespace: Namespace name
  :returns: Array of information about requested item; an ``expire`` key
    will specify the Unix timestamp in which the cache item will expire,
    the ``mtime`` key is the time the cache was created, and the
    ``data`` key holds the data of the cache item
  :rtype: Array

.. method:: is_supported()

  Checks to see if appropriate extensions and resources are available
  for a driver to determine if it is usable for caching::

    ee()->cache->memcached->is_supported();

  :returns: TRUE if supported, FALSE if not
  :rtype: Boolean
