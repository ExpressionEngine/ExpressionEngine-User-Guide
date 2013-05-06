Menu Class Extension Hooks
==========================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

cp_menu_array
-------------

.. function:: cp_menu_array($menu)

  Modify the control panel menu before it's presented in the control
  panel. **Be sure to pull in contents of
  ``ee()->extensions->last_call`` before editing ``$menu`` or
  returning anything**.

  How it's called::

    $menu = ee()->extensions->call('cp_menu_array', $menu);

  :param array $menu: Control panel menu hierarchy and links
  :returns: Manipulated ``$menu`` array
  :rtype: Array

  .. versionadded:: 2.1.5
