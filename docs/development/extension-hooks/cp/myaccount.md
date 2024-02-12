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

# My Account Controller Extension Hooks

### `myaccount_nav_setup()`

| Parameter | Type    | Description                            |
| --------- | ------- | -------------------------------------- |
| Returns   | `Array` | Additional My Account navigation items |

Add additional menu items to the My Account settings page.

How it's called:

    $vars['additional_nav'] = array(
        'personal_settings' => array(),
        'utilities' => array(),
        'private_messages' => array(),
        'customize_cp' => array(),
        'channel_preferences' => array(),
        'administrative_options' => array()
    );

    $vars['additional_nav'] = array_merge_recursive(
        $vars['additional_nav'],
        $this->extensions->call('myaccount_nav_setup')
    );

Your hook should return an associative array with the key matching one of the keys above that match the My Account sections. The value should be another associative array with the key being the text you want in the navigation and the value being another associative array with `extension` and `method` being the keys and their values being the respective extension's name and the method being a method that exists in the method's control panel.

Additionally, you should check `extensions->last_call` to avoid overwriting previous changes to the My Account navigation and be sure to use `array_merge_recursive` when merging the previous extension results:

    // Check for previous calls to myaccount_nav_setup hook
    $additional_nav = (ee()->extensions->last_call) ?
        ee()->extensions->last_call :
        array();

    // Load in language file for navigation wording
    ee()->lang->loadfile('extension_name');

    // Return new navigation item merged with existing calls to hook
    // Using array_merge_recursive for a deep clone
    return array_merge_recursive(
        $additional_nav,
        array(
            'customize_cp' => array(
                lang('extension_myaccount_settings') => array(
                    'extension' => 'extension_name',
                    'method'    => 'extension_myaccount_settings'
                )
            )
        )
    );

The method defined in the hook should provide the _innards_ of a My Account page pane without a form element (that will automatically be added for you). The form will be submitted to your defined method name with `_save` appended. For example, if the method name you defined in the hook was `myaccount_settings`, when the form is submitted, `myaccount_settings_save` will be called. Both methods--the one defined and the save method--will pass the `$member_id` of the member being edited as the only argument:

    public function myaccount_settings($member_id)
    public function myaccount_settings_save($member_id)

If you need to submit anything using AJAX, the following URL that you'll use (either for POSTing or GETing) is:

    'C=myaccount'.AMP.'M=custom_action'.AMP.'extension=extension_name'.AMP.'method=method_name'

Just replace the `extension_name` and `method_name` with the correct parameters and you should be set.
