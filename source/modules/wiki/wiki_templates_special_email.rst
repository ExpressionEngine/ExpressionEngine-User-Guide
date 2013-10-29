Wiki Email Templates
====================

These templates generate the email that notifies Wiki Admins of changes
to moderated articles.

.. note:: The email is split into two templates; one handles the email
	subject and the other the body of the email.

The email templates have the following variables available to it.

Single Variables
----------------


revision\_date
~~~~~~~~~~~~~~

::

	{revision_date format=""}

This displays the time of the most recent article revision.

The **format** parameter is used to determine the date's formatting
using ExpressionEngine's :doc:`Date Variable Formatting
</templates/date_variable_formatting>`.

title
~~~~~

::

	{title}

Displays the article/page's Title.

revision\_id
~~~~~~~~~~~~

::

	{revision_id}

Displays the revision's unique ID number.

author
~~~~~~

::

	{author}

Displays the Screen Name of the revision's author.

email
~~~~~

::

	{email}

This displays the email address of the revision's author.

revision\_notes
~~~~~~~~~~~~~~~

::

	{revision_notes}

This displays the revision's notes (if any).

path:view\_article
~~~~~~~~~~~~~~~~~~

::

	{path:view_article}

Dislpays the URL to view the article.

path:view\_revision
~~~~~~~~~~~~~~~~~~~

::

	{path:view_revision}

Displays the URL to view the revision.

path:open\_revision
~~~~~~~~~~~~~~~~~~~

::

	{path:open_revision}

Displays the URL to Open the revision.

.. note:: Opening a revision approves it and makes it live. If you only
	want to view a revision, use the `path:view\_revision`_ variable 
	instead.

path:close\_revision
~~~~~~~~~~~~~~~~~~~~

::

	{path:close_revision}

Displays the URL that will close a revision.

.. note:: The "open" and "close" links will only work if the person
	clicking them is a Wiki Admin.


content
~~~~~~~

::

	{content}

Displays the raw content of an article.

article
~~~~~~~

::

	{article}

Displays the fully rendered article. HTML characters will be rendered.


