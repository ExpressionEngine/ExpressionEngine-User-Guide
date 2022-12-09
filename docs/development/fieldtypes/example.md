---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Fieldtype example (Google Maps)

The snippets below were truncated for clarity. The full example fieldtype can be [downloaded here](_downloads/google-maps.zip).

[TOC]

## Generate Fieldtype File
Start by generating a custom fieldtype for your add-on using the `make:fieldtype` command. 

```
$ php system/ee/eecli.php make:fieldtype
Let's implement a fieldtype!
What is the fieldtype name? Amazing Fieldtype
What add-on is the fieldtype being added to? [amazing_add_on]:  amazing_add_on
Building fieldype.
Fieldtype created successfully!
```

This will create a `ft.amazing__fieldtype.php` in your add-on's folder.

We'll now update the methods found within our fieldtype's class to provide our functionality:
- `function install()`
- `function display_global_settings()`
- `function save_global_settings()`
- `function display_settings()`
- `function save_settings()`
- `function display_field()`
- `function replace_tag()`
- `function replace_latitude()`
- `function replace_tag_catchall()`

## Installation - `install()`

The google maps fieldtype is going to have 3 global settings. Latitude, longitude, and zoom. These will determine what the default map looks like. By returning an array from within our `install()` method we can provide a default set of global settings.

    function install()
    {
        // Somewhere in Oregon ...
        return array(
            'latitude'  => '44.06193297865348',
            'longitude' => '-121.27584457397461',
            'zoom'      => 13
        );
    }

## Uninstaller

The installation method for this fieldtype does not create any additional tables, so no cleanup work needs to be done. The default `uninstall()` method provided by the EE_Fieldtype parent class will suffice. Most fieldtype methods have sensible defaults to help reduce duplicate code.

## Global  - `display_global_settings()`

The installer sets the default global settings, but currently there is no way to change these from the control panel. We can use the `display_global_settings()` method to return the contents of the settings form. Having this method also enables the global settings link on the overview page.

    function display_global_settings()
    {
        $val = array_merge($this->settings, $_POST);

        $form = form_label('latitude', 'latitude').NBS.form_input('latitude', $val['latitude']).NBS.NBS.NBS.' ';
        $form .= form_label('longitude', 'longitude').NBS.form_input('longitude', $val['longitude']).NBS.NBS.NBS.' ';
        $form .= form_label('zoom', 'zoom').NBS.form_dropdown('zoom', range(1, 20), $val['zoom']);

        return $form;
    }

Manually entering longitudes and latitudes is inconvenient so the final method in the example download also adds some JavaScript to let the user choose from a map.

## Saving Global Settings - `save_global_settings()`

In most instances saving the global settings is as easy as storing the `$_POST` array. Remember to include existing global settings if not everything can be changed.

    function save_global_settings()
    {
        return array_merge($this->settings, $_POST);
    }

## Individual Settings - `display_settings()`

The default map may not always be the desired choice for each map field, so on the regular settings page it will display a similar configuration screen. We will use the familiar [Shared Form View](development/shared-form-view.md) format to display our settings.

    function display_settings()
    {
        $latitude   = isset($data['latitude']) ? $data['latitude'] : $this->settings['latitude'];
        $longitude  = isset($data['longitude']) ? $data['longitude'] : $this->settings['longitude'];
        $zoom       = isset($data['zoom']) ? $data['zoom'] : $this->settings['zoom'];

        $settings = array(
            array(
                'title' => 'latitude',
                'desc' => 'latitude_desc',
                'fields' => array(
                    'latitude' => array(
                        'type' => 'text',
                        'value' => $latitude,
                    )
                )
            ),
            array(
                'title' => 'longitude',
                'desc' => 'longitude_desc',
                'fields' => array(
                    'longitude' => array(
                        'type' => 'text',
                        'value' => $longitude,
                    )
                )
            ),
            array(
                'title' => 'zoom',
                'desc' => 'zoom_desc',
                'fields' => array(
                    'zoom' => array(
                        'type' => 'select',
                        'choices' => range(1, 20),
                        'value' => $zoom,
                    )
                )
            ),
            array(
                'title' => 'preview',
                'desc' => 'preview_desc',
                'wide' => TRUE,
                'fields' => array(
                    'preview' => array(
                        'type' => 'html',
                        'content' => '<div style="height: 300px;"><div id="map_canvas" style="width: 100%; height: 100%"></div></div>'
                    )
                )
            )
        );

        // Map preview
        $this->_cp_js();
        ee()->javascript->output('$(window).load(gmaps);');

        return array('field_options_google_maps' => array(
            'label' => 'field_options',
            'group' => 'google_maps',
            'settings' => $settings
        ));
    }

