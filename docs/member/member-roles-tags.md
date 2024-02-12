<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Member Roles Tags

[TOC]

## `{exp:member:roles}`

The `{exp:member:roles}` tag allows you to display all roles that the member belongs to.

    {exp:member:roles}
      <p>{name} ({role_id}{if is_primary_role}, Primary Role{/if})</p>
    {/exp:member:roles}

### Parameters

#### `member_id=`

    member_id="147"

Specifies a particular member's information to display. By default (if you do not include the `member_id`` parameter), the tag will simply display information pertaining to the currently logged-in user.

### Variables

#### `{role_id}`

Role ID

#### `{name}`

Role name

#### `{is_primary_role}`

Boolean variable that indicates whether currently displayed role has been designated as primary. Typically used as condition:

    {if is_primary_role}
      The {name} role is primary
    {/if}

#### `{primary_role_id}`

Primary role ID

#### `{primary_role_name}`

Primary role name

## `{exp:member:has_role}`

The `{exp:member:has_role}` tag allows you to display or hide its content depending on whether the member belongs to certain role

    {exp:member:has_role role_id="6"}
      <p>Editor</p>
      {if no_results}
        <p>Not an editor</p>
      {/if}
    {/exp:member:has_role}

### Parameters

#### `role_id=`

    role_id="6"

**Required** ID or role to check against. The content of the tag will be displayed if the user belongs to this role, otherwise `{if no_results}...{/if}` contents will be displayed.

It is possible to pass multiple roles by separating the ids with a `|` character. In this case, the content will be shown if the member belongs to at least one of the roles.

    role_id="6|12"


#### `member_id=`

    member_id="147"

Specifies a particular member's information to display. By default (if you do not include the member_id parameter, the tag will simply display information pertaining to the currently logged-in user.

## `{exp:member:role_groups}`

The `{exp:member:role_groups}` tag allows you to display the role groups a member belongs to.  Please note, while every member is in a Role not every member is in a role group.

    {exp:member:role_groups}
      <p>{role_group_name} (#{role_group_id})</p>
    {/exp:member:role_groups}

### Parameters

#### `member_id=`

    member_id="147"

Specifies a particular member's information to display. By default (if you do not include the `member_id`` parameter), the tag will display information pertaining to the currently logged-in user.

### Variables

#### `{role_group_id}`

Role Group ID

#### `{role_group_name}`

Role Group name
