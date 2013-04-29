File-Based System Configuration
*******************************

Every time ExpressionEngine runs, its system configuration is determined by
settings stored in several resources:

When settings are saved in the Control Panel, ExpressionEngine stores them in
the **database**. Settings from the database are loaded first.

The **site index file** is the ``index.php`` file found in the web root of the
ExpressionEngine installation. This file acts like the gateway to the front-end
of the site. Since all web requests for a site's front-end will pass through the
site index file, there are a *limited selection* of configuration variables you
can include in this file to alter ExpressionEngine's configuration.
(Configuration variables that can be used in ``index.php`` or ``admin.php`` are
noted below.) Keep in mind that any configuration variables set in the site
index file *only* affect the system's behavior for front-end pages. (Even if you
have :doc:`removed index.php from your site's URLs</urls/remove_index.php>`, all
front-end web requests are still handled by the site index file.)

The **CP index file** is the ``admin.php`` file also found in the installation's
web root. The CP index file is similar to the site index file except that it
acts as the gateway for all web requests to the Control Panel. And similarly,
any configuration variables set in the CP index file *only* affect the system's
behavior for pages accessed through the Control Panel (e.g.
*http://example.com/admin.php*).

ExpressionEngine's **main configuration file**, found at
``system/expressionengine/config/config.php``, is loaded every time the system
is run, meaning that configuration variables set in ``config.php`` always alter
the system's configuration. Since ``config.php`` is loaded after all other
configuration resources, it also means any configuration variables set in this
file will override settings loaded from all other resources. For this reason,
ExpressionEngine developers have adopted the shorthand "config overrides" to
refer to file-based system configuration variables.

For serving up the front-end, ExpressionEngine loads configuration resources in
this order:

#. Settings stored in the Database are loaded.
#. Configuration variables in the site index file are loaded and override
   settings loaded from the database.
#. Configuration variables in ``config.php`` are loaded and override any
   settings loaded from the database or the site index file.

For serving Control Panel pages, ExpressionEngine loads configuration resources
in this order:

#. Settings stored in the Database are loaded.
#. Configuration variables in the CP index file are loaded and override settings
   loaded from the database.
#. Configuration variables in ``config.php`` are loaded and override any
   settings loaded from the database or the CP index file.
 

Configuration Variables
=======================

.. contents::
    :local:


admin_session_type
------------------

Sets the :ref:`Control Panel session type <cp-session-type-label>`.

====== ========
Values Behavior
====== ========
``c``  Sets the Control Panel to use cookies only
``s``  Sets the Control Panel to use Session ID only
``cs`` Sets the Control Panel to use Cookies and Session ID
====== ========


Example Usage::


 $config['admin_session_type'] = 's';


.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Security And Privacy --> Security And Sessions`: Control Panel Session Type


allow_avatar_uploads
--------------------
Allows or disallows :ref:`avatar uploads <avatar-upload-label>`.

======== ===========
Values   Behavior
======== ===========
``y``    Yes, allow member to upload their own :ref:`avatar <avatar-upload-label>`
``n``    No, do not allow member to upload their own avatar.
======== ===========

Example: ::


$config['allow_avatar_uploads'] = 'y';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Members --> Preferences`: Allow members to upload their own avatars



allow_dictionary_pw
-------------------
:ref:`Allow Dictionary Words as Passwords <dict-passwds-label>` allows or disallows members to use passwords that are based on dictionary words.

======== ===========
Values   Behavior
======== ===========
``y``    Yes, allow user to members :ref:`dictionary based passwords <dict-passwds-label>`
``n``    No, do not allow members to use dictionary based passwords.
======== ===========

Example: ::


$config['allow_dictionary_pw'] = 'y';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Design --> Security And Privacy --> Security And Sessions`: Allow Dictionary Words as Passwords



allow_extensions
----------------
Enables or disables extensions in the Control Panel.

======== ===========
Values   Behavior
======== ===========
``y``    Enable Extensions
``n``    Disable extensions
======== ===========

Example: ::


$config['allow_extensions'] = 'y';


allow_member_localization
-------------------------
:ref:`Allow members to set their own localization preferences <allow-member-localization-label>` allows members to set their own localization. If set to "no" all dates and times will be localized to the master site default.


======== ===========
Values   Behavior
======== ===========
``y``    Allow members to set their own localization
``n``    Do not allow members to set their own localization
======== ===========

Example: ::


$config['allow_member_localization'] = 'y';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Members --> Preferences --> Security And Sessions`: Allow members to set their own localization preferences



allow_member_registration
-------------------------
Allow or disallow new :ref:`Member Registration <allow-member-register-label>` on your ExpressionEngine website.

======== ===========
Values   Behavior
======== ===========
``y``    Allow members to register
``n``    Do not allow members to register
======== ===========

Example: ::


$config['allow_member_registration'] = 'y';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Members --> Preferences`: Allow New Member Registrations


allow_multi_logins
-------------------------
:ref:`Allow multiple log-ins from a single account <allow-multi-logins-label>` determines whether more than one person can simultaneously access the system using the same user account.

.. NOTE::
   If your Session Type above is set to "Cookies Only" this feature will not work.

======== ===========
Values   Behavior
======== ===========
``y``    Allow members to register
``n``    Do not allow members to register
======== ===========

Example: ::


$config['allow_multi_logins'] = 'y';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Design --> Security And Privacy --> Security And Sessions`: Allow multiple log-ins from a single account


allow_textarea_tabs
-------------------------
If not set the template editor and publish write mode allow for tabular input. Set to n to disable all tab input, set to y to force tab preservation in all publish textareas. 

======== ===========
Values   Behavior
======== ===========
``y``    Allow tabs in textareas
``n``    Do not allow tabs in textareaas
======== ===========

Example: ::


$config['allow_textarea_tabs'] = 'y';

This is a :ref:`Hidden Config Variable <allow-txtarea-tabs-label>`


allow_signatures
-------------------------
Allow or disallow members to have their own :ref:`signatures <allow-member-sigs-label>`.

======== ===========
Values   Behavior
======== ===========
``y``    Allow members to have their own signature
``n``    Do not allow members to have their own signature
======== ===========

Example: ::


$config['allow_signatures'] = 'y';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Members --> Preferences`: Allow Users to have Signatures


allow_username_change
-------------------------
:ref:`Allow members to change their username <allow-member-username-label>` allows or disallows members to change their username.

========= ===========
Values    Behavior
========= ===========
``y``     Allow members to change their username
``n``     Do not allow members to change their username
========= ===========

Example: ::


$config['allow_username_change'] = 'y';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Design --> Security And Privacy --> Security And Sessions`: Allow members to change their username


app_version
-------------------------
The version of ExpressionEngine that you are using.

========= ===========
Values    Behavior
========= ===========
``Num``   Numerical value of the version you are using
========= ===========

Example: Version 2.6.1 ::


$config['app_version'] = '261';


auto_assign_cat_parents
-------------------------
If the :ref:`Auto-Assign Category Parents <auto-assign-categoryP-label>` option is set to “yes”, when new entries that contain category assignments are submitted, the “parent” category of any sub-categories will be automatically assigned. If set to “no”, the entry will only be assigned to the child category.

========= ===========
Values    Behavior
========= ===========
``y``     The “parent” category will be automatically assigned 
``n``     Entry will only be assigned to the child category 
========= ===========

Example: ::


$config['auto_assign_cat_parents'] = 'y';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Channel Administration --> Global Channel Preferences`: Auto-Assign Category Parents


avatar_max_height
-------------------------
The :ref:`maximum height <avatar-max-height-label>` (in pixels) allowed for user-uploaded avatars.

========= ===========
Values    Behavior
========= ===========
``Num``   Numerical value depicting max height in pixels
========= ===========

Example: ::


$config['avatar_max_height'] = '120';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Members --> Preferences`: Avatar Maximum Height


avatar_max_kb
-------------------------
The :ref:`Maximum File Size <avatar-max-kb-label>` allowed for user-uploaded avatars.

========= ===========
Values    Behavior
========= ===========
``Num``   Numerical value depicting max size in Kilobytes
========= ===========

Example: ::


$config['avatar_max_kb'] = '60';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Members --> Preferences`: Avatar Maximum Size


avatar_max_width
-------------------------
The :ref:`Maximum Width <avatar-max-width-label>` (in pixels) allowed for user-uploaded avatars.

========= ===========
Values    Behavior
========= ===========
``Num``   Numerical value depicting max width in pixels
========= ===========

Example: ::


$config['avatar_max_width'] = '120';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Members --> Preferences`: Avatar Maximum Width


avatar_path
-------------------------
The :ref:`Server Path <avatar-path-label>` to the Avatar Folder.

========= ===========
Values    Behavior
========= ===========
``Path``  Full server path to avatar folder
========= ===========

Example: ::


$config['avatar_path'] = '/path/images/avatars/';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Members --> Preferences`: Server Path to Avatar Folder


avatar_url
-------------------------
The :ref:`URL <avatar-url-label>` to the Avatar Folder.

========= ===========
Values    Behavior
========= ===========
``URL``   URL to avatar folder 
========= ===========

Example: ::


$config['avatar_url'] = 'http://example.com/images/avatars';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Members --> Preferences`: URL to Avatar Folder


ban_action
-------------------------
The :ref:`Banned IP Action <member-banned-ip-label>` specifies what action will be taken when a banned IP Address attempts to access your ExpressionEngine website.

============= ===========
Values        Behavior
============= ===========
``restrict``  Restrict the user to viewing the site only 
``message``   Show the user a specific message
``bounce``    Redirect the user to another specified site
============= ===========

Example: ::


$config['ban_action'] = 'message';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Members --> User Banning`: When a banned IP tries to access the site



ban_destination
-------------------------
The :ref:`Banned IP Destination <member-banned-ip-label>` specifies what URL you would like to redirect the user to.

.. NOTE::
   This settings works with **$config['ban_action'] = 'bounce';**

========= ===========
Values    Behavior
========= ===========
``URL``   Send the user to this URL
========= ===========

Example: ::


$config['ban_destination'] = 'http://www.example.com';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Members --> User Banning`: When a banned IP tries to access the site


ban_message
-------------------------
The :ref:`Banned IP Message <member-banned-ip-label>` specifies what message to show the user.

.. NOTE::
   This settings works with **$config['ban_action'] = 'message';**

========= ===========
Values    Behavior
========= ===========
``text``  Message to be shown to user
========= ===========

Example: ::


$config['ban_message'] = 'This site is currently unavailable';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Members --> User Banning`: When a banned IP tries to access the site


banish_masked_ips
-------------------------
If the :ref:`Require IP Address and User Agent for Login <require-ip-logins-label>` option is set to “yes”, then users will not be able to log in unless their browser (or other access device) correctly supplies their IP address and User Agent (browser) information. Having this set to “Yes” can help prevent hackers from logging in using direct socket connections or from trying to access the system with a masked IP address.

========= ===========
Values    Behavior
========= ===========
``y``     IP address and User Agent must be present 
``n``     Do not check IP address and User Agent 
========= ===========

Example: ::


$config['banish_masked_ips'] = 'y';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Security and Privacy --> Security and Sessions`: Require IP Address and User Agent for Login


banishment_message
-------------------------
When dealing with :ref:`Throttling Configuration <throttle-prefs-label>` you may chose a custom message to show users when they have reached the allowed page load frequency.

========= ===========
Values    Behavior
========= ===========
``text``  Custom message to show user 
========= ===========

Example: ::


$config['banishment_message'] = 'You have exceeded the allowed page load frequency.';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Security and Privacy --> Throttling Preferences`: Custom Message


banishment_type
-------------------------
The :ref:`Banned Type <throttle-prefs-label>` specifies what action will be taken when throttling is enabled on your ExpressionEngine website.

.. NOTE::
   If Throttling is enabled the default **Action to Take** is to send 404 headers.

============= ===========
Values        Behavior
============= ===========
``redirect``  Redirect the user to a specified URL 
``message``   Show the user a custom message 
============= ===========


Example: ::


$config['banishment_type'] = 'message';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Members --> Security and Privacy --> Throttling Preferences`: Action to Take


banishment_url
-------------------------
The :ref:`URL for Redirect <throttle-prefs-label>` specifies which URL to redirect to.

========= ===========
Values    Behavior
========= ===========
``URL``   The URL to redirect to 
========= ===========


Example: ::


$config['banishment_url'] = 'http://www.example.com';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Members --> Security and Privacy --> Throttling Preferences`: URL for Redirect


banned_emails
-------------------------
The :ref:`Banned Email Addresses <member-banned-email-label>` allows you specify any email addresses you wish to ban. You may specify full email addresses or use wildcards to specify partial email addresses. For example, _*@example.com. Each address should be placed on a separate line.

========= ===========
Values    Behavior
========= ===========
``email`` Email addresses or wildcard domain
========= ===========


Example: ::


$config['banned_emails'] = 'user@example.com';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Members --> User Banning`: Banned Email Addresses


banned_ips
-------------------------
The :ref:`Banned IP Addresses <member-banned-ip-label>` allow you to specify any IP addresses you wish to ban. You may specify full IP addresses or use wildcards to specify blocks of IP addresses. For example, 123.321.*. Each IP address should be placed on a separate line.

====== ========
Values Behavior
====== ========
``IP`` IP address
====== ========


Example: ::


$config['banned_ips'] = '123.321.*';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Members --> User Banning`: Banned IP Address


banned_screen_names
-------------------------
The :ref:`Restricted Screen Names <member-banned-screename-label>` allow you to list screen names, preventing their use. This can be handy if you would like to reserve certain screen names for your own use.

================ ===========
Values           Behavior
================ ===========
``screen name``  Screen name or list of screen names to be restricted
================ ===========


Example: ::


$config['banned_ips'] = 'garfield';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Members --> User Banning`: Restricted Screen Names


banned_usernames
-------------------------
The :ref:`Restricted Usernames <member-banned-username-label>` allow you to list usernames, preventing their use. This can be handy if you would like to reserve certain usernames for your own use.

============ ========
Values       Behavior
============ ========
``username`` Username or list of usernames to be restricted
============ ========


Example: ::


$config['banned_ips'] = 'dsmith';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Members --> User Banning`: Restricted Usernames


base_url
-------------------------
The :ref:`URL to the root directory of your site <general-config-url-root-label>` is the full URL to the folder containing your site’s index page.

======== ========
Values   Behavior
======== ========
``URL``  URL to the root directory of your site
======== ========


Example: ::


$config['base_url'] = 'http://www.example.com';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> General Configuration`: URL to the root directory of your site


captcha_font
-------------------------
You can :ref:`use TrueType Font for CAPTCHA <captcha-notes-label>` on your ExpressionEngine website by default. To disable set the value to "n".

====== ========
Values Behavior
====== ========
``y``  Default value, enables the use of TrueType Fonts
``n``  Disables use of TrueType fonts
====== ========


Example: ::


$config['captcha_font'] = 'n';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Security And Privacy --> CAPTCHA Preferences`: Use TrueType Font for CAPTCHA


captcha_path
-------------------------
The :ref:`Server Path to you CAPTCHA Folder <captcha-notes-label>`.

======== ========
Values   Behavior
======== ========
``path`` Relative server path to CAPTCHA folder
======== ========


Example: ::


$config['captcha_path'] = '/var/www/html/example/images/captchas';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Security And Privacy --> CAPTCHA Preferences`: Server Path to CAPTCHA Folder


captcha_rand
-------------------------
You may specify whether to :ref:`Add Random Number to CAPTCHA Word <captcha-notes-label>` or not. The default is "y".

====== ========
Values Behavior
====== ========
``y``  Default value, add a random number to CAPTCHA word
``n``  Do not add a random number to CAPTCHA word
====== ========


Example: ::


$config['captcha_rand'] = 'n';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Security And Privacy --> CAPTCHA Preferences`: Add Random Number to CAPTCHA Word


captcha_require_members
-------------------------
:ref:`Require CAPTCHA with logged-in members <captcha-notes-label>` allows you to specify whether logged in members must enter in a CAPTCHA word or not.

====== ========
Values Behavior
====== ========
``y``  Require that logged-in users enter a CAPTCHA word before a form is submitted
``n``  Default value, does not require a logged-in member to enter a CAPTCHA word
====== ========


Example: ::


$config['captcha_require_members'] = 'y';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Security And Privacy --> CAPTCHA Preferences`: Require CAPTCHA with logged-in members


captcha_url
-------------------------
The :ref:`Full URL to CAPTCHA Folder <captcha-notes-label>`.

======== ========
Values   Behavior
======== ========
``URL``  Full URL to the CAPTCHA folder
======== ========


Example: ::


$config['captcha_url'] = 'http://www.example.com/images/captchas';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Security And Privacy --> CAPTCHA Preferences`: Full URL to CAPTCHA Folder


censor_replacement
-------------------------
You may optionally specify a word or phrase to be used when :ref:`replacing censored words <censor-replace-label>`. For example, if you set “tisk tisk” as your replacement word, and “shucks” is in your censored list, then anytime “shucks” is used it will be replaced with “tisk tisk”. If you do not set this preference, a pound symbol will be used for each character that is censored, so “shucks” would be converted to “######”.

======== ========
Values   Behavior
======== ========
``word`` Word to be used as a replacement for censored words
======== ========


Example: ::


$config['censor_replacement'] = 'censored';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Security And Privacy --> Word Censoring`: Censoring Replacement Word


censored_words
-------------------------
You may list the words that you would like to :ref:`censor <censor-words-label>`. Wild cards are allowed by adding a _* to the beginning or end of a censored word. So, for example the wildcard test* would censor the words test, testing, and tester, while the wildcard _*gress would censor the words progress and congress.

======== ========
Values   Behavior
======== ========
``word`` Word to be censored
======== ========


Example: ::


$config['censored_words'] = 'blanket';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Security And Privacy --> Word Censoring`: Censored Words


charset
-------
 This determines which character set is used by default in various methods that require a character set to be provided.

============ ========
Values       Behavior
============ ========
``charset``  character set to be used
============ ========


Example: ::


$config['charset'] = 'UTF-8';


comment_edit_time_limit
-----------------------
The :ref:`Comment Editing Time Limit <comment-editing-time-label>` specifies the length of time (in seconds) that non-Superadmins have before comment editing is disallowed on the front end of the site. Set to 0 for no limit.

========== ========
Values     Behavior
========== ========
``number`` Length of time (in seconds)
========== ========


Example: ::


$config['comment_edit_time_limit'] = '120';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Add-Ons --> Modules --> Comment`: Comment Editing Time Limit


comment_moderation_override
---------------------------
:ref:`Moderate expired entries <comment-expired-comments-label>` forces moderation of comments once the Comment Expiration date for an entry is passed, rather than closing comments entirely. The existing moderation rules regarding whether members are exempt from moderation will be followed.

====== ========
Values Behavior
====== ========
``y``  Forces moderation of comment instead of closing after expiration
``n``  Default value, does not force moderation
====== ========

Example: ::


$config['comment_moderation_override'] = 'y';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Add-Ons --> Modules --> Comment`: Moderate expired entries


comment_word_censoring
----------------------
:ref:`Word Censoring <censor-words-label>` normally applies to the entire site, affecting both channel entries and comments. The :ref:`force word censoring for comments <comment-force-censoring-label>`  setting allows you to apply word censoring to comments, even when it is turn off for the site as a whole. The censored words and replacements are still determined by the Administration preferences, and if site-wide word censoring is enabled, comments will still be censored regardless of this setting.

====== ========
Values Behavior
====== ========
``y``  Forces word censoring for comments
``n``  Default value, does not force censoring for comments
====== ========

Example: ::

$config['comment_word_censoring'] = 'y';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Add-Ons --> Modules --> Comment`: Force word censoring for comments


compress_output
----------------------
Setting :ref:`Enable GZIP Output <output-enable-gzip-label>` to “Y” will cause the web server to send out your pages in the compressed gzip format. Browsers will automatically decompress the pages and display them as normal; there will be no visible difference to your users apart from a faster page loading time.

In order for this option to work your server must support the gzip format. Additionally, the browser being used to view your site must also support pages served in the gzip format. Many modern browser support this, but not all do, so if you are concerned with wide-spread compatibility you may want to set this to “n”. (Also note that while Internet Explorer does support this feature, it also contains bugs in its implementation which can have adverse consequences.)

========= ========
Values    Behavior
========= ========
``TRUE``  When enabled, your site will be shown in a compressed format for faster page loading
``FALSE`` Default value, does not compress output
========= ========

Example: ::

$config['compress_output'] = 'FALSE';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> System Administration --> Output and Debugging`: Enable GZIP Output



   ::


    [auto_convert_high_ascii]

    [cache_path] <-- seems to be a CI thing

    [channel_nomenclature] <--- What?

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