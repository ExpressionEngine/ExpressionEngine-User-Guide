<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->
# Parameters in Pro Search

Pro Search uses both native and its own parameters to generate search results. All these parameters can be applied in two ways: as input fields in a Form, or as hard-coded parameters in the Results or URL tag. The values of these parameters can always be shown inside a Pro Search tag by using the parameter name as a variable, prefixed with pro_search_.

So, any parameter:

`param_name="param_value"`

Is equal to:

`<input name="param_name" value="param_value">`

And the param_value can be shown with:

`{pro_search_param_name}`

For example, take a look at these parameters, input fields and variables:

`channel="news" search:featured="yes"`

`<input type="hidden" name="channel" value="news">`
`<input type="checkbox" name="search:featured" value="yes" checked>`

`{pro_search_channel}`
`{pro_search_search:featured}`

TIP Use input fields if you want the value of the parameter to be user defined or logged to the Search Log. Use hard-coded parameters if you want the value to be fixed.

### Multiple values

In ExpressionEngine, multiple values of a parameter are usually separated by a vertical bar |. This can also be translated into input fields, as long as the parameter name has square brackets ([]) appended to it. Then the same principle applies:

`category="2|4|6" search:number="one|three"`

    <select name="category[]" multiple>
      <option value="1">Category One<option>
      <option value="2" selected>Category Two<option>
      <option value="3">Category Three<option>
      <option value="4" selected>Category Four<option>
      <option value="5">Category Five<option>
      <option value="6" selected>Category Six<option>
    </select>

    <input type="checkbox" name="search:number[]" value="one" checked> One
    <input type="checkbox" name="search:number[]" value="two"> Two
    <input type="checkbox" name="search:number[]" value="three" checked> Three

    {pro_search_category}
    {pro_search_search:number}

WARN**Note:** do not include the square brackets in the variable names.

### Inclusive values

The example above will filter results by any of the values given. However, ExpressionEngine also allows you to filter by all of the values, by separating them with an ampersand (&) rather than a vertical bar. Pro Search also caters for this, using the require_all parameter, which takes any amount of parameter names as its value. For example:

`category="2&4&6" search:number="one&&three"`

This is equal to:

`category="2|4|6" search:number="one|three" require_all="category|search:number"`

    <select name="category[]" multiple>
      <option value="1">Category One<option>
      <option value="2" selected>Category Two<option>
      <option value="3">Category Three<option>
      <option value="4" selected>Category Four<option>
      <option value="5">Category Five<option>
      <option value="6" selected>Category Six<option>
    </select>

    <input type="checkbox" name="search:number[]" value="one" checked> One
    <input type="checkbox" name="search:number[]" value="two"> Two
    <input type="checkbox" name="search:number[]" value="three" checked> Three

    <input type="hidden" name="require_all" value="category|search:number">

    {pro_search_category}
    {pro_search_search:number}
    {pro_search_require_all}

#### Exclude values

ExpressionEngine also allows you to exclude values, by prepending not  to the parameter value, which negates the value. Pro Search also caters for this, using the exclude parameter, which takes any amount of parameter names as its value. For example:

`category="not 2|4|6" search:number="not one|three"`

This is equal to:

`category="2|4|6" search:number="one|three" exclude="category|search:number"`

    <select name="category[]" multiple>
      <option value="1">Category One<option>
      <option value="2" selected>Category Two<option>
      <option value="3">Category Three<option>
      <option value="4" selected>Category Four<option>
      <option value="5">Category Five<option>
      <option value="6" selected>Category Six<option>
    </select>

    <input type="checkbox" name="search:number[]" value="one" checked> One
    <input type="checkbox" name="search:number[]" value="two"> Two
    <input type="checkbox" name="search:number[]" value="three" checked> Three
    <input type="hidden" name="exclude" value="category|search:number">

    {pro_search_category}
    {pro_search_search:number}
    {pro_search_exclude}

### SQL parameters

Pro Search supports SQL parameters. This means you can use a SQL query in any pararameter. SQL queries are limited to SELECTs only and should always end with a semi-colon (;). Pro Search will take the first item in the SELECT statement and creates a pipe-separated list from it. If the SQL query produces no results, it sets the parameter value to what comes after the semi-colon. You can optionally prefix the SQL query for better matching. Schematically, such a query looks like this:

`param="prefix SELECT field FROM table WHERE lorem = 'ipsum';no results"`

Valid prefixes are: =, not, =not, >, <, >=, and <=.

NOTE SQL queries are only allowed in hard-coded parameters.

Examples

Display products with a price higher than the overall average price:

    {exp:pro_search:results
      channel="products"
      search:price="> SELECT AVG(field_id_5) FROM exp_channel_data WHERE channel_id = 3;"
      orderby="price"
    }

Display articles where the selected author (based on a relationship field) is not Closed. Don’t display anything if all authors are Closed:

    {exp:pro_search:results
      channel="articles"
      child:author="SELECT entry_id FROM exp_channel_titles WHERE channel_id = 4 AND status != 'closed';-1"
    }


#### Regular Expression Conditionals

`{if pipe_separated_items ~ '/(^|\|)'.single_item.'($|\|)/'} ... {/if}`

The `pipe_separated_items` and `single_item` variables should be written without curly braces. The latter is part of the regular expression using the string concatenation operator. Using regular expression conditionals, the above example would be written like this:

    <select name="category[]" multiple>
      {exp:channel:categories channel="news" style="linear"}
        <option value="{category_id}"{if pro_search_category ~ '/(^|\|)'.category_id.'($|\|)/'} selected{/if}>
          {category_name}
        <option>
      {/exp:channel:categories}
    </select>