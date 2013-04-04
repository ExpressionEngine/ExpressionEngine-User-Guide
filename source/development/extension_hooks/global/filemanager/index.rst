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
