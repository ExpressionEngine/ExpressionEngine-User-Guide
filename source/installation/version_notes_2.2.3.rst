Update Notes for Version 2.2.3
==============================

Hidden Config remove_unparsed_vars Change
-----------------------------------------

The legacy behavior of ExpressionEngine removing unparsed variables from
template output when debug level 0 was explicitly set in the config.php
file was negatively impacting more people than it was aiding, typically
by malforming JavaScript and JSON output.

Thus, if you wish for the old behavior of removing unparsed variables
to remain intact when debug level is set to 0, you will need to use the
hidden config 'remove_unparsed_vars' and enable it.

::

	$config['remove_unparsed_vars'] = 'y';


Member Templates Path Changes
-----------------------------

Altered Language Files
----------------------

The following language files were edited:

-  expressionengine/language/english/members_lang.php

Altered View Files
------------------

The following view files were edited:

-  views/members/edit_member_group.php


:ref:`Return to Update Page <update-additional-steps>`