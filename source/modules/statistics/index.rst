Statistics
==========

.. contents::
	:local:
	:depth: 1

Introduction
------------

ExpressionEngine includes a Statistics Module that tracks a number of
system statistics. The basic tag consists of a tag pair::

	{exp:stats}
		statistics content
	{/exp:stats}

Parameters
----------

.. contents::
	:local:

site=
~~~~~

::

	site="default_site"

This parameter can be used to restrict the statistics reporting to
specific sites when using the Multiple Site Manager. You can use the
pipe character to separate multiple sites::

	site="default_site|boston|new_york"

Or you can add the word "not" (followed by a space) to exclude sites::

	site="not chicago|los_angeles"

channel=
~~~~~~~~

::

	channel="default_site"

This parameter can be used to restrict the statistics reporting to
specific channels. Note that not all of the statistics variables are
affected by this parameter; those that are affected will be noted.
Additionally, you can use the pipe character to separate multiple
channels::

	channel="default_site|sports|news"

Or you can add the word "not" (followed by a space) to exclude channels::

	channel="not channel5|channel6"

Here is an example of the tag with the parameter in use::

	{exp:stats channel="news|sports"}
		statistics content
	{/exp:stats}

Variables
---------

.. contents::
	:local:

-  `{last\_comment\_date format="%m/%d/%Y %h:%i
   %a"} <#var_last_comment_date>`_
-  `{last\_entry\_date format="%m/%d/%Y %h:%i
   %a"} <#var_last_entry_date>`_
-  `{last\_visitor\_date format="%m/%d/%Y %h:%i
   %a"} <#var_last_visitor_date>`_
-  `{most\_visitor\_date format="%m/%d/%Y %h:%i
   %a"} <#var_most_visitor_date>`_

last\_comment\_date
~~~~~~~~~~~~~~~~~~~

::

	{last_comment_date format="%m/%d/%Y %h:%i %a"}

The date of the most recent comment. This variable can be affected by
the channel= parameter. See `Date Variable
Formatting <../../templates/date_variable_formatting.html>`_ for
more information.

last\_entry\_date
~~~~~~~~~~~~~~~~~

::

	{last_entry_date format="%m/%d/%Y %h:%i %a"}

The date of the most recent entry. This variable can be affected by the
channel= parameter. See `Date Variable
Formatting <../../templates/date_variable_formatting.html>`_ for
more information.

last\_visitor\_date
~~~~~~~~~~~~~~~~~~~

::

	{last_visitor_date format="%m/%d/%Y %h:%i %a"}

The date of most most recent visitor to the site. See `Date Variable
Formatting <../../templates/date_variable_formatting.html>`_ for
more information.

most\_visitor\_date
~~~~~~~~~~~~~~~~~~~

::

	{most_visitor_date format="%m/%d/%Y %h:%i %a"}

The date on which the most visitors were ever viewing the site at the
same time. See `Date Variable
Formatting <../../templates/date_variable_formatting.html>`_ for
more information.

most\_visitors
~~~~~~~~~~~~~~

::

	{most_visitors}

The greatest number of visitors ever online at the same time. This
includes members, guests/non-members, and anonymous users.

total\_anon
~~~~~~~~~~~

::

	{total_anon}

The total number of people currently online who have chosen to be
"anonymous" and not have their name revealed.

total\_comments
~~~~~~~~~~~~~~~

::

	{total_comments}

The combined total number of comments for all entries. This variable can
be affected by the channel= parameter.

total\_entries
~~~~~~~~~~~~~~

::

	{total_entries}

The total number of entries in the database. This variable can be
affected by the channel= parameter.

total\_guests
~~~~~~~~~~~~~

::

	{total_guests}

The total number of people currently using the system that are *not*
logged in as members.

total\_logged\_in
~~~~~~~~~~~~~~~~~

::

	{total_logged_in}

The total number of members that are currently logged in to the system.

total\_members
~~~~~~~~~~~~~~

::

	{total_members}

The total number of registered members.

Member Names
------------

The member\_names variable pair allows you to show the currently logged
in users::

	{member_names}
		<a href="{member_path='member/index'}">{name}</a><br>
	{/member_names}
	
The {member\_path=''} variable allows you to create a link that points
to the member's profile page. The example above illustrates how it can
be used.

The member\_names variable pair can also be used as a conditional::

	{if member_names}
		{member_names}
			{name}<br>
		{/member_names}
	{/if}


There is one optional parameter that goes in the opening {member\_names}
variable that allows "backspacing"::

	{member_names backspace="5"}

Backspacing removes characters from the last iteration of the loop. For
example, if you put a <br> tag between each member name you'll have
this layout::

	Joe<br>
	Fred<br>
	Sallie<br>

You might, however, not want the <br> tag after the final item. By
adding backspacing you can remove it. Simply count the number of
characters and spaces in the item you want to remove and add it to the
tag. A <br> tag has 5 characters including the newline character, so you would do this::

	{member_names backspace="5"}
		<a href="{member_path='member/index'}">{name}</a><br>
	{/member_names}

That will produce code like this::

	Joe<br>
	Fred<br>
	Sallie
