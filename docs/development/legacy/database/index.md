<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Database Driver

ExpressionEngine comes with a full-featured and very fast abstracted database driver that supports both traditional structures and Active Record patterns. The database functions offer clear, simple syntax.

## Whole-word Regular Expressions

Use `ee()->db->word_boundary_regex()` when building a database `REGEXP` query that should match a term as a whole word:

```
$term = ee()->db->word_boundary_regex('cat');
$sql = 'field_id_1 REGEXP "' . ee()->db->escape_str($term) . '"';
```

This helper returns a pattern that is compatible with the active database. MySQL 8.0.4 and newer use ICU regular expressions and require different word-boundary handling than older MySQL versions and MariaDB, which use the legacy Spencer regular-expression markers.
