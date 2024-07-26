<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->
# Examples

Have you read the docs on [Parameters](/add-ons/pro-search/parameters.md)? Good. Are you familiar with the custom [Filters](/add-ons/pro-search/filters.md)? Excellent. Taken a look at the [Template Tags](/add-ons/pro-search/tags.md)? Perfect. Then here are some examples that illustrate how these three are combined.

[TOC]


## Keywords

A standard [keyword search](/add-ons/pro-search/filters.md#keywords), with singular/plural matching and search suggestions when no results are found. [Collections](/add-ons/pro-search/collections.md) need to be created, not specifying them will search all collections.

    {exp:pro_search:form required="keywords"}
      <fieldset>
        <input type="search" name="keywords" placeholder="Search this site...">
        <button type="submit">Go</button>
        {if pro_search_keywords_missing}<em>Keywords are required</em>{/if}
      </fieldset>
    {/exp:pro_search:form}

    {exp:pro_search:results
      query="{segment_3}"
      keywords:lang="en"
      keywords:inflect="yes"
      limit="10"
    }
      {if count == 1}
        <p>
          Searched for <strong>{pro_search_keywords}</strong>.
          Search results: <strong>{absolute_results}</strong>
        </p>
      {/if}

      <h3>{title}</h3>
      <p>Found in {pro_search_collection_label}, with a score of     {pro_search_score}</p>
      <p>{pro_search_excerpt}</p>
      <p><a href="{auto_path}">{auto_path}</a></p>

      {paginate}
        {current_page}/{total_pages} | {pagination_links}
      {/paginate}

      {if pro_search_no_results}
        <p>
          No results for “{pro_search_keywords}”.
          {exp:pro_search:suggestions keywords="{pro_search_keywords}" keywords:lang="en" limit="2"}
            {if suggestion_count == 1}Did you mean{/if}
            <a href="{pro_search:url keywords="{suggestion}"}">{suggestion}</a>{if suggestion_count != total_suggestions}&nbsp;or&nbsp;{if:else}?{/if}
            {if no_suggestions}Check your spelling or try a different search term.{/if}
          {/exp:pro_search:suggestions}
        </p>
      {/if}
    {/exp:pro_search:results}

## Categories

Here are three examples on how to use the [Categories filter](/add-ons/pro-search/filters.md#categories).

### Single list

Below is a single list of categories, where you can select multiple categories to filter by. Entries with any of the selected categories assigned to them will be shown. For example: red or green.

    {exp:pro_search:form query="{segment_3}"}
      {exp:channel:categories category_group="3" style="linear"}
        <label>
          <input type="checkbox" name="category[]" value="{category_id}"{if pro_search_category ~ '/\b'.category_id.'\b/'} checked{/if}>
          {category_name}
        </label>
      {/exp:channel:categories}
      <button type="submit">Go</button>
    {/exp:pro_search:form}

    {exp:pro_search:results
      query="{segment_3}"
      channel="products"
      orderby="title"
      sort="asc"
    }
      {if count == 1}<ul>{/if}
        <li><a href="{auto_path}">{title}</a></li>
      {if count == total_results}</ul>{/if}

      {paginate}
        {current_page}/{total_pages} | {pagination_links}
      {/paginate}
    {/exp:pro_search:results}

Adding `require_all="category"` to the Results tag will change this to all of the selected categories, ie. red and green.

### One of each

Below are two select-elements representing two category groups. You can select a single category per group. Entries that have both categories assigned will be shown, for example: red and large.

    {exp:pro_search:form query="{segment_3}"}
      <select name="category[]">
        <option value="">--</option>
        {exp:channel:categories category_group="3" style="linear"}
          <option value="{category_id}"{if pro_search_category ~ '/\b'.category_id.'\b/'} selected{/if}>
            {category_name}
          </option>
        {/exp:channel:categories}
      </select>

      <select name="category[]">
        <option value="">--</option>
        {exp:channel:categories category_group="4" style="linear"}
          <option value="{category_id}"{if pro_search_category ~ '/\b'.category_id.'\b/'} selected{/if}>
            {category_name}
          </option>
        {/exp:channel:categories}
      </select>

      <button type="submit">Go</button>
    {/exp:pro_search:form}

    {exp:pro_search:results
      query="{segment_3}"
      require_all="category"
      channel="products"
      orderby="title"
      sort="asc"
    }
      ...
    {/exp:pro_search:results}

### Combining AND and OR

Below are two lists of categories. You can select multiple categories per list. Entries that have any categories of the first and second group assigned will be shown. For example: (red or green) and (medium or large).

    {exp:pro_search:form query="{segment_3}"}
      {exp:channel:categories category_group="3" style="linear"}
        <label>
          <input type="checkbox" name="category:color[]" value="{category_id}"{if pro_search_category:color ~ '/\b'.category_id.'\b/'} checked{/if}>
          {category_name}
        </label>
      {/exp:channel:categories}

      {exp:channel:categories category_group="4" style="linear"}
        <label>
          <input type="checkbox" name="category:size[]" value="{category_id}"{if pro_search_category:size ~ '/\b'.category_id.'\b/'} checked{/if}>
          {category_name}
        </label>
      {/exp:channel:categories}

      <button type="submit">Go</button>
    {/exp:pro_search:form}

    {exp:pro_search:results
      query="{segment_3}"
      channel="products"
      orderby="title"
      sort="asc"
    }
      ...
    {/exp:pro_search:results}

## Distance

The [Distance filter](/add-ons/pro-search/filters.md#distance) will take the lat/long values in the `distance:from` field and filter entries based on the distance from that point to the lat/long values that are stored in the fields defined in the `distance:to` parameter. Entries will be shown where their distance falls below the threshold defined in the distance:radius parameter. This examples uses [Low List](https://github.com/EEHarbor/low_list) to generate the radius options.

    {exp:pro_search:form query="{segment_3}"}

      {!-- The user’s lat/long values --}
      <input type="hidden" name="distance:from" value="52.163298|4.505547">

      <select name="distance:radius">
        <option value="">--</option>
        {exp:low_list:each items="5|10|50|100" as="distance"}
          <option value="{distance}"{if distance == pro_search_distance:radius} selected{/if}>
            {distance}km
          </option>
        {/exp:low_list:each}
      </select>

      <button type="submit">Go</button>
    {/exp:pro_search:form}

    {exp:pro_search:results
      query="{segment_3}"
      channel="people"
      distance:to="cf_location_lat|cf_location_long"
      distance:unit="km"
    }
      <p>{title} is {pro_search_distance}km away.</p>
      {if no_results}
        <p>Sorry, nothing found within a {pro_search_distance:radius}km radius.</p>
      {/if}
    {/exp:pro_search:results}

## Field Search

You can target specific (custom) fields with the [Field Search filter](/add-ons/pro-search/filters.md#field-search).

### Single exact match

Below is a list of countries generated by [REEgion Select](https://expressionengine.com/add-ons/reegion-select), which stores its data as a 2-letter country code (alpha2). The form below is identical to adding search:people_region="=XX" to the Results tag, where XX is the country code.

    {exp:pro_search:form query="{segment_3}"}
      <select name="search:people_region">
        <option value="">--</option>
        {exp:reegion_select:countries}
          <option value="{region_alpha2}"{if region_alpha2 == pro_search_search:people_region} selected{/if}>
            {region_name}
          </option>
        {/exp:reegion_select:countries}
      </select>
      <button type="submit">Go</button>
    {/exp:pro_search:form}

    {exp:pro_search:results
      query="{segment_3}"
      exact="search:people_region"
      channel="people"
    }
      <p>{title}</p>
      {if no_results}
        <p>
          Sorry, nothing found in
          {exp:reegion_select:countries show="{pro_search_search:people_region}"}
            {region_name}.
          {/exp:reegion_select:countries}
        </p>
      {/if}
    {/exp:pro_search:results}

### Multiple exact match

Building upon the previous example, you can also select multiple countries. This would be identical to adding `search:people_region="=XX|YY"` to the Results tag, where `XX` and `YY` would be the selected country codes.

    {exp:pro_search:form query="{segment_3}"}
      <select name="search:people_region[]" multiple>
        {exp:reegion_select:countries}
          <option value="{region_alpha2}"{if pro_search_search:people_region ~ '/\b'.region_alpha2.'\b/'} selected{/if}>
            {region_name}
          </option>
        {/exp:reegion_select:countries}
      </select>
      <button type="submit">Go</button>
    {/exp:pro_search:form}

    {exp:pro_search:results
      query="{segment_3}"
      exact="search:people_region"
      channel="people"
    }
      ...
    {/exp:pro_search:results}

### Partial match, first letter only

Below is a list of radio buttons, one for each letter of the alphabet. Selecting one of these letters will filter the entries by those whose title starts with the given letter, because of the `starts_with` parameter on the Results tag. Uses [Low List](https://github.com/EEHarbor/low_list) to generate the alphabet.

    {exp:pro_search:form query="{segment_3}"}
      {exp:low_list:each items="A|Z" as="letter" range="yes"}
        <label>
          <input type="radio" name="search:title" value="{letter}"{if letter == pro_search_search:title} checked{/if}>
          {letter}
        </label>
      {/exp:low_list:each}
      <button type="submit">Go</button>
    {/exp:pro_search:form}

    {exp:pro_search:results
      query="{segment_3}"
      starts_with="search:title"
      channel="people"
    }
      ...
    {/exp:pro_search:results}


### Multiple partial match, full words

Below is a list of checkboxes based on a custom channel field of the Checkboxes type. You can select multiple options from this list. Entries will be shown that have any of the selected options checked. Uses [Low Options](https://github.com/EEHarbor/low_options) to generate field options.

Adding `contains_words="parameter_name"` to the Results tag will ensure that the selected items are not contained within other words, like appending `\W` to the values. 

    {exp:pro_search:form query="{segment_3}"}
      {exp:low_options:service_options}
        {options}
          <label>
            <input type="checkbox" name="search:service_options[]" value="{option:value}"
            {if pro_search_search:service_options ~ '/(^|\|)'.option:value.'(\||$)/'} checked{/if}>
            {option:label}
          </label>
        {/options}
      {/exp:low_options:service_options}
      <button type="submit">Go</button>
    {/exp:pro_search:form}

    {exp:pro_search:results
      query="{segment_3}"
      contains_words="search:service_options"
      channel="services"
    }
      <p>{title}: {service_options}</p>
    {/exp:pro_search:results}

## Ranges

The [Ranges filter](/add-ons/pro-search/filters.md#ranges) allows you to define from and to ranges that target numeric or date fields.

### Numeric fields

Below is a select-element with a list of predefined price ranges. Entries will be shown where the field `service_price` falls within that range. Uses [Low List](https://github.com/EEHarbor/low_list) to generate the options.

    {exp:pro_search:form query="{segment_3}"}
      <select name="range:service_price">
        <option value="">--</option>
        {exp:low_list:each items="0|15:15 and below;15|25:15 - 25;25|50:25 - 50;50|:50 and up" sep=";"}
          <option value="{key}"{if key == pro_search_range:service_price} selected{/if}>
            {val}
          </option>
        {/exp:low_list:each}
      </select>

      <button type="submit">Go</button>
    {/exp:pro_search:form}

    {exp:pro_search:results
      query="{segment_3}"
      channel="services"
      orderby="service_price"
      sort="asc"
    }
      <p>{title}: {service_price}</p>
    {/exp:pro_search:results}

NOTE: **Note:** For numeric fields, make sure the Field Content option in the field’s settings is set to Number, Integer or Decimal.

### Date fields

Below are two date input fields that target the entry’s Entry Date. You can use JavaScript to generate date pickers.

    {exp:pro_search:form query="{segment_3}"}
      <input type="date" name="range-from:entry_date"> -
      <input type="date" name="range-to:entry_date">
      <button type="submit">Go</button>
    {/exp:pro_search:form}

    {exp:pro_search:results
      query="{segment_3}"
      channel="news"
      limit="10"
    }
      <p>{entry_date format="%Y-%m-%d"}: {title}</p>
      {paginate}
        {current_page}/{total_pages} | {pagination_links}
      {/paginate}
    {/exp:pro_search:results}

### Reverse range

Below is a single input field that targets two channel fields, where a min and max value are stored. Entering a number will return entries where that number falls between the values entered in the two fields.

    {exp:pro_search:form query="{segment_3}"}
      <input type="number" name="range:min_age:max_age">
      <button type="submit">Go</button>
    {/exp:pro_search:form}

    {exp:pro_search:results
      query="{segment_3}"
      channel="people"
      limit="10"
    }
      ...
    {/exp:pro_search:results}

### Ranges overlap

Below are two input fields that both target the same two channel fields, where a min and max value are stored (here, a start date and end date). Entering a from and to value will return entries where the given range overlaps the range defined by the two fields.

    {exp:pro_search:form query="{segment_3}"}
      When are you here?
      From <input type="date" name="range-from:event_start_date:event_end_date">
      to   <input type="date" name="range-to:event_start_date:event_end_date">
      <button type="submit">Go</button>
    {/exp:pro_search:form}

    {exp:pro_search:results
      query="{segment_3}"
      channel="events"
      limit="10"
    }
      <p>{title} is active from {event_start_date} to {event_start_date}.</p>
    {/exp:pro_search:results}

## Relationships

The [Relationships filter](/add-ons/pro-search/filters.md#relationships) lets you filter entries based on their relationship to other entries.

### Find entries with certain children

As per the [Pizza Shop example](https://u.expressionengine.com/article/relationship-fields-the-pizza-shop-example), the form below lists all pizzas (child entries) and finds the shops (parent entries) that offer any of the selected ones. For example, Margherita or Pepperoni.

    {exp:pro_search:form query="{segment_3}"}
      {exp:channel:entries channel="pizzas" dynamic="no"}
        <label>
          <input type="checkbox" name="child:specialty_pizzas[]" value="{entry_id}"{if pro_search_child:specialty_pizzas ~ '/\b'.entry_id.'\b/'} checked{/if}>
          {title}
        </label>
      {/exp:channel:entries}
      <button type="submit">Go</button>
    {/exp:pro_search:form}

    {exp:pro_search:results
      query="{segment_3}"
      channel="stores"
      orderby="title"
      sort="asc"
    }
      ...
    {/exp:pro_search:results}

Adding `require_all="child:specialty_pizzas"` to the Results tag will change this to all of the selected pizzas, ie. Margherita and Pepperoni.
Find entries with a certain parent#

The form below lists all bands (parent entries) in a drop down element, and finds all musicians (child entries) in the selected band.

    {exp:pro_search:form query="{segment_3}"}
      <select name="parent:member">
        <option value="">--</option>
        {exp:channel:entries channel="bands" dynamic="no"}
          <option value="{entry_id}"{if entry_id == pro_search_parent:member} selected{/if}>
            {category_name}
          </option>
        {/exp:channel:entries}
      </select>
      <button type="submit">Go</button>
    {/exp:pro_search:form}

    {exp:pro_search:results
      query="{segment_3}"
      channel="musicians"
      orderby="title"
      sort="asc"
    }
      ...
    {/exp:pro_search:results}

## Tags

The [Tags filter](/add-ons/pro-search/filters.md#tags) works just like the [Categories filter](/add-ons/pro-search/filters.md#categories).

### Single list

Below is a single list of tags, where you can select multiple tags to filter by. Entries with any of the selected tags assigned to them will be shown. For example: red or green.

    {exp:pro_search:form query="{segment_3}"}
      {exp:tag:cloud}
        <label>
          <input type="checkbox" name="tag_id[]" value="{tag_id}"{if pro_search_tag_id ~ '/\b'.tag_id.'\b/'} checked{/if}>
          {tag}
        </label>
      {/exp:tag:cloud}
      <button type="submit">Go</button>
    {/exp:pro_search:form}

    {exp:pro_search:results
      query="{segment_3}"
      limit="10"
    }
      ...
    {/exp:pro_search:results}

Adding `require_all="tag_id"` to the Results tag will change this to all of the selected tags, ie. red and green.

### Combining AND and OR

Below are two lists of tags. You can select multiple tags per list. Entries that have any tags of the first **and** second group assigned will be shown. For example: (red or green) and (medium or large).

    {exp:pro_search:form result_page="search/two" query="{segment_3}"}
      {exp:tag:cloud groups="1"}
        <label>
          <input type="checkbox" name="tag_id:color[]" value="{tag_id}"{if pro_search_tag_id:color ~ '/\b'.tag_id.'\b/'} checked{/if}>
          {tag}
        </label>
      {/exp:tag:cloud}

      {exp:tag:cloud groups="2"}
        <label>
          <input type="checkbox" name="tag_id:size[]" value="{tag_id}"{if pro_search_tag_id:size ~ '/\b'.tag_id.'\b/'} checked{/if}>
          {tag}
        </label>
      {/exp:tag:cloud}

      <button type="submit">Go</button>
    {/exp:pro_search:form}

    {exp:pro_search:results
      query="{segment_3}"
      limit="10"
    }
      ...
    {/exp:pro_search:results}

## Other & Native

In addition to what all the [filters](/add-ons/pro-search/filters.md) bring to the party, you can also filter by native ExpressionEngine parameters, as well as some [little extras](/add-ons/pro-search/tags.md#results-tag).

### Orderby and sort in one go

    {exp:pro_search:form query="{segment_3}"}
      ...
      <select name="orderby_sort">
        <option value="pro_search_score|desc"{if pro_search_orderby_sort == 'pro_search_score|desc'} selected{/if}>
          Relevance
        </option>
        <option value="date|asc"{if pro_search_orderby_sort == 'date|asc'} selected{/if}>
          Publish date
        </option>
        <option value="title|asc"{if pro_search_orderby_sort == 'title|asc'} selected{/if}>
          Title
        </option>
      </select>

      <button type="submit">Go</button>
    {/exp:pro_search:form}

### Show entries for given month

Based on the native year and month parameters. Uses [Low List](https://github.com/EEHarbor/low_list) to generate the options.

    {exp:pro_search:form query="{segment_3}"}
      <select name="month">
        {exp:low_list:each items="1|12" as="month" range="yes"}
          <option value="{month}"{if pro_search_month == month} selected{/if}>
            {month}
          </option>
        {/exp:low_list:each}
      </select>
      <select name="year">
        {exp:low_list:each items="2015|2005" as="year" range="yes"}
          <option value="{year}"{if pro_search_year == year} selected{/if}>
            {year}
          </option>
        {/exp:low_list:each}
      </select>
      <button type="submit">Go</button>
    {/exp:pro_search:form}

### Display dynamic amount of results per page

Uses [Low List](https://github.com/EEHarbor/low_list) to generate the options.

    {exp:pro_search:form query="{segment_3}"}
      ...
      <select name="limit">
        {exp:low_list:each items="5|10|20|50|100" as="limit"}
          <option value="{limit}"{if limit == pro_search_limit} selected{/if}>
            {limit}
          </option>
        {/exp:low_list:each}
      </select>

      <button type="submit">Go</button>
    {/exp:pro_search:form}