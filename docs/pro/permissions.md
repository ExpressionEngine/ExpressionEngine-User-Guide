<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2021, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# ExpressionEngine Pro Permissions

Users must be logged-in on the front-end of your site and assigned a role that has access to the Control Panel and ExpressionEngine Pro to be able to access ExpressionEngine Pro's [Dock](pro/dock.md) and [Font-end Editing](pro/frontend.md).

## ExpressionEngine Pro Role Access
For a user to have access to ExpressionEngine Pro's features (both front-end and in the Control Panel), the user must be assigned a role which has access to add-ons and ExpressionEngine Pro (found within the "Allowed add-on access" section).

![Pro role access](_images/pro_role_access.png)

## Accessing Front Edit Links and Editing Content
For users to be able to view and edit content on the front-end using the front edit links, those users must must have a role assigned to them which allows them to access and edit content for that entry's channel.

![channel access](_images/ee-role-channel-access.png)


## Accessing Prolets
For users to have access to an add-on's Prolet, those users must have a role assigned to them which has access to the add-on. You cannot access a prolet, if you cannot access the add-on which the Prolet belongs too.