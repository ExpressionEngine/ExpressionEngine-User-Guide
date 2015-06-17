############
IP to Nation
############

.. contents::
   :local:
   :depth: 2

************
Introduction
************

The IP to Nation module enables you to determine which country an IP
address is associated with. You can do two things with this information:

#. **Ban entire countries.** When a country is banned, someone with an
   IP address from that country is not permitted to submit comments,
   referrer data, or use the email/tell-a-friend forms.
#. **Show a flag icon** |image0| within your comments or entries to
   indicate the country of the person who submitted the entry.

.. note:: When updating your IP to Nation module, make sure that you
   also update your /system/expressionengine/config/countries.php file so
   that newly added or changed nations display properly.

.. note:: The IP to Nation Module is available only with a
   `purchased <https://store.ellislab.com/>`_ ExpressionEngine license.

****************
Database Updates
****************

Periodically, the IP address database for the IP to Nation module is
updated from `maxmind.com <http://www.maxmind.com/>`_'s database. When
this occurs, a note will be made in the :doc:`Change Log </about/changelog>`.
To update your installation, simply make sure that you are running the
latest version of ExpressionEngine, and visit the :menuselection:`Add-
Ons --> Modules --> IP to Nation` page in your Control Panel. The update
may take a few seconds; do not click any links or refresh the page while
the auto-update is taking place.

You also manually update the IP address database using the Update IP
Database page. The new files will automatically be downloaded for you
to use.

****************
Banning Counties
****************

To look up the country associated with an IP address, or to ban a
country, go to :menuselection:`Add-Ons --> Modules --> IP to Nation` in your Control
Panel.

***************
World Flags Tag
***************

In order to use the world flag feature, please first visit the Modules
page of the control panel and make sure your IP to Nation module is
installed.

.. note:: Please `download the flag
   icons <https://ellislab.com/asset/file/world_flags.zip>`_ from
   ExpressionEngine.com. Once downloaded, unzip the archive, then upload
   the "world\_flags" folder to your server. The folder can go anywhere
   since you'll set the URL in the tag as described below.

The "world flags" tag can be used within your {exp:comment:entries} or
{exp:channel:entries} like this::

	{exp:ip_to_nation:world_flags image_url="http://example.com/images/world_flags/"}
		{ip_address}
	{/exp:ip_to_nation:world_flags}

Parameters
==========

.. contents::
   :local:

image\_url=
-----------

This URL to your "world\_flags" folder.

Make sure you include the folder name in the URL and include a trailing
slash::

	http://example.com/images/world_flags/

type="text"
-----------

You can optional set the tag to output the name of the country as text
by using the type="text" parameter.

.. |image0| image:: flag_us.gif

.. note:: This product includes GeoLite data created by MaxMind,
  available from `http://maxmind.com/ <http://maxmind.com/>`_.