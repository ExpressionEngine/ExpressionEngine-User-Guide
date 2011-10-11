Filemanager Library Extension Hooks
===================================

.. contents::
	:local:
	:depth: 1

files\_after\_delete
--------------------

Do additional processing after a file is removed. ::

	$edata = $this->extensions->call('files_after_delete', $deleted_files);

$deleted\_files
---------------

An array of database row objects for the files that were deleted.

:returns:
    void

Added in v2.1.5