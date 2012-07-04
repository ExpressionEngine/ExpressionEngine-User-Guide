Wiki Special Titles Template
============================

This template displays a list of all titles in the wiki as outlined
below:

|Displays all the titles in the wiki.|

In addition to the variables in the `Wiki Page
template <wiki_templates_page.html>`_, the Special Titles template has:


Tags
----

The Special Titles template has the **{wiki:title\_list}** tag available
which is used to display all the wiki's article titles. This tag has
`Parameters <#para>`_ and `Variables <#vars>`_.

{wiki:title\_list} \| Parameters
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


columns
^^^^^^^

::

	{wiki:title_list columns="#"}

Determines the number of columns to use in displaying the articles
titles.

{wiki:title\_list} \| Variables
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Variable Pairs
^^^^^^^^^^^^^^


articles
''''''''

::

	{articles}

This displays the articles and is used to encase the variable pairs
below. It repeats through all the articles and applies the specified
formatting to build a list of article titles. Please see the default
file for an example.

row\_start
''''''''''

::

	{row_start}

Determines what content to use at the start of a row of titles.

row\_blank
''''''''''

::

	{row_blank}

Determines what content to use if a column is blank.

row\_end
''''''''

::

	{row_end}

Determines what content to use at end of a row.

row\_column
'''''''''''

::

	{row_column}

Determines what content to use for each column in a row.

Single Variables
^^^^^^^^^^^^^^^^


article
'''''''

::

	{article}

Displays the fully rendered article. This means that all the html/markup
code is processed before display.

author
''''''

::

	{author}

Displays the Screen Name of the revision's author.

content
'''''''

::

	{content}

Displays the raw content of an article. This means that all the html or
markup code is revealed.

count
'''''

::

	{count}

"count" of the article currently being displayed

email
'''''

::

	{email}

Displays the email of the revision's author.

last\_updated
'''''''''''''

::

	{last_updated format=""}

Displays the time when an article was last updated.

The **format** parameter is used to determine the date's formatting
using ExpressionEngine's `Date Variable
Formatting <../../templates/date_variable_formatting.html>`_.

path:view\_article
''''''''''''''''''

::

	{path:view_article}

Displays a URL to View Article.

revision\_notes
'''''''''''''''

::

	{revision_notes}

Displays the revision's notes, if any.

switch=
'''''''

::

	{switch="option_one|option_two|option_three"}

This variable permits you to rotate through any number of values as the
articles are displayed. The first article will use "option\_one", the
second will use "option\_two", the third "option\_three", the fourth
"option\_one", and so on.

Multiple instances of the {switch=} tag may be used and the system will
intelligently keep track of each one.

title
'''''

::

	{title}

Displays the title of an article.

url
'''

::

	{url}

Displays the member profile URL for the revision's author.


.. |Displays all the titles in the wiki.| image:: ../../images/wiki_titles_list.jpg
