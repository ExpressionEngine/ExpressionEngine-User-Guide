#####################################
Rich Text Editor Module Control Panel
#####################################

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Add-Ons --> Modules --> Rich Text Editor`

This page allows you to configure ExpressionEngine's built-in Rich Text Editor (RTE).


.. contents::
   :local:
   :depth: 1


*******************
General Preferences
*******************

Enable the Rich Text Editor
===========================

If "Yes", the Rich Text Editor will be applied to any Channel Fields of
the :doc:`Textarea (Rich Text)</cp/admin/channels/custom_fields_edit>`
fieldtype. If "No", the field will appear as a normal textarea instead.

.. note:: If using the :doc:`/cp/sites/index`, this preference is per-site.

.. _rte-mcp-default-toolset:

Default Toolset
===============

Determines which Toolset will be shown for any member that has not
specifically chosen one in :ref:`my-account-rte-prefs`.

.. note:: If using the :doc:`/cp/sites/index`, this preference is per-site.

********
Toolsets
********

This section allows you to create, edit, enable, disable and delete Toolsets.
Each Toolset listed will be available (unless it is disabled) to all members
of your ExpressionEngine installation, even across :doc:`/cp/sites/index` sites.

Creating a Toolset
==================

- Click the **Create a New Toolset** button and the Toolset Editor will appear.
- Enter a **Toolset Name**.
- Drag and drop the desired Tools from the **Available Tools** box into the
  **This Toolset** box. You can move multiple Tools at once by clicking on
  each Tool to highlight it, then dragging one of the highlighted tools.
- Click **Submit** to save your changes.

Editing a Toolset
=================

- Click a Toolset's name to open the Toolset Editor.
- Modify the **Toolset Name** if desired.
- Drag and drop Tools to and from the **Available Tools** or **This Toolset** box
  as desired. You can move multiple Tools at once by clicking on each Tool to
  highlight it, then dragging one of the highlighted tools.
- Click **Submit** to save your changes.

Enabling and Disabling Toolsets
===============================

To enable or disable a Toolset, click the desired action under the **Status**
column.

A disabled Toolset will not appear as a choice to members, but can still be 
referred to by ID. This is useful in combination with SafeCracker's
:ref:`safecracker-rte-selector` and :ref:`safecracker-rte-toolset-id` parameters,
for example.

Deleting a Toolset
==================

Simply click the **Delete** link for the desired Toolset.

*****
Tools
*****

This section lists the Tools that are currently installed and allows you to enable
or disable them. Disabled Tools will not appear as part of any Toolset.

See :doc:`/development/rte_tools` for information on developing your own Tools.