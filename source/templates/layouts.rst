Wrapping Templates in Layouts
=============================

.. contents::
   :local:
   :depth: 1

Basic Usage
-----------

In addition to :doc:`embedding <./embedding>` templates within each
other, you can also create shared layouts for your templates. A layout
can be thought of as a wrapping template or a reverse embed. To use a
template you use the ``{layout=""}`` tag at the top of your template::

  {layout="template_group/template"}

Where "template\_group" is the name of the group and "template" is the
name of the template. You **must** include both the template group and
the template name in the layout tag. For example::

{layout="site/wrapper"}

This will use the "wrapper" template in the "site" template group as a
a layout for the current template. In the layout itself you must now
specify a location where the template contents will be shown. This is
done using the "layout:contents" tag::

  {layout:contents}

.. note:: The layout tag **must** come before any module or plugin tags.

Simple Example
--------------

The most common usage for layouts is to provide the skeleton structure
of your site. With embeds, this can be done with using a header and
footer embed on each template::

  {embed="site/_header"}

  {exp:channel:entries channel="news"}
    <h2>{title}</h2>
    {summary}
  {/exp:channel:entries}

  {embed="site/_footer"}

With a "site/_header" template::

  <html>
    <head>
      <title>News Site</title>
    </head>
    <body>

And a "site/_footer" template::

    </body>
  </html>

As you add more code to your header and footer templates this approach
can become a little messy. With layouts, we can define our header and
footer in a single template called "site/_html-layout" in this
example::

  <html>
    <head>
      <title>News Site</title>
    </head>
    <body>
      {layout:contents}
    </body>
  </html>

You can now write the main template using a single layout tag instead
of two embeds::

  {layout="site/_html-layout"}

  {exp:channel:entries channel="news"}
    <h2>{title}</h2>
    {summary}
  {/exp:channel:entries}

Notice that the layout is a :doc:`hidden template <./hidden_templates>`.
This lets you prevent direct access to the layout template, which is
most likely not useful to your users on its own.

.. _layout_variables:

Layout Variables
----------------

.. contents::
   :local:
   :depth: 1

Parameter Variables
~~~~~~~~~~~~~~~~~~~

In the layout tag you can use parameters to pass additional data to your
layout template::

  {layout="site/_html-layout" color="blue"}

In your layout this will be available as a ``{layout:color}`` tag::

  I drive a {layout:color} car.

.. important:: The name ``contents`` is reserved for the template data.

Dynamic Variables
~~~~~~~~~~~~~~~~~

Layout tags should be placed as high in the template as possible and
they **must** be used **before** any module or plugin (``{exp: }``)
tags. This restriction presents a problem when trying to pass data from
a module to your layout.

In order to get around this problem, layout variables can be set
throughout the template using the ``{layout:set}`` tag::

  {layout:set name="color" value="red"}

The name parameter specifies the name of the variable and the value
parameter contains the data you want to pass to the layout. Using this
tag will override any equally named parameters on the main
``{layout=""}`` tag.

You can also set variables using a tag pair; this is useful for
capturing the output of plugin or module tags. With the tag pair you do
not need the value parameter, instead the data inside the pair will be
used as the variable value. The name parameter must still be given::

  {layout="site/_html-layout"}

  {exp:channel:entries channel="colors" limit="1"}
    {title}
    {layout:set name="color"}{title}{/layout:set}
  {/exp:channel:entries}

The ``{layout:set}`` tag will always be fully removed from your template
so you must show the data you are saving separately.

.. note::
  Using ``{layout:set}`` in a looping tag pair will populate the value
  of the layout variable with the last element of the pair.

Expanded Example
----------------

The previous example can be made more dynamic by using layout variables.
Your layout can now respond to the template that it is wrapping. For
example, you could use variables to dynamically update the browser
window's title::

  <html>
    <head>
      <title>Site Name{if layout:title != ''} | {layout:title}{/if}</title>
    </head>
    <body>
      {layout:contents}
    </body>
  </html>

By using a :doc:`conditional <./conditionals>` we have made the
title parameter optional. If the parameter is not given, or is blank,
the title will simply be "Site Name". Any template using this layout can
choose to add to the output of the title tag using the parameter. You
can even take it a step further. After setting a default section title
in the parameter you can override it dynamically based on what your
template is currently showing::

  {layout="site/_html-layout" title="News"}

  {exp:channel:entries channel="news"}
    <h2>{title}</h2>

    {if total_results == "1"}
      {body}
      {layout:set name="title" value="News | {title}"}
    {if:else}
      {summary}
    {/if}
  {/exp:channel:entries}

Your title for this template will now show "Site Name | News" unless a
single news entry is being displayed, in which case it will show a more
user friendly title of "Site Name | News | Article Title". Unlike header
and footer embeds, this can all be done using a single :doc:`Channel
Entries <../channel/channel_entries>` loop which will improve
the overall :doc:`performance <../optimization/index>` of this template.

