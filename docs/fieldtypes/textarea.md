<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Textarea Fieldtype

The Textarea is a simple free-form writing space where you can enter text or HTML.

![textarea field](_images/field_textarea.png)

[TOC=2]

## Field Settings

### Textarea Row Height

Height of the editor in rows of text.

### Text Formatting

Specifies how the entered-text will be formatted when rendered on the front-end. Choices include replacing each linebreak with a `BR` tag, automatically surrounding paragraphs with `P` tags, or Markdown processing. [Additional plugins](development/text-formatting.md) may be installed to provide more text formatting options.

### Allow Override?

When set to yes, authors can override the default text formatting for this field from the publish form to set it to a format other than what was selected as the default above.

### Text Direction

Either left-to-right, or right-to-left.

### Field Tools

Show formatting buttons to make writing markup easier, show a smiley chooser, or show a file chooser button to easily insert images or links to files.

## Parsing File Tags

The Textarea fieldtype supports the use of file tags in the format `{file:XX:field}` where `XX` is the file ID and `field` is any field associated with that file, such as `url`, `filename`, `title`, etc.

When the content of a Textarea field is parsed for display, these tags will be replaced with the corresponding values from the file model.

For example, if you have a file with ID `5`, and you want to insert its URL into the Textarea content, you would use the tag `{file:5:url}`. When the content is rendered, this tag will be replaced with the actual URL of the file.

The supported fields for file tags include:
- `url`: The absolute URL to the file.
- `file_name`: The name of the file.
- `title`: The title of the file.
- `description`: The description of the file.
- `file_size`: The size of the file in bytes.
- `width`: The width of the file in pixels.
- `height`: The height of the file in pixels.
- `mime_type`: The MIME type of the file.
- `location`: Where the photo was taken
- `credits`: Photo credits
