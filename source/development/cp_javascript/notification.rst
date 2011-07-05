Javascript Notification Plugin
==============================

The javascript notification plugin provides a unified way to notify
users of javascript triggered control panel events.

-  `Showing a Notification <notification.html#showing>`_
-  `Multiple Notifications <notification.html#queueing>`_
-  `Hiding a Notification <notification.html#hiding>`_
-  `Parameters <notification.html#parameters>`_

Showing a Notification
----------------------

The notification plugin is loaded automatically. To show a notification,
simply call the plugin with your notice text. ::

	$.ee_notice("Igor, set up program five!");

Multiple Notifications
----------------------

The plugin can show multiple notifications at once. Notifications will
be grouped by type, and consecutive notifications with identical
messages will increment a counter next to the first message. You can
either call the plugin multiple times, or you can provide an array of
messages::

	$.ee_notice([     {message:"Show me First"},     {message:"Show me Second"} ]);

Hiding the Notifications
------------------------

The notification can be manually hidden either by hitting the x in the
top right corner of the dropdown, or by clicking anywhere on the
notification and moving the mouse off the notification body. You can
also hide the notification programmatically using the destroy function.

To avoid overriding important system notifications, this function should
only be used in your own module control panel. Never from an accessory. ::

	$.ee_notice.destroy();

Parameters
----------

The plugin also accepts a second argument that you can use to control
the behavior of the notification. These parameters must be passed in the
form of a javascript object. ::

	$.ee_notice("I'm here to stay", {open: true});

type (default: notice)
^^^^^^^^^^^^^^^^^^^^^^

   Can be used to change the style of the notification. Available
   notification types are succes, notice, error, and custom. When using
   custom, there will be no user clickable area to open the
   notification.

open (default: false \| true for errors)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   When set to true, it will automatically slide down the notification
   without any user interaction.


