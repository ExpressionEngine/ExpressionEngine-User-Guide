<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2024, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Structure Examples

[TOC]

## Navigation Examples

### Main Navigation

 Restrict navigation to only the top level pages:

    {exp:structure:nav start_from="/" max_depth="1"}

### Sitemap and All Navigation

 Show all pages within your site:

    {exp:structure:nav start_from="/" show_depth="999"}

### Sub Navigation

 This version of the tag reveals children of the current page as you drill down within your hierarchy.

    {exp:structure:nav  start_from="/{segment_1}"}

### Adding An Overview (Parent) Link To Sub Navigation

 - `show_overview=“yes”`: Add a link to the top of your navigation that links to the top parent
 - `rename_overview=“Overview”`: Change the title of the link to your top level parent page.

    {exp:structure:nav
        start_from="/{segment_1}"
        show_overview="yes"
        rename_overview="Overview"}

 This will add the following to the beginning of your navigation list:

    <li><a href="/top-level">Top Level</a></li>

 You can also manipulate sub navigation instances using show_depth and max_depth to reveal more levels at one (show_) or restrict how deep users can drill down the hierarchy (max_).

### Structure Nav Basic Example

    {exp:structure:nav_basic show_depth="4"}
    {if root:count == 1}
    <prefixul>
    {/if}
      <li{if root:active} class="active"{/if}>
        <a href="{root:page_url}">{root:title}</a>
        {if root:has_children}
        <ul>
          {root:children}
          <li{if child:active} class="active"{/if}>
            <a href="{child:page_url}">{child:title}</a>
            {if child:has_children}
            <ul>
              {child:children}
              <li{if grandchild:active} class="active"{/if}>
                <a href="{grandchild:page_url}">{grandchild:title}</a>
                {if grandchild:has_children}
                <ul>
                  {grandchild:children}
                  <li{if great_grandchild:active} class="active"{/if}>
                    <a href="{great_grandchild:page_url}">{great_grandchild:title}</a>
                  </li>
                  {/grandchild:children}
                </ul>
                {/if}
              </li>
              {/child:children}
            </ul>
            {/if}
          </li>
          {/root:children}
        </ul>
        {/if}
      </li>
    {if root:count == root:total_results}
    </ul>
    {/if}
    {/exp:structure:nav_basic}


### Structure Nav Advanced Example

    {exp:structure:nav_advanced show_depth="4"}
    {if root:count == 1}
    <ul>
    {/if}
      <li{if root:active} class="active"{/if}>
        <a href="{root:page_url}">{root:title} {root:entry_date format="%Y-%m-%d %H:%i:%s"} ({root:status})</a>
        <div class="root-info">
          <p>{root:your_custom_field}</p>
          <ul>
          {root:your_custom_grid_field}
            <li>{your_col}</li>
          {/root:your_custom_grid_field}
          </ul>
        </div>
        {if root:has_children}
        <ul>
          {root:children}
          <li{if child:active} class="active"{/if}>
            <a href="{child:page_url}">{child:title} ({child:status})</a>
            {if child:has_children}
            <ul>
              {child:children}
              <li{if grandchild:active} class="active"{/if}>
                <a href="{grandchild:page_url}">{grandchild:title} ({grandchild:status})</a>
              </li>
              {/child:children}
            </ul>
            {/if}
          </li>
          {/root:children}
        </ul>
        {/if}
      </li>
    {if root:count == root:total_results}
    </ul>
    {/if}
    {/exp:structure:nav_advanced}


## Sibling Tag Examples

The sibling tag allows you to traverse back and forth through the current page's entries using tag pairs and variables within the tag. It is intended for normal pages within the hierarchy and not listing entries. An example for listings follows the sibling tag below.

### Linking to Page's Siblings

    {exp:structure:siblings}
       {prev}
          <a href="{url}" title="{title}">Prev: {title}</a>
       {/prev}
       {next}
          <a href="{url}" title="{title}">Next: {title}</a>
       {/next}
    {/exp:structure:siblings}

