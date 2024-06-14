<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2021, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Developing Dashboard Widgets

[TOC]

## Overview

Along with the basic [Dashboard Widgets](/pro/dashboard_management.md) which will come native with ExpressionEngine Pro, each third-party add-on can provide multiple widgets to show pertinent information to users.

Widgets which are shipped with add-ons can have `.html` or `.php` extension and have to be placed into `widgets` sub-directory of the add-on. They are then installed automatically when the add-on is installed or updated. When using the CLI to generate a widget, a PHP widget will be created.

TIP:Users can also create widgets using ExpressionEngine template manager without needing to create an add-on.

Here is an example of the Dashboard Widget shipped with the SEEO add-on:
![SEEO dashboard widget](_images/dashboard_widget_example.png)

NOTE:Before adding a Dashboard Widget to your add-on, you need to already have an add-on in place. See [Building An Add-On: Getting Started](development/addon-development-overview.md#getting-started) for how to generate the starter files for your add-on.

## PHP Widgets

To generate widget for an add-on with the CLI, run this command to have the necessary files created automatically:

```
php system/ee/eecli.php make:widget
```

In order for an add-on to provide dashboard widgets, it needs to contain `widgets` folder inside its main directory, which will contain the widget files.

All widgets are required to implement `ExpressionEngine\Addons\Pro\Service\Dashboard\DashboardWidgetInterface`.
The easiest way to achieve that is to make widget extend abstract class `ExpressionEngine\Addons\Pro\Service\Dashboard\AbstractDashboardWidget`.

Each widget should have `namespace` definition, which should consist of the add-on's namespace as defined in `addon.setup.php` followed by `\Widgets`.

The class name should match the file name with first letter capitalized.

Example PHP Widget with filename `dashboard.php` :

    <?php

    /**
    * namespace is required and must be add-on's namespace + 'Widgets'
    * 
    */
    namespace Addons\Pro\Widgets;

    use ExpressionEngine\Addons\Pro\Service\Dashboard;

    class Dashboard extends Dashboard\AbstractDashboardWidget implements Dashboard\DashboardWidgetInterface {

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
HTML widgets utilize the ExpressionEngine template engine. Therefore, they can contain any template tags and need to return HTML that will be displayed inside the widget. 

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

You can create custom widgets specifically for your site by creating a template group named `pro-dashboard-widgets` and adding templates inside of it.

Templates for Dashboard Widgets need to follow the syntax of [HTML widgets](#html-widgets).

Example HTML widget created as a template ( `pro-dashboard-widgets/widget-name.html`):

    {widget title="Recent Entries" width="half"}
    {exp:channel:entries channel="news" limit="10"}
        <h2>{title}</h2>
        {body}
    {/exp:channel:entries}

Unlike add-on widgets, template widgets are installed when dashboard layout is updated.
