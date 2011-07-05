Displaying Pings
================

You may display the pings you have received for any of your
configurations. Here is an example of code you will place in one of your
templates::

	{exp:updated_sites:pings which="default" orderby="title" limit="20"}  <p><a href="{ping_site_url}">{ping_site_name}</a></p>  {/exp:updated_sites:pings}

Parameters
----------


limit=
~~~~~~

::

	limit="30"

Allows you to limit the number of pings displayed. The limit will
default to 100 pings if a value is not specified.

orderby=
~~~~~~~~

::

	orderby="date"

The "order" parameter sets the display order of the pings. Setting
options for this parameter include:

-  orderby="date"
-  orderby="rss"
-  orderby="title"
-  orderby="url"

sort=
~~~~~

::

	sort="asc" ``sort="desc"``

The sort order can be "asc" (ascending order or "oldest item first" for
dates) or "desc" (descending order or "newest item first" for dates). If
you do not use a sort order the default is desc.

which=
~~~~~~

::

	which="default"

From which Configuration to show the pings (will show comments from all
configurations if none is specified). Additionally, you can use the pipe
character to separate multiple configurations::

	which="default|private|business"

Or you can add the word "not" (with a space after it) to exclude
configurations::

	which="not private|secret|friends"

Variables
---------


count
~~~~~

::

	{count}

The current increment value for this ping out of the total being
displayed. i.e. if EE is currently displaying the 7th ping out of 20
then the count value would be "7".

ping\_date
~~~~~~~~~~

::

	{ping_date format="%Y %m %d"}

The date the ping was received. See the `date variable
formatting <../../templates/date_variable_formatting.html>`_ page for
more information.

ping\_ipaddress
~~~~~~~~~~~~~~~

::

	{ping_ipaddress}

The IP address from which the ping was received.

ping\_site\_check
~~~~~~~~~~~~~~~~~

::

	{ping_site_check}

The "check URL" for the site that sent the ping. This is part of the
Extended Ping format and is not often available.

ping\_site\_name
~~~~~~~~~~~~~~~~

::

	{ping_site_name}

The name of the site that sent the ping.

ping\_site\_rss
~~~~~~~~~~~~~~~

::

	{ping_site_rss}

The RSS URL for the site that sent the ping. This is part of the
Extended Ping format and is not often available.

ping\_site\_url
~~~~~~~~~~~~~~~

::

	{ping_site_url}

The URL for new content from the site that sent the ping.

switch=
~~~~~~~

::

	{switch="option_one|option_two}

This variable permits you to alternate between any two values as the
pings are displayed. The first result will use "option\_one", the second
will use "option\_two", the third "option\_one", and so on.

The most straightforward use for this would be to alternate colors. It
could be used like so::

	{exp:updated_sites:pings which="default limit="20"}     <p class="{switch="one|two"}">         <a href="{ping_site_url}">{ping_site_name}</a>     </p>     {/exp:updated_sites:pings}

The entries would then alternate between <p class="one"> and <p
class="two">.

Multiple instances of the {switch=} tag may be used and the system will
intelligently keep track of each one.

total\_results
~~~~~~~~~~~~~~

::

	{total_results}

The total number of pings being displayed.
