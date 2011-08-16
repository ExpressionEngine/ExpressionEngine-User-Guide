#########################
Displaying Search Results
#########################

.. contents::
	:local:

******************
Search Results Tag
******************

The Search Results Tag controls how you display results from your
searches. Example::

	<table border="0" cellpadding="6" cellspacing="1" width="100%">
		<tr>	
			<th>{lang:title}</th>
			<th>{lang:excerpt}</th>
			<th>{lang:author}</th>
			<th>{lang:date}</th>
			<th>{lang:total_comments}</th>
			<th>{lang:recent_comments}</th>
		</tr>
	
		{exp:search:search_results switch="resultRowOne|resultRowTwo"}
			<tr class="{switch}">
				<td width="30%" valign="top"><b><a href="{auto_path}">{title}</a></b></td>
				<td width="30%" valign="top">{excerpt}</td>
				<td width="10%" valign="top"><a href="{member_path='member/index'}">{author}</a></td>
				<td width="10%" valign="top">{entry_date format="%m/%d/%y"}</td>
				<td width="10%" valign="top">{comment_total}</td>
				<td width="10%" valign="top">{recent_comment_date format="%m/%d/%y"}</td>
			</tr>
		{/exp:search:search_results}
	</table>

	{if paginate}
		<div class='paginate'>
			<span class='pagecount'>{page_count}</span>&nbsp; {paginate}
		</div>
	{/if}

Parameters
==========

backspace=
----------

::

	backspace="7"

Backspacing removes characters (including spaces and line breaks) from
the last iteration of the loop. For example, if you put a <br /> tag
after each result field you'll have this::

	Entry 1<br />
	Entry 2<br />
	Entry 3<br />

You might, however, not want the <br /> tag after the final item. Simply
count the number of characters (including spaces and line breaks) you
want to remove and add the backspace parameter to the tag. The <br />
tag has 6 characters plus a new line character, so you would do this::

	{exp:search:search_results backspace="7"}
		{title}<br />
	{/exp:search:search_results}

That will produce code like this::

	   Entry 1<br />
	   Entry 2<br />
	   Entry 3

switch=
-------

::

	switch="option_one|option_two"

This parameter allows you to set two values that will alternate between
the result rows. This is commonly used to have alternating colored
backgrounds for the result rows. This parameter works in conjunction
with the `{switch} <#var_switch>`_ variable.

This is a legacy parameter, and has been replaced by the more advanced
`{switch=} variable <../channel/variables.html#var_switch>`_ from the
Channel Entries tag which has greater flexibility. This parameter /
variable combo will continue to function, but it is recommended that the
Channel Entries tag's {switch=} variable be used.

Variables
---------

::

	{title}     {permalink}     {author}     {body}     et cetera...

Nearly all of the `Channel Entries Tag
Variables <../../modules/channel/variables.html>`_ are available for the
search results page so that you can display as much or as little of the
channel entry's data as possible depending on your needs. There are also
some search results specific variables available in the results page:


auto\_path
----------

::

	{auto_path}

This parameter is replaced with the URL to the entry with the URL Title
appended to the end. Unlike other "path" variables, this variable does
**not** require the Template\_Group/Template to be specified. Instead,
the path will automatically be determined by the Search Results URL
setting for the channel in `Channel
Management <../../cp/admin/content_admin/channel_management.html>`_.

excerpt
-------

::

	{excerpt}

An excerpt from the entry. The excerpt consists of the first 50 words
from the field specified for search excerpting in your `Channel
Management <../../cp/admin/content_admin/channel_management.html>`_
settings for your channels. HTML markup is stripped prior to output.

full\_text
----------

::

	{full_text}

The text from the entry. Unlike the {excerpt} variable, this one returns
the entire text from the field specified for search excerpting in your
`Channel
Management <../../cp/admin/content_admin/channel_management.html>`_
settings for your channels.

id\_auto\_path
--------------

::

	{id_auto_path}

This parameter is replaced with the URL to the entry with the Entry ID
appended to the end. Unlike other "path" variables, this variable does
**not** require the Template\_Group/Template to be specified. Instead,
the path will automatically be determined by the Channel URL setting for
the channel in `Channel
Management <../../cp/admin/content_admin/channel_management.html>`_.

member\_path
------------

::

	{member_path='member/index'}

The Template\_Group/Template with which to display the member profile of
the author of the entry. Typically, this variable will be specified as
{member\_path='member/index'}.

switch
------

::

	{switch}

This variable is dynamically replaced by the appropriate value specified
in the `switch= <#par_switch>`_ parameter. This variable is commonly
used to set a CSS class or a background color.

This is a legacy variable, and has been replaced by the more advanced
`{switch=} variable <../channel/variables.html#var_switch>`_ from the
Channel Entries tag which has greater flexibility. This parameter /
variable combo will continue to function, but it is recommended that the
Channel Entries tag's {switch=} variable be used.

*******************
Search Keywords Tag
*******************

This tag lets you display the keywords used to perform a search. It is
used on the search results page in order to show the user exactly what
search terms they used::

	{exp:search:keywords}

This may also be used on the template specified by the
`no\_result\_page <advanced.html#par_no_result_page>`_ parameter of the
`simple search form <simple.html>`_ and `advanced search
form <advanced.html>`_.

There are no parameters or variables associated with this
ExpressionEngine tag.

************************
Search Total Results Tag
************************

This tag lets you display the total number of results found during a
search. It is used on the search results page to show the total number
of matches::

	{exp:search:total_results}
		{total_results}
	{/exp:search:total_results}

This may also be used on the template specified by the
`no\_result\_page <advanced.html#par_no_result_page>`_ parameter of the
`simple search form <simple.html>`_ and `advanced search
form <advanced.html>`_.

The only variable associated with this tag is {total\_results}.

