#########
Variables
#########

The Discuss module has sets of variables available to each entity (board, forum, topic, reply, etc.). Tags make these variables available consistently in the appropriate context. Please refer to the documentation for the tag you are using to see which of these types of variables are available to you in a given context.

.. _discuss_board_variables:

***************
Board Variables
***************

- ``{board_label}``: Descriptive name of the board
- ``{board_name}``: Short name of the board, for tag parameters
- ``{board_recent_poster_id}``: Member ID of the most recent contributor to this board
- ``{board_recent_poster}``: Screen name of the most recent contributor to this board
- ``{mark_all_read_url}``: A URL to allow the current visitor to mark all topics as read
- ``{max_attach_size}``: Maximum file attachement size allowed, in kilobytes.
- ``{max_height}``: Maximum height, in pixels, for image attachments
- ``{max_width}``: Maximum width, in pixels, for image attachements

Boolean Conditionals
--------------------

The following boolean (``true`` or ``false``) conditionals are available:

- ``{if can_post_reply}``: Whether or not the user is allowed to post replies
- ``{if can_post_topics}``: Whether or not the user is allowed to post new topics
- ``{if can_report}``: Whether or not the user is allowed to report posts
- ``{if can_search}``: Whether or not the user is allowed to search this board
- ``{if can_upload_files}``: Whether or not the user is allowed to upload files
- ``{if can_view_forum}``: Whether or not the user is allowed to view forums
- ``{if can_view_hidden}``: Whether or not the user is allowed to view hidden forums
- ``{if can_view_topics}``: Whether or not the user is allowed to view topics
- ``{if is_admin}``: Whether or not the user is an administrator

.. _discuss_forum_variables:

***************
Forum Variables
***************

- ``{board_id}``: Board ID the the forum belongs to
- ``{forum_description}``: The forum's description
- ``{forum_id}``: ID of the forum
- ``{forum_name}``: Name of the forum
- ``{forum_path='template_group/template'}``: :doc:`Path variable </templates/globals/path>` to link to the forum. The forum ID and the URL title are automatically added to the template path.
- ``{forum_url_title}``: URL title of the forum
- ``{last_post_author}``: Screen name of the author of the most recent topic in this forum
- ``{last_post_author_id}``: Member ID of the author of the most recent topic in this forum
- ``{last_post_date}``: :doc:`Date variable </templates/date_variable_formatting>` of the most recent topic
- ``{last_post_id}``: ID of the most recent topic
- ``{last_post_path='template_group/template'}``: :doc:`Path variable </templates/globals/path>` to link to the most recent topic
- ``{last_post_title}``: Name of the most recent topic
- ``{last_post_type}``: Type of the most recent contribution type, ``p`` for normal topics, ``a`` for moderator announcments
- ``{max_post_characters}``: Maximum number of characters allowed in a post
- ``{new_topic_path='template_group/template'}``: :doc:`Path variable </templates/globals/path>` to link to a new topic form for this forum. Forum ID and URL title are automatically appended.
- ``{status}``: Forum status. ``o`` for Open, ``c`` for Closed (Hidden) and ``a`` for Archived (Read-only).
- ``{total_posts}``: Total number of replies to topics in this forum
- ``{total_topics}``: Total number of topics in this forum

Boolean Conditionals
--------------------

The following boolean (``true`` or ``false``) conditionals are available:

- ``{if can_post_reply}``: Whether or not the user is allowed to post replies
- ``{if can_post_topics}``: Whether or not the user is allowed to post new topics
- ``{if can_report}``: Whether or not the user is allowed to report posts
- ``{if can_search}``: Whether or not the user is allowed to search this board
- ``{if can_upload_files}``: Whether or not the user is allowed to upload files
- ``{if can_view_forum}``: Whether or not the user is allowed to view forums
- ``{if can_view_hidden}``: Whether or not the user is allowed to view hidden forums
- ``{if can_view_topics}``: Whether or not the user is allowed to view topics
- ``{if is_admin}``: Whether or not the user is an administrator
