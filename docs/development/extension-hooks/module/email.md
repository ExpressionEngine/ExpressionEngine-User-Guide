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

# Email Module Extension Hooks

[TOC=2]

## `email_module_send_email_end($subject, $message, $approved_tos, $approved_recipients)`

| Parameter             | Type     | Description                                        |
| --------------------- | -------- | -------------------------------------------------- |
| \$subject             | `String` | Sanitized and parsed subject of the email          |
| \$message             | `String` | Sanitized and parsed body of the email             |
| \$approved_tos        | `Array`  | Email addresses in the form's "to" field           |
| \$approved_recipients | `Array`  | Email addresses specified in the tag as recipients |
| Returns               | `Void`   |                                                    |

After emails are sent, do some additional processing.

How it's called:

    ee()->extensions->call('email_module_send_email_end', $subject, $message, $approved_tos, $approved_recipients);
    if (ee()->extensions->end_script === TRUE) return;

## `email_module_tellafriend_override($qstring, $this)`

| Parameter | Type     | Description                                             |
| --------- | -------- | ------------------------------------------------------- |
| \$qstring | `String` | Query string without comments or pagination information |
| \$this    | `Object` | Email object                                            |
| Returns   | `String` | Rendered tagdata                                        |

Allow use of Tell-A-Friend for things besides channel entries.

How it's called:

    $tagdata = ee()->extensions->call('email_module_tellafriend_override', $qstring, $this);
    if (ee()->extensions->end_script === TRUE) return $tagdata;
