CSS Controller Extension Hooks
==============================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

cp_css_end
----------

.. function:: cp_css_end()

  Allows you add custom CSS to every Control Panel page::

    $str = $this->extensions->call('cp_css_end');

  :returns: CSS to add to every Control Panel page
  :rtype: String

  .. versionadded:: 2.1.2
