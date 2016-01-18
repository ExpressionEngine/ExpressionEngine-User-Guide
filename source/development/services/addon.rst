Addon Service
=============

.. contents::
  :local:
  :depth: 1

.. highlight:: php

Simple Example
--------------

Read-only access to the data in an ``addon.setup.php`` file is made available
via the object returned from a ``ee('Addon')->get($addon_name)`` call. The
returned object has a ``get($key)`` method to retrieve data. For example::

  $info = ee('Addon')->get('hello_world');
  echo $info->get('description');

Addon Service Methods
---------------------

.. namespace:: EllisLab\\ExpressionEngine\\Service\\Addon

.. class:: Factory

.. method:: get($name)

  Get an add-on object.

  :param string $name: The short name of the add-on
  :returns: An Addon
  :rtype: Addon

.. method:: all()

  Get all add-ons.

  :returns: An array of Addon objects
  :rtype: Array

.. method:: installed($name)

  Get all the installed add-ons.

  :returns: An array of Addon objects
  :rtype: Array

Addon Object Methods
--------------------

.. class:: EllisLab\\ExpressionEngine\\Service\\Addon\\Addon

.. method:: isInstalled()

  Is this addon installed?

  :returns: TRUE if it is, FALSE if not
  :rtype: Boolean

.. method:: hasUpdate()

  Does this addon have an update available?

  :returns: TRUE if it does, FALSE if not
  :rtype: Boolean

.. method:: getInstalledVersion()

  Get the installed version

  :returns: NULL if not installed or a version string
  :rtype: Mixed

.. method:: getFrontendClass()

  Get the plugin or module class

  :returns:The fqcn or $class
  :rtype: String

.. method:: getModuleClass()

  Get the module class

  :returns:The fqcn or $class
  :rtype: String

.. method:: getPluginClass()

  Get the plugin class

  :returns:The fqcn or $class
  :rtype: String

.. method:: getInstallerClass()

  Get the *_upd class

  :returns:The fqcn or $class
  :rtype: String

.. method:: getControlPanelClass()

  Get the *_mcp class

  :returns:The fqcn or $class
  :rtype: String

.. method:: getExtensionClass()

  Get the extension class

  :returns:The fqcn or $class
  :rtype: String

.. method:: hasManual()

  Does this addon have a ``README.md`` file?

  :returns: TRUE if it does, FALSE if not
  :rtype: Boolean

.. method:: hasFrontend()

  Does this addon have module or plugin?

  :returns: TRUE if it does, FALSE if not
  :rtype: Boolean

.. method:: hasInstaller()

  Does this addon have a ``upd.`` file?

  :returns: TRUE if it does, FALSE if not
  :rtype: Boolean

.. method:: hasControlPanel()

  Does this addon have a ``mcp.`` file?

  :returns: TRUE if it does, FALSE if not
  :rtype: Boolean

.. method:: hasModule()

  Does this addon have a ``mod.`` file?

  :returns: TRUE if it does, FALSE if not
  :rtype: Boolean

.. method:: hasPlugin()

  Does this addon have a ``pi.`` file?

  :returns: TRUE if it does, FALSE if not
  :rtype: Boolean

.. method:: hasExtension()

  Does this addon have a ``ext.`` file?

  :returns: TRUE if it does, FALSE if not
  :rtype: Boolean

.. method:: hasFieldtype()

  Does this addon have a ``ft.`` file?

  :returns: TRUE if it does, FALSE if not
  :rtype: Boolean

.. method:: getFieldtypeClasses()

  Gets an array of the filedtype classes

  :returns: An array of classes
  :rtype: Array

.. method:: getFieldtypeNames()

  Get an associative array of names of each fieldtype. Maps the fieldtype's
  shortname to it's display name. The provider file is first checked for the
  display name in the `fieldtypes` key, falling back on the `getName()` method.

  :returns: An associative array of shortname to display name for each fieldtype.
  :rtype: Array

.. method:: getProvider()

  Get the add-on Provider

  :returns: The add-on provider
  :rtype: EllisLab\\ExpressionEngine\\Core\\Provider