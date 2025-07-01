<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Logging Out

[TOC]

STYLE NOTE: Someone "logs out" (verb, two words) using a "logout link" or "logout form" (adjective, one word).


## Logout Link

The logout link allows logged-in users to log out of ExpressionEngine. It will return the newly logged out visitor to the site's home page. Be aware that "logout" is a reserved word for path, and it does not create a link to `/logout`; it creates an ACT URL that includes a CSRF token. So,

    {path='logout'}

resolves to something like

    https://example.com/?ACT=10&csrf_token=3f9045ab558a35b7caf6a8130439758d02b343df

Usually, you place the path variable inside of a link tag. 

    <a href="{path='logout'}">Log Out</a>

NOTE: The logout path link will generate with a fresh CSRF token every time it is called, even for visitors who are currently logged out. For maximum site efficiency, you should avoid creating logout links for visitors who are not logged in.

    {if logged_in}<a href="{path='logout'}">Log Out</a>{/if}
    
NOTE: Logging out of the front end of the site deletes the session cookie, so it will also potentially log someone out of the admin panel if your site uses cookies to be logged in to the control panel.

## Logout Form Overview

Output a logout form.

    {exp:member:logout_form return="mymb/goodbye"}
	    <input type="submit" value="Logout">
    {/exp:member:logout_form}

No form fields are needed other than the submit button, and even that could be handled via `form.submit()`. A logout link is almost always sufficient unless you want to specify a specific return URL.

## Parameters

{{embed:_tips/form-attributes.md}}

### `action=`

    action="https://example.com/"

Allows you to specify the action attribute of the &lt;form&gt; tag. Handy if you need to ensure that authentication points to SSL portions of your site from non-SSL portions. Often used in conjunction with the return= parameter and the [{current_url} global variable](templates/globals/single-variables.md#current_url) so your visitors will go back to the page and domain they logged out from.

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

This parameter allows you to define where the user will be returned after successfully logging out. The parameter can be defined in two ways:

1.  Use the standard Template_Group/Template syntax to specify where to return the user. For instance, if you want the user to be returned to the "local" Template in the "news" Template Group, you would use: return="news/local"
2.  Use a full URL. For example: return="<https://example.com/return.html>"
