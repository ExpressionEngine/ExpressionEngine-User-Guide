---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://www.packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Event Service

[TOC]

## Simple Example

Some objects need to broadcast changes to their internal state, without knowing who the exact audience is. The event service smooths out these decoupled interactions by providing a unified event api.

    $emitter = ee('Event');

    $emitter->on('clockTick', function($time) {
      echo "It's {$time} o'clock.";
    });

    $emitter->emit('clockTick', 5);

## Creating an Emitter

A new event emitter instance can be retrieved from the core dependency object. All events are local to a given instance:

    $emitter = ee('Event');

## Listening for Events

You can bind an event handler using the `on()` method. It will take an event name and a callback that is triggered when the event is fired:

    $emitter->on('save', function() { echo "save"; });

To stop listening to an event use the `off()` method. Calling `off()` with only an event name will unbind all event handlers. Alternatively, you can pass in your original callback to unbind it:

    $emitter->on('save', $callback);

    $emitter->off('save', $callback); // unbind one
    $emitter->off('save'); // unbind all

You can also bind an event handler that is only fired once by using the `once()` method:

    $emitter->once('save', function() { echo "click"; });

## Emitting Events

To trigger an event on an emitter, simply call `emit()` with an event name. Any additional parameters will be passed to the callback as event parameters:

    $emitter->on('click', function($x, $y) { /* ... */ });
    $emitter->emit('click', $mouse_x, $mouse_y);

## Global Events

Each call to `ee('Event')` will return a new event emitter instance. There is currently no global event emitter. For global message passing, you should consider using an [extension](development/extensions.md) instead.

## Publish and Subscribe

To help implement PubSub systems, there are two global interfaces that you should consider using:

    EllisLab\ExpressionEngine\Service\Event\Publisher
    EllisLab\ExpressionEngine\Service\Event\Subscriber

To create a subscriber, simply implement the `getSubscribedEvents()` interface method. You should also have a public `on<EventName>` method for any events you subscribe to:

    use EllisLab\ExpressionEngine\Service\Event\Subscriber;

    class Button extends UIElement implements Subscriber {

      public function getSubscribedEvents()
      {
        return array('click');
      }

      public function onClick()
      {
        echo 'clicked';
      }

    }

To create an emitter, implement the `subscribe()` and `unsubscribe()` methods. The core event emitter implements the publisher interface, so it can be used as a publisher for many common uses:

    $my_button = new Button();

    $emitter->subscribe($my_button);
    $emitter->emit('click'); // echo 'clicked';
