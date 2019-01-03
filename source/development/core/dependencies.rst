.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Dependencies
############


.. contents::
  :local:
  :depth: 1

.. highlight:: php

Introduction
============

ExpressionEngine's core is built around a dependency container::

  use EllisLab\ExpressionEngine\Service\Dependency\InjectionContainer;
  $di = new InjectionContainer();

This is simply a container of named objects or factories. The container itself
is not public. Additions are made by declaring them in the ``addon.setup`` file.

Retrieving Data
===============

Anything stored on a dependency container can be retrieve with ``make()``::

  $di->make('Something');

This method is exposed globally as ``ee()``::

  ee('Something');

Adding Objects
==============

You can add objects directly to a dependency container and then call ``make()``
to retrieve them::

  $di->register('Member', $member);

  $di->make('Member') == $member // true

Creating Factories
==================

If a closure is added to the dependency container, it will be treated as a
factory::

  $di->register('User', function($di, $name)
  {
    return new User($name);
  });

When you ``make()`` an item that is a closure, it will be executed and its
result will be returned.
The first parameter to the closure will always be the dependency object that
holds it. All other parameters will be any additional ones that were passed
to ``make()``::

  $u1 = $di->make('User', 'Bob');
  $u2 = $di->make('User', 'Bob');
  $u3 = $di->make('User', 'Alice');

  // $u1 != $u2 != $u3

Hiding Dependencies
===================

The first parameter to a closure inside a dependency container is always the
container itself. This means you can nest calls to the container to resolve
complex dependencies without exposing them in your public API::

  $di->register('Database', function($di, $name)
  {
    return new Database($name);
  })

  $di->register('Session', function($di)
  {
    return new Session(
      $di->make('Database', 'local')
    );
  });

  $di->make('Session'); // no mention of a database
