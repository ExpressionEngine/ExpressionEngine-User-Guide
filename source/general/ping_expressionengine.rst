Pinging ExpressionEngine.com
============================

ExpressionEngine has a feature that allows you to send a "ping" to the
ExpressionEngine.com servers. This notifies ExpressionEngine that you
updated your site and will allow you to be listed in a "recently updated
sites" list.

Enabling this feature is simple and only requires a few steps.

Step 1
------

In the Control Panel, go to your `General
Configuration <../cp/admin/system_admin/general_configuration.html>`_
page. In the License Number setting you need to enter your
ExpressionEngine License Number. This is a four-segment number that you
received with your ExpressionEngine purchase receipt email. It looks
similar to this::

	1327-4819-3979-8382

If you no longer have your ExpressionEngine License Number, then you may
get another copy of your license number by going to the `Download
Area <https://secure.expressionengine.com/download.php>`_ of the
ExpressionEngine site and accessing the "Purchase History" for your
product.

Step 2
------

In the `Default Ping
Preferences <../cp/admin/content_admin/default_ping_servers.html>`_
section of your Control Panel, you will want to add an entry for the
ExpressionEngine ping server::

	http://ping.expressionengine.com/index.php

You may also wish to make sure that the ping server is listed in your
individual list available under `My
Account <../cp/my_account/index.html>`_.

Once the Ping Server has been added, it will appear in your list of
available servers whenever you create a new entry on the Publish page.
