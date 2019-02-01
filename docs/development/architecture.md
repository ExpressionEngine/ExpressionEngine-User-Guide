---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Architecture

[TOC]

ExpressionEngine's architecture is based around a few core ideas. This section is meant to illustrate them to those that are interested. Much of it is optional but a cursory understanding will help to clarify the big picture.

## Dependencies

ExpressionEngine's core is built around a dependency container:

    use EllisLab\ExpressionEngine\Service\Dependency\InjectionContainer;
    $di = new InjectionContainer();

This is simply a container of named objects or factories. The container itself is not public. Additions are made by declaring them in the `addon.setup` file.

### Retrieving Data

Anything stored on a dependency container can be retrieve with `make()`:

    $di->make('Something');

This method is exposed globally as `ee()`:

    ee('Something');

### Adding Objects

You can add objects directly to a dependency container and then call `make()` to retrieve them:

    $di->register('Member', $member);

    $di->make('Member') == $member // true

### Creating Factories

If a closure is added to the dependency container, it will be treated as a factory:

    $di->register('User', function($di, $name)
    {
      return new User($name);
    });

When you `make()` an item that is a closure, it will be executed and its result will be returned. The first parameter to the closure will always be the dependency object that holds it. All other parameters will be any additional ones that were passed to `make()`:

    $u1 = $di->make('User', 'Bob');
    $u2 = $di->make('User', 'Bob');
    $u3 = $di->make('User', 'Alice');

    // $u1 != $u2 != $u3

### Hiding Dependencies

The first parameter to a closure inside a dependency container is always the container itself. This means you can nest calls to the container to resolve complex dependencies without exposing them in your public API:

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

## Prefixes

In a system that runs add-on code from potentially many different developers it can be difficult to prevent naming collisions. Namespaces work well when dealing with native objects, but the ability to alias long namespace names gets lost when using strings to identify files and class names.

To consistently solve this problem, ExpressionEngine assigns a prefix to all independent code sources. For any native code this prefix is **ee:**. All addons are assigned a prefix that matches the addon folder name. This also matches the name used in the templating engine.

The following services currently support the prefix naming conventions:

### Config Service

All config operations support prefixes on item and file names:

    ee('Config')->get('addonname:item');

### Dependency Container

The dependency container can use prefixes to create addon services:

    ee('addonname:ServiceName')

### Model Service

The model service supports prefixes wherever a model shortname is allowed:

    ee('Model')->get('addonname:MyModel')

### View Service

Views support prefixes wherever a view name is allowed:

    ee('View')->make('addonname:myview');

## Providers

### Motivation

Consider a situation where an add-on exposes a "Cart" service on the dependency container. Without separation, this service name could not be used by other add-ons without creating a collision.

NOTE: **Important:** Please make sure you understand the [Dependency Container](#dependencies) before reading this section.

### Solution

Providers help keep these parts separate by automatically prefixing them. All providers are simply a wrapper around the same core dependency object, with a given prefix:

    $prefix = 'myaddon';
    $provider = new Provider($dependencies, $prefix);

When registering or accessing an element on a provider, the prefix is automatically enforced. So these two are equivalent:

    $provider->register('service', $obj);
    // ==
    $dependencies->register('myaddon:service', $obj);

All providers are simply wrappers around the same core dependency object, so elements from other provider are available on all of them, using the correct prefix:

    $provider->make('service'); // addon:service
    $provider->make('addoff:service'); // addoff:service

### Default Provider

The default provider is the one that exposes the "ee" prefix. This prefix is used for all the default services. The `ee()` function is an alias to the default provider's `make()` method.
