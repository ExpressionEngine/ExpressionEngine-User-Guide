<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# File Manager

**Control Panel Location: `Files`**

TIP: If you are looking for information on using the files in your entries and templates, reference the [File module](add-ons/file.md) and [File fieldtype](fieldtypes/file.md) documentation

On the main File Manager page you can view all of your previously uploaded files. Files list can be filtered by a number of criterias as well as searched. The data included in the displayed list can be customized. The files can be manipulated separately or in bulk.

[TOC]cp-file

![Control Panel File Manager Page](_images/cp-file-manager.png)



## Navigating File Manager

The File Manager is composed of several sections to help easily manage your files in ExpressionEngine.

[TOC=3]

### Sidebar

The sidebar gives you access to creating, viewing, and managing [Upload Directories](control-panel/file-manager/upload-directories.md); [Watermarks](control-panel/file-manager/watermarks.md); and Exporting All Files. 

![File manager sidebar](_images/cp_file_manager_sidebar.png)

The Sidebar can also be collapsed using the arrow icon ( <img style="margin-bottom: 0px; vertical-align: middle;display:inline-block;" src="../../_images/cp_collapase_arrow.png" alt="cp collapase arrow"> ) that is displayed to the side of the sidebar when hovering over the sidebar.


### Filters

Filters all you to quick filter the files listed to find exactly what you need.

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

The File Listing is where your files are displayed based on your current view options. When using the All Files link, all files uploaded to your site will be available for display. When selecting a single Upload Directory from the sidebar, only files uploaded to that Upload Directory will be displayed.

### View Options

The File Manager offers multiple view options to adjust what and how files are displayed in the file list. 

View options can be set per Upload Directory or the All Files view, and are automatically saved for each user and persists as you use the filters or use pagination.

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

The Grid View gives you the ability to easily see thumbnails of images or icons for other file types of each file uploaded.

#### Sorting

Avialble from the Sort By dropdown, both the List View and the Grid View can be sorted by Title and Date Added ordered by assecending and descending. The default is to sort by Date Added, descending.

![File Manager Sorting](_images/cp_file_manager_sorting.png)

#### Display Limit

The Display Limit dropdown allows you to limit the number of files displayed on a single page in the the File Listing. Files can be displayed using a custom limit or by using one of the available options.


## Uploading Files

There are 3 way to upload a file using File Manager:

* Drag & drop the files directly to the files listing area. If you are in "All files" page, you will be asked to select Upload Directory first, otherwise the upload starts instantly

* Use the "Upload" button at top right. It presents the dropdown with the list of available Upload Directories and folders. Picking the one that you need will show OS file selector and upon selection upload will start

* When viewing specific Upload Directory, you can also use "Upload" button right above the filters, which will upload into current folder.

You can select and upload multiple files using each of these methods.

Do not navigate away or close the browser tab while the files are being uploaded

## File actions

The following are available as individual actions on each file in table view. In thumb view, only bulk actions are available

These actions can be accessed by clicking the `...` at the right side of table for each file

The available actions are:
[TOC=3]

### Edit

Redirects to [File edit page](control-panel/file-manager/file-edit.md)

### Download

Downloads the original file

### Copy Link

Copies the web link to the file to buffer

### Move

Opens the dialog that allows moving the file to different Upload Directory or into another folder on same Upload Directory. If the usage for this file has been noted, the confirmation toggle is being included.

![Move File Dialog](_images/cp-file-manager-move-file.png)

This option is only available when viewing specific Upload Directory.

### Delete

Opens the dialog that confirms file deletion. If the usage for this file has been noted, an extra confirmation toggle is being included.

![Delete File Dialog](_images/cp-file-manager-delete-file.png)

## Bulk actions

When checkboxes for one or several files are selected, the Bulk Actions dropdown becomes available at the bottom of the page. Bulk actions are not available for folders.

![File Manager Bulk Actions](_images/cp-file-manager-bulk-actions.png)

The list of bulk actions is same that for individual file actions, but some items behave differently.
Edit and Copy Link options are available if only single file is selected.
Download option will download the zip archive of files, even if only one file is selected.


## Exporting Files

The files can be exported and downloaded as zip archive in two ways.

One is by using Bulk Actions and allows you to export the specific files that you need

Another is by using "Export all files" link in the sidebar and it will export and download all files from all upload directories.

WARN:**Note** that exporting can be time and resource consuming.

## Compatibility Mode

Since ExpressionEngine 7, the file data are being stored differently (using `{file:XX:url}` format instead of `{filedir_X}filename.ext`). This allows us to perform more operations, such as storing the file in a subfolder, moving the file to different location, collecting file usage data.

We will still parse the `{filedir_X}` tags in template or channel entries, however if you have some third-party add-on that does its own parsing and is not aware of the `{file:XX:url}` syntax, it might malfunction.

In order to prevent bad use experience, we are turning on the Compatbility Mode for the sites that are upgrading from ExpressionEngine 6 or earlier versions. If you know your add-ons are compatible with EE7, go to `Settings --> Content & Design Settings` and turn `Run File Manager in Compatibility Mode?` off.
