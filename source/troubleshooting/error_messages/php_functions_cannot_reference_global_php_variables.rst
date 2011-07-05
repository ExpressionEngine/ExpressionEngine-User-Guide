My PHP functions cannot reference global PHP variables
======================================================

ExpressionEngine returns the following error: **"My PHP functions cannot
reference global PHP variables."**

Troubleshooting
---------------

PHP used within a template is always processed by the PHP function
eval(). This means that all variables in your PHP code are of local
scope, and your functions will not be able to reference them unless they
are explicitly declared as globals.

Incorrect implementation:
~~~~~~~~~~~~~~~~~~~~~~~~~

::

	<?php  $foo = 'Hello World!';  bar(); function bar() {         global $foo;         echo $foo; } ?>

Correct implementation:
~~~~~~~~~~~~~~~~~~~~~~~

::

	<?php  global $foo; $foo = 'Hello World!';  bar(); function bar() {         global $foo;         echo $foo; } ?>
