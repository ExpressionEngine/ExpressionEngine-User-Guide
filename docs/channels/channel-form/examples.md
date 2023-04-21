<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Channel Form Examples

[TOC]

## Basic Example

    {exp:channel:form channel="contact_form" return="contact/thanks" }
       <input name="title" type="text">
       <input name="my_custom_field" type="text">
       <input type="submit" value="Submit">
    {/exp:channel:form}

## More Complex Example

    {exp:channel:form channel="channel_name" return="channel_name/edit/ENTRY_ID" entry_id="{segment_3}"}

        <label for="title">Title</label>
        <input type="text" name="title" id="title" value="{title}" size="50" maxlength="100" onkeyup="liveUrlTitle(event);">

        <label for="url_title">URL Title</label>
        <input type="text" name="url_title" id="url_title" value="{url_title}" maxlength="75" size="50">

        <select name="my_field_name" id="my_field_name">
            {options:my_field_name}
                <option value="{option_value}"{selected}>{option_name}</option>
            {/options:my_field_name}
        </select>

        {status_menu}
            <label for="status">Status</label>
            <select name="status" id="status">
                {select_options}
            </select>
        {/status_menu}

        <label for="entry_date">Date</label>
        <input type="text" name="entry_date" id="entry_date" value="{entry_date}" maxlength="23" size="25">

        <label for="expiration_date">Expiration Date</label>
        <input type="text" name="expiration_date" id="expiration_date" value="{expiration_date}" maxlength="23" size="25">

        <label for="comment_expiration_date">Comment Expiration Date</label>
        <input type="text" name="comment_expiration_date" id="comment_expiration_date" value="{comment_expiration_date}" maxlength="23" size="25">

        <label class="checkbox"><input type="checkbox" name="sticky" value="y"  {sticky}> Make Entry Sticky</label>
        <label class="checkbox"><input type="checkbox" name="allow_comments" value="y" {allow_comments}> Allow Comments</label>

        {category_menu}
            <label for="categories">Categories</label>
            <select name="category[]" id="categories" size="4" multiple="multiple">
                {select_options}
            </select>
        {/category_menu}

        {if captcha}
            <label for="captcha">Please enter the word you see in the image below:</label>
            {captcha}
            <input type="text" name="captcha" value="{captcha_word}" maxlength="20">
        {/if}

        <input type="submit" name="submit" value="Submit">
    {/exp:channel:form}

## Entry Form using the {custom_fields} loop

    {exp:channel:form channel="channel_name" return="channel_name/edit/ENTRY_ID" entry_id="{segment_3}"}

        <label for="title">Title</label>
        <input type="text" name="title" id="title" value="{title}" size="50" maxlength="100" onkeyup="liveUrlTitle(event);">

        <label for="url_title">URL Title</label>
        <input type="text" name="url_title" id="url_title" value="{url_title}" maxlength="75" size="50">

        {custom_fields}
            <label for="{field_name}">{if required}* {/if}{field_label}</label>
            {field_instructions}

            {if error}
              <p class="error">{error}</p>
            {/if}


            {if text}
              <input type="text" dir="{text_direction}" id="{field_name}" name="{field_name}" value="{field_data}" maxlength="{maxlength}" size="50">
            {/if}

            {if grid}
              {display_field}
            {/if}

            {if multiselect}
              <select id="{field_name}" name="{field_name}[]" multiple="multiple">
                {options}
                  <option value="{option_value}"{selected}>{option_name}</option>
                {/options}
              </select>
          {/if}

        {/custom_fields}


        <input type="submit" name="submit" value="Submit">
    {/exp:channel:form}

## Entry Form using the {field:...} tag and inline errors

    {exp:channel:form channel="products" return="form_template/ENTRY_ID" entry_id="{segment_2}" error_handling="inline"}

        {if global_errors:count > 0 OR field_errors:count > 0}
            <ul class="errors">
                {global_errors}
                <li>{error}</li>
                {/global_errors}
                {field_errors}
                <li>{error}</li>
                {/field_errors}
            </ul>
        {/if}

        <label for="title">Title</label><div class="error">{error:my_field_name}</div>
        <input type="text" name="title" id="title" value="{title}" size="50" maxlength="100" onkeyup="liveUrlTitle(event);">

        <label for="url_title">URL Title</label><div class="error">{error:my_field_name}</div>
        <input type="text" name="url_title" id="url_title" value="{url_title}" maxlength="75" size="50">

        <label for="entry_date">Date</label>
        <input type="text" name="entry_date" id="entry_date" value="{entry_date}" maxlength="23" size="25">

        <label for="my_field_name">Your Custom Field (Text field)</label><div class="error">{error:my_field_name}</div>
        {field:my_field_name}

        <label for="my_field_name">Your Custom Field (Checkbox field)</label><div class="error">{error:my_field_name}</div>
        {field:my_field_name}

        <label for="my_field_name">Your Custom Field (Grid field)</label><div class="error">{error:my_field_name}</div>
        {field:my_field_name}

        <label for="my_field_name">Your 3rd Party WYSIWYG Field</label><div class="error">{error:my_field_name}</div>
        {field:my_field_name}

        <input type="submit" name="submit" value="Submit">
    {/exp:channel:form}

