Localization Settings
=====================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Localization Settings`

This section of the Control Panel allows you to define the **default**
localization settings for your website. Here you define things such as
the time zone, time formatting, and Control Panel language.

.. note:: Each member of your site can override these default settings
   by changing their own :doc:`/cp/my_account/index` settings.

Server Time Zone
~~~~~~~~~~~~~~~~

This setting lets you specify the time zone where your **server** is
located. ExpressionEngine uses native PHP functions to deal with dates
and times, which base their output on the timezone of the server. If you
do not set this preference so that it correctly reflects the location of
your server it may cause problems with your dates and times. If you are
not sure where you server is located please ask your hosting provider.

Server Offset (in minutes)
~~~~~~~~~~~~~~~~~~~~~~~~~~

In addition to setting the server time zone above, you may also further
fine-tune the server time settings by specifying a time offset (in
minutes). Add minutes by typing in the number and subtract minutes by
preceding the number with a minus sign. ex: -15. Generally this is
unnecessary unless your server clock is slightly off.

Default Time Formatting
~~~~~~~~~~~~~~~~~~~~~~~

You may specify whether you would like the default time formatting to
follow either the "United States" or "European" conventions.

Daylight Saving Time
~~~~~~~~~~~~~~~~~~~~

Here you can specify whether the server is currently observing Daylight
Saving Time. If and when your server changes its observance, you will
need to update this setting.
