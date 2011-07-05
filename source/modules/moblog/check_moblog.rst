Check Moblog Tag
================

This tag can be placed in any of your ExpressionEngine Site Templates.
It works together with the "Time Between Checks" setting in the Control
Panel . Whenever a visitor to your site loads a Template with this Tag
on it, ExpressionEngine will look to see if the necessary amount of time
has passed based on the "Time Between Checks" setting for this moblog
(Modules > `Moblog <control_panel/index.html#create_a_new_moblog>`_ in
the Control Panel). If the necessary time has passed since the last time
a check was performed then ExpressionEngine will check the specified
Moblog(s) for new messages.

Typically, this tag would be placed on a relatively high-traffic
Template so that checks would be automatically performed at reasonable
intervals. The tag can also be placed on a page dedicated to the purpose
so that you could have a "Check Moblogs" page on your site if you
wished. ::

	{exp:moblog:check silent="true" which="cellphone"}

Parameters
----------

silent=
~~~~~~~

::

	silent="false"

You can specify whether or not you want messages about the Moblog Check
to be seen. By default, this value is "true", which means that the check
will be silent and no messages will be seen. If you set the parameter to
"false", then ExpressionEngine will output messages for errors and
successes.

which=
~~~~~~

::

	which="cellphone"

Here you can specify which Moblog or Moblogs you wish to check. You
specify the Moblog by using the "short name" from the Control Panel
setup. You may also specify "all" so that all of your enabled Moblogs
will be checked. Additionally, you can use the pipe character to
separate multiple moblogs::

	which="cellphone|moblog2|samsung"

Or you can add the word "not" (with a space after it) to exclude
moblogs::

	which="not moblog2|samsung"
