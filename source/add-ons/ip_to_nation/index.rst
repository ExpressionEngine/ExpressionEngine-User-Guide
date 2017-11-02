IP to Nation
============

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Developer Tools --> Add-On Manager --> IP to Nation`

.. contents::
   :local:
   :depth: 2

The IP to Nation module enables you to determine which country an IP
address is associated with. You can do two things with this information:

#. **Ban entire countries.** When a country is banned, someone with an
   IP address from that country is not permitted to submit comments,
   referrer data, or use the email/tell-a-friend forms.
#. **Show a flag icon** |image0| within your comments or entries to
   indicate the country of the person who submitted the entry.

.. note:: The IP to Nation Module is available only with a
   `purchased <https://store.ellislab.com/>`_ ExpressionEngine license.

Database Updates
----------------

To update your installation, simply make sure that you are running the
latest version of ExpressionEngine, and visit the :menuselection:`Developer Tools --> Add-On Manager --> IP to Nation` page in your Control Panel and click the Update IP Database button. The update
may take a few seconds; do not click any links or refresh the page while
the auto-update is taking place.

Banning Countries
-----------------

To look up the country associated with an IP address, or to ban a
country, go to :menuselection:`Developer Tools --> Add-On Manager --> IP to Nation` in your Control
Panel and enter an IP address in the "Search for an IP address" field.

To ban a country, make sure your IP database is updated, then find the country you wish to ban in the "Banned countries" checklist. Make a selection and click Save Banlist.

World Flags Tag
---------------

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
----------

.. contents::
   :local:

image\_url=
~~~~~~~~~~~

This URL to your "world\_flags" folder.

Make sure you include the folder name in the URL and include a trailing
slash::

	http://example.com/images/world_flags/

type="text"
~~~~~~~~~~~

You can optional set the tag to output the name of the country as text
by using the type="text" parameter.

.. |image0| image:: flag_us.gif

.. note:: This product includes GeoLite data created by MaxMind,
  available from `http://maxmind.com/ <http://maxmind.com/>`_.
