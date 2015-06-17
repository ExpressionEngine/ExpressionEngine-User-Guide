Update Notes for Version 2.9
============================

Changes to Conditionals
-----------------------

We've made significant changes to how conditionals are parsed. Below is a list
of the changes. We recommend reviewing your conditional statements in order to
rewrite any affected by these changes.

* Variables in conditionals should not be wrapped in braces (``{}``). Instead
  of ``{if {count} == 5}`` do ``{if count == 5}``.
* Nested quotes need to either alternate between single (``'``) and double
  quotes (``"``) or you need to escape your inner quotes (i.e. ``"\""``). For example::

	  {if store == "Pascal's BBQ"}

or::

	  {if store == 'Pascal\'s BBQ'}

* Variables inside conditionals can no longer start or end with a dash (i.e.
  ``-foo`` or ``bar-``).
* Numbers are no longer valid variables (i.e. ``555``).

Changes to Layouts
------------------

The ``contents`` reserved name is now strictly enforced and will throw an error
if ``{layout="group/template" contents="some value"}`` or
``{layout:set name="contents"}`` are found in the template.

In addition, ``layout:contents`` is now available to conditionals.