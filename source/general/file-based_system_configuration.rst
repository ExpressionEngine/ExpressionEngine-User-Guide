File-Based System Configuration
===============================

.. contents::
    :local:



The config.php file found at system/expressionengine/config/config.php allows you to override settings in all other locations. Configuration settings are honored as follows.

#. Settings saved in the Database are used.
#. Settings in index.php effect the front of site and override the settings in the database.
#. Settings in admin.php and system/index.php effect the Control Panel and override settings in the database.
#. Settings in config.php override everything else. If the configuration is set in this file, it will take precedence over items 1-3.



admin_session_type
------------------
Sets the session type of the control panel.

+---------------------------+-------------------------------------------------------+
|Values                     |Behavior                                               |
+===========================+=======================================================+
|``c``                      |Sets the Control Panel to use                          |
|                           |:doc:`cookies </cp/admin/security_settings>` only      |
+---------------------------+-------------------------------------------------------+
|``s``                      |Sets the Control Panel to use                          |
|                           |:doc:`Session ID </cp/admin/security_settings>` only   |
+---------------------------+-------------------------------------------------------+
|``cs``                     |Sets the Control Panel to use Cookies and Sessions     |
|                           |                                                       |
+---------------------------+-------------------------------------------------------+


Example: ::


 $config['admin_session_type'] = 's';


May be set in the Control Panel as well by navigating to :menuselection:`Design --> Security And Privacy --> Security And Sessions` and changing the value for :doc:`Admin Session Type </cp/admin/security_settings>`

allow_avatar_uploads
--------------------
Allows or disallows avatar uploads.

+-----------------------+-----------------------------------------------------------+
|Values                 |Behavior                                                   |
+=======================+===========================================================+
|``y``                  |Yes, allow member to upload their own                      |
|                       |:ref:`avatar <avatar-upload-label>`                        |
+-----------------------+-----------------------------------------------------------+
|``n``                  |No, do not allow member to upload their own avatar.        |
|                       |                                                           |
+-----------------------+-----------------------------------------------------------+

Example: ::


$config['allow_avatar_uploads'] = 'y';


May be set in the Control Panel as well by navigating to :menuselection:`Members --> Preferences` and changing the value for :ref:`Allow members to upload their own avatars?<avatar-upload-label>`


allow_dictionary_pw
-------------------
Allows or disallows members to use passwords that are based on dictionary words.

+-----------------------+-----------------------------------------------------------+
|Values                 |Behavior                                                   |
+=======================+===========================================================+
|``y``                  |Yes, allow user to members                                 |
|                       |:ref:`dictionary based passwords <dict-passwds-label>`     |
+-----------------------+-----------------------------------------------------------+
|``n``                  |No, do not allow members to use dictionary based passwords.|
|                       |                                                           |
+-----------------------+-----------------------------------------------------------+

Example: ::


$config['allow_dictionary_pw'] = 'y';


May be set in the Control Panel as well by navigating to :menuselection:`Design --> Security And Privacy --> Security And Sessions`   and changing the value for :ref:`Allow Dictionary Words as Passwords?<dict-passwds-label>` 


allow_extensions
----------------
Enables or disables extensions in the Control Panel.

+-----------------------+-----------------------------------------------------------+
|Values                 |Behavior                                                   |
+=======================+===========================================================+
|``y``                  |Enable Extensions                                          |
+-----------------------+-----------------------------------------------------------+
|``n``                  |Disable extensions.                                        |
+-----------------------+-----------------------------------------------------------+

Example: ::


$config['allow_extensions'] = 'y';


allow_member_localization
-------------------------
Allows members to set their own localization. If set to "no" all dates and times will be localized to the master site default.

+-----------------------+-----------------------------------------------------------+
|Values                 |Behavior                                                   |
+=======================+===========================================================+
|``y``                  |Allow members to set their own localization                |
+-----------------------+-----------------------------------------------------------+
|``n``                  |Do not allow members to set their own localization         |
+-----------------------+-----------------------------------------------------------+

Example: ::


$config['allow_member_localization'] = 'y';


May be set in the Control Panel as well by navigating to :menuselection:`Members --> Preferences` and changing the value for :ref:`Allow members to set their own localization preferences? <allow-member-localization-label>`


allow_member_registration
-------------------------
Allow or disallow new member registration on your ExpressionEngine website.

+-----------------------+-----------------------------------------------------------+
|Values                 |Behavior                                                   |
+=======================+===========================================================+
|``y``                  |Allow members to register                                  |
+-----------------------+-----------------------------------------------------------+
|``n``                  |Do not allow members to register                           |
+-----------------------+-----------------------------------------------------------+

Example: ::


