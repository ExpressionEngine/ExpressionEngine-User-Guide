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
	function foo(){if(cond...
	</script>

Add whitespace around the curly bracket to fix the error::

	<script>
	function foo() { if (cond...
	</script>
