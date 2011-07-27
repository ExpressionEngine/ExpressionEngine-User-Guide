Conditional Global Variables
============================

Conditional Variables are pair type variables, which allow you to
conditionally show or hide information on your pages based on criteria
being met. Conditional variables have the same syntax available in PHP
conditionals, which normally follows this form::

	{if variable comparison-operator value}  Data between the tags that gets shown if the condition is met.  {/if}

A basic conditional variable will look like this::

	{if username == "joe"}  <h1>Hi Joe!</h1>  {/if}

**Note:** If you are testing against a word, you should enclose the word
in single or double-quotes. If you are testing against a number, then
you do not need to use quotes.

**Technical Note:** We use PHP to evaluate conditionals in
ExpressionEngine and as such there are certain characters that we have
to protect in a variable so that they are not treated as PHP code. We do
this by converting those characters into HTML entities or removing the
character entirely. Here is the conversion list:

-  " => &#34;
-  \\ => &#92;
-  $ => &#36;
-  ( => &#40;
-  ) => &#41;
-  { => removed
-  } => removed
-  \\n (linebreaks) => removed
-  \\r (carriage return) => removed

For example, this means that if you are comparing a value against a
variable that might have a double quote, you should have any quotes in
the value converted into the entity as well. For example, if your screen
name is "The Republic" you would write the conditional like so::

	{if screen_name == '&#34;The Republic&#34;'}

Advanced Conditionals
---------------------

**Note:** Advanced Conditionals are evaluated *after* all EE tags are
parsed.

More advanced conditionals can use logical operators (ex: OR, AND) to
compare multiple variables to multiple values. Consider this example::

	{if username == "joe" OR username == "bob"}          <h1>Hey, Guys!</h1>          {/if}

Or this example::

	{if username != "joe" AND username != "bob"}          <h1>Hey, Guys!</h1>          {/if}

Else and Elseif
~~~~~~~~~~~~~~~

You can use two additional control structures to help tailor your
results::

	{if:elseif}

	{if:else}
	
These work similar to standard PHP else and elseif constructs. Here is
an example::

	{if username == "joe"}
		<h1>Hey, Joe! Where were you Tuesday?</h1>
	{if:elseif username == "bob"}
		<h1>Hey, Bob! Thanks for the tickets!</h1>
	{if:else}
		<h1>Welcome to our site.</h1>
	{/if}

In the above example, if the currently logged in user has the username
of "joe" he receives the first message. If not, EE evaluates the second
conditional for the username of "bob". If the username is neither joe
nor bob a default message is shown.

**Note:** Don't be confused by the {if: prefix. This simply helps the EE
parser identify each control structure. The information to the *right*
of the prefix is what determines which conditional you are using.

Operators
---------

The following comparison and logical operators are allowed within
conditionals:

Comparison Operators
~~~~~~~~~~~~~~~~~~~~

You can use any of the following operators to compare a variable to a
value:

-  **==** "equal to"
-  **!=** "not equal to"
-  **<** "less than"
-  **<=** "less than or equal to"
-  **>** "greater than"
-  **>=** "greater than or equal to"
-  **<>** "not equal to"

**Note:** When comparing equality make sure to use **two** equal signs
rather than one: ==

Logical Operators
~~~~~~~~~~~~~~~~~

You can use the following operators to compare multiple variables to
multiple values:

-  **&&** - returns conditional's contents if *both* conditions are true
-  **\|\|** - returns conditional's contents if *either* condition is
   true
-  **AND** - returns conditional's contents if *both* conditions are
   true
-  **XOR** - returns conditional's contents if *either* condition is
   true *but not both*
-  **OR** - returns conditional's contents if *either* condition is true

Logical operators have a precedence that determines in what order the
parts of a conditional are parsed. In the following advanced condtional
the member\_id and member\_group parts of the conditional are compared
*first* using &&, before their result is compared to the username part
via OR. ::

	{if member_id != '1' && member_group != "5" OR username == "Billy"} Hi! {/if}

So, if the member id of the site visitor is not 1 and their member group
is not 5 \*and\* their username is Billy, they can view the data in the
conditional. The Logical Operator table above lists the precedence of
operators with the highest-precedence operators listed at the top of the
table.

