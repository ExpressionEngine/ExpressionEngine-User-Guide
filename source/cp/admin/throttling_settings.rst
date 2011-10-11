Throttling Preferences
======================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Security and Privacy --> Throttling Preferences`

This section of the Control Panel allows you to manage the Throttling
feature. See :doc:`/general/throttling` for more information
regarding this feature.

Enable Throttling
~~~~~~~~~~~~~~~~~

Allows you to enable or disable this feature.

Deny Access if No IP Address is Present
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If this setting is set to yes, throttling will be immediately triggered
if the user visiting your site is not generating IP Address information.

Maximum Number of Page Loads
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The total number of times a user is allowed to load your web pages
(within the time interval below) before being locked out. For example,
if you set this preference to 5 page loads within 10 seconds, a user can
not browse more than 5 pages within a 10 second interval or the
throttling feature will be triggered, locking them out of your site
according to the parameters you set below.

Time Interval
~~~~~~~~~~~~~

The number of **seconds** during which the above number of page loads
are allowed.

Lockout Time
~~~~~~~~~~~~

The length of time in **seconds** that a user will be unable to use your
site.

Action to Take
~~~~~~~~~~~~~~

The action that should take place if a user has exceeded the limits. The
options are:

-  **Send 404 Headers**: This option will cause standard server 404 Page
   Not Found headers to be sent.
-  **URL Redirect**: This option will send the user to a URL of your
   choice.
-  **Show a Custom Message**: This option will display a custom message
   you can specify.

URL for Redirect
~~~~~~~~~~~~~~~~

If you choose the **URL Redirect** option above, this preference enables
you to set the destination URL.

Custom Message
~~~~~~~~~~~~~~

If you choose the **Show a Custom Message** option above, this
preference enables you to specify the message.
