Cache Class
===========

.. contents::
  :local:

.. highlight:: php

Introduction
------------

ExpressionEngine's Cache Class gives developers easy ways to cache data
(strings, arrays, objects) in a key-value store. The storage driver can
be either file-based or memory-based. More about supported drivers and
configuration can be found under
:ref:`Data Caching and Performance <caching_drivers>`.

Unlike the :ref:`Session Cache <session_cache>`, items stored using the
Cache class can persist across multiple page loads because cache items
are either stored on disk or in a memory-based cache store not
dependent on ExpressionEngine.

It's highly recommended you use the Cache Class when possible instead of
manually writing to a cache directory so that cache items can be easily
managed and seamlessly moved to a memory-based cache store so those with
high traffic or network file systems can take advantage of the speed and
versatility a memory-based cache offers and not be bogged down by file
locks and I/O limitations on the disk.

This class is initialized by the system automatically so there is no
need to do it manually.

Namespacing
-----------

You may want an extra layer of organization to your cache items, either
for easy management or to prevent collisions with other keys in the
system.

For example, let's say we have an add-on called MyAddon and we
want to make sure our cache keys don't conflict with any others in
ExpressionEngine, whether they be from other add-ons or native code.
We'll save and access our data like so::

  ee()->cache->save('/myaddon/mykey', $data);
  $data = ee()->cache->get('/myaddon/mykey');

We can go even further and nest our namespacing as deep as we want for
further organization::

  ee()->cache->save('/myaddon/entries/239', $data);

Where this comes in handy is clearing subsets of our own cache. If a
condition arises in which we must flush all the items in our ``/entries/``
namespace, we make this call to :meth:`Cache::delete`::

  ee()->cache->delete('/myaddon/entries/');

With that, all the items we saved under ``/entries/`` will be deleted
while the rest of the items stored under our root namespace are kept.
We can also clear the entire cache for our add-on without flushing out
cache items for other add-ons or native components::

  ee()->cache->delete('/myaddon/');

Namespacing gives you granular control over which items in your cache
should be purged without affecting other parts of your add-on or
ExpressionEngine.

.. note:: When flushing a namespace, the key must end with the namespace
    separator (``/``) so the Cache class knows to clear a namespace
    instead of trying to delete a key with the name of your namespace.

Scoping
-------

Items stored in the cache by default are scoped to the site currently
saving or retrieving from the cache. This prevents cache keys from
colliding when the same keys are used in
:doc:`multiple sites </cp/msm/index>` in the same ExpressionEngine
install.

But you may want the same cache item available across all sites in
your ExpressionEngine install. In that case, you must specify a global
scope by passing the ``Cache::GLOBAL_SCOPE`` constant when saving or
retrieving from the cache::

  ee()->cache->save('mykey', $data, 500, Cache::GLOBAL_SCOPE);
  ee()->cache->get('mykey', Cache::GLOBAL_SCOPE);

By default, the scope parameter is ``Cache::LOCAL_SCOPE``. Setting a
global scope allows cache keys to be shared across the installation,
while a local scope keeps keys specific to individual sites.

Class Methods
-------------

.. class:: Cache

.. method:: save($key, $value[, $ttl = 60[, $scope = Cache::LOCAL_SCOPE]])

  Given a key and a value to store, stores the item to the cache with the
  specified expiration time and namespace::

    ee()->cache->save('/mymodule/mykey', $results, 3600);

  :param string $key: Key name of item saving to the cache
  :param mixed $value: Data to store in the cache, can be strings,
    integers, arrays or objects
  :param int $ttl: Amount of time in seconds the item should live
    in the cache
  :param const $scope: ``Cache::LOCAL_SCOPE`` or ``Cache::GLOBAL_SCOPE``
    for local or global scoping of the cache item
  :returns: Success (TRUE) or failure (FALSE)
  :rtype: Boolean


.. method:: get($key[, $scope = Cache::LOCAL_SCOPE])

  Returns a previously saved item from the cache::

    $data = ee()->cache->get('/mymodule/mykey');

  :param string $key: Key name of item in the cache
  :param const $scope: ``Cache::LOCAL_SCOPE`` or ``Cache::GLOBAL_SCOPE``
    for local or global scoping of the cache item
  :returns: Returns the saved item from the cache, or FALSE if item
    isn't found or is expired
  :rtype: Mixed


.. method:: delete($key[, $scope = Cache::LOCAL_SCOPE])

  Deletes an item from the cache::

    ee()->cache->delete('/myaddon/mykey');

  Or deletes all items under a particular namespace::

    ee()->cache->delete('/myaddon/');

  :param string $key: Key name of item in the cache
  :param const $scope: ``Cache::LOCAL_SCOPE`` or ``Cache::GLOBAL_SCOPE``
    for local or global scoping of the cache item or namespace
  :returns: Success (TRUE) or failure (FALSE)
  :rtype: Boolean

.. method:: clean([$scope = Cache::LOCAL_SCOPE])

  Flushes the entire cache for the specified scope. Specifying a scope
  of ``Cache::GLOBAL_SCOPE`` clears the cache for the entire
  installation.

  ::

    ee()->cache->clean();

  :param const $scope: ``Cache::LOCAL_SCOPE`` or ``Cache::GLOBAL_SCOPE``
    for clearing the local or global scope of cache items
  :returns: Success (TRUE) or failure (FALSE)
  :rtype: Boolean

.. method:: cache_info()

  Returns information about items stored in the cache under the current
  caching driver::

    $info = ee()->cache->cache_info();

  :returns: Array of information about items in cache, structure varies
    based on caching driver being used
  :rtype: Array

.. method:: get_metadata($key[, $scope = Cache::LOCAL_SCOPE])

  Returns metadata about a particular item in the cache::

    $info = ee()->cache->get_metadata('/myaddon/mykey');

  :param string $key: Key name of item in the cache
  :param const $scope: ``Cache::LOCAL_SCOPE`` or ``Cache::GLOBAL_SCOPE``
    for local or global scoping of the cache item
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
