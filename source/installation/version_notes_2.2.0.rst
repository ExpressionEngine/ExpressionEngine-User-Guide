Update Notes for Version 2.2.0
==============================

SafeCracker Upgrade
-------------------

Since SafeCracker is being integrated into the core of ExpressionEngine,
there are a few steps to take when upgrading to 2.2.0 if you currently
have SafeCracker installed:

#. Remove system/expressionengine/third\_party/safecracker/
#. Remove system/expressionengine/third\_party/safecracker\_file/
#. Copy the new system/expressionengine/third\_party/safecracker\_file/
   into your third\_party directory

Added Views
-----------

The following views were added:

-  themes/cp\_themes/default/content/files/confirm\_file\_delete.php
-  themes/cp\_themes/default/content/files/edit\_image.php
-  themes/cp\_themes/default/content/files/index.php
-  themes/cp\_themes/default/content/files/rename.php

Edited Views
------------

The following views were edited:

-  \_shared/file/browser.php
-  \_shared/header.php
-  \_shared/message.php
-  \_shared/right\_nav.php
-  admin/category\_management.php
-  admin/channel\_edit\_group\_assignments.php
-  admin/channel\_management.php
-  admin/config\_pages.php
-  admin/field\_group\_edit.php
-  admin/field\_group\_management.php
-  admin/field\_management.php
-  admin/status\_group\_edit.php
-  admin/status\_group\_management.php
-  admin/status\_management.php
-  account/member\_preferences.php
-  account/username\_password.php
-  content/publish.php
-  content/files/edit\_image.php
-  content/files/index.php
-  content/files/sync.php
-  errors/error\_general.php

Language Pack Changes
---------------------

The following language variables were moved from
admin\_content\_lang.php to filemanager\_lang.php

-  edit\_file\_upload\_preferences
-  new\_file\_upload\_preferences
-  new\_file\_upload\_created
-  file\_upload\_preferences
-  no\_upload\_prefs
-  please\_add\_upload
-  create\_new\_upload\_pref
-  upload\_pref\_name
-  new\_file\_upload\_preferences
-  server\_path
-  url\_to\_upload\_dir
-  allowed\_types
-  max\_size
-  max\_height
-  max\_width
-  properties
-  pre\_format
-  post\_format
-  no\_upload\_dir\_name
-  no\_upload\_dir\_path
-  no\_upload\_dir\_url
-  duplicate\_dir\_name
-  delete\_upload\_preference
-  delete\_upload\_pref\_confirmation
-  upload\_pref\_deleted
-  current\_upload\_prefs
-  restrict\_to\_group
-  restrict\_notes\_1
-  restrict\_notes\_2
-  restrict\_notes\_3
-  member\_group
-  can\_upload\_files
-  images\_only
-  all\_filetypes
-  file\_properties
-  file\_pre\_format
-  file\_post\_format

Added the following language keys in cp\_lang.php

::

    <?php

	'nav_files'         => 'Files', 
	'nav_file_manager'  => 'File Manager', 
	'nav_batch_upload'  => 'Batch Upload', 
	'nav_sync_files'    => 'Synchronize Files',


Added the following language keys in admin_content_lang.php

::

    <?php

	'exclude_from_channels_or_publish'  => 'Exclude from Channel or Field Category Assignment?', 
	'publish'                           => 'Channel Assignment', 
	'files'                             => 'File Assignment',


Updated the following language keys in members_lang.php

::

    <?php

	"can_view_offline_system" => "Can view system when it is offline",

Update system/expressionengine/config/mimes.php
