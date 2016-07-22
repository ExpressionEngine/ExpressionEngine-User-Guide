Create/Edit Menu Sets
=====================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Settings --> Menu Sets`

.. Overview

This section of the Control Panel allows you to define your menu sets and assign them to member groups.

.. Screenshot (optional)

.. Permissions

Permission Restrictions
-----------------------

* Access settings: General Settings

Fields
------

.. contents::
  :local:
  :depth: 1

.. Each Field

Name
~~~~

The name of the menu set.

Member Groups
~~~~~~~~~~~~~

The member group(s) the menu set is assigned to.  Only members in the specified groups will see this menu.

.. note:: Be careful not to create links to pages the assigned member group does not have access to or they will end up on an error page with a denied access message.

Menu Items
~~~~~~~~~~

View, set the sort order and delete all existing menu items in this set.


Add Menu Items
==============

Clicking the **Add Menu Item** button will bring up a form in a modal.  You will first need to specify the type of menu item you are creating.

Add-On
------

ExpressionEngine add-ons may include their own pre-set menu items.  This is often the case when it's useful to have ready access to multiple sections of the add-on.  If any installed add-ons include a pre-set menu section, it will be selectable under the 'Add-on' menu type.

Single Link
-----------

This option allows you to add a single link, either to an external URL or to a page in the control panel.

Name
~~~~

The text to display in the menu.

URL
~~~

The URL for the menu item.  This may be an external or an internal URL.

Dropdown
--------

With complex menus, you may want to break your navigation up into nested subsections.  The dropdown menu type allows you to do this.

Name
~~~~

The top level name for this section to dispaly in the menu.

Submenu
~~~~~~~

The name and url for each sub-menu item.  This list is drag and drop sortable, and existing items may be deleted by clicking the trash icon.



