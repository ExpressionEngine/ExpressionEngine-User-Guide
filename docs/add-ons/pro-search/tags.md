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


## {exp:pro_search:form}

Use the Form tag to create search forms. Search parameters made available by each Filter should be used as input fields (most commonly `<input>` and `<select>` elements) and can be either hidden or visible for the user.

### Tag Parameters

#### force_protocol

Set to http or https to force the protocol of the generated search results URL.

    {exp:pro_search:form force_protocol="https"}

#### force_shortcut

Set to no to have a given query overwrite a valid shortcut. Defaults to yes (a shortcut will overwrite the query).

    {exp:pro_search:form force_shortcut="no"}

#### form_attribute

Specifies any html attribute you want the form to have. For example: form_id="search" will add id="search", or form_class="searchform" will add class="searchform" to the tag.

    {exp:pro_search:form form_id="search" form_class="searchform"}

#### query

Use this parameter to pass through a previously executed encoded search query. Not needed when not encoding queries.

    {exp:pro_search:form query="{segment_3}"}

#### required

Set to one or more parameter names to make that parameter a required field

    {exp:pro_search:form required="fname"}

#### remember

Set to the names of the parameters you want to pass through to the next search without having input fields for them in the form.

    {exp:pro_search:form remember="params"}

#### remember_shortcut

Set to yes to remember the given shortcut’s parameters without having input fields for them.

    {exp:pro_search:form remember_shortcut="yes"}

#### result_page

The Template_Group/Template where you would like the search results to be shown. If the parameter starts with http:// or https://, that URL will be used as the result page. You can optionally use %s to place the encoded search query anywhere in the URI. Defaults to the value set in your Settings.

    {exp:pro_search:form result_page="page"}

#### shortcut

Name of the shortcut to use for the search query

    {exp:pro_search:form shortcut="short_name"}

### Variables

#### {collections}{/collections}

Displays all search collections for current site. Available parameters: lang: only display collections for given language(s). AND show: only display collections for given name(s) or ID(s).

    {}

#### collection_id

    {collection_id}

#### collection_name

    {collection_name}

#### collection_label

    {collection_label}

#### collection_language

    {collection_language}

#### collection_count

    {collection_count}

#### total_collections

    {total_collections}

#### collection_is_active

    {collection_is_active}

#### error_message

Will display an error message if something went wrong with the search.

    {error_message}

#### pro_search_shortcut_id

The shortcut ID used, if applicable

    {pro_search_shortcut_id}

#### pro_search_shortcut_label

The shortcut label used, if applicable.

    {pro_search_shortcut_label}

#### pro_search_shortcut_name

The shortcut name used, if applicable.

    {pro_search_shortcut_name}

#### pro_search_parameter_missing

Use in conditionals to display error messages.

    {pro_search_parameter_missing}

#### pro_search:url

Short syntax for the URL tag. When used, it will automatically inherit the query set in the parent tag.

    {pro_search:url}

## {exp:pro_search:filters}

The Filters tag works identically to the Form tag, without generating a search form. Use it to show search filters anywhere on your page or to create a list of URL tags in short syntax. The following example shows a list of one-click filters to refine search results:

### Tag Parameters

#### query

    
    {exp:pro_search:filters query="{segment_3}"}
    {exp:channel:categories channel="entries" style="linear"}
    {if count ==  1}<ul>{/if}
    <li>
    <a href="{pro_search:url toggle:category="{category_id}"}">{category_name}</a>
    {if pro_search_category ~ '/(^||)'.category_id.'($||)/'}✓{/if}
    </li>
    {if count == total_results}</ul>{/if}
    {/exp:channel:categories}
    {/exp:pro_search:filters}

## {exp:pro_search:results}

### Tag Parameters

The Results tag supports all parameters from the native channel:entries tag and parameters made available by the Filters. In addition to those, the following parameters are available. Any parameters set will override the ones in the given query.

    
    {exp:pro_search:results query="{segment_3}" limit="10"}
    {if count ==  1}<ol>{/if}
    <li><a href="{comment_url_title_auto_path}">{title}</a></li>
    {if count == total_results}</ol>{/if}
    {if no_results}No search results{/if}
    {/exp:pro_search:results}

### Variables

#### alias:parameter

Point a given parameter to any other, so parameter x gets treated like parameter y. For example, to use the param q as an alias for keywords, use alias:keywords="q".

    {alias:parameter }

#### default:parameter

Set the default value of any parameter. This value will be overwritten when the parameter is present in the search query.

    {default:parameter }

#### disable

In addition to the native values, the disable parameter allows you to disable filters per Results tag. Use the pro_search:filter_name format: for example, disable="pro_search:field_search" will disable Pro Search’s Field Search filter. (since v6.2.0)

    {disable}

#### exclude

Set to one or more parameter names to exclude their values

    {exclude}

