.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Error On View Template
======================

Loading a template results in Parse error: syntax error, unexpected
T\_STRING in path/to/system/core/core.functions.php(626) : eval()'d code
on line 1

Troubleshoot Template
---------------------

This indicates an error in the template being loaded, at the line
indicated at the error.

One common cause is whitespace in Javascript code that is causing the
Javascript to be parsed as a conditional.

::

	<script>
	function foo(){if(cond...) ...code... };
	</script>

Add whitespace around the curly bracket to fix the error::

	<script>
	function foo() { if (cond...) ...code... };
	</script>
