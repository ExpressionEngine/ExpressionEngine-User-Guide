Channel Entry and Comment Pagination
====================================

The pagination feature for both **channel entries** and **comments**
works identically and allows you to display a limited number of entries
and then automatically link to the next set. That way you can, for
example, show comments 1-10 on the first page and automatically link to
pages that display 11-20, 21-30, etc.

You have two choices as to the style of the navigation element. The
first method would look something like this::

	Page 27 of 344 pages  « First  <  11 12 13 14 15 >  Last »

The second method is a more traditional "next page" / "previous page"
output::

	Previous Page | Next Page

Pagination will also automatically restrict itself to any category
you're currently viewing. So if you have a category specified in your
channel entries tag or you are viewing the entries of a category, then
the pagination links will automatically restrict themselves to only
entries in that category.

Example Code
------------

Here are two basic code examples, one for each of the methods mentioned
above. Information about the variables and parameters are covered later. 

::

    {exp:channel:entries channel="news" orderby="date" sort="desc" limit="1" paginate="bottom"}
        <h2>{title}</h2>
        {summary}
        {body}
    
        {paginate}
            <p>Page {current_page} of {total_pages} pages {pagination_links}</p> 
        {/paginate}
    {/exp:channel:entries}

It is important to note that it does **not** matter where you put your
{paginate} code within the channel entries tag. The pagination code will
be "stripped out" of the regular output and placed in the appropriate
location according to what you specify with the paginate= parameter
(detailed below).

And for the "next/previous" method

::

	{exp:comment:entries channel="news" sort="desc" limit="1" paginate="bottom"}      
	    {comment}
	    <p>By {name} on {comment_date format="%Y %m %d"}</p>
	    {paginate}
	        {if previous_page}
	            <a href="{auto_path}">Previous Page</a> &nbsp; 
	        {/if} 
	        {if next_page} 
	            <a href="{auto_path}">Next Page</a> 
	        {/if}
	    {/paginate}
	{/exp:comment:entries}

Parameters
----------


paginate=
~~~~~~~~~

::

	paginate="top" paginate="bottom"  paginate="both"

This parameter determines where the pagination code will appear for your
channel entries or comments:

#. **top**: The navigation text and links will appear *above* your list
   of entries.
#. **bottom**: The navigation text and links will appear *below* your
   list of entries.
#. **both**: The navigation text and links will appear both above and
   below your list of entries.

If no parameter is specified, the navigation block will default to the
"bottom" behaviour.

Variable Pairs
--------------


paginate
~~~~~~~~

::

	{paginate}  {/paginate}

The opening and closing tags for pagination. This can to be used in
conjunction with the `paginate= <#par_paginate>`_ parameter to determine
where the contents of this tag will appear. See below for the available
variables for use inside this tag. This tag is wrapped around either the
single variables (see below) or the next/previous variable pairs.

if next\_page
~~~~~~~~~~~~~

::

	{if next_page}  {/if}

This tag will conditionally display the code inside the tag if there is
a "next" page. If there is no next page then the content simply will not
be displayed.

if previous\_page
~~~~~~~~~~~~~~~~~

::

	{if previous_page}  {/if}

This tag will conditionally display the code inside the tag if there is
a "previous" page. If there is no previous page then the content simply
will not be displayed.

Variables
---------


These individual variables are for use inside the
`{paginate} <#var_paginate>`_ tag pair.

auto\_path
~~~~~~~~~~

::

	{auto_path}

The {auto\_path} variable is used inside of the `{if
next\_page} <#var_if_next_page>`_ and `{if
previous\_page} <#var_if_previous_page>`_ variable pairs. It is
dynamically replaced with the correct path to the next/previous page.
Unlike other "path" variables, this variable does **not** require the
Template\_Group/Template to be specified.

current\_page
~~~~~~~~~~~~~

::

	{current_page}

This variable is replaced by the page number of the current page you are
viewing.

pagination\_links
~~~~~~~~~~~~~~~~~

::

	{pagination_links}

The dynamically created pagination links. These show the current page
you are on as well as "surrounding" pages in addition to links for
nex/previous pages and first/last pages. The output of the variable
looks similar to this::

	« First  <  11 12 13 14 15 >  Last »

total\_pages
~~~~~~~~~~~~

::

	{total_pages}

The total number of pages of channel entries or comments you have.
