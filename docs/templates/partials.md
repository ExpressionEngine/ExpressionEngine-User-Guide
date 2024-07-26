<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Template Partials

[TOC]

Template partials are small bits of reusable template or tag parts. You could create a Template partial for any number of purposes, anywhere that you need to reuse a small portion of a template, including partial or complete tags, other variables, etc. Template partials add flexibility and reusability, while making it simple to make site-wide changes by editing the Template partial's source instead of having to modify many templates.

One idea would be to hold a particular [date format string](templates/date-variable-formatting.md) that you wish to reuse over and over. By making it a Template partial you can change it in one place and immediately see the effects everywhere that you've used it. For example, you could create a Template partial named `my_date_formatting` with a value of `format="%m-%d-%Y"` and use it in any date variable thusly:

    {entry_date {my_date_formatting}}

It will be instantly expanded before your template is parsed, just as if you had put the expanded text into the template itself:

    {entry_date format="%m-%d-%Y"}

You can create and edit Template partials at `Developer --> Templates --> Template Partials`.

NOTE: **Note:** Template partials may not be nested inside other Template partials.

## Template Partial vs. Template Variable

Template partials are expanded at an early stage in each template, which makes it possible for them to hold and control dynamic content, ExpressionEngine tags, other variables, PHP, etc. (Read more about [the rendering stages of the template engine](templates/engine.md).) They shine most when you need to reuse dynamic information but don't need the extra overhead of access control or separate preferences of an embedded template. 

[Template variables](templates/variable.md) are the polar opposites, expanded during the final rendering stages of the template engine, and they should be used for static text, HTML, JavaScript, and other static content that would not affect other tags and variables in the template.

## Template Partial vs. Embedded Template

Template partials behave as a natural part of the template that calls them, with their expanded contents inserted early and parsed simultaneously to other tags and variables in that template. They interact fully with the logic and data in the calling template.

[Embedded templates](templates/embedding.md) are more like sub-templates, with their own preferences (caching, PHP parsing, access, etc.). Embedded templates are processed individually after most of the calling template's parsing has happened. Put another way, embedded templates are not _included_ in the parent template, but rather _added to them_ after the parent template is mostly built, using a separate set of queries and using full page-parsing resources for each embedded template.

## Multiple Site Manager

TIP: **Tip:** If you are using the Multiple Site Manager, you'll notice that you have a new preference when editing each Template partial: make it available to all your MSM sites or this site only. To easily identify the difference when reading your templates, consider prefixing your Template partial names with the site's short name or, for Template partials available to all sites, _global_:

    {packettide_date_formatting}

    {expressionengine_date_formatting}

    {global_date_formatting}
