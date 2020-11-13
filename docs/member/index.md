<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Member Management

[TOC]

You'll find many member management options available at:

- The [Members](control-panel/member-manager.md) section, which hosts a comprehensive suite of member management utilities including the [Membership Preferences](control-panel/settings/members.md) page.
- The My Account Page, accessible from the Control Panel's sidebar. It can also display information for any member if you choose a particular member from `Members`.
- The public side of your website also has a Member Profile area, enabling your site members to manage their personal profile information without having access to your Control Panel. Typically, this Member Profile area is found at: `https://example.com/member/profile/`

NOTE: **Note:** A member account's Username and Screen Name can be identical, but the Username must be unique system-wide.

## Member Profile Templates

The public profile area has its own set of templates which can be edited to change the look. Theme assets such as images are located in your installation under `themes/ee/member/default/`. Theme templates are located under `system/ee/templates/_themes/member/`.

To customize the templates:

1.  Copy `themes/ee/member/theme_name/` to `themes/user/member/custom_theme_name/`
2.  Copy `system/ee/templates/_themes/member/theme_name/` to `system/user/templates/_themes/member/custom_theme_name/`

NOTE: **Note:** Any changes made to files in `themes/ee/`or `system/ee/` will be lost during an update. Customized themes must be saved in the `themes/user/` or `system/user/` folder.

Templates in `system/user/templates/_themes/member/` can be edited with a text editor, or you may choose to edit them via your Control Panel at `Developer --> Templates --> Members`.

