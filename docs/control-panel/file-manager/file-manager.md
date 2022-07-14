<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# File Manager

**Control Panel Location: `Files`**

TIP: If you are looking for information on using the files in your entries and templates, check the [File module](add-ons/file.md) and [File fieldtype](fieldtypes/file.md) documentation

WARN: For the sites that were running older version of EE previously, [Compatibility Mode](control-panel/file-manager/file-manager.md#compatibility-mode) will be turned on by default, disabling some features

On the main File Manager page you can view all of your previously uploaded files. Files list can be filtered by a number of criterias as well as searched. The data included in the displayed list can be customized. The files can be manipulated separately or in bulk.

WARN: To use files in ExpressionEngine, you need to have at least one [Upload Directory](control-panel/file-manager/upload-directories.md) configured

![Control Panel File Manager Page](_images/cp-file-manager.png)

[TOC]

- [Upload Directories](control-panel/file-manager/upload-directories.md)
- [Files Editing](control-panel/file-manager/file-edit.md)

## Navigating File Manager

By default, you are presented the "All files" table.

From there, you can narrow it down to specific Upload Directory using sidebar on the left, search / filter directly for the specific file or upload.

![Control Panel File Manager Page](_images/cp-file-manager-filters.png)

You can switch the new type from "table" to "thumbs" and vice versa. The columns displayed can also be configured using the dropdown in filter.

The view and columns set is automatically saved for user (separately for each Upload Directory or "All Files" page) and persists as you use the filters or use pagination.

![Control Panel File Manager Page in Thumb View](_images/cp-file-manager-thumb-view.png)

## Uploading Files

There are 3 way to upload a file using File Manager:

1. Drag & drop the files directly to the files listing area. If you are in "All files" page, you will be asked to select Upload Directory first, otherwise the upload starts instantly

2. Use the "Upload" button at top right. It presents the dropdown with the list of available Upload Directories and folders. Picking the one that you need will show OS file selector and upon selection upload will start

3. When viewing specific Upload Directory, you can also use "Upload" button right above the filters, which will upload into current folder.

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

## Using subfolders

To help better organize the files, you can use the subfolders. In order to do that, subfolders need first to be enabled in [Upload Directory](control-panel/file-manager/upload-directories.md) preferences.

After enabling, you will see the "New folder" button in the top right, clicking which will show the folder creation dialog.

![New Folder Dialog](_images/cp-file-manager-new-folder.png)

You can create folder in current location as well as any other where those are enabled. The folders can be nested.

To rename folder, use `...` dropdown and `Rename` option.

## Syncronizing Directory

ExpressionEngine is using the database to store the information on files, so if you have placed the files directly on server and want to use those, it is important to let the CMS know about that.

The Synchronize Files page allows you to synchronize the file records in the database with the files stored in a given upload directory. To load this page, click on the Upload Directory you wish to sync in the sidebar, then click on the sync icon on top right from filter bar.

When submitted, all allowed file types in the directory will be checked against the file records in the database. If there is no record in the database, one will be added. For images, any missing manipulations will be generated and watermarked according to the file upload preferences for that directory.

If an image manipulation is missing, it will be generated automatically. However if you want to re-generate and replace all given manipulations, you can do so by checking checkbox next to manipulation name.

Lastly, any records in the database that do not have a corresponding file in the main directory will be highlighted as not found.

## Watermarks

**Control Panel Location: `Files sidebar > Watermarks`**

This section of the Control Panel allows you to manage watermark settings. A watermark is a unique text string or graphic that is automatically added to your images to mark them as "yours" and to hamper other people from being able to "steal" your images. You can create as many watermark types as you need and apply them to your automatically created thumbnails while [creating or editing an upload directory](control-panel/file-manager/upload-directories.md#createedit-upload-directory).

Watermarks have the following options:

- **Name** -- A descriptive name for the watermark
- **Type** -- The type of watermark. Can be either a image or text.
- **Alignment** -- The vertical and horizontal position of the watermark.
- **Padding** -- The amount of padding between the watermark and the image edge.

Text Watermarks have the following extra options:

- **Text** -- Specify the text you wish to be used for the watermark.
- **Font face** -- The True Type font for the text to use. By default, the "texb" font is included with ExpressionEngine. If you wish to use a different font then you will need to upload it to your system/fonts/ directory. **Note:** The font selection works only when "Use True Type Font" is enabled.
- **Text size** -- The font size of the watermark text, in pixels. Note that this is the font size that will be applied to the full-size image. The font size will be scaled proportionally with the image size if applied to the thumbnail or medium sized image. **Note:** The font size selection works only when "Use True Type Font" is enabled.
- **Text color** -- The watermark text color, in hex.
- **Enable dropshadow?** -- If enabled, a dropshadow will be added to the watermark text. Dropshadows usually make the text easier to read, especially when used on images with greatly varying color.
- **Dropshadow distance** -- The distance to offset the dropshadow from the regular text, in pixels.
- **Dropshadow color** -- The dropshadow color, in hex.

Image Watermarks have the following extra options:

- **Path** -- If you wish to test your watermark settings then you may specify the server path to a test image. This will allow you to see how it would actually appear on a real image. A server path is typically something similar to `/home/domain.com/http_docs/cp_images/watermark_test.jpg`. The specific setting will vary from server to server so you may need to contact your Host or server admin to determine what your correct "server path" is.
- **Opacity** -- The opacity (i.e. transparency) of the watermark image. This allows the watermark to be faint and not completely obscure details from the original image behind it. A 50% opacity is typical.
- **Image transparency map** -- Specify a color on the image to be "transparent" for PNG or GIF images. This works by specifying the "X" and "Y" coordinate pixel (measured from the upper left) within the image that corresponds to a pixel representative of the color you want to be transparent.

## Export files

The files can be exported and downloaded as zip archive in two ways.

One is by using Bulk Actions and allows you to export the specific files that you need

Another is by using "Export all files" link in the sidebar and it will export and download all files from all upload directories.

Note that exporting can be time and resource consuming.

## Compatibility Mode

Since ExpressionEngine 7, the file data are being stored differently (using `{file:XX:url}` format instead of `{filedir_X}filename.ext`). This allows us to perform more operations, such as storing the file in a subfolder, moving the file to different location, collecting file usage data.

We will still parse the `{filedir_X}` tags in template or channel entries, however if you have some third-party add-on that does its own parsing and is not aware of the `{file:XX:url}` syntax, it might malfunction.

In order to prevent bad use experience, we are turning on the Compatbility Mode for the sites that are upgrading from ExpressionEngine 6 or earlier versions. If you know your add-ons are compatible with EE7, go to `Settings --> Content & Design Settings` and turn `Run File Manager in Compatibility Mode?` off.