### Linking to Listing Entry's Siblings

    {exp:channel:next_entry channel="news"}
       <a href="{structure:page_url_for:{entry_id}}">Previous Page</a>
    {/exp:channel:next_entry}
    {exp:channel:prev_entry channel="news"}
       <a href="{structure:page_url_for:{entry_id}}">Next Page</a>
    {/exp:channel:prev_entry}


## Conditionally Display Sub Navigation or HTML

You can conditionally display the sub navigation and/or any surrounding HTML using the following parameters with nav_sub:

    {if structure:child_ids != ''}
    <div id="sweet_nav_wrapper">
    {exp:structure:nav start_from="/{segment_1}"}
    </div>
    {/if}

Additionally, you can show alternate markup or content using if:else as follows:

    {if structure:child_ids != ''}
    <div id="sweet_nav_wrapper">
    {exp:structure:nav start_from="/{segment_1}"}
    </div>
    {if:else}
    No children!
    {/if}

## Displaying Child Page Content (Structure Entries Examples)

You can use the Structure Entries tag to output the children of a specific parent:

    {exp:structure:entries parent_id="9"}
    <p>{title}</p>
    <p><a href="{page_uri}">{page_uri}</a></p>
    {/exp:structure:entries}

## Conditionally Display Content If A Page Has Children

    {if '{structure:child_ids}' != ''}
    <p>This page has children!</p>
    {if:else}
    <p>This page does NOT have children!</p>
    {/if}

## Comments

### Comment Entries

    {exp:comment:entries entry_id="{structure:page:entry_id}" parse="inward"}


### Comment Form

    {exp:comment:form channel="blog" entry_id="{structure:page:entry_id}" parse="inward"}


### Channel Form

The following are examples to integrate your Structure site with Channel Form to have full creating and editing capabilities.

### Creating A New Listing Entry

 You can choose to make certain values editable or not, notes are listed inline below:

    {exp:channel:form channel="your-listing-channel" return="/your-return-url"}
    <!-- Place your template ID into the value below or allow it to be chosen using {exp:structure:saef_select type="template"} -->
    <input type="hidden" name="structure_template_id" value="XXX" />
    <!-- Place your parent entry ID into the value below or allow it to be chosen using {exp:structure:saef_select type="parent"} -->
    <input type="hidden" name="structure_parent_id" value="XXX" />
    <p>Title: <input type="text" name="title" id="title" value="{title}" /></p>
    <!-- The field below is required.  Please note when added as a hidden field we'll automatically generate the uri-->
    <p>Structure URI: <input type="text" name="structure_uri" /></p>
    <p><input type="submit" name="submit" value="Submit" /></p>
    {/exp:channel:form}

### Creating a New Page

 You can choose to make certain values editable or not, notes are listed inline below:

    {exp:channel:form channel="your-page-channel" return="/your-return-url"}
    <p>Title: <input type="text" name="title" id="title" value="{title}" /></p>
    <!-- You can also use a hidden value instead of the field below, so it is not editable: <input type="hidden" name="structure_template_id" value="XXX" /> -->
    <p>Template: {exp:structure:saef_select type="template"}</p>
    <!-- You can also use a hidden value instead of the field below, so it is not editable: <input type="hidden" name="structure_parent_id" value="XXX" /> -->
    <p>Parent: {exp:structure:saef_select type="parent"}</p>
    <!-- The field below is required.  Please note when added as a hidden field we'll automatically generate the uri-->
    <p>Structure URI: <input type="text" name="structure_uri" /></p>
    <p><input type="submit" name="submit" value="Submit" /></p>
    {/exp:channel:form}


### Editing a Listing Entry

 When editing entries, you can use existing segments or an addon like Freebie to create additional ones to feed into your channel:form tag below:

    {exp:channel:form channel="your-listing-channel" entry_id="{some_segment}" return="/your-return-url"}
    <input type="hidden" name="entry_id" value="{entry_id}" />
    <p>Title: <input type="text" name="title" id="title" value="{title}" /></p>
    <!-- You can also use a hidden value instead of the field below, so it is not editable: <input type="hidden" name="structure_template_id" value="XXX" /> -->
    <p>Template: {exp:structure:saef_select type="template" entry_id="{entry_id}"}</p>
    <!-- You can also use a hidden value instead of the field below, so it is not editable: <input type="hidden" name="structure_parent_id" value="XXX" /> -->
    <p>Parent: {exp:structure:saef_select type="parent" entry_id="{entry_id}"}</p>
    <p>Structure_uri: <input type="text" name="structure_uri" value="{structure:page_slug_for:{entry_id}}" /></p>
    <p><input type="submit" name="submit" value="Submit" /></p>
    {/exp:channel:form}

