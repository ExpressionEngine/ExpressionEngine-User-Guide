Prefixes
########

.. contents::
  :local:
  :depth: 1

.. highlight:: php

Addon Prefix
============

All addons automatically have a prefix that matches the addon folder. This prefix
works with many of the native services:

Config Service
==============

All config operations support prefixes on item and file names::

  ee('Config')->get('addonname:item');

Dependency Container
====================

The dependency container can use prefixes to create addon services::

  ee('addonname:ServiceName')

Model Service
=============

The model service supports prefixes wherever a model shortname is allowed::

  ee('Model')->get('addonname:MyModel')

View Service
============

Views support prefixes wherever a view name is allowed::

  ee('View')->make('addonname:myview');
