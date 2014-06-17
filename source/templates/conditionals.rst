################
Conditional Tags
################

.. contents::
   :local:
   :depth: 2

************
Introduction
************

Conditional Tags are pair tags, which allow you to conditionally show or
hide information on your pages based on criteria being met. They take
on this general form::

  {if condition} data to show if condition is met {/if}

The syntax available for the condition is comparable to most programming
languages. Some examples:

::

  {!-- Basic truth tests --}
  {if logged_in}Welcome back.{/if}

  {!-- Comparisons --}
  {if username == 'Bob'}Welcome back, Bob!{/if}

  {!-- Math --}
  {if (age + 5) == 100}Five years to go!{/if}

  {!-- Logical operators --}
  {if age == 30 and username == 'Bob'}Welcome back, Bob. 30 is the new 20.{/if}

  {!-- Branching --}
  {if age == 30}
    You are 30!
  {if:elseif username == 'Bob'}
    You are Bob!
  {if:else}
    You're not 30 or Bob. That's all we know.
  {/if}

Don't worry if not all of these make sense. The operators and constructs
will be discussed in detail below.

********************
Protected Characters
********************

Certain characters must be protected in conditionals to prevent them
from being mistaken for regular ExpressionEngine tags:

=====================  ===========
To evaluate            Use instead
=====================  ===========
{                      &#123;
}                      &#125;
\\n (linebreaks)       space
\\r (carriage return)  space
\\t (tab)              space
=====================  ===========

If you are comparing a variable against a value that might include curly
braces, then you should use the HTML entities listed in
the table above instead. For example, if you want the conditional to
evaluate whether the title is *Curly and the Braces: {}*, you would
write the conditional like so::

	{if title == 'Curly and the Braces: &#123;&#125;'}

.. _conditional_boolean_values:

*******************************
Boolean Values (True and False)
*******************************

When determining Boolean values the following are considered **FALSE**:

  * the keyword ``FALSE``
  * the integer ``0``
  * the floating point number ``0.0``
  * an empty string ``""`` or ``''``

Everything else is considered **TRUE**.

.. note:: The string ``"0"`` is considered **TRUE** since it is a non-empty
   string.

Bloolean Comparisons
====================

The following table illustrates comparing Boolean values with respect to the
equality (``==``) operator.

+-----------+-----------+-----------+-----------+-----------+-----------+-----------+-----------+-----------+
|           | **TRUE**  | **FALSE** | 1         | 0         | -1        | "1"       | "0"       | "-1"      |
+===========+===========+===========+===========+===========+===========+===========+===========+===========+
| **TRUE**  | **TRUE**  | **FALSE** | **TRUE**  | **FALSE** | **TRUE**  | **TRUE**  | **TRUE**  | **TRUE**  |
+-----------+-----------+-----------+-----------+-----------+-----------+-----------+-----------+-----------+
| **FALSE** | **FALSE** | **TRUE**  | **FALSE** | **TRUE**  | **FALSE** | **FALSE** | **FALSE** | **FALSE** |
+-----------+-----------+-----------+-----------+-----------+-----------+-----------+-----------+-----------+
| 1         | **TRUE**  | **FALSE** | **TRUE**  | **FALSE** | **FALSE** | **TRUE**  | **FALSE** | **FALSE** |
+-----------+-----------+-----------+-----------+-----------+-----------+-----------+-----------+-----------+
| 0         | **FALSE** | **TRUE**  | **FALSE** | **TRUE**  | **FALSE** | **FALSE** | **TRUE**  | **FALSE** |
+-----------+-----------+-----------+-----------+-----------+-----------+-----------+-----------+-----------+
| -1        | **TRUE**  | **FALSE** | **FALSE** | **FALSE** | **TRUE**  | **FALSE** | **FALSE** | **TRUE**  |
+-----------+-----------+-----------+-----------+-----------+-----------+-----------+-----------+-----------+
| "1"       | **TRUE**  | **FALSE** | **TRUE**  | **FALSE** | **FALSE** | **TRUE**  | **FALSE** | **FALSE** |
+-----------+-----------+-----------+-----------+-----------+-----------+-----------+-----------+-----------+
| "0"       | **TRUE**  | **FALSE** | **FALSE** | **TRUE**  | **FALSE** | **FALSE** | **TRUE**  | **FALSE** |
+-----------+-----------+-----------+-----------+-----------+-----------+-----------+-----------+-----------+
| "-1"      | **TRUE**  | **FALSE** | **FALSE** | **FALSE** | **TRUE**  | **FALSE** | **FALSE** | **TRUE**  |
+-----------+-----------+-----------+-----------+-----------+-----------+-----------+-----------+-----------+

