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

# Email Library Extension Hooks

## `email_send(&$data)`

| Parameter | Type      | Description                                                                                                                                                                                     |
| --------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| &\$data   | `Array`   | Array of data about email to be sent (see above) passed [by reference](https://php.net/manual/en/language.references.pass.php) so data may be altered without needing to return the altered data |
| Returns   | `Boolean` | `TRUE` if successfully sent, `FALSE` if not                                                                                                                                                     |

Modify email headers, recipients and body data, and optionally take over email sending completely.

How it's called:

```
    $ret = ee()->extensions->call(
        'email_send',
        array(
            'headers'       => &$this->_headers,     // Email headers array
            'header_str'    => &$this->_header_str,  // Header string
            'recipients'    => &$this->_recipients,  // Recipients string
            'cc_array'      => &$this->_cc_array,    // CC recipients, populated by Email::cc(), used by SMTP
            'bcc_array'     => &$this->_bcc_array,   // BCC recipients, populated by Email::bcc(), used by SMTP
            'subject'       => &$this->_subject,     // Email subject
            'finalbody'     => &$this->_finalbody    // Final email body text
        )
    );

    if (ee()->extensions->end_script === TRUE)
    {
        return $ret;
    }
```

NOTE: **Note:** If the extension decides to take over sending of the email, `end_script` should be set to `TRUE`, and `_spool_email` will return the extension's return value, preferably a boolean indicating success or failure
