<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Logging Out

[TOC]


## Logout Link

This link allows users to log-out of the system. To create the link, use this variable:

    {path='logout'}

Place the variable inside of a link tag:

    <a href="{path='logout'}">Log Out</a>


## Logout Form Overview

Output a log out form.

    {exp:member:logout_form return="mymb/login"}
	    <input type="submit" value="Logout">
    {/exp:member:logout_form}

## Parameters

{{embed:_tips/form-attributes.md}}

### `action=`

    action="https://example.com/"

Allows you to specify the action attribute of the &lt;form&gt; tag. Handy if you need to ensure that authentication points to SSL portions of your site from non-SSL portions. Often used in conjunction with the return= parameter and the [{current_url} global variable](templates/globals/single-variables.md#current_url) so your visitors will go back to the page and domain they logged in from.

### `form_class=`

    form_class="login"

This parameter allows you to specify the class attribute for the &lt;form&gt; tag.

### `form_id=`

    form_id="login"

This parameter allows you to specify the id attribute for the &lt;form&gt; tag.

### `form_name=`

    form_name="login"

This parameter allows you to specify a name attribute for the &lt;form&gt; tag.

### `return=`

    return="site/index"

This parameter allows you to define where the user will be returned after successfully logging in. The parameter can be defined in two ways:

1.  Use the standard Template_Group/Template syntax to specify where to return the user. For instance, if you want the user to be returned to the "local" Template in the "news" Template Group, you would use: return="news/local"
2.  Use a full URL. For example: return="<https://example.com/return.html>"
