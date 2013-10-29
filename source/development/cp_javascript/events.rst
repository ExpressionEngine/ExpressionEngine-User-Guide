Custom jQuery Events
====================

ExpressionEngine exposes some custom jQuery events to help capture
interactions that are common in a content management system.

.. contents::
  :local:

.. highlight:: js

.. _jquery-interact:

Form Interaction Event
----------------------

An interaction event (``interact``) can be thought of as an improved
change event. When bound on a form or a form element, it fires whenever
the user makes changes to the form. This includes (un)checking
checkboxes, changing dropdown menus, and manipulating text in a text
input or textarea.

Unlike normal change events, it fires instantly on text inputs and does
not require the user to change focus. ::

  $('form').on('interact', function() {
      // I see typing!
  });

.. note:: When bound on a form, this event will not be triggered on
  submission.


Window Broadcast Event
----------------------

The window broadcast event can be used to communicate state between
control panel windows of the same browser session. To send a message,
simply trigger the event on the window element. ::

  $(window).trigger('broadcast', 'a message');

To listen for events from other windows, bind the event listener on the
window. ::

  $(window).on('broadcast', function(message) {
    alert(message);
  });

To avoid messaging conflicts, it is important that you namespace your
events using jQuery's event namespacing. ::

  $(window).trigger('broadcast.greatAddon', { maxVolume: 11 });
  $(window).on('broadcast.greatAddon', function(msg) {
    console.log(msg.maxVolume);
  });

.. note:: The data is sent as a json encoded string and therefore can
  only contain javascript primitives.