<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->
# Synchronizing A Directory

ExpressionEngine automatically uses the database to store information about files uploaded through the Control Panel or front-end file fields. However, if you have placed files directly on your file system and want to use those, it is important to let the ExpressionEngine know about them.

The Synchronize Files page allows you to synchronize the file records in the database with the files stored in a given upload directory. To load this page, click on the Upload Directory you wish to sync in the sidebar, then click on the sync icon in the top right from the filter bar.

![file manager sync icon](_images/file_manager_sync.png)

From the Synchronize Files page, select if you would like to regenerate any manipulations or not, then choose "Sync Directory."

![file manager sync page](_images/file_manager_sync_page.png)

When submitted, all allowed file types in the directory will be checked against the file records in the database. If there is no record in the database, one will be added. For images, any missing manipulations will be generated and watermarked according to the file upload preferences for that directory.

If an image manipulation is missing, it will be generated automatically. However, if you want to regenerate and replace all given manipulations, you can do so by checking the checkbox next to the manipulation name.

Lastly, any records in the database that do not have a corresponding file in the main directory will be highlighted as not found.

NOTE: This functionality is also available as [CLI command](cli/built-in-commands/sync.md#syncupload-directory)