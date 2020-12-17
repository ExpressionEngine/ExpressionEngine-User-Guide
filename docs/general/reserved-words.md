<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Reserved Words

[TOC]

## Reserved for Templates

To avoid template confusion, some words are reserved for ExpressionEngine's use and can not be used in Template Names. Below is a list of reserved words that cannot be used in Template Names.

- act
- css

There are some additional words that may be reserved in certain circumstances. The following list represents the ExpressionEngine defaults; however, the user-chosen trigger is what will be reserved.

- category - reserved when the option to allow Category Names in URLs is enabled
- forum - reserved when the Forum Module is installed
- member - reserved when the Member Module is installed

## Reserved for Global Variables

There are some words reserved for ExpressionEngine's use that may not be used in naming [Template Variables](templates/variable.md). Below is a list of these reserved words.

- lang
- charset
- CSRF_TOKEN
- homepage
- debug_mode
- gzip_mode
- version
- elapsed_time
- hits
- total_queries
- XID_HASH

## Reserved for Fields

To avoid potential parsing conflicts, some words are reserved and are not available to use as channel or member field names. Below is a list of these reserved words.

- app_version
- author
- author_id
- avatar_image_height
- avatar_image_width
- avatar_url
- captcha
- charset
- comment_auto_path
- comment_entry_id_auto_path
- comment_tb_total
- comment_total
- comment_url_title_path
- count
- current_time
- date
- debug_mode
- edit_date
- elapsed_time
- email
- embed
- encode
- entry_date
- entry_id
- entry_id_path
- expiration_date
- forum_topic_id
- gmt_edit_date
- gmt_entry_date
- group_description
- group_id
- gzip_mode
- hits
- homepage
- ip_address
- ip_hostname
- lang
- member_group
- member_id
- member_profile_link
- member_search_path
- most_recent_comment
- path
- permalink
- photo_image_height
- photo_image_width
- photo_url
- private_messages
- profile_path
- random
- recent_comment_date
- relative_date
- relative_url
- screen_name
- signature
- signature_image_height
- signature_image_url
- signature_image_width
- site_index
- site_name
- site_url
- status
- stylesheet
- switch
- title
- title_permalink
- total_comments
- total_entries
- total_forum_posts
- total_forum_topics
- total_queries
- total_results
- trimmed_url
- url_title
- url_title_path
- username
- version
- view_count_four
- view_count_one
- view_count_three
- view_count_two
- channel
- channel_id
- webmaster_email