## Saving Individual Settings - `save_settings()`

Saving individual field settings works largely the same as saving global settings. Keep be aware that they are later merged with global settings, so they can override a global setting.

If your fieldtype needs a wide style on the publish form, like Grid or a Textarea, then be sure to include `'field_wide' => TRUE` in your settings array.

    function save_settings($data)
    {
        return array(
            'latitude'  => ee()->input->post('latitude'),
            'longitude' => ee()->input->post('longitude'),
            'zoom'      => ee()->input->post('zoom')
        );
    }

## Displaying the Field On the Publish Page - `display_field()`

With all the settings set up, it can now be displayed on the publish screen. A key factor when you get to this stage is to decide in what format the data should be stored. Since all three available values in this case are numbers, this field will store them separated by pipes (`lang|lat|zoom`).

    function display_field($data)
    {
        $data_points = array('latitude', 'longitude', 'zoom');

        if ($data)
        {
            list($latitude, $longitude, $zoom) = explode('|', $data);
        }
        else
        {
            foreach($data_points as $key)
            {
                $$key = $this->settings[$key];
            }
        }

        $zoom = (int) $zoom;
        $options = compact($data_points);

        // some javascript

        $value = implode('|', array_values($options));
        $hidden_input = form_input($this->field_name, $value, 'id="'.$this->field_name.'" style="display: none;"');

        return $hidden_input.'<div style="height: 500px;"><div id="map_canvas" style="width: 100%; height: 100%"></div></div>';
    }

## Rendering the Tag - `replace_tag()`

Finally, the field needs a frontend display. For google maps this will almost exclusively be JavaScript.

    function replace_tag($data, $params = array(), $tagdata = FALSE)
    {
        static $script_on_page = FALSE;
        $ret = '';

        list($latitude, $longitude, $zoom) = explode('|', $data);

        // google maps javascript ...

        return $ret.'<div style="height: 500px;"><div id="map_canvas_'.$this->field_id.'" style="width: 100%; height: 100%"></div></div>';
    }

## Creating Multiple Rendering Options

Along with parameters a field can also provide tag modifiers to change its output. In the template these are called by adding a colon to the fieldname, followed by the modifier name. For example: `{myfield:latitude}`. The advantage that field modifiers have over parameters is that they can be used in conditionals.

These methods are not created by the CLI and need to be added as needed to your fieldtype's class.

Parsing the modifiers is identical to using the regular `replace_tag()` function. The method name must start with `replace_` followed by the modifier name.

    function replace_latitude($data, $params = array(), $tagdata = FALSE)
    {
        list($latitude, $longitude, $zoom) = explode('|', $data);
        return $latitude;
    }

There is also a function to catch ALL modifiers, whose declaration includes the modifier name and looks like this:

    function replace_tag_catchall($file_info, $params = array(), $tagdata = FALSE, $modifier = FALSE)

You can also use variable pairs to capture tag data for processing in your modifier function. The syntax for using modifiers on variable pairs in your templates is:

    {myfield:option}
        Tag data here
    {/myfield}
