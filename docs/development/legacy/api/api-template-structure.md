---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# ExpressionEngine Template Structure API

## Calling the Class

The Template Structure class is called with the `api->instantiate()` function:

    ee()->load->library('api'); ee()->legacy_api->instantiate('template_structure');

## Function Reference

**class `Api_template_structure`**

[TOC=3]

### `get_group_info($group_id)`

Get template group metadata.

| Parameter  | Type                             | Description                                        |
| ---------- | -------------------------------- | -------------------------------------------------- |
| \$group_id | `Int`                            | Integer of the template group                      |
| Returns    | `Database result object/Boolean` | Database result object or returns `FALSE` on error |

    ee()->api_template_structure->get_group_info((int) $group_id);

### `create_template_group($data[, $duplicate_group = FALSE])`

Creates a new template group.

| Parameter         | Type              | Description                                                                                |
| ----------------- | ----------------- | ------------------------------------------------------------------------------------------ |
| \$data            | `Array`           | Associative array of template group data must include `group_name`, can include keys below |
| \$duplicate_group | `Int`             | The `template_group` ID to duplicate                                                       |
| Returns           | `Integer/Boolean` | ID of newly created group or `FALSE` on error                                              |

    ee()->api_template_structure->create_template_group((array) $data, (int) $duplicate_group = FALSE)

Example Usage:

    $data = array(
        'group_name'        => 'home',
        'group_order'       => 2,     // Defaults to template_group count + 1
        'is_site_default'   => 'n',   // Defaults to 'n'
        'site_id'           => 1      // Defaults to config->item('site_id')
    );

    ee()->api_template_structure->create_template_group($data, 1);

### `file_extensions($template_type)`

Returns a file extension that corresponds to the template type.

| Parameter       | Type     | Description                                               |
| --------------- | -------- | --------------------------------------------------------- |
| \$template_type | `String` | Name of the template type                                 |
| Returns         | `String` | File extension if template type exists or an empty string |

    ee()->api_template_structure->file_extensions((str) $template_type);

Template Types:

- `webpage`
- `static`
- `feed`
- `css`
- `js`
- `xml`
