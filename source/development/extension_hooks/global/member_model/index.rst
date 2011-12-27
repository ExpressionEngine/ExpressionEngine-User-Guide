Member Model Extension Hooks
============================

.. contents::
	:local:
	:depth: 1


member_delete
-------------

When a member is about to be deleted, this hook gives the chance to run a
custom deletion routine and/or stop ExpressionEngine from running its own
member deletion routine for certain members.

::

	$member_ids = $this->extensions->call('member_delete', $member_ids);

An array of member IDs about to be deleted is passed to the hook which
can then be altered and passed back to ExpressionEngine. For example, if
some members should not be deleted, an extension could run a test on each
member ID in the array, and return a new array of member IDs safe to
delete.

If the array does not need to be altered, then it should be passed back to
ExpressionEngine so it can continue its regular deletion routine.

:returns:
    Array

Added in v2.4.0