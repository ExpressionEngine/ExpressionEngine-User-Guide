Update Notes for Version 1.4
============================

Theme Updates
~~~~~~~~~~~~~

Version 1.4 has some changes in the control panel CSS file, so please
replace the following file with the new copy::

	themes/cp_themes/default/default.css

Advanced Conditionals
~~~~~~~~~~~~~~~~~~~~~

ExpressionEngine 1.4 has expanded its conditional abilities and now
allows logical operators and new structures like elseif and else. With
these new abilities, some old conditionals may have problems because the
conditional parser is a bit more strict in what it will accept.

**Short conditionals -**
In previous versions of ExpressionEngine, it
was possible to use shortened conditionals like {if allow\_comments} in
a more extended way by simply adding a comparison like != and a value
like so::

	 {if allow_comments == 'n'}  No Comments Allowed For This Entry {/if}

ExpressionEngine 1.4 has to treat those shortened conditionals
differently for them to work with the code for parsing advanced
conditionals. So, instead of using a value like 'n', you will have to
use FALSE. So, the conditional above will have to become this in EE 1.4::

	 {if allow_comments == FALSE}  No Comments Allowed For This Entry {/if}

**Multiple Values (&,\|) -**
In earlier versions, you were able to
compare a variable to multiple values by using the ampersand and bar in
your conditionals::

	 {if segment_2 == "dog|cat"}  Segment 2 is either set to dog or cat {/if}

While this code will still work in this version, it is no longer the
suggested way of writing those manner of conditionals. Instead you
should use the new logical operators and write the conditional out
fully::

	 {if segment_2 == "dog" OR segment_2 == "cat"}  Segment 2 is either set to dog or cat {/if}

The code we have that allows the old style to continue working may be
removed in a future version of ExpressionEngine, so we suggest you
update your conditionals as soon as you can.

**Protected Characters** We now use PHP to evaluate conditionals in
ExpressionEngine and as such there are certain characters that we have
to protect in a variable so that they are not treated as PHP code. We do
this by converting those characters into HTML entities or removing the
character entirely. Here is the conversion list:

-  " => &#34;
-  $ => &#36;
-  ( => &#40;
-  ) => &#41;
-  { => removed
-  } => removed

For example, his means that if you are comparing a value against a
variable that might have a double quote, you should have any quotes in
the value converted into the entity as well. For example, if your screen
name is "The Republic" you would write the conditional like so::

	{if screen_name == '&#34;The Republic&#34;'}

:ref:`Return to Update Page <update_cleanup>`

`ExpressionEngine <http://ellislab.com/expressionengine>`_ – Copyright ©
2002-2011 – `EllisLab, Inc. <http://ellislab.com/>`_
