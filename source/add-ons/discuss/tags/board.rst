###################
{exp:discuss:board}
###################

*******
Example
*******

**********
Parameters
**********

- **board=** (required) the short name of the board to display

*********
Variables
*********

- All :ref:`Board Variables <discuss_board_variables>`
- ``{category}{/category}`` tag pair, outputs for each category

	+ All :ref:`Forum Variables <discuss_forum_variables>`

- ``{forum}{/forum}`` tag pair, outputs for each forum

    + All :ref:`Forum Variables <discuss_forum_variables>`
    + ``{count}``: the current count of the loop, for this category
    + ``{total_results}}``: the total number of forums in this category


