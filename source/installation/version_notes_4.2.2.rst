#######################
Version Notes for 4.2.2
#######################

.. contents::
   :local:
   :depth: 1

========================================
Customized Member and Forum Themes Moved
========================================

If you **have** customized your existing member templates:
----------------------------------------------------------

In ``themes/user/forum/custom_theme_name`` move all folders `except` images to ``system/user/templates/_themes/forum/custom_theme_name`` for each custom theme folder.

If an ``index.html`` file does not exist in your ``themes/user/forum/custom_theme_name`` folder, create a blank one.

If you **have** customized your existing forum templates:
---------------------------------------------------------

In ``themes/user/member/custom_theme_name`` move all files to system/user/templates/_themes/member/custom_theme_name for each custom theme folder. Leave the ``img`` folder in ``themes/user/member/custom_theme_name``.

If an index.html file does not exist in your ``themes/user/member/custom_theme_name``, create a blank one.

===========================
Default Theme Folders Moved
===========================

If you installed ExpressionEngine using the default theme, the file structure needs to be changed.

1. All folders inside ``themes/ee/site/default`` *except* for ``asset`` should be deleted.
2. The ``themes/ee/site/default/asset`` folder should be moved to ``themes/user/site/default/asset``.
3. The file upload directory path and URL settings need to be changed for the 'Blog', 'Common' and 'Home' upload directories. They were installed pointing to the ``themes/ee/site/default/asset/img`` folder and need to be updated to reflect their new location in ``themes/user/site/default/asset/img``.
