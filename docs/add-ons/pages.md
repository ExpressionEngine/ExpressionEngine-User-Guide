<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Pages

[TOC]

WARN: **Warning:** Used sparingly, the Pages Module is a very useful tool, but when overused it can create an unmaintainable site. A site built using ExpressionEngine's [default URL behavior](general/url-structure.md) will be much easier to create and maintain than a site that forces every entry into a page. If you've created more than 10 pages, carefully consider your other options before adding more pages because there's probably a much better way to do what you want to do.

The Pages Module allows you to create special "page" entries for holding content that is more static than dynamic. The entries are displayed via the Channel Entries tag and can be displayed at virtually any URL desired.

## Managing Page Content

The [Pages Module Control Panel](#control-panel) allows you to create, edit, view and delete your Pages.

NOTE: **Note:** In order to allow content authors full access to create and modify pages through both the Pages tab of the Publish area and the Pages module itself, it is necessary to give those authors' respective roles the appropriate Control Panel access for publishing and editing content, access to post and edit entries in the particular Channel in question, access to Modules in general, and access to the Pages module specifically.

## Displaying Page Content with the Channel Entries Tag

Displaying Page content is as easy as displaying normal Channel entries. The primary difference is that when a Page URI is requested, the URL segments do not correlate to a template group and template, as that is determined by the template that the particular "page" entry was assigned to use on the [Pages tab](control-panel/create.md) of the Publish form.

Additionally, the page will automatically be treated as a single entry page for that page entry, so other tags on the template will need to use the `dynamic="no"` parameter (if available) to display other content.

In the Template chosen on the [Pages tab](control-panel/create.md) of the Page entry, use a normal [Channel Entries tag](channels/entries.md) with any parameters and variables that you desire to display the entry, e.g.:

    {exp:channel:entries channel="personnel"}
        <h2>{title}</h2>
        <h3>Position</h3>
        <p>{position}</p>
        <h3>Background</h3>
        <p>{background}</p>
    {/exp:channel:entries}

NOTE: **Note:** Spanning an entry across multiple pages is not possible when using Page URLs, as content is only displayed for exact URI matches.

### Parameters

The Pages Module adds the following parameters for use in the {exp:channel:entries} tag.

- [`show_pages=`](channels/entries.md#show_pages)

### Variables

The Pages Module adds the following variables for use in the {exp:channel:entries} tag.

- [`page_uri=`](channels/entries.md#page_uri)
- [`page_url=`](channels/entries.md#page_url)

## Multiple Site Manager

If you are using the [Multiple Site Manager](msm/overview.md), page data are only available for the current site. If you wish to show the `{page_uri}` or `{page_url}` for an entry from a different site, you will need to use the `{exp:pages:load_site_pages}` tag on the relevant template. This tag has one required parameter: `site`. For example, if your channel tag is pulling in pages from sites `default_site` and `corporate_site`, your tag should look like:

    {exp:pages:load_site_pages site="default_site|corporate_site"}

## Control Panel

**Control Panel Location:** `Developer --> Add-Ons --> Pages`

The Pages Module Control Panel allows you to create, edit, view and delete your Pages.

### Create New Page

This button will take you to the Publish area of the Control Panel. If you have specified a default Channel in the Module Configuration (see below), that Channel will be used, otherwise you will be presented with a choice of which Channel to publish to.

### Module Configuration

#### Display of URLs?

Whether or not to use a hierarchical nested display of your Pages in the Pages Control Panel.

#### Channel

The default Channel to use when the "Create New Page" button is clicked.

#### Templates

The default Template that will be pre-selected in the Pages tab when creating a new "page" entry.
