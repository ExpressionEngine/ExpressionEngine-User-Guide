##########
RSS Parser
##########

The RSS Parser plugin provides RSS parsing tags for your templates. It
uses `SimplePie <http://simplepie.org>`_ to parse and render any RSS or
Atom feed you throw at it.

.. contents::
  :local:

*******
Example
*******

Here's a simple example where we're pulling the `EllisLab blog
<http://ellislab.com/blog/>`_ feed and showing the five most recent
posts::

  {exp:rss_parser url="http://ellislab.com/blog/rss-feed" limit="5"}
  <h1>{feed_title}</h1>
  <ul>
      {feed_items}
          <li>
              <h2><a href="{item_link}">{item_title}</a></h2>
              <ul class="metadata">
                  <li class="byline">by {item_authors backspace="2"}{author_name}, {/item_authors}</li>
                  <li class="date">{item_date format="%F %d %Y"}</li>
              </ul>
              {content}
          </li>
      {/feed_items}
  </ul>
  {/exp:rss_parser}

**********
Parameters
**********

There are four available parameters:

:url: The URL of the RSS or Atom feed
:limit: Number of items to display from the feed
:offset: Number of items to skip from the feed
:refresh: How long you want the feed to be cached (default cache length
  is three hours)

****************
Single Variables
****************

Most of the variables are fairly self explanatory:

- ``{feed_title}``
- ``{feed_link}``
- ``{feed_copyright}``
- ``{feed_description}``
- ``{feed_language}``

Both RSS 2.0 and Atom 1.0 feeds can have a "feed logo". The following
variables can be used to display the logo:

- ``{logo_title}``
- ``{logo_url}``
- ``{logo_link}``
- ``{logo_width}``
- ``{logo_height}``

Also, if there's an error in retrieving the feed, you can use the
following variable to display the error:

- ``{feed_error}``

**************
Pair Variables
**************

There are three pair variables available: ``{feed_items}``,
``{item_categories}``, and ``{item_authors}``. Both
``{item_categories}`` and ``{item_authors}``, are only available within
``{feed_items}``.

``{feed_items}``
================

The ``{feed_items}`` variable contains all of the items found within the
feed:

- ``{item_title}``
- ``{item_link}``
- ``{item_date}``: uses standard ExpressionEngine date formatting (e.g.
  ``{date format="%F %d %Y"}``)
- ``{item_description}``: tends to be a short excerpt of the full
  ``{item_content}``, but varies
- ``{item_content}``: tends to be full content, but varies

``{item_authors}``
==================

The ``{item_authors}`` variable contains information about all of the
authors of a particular item. Each author has three single variables
associated with it:

- ``{author_email}``
- ``{author_link}``
- ``{author_name}``

``{item_categories}``
=====================

The ``{item_categories}`` variable contains all of the categories that a
feed item has been assigned. Each category has one useful variable:

- ``{category_name}``

************
Conditionals
************

There are only two conditionals:

- ``{if feed_error}``: In case of a feed error the parser will **only**
  display content inside of this conditional, if the conditional does
  not exist, nothing is shown.
- ``{if no_results}``: Just like the Channel module, if there are no
  results **only** show the contents of this conditional.