Add-On Manager
==============

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Developer Tools --> Add-On Manager`

.. Overview

This section of the Control Panel is where add-on functionality is installed,
updated, configured, and removed. They can be filtered by status and developer,
and sorted by the add-on name and versionx. This section is divided into to
sections, one for add-on functionality included with ExpressionEngine, and one
for third party add-ons.

.. Screenshot (optional)

Installing Add-ons
------------------

The Add-On Manager will not download and install add-ons for you. In order to
install an extension you must first place the add-on package in your
/system/user/addons/ folder and then when you reload the Add-On Manager the
add-on will automatically be available for you to install.

.. note:: Add-ons might require other tasks to function correct, so
	make sure to follow any instructions included with the add-on.

.. Permissions

Permission Restrictions
-----------------------

* Access settings: Add-Ons
* Install or remove add-ons
* Allowed add-on access

Actions
-------

.. contents::
  :local:
  :depth: 1

.. Each Action

Search
~~~~~~

This will search add-ons by name respecting the current filters.

Manage
~~~~~~

Install
^^^^^^^

This will install the add-on.

.. note:: This is only made available when the add-on is uninstalled.

Upgrade to
^^^^^^^^^^

This will upgrade the add-on.

.. note:: This is only made available when the add-on is installed and a newer
  version has been uploaded to your /system/user/addons/ folder.

Settings
^^^^^^^^

This will take you to the add-on's settings configuration.

.. note:: This is only made available when the add-on is installed and has
  settings.

Manual
^^^^^^

This will take you to the add-on's manual.

.. note:: This is only made available when the add-on is installed and has
  provided a manual.

Bulk Actions
~~~~~~~~~~~~

The checkbox in the right-most column of the table selects a button for a bulk
action. When at least one checkbox is checked the bulk action dropdown menu and
submit button will be made available in the lower righthand corner of the table.

Install
^^^^^^^

The selected add-ons will be installed.

Remove
^^^^^^

The selected add-ons will be removed. Removing an add-on will cause a
confirmation modal to appear that will summarize the action.

Update
^^^^^^

The selected add-ons will be updated.
