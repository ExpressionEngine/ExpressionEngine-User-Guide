<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Query

[TOC]

The Query Module allows you to perform SQL queries, returning results from your database without having to use PHP.

    {exp:query sql="SELECT screen_name FROM exp_members WHERE member_id = '1' "}
        {screen_name}
    {/exp:query}

You may use any standard SELECT query you want and the syntax used is identical to a regular SQL query. You may only use SELECT statements; it will not process UPDATE or DELETE queries.

TIP: **Tip:** To take full advantage of this tag's power you will need to have a good understanding of SQL querying.

## Template Tags Inside Queries

Using template tags as part of your query is strongly discouraged. All user input, including segments, must be properly validated and escaped before use inside of a query. Please review the [SQL Injection Prevention](development/guidelines/security.md#sql-injection-prevention) for more information.

## Selecting Fields and Variables

Each of the columns or fields you include as part of your SELECT statement will be available inside the tag pair as a {variable} with the same name as the field. So, in the above example the "screen_name" field was selected and thus the {screen_name} variable is available inside the tag. This query would make three variables from the "exp_members" table available:

    {exp:query sql="SELECT screen_name, email, location FROM exp_members WHERE group_id = '1'"}
        {screen_name}
        {email}
        {location}
    {/exp:query}

You may also have it select all available columns/fields automatically by using the asterisk character:

    {exp:query sql="SELECT * FROM exp_members WHERE group_id = '1'"}
        {username}
        {screen_name}
        {password}
        {email}
        {location}
    {/exp:query}

## Returning Multiple Rows

Unless you specifically craft your query to only return a single result, most queries will return multiple "rows" of results. In order to deal with these multiple rows of results, ExpressionEngine will automatically loop through your query tag as many times as necessary to display all the rows of returned data. Suppose you want to list all the members of one of your particular groups. You might use something like this:

    {exp:query sql="SELECT screen_name FROM exp_members WHERE group_id = '6'"}
        {screen_name}<br>
    {/exp:query}

On your page, you might get actual results such as:

    Michael Jordan
    Wayne Gretzky
    Joe Montana
    Roger Clemens
    David Beckham

This tag will allow you to easily create many results that might otherwise require plugins or special custom-coding in other applications.

## Testing for No Results

You may use the {if no_results} conditional variable to display content if your query returns no results. For instance:

    {exp:query sql="SELECT screen_name FROM exp_members WHERE group_id = '6'"}
        {screen_name}<br>
        {if no_results} Sorry, no sports heroes here! {/if}
    {/exp:query}

## Dates

If you are pulling dates out of an ExpressionEngine database table, then you can have the dates formatted and localized for the user. As with other date variables, these require the "format" parameter in order to define how the date should be displayed. See the [date variableformatting](templates/date-variable-formatting.md) page for more information.

    <p>Dates for the Last Five Entries:</p>
    {exp:query sql="SELECT entry_date FROM exp_channel_titles ORDER BY entry_date DESC LIMIT 5"}
        <p>{entry_date format="%Y %m %d"}</p>
    {/exp:query}

## Pagination

The Query module uses the same pagination syntax as all first-party modules. Please look at the [Pagination](templates/pagination.md) documentation for more information.

## Parameters

### Parsing file paths

In case you select a table which stores files, the returned value will look like `{file:XX:url}` or have `{filedir_` in front of the file names (when File Manager is in Compatibility mode). To parse them, enable the `parse_files` parameter:

```html
{exp:query sql="SELECT col_id_1 AS src, col_id_5 AS description
    FROM exp_channel_grid_field_2;"
    parse_files="y"
}
    <img src="{src}" alt="{description}" />
{/exp:query}

```

NOTE: **Note:** The default values of `parse_files=` and `parse_bases=` can be override using [`parse_variables_query_results_by_default`](/general/system-configuration-overrides.md#parse_variables_query_results_by_default)

### Parsing `{base_` variables

In case you select a table which stores site settings, the returned value may have `{base_` variables. To parse them, enable the `parse_bases` parameter:

```
<table>
  <thead>
    <tr>
      <th>site_id</th>
      <th>server_path</th>
      <th>url</th>
    </tr>
  </thead>
  <tbody>
    {exp:query
      sql="SELECT site_id, server_path , url FROM exp_upload_prefs"
      parse_bases="yes"
    }
      <tr>
        <td>{site_id}</td>
        <td>{server_path}</td>
        <td>{url}</td>
      </tr>
    {/exp:query}
  </tbody>
</table>
```



NOTE: **Note:** The default values of `parse_files=` and `parse_bases=` can be override using [`parse_variables_query_results_by_default`](/general/system-configuration-overrides.md#parse_variables_query_results_by_default)

### Backspace Parameter

You can add an optional parameter that allows "backspacing":

    {exp:query sql="SELECT screen_name FROM exp_members WHERE group_id = '6'" backspace="2"}

Backspacing removes characters (including spaces and line breaks) from the last iteration of the loop. For example, if you put a comma between each screen name you would normally have this layout:

    Brett Bretterson, Max Goldman, John Gustafson,

You might, however, not want the comma and space after the final item. By adding backspacing you can remove it. Simply count the number of characters (including spaces and line breaks) you want to remove and add the backspace parameter to the tag. A comma plus a space is 2 characters, so you would use the backspace parameter:

    {exp:query sql="SELECT screen_name FROM exp_members WHERE group_id = '6'" backspace="2"}{screen_name}, {/exp:query}

This would display output similar to this:

    Brett Bretterson, Max Goldman, John Gustafson

## Additional Variables

The following variables are automatically available to you:

### `{count}`

The "count" out of the current row being displayed. If five rows are being displayed, then for the fourth row the {count} variable would have a value of "4".

If one of the database columns is named (or aliased) "count", it will take precedence over the {count} variable. To use both, you will need to provide a different alias for the field. e.g.:

    {exp:query sql="SELECT count(*) AS census FROM my_table"}
        {count} <!--This is the row count-->
        {census} <!--This is the contents of the database field "count"-->
    {/exp:query}

### `{switch=}`

    {switch="option_one|option_two|option_three"}

This variable permits you to rotate through any number of values as the entries are displayed. The first entry will use "option_one", the second will use "option_two", the third "option_three", the fourth "option_one", and so on.

The most straightforward use for this would be to alternate colors. It could be used like so:

    {exp:query sql="SELECT screen_name, email FROM exp_members WHERE group_id = '1'"}
        <div class="{switch="one|two"}">
            <h1>{screen_name}</h1>
            <p>{email}</p>
        </div>
    {/exp:query}

The entries would then alternate between `<div class="one">` and `<div class="two">`.

Multiple instances of the {switch=} tag may be used and ExpressionEngine will intelligently keep track of each one.

### `{total_results}`

The number of total results of the query.

## Troubleshooting

**Column variables are not parsing as expected**

When using the Query Module within other tag pairs such as `exp:channel:entries` which have their own variables, a conflict may arise in parsing the `exp:query` tag.

Example:
On the page `/about` (assuming there is an entry with the `url_title` of "about" titled "About Us") and using a database with three entries in the `exp_channel_title` table.

Template:

```
{exp:channel:entries}
    Page Title: {title} <br>
    {exp:query sql="SELECT title FROM exp_channel_titles"}
        Query result: {title} <br>
    {/exp:query}
{/exp:channel:entries}
```

Output:

```
Page Title: About Us
Query result: About Us
Query result: About Us
Query result: About Us
```

"About Us" is outputted with every instance of `{title}` because `{title}` is a variable used by the parent `{exp:channel:entries}` tag.
To avoid this confusion, alias your column titles in your query using the `AS` command.

```
{exp:channel:entries}
    Page Title: {title} <br>
    {exp:query sql="SELECT title AS query_titles FROM exp_channel_titles"}
        Query result: {query_titles} <br>
    {/exp:query}
{/exp:channel:entries}
```

Output:

```
Page Title: About Us
Query result: About Us
Query result: Contact
Query result: Home
```
