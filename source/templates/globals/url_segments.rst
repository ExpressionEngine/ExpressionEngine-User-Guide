URL Segment Variables
=====================

ExpressionEngine provides an easy way for you to access the information
in your URL segments. By "segments", we mean the segments of the URL
that appear after your index.php page. For example, this URL has two
segments::

	http://example.com/index.php/products/shirts/

products is Segment 1 and shirts is segment 2

If needed, you could access the *values* of either of those segments
using these variables in your templates:

{segment\_1} or {segment\_2}.

Up to 9 URL segments can be accessed using the following variables::

	{segment_1} {segment_2} {segment_3} {segment_4} {segment_5} {segment_6} {segment_7} {segment_8} {segment_9}

Segment variables let you dynamically change aspects of your templates
based on what appears in the URL.

For example, imagine you use an ExpressionEngine channel to store
information about each employee in your company. Each channel entry
describes a different person, with the URL Title of the entry being the
person's name. In this scenario you could use a single template to
dynamically show each employee's information based on what is in the
URL. Consider this URL::

	http://example.com/index.php/company/employees/joe/

The Template Groups name is "company" and the Template name is
"employees". Based on the information in the 3rd segment (in this case,
"joe") you can dynamically cause the "employees" template to change for
each person. Here's an example of a channel tag in which the URL title
changes based on the 3rd segment::

	{exp:channel:entries  url_title="{segment_3}"}     <h1>{title}</h1>     <p>{body}</p> {/exp:channel:entries}

Last Segment
------------

The {last\_segment} global variable gives you the ability to determine
the last segment of your URL when the number of URI segments is unknown.

http://example.com/index.php/company/
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

::

	{if last_segment == 'joe'}     Hey Joe, where you goin' with that? {/if}

http://example.com/index.php/company/employees/joe
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

::

	Hey {last_segment}, where you goin' with that?
