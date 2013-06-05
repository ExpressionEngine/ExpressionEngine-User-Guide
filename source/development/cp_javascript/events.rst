Custom jQuery Events
====================

ExpressionEngine exposes some custom jQuery events to help capture
interactions that are common in a content management system.

.. contents::
  :local:

.. highlight:: js

Form Interaction Event
----------------------

An interaction event (``interact``) can be thought of as an improved
change event. When bound on a form or a form element, it fires whenever
the user makes changes to the form. This includes (un)checking
checkboxes, changing dropdown menus, and manipulating text in a text
input or textarea.

Unlike normal change events, it fires instantly on text inputs and does
not require the user to change focus. ::

  $('form').bind('interact', function() {
      // I see typing!
  });

.. note:: When bound on a form, this event will not be triggered on
  submission.