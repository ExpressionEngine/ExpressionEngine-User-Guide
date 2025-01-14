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

# Functions Library Extension Hooks

## `cache_clearing_end($which)`

| Parameter  | Type     | Description                                                        |
| ---------- | -------- | ------------------------------------------------------------------ |
| \$which    | `String` | Possible value: `all`, `page`, `db`, `tag`, `sql`                  |
| Returns    | `Void`   |                                                                    |

Called after the `clear_caching` function has been run.

How it's called:

    $result = ee()->extensions->call('cache_clearing_end', $which);

## `create_captcha_start($old_word)`

| Parameter  | Type     | Description                                                        |
| ---------- | -------- | ------------------------------------------------------------------ |
| \$old_word | `String` | Normally empty, but it will create a CAPTCHA with that word if set |
| Returns    | `Void`   |                                                                    |

Allows rewrite of how CAPTCHAs are created.

How it's called:

    $edata = ee()->extensions->call('create_captcha_start', $old_word);
    if (ee()->extensions->end_script === TRUE) return $edata;

## `form_declaration_modify_data($data)`

| Parameter | Type    | Description                                                |
| --------- | ------- | ---------------------------------------------------------- |
| \$data    | `Array` | Array of arguments sent to the `form_declaration()` method |
| Returns   | `Array` | Manipulated array to pass to `form_declaration()`          |

Modify the \$data parameters before they are processed by the user side form creator.

How it's called:

    $data = $this->extensions->call('form_declaration_modify_data', $data);

## `form_declaration_return($data)`

| Parameter | Type     | Description                                                              |
| --------- | -------- | ------------------------------------------------------------------------ |
| \$data    | `Array`  | Array of arguments sent to the function for creating the form tag        |
| Returns   | `String` | String containing the opening form tag, must set `end_script` to `FALSE` |

Take control of the form_declaration function to create form tags the way you want.

How it's called:

    $form = $this->extensions->call('form_declaration_return', $data);
    if ($this->extensions->end_script === TRUE) return $form;