*********
Operators
*********

The following operators are allowed within conditionals:

Comparison Operators
====================

You can use any of the following operators to compare a variable to a
value:

========  ==========================================
Operator  Name
========  ==========================================
==        Equal
!=        Not Equal
<>        Not equal
<         Less than
<=        Less than or equal to
>         Greater than
>=        Greater than or equal to
^=        `Begins with <Begins With Operator_>`_
\*=       `Contains <Ends With Operator_>`_
$=        `Ends with <Contains Operator_>`_
~         `Matches <Matches Operator_>`_
========  ==========================================

.. note:: When comparing equality make sure to use **two** equal signs
   rather than one (e.g. **==**).

Begins With Operator
--------------------

The begins with operator checks if a string begins with another string::

  {if "ExpressionEngine" ^= "Express"}Yes it does{/if}


Ends With Operator
------------------

The ends with operator checks if a string ends with another string::

  {if url $= ".fr"}Your website is from France.{/if}

Contains Operator
-----------------

The contains operator checks if a string contains another string::

  {if body *= excerpt}Noone expected that.{/if}

Matches Operator
----------------

The matches operator checks if a string matches a regular expression::

  {if segment_3 ~ "/^P\d+/"}paginated{/if}

.. note:: The second value must be a valid regular expression. All `PHP
  PCRE pattern modifiers
  <http://us1.php.net/manual/en/reference.pcre.pattern.modifiers.php>`_
  are allowed.

Using Comparison Operators with Numbers
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

These operators will work with both numbers and strings, but with
numbers it's important to remember that they will be turned into an
unambiguous representation. This means that redundant leading and
trailing zeros are removed.
Floating point numbers < 1 will have a leading zero added if it is not
present::

  .7 becomes 0.7
  7. becomes 7
  .20 becomes 0.2
  0002 becomes 2
  002.5000 becomes 2.5

This can be avoided by quoting your numbers::

  {if 42.7 $= .7} - false, 42.7 does not end with 0.7
  {if 42.7 $= '.7'} - true
  {if '42.7' $= '.7'} - true

  {if 42.70 $= 70} - false, 42.7 does not end in 70
  {if '42.70' $= 70} - true
  {if '42.70' $= '70'} - true

Logical Operators
=================

You can use the following operators to compare true / false (boolean)
values. In this context strings that are not empty, numbers that are not
0, and the TRUE keyword are all true. Everything else is false.

========  =======  ===========================================================
Operator  Name     Result
========  =======  ===========================================================
!         Not      **TRUE** if the following value is **FALSE**.
&&        And      **TRUE** if *both* values are **TRUE**.
\|\|      Or       **TRUE** if *either* value is **TRUE**.
AND       And      **TRUE** if *both* values are **TRUE**.
XOR       Xor      **TRUE** if *either* value is **TRUE**, *but not both*.
OR        Or       **TRUE** if *either* value is **TRUE**.
========  =======  ===========================================================

These operators let you create complex rules for your templates::

	{if member_id != '1' && member_group != "5" OR username == "Billy"} Hi! {/if}

Mathematic Operators
====================

You can use the following mathematical operators to compute values:

