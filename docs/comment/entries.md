<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Comment Entries Tag

[TOC]

The Comment Entries Tag enables you to show the user-submitted comments associated with your entries.

NOTE: **Note:** The Comment Entries Tag is intended for use in one of your "single entry" pages. That is, a page that shows a single, specific channel entry. Therefore, your Comment page must be linked to from within your Channel entries using the `channel_entries_url_title_path` variable or the `channel_entries_entry_id_path` variable, so that the comments can be associated to a specific entry.

Here is a basic example showing how you might use the comment tag:

    {exp:comment:entries sort="asc" limit="20"}
      {comment}
      <p>By {name} on {comment_date format="%Y %m %d"}</p>
    {/exp:comment:entries}

NOTE: **Important:** The Comment Entries tag should **not** be nested inside of a standard {exp:channel:entries} tag. If you do, the outer tag will replace many of these variables and conditionals before the Comment Entries tag has the chance to do so.

## Parameters

[TOC=3 hide]

### `author_id=`

    author_id="5"

### `channel=`

    channel="which"

From which [channel](control-panel/channels.md) to show the comments (will show comments from any channel if no channel is specified). Additionally, you can use the pipe character to separate multiple channels:

    channel="channel1|channel2|channel3"

Or you can add the word "not" (with a space after it) to exclude channels:

    channel="not channel1|channel2|channel3"

The channel= parameter can have some security implications. If you do **not** use this parameter then it is possible that people could see comments for a channel entry that they otherwise would not have access to. If you use multiple channels and want to make sure only certain people can see certain content, then you're encouraged to make use of this parameter.

### `comment_id=`

    comment_id="22"

You can hard code the comment entries tag to show specific comments. As with the entry_id parameter, you may also specify multiple comments by separating them with the pipe character. This parameter takes precedence over any entry specified in the url.

### `dynamic=`

    dynamic="no"

The channel and comment display engines set some parameters dynamically, based on what is in the URL. There are times, however, where you do not want the parameters affected by what the URL contains. To override the dynamic nature of the comment tag, use dynamic="no".

This is often useful if you want to list comments in a "sidebar" on your site and have them always be the same ones regardless of which page on your site you visit (main page, archives, comments, etc.). Using this, you can create a "recent comments" list. By setting dynamic="no" you will ensure that the list is not affected by anything passed in the URL.

When dynamic is set to 'no', pagination will still function using an 'N' as a pagination indicator in the url rather than the standard 'P' indicator.

### `entry_id=`

    entry_id="24"

You can hard code the comment entries tag to show comments for a specific channel entry by its entry ID. You may also specify comments from multiple entries by separating them with the pipe character:

    entry_id="13|42|147" Or use "not" to exclude entries::

    entry_id="not 45|534|807"

NOTE: **Note:** This parameter takes precedence over any entry specified dynamically in the URL, so when using this parameter you will want to make sure it is clear to the user which entry the displayed comments belong to.

### `entry_status=`

    entry_status="Featured"

### `limit=`

    limit="30"

Allows you to limit the number of comments. The limit will default to 100 comments if a value is not specified. If you are using [pagination](templates/pagination.md) then this will determine the number of comments shown per page.

### `orderby=`

    orderby="date"

The "order" parameter sets the display order of the comments. Setting options for this parameter include:

- orderby="date"
- orderby="email"
- orderby="location"
- orderby="name"
- orderby="url"
- orderby="random"

### `paginate=`

    paginate="top" paginate="bottom"  paginate="both"  paginate="inline"

This parameter is for use with entry [pagination](templates/pagination.md) and determines where the pagination code will appear for your comments:

1.  **top**: The navigation text and links will appear _above_ your list of comments.
2.  **bottom**: The navigation text and links will appear _below_ your list of comments.
3.  **both**: The navigation text and links will appear both above and below your list of comments.
4.  **inline**: The navigation text and links will appear within the list of entries for each entry.

If no parameter is specified, the navigation block will default to the "bottom" behavior.

### `paginate_base=`

    paginate_base="site/index"

This tells ExpressionEngine to override the normal [pagination](templates/pagination.md) link locations and point instead to the explicitly stated template group and template.

### `show_expired=`

    show_expired="yes"

You can determine whether you wish for comments on "expired" entries to be included.

### `sort=`

    sort="asc" ``sort="desc"``

The sort order can be "asc" (ascending order or "oldest item first" for dates) or "desc" (descending order or "newest item first" for dates). If you do not use a sort order the default is desc.

### `status=`

    status="Closed"

