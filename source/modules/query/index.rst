Query Module Tags
=================

ExpressionEngine includes a special tag that allows you to perform SQL
queries, returning results from your database without having to script
it with PHP. The general syntax for the tag is::

	{exp:query sql="SELECT screen_name FROM exp_members WHERE member_id = '1' "}  {screen_name}  {/exp:query}

This tag works a little bit differently than most of the other
ExpressionEngine tags, so it needs to be explained. First, you may only
use SELECT statements in the query; it will not process UPDATE or DELETE
queries. You may use any standard query you want and the syntax used is
identical to a regular SQL query.


Selecting Fields and Variables
------------------------------

Each of the columns or fields you include as part of your SELECT
statement will be available inside the tag pair as a {variable} with the
same name as the field. So, in the above example the "screen\_name"
field was selected and thus the {screen\_name} variable is available
inside the tag. ::

	{exp:query sql="SELECT screen_name, email, location FROM exp_members WHERE group_id = '1'"}  {screen_name} {email} {location}  {/exp:query}

This query would make three variables from the "exp\_members" table
available.

You may also have it select all available columns/fields automatically
by using the asterisk character::

	{exp:query sql="SELECT * FROM exp_members WHERE group_id = '1'"}  {username} {screen_name} {password} {email} {location}  {/exp:query}

Returning Multiple Rows
-----------------------

Unless you specifically craft your query to only return a single result,
most queries will return multiple "rows" of results. In order to deal
with these multiple rows of results, ExpressionEngine will automatically
loop through your query tag as many times as necessary to display all
the rows of returned data. Suppose you want to list all the members of
one of your particular groups. You might use something like this::

	{exp:query sql="SELECT screen_name FROM exp_members WHERE group_id = '6'"}  {screen_name}<br />  {/exp:query}

On your page, you might get actual results such as::

	Michael Jordan Wayne Gretzky Joe Montana Roger Clemens David Beckham

This tag will allow you to easily create many results that might
otherwise require plugins or special custom-coding in other
applications.

If You Have No Results
----------------------

You may use the {if no\_results} conditional variable to display content
if your query returns no results. For instance::

	{exp:query sql="SELECT screen_name FROM exp_members WHERE group_id = '6'"}  {screen_name}<br />  {if no_results} Sorry, no sports heroes here! {/if}  {/exp:query}

Dates
-----

If you are pulling dates out of an ExpressionEngine database table, then
you can have the dates formatted and localized for the user. As with
other date variables, these require the "format" parameter in order to
define how the date should be displayed. See the `date variable
formatting <../../templates/date_variable_formatting.html>`_ page for
more information. ::

	<p>Dates for the Last Five Entries:</p>      {exp:query sql="SELECT entry_date FROM exp_channel_titles ORDER BY entry_date DESC LIMIT 5"}  <p>{entry_date format="%Y %m %d"}</p>  {/exp:query}

Pagination
----------

The pagination in the Query module works exactly like the `Channel and
Comment Pagination <../channel/pagination_page.html>`_ with only one
exception. In the Query module you cannot have a LIMIT clause on your
query. Instead you have to use a **limit=""** parameter to specify how
many results to display per page, and then ExpressionEngine will
automatically modify your query to display the appropriate results. ::

	{exp:query limit="5" sql="SELECT title,entry_date FROM exp_channel_titles ORDER BY entry_date DESC"}  <p>{title} - {entry_date format="%Y %m %d"}</p>   {paginate} <p>Page {current_page} of {total_pages} pages {pagination_links}</p> {/paginate}  {/exp:query}

All variables and parameters used by the `Channel and Comment
Pagination <../channel/pagination_page.html>`_ are available for the
Query module as well. So, you can specify where to put the pagination
links and what type of pagination links to show. ::

	{exp:query limit="5" paginate="top" sql="SELECT title,entry_date FROM exp_channel_titles ORDER BY entry_date DESC"}  <p>{title} - {entry_date format="%Y %m %d"}</p>   {paginate}  {if previous_page} <a href="{auto_path}">Previous Page</a>   {/if}  {if next_page} <a href="{auto_path}">Next Page</a> {/if}  {/paginate}  {/exp:query}

Backspace Parameter
-------------------

You can add an optional parameter that allows "backspacing"::

	{exp:query sql="SELECT screen_name FROM exp_members WHERE group_id = '6'" backspace="2"}

Backspacing removes characters (including spaces and line breaks) from
the last iteration of the loop. For example, if you put a comma between
each screen name you would normally have this layout::

	Brett Bretterson, Max Goldman, John Gustafson,

You might, however, not want the comma and space after the final item.
By adding backspacing you can remove it. Simply count the number of
characters (including spaces and line breaks) you want to remove and add
the backspace parameter to the tag. A comma plus a space is 2
characters, so you would use the backspace parameter::

	{exp:query sql="SELECT screen_name FROM exp_members WHERE group_id = '6'" backspace="2"}{screen_name}, {/exp:query}

This would display output similar to this::

	Brett Bretterson, Max Goldman, John Gustafson

Special Variables
-----------------


count
~~~~~

::

	{count}

The "count" out of the current row being displayed. If five rows are
being displayed, then for the fourth row the {count} variable would have
a value of "4".

If one of the database columns is named (or aliased) "count", it will
take precedence over the {count} variable. To use both, you will need to
provide a different alias for the field. e.g.::

	{exp:query sql="SELECT count(*) AS census FROM my_table"}             {count} <!--This is the row count-->             {census} <!--This is the contents of the database field "count"-->             {/exp:query}

switch=
~~~~~~~

::

	{switch="option_one|option_two|option_three"}

This variable permits you to rotate through any number of values as the
entries are displayed. The first entry will use "option\_one", the
second will use "option\_two", the third "option\_three", the fourth
"option\_one", and so on.

The most straightforward use for this would be to alternate colors. It
could be used like so::

	{exp:query sql="SELECT screen_name, email FROM exp_members WHERE group_id = '1'"} <div class="{switch="one|two"}"> <h1>{screen_name}</h1> {email} </div> {/exp:query}

The entries would then alternate between <div class="one"> and <div
class="two">.

Multiple instances of the {switch=} tag may be used and the system will
intelligently keep track of each one.

total\_results
~~~~~~~~~~~~~~

::

	{total_results}

The number of total results of the query.

Notes
-----

While this tag gives you a great amount of power and flexibility, it can
sometimes be difficult to construct a query. ExpressionEngine abstracts
its database design quite a bit, which means that related data is not
always stored together in the same table. For instance, the data for
channel entries are stored in two tables: the titles and basic meta data
like the date are stored in one table, while the body fields are in
another, so if you wanted to try and recreate a regular channel query
which returned data that was stored across several tables, you would
need to use SQL JOINS and other advanced syntax. To take full advantage
of this tag's power you will need to have a good understanding of SQL
querying.
