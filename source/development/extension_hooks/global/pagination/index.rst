Pagination Library Extension Hooks
==================================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

channel_module_create_pagination
--------------------------------

.. function:: channel_module_create_pagination($this, $count)

  Rewrite the pagination function in the Pagination library and possible
  expand the types of pagination available.

  How it's called::

    $this->extensions->call('channel_module_create_pagination', $this, $count);
    if ($this->extensions->end_script === TRUE) return;

  :param object $this: Currently instantiated object for EE_Pagination
    class, remember to call this with a reference if you want to modify
    the object.
  :param int $count: Number of items being paginated
  :rtype: Void

  .. versionadded:: 1.4.0

channel_module_fetch_pagination_data
------------------------------------

.. function:: channel_module_fetch_pagination_data($this)

  Works with the 'channel_module_create_pagination' hook so you can
  modify rendered ``{paginate}`` tagdata.

  How it's called::

    $this->extensions->call('channel_module_fetch_pagination_data', $this);
    if ($this->extensions->end_script === TRUE) return;

  :param object $this: Currently instantiated object for EE_Pagination
    class, remember to call this with a reference if you want to modify
    the object.
  :rtype: Void

  .. versionadded:: 1.4.0
