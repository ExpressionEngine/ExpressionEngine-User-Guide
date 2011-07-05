Displaying Page Content
=======================

Displaying Page content is as easy as displaying normal channel entries.
The primary difference is that when a Page URI is requested, the URL
segments do not correlate to a template group and template, as that is
determined by the template that the particular "page" entry was assigned
to use on the `Pages tab <../../cp/content/publish.html#tab_pages>`_ of
the Publish form.

Additionally, the page will automatically be treated as a single entry
page for that page entry, so other tags on the template will need to use
the dynamic="no" parameter (if available) to display other content.

Displaying Page Content with a Channel Entries Tag
--------------------------------------------------

On the template assigned to a Page entry, use a normal `Channel Entries
tag <../../modules/channel/channel_entries.html>`_ with any parameters
and variables that you desire to display the entry, e.g.::

	{exp:channel:entries channel="personnel"}    <h2>{title}</h2>             <h3>Position</h3>    {position}                 <h3>Background</h3>    {background}                 <h3>Telephone Extension</h3>    {extension}     {/exp:channel:entries}

Parameters
----------

The Pages Module adds the following parameters for use in the
{exp:channel:entries} tag.

-  `show\_pages="only" <../channel/parameters.html#par_show_pages>`_

Variables
---------

The Pages Module adds the following variables for use in the
{exp:channel:entries} tag.

-  `{page\_uri} <../channel/variables.html#var_page_uri>`_
-  `{page\_url} <../channel/variables.html#var_page_url>`_

The {exp:load\_site\_pages} Tag
-------------------------------

If you are using the `Multiple Site
Manager <../../cp/sites/index.html>`_, page data are only available for
the current site. If you wish to show the {page\_uri} or {page\_url} for
an entry from a different site, you will need to use the
{exp:pages:load\_site\_pages} tag on the relevant template. This tag has
one required parameter: site. For example, if your weblog tag is pulling
in pages from sites default\_site and corporate\_site, your tag should
look like:

::

    {exp:pages:load_site_pages site="default_site|corporate_site"}

