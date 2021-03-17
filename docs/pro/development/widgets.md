<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Developing Dashboard Widgets

[TOC]

Along with the basic widgets which will come native with EE Pro, each third-party add-on can provide multiple widgets show pertinent information to users.

Widget files can have `.html` or `.php` extension and have to be placed into `widgets` subdirectory of the add-on. They are then installed automatically when the add-on is installed or updated.

## PHP Widgets

Example PHP Widget:

<?php

/**
 * namespace is required and must be unique (include file name), 
 * because we'll be reusing same class name
 * 
 * all 3 top lines are required
 */
namespace Addons\Pro\Widgets\RecentEntries;

use ExpressionEngine\Library\Dashboard;

class DashboardWidget extends Dashboard\AbstractDashboardWidget implements Dashboard\DashboardWidgetInterface {

    public $width = 'full'; //optional, if you want full width widget
    public $class= '';//optional; extra CSS class you want to give to widget container

    /**
     * required
     */
    public function getTitle() : string 
    {
        return lang('members'); //widget title/header/top line
    }

    /**
     * required
     * must return the inner HTML for widget
     */
    public function getContent() : string
    {
        $vars = [];
        $vars['can_access_members'] = ee('Permission')->can('access_members');
        
        return ee('View')->make('pro:widgets/members')->render($vars);
    }

    /**
     * optional
     * used to generate extra content shown at top right corner of widget
     */
    public function getRightHead() : string
    {
        return ee('View')->make('pro:widgets/_embed/member_buttons')->render();
    }

} 

return __NAMESPACE__; //this line is required




## HTML Widgets
HTML widgets are utilizing ExpressionEngine template engine, so can contain any template tags and need to return HTML that will be displayed inside the widget. 

HTML widgets are *required* to have this tag as first line:
`{widget title="Widget Title"}`


| Parameter | Values  | Description                           |
| --------- | ------- | -------------------------------------- |
| title    | `String` | *Required*. Widget header |
| master_dim        | `auto`/`width`/`height` | Master dimention when keeping image ratio |

Tag Parameters:
title is required and it's widget header
class will add an extra css class and is optional
width is used to determine the widget’s screen width. Valid options are full or half This parameter is optional and will default to half if not declared

Example HTML widget:
    {widget class="widget--support" title="ExpressionEngine Support" width="half"}

    <p>Get <b>direct</b>, <b>fast</b>, <b>unlimited</b> support from the same team that builds your favorite CMS.</p>

    <p><a href="https://expressionengine.com/support" target="_blank" class="button button--default">Learn More</a></p>