### `url_title=`

    url_title="my_wedding"

You can hard code the comment entries tag to show comments for a specific channel entry by its URL title.

NOTE: **Note:** This parameter takes precedence over any entry specified dynamically in the URL, so when using this parameter you will want to make sure it is clear to the user which entry the displayed comments belong to.

## Variables

[TOC=3 hide]

### `{absolute_count}`

The absolute "count" out of the current comment being displayed by the tag, including those comments on previous pages (if using pagination).

If five entries are being displayed per page, then for the fourth entry on the second page the {absolute_count} variable would have a value of "9".

### `{absolute_results}`

This variable will always display the absolute total number of results that are returned by the tag, regardless of pagination.

### `{absolute_reverse_count}`

The _opposite_ of `{absolute_count}`, in that it displays the entry count position counting backwards from the absolute total. Works across pagination, so the fifth entry in a list of fifteen entries would display "10".

### `{author}`

The comment author's screen name, if a member; otherwise, this variable will display the name submitted with the comment.

    <a href="https://example.com/index.php/member/{author_id}/">{author}</a>

### `{author_id}`

The ID corresponding to the comment author's member profile. This is only applicable if the comment was left by a registered member. Non-registered commenters will return a zero (0).

This can be useful for creating links to the commenter's member profile:

    <a href="https://example.com/index.php/member/{author_id}/">{name}</a>

### `{avatar_image_height}`

The height of the avatar image associated with the entry's author. Typically used as such:

    {if avatar} <img src="{avatar_url}" width="{avatar_image_width}" height="{avatar_image_height}" alt="{author}'s avatar" /> {/if}

### `{avatar_image_width}`

The width of the avatar image associated with the entry's author. Typically used as such:

    {if avatar} <img src="{avatar_url}" width="{avatar_image_width}" height="{avatar_image_height}" alt="{author}'s avatar" /> {/if}

### `{avatar_url}`

The URL to the avatar image associated with the entry's author. Typically used as such:

    {if avatar} <img src="{avatar_url}" width="{avatar_image_width}" height="{avatar_image_height}" alt="{author}'s avatar" /> {/if}

### `{channel_id}`

The ID number of the channel that the comment belongs to.

### `{channel_short_name}`

The short name of the channel of that the comment belongs to.

### `{channel_title}`

This variable simply displays the content from the "Full Channel Name" setting of the channel that the comment belongs to.

### `{channel_url}`

The channel's URL, from its channel settings.

### `{comment}`

The actual comment.

### `{comment_auto_path}`

This variable is replaced by the URL set in the **Comment Page URL** preference under `Developer --> Channels` in the channel's **Settings** tab. No entry id, URL Title, or other information is included; this is simply the exact URL from the preference.

### `{comment_date}`

    {comment_date format="%Y %m %d"}

The date of the comment. See [Date Variable Formatting](templates/date-variable-formatting.md) for more information.

### `{comment_entry_id_auto_path}`

This variable is replaced by the URL set in the **Comment Page URL** preference under `Developer --> Channels` in the channel's **Settings** tab. The ID number of the entry will be automatically added. For example, this:

    <a href="{comment_entry_id_auto_path}">my entry</a>

Would be rendered like this:

    <a href="https://example.com/index.php/channel/comments/234/">my entry</a>

### `{comment_expiration_date}`

    {comment_expiration_date format='%Y-%m-%d'}

The date on which commenting expires for this entry, if they do.

### `{comment_id}`

The ID associated with the comment. Handy for making anchor links:

    <div id="comment-{comment_id}">
      {comment}
      <p><a href="{path='news/comments'}#comment-{comment_id}">link</a></p>
    </div>

### `{comment_site_id}`

The Site ID for the comment.

### `{comment_stripped}`

