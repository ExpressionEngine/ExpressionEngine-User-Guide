##############
Channel Fields
##############

All fields assigned to a Channel can be accessed using the Short Name
of the field::

	{body}
	{summary}
	{extended}

	etc..

There are a number of field types included with ExpressionEngine, and
add-ons can make even more available. Channel fields are managed in your
control panel at
:menuselection:`Developer Tools --> Channel Manager --> Field Groups`.

.. contents::
	:local:
	:depth: 1

***************
Checkbox Fields
***************

Like file fields, checkbox fields are special in that they can be used
as a single tag and as a tag pair.

::

	{poll_options}
	    {item}<br />
	{/poll_options}

Limit Parameter
===============

This parameter limits the number of selected items output by the tag. It
works for both the single variable, as well as the tag pair.

Markup Parameter
================

As a single tag, the multi option fields will display a comma seperated
list of values. If you want an html list, you can use markup="ul" or
markup="ol" to change the output to the equivalent html list

::

	{poll_options markup="ul"}

Which will render as

::

	<ul>
	    <li>Green</li>
	    <li>Blue</li>
	    <li>Orange</li>
	</ul>

Backspace Parameter
===================

When used as a tag pair, the multi option fields are a looping pair.
Backspacing removes characters (including spaces and line breaks) from
the last iteration of the loop. For example, if you put a <br /> tag
after each item you'll have this

::

	{poll_options backspace="7"}
	    {item}<br />
	{/poll_options}

Which will render as

::

	<ul>
	    <li>Green</li><br />
	    <li>Blue</li><br />
	    <li>Orange</li><br />
	</ul>

You might, however, not want the <br /> tag after the final item. Simply
count the number of characters (including spaces and line breaks) you
want to remove and add the backspace parameter to the tag. The <br />
tag has 6 characters plus a new line character.

*******************
Multi-Select Fields
*******************

Multiselect fields are identical to `Checkbox
Fields <#checkbox_fields>`_ in their usage.

*************
Member Fields
*************

All member profile fields can be accessed using the "short name" of the
field

::

	{age}
	{gender}
	{zodiac}
	etc...

These are totally dynamic in that any profile field you create for your
members will automatically be available by its "short name" as a
variable.

***********
Date Fields
***********

Any field that is a date type can be formatted just like other dates.
Simply use the name of the field at the beginning of the tag. For
example, if your field is named **my\_date**, you'll format it like
this

::

	{my_date format="%Y %m %d"}

See :doc:`Date Variable Formatting
</templates/date_variable_formatting>` for more information.