Parentheses in Conditionals
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Like PHP, you can use parentheses to group parts of a conditional
together to have the part of the conditional between the parentheses
evaluate before being compared to the part of the conditional outside
the parentheses. For example, in the code below, the two member group
parts are evaluated *first* before their result is compared to the
channel\_id part of the conditional::

	{if (member_id == '1' OR member_id == '2') && channel_id == '5'}

So, if the member id of the visitor is either 1 or 2, and they are
viewing the channel with id of 5, then they can see the contents of that
conditional.

Short Conditionals
------------------

Certain conditionals exist in a shortened form in order to improve
template readability. These conditionals are usually checking to see if
a certain thing is true or exists:


Global Conditionals
-------------------


if group\_id
~~~~~~~~~~~~

::

	{if group_id == '7'}  You're an "Editor"!  {/if}

You can test against the Member Group. This tests the Member Group ID
number. The alternate `{if member\_group == '3'} <#cond_member_group>`_
version of this conditional should be used inside of
{exp:channel:entries} tags.

if logged\_in
~~~~~~~~~~~~~

::

	{if logged_in}  Welcome back to the site!<br /> <a href="{path='LOGOUT'}">Logout</a>  {/if}

This tag pair will display content within the pair if the person viewing
the page is currently a logged in member.

**Note**: This only tests whether or not someone is logged in. If you
want to restrict a particular page based on the member group assignment
you'll do that in your Template preferences in the Control Panel.

if logged\_out
~~~~~~~~~~~~~~

::

	{if logged_out}  You aren't a member or aren't logged in.<br /> <a href="{path='member/login'}">Login</a>  | <a href="{path='member/register'}">Register</a>  {/if}

This tag pair will display content within the pair if the person viewing
the page is **not** currently a logged in member.

You'll notice in the "logout" link above that a special path is used:
{path='LOGOUT'}. This is a special-case path value that will
automatically render the correct path for someone to log out.

if member\_group
~~~~~~~~~~~~~~~~

::

	{if member_group == '7'}  You're an "Editor"!  {/if}

You can test against the Member Group. This tests the Member Group ID
number. This variable/conditional is identical to the group\_id one
available above. {member\_group} will work correctly inside a
{exp:channel:entries} tag, however.

if member\_id
~~~~~~~~~~~~~

::

	{if member_id == '147'}  Ooh, you're really special, Frank!!  {/if}

Test for the member ID of the currently logged in user.

if screen\_name
~~~~~~~~~~~~~~~

::

	{if screen_name == "Mr. Ed"}  Thanks for all your hard work on the site, Ed!  {/if}

You can test against the screen name of the currently logged in user.

if total\_comments
~~~~~~~~~~~~~~~~~~

::

	{if total_comments < 1}  What??  No one has commented on my site at all?!?!  {/if}

Test against the total number of comments submitted for the entire site.

if total\_entries
~~~~~~~~~~~~~~~~~

::

	{if total_entries > 1000}  Yowza!  This is one hot site!  {/if}

Test against the total number of entries submitted for the entire site.

if segment\_*X*
~~~~~~~~~~~~~~~

::

	{if segment_3 == "private"}  You're seeing something private!  {/if}

You can test against one of the `URL Segments <url_segments.html>`_ that
are available. The conditional should be replaced with the correct
segment name. e.g. if you're interested in URL Segment 3, then use {if
segment\_3}.

if username
~~~~~~~~~~~

::

	{if username == "elvira"}  Hi, mom!  I know it's you!  {/if}

You can test against the username of the currently logged in user.

Alternative Syntax
------------------

In order to be able to use some member variables in conditionals inside
a channel entries tag, which processes its own member information, it is
necessary to use an alternative syntax. All of the member variables may
be used in conditionals with the addition of the prefix "logged\_in\_". ::

	{exp:channel:entries channel="default_site"}
		{if logged_in_member_id == author_id}
			<p>You wrote this entry!</p>
		{/if}
	{/exp:channel:entries}

A list of the available member variables that utilize this alternate
syntax follows:

-  logged\_in\_member\_id
-  logged\_in\_group\_id
-  logged\_in\_group\_description
-  logged\_in\_username
-  logged\_in\_screen\_name
-  logged\_in\_email
-  logged\_in\_ip\_address
-  logged\_in\_location
-  logged\_in\_total\_entries
-  logged\_in\_total\_comments
-  logged\_in\_private\_messages
-  logged\_in\_total\_forum\_posts
-  logged\_in\_total\_forum\_topics

