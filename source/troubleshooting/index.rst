.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

###############
Troubleshooting
###############

*******
General
*******

- :doc:`general/file_permissions`
- :doc:`Performing some action results in a blank page <general/blank_pages>`
- :doc:`Submitting a form has no effect and the page simply reloads <general/form_submissions>`

*********
Templates
*********

- :doc:`"Enable HTTP Authentication" Doesn't Work <templates/http_authentication_setting_not_working>`
- :doc:`Embedded Templates not using my Assigned Variables <templates/embedded_templates_not_using_assigned_variables>`
- :doc:`PHP and EE tags are not parsed in my Stylesheet <templates/php_and_ee_tags_not_parsed_in_css>`
- :doc:`Content from my newly created field doesn't appear on the page <templates/content_from_new_custom_field_not_appearing>`
- :doc:`CAPTCHA Images aren't appearing <templates/captchas_not_appearing>`
- :doc:`Can't save a template containing the {exp:query} tag <templates/cant_save_template_with_query_tag>`

************
Installation
************

- :doc:`Browser is attempting to download install.php instead of showing it <install_and_update/browser_downloading_install_php>`
- :doc:`"Table already exists" error when upgrading <install_and_update/table_already_exists>`
- :doc:`Emoji support <install_and_update/emoji_support>`

*************
Control Panel
*************

- :doc:`Control Panel has no CSS <control_panel/unstyled_cp>`
- :doc:`Missing Glyphicon Icon UI Elements <control_panel/missing_icon_ui_elements>`
- :doc:`Categories do not appear as filter options in the Edit tab <control_panel/categories_not_appearing_in_edit_tab>`
- :doc:`Why do I have to re-login to the CP if I'm logged in to the site <control_panel/site_and_cp_login_separate>`
- :doc:`I can not log into the Control Panel on my Windows-based server <control_panel/no_login_on_windows_server>`
- :doc:`I've Lost or Forgotten My Username or Password and Can't Log In <control_panel/lost_password_cant_log_in>`

********************
Channels and Entries
********************

- :doc:`Localization and Entry Dates <channels_and_entries/localization_and_entry_dates>`
- :doc:`I changed the default field formatting but the entries are the same <channels_and_entries/changing_the_field_formatting_for_existing_entries>`
- :doc:`I posted an entry but it isn't appearing on my site <channels_and_entries/new_entry_not_appearing>`
- :doc:`How can I display future entries? <channels_and_entries/how_to_display_future_entries>`
- :doc:`New members do not appear as options in the Publish author list <channels_and_entries/new_members_not_authors>`
- :doc:`How do I move entries to another channel? <channels_and_entries/moving_entries_to_another_channel>`

*****
Email
*****

- :doc:`Emails sent via EE are not reaching their destination <email/emails_not_reaching_destination>`
- :doc:`Problems using Gmail <email/problems_using_gmail>`

**********************
Simple Commerce Module
**********************

- :doc:`IPN Not being recorded <simple_commerce_module/IPN_not_recorded>`

**************
Error Messages
**************

- :doc:`No Suitable Nodes Available <error_messages/no_suitable_nodes>`
- :doc:`Parse error: syntax error, unexpected T\_STRING in path/to/system/core/core.functions.php(626) : eval()'d code on line 1 <error_messages/unexpected_T_STRING>`
- :doc:`Unable to perform the SQL queries needed to install this program <error_messages/unable_to_perform_the_sql_queries_needed>`
- :doc:`Client does not support authentication protocol request by server <error_messages/client_does_not_support_authentication_protocol>`
- :doc:`A problem was encountered while trying to upload your file <error_messages/a_problem_was_encountered_while_trying_to_upload_your_file>`
- :doc:`Unable to receive your comment at this time <error_messages/unable_to_receive_your_comment>`
- :doc:`MySQL Error 1030: Got error 28 <error_messages/mysql_error_1030_got_error_28>`
- :doc:`MySQL Error 1366: Incorrect string value <error_messages/incorrect_string_value>`
- :doc:`Can't open file: 'exp\_online\_users.MYI' <error_messages/can't_open_file_exp_online_users.myi>`
- :doc:`Allowed memory size of xxxx bytes exhausted <error_messages/allowed_memory_size_exhausted>`
- :doc:`Warning: Cannot modify header information <error_messages/cannot_modify_header_information>`
- :doc:`Supplied argument is not a valid MySQL-Link resource <error_messages/supplied_argument_is_not_a_valid_mysql-link_resource>`
- :doc:`Call to undefined function: imagettftext() <error_messages/call_to_undefined_function_imagettftext>`
- :doc:`You are not authorized to perform this action <error_messages/you_are_not_authorized_to_perform_this_action>`
- :doc:`ExpressionEngine has detected the modification of a core file <error_messages/expressionengine_has_detected_the_modification_of_a_core_file>`
- :doc:`You do not have value set for [encryption_key/session_crypt_key] in your config.php <error_messages/missing_encryption_keys>`
- :doc:`An unexpected error occurred attempting to download the current ExpressionEngine version number <error_messages/unexpected_error_occurred_attempting_to_download_the_current_expressionengine_version_number>`

.. toctree::
	:glob:
	:titlesonly:
	:hidden:

	channels_and_entries/*
	control_panel/*
	email/*
	error_messages/*
	general/*
	install_and_update/*
	simple_commerce_module/*
	templates/*
