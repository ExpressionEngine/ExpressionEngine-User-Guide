<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2024, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Structure Tags

[TOC=3]

### `{exp:structure:breadcrumb}`

The breadcrumb tag displays in a standardized format and has a few parameters to control its output.

#### Parameters

##### `channel:title`

defaults to entry title (when unset)

Uses a specific custom field per channel instead of the default title variable.

    {exp:structure:breadcrumb channel:title="channel:custom_field|channel_2:custom_field_2"}

##### `home_link`

Used to change the Home link to an alternate URL. Useful for multi language sites.

    {exp:structure:breadcrumb home_link="/fr"}

##### `inc_here`

accepts: "y","n"

Default: y

    {exp:structure:breadcrumb inc_here="yes|no"}

###### `inc_home`

accepts: "y","n"

Default: y

    {exp:structure:breadcrumb inc_home="yes|no"}

###### `inc_separator`

accepts: "y","n"

Default: yes

    {exp:structure:breadcrumb inc_separator="no"}

###### `add_last_class`

Adds a class of last to your trail

Default: yes

    {exp:structure:breadcrumb add_last_class="no"}

###### `here_as_title`

accepts: "y","n"

Default: defaults to no

    {exp:structure:breadcrumb here_as_title="yes"}

###### `rename_home`

yes/no

Used to change the Home link text to an alternate word. Useful for multi language sites.

    {exp:structure:breadcrumb rename_home="Casa"}

###### `separator`

Spaces are automatically added around the element for you.

    {exp:structure:breadcrumb separator=":"}

###### `uri`

Useful for search results pages to show where item was found (Example: "Found in About » News")

    {exp:structure:breadcrumb uri="/tags/breadcrumbs/"}

###### `wrap_each`

Do not include < or > around tag, Structure writes it for you.

    {exp:structure:breadcrumb wrap_each="li"}

###### `wrap_here`

Do not include < or > around tag, Structure writes it for you.

    {exp:structure:breadcrumb wrap_here="em"}

###### `wrap_separator`

Do not include < or > around tag, Structure writes it for you.

    {exp:structure:breadcrumb wrap_separator="span"}

### `{exp:structure:entries}`

A replacement for the channel tag to call a parent's children. You can use all of the same variables as a channel tag within it

#### Parameters

###### `parent_id`

Assign which children to show within the entires tag. 0 shows top level.

    {exp:structure:entries parent_id="8"}

###### `include_hidden`

defaults to no 

Shows pages marked as hidden.

    {exp:structure:entries include_hidden}

### `{structure:}`

A library of global variables related to the current page. Variables will not work inside snippets.

#### Variables

###### `child_listing:channel_id`

The channel ID of a channel attached as a listing

    {structure:child_listing:channel_id}

###### `child_listing:short_name`

The channel short name of a channel attached as a listing

    {structure:child_listing:short_name}

###### `is:page`

Returns 1 or blank for the current page

Detects if the current page is a page type of "Page" in Structure » Channel Settings

    {structure:is:page}

###### `is:listing`

Returns 1 or blank for the current page

Detects if the current page is a listing detail page

    {structure:is:listing}

###### `is:listing:parent`

Returns 1 or blank for the current page

Detects if the current page is a page type of "Listing" in Structure » Channel Settings (has a listing attached to it)

    {structure:is:listing:parent}

###### `page:entry_id`

The current page's "entry_id" variable

    {structure:page:entry_id}

###### `page:title`

The same as EE's native "title" variable

    {structure:page:title}

###### `page_title_for:XXX`

The title of a specific entry using the entry ID (in place of XXX)

    {structure:page_title_for:XXX}

###### `page:slug`

The segment for the current page

    {structure:page:slug}

###### `page_slug_for:XXX`

The slug of a specific entry using the entry ID (in place of XXX)

    {structure:page_slug_for:XXX}

###### `page:uri`

The same as EE's native "page_uri" variable

    {structure:page:uri}

###### `page_uri_for:XXX`

The URI of a specific entry using the entry ID (in place of XXX)

    {structure:page_uri_for:XXX}

###### `page:url`

The same as EE's native "page_url" variable

    {structure:page:url}

###### `page_url_for:XXX`

The URL of a specific entry using the entry ID (in place of XXX)

    {structure:page_url_for:XXX}

###### `child_ids`

