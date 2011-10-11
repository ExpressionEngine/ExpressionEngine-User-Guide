Update Notes for Version 1.6.1
==============================

ExpressionEngine 1.6.1 includes a number of new features and updates.
Reviewing the notes below will help you transition to 1.6 with as little
effort as possible.


Control Panel Theme Updates
---------------------------

Version 1.6.1 has some changes in the control panel theme files, so
either replace the themes folder or if you have a customized the themes
make the modifications below to the following files.

/themes/cp\_themes/default/default.css
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Find and replace::

	.breadcrumbRight a div {

with::

	.breadcrumbRight a div,     .breadcrumbRight a span {

Also find and replace::

	.breadcrumbRight a:active div {

with::

	.breadcrumbRight a:active div,     .breadcrumbRight a:active span {

/themes/cp\_themes/classic/classic.css
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Find the style rule block for::

	.crumblinksR {

And add the style rule::

	display: block;

Emoticon Updates
----------------

ExpressionEngine 1.6.1 fixes a spelling error for the 'raspberry'
emoticon. Please replace your emoticon images in /images/smileys/.

Profile Theme Updates
---------------------

Version 1.6.1 has some changes in the member theme files, so either
replace the themes folder or if you have a customized the themes make
the modifications below to the following files.

-  /themes/profile\_themes/default/profile\_theme.php

Bulletin Board Template
~~~~~~~~~~~~~~~~~~~~~~~

Add a closing </div> to the {if no\_bulletins} conditional::

	{if no_bulletins} <div class="tableCellOne"> <span class="defaultBold">{lang:message_no_bulletins}</span> </div> {/if}

<html> Tags
~~~~~~~~~~~

Due to changes in the W3's validator, change the <html> tags from::

	<html>

to::

	<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="{lang}" lang="{lang}">

Success & Error Templates
~~~~~~~~~~~~~~~~~~~~~~~~~

Remove extraneous </h2> from "Success" and "Error" themes. Change::

	<div class='profileHeadingBG'><div class="tableHeading">{lang:heading}</h2></div></div>

to::

	<div class='profileHeadingBG'><div class="tableHeading">{lang:heading}</div></div>

Language Additions
------------------

ExpressionEngine 1.6.1 has a number of language file additions. To
assist translators in updating their language packs, a :download:`language notes
text file <language_notes_1.6.1.txt>` has been provided. This text file
lists all of the new language keys, separated by the each language file
that contains changes. To update your language pack, you can download
this text file, make the changes, and simply copy the new keys to the
appropriate language files.

`Return to Update Page <update.html#additional-steps>`_

`ExpressionEngine <http://expressionengine.com/>`_ – Copyright ©
2002-2011 – `EllisLab, Inc. <http://ellislab.com/>`_
