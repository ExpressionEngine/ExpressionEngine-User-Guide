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

# Enhanced Fieldtype Features Development

[TOC]

## Working with Live Preview

In order for your fieldtype to render in a template under live preview, it needs to be able to render using data from the publish form, which is essentially your fieldtype's POST data. You will not access your data from `$_POST`, your fieldtype's data should be sent automatically to your `replace_tag()` method. If you're missing any data, you can access the entry's entire preview data via the [LivePreview service](development/services/live-preview.md).

This means if your fieldtype does extra processing before your data is saved and your `replace_tag()` method expects data in a different format than what is returned directly from the publish form, you'll need to make accommodations.

For instance, say your fieldtype has inputs that look like this:

    <input type="text" name="field_id_1[text1]">
    <input type="text" name="field_id_1[text2]">

And your `save()` and `replace_tag()` routines looks like this:

    function save($data)
    {
        // Concatenate this data to save in the database
        return $data['text1'] . $data['text2'];
    }

    function replace_tag($data)
    {
        // Data is preformatted, just return it!
        return $data;
    }

You may want to change your `replace_tag()` routine to format its data on the fly:

    function replace_tag($data)
    {
        // Looks like we're in live preview, reformat our data for presentation
        if (ee('LivePreview')->hasEntryData())
        {
            return $data['text1'] . $data['text2'];
        }

        return $data;
    }

### Live Preview Javascript

Live Preview automatically refreshes when HTML inputs, selects, and textareas are interacted with. If your fieldtype has other interactions that need to update the live preview, you can use the following JavaScript:

    $(document).trigger('entry:preview');

Many fieldtypes do not need to be notified via JavaScript when the Live Preview modal opens and closes, many of your JavaScript bindings should continue to work. But certain libraries such as CKEditor may require some more attention in this area and for that you can listen to the `entry:preview-open` and `entry:preview-closed` events on `$(document)` to do any extra processing you need:

    $(document).on('entry:preview-open', function(event) {
      // ...
    });

## Displaying field data in Entry Manager

Custom fields can display their data inside the Entry Manager through 3 possible ways:
 1. Declare `public $has_array_data = false;` OR
 2. Add `implements ColumnInterface` to fieldtype class definition.

        use ExpressionEngine\Library\CP\EntryManager\ColumnInterface;
        class Google_maps_ft extends EE_Fieldtype implements ColumnInterface {
    OR
 3. Declare `public $entry_manager_compatible = true;` and implement `renderTableCell` method

**Example:**

    class Google_maps_ft extends EE_Fieldtype
    {
        public $has_array_data = true;

        public $entry_manager_compatible = true;

        /*.....*/

        /**
        * Implements EntryManager\ColumnInterface
        */
        public function renderTableCell($data, $field_id, $entry)
        {
            if (!empty($data)) {
                list($latitude, $longitude, $zoom) = explode('|', $data);
                return "<a href=\"https://www.google.com/maps/@{$latitude},{$longitude},{$zoom}z\" target=\"_blank\">View on map</a>";
            }
            return '';
        }

        /**
        * Allows HTML in the column content
        */
        public function getTableColumnConfig()
        {
            return [
                'encode' => false
            ];
        }

        /* .... */

    }

## Entry cloning support

ExpressionEngine has the ability to [clone existing entries](/channels/entry_cloning.md) using the "Clone to New Entry" option on the entry editing page. Most fieldtypes do not need to do anything special to support this feature.

However, if the fieldtype you are developing saves data to its own database table, you might need to tell it to save the rows as a submission for the new entry and not for the existing one.

You can do this by adding this check:

    if (defined('CLONING_MODE') && CLONING_MODE === true) {
        //this is cloning request, add new rows
    }

## Conditional Fields support

Unless different specified directly, each fieldtype can be as data source for [Conditional Fields](control-panel/field-manager/conditional-fields.md) via the default evaluation rules set. The default set is different depending on whether the fieldtype can hold text-like data or array-like data.

If the fiedltype has `has_array_data` property set to `true`, the default rules set is limited `isEmpty` and `isNotEmpty`.

If `has_array_data` is not set or set to `false`, it is being assumed that the fieldtype holds text data and the rules list is set to following:

    'equal', 'notEqual', 'isEmpty', 'isNotEmpty', 'contains', 'notContains'


If the fieldtype is not designed to be used as the source for conditional field evaluation, it can be excluded by using this code:

    public $supportedEvaluationRules = null;

If the fieldtype needs to support the list or evaluation rules that is different from default, it can specify `supportedEvaluationRules` property as array of rule name, e.g.

    public $supportedEvaluationRules = ['isEmpty', 'isNotEmpty', 'contains', 'notContains'];

If certain rule needs to be pre-selected by default when adding new condition to the field, it's name can be specified in `defaultEvaluationRule` property, e.g.

    public $defaultEvaluationRule = 'contains';

### Built-in evaluation rules

#### `contains`
"contains". Evaluates to `true` if the field value contains the expected string.

#### `equal`
"is". Evaluates to `true` if the field value is exactly same as expected string.

#### `greaterOrEqualThan`
"greater or equal than". Evaluates to `true` if the numeric field value is greater or equal than expected number.

#### `greaterThan`
"greater than". Evaluates to `true` if the numeric field value is greater or equal than expected number.

#### `isEmpty`
"is empty".  Evaluates to `true` if the field does not contain any value, or an empty string, or an empty array.

#### `isNotEmpty`
"is not empty".  Evaluates to `true` if the field contains value different from empty string or empty array.

#### `lessOrEqualThan`
"less or equal than". Evaluates to `true` if the numeric field value is less or equal than expected number.

#### `lessThan`
"less than". Evaluates to `true` if the numeric field value is less than expected number.

#### `matches`
"is". Evaluates to `true` if the field data is array, contains only value and the value is exactly same as expected string.

#### `notContains`
"does not contain". Evaluates to `true` if the field value does not contain the expected string.

#### `notEqual`
"is not". Evaluates to `true` if the field value is not exactly same as expected string.

#### `notMatches`
"is not". Designed for array-type of data, evaluates to `true` if the field data array contains more than one value, or the only value is not exactly same as expected string.

### Creating custom evaluation rules

The fieldtypes can define their own evaluation rules that would contain the logic specific to this fieldtype.
This is done by creating evaluation rule file and listing its name in the fieldtype property.

The file needs to be placed in `EvaluationRules` subfolder or the add-on's own directory. Below is the example `TurnedOn.php` file from `toggle` add-on.

    namespace ExpressionEngine\Addons\ToggleField\EvaluationRules;
    use ExpressionEngine\Service\ConditionalFields\EvaluationRules\AbstractEvaluationRule;
    use ExpressionEngine\Service\ConditionalFields\EvaluationRules\EvaluationRuleInterface;

    class TurnedOn extends AbstractEvaluationRule implements EvaluationRuleInterface
    {
        public function evaluate($fieldValue, $expectedValue, $fieldSettings)
        {
            if (is_null($fieldValue)) {
                $fieldValue = $fieldSettings['field_default_value'];
            }
            return get_bool_from_string($fieldValue);
        }

        public function getConditionalFieldInputType()
        {
            return null;
        }
    }

The file name should match the class name and will make the rule name by converting first letter to lower case. So for given example, the rule name will be `turnedOn` and to enabled it, the `ft.toggle.php` will have this code:

    public $supportedEvaluationRules = ['turnedOn', 'turnedOff'];

The evaluation rule class is required to implement `ExpressionEngine\Service\ConditionalFields\EvaluationRules\EvaluationRuleInterface`.
We also recommend to extend `ExpressionEngine\Service\ConditionalFields\EvaluationRules\AbstractEvaluationRule` to avoid writing the code that is not necessary.

There are 3 available methods, and you are required to implement `evaluate` at the minimum.

#### `evaluate($fieldValue, $expectedValue, $fieldSettings)`

Evaluates the rule by comparing the field value (`$fieldValue`) with the `$expectedValue` as entered in the conditional field settings.
`$fieldSettings` is available as array of field settings.

#### `getLanguageKey()`

Should return language key for this evaluation rule to be displayed as human readable name in dropdown when setting up conditionals for the field.
Implementation of this method in `AbstractEvaluationRule` will return the rule name as language key.

#### `getConditionalFieldInputType()`

Should return the input type for the column in conditional field settings where the expected data to check against will be entered.
Possible return values are:
 - `null` - no input is shown
 - `'text'` - shows text input
 - `'select'` - shows select input populated with the field options (for fieldtypes that extend `OptionFieldtype`)

## File Manager support

When a file is referenced inside content, it can be in two different forms depending on if the file manager is running in compatibility mode or not. An example of this is when a file is chosen inside an RTE field via the filepicker. If the file manager is not running in [compatibility mode](control-panel/file-manager/file-manager.md#compatibility-mode), the file references in content will contain a file ID (e.g. `{file:123:url}` where 123 is the file ID). The file can also be referenced in content with a directory ID and file name (e.g. `{filedir_2}filename.jpg`) when in compatibility mode.

To parse both cases correctly, please use the `ee()->file_field->parse_string()` function.

    ee()->load->library('file_field');
    $data = ee()->file_field->parse_string($data);

If the fieldtype is using custom JavaScript for manipulating the files, be sure to make the code aware of the [`EE.fileManagerCompatibilityMode`](development/control-panel-js/globals.md#filemanagercompatibilitymode) variable.

## Implementing Filepicker for Rich Text Editor

If your add-on is operating as File Manager, you might want to make it available as file picker for RTE fields.

In order to achieve that, create file prefixed with `rtefb.` in add-on's main directory, e.g. `rtefb.my_addon.php`. You can refer to the file in Filepicker add-on as an example.

The file's class needs to implement `ExpressionEngine\Library\Rte\RteFilebrowserInterface`. The easiest way to achieve that is to extend `ExpressionEngine\Library\Rte\AbstractRteFilebrowser` abstract class and add code only for the functions that work differently from

## Working with Front-End Editing

Most fieldtypes will work with [Front-end content management](/advanced-usage/front-end/frontend.md) out-of-the-box.

However there are some parameters that can be set in `ft.` to improve integration.

### Disabling Front-end Edit Link

    public $disable_frontedit = true;

Setting `$disable_frontedit` to `true` will disable frontend-editing for the fieldtype and the edit links will never appear.

### Field Editing Window Size

    public $size = 'large';

By default, all fields are being opened for front-end editing in the pop-up window of same size. However if you need larger or smaller window, that can be specified in fieldtype file.

The available options are:
 - large
 - small
 - footer

### Making Complex Fieldtypes To Work

If your fieldtype is representing complex data structures, such as Grid or Fluid field, you will need to tell Pro to be treat this fieldtype in a different way. You can do this by declaring in fieldtype

    public $complex_data_structure = true;
