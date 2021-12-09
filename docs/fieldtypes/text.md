<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Text Input Fieldtype

Text Input is a single-lined free-form writing space where you can enter text or HTML.

![textarea field](_images/field_text.png)

## Field Options

### Maximum Characters

The maximum number of characters this field should allow.

### Text Formatting

Specifies how the entered-text will be formatted when rendered on the front-end. Choices include replacing each linebreak with a `BR` tag, automatically surrounding paragraphs with `P` tags, or Markdown processing. [Additional plugins](development/plugins.md) may be installed to provide more text formatting options.

### Allow Override?

When set to yes, authors can override the default text formatting for this field from the publish form to set it to a format other than what was selected as the default above.

### Text Direction

Either left-to-right, or right-to-left.

### Allowed Content

Restricts the text field to certain data types, while also informing how the data should be sorted on the front-end (numbers represented as text will sort differently than regular numbers).

### Field Tools

Show a smiley chooser, or show a file chooser button to easily insert images or links to files.
