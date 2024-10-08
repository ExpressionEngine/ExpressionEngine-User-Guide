<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# The Template Engine

[TOC]

When ExpressionEngine serves up each Template, the system must go through a rendering process to parse out the Tags, Variables, Template Partials, and Embeds being used in the Template. This page explains the order of those rendering stages. This information can be immensely useful when building pages and troubleshooting problems.

NOTE: **Note:** The information in this article applies only to rendering Templates. It doesn't apply to rendering theme files such as those used for [Member Profiles](control-panel/template-manager.md#member-profile-templates) (legacy), or the [Discussion Forum](https://github.com/ExpressionEngine/Forum/blob/main/docs/themes.md) module.

## Rendering Order

The Template Engine processes the selected template fully from top to bottom through each rendering stage.

1. Determine template to process based on request [URI](general/url-structure.md)
2. Get **template from database**, check [template access permissions](control-panel/template-manager.md#edit-template), and increment the [hit counter](templates/overview.md#hit-counters)
3. If it exists, get [template from file](general/system-configuration-overrides.md#save_tmpl_files)
4. If template type is [static](control-panel/template-manager.md#create-template), return template and end parsing
5. Parse (as a group, so order is irrelevant):
   - [Template partials](templates/partials.md)
   - [MSM variables](msm/code.md#variables): {site_id}, {site_label}, {site_shortname}, {site_name}, {site_url}, {site_description}, {site_index}
   - [{last_segment}](templates/globals/url-segments.md#last-segment)
   - [Member variables](templates/globals/single-variables.md#member-variables)
   - {webmaster_email}, {current_url}, {current_path}, {current_query_string}
   - {template_name}, {template_group}, {template_group_id}, {template_id}, {template_type}
   - {is_ajax_request}, {is_live_preview_request}
6. Parse {in_group()} and [segment variables](templates/globals/url-segments.md)
7. Parse [embed variables](templates/embedding.md#embedding-variables)
8. Parse [layout variables](templates/layouts.md#layout-variables)
9. Parse [date formatting string constants](templates/date-variable-formatting.md#date-formatting-constants)
10. Parse [{template_edit_date}](templates/globals/single-variables.md#template_edit_date)
11. Parse [{current_time}](templates/globals/single-variables.md#current_time)
12. If present, get [cached template](optimization/caching.md#template-caching), then skip to the **second conditionals** parsing stage
13. Parse [PHP on Input](templates/overview.md#php-parsing-stage)
14. Parse [conditional tags](templates/conditionals.md)
15. Assign and parse [preload_replace variables](templates/globals/preload-replacement.md)
16. Parse **module and plugin tags**
    - See notes on how [nested plugins](templates/language.md#nested-plugins) are parsed.
    - If any module's [{if no_results}](channels/entries.md#if-no_results) tag pair evaluates true, a [{redirect}](templates/globals/single-variables.md#redirect) variable within the tag pair will be processed immediately.
17. Parse [PHP on Output](templates/overview.md#php-parsing-stage)
18. Write **template to cache file**
19. Parse [conditional tags](templates/conditionals.md) a second time to catch conditionals for variables and forms that shouldn't get cached
20. Process [template layouts](templates/layouts.md) {layout=}
21. Process [embedded templates](templates/embedding.md) {embed=}
22. Process the first remaining [{redirect=} tag](templates/globals/single-variables.md#redirect)
23. Parse [Site Template Variables](templates/variable.md) and [Global Template Variables](templates/globals/single-variables.md) again, all at once, including:
    - {app_build}
    - {app_version}
    - {build}
    - {charset}
    - {cp_session_id}
    - {cp_url}
    - {current_path}
    - {current_query_string}
    - {current_url}
    - {debug_mode}
    - {doc_url}
    - {email}
    - {group_description}
    - {group_id}
    - {group_title}
    - {gzip_mode}
    - {hits}
    - {homepage}
    - {ip_address}
    - {ip_hostname}
    - {is_ajax_request}
    - {lang}
    - {last_segment}
    - {member_group}
    - {member_id}
    - {member_profile_link}
    - {password_max_length}
    - {private_messages}
    - {screen_name}
    - {site_description}
    - {site_id}
    - {site_index}
    - {site_label}
    - {site_name}
    - {site_short_name}
    - {site_url}
    - {template_group_id}
    - {template_group}
    - {template_id}
    - {template_name}
    - {template_type}
    - {theme_folder_url}
    - {theme_user_folder_url}
    - {total_comments}
    - {total_entries}
    - {total_forum_posts}
    - {total_forum_replies}
    - {total_forum_topics}
    - {username_max_length}
    - {username}
    - {version_identifier}
    - {version}
    - {webmaster_email}
24. Process  [{stylesheet=}](templates/globals/stylesheet.md) / [{scripts=}](templates/globals/scripts.md) / [{encode=}](templates/globals/single-variables.md#encode) / [{path=}](templates/globals/path.md) / [{route=}](templates/routes.md) tags and variables
25. Add [CSRF tokens](development/guidelines/security.md#cross-site-request-forgery) to forms and parse [{csrf_token}](templates/globals/single-variables.md#csrf_token)