## Entry Form using manually constructed fields

Note the date fields will have the calendar JavaScript automatically applied unless `include_assets="no"`.

    {exp:channel:form channel="products" return="form_template/ENTRY_ID" entry_id="{segment_2}"}
        <label for="title">Title</label>
        <input type="text" name="title" id="title" value="{title}" size="50" maxlength="100" onkeyup="liveUrlTitle(event);">

        <label for="url_title">URL Title</label>
        <input type="text" name="url_title" id="url_title" value="{url_title}" maxlength="75" size="50">

        <label for="entry_date">Date</label>
        <input type="text" name="entry_date" id="entry_date" value="{entry_date}" maxlength="23" size="25">

        <label for="my_field_name">Your Custom Field (Date field)</label>
        <input type="text" id="my_field_name" name="my_field_name" value="{my_field_name}" size="50">

        <label for="my_field_name">Your Custom Field (Text field)</label>
        <input type="text" name="my_field_name" id="my_field_name" value="{my_field_name}">

        <label for="my_field_name">Your Custom Field (Textarea field)</label>
        <textarea name="my_field_name" id="my_field_name" cols="90" rows="10">{my_field_name}</textarea>

        <label for="my_field_name">Your Custom Field (Select field)</label>
        <select name="my_field_name">
            {options:my_field_name}
                <option value="{option_value}"{selected}>{option_name}</option>
            {/options:my_field_name}
        </select>

        <label for="my_field_name">Your Custom Field (Multi-Select field)</label>
        <select name="my_field_name[]">
            {options:my_field_name}
                <option value="{option_value}"{selected}>{option_name}</option>
            {/options:my_field_name}
        </select>

        <label for="my_field_name">Your Custom Field (Checkbox field)</label>
        {options:my_field_name}
            <input type="checkbox" name="my_field_name[]" value="{option_value}" {checked}>  {option_name}</br>
        {/options:my_field_name}

        <label for="my_field_name">Your Custom Field (Radio field)</label>
        {options:my_field_name}
            <input type="radio" name="my_field_name" value="{option_value}" {checked}>  {option_name}</br>
        {/options:my_field_name}

        <input type="submit" name="submit" value="Submit">
    {/exp:channel:form}

## Entry Forms using manually constructed file field

In this example, the file directory is hard coded and the form is not editable, as there is no way to replace an existing field's data when editing an existing entry.

    {exp:channel:form channel="products" return="form_template/ENTRY_ID"}
        <label for="title">Title</label>
        <input type="text" name="title" id="title" value="{title}" size="50" maxlength="100" onkeyup="liveUrlTitle(event);">

        {a_file}File name: {file_name}{/a_file}

        <input type="file" name="my_field_name" />
        <input type="hidden" name="my_field_name_directory" value="1" />

        <input type="submit" name="submit" value="Submit">
    {/exp:channel:form}

    {exp:channel:form channel="products" return="form_template/ENTRY_ID"}
        <label for="title">Title</label>
        <input type="text" name="title" id="title" value="{title}" size="50" maxlength="100" onkeyup="liveUrlTitle(event);">

        <input type="file" name="my_field_name" />
        <input type="hidden" name="my_field_name_directory" value="1" />
        <input type="hidden" name="my_field_name_hidden_file" value="{my_field_name}{file_name}{/my_field_name}" />

        <input type="submit" name="submit" value="Submit">
    {/exp:channel:form}

## AJAX-driven Entry Form

    <html>
        <head>
            <!--using jQuery https://jquery.com/-->
            <script src="/themes/ee/asset/javascript/compressed/jquery/jquery.js" type="text/javascript"></script>			

            <!--using the jQuery Form plugin https://jquery.malsup.com/form/-->
            <script src="/js/jquery.form.js" type="text/javascript"></script>

            <script type="text/javascript">
                $(document).ready(function(){
                    $('#publishForm').ajaxForm({
                        dataType: 'json',
                        success: function(data) {
                            if (data.success) {
                                alert('You successfully added a new entry with entry_id '+data.entry_id)
                            } else {
                                alert('Failed with the following errors: '+data.errors.join(', '));
                            }
                        }
                    });
                });
            </script>
        </head>
        <body>
            {exp:channel:form channel="products" return="form_template/ENTRY_ID" entry_id="{segment_2}" json="yes"}
                <label for="title">Title</label>
                <input type="text" name="title" id="title" value="{title}" size="50" maxlength="100" onkeyup="liveUrlTitle(event);">

                <label for="url_title">URL Title</label>
                <input type="text" name="url_title" id="url_title" value="{url_title}" maxlength="75" size="50">

                <label for="entry_date">Date</label>
                <input type="text" name="entry_date" id="entry_date" value="{entry_date}" maxlength="23" size="25">

                <input type="submit" name="submit" value="Submit">
            {/exp:channel:form}
        </body>
    </html>