=========  ==========================================
Operator   Name
=========  ==========================================
\+         Addition
\-         Subtraction / Negation
\*         Multiplcation
\** and ^  `Exponentiation <Exponent Operators_>`_
/          Division
%          `Remainder of one number divided by another <Modulus Operator_>`_
=========  ==========================================

.. note:: When using these mathematical operators be sure to surround
  them with whitespace. Consider that ``foo-bar`` is a valid variable
  while ``foo - bar`` indicates subtraction.

Modulus Operator
----------------

A modulus operator finds the remainder of division of one number by
another. This can be handy when you want to do something every nth
iteration of a loop. For example, if we want to display a horizontal
rule for every 5th entry in a :doc:`Channel Entries
</add-ons/channel/channel_entries>` loop, we would write this
conditional::

  {if count % 5 == 0}
    <hr>
  {/if}

This works because the remainder of 5 divided by 5 is 0.

Exponent Operators
------------------

There are two exponent operators: ``**`` and ``^``. They are treated
the same, so use whichever you prefer::

  {if count ** 2 == 25}What a strange way ...{/if}
  {if count ^ 2 == 25}... to check if count is 5{/if}


Exponentiation of Negatives
===========================

Negation happens *after* exponentiation. The following are true::

  -5 ** 2 == -25
  (-5) ** 2 == 25

This is easy to remember, by keeping in mind that subtraction always
happens after exponentiation. Of course, if the minus is itself in the
exponent, then it is applied first::

  5 ** -2 == 0.04

Multiple Exponentiation
=======================

Exponents are processed from right to left. This means that ``2 ^ 3 ^ 2``
is treated as ``2 ^ 9``, not as ``8 ^ 2``::

  {if 2 ^ 3 ^ 2 == 512}this{/if}
  {if 2 ^ 3 ^ 2 == 64}not this{/if}

String Concatenation Operator
=============================

You can use the string concatenation operator (``.``) to concatenate
values::

	{if segment_1 . '/' . segment_2 == 'site/index'}

Parentheses in Conditionals
===========================

You can use parentheses to group parts of a conditional
together to have the part of the conditional between the parentheses
evaluate before being compared to the part of the conditional outside
the parentheses. For example, in the code below, the two member group
parts are evaluated *first* before their result is compared to the
channel\_id part of the conditional::

	{if (member_id == '1' OR member_id == '2') && channel_id == '5'}

So, if the member id of the visitor is either 1 or 2, and they are
viewing the channel with id of 5, then they can see the contents of that
conditional.

***************
Else and Elseif
***************

You can use two additional control structures to help tailor your
results::

  {if:elseif}

And::

  {if:else}

These work similar to standard PHP else and elseif constructs. Here is
an example::

  {if username == "Joe"}
    <h1>Hey, Joe! Where were you Tuesday?</h1>
  {if:elseif username == "Bob"}
    <h1>Hey, Bob! Thanks for the tickets!</h1>
  {if:else}
    <h1>Welcome to our site.</h1>
  {/if}

In the above example, if the currently logged in user has the username
of "joe" he receives the first message. If not, ExpressionEngine
evaluates the second conditional for the username of "bob". If the
username is neither joe nor bob a default message is shown.

.. note:: Don't be confused by the `{if:` prefix. This simply helps the
   parsing engine identify each control structure. The information to
   the *right* of the prefix is what determines which conditional you
   are using.

**************
Embedding Tags
**************

We recommend not wrapping variables in braces (``{}``) for example, do
this::

  {if my_snippet == "hello world"}

instead of these::

  {if {my_snippet} == "hello world"}
  {if "{my_snippet}" == "hello world"}

Tags still require their braces, for example::

  {if {entry_date format="%Y"} == {current_date format="%Y"}}

When using tags pay special attention to your quote marks. If you need
more than one level of quotation you will need to either alternate
between single and double quote marks, or escape your quotes. For example,
instead of this::

  {if "{current_date format="%F"}" == "May"}

do this::

  {if "{current_date format='%F'}" == "May"}

