Forum Themes
============

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Developer --> Templates --> Forums`

The ExpressionEngine Forums make use of "themes" to determine how they
are displayed. The Forum Module comes with several "default" themes,
located in your installation under themes/ee/forum/.  Each theme is in a folder named after the theme.

In order to edit the Templates, copy any themes you want to customize to::

    themes/user/forum/custom_theme_name/

.. note:: The contents of themes/ee/ are replaced every update, and any changes made there will be lost. All customization needs to happen in themes/user/.

To make edits to the templates from inside the Control Panel, set the theme folders and files to be writable. See :doc:`/troubleshooting/general/file_permissions` for details. Only themes in the themes/user/ folder will be available for editing in the Control Panel.

You can easily switch the default theme used by the forum by choosing a new one under Default Preferences.

