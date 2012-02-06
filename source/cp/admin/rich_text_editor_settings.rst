Rich Text Editor Settings
=========================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Content Administration --> Rich Text Editor Settings`

This section of the Control Panel allows you to control ExpressionEngine's
*Rich Text Editor*. A Rich Text Editor (RTE) allows members to produce valid
HTML without knowing how to code.

**Note:** Each member of your site is allowed to specify their preferred
RTE toolset via their My Account page. You can provide one or more toolset
options for them on this page and define a default toolset for members who
have not defined a custom toolset of their own. Members can also disable
RTE support for their own account.


General Rich Text Editor Settings
---------------------------------

|General Rich Text Editor Settings|

Enable the Rich Text Editor globally on all Textarea fields?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you say "yes," all textarea fields on Publish and Edit screens will become
Rich Text Editors.

Choose the Default Toolset
~~~~~~~~~~~~~~~~~~~~~~~~~~

Defines the global Default Toolset. If a member has not disabled RTE support
via My Account and has not defined a Custom Toolset or chosen to use another
available toolset, this is the toolset that will be provided.


Rich Text Editor Toolsets
-------------------------

This table lists all of your RTE toolsets.

|Rich Text Editor Toolsets|

Create a New Toolset
~~~~~~~~~~~~~~~~~~~~

Clicking this button allows you to define a new toolset using the available 
tools.

Toolset Name
~~~~~~~~~~~~

Clicking a toolset's name will allow you to edit that toolset by adding, removing,
and reordering its tools.

|Editing a Toolset|

Enable/Disable
~~~~~~~~~~~~~~

You can toggle the availability of a given toolset by clicking "enable" or
"disable."

Delete
~~~~~~

You can delete a toolset entirely using the "Delete" link.


Rich Text Editor Tools
----------------------

This table lists all of your installed tools. Available tools are
automatically loaded into the system and enabled when they are placed in
the ``third\_party`` folder.

|Rich Text Editor Tools|

Enable/Disable
~~~~~~~~~~~~~~

You can toggle the availability of a given tool by clicking "enable" or
"disable."

.. |General Rich Text Editor Settings| image:: /images/rte_general_settings.png
.. |Rich Text Editor Toolsets| image:: /images/rte_toolsets.png
.. |Editing a Toolset| image:: /images/rte_edit_toolset.png
.. |Rich Text Editor Tools| image:: /images/rte_tools.png