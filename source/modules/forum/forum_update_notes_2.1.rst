Forum Update Notes for Version 2.1
==================================

The Discussion Forum Module Version 2.1 requires ExpressionEngine
Version 1.6 (or greater)

Version 2.1 has a few theme modifications.

If you have **not** customized your existing forum templates:
-------------------------------------------------------------

Simply replace your entire forum theme folder with the new set:

themes/forum\_themes/

The update process is now complete. You can disregard the rest of the
information in this page.

If you **have** customized your existing templates:
---------------------------------------------------

If you have customized the look of your forum you will need to manually
add the new template features described below.

Incorporating New Features
==========================

The information below assumes you are running customized templates. If
you are using the default theme there is no need to use the information
below.

Global Theme Changes
--------------------

-  /themes/forum\_themes/blue/theme\_global.php
-  /themes/forum\_themes/default/theme\_global.php
-  /themes/forum\_themes/developer/theme\_global.php
-  /themes/forum\_themes/grey/theme\_global.php
-  /themes/forum\_themes/shares/theme\_global.php

<html> Tags
~~~~~~~~~~~

Due to changes in the W3's validator, change the <html> tags from::

	<html>

to::

	<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="{lang}" lang="{lang}">

Member Profile Theme Changes
----------------------------

-  /themes/forum\_themes/blue/theme\_member.php
-  /themes/forum\_themes/default/theme\_member.php
-  /themes/forum\_themes/developer/theme\_member.php
-  /themes/forum\_themes/grey/theme\_member.php
-  /themes/forum\_themes/shares/theme\_member.php

Bulletin Board Template
~~~~~~~~~~~~~~~~~~~~~~~

Add a closing </div> to the {if no\_bulletins} conditional::

	{if no_bulletins} <div class="tableCellOne"> <span class="defaultBold">{lang:message_no_bulletins}</span> </div> {/if}

Success & Error Templates
~~~~~~~~~~~~~~~~~~~~~~~~~

Remove extraneous </h2> from "Success" and "Error" themes. Change::

	<div class='profileHeadingBG'><div class="tableHeading">{lang:heading}</h2></div></div>

to::

	<div class='profileHeadingBG'><div class="tableHeading">{lang:heading}</div></div>

:doc:`Return to Update Page <forum_update>`

`ExpressionEngine <http://expressionengine.com/>`_ – Copyright ©
2002-2011 – `EllisLab, Inc. <http://ellislab.com/>`_
