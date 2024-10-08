<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Member Management

You'll find many member management options available at:

- The [Members](control-panel/member-manager.md) section, which hosts a comprehensive suite of member management utilities including the [Membership Preferences](control-panel/settings/members.md) page.
- The My Account Page, accessible from the Control Panel's sidebar. It can also display information for any member if you choose a particular member from `Members`.
- Member [global template variables](templates/globals/single-variables.md#member-variables), which allow you to output information on the current user.
- Member tags can be used to build a robust frontend member  area, enabling your site members to manage their personal profile information without having access to your Control Panel.


NOTE: **Note:** A member account's Username and Screen Name can be identical, but the Username must be unique system-wide.

- [Registration Tag](member/registration.md)
- [Login Tag](member/login.md)
- [Logout Tags](member/logout.md)
- [Forgot Password](member/forgot-password.md)
- [Forgot Username](member/forgot-username.md)
- [Reset Password](member/reset-password.md)
- [Multi-Factor Authentication Links](member/mfa.md)
- [Member List Tag](member/memberlist.md)
- [Member Search Form](member/search.md)
- [Custom Profile Data Tag](member/custom-profile-data.md)
- [Edit Profile Data Tag](member/edit-profile.md)
- [Member Roles Tags](member/member-roles-tags.md)
- [Ignore List Tag](member/ignore-list.md)
- [Profile Templates (Legacy)](member/profile-templates.md)

NOTE: **Note:** See the [template generator](control-panel/template-manager.md#template-generators) for the member templates in ExpressionEngine 7.5+.


### Member Navigation

A good strategy for member navigation links is to use them within conditional tags that let you present links based on whether someone is logged in or not. Here's an example:

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
