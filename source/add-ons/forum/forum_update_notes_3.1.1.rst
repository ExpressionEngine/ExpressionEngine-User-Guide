Forum Update Notes for Version 3.1.1
====================================

Discussion Forum 3.1.1 requires version 2.1.3 or greater of
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
update your templates as described below.

Remove reference to non-existent language variable
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Message Compose Template (forum\_member/message\_compose.html)

Remove::

	<div class="forumLightLinks">{lang:multiple_attachments_message}</div>

:doc:`Return to Update Page <forum_update>`
