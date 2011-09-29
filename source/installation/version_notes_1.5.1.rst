Update Notes for Version 1.5.1
==============================

ExpressionEngine 1.5.1 includes a number of new features and updates.
Reviewing the notes below will help you transition to 1.5.1 with as
little effort as possible.


      

CP Image Additions
------------------

A new image was added in 1.5.1 for a Quick Link edit button at the top
of the Control Panel pages. The file is located at
themes/cp\_global\_images/edit\_quicklinks.png. Simply copy it over to
the same folder on your site.

Profile Theme Updates
---------------------

Version 1.5.1 has some changes in the member theme file
(./themes/profile\_themes/default/profile\_theme.php), so either replace
that file or if you have a customized the Member Profile theme add the
following code.

Delete PM Bulletin
~~~~~~~~~~~~~~~~~~

**Bulletin** part of the theme after the bulletin's date::

	{if can_delete_bulletin} <span class='defaultBold'>{lang:delete_bulletin}: <a href='{path:delete_bulletin}' onclick='if(!confirm("{lang:delete_bulletin_popup}")) return false;'>{lang:yes}</a></span><br /> {/if}

Bulletin Board Message
~~~~~~~~~~~~~~~~~~~~~~

**Bulletin Board** right at the top before everything else::

	{if message} <div class='tableCellOne'><div class='success'>{include:message}</div></div> {/if}

Language Additions
------------------

ExpressionEngine 1.5.1 has a number of language file additions. To
assist translators in updating their language packs, a :download:`language notes
text file <language_notes_1.5.1.txt>` has been provided. This text file
lists all of the new language keys, separated by the each language file
that contains changes. To update your language pack, you can download
this text file, make the changes, and simply copy the new keys to the
appropriate language files.

`Return to Update Page <update.html>`_
