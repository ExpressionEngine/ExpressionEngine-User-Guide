<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Pro Variables Fieldtype

Pro Variables also adds the Pro Variables Fieldtype. You can now choose to add a list of variables to your publish page, outputting the variable name. You can use that in other tags, like the `{exp:pro_variables:parse}` tags. 

## Settings

### Allow multiple

Enable to allow the selection of multiple variables. When disabled, the field will display as a drop-down field. When enabled, it will display as a list of checkboxes.

### Variable groups

Limit the selectable variables by variable group.

NOTE: Only _non-hidden_ and variables with _early parsing disabled_ show up in the variable list in the Publish Form.

The value of the field will be the _variable name_, for example: `my_var`. To output the variable name as a variable itself, add the suffix `:var` to your channel field name, for example: `{my_channel_field:var}`. This will output `{my_var}`, which will be parsed by the ExpressionEngine template parser at a later stage.

## Examples

Say you have 5 different testimonial quotes stored as variables in the variable group Quotes, named `lv_quote_1` to `lv_quote_5`. To each News entry, you want to add one of those quotes. Then add a Pro Variables field to your News field group, eg. `news_quote`. Then select the Quotes group in the field settings. To output the quote, you’d need code like this:

    {exp:channel:entries channel="news"}
      <h2>{title}</h2>
      {news_intro}
      {if news_quote}<blockquote><p>{news_quote:var}</p></blockquote>{/if}
    {/exp:channel:entries}

You can use additional data by feeding the field value to the Pro Variables template tag parameter, for example:

    {exp:channel:entries channel="news"}
      <h2>{title}</h2>
      {news_intro}
      <div class="meta">
        <p>{exp:pro_variables:label var="{news_quote}"}:</p>
        <blockquote>{exp:pro_variables:single var="{news_quote}" format="textile"}</blockquote>
      </div>
    {/exp:channel:entries}

If you’re allowing for multiple selections, you can use the channel field as a variable pair. In that case, use the variable `{var}` to output the variable name. For example:

    {exp:channel:entries channel="news"}
      <h2>{title}</h2>
      {news_intro}
      {news_quotes}
        <blockquote><p>{{var}}</p></blockquote>
      {/news_quotes}
    {/exp:channel:entries}