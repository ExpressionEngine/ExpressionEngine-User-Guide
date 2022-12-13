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

# Extensions Development

[TOC]

## Overview

Within ExpressionEngine are what is known as 'hooks'; little snippets of code in over 100 strategic places that allow the calling of third-party scripts that can rewrite and modify the inner workings of the program. Extensions can do things like modify an entire Control Panel page, add/remove functionality, and modify the appearance of certain page elements. Extensions enable third party developers to modify aspects of ExpressionEngine without hacking the backend scripts. You can think of an Extension as a plugin. But unlike a plugin, Extensions are not used within your templates, they instead allow you to modify the core system itself.

An Extension is an add-on script that is placed in the `/system/user/addons/<package_name>/` directory and then enabled via the [Add-on Manager](control-panel/addons-manager.md) in the Control Panel. Extensions can have their own settings and their own database tables, if necessary, but neither is required. If settings are available for an Extension, a language file is required, but unlike a module there is no control panel for Extensions.

NOTE: Extensions can also be **generated quickly by the Command Line Interface (CLI)**. Refer to the [make:addon command](cli/built-in-commands/make-addon.md) for more information.


## Naming Convention

Extensions have a similar naming convention to ExpressionEngine plugins so current developers should get the hang of them quickly. There is only a single file required for an extension and inside this file should be a PHP class. The name of the class is used in the file name of the extension with the addition of the suffix `_ext` so that the name of the file is the _lower-cased_ class name with the prefix ext. and the standard PHP suffix of `.php`. So, if we have an extension named '`Link_truncator`', then the file name for this extension would be '`ext.link_truncator.php`' and the class would be called '`Link_truncator_ext`'.

## Add-on Setup file

All add-ons must have an `addon.setup.php` file. This one will be quite simple:

    <?php

    return array(
      'author'      => 'Me',
      'author_url'  => 'https://example.com/',
      'name'        => 'Link Truncator',
      'description' => '',
      'version'     => '1.0.0',
      'namespace'   => 'MyAddon\LinkTruncator',
      'settings_exist' => TRUE
    );

## The Base Extension Class

Inside an extension file should be a class, which will be called by ExpressionEngine whenever this particular extension is required. The constructor for the class will require one parameter that will receive settings for the extension and set a class variable.

    class Link_truncator_ext {

        var $settings        = array();

        /**
         * Constructor
         *
         * @param   mixed   Settings array or empty string if none exist.
         */
        function __construct($settings='')
        {
            $this->settings = $settings;
        }
        // END
    }
    // END CLASS

Besides the \$settings class variable, there are five other required class variables that your extension should have. These variables output meta information about your extension to the Extensions Manager so that it can describe your extension, provide documentation, and update settings (if any).

    class Link_truncator_ext {

        var $name       = 'Link Truncator';
        var $version        = '1.0';
        var $description    = 'Truncates long links';
        var $settings_exist = 'y';
        var $docs_url       = ''; // 'https://expressionengine.com/expressionengine/user-guide/';

        var $settings       = array();

        /**
         * Constructor
         *
         * @param   mixed   Settings array or empty string if none exist.
         */
        function __construct($settings = '')
        {
            $this->settings = $settings;
        }
    }
    // END CLASS

If your extension has a language file, then you the \$name and \$description class variables can be set in the constructor by calling the language file and variables using the [Language (\$LANG) class](development/legacy/libraries/language.md). If your plugin is likely to be used internationally and by non-English speakers this is a recommended course of action.

## Activating and Updating

There are two required methods for your extensions class that control the activating and updating of your extension. The most important is the function used to activate the extension in ExpressionEngine. To activate an extension, you are simply inserting a query into the database with various pieces of information like the extension hook and the name of the method in your extension's class to call for this hook.

    /**
     * Activate Extension
     *
     * This function enters the extension into the exp_extensions table
     *
     *
     * @return void
     */
    function activate_extension()
    {
        $this->settings = array(
            'max_link_length'   => 18,
            'truncate_cp_links' => 'no',
            'use_in_forum'      => 'no'
        );


        $data = array(
            'class'     => __CLASS__,
            'method'    => 'truncate_this',
            'hook'      => 'typography_parse_type_end',
            'settings'  => serialize($this->settings),
            'priority'  => 10,
            'version'   => $this->version,
            'enabled'   => 'y'
        );

        ee()->db->insert('extensions', $data);
    }

