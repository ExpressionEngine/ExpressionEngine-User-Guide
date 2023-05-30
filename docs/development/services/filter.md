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

# CP/Filter Service

[TOC]

When you want to offer users the ability to filter a list use the CP/Filter Service. We have a number of built-in filters. Filters render as a menu of links, display the current selection, and can allow for custom input. You can also create your own one-off custom filter.

## Simple Example

The most common filter is the Perpage filter. To create a Perpage filter we need to know the total available, this is because we add a "Show all x items" option:

    $filters = ee('CP/Filter')->add('Perpage', count($items));

When you want to fetch which perpage filter option was chosen do:

    $values = $filters->values();
    $perpage_value = $values['perpage'];

When you want to render your filters pass them to your view and call:

    $filters->render($url_object);

You can also chain the call adding as many filters are you like:

    $filters = ee('CP/Filter')->add('Date')
      ->add('Site')
      ->add('Perpage', count($items));

## Built-In Filters

We have made a few built-in filters that cover the more common cases.

### Date Filter

The date filter offers a date picker and a list of ranges, from "Last 24 Hours" to "Last 365 Days". When one of the ranges is selected the value of the filter are the number of seconds for that range (i.e. `86400` for 24 hours, and `31536000` for 365 days). When the date picker is used the selected value is an indexed array of Unix timestamps. The first timestamp is Midnight on the selected date and the second is 86,400 seconds later (or Midnight the next day). It's used thus:

    $filters = ee('CP/Filter')->add('Date');
    $values = $filters->values();
    $date_value = $values['filter_by_date'];

    if (is_array($date_value))
    {
      $model->filter('some_date', '>=', $date_value[0]);
      $model->filter('some_date', '<', $date_value[1]);
    }
    else
    {
      $model->filter('some_date', '>=', ee()->localize->now - $date_value);
    }

### Perpage Filter

The perpage filter determines how many items to show at a time. By default it will offer a list of ranges in multiples of 25 and includes a "All _x_ items" option, as well as a text input to allow the user to specify a custom value. It has a default value of 25.

When using the perpage filter you need to know the total number of items. This is so that we can render an accurate "All _x_ items" menu option. It also serves to inform the user how many items there are available given to the current view. When the perpage filter is used the selected value is a number. It's used thus:

    $filters = ee('CP/Filter')->add('Perpage', count($items));
    $values = $filters->values();
    $perpage_value = $values['perpage'];

### Site Filter

The site filter will only show if the Site Manager is enabled. When it is enabled it will offer a list of all the sites, by name and in alphabetical order, available to the logged in user and will offer a custom text input so as to search for sites by name or id. If it matches more than one site, the first one will be chosen. When the site filter is used the selected value is a number, which is the site's id. It's used thus:

    $filters = ee('CP/Filter')->add('Site');
    $values = $filters->values();
    $site_value = $values['filter_by_site'];

### Username Filter

The username filter offers a list of up to 25 usernames, sorted alphabetically, and a custom text input for searching by username. If there are more than 25 members then only the custom input will be presented. When the username filter is used the selected value is a number, which is the member's id. It's used thus:

    $filters = ee('CP/Filter')->add('Username');
    $values = $filters->values();
    $username_value = $values['filter_by_username'];

### Keyword Filter

The keyword filter is just a text field placed next to the other filters, allowing the user to search your list via arbitrary text. It's used thus:

    $filters = ee('CP/Filter')->add('Keyword');
    $values = $filters->values();
    $keyword_value = $values['filter_by_keyword'];

## Custom Filters

When none of the built-in filters will suit your needs, it's time for a custom filter. Using a custom filter is much like using one of the built-in ones in terms of how they behave, how the render, and how you fetch their values. With a custom filter you provide the options, control whether or not there is a custom text input, and what placeholder attribute to use.

Making a new custom filter requires three pieces of information: the POST/GET variable name, the label name, and an associative array of options to be rendered:

    $categories = ee('Model')->get('Category')
      ->fields('cat_id', 'cat_name')
      ->all()
      ->getDictionary('cat_id', 'cat_name');

    $filter = ee('CP/Filter')->make('filter_by_category', 'category_filter', $categories);

You will need to add your custom filter to the Filter service so it will be available for rendering:

    $filters = ee('CP/Filter')->add($filter);

The returned `$filter` object has a few methods available detailed below.

### setDefaultValue(\$value)

Use this if your filter has a default value

### setPlaceholder(\$placeholder)

Use this to set a specific placeholder for the custom text input.

### disableCustomValue()

Use this if you do not want a custom text input for your filter.
