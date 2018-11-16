.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Pagination Library Extension Hooks
==================================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

pagination_create
-----------------

.. function:: pagination_create($this, $count)

  Rewrite the pagination function in the Pagination library and possible
  expand the types of pagination available.

  How it's called::

    $this->extensions->call('pagination_create', $this, $count);
    if ($this->extensions->end_script === TRUE) return;

  :param object $this: Currently instantiated object for EE_Pagination
    class, remember to call this with a reference if you want to modify
    the object.
  :param int $count: Number of items being paginated
  :rtype: Void

  .. versionadded:: 2.8

channel_module_create_pagination
--------------------------------

.. function:: channel_module_create_pagination($this, $count)

  .. versionadded:: 1.4.0
  .. deprecated:: 2.8
    Renamed in 2.8. Use :func:`pagination_create` instead.

pagination_fetch_data
---------------------

.. function:: pagination_fetch_data($this)

  Works with the 'pagination_create' hook so you can
  modify rendered ``{paginate}`` tagdata.

  How it's called::

    $this->extensions->call('pagination_fetch_data', $this);
    if ($this->extensions->end_script === TRUE) return;

  :param object $this: Currently instantiated object for EE_Pagination
    class, remember to call this with a reference if you want to modify
    the object.
  :rtype: Void

  .. versionadded:: 2.8

channel_module_fetch_pagination_data
------------------------------------

.. function:: channel_module_fetch_pagination_data($this)

  .. versionadded:: 1.4.0
  .. deprecated:: 2.8
    Renamed in 2.8. Use :func:`pagination_fetch_data` instead.
