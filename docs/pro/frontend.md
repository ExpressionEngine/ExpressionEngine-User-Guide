<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Front-end content management

For admin members with appropriate level of access ExpressionEngine Pro adds "quick edit" links on the site's frontend that allow editing contents of each entry field individually, directly on front-end without going to the control panel.

Clicking the link opens a popup with the field that can be modified and saved; as well it presents the link to edit full entry with live preview showing the current page you are on.

The links are being placed in yout HTML right before the field's tag (or opening tag if fild tag pair is used).

## Disabling the link

There are several ways to disable front-end editing links:
 - globally with [configuration override](pro/configuration.md#disable_frontedit)
 - they can be switched off using the toggle in the Dock
 - can be disabled using HTML comments or field parameter

### Disabling link in the template

There are two ways to completely prevent field edit link to be displayed in template.

#### HTML Comment

Anything content wrapped in `<!-- disable frontedit --> ... <!-- //disable frontedit -->` HTML comment will not have edit links in it.

    <h1><!-- disable frontedit -->{title}<!-- //disable frontedit --></h1>

NOTE: **Hint:** If you need to disable front-end edit on large number of templates completely, you can wrap these comments around layout template.

#### Field tag parameter
Use `disable="frontedit"` parameter on field tag to disable link for a certain field.

    {page_content disable="frontedit"}

### Customizing the link

The edit link for the field can be placed manually using **front_edit_link** tag if you need to have it in different section of template, custom styled - or you can even place edit link for field that is currently not on the page.

#### `{front_edit_link}`

When set to `y`, completely disables front-end editing while keeping Dock visible and Prolets functional.

| Parameter  | Description |
| ---------- | ----------- |
| entry_id   | ID of entry to edit. Required. |
| field_name | Short name of field to edit. Required, unless `field_id` is specified. |
| field_id   | ID of field to edit. Required, unless `field_name` is specified. |
| class      | Extra CSS class to apply to link HTML. |

Example usage:

    <h1>
        <!-- disable frontedit -->{title}<!-- //disable frontedit -->
        {front_edit_link entry_id="{entry_id}" field_name="title"}
    </h1>

    {page_content disable="frontedit"}
    {front_edit_link entry_id="{entry_id}" field_name="page_content" class="extra-styles"}