Nesting and Embeds
------------------

Nested Layouts
~~~~~~~~~~~~~~

Each template on your site can only specify a single layout. However,
each layout can also use a layout, thus progressively nesting your
template. For more complex sites this allows you to have a single HTML
wrapper and still take advantage of layouts to build out the different
sections of your site.

Layouts and Embeds
~~~~~~~~~~~~~~~~~~

Layouts and embeds can be used together to create complex template
hierarchies. When building nested template structures you should keep
your layouts general and avoid nesting embeds or layouts too deeply. A
good implementation will be easy to read and easy to follow. This will
make your site more maintainable and it will help you spot performance
bottlenecks more quickly.

It is important to understand how layouts and embeds can affect each
other. Layouts are :doc:`processed before embeds
<./template_engine>`, so that setting a layout variable inside an embed
cannot affect the layout of the embedding template. If an embed is using
a layout, then the embed will be wrapped by that layout before being
placed in the embedding template. Setting a layout variable inside the
embed will be usable by the embed's layout and that layout will have
full access to the variables passed to the embed.

+-----------------------+----------------------+----------------------------+-----------------------------+
|                       | Read Embed Variables | Set Embed Layout Variables | Set Parent Layout Variables |
+=======================+======================+============================+=============================+
| Embedded Template     | Yes                  | Yes                        | No                          |
+-----------------------+----------------------+----------------------------+-----------------------------+
| Parent Template       | --                   | No                         | Yes                         |
+-----------------------+----------------------+----------------------------+-----------------------------+
| Embed Layout          | Yes                  | --                         | No                          |
+-----------------------+----------------------+----------------------------+-----------------------------+
| Parent's Layout       | No                   | No                         | --                          |
+-----------------------+----------------------+----------------------------+-----------------------------+

Complex Example
---------------

Putting all of these together lets you create flexible page layouts with
multiple dynamic sections. This example will add a sidebar and footer to
the news example above.

We will keep the existing "site/_html-layout" from before, with a small
addition to allow for additional JavaScript and CSS to be set from the
template::

  <html>
    <head>
      <title>Site Name{if layout:title != ''} | {layout:title}{/if}</title>

      <link rel="stylesheet" href="/assets/global.css" type="text/css" />
      {layout:css}
    </head>
    <body>
      {layout:contents}
      {layout:js}
    </body>
  </html>

For the news section we will now have a separate layout that defines
the structure of a given news page. Let's call it "news/_layout"::

  {layout="site/_html-layout"}
  {layout:set name="title"}News{if layout:title != ''} | {layout:title}{/if}{/layout:set}

  {layout:set name="css"}
    <link rel="stylesheet" href="/assets/news.css" type="text/css" />
  {/layout:set}

  <div id="wrapper">
    <div id="main">
      {layout:contents}
    </div>

    <aside>
      {layout:sidebar}
    </aside>
  </div>


Our news homepage "news/index" will use the news layout to show a list
of recent entries and also provide a search box in the sidebar. We will
use an embed for the search and come back to it later::

  {layout="news/_layout" title="Recent"}

  {exp:channel:entries channel="news" limit="30" dynamic="no"}
    <h2><a href="{url_title_path='news/article'}">{title}</a></h2>
    {summary}
  {/exp:channel:entries}

  {layout:set name="sidebar"}
    {embed="news/_embed-search"}
  {/layout:set}

We will use the "news/article" template to display the full article and
change the sidebar to show an article list in addition to the search::

  {layout="news/_layout"}

  {exp:channel:entries channel="news" require_entry="yes"}
    {layout:set name="title" value="{title}"}

    <h1>{title}<h1>
    {body}
  {/exp:channel:entries}

  {layout:set name="sidebar"}
    {embed="news/_embed-search"}
    {embed="news/_embed-recent-articles"}
  {/layout:set}

For each element in the sidebar we will have a small piece of wrapping
code in a layout, "news/_sidebar-layout"::

  <div class="sidebar-item">
    <header>{layout:header}</header>
    {layout:contents}
  </div>

Now we can create "news/_embed-search" using the :doc:`Simple Search
Form <../add-ons/search/simple>` tag::

  {layout="news/_sidebar-layout" header="Search"}

  {exp:search:simple_form channel="news"}
    <input type="search" name="keywords" maxlength="100">
    <input type="submit" value="Submit">
  {/exp:search:simple_form}

And "news/_embed-recent-articles"::

  {layout="news/_sidebar-layout" header="Recent Articles"}

  <ul>
    {exp:channel:entries channel="news" limit="10" dynamic="no" disable="custom_fields"}
      <li>{title}</li>
    {/exp:channel:entries}
  </ul>
