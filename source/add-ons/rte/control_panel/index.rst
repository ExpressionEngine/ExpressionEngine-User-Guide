.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

#####################################
Rich Text Editor Module Control Panel
#####################################

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Developer --> Add-Ons --> Rich Text Editor`

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
the :doc:`Textarea (Rich Text)</cp/channel/fields/form>`
fieldtype. If "No", the field will appear as a normal textarea instead.

.. note:: If using the :doc:`/cp/msm/index`, this preference is per-site.

.. _rte_mcp_default_toolset:

Default Tool Sets
=================

Determines which tool set will be shown for any member that has not
specifically chosen one in :ref:`my_account_rte_prefs`.

.. note:: If using the :doc:`/cp/msm/index`, this preference is per-site.

*********
Tool Sets
*********

This section allows you to create, edit, enable, disable and delete tool sets.
Each tool set listed will be available (unless it is disabled) to all members
of your ExpressionEngine installation, even across :doc:`/cp/msm/index` sites.

Creating a Tool Set
===================

- Click the **Create New** button and the tool set creation form will appear.
- Enter a tool set name.
- Select the tools you wish to have in your new tool set.
- Click **Save Tool Set** to save your changes.

Editing a Toolset
=================

- Click a tool set's name to open the tool set Editor.
- Modify the tool set's name, if desired.
- Select the tools you wish to have in this tool set.
- Click **Save Tool Set** to save your changes.

Enabling and Disabling Tool Sets
================================

To enable or disable a tool set, check the tool set's checkbox in the tool set table listing. Once one or more tool sets are selected, the bulk action control will appear below the table where you can perform bulk actions on the tool sets. Click the drop down to choose enable or disable and then click Submit.

A disabled tool set will not appear as a choice to members, but can still be
referred to by ID. This is useful in combination with the Channel Form's
:ref:`channel_form_rte_selector` and :ref:`channel_form_rte_toolset_id` parameters,
for example.

Deleting a Tool Set
===================

To delete a tool set, check the tool set's checkbox in the tool set table listing. Once one or more tool sets are selected, the bulk action control will appear below the table where you can perform bulk actions on the tool sets. Click the drop down to choose delete and then click Submit.

*****
Tools
*****

This section lists the Tools that are currently installed and allows you to enable
or disable them. Disabled Tools will not appear as part of any Toolset.

See :doc:`/development/rte_tools` for information on developing your own Tools.
