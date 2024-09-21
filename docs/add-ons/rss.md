<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# RSS

[TOC]

The main purpose of the RSS tag is to render the top portion of the feed containing the name of the author, the character encoding, etc., while the main channel tag renders the actual rows.

The RSS Module Tag is intended to be used in conjunction with the [Channel Entries Tag](channels/entries.md). The entire RSS feed is enclosed between the following tags:

    {exp:rss:feed}

    {/exp:rss:feed}

## Sample RSS and Atom Templates

- [Sample Atom Feed](_downloads/sample-atom.txt)
- [Sample RSS Feed](_downloads/sample-rss.txt)

## Parameters

[TOC=3]

If you use any of the following parameters, you will probably want to mirror the same settings for your {exp:channel:entries} tag contained inside the RSS tag.

### `channel=`

    channel="which"

**Required**. From which [channel](control-panel/channels.md) to show the meta data information.

### `show_expired=`

    show_expired="yes"

You can determine whether you wish for entries that have "expired" to be included.

### `show_future_entries=`

    show_future_entries="yes"

You can determine whether you wish for entries dated in the "future" to be included. This option is useful when doing things like creating a list of events, some of which have not occurred yet. Note that EE will still display past entries; this parameter simply instructs EE to also include entries from the future.

### `show_offline_sites=`

    show_offline_sites="no"

When this option is set to "no", entries from MSM sites that are set to "offline" will not be included in the results. The default is "yes", which includes entries from offline sites.


### `status=`

    status="open"

You may restrict to a particular [status](control-panel/channels.md#statuses-tab). You can choose multiple statuses using a pipe:

    status="draft|reviewed|published"

Or exclude statuses using "not"

    status="not submitted|processing|closed"

### `username=`

    username="petunia"

This parameter limits the query by username. You can use the pipe character to query by multiple usernames

    username="tom|dick|harry"

Or you can add "not" to exclude usernames

    username="not tom|dick|harry|fred"

You can also use the constant "CURRENT_USER" to show entries from only the currently logged in user.

    username="CURRENT_USER"

This allow each logged-in user to get only their entries. Users who are not logged in won't see anything. Alternatively, you can use the constant "NOT_CURRENT_USER" to show entries **except** from the currently logged in user.

    username="NOT_CURRENT_USER"

## Variables

[TOC=3]

### `{author}`

The name of the person who submitted the last entry.

### `{channel_description}`

The description of the channel.

### `{channel_id}`

ID number of the channel (not the channel entry, the actual channel).

### `{channel_language}`

The code for the language the channel is in (en-us, etc.).

### `channel_name}`

The name of the channel.

### `{channel_url}`

The URL associated with the channel as set in the "Channel URL" preference under [Channel Administration](control-panel/channels.md).

### `{date}`

    {date format="%Y %m %d"}

The date on which the last entry was submitted. See [Date Variable Formatting](templates/date-variable-formatting.md) for more information.

### `{edit_date}`

    {edit_date format="%Y %m %d"}

The date on which the entry was last edited. See [Date Variable Formatting](templates/date-variable-formatting.md) for more information.

### `{email}`

The email of the person submitting the very last entry.

### `{encoding}`

The XML character encoding for the channel.

### `{gmt_entry_date}`

    {gmt_entry_date format="%Y %m %d"}

The date the entry was submitted in GMT. This variable is **not** localized for each user's date settings. See [Date Variable Formatting](templates/date-variable-formatting.md) for more information.

### `{gmt_edit_date}`

    {gmt_edit_date format="%Y %m %d"}

The date on which the entry was last edited in GMT. This variable is **not** localized for each user's date settings. See [Date Variable Formatting](templates/date-variable-formatting.md) for more information.

### `{version}`

The version of ExpressionEngine that you are using (1.0, 1.1, etc.). This data is pulled from system/core/core.system.php.

## RFC3229 Support

ExpressionEngine has the ability to serve only new content if it receives an [RFC3229-compliant](https://www.ietf.org/rfc/rfc3229.txt) request. This means that programs or servers that are configured to do so can request to only see new content that has been produced since the last time it requested a feed and EE will provide only that new content. This allows you to reduce bandwidth costs and download time by only serving the necessary content.

This ability is provided by adding a special parameter to the {exp:channel:entries} opening tag, `channel_entries_dynamic_start`. It is used like so:

    {exp:channel:entries channel="default_site" limit="10" dynamic_start="yes"}

## Empty Feeds and Errors

If the combination of tag parameters you specify leads to an error or an empty feed, ExpressionEngine will output a valid, empty RSS feed for you. If you'd like to display the tag errors in this default feed to help troubleshoot why no entries are available, you can put the RSS module into debug mode by adding the debug= parameter:

    {exp:rss:feed channel="default_site" debug="yes"}

If you want, you can also specify your own feed to use in place of the default, with the option of displaying the tag error as well, using the {if empty_feed} conditional. Tag errors can be displayed with the {error} variable.:

    {if empty_feed}
        <?xml version="1.0" encoding="{charset}"?>
        <rss version="2.0">
            <channel>
                <title>{site_name}</title>
                <link>{site_url}</link>
                <description>{site_name}</description>
                <item>
                    <title>Feed Error</title>
                    <description>{error}</description>
                </item>
            </channel>
        </rss>
    {/if}
