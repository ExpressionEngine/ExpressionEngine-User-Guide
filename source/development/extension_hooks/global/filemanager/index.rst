Filemanager Library Extension Hooks
===================================

.. contents::
	:local:
	:depth: 1

file\_after\_save
-----------------

Do additional processing after a file is saved. ::

	$this->extensions->call('file_after_save', $file_id, $data);

$file\_id
~~~~~~~~~

The ID of the file that was just saved in exp_files.

$data
~~~~~

An array of the file data that was just saved to exp_files.

:returns:
    void

Added in v2.5.3

files\_after\_delete
--------------------

Do additional processing after a file is removed. ::

	$edata = $this->extensions->call('files_after_delete', $deleted_files);

$deleted\_files
~~~~~~~~~~~~~~~

An array of database row objects for the files that were deleted.

:returns:
    void

Added in v2.1.5