or this::

  {if "{current_date format=\"%F\"}" == "May"}

******************
Short Conditionals
******************

Certain conditionals exist in a shortened form in order to improve
template readability. These conditionals are usually checking to see if
a certain thing is true or exists:

Examples
========

if logged\_in
-------------

::

	{if logged_in}  Welcome back to the site!<br /> <a href="{path='LOGOUT'}">Logout</a>  {/if}

This tag pair will display content within the pair if the person viewing
the page is currently a logged in member.

.. note:: This only tests whether or not someone is logged in. If you
	want to restrict a particular page based on the member group
	assignment you'll do that in your Template preferences in the
	Control Panel.

if logged\_out
--------------

::

	{if logged_out}
		You aren't a member or aren't logged in.<br />
		<a href="{path='member/login'}">Login</a>  | <a href="{path='member/register'}">Register</a>
	{/if}

This tag pair will display content within the pair if the person viewing
the page is **not** currently a logged in member.

You'll notice in the "logout" link above that a special path is used:
{path='LOGOUT'}. This is a special-case path value that will
automatically render the correct path for someone to log out.

****************************
Global Conditional Variables
****************************

There are a handful of variables that are always available to conditionals.

group_id
========

::

  {if group_id == '7'}  You're an "Editor"!  {/if}

You can test against the Member Group. This tests the Member Group ID
number. The alternate `{if member\_group == '3'} <#cond_member_group>`_
version of this conditional should be used inside of
``{exp:channel:entries}`` tags.

member_group
============

::

  {if member_group == '7'}  You're an "Editor"!  {/if}

You can test against the Member Group. This tests the Member Group ID
number. This variable/conditional is identical to the group\_id one
available above. ``{member_group}`` will work correctly inside a
``{exp:channel:entries}`` tag, however.

member_id
=========

::

  {if member_id == '147'}  Ooh, you're really special, Frank!!  {/if}

Test for the member ID of the currently logged in user.

screen_name
===========

::

  {if screen_name == "Mr. Ed"}  Thanks for all your hard work on the site, Ed!  {/if}

You can test against the screen name of the currently logged in user.

total_comments
==============

::

  {if total_comments < 1}  What??  No one has commented on my site at all?!?!  {/if}

Test against the total number of comments submitted for the entire site.

total_entries
=============

::

  {if total_entries > 1000}  Yowza!  This is one hot site!  {/if}

Test against the total number of entries submitted for the entire site.

segment_*X*
===========

::

  {if segment_3 == "private"}  You're seeing something private!  {/if}

You can test against one of the :doc:`URL Segments
<globals/url_segments>` that are available. The conditional should be
replaced with the correct segment name. e.g. if you're interested in URL
Segment 3, then use ``{if segment_3}``.


username
========

::

  {if username == "elvira"}  Hi, mom!  I know it's you!  {/if}

You can test against the username of the currently logged in user.

******************
Alternative Syntax
******************

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

******
Errors
******

In the event that there is a problem parsing or evaluating a conditional
an error will be displayed based on your :ref:`debug preferences <output-debug-pref-label>`.
Errors are triggered in the following scenarios:

* ``{if:`` is encountered in the template without it being either ``if:else``
  or ``if:elseif``. For example::

  {if:foo}

* ``{/if}`` cannot be found. All ``{/if}`` inside a string (single or double-
  quoted) are ignored. For example::

  {if segment_1 == 'site'}HELLO WORLD

* There is an unclosed single or double-quoted string. For example::

  {if segment_1 == "site}HELLO WORLD{/if}

* A closing ``}`` is not found. For example::

  {if segment_1 == "site" HELLO WORLD{/if}

* A valid operator is not found. For example::

  {if segment_1 "site"}HELLO WORLD{/if}

  or::

  {if segment_1 ==== "site"}HELLO WORLD{/if}

* A number followed by a colon (``:``) was found. For example::

  {if 5:2}

* A number has too many periods (``.``). For example::

  {if 1.2.3}
