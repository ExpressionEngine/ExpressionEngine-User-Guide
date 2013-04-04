Javascript Controller Extension Hooks
=====================================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

cp_js_end
---------

.. function:: cp_js_end()

  Allows you add javascript to every Control Panel page.

  How it's called::

    $str = $this->extensions->call('cp_js_end');

  :returns: Javascript to add to the end of the control panel
  :rtype: String

  .. versionadded:: 2.1.2