To make edits to the templates from inside the Control Panel, set the `system/user/templates/_theme/` folders and files to be writable. See [File Permissions](troubleshooting/general.md#file-permissions) for details. Only themes in the `system/user/templates/_theme/` folder will be available for editing in the Control Panel.

If you do create a custom theme, you may set it as the site default under `Settings --> Member Settings`

NOTE: **Note:** When building your member profile templates, consider that any external links will pass along referrer data. This can cause security problems if someone clicks on an external link from a secure page. For example, if a user clicks an external link from the password reset page, the external site _could_ use the password reset link from the referrer data to gain access to a user's account. You can strip everything but the base URL by linking to `{path=""}?URL=<your url>`.

## Login Form Tag

The Login Form Tag allows you to place a login form in any template you choose, so that site members can log in.

NOTE: **Note:** The Member Profile Templates described above also contain a login form, which appears when someone who is not logged in tries to access a member-only area.

Here is how you might use the tag:

    {exp:member:login_form return="site/index"}
    <p>
      <label>Username</label><br />
      <input type="text" name="username" value="" maxlength="32" size="25" />
    </p>
    <p>
      <label>Password</label><br />
      <input type="password" name="password" value="" maxlength="32" size="25" />
    </p>
    {if auto_login}
    <p>
      <input type="checkbox" name="auto_login" value="1" /> Auto-login on future
      visits
    </p>
    {/if}

    <p>
      <input type="checkbox" name="anon" value="1" checked="checked" /> Show my name
      in the online users list
    </p>
    <p><input type="submit" name="submit" value="Submit" /></p>
    <p><a href="{path='member/forgot_password'}">Forgot your password?</a></p>
    {/exp:member:login_form}

### Parameters

The Login Form Tag will create an HTML form and include within its opening tag the minimum attributes necessary for it to work.  If you need additional attributes to be specified, The Simple Search Form Tag allows you to specify these attributes as additional parameters within the tag itself.  See the entry for [pass_through_attributes](#pass_through_attributes) in the parameter listing for more information.

[TOC=4]

#### `action=`

    action="https://example.com/"

Allows you to specify the action attribute of the &lt;form&gt; tag. Handy if you need to ensure that authentication points to SSL portions of your site from non-SSL portions. Often used in conjunction with the return= parameter and the [{current_url} global variable](templates/globals/single-variables.md#current_url) so your visitors will go back to the page and domain they logged in from.

#### `form_class=`

    form_class="login"

This parameter allows you to specify the class attribute for the &lt;form&gt; tag.

#### `form_id=`

    form_id="login"

This parameter allows you to specify the id attribute for the &lt;form&gt; tag.

#### `form_name=`

    form_name="login"

This parameter allows you to specify a name attribute for the &lt;form&gt; tag.

### `pass through attributes`

    data-automobile_type="buick" role="search" name="some name"

You can include in your tag a parameter with a name identical to any valid [HTML Form}(https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) attribute, any [HTML Global Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes), or the [ARIA Search role attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Search_role).  

If you assign a value to your parameter the value will be assigned to the attribute in the completed Form tag.  To include an attribute which does not take a value (e.g. `novalidate`) you need to define a null value for the parameter (i.e. `novalidate=""`).

If you specify a parameter with a name that is the same as an attribute already being set by the Login Form tag, the parameter value you enter will be ignored.


#### `return=`

    return="site/index"

This parameter allows you to define where the user will be returned after successfully logging in. The parameter can be defined in two ways:

1.  Use the standard Template_Group/Template syntax to specify where to return the user. For instance, if you want the user to be returned to the "local" Template in the "news" Template Group, you would use: return="news/local"
2.  Use a full URL. For example: return="<https://example.com/return.html>"

### Variables

#### `{if auto_login}`

    {if auto_login} {/if}

It is recommended that you use this variable as indicated in the example code at the top. This conditional will display the contents inside (typically the "stay logged in" checkbox) based on how your session preference is set. In order for this feature to work you must be set to use "cookies only" and not sessions.:

    {if auto_login}
      <p><input class="checkbox" type="checkbox" name="auto_login" value="1"> Auto-login on future visits</p>
    {/if}

## Creating Member Links

You can create links that point to various member-related pages, enable visitors to sign-up for an account, log-in, log-out, edit their profile, etc.

### Log In

This link points to the personal profile login page. To create the link, use this variable:

    {path='member/login'}

Place the variable inside of a link tag:

    <a href="{path='member/login'}">Log In</a>

### Log Out

This link allows users to log-out of the system. To create the link, use this variable:

    {path='logout'}

Place the variable inside of a link tag:

    <a href="{path='logout'}">Log Out</a>

### Registration Page

This link points to the member registration page. To create the link, use this variable:

    {path='member/register'}

Place the variable inside of a link tag:

    <a href="{path='member/register'}">Register as a new member</a>

### View Memberlist

This link points to the page showing a list of all registered members. To create the link, use this variable:

    {path='member/memberlist'}

Place the variable inside of a link tag:

    <a href="{path='member/memberlist'}">View the Memberlist</a>

### Member Profile Page

This link points to the personal profile page of the logged-in user, allowing them to edit any of their settings. To create the link, use this variable:

    {path='member/profile'}

Place the variable inside of a link tag:

    <a href="{path='member/profile'}">Edit your profile</a>

When the link is rendered it will appear similar to: <https://example.com/member/profile/>

### Forgotten Password?

This link points to the page where users can retrieve their password:

    {path='member/forgot_password'}

Place the variable inside of a link tag:

    <a href="{path='member/forgot_password'}">Forget your password?</a>

### Member Navigation

A good strategy for the above links is to use them within conditional tags that let you present links based on whether someone is logged in or not. Here's an example:

    {if logged_in}
      <a href="{path='member/profile'}">Edit your profile</a><br>
      <a href="{path='member/memberlist'}">View the Memberlist</a><br>
      <a href="{path='logout'}">Log Out</a>
    {/if}
    {if logged_out}
      Are you a member? Please <a href="{path='member/login'}">log-in</a>.<br>
      Not a member? <a href="{path='member/register'}">Register</a>.<br>
      Have you <a href="{path='member/forgot'}">forgotten your password</a>?
    {/if}

## Custom Profile Data Tag

The Custom Profile Data Tag allows you to display member profile information in your Templates. The data can either be shown from the currently logged-in user or from a specified user using the member_id="" parameter.

NOTE: **Note:** Remember that the profile information for the current visitor, such as {screen_name}, {email}, etc. are always available in any template as [Global Variables](templates/globals/single-variables.md). Therefore, only use this tag if you need to show custom profile data (that is, Member Fields that you have created yourself) or information for a specific user.

Here is a basic example:

    {exp:member:custom_profile_data}
      <p>{age}, {gender}</p>
    {/exp:member:custom_profile_data}

NOTE: **Important:** If you omit the member_id= parameter as in the above example, do _not_ enable Template Caching on any Template containing this tag. Otherwise the data will not be dynamic and whoever happens to load the page when it is cached will have their information shown for everyone until the cache expires. Unlike this tag, [Global Variables](templates/globals/single-variables.md) _can_ be used in templates that are cached.

### Parameters

#### `member_id=`

    member_id="147"

Specifies a particular member's information to display. By default (if you do not include the member_id parameter), the tag will simply display information pertaining to the currently logged-in user.

### Variables

[TOC=4]

#### `{avatar_height}`

The height of the avatar image associated with the user. Typically used as such:

    {if avatar}
      <img src="{avatar_url}" width="{avatar_width}" height="{avatar_height}" alt="{screen_name}'s avatar">
    {/if}

#### `{avatar_width}`

The width of the avatar image associated with the user. Typically used as such:

    {if avatar}
      <img src="{avatar_url}" width="{avatar_width}" height="{avatar_height}" alt="{screen_name}'s avatar">
    {/if}

#### `{avatar_url}`

The URL to the avatar image associated with the user. Typically used as such:

    {if avatar}
      <img src="{avatar_url}" width="{avatar_width}" height="{avatar_height}" alt="{screen_name}'s avatar">
    {/if}

#### `{email}`

The user's Javascript-encoded email address.

#### `{group_id}`

The user's Group ID.

#### `{join_date}`

    {join_date format="%Y %m %d"}

The date the user joined the site.

#### `{language}`

The user's language.

#### `{last_activity}`

    {last_activity format="%Y %m %d"}

The time of the user's last page load.

#### `{last_comment_date}`

    {last_comment_date format="%Y %m %d"}

The date of the user's last comment.

#### `{last_entry_date}`

    {last_entry_date format="%Y %m %d"}

The date of the user's last channel entry.

#### `{last_forum_post_date}`

    {last_forum_post_date format="%Y %m %d"}

The date of the user's last forum post.

#### `{last_visit}`

    {last_visit format="%Y %m %d"}

The date when the user was last active on the site PRIOR to their current session.

#### `{local_time}`

    {local_time format="%Y %m %d"}

The user's local time.

#### `{member_group}`

The user's member group.

#### `{member_id}`

The user's Member ID.

#### `{screen_name}`

The user's screen name.

#### `{search_path}`

The search path to show entries and posts by this user:

    <a href="{search_path}">View Entries by User</a>

#### `{send_private_message}`

The URL to send a Private Message to this user:

    <a href="{send_private_message}">Send Private Message to {screen_name}.</a>

#### `{signature}`

The user's signature.

#### `{timezone}`

The user's timezone.

#### `{total_comments}`

The total number of comments made by the user.

#### `{total_entries}`

The total number of entries made by the user.

#### `{total_forum_posts}`

The total number of forum posts made by the user.

#### `{total_forum_topics}`

The total number of forum topics made by the user.

#### `{username}`

The user's username.

## Other Member Fields

All other member fields that you created can be accessed using the Short Name of the field:

    {age}
    {gender}
    {zodiac}
    etc..

## Ignore List Tag

The Ignore List Tag allows you to display member profile information for members in a member's Ignore List. Fields can either be shown from the ignore list of currently logged-in user or from a specified user.

NOTE: **Important:** Avoid using Template Caching on any Template containing this tag. If you do not avoid caching, then data will not be dynamic for each user. Instead, whoever happens to load the page when it is cached will have their information shown for everyone until the cache expires. Unlike this tag, [Global Variables](templates/globals/single-variables.md) can be used in templates that are cached.

Here is the basic tag syntax:

    {exp:member:ignore_list}
      <p>{ignore_screen_name}</p>
    {/exp:member:ignore_list}

### Parameters

### `member_id=`

    member_id="147"

You can specify a particular member's information to display. By default (if you do not include the member_id parameter), the tag will simply display information pertaining to the currently logged-in user.

### Variables

The following member variables are available. The unique prefix "ignore\_" ensures that the Ignore List variables do not conflict with Global Variables or member variables from other tags.

- {ignore_member_id}
- {ignore_group_id}
- {ignore_group_description}
- {ignore_username}
- {ignore_screen_name}
- {ignore_email}
- {ignore_ip_address}
- {ignore_location}
- {ignore_total_entries}
- {ignore_total_comments}
- {ignore_private_messages}
- {ignore_total_forum_topics}
- {ignore_total_forum_replies}
- {ignore_total_forum_posts}
