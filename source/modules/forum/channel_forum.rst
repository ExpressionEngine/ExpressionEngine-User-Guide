Associating Channel Entries with Forum Topics
=============================================

Publish Page and the "Forum Tab"
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

When creating a new channel entry there is a `Forum
Tab. <../../cp/content/publish.html#tab_forum>`_ Entering data in the
Forum Topic Title and Forum Topic Text in that tab will cause the new
forum topic to be created upon publish, and associated with that channel
entry.

Alternatively, if there is an existing forum topic to link to this
entry, then you may enter that forum topic's ID into the Forum Topic ID
input.

A new forum topic may only be created when creating a new channel entry.
When editing an existing channel entry, only the Forum Topic ID will be
present to associate an existing forum post with this existing channel
entry.

**Note**: When a new entry is created and there is content in the Forum
tab, the Forum information will be posted immediately regardless of the
entry date, status, or other entry parameters.

Forum Topic Variable Pairs
~~~~~~~~~~~~~~~~~~~~~~~~~~

To link the Forum Topic to the Channel Entry on the front-end use the
Conditional Variables for the Channel Entries Tag. These include `{if
forum\_topic} <../channel/conditional_variables.html#cond_if_forum_topic>`_
and `{if
not\_forum\_topic} <../channel/conditional_variables.html#cond_if_not_forum_topic>`_
