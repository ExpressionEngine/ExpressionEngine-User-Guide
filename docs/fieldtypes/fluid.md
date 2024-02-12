<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Fluid Fieldtype

[TOC]

A Fluid field is a collection of fields. A Fluid field can contain any native fieldtype except another Fluid field. The fields assigned to the Fluid field can then be used multiple times in the same entry when creating/editing the entry. The author also has control over the order of the fields.

Fluid fields give the author control over the structure of their content, while ensuring the final output uses the correct design elements. All that is done without the author worrying about markup or html. They simply add content to the fields, and template can wrap each field in the proper markup.

![fluid fields](_images/field_fluid.png)

## Field Settings

### Custom Fields

Select all fields that you want available in your fluid field on the publish page. All native fieldtypes except another fluid field are available.

### Custom field groups

Select custom field groups to make them available to fluid field on the publish page. All fields in group will be displayed together in the order set on field group page.

## Publish Page

### Add

Each fluid field has a list of buttons of available custom fields and custom field groups displayed below. Clicking on the button adds a field (or field group) to Fluid, maintaining all of the field's settings, instructions and requirements.

Also, each Fluid row has '+' button. Clicking on it shows a dropdown populated with the field names assigned to the fluid field. When you choose a field from the dropdown, it adds it to the page.

Fields (or field groups) can be used more than once and in any order. They can be re-ordered within the fluid field by dragging up or down.

The frontend will output the various field contents in the order specified in the entry.

NOTE: **Note:** Conditional fields are not supported inside Fluid

## Channel Form

A fluid field cannot be used in the channel form.

## Template Tags

Fluid field content is output using variable pairs. An outer variable pair using the Fluid field's shortname wraps all content. Within that wrapper variable pair, each field can be output using a prefixed variable pair and the `{content}` variable. Within the prefixed variable pair, the `{content}` variable is used in place of the field's shortname.

For example, if you have a Fluid field `fluid_content` with a text field `fluid_text` your template code may look like this:

    {fluid_content}

      {fluid_content:fluid_text}
        {content}
      {/fluid_content:fluid_text}

    {/fluid_content}

The prefixed tag pair is a looping tag pair. You can have more than one `fluid_text` field for the entry, it's entirely at the entry author's discretion. The author also determines the order of the field output.

Displaying field groups from within Fluid field is slightly different, as it requires additions `{fields}` tag pair.
So given that `blog` is the short name of custom field group and `fluid_header` and `fluid_text` are fields in that group, the template might look like:

    {fluid_content}

      {fluid_content:blog}
        {fields}
          {fluid_content:fluid_header}
            <h3>{content}</h3>
          {/fluid_content:fluid_header}
          {fluid_content:fluid_text}
            <div>{content}</div>
          {/fluid_content:fluid_text}
        {/fields}
      {/fluid_content:blog}

    {/fluid_content}

## Variables

