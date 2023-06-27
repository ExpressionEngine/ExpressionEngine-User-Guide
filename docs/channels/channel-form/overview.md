<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Channel Form Tag

[TOC]

The Channel Form makes it possible to add and edit channel entries from outside of the Control Panel, using a form inside a template.

### Channel Form Features

- Allows guest (logged out) users to use the entry form, with optional CAPTCHA support.
- Edit existing entries, and only edit the fields you need. Fields not in your form will be left intact.
- Adds or edits entries based on the presence of an entry_id and/or url_title.
- Allows use of the entry_id or url_title in your return URL, so that you may redirect to the entry that was just created. Useful for multi-page forms.
- Specify a default status, or set forms to override default statuses.
- Specify different return URLs for different member primary roles by the group_id. Send visitors to one page, and admins to another.
- Server-side validation.
- Handles AJAX requests and can output responses in JSON.

## Basic Usage

TIP: Please visit the [Examples](channels/channel-form/examples.md) page to see a variety of implementations.

The first thing you will need is a `{exp:channel:form}` tag pair, along with a few [parameters](#parameters) to determine where to submit the entry:

    {exp:channel:form channel="news"}
      <input name="title" type="text">
      <input type="submit" value="Submit">
    {/exp:channel:form}

### Including Assets

If you plan on using the formatting buttons or the [Grid](fieldtypes/grid.md), [Relationships](fieldtypes/relationships.md), [Rich Text Editor](add-ons/rte.md), Date, or File fieldtypes, include a link to the Channel Form stylesheet in your template:

    <link href="{path='css/_ee_channel_form_css'}" type="text/css" rel="stylesheet" media="screen">

The Channel Form tag will automatically load jQuery for you. If you prefer to include your own version of jQuery, use the [include_jquery=](#include_jquery) parameter.

### Allowing Guests to Post Entries

Allowing guest posts is controlled in the Channel Form settings at `Developer --> Channels` in the channel's **Settings** tab.

To allow guests to post in a certain channel, locate the options for "Allow Guest Posts" next to the channel you want to allow guest posts for, and choose "Yes".

You can optionally require the guest to pass a captcha before they submit the Channel Form by choosing "Yes" under "Guest Captcha".

Finally, you can optionally choose an author that entries entered as guests appear as authored by under Guest Author.

### Form Validation

By default, validation errors will be displayed using the User Message Template. If you prefer, you can also use [inline error handling](#error_handling) to display form validation errors in the context of your form.

## Parameters

[TOC=3 hide]

{{embed:_tips/form-attributes.md}}

The Following parameters are available for the `{exp:channel:form}`:

### `allow_comments=`

    allow_comments="yes"

Force the allow comments value for the submitted entry, for both new entries and edits. If set, form fields will not affect the entry's allow comments setting. In addition to the channel entry allow comments setting, the Channel's `channel_prefs_allow_comments` preference must also be set to yes in order to allow comments on any entries in that channel.

### `author_only=`

    author_only="yes"

Only allow the author of the entry to edit the entry. Defaults to "no".

### `category=`

    category="7|13"

If you don't wish to include the form option on the page then you can set any categories that you wish to assign the entry to via this parameter. Specify the category by Category ID. You may specify multiple categories by separating the Category ID with the pipe character:

    category="3|7|13|42"

This parameter only applies to new entries and will be ignored for edits.

### `channel=`

    channel="news"

The short name of the channel. This is a **required** parameter.

### `class=`

    class="channel_form"

Specify the CSS class.

### `datepicker=`

    datepicker="no"

Adds the datepicker to your date fields. Defaults to "yes".

NOTE: **Note:** If you are manually constructing a date field, in order to apply the date picker you must include `rel="date-picker"`.

### `dynamic_title=`

    dynamic_title="[your_custom_field] Submission"

Dynamically set the title of your entry based on your entry's data. Use brackets \[ \] instead of the standard curly braces.

### `entry_id=`

    entry_id="{segment_3}"

The entry_id of the channel entry you wish to edit. If both this and url_title are empty, the entry form will add a new entry.

### `error_handling=`

    error_handling="inline"

Choose to display error messages inline (see [Error Messages](#errormy_field_name)). By default, errors are displayed with the user message template.

### `id=`

    id="channel_form"

Specify the CSS id.

NOTE: **Note:** By default, the channel form will have an id of 'cform'. If using the native CSS for styling, some field types require that id specification to work properly.

### `include_assets=`

    include_assets="no"

Adds necessary Javascript and CSS to your form. If you do not require the Javascript functionality or reset CSS, set to "no". Defaults to "yes".

### `include_css=`

    include_css="no"

Allows you to manage the inclusion of required CSS independently from the `include_assets` parameter. Defaults to "yes".

### `include_jquery=`

    include_jquery="no"

Includes jQuery automatically. Defaults to "yes".

NOTE: **Note:** If you are using your own copy of jQuery you will need to load it **before** the form.

### `json=`

    json="yes"

Output your results in JSON format, instead of performing a redirect.

### `logged_out_member_id=`

    logged_out_member_id="3"

In order to allow logged out users to use the entry form, you must specify a member_id which will be used as the author of the entry.

### `require_entry=`

    require_entry="yes"

Require an entry to edit via the entry_id or url_title parameters. Disables new entries. Defaults to "no".

### `return=`

    return="site/ENTRY_ID"

Specify a path to redirect the user to after an entry submission. You may use the constants ENTRY_ID and URL_TITLE, which will be replaced with the entry's entry_id or url_title, respectively. This is a **required** parameter.

### `return_X=`

    return_X="site/thanks"

Specify a path to redirect the user to after an entry submission, based on the user's primary role. Replace X with the role_id of the member role.

### `rules:my_field_name=`

    rules:my_field_name="required|min_length[5]"

Add additional validation rules to your fields. Separate multiple rules with the pipe | character. You may use any of these rules: (required, matches, min_length, max_length, exact_length, alpha, alpha_numeric, alpha_dash, numeric, integer, is_natural, is_natural_no_zero, valid_ee_date, valid_email, valid_emails, valid_ip, valid_base64).

### `secure_action=`

    secure_action="yes"

Forces the form to use https as its action.. Defaults to "no".

### `secure_return=`

    secure_return="yes"

Force the form to return to https. Defaults to "no".

### `site=`

    site="your_site_name"

Specify the site short name of another site on your MSM installation to add/edit entries for that site.

### `show_fields=`

    show_fields="body|extended"

Specify which entry fields to display in the custom field loop, by specifying a pipe separated list of field short names.:

    show_fields="body|extended|full_image"

You may exclude fields by placing the word "not" in front of the list:

    show_fields="not image_thumbnail|source|rating"

### `unique_url_title=`

    unique_url_title="yes"

When set to "yes", will ensure the URL title of the entry will be unique so there is no risk of creating an entry with a duplicate URL title.

### `url_title=`

    url_title="{segment_3}"

The url_title of the channel entry you wish to edit. If both this and entry_id are empty, the entry form will add a new entry.

### `use_live_url=`

    use_live_url="no"

This will disable the url_title from being created automatically based on the title. Use this when you've opted to disable channel_form_assets. Defaults to yes.

## Variables

[TOC=3 hide]

### Custom Field Single Tag

    {my_field_name}

Display a custom field's data

### Custom Field Tag Pair

    {my_field_name}{/my_field_name}

Display a custom field's data using the Fieldtype API's replace_tag method. Useful for fieldtypes with complex data, such as a grid field.

### `{field:my_field_name}`

Display a custom field using the Fieldtype API's display_field method. Useful for fieldtypes that use complex markup, for instance a relationship fieldtype.

### `{error:my_field_name}`

If you have chosen [inline error handling](#error_handling), you can display the error for the specified field. You may also use this syntax for non-custom fields, like title and url_title.

### `{label:my_field_name}`

Display a custom field's label.

### `{instructions:my_field_name}`

Display a custom field's instructions.

### `{selected_option:my_field_name}`

In an edit form, display the selected option for the specified custom field.

### `{selected_option:my_field_name:label}`

In an edit form, display the label of the selected option for the specified custom field.

### `{options:my_field_name}`

    <select name="my_field_name">
      {options:my_field_name}
        <option value="{option_value}"{selected}>{option_name}</option>
      {/options:my_field_name}
    </select>

If using a field with options, such as Checkboxes or Dropdown, you can display the options in a loop, to give you more control over the markup. You have the four following sub-variables: {option_value}, {option_name}, {selected} and {checked}.

### custom_fields

    {custom_fields}
      <label for="{field_name}">{if required}* {/if}{field_label}</label>
      {field_instructions}

      {if error}
        <p class="error">{error}</p>
      {/if}

      {if textarea}
        <textarea id="{field_name}" name="{field_name}" dir="{text_direction}" rows="{rows}">{field_data}</textarea>
      {/if}

      {if rte}
        {display_field}
      {/if}

      {if text}
        <input type="text" dir="{text_direction}" id="{field_name}" name="{field_name}" value="{field_data}" maxlength="{maxlength}" size="50">
      {/if}

      {if select}
        <select id="{field_name}" name="{field_name}">
          {options}<option value="{option_value}"{selected}>{option_name}</option>{/options}
        </select>
      {/if}

      {if date}
        <input type="text" id="{field_name}" name="{field_name}" value="{field_data}" size="50">
      {/if}

      {if checkbox}
        {options}
          <label class="checkbox">{option_value}
            <input type="checkbox" id="{field_name}" name="{field_name}[]" value="{option_value}"{checked}>
          </label>
        {/options}
      {/if}

      {if radio}
        {options}
          <label class="checkbox">{option_value}
            <input type="radio" id="{field_name}" name="{field_name}" value="{option_value}"{checked}>
          </label>
        {/options}
      {/if}

      {if file}
        {display_field}
      {/if}

      {if relationships}
        {if allow_multiple}
          <ul style="list-style: none">
            {options}
            <li>
              <input type="text" name="{field_name}[sort][]" value="{option_order}" style="width: 25px">
              <label class="checkbox">
              <input type="checkbox" name="{field_name}[data][]" value="{option_value}"{checked}> {option_name}
              </label>
            </li>
            {/options}
          </ul>
        {if:else}
            <select id="{field_name}" name="{field_name}[data][]">
            {options}
              <option value="{option_value}"{selected}>{option_name}</option>
            {/options}
            </select>
        {/if}
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

The template parsing for the custom_fields loop is weak, and we know it. To get it to work we recommend removing fieldtype conditionals for fieldtypes that are not installed or are not applicable to the selected channel.

Loop through the custom fields for the selected channel. Use conditionals based on the field type to control the display of your custom fields. To simply print out the field, you can use {display_field} within your field type conditional. The extension settings page contains a list of your fieldtypes and their short names for reference.

Within this loop, you have the following single variables:

    {field_name}
    {field_label}
    {field_id}
    {error}
    {field_instructions}
    {display_field} - Displays the field as it appears in the CP (using the fieldtype API display_field method)
    {text_direction}
    {rows} - For textareas
    {field_data} - If used in an edit form, the custom field data for that entry.
    {maxlength} - For text inputs

You also have the options tag pair for fields with options:

    {options}
      <option value="{option_value}"{selected}>{option_name}</option>
    {/options}

And the following conditionals:

    {if required} {/if}
    {if your_field_type} {/if}
    {if error} {/if}

### `{captcha}`

    {if captcha}
      <label for="captcha">Please enter the word you see in the image below:</label>
      {captcha}
      <input type="text" name="captcha" value="{captcha_word}" maxlength="20">
    {/if}

### `{channel_form_assets}`

Many custom fields require additional css and/or javascript. This additional markup is automatically added to the end of your form, unless you use this variable to display it elsewhere.

### `{global_errors}`

    {global_errors}{error}{/global_errors}

If you have chosen [inline error handling](#error_handling), you can display global entry submission errors.

### `{global_errors:count}`

    {if global_errors:count}{/if}

If you have chosen [inline error handling](#error_handling), you can display the number global entry submission errors.

### `{field_errors}`

    {field_errors}{error}{/field_errors}

If you have chosen [inline error handling](#error_handling), you can display field-related entry submission errors.

### `{field_errors:count}`

    {if field_errors:count}{/if}

If you have chosen [inline error handling](#error_handling), you can display the number field-related entry submission errors.
