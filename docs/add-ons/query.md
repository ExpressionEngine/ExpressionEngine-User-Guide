<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
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

If you are pulling dates out of an ExpressionEngine database table, then you can have the dates formatted and localized for the user. As with other date variables, these require the "format" parameter in order to define how the date should be displayed. See the [date variableformatting](templates/date-variable-formatting.md) page for more information. :

    <p>Dates for the Last Five Entries:</p>
    {exp:query sql="SELECT entry_date FROM exp_channel_titles ORDER BY entry_date DESC LIMIT 5"}
        <p>{entry_date format="%Y %m %d"}</p>
    {/exp:query}

## Pagination

The Query module uses the same pagination syntax as all first-party modules. Please look at the [Pagination](templates/pagination.md) documentation for more information.

## Backspace Parameter

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
