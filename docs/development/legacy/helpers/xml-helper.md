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

# XML Helper

The XML Helper file contains functions that assist in working with XML data. This helper is loaded using the following code:

    ee()->load->helper('xml');

## Available Functions

### `xml_convert($str[, $protect_all = FALSE])`

| Parameter     | Type     | Description                                                                                                     |
| ------------- | -------- | --------------------------------------------------------------------------------------------------------------- |
| \$str         | `String` | the text string to convert                                                                                      |
| \$protect_all | `Bool`   | Whether to protect all content that looks like a potential entity instead of just numbered entities, e.g. &foo; |
| Returns       | `String` | XML-converted string                                                                                            |

Takes a string as input and converts the following reserved XML characters to entities:

- Ampersands: `&`
- Less than and greater than characters: `<` `>`
- Single and double quotes: `'` `"`
- Dashes: `-`

This function ignores ampersands if they are part of existing numbered character entities, e.g. `&#123;`. Example:

    $string = '<p>Here is a paragraph & an entity (&#123;).</p>';
    $string = xml_convert($string);
    echo $string;

outputs:

    &lt;p&gt;Here is a paragraph &amp; an entity (&#123;).&lt;/p&gt;
