<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Template Overview

[TOC]

This page provides an overview of ExpressionEngine Templates, and the components that you will typically encounter when using Templates. Each of the items mentioned below has its own page where it is explained in detail.

TIP: If you haven't done so, please read the **Getting Started** section of this user guide first. Doing so should give you a pretty good introduction to how ExpressionEngine works.

TIP: Templates can be created and edited in the `Developer -> Templates` area of your Control Panel.

## What is a Template?

In ExpressionEngine, a Template can be any of the following:

- An entire webpage of your site.
- A sub-section of your site, like a header or footer.
- A page that can output a variety of information types (RSS, CSS, HTML, XML, etc.)

The simplest way to think of a Template is as a container that represents a single page of your site. As such, a Template may contain anything that a webpage might contain: HTML, JavaScript, etc.

A Template can also be a smaller component of your page. Through the use of the [Embed Tag](templates/embedding.md) you can insert a Template into another Template.

Because a Template is just a container that outputs information, you can create Templates for any type of data you need to present (RSS, CSS, HTML, XML, etc.).

Templates are organized into Template Groups. A Template Group is analogous to a folder on your server.

In ExpressionEngine, a URL will always contains the following structure, which allows a Template Group and a specific Template to be shown:

    http://example.com/template_group/template

In addition to HTML and other markup, Templates will usually contain ExpressionEngine Tags, explained below.

## Module and Plugin Tags

To retrieve and show the information contained in your Modules and Add-Ons you will use a **Template Tag**. They can be easily spotted, because they all start with `{exp:`. They most frequently come in pairs that loop over rows of content. The template chunk between them will be repeated for each row they represent, and the variables between them will be replaced with the values of each row of content. Here is what a typical Template Tag looks like:

    {exp:channel:entries}
      <h1>{title}</h1>
      <p>{author}</p>
    {/exp:channel:entries}

The above code tells your ExpressionEngine template to retrieve data from the **channel entries module**. Each module or add-on in ExpressionEngine will have its own syntax. For example, to access information from the **Comment Module** you might use this code:

    {exp:comment:entries}
      {comment}
      <p>By {name} on {comment_date format="%Y %m %d"}</p>
    {/exp:comment:entries}

NOTE: **Note:** Occasionally Template Tags can be used as single tags. In those cases they work like single variables. Refer to the documentation of each add-on to learn about how it is used.

## Parameters

Many ExpressionEngine tags and variables can accept parameters. Parameters are used to change how the tag or variable behaves. They look just like HTML parameters, with a name and a value:

    {exp:channel:entries channel="news" limit="5"}
      <h1>{title}</h1>
    {/exp:channel:entries}

## Comment Tags

Comments can be added to your templates using the syntax below. Comments are removed from the template before it is shown:

    {!-- This is a comment --}

## Single Variables

Single Variables will output a single piece of content. Some variables are intended to be used within Template Tags (as in the examples above), others are available globally wherever you would like to put them in your templates.

For example, to show the username of the logged-in user you would use:

    {logged_in_username}

## Variable Pairs

Variable pairs expose several single variables between them to allow for more granular access to the data than their single variable counterparts:

    {news_image}
        File name: {file_name}
        File extension: {extension}
        Url: {url}
    {/news_image}

## Conditionals

Conditionals allow you to show or hide information based on the criteria you set. Here is a simple example that shows a message if a user named Bob is logged in:

    {if logged_in_username == "Bob"}Hi Bob{/if}

## Embedded Templates

A Template often represents an entire page of your site. However, you can also use Templates inside of other Templates in order to re-use page components. A good use for an **embedded** template would be a header or footer. Here's the basic syntax:

    {embed="template_group/template"}

## Layouts

In addition to embedding templates within each other, you can also create shared layouts for your templates. This is a more advanced concept explained in the [Layouts](templates/layouts.md) page.

You can wrap a template in a layout to reuse wrapping code between several templates:

    {layout="template_group/template"}

## Common Tasks

### Modifying Variables

Most Single Variables can be modified by applying... a modifier!

    <meta name="description" content="{seo_descrip:attr_safe limit='150'}">

_More Information:_ [Variable Modifiers](templates/variable-modifiers.md)

### Creating Links

All regular HTML links will work. The paths to ExpressionEngine pages can be created with the `{path=` tag:

    <a href="{path="template_group/template"}">Great template</a>

_More Information:_ [Paths](templates/globals/path.md)

### Formatting Dates

ExpressionEngine stores dates as unix timestamps (seconds since 1970). The format parameter is used to to create flexible date output:

    {current_time format="%F %d %Y"} {!-- March 22 2014 --}

_More Information:_ [Date Formatting](templates/date-variable-formatting.md)

### Accessing the URL

The `{segment_#}` variables allow you to access the different parts of the current ExpressionEngine URL:

    {segment_1} {!-- usually the template group --}
    {segment_2} {!-- usually the template name --}

The `{current_url}` and `{current_path}` variables give you access to the full url and the path (all segments), respectively:

    {current_url} {!-- https://example.com/something/great --}
    {current_path} {!-- /something/great --}

_More Information:_ [URL Segments](templates/globals/url-segments.md)

### Adding CSS and JavaScript

Your external assets can be linked to as you normally would. They do not themselves need to be templates:

    <link rel="stylesheet" href="/styles/main.css" type="text/css" />
    <script src="/js/main.js"></script>

If you do want to keep your CSS in a template, you can use the `{stylesheet=` tag to let ExpressionEngine attempt to optimize how it serves the template:

    <link rel="stylesheet" href="{stylesheet='group/template'}" type="text/css" />

_More Information:_ [Linking to Stylesheets](templates/globals/stylesheet.md)

## Templates are Saved as Text Files

ExpressionEngine, by default, saves Template Groups, Templates, Global Variable, and Template Partials as regular folders and files on your server, so that you can use your preferred text editor (e.g. Atom, VSCode, Coda, BBEdit, etc.) to edit Templates and then FTP the changes to the server.

You will find your templates at the following location on your server: `system > user > templates`

These are the naming rules that ExpressionEngine applies to these resources:

- Template Group folder names must end with _.group_ and the preceding name must be URL safe (contain only letters, numbers, dashes, underscores and dots).
- Template Files must be in an appropriately named group folder. They must end with an approved extension and must be URL safe. Approved extensions and the associated template type they will result in are:
  - _.html_ creates a 'webpage' template type
  - _.feed_ creates an 'rss' template type
  - _.css_ creates a 'css' template type
  - _.js_ creates a 'js' template type
  - _.xml_ creates an 'xml' template type
- Template group names (not including the .group) and template names (not including the .extension) are limited to 50 characters. Anything longer than that will be truncated by the database and fail to match the file.

You can save templates in the database using this [system configuration override](general/system-configuration-overrides.md#save_tmpl_files).
