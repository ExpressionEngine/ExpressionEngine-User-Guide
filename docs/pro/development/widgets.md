<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2021, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Developing Dashboard Widgets

[TOC]

Along with the basic widgets which will come native with EE Pro, each third-party add-on can provide multiple widgets show pertinent information to users.

Widget files can have `.html` or `.php` extension and have to be placed into `widgets` subdirectory of the add-on. They are then installed automatically when the add-on is installed or updated.

It is also possible to create widgets using EE template manager.

## PHP Widgets

In order for add-on to provide dashboard widgets, it needs to contain `widgets` folder inside its main directory, which will contain widget files.

All widgets are required to implement `ExpressionEngine\Addons\Pro\Service\Dashboard\DashboardWidgetInterface`.
The easiest way to achieve that is to make prolet extend abstract class `ExpressionEngine\Addons\Pro\Service\Dashboard\AbstractDashboardWidget`.

Each widget should have `namespace` definition, which should consist of add-on's namespace as defined in `addon.setup.php` followed by `\Widgets`.

The class name should match the file name with first letter capitalized.

Example PHP Widget:

    <?php

    /**
    * namespace is required and must be add-on's namespace + 'Widgets'
    * 
    */
    namespace Addons\Pro\Widgets;

    use ExpressionEngine\Addons\Pro\Service\Dashboard;

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

PHP widgets are installed when add-on is installed or updated.

## HTML Widgets
HTML widgets are utilizing ExpressionEngine template engine, so can contain any template tags and need to return HTML that will be displayed inside the widget. 

HTML widgets are *required* to have this tag as first line:
`{widget title="Widget Title"}`


| Parameter | Values        | Description                               |
| --------- | ------------- | ----------------------------------------- |
| title     | `String`      | *Required*. Widget header                 |
| class     | `String`      | Extra CSS class to add to widget wrapper  |
| width     | `full`/`half` | Widget width. Default is 'half'.          |

Example HTML widget:
    {widget class="widget--support" title="ExpressionEngine Support" width="half"}

    <p>Get <b>direct</b>, <b>fast</b>, <b>unlimited</b> support from the same team that builds your favorite CMS.</p>

    <p><a href="https://expressionengine.com/support" target="_blank" class="button button--default">Learn More</a></p>

HTML add-on widgets are installed when add-on is installed or updated.

## Template widgets

You can create custom widgets specifically for your site by creating `pro-dashboard-widgets` templates group and adding templates inside it.

The templates need to follow the syntax of HTML widgets.

Unlike add-on widgets, template widgets are installed when dashboard layout is updated.