Returns IDs of children for the current page. Example: "24" or "4|8|5|16|23|42"

    {structure:child_ids}

###### `sibling_ids`

Returns IDs of sibling for the current page. Example: "24" or "4|8|5|16|23|42"

    {structure:sibling_ids}

###### `child_ids_for:XXX`

Returns IDs of children for a specific page (use the entry ID in place of XXX)

    {structure:child_ids_for:XXX}

###### `parent:entry_id`

The entry ID of the current page's parent

    {structure:parent:entry_id}

###### `parent:slug`

The single segment of the URL/URI of the current page's parent

    {structure:parent:slug}

###### `parent:uri`

The full URI of the current page's parent

    {structure:parent:uri}

###### `parent:url`

The full URL of the current page's parent

    {structure:parent:url}

###### `top:entry_id`

The entry ID of the current page's top level parent

    {structure:top:entry_id}

###### `top:title`

The "title" variable of the current page's top level parent

    {structure:top:title}

###### `top:slug`

The single segment of the URL/URI of the current page's top level parent

    {structure:top:slug}

###### `top:uri`

The full URI of the current page's top level parent

    {structure:top:uri}

###### `top:url`

The full URL of the current page's top level parent

    {structure:top:url}

### `{exp:structure:nav}`

The nav tag is intended for all navigation within your Structure site and will automatically add class="here" to the current page’s
and class="last" to the last. Examples of each parameters usage can be found in our navigation documentation examples.

#### Parameters

###### `add_level_classes`

defaults to no 

Displays class="level_1", class="level_2", etc on each li

    {exp:structure:nav add_level_classes="yes|no"}

###### `add_span`

defaults to no 

Adds a span tag around each individual navigation element within the a tag.

accepts: "y","n"

    {exp:structure:nav add_span="yes|no"}

###### `add_unique_ids`

defaults to no 

Adds a unique ID to the a tag using the top parent slug, default seperator and pageslug or entry ID.

    {exp:structure:nav add_unique_ids="yes|entry_id|no"}

###### `css_class`

Assigns a class to the ul.

    {exp:structure:nav css_class="sub_navigation"}

###### `css_id`

Assigns an ID to the ul. You can add "none" to optionally display no ID.

    {exp:structure:nav css_id="sub_navigation"}

###### `current_class`

defaults to here 

Change the class name added to the current page's li tag.

    {exp:structure:nav current_class="active"}

###### `channel:title`

defaults to entry title (when unset) 

Uses a specific custom field per channel instead of the default title variable.

    {exp:structure:nav channel:title="channel_name:field_name|another_channel:another_field"}

###### `exclude`

The parameter "exclude=" can be used to hide any single or multiple user defined entry numbers using the pipe character. All children under a specified ID will be hidden as well.

    {exp:structure:nav exclude="24"}

###### `has_children_class`

defaults to no 

Adds a class to pages that have children as an additional tiling hook.

accepts: "y","n"

    {exp:structure:nav has_children_class="yes|no"}

###### `include`

integer

The parameter "include=" can be used to selectively show specific pages from the same level.

    {exp:structure:nav include="24" }

###### `include_ul`

yes/no

defaults to yes 

Conditionally output the surrounding ul tag.

    {exp:structure:nav include_ul="yes|no" }

###### `max_depth`

Only show up to XX levels deep from the current start_from parameter. Useful to hide pages under a desired level (like thank you or confirmation pages) or for main navigation.

    {exp:structure:nav max_depth="2"}

###### `mode`

defaults to sub 

Options are "sub", "main", and "full". 

Replacement for EE1's nav_main, nav_sub, and nav_full tags. 

_sub_: only displays 2 levels and any children on the same level of the same branch 

_full_: show the full tree 

_main_: show top nav but never any children

    {exp:structure:nav mode="sub"}

###### `override_hidden_state`

defaults to no Show all pages regardless of whether they're set to be hidden from the nav.

accepts: "y","n"

Default: no

    {exp:structure:nav override_hidden_state="yes"}

###### `show_overview`

defaults to no 

Shows a link at the top of your navigation that links to the current top level page. Use with rename_overview to change the title.

    {exp:structure:nav show_overview="yes"}

###### `recursive_overview`

defaults to no 

Show the overview link on every level, instead of only the first one. Works with show_overview.

    {exp:structure:nav recursive_overview="no|yes"}