$config['allow_member_registration'] = 'y';


May be set in the Control Panel as well by navigating to :menuselection:`Members --> Preferences` and changing the value for :ref:`Allow New Member Registrations? <allow-member-register-label>`

allow_multi_logins
-------------------------
Determines whether more than one person can simultaneously access the system using the same user account. Note: If your Session Type above is set to "Cookies Only" this feature will not work.

+-----------------------+-----------------------------------------------------------+
|Values                 |Behavior                                                   |
+=======================+===========================================================+
|``y``                  |Allow members to register                                  |
+-----------------------+-----------------------------------------------------------+
|``n``                  |Do not allow members to register                           |
+-----------------------+-----------------------------------------------------------+

Example: ::


$config['allow_multi_logins'] = 'y';


May be set in the Control Panel as well by navigating to :menuselection:`Design --> Security And Privacy --> Security And Sessions` and changing the value for :ref:`Allow multiple log-ins from a single account? <allow-multi-logins-label>`


allow_textarea_tabs
-------------------------
If not set the template editor and publish write mode allow for tabular input. Set to n to disable all tab input, set to y to force tab preservation in all publish textareas. 

+-----------------------+-----------------------------------------------------------+
|Values                 |Behavior                                                   |
+=======================+===========================================================+
|``y``                  |Allow tabs in textareas                                    |
+-----------------------+-----------------------------------------------------------+
|``n``                  |Do not allow tabs in textareaas                            |
+-----------------------+-----------------------------------------------------------+

Example: ::


$config['allow_textarea_tabs'] = 'y';


This is a :ref:`Hidden Config Variable <allow-txtarea-tabs-label>`

allow_signatures
-------------------------
Allow or disallow members to have their own signatures.

+-----------------------+-----------------------------------------------------------+
|Values                 |Behavior                                                   |
+=======================+===========================================================+
|``y``                  |Allow members to have their own signature                  |
+-----------------------+-----------------------------------------------------------+
|``n``                  |Do not allow members to have their own signature           |
+-----------------------+-----------------------------------------------------------+

Example: ::


$config['allow_signatures'] = 'y';


May be set in the Control Panel as well by navigating to :menuselection:`Members --> Preferences` and changing the value for :ref:`Allow Users to have Signatures? <allow-member-sigs-label>`

allow_username_change
-------------------------
Allow or disallow members to change their username.

+-----------------------+-----------------------------------------------------------+
|Values                 |Behavior                                                   |
+=======================+===========================================================+
|``y``                  |Allow members to change their username                     |
+-----------------------+-----------------------------------------------------------+
|``n``                  |Do not allow members to change their username              |
+-----------------------+-----------------------------------------------------------+

Example: ::


$config['allow_username_change'] = 'y';


