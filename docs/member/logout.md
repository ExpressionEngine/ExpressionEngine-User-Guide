<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Log Out

[TOC]

## Overview

There are two logout tags.  The single tag outputs a link that logs the user out and returns them to the homepage.  The tag pair generates a form and has a return parameter.


## Logout Form

	{exp:member:logout_form return="account/login"}
		<button type="submit">Logout</button>
	{/exp:member:logout_form}

## Parameters

### `form_class=`

    form_class="logout"

This parameter allows you to specify the class attribute for the &lt;form&gt; tag.

### `form_id=`

    form_id="logout"

This parameter allows you to specify the id attribute for the &lt;form&gt; tag.

### `form_name=`

    form_name="logout"

This parameter allows you to specify a name attribute for the &lt;form&gt; tag.

### `return=`

    return="site/index"

This parameter allows you to define where the user will be returned after successfully logging in. The parameter can be defined in two ways:

1.  Use the standard Template_Group/Template syntax to specify where to return the user. For instance, if you want the user to be returned to the "local" Template in the "news" Template Group, you would use: return="news/local"
2.  Use a full URL. For example: return="<https://example.com/return.html>"



## Logout Link

	<a href="{path='logout'}">Logout</a>
