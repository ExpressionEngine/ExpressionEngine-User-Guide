<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# File Manager

**Control Panel Location: `Files`**

TIP: If you are looking for information on using files in your entries and templates, reference the [File module](add-ons/file.md) and [File fieldtype](fieldtypes/file.md) documentation.

The File Manager allows you to view all of your previously uploaded files. Files can be filtered and searched by a number of criteria. The data included in the displayed list can be customized. The files can also be manipulated separately or in bulk.

[TOC]cp-file

![Control Panel File Manager Page](_images/cp-file-manager.png)



## Navigating File Manager

The File Manager is composed of several sections to help easily manage your files in ExpressionEngine.

[TOC=3]

### Sidebar

The sidebar gives you access to creating, viewing, and managing [Upload Directories](control-panel/file-manager/upload-directories.md); [Watermarks](control-panel/file-manager/watermarks.md); and Exporting All Files.

![File manager sidebar](_images/cp_file_manager_sidebar.png)

The sidebar can also be collapsed using the arrow icon ( <img style="margin-bottom: 0px; vertical-align: middle;display:inline-block;" src="../../_images/cp_collapse_arrow.png" alt="cp collapase arrow"> ) that is displayed to the side of the sidebar when hovering over the sidebar.


### Filters

Filters allow you to quickly filter the files listed to find exactly what you need.

![Control Panel File Manager Page](_images/cp-file-manager-filters.png)

The following selectable filters are available:

* Type - Filter by the file type. Available types are Image, Document, Archive, Audio, Video (only file types of currently uploaded files are displayed)
* Category - Filter by categories available to files.
* Date Added - Filter by date added. Available options are Custom Date (enter in a specific date), Last 24 Hours, Last 7 Days, Last 30 Days, Last 180 Days, Last 365 Days
* Added By - Filter by the member who uploaded files

Clear selectable filters by clicking on the `x` in the top right corner of the filter.

Files can also be filtered using the keyword search option.

### File Listing

The bulk of the File Manager screen is composed of the file list.

![File Manager Listing](_images/cp_file-manager-listing.png)

The File Listing is where your files are displayed based on your current view options. When using the All Files link, all files uploaded to your site will be displayed. When selecting a single Upload Directory from the sidebar, only files uploaded to that Upload Directory will be displayed.

### View Options

The File Manager offers multiple view options, and allows you to adjust the files and the related data to be displayed in the file list.

View options can be set per Upload Directory as well as on the All Files view, and are automatically saved for each user and persists as you use the filters or pagination.

#### List View

![File Manager List view](_images/cp_file_manager_list-view.png)

The List View also exposes a Utility Action menu which quickly allows for action to be taken on an individual file without having to leave the file listing page. For more on these options see the available [file actions](#file-actions) below which are available in the Utility Action menu and as bulk actions.

![File Manager Utility Action Menu](_images/cp_file_manager_utility_action.png)

The columns displayed in the List View can also be adjusted to display file information relevant to your needs.
These columns include:

* Title
* File Name
* ID#
* File Type
* Size
* Description
* Credit
* Location
* Categories
* Date Added
* Uploaded By
* Date Modified
* Modified By
* Dimensions
* Usage

#### Grid View

![File Manager Grid View](_images/cp_file_manager_grid-view.png)

The Grid View gives you the ability to easily see thumbnails of images or icons of each file uploaded.

#### Sorting

Available from the Sort By dropdown, both the List View and the Grid View can be sorted by Title and Date Added ordered by ascending and descending. The default view is sorted by Date Added, descending.

![File Manager Sorting](_images/cp_file_manager_sorting.png)

#### Display Limit

The Display Limit dropdown allows you to limit the number of files displayed on a single page in the File Listing. Files can be displayed using a custom limit or by using one of the available options.


## Uploading Files

There are 3 way to upload a file using the File Manager:

* Drag & drop the files directly to the files listing area. If you are on the "All files" page, you will be asked to select an Upload Directory first otherwise, the upload starts instantly

* Using the "Upload" button at the top right. You will be presented with a dropdown containing a list of available Upload Directories and folders. After selecting an Upload Directory you will be shown the OS file selector, and upon selection, your upload will start.

* When viewing a specific Upload Directory, you can also use the "Upload" button right above the filters, which will upload into the current folder.

You can select and upload multiple files using each of these methods.

Do not navigate away or close the browser tab while the files are being uploaded.

## File actions

The following are available as individual actions on each file in the table view. In thumb view, only bulk actions are available.

These actions can be accessed by clicking the `...` on the right side of the table for each file.

The available actions are:
[TOC=3]

### Edit

Redirects to [File edit page](control-panel/file-manager/file-edit.md)

### Download

Downloads the original file.

### Copy Link

Copies the web link to the file.

### Move
Opens a dialog that enables you to move the file to a different Upload Directory or into another folder in the same Upload Directory. If a file you are moving is in use, it will display a notification, as well as a link to view where a given file is in use, and require the confirmation toggle to be switched on to move.

![Move File Dialog](_images/cp-file-manager-move-file.png)

This option is only available when viewing a specific Upload Directory.

### Delete

Opens the dialog that confirms file deletion. If the file is currently in use, it will be noted, and you will be required to switch the confirmation toggle to on.

![Delete File Dialog](_images/cp-file-manager-delete-file.png)

## Bulk actions

When checkboxes for one or several files are selected, the Bulk Actions dropdown becomes available at the bottom of the page. Bulk actions are not available for folders.

![File Manager Bulk Actions](_images/cp-file-manager-bulk-actions.png)

The list of bulk actions is the same that for individual file actions, but some items behave differently.
The Edit and Copy Link options are only available if a single file is selected.
The Download option will download the zip archive of files, even if only one file is selected.


## Exporting Files

The files can be exported and downloaded as zip archive in two ways.

One is by using Bulk Actions and allows you to export the specific files needed.

Another is by using "Export all files" link in the sidebar. This link will export and download all files from all upload directories.

WARN:**Note** that exporting can be time and resource consuming.

## Compatibility Mode

WARN:**Note:** Compatibility Mode is enabled by default for sites upgraded from older ExpressionEngine versions.

Tip: How to Turn off File Manager Compatibility Mode
<div class="video-wrapper">
<iframe src="https://www.youtube.com/embed/V1sRqz-b83k?si=0YrmOgxxcfhbWl_L" title="Turn off File Manager Compatibility Mode in ExpressionEngine" width="1920" height="1080" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>

ExpressionEngine 7+ stores files in the database differently then previous versions (using `{file:XX:url}` format instead of `{filedir_X}filename.ext`). This enables ExpressionEngine to provide a more powerful overall experience with files, such as storing files in subfolders, moving files to different locations, and collecting file usage data.

ExpressionEngine will still parse the `{filedir_X}` tags in templates or channel entries. However, third-party add-ons that parse file data on their own may not be compatible with the `{file:XX:url}` syntax, causing issues. In order to prevent a bad user experience, users can enable Compatibility Mode for the sites that are upgraded from earlier versions. If you know all installed add-ons are compatible with the new file format, you can run the Update File Usage (found in Tools-> Utilities-> Update File Usage) and then disable Compatibility Mode from the [Content & Design settings](/control-panel/settings/content-design.md#run-file-manager-in-compatibility-mode).