Here is a quick run down of what each of these fields in the database table mean:

- `extension_id` - primary id for row in table
- `class` - name of your extension's class
- `method` - method being called for this extension hook
- `hook` - name of the extension hook in the program
- `settings` - serialized array of settings, usually empty by default
- `priority` - an extension hook could have many extensions being called, so there needs to be priority. 1 =&gt; First, 10 =&gt; Last.
- `version` - version of extension when activated, used for updating
- `enabled` - is this extension activated

Updating an extension is extremely easy in ExpressionEngine. The user will simply upload the new version of the extension and ExpressionEngine will automatically update the extension the next time it is called. All that is required is an intelligent function called `update_extension()`. The program will automatically compare the version of the extension information in the database against the version of the extension file, and if the extension file is a newer version it calls this function.

    /**
     * Update Extension
     *
     * This function performs any necessary db updates when the extension
     * page is visited
     *
     * @return  mixed   void on update / false if none
     */
    function update_extension($current = '')
    {
        if ($current == '' OR $current == $this->version)
        {
            return FALSE;
        }

        if ($current < '1.0')
        {
            // Update to version 1.0
        }

        ee()->db->where('class', __CLASS__);
        ee()->db->update(
                    'extensions',
                    array('version' => $this->version)
        );
    }

## Disabling

When an extension is enabled for the very _first_ time, the `activate_extension()` function is called and all of the extension calls are inserted into the database. When an extension is disabled though, these extension calls are not removed from the database. Instead they are merely disabled, which allows settings to be preserved and not removed so that they are still there if the extension is enabled again in the future.

This causes a problem for developers who, while developing an extension, will often enable an extension to test their code but before they have added all of their extension calls to the `activate_extension()` function. What we have done is allowed the creation of a `disable_extension()` function in an extension's class. If this function exists in the class, it will be called whenever your extension is disabled. This will allow you to clear out your extension's data and basically start fresh every single time.

    /**
     * Disable Extension
     *
     * This method removes information from the exp_extensions table
     *
     * @return void
     */
    function disable_extension()
    {
        ee()->db->where('class', __CLASS__);
        ee()->db->delete('extensions');
    }

## Settings

[TOC=3]

### Abstracted Settings Form and Processing

If you want to give your extension the ability to have settings, then we have written an abstracted layer to make it extremely easy. First, you have to make sure that you have your `$settings_exist` class variable set to '`y`'. Second, you need a language file for your extension with the file name of the language file being the extension's lower-cased class name with a suffix of '`_lang.php`'. Make sure the language file is put in the `/system/user/addons/package name/language/` directory too. And finally, you need to have a method in your extension's class called `settings()`. This function will return an array in a certain form that will help the Extensions Manager automatically create a form for your settings.

    // --------------------------------
    //  Settings
    // --------------------------------

    function settings()
    {
        $settings = array();

        // Creates a text input with a default value of "EllisLab Brand Butter"
        $settings['brand']      = array('i', '', "EllisLab Brand Butter");

        // Creates a textarea with 20 rows and an empty default value
        $settings['description']    = array('t', array('rows' => '20'), '');

        // Creates a set of radio buttons, one for "Yes" (y), one for "No" (n) and a default of "Yes"
        $settings['tasty']      = array('r', array('y' => "Yes", 'n' => "No"), 'y');

        // Creates a set of checkboxes, one for "Lowfat" (l) and one for "Salty" (s), and a
        // default of both items being checked
        $settings['details']    = array('c', array('l' => "Lowfat", 's' => "Salty"), array('l', 's'));

        // Creates a select dropdown with the options "France" (fr), "Germany" (de), and "United States"
        // (us), with a default of "United States"
        $settings['country']    = array('s', array('fr' => 'France', 'de' => 'Germany', 'us' => 'United States'), 'us');

        // Creates a multi-select box with the options "Derek" (dj), "Leslie" (lc), and "Rick" (re) with
        // Derek and Rick selected by default
        $settings['enjoyed_by'] = array('ms', array('dj' => 'Derek', 'lc' => 'Leslie', 're' => 'Rick'), array('dj', 're'));


        // General pattern:
        //
        // $settings[variable_name] => array(type, options, default);
        //
        // variable_name: short name for the setting and the key for the language file variable
        // type:          i - text input, t - textarea, r - radio buttons, c - checkboxes, s - select, ms - multiselect
        // options:       can be string (i, t) or array (r, c, s, ms)
        // default:       array member, array of members, string, nothing

        return $settings;
    }
    // END

