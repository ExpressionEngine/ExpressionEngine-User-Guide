<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Advanced Search Form Tag

[TOC]

The Advanced Search Form Tag allows you to display a detailed search form that will allow your users to make "power searches" to find the information they need. Example:

    {exp:search:advanced_form result_page="search/results"}

        <table cellpadding='4' cellspacing='6' border='0' width='100%'>
        <tr>
        <td>

        <fieldset class="fieldset">
            <legend>{lang:search_by_keyword}</legend>

            <input type="text" class="input" maxlength="100" size="40" name="keywords" style="width:100%;" />

            <div class="default">
                <select name="search_in">
                    <option value="titles" selected="selected">{lang:search_in_titles}</option>
                    <option value="entries">{lang:search_in_entries}</option>
                    <option value="everywhere" >{lang:search_everywhere}</option>
                </select>
            </div>

            <div class="default">
                <select name="where">
                    <option value="exact" selected="selected">{lang:exact_phrase_match}</option>
                    <option value="any">{lang:search_any_words}</option>
                    <option value="all" >{lang:search_all_words}</option>
                    <option value="word" >{lang:search_exact_word}</option>
                </select>
            </div>

        </fieldset>

        </td><td>

        <fieldset class="fieldset">
            <legend>{lang:search_by_member_name}</legend>

            <input type="text" class="input" maxlength="100" size="40" name="member_name" style="width:100%;" />
            <div class="default"><input type="checkbox" class="checkbox" name="exact_match" value="y"  /> {lang:exact_name_match}</div>

        </fieldset>

        </td>
        </tr>
        </table>

        <table cellpadding='4' cellspacing='6' border='0' width='100%'>
        <tr>
        <td valign="top" width="50%">

        <table cellpadding='0' cellspacing='0' border='0'>
        <tr>
        <td valign="top">

        <div class="defaultBold">{lang:channels}</div>

            <select id="channel_id" name='channel_id[]' class='multiselect' size='12' multiple='multiple' onchange='changemenu(this.selectedIndex);'>
                {channel_names}
            </select>

        </td>
        <td valign="top" width="16">&nbsp;</td>
        <td valign="top">

        <div class="defaultBold">{lang:categories}</div>

            <select name='cat_id[]' size='12'  class='multiselect' multiple='multiple'>
                <option value='all' selected="selected">{lang:any_category}</option>
            </select>

        </td>
        </tr>
        </table>

        </td>
        <td valign="top" width="50%">

        <fieldset class="fieldset">
            <legend>{lang:search_entries_from}</legend>

            <select name="date" style="width:150px">
                <option value="0" selected="selected">{lang:any_date}</option>
                <option value="1" >{lang:today_and}</option>
                <option value="7" >{lang:this_week_and}</option>
                <option value="30" >{lang:one_month_ago_and}</option>
                <option value="90" >{lang:three_months_ago_and}</option>
                <option value="180" >{lang:six_months_ago_and}</option>
                <option value="365" >{lang:one_year_ago_and}</option>
            </select>

        <div class="default">
            <input type='radio' name='date_order' value='newer' class='radio' checked="checked" />&nbsp;{lang:newer}
            <input type='radio' name='date_order' value='older' class='radio' />&nbsp;{lang:older}
        </div>

        </fieldset>

        <div class="default"><br /></div>

        <fieldset class="fieldset">
            <legend>{lang:sort_results_by}</legend>

            <select name="orderby">
                <option value="date" >{lang:date}</option>
                <option value="title" >{lang:title}</option>
                <option value="most_comments" >{lang:most_comments}</option>
                <option value="recent_comment" >{lang:recent_comment}</option>
            </select>

        <div class="default">
            <input type='radio' name='sort_order' class="radio" value='desc' checked="checked" /> {lang:descending}
            <input type='radio' name='sort_order' class="radio" value='asc' /> {lang:ascending}
        </div>

        </fieldset>

        </td>
        </tr>
        </table>

        <div class='searchSubmit'>
            <input type='submit' value='Search' class='submit' />
        </div>

    {/exp:search:advanced_form}

