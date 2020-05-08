<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# The Big Picture

[TOC]

## Channels

ExpressionEngine stores your content inside _Channels_. A channel is simply a container that holds information. This information might be the text of an article or blog post, or it could be an image, or some other type of information. Channel information exists independently from the pages your visitors see.

TIP: **Important Concept:** A channel is just data. There is no assumed association between this data and any particular page of your site.

In your control panel, Channels are managed and configured in the [Channel Manager](control-panel/channels.md). ExpressionEngine supports a wide variety of [Field Types](fieldtypes/overview.md), so that the information in each of your channels can be stored appropriately for that data type.

For example, you might need a "staff" page with employee biographies. To manage this you could create a channel with fields for the name, biography, an image, and any other relevant info.

Content is added to a channel by clicking the **Edit** button in the main control panel navigation.

![](_images/the-big-picture-channels.png)

## Templates

In ExpressionEngine, a page (or a page component such as a header or footer) is called a _Template_.

The simplest way to think of a Template is as a container that represents a single page of your site. As such, a Template may contain anything that a webpage might contain: HTML, JavaScript, etc. A Template can also be a smaller component of your page. Through the use of the [Embed Tag](templates/embedding.md) you can insert a Template into another Template. This allows you to reuse components such as headers or footers.

In addition to HTML and other markup, Templates will usually contain ExpressionEngine Tags. These Tags allow you to pull data from your channels (or from any other module, plugin, or add-on) and display it in a template.

Templates are organized into Template Groups. A Template Group is analogous to a folder on your server.

![](_images/the-big-picture-templates.png)

## URL Structure

In ExpressionEngine, a URL will always contain the following structure, which allows a Template Group and a specific Template to be shown:

    http://example.com/template_group/template

Read [URL Structure](general/url-structure.md) for an in-depth look at URLs.

## Summary

- A Channel consists of "information"--your articles, comments, preferences, and other related "data."
- A Template represents a single page or a smaller section of your site.
- A Template Group contains a collection of Templates.
- ExpressionEngine Tags permit you to show data from a Channel, or any other Module or add-on, in your Templates.

TIP: **Tip:** Check out our [10 Minute Primer](getting-started/ten-minute-primer.md) to get you started fast.
