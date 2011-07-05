A problem was encountered while attempting to upload your file
==============================================================

When trying to upload a file, ExpressionEngine returns the following
error: **"A problem was encountered while attempting to upload your
file."**

Troubleshooting File Upload Issues
----------------------------------

This error is usually caused by insufficient permissions or incorrect
configuration:

-  The Upload Directory needs sufficient permissions. On a UNIX type
   server this usually means "777" permissions are required.
-  The error can also occur if ExpressionEngine could not copy or move
   the uploaded file from the temporary upload directory, as specified
   by the server. The upload directory needs appropriate permissions.
-  In Admin > File Upload Preferences, a full server path must be
   provided in the "Server Path to Upload Directory" preference. This is
   neither a relative path nor a URL. If the exact path is not known
   contact the host or server administrator to obtain that information.
-  In some cases this error has been reported due to a trailing slash
   (/) at the end of the directory name under Admin > File Upload
   Preferences (or Gallery or Forum Preferences).

