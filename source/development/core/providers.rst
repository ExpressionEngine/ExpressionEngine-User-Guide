Providers
#########

.. contents::
  :local:
  :depth: 1

.. highlight:: php


Motivation
==========

Consider a situation where an add-on exposes a "Cart" service on the dependency
container. Without separation, this service name could not be used by other
add-ons without creating a collision.

.. important:: Please make sure you understand the :doc:`Dependency Container <./dependencies>`
  before reading this section.

Solution
========

Providers help keep these parts separate by automatically prefixing them. All
providers are simply a wrapper around the same core dependency object, with a
given prefix::

  $prefix = 'myaddon';
  $provider = new Provider($dependencies, $prefix);

When registering or accessing an element on a provider, the prefix is
automatically enforced. So these two are equivalent::

  $provider->register('service', $obj);
  // ==
  $dependencies->register('myaddon:service', $obj);

All providers are simply wrappers around the same core dependency object, so
elements from other provider are available on all of them, using the correct
prefix::

  $provider->make('service'); // addon:service
  $provider->make('addoff:service'); // addoff:service

Default Provider
================

The default provider is the one that exposes the "ee" prefix. This prefix is
used for all the default services. The ``ee()`` function is an alias to the
default provider's ``make()`` method.
