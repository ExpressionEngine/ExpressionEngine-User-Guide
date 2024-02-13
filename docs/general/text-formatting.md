<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Text Formatting

[TOC]

ExpressionEngine has a number of text formatting options that enable you to control how text is rendered within your channel entries and comments.

While editing entries, these options can be found in the PUBLISH tab. When available, you'll see a menu below each entry field with this option. You can also configure your Comment Preferences so that any comments will be formatted this way.

## Auto XHTML

The purpose of the _Auto XHTML_ option is to make your content semantically and typographically correct. This feature does the following:

- Double Line Breaks are wrapped in paragraph tags: `<p>*content..*</p>`
- Single Line Breaks are turned into `<br />` tags.
- Double quotes are converted to curly double quotes: `"this"` becomes `“this”`
- Single quotes are converted to curly single quotes: `Joe's` becomes `Joe’s`
- Double dashes are converted to em-dashes: `This -- text` becomes `this—text`.
- Three periods are converted to ellipsis: `This...` becomes `this…`

In addition, the Auto XHTML feature intelligently handles text containing block level elements, like `<div>`, `<blockquote>`, etc. so that they are not wrapped in paragraph tags. Further, elements within `<pre>` tags are exempt from the paragraph conversion.

NOTE: **Note:** By default, all entries and comments are assigned to this formatting option.

## Markdown

The _Markdown_ option parses all of your content through [a Markdown parser](https://michelf.ca/projects/php-markdown/extra/) and [a SmartyPants parser](https://michelf.ca/projects/php-smartypants/)—the parser follows [Jon Gruber's implementation of Markdown](https://daringfireball.net/projects/markdown/) for the most part, but adds a few things as well. SmartyPants transforms normal quotes into curly quotes, consecutive dashes into en (`--` into –) and em (`---` into `—`) dashes, and three consecutive periods into an ellipsis (`...` into `…`).

NOTE: **Note:** To use the Markdown option, the Markdown Add-on must be installed.

## Auto BR

This Auto BR feature simply converts each line break into an HTML `<br />` tag.

This feature can be found in the PUBLISH page of the Control Panel. You'll see a menu below each entry field with this option. You can also configure your Comment Preferences so that any comments will be formatted this way.

## None

ExpressionEngine will use your text exactly as you have entered it. This includes disabling [BBCode](general/bbcode.md).
