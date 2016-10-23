###################
{exp:discuss:forum}
###################

*******
Example
*******

**********
Parameters
**********

- **forum_id=** (required) the ID of the forum to display
- **sort=** Topic display order, ``desc`` or ``asc``. Defaults to ``desc``

*********
Variables
*********

- All :ref:`Board Variables <discuss_board_variables>`
- All :ref:`Forum Variables <discuss_forum_variables>`
- All :ref:`Topic Variables <discuss_topic_variables>`
- :doc:`Pagination Variables </templates/pagination>` (Supports ``inline`` only, and does not use a ``paginate=`` parameter. You define precisely where pagination is output rather than pagination being automatically appended to the tag's contents)
- ``{count}``: the current count of the loop, for this forum
- ``{total_results}``: the total number of topics being displayed


Conditionals
------------

- ``{if no_results}``: defines content to display (or redirect) if the tag returns no results
