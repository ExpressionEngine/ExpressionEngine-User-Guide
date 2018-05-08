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

In user/forum/custom_theme_name move all folders `except` images to system/user/templates/_themes/forum/custom_theme_name for each custom theme folder.

If an index.html file does not exist in your user/forum/custom_theme_name, create a blank one.

If you **have** customized your existing forum templates:
---------------------------------------------------------

In user/member/custom_theme_name move all files to system/user/templates/_themes/member/custom_theme_name for each custom theme folder. Leave the img folder in user/member/custom_theme_name.

If an index.html file does not exist in your user/member/custom_theme_name, create a blank one.
