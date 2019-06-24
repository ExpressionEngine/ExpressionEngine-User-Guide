<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# URL Structure

[TOC]

## Overview

As described in [The Big Picture](getting-started/the-big-picture.md) a Template represents a page at your site. It can also represent a page component, like a header, but that's a [more advanced concept](templates/embedding.md) which we don't need to cover here.

Templates are organized into Template Groups. A Template Group is analogous to a folder on your server. Templates can be created and edited in the `Developer -> Templates` area of your Control Panel.

In ExpressionEngine, a URL will always contain the following structure, which allows a Template Group and a specific Template to be shown:

    http://example.com/template_group/template

For example: If your site had an "archives" Template within a "blog" Template Group you would access it using this:

    http://example.com/blog/archives

## The Concept

The goal was to make the URLs produced by ExpressionEngine search-engine friendly by making the URL structure mimic a traditional _static_ site. In order to accomplish this, the use of query strings was eliminated from the URLs.

Many dynamic publishing systems use query strings. That is, URLs that look like this:

    http://example.com?id=2&page=1

Notice the question mark and ampersand? Those are part of a "query string". These enable dynamic systems to fetch and display specific information. Query strings, however, are disliked by search engines, and they are not human-friendly, so they have been eliminated in ExpressionEngine.

Instead, its URLs are segment driven, like this:

    http://example.com/shoes/sneakers

Again, the first segment represents a Template Group. The second segment represents a Template.

## Viewing your Site

Because you don't actually have physical pages on your site, the URL you use will determine what you see. At its simplest, you access pages on your site using this URL formula:

    http://example.com/template_group/template

Notice that the Template Group and Template are contained in the URL. An Example: Let's say you create a Template Group called "about", and within it you create a Template called "me". To access it you will use the following URL:

    http://example.com/about/me

## Index Template

If you only specify the Template Group in the URL (and leave off a Template name), EE assumes you want to show the "index" template for that group:

    http://example.com/about/

The above URL is identical to doing this:

    http://example.com/about/index

A Template Group will always have an `index` Template, which is shown when there is no Template specifically named in the second segment. This can be a useful way to you organize your site.

For example, let's say you are building a small site that needs four pages (home, services, about, and contact). You could create four Template Groups, each representing one of the four pages, and use the `index` template to contain the HTML markup and dynamic content:

    http://example.com/home
    http://example.com/services
    http://example.com/about
    http://example.com/contact

## Additional Segments

You'll often have URLs on your site that point to a specific channel entry, category, or other things. For instance, you might have a URL like this:

    https://example.com/blog/comments/147

This URL tells ExpressionEngine to display the channel entry number 147 using the "comments" Template in the "blog" Template Group. ExpressionEngine intelligently knows what to display.

You can also use a "URL Title" to indicate a specific entry instead of the entry number. URL Titles are specified when you create an entry. So, the URL might be:

    http://example.com/blog/comments/my_url_title

Again, "blog" is the Template Group, "comments" is the Template, and now "my_url_title" is the URL Title for the entry to be displayed. Similarly, you might display a single category in your archives:

    http://example.com/blog/archives/C13

Here, the URL indicates to display the category with the Category ID of "13" using the "archives" Template in the "blog" Template Group.

## Query Strings

Some web servers — typically Windows-based servers — still have difficulty with the default ExpressionEngine setup that doesn't use query strings. In cases like this, you can tell the system to **Force URL Query Strings** under `Settings --> Debugging & Output`.

With this option enabled, the URLs output by ExpressionEngine are slightly different, but still far more readable and search engine-friendly than a typical dynamic system might output. With **Force URL Query Strings** turned on, an ExpressionEngine URL might look like this:

    http://example.com?/site/archives

You'll notice that it is almost identical to the regular setting, only with the addition of the question mark.

In a select few cases, turning on **Force URL Query Strings** by itself won't be enough. If URLs continue to not work even with that setting on, then open system/user/config/config.php and set:

    $config['uri_protocol'] = 'QUERY_STRING';
