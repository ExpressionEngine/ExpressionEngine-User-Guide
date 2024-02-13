<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Cookies

[TOC]

HTTP cookies are small bits of data set by a website or app and stored on the user's computer while the user is browsing. ExpressionEngine uses a number of cookies to help create a nicer user experience, both for guests and logged in members.

Cookies that are necessary to the functioning

By default, ExpressionEngine cookies are prefixed with `exp_`, so the session cookie would be named `exp_sessionid`. However, the prefix can be configured in [Security & Privacy](control-panel/settings/security-privacy.md).

NOTE: **Note:** This should not be considered an exhaustive list of cookies that might be in use on a given site. Third party add-ons may have their own cookies and cookies may be set outside of ExpressionEngine entirely.

## Basic Cookies

| Name              | Description                                                                                                | Expiration | Type               |
| ----------------- | ---------------------------------------------------------------------------------------------------------- | ---------- | ------------------ |
| csrf_token        | A security cookie used to identify the user and prevent Cross Site Request Forgery attacks.                | 2 hours    | Strictly Necessary |
| flash             | Control panel user feedback messages, encrypted for security.                                              | Session    | Strictly Necessary |
| last_activity | Records the time of the last page load. Used in in calculating active sessions.                                | 360 days   | Functionality |
| last_visit    | Date of the user’s last visit, based on the last_activity cookie.  Can be shown as a statistic for members and used by forum and comments to show unread topics for both members and guests. | 360 days   | Functionality |
| remember          | Determines whether a user is automatically logged in upon visiting the site.                               | 2 weeks    | Strictly Necessary |
| sessionid         | Session id, used to associate a logged in user with their data.                                            | 1-2 hours  | Strictly Necessary |
| visitor_consents  | Saves responses to Consent requests for non-logged in visitors                                             | 360 days   | Strictly Necessary |
| anon              | Determines whether the user’s username is displayed in the list of currently logged in members.            | 2 weeks    | Functionality      |
| tracker           | Contains the last 5 pages viewed, encrypted for security. Typically used for form or error message returns.| Session    | Functionality      |
| cp_last_site_id   | MSM cookie indicating the last site accessed in the Control Panel.                                         | Session    | Functionality      |
| viewtype          | Indicates "thumb view" or "table view" for File Manager in Control Panel.                                  | 360 days   | Functionality      |
| ee_cp_viewmode    | Indicates whether "navigation-less" mode should be used in Control Panel.                                  | 360 days   | Functionality      |
| collapsed_nav     | Indicates whether main sidebar navigation in Control Panel should be collapsed.                           | 360 days   | Functionality      |

NOTE: **Note:** If you need to define how long the user will stay logged in for, you can change the lifetime of the remember cookie by copying [`system/ee/ExpressionEngine/Config/remember.php`](https://github.com/ExpressionEngine/ExpressionEngine/blob/6.dev/system/ee/ExpressionEngine/Config/remember.php) to `/system/user/config/stopwords.php` and changing the value of the `remember_me_ttl` property in that file.



## Comment Cookies

| Name           | Description                                                                                                   | Expiration | Type          |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ---------- | ------------- |
| my_email\*     | Email address specified when posting a comment.                                                               | 360 days   | Functionality |
| my_location\*  | Location specified when posting a comment.                                                                    | 360 days   | Functionality |
| my_name\*      | Name specified when posting a comment.                                                                        | 360 days   | Functionality |
| my_url\*       | URL specified when posting a comment.                                                                         | 360 days   | Functionality |
| notify_me      | If set to ‘yes’, notifications will be sent to the saved email address when new comments are made             | Session    | Functionality |
| save_info      | If set to ‘yes’, allows additional cookies to store guest user information for use when filling out comment forms. This cookie is only set if you submit a comment. | Session    | Functionality |

\* Cookie is set only if the user opts in via the 'save_info' field.

## Forum Cookies

| Name          | Description                                                                                                    | Expiration | Type          |
| ------------- | -------------------------------------------------------------------------------------------------------------- | ---------- | ------------- |
| forum_theme   | If multiple forum themes exist, this cookie allows the user to save their theme preference.                    | 360 days   | Functionality |
| forum_topics  | Tracks the id number for read topics, allows setting the ‘read’ status. Saved in the cookie for guests, the database for members. | 360 days   | Functionality |