The body of the comment without any typographical processing and with ExpressionEngine tags encoded. This tag is for use in [comment editing](comment/form.md#allowing-members-to-edit-comments-on-the-front-end).

### `{comment_url}`

The channel's base comment URL, from its channel settings. No URL title or entry ID is added.

### `{comment_url_title_auto_path}`

This variable is replaced by the URL set in the **Comment Page URL** preference under `Developer --> Channels` in the channel's **Settings** tab. The URL Title of the entry will be automatically added. For example, this:

    <a href="{comment_url_title_auto_path}">my entry</a>

Would be rendered like this:

    <a href="https://example.com/index.php/channel/comments/ice_cream/">my entry</a>

### `{count}`

The "count" out of the current comment being displayed by the tag on the current page.

If five entries are being displayed per page, then for the fourth entry on the page the {count} variable would have a value of "4".

### `{edit_date}`

    {edit_date format="%Y %m %d"}

The date on which the comment was edited. See [Date Variable Formatting](templates/date-variable-formatting.md) for more information.

### `{email}`

The comment author's email address, if specified.

### `{entry_author_id}`

The member ID for the creator of the entry whose comments are being displayed.

### `{entry_id}`

The ID number of the entry

### `{entry_id_path}`

    {entry_id_path='channel/comments'}

The URL to the specified template. The ID number of the entry with which the comment is associated will be automatically added. For example, this:

    <a href="{entry_id_path='channel/comments'}">my entry</a>

Would be rendered like this:

    <a href="https://example.com/index.php/channel/comments/234/">my entry</a>

### `{ip_address}`

The IP address of the commenter

### `{location}`

The commenter's location as entered in their profile

### `{member_group_id}`

The commenter's primary role id (0 for non-members)

### `{member_search_path=}`

    {member_search_path='search/results'}

This variable is replaced by a URL that passes the author's member name to your search results Template. In this way, you can display all entries made by the author. You should specify the Template_Group/Template that you use to display search results. For example:

    <a href="{member_search_path='search/results'}">View entries by this member</a>

### `{name}`

Name of the author of the comment

### `{reverse_count}`

The _opposite_ of `{count}`, in that it displays the entry count position counting backwards from the total. Like `{count}`, this is relative to the number of entries the tag is currently displaying. If you want the counts to include paginated results, you may want `{absolute_reverse_count}`.

### `{signature}`

The signature associated with the entry's author. Typically used as such:

    {if signature} <p>{signature}</p> {/if}

### `{signature_image_height}`

The height of the signature image associated with the entry's author. Typically used as such:

    {if signature_image} <img src="{signature_image_url}" width="{signature_image_width}" height="{signature_image_height}" alt="{author}'s signature" /> {/if}

### `{signature_image_url}`

The URL to the signature image associated with the entry's author. Typically used as such:

    {if signature_image} <img src="{signature_image_url}" width="{signature_image_width}" height="{signature_image_height}" alt="{author}'s signature" /> {/if}

### `{signature_image_width}`

The width of the signature image associated with the entry's author. Typically used as such:

    {if signature_image} <img src="{signature_image_url}" width="{signature_image_width}" height="{signature_image_height}" alt="{author}'s signature" /> {/if}

### `{status}`

The comment's status (one of "open", "closed", or "pending").

### `{switch=}`

    {switch="option_one|option_two|option_three"}

This variable permits you to rotate through any number of values as the entries are displayed. The first entry will use "option_one", the second will use "option_two", the third "option_three", the fourth "option_one", and so on.

The most straightforward use for this would be to alternate colors. It could be used like so:

    {exp:comment:entries} <div class="{switch="one|two"}"> <h1>{name}</h1> {comment} </div> {/exp:comment:entries}

The entries would then alternate between &lt;div class="one"&gt; and &lt;div class="two"&gt;.

Multiple instances of the {switch=} tag may be used and the system will intelligently keep track of each one.

### `{title}`

The title of the channel entry with which the comment is associated.

### `{total_comments}`

The total number of comments for this tag on all pages.

### `{total_results}`

The total number of comments being displayed by this tag on the current page.

### `{url}`

The author's raw URL, if it exists.

### `{url_as_author}`

Hyperlink pointing to the URL (if it exists) with the author name as the link title. If the URL does not exist simply the name is returned.

### `{url_or_email}`

URL if it exists, otherwise the email address.

### `{url_or_email_as_author}`

Hyperlink or email link as author screen_name (or username if they haven't specified a screen name).

### `{url_or_email_as_link}`

Same as above only it will display the URL or email address as a link.

### `{url_title}`

The URL title of the channel entry associated with this comment.

### `{url_title_path}`

    {url_title_path='channel/comments'}

The URL to the specified template. The "url title" of the entry with which the comment is associated will be automatically added. For example, this:

    <a href="{url_title_path='channel/comments'}">permalink</a>

Would be rendered like this:

    <a href="https://example.com/index.php/channel/comments/ice_cream/">permalink</a>

### `{username}`

The author's username (returns FALSE for non-members)

### Custom Member Fields

All custom member profile fields can be accessed using the "short name" of the field:

    {age} {gender} {zodiac} etc..

These are totally dynamic in that any profile field you create for your members will automatically be available by its "short name" as a variable.

## Conditionals

[TOC=3]

The following special conditionals are available.

NOTE: **Important:** Avoid using Template Caching on any Template containing these conditional that are user-specific. If you do not avoid caching, then data will not be dynamic for each user. Instead, whoever happens to load the page when it gets cached will have their conditionals applied to every subsequent visitor until the cache expires.

### `{if allow_comments}`

    {if allow_comments} content {/if}

TRUE / FALSE, Whether or not the entry being displayed allows comments. Typically used as a conditional.

### `{if avatar}`

    {if avatar} content {/if}

This special conditional lets you conditionally display content if the current entry's author has an avatar image specified.

    {if avatar} <img src="{avatar_url}" width="{avatar_image_width}" height="{avatar_image_height}" alt="{author}'s avatar" /> {/if}

### `{if can_moderate_comment}`

TRUE / FALSE, Whether a member has permission to edit a given comment AND/OR close that comment. Used in conjunction with [comment editing](comment/form.md#allowing-members-to-edit-comments-on-the-front-end).

### `{if comments_expired}`

    {if comments_expired} content {/if}

If commenting has expired (and expiration is not set to be [overridden by moderation](comment/control-panel.md)), the contents of this conditional will be displayed.

NOTE: **Note:** `{if no_results}` has precedence over this conditional. If there are no comments, this conditional is not evaluated.

### `{if comments_disabled}`

    {if comments_disabled} content {/if}

If commenting has been disabled, the contents of this conditional will be displayed.

NOTE: **Note:** `{if no_results}` has precedence over this conditional. If there are no comments, this conditional is not evaluated.

### `{if editable}`

    {if editable} Show Edit Form {/if}

TRUE / FALSE, This variable will be used in a conditional to allow [comment editing](comment/form.md#allowing-members-to-edit-comments-on-the-front-end). It indicates whether a member has [permission to edit a given comment](control-panel/member-manager.md#createedit-all-member-roles).

### `{if is_ignored}`

    {if is_ignored} content {/if}

This conditional allows you to show (or hide) specific content if the comment was made by a member on the logged-in user's ignore list. A simplified example of how this might be used is:

    {exp:comment:entries}
      {if is_ignored}You are ignoring {author}.{/if}
      <div {if is_ignored}style="display: none;"{/if}>{comment}</div>
    {/exp:comment:entries}

Or you can use Javascript to allow the user to read the comment if they wish:

    <script type="text/javascript">
      function showHideComment(el) {
          if (document.getElementById(el).style.display == "block") {
              document.getElementById(el).style.display = "none";
          }
          else {
              document.getElementById(el).style.display = "block";
          }
      }
    </script>

    {exp:comment:entries}
      {if is_ignored}
          <p><a href="#" onclick="showHideComment('{comment_id}')">View / Hide</a> comment from ignored member: {author}</p>
      {/if}

      <div id="{comment_id}" {if is_ignored}style="display: none;"{/if}>{comment}</div>
    {/exp:comment:entries}

NOTE: **Important:** Avoid using Template Caching on any Template containing this conditional. If you cache this, whoever happens to load the page when it is first cached will have their ignore list applied to everyone until the cache is cleared.

### `{if no_results}`

    {if no_results} content {/if}

You may use this conditional for displaying a message in the case when no comments are returned. The contents inside of the conditional will be displayed in cases where there are no results returned for the tag.

    {if no_results}  <p>There are no comments for this entry yet.</p>  {/if}

Further, you may specify that another Template be shown in a case when there are no results. In order to do that, you must use the redirect= variable:

    {if no_results} {redirect="site/noresult"} {/if}

### `{if signature_image}`

    {if signature_image} content {/if}

This special conditional lets you conditionally display content if the current entry's author has a signature image specified.

    {if signature_image} <img src="{signature_image_url}" width="{signature_image_width}" height="{signature_image_height}" alt="{author}'s signature" /> {/if}

## Displaying Recent Comments

The standard ExpressionEngine `{exp:comment:entries}` comment tag can be used to display a list of recent comments. Many people use a list like this in a sidebar of their site.

A simple example:

    {exp:comment:entries sort="desc" orderby="date" limit="10" dynamic="no"}
      {comment}
      <p>
        By {name} on {comment_date format="%Y %m %d"}<br>
        From the entry '<a href="{comment_url_title_auto_path}">{title}</a>'.
      </p>
    {/exp:comment:entries}

It is very important that the dynamic="no" parameter be included above. This is what allows ExpressionEngine to display the comments independent of a particular entry. Also note that you can use a number of values for the _comment-entries-orderby_ parameter.
