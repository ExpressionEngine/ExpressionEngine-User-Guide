<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->
# Tags

[TOC]

**These terms are used throughout the documentation:**
```
required: This parameter/field is required for this tag to function.
form only: This can only be set as a field in the form and not as a parameter in the tag.
param only: This parameter can only be set in the tag and not as a field in the form.
fixed value: This field cannot be edited and is set with a fixed value.
recurring only: This parameter/field only applies to recurring charges.
one-time only: This parameter/field only applies to one-time charges.
added in X.X.X: This parameter/field is only available from this version forward.
logged in: This tag is only available if the user is logged in.
```

NOTE: **Note:** See the [template generator](templates/generators.md) for the keyword search in ExpressionEngine 7.5+. Pro Search must be installed and a Collection created.

## {exp:pro_search:form}

Use the Form tag to create search forms. Search parameters made available by each Filter should be used as input fields (most commonly `<input>` and `<select>` elements) and can be either hidden or visible for the user.

### Parameters

[TOC=4 hide]

#### `force_protocol=`

Set to http or https to force the protocol of the generated search results URL.

    {exp:pro_search:form force_protocol="https"}

#### `force_shortcut=`

Set to no to have a given query overwrite a valid shortcut. Defaults to "yes" (a shortcut will overwrite the query).

    {exp:pro_search:form force_shortcut="no"}

#### `form_attribute=`

Specifies any html attribute you want the form to have. For example: `form_id="search"` will add `id="search"` to the form tag, while `form_class="searchform"` will add `class="searchform"` to the tag.

    {exp:pro_search:form form_id="search" form_class="searchform"}

#### `query=`

