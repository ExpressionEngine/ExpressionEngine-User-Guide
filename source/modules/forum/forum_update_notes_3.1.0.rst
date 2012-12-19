Forum Update Notes for Version 3.1.0
====================================

Discussion Forum 3.1.0 requires version 2.0.2 or greater of
ExpressionEngine.

A number of additions have been made to the forum themes. If you have
**not** customized your existing forum templates:
-----------------------------------------------------------------------------------------------------------------------

Simply replace your entire forum theme folder with the new set:

themes/forum\_themes/

The update process is now complete. You can disregard the rest of the
information in this page.

If you **have** customized your existing templates:
---------------------------------------------------

If you have customized the look of your forum you will need to manually
add the new template features described below.

Javascript to prevent accidental deletion of attachments on edit
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To prevent the possibility of deleting an attachment when editing a
forum post, auto-submitting when pressing the enter key in a text field
has been disabled using javascript. To add this change manually, you
will need to edit two files, both found in
/themes/forum\_themes/theme\_name/forum\_submission/:

Submission Form Template (submission\_form.html)

Replace::

	<input type="text" class="input" name="title" style='width:100%' size="90" value="{title}" />

with::

	<input type="text" class="input" name="title" style='width:100%' size="90" value="{title}" onkeydown="var evt = arguments[0] || window.event; return (evt.keyCode != 13);" />

Replace::

	<input type="text" class="input" name="poll_question" style='width:75%' size="90" value="{poll_question}" />

with::

	<input type="text" class="input" name="poll_question" style='width:75%' size="90" value="{poll_question}" onkeydown="var evt = arguments[0] || window.event; return (evt.keyCode != 13);" />

Poll Answer Field Template (poll\_answer\_field.html)

Replace::

	<input type="text" class="input" name="option[{n}]" style="width:50%" size="60" value="{poll_answer}" maxlength="120" />

with::

	<input type="text" class="input" name="option[{n}]" style="width:50%" size="60" value="{poll_answer}" maxlength="120" onkeydown="var evt = arguments[0] || window.event; return (evt.keyCode != 13);" />

Additional Localization Variables
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A number of new localization variables have also been added. They are
listed below.

New Localization Variables
File name
Text
Localization Replacement
theme\_announcements.php
Avatar
{lang:avatar}
Rank
{lang:rank}
PM
{lang:pm\_abbrev}
theme\_atom.php
Copyright
{lang:copyright}
theme\_member.php
Rank
{lang:rank}
Email Console
{lang:email\_console}
Send Private Message
{lang:send\_pm}
AOL IM
{lang:mbr\_aim\_console}
ICQ
{lang:mbr\_icq}
Yahoo Messenger
{lang:mbr\_yahoo}
No Photo
{lang:no\_photo}
{current\_page} of {total\_pages}
{current\_page} of {total\_pages}
Search Field
{lang:search\_field}
Screen Name
{lang:mbr\_screen\_name}
Email Address
{lang:mbr\_email\_address}
URL
{lang:mbr\_url}
Location
{lang:mbr\_location}
I am Online
{lang:am\_online}
Add me to your Buddy List
{lang:add\_to\_buddy}
Smileys
{lang:smileys}
KB
{lang:kb}
Private Message
{lang:private\_message\_single}
value=Search
value={lang:search}
value=Submit
value={lang:submit}
theme\_legends.php
Old Topic
{lang:legend\_old\_topic}
New Topic
{lang:legend\_new\_topic}
Hot Topic
{lang:legend\_hot\_topic}
New Poll
{lang:legend\_new\_poll}
Moved Topic
{lang:legend\_moved\_topic}
Hot Old Topic
{lang:legend\_hot\_old\_topic}
Old Poll
{lang:legend\_old\_poll}
Closed Topic
{lang:legend\_closed\_topic}
Announcement
{lang:announcement}
theme\_search.php
Total Results:
{lang:total\_results}
{current\_page} of {total\_pages}
{current\_page} {lang:of} {total\_pages}
</a> by <a
</a> {lang:by} <a
value=Search
value={lang:search}
theme\_threads.php
PM
{lang:pm}
Expand
{lang:expand}
Collapse
{lang:collapse}
Avatar
{lang:avatar}
Rank
{lang:rank}
theme\_global.php
Atom feed
{lang:atom\_feed}
RSS feed
{lang:rss\_feed}
Powered by ExpressionEngine
{lang:powered\_by\_ee}
ExpressionEngine Discussion Forum
{lang:ee\_discussion\_forum}
Version
{lang:version}
ExpressionEngine Forums
{lang:ee\_forums}
No New Messages
{lang:no\_new\_messages}
New Messages
{lang:new\_messages}
theme\_rss.php
Copyright
{lang:copyright}
theme\_topics.php
{current\_page} of {total\_pages}
{current\_page} {lang:of} {total\_pages}
theme\_user\_banning.php
This member is currently banned
{lang:member\_is\_banned}
:doc:`Return to Update Page <forum_update>`

`ExpressionEngine <http://ellislab.com/expressionengine>`_ – Copyright ©
2002-2011 – `EllisLab, Inc. <http://ellislab.com/>`_
