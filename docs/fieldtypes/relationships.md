<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Relationships Fieldtype

[TOC]

Relationships are an extremely powerful tool that allows you to connect Entries in one Channel to those in another one, or even to other entries in the same channel. This ability allows you to store very complex content in your Channel entries.

This fieldtype is currently only limited to Channels.

![relationship field](_images/filed_relationships.png)

## Field Settings

#### Channels to Relate

Choose which channels related content can be pulled from. When using Multiple Sites Manager, you can select channels from any site.

#### Include in Selection

Allow expired or future entries in this relationships field.

#### Limit by Category

Choose categories to limit the entries in this relationships field.

#### Authors

Choose authors to limit the entries in this relationships field.

#### Limit By Status

Choose statuses to limit the entries in this relationships field.

#### Maximum Entries

Maximum number of entries to show in the relationship field. Leave blank to allow all entries.  All entries are still available to the search, this is simply a display setting.

#### Order By

Default ordering of entries in relationship field. Entries can be ordered by title or entry date.

#### Allow Multiple Relationships?

When set to yes, authors will be allowed to create multiple relationships in a single field.

#### Minimum selection
The minimum number of relationships that can be added to the field.

#### Maximum selection
The maximum number of relationships that can be added to the field.

#### Display Entry IDs?
When enabled, entry IDs will be displayed together with entry title inside the field.

#### Display Status?
When enabled, colored status badge will be displayed together with entry title inside the field.

#### Defer field initialization?
When enabled, this field won’t initialize until the Edit Relationships button is clicked on. This can result in faster control panel page load times.

## Field UI

From within the field, the entries can be selected to establish relationship.

The entries can be filtered using search input and, if necessary, channel dropdown. You can use entry titles, URL titles and IDs to search by.

If the editor has corresponding permissions, they will see "New Entry" button which allows creating new channel entry without leaving the edit screen of current entry. The can also edit related entry contents without leaving the page.

If enabled in the field settings, entry ID and status will be shown to make the selection easier.

The order of selected entries can be rearranged with drag&drop.

![Relationship Field UI](_images/ee73-relationship-status.png)