A note about the values array for the second field: The keys will be used as the value for that item while the value will be the language text for that item. If you want, the value can be the name of a language variable from your extension's language file and the Extensions Manager will automatically retrieve it for you.

### Built In Settings Form and Processing

Alternatively, if your settings require a special form that cannot be created by the abstracted layer above, then ExpressionEngine permits you to create your own settings form and processing functions within your Extension. First, you will need to have a method in your extension's class called `settings_form()`.

    /**
     * Settings Form
     *
     * @param   Array   Settings
     * @return  void
     */
    function settings_form($current)
    {
      $name = 'link_truncator';

      if ($current == '')
      {
        $current = array();
      }

      $defaults = array(
        'max_link_length' => 20,
        'truncate_cp_links' => 'n'
      );

      $values = array_replace($defaults, $current);

      $vars = array(
        'base_url' => ee('CP/URL')->make('addons/settings/' . $name . '/save'),
        'cp_page_title' => 'Link Truncator Settings',
        'save_btn_text' => 'btn_save_settings',
        'save_btn_text_working' => 'btn_saving',
        'alerts_name' => 'link-truncator-save',
        'sections' => array(array())
      );

      $vars['sections'] = array(
        array(
          array(
            'title' => 'max_link_length',
            'fields' => array(
              'max_link_length' => array(
                'type' => 'text',
                'value' => $values['max_link_length'],
                'required' => TRUE
              )
            )
          ),
          // Site short name field
          array(
            'title' => 'truncate_cp_links',
            'desc' => 'truncate_cp_links_desc',
            'fields' => array(
              'truncate_cp_links' => array(
                'type' => 'yes_no',
                'value' => $values['truncate_cp_links'],
                'required' => TRUE
              )
            )
          )
        )
      );

      return ee('View')->make('link_truncator:index')->render($vars);
    }

### View File

Since we're using the [Shared Form View](development/shared-form-view.md), our view file remains quite simple. In this case we will call it _Views/index.php_

    <div class="box">
      <?php $this->embed('ee:_shared/form')?>
    </div>

### Save Settings

Lastly, you will need to have a method in your extension's class called `save_settings()`. This function will be called when your `settings_form()` method's form is submitted. Use it to process the data sent and put it into the exp_extensions database table. Remember that the data put into the database is a serialized array, so handle it appropriately.

    /**
     * Save Settings
     *
     * This function provides a little extra processing and validation
     * than the generic settings form.
     *
     * @return void
     */
    function save_settings()
    {
        if (empty($_POST))
        {
            show_error(lang('unauthorized_access'));
        }

        ee()->lang->loadfile('link_truncator');

        $len = ee()->input->post('max_link_length');

        if ( ! is_numeric($len) OR $len <= 0)
        {
          ee('CP/Alert')->makeInline('link-truncator-save')
            ->asIssue()
            ->withTitle(lang('message_failure'))
            ->addToBody(sprintf(lang('max_link_length_range'), $len))
            ->defer();
        }
        else
        {
          ee('CP/Alert')->makeInline('link-truncator-save')
            ->asSuccess()
            ->withTitle(lang('message_success'))
            ->addToBody(lang('preferences_updated'))
            ->defer();
        }

        ee()->functions->redirect(ee('CP/URL')->make('addons/settings/link_truncator'));
    }

## Calling of the Extension

