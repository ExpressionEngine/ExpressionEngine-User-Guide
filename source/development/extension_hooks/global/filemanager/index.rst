Filemanager Library Extension Hooks
===================================

In the menu below you will find links to details about available
extension hooks in the Filemanager library (Filemanager.php).


Added in v2.1.5files\_after\_delete
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Do additional processing after a file is removed. ::

	$edata = $this->extensions->call('files_after_delete', $deleted_files);

$deleted\_files
    An array of database row objects for the files that were deleted.
*Return value*
    void


