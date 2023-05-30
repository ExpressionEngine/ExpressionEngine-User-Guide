<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Upload Directories

An Upload Directory is a representation of a location where the files are being stored. The files can be stored on the local filesystem or in cloud storage systems ([see Adapters](#adapter))

[TOC]

![Upload Directory Preferences](_images/cp-file-manager-upload-directory.png)

## Create/Edit Upload Directory

To create an upload directory, click the "New" button next to "Upload directories" in the sidebar on the File Manager page.

To edit, hover over the upload directory name in the sidebar and click the pencil icon.

The following options are available when creating / editing an upload directory:

##### Name

A descriptive name of the upload destination.

##### Adapter

The file storage adapter to use. ExpressionEngine is shipped with the "Local" adapter to work with files on the local filesystem. Other adapters for use with cloud storage systems are available in the [Add-on Store](https://expressionengine.com/add-ons).

##### Upload directory

This setting is specific to the local adapter. Other adapters might have their own settings.

The **full URL** to the new destination. For example: `{base_url}/images/uploads/`. We recommend using the default base URL variable `{base_url}` defined in [URL and Path Settings](control-panel/settings/urls.md) in your directory URL.

##### Upload path

This setting is specific to the local adapter. Other adapters might have their own settings.

The **full server path** (not a URL) to the upload folder for this destination. For example: `{base_path}/images/uploads/`. We recommend using the default base path variable `{base_path}` defined in [URL and Path Settings](control-panel/settings/urls.md) in your directory paths.

##### Allowed file types?

The directory can be restricted to accept one or several following file types: Image, Document, Archive, Audio, and Video. You can also set it to allow all file types.

By default, only images are allowed.

Only file types that are specified in ExpressionEngine's Mime Type file are allowed to be uploaded. The Mime Type file can be found in [`mimes.php`](config/config-files.md#allowed-mime-types). If you are uploading something uncommon and run into problems, you may need to add the mime type for your file to the allow list. 
See also [MIME allow list](general/system-configuration-overrides.md#mime_whitelist_additions) and [Mime member exception allow list](general/system-configuration-overrides.md#mime_whitelist_member_exception) for more info.

##### Default browser view?

Default view type for this upload directory.

##### Allow subfolders?

Enables creating subfolders within this upload directory and placing files within those.

#### Keep subfolders on top?

Group subfolders at the top of the files list when browsing, irrespective of sorting order. When turned off, the folders will be mixed with the files list.

##### File size

You can optionally set a maximum allowed size in kilobytes for the uploaded file. Leave blank if you do not wish to impose a limit.

NOTE: **Note:** Servers usually also have built-in limits on the amount of data that can be uploaded via PHP at one time. The default value for this in PHP is 2 MB. If you have a need to upload very large files, then you should contact your Host or server admin and talk to them about any size limits they have in place.

##### Image width

Optionally set the maximum allowed width in pixels for uploaded images. Images over this setting will be automatically resized.

##### Image height

Optionally set the maximum allowed height in pixels for uploaded images. Images over this setting will be automatically resized.

##### Constrain or Crop

Specify one or more alternate versions of an image that automatically get created when the original image is uploaded. A manipulation can include a resized version, a [watermark](control-panel/file-manager/file-manager.md#watermarks), or both. You can refer to a particular Image Manipulation in your templates via a File Field's [single variable tag](fieldtypes/file.md#single-variable-usage) or its [variable pair tag](fieldtypes/file.md#url). The resize type will determine whether the image is constrained (resized) or cropped to the specified dimensions. If only height or width is specified, the thumbnails will be created using that as the master dimension. For example, setting the height to 200 and leaving the width blank will result in an image that is no higher than 200 pixels, with the width resized proportionately. Setting both the height and the width to 200 would result in an image that is no higher or wider than 200 pixels.

##### Allowed member roles

This setting allows you to specify which member roles have permission to upload files to the upload destination.

##### Allowed category groups

Files may be assigned to specific categories, just like entries are. Here you can specify which category groups you want to make available to files in this upload directory. Images can be displayed by category using the [File Module](add-ons/file.md).
