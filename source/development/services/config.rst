.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

##############
Config Service
##############

.. contents::
  :local:
  :depth: 1

.. highlight:: php

**************
Simple Example
**************

This service will read items from a config file. By default all add-ons have a
config directory located at ``./config/`` relative to their ``addon.setup.php`` file.
To fetch items from your config simply do::

  ee('Config')->get('my_addon:my_config.my_item');

.. note:: This does not replace ``ee()->config``

**********************
Config Service Methods
**********************

.. namespace:: EllisLab\\ExpressionEngine\\Service\\Config

.. class:: Factory

.. method:: getDirectory($path)

  Get a config directory

  :param string $path: The path to the directory
  :returns: The directory
  :rtype: Directory

.. method:: getFile($name = 'config')

  Get a config file

  :param string $name: Config file name, optionally with a provider prefix
  :returns: The config file
  :rtype: File

.. method:: get($item, $default = NULL)

  Get a config item

  :param string $name: Config item name, optionally with a provider prefix
  :param mixed $default: The value to return if $path can not be found
  :returns: The config item, or ``$default`` if it doesn't exist
  :rtype: Mixed

************************
Directory Object Methods
************************

.. class:: Directory

.. method:: get($item, $default = NULL)

  Get a config item from this directory

  :param mixed $default: The value to return if $path can not be found
  :returns: The config item, or ``$default`` if it doesn't exist
  :rtype: Mixed

.. method:: hasFile($filename)

  Check if this directory contains the given config file

  :returns: TRUE if it has the file, FALSE if not
  :rtype: Boolean

.. method:: getFile($filename = 'config')

  Returns a Config\File class representing the config file

  :param string $filename: Name of the file
  :returns: Config\File object
  :rtype: File

******************
File Objet Methods
******************

.. class:: File

.. method:: get($path, $default = NULL)

  Get an item from the config, you can use "item.subitem.subsubitem" to drill
  down in the config

  :param string $path: The config item to get
  :param mixed $default: The value to return if $path can not be found
  :returns: The value found for ``$path``, or ``$default`` if it doesn't exist
  :rtype: Mixed

.. method:: has($path)

  Check if the file has a given item

  :returns: TRUE if it has the item, FALSE if not
  :rtype: Boolean

.. method:: getBoolean($path, $default = FALSE)

  Get a config item as a boolean

  This is aware of some of EE's conventions, so it will cast strings y and n to
  the correct boolean.

  :param string $path: The config item to get
  :param bool $default: The default value
  :returns: The value cast to bool
  :rtype: Boolean

.. method:: set($path, $value)

  Set an item in the config. You can use 'item.subitem.subsubitem' to drill
  down in the config.

  :param string $path: The config item to set
  :param mixed $value: The value to set
  :rtype: Void
