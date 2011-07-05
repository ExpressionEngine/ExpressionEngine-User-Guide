Multiple Site Manager
=====================

Change Log


Version 2.1.0
-------------

Release Date: July 22, 2011

-  Fixed a bug (#15558) where deleting an MSM site left stray format
   columns in exp\_channel\_data table and stray records in the
   exp\_field\_formatting table.
-  Fixed a bug (#15108) where accessing a site in the control panel for
   which the user did not have permission failed to trigger a 'No
   Access' screen.
-  Altered the site dropdown menu to only show sites for which the user
   has control panel access.
-  Fixed a bug (#15844) where a PHP Fatal Error could occur when
   creating a new Site and the
   /system/expressionengine/language/<language pack%gt;/email\_data.php
   file can not be found.
-  Altered Control Panel site switching behavior to redirect to the CP
   homepage as PHP errors could occur when redirecting to the same page.

Version 2.0.0
-------------

Release Date: July 12, 2010

Version 2.0 is a stable, non-beta release for ExpressionEngine 2.1.

Build 20110428
~~~~~~~~~~~~~~

-  Fixed a MSM bug where having multiple sites while MSM was off would
   cause errors when editing member groups.

Build 20101018 (additional changes and fixes)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Altered the handling of file fields so that if both the field and the
   relevant file directory are moved or duplicated, the field is updated
   to use the new file directory (see #13718).
-  Fixed a bug in site creation where custom fields did not always have
   the proper MySQL field type.
-  Fixed a bug (#14004) where the site link in View using MSM defaulting
   to most recently changed 'URL to the root directory' value.

Build 20100805 (additional changes and fixes)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Fixed a bug where a PHP error could occur when creating a site and
   duplicating the Channel structure (but not the entry data).
-  Fixed a bug where Site Pages could be erroneously duplicated during
   site creation.
-  Fixed a bug where relationships were not fully removed when a site
   was deleted.

Build 20100720 (additional changes and fixes)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Added the MSM version and build information back to the main Sites
   page.

Version 2.0.0 Public Beta
-------------------------

Release Date: December 2, 2009

2.0.0 Public Beta is an internal architectural change to run on
ExpressionEngine 2.0 Public Beta.

Build 20100404 (additional changes and fixes)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Fixed a bug (#12001) where category groups for all sites would be a
   valid choice on the Channel Group Assignment dropdown.

Build 20100215 (additional changes and fixes)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Fixed a bug where duplicating a site could result in a MySQL error
   under certain conditions.

Build 20091211 (additional changes and fixes)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Fixed bug (#10563) where creating a new site with the comments module
   not installed resulted in a MySQL error.

Version 1.1
-----------

Release Date: July 10, 2008

Build 20091201 (additional changes and fixes)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Fixed a bug where site statistics could be incorrect for a newly
   created site.
-  Fixed a bug where search\_excerpt and trackback\_fields could be
   mapped to the wrong custom fields during site creation.

Build 20081024 (additional changes and fixes)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Fixed a bug where File Upload locations created during Site
   duplication would not duplicate member group access.
-  Fixed a bug where the record for member group access to File Upload
   locations was not being deleted when a Site was deleted.

Build 20080829 (additional changes and fixes)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Changed Site creation option nomenclature from "import" to "move" for
   clarity.
-  Added version and build number to Site Management page.

Build 20080808 (additional changes and fixes)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Fixed a bug where trackbacks were not duplicated/moved along with
   comments for duplicated/moved entries.

Includes all features and bug fixes following the release of 1.0.

-  Added ability to duplicate and move comments along with weblogs when
   creating a new site.
-  Added support for switching sites when using an IP based control
   panel address

