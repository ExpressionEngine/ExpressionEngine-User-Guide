Update Notes for Version 1.6.3
==============================

index.php Updated
-----------------

The index.php file has been updated for Version 1.6.3, so you will need
to overwrite your existing index.php file with the new file from Version
1.6.3.

Masked Control Panel Access
---------------------------

If you are using Masked Control Panel Access you will need to update
your masked access file (admin.php) with the new file from Version 1.6.3

Member Profile Theme Changes
----------------------------

-  /themes/profile\_themes/default/profile\_theme.php

Success & Error Templates
~~~~~~~~~~~~~~~~~~~~~~~~~

Remove extraneous </h2> from "Success" and "Error" themes. Change::

	<div class='profileHeadingBG'><div class="tableHeading">{lang:heading}</h2></div></div>

to::

	<div class='profileHeadingBG'><div class="tableHeading">{lang:heading}</div></div>

`Return to Update Page <update.html>`_


