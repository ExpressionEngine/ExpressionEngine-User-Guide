Displaying Recent Comments
==========================

The standard ExpressionEngine {exp:comment:entries} comment tag can be
used to display a list of recent comments. Many people use a list like
this in a sidebar of their site.

A simple example::

	{exp:comment:entries sort="desc" orderby="date" limit="10" dynamic="no"}  {comment}  <p>By {name} on {comment_date format="%Y %m %d"}<br /> From the entry '<a href="{comment_url_title_auto_path}">{title}</a>'.</p>  {/exp:comment:entries}

It is very important that the dynamic="no" parameter be included above.
This is what allows ExpressionEngine to display the comments independent
of a particular entry. Also note that you can use a number of values for
the `orderby= <entries.html#par_orderby>`_ parameter.
