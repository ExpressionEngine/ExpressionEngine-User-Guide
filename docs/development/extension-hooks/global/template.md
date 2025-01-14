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

# Template Library Extension Hooks

## `template_fetch_template($row)`

| Parameter | Type    | Description                   |
| --------- | ------- | ----------------------------- |
| \$row     | `Array` | Data for the current template |
| Returns   | `Void`  |                               |

Access template data prior to template parsing.

How it's called:

    ee()->extensions->call('template_fetch_template', $row);

## `template_post_parse($final_template, $is_partial, $site_id, $currentTemplateInfo)`

| Parameter        | Type      | Description                                              |
| ---------------- | --------- | -------------------------------------------------------- |
| \$final_template | `String`  | The template string after template tags have been parsed |
| \$is_partial     | `Boolean` | `TRUE` if the current template is an embed or a layout   |
| \$site_id        | `String`  | Site ID of the current template                          |
| \$currentTemplateInfo        | `array`  | Identity data for template that has been parsed                          |
| Returns          | `String`  | The adjusted `$final_template`                           |

Modify template after tag parsing

How it's called:

    $this->final_template = ee()->extensions->call(
        'template_post_parse',
        $this->final_template,
        $is_partial,
        $site_id,
        $currentTemplateInfo
    );

NOTE: If `$is_partial` is true:
- $final_template contains the interim $template at that point in parsing;
- the identity of the partial template most recently processed is stored in $currentTemplateInfo;
- returning a modified version of $final_template updates the interim parsed template.

NOTE: **Note:** Before 2.8.0 `$is_partial` was called `$is_sub` and only applied to embeds.
