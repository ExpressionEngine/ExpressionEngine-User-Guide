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

# Modules

[TOC]

Modules are the most complex form of add-on. They can have their own database tables, backend control panels, tabs and fields that are included on the publish page, as well as their own tags for use in templates.

NOTE: Modules can also be **generated quickly by the Command Line Interface (CLI)**. Refer to the [make:addon command](cli/built-in-commands/make-addon.md) for more information.

WARN: **Create and Index route first.** When your add-on has one or more Control Panel pages associated with it, your add-on's card on the Add-On Manager page will link to the `Index` route of your add-on (`ControlPanel/Routes/Index.php`). If this route does not exist, users will be presented with a 404 page.

## Basic File Structure

Modules should be placed into the add-ons folder in a package and be named after that package name. At a minimum, there are 4 required files for any module:

- `addons/module_name/upd.module_name.php` - installs, uninstalls and updates the module
- `addons/module_name/mcp.module_name.php` - the backend control panel
- `addons/module_name/mod.module_name.php` - the core module file, which process module tags used in templates
- `addons/module_name/language/english/module_name_lang.php` -holds all language variables, allowing multiple language versions of the module

In addition to these required files, there are a number of optional files that may be useful for modules:

- `addons/module_name/tab.module_name.php` - required to add a tab/fields to the publish page
- `addons/module_name/views/anyname.html` - multiple view files inside the view folder are the primary method of presenting the backend control panel pages
- `addons/module_name/libraries/anyname.php` - modules may make use of their own libraries, either extending existing libraries or adding new ones for use within the module

With the possible exception of library files, file names and folders should be lower-case and contain no spaces.

## The Update file (upd.module_name.php)

**class `Module_name_upd`**