#### force_shortcut

Set to no to have a given query overwrite a valid shortcut. Defaults to yes (a shortcut will overwrite the query)

    {force_shortcut }

#### log_search

Set to yes to explicitly log the search on the first page of the search results. By default, searches are already logged if you’re using the search form, so only use this when you’re bypassing that.

    {log_search }

#### orderby_sort

Combines the native orderby and sort parameters. Separate field and sort order with a |. For example: title|asc.

    {orderby_sort}

#### query

Use this parameter to pass through the encoded search query, which is present in the search results URI. You can override any of its settings by hard-coding the other Pro Search parameters. Note that any of the hard-coded query parameters will not be reflected in the Search Log. Not needed when not encoding queries.

    {query}

#### require_all

Set to one or more parameter names to have their values treated as an inclusive stack.

    {require_all}

#### require_query

Set to yes to trigger No Results when no (encoded) query is given. Otherwise all entries will be returned.

    {require_query }

#### require_shortcut

Set to yes to trigger No Results when no (valid) shortcut is given.

    {require_shortcut}

#### shortcut

Name of the shortcut to use for the search query.

    {shortcut }

#### auto_path

The URL of the entry, based on the Search Results URL setting of that entry’s Channel preferences. See also the native Search module.

    {auto_path}

#### pro_search_excerpt

The search excerpt as defined in the collection settings, or as defined in the Channel preferences for keyword-less searches.

    {pro_search_excerpt}

#### pro_search_query_string

This contains the current Query String, when not encoding queries.

    {pro_search_query_string}

#### pro_search_shortcut_id

The shortcut ID used, if applicable.

    {pro_search_shortcut_id}

#### pro_search_shortcut_label

The shortcut label used, if applicable

    {pro_search_shortcut_label}

#### pro_search_shortcut_name

The shortcut name used, if applicable

    {pro_search_shortcut_name}

#### {if pro_search_no_results}{/if}

Alternative syntax for the native {if no_results}{/if} conditional.

    {if pro_search_no_results}{/if}

## {exp:pro_search:shortcuts}

### Tag Parameters

#### group_id

Limit shortcuts by given group ID

    
    {exp:pro_search:shortcuts group_id="1"}
    {if count == 1}<ul>{/if}
    <li><a href="{path="search/{shortcut_name}"}">{shortcut_label}</a></li>
    {if count == total_results}</ul>{/if}
    {/exp:pro_search:shortcuts}

#### limit

#### integer

Maximum amount of shortcuts to display.

    {exp:pro_search:shortcuts limit="5"}

#### offset

Offset the output of shortcuts by this amount.

    {exp:pro_search:shortcuts offset="3"}

#### orderby

Field to order the shortcuts by. Defaults by the order in their group

    {exp:pro_search:shortcuts orderby="field"}

#### shortcut_id

Limit shortcuts by given IDs

    {exp:pro_search:shortcuts shortcut_id="2"}

#### shortcut_name

Limit shortcuts by given names.

    {exp:pro_search:shortcuts shortcut_name="name"}

### Variables

#### count

The shortcut count.

    {count}

#### shortcut_id

The shortcut ID

    {shortcut_id}

#### shortcut_label

The shortcut label

    {shortcut_label}

#### shortcut_name

The shortcut name.

    {shortcut_name}

#### shortcut_url

The full search URL for this shortcut. You can override any of the shortcut’s parameters by setting parameters to this variable, eg. {shortcut_url result_page="search/results"}

    {shortcut_url}

#### total_results

The total amount of shortcuts displayed.

    {total_results}

## {exp:pro_search:save}

Use this tag to generate a form to save a given search query as a shortcut. The form will need input fields for shortcut_name and shortcut_label values.

### Tag Parameters

#### group_id

Group ID the shortcut needs to be saved to. **Required**.

    
    {exp:pro_search:save query="{segment_3}" group_id="1"}
    <fieldset>
    <input name="shortcut_name" placeholder="Name" />
    <input name="shortcut_label" placeholder="Label" />
    <button type="submit">Save</button>
    </fieldset>
    {/exp:pro_search:save}

## {exp:pro_search:url}

Use this single tag to produce a search url you can use for bookmarking or quick linking.

### Tag Parameters

#### keywords

When used inside the Form or Filters tag, you can also use the shortcut syntax. Using the shortcut will inherit all the parameters set in the parent tag. You can use any of the parameters used in the Results tag. In addition to that, these parameters are available:

    {exp:pro_search:url keywords="foo"}

#### query

