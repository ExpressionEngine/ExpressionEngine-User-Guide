<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Extension Hooks

[TOC]

## pro_variables_post_save

**mcp.pro_variables.php** — Use this hook to perform extra processing after the values of the variables are saved, like clearing the cache. It doesn’t need to return anything. Afterwards, the user is redirected to the same page.

### Arguments

- `$var_ids` _(array)_ — variable ids of the variables that were saved.
- `$skipped` _(array)_ — variable ids of the variables that were submitted but not saved.

```
    $this->EE->extensions->call('pro_variables_post_save', array_keys($vars), $skipped);
```

## pro_variables_delete

**mcp.pro_variables.php** — Use this hook to perform extra processing just before variables are deleted.

### Arguments

- `$var_ids` _(array)_ — variable ids of the variables that are about to be deleted.

```
    $this->EE->extensions->call('pro_variables_delete', $var_ids);
```