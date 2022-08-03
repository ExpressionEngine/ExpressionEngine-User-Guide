<!--
    This source file is part of the open-source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://www.packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->
# ExpressionEngine v7 Change Log

## Version 7.0.0 (Release: August 2, 2022)

NOTE:**Note:** If multiple members are needed, an ExpressionEngine Pro license is now required.

- **Contributors** 🙌

- **New File Manager** 🗃️
  - New File Manager design including the additions to [Filters](/control-panel/file-manager/file-manager.md#filters) and [Views](/control-panel/file-manager/file-manager.md#view-options)
  - Added utility action menu to files in the File Manager, allowing for quicker actions to be taken on individual files
  - Added Pop-up preview to thumbnails when viewing files in list view
  - Ability to upload files with drag and drop.
  - Bulk upload files using drag and drop or standard file sytem upload
  - Ability to organize content into [subfolders](/control-panel/file-manager/subfolders.md)
  - Folders can now be created directly on the filesystem through the File Manager
  - Implemented [FlySystem PHP library](https://flysystem.thephpleague.com/docs/) to add more extensiblity to the File Manager.
  - Added support for cloud based file storage through [Adapters](/control-panel/file-manager/adapters.md)
  - Changed how files are referenced in the database. Previously files were referenced using `{filedir_X}filename.ext`. Files are now referenced using `{file:XX:url}`. [Compatiblity Mode](/control-panel/file-manager/file-manager.md#compatibility-mode) is recommended for upgrades until there is confirmation that all add-ons will work with new file data format.
  - File usage is now available in the File Manager to display where a file is used throughout the Control Panel as well as notify users if a file is in use before deleting the file

- **Enhancements** 🚀
  - Added [Front-End Content Management](/advanced-usage/front-end/overview.md) (including Front-End Editing, the Dock, and Prolets)
  - Added [Multi-Factor Authentication](/member/mfa.md)
  - Added Cookie Management and template tags
  - Added [Entry Cloning](/channels/entry_cloning.md)
  - Added the ability to create [Custom Dashboard Widgets](/control-panel/dashboard_management.md#dashboard-management)
  - Added the ability to upload a [Logo and Favicon](/control-panel/settings/branding.md) for the Control Panel.
  - Added Pro Search (formerly Low Search)
  - Added Pro Variables (form Low Variables)
  - Major Performance enhancements across the Control Panel and Front-End

  

- **Design** 🎨
  - Added new light theme. ExpressionEngine 6 theme is still available as the "slate" theme using the Jump Menu
  - Added the option to display Grid fields vertically
  - Added the ability to position Entry Editor fields side-by-side using Publish Layouts
  - Made the secondary sidebar collapsable throughout the Control Panel



- **Bug Fixes** 💃🐛

- **Developers** 💻
  - Forum Add-on has now been removed from ExpressionEngine and made a downloadable add-on from the ExpressionEngine Store. On upgrades which use the Forum Add-on, the add-on will be moved from the `ee/addons` folder to `user/addons` and considered a user installed add-on.
  - Simple Commerce Add-on has now been removed from ExpressionEngine and made a downloadable add-on from the ExpressionEngine Store. On upgrades which use the Simple Commerce Add-on, the add-on will be moved from the `ee/addons` folder to `user/addons` and considered a user installed add-on.
  - Ip to Nation Add-on has now been removed from ExpressionEngine and made a downloadable add-on from the ExpressionEngine Store. On upgrades which use the Ip to Nation Add-on, the add-on will be moved from the `ee/addons` folder to `user/addons` and considered a user installed add-on.
  - The included version of jQuery used in the Control Panel has been updated to v3.6.0
  - Added the option to [globablly cache](/channels/entries.html#cache-refresh-cache_prefix) Channel Entries tag results
  - Added [ENV File Support](/advanced-usage/env-support.md)
  - Added new Shared Form View 