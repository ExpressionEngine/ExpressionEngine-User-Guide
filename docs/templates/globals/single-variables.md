<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Single Global Variables

[TOC]

These Global Variables can be used anywhere within your Templates. Note that they are subject to ExpressionEngine's [parsing order](templates/engine.md), which can affect their availability when used inside other tags.

## Variables

[TOC=3 hide]

### `{app_build}`

The build date of ExpressionEngine that you are using.

### `{app_version}`

The version of ExpressionEngine that you are using (2.2.0, 2.3.0, etc.).

### `{charset}`

This variable will be substituted for the global character set (UTF-8). It is typically used in your META tags to indicate the character encoding:

    <meta http-equiv="Content-Type" content="text/html; charset={charset}" />

### `{cp_session_id}`

The session id for the control panel. This is the value needed in the "S=" portion of the control panel URL. Only output for logged-in members who have access to the Control Panel, for instance to build a front-end URL to an add-on in the control panel:

    {if logged_in_role_id == 1}
      &bull; <a href="{cp_url}?/cp/addons/settings/my_addon&S={cp_session_id}"></a>
    {/if}

### `{cp_url}`

The URL to the control panel for this site. Only output for logged-in members who have access to the Control Panel.

### `{csrf_token}`

This variable is a required value for the hidden form field 'csrf_token'.

### `{current_path}`

This variable outputs the current URI path relative to your ExpressionEngine installation, e.g. _news/article/man-captures-all-the-rabbits_.

NOTE: **Note:** If there are no URL segments, this will output a slash: _/_

### `{current_time}`

This variable displays the current server time localized to each user's particular setting. As with other date variables, you will use the standard [date variable formatting](templates/date-variable-formatting.md):

    {current_time format="%Y %m %d %H:%i:%s"}

NOTE: **Note:** Unlike the rest of the Standard Global Variables, `{current_time}` is parsed very early on in the Template parser, which allows you to make dynamic use of it in your tags, for instance as a tag parameter, or in a conditional.

### `{current_query_string}`

This variable displays the current security-filtered query string, which can be useful to append to your path variables when you want a link to retain the current query string, e.g.:

    gclid=1123581321

NOTE: **Note:** This variable has already been URL encoded so all characters are transported safely and ready to append to URLs as needed.

### `{current_url}`

This variable displays the full current URL.

### `{debug_mode}`

This variable will be substituted with either "on" or "off" based on your debug mode settings.

### `{doc_url}`

This variable will be substituted with the user guide URL.

### `{elapsed_time}`

The amount of time, in seconds, it took ExpressionEngine to render the current page.

### `{embed`}

    {embed='news/local'}

This variable allows you to embed one Template within another. Please see the [Embedded Templates](templates/embedding.md) section.

### `{encode}`

    {encode="you@example.com" title="Email Me!"}

This variable will encode the specified email address using javascript and HTML entities to make it more difficult for spam harvesters to grab an email address from your site. If you normally show your email address on your site you are encouraged to use this variable. The title parameter on the variable allows you to specify the text you want to use for the link.

    Email Me!

### `{gzip_mode}`

This variable will be substituted with either "on" or "off" based on your output compression settings mode settings.

### `{hits}`

This variable will be substituted with the number of hits that any given template containing the variable has received.

### `{homepage}`

This variable will be substituted with the **URL to the root directory of your site** preference under `Settings --> URL and Path Settings`.

### `{is_ajax_request}`

Boolean (TRUE/FALSE) variable representing whether or not the template is being accessed via an Ajax request (XMLHttpRequest header). Most commonly this would be used to prevent direct access of template stubs used as content providers for Ajax, e.g.:

    {if ! is_ajax_request}
      {redirect="404"}
    {/if}

    {!-- ExpressionEngine tags below to define content to return --}

### `{is_live_preview_request}`

Boolean (TRUE/FALSE) variable representing whether or not the current request is a Live Preview from the control panel. Most commonly you would use this to add/hide information on your preview page for content authors:

    {if is_live_preview_request}
      {!-- include sample rendering of a social share, Twitter card, FB post, etc. --}
    {/if}

### `{lang}`

This variable will be substituted for the **Default XML Language** preference under `Settings --> General Settings`.

### `{layout}`

    {layout="news/local"}

This variable allows you to wrap a Template in another. Please see the [Template Layouts](templates/layouts.md) section.

### `{member_group}`

The Primary Role ID number for the currently logged-in user.

### `{member_profile_link}`

This variable will be substituted with a link to the public profile page for the currently logged in user. The text of the link will be the member's screen name. For instance, the output might be:

    <a href="https://example.com/member/1/">Joe Smith</a>

### `{password_max_length}`

This variable is used the `maxlength` property of password inputs on login forms:

    <input type="password" name="password" maxlength="{password_max_length}" autocomplete='off' />

### `{redirect}`

    {redirect='news/local' status_code="301"}

