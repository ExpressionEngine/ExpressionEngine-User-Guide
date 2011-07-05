Channel Information Tag
=======================

The purpose of this tag is to display general information about the
specified channel as set under Admin > Channel Management. ::

	{exp:channel:info channel="news"}  Channel Name: {channel_title}<br /> Description: {channel_description}  {/exp:channel:info}

Parameters
----------


channel=
~~~~~~~~

::

	channel="channel_name"

The name (short name) of the channel. This is a **required** parameter.

Variables
---------


channel\_description
~~~~~~~~~~~~~~~~~~~~

::

	{channel_description}

This variable simply displays the content from the "Channel Description"
field.

channel\_encoding
~~~~~~~~~~~~~~~~~

::

	{channel_encoding}

This variable simply displays the content from the "XML Character
Encoding" setting.

channel\_lang
~~~~~~~~~~~~~

::

	{channel_lang}

This variable simply displays the content from the "XML Language"
setting.

channel\_title
~~~~~~~~~~~~~~

::

	{channel_title}

This variable simply displays the content from the "Full Channel Name"
setting.

channel\_url
~~~~~~~~~~~~

::

	{channel_url}

This variable simply displays the content from the "Channel URL"
setting.
