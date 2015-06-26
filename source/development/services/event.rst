Event Service
=============

.. highlight:: php

Simple Example
--------------

  $event_bus = ee('Event');

  $event_bus->on('clockTick', function($time) {
    echo "It's {$time} o'clock.";
  });

  $event_bus->emit('clockTick', 5);


Publish and Subscribe
---------------------