###### `rename_overview`

defaults to "Overview" 

Rename the link at the top of your navigation that links to the current top level page. Use with show_overview to reveal. "title" uses the page's title field.

    {exp:structure:nav rename_overview="Overview|Whatever|title"}

###### `start_from`

Used to indicate where to begin revealing children. The "start_from" parameter must be a full URI or URL.

    {exp:structure:nav start_from="/about" or start_from ="/{segment_1}/{segment_2}"}

###### `strict_start_from`

Will NOT return a nav if there is no match to your "start_from" param. Normally, if there is no match, Structure returns the full nav starting from the base of your website.

    {exp:structure:nav strict_start_from="yes"}

###### `show_depth`

Reveals XX levels deep for ALL children pages of the current start_from parameter.

    {exp:structure:nav show_depth="2"}

###### `show_expired`

defaults to no 

Allows you to show or not show expired entries within the navigation tree.

accepts: "y","n"

    {exp:structure:nav show_expired="yes|no"}

###### `show_future_entries`

Allows you to show or not show future entries within the navigation tree.

accepts: "y","n"

Default: no

    {exp:structure:nav show_future_entries="yes|no"}

###### `site_url`

defaults to no 

Include the absolute site URL in your nav links instead of relative links.

    {exp:structure:nav site_url="yes|no"}

###### `status`

defaults to Open 

Restrict pages by status, using normal EE syntax. When prefixed with "not" all entries except those are available.

    {exp:structure:nav status="Radical|Sweet"}

### `{exp:structure:nav_advanced}`

Allows more flexibility in building the navigation because is build to be used as a tag pair providing a number of variables. Acceot all the same parameters as the `{exp:structure:nav}` tag.

#### Parameters

###### `add_level_classes`

defaults to no 

Displays class="level_1", class="level_2", etc on each li

    {exp:structure:nav_advanced add_level_classes="yes|no"}

###### `add_span`


defaults to no 

Adds a span tag around each individual navigation element within the a tag.

accepts: "y","n"

    {exp:structure:nav_advanced add_span="yes|no"}

###### `add_unique_ids`

defaults to no 

Adds a unique ID to the a tag using the top parent slug, default seperator and pageslug or entry ID.

    {exp:structure:nav_advanced add_unique_ids="yes|entry_id|no"}

###### `css_class`

Assigns a class to the ul.

    {exp:structure:nav_advanced css_class="sub_navigation"}

###### `css_id`

Assigns an ID to the ul. You can add "none" to optionally display no ID.

    {exp:structure:nav_advanced css_id="sub_navigation"}

###### `current_class`

defaults to here 

Change the class name added to the current page's li tag.

    {exp:structure:nav_advanced current_class="active"}

###### `channel:title`

defaults to entry title (when unset) 

Uses a specific custom field per channel instead of the default title variable.

    {exp:structure:nav_advanced channel:title="channel_name:field_name|another_channel:another_field"}

###### `exclude`

The parameter "exclude=" can be used to hide any single or multiple user defined entry numbers using the pipe character. All children under a specified ID will be hidden as well.

    {exp:structure:nav_advanced exclude="24"}

###### `has_children_class`

defaults to no 

Adds a class to pages that have children as an additional tiling hook.

accepts: "y","n"

    {exp:structure:nav_advanced has_children_class="yes|no"}

###### `include`

integer

The parameter "include=" can be used to selectively show specific pages from the same level.

    {exp:structure:nav_advanced include="24" }

###### `include_ul`

yes/no

defaults to yes 

Conditionally output the surrounding ul tag.

    {exp:structure:nav_advanced include_ul="yes|no" }

###### `max_depth`

Only show up to XX levels deep from the current start_from parameter. Useful to hide pages under a desired level (like thank you or confirmation pages) or for main navigation.

    {exp:structure:nav_advanced max_depth="2"}

###### `mode`

defaults to sub 

Options are "sub", "main", and "full". Replacement for EE1's nav_main, nav_sub, and nav_full tags. 

_sub_: only displays 2 levels and any children on the same level of the same branch 

_full_: show the full tree 

_main_: show top nav but never any children

    {exp:structure:nav_advanced mode="sub"}

###### `override_hidden_state`

Show all pages regardless of whether they're set to be hidden from the nav.

accepts: "y","n"

