---
lang: ee
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Template Language

[TOC]

ExpressionEngine has its own template language which allows you to retrieve and display information dynamically.

[Twig](https://twig.symfony.com/) and [Blade](https://laravel.com/docs/11.x/blade) templating engines are available when using the [Coilpack package](https://github.com/ExpressionEngine/Coilpack) on the [Laravel Framework](https://laravel.com/).

## Single Variables

Single Variables output a single piece of content. Some variables are intended to be used within Template Tags (as in the examples below), others are available globally wherever you would like to put them in your templates.

For example, to show the username of the logged-in user, you would use:

    {logged_in_username}

## Variable Pairs

Variable pairs expose several single variables between them to allow for more granular access to the data than their single variable counterparts:

    {news_image}
        File name: {file_name}
        File extension: {extension}
        Url: {url}
    {/news_image}

### Module and Plugin Tags

To retrieve and show the information contained in your Modules and Add-Ons you will use the `{exp:` tag. They most frequently come in pairs that loop over rows of content. The template chunk between them will be repeated for each row they represent, and the variables between them will be replaced with the values of each row of content. Here is what a typical template tag looks like:

    {exp:channel:entries}
      <h1>{title}</h1>
      <p>{author}</p>
    {/exp:channel:entries}

The above code tells your ExpressionEngine template to retrieve data from the *channel entries module*.

### Nested Plugins

It is possible to nest plugins in order for content to be affected by more than one plugin. For example, you can do this:

    {exp:word_limit total="35"}
        {exp:xml_encode}
            some content
        {/exp:xml_encode}
    {/exp:word_limit}

By default, ExpressionEngine will process the innermost plugin first, then the next plugin, and so on until all the plugins wrapping a given piece of content have been parsed. In the above example, the content is XML Encoded first and then the result of that is limited to 35 words.

## Parameters

Many ExpressionEngine tags and variables can accept parameters. Parameters are used to pass information on how the tag or variable behaves. They look just like HTML parameters, with a name and a value:

    {exp:channel:entries channel="news" limit="5"}
      <h1>{title}</h1>
    {/exp:channel:entries}

## Modifiers

Most template variables can be modified for common formatting and output needs without requiring any plugins. For instance, making user-submitted content safe for use in a `<meta>` tag attribute, limiting to a certain number of characters, displaying currency, or as JSON to create structured data for SEO.

Here's a modifier which gets the length of a string:

    {excerpt:length}
    {!-- Outputs: 217 --}

A full list of the available modifiers [can be found here](templates/variable-modifiers.md).

## Embedded Templates

A Template often represents an entire page of your site. However, you can also use Templates inside of other Templates in order to re-use page components. A good use for an **embedded** template would be a header or footer. Here's the basic syntax:

    {embed="template_group/template"}

*More Information:* [Template Embeds](templates/embedding.md)

## Template Layouts

In addition to embedding templates within each other, you can also create shared layouts for your templates. This is a more advanced concept explained in the [Layouts](templates/layouts.md) page.

You can wrap a template in a layout to reuse wrapping code between several templates:

    {layout="template_group/template"}

*More Information:* [Template Layouts](templates/layouts.md)

## Comments

Anything inside of a comment tag, including other template tags, will be ignored by the template. Comments are never shown when a template is displayed.

    {!--  Show the next blog post if it exists.  --}

## Conditionals

Conditionals allow you to add logic to your templates:

    {if logged_in}Welcome back.{/if}

    {if (age + 5) == 100}Five years to go!{/if}

    {if age == 30 AND username == 'Bob'}Welcome back, Bob. 30 is the new 20.{/if}
      You are 30!
    {if:elseif username == 'Bob'}
      You are Bob!
    {if:else}
      You're not 30 or Bob. That's all we know.
    {/if}

*More information:* [Conditional Tags](templates/conditionals.md)   

TIP: **{ee:u}** Read the [Primer On Simple Conditionals](https://u.expressionengine.com/article/a-primer-on-simple-conditionals) article on ExpressionEngine University to learn more about using conditionals in ExpressionEngine.

## Changing Parsing Order

You may change the parsing order of plugins and instruct ExpressionEngine to parse an outer plugin first. This is done by adding a parse="inward" parameter to the plugin opening tag. Using that parameter will tell EE to parse that plugin before parsing any plugins inside of it:

    parse="inward"

### Examples

Here are some examples to help illustrate the parsing order.:

    {exp:rss_parser url="https://ellislab.com/blog/rss-feed" limit="5" parse="inward"}
        {feed_items}
            <a href="{item_link}">{item_title}</a><br />
            {exp:word_limit total="20"}
                {content}
            {/exp:word_limit}<br />
        {/feed_items}
    {/exp:rss_parser}

With the above, the RSS plugin will be parsed first. This will allow the content of the {content} variable to be available to the other, nested plugin: "word_limit".

Here is a much more complicated example that demonstrates both parsing orders in action.:

    {exp:rss_parser url="https://ellislab.com/blog/rss-feed" limit="5" parse="inward"}
        <ul>
        {feed_items}
            <li><a href="{item_link}">{item_title}</a><br />
                    {exp:word_limit total="35"}
                        {exp:xml_encode}
                            {content}
                        {/exp:xml_encode}
                    {/exp:word_limit}
                </li>
        {/feed_items}
        </ul>
    {/exp:rss_parser}

The outer RSS plugin has the parameter set to parse inward, so it is parsed first. This makes the {content} variable's content available to the other plugins. Next, is the "word_limit" plugin. However, since by default EE parses plugins outward, the "xml_encode" plugin is parsed first and then "word_limit" after it. In this way, "word_limit" will never erase the closing tag for the "xml_encode" plugin.
