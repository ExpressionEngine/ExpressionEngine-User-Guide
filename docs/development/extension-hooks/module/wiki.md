---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Wiki Module Extension Hooks

[TOC=2]

## `wiki_start($this)`

| Parameter | Type     | Description                                   |
| --------- | -------- | --------------------------------------------- |
| \$this    | `Object` | The current Wiki class object                 |
| Returns   | `String` | Modified page template (`$this->return_data`) |

Allows page template to be modified prior to article processing

How it's called:

    $this->return_data = ee()->extensions->universal_call('wiki_start', $this);
    if (ee()->extensions->end_script === TRUE) return;

## `wiki_article_start($this, $title, $query)`

| Parameter | Type     | Description                        |
| --------- | -------- | ---------------------------------- |
| \$this    | `Object` | The current Wiki class object      |
| \$title   | `String` | The title of the requested article |
| \$query   | `Object` | The query object for the article   |
| Returns   | `Void`   |                                    |

Additional processing/takeover of wiki article display.

How it's called:

    ee()->extensions->universal_call('wiki_article_start', $this, $title, $query);
    if (ee()->extensions->end_script === TRUE) return;

## `wiki_article_end($this, $query)`

| Parameter | Type     | Description                                     |
| --------- | -------- | ----------------------------------------------- |
| \$this    | `Object` | The current Wiki class object                   |
| \$query   | `Object` | The query object for the article                |
| Returns   | `String` | Modified article display (`$this->return_data`) |

Allows takeover of wiki article display.

How it's called:

    $this->return_data = ee()->extensions->universal_call('wiki_article_end', $this, $query);
    if (ee()->extensions->end_script === TRUE) return;

## `wiki_special_page($this, $topic)`

| Parameter | Type     | Description                                        |
| --------- | -------- | -------------------------------------------------- |
| \$this    | `Object` | The current Wiki class object                      |
| \$topic   | `String` | The requested topic (e.g. categories, files, etc.) |
| Returns   | `Void`   |                                                    |

Allows complete takeover of special pages.

How it's called:

    ee()->extensions->universal_call('wiki_special_page', $this, $topic);
    if (ee()->extensions->end_script === TRUE) return;

## `edit_wiki_article_end($this, $query)`

| Parameter | Type     | Description                      |
| --------- | -------- | -------------------------------- |
| \$this    | `Object` | The current Wiki class object    |
| \$query   | `Object` | The query object for the article |
| Returns   | `Void`   |                                  |

Add more things to do for wiki articles.

How it's called:

    $edata = ee()->extensions->universal_call('edit_wiki_article_end', $this, $query);
    if (ee()->extensions->end_script === TRUE) return;

## `edit_wiki_article_form_start($this, $title, $query)`

| Parameter | Type     | Description                              |
| --------- | -------- | ---------------------------------------- |
| \$this    | `Object` | The current Wiki class object            |
| \$title   | `String` | The title of the article                 |
| \$query   | `Object` | The query object for the requested title |
| Returns   | `Void`   |                                          |

Additional processing/complete takeover of the wiki article edit form.

How it's called:

    ee()->extensions->universal_call('edit_wiki_article_form_start', $this, $title, $query);
    if (ee()->extensions->end_script === TRUE) return;

## `edit_wiki_article_form_end($this, $query)`

| Parameter | Type     | Description                               |
| --------- | -------- | ----------------------------------------- |
| \$this    | `Object` | The current Wiki class object             |
| \$query   | `Object` | The query object for the article          |
| Returns   | `String` | Modified edit page (`$this->return_data`) |

Allows edit page to be modified.

How it's called:

    $this->return_data = ee()->extensions->universal_call('edit_wiki_article_form_end', $this, $query);
    if (ee()->extensions->end_script === TRUE) return;
