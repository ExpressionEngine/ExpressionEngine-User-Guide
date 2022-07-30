<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->
# Syncronizing A Directory

ExpressionEngine is using the database to store the information on files, so if you have placed the files directly on server and want to use those, it is important to let the CMS know about that.

The Synchronize Files page allows you to synchronize the file records in the database with the files stored in a given upload directory. To load this page, click on the Upload Directory you wish to sync in the sidebar, then click on the sync icon on top right from filter bar.

When submitted, all allowed file types in the directory will be checked against the file records in the database. If there is no record in the database, one will be added. For images, any missing manipulations will be generated and watermarked according to the file upload preferences for that directory.

If an image manipulation is missing, it will be generated automatically. However if you want to re-generate and replace all given manipulations, you can do so by checking checkbox next to manipulation name.

Lastly, any records in the database that do not have a corresponding file in the main directory will be highlighted as not found.