May be set in the Control Panel as well by navigating to :menuselection:`Design --> Security And Privacy --> Security And Sessions` and changing the value for :ref:`Allow members to change their username? <allow-member-username-label>`


  
   ::



    [app_version]
    [auto_assign_cat_parents]
    [auto_convert_high_ascii]
    [avatar_max_height] 
    [avatar_max_kb] 
    [avatar_max_width] 
    [avatar_path]
    [avatar_url]
    [ban_action] 
    [ban_destination]
    [ban_message] 
    [banish_masked_ips]
    [banishment_message]
    [banishment_type]
    [banishment_url]
    [banned_emails] 
    [banned_ips] 
    [banned_screen_names]
    [banned_usernames]
    [base_url]
    [cache_path]
    [captcha_font]
    [captcha_path] 
    [captcha_rand] 
    [captcha_require_members] 
    [captcha_url] 
    [censor_replacement]
    [censored_words] 
    [channel_nomenclature] 
    [charset] 
    [comment_edit_time_limit] 
    [comment_moderation_override]
    [comment_word_censoring]
    [compress_output]
    [controller_trigger]
    [cookie_domain]
    [cookie_path] 
    [cookie_prefix] 
    [cookie_secure]
    [cp_session_ttl]
    [cp_theme] 
    [cp_url] 
    [csrf_protection] 
    [daylight_savings]
    [debug] 
    [default_member_group] 
    [default_site_dst] 
    [default_site_timezone] 
    [deft_lang]
    [demo_date]
    [deny_duplicate_data] 
    [disable_all_tracking]
    [disable_tag_cahing]
    [directory_trigger]
    [doc_url]
    [dynamic_tracking_disabling]
    [email_batch_size]
    [email_batchmode]
    [email_charset]
    [email_console_timelock]
    [email_crlf]
    [email_debug]
    [email_module_captchas]
    [email_newline]
    [email_smtp_port]
    [emoticon_url]
    [enable_avatars]
    [enable_censoring]
    [enable_db_caching]
    [enable_emoticons]
    [enable_entry_view_tracking]
    [enable_hit_tracking]
    [enable_online_user_tracking]
    [enable_hooks]
    [enable_photos]
    [enable_query_strings]
    [enable_search_log]
    [enable_sql_caching]
    [enable_throttling]
    [encode_removed_text]
    [encryption_key] => 
    [filename_increment]
    [force_query_string]
    [function_trigger]
    [forum_is_installed]
    [forum_trigger]
    [global_xss_filtering]
    [gzip_output]
    [honor_entry_dst]
    [hidden_template_indicator]
    [htaccess_path]
    [image_library_path] => 
    [image_resize_protocol]
    [include_seconds]
    [index_page]
    [ip2nation]
    [ip2nation_db_date]
    [install_lock]
    [is_site_on]
    [is_system_on]
    [language]
    [license_number]
    [lockout_time]
    [log_date_format]
    [log_email_console_msgs]
    [log_path]
    [log_referrers]
    [log_search_terms]
    [log_threshold]
    [mail_format]
    [mail_protocol]
    [mailinglist_enabled]
    [mailinglist_notify]
    [mailinglist_notify_emails]
    [max_caches]
    [max_logged_searches]
    [max_page_loads]
    [max_referrers]
    [max_tmpl_revisions]
    [mbr_notification_emails] 
    [member_theme]
    [memberlist_order_by]
    [memberlist_row_limit]
    [memberlist_sort_order]
    [moblog_allow_nontextareas]
    [multi_login_sites]
    [multiple_sites_enabled]
    [name_of_dictionary_file]
    [new_member_notification]
    [new_posts_clear_caches]
    [new_version_check]
    [output_charset]
    [password_lockout]
    [password_lockout_interval]
    [permitted_uri_chars]
    [path_third_themes]
    [photo_max_height] 
    [photo_max_kb] 
    [photo_max_width]
    [photo_path]
    [photo_url]
    [popup_link]
    [profile_trigger]
    [protect_javascript
    [profile_trigger]
    [proxy_ips]
    [prv_msg_attach_maxsize]
    [prv_msg_attach_total]
    [prv_msg_auto_links]
    [prv_msg_html_format]
    [prv_msg_max_attachments]
    [prv_msg_max_chars]
    [prv_msg_upload_path]
    [pw_min_len]
    [publish_page_title_focus]
    [recount_batch_total]
    [redirect_method]
    [redirect_submitted_links]
    [relaxed_track_views]
    [remove_close_all_button]
    [remove_unparsed_vars]
    [req_mbr_activation]
    [require_ip_for_login]
    [require_ip_for_posting]
    [require_secure_passwords]
    [require_terms_of_service]
    [reserved_category_word]
    [rewrite_short_tags]
    [rte_default_toolset_id]
    [rte_enabled]
    [safecracker_field_extra_js]
    [safecracker_option_fields]
    [safecracker_require_save_call]
    [save_tmpl_files]
    [save_tmpl_revisions]
    [sc_encrypt_buttons]
    [sc_paypal_account]
    [sc_temp_path]
    [secure_forms]
    [send_headers]
    [server_offset]
    [server_timezone]
    [sess_type]
    [show_profiler]
    [sig_allow_img_hotlink]
    [sig_allow_img_upload]
    [sig_img_max_height]
    [sig_img_max_kb]
    [sig_img_max_width]
    [sig_img_path]
    [sig_img_url]
    [sig_maxlength]
    [site_404]
    [site_bootstrap_checksums]
    [site_description]
    [site_id]
    [site_index]
    [site_label]
    [site_name]
    [site_pages]
    [site_short_name]
    [site_url]
    [smart_static_parsing]
    [smtp_password]
    [smtp_server]
    [smtp_port]
    [smtp_username]
    [spellcheck_language_code]
    [strict_urls]
    [subclass_prefix]
    [template]
    [template_group]
    [template_loop_prevention]
    [template_debugging]
    [theme_folder_path]
    [theme_folder_url]
    [third_party_path]
    [thumbnail_prefix]
    [time_format]
    [time_interval]
    [time_reference]
    [tmpl_file_basepath]
    [un_min_len]
    [uri_protocol]
    [url_suffix]
    [upload_preferences]
    [url_third_themes]
    [use_category_name]
    [use_compressed_js]
    [use_membership_captcha]
    [use_mobile_control_panel]
    [user_session_ttl]
    [user_session_type]
    [webmaster_email]
    [webmaster_name]
    [word_separator]
    [word_wrap]
    [xml_lang]
    [xss_clean_member_exception]
    [xss_clean_member_group_exception]
    [xss_clean_uploads]