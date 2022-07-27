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

# Javascript Class

## Class Reference

**class `EE_Javascript`**

The library is loaded using the following code:

    ee()->load->library('javascript');

### `set_global($var[, $val = ''])`

| Parameter | Type     | Description                                          |
| --------- | -------- | ---------------------------------------------------- |
| \$var     | `String` | The variable name to add to the EE javascript object |
| \$val     | `String` | The value of the variable being added                |
| Returns   | `Void`   |                                                      |

Add a variable to the [EE javascript object](development/control-panel-js/globals.md). Useful if you need to dynamically set variables for your external script. Will intelligently resolve namespaces (i.e. `filemanager.filelist`) so please use them.

    ee()->javascript->set_global([
        'publish.foreignChars' => ee()->config->loadFile('foreign_chars')
    ]);

### `compile([$view_var = 'script_foot'[, $script_tags = TRUE]])`

| Parameter     | Type      | Description                                                             |
| ------------- | --------- | ----------------------------------------------------------------------- |
| \$view_var    | `String`  | The element to attach the foot to                                       |
| \$script_tags | `Boolean` | Set to `TRUE` to output the `<script>` tags, otherwise doesn't add them |
| Returns       | `Void`    |                                                                         |

Gather together all scripts needing to be output for the given `$view_var`.

### `get_global()`

| Parameter | Type     | Description                       |
| --------- | -------- | --------------------------------- |
| Returns   | `String` | The HTML markup containing our JS |

Prepares and returns the HTML+JS for injecting variables into the EE namespace.

### `script_foot()`

| Parameter | Type     | Description                            |
| --------- | -------- | -------------------------------------- |
| Returns   | `String` | The HTML markup containing our foot JS |

Prepares and returns the JS to be output in the foot.
