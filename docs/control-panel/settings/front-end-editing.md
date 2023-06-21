<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2021, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Front-End Editing Settings

[TOC]


**Control Panel Location:** `Seetings -> Content & Design > Front-End Editing`


## **Enable Dock**
(Default: On, Matching Config Override: [`enable_dock`](general/system-configuration-overrides.md#enable_dock) )  
Enabling the Dock controls whether ExpressionEngine Pro is turned on for the front-end of your website. When the Dock is disabled all front-end editing, prolets, and Dock features will be disabled.

## **Enable front-end editing**
(Default: On, Matching Config Override: [`enable_frontedit`](general/system-configuration-overrides.md#enable_frontedit)) 
Enabling front-end editing allows users with respective permissions to edit channel entries and content on the front-end of your website using provided edit links ( <img style="margin-bottom: 0px; vertical-align: middle; display:inline-block;" src="../../_images/pro_edit.png" alt="pro edit icon"> ) .

## **Enable automatic front-end editing links**
(Default: On, Matching Config Override: [`enable_frontedit_links`](general/system-configuration-overrides.md#enable_frontedit_links)) 
By default ExpressionEngine Pro automatically inserts edit links ( <img style="margin-bottom: 0px; vertical-align: middle; display:inline-block;" src="../../_images/pro_edit.png" alt="pro edit icon"> ) where editable content is found in templates. These can be disabled on a per field basis or globally when using this toggle. When toggled off, ExpressionEngine Pro will no longer automatically generate edit links and links will need to be [added manually](/advanced-usage/front-end/frontend.md#customizing-the-link-location) where needed in templates.