Default: no

    {exp:structure:nav_advanced override_hidden_state="yes"}

###### `show_overview`

defaults to no 

Shows a link at the top of your navigation that links to the current top level page. Use with rename_overview to change the title.

    {exp:structure:nav_advanced show_overview="yes"}

###### `recursive_overview`

defaults to no 

Show the overview link on every level, instead of only the first one. Works with show_overview.

    {exp:structure:nav_advanced recursive_overview="no|yes"}

###### `rename_overview`

defaults to "Overview" 

Rename the link at the top of your navigation that links to the current top level page. Use with show_overview to reveal. "title" uses the page's title field.

    {exp:structure:nav_advanced rename_overview="Overview|Whatever|title"}

###### `start_from`

Used to indicate where to begin revealing children. The "start_from" parameter must be a full URI or URL.

    {exp:structure:nav_advanced start_from="/about" or start_from ="/{segment_1}/{segment_2}"}

###### `strict_start_from`

Will NOT return a nav if there is no match to your "start_from" param. Normally, if there is no match, Structure returns the full nav starting from the base of your website.

    {exp:structure:nav_advanced strict_start_from="yes"}

###### `show_depth`

Reveals XX levels deep for ALL children pages of the current start_from parameter.

    {exp:structure:nav_advanced show_depth="2"}

###### `show_expired`

defaults to no 

Allows you to show or not show expired entries within the navigation tree.

accepts: "y","n"

    {exp:structure:nav_advanced show_expired="yes|no"}

###### `show_future_entries`

Allows you to show or not show future entries within the navigation tree.

accepts: "y","n"

Default: no

    {exp:structure:nav_advanced show_future_entries="yes|no"}

###### `site_url`

defaults to no 

Include the absolute site URL in your nav links instead of relative links.

    {exp:structure:nav_advanced site_url="yes|no"}

###### `status`

defaults to Open 

Restrict pages by status, using normal EE syntax. When prefixed with "not" all entries except those are available.

    {exp:structure:nav_advanced status="Radical|Sweet"}

#### Variables

All tags are prefixed based on their depth. The tag prefixes go in this order:

 - `root`
 - `child`
 - `grandchild`
 - `great_granchild`
 - etc.

The basic tag has these variables (where is one of the depth levels listed above)

 - `{<prefix>:entry_id}`
 - `{<prefix>:title}`
 - `{<prefix>:page_url}`
 - `{<prefix>:page_uri}`
 - `{<prefix>:count}`
 - `{<prefix>:total_results}`
 - `{if <prefix>:active}{/if}`
 - `{if <prefix>:has_active_child}{/if}`
 - `{if <prefix>:has_children}`

There is also the children tag pair:

    {<prefix>:children}
      {<next prefix>:entry_id}
      {<next prefix>:title}
      {<next prefix>:children}
        {<next next prefix>:entry_id}
      {/<next prefix>:children}
    {/<prefix>:children}

Which would look like this with real prefixes:

    {root:children}
      {child:entry_id}
      {child:title}
      {child:children}
        {grandchild:entry_id}
      {/child:children}
    {/root:children}

The advanced tag adds the following tags and also any custom fields:

    {<prefix>:site_id}
    {<prefix>:channel_id}
    {<prefix>:author_id}
    {<prefix>:forum_topic_id}
    {<prefix>:ip_address}
    {<prefix>:url_title}
    {<prefix>:status}
    {<prefix>:versioning_enabled}
    {<prefix>:view_count_one}
    {<prefix>:view_count_two}
    {<prefix>:view_count_three}
    {<prefix>:view_count_four}
    {<prefix>:allow_comments}
    {<prefix>:sticky}
    {<prefix>:entry_date}
    {<prefix>:year}
    {<prefix>:month}
    {<prefix>:day}
    {<prefix>:expiration_date}
    {<prefix>:comment_expiration_date}
    {<prefix>:edit_date}
    {<prefix>:recent_comment_date}
    {<prefix>:comment_total}
    {<prefix>:channel}
    {<prefix>:channel_short_name}
    {<prefix>:your_custom_field}


###### `site_id`

The Site id for the prefix

    {root:site_id}

###### `channel_id`

The channel id where this exists in

    {root:channel_id}

###### `author_id`

Who wrote this

    {root:author_id}

###### `forum_topic_id`

    {root:forum_topic_id}