TIP: **Tip:** When using any of these [tags with a parameter in a conditional](templates/conditionals.md#embedding-tags) you will have to wrap them in braces (`{}`), like so: `{if {fluid_content:first name="text_body"}}`

[TOC=3]

### `count`

    {fluid_content:count}

The "count" out of the current field being displayed. If five fields are being displayed, then for the fourth field the `count` variable would have a value of "4". The following parameters are available:

- **type=** Filters the fields by fieldtype
- **name=** Filters the fields by field name

### `current_field_name`

    {fluid_content:current_field_name}

The name of the current field being processed.

### `current_fieldtype`

    {fluid_content:current_fieldtype}

The type of the field currently being processed (`rte`, `grid`, `text`, `textarea`, etc).

### `first`

    {fluid_content:first}

True, if the current field is the first one. The following parameters are available:

- **type=** Filters the fields by fieldtype
- **name=** Filters the fields by field name

### `index`

    {fluid_content:index}

The index of the current field being displayed starting at 0. The following parameters are available:

- **type=** Filters the fields by fieldtype
- **name=** Filters the fields by field name

### `last`

    {fluid_content:last}

True, if the current field is the last one. The following parameters are available:

- **type=** Filters the fields by fieldtype
- **name=** Filters the fields by field name

### `next_field_name`

    {fluid_content:next_field_name}

The name of the next field. This will be blank when on the last field.

### `next_fieldtype`

    {fluid_content:next_fieldtype}

The type of the next field (`rte`, `grid`, `text`, `textarea`, etc). This will be blank when on the last field.

### `prev_field_name`

    {fluid_content:prev_field_name}

The name of the previous field. This will be blank when on the first field.

### `prev_fieldtype`

    {fluid_content:prev_fieldtype}

The type of the previous field (`rte`, `grid`, `text`, `textarea`, etc). This will be blank when on the first field.

### `this_field_name`

    {fluid_content:this_field_name}

Alias of `:current_field_name`.

### `this_fieldtype`

    {fluid_content:this_fieldtype}

Alias of `:current_fieldtype`.

### `total_fields`

    {fluid_content:total_fields}

The total number of fields regardless of tag output criteria.

Additionally, the following variable are available **when using custom field groups**:

### `count_in_group`

    {fluid_content:count_in_group}

The "count" out of the fields being displayed in a field group. If five fields are in a group, then for the fourth field the `count` variable would have a value of "4". 

### `first_in_group`

    {fluid_content:first_in_group}

True, if the current field is the first one in the current field group. 

### `index_in_group`

    {fluid_content:index_in_group}

The index of the field being displayed in the current field group starting at 0.

### `last_in_group`

    {fluid_content:last_in_group}

True, if the current field is the last one in the current field group.

### `first_group`

    {fluid_content:first_group}

True, if the current field group is the first one.

### `last_group`

    {fluid_content:last_group}

True, if the current field group is the last one.

### `current_group_name`

    {fluid_content:current_group_name}

The "human" name of the current field group being processed.

### `current_group_short_name`

    {fluid_content:current_group_short_name}

The short name of the current field group being processed (as used in the templates).

### `next_group_name`

    {fluid_content:next_group_name}

The "human" name of the next field group. This will be blank when on the last group.

### `next_group_short_name`

    {fluid_content:next_group_short_name}

The short name of the next field group. This will be blank when on the last group.

### `prev_group_name`

    {fluid_content:prev_group_name}

The "human" name of the previous field group. This will be blank when on the first group.

### `prev_group_short_name`

    {fluid_content:prev_group_short_name}

The short name of the previous field group. This will be blank when on the first group.

## Displaying a Pair variable

Fields that use a variable pair to output content work like they would outside of a Fluid field, with the the `{content}` variable taking the place of the field shortname.

In this example, the Fluid field has short name `news_content` with a file field `hero_image`. The template code to output a modified image would look like:

    {news_content}

      {news_content:hero_image}
        {content}
          <img src="{url:med}" height="{height:med}">
        {/content}
      {/news_content:hero_image}

    {/news_content}

## Displaying Multiple Fields

Fluid fields are most useful when multiple fields may be included in the presentation. For example, you want to give your client the flexibility to add content in a number of styles. There's a text field `{full_text}`, a grid field `{img_card}` to hold a varying number of small images with descriptive text, a relationship field `{featured_entry}` where they can set a featured article and an SEO `seo_group` **field group** containing multiple fields related to meta data.

A fluid field can handle the output of all of those fields, as many as they add, respecting the order they specify when publishing.:

```
{fluid_field}

  {fluid_field:full_text}
    <div class="text">
      {content}
    </div>
  {/fluid_field:full_text}

  {fluid_field:img_card}
    {content}
      <div class="card">
        <img src="{content:grid_image_column}">
        {content:grid_text_column}
      </div>
    {/content}
  {/fluid_field:img_card}

  {fluid_field:featured_entry}
    <div class="feature">
      {content status="open|Featured" }
        {if content:count == 1}Featured!{/if}
        {content:title}
        {content:hero_image}
          <img src="{url:med}">
        {/content:hero_image}
      {/content}
    </div>
  {/fluid_field:featured_entry}

  {fluid_field:seo_group}
    {fields}
      {fluid_field:seo_title}
        <title>{content}</title>
      {/fluid_field:seo_title}
      {fluid_field:seo_description}
        <meta name="description" content="{content}">
      {/fluid_field:seo_description}
    {/fields}
  {/fluid_field:seo_group}

{/fluid_field}
```

## Fluid Field Notes

- The `{if no_results}` tag is not valid within the prefixed variable pairs.
- Count variables available in some variable pairs (grid and relationship) restart at 1 each loop. So the total_results for a relationship tag pair would refer to the total number of relationships for that specific instance of the relationship field.
- All native fields aside from a Fluid field can be included in a Fluid field.

## Field Examples

### Checkbox and Multi Select Fields

For checkbox and multiselect single variables:

    {my_fluid_field}
      {my_fluid_field:my_checkbox}
        {content}
      {/my_fluid_field:my_checkbox}
    {/my_fluid_field}

This would output a comma-separated list of the checkbox labels.

For checkbox and multiselect variable pairs:

    {my_fluid_field}
      {my_fluid_field:my_checkbox}
        {content}
         Value: {item}<br>
         Value: {item:value}<br>
         Label: {item:label}<br>
       {/content}
      {/my_fluid_field:my_checkbox}
    {/my_fluid_field}

### Date Fields

    {my_fluid_field}
      {my_fluid_field:my_date}
        {content format="%F %d %Y"}
      {/my_fluid_field:my_date}
    {/my_fluid_field}

### Email Address Fields

    {my_fluid_field}
      {my_fluid_field:my_email}
        {content:mailto title="Email about their dog" subject="Question about your dog" encode="no"}
      {/my_fluid_field:my_email}
    {/my_fluid_field}

### File Fields

A file field variable pair:

    {my_fluid_field}
      {fluid_field:my_image}
        {content}
          Extension: {extension}
          Upload date: {upload_date format="%Y %m %d"}
          URL: {url}
          Custom med thumbnail url: {url:med}
        {/content}
      {/fluid_field:my_image}
    {/my_fluid_field}

Single variable file field:

    {my_fluid_field}
      {my_fluid_field:my_image}
        link: {content wrap="link"}
        URL: {content}
        URL 'med' image thumb: {content:med}
      {/my_fluid_field:my_image}
    {/my_fluid_field}

### Grid Fields

    {my_fluid_field}
      {my_fluid_field:my_grid}
        {content}
          {if content:count == 1}<h3>Grid total rows: {content:total_rows}{/if}
          Date field: {content:my_grid format="%Y %m"}
          Toggle: {if content:my_toggle}YES there is a toggle value!{/if}

          File field pair:
          {content:my_file}
            Upload date: {upload_date format="%Y %m %d"}
            Custom med thumbnail url: {url:med}
          {/content:my_file}

          Relationship field pair:
          {content:my_relationship}
            {if content:my_relationship:count == 1}<h3>Relationship {content:my_relationship:total_results}){/if}
            {content:my_relationship:title}<br>
          {/content:my_relationship}
        {/content}
      {/my_fluid_field:my_grid}
    {/my_fluid_field}

