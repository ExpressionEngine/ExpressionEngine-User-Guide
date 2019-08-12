<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Documentation Style Guide

[TOC]

This page explains how to write and structure documentation pages, for those who contribute to the ExpressionEngine user guide.

The user guide source files are written in Markdown.

## Creating New Pages

New doc page names should be lowercase, and delimiter separated by a hyphen: `my-new-page.md`.

New pages must be added to the [toc file](#_tocyml).

All doc pages must have the following attribution at the top of the file:

```md
<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->
```

If a page has front matter, then the attribution must be directly below it.

### `_toc.yml`

The toc file is what is responsible for the organization of the sidebar table of contents.

To add a page to the TOC, specify the link name and path:

```yml
- name: My Page Title
  href: path-to/my-page.md
```

You can also add sub items to a page:

```yml
- name: Category
  items:
    - name: Sub Page
      href: path-to/sub-page.md
```

**Note:** it's discouraged for a toc item to link to a page, and also have sub items.

It's encouraged to use a simplified title for toc items (not the pages themselves) instead of the full title of the page. For example instead of "Channel Entries Tag" just use "Entries Tag". Since the "Entries Tag" page is in the Channels category, it's unnecessary to put "Channels" in the sub page toc titles.

## Page Structure

- h1 = Page Title
- h2 = Page Section
- h3 = Method name, parameter/variable, or sub-section title.

Each page should begin with a heading (h1), followed by (at minimum) an introductory paragraph.

Each major page section should be titled with an h2 heading.

h3 headings are reserved for smaller page sections, parameter names, function names, or EE tag titles.

### Code Headings

When documenting a method, variable, parameter, etc. in a heading, use inline code (surround it with backticks):

```md
### `my_method($foo)`

### `{some_variable}`
```

### Depth

We discourage deep nesting of content. The documentation is generally a flat structure.

## Page TOCs

The `[TOC]` tag allows a table of contents to be automatically generated from h2 headings, or it can be set to create TOCs from other heading levels. Tocs will show headings below it until it encounters a heading that is higher up in level. For example, if a toc is set to display h3 headings, it will display all h3s until it reaches an h2. Toc tags must be at the beginning of a line to be valid.

For example, to generate a TOC from h3 headings and be hidden by default (with a "show" button visible) you would use:

    [TOC=3 hide]

You can also create a range of heading levels to display by using a dash. This example will display any heading that is an h2, h3, or h4:

	[TOC=2-4]

## Doc Links

Any link that is not a URL, mailto:, or anchor will be interpreted as an absolute path from the `docs` folder.

When linking to another page in the docs, specify the full path to the file from the root of the `docs` folder, with no leading slash:

```md
[Page Link](section/page.md)
[Another Link](channel/entries.md)
```

### Linking to parts of a page

You can link to a heading in a page by making the heading lowercase and replacing spaces with dashes (`-`). Be mindful of duplicate headings, and that most other characters will also be removed from headings, excluding underscores (`_`). When in doubt, just click on the heading you would like to link to in the docs and copy the anchor from the url bar of your browser.

```md
[Link to This Page](#page-heading)
[Link to Another Page](section/page.md#another-page-heading)
```

### Images

When linking to an image, specify its full path from the root of the `docs` folder:

```md
![My Image](_images/image1.png)
```

## Message Boxes

Message boxes are used for highlighting useful or important pieces of information to the reader. They can contain inline markdown, and should always start with a bold one word title such as: **Tip:**, **Note:**, **Warning:**, or **Danger:**.

To create a message box, use the syntax:

```md
TIP: **Tip:** This is a tip on how to create a tip!
```

Any content will be displayed in the box until a newline.

There are three different types of message boxes available for use:

### Tips

Tips are for any helpful information that is not imperatively important to the reader.

TIP: **Tip:** Hi! This is a tip. I contain handy information!

To create a tip, use `TIP:` at the beginning of the line.

### Notes

Notes are for important information that needs to be called out.

NOTE: **Important:** Make sure you do the thing before doing the other thing!

To create a note, use `NOTE:` at the beginning of the line.

### Warnings

Warnings should only be used when there's something extremely important the reader should know.

WARN: **Danger:** There are thumb-tacks on the floor. Walk with shoes on!

To create a warning, use `WARN:` at the beginning of the line.

## Code Highlighting

Code blocks are automatically highlighted unless specified.

To specify a specific language for a code block, use the tilde syntax with the language on the same starting line:

    ```html
		<code block>
    ```

To code highlight ExpressionEngine tags and html, use `ee` as the code language:

	```ee
	{!-- This is some ExpressionEngine code! --}

	{exp:channel:entries channel="news" orderby="date" sort="desc" limit="1"}
		<h1>{title}</h1>
	{/exp:channel:entries}
	```

You can also define a global code language for the file using the front matter `lang` option at the top of a file:

```yml
---
lang: ee
---
```

## Parameter and Variable Documentation

A tag should have all its parameters and variables documented. Parameters and variables should have a toc at the beginning of each list. Headings should use [inline code](#code-headings).

### Parameters

### `return=`

    return='site/foo'

Specify a path to redirect the user to after submission. If not specified, they will be returned to the current page. Unused for Ajax-submitted forms.

### Variables

### `{count}`

Counts everything including itself.

    {count format='by numbers'}

## Method Documentation

Methods use tables to document there parameters and what they return. The parameter table should be immediately below the heading, and  always be use the same three head structure of: Parameter, Type, Description. Method headings should use [inline code](#code-headings).

### `some_method()`

| Parameter | Type     | Description                          |
| --------- | -------- | ------------------------------------ |
| \$item    | `String` | Item to check for                    |
| \$array   | `Array`  | Input array                          |
| Returns   | `Bool`   | FALSE on failure, TRUE if successful |

This function will perform some action. The `$array` array must contain `$item`.

#### Example Usage

```php
<?php

ee()->load->library('some_class');

$bar = array(
    'something'   => 'Here is this parameter!',
    'something_else'  => 42
);
```

## Tables

Tables are easy! They can contain inline markdown.

```md
| Preference   | Default | Options                       |
| ------------ | ------- | ----------------------------- |
| `local_time` | time()  | None                          |
| `start_day`  | sunday  | sunday, monday, tuesday, etc. |
```

Renders as:

| Preference   | Default | Options                         |
| ------------ | ------- | ------------------------------- |
| `local_time` | time()  | None                            |
| `start_day`  | sunday  | sunday, monday, tuesday, _etc._ |
