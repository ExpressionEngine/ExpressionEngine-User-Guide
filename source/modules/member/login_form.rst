Login Form Tag
==============

The Login Form Tag allows you to *optionally* place a login form in any
template you choose, so that site members can log in.

**Note:** The member profile area has its own login form, which appears
when someone who is not logged in tries to access a member's only area.

Here is an example showing how you might use the tag::

	{exp:member:login_form return="site/index"}      <p><label>Username</label><br />     <input type="text" name="username" value=""  maxlength="32" class="input" size="25" /></p>          <p><label>Password</label><br />     <input type="password" name="password" value="" maxlength="32" class="input" size="25" /></p>      {if auto_login}     <p><input class='checkbox' type='checkbox' name='auto_login' value='1'  /> Auto-login on future visits</p>     {/if}      <p><input class='checkbox' type='checkbox' name='anon' value='1'     checked='checked' />  Show my name in the online users list</p>      <p><input type="submit" name="submit" value="Submit" /></p>      <p><a href="{path='member/forgot_password'}">Forgot your password?</a></p>  {/exp:member:login_form}

Parameters
----------

id=
~~~

::

	id="login_form"

This parameter allows you to specify the id attribute for the <form>
tag:

name=
~~~~~

::

	name="login_form"

This parameter allows you to specify a name attribute for the <form>
tag:

return=
~~~~~~~

::

	return="site/index"

This parameter allows you to define where the user will be returned
after successfully logging in. The parameter can be defined in two ways:

#. Use the standard Template\_Group/Template syntax to specify where to
   return the user. For instance, if you want the user to be returned to
   the "local" Template in the "news" Template Group, you would use:
   return="news/local"
#. Use a full URL. For example: return="http://example.com/return.html"

Note that it is also possible to use this parameter on the login form
under Admin > Member Profile Templates, as a parameter of the
{form\_declaration} variable::

	{form_declaration return="site/index"}

Variables
---------

{if auto\_login}
~~~~~~~~~~~~~~~~

::

	{if auto_login} {/if}

It is recommended that you use this variable as indicated in the example
code at the top. This conditional will display the contents inside
(typically the "stay logged in" checkbox) based on how your session
preference is set. In order for this feature to work you must be set to
use "cookies only" and not sessions. ::

	{if auto_login}     <p><input class='checkbox' type='checkbox' name='auto_login' value='1'  /> Auto-login on future visits</p> {/if}

Logging Out
-----------

You can easily create a logout link using the {path='LOGOUT'} variable.
For example::

	<a href="{path='LOGOUT'}">Log out</a>