### Radio and Select Fields

Radio and single select fields use single variables:

    {my_fluid_field}
      {my_fluid_field:my_radio}
          Value = {content}
          {if content == 'no'}Nope!{/if}
        {/my_fluid_field:my_radio}
    {/my_fluid_field}

### Relationship Fields

    {my_fluid_field}
      {my_fluid_field:my_relationship}
        {content status="open"}
          {if content:count == 1}<h3>Relationships ({content:total_results})</h3>{/if}

          Related entry title: {content:title}
          Related entry file field, med custom image size: {content:my_file:med wrap="image"}

          Related field in the related child entry:
          {content:my_related_field_in_child_entry}
            {content:cmy_related_field_in_child_entry:title}
          {/content:my_related_field_in_child_entry}
        {/content}
      {/my_fluid_field:my_relationship}
    {/my_fluid_field}

### RTF Text and Textare Fields

    {my_fluid_field}
      {my_fluid_field:my_textarea}
        {content}
      {/my_fluid_field:my_textarea}
    {/my_fluid_field}

### Toggle Fields

    {my_fluid_field}
      {my_fluid_field:my_toggle}
        {if {content}}YES there is a toggle value!{/if}
      {/my_fluid_field:my_toggle}
    {/my_fluid_field}

### URL Fields

    {my_fluid_field}
      {my_fluid_field:my_url}
        <a href="{content}">Your Link</a>
      {/my_fluid_field:my_url}
    {/my_fluid_field}

## Field Group Examples

Field groups in fluid work exactly like fields do, with one extra tag pair ``{fields}...{/fields}`` required.

### Field Group with Date and Email fields

    {my_fluid_field}
	  {my_fluid_field:my_field_group}
	    {fields}

          {my_fluid_field:my_date}
            {content format="%F %d %Y"}
          {/my_fluid_field:my_date}

          {my_fluid_field:my_email}
            {content:mailto title="Email about their dog" subject="Question about your dog" encode="no"}
          {/my_fluid_field:my_email}

		{/fields}
      {/my_fluid_field:my_field_group}
    {/my_fluid_field}

Field Group with Text and Relationship fields

### Field Group with Text and Relationship fields

    {my_fluid_field}
	  {my_fluid_field:my_field_group}
	    {fields}

          {my_fluid_field:my_textarea}
            {content}
          {/my_fluid_field:my_textarea}

          {my_fluid_field:my_relationship}
            {content status="open"}
              {if content:count == 1}<h3>Relationships ({content:total_results})</h3>{/if}

              Related entry title: {content:title}
              Related entry file field, med custom image size: {content:my_file:med wrap="image"}

              Related field in the related child entry:
              {content:my_related_field_in_child_entry}
                {content:cmy_related_field_in_child_entry:title}
              {/content:my_related_field_in_child_entry}
            {/content}
          {/my_fluid_field:my_relationship}

	    {/fields}
	  {/my_fluid_field:my_field_group}
    {/my_fluid_field}