This variable allows you redirect the visitor to another template. Typically this will mean that you will be utilizing the tag within conditionals.

    {if segment_3 != 'cookies'}   {redirect='bake/cookies'} {/if}

You can also use the redirect variable to provide tighter control of your URLs, and trigger 404 pages in certain conditions. When you want to display your 404 page, just use "404" for the template. For instance, you might do this on a template group's 'index' template that you do not wish to be displayed if an arbitrary second URL segment exists.

    {if segment_2 != ''}   {redirect="404"} {/if}

Be careful that through your redirect variables that you do not create an infinite loop.

The `status_code` parameter lets you optionally pass a [3xx redirect code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#3xx_Redirection) (e.g. 301, 302).

### `{site_description}`

Available to MSM sites only, this variable will be substituted with your site's description as defined under `Developer --> Site Manager`.

### `{site_name}`

This variable will be substituted with your site name as defined under `Settings --> General Settings`.

### `{site_url}`

This variable will be substituted with your site URL as defined under `Settings --> URL and Path Settings`.

### `{site_id}`

This variable will be substituted with the ID of your site as defined under `Developer --> Sites` (if MSM is enabled).

### `{template_name}`

This variable displays the name of the template currently being processed.:

### `{template_group}`

This variable displays the name of the template group for the template currently being processed.:

### `{template_id}`

This variable displays the numeric ID of the template currently being processed.

### `{template_type}`

This variable displays the [type](control-panel/template-manager.md#edit-template) of the template currently being processed (e.g. "webpage", "rss", "xml", etc.).

### `{template_edit_date}`

This variable displays the localized time for when the template was last updated. As with other date variables, you will use the standard [date variable formatting](templates/date-variable-formatting.md):

    {template_edit_date format="%Y %m %d %H:%i:%s"}

### `{theme_folder_url}`

The URL to your theme/ee folder.

### `{theme_user_folder_url}`

The URL to your theme/user folder.

### `{total_queries}`

The total number of database queries used to generate the current page.

### `{variable_time}`

This variable accepts a date parameter in the form of a human readable date, including `relative_dates`. Some examples of valid `date=` values:

- `date='2018-04-30'`
- `date='April 30, 2018'`
- `date='+2 weeks'`
- `date='2 days ago'`
- `date='next Monday'`

The result is a standard ExpressionEngine date variable, and can use all [date variable formatting](templates/date-variable-formatting.md) and comparisons available to other date variables. In the case of `:relative` dates, the date is relative to the current user's localized time. If no date parameter is give, the tag works just like the `{current_time}` variable.

Given a current date of April 12, 2018, see the following examples:

    {variable_time date="2 days ago" format="%F %d, %Y"}
    {!-- April 10, 2018 --}

    {variable_time:relative date='2018-10-25' units='days'}
    {!-- in 197 days --}

    {variable_time date='{segment_3}-{segment_4}' format='%F'}
    {!-- April (given a URL of https://example.com/news/archive/2018/04) --}

    {if "{variable_time date='2 weeks ago' format='%U'}" >= "{variable_time date='2018-04-12'}"}
    {!-- TRUE, if the current date is within 2 weeks of April 12, 2018. This works because both are output as Unix timestamps allowing basic <, >, =  for chronological comparisons. --}

NOTE: **Note:** Like the `{current_time}` variable, `{variable_time}` is available to use as a tag parameter.

### `{webmaster_email}`

    {encode="{webmaster_email}" title="Contact Us"}

The email address for the site, as specified in [Email Configuration](control-panel/settings/email.md).

## Member Variables

[TOC=3]

### `{logged_in_email}`

The email address for the currently logged-in user.

### `{logged_in_primary_role_id}`

The Primary Role ID number for the currently logged-in user.

### `{logged_in_primary_role_name}`

The title of the Primary Role for the currently logged-in user.

### `{logged_in_primary_role_short_name}`

The short name of the Primary Role for the currently logged-in user.

### `{logged_in_primary_role_description}`

The Primary Role description for the currently logged-in user.

### `{logged_in_ip_address}`

This variable will be substituted with the IP address of the currently logged in user.

### `{logged_in_member_id}`

The Member ID for the currently logged-in user.

### `{logged_in_private_messages}`

The number of unread private messages for the currently logged-in user.

### `{logged_in_screen_name}`

The screen name for the currently logged-in user.

### `{logged_in_total_comments}`

The total number of comments posted by the currently logged-in user.

### `{logged_in_total_entries}`

The total number of entries posted by the currently logged-in user.

### `{logged_in_total_forum_posts}`

The total number of forum posts made by the currently logged-in user.

### `{logged_in_total_forum_replies}`

The total number of replies to forum posts by the currently logged-in user.

### `{logged_in_total_forum_topics}`

The total number of forum topics made by the currently logged-in user.

### `{logged_in_username}`

The username for the currently logged-in user.