The encoded search query to inherit. Not needed when not encoding queries, as this will happen automatically. Use the reset parameter to cancel this behaviour

    {exp:pro_search:url query="{segment_2}}

#### reset

Set to yes to not inherit the current query.

    {exp:pro_search:url reset="yes"}

#### result_page

The group/template you want to link to, like in the Form tag

    {exp:pro_search:url result_page="template"}

#### toggle:parameter

Toggles a single value in the given query. If the parameter value isn’t present in the current query, it generates a URL where the value is present, and vice versa.

    {exp:pro_search:url toggle:parameter}

## {exp:pro_search:param}

Use this tag to output a given parameter value outside of the Form, Filters or Results tag. You can also loop through multi-valued parameters.

### Tag Parameters

#### get

Parameter name you are targeting. **Required.**

    
    {exp:pro_search:param:loop get="category" as="cat_id" query="{segment_3}"}
    {cat_id}
    {/exp:pro_search:param:loop}

#### query

The encoded query where the parameter is present. Required when encoding queries.

    {exp:pro_search:param query={segment_x}}

#### format

Set to raw for unaltered output, set to url for url-encoded output. Defaults to html-safe output.

Default: html-safe

    {exp:pro_search:param format="raw"}

## {exp:pro_search:popular}

Use this tag to display a list of popular keywords. The Search Log must be enabled for this tag to work properly.

### Tag Parameters

#### limit

Maximum number of keywords to display. Defaults to 10.

Default: 10

    
    {exp:pro_search:popular limit="10"}
    {if count == 1}<ul>{/if}
    <li>{keywords}: {search_count}</li>
    {if count == total_results}</ul>{/if}
    {/exp:pro_search:popular}

#### orderby

Keywords are ordered by search_count in descending order by default. Set to keywords if you want to order alphabetically by keyword.

Default: search count

    {exp:pro_search:popilar orderby="keywords"}

### Variables

#### keywords

The keywords, HTML escaped and safe to use in an EE tag parameter.

    {keywords}

#### keywords_raw

The keywords, as is.

    {keywords_raw}

#### keywords_url

The keywords, URL-encoded.

    {keywords_url}

#### keywords_clean

The keywords, cleaned by the Pro Search algorithm, ie. without punctuation or diacritics.

    {keywords_clean}

#### search_count

The number of times these keywords appear in the search log.

    {search_count}

## {exp:pro_search:keywords}

Use this single tag to display the keywords used in a given search query. It is a shortcut for the Param tag.

### Tag Parameters

#### query

    {exp:pro_search:keywords query="{segment_3}"}

## {exp:pro_search:collections}

Use this tag to display a list of search collections.

### Tag Parameters

#### collection

Limit collections by names or IDs given.

#### collection_lang

Limit collections by their language code.

    {exp:pro_search:collections collection_lang=""}

### Variables

#### collection_id

The collection ID

    {collection_id}

#### collection_name

The collection name

    {collection_name}

#### collection_label

The collection label

    {collection_label}

#### collection_language

The collection language.

    {collection_language}

## {exp:pro_search:suggestions}

Use this tag to display a list of suggestions based on given keywords, language, and the words currently present in the lexicon. It uses either Levenshtein distance or Soundex similarity (phonetics) to determine the suggestions. Note: Using Soundex for generating suggestions is only effective for languages with a latin-based alphabet. The Levenshtein method works regardless of alphabet type.

### Tag Parameters

#### distance

Depending on the method used, either the maximum Levenshtein distance or maximum Soundex word length distance from the original. Either 1, 2 or 3; defaults to 2

    {exp:pro_search:suggestions distance="1"}

#### keywords

The keywords on which to base the suggestions. Overrides any keywords given in the query.

    {exp:pro_search:suggestions keywords="jongle"}

#### keywords:lang

The language of the keywords on which to base the suggestions. Should point to the lexicon language. Overrides the language given in the query.

    {exp:pro_search:suggestions keywords:lang="en"}

#### limit

Maximum number of suggestions to return. Defaults to 5.

Default: 5

    {exp:pro_search:suggestions limit="2"}

#### method

The method used for getting the suggestions, either levenshtein or soundex. Defaults to the former.

Default: levenshtein

    {exp:pro_search:suggestions method="soundex"}

#### query

The query that contains the keywords and/or keywords:lang parameters on which to base the suggestions.

    {exp:pro_search:suggestions query="your_query"}

### Variables

#### suggestion

The suggested word in lowercase

    {suggestion}

#### suggestion:upper

The suggested word in uppercase.

    {suggestion:upper}

#### suggestion:ucfirst

The suggested word with the first letter in uppercase.

    {suggestion:ucfirst}

#### suggestion_count

The count of the current suggestion.

    {suggestion_count}

#### total_suggestions

The total amount of suggestions given.

    {total_suggestions}

#### {if no_suggestions}{/if}

Alternative syntax for the native {if no_results}{/if} conditional.

    
    {exp:pro_search:suggestions keywords="jongle" keywords:lang="en" limit="1"}
    Did you mean {suggestion}?
    {if no_suggestions}No suggestions found.{/if}
    {/exp:pro_search:suggestions}
