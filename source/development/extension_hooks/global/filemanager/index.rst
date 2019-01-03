.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Filemanager Library Extension Hooks
===================================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

file_after_save
---------------

.. function:: file_after_save($file_id, $data)

  Do additional processing after a file is saved.

  How it's called::

    $this->extensions->call('file_after_save', $file_id, $data);
    if ($this->extensions->end_script === TRUE) return;

  :param int $file_id: File ID in the ``exp_files`` table
  :param array $data: Associative array containing data about file
  :rtype: Void

  .. versionadded:: 2.5.3

files_after_delete
--------------------

.. function:: files_after_delete($deleted)

  Do additional processing after a file is removed.

  How it's called::

    $edata = $this->extensions->call('files_after_delete', $deleted);
    if ($this->extensions->end_script === TRUE) return;

  :param array $deleted: Array of database row objects for the files
    that were deleted
  :rtype: Void

  .. versionadded:: 2.1.5