Use this parameter to pass through a previously executed encoded search query. Not needed when [not encoding queries](https://docs.expressionengine.com/latest/add-ons/pro-search/settings.html#encode-query).

    {exp:pro_search:form query="{segment_3}"}

#### `required=`

Set to one or more parameter names to make that parameter a required field

    {exp:pro_search:form required="fname"}

#### `remember=`

Set to the names of the parameters you want to pass through to the next search without having input fields for them in the form.

    {exp:pro_search:form remember="params"}

#### `remember_shortcut=`

Set to yes to remember the given shortcut’s parameters without having input fields for them.

    {exp:pro_search:form remember_shortcut="yes"}

#### `result_page=`

The Template_Group/Template where you would like the search results to be shown. If the parameter starts with http:// or https://, that URL will be used as the result page. You can optionally use %s to place the encoded search query anywhere in the URI. Defaults to the value set in your Settings.

    {exp:pro_search:form result_page="page"}

#### `shortcut=`

Name of the shortcut to use for the search query

    {exp:pro_search:form shortcut="short_name"}

### Variables

[TOC=4 hide]

#### {pro_search_*query_parameter*}

To output the value of an existing [query parameter](/add-ons/pro-search/parameters.md) such as "keywords" or "item:size", use `{pro_search_}` and append the parameter name e.g. `{pro_search_item:size}`.

#### {collections}{/collections}

Displays all search collections for current site. Available parameters: `lang=` to only display collections for given language(s). `show=` to only display collections for given name(s) or ID(s).

#### Collections Variables

##### {collection_id}

    {collection_id}

##### {collection_name}

    {collection_name}

##### {collection_label}

    {collection_label}

##### {collection_language}

    {collection_language}

##### {collection_count}

    {collection_count}

##### {total_collections}

    {total_collections}

##### {collection_is_active}

    {collection_is_active}

#### {error_message}

Will display an error message if something went wrong with the search.

#### {pro_search_shortcut_id}

The shortcut ID used, if applicable

#### {pro_search_shortcut_label}

The shortcut label used, if applicable.

#### {pro_search_shortcut_name}

The shortcut name used, if applicable.

#### {pro_search_parameter_missing}

Use in conditionals to display error messages.

#### {pro_search:url}

Short syntax for the URL tag. When used, it will automatically inherit the query set in the parent tag.



## {exp:pro_search:filters}

The Filters tag works identically to the Form tag, without generating a search form. Use it to show specific search filters anywhere on your page, or to create a list of URL tags in short syntax. The following example shows a list of one-click filters based on the current search that could be used to modify the results display with javascript:

    {exp:pro_search:filters query="{segment_3}"}
     {exp:channel:categories channel="entries" style="linear"}
      {if count ==  1}<ul>{/if}
       <li>
        <a href="{pro_search:url toggle:category="{category_id}"}">{category_name}</a>
        {if pro_search_category ~ '/(^||)'.category_id.'($||)/'}&check;{/if}
       </li>
      {if count == total_results}</ul>{/if}
     {/exp:channel:categories}
    {/exp:pro_search:filters}

### Parameters

#### `query=`

Use this parameter to pass through a previously executed encoded search query. Not needed when [not encoding queries](https://docs.expressionengine.com/latest/add-ons/pro-search/settings.html#encode-query).

    {exp:pro_search:save query="{segment_3}"}



## {exp:pro_search:results}

### Parameters

[TOC=4 hide]

The Results tag supports all parameters from the native channel:entries tag and any parameters made available by the Filters. In addition to those, the following parameters are available. Any parameters set in the tag will override the ones in the given query.

    {exp:pro_search:results query="{segment_3}" default:limit="10"}
     {if count ==  1}<ol>{/if}
      <li><a href="{comment_url_title_auto_path}">{title}</a></li>
     {if count == total_results}</ol>{/if}
     {if no_results}No search results{/if}
    {/exp:pro_search:results}

#### `alias:parameter=`

Point a given parameter to any other, so parameter x gets treated like parameter y. For example, to use the param `q` as an alias for `keywords`, use `alias:keywords="q"`. Useful if you have previous or multiple search forms with different names for the same parameters, and you want to have one result page.

    alias:keywords="q"

#### `default:parameter=`

Set the default value of any parameter. This value will be overwritten when the parameter is present in the search query.

    default:lastname="Lopez"

#### `disable=`

In addition to the native options from Channel:entries, the disable parameter allows you to disable specific filters per Results tag. Use the pro_search:filter_name format. For example, `disable="pro_search:field_search"` will disable Pro Search’s Field Search filter. (since v6.2.0).

    disable="pro_search:field_search"

TIP: **Tip:** This can be used, for instance, to speed up a small results block that matches based on a single criteria, but is part of a larger results page.

#### `exclude=`

Set to one or more parameter names to exclude their values.

    exclude="category|search:number"

#### `force_shortcut=`

Set to "no" to have a given query overwrite a valid shortcut. Defaults to "yes" (a shortcut will overwrite the query).

    force_shortcut="yes"

#### `log_search=`

Set to "yes" to explicitly log the search on the first page of the search results. By default, searches are already logged if you’re using the search form, so only use this when you’re bypassing the search form but want to log this results set as a search.

    log_search="yes"

#### `orderby_sort=`

Combines the native orderby and sort parameters. Separate field and sort order with a |. For example: title|asc.

    orderby_sort="title|asc"

#### `query=`

Use this parameter when using an encoded search query. You must explicitly reference the encoded search query when it is present in the search results URI. You can override any of the query's values by using Pro Search parameters. Note that none of the hard-coded query parameters will be reflected in the Search Log, which is based on the query. Not needed when not encoding queries.

    query="{segment_3}"

#### `require_all=`

Set to one or more parameter names to have their values treated as an inclusive stack.

    require_all="keywords"

#### `require_query=`

Set to "yes" to trigger No Results when no encoded query is given. Otherwise, by default all entries will be returned if no query is provided.

    require_query="no"

#### `require_shortcut=`

Set to "yes" to trigger No Results when no valid shortcut is given.

    require_shortcut="no"

#### `shortcut=`

Name of the shortcut to use for the search query.

    shortcut="shortcut_name"

### Variables

[TOC=4 hide]

#### {pro_search_*query_parameter*}

To output the value of an existing [query parameter](/add-ons/pro-search/parameters.md) such as "keywords" or "item:size", use `{pro_search_}` and append the parameter name e.g. `{pro_search_item:size}`.

NOTE: **Note:** This is not used to output the content from a matching result. It outputs the value of an existing search parameter i.e. *Your search for "cowboy hats" in size "Large" returned 19 results.*

#### {auto_path}

The URL of the entry, based on the Search Results URL setting of that entry’s Channel preferences. See also the native Search module.

#### {pro_search_excerpt}

The search excerpt as defined in the collection settings, or as defined in the Channel preferences for keyword-less searches.

#### {pro_search_query_string}

This contains the current Query String, but only when [not encoding queries](https://docs.expressionengine.com/latest/add-ons/pro-search/settings.html#encode-query).

#### {pro_search_shortcut_id}

The shortcut ID used, if applicable.

#### {pro_search_shortcut_label}

The shortcut label used, if applicable

#### {pro_search_shortcut_name}

The shortcut name used, if applicable

#### {if pro_search_no_results}{/if}

Alternative syntax for the native {if no_results}{/if} conditional.



## {exp:pro_search:shortcuts}

### Parameters

[TOC=4 hide]

#### `group_id=`

Limit shortcuts by given group ID

    {exp:pro_search:shortcuts group_id="1"}
     {if count == 1}<ul>{/if}
      <li><a href="{path="search/{shortcut_name}"}">{shortcut_label}</a></li>
     {if count == total_results}</ul>{/if}
    {/exp:pro_search:shortcuts}

#### `limit=`

#### `integer=`

Maximum amount of shortcuts to display.

    {exp:pro_search:shortcuts limit="5"}

#### `offset=`

Offset the output of shortcuts by this amount.

    {exp:pro_search:shortcuts offset="3"}

#### `orderby=`

Field to order the shortcuts by. Defaults by the order in their group

    {exp:pro_search:shortcuts orderby="field"}

#### `shortcut_id=`

Limit shortcuts by given IDs

    {exp:pro_search:shortcuts shortcut_id="2"}

#### `shortcut_name=`

Limit shortcuts by given names.

    {exp:pro_search:shortcuts shortcut_name="name"}

### Variables

#### {count}

The shortcut count.

#### {shortcut_id}

The shortcut ID

#### {shortcut_label}

The shortcut label

#### {shortcut_name}

The shortcut name.

#### {shortcut_url}

The full search URL for this shortcut. You can override any of the shortcut’s parameters by setting parameters in this variable, e.g. {shortcut_url result_page="search/results"}

#### {total_results}

The total amount of shortcuts displayed.



## {exp:pro_search:save}

Use this tag to generate a form to save a given search query as a shortcut. The form will need input fields for shortcut_name and shortcut_label values.

### Parameters

[TOC=4 hide]

#### `group_id=`

Group ID the shortcut needs to be saved to. **Required**.

    {exp:pro_search:save query="{segment_3}" group_id="1"}
     <fieldset>
      <input name="shortcut_name" placeholder="Name" />
      <input name="shortcut_label" placeholder="Label" />
      <button type="submit">Save</button>
     </fieldset>
    {/exp:pro_search:save}

#### `form_attribute=`

Specifies any html attribute you want the form to have. For example: `form_id="search"` will add `id="search"` to the form tag, while `form_class="searchform"` will add `class="searchform"` to the tag.

    {exp:pro_search:save form_id="search" form_class="searchform"}

#### `query=`

Use this parameter to pass through a previously executed encoded search query. Not needed when [not encoding queries](https://docs.expressionengine.com/latest/add-ons/pro-search/settings.html#encode-query).

    {exp:pro_search:save query="{segment_3}"}



## {exp:pro_search:url}

Use this single tag to produce a search url you can use for bookmarking or quick linking. For example, this creates a URL with a query containing `keywords="foo"`

    {exp:pro_search:url keywords="foo"}

When used inside the Form or Filters tag, you can also use the shortcut syntax. Using the shortcut will inherit all the parameters set in the parent tag. You can use any of the parameters used in the Results tag. In addition to those parameters, these parameters are also available:

### Parameters

[TOC=4 hide]

#### `query=`

The encoded search query to inherit. Not needed when [not encoding queries](https://docs.expressionengine.com/latest/add-ons/pro-search/settings.html#encode-query), as this will happen automatically. Use the reset parameter to cancel this behaviour.

    {exp:pro_search:url query="{segment_2}"}

#### `reset=`

Set to "yes" to stop this tag from inheriting the current query.

    {exp:pro_search:url reset="yes"}

#### `result_page=`

The group/template you want to link to, like in the Form tag

    {exp:pro_search:url result_page="group/template"}

#### `toggle:parameter=`

Toggles a single value in the given query. If the parameter value isn’t present in the current query, it generates a URL where the value is present, and vice versa.

    {exp:pro_search:url toggle:featured="yes"}

NOTE: **Note:** If you simply want to add a specific value or to always override a specific value in a query, do not use this parameter. This toggle is useful when you want to more easily create a query URL for an alternative search (i.e. with vs. without a certain option).



## {exp:pro_search:param}

Use this single tag to output a single given parameter value outside of the Form, Filters or Results tag.

    {exp:pro_search:param get="item_size"}

You can also use it as a paired loop to output multi-valued parameters.

    {exp:pro_search:param:loop get="category" as="cat_id" query="{segment_3}"}
     {cat_id}
    {/exp:pro_search:param:loop}

### Parameters

#### `get=`

Parameter name you are targeting. **Required.**

#### `query=`

The encoded query where the parameter is present. Required when [encoding queries](https://docs.expressionengine.com/latest/add-ons/pro-search/settings.html#encode-query).

#### `as=`

When outputting the values in a loop, use this parameter to set the variable name used in the loop. **Required when looping values.**

#### `format=`

Set to `raw` for unaltered output, set to `url` for url-encoded output. Defaults to `html-safe` output.

    {exp:pro_search:param format="html-safe"}



## {exp:pro_search:popular}

Use this tag to display a list of popular keywords. The Search Log must be enabled for this tag to work properly.

### Parameters

#### `limit=`

Maximum number of keywords to display. Defaults to 10.

    {exp:pro_search:popular limit="10"}
     {if count == 1}<ul>{/if}
      <li>{keywords}: {search_count}</li>
     {if count == total_results}</ul>{/if}
    {/exp:pro_search:popular}

#### `orderby=`

Keywords are ordered by `search_count` in descending order by default. Set to `keywords` if you want to order alphabetically by keyword.

    {exp:pro_search:popular orderby="keywords"}

### Variables

#### {keywords}

The keywords, HTML escaped and safe to use in an EE tag parameter.

#### {keywords_raw}

The keywords, as is.

#### {keywords_url}

The keywords, URL-encoded.

#### {keywords_clean}

The keywords, cleaned by the Pro Search algorithm, i.e. without punctuation or diacritics.

#### {search_count}

The number of times these keywords appear in the search log.



## {exp:pro_search:keywords}

Use this single tag to display the keywords used in a given search query. It is a shortcut for the Param tag.

### Parameters

#### `query=`

The encoded query where the keywords are present. Required when [encoding queries](https://docs.expressionengine.com/latest/add-ons/pro-search/settings.html#encode-query).

    {exp:pro_search:keywords query="{segment_3}"}



## {exp:pro_search:collections}

Use this tag to display a list of search collections.

### Parameters

#### `collection=`

Limit collections by names or IDs given.

#### `collection_lang=`

Limit collections by their language code.

    {exp:pro_search:collections collection_lang="en"}

### Variables

#### {collection_id}

The collection ID

#### {collection_name}

The collection name

#### {collection_label}

The collection label

#### {collection_language}

The collection language



## {exp:pro_search:suggestions}

Use this tag to display a list of suggestions based on given keywords, language, and the words currently present in the lexicon. It uses either [Levenshtein distance](http://en.wikipedia.org/wiki/Levenshtein_distance) or [Soundex similarity](http://en.wikipedia.org/wiki/Soundex) (phonetics) to determine the suggestions.

    {exp:pro_search:suggestions keywords="{pro_search_keywords}" keywords:lang="en" distance="2" limit="4"}
     {if suggestion_count == 1}Did you mean{/if}
      <a href="{pro_search:url keywords="{suggestion}"}">{suggestion}</a>{if suggestion_count != total_suggestions}&nbsp;or&nbsp;{if:else}?{/if}
     {if no_results}Check your spelling or try a different search term.{/if}
    {/exp:pro_search:suggestions}

### Parameters

[TOC=4 hide]

#### `distance=`

Depending on the method used, either the maximum Levenshtein distance or maximum Soundex word length distance from the original. Either 1, 2 or 3; defaults to 2

#### `keywords=`

The keywords on which to base the suggestions. Overrides any keywords given in the query.

    {exp:pro_search:suggestions keywords="jongle"}

#### `keywords:lang=`

The language of the keywords on which to base the suggestions. Should point to the lexicon language. Overrides the language given in the query.

#### `limit=`

Maximum number of suggestions to return. Defaults to 5.

#### `method=`

The method used for getting the suggestions, either `levenshtein` or `soundex`. Defaults to Levenshtein.

    {exp:pro_search:suggestions method="soundex"}

NOTE: **Note:** Using Soundex for generating suggestions is only effective for languages with a latin-based alphabet. The Levenshtein method works regardless of alphabet type.

#### `query=`

The query that contains the keywords and/or keywords:lang parameters on which to base the suggestions.

    {exp:pro_search:suggestions query="{segment_3}"}

### Variables

[TOC=4 hide]

#### {suggestion}, {suggestion:upper}, {suggestion:ucfirst}

The suggested word in lowercase, uppercase, or with only the first letter in uppercase. Because the words are stored in the lexicon in all lower case, you cannot store or retrieve suggestions in mixed case.

#### {suggestion_count}

The count of the current suggestion.

#### {total_suggestions}

The total amount of suggestions given.

#### {if no_suggestions}{/if}

Alternative syntax for the native {if no_results}{/if} conditional.

    {exp:pro_search:suggestions keywords="jongle" keywords:lang="en" limit="1"}
     Did you mean {suggestion}?
     {if no_suggestions}No suggestions found.{/if}
    {/exp:pro_search:suggestions}
