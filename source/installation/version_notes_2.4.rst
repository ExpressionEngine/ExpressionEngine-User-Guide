Update Notes for Version 2.4
============================

Added Developer Constants
-------------------------

For add-on developers we’ve introduced two new constants: ``URL_THEMES_THIRD``
and ``PATH_THEMES_THIRD``. These two constants point to the URL and the path of
the themes/third_party/ directory. We’d like you to start using these right
away and have your add-ons using them by our next major release because we’ll
be introducing two new config variables that allow you to change the value of
these constants. This means that in conjunction with the new ``third_party_path``
config variable, you can keep your third_party folders completely out of the
system/ and themes/ directory, which will make upgrading easier.

Altered Language Files
----------------------

The following language files were edited:

 - expressionengine/language/english/admin\_content\_lang.php
 - expressionengine/language/english/admin\_lang.php
 - expressionengine/language/english/content\_lang.php
 - expressionengine/language/english/core\_lang.php
 - expressionengine/language/english/cp\_lang.php
 - expressionengine/language/english/design\_lang.php
 - expressionengine/language/english/edit\_lang.php
 - expressionengine/language/english/filemanager\_lang.php
 - expressionengine/language/english/forum\_lang.php
 - expressionengine/language/english/homepage\_lang.php
 - expressionengine/language/english/ip\_to\_nation\_lang.php
 - expressionengine/language/english/mailinglist\_lang.php
 - expressionengine/language/english/member\_lang.php
 - expressionengine/language/english/members\_lang.php
 - expressionengine/language/english/modules\_lang.php
 - expressionengine/language/english/myaccount\_lang.php
 - expressionengine/language/english/safecracker\_lang.php
 - expressionengine/language/english/tools\_lang.php


Altered View Files
------------------

The following view files were edited:

 - views/\_shared/file/browser.php
 - views/\_shared/file/field.php
 - views/\_shared/file\_upload/edit.php
 - views/\_shared/file\_upload/iframe\_header.php
 - views/\_shared/file\_upload/index.php
 - views/\_shared/file\_upload/rename.php
 - views/\_shared/file\_upload/success.php
 - views/\_shared/file\_upload/upload\_modal.php
 - views/\_shared/footer.php
 - views/\_shared/menu/item\_parent.php
 - views/\_shared/overview.php
 - views/account/html\_buttons.php
 - views/account/ignore\_list.php
 - views/account/main\_menu\_manager.php
 - views/account/ping\_servers.php
 - views/account/quicklinks.php
 - views/account/subscriptions.php
 - views/addons/accessories.php
 - views/addons/accessory\_preferences.php
 - views/addons/extensions.php
 - views/addons/fieldtypes.php
 - views/addons/modules.php
 - views/addons/package\_settings.php
 - views/addons/plugin\_info.php
 - views/addons/plugin\_manager.php
 - views/admin/category\_custom\_field\_group\_manager.php
 - views/admin/category\_edit.php
 - views/admin/category\_editor.php
 - views/admin/category\_management.php
 - views/admin/channel\_edit.php
 - views/admin/channel\_management.php
 - views/admin/default\_html\_buttons.php
 - views/admin/default\_ping\_servers.php
 - views/admin/edit\_custom\_category\_field.php
 - views/admin/edit\_formatting\_options.php
 - views/admin/field\_edit.php
 - views/admin/field\_group\_management.php
 - views/admin/field\_management.php
 - views/admin/file\_upload\_preferences.php
 - views/admin/status\_edit.php
 - views/admin/status\_group\_management.php
 - views/admin/status\_management.php
 - views/content/autosave.php
 - views/content/edit.php
 - views/content/files/file\_upload\_create.php
 - views/content/files/file\_upload\_preferences.php
 - views/content/files/index.php
 - views/content/files/manual\_batch.php
 - views/content/files/sync.php
 - views/content/files/watermark\_preferences.php
 - views/content/files/watermark\_settings.php
 - views/content/multi\_edit.php
 - views/content/recent\_list.php
 - views/content/view\_entry.php
 - views/design/edit\_template.php
 - views/design/manager.php
 - views/design/new\_template.php
 - views/homepage.php
 - views/members/activate.php
 - views/members/custom\_profile\_fields.php
 - views/members/ip\_search\_results.php
 - views/members/register.php
 - views/members/view\_members.php
 - views/sites/edit\_form.php
 - views/sites/switch.php
 - views/tools/sql\_manager.php
 - views/tools/view\_cached\_email.php
 - views/tools/view\_cp\_log.php
 - views/tools/view\_developer\_log.php
 - views/tools/view\_email\_log.php
 - views/tools/view\_search\_log.php
 - views/tools/view\_throttle\_log.php


:ref:`Return to Update Page <update_additional_steps>`
