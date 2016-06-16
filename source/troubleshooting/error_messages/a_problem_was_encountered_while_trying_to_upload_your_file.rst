A problem was encountered while attempting to upload your file
==============================================================

When trying to upload a file, ExpressionEngine returns the following
error: **"A problem was encountered while attempting to upload your
file."**

Troubleshooting File Upload Issues
----------------------------------

This error is usually caused by insufficient permissions or incorrect
configuration:

-  The Upload Directory needs sufficient permissions for PHP to write
   files to the filesystem. See :doc:`/troubleshooting/general/file_permissions` for details.
-  The error can also occur if ExpressionEngine could not copy or move
   the uploaded file from the temporary upload directory, as specified
   by the server. The upload directory needs appropriate permissions.
-  In a similar vein, the error may be triggered if there is insufficient
   disk space available.  A zero byte file may result in this case.
-  In :menuselection:`Files`, a full server
   path must be provided in the **Server Path to Upload Directory**
   preference. This is neither a relative path nor a URL. If the exact
   path is not known contact the host or server administrator to obtain
   that information.
-  In some cases this error has been reported due to a trailing slash
   (/) at the end of the directory name
   under :menuselection:`Files`
   (or Gallery or Forum Preferences).

