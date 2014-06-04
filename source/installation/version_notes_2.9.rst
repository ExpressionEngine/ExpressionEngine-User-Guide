Update Notes for Version 2.9
============================

Changes to Conditionals
-----------------------

We've made significant changes to how conditionals are parsed. Below is a list
of the changes. We recommend reviewing your conditional statements in order to
rewrite any affected by these changes.

* Variables in conditionals cannot be wrapped in quotation marks (``"``, ``'``).
* Variables in conditionals should not be wrapped in braces (``{}``).
* Nested quotes need to either alternate between single (``'``) and double
  quotes (``"``) or you need to escape your inner quotes (i.e. ``"\""``).
* Variables inside conditionals can no longer start or end with a dash (i.e.
  ``{-foo}`` or ``{bar-}``).
* Numbers are no longer valid variables (i.e. ``{555}``).