The search results are displayed on the page you specify as the [result_page=](#result_page) page. Results are displayed with the [Search Results](add-ons/search/results.md) tag.

## Parameters

The Advanced Search Form Tag will create an HTML form and include within its opening tag the minimum attributes necessary for it to work.  If you need additional attributes to be specified, The Advanced Search Form Tag allows you to specify these attributes as additional parameters within the tag itself.  See the entry for [pass_through_attributes](#pass_throug_attributes) in the parameter listing for more information.

[TOC=3]

### `category=`

    category="1"

With this parameter, you can specify which categories should be shown in the multiple select list.

As with some other parameters, you can pipe multiple categories:

    category="1|3|7"

Or use "not" to exclude categories

    category="not 2|8"

NOTE: **Note:** If a parent is excluded from the multiple select list, then its children will not be shown.

### `cat_style=`

    cat_style="nested"

With this parameter, you can specify whether the categories should be displayed in a nested, hierarchical format or displayed linearly. Available values are "nested" and "linear".

### `name=`

    name="search_form"

Specify the name attribute for the &lt;form&gt; tag, which will allow you to specify CSS and JavaScript to the form more easily.

### `no_result_page=`

    no_result_page="search/noresults"

You may specify a particular Template to display in the case when there are no results. This takes a standard "Template_Group/Template" as input.

### `pass through attributes`

    data-automobile_type="buick" role="search" name="some name"

You can include in your tag a parameter with a name identical to any valid [HTML Form}(https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) attribute, any [HTML Global Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes), or the [ARIA Search role attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Search_role).  

If you assign a value to your parameter the value will be assigned to the attribute in the completed Form tag.  To include an attribute which does not take a value (e.g. `novalidate`) you need to define a null value for the parameter (i.e. `novalidate=""`).

If you specify a parameter with a name that is the same as an attribute already being set by the Advanced Search Form tag, the parameter value you enter will be ignored.

### `result_page=`

    result_page="news/searches"

The Template_Group/Template you would like the search results to be shown in. If you do not specify this parameter, then it will default to "search/results", which is the default location of the search results Template.

### `results=`

    results="20"

The number of results to show per page on the search results.

### `show_expired=`

    show_expired="yes"

With this parameter you can specify whether or not expired entries will be included in search results. The default behavior is for expired entries to _not_ be included. You may set this parameter to "yes" or "no".

You may also let the user choose by using an Include Expired Entries form field. If you change the form field, you need to be sure to leave the name="show_expired" attribute alone.

    <label for="field_show_expired">Include Expired Entries?</label>
    <select name="show_expired" id="field_show_expired">
        <option value="no">No</option>
        <option value="yes">Yes</option>
    </select>

### `show_future_entries=`

    show_future_entries="yes"

With this parameter you can specify whether or not entries with the date set in the future will be included in search results. The default behavior is for future entries to _not_ be included. You may set this parameter to "yes" or "no".

You may also let the user choose by using an Include Future Entries form field. If you change the form field, you need to be sure to leave the name="show_future_entries" attribute alone.

    <label for="field_show_future_entries">Include Future Entries?</label>
    <select name="show_future_entries" id="field_show_future_entries">
        <option value="no">No</option>
        <option value="yes">Yes</option>
    </select>

### `site=`

    site="default_site"

You can include sites other than the current site in search results. Use the pipe character to include multiple sites:

    site="default_site|boston|new_york"

Or add the word "not" (followed by a space) to exclude sites:

    site="not chicago|los_angeles"

NOTE: **Note:** The site parameter affects the sites that the search is performed on, but does not affect the form data such as channels and categories in the select fields.

### `status=`

    status="open"

You may restrict the results to a particular [status](control-panel/channels.md#statuses-tab). You can choose multiple statuses using a pipe:

    status="draft|reviewed|published"

Or exclude statuses using "not"

    status="not submitted|processing|closed"

### `channel=`

    channel="which"

From which [channel](control-panel/channels.md) to search the entries. Additionally, you can use the pipe character to separate multiple channels:

    channel="channel1|channel2|channel3"

Or you can add the word "not" (with a space after it) to exclude channels:

    channel="not channel1|channel2|channel3"

### `form_class=`

    form_class="search_form"

With this parameter, you can specify the css class you want the form to have, enabling fine-grained styling of the form.

### `form_id=`

    form_id="my_search_form"

With this parameter, you can specify the css id you want the form to have.

## Variables

A full discussion of the available variables is not feasible there is a great deal of interdependence between the various form fields, variables, and javascript functions. The Parameters can be used to modify how the search behaves. If you wish to modify the search form itself, simply use the default form as a base and customize it from there.
