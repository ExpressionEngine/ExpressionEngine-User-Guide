<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2024, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Structure

Structure is a powerful add-on that lets you create pages, generate navigation, manage content through a simple interface and build robust sites faster than ever.

It forgoes the default template_group/template setup and creates “static” and “listing” pages that are all editable through a tree sitemap view. With Structure enabled, traditional page style content and multiple entry pages can live within the same area.

[*Tags*](add-ons/structure/tags.md)

## Module Settings

Use Module Settings page in Structure control panel to provide the settings for Structure behavior and appearance. 

You can also set up individual permissions for the members roles that are allowed to access Structure add-on (as set on [Role Setting](control-panel/member-manager.md#role-settings) page)

## Channel Settings

Before Structure can be used, it is important to set the channels you want to use with it. Channel Settings page in Structure add-on control panel is listing all channels in your site. You can select which channels you want to use with Structure and set the page type for each channel.

### Channel Name
All existing channels will display within your channel settings.

### Page Type
Structure has three [page types](add-ons/structure/page-types.md) to use within your site.

### Show in page selector
This determines if this channel is available from the global or in-row "Add Page" controls. Only available for channels of the type "Page".

### Default template
Channels of the type "Page" or "Listing" have defaults templates assigned to them that are used when new entries are created. This does not affect existing entries.

### Make each entry a single asset
Channels of the type "Asset" have the option to Add/Edit all entries. With this enabled, each entry you add is a single editable item and authors can not add more entries. This is useful for specific bits of copy or finite items someone does not need access to add more of.

## Page Types

All content is displayed using normal channel tags, but depending on the content type you can use different Structure page types to accomplish your hierarchy. Structure believes everything on your site should be editable through a single interface, so we provide several page type to manipulate your content within.

[Read about page types here](add-ons/structure/page-types.md)
