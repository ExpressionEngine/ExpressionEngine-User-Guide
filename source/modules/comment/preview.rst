Comment Previewing
==================

To preview a comment requires that you create a specific Template for
it. This Template will contain at minimum two tags. The first is the tag
that shows the preview::

	{exp:comment:preview}  {comment}  {/exp:comment:preview}

The second is the `Comment Submission Form <form.html>`_ tag. This
allows the comment to be displayed as well as the form containing the
info so it can be previewed again or submitted.

Variables
---------


comment
~~~~~~~

::

	{comment}

The body of the comment.

comment\_date
~~~~~~~~~~~~~

::

	{comment_date format="%Y %m %d"}

The date of the comment. As with other date variables, this requires the
"format" parameter in order to define how the date should be displayed.
See the `date variable
formatting <../../templates/date_variable_formatting.html>`_ page for
more information.

email
~~~~~

::

	{email}

The email address of the comment author.

location
~~~~~~~~

::

	{location}

The author's location as entered in their profile or the comment entry
form.

name
~~~~

::

	{name}

Name of the author.

url
~~~

::

	{url}

The author's raw URL, if it exists.

url\_as\_author
~~~~~~~~~~~~~~~

::

	{url_as_author}

Hyperlink pointing to the URL (if it exists) with the author name as the
link title. If the URL does not exist simply the name is returned.

url\_or\_email
~~~~~~~~~~~~~~

::

	{url_or_email}

URL if it exists, otherwise the email address.

url\_or\_email\_as\_author
~~~~~~~~~~~~~~~~~~~~~~~~~~

::

	{url_or_email_as_author}

Hyperlink or email link as author screen\_name (or username if they
haven't specified a screen name).

url\_or\_email\_as\_link
~~~~~~~~~~~~~~~~~~~~~~~~

::

	{url_or_email_as_link}

Same as above only it will display the URL or email address as a link.

Conditionals
------------

The following conditionals are available:

-  {if email}
-  {if location}
-  {if logged\_in}
-  {if logged\_out}
-  {if name}
-  {if url}

