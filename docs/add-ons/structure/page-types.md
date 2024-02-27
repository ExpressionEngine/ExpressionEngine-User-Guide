<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2024, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Page Types in Structure

[TOC]

## Pages

Pages are generally what are referred to as “static pages”, but can be posted anywhere in your hierarchy to any channel you choose. This means they can use any custom fields as well to tailor your content as needed. Pages show up in Structure navigation tags and the main CP site tree. Pages are also containers for listings.

### Create Pages
 - Assign a channel to the type “Page” under Structure » Channel Settings and assign it the default template you want your pages to use
 - Start building your site tree through the Structure CP using the “add page” control or through the Publish tab
 - When adding or editing an entry there is a Structure tab in which you can customize the page URL or assign it to a template other than the default one you assigned under settings
 - No matter what template your channel is assigned to use under the settings, templates can be changed any time per page by editing the “Template” dropdown under the Structure tab when editing an entry
 - You can use Structure `nav_main` and `nav_sub` tags to link to all of your pages in various ways
 - Further pages can be added by the same method and assigning parents under the Structure tab or through the “add page” link next to each page

### Displaying Content
Pages are shown using basic channel tags and methods you already use building EE sites. The same rules apply, except that you can not include dynamic="off" because Structure needs this to find the current page through the URL you are accessing. Structure will match that with the appropriate entry and display it based off the URL.

    {exp:channel:entries channel="your-page-channel"}
    <h1>{title}</h1>
    {custom-field-name}
    {/exp:channel:entries}

## Listings

Listings must be attached to a page and connect to a channel to enable easy adding and editing. Listing entries do not show up in the structure hierarchy, but still have URLs and Structure data posted to them. Listings are generally used for content that appears on a single page and clicks through to a detail - like a listing of news, blog posts, etc. However, they can be used to display multiple entries on a single page, since all content is still shown through channel tags. When something consists of multiple entries and does not need to appear within the site navigation, listings are a great solution.

### Create Listings
 **NOTE:** Listings must be attached to a page and the channel used for a listing can not have any Structure data posted to it to avoid duplicate URLs and hierarchy.
 - Assign a channel to the type “Listing” under Structure » Channel Settings and assign it the default template you want your pages to use
 - Edit the page you want to attach your listing to
 - Click the Listing checkbox and select the channel you assigned in the first step
 - Save and return to the Structure CP
 - You can now add/edit entries in this channel attached to the original page

### Using Listings
Listings are always attached to another page, each entry in the listing contains page data (like URLs) of their own. They are effectively subpages of the containing page, but do not show up in the navigation hierarchy. Listings are useful for any content that is generally a large set, are not structural, but appear in a list on the containing page - like events, news, blog posts, etc. They generally click through to some kind of detail page, but they can also be used for smaller sets if you do not want the entries to appear within navigation, but output on a single page, like staff bios.

When visiting the containing page, listings are just like displaying entries as you normally do in EE when unrelated to the current template or URL. Because we want to display data unrelated to the current page, adding dynamic="off" tells EE to display a listing of entries other than the current page. This way, you can still have page data and content associated with a page containing a listing and show the actual listing entries. You link to pages with page_url and page_uri instead of the traditional template_group/template permlink method.

    <ul>
    {exp:channel:entries channel="your-listing-channel" dynamic="no"}
    <li><a href="{page_url}">{title}</a></li>
    {/exp:channel:entries}
    </ul>

## Assets

Assets do not contain Structure data or page URLS and are meant as buckets of information that will be called into other templates and sections. For example: banner ads, snippets of text used in callouts and entries that will be related to pages. Assets are normal entries, so they can still be called through the regular templating system as needed.

### Example: Callout Text

Assets are useful for calling entries into pages as support content or relating pages to them. If you enable the "Split Assets Per Entry" option each entry you create will become its own asset, instead of acting as a bridge to Add/Edit multiple entries.


    {exp:channel:entries channel="your-asset-callout-channel" entry_id="XX"}
        <h2>Featured Event</h2>
        <h3>{title}</h3>
        <p>{custom-field-name}</p>
    {/exp:channel:entries}

### Example: Random entries

Calling an exact entry can give your clients a way to edit specific bits of content displayed wherever you choose:

    <h2>Sponsors</h2>
    {exp:channel:entries channel="your-asset-callout-channel" orderby="random" limit="2"}
    <a href="{sponsor-link}"><img src="{banner-ad-custom-field-name}" alt="title" /></a>
    {/exp:channel:entries}

### Example: Related Entries

Assets can also be used as support information that can be shared among any channels on your site by using Relationship field. If you had an “Instruments” channel containing entries for vocals, guitar, bass and drums you could relate each entry to a band member and display it using the following, where “member-instruments” is your related custom field:

    {exp:channel:entries channel="your-band-member-channel"}
    <h1>{title}</h1>
    <ul>
    {member-instruments}
    <li>{title}</li>
    {/member-instruments}
    </ul>
    {/exp:channel:entries}