Typography Library Extension Hooks
==================================

.. contents::
	:local:
	:depth: 1


typography\_parse\_type\_end
----------------------------

Modify string after all other typography processing

::

	$str = $this->extensions->call('typography_parse_type_end', $str, $this, $prefs);

$str
~~~~

The string currently being parsed.

$this
~~~~~

The Typography library object - accept by reference in your methods.

$prefs
~~~~~~

Any prefs sent to the $this->typography->parse\_type() method with
this string.

:returns:
    String

Added in v1.4.0

typography\_parse\_type\_start
-------------------------------

Modify string prior to all other typography processing

::

	$str = $this->extensions->call('typography_parse_type_start', $str, $this, $prefs);

$str
~~~~

The string currently being parsed.

$this
~~~~~

The Typography library object - accept by reference in your methods.

$prefs
~~~~~~

Any prefs sent to the $TYPE->parse\_type function with this string.

:returns:
    Array

Added in v1.4.0
