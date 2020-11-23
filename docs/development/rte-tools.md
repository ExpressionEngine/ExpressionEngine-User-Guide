---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://www.packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# RTE Tools API

[TOC]

## Basic File Structure

All RTE tools should be placed into the `addons` folder in a package and be named after that package name. So in a package named `strip_tags` the RTE tools file will be `rte.strip_tags.php`. All RTE tools must provide an `$info` array with a name, version number, description, and whether or not the RTE tool is allowable outside of the Control Panel:

    Class Strip_tags_rte {

        public $info = array(
            'name'        => 'Strip Tags',
            'version'     => '1.0',
            'description' => 'Strips all block and phrase-level formatting elements',
            'cp_only'     => 'n'
        );

    }
    // END Strip_tags_rte class

    /* End of file rte.strip_tags.php */
    /* Location: ./system/user/addons/strip_tags/rte.strip_tags.php */

## Example Tool

[TOC=3]

### Globals

At the very least, your RTE tool will need to supply global variables to aid in the translation of your tool into other languages, but globals are useful whenever you want to pass information from PHP into your tool's JavaScript. Globals are accessible via the `EE` JavaScript object as demonstrated in the Definition section:

    /**
     * Globals we need defined
     */
    function globals()
    {
        ee()->lang->loadfile('strip_tags');
        return array(
            'rte.strip_tags.label' => lang('strip_tags')
        );
    }

### Definition

TIP: **See also** [RTE Javascript](development/control-panel-js/rich-text-editor.md): Documentation for the WysiHat and the Button classes.

The ExpressionEngine RTE makes use of the WysiHat plugin for jQuery. Please refer to the [WysiHat API information](development/control-panel-js/wysihat-api.md) for help with the ExpressionEngine version of this plugin.

In order for your RTE tool to do anything, it needs to be defined. An RTE tool is defined in JavaScript and can be added to the RTE toolbar in a number of ways, but the most common is via WysiHat's `addButton()` method. A button is typically defined using a definition object with a `label` property and a `handler` method, but other options are available as well. Consult the [RTE Javascript documentation](development/control-panel-js/rich-text-editor.md) for more details.

In this example, you can see the label of the button is set to the value of the global we set in the Globals section (above):

    /**
     * RTE tool Definition
     */
    function definition()
    {
        return '
            WysiHat.addButton('strip_tags', {
                label:         EE.rte.strip_tags.label,
                handler: function()
                {
                    // Strip tags logic
                }
            });
        ';
    }

### Libraries

If you need to load in additional JavaScript libraries in order to make your RTE tool functional, you can do so by defining the optional `libraries()` method. This method should return an array just like one you would you would pass into the Control Panel Library's `add_js_script()` method. Here's an example from the Image RTE tool:

    /**
     * Libraries we need loaded
     */
    function libraries()
    {
        return array(
            'plugin' => 'ee_filebrowser',
            'ui'     => 'dialog'
        );
    }

### Styles

If your RTE tool requires some additional styles in order to work, you can define a `styles()` method. The `styles()` method must return a string containing the CSS rule sets you wish to define. Here is an example from the Link RTE tool:

    /**
     * Styles we need loaded
     */
    function styles()
    {
        return '
            #rte_link_dialog p { margin-bottom:10px; }
            #rte_link_dialog label { width: 90px; display: inline-block; }
            #rte_link_dialog input, #rte_link_dialog select { width: 70%; margin-left: 10px; }
            #rte_link_dialog .buttons { text-align: center; }
            #rte_link_dialog button { cursor: pointer; }
        ';
    }

NOTE: **Note:** If you reference images in your custom CSS and your RTE tool can be used outside of the Control Panel, make sure the file paths will work properly. In the Image RTE tool, this is accomplished with simple string replacement. It's also worth noting that this example uses a separate CSS file to define the necessary styles. If you are dealing with more than a few simple rule sets, that may be an easier way to go:

    /**
     * Styles we need loaded
     */
    function styles()
    {
        # load the external file
        $styles = file_get_contents( 'rte.image.css', TRUE );
        $theme  = ee()->session->userdata('cp_theme');
        $theme  = ee()->config->item('theme_folder_url').'cp_themes/'.($theme ? $theme : 'default').'/';
        return str_replace('{theme_folder_url}', $theme, $styles);
    }

## Function Reference

**class `Tool_rte`**

[TOC=3]

### `definition()`

Defines the JavaScript for the RTE tool.

| Parameter | Type     | Description                  |
| --------- | -------- | ---------------------------- |
| Returns   | `String` | JavaScript for your RTE tool |

### `globals()`

**Optional.** Defines global variables to be passed into JavaScript as part of the `EE` object.

| Parameter | Type    | Description                                                                    |
| --------- | ------- | ------------------------------------------------------------------------------ |
| Returns   | `Array` | Associative array of global variables that are accessible from the `EE` object |

### `libraries()`

**Optional.** Defines any JavaScript libraries that need to be loaded.

| Parameter | Type    | Description                                            |
| --------- | ------- | ------------------------------------------------------ |
| Returns   | `Array` | Associative array of JavaScript libraries to be loaded |

### `styles()`

**Optional.** Defines any additional style rules needed to define the look of the RTE tool.

| Parameter | Type     | Description                 |
| --------- | -------- | --------------------------- |
| Returns   | `String` | CSS styles for the RTE tool |
