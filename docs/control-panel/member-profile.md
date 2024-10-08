<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Member Profile

**Control Panel Location: `Members > Edit`**

This section of the Control Panel is where membership account information is edited.

[TOC]

## Anonymize User

**Control Panel Location: `Members > Profile > Anonymize Modal`**

The 'Anonymize user' link opens a modal to confirm the anonymization of the member on that profile page. When a user is anonymized, all personally identifying information is wiped from the system including their IP, username and screen name, all custom field data unless it is explicitly marked as not usable to identify them. Channel entry data and comments are preserved with the author replaced by 'anonymous&lt;member_id&gt;.

Anonymization is a good alternative to deleting a user when they wish to be removed from the site but doing so would compromise critical records, such as purchases in a store.

## Username & Password

**Control Panel Location: `Members > Profile > Username & Password`**

Both the Username and Screen Name for the account can be changed. In addition, the password can be changed if desired. If you are not logged in with a SuperAdmin account, you will need to submit the password associated with the account in order to update these settings. The password is not required when the person editing is a SuperAdmin account.

## Consents

**Control Panel Location: `Members > Profile > Consents`**

ExpressionEngine creates consent requests for actions that may require user permission. Third party add-ons and site administrators may also generate such permission requests. The consent page allows you to manage your response to all existing consent requests. Consent may be granted or withdrawn at any point and a record of the user action will be made.

A user may also manage their consent requests on the frontend using the [consent module](add-ons/consent.md). Consent management is a primary tool for those who need to create [GDPR compliant](general/gdpr.md) sites.

NOTE: **Note:** In order for cookie consent requests to display, [Require user consent to set cookies?](control-panel/settings/security-privacy.md#require-user-consent-to-set-cookies) must be enabled.

## CP Settings

**Control Panel Location: `Members > Profile > CP Settings`**

Set your default homepage for the control panel.

## Info & Activity

**Control Panel Location: `Members > Profile > Info & Activity`**

Shows information related to a member's activity, such as IP address, last visit, link to member's CP logs etc.

## Date & Time Settings

**Control Panel Location: `Members > Profile > Date & Time`**

This section allows you to set the date and time settings for the selected user.

## Delete User

**Control Panel Location: `Members > Profile > Delete Modal`**

The 'Delete user' link opens a modal to confirm the deletion of the member on that profile page. If the member has any channel entries, they may be re-assigned rather than deleted.

## Email Settings

**Control Panel Location: `Members > Profile > Email Settings`**

You may specify the email address associated with the account as well as preferences related to receiving email. If you are not logged in with a Super Admin account, you will need to submit the password associated with the account in order to update these settings. The password is not required when the person editing is a Super Admin account.

## Member Roles assignment

**Control Panel Location: `Members > Profile > Member Roles`**

This section allows you to set the Member Roles for the current user. 
NOTE: **Note:** You can not change the role for Super Admins.

## Access overview

**Control Panel Location: `Members > Profile > Access Overview`**

Lists every permission the member has based on the Roles assigned.

## Blocked Members

**Control Panel Location: `Members > Profile > Blocked Members`**

<!--  Add an overview (include the sortability of the table) -->

## Login as User

**Control Panel Location: `Members > Profile > Login`**

Super Admin may login as another user while still viewing debugging data. This can be particularly useful when debugging a situation that only occurs for certain user groups and not others.

## Email User

**Control Panel Location: `Members > Profile > Email`**

Shortcut to Communicate tool with the member being primary recipient.

## Publishing Settings

**Control Panel Location: `Members > Profile > Publishing Settings`**

This section allows you to set the publishing preferences for the user.

## Personal Settings

**Control Panel Location: `Members > Profile > Personal Settings`**

This sections allows you to edit the Member Profile fields for the current user.

## Current Subscriptions

**Control Panel Location: `Members > Profile > Current Subscriptions`**

<!-- Add an overview (include the sortability of the table) -->

## Bookmarklets

**Control Panel Location: `Members > Profile > Bookmarklets`**

The Bookmarklet section will allows you to create a customized bookmarklet, permitting you to add entries to your site while browsing the internet.

## HTML Buttons

**Control Panel Location: `Members > Profile > HTML Buttons`**

Each member may also specify their own HTML Formatting buttons. These buttons are available for use when creating or editing channel entries. By default, these will include the buttons specified in the [HTML Buttons](control-panel/settings/html-buttons.md) settings page. The user may edit or add to the buttons as desired. More information on button creation/editing is available on the [HTML Buttons](control-panel/settings/html-buttons.md) settings page.

### Create/Edit HTML Buttons

Each member may also specify their own HTML Formatting buttons. These buttons are available for use when creating or editing channel entries. By default, these will include the buttons specified in the Default HTML Buttons area. The user may edit or add to the buttons as desired.

## Quick Links

**Control Panel Location: `Members > Profile > Quick Links`**

Tip: What are Quick Links
<div class="video-wrapper">
<iframe src="https://www.youtube.com/embed/8M_ezoBrz2g?si=6Qdssal6Aq5AeV23" title="What are Quick Links in ExpressionEngine" width="1920" height="1080" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>

Use this page to add personal links to the quick links menu in the control panel nav bar. These links will be visible only to you.
