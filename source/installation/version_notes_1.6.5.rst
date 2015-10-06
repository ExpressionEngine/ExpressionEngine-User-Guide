Update Notes for Version 1.6.5
==============================

Strict URLs
-----------

During the update, the new :doc:`Strict URL preference
</cp/settings/template>` is either enabled or
disabled depending on your Site's "404 Page" setting. If you have a "404
Page" set, then Strict URLs will be *enabled* for the site, to provide
the closest match to existing behavior. If you do not have a "404 Page"
set, then Strict URLs will be *disabled*.

jQuery for the Control Panel Extension
--------------------------------------

ExpressionEngine 1.6.5 includes a new control panel extension,
:doc:`"jQuery for the Control Panel" </cp/addons/index>`.
The language file for this extension will already be updated if you have
followed the instructions on updating your language folder, but you will
need to upload the ext.cp\_jquery.php file from the download to your
/system/extensions/ folder.