<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Form Inputs

Most Channel Fields are available to use via input fields, including:

### Title

Allows the title of an entry to be set. This is a **required** parameter:

    <label for="title">Title</label>
    <input type="text" name="title" id="title" value="{title}" size="50" maxlength="100" onkeyup="liveUrlTitle(event);">

### URL Title

Sets the URL title of the entry:

    <label for="url_title">URL Title</label>
    <input type="text" name="url_title" id="url_title" value="{url_title}" maxlength="75" size="50">

### Entry Date

Allows the date of an entry to be set:

    <p>Date <br> <input type="text" name="entry_date" value="{entry_date}" maxlength="23" size="25"></p>

In order for the datepicker to apply to the field, it must be enabled and you must include `rel="date-picker"`. In addition, for full compatibility with all available date formats, include the `data-timestamp="{entry_timestamp}"`.

Set the date of the entry and apply an enabled datepicker:

    <p>Date <br> <input type="text" name="entry_date" value="{entry_date}" maxlength="23" size="25" rel="date-picker" data-timestamp="{entry_timestamp}"></p>

NOTE: **Note:** All date formats should match what the user has defined in their localization settings. The date fields will automatically use that format and validate against it.

### Expiration Date

Allows the expiration date of an entry to be set:

    <p>Expiration Date <br>
      <input type="text" name="expiration_date" value="{expiration_date}" maxlength="23" size="25">
    </p>

Allows the expiration date of an entry to be set using the datepicker:

    <p>Expiration Date <br>
      <input type="text" name="expiration_date" value="{expiration_date}" maxlength="23" size="25" rel="date-picker" data-timestamp="{expiration_timestamp}">
    </p>

### Comment Expiration Date

Allows the comment expiration date of an entry to be set:

    <p>Comment Expiration Date <br>
    <input type="text" name="comment_expiration_date" value="{comment_expiration_date}" maxlength="23" size="25" />
    </p>

Allows the comment expiration date of an entry to be set using the datepicker:

    <p>Comment Expiration Date <br>
    <input type="text" name="comment_expiration_date" value="{comment_expiration_date}" maxlength="23" size="25" rel="date-picker" data-timestamp="{comment_expiration_timestamp}">
    </p>

### Make Entry Sticky

Set the entry as "sticky" or not:

    <p><input type="checkbox" name="sticky" value="y"  {sticky} /> Make Entry Sticky</p>
