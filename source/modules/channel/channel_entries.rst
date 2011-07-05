Channel Entries Tag
===================

The Channel Entries tag is the primary tag used to show the content you
manage in your Control Panel PUBLISH and EDIT pages. This tag has far
more display options, parameters, and variables than any other tag in
ExpressionEngine. It is, in fact, the most powerful tag in the entire
system since its main function is to retrieve and display your site's
content. You will arguably use this tag more than any other.

The Channel Entries tag can be used to display both multi-entry and
single-entry content - that is, several entries on a page, or one
specific one (it dynamically adjusts its output based on the URL
request) . It can also show entries from specific categories, specific
days, monthly archives, permalinks, and more. In addition to this tag,
the Channel Module has several ancillary tags that provide complimentary
features.

Here is a simple example of a possible usage of this tag

::

	{exp:channel:entries channel="news" limit="15"}
	    <h3>{title}</h3>
	    {body}
	    <div class="date">
	        Posted on {entry_date format="%M %d, %Y - %h:%i %A"}
	    </div>
	{/exp:channel:entries}


Parameters
----------

The Channel Entries tag has a large number of
`parameters <parameters.html>`_ that can be used to control what the tag
displays.

Variables
---------

Inside of the tag you can use a number of variables to display different
information such as entry title, date, body, etc. There are three types
of variables:

-  `Conditional Variables <conditional_variables.html>`_
-  `Single Variables <variables.html>`_
-  `Variable Pairs <variable_pairs.html>`_

Pagination
----------

The `Pagination <pagination_page.html>`_ feature allows you to create
"next" and "previous" links between pages of entries.

You can also span a single entry `across multiple
pages <pagination_spanning.html>`_, like online magazines do.

Entry "Views" Tracking
----------------------

The Channel Entries tag also has a `Views
Tracking <entry_tracking.html>`_ feature that lets you track the number
of times an entry has been viewed.

Relationships
-------------

The Channel Module supports a powerful `related
entries <related_entries.html>`_ feature that lets you associate one
entry to another.