The Update file for a module includes a class with a name that is a combination of the package's name with a `_upd` suffix. The first letter and only the first letter of the class name should be capitalized. There is only one required class variable is `$version`, which should indicate the current version of this module:

    class Module_name_upd {

        var $version = '1.0';

## Update File Function Reference

**class `Module_name_upd`**

[TOC=3]

### `install()`

Installs the module, adding a record to the `exp_modules` table, creates and populates and necessary database tables, adds any necessary records to the `exp_actions` table, and if custom tabs are to be used, adds those fields to any saved publish layouts.

| Parameter | Type      | Description                                             |
| --------- | --------- | ------------------------------------------------------- |
| Returns   | `Boolean` | `TRUE` if everything installed properly, `FALSE` if not |

- Add the module to the `exp_modules` table---this step is required. Note `has_cp_backend` should be `'y'` if the module has a control panel, `'n'` otherwise; `has_publish_fields`' should be `'y'` if the module adds tabs/fields to the publish page, `'n'` otherwise:

      $data = array(
         'module_name' => 'Module_name' ,
         'module_version' => $this->version,
         'has_cp_backend' => 'y',
         'has_publish_fields' => 'y'
      );

      ee()->db->insert('modules', $data);

- Optionally add records to the `exp_actions` table---used if your module needs to invoke actions based on frontend behavior such as form submission:

      $data = array(
         'class'     => 'Module_name' ,
         'method'    => 'method_to_call'
      );

      ee()->db->insert('actions', $data);

- Optionally add the publish page tab fields to any saved publish layouts. This is ONLY used if the module adds a tab to the publish page and it requires the `tabs()` function:

      ee()->load->library('layout');
      ee()->layout->add_layout_tabs($this->tabs(), 'module_name');

### `update($current = '')`

| Parameter | Type      | Description                                                        |
| --------- | --------- | ------------------------------------------------------------------ |
| \$current | `string`  | The last recorded version of the module in the `exp_modules` table |
| Returns   | `Boolean` | `FALSE` if no update is needed, `TRUE` otherwise                   |

This function is checked on any visit to the module's control panel, and compares the current version number in the file to the recorded version in the database. This allows you to easily make database or other changes as new versions of the module come out:

    function update($current = '')
    {
        if (version_compare($current, '2.0', '='))
        {
            return FALSE;
        }

        if (version_compare($current, '2.0', '<'))
        {
            // Do your update code here
        }

        return TRUE;
    }

### `uninstall()`

| Parameter | Type      | Description                                                  |
| --------- | --------- | ------------------------------------------------------------ |
| Returns   | `Boolean` | `TRUE` if everything uninstalled properly, `FALSE` otherwise |

Deletes the module record from exp_modules, any associated actions from exp_actions, and uninstalls any tables created by the module. Returns TRUE

- Optionally delete any publish page tab fields saved in publish layouts. This is ONLY used if the module adds a tab to the publish page and it requires the `tabs()` function:

      ee()->load->library('layout');
      ee()->layout->delete_layout_tabs($this->tabs(), 'module_name');

### `tabs()`

| Parameter | Type    | Description                                      |
| --------- | ------- | ------------------------------------------------ |
| Returns   | `Array` | Associative array of the tab name and tab fields |

An optional function, included only if the module adds a tab to the publish page. This function should return an multidimensional associative array, the top array key consisting of the tab name, followed by any field names, with each field having a variety of default settings. Note that when the fields are added to the publish page, they are namespaced to prevent variable collisions:

    function tabs()
    {
        $tabs['tab_name'] = array(
            'field_name_one'=> array(
                'visible'   => 'true',
                'collapse'  => 'false',
                'htmlbuttons'   => 'true',
                'width'     => '100%'
                ),
            'field_name_two'=> array(
                'visible'   => 'true',
                'collapse'  => 'false',
                'htmlbuttons'   => 'true',
                'width'     => '100%'
                ),
            );

        return $tabs;
    }

## The Language File (module_name_lang.php)

The Language file contains an array named `$lang`, which is used along with the Language class to display text on a page in whatever language is selected in the user's account settings. There are two required lines in the language file for each module, which allows the name and description of the module to be viewable on the MODULES page:

    $lang = array(

    // Required for MODULES page

    'my_module_module_name'     => 'Module Name',
    'my_module_module_description'  => 'Brief description of the module- displayed on the Modules page',

    //----------------------------------------

    // Additional Key => Value pairs go here

    // END
    ''=>''
    );

If the ExpressionEngine core language files contains string with the same key, it will be used in favor of add-on specified string. If an add-on needs to override that string, that can be done by adding it to `$ee_lang` array in the add-on's language file.

### module tab label

In addition to the two required fields you can have a custom tab label for your publish fields. Just assign the desired label to a key which shares the name of your module name:

    // Additional Key => Value pairs go here

    /**
     * Tab Label for publish fields
     *
     * Assign the label you wish to use to the module_name array key
     * Remember only alphanumeric characters, underscores, dashes and spaces are allowed.
     */

    'module_name' => 'Tab label'

## The Tab File (tab.module_name.php)

**class `Module_name_tab`**

This is an optional file, required only if your module needs to include a tab on the publish page. It must have a class with a name that is a combination of the package's name with a `_tab` suffix. There are no required class variables. Because multiple modules may be adding fields to the publish page, all third party tab fields are namespaced using the package name when displayed on the publish page. This namespacing will be stripped prior to any data being returned to the tab functions.

NOTE: **Note:** if your module includes a tab, do not forget to indicate this in the update file when installing the module. Further, be sure to include the `tabs()` function in the update file, and use it when updating custom layouts on installation and uninstallation.

## Tab File Function Reference

**class `Module_name_tab`**

[TOC=3]

### `display($channel_id, $entry_id = '')`

| Parameter    | Type    | Description                                           |
| ------------ | ------- | ----------------------------------------------------- |
| \$channel_id | `int`   | Channel ID where the entry is being created or edited |
| \$entry_id   | `int`   | Entry ID if this is an edit, empty otherwise          |
| Returns      | `Array` | Settings (see below)                                  |

This function creates the fields that will be displayed on the publish page. It must return `$settings`, an associative array specifying the display settings and values associated with each of your fields.

The settings array elements:

    Array(
      '...' => Array( // name of the field (same as 'field_id' below)
        'field_id'              => '...', // name of the field
        'field_label'           => '...', // field label, typically a language variable is used here
        'field_required'        => '...', // whether to include the 'required' class next to the field label: y/n
        'field_data'            => '...', // current data, if applicable
        'field_list_items'      => '...', // array of options, otherwise empty string
        'options'               => '...', // array of options, otherwise empty string
        'selected'              => '...', // selected value if applicable to the field_type
        'field_fmt'             => '...', // allowed field format options, if applicable
        'field_instructions'    => '...', // instructions to be displayed for this field on the publish page
        'field_show_fmt'        => '...', // whether the field format dropdown shows: y/n. Note: if 'y', you must specify the options available in field_fmt
        'field_pre_populate'    => '...', // can pre-populate a field when it's a new entry
        'field_text_direction'  => '...', // direction of the text: ltr/rtl
        'field_type'            => '...'  // may be any existing field type
      )
    )

### `validate($entry, $values)`

| Parameter | Type                                                                         | Description                                                                                                                                                                                                            |
| --------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \$entry   | <small>`ExpressionEngine\Module\Channel\Model\ChannelEntry`</small> | The channel entry entity                                                                                                                                                                                               |
| \$values  | `array`                                                                      | an associative array with field names as keys and form submission data as the value (i.e. `array('fortune' => 'All your hard work will soon pay off.'))`. The keys are derrived from the data returned by `display()`. |
| Returns   | <small>`ExpressionEngine\Service\Validation\Result`</small>         | A result object                                                                                                                                                                                                        |

Allows you to validate the data after the publish form has been submitted but before any additions to the database:

    function validate($entry, $values)
    {
      $validator = ee('Validation')->make(array(
        'foo_field_one' => 'required',
        'foo_field_two' => 'required|enum[y,n]',
      ));

      return $validator->validate($values);
    }

### `cloneData($entry, $values)`

| Parameter | Type                                                                | Description                         |
| --------- | ------------------------------------------------------------------- | ------ ----------------------------- |
| \$entry   | <small>`ExpressionEngine\Module\Channel\Model\ChannelEntry`</small> | The channel entry entity            |
| \$values  | `array`         | an associative array with field names as keys and form submission data as the value (i.e. `array('fortune' => 'All your hard work will soon pay off.'))`. The keys are derrived from the data returned by `display()`. |
| Returns   | `array`         | $values modified array of values  |

Code that needs to be executed when an entry is being [cloned](/channels/entry_cloning.md). This function is called before `validate`, so if you need to modify the data that will be passed to validation service (as well as `$_POST` array), this is the place to do it.

    public function cloneData(ChannelEntry $entry, $values)
    {
        if ($values['pages_uri'] == '') {
            return $values;
        }
        //check if submitted URI exists
        $static_pages = ee()->config->item('site_pages');
        $uris = $static_pages[ee()->config->item('site_id')]['uris'];

        //exclude current page from check
        if (isset($uris[$entry->entry_id])) {
            unset($uris[$entry->entry_id]);
        }
        //ensure leading slash is present
        $value = '/' . trim($values['pages_uri'], '/');

        while (in_array($value, $uris)) {
            $value .= '_1';
        }
        $_POST['pages__pages_uri'] = $values['pages_uri'] = $value;

        return $values;
    }

### `save($entry, $values)`

| Parameter | Type                                                                         | Description                                                                                                                                                                                                           |
| --------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \$entry   | <small>`ExpressionEngine\Module\Channel\Model\ChannelEntry`</small> | The channel entry entity                                                                                                                                                                                              |
| \$values  | `array`                                                                      | an associative array with field names as keys and form submission data as the value (i.e. `array('fortune' => 'Do not make extra work for yourself.'))`. The keys are derrived from the data returned by `display()`. |
| Returns   | `Void`                                                                       |                                                                                                                                                                                                                       |

Called during a `ChannelEntry` entity's `afterSave` event, this allows you to insert data/update data:

    function save($entry, $values)
    {
        if (! isset($values['field_name_one']) OR $values['field_name_one'] == '')
        {
            return;
        }

        $data = array(
            'entry_id' => $entry->entry_id,
            'file_id' => $values['field_name_one']
        );

        ee()->db->insert('table_name', $data);
    }

### `delete($entry_ids)`

| Parameter   | Type    | Description                                           |
| ----------- | ------- | ----------------------------------------------------- |
| \$entry_ids | `array` | Channel ID where the entry is being created or edited |
| Returns     | `Void`  |                                                       |

Called during a `ChannelEntry` entity's `beforeDelete` event, this allows you to sync your records if any are tied to channel entry_ids.

## The Control Panel File (mcp.module_name.php)

Used to create the backend control panel, it includes a class with a name that is a combination of the package's name with a `_mcp` suffix. The first letter and only the first letter of the class name should be capitalized. There are no required class variables. The control panel file for a module without a backend control panel would look like:

    <?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

    class Module_name_mcp {

    }
    // END CLASS

    /* End of file mcp.module_name.php */
    /* Location: ./system/user/addons/modules/module_name/mcp.module_name.php */

### Control Panel URLS

The Control Panel URLs for your module follow the pattern `addons/settings/package_name/method_name/arguments`. For example, if we had a fortune cookie module with a view for list our cookies its URL would be `addons/settings/fortune_cookie/cookies`. Like 2.x the routing is automatic; all public methods in your `mcp.package_name.php` are automatically routed. We will also pass any arguments to your method found in the url. If the URL is `addons/settings/fortune_cookie/edit_cookie/3` we would need to have the following method signature:

    public function edit_cookie($id) {...}

We have a [CP/URL Service](development/services/url.md) to help you construct your URLs.

### Output, Breadcrumbs, and Headings

There are two ways to output your control panels. You may either return an HTML string, or you may return an associative array.

If you return a string that data will be used in the "body" section of the Control Panel layout inside our Add-On Manager. The breadcrumb will default to `Add-On Manager / Your Add-On Name` and the heading will default to `Your Add-On Name Configuration`. In our fortune cookie module example we would have `Add-On Manager / Fortune Cookies` as the breadcrumb and `Fortune Cookie Configuration` as the heading.

If you return an associative array it must contain the key `body` and may contain the keys `breadcrumb`, and `heading`:

    return array(
      'body'       => $html,
      'breadcrumb' => array(
        ee('CP/URL')->make('addons/settings/module_name')->compile() => lang('module_name')
      ),
      'heading' => lang('module_name_settings')
    );

- `body` (string): HTML string which will be used in the "body" section of the Control Panel layout inside the Add-On manager
- `breadcrumb` (array): Associative array containing key/value pairs where the key is the [CP/URL](development/services/url.md) and the value is the string to display as the breadcrumb
- `heading` (string): The string to display as the page `<title>` and the Section Header.

If your add-on needs a sidebar use the [Sidebar Service](development/services/sidebar.md).

### `ee()->cp->header`

This variable allows you to further customize your Section Header by specifying icons to go in front of the title.

Within your control panel method, or potentially the constructor, just set `ee()->cp->header`:

    ee()->cp->header = array(
      'toolbar_items' => array(
        'settings' => array(
          'href' => ee('CP/URL')->make('settings/template'),
          'title' => lang('settings')
        ),
      )
    );

- `toolbar_items` (array): An associative array of buttons to go in front of the title. The key will define the class and provide an icon (e.g. `settings` and `download`), and the value is another associative array containing the `href` and the `title` of the link.

### Javascript

ExpressionEngine includes both its own JavaScript library as well as the [The jQuery](https://jquery.com/) JavaScript library, enabling developers to easily include JavaScript enhancements. It is worth noting some 'best practices' when using JavaScript in your control panel:

- Loading jQuery plugins:

      ee()->cp->add_js_script(array('plugin' => 'dataTables'));

- Outputting JavaScript to the browser:

      ee()->javascript->output();

- After defining any JavaScript output, you must compile in order to display it:

      ee()->javascript->compile();

### Working with Forms

While creating forms for the backend is fairly routine, there are several differences/additions worth noting:

- The [Form Validation library](development/legacy/libraries/form-validation.md) is available, but the best means of checking submitted form data and returning in-line errors is to either use [Model Validation](development/services/model.md#validation) or the [Validation Service](development/services/validation.md).
- After form submission, you will generally want to output a success (or failure) message using the [CP/Alert Service](development/services/alert.md).

### Outputting Pages

There are two ways to output content to the screen. For very simple pages, you may want to simply return the desired output in a string. Any string that the method returns is placed inside the cp page's content container. With all but the simplest of output, the use of View files will be the preferred method for handling your markup and presentation.

## View Files

While you aren't required to use views to create your backend pages, they are the most modular and easy to read, modify, and edit approach to building control panel pages. A view is simply an html page, or snippet of a page, with some minimal php used to output variables. The variables are passed to the view in an array when you make it:

    return ee('View')->make('module_name:index')->render($vars);

This would return the index.php view page, located in a `views` folder. The view file is passed an array with all of the variables used by the view, and those variables are simple 'plugged into' the html. See the [View Service](development/services/view.md) for more details.

It is recommended that in view pages only, you use the [PHP's alternate syntax](development/guidelines/view-php-syntax.md) in your views, as it makes them easier to read and limits the amount of php. If this is not supported by your server, ExpressionEngine will automatically rewrite the tags.

### The Core Module File (mod.module_name.php)

The Core Module file is used for outputting content via Templates and doing any processing that is required by both the Control Panel and any module tags contained in a template. It includes a class with a name that matches the package (the first letter of the class name must be capitalized). There is one required class variable, \$return_data, which will contain the module's outputted content and is retrieved by the Template parser after the module is done processing.

The tag structure of a module follows the same rules as the [Plugins API](development/plugins.md):

    {exp:module_name:method}