### Editing a Page
 When editing entries, you can use existing segments or an addon like Freebie to create additional ones to feed into your channel:form tag below:

    {exp:channel:form channel="your-page-channel" entry_id="{some_segment}" return="/your-return-url"}
    <input type="hidden" name="entry_id" value="{entry_id}" />
    <p>Title: <input type="text" name="title" id="title" value="{title}" /></p>
    <!-- You can also use a hidden value instead of the field below, so it is not editable: <input type="hidden" name="structure_template_id" value="XXX" /> -->
    <p>Template: {exp:structure:saef_select type="template" entry_id="{entry_id}"}</p>
    <!-- You can also use a hidden value instead of the field below, so it is not editable: <input type="hidden" name="structure_parent_id" value="XXX" /> -->
    <p>Parent: {exp:structure:saef_select type="parent" entry_id="{entry_id}"}</p>
    <p>Structure_uri: <input type="text" name="structure_uri" value="{structure:page_slug_for:{entry_id}}" /></p>
    <p><input type="submit" name="submit" value="Submit" /></p>
    {/exp:channel:form}

## Pro Variables

By default, the variable created (e.g. `{some_variable}`) will only return a page's entry_id, but if you use the full tag (e.g. `{exp:pro_variables:parse var="some_var"}`) it will return the full url.

## Duplicate Pages in Navigation

You can have pages live in more than one place in your navigation by creating a redirect to one “official” place the page lives.

- Create a new template called “internal_link” with a PHP redirect and the custom field name for the URL value (PHP code below)
- Allow this template to use PHP under the template preferences
- Make a new channel named “Internal Link” with a custom field using only our StructureFrame fieldtype
- Make this channel managed by Structure under the module channel settings and set the default template to your new “internal_link” template
- Assign a new page to this new channel (named the exact same title if desired) and upon visiting you will be redirected to the original page location

    <?php
         header( "Location: {exp:channel:entries}{your_structureframe_field}{/exp:channel:entries}" );
         exit;
    ?>

**Note:** Make sure your channel has "Automatically turn URLs and email addresses into links?" turned off under the channel settings

## Linking to an External Page or File in Navigation

You can have pages link offsite or even to files using the following method:

- Create a new template called “external_link” with a PHP redirect and the custom field name for the URL value (PHP code below)
- Allow this template to use PHP under the template preferences
- Make a new channel named “External Link” with a custom field that is either a text field (to input a URL offsite) or a file upload field (to link to a PDF, Word doc, etc)
- Make this channel managed by Structure under the module channel settings and set the default template to your new “external_link” template
- Assign a new page to this new channel (named the exact same title if desired) and upon visiting you will be redirected to the external page or file

    <?php
         header( "Location: {exp:channel:entries}{your_link_field}{/exp:channel:entries}" );
         exit;
    ?>

 **Note:** Make sure your channel has "Automatically turn URLs and email addresses into links?" turned off under the channel settings

## Multi Language Sites

The recommended method is to have your default language at the top level and make separate branches for your alternate languages like this:

- /about
- /services
- /contact
- /es/about
- /es/services
- /es/contact
- /fr/about
- /fr/services
- /fr/contact

You can then use the nav_sub tag and either the start_from or exclude_status parameters. When using exclude_status you can assign statuses by language to control the output.

### Example nav_sub code:

    {if segment_1  'es' OR segment_1  'fr'}
        {!-- START FROM SEGMENT 2 IF NOT DEFAULT LANGUAGE --}
        {exp:structure:nav start_from='/{segment_1}/{segment_2}'}
    {if:else}
        {!-- START FROM SEGMENT 1 IF DEFAULT LANGUAGE --}
        {exp:structure:nav start_from='/{segment_1}'}
    {/if}

 This method does not require different custom fields per language as they’re all separate pages powered by the same code and quite often the same templates.
 