###### `ip_address`

    {root:ip_address}

###### `url_title`

Useful for nav menus where wanting to link the topics

    {root:url_title}

###### `status`

The current status, example if it is open or closed

    {root:status}

###### `versioning_enabled`

    {root:versioning_enabled}

###### `allow_comments`

does this allow for comments returns 1 for yes

    {root:allow_comments}

###### `sticky`

Is this entry sticky? Returns 1 if true

    {root:sticky}

###### `entry_date`

    {root:entry_date}

###### `year`

    {root:year}

###### `month`

    {root:month}

###### `day`

    {root:day}

###### `expiration_date`

    {root:expiration_date}

###### `comment_expiration_date`

    {root:comment_expiration_date}

###### `edit_date`

    {root:edit_date}

###### `recent_comment_date`

    {root:recent_comment_date}

###### `comment_total`

    {root:comment_total}

###### `channel`

    {root:channel}

###### `channel_short_name`

    {root:channel_short_name}

###### `your_custom_field`

    {root:your_custom_field}

### `{exp:structure:nav_basic}`

#### Parameters

###### `add_level_classes`

defaults to no 

Displays class="level_1", class="level_2", etc on each li

    {exp:structure:nav_basic add_level_classes="yes|no"}

###### `add_span`

defaults to no 

Adds a span tag around each individual navigation element within the a tag

accepts: "y","n"

    {exp:structure:nav_basic add_span="yes|no"}

###### `add_unique_ids`

defaults to no 

Adds a unique ID to the a tag using the top parent slug, default seperator and pageslug or entry ID.

    {exp:structure:nav_basic add_unique_ids="yes|entry_id|no"}

###### `css_class`

Assigns a class to the ul.

    {exp:structure:nav_basic css_class="sub_navigation"}

###### `css_id`

Assigns an ID to the ul. You can add "none" to optionally display no ID.

    {exp:structure:nav_basic css_id="sub_navigation"}

###### `current_class`

defaults to here 

Change the class name added to the current page's li tag.

    {exp:structure:nav_basic current_class="active"}

###### `channel:title`

defaults to entry title (when unset) 

Uses a specific custom field per channel instead of the default title variable.

    {exp:structure:nav_basic channel:title="channel_name:field_name|another_channel:another_field"}

###### `exclude`

The parameter "exclude=" can be used to hide any single or multiple user defined entry numbers using the pipe character. All children under a specified ID will be hidden as well.

    {exp:structure:nav_basic exclude="24"}

###### `has_children_class`

yes/no

defaults to no 

Adds a class to pages that have children as an additional tiling hook.

accepts: "y","n"

    {exp:structure:nav_basic has_children_class="yes|no"}

###### `include`

integer

The parameter "include=" can be used to selectively show specific pages from the same level.

    {exp:structure:nav_basic include="24" }

###### `include_ul`

yes/no

defaults to yes Conditionally output the surrounding ul tag.

    {exp:structure:nav_basic include_ul="yes|no" }

###### `max_depth`

Only show up to XX levels deep from the current start_from parameter. Useful to hide pages under a desired level (like thank you or confirmation pages) or for main navigation.

    {exp:structure:nav_basic max_depth="2"}

###### `mode`

defaults to sub 

Options are "sub", "main", and "full". 

Replacement for EE1's nav_main, nav_sub, and nav_full tags. 

_sub_: only displays 2 levels and any children on the same level of the same branch 

_full_: show the full tree 

_main_: show top nav but never any children

    {exp:structure:nav_basic mode="sub"}

###### `override_hidden_state`

Show all pages regardless of whether they're set to be hidden from the nav.

accepts: "y","n"

Default: no

    {exp:structure:nav_basic override_hidden_state="yes"}

###### `show_overview`

defaults to no 

Shows a link at the top of your navigation that links to the current top level page. Use with rename_overview to change the title.

    {exp:structure:nav_basic show_overview="yes"}

###### `recursive_overview`

defaults to no Show the overview link on every level, instead of only the first one. Works with show_overview.

    {exp:structure:nav_basic recursive_overview="no|yes"}

###### `rename_overview`

defaults to "Overview" 

Rename the link at the top of your navigation that links to the current top level page. Use with show_overview to reveal. "title" uses the page's title field.

    {exp:structure:nav_basic rename_overview="Overview|Whatever|title"}

###### `start_from`

Used to indicate where to begin revealing children. The "start_from" parameter must be a full URI or URL.

    {exp:structure:nav_basic start_from="/about" or start_from ="/{segment_1}/{segment_2}"}

###### `strict_start_from`

Will NOT return a nav if there is no match to your "start_from" param. Normally, if there is no match, Structure returns the full nav starting from the base of your website.

    {exp:structure:nav_basic strict_start_from="yes"}

###### `show_depth`

Reveals XX levels deep for ALL children pages of the current start_from parameter.

    {exp:structure:nav_basic show_depth="2"}

###### `show_expired`

yes/no

defaults to no 

Allows you to show or not show expired entries within the navigation tree.

accepts: "y","n"

    {exp:structure:nav_basic show_expired="yes|no"}

###### `show_future_entries`

Allows you to show or not show future entries within the navigation tree.

accepts: "y","n"

Default: no

    {exp:structure:nav_basic show_future_entries="yes|no"}

###### `site_url`

defaults to no Include the absolute site URL in your nav links instead of relative links.

    {exp:structure:nav_basic site_url="yes|no"}

###### `status`

defaults to Open 

Restrict pages by status, using normal EE syntax. When prefixed with "not" all entries except those are available.

    {exp:structure:nav_basic status="Radical|Sweet"}

#### Variables

All tags are prefixed based on their depth. The tag prefixes go in this order:

 - `root`
 - `child`
 - `grandchild`
 - `great_granchild`
 - etc.

The basic tag has these variables (where is one of the depth levels listed above)

 - `{<prefix>:entry_id}`
 - `{<prefix>:title}`
 - `{<prefix>:page_url}`
 - `{<prefix>:page_uri}`
 - `{<prefix>:count}`
 - `{<prefix>:total_results}`
 - `{if <prefix>:active}{/if}`
 - `{if <prefix>:has_active_child}{/if}`
 - `{if <prefix>:has_children}`

There is also the children tag pair:

    {<prefix>:children}
      {<next prefix>:entry_id}
      {<next prefix>:title}
      {<next prefix>:children}
        {<next next prefix>:entry_id}
      {/<next prefix>:children}
    {/<prefix>:children}

Which would look like this with real prefixes:

    {root:children}
      {child:entry_id}
      {child:title}
      {child:children}
        {grandchild:entry_id}
      {/child:children}
    {/root:children}

### `{exp:structure:saef_select}`

Used inside a Channel Form to select the parent and template assign to a page

#### Parameters

##### `type`

string

defaults to none 

Outputs form fields to select the template or parent

    {exp:structure:saef_select type=”template|parent”}

### `{exp:structure:siblings}`

This tag will traverse back and forth between siblings pages in your main navigation tree and auto-detect where you are in the hierarchy.

#### Parameters

###### `entry_id`

defaults to Current page's ID Allows you to force a different starting page.

    {exp:structure:siblings entry_id="XX"}

#### Variable pairs

##### `next`

Available variables: `title`, `url`, `entry_id`, `parent_id`, `channel_id`, `status`

    {exp:structure:siblings}
        {next}
            {title}
        {/next}
    {/exp:structure:siblings}

#### `prev`

Available variables: `title`, `url`, `entry_id`, `parent_id`, `channel_id`, `status`

    {exp:structure:siblings}
        {prev}
            {title}
        {/prev}
    {/exp:structure:siblings}

### `{exp:structure:titletrail}`

The titletrail tag displays in a standardized format and has a few parameters to control its output. 

Format = Page You're On » Parent Page » Top Level Nav » Site Name

#### Parameters

##### `channel:title`

string

defaults to entry title (when unset) Uses a specific custom field per channel instead of the default title variable.

    {exp:structure:titletrail channel:title="channel:custom_field|channel_2:custom_field_2"}

##### `entry_id`

string

defaults to current page's ID Specify a trail to show

    {exp:structure:titletrail entry_id="XX"}

##### `reverse`

yes/no

Output = "Site Name » Parent Page » Page You're On"

    {exp:structure:titletrail reverse="yes"}

##### `separator`

Spaces are automatically added around the element for you.

    {exp:structure:titletrail separator=":"}

##### `site_name`

defaults to no 

Adds your site name to the beginning of the trail.

    {exp:structure:titletrail site_name="yes"}
