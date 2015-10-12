##################
Add-On Development
##################

Guidelines, reference material, and tutorials for developing add-ons for ExpressionEngine.

.. contents::
  :local:

Legacy Documentation
====================

The following are areas that exist relatively unchanged from ExpressionEngine 2.0 and are earmarked
for replacement in the future, but are not yet deprecated. Use these freely until replacement libraries
or services are created.

Updating ExpressionEngine 2.0 Add-ons to 3.0
============================================

Overview
--------

ExpressionEngine 3.0 adopts `PSR-1 <http://www.php-fig.org/psr/psr-1/>`_ and
`PSR-4 <http://www.php-fig.org/psr/psr-4/>`_, which means ``StudlyCaps`` for
class names, ``camelCase`` for method names, `namespaces
<http://php.net/namespace>`_, and `autoloading <http://php.net/autoload>`_. The
most notable changes to add-ons are the
:doc:`/development/addon_setup_php_file`, namespaces, and the new :doc:`Control
Panel Style Reference </development/cp_styles/index>`. Fortunately, updating to
3.0 is fairly simple. This guide is an overview of the changes you will need to
make to have your add-ons up and running under 3.0.

Guidelines
----------

- :doc:`/development/addon_setup_php_file`
- :doc:`General Syntax Changes <conversion/syntax>`
- :doc:`Contol Panel Pages </development/cp_styles/index>`
- :doc:`Plugin Specific Changes <conversion/plugins>`
- :doc:`Module Specific Changes <conversion/modules>`
- :doc:`Module Conversion Walk-through <conversion/walk-through>`

.. toctree::
  :hidden:
  :glob:
  :titlesonly:

  core/*
  conversion/*
  services/*
  legacy/index
  extensions
  addon_setup_php_file
  constants
  cp_javascript/index
  developer_preview_program
  emoticons
  fieldtypes
  guidelines/index
  json_version_feed
  modules
  packages
  plugins
  rte_tools
  reference/tree_datastructure
  shared_form_view

