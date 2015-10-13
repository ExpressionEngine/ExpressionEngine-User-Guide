Prefixes
########

.. highlight:: php

In a system that runs add-on code from potentially many different developers it
can be difficult to prevent naming collisions. Namespaces work well when dealing
with native objects, but the ability to alias long namespace names gets lost when
using strings to identify files and class names.

To consistently solve this problem, ExpressionEngine assigns a prefix to all independent
code sources. For any native code this prefix is **ee:**. All addons are assigned
a prefix that matches the addon folder name. This also matches the name used in the
templating engine.

The following services currently support the prefix naming conventions:

.. contents::
  :local:
  :depth: 1

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
