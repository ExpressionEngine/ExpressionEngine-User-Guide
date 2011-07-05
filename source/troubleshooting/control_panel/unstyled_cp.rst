Control Panel is Unstyled
=========================

CSS is not being applied to the Control Panel

Troubleshooting Control Panel CSS
---------------------------------

If the control panel appears without styling, first check to make sure
that the **themes** folder exists and contains a complete **cp\_themes**
folder. You may wish to re-upload the **themes/cp\_themes** folder to
ensure it is complete.

If all themes files are present, the server that ExpressionEngine is
installed on may have PHP running with an **open\_basedir** restriction.
In these cases, that restriction prevents PHP script files from
accessing anything that resides in directories above its path. The
solution is to move the **cp\_themes** folder into the system folder. Do
not move the entire themes folder, just the cp\_themes folder.
ExpressionEngine will automatically discover it, and the Control Panel
will then be styled properly.