The following is an example of an ExpressionEngine Extension Hook that is available for use:

    // -------------------------------------------
    // 'typography_parse_type_end' hook.
    //  - Modify string after all other typography processing
    //
        if (ee()->extensions->active_hook('typography_parse_type_end') === TRUE)
        {
            $str = ee()->extensions->call('typography_parse_type_end', $str, $this, $prefs);
        }
    //
    // -------------------------------------------

The first parameter of `$this->extensions->call_extension` is the name of the hook, which lets the Extension class know what extensions to call. The other three parameters are variables taken from the function that the hook is embedded within. They provide information and data for the extensions being called for this hook, which allows those extensions to have information about the script that allow them to perform certain actions or manipulate data. When an extension is called, ExpressionEngine loads the extension file, instantiates the extension's class, and then calls the method specified for this extension hook as specified by the extension when it was activated (see above concerning activation).

When that method is called in the extension's class those other three parameters will be sent to the method automatically. Here is what the method might look like:

    /**
     * Shorten Link Text
     *
     * This function is a callback method for preg_replace_callback in the method below.
     *
     * @param   array   array from the preg_match
     * @return  string  Newly truncated Link.
     */
    function _shorten_link_text($matches)
    {
        $link_text = $matches[3];
        $link_text = substr($link_text, strpos($link_text, '://') + 3);

        if (strlen($link_text) >= (int) $this->settings['max_link_length'] )
        {
            $l = (int) $this->settings['max_link_length'] / 2;

            $b_part = substr($link_text, 0,  $l);
            $e_part = substr($link_text, -$l);

            $link_text = $b_part . '&hellip;' . $e_part;
        }

        return $matches[1].$link_text.'</a>';
    }

    /**
     * Truncate This
     *
     * This function is the meat & potatoes of the extension, where all
     * the work is done.
     *
     * @see https://expressionengine.com/user-guide/development/extension_hooks/global/typography/index.html#typography-parse-type-end
     *
     * @param   string  string to look
     * @param   object  typography object
     * @param   array   array of preferences
     * @return  string
     */
    function truncate_this($str, $obj, $prefs)
    {
        if ($this->settings['truncate_cp_links'] == 'no' && REQ == 'CP')
        {
            return $str;
        }

        if (isset($obj->EE->FRM_CORE) && $this->settings['use_in_forum'] == 'no')
        {
            return $str;
        }

        $pattern = "/(<a[^>]*\s+href\s*=\s*(\042|047)([^\\2]*?)\\2[^>]*>)\\3<\/a>/i";

        $str = preg_replace_callback($pattern, array(get_class($this), '_shorten_link_text'), $str);

        return $str;
    }

The three parameters from the extension hook are mapped straight to the three parameters of the method being called, and so your extension can easily use those parameters and do what it needs to do. The Extension Hook library will have a record of all extension hooks and the parameters available to you, along with a suggestion or two about what can be done with the extension hook.

## Multiple Extensions, Same Hook

When an extension hook is called, ExpressionEngine checks the database to see if there are any extensions available for the hook. If there are extensions, then it processes them in order based on their priority level with the lower the priority number the sooner the extension is called. Because of priority, extensions might interfere with each other, so we have provided two variables for helping with that.

### `$this->extensions->last_call`

There will be rather popular hooks being used by multiple extensions and some hooks will expect you to return data to the extension hook. Because of that, there is a variable available from the Extensions class (`$this->extensions`) that will contain the returned data of any prior extensions for that hook. Say, there is a hook for formatting text and an extension before yours is called. That extension will be returning the text formatted in its own way, but then your extension is called with the original text details being sent. In such an instance of data being returned and possible prior extensions, there is a variable available to retrieve that already formatted text: `$this->extensions->last_call`. This variable will return whatever the last extension returned to this hook. If there was no prior extension, then the value of this variable is `FALSE`.

### `$this->extensions->end_script`

Many extension hooks exist for the express purpose of totally controlling a page or script in the Control Panel. They are meant for redesigning the appearance of a form or perhaps usurping a script for processing form data. In those instances you want your extension to be the last thing called for that extension hook so that nothing else is processed after that point. The `$this->extensions->end_script` exists solely for that purpose. If you set this value to TRUE, then once your extension is done being processed the execution of the hook is finished, as is the script that the extension hook is contained within.