NOTE: **Note:** The described Relationship UI is only available when using Control Panel or [Pro Front-end Content Management](advanced-usage/front-end/frontend.md). If you need to use this field in [Channel Form](channels/channel-form/fields.md#relationship-field) then HTML Select input will be used.

## Template Tags

### Parameters

The following parameters are available to all looping relationship tags, allowing you to further filter or sort the entries being retrieved. They function the same as they do when used on the [{exp:channel:entries}](channels/entries.md#parameters). The available parameters are:

- `author_id`
- `backspace`
- `category`
- `channel`
- `entry_id`
- `group_id`
- `limit`
- `offset`
- `orderby`
- `show_expired`
- `show_future_entries`
- `show_offline_sites`
- `sort`
- `start_on`
- `status`
- `stop_before`
- `url_title`
- `username`

Some relationship tags may have additional parameters available. These are included in the usage instructions below.

NOTE: **NOTE:** The [`disable`](fieldtypes/relationships.md#optimizing-relationships-performance) parameter should be applied to the containing `{exp:channel:entries}` call, not to the relationship tag itself.

## Accessing Children

[TOC=3]

### Usage: Multiple Related Entries

Given the following channel layout:

    ParentChannel
      title
      url_title
      field1          Text
      field2          Text
      relationship_field    Relationship (ChildChannel, Multiple)


    ChildChannel
      title
      url_title
      field1          Text
      field2          Text

You would access the child entries in your template using the following syntax:

    {exp:channel:entries channel="parentChannel"}
      {title} - {field1} - {field2}
      {relationship_field}
        {relationship_field:title}
        {relationship_field:field1}
        {relationship_field:field2}
      {/relationship_field}
    {/exp:channel:entries}

The section of the template that belongs to the `relationship_field`:

    {relationship_field}
      {relationship_field:title}
      {relationship_field:field1}
      {relationship_field:field2}
    {/relationship_field}

Will be looped over. It acts very similarly to a `channel:entries` tag.

### Usage: Single Related Entries

Given the following channel layout, where `relationship_field` is limited to taking a single child entry:

    ParentChannel
      title
      url_title
      field1          Text
      field2          Text
      relationship_field    Relationship (ChildChannel, Single)


    ChildChannel
      title
      url_title
      field1          Text
      field2          Text

You would access the child entry in your template using the following syntax:

    {exp:channel:entries channel="parentChannel"}
      {title} - {field1} - {field2}
      {relationship_field:title}
      {relationship_field:field1}
      {relationship_field:field2}
    {/exp:channel:entries}

No looping occurs.

## Accessing Siblings

[TOC=3]

### Usage

Given the following channel layout:

    ParentChannel
      title
      url_title
      field1          Text
      field2          Text
      relationship_field    Relationship (ChildChannel, Multiple)


    ChildChannel
      title
      url_title
      field1          Text
      field2          Text

You can access siblings of the current entry in `{exp:channel:entries}` tag using the following syntax:

    {exp:channel:entries channel="childChannel"}
      {siblings field="relationship_field"}
        {siblings:title} - {siblings:field1} - {siblings:field2}
      {/siblings}
    {/exp:channel:entries}

The `{siblings}` tag does not need to be a top level tag. It may be used from a nested relationship in order to access that relationship's siblings. The syntax is:

    {exp:channel:entries channel="parentChannel"}
      {relationship_field}
        {relationship_field:siblings field="relationship_field"}
          {relationship_field:siblings:title}
        {/relationship_field:siblings}
      {/relationship_field}
    {/exp:channel:entries}

### Parameters

In addition to the standard parameters, the following parameter may be used in this tag:

- `field`

There can be multiple relationship fields in a field group, thus child entries may be related to the same parent via different fields. Use the `field` parameter to specify which field in the parent entry we should be pulling the siblings from. The syntax is:

    {siblings field="relationship_field"}

## Accessing Parents

[TOC=3]

### Usage

Given the following channel layout:

    ParentChannel
      title
      url_title
      field1          Text
      field2          Text
      relationship_field    Relationship (ChildChannel, Multiple)


    ChildChannel
      title
      url_title
      field1          Text
      field2          Text

You can access the parents of the current entry in a `channel:entries` tag using the following syntax:

    {exp:channel:entries channel="childChannel"}
      {parents field="relationship_field"}
        {parents:title} - {parents:field1} - {parents:field2}
      {/parents}
    {/exp:channel:entries}

The `{parents}` tag may be accessed through nested relationships tags using the following syntax:

    {exp:channel:entries channel="parentChannel"}
      {relationship_field}
        {relationship_field:parents field="relationship_field"}
          {relationship_field:parents:title}
        {/relationship_field:parents}
      {/relationship_field}
    {/exp:channel:entries}

### Parameters

In addition to the standard parameters, the following parameter may be used in this tag:

- `field`

There can be multiple relationship fields in a field group, and thus an entry may be selected as a child in multiple fields. Use the `field` parameter to specify which field in the parent entry we should be checking for our child. The syntax is:

    {parents field="relationship_field"}

## Fetching Entry IDs Only

[TOC=3]

Sometimes it's useful to get just a list of the entry IDs of related entries, to pass on to a plugin as a tag a parameter or similar. If you need to do this, you can use the single variable `:entry_ids` shortcut modifier:

    {relationship_field:entry_ids}

Outputs in the format:

    43|58|127

Note that this is not used inside a relationships tag pair, but is a standalone variable.

### Usage

For children:

    {relationship_field:entry_ids}

For parents:

    {parents:entry_ids}

    {!-- or --}

    {parents:entry_ids field="relationship_field"}

### Parameters

The _entry_ids_ shortcut tag has only one optional parameter:

- `delimiter`

By default the entry IDs will be pipe-delimited, but you can choose to have them delimited with something else:

    {relationship_field:entry_ids delimiter=","}

Would output in the format:

    43,48,127

## Optimizing Relationships Performance

If you are heavily using relationship fields, it is recommended that you disable certain features, such as custom fields or categories on related entries, to speed up template loading. That can be done by applying `disable` parameter to the `exp:channel:entries` tag that includes relationship field tag (or siblings / parents tag).

The following items can be turned off:

- `relationship_custom_fields`
- `relationship_categories`

Example:

    {exp:channel:entries channel="parentChannel" disable="relationship_custom_fields|relationship_categories"}
      {relationship_field}
          {relationship_field:title}
      {/relationship_field}
    {/exp:channel:entries}

## Namespacing Variables

Any variable available to the channel entries tag can be used inside a relationship tag pair. Use prefixes to specify which entry or set of entries the variable belongs to:

    {exp:channel:entries channel="childChannel"}

      {parents}

        {if parents:count == "1"}
          <h3>Parents</h3>
        {/if}

        {parents:title} - {parents:field1} - {parents:field2}

        {if parents:no_results}
          No parent entries
        {/if}

        {parents:switch="one|two"}

      {/parents}

    {/exp:channel:entries}

## Field Examples: Children

[TOC=3]

### Checkbox and Multi Select Fields

For checkbox and multiselect single variables:

    {relationship_field}
      {relationship_field:my_checkbox}
    {/relationship_field}

This would output a comma-separated list of the checkbox labels.

For checkbox and multiselect variable pairs:

    {relationship_field}
      {relationship_field:my_checkbox}
         Value: {item}<br>
         Value: {item:value}<br>
         Label: {item:label}<br>
      {/relationship_field:my_checkbox}
    {/relationship_field}


### Date Fields

    {relationship_field}
      {relationship_field:my_date format="%F %d %Y"}
    {/relationship_field}

### Email Address Fields

    {relationship_field}
        {relationship_field:my_email:mailto title="Email about their dog" subject="Question about your dog" encode="no"}
    {/relationship_field}

### File Fields

Single variable file field:

    {relationship_field}
      URL: {relationship_field:my_image}
    {/relationship_field}

A file field variable pair:

    {relationship_field}
      {relationship_field:my_image}
          Extension: {extension}
          Upload date: {upload_date format="%Y %m %d"}
          URL: {url}
          Custom med thumbnail url: {url:med}
      {/relationship_field:my_image}
    {/relationship_field}

### File Grid Fields

A file grid field variable pair:

     {relationship_field}
       {relationship_field:my_file_grid}
         {relationship_field:my_file_grid:my_image}
             Extension: {extension}
             Upload date: {upload_date format="%Y %m %d"}
             URL: {url}
             Custom med thumbnail url: {url:med}
         {/relationship_field:my_file_grid:my_image}
       {/relationship_field:my_file_grid}
     {/relationship_field}

### Fluid Fields

    {relationship_field}
      {relationship_field:my_fluid_field}
        {relationship_field:my_fluid_field:my_grid}
          {content}
            {if content:count == 1}<h3>Grid total rows: {content:total_rows}{/if}
            Date field: {content:my_grid format="%Y %m"}
            Toggle: {if content:my_toggle}YES there is a toggle value!{/if}

            File field pair:
            {content:my_file}
              Upload date: {upload_date format="%Y %m %d"}
              Custom med thumbnail url: {url:med}
            {/content:my_file}
          {/content}
        {/relationship_field:my_fluid_field:my_grid}
      {/relationship_field:my_fluid_field}
    {relationship_field}

### Grid Fields

     {relationship_field}
       {relationship_field:my_grid}
         {relationship_field:my_grid:my_image}
             Upload date: {upload_date format="%Y %m %d"}
             URL: {url}
         {/relationship_field:my_grid:my_image}
         Some text in the grid: {relationship_field:my_grid:my_text}
       {/relationship_field:my_grid}
     {/relationship_field}

### Relationship Fields

    {relationship_field}
      <h3>Related entry's title: {relationship_field:title}</h3>

      {relationship_field:my_relationship status="open"}
          {if relationship_field:my_relationship:count == 1}
              <h3>Relationships ({relationship_field:my_relationship:total_results})</h3>
          {/if}

          <h3>Related entry's related entry's title: {relationship_field:my_relationship:title}</h3>

          Related entry's file field, med custom image size: {relationship_field:my_relationship:my_file:med wrap="image"}

      {/relationship_field:my_relationship}
    {/relationship_field}

### Toggle Fields

    {relationship_field}
      {if relationship_field:my_toggle}YES there is a toggle value!{/if}
    {/relationship_field}

### URL Fields

    {relationship_field}
      <a href="{relationship_field:my_url}">Your Link</a>
    {/relationship_field}

## Field Examples: Parents

[TOC=3]

### Checkbox and Multi Select Fields

For checkbox and multiselect single variables:

    {parents field="relationship_field"}
      {parents:my_checkbox}
    {/parents}

This would output a comma-separated list of the checkbox labels.

For checkbox and multiselect variable pairs:

    {parents field="relationship_field"}
      {parents:my_checkbox}
         Value: {item}<br>
         Value: {item:value}<br>
         Label: {item:label}<br>
      {/parents:my_checkbox}
    {/parents}


### Date Fields

    {parents field="relationship_field"}
      {parents:my_date format="%F %d %Y"}
    {/parents}

### Email Address Fields

    {parents field="relationship_field"}
        {parents:my_email:mailto title="Email about their dog" subject="Question about your dog" encode="no"}
    {/parents}

### File Fields

Single variable file field:

    {parents field="relationship_field"}
      URL: {parents:my_image}
    {/parents}

A file field variable pair:

    {parents field="relationship_field"}
      {parents:my_image}
          Extension: {extension}
          Upload date: {upload_date format="%Y %m %d"}
          URL: {url}
          Custom med thumbnail url: {url:med}
      {/parents:my_image}
    {/parents}

### File Grid Fields

A file grid field variable pair:

     {parents field="relationship_field"}
       {parents:my_file_grid}
         {parents:my_file_grid:my_image}
             Extension: {extension}
             Upload date: {upload_date format="%Y %m %d"}
             URL: {url}
             Custom med thumbnail url: {url:med}
         {/parents:my_file_grid:my_image}
       {/parents:my_file_grid}
     {/parents}

### Fluid Fields

    {parents field="relationship_field"}
      {parents:my_fluid_field}
        {relationship_field:my_fluid_field:my_grid}
          {content}
            {if content:count == 1}<h3>Grid total rows: {content:total_rows}{/if}
            Date field: {content:my_grid format="%Y %m"}
            Toggle: {if content:my_toggle}YES there is a toggle value!{/if}

            File field pair:
            {content:my_file}
              Upload date: {upload_date format="%Y %m %d"}
              Custom med thumbnail url: {url:med}
            {/content:my_file}
          {/content}
        {/parents:my_fluid_field:my_grid}
      {/parents:my_fluid_field}
    {/parents}

### Grid Fields

     {parents field="relationship_field"}
       {parents:my_grid}
         {parents:my_grid:my_image}
             Upload date: {upload_date format="%Y %m %d"}
             URL: {url}
         {/parents:my_grid:my_image}
         Some text in the grid: {parents:my_grid:my_text}
       {/parents:my_grid}
     {/parents}

### Relationship Fields

    {parents field="relationship_field"}
      <h3>Related entry's title: {parents:title}</h3>

      {parents:my_relationship status="open"}
          {if parents:my_relationship:count == 1}
              <h3>Relationships ({parents:my_relationship:total_results})</h3>
          {/if}

          <h3>Related entry's related entry's title: {parents:my_relationship:title}</h3>

          Related entry's file field, med custom image size: {parents:my_relationship:my_file:med wrap="image"}

      {/parents:my_relationship}
    {/parents}

### Toggle Fields

    {parents field="relationship_field"}
      {if parents:my_toggle}YES there is a toggle value!{/if}
    {/parents}

### URL Fields

    {parents field="relationship_field"}
      <a href="{parents:my_url}">Your Link</a>
    {/parents}
