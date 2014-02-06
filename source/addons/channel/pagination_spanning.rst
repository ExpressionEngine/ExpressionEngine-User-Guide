Spanning a Channel Entry Across Multiple Pages
==============================================

ExpressionEngine includes a feature that allows you to automatically
split a single channel entry/article across multiple pages. This feature
is particularly useful for webzines or other sites that routinely post
long articles.

Here's an example of what your channel entries tag might look like with
this feature in action::

   {exp:channel:entries channel="news" paginate_type="field" paginate="bottom"}
      <h3>{title}</h3>
      {body}
      {multi_field="page1|page2|page3|page4"}
      <div>
         Last updated on {edit_date format='%M %d, %Y'} at
            {edit_date format='%h:%i %A'}<br />
      </div>
      {paginate}
         <p>Page {current_page} of {total_pages} pages for this article
            {pagination_links}</p>
      {/paginate}
   {/exp:channel:entries}

You may notice that the code shares a lot in common with the code for
:doc:`channel entry and comment pagination </templates/pagination>`. In fact,
the feature is very similar.

The ability to span a channel entry across multiple pages is only
available when showing a single entry. That means it's useful on
single-entry pages such as "comment" pages.

Parameters
----------


paginate=
~~~~~~~~~

::

	paginate="top" paginate="bottom"  paginate="both"  paginate="inline"

This parameter determines where the pagination code will appear for your
channel entries or comments:

#. **top**: The navigation text and links will appear *above* your list
   of entries.
#. **bottom**: The navigation text and links will appear *below* your
   list of entries.
#. **both**: The navigation text and links will appear both above and
   below your list of entries.
#. **inline**: The navigation text and links will appear within the list
   of entries for each entry.

If no parameter is specified, the navigation block will default to the
"bottom" behavior.

paginate\_type=
~~~~~~~~~~~~~~~

::

	paginate_type="field"

Adding this parameter to your channel entries tag simply tells
ExpressionEngine to turn this pagination feature on. There is only one
possible value for the parameter: "field".

Variable Pairs
--------------

The same variable pairs used in the :doc:`channel entry and comment
pagination </templates/pagination>` feature are available here. The
following links point to the entries for that feature.

-  :ref:`{paginate} <pagination_paginate>`
-  :ref:`{pagination_links} <pagination_pagination_links>`
-  :ref:`{if next_page} <pagination_next_page>`
-  :ref:`{if previous_page} <pagination_previous_page>`

Variables
---------

These individual variables are for use inside the :ref:`{paginate}
<pagination_paginate>` tag pair.

current\_page
~~~~~~~~~~~~~

::

	{current_page}

This variable is replaced by the page number of the current page you are
viewing.

multi\_field
~~~~~~~~~~~~

::

	{multi_field="summary|body|extended"}

The {multi\_field=} variable is the core of the ability to span a
channel entry across multiple pages. Within the variable, you specify a
pipe-delimited list of the fields. These are the fields that will be
used for each individual page. Here is an example of how the feature
works:

#. Let's say you set up a channel and it contains (among others) the
   fields "page1", "page2", "page3", etc.
#. In your "comments" Template, you set up the {multi\_field} variable
   like so::

	{multi_field="page1|page2|page3"}

#. When you initially visit your comment page for an entry, where you
   have the {multi\_field} tag in your Template, you will see the
   content of your "page1" field, just as if you had used the regular
   {page1} variable.
#. If your entry has content in the "page2" field then you will see a
   "next page" link.
#. When you click that link, you'll see your entry again, but instead of
   {page1} being displayed, in its place would be {page2}.
#. This would continue with as many variables/pages as needed.

path
~~~~

::

	{path}

The ``{path}`` variable is used inside of the :ref:`{if next_page}
<pagination_next_page>` and :ref:`{if previous_page}
<pagination_previous_page>` variable pairs. It is dynamically
replaced with the correct path to the next/previous page.

total\_pages
~~~~~~~~~~~~

::

	{total_pages}

The total number of pages of channel entries or comments you have.
