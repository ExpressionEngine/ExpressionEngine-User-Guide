Member Model Extension Hooks
============================

.. contents::
	:local:
	:depth: 1


member_delete
-------------

When a member is about to be deleted, this hook gives the chance to run a
custom deletion routine and/or stop ExpressionEngine from running its own
member deletion routine.

::

	$should_delete_member = $this->extensions->call('member_delete', $member_id);

Returning ``TRUE`` will allow ExpressionEngine to continue deleting the
member, while returning ``FALSE`` will not delete the member at all.

:returns:
    Boolean

Added in v2.4.0