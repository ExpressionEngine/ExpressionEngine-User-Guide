<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Template tags

In most cases, the simple global variable syntax, eg. `{my_var}` will do. Global variables _do not_ support parameters, nor do they support the variable pair syntax. However, tags do.

[TOC]

## Parse tag

    {exp:pro_variables:parse var="my_var"}

Use the Parse, Single or Pair tag to parse variables during the Module & Plugin stage. You can also use parameters, which will allow for more options than just using the variable syntax. Some variable types, like RTE and Grid, require using the tag syntax to trigger additional processing.

TIP: TIP: **{ee:u}** Learn more about the parsing stages at [ExpressionEngine University](https://u.expressionengine.com/course/ee-conf-spring-summit-2021/eeconf-spring-2021-but-first-parse-order-and-php-in-expressionengines-templates).

NOTE: **Note:** Whenever you need parameters or additional processing, use the **tag syntax** rather than the variable syntax.

### Parameters

#### `var`

Name of the variable you want to parse. Use a colon to separate site name and variable name if you want to parse a variable belonging to a specific site, eg. `my_site:my_var`. If this parameter is omitted, all Pro Variables inside the tag pair are simply replaced with their values.

#### `multiple`

If set to `yes`, the tag will loop through the different values of the variable. This parameter applies to any of the native variable types that use the `separator` setting: [Checkbox Group](/add-ons/pro-variables/type.md#checkbox-group), [Radio Group](/add-ons/pro-variables/type.md#radio-group) and _all_ [Select types](/add-ons/pro-variables/type.md#select). Use only in combination with the `var` parameter.

#### `limit`

Use in combination with `multiple="yes"` to limit the number of results displayed.


#### _3rd party_

If you’re displaying a 3rd party field type, you can use all parameters you would normally use for the field channel variable pair.

### Variables

#### `{_my_var_:data}`

The variable value.

#### `{_my_var_:data_label}`

The variable value’s label, when displaying a Checkbox Group, Radio Group or Select variable type.

#### `{_my_var_:label}`

The variable label, as displayed in the Control Panel.

#### `{_my_var_:count}`

Current count of the loop.

#### `{_my_var_:total_results}`

Total of iterations of the loop.

#### _3rd party_

If you’re displaying a 3rd party field type, you can use all variables you would normally use inside the field channel variable pair.

NOTE: **Note:** the `{_my_var_:…}` variables are _only_ available when using the Parse tag pair or Pair tag pair, _and_ if the variable type allows multiple items to be selected. For more options on the native variable types, [check their properties](/add-ons/pro-variables/type.md).

    {exp:pro_variables:parse var="my_site:my_var"}

    {exp:pro_variables:parse}
      Some code riddled with {my_var}
      and {my_other_var}.
    {/exp:pro_variables:parse}

    {exp:pro_variables:parse var="my_select_var" multiple="yes"}
      <p>
        Number {my_select_var:count} of {my_select_var:total_results}:
        {my_select_var:data} ({my_select_var:data_label})
      </p>
      {if no_results}No values found{/if}
    {/exp:pro_variables:parse}

    {exp:pro_variables:parse var="my_matrix_var"}
      all matrix variables here
    {/exp:pro_variables:parse}

## Single tag

    {exp:pro_variables:single var="my_var"}

In order to avoid conflicts with multiple instances of the Parse tag, both single and paired, you can use the alias `{exp:pro_variables:single}` for single tag use. It is identical to the Parse tag, but meant for single tag use only.

## Pair tag

    {exp:pro_variables:pair var="my_var"}{/exp:pro_variables:pair}

In order to avoid conflicts with multiple instances of the Parse tag, both single and paired, you can use the alias `{exp:pro_variables:pair}` for tag pair use. It is identical to the Parse tag, but meant for tag pair use only.

You can also use [variable modifiers](templates/variable-modifiers.md) on pro variables when using them in a tag pair:

    {exp:pro_variables:parse}
      Encrypted text var: {my_text:encrypt}
    {/exp:pro_variables:parse}

## Label tag

    {exp:pro_variables:label var="my_var"}

You can display the label of any variable by using this tag. Use as single tag only.

### Parameters

#### `var`

Name of the variable you want to fetch the label from. Use a colon to separate site name and variable name if you want to parse a variable belonging to a specific site, eg. `my_site:my_var`. _This is a required parameter_.

## Options tag

This tag pair allows you to display the options for a given variable. Use this in combination with the **Checkbox Group**, **Radio Group** and **Select** variable types.

### Parameters

#### `var`

Name of the variable you want to parse. Use a colon to separate site name and variable name if you want to parse a variable belonging to a specific site, eg. `my_site:my_var`. _This is a required parameter_.

### Variables

#### `{_my_var_:data}`

Value of the option.

#### `{_my_var_:data_label}`

Associated label of the value.

#### `{_my_var_:label}`

Label of the variable itself.

#### `{active}`

Set to y if the variable data contains the current option.

#### `{checked}`

Returns  `checked="checked"` if current option is active.

#### `{selected}`

Returns  `selected="selected"` if current option is active.

#### `{total_results}`

The total amount of options.

#### `{count}`

The count out of the current option.

    {exp:pro_variables:options var="my_multi_var"}
      {if count == 1}<ul>{/if}
        <li{if active == "y"} class="active"{/if}>{my_multi_var:data_label}</li>
      {if count == total_results}</ul>{/if}
    {/exp:pro_variables:options}

    <select name="options">
      {exp:pro_variables:options var="my_site:my_multi_var"}
        <option value="{my_multi_var:data}"{selected}>{my_multi_var:data_label}</option>
      {/exp:pro_variables:options}
    </select>
