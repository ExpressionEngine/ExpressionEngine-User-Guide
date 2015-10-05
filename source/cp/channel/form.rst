Create/Edit Channel
===================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Developer Tools --> Channel Manager --> New/Edit Channel`

.. Overview


.. Screenshot (optional)

.. Permissions

Permission Restrictions
-----------------------

* Access settings: Design & Content
* Channels: Create Channels
* Channels: Edit Channels

Fields
------

.. contents::
  :local:
  :depth: 1

.. Each Field



Name
~~~~

The "full channel name" is the descriptive name for the channel. This is
the name of your channel that you will show to visitors and display on
your site.

The full channel name is a required field. Spaces, punctuation, and
other special characters are allowed. For example, the channel's
descriptive name might be Joe's Personal Channel.


Short name
~~~~~~~~~~

The "short name" for the channel is the name used internally within the
program. It is also used when specifying a channel in variables of
parameters in your :doc:`/cp/design/templates/index`. It is not normally
shown to visitors or otherwise exposed outside of your channel "setup".

The channel's short name is a required field. It must be a single word
with no spaces. The underscore character is allowed. For example, the
channel's "short name" might be joe_channel.

Status groups
~~~~~~~~~~~~~

Sets the :doc:`status group <statuses>` assigned to the channel.
This determines what statuses are associated with the channel. The list
is dynamically populated with all the existing groups as well as "None".

If you choose to not assign a status group to a channel, only Super
Admins will be able to post entries with an 'open' status.


Title field label
~~~~~~~~~~~~~~~~~

Sets the title field label in the Publish form for this channel.


Custom field group
~~~~~~~~~~~~~~~~~~

Sets the :doc:`field group <custom_channel_fields>` assigned to
the channel. This determines which channel fields are associated with
the channel. The list is dynamically populated with all the existing
groups as well as "None".

Category groups
~~~~~~~~~~~~~~~

Sets the :doc:`category groups <category_management>` assigned
to the channel. This determines what categories are associated with the
channel. The list is dynamically populated with all the existing groups
as well as "None".

