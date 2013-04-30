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
------------------
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
-------------------
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
----------------
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
---------------------
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
-----------
The version of ExpressionEngine that you are using.

========= ===========
Values    Behavior
========= ===========
``Num``   Numerical value of the version you are using
========= ===========

Example: Version 2.6.1 ::


$config['app_version'] = '261';


auto_assign_cat_parents
-----------------------
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
-----------------
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
-------------
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
----------------
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
-----------
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
----------
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
----------
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
---------------
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
-----------
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
-----------------
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
------------------
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
---------------
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
--------------
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
-------------
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
----------
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
-------------------
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
----------------
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
--------
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
------------
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
------------
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
------------
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
-----------------------
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
-----------
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
------------------
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
--------------
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
---------------
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


cookie_domain
-------------
The :ref:`Cookie Domain <cookie-domain-label>` variable allows you to set your cookie domain.

========= ========
Values    Behavior
========= ========
``text``  Sets .yourdomain.com for site-wide cookies
========= ========

Example: ::

$config['cookie_domain'] = '.example.com';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Security and Privacy --> Cookie Settings`: Cookie Domain


cookie_path
-----------
The :ref:`Cookie Path <cookie-path-label>` is an optional setting. You will only need to set this if you require a specific server path for your cookies. If you run multiple installations, or have your installation in a lower folder you can specify a folder from which to make the cooke available. If you set the path to /joe/, the cookie will only be available in the “joe” folder and any subdirectories of it. It will not be available in directories above /joe/. The vast majority of people will leave this setting blank.

========= ========
Values    Behavior
========= ========
``path``  Relative path to cookie folder on your ExpressionEngine web server.
========= ========

Example: ::

$config['cookie_path'] = '/folder/';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Security and Privacy --> Cookie Settings`: Cookie Path


cookie_prefix
-------------
If you will be running multiple installations of ExpressionEngine on the same server then you will want to specify a unique cookie prefix for each installation. This :ref:`Cookie Prefix <cookie-prefix-label>` will prevent the cookies from interfering with each other.

========= ========
Values    Behavior
========= ========
``text``  Sets the cookie prefix for cookies when running multiple installations
========= ========

Example: ::

$config['cookie_prefix'] = 'site1';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Security and Privacy --> Cookie Settings`: Cookie Prefix


cookie_secure
-------------
Secure cookies allow requiring a secure connection (HTTPS) in order to set cookies.

========== ========
Values     Behavior
========== ========
``TRUE``   Requires a secure connection in order to set cookies
``FALSE``  Default value, does not require a secure connection to set cookies
========== ========

Example: ::

$config['cookie_secure'] = 'TRUE';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Security and Privacy --> Cookie Settings`: Cookie Prefix


cp_session_ttl
--------------
Allows changing of the Control Panel Session Length to any number in seconds. For instance, if users should be logged out after 10 minutes of inactivity, the value would be: 600

========== ========
Values     Behavior
========== ========
``number`` Sets the control panel session length in seconds 
========== ========

Example: ::

$config['cp_session_ttl'] = '300';


cp_theme
--------
The :ref:`Default Control Panel Theme <general-config-cp-theme-label>` is the theme that members will see when logged in to the Control Panel. 

========== ========
Values     Behavior
========== ========
``text``   Name of theme to use for the Control Panel
========== ========

Example: ::

$config['cp_theme'] = 'default';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> General Configuration`: Default Control Panel Theme


cp_url
------
The :ref:`URL to your Control Panel index page <general-config-url-cp-label>` is the full URL to your ExpressionEngine Control Panel.


========== ========
Values     Behavior
========== ========
``URL``    Sets the URL to your ExpressionEngine Control Panel
========== ========

Example: ::

$config['cp_url'] = 'http://www.example.com/system/index.php';


csrf_protection
---------------
Determines whether Cross Site Request Forgery protection is enabled.

========== ========
Values     Behavior
========== ========
``TRUE``   Enables CSRF
``FALSE``  Default value, disables CSRF
========== ========

Example: ::

$config['csrf_protection'] = 'FALSE';


debug
-----
The :ref:`Debug Preference <output-debug-pref-label>` setting determines how PHP or database error messages are displayed. Error messages are often very useful during initial development, but they can be very confusing to regular site visitors. There are two options:

========== ========
Values     Behavior
========== ========
``1``      Enables PHP/SQL error messages shown only to Super Admins
``2``      Enables PHP/SQL error messages shown to anyone - NOT SECURE
========== ========

Example: ::

$config['debug'] = '1';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> System Administration --> Output and Debugging`: Debug Preference


default_member_group
--------------------
The :ref:`Default Member Group Assigned to New Members <default-member-group-label>` allows you to specify the Member Group to which approved members will be assigned.

========== ========
Values     Behavior
========== ========
``number`` Group ID of desired default member group
========== ========

Example: ::

$config['default_member_group'] = '6';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Members --> Preferences`: Default Member Group Assigned to New Members


deny_duplicate_data
-------------------
The :ref:`Deny Duplicate Data <deny-duplicate-data-label>` feature prevents a comment from being accepted if an identical one already exists in your database. A malicious person can’t submit the same information more than once.

======= ========
Values  Behavior
======= ========
``y``   Default value, enables protection against comments being submitted twice
``n``   Disables protection against comments being submitted twice
======= ========

Example: ::

$config['deny_duplicate_data'] = 'y';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Security and Privacy --> Security and Sessions`: Deny Duplicate Data


disable_all_tracking
--------------------
Disable all tracking is an emergency system configuration only preference which when set to ‘y’ will disable all tracking. This is useful for server administrators who need a way to respond immediately to table locks during a traffic spike to keep the site running smoothly.

======= ========
Values  Behavior
======= ========
``y``   Disables all tracking (User, Template, Channel, Referrer)
======= ========

Example: ::

$config['disable_all_tracking'] = 'y';


disable_tag_caching
-------------------
Disables tag caching, which if used unwisely on a high traffic site can lead to disastrous disk i/o. This setting allows quick thinking admins to temporarily disable it without hacking or modifying folder permissions

======= ========
Values  Behavior
======= ========
``y``   Disables tag caching
``n``   Default value, tag caching is enabled
======= ========

Example: ::

$config['disable_tag_caching'] = 'y';


doc_url
-------
The :ref:`URL to Documentation Directory <general-config-URL-docs-label>` is the  full URL to location of the ExpressionEngine User Guide. This URL is used to create the User Guide link at the top of your Control Panel.

======= ========
Values  Behavior
======= ========
``URL`` Sets the URL to your documentation (User Guide link at the top of your Control Panel)
======= ========

Example: ::

$config['doc_url'] = 'http://www.example.com/docs/';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> General Configuration`: URL to Documentation Directory


dynamic_tracking_disabling
--------------------------
If a value is provided for :ref:`Suspend ALL tracking when number of online visitors exceeds <suspend-tracking-label>`, when the number of “online visitors” exceeds that value, all of the tracking features will be temporarily disabled until the number of online visitors drops below the indicated value. Recommended values for this feature will vary based on your hosting environment. Check with your server administrator to discuss reasonable limits for your site.

.. NOTE::
   Online User Tracking must be enabled for this feature to work, or the information will not be available to ExpressionEngine to determine your site’s traffic.

========== ========
Values     Behavior
========== ========
``number`` Sets the number of "online visitors" which will trigger the disabling of all tracking
========== ========

Example: ::

$config['dynamic_tracking_disabling'] = '350';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Security and Privacy --> Tracking Preferences`: Suspend ALL tracking when number of online visitors exceeds:


email_batch_size
----------------
The :ref:`Number of Emails Per Batch <email-number-per-batch-label>` setting is used in conjunction with the “Use Batch Mode?” preference. This setting determines how many emails will be sent in each batch. The batch size you should use depend on many things; among them the email protocol you have chosen, the server configuration, and the server power, so you may need to experiment a little to get it right.

If you are using one of the more robust mail protocols, like Sendmail or SMTP, you can set a greater batch total, possibly as high as several hundred or even more if you are on a dedicated server. A batch size of 300 in these cases is a good starting point. If you are having good success you can increase it until you begin experiencing time-outs.

.. NOTE::
   Unless your mailing list numbers in the thousands you won’t gain much of a speed gain from setting large batches. If you are using the less efficient “PHP mail” protocol then you will usually need to set a lower batch size; 50-100 is typical.

========== ========
Values     Behavior
========== ========
``number`` Sets the number of emails to send in a batch (For average servers, 300 is a safe number)
========== ========

Example: ::

$config['email_batch_size'] = '300';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Email Configuration`: Number of Emails Per Batch


email_batchmode
---------------
ExpressionEngine’s mail handling routine allows the use of a :ref:`Batch Mode <email-use-batch-mode-label>` whenever it sends email via the Communicate section of your Control Panel.

This mode splits up large numbers of emails into small batches which get sent at short intervals. This gives you the ability to send email to very large mailing lists without being in danger of exceeding your server’s execution time limit. By default, PHP limits any process to 30 seconds, which is not enough time to send a large amount of email. Enabling the Batch Mode can prevent server time-outs. A secondary benefit is that it is less taxing on your mail server and, in the case of people on shared hosting accounts, less likely to cause problems with your server administrator.

Batch mode is turned off by default in ExpressionEngine. To enable batch mode, you must change the “Use Batch Mode” preference to Yes and then set the number of emails per batch in the “Number of Emails Per Batch” preference.

========== ========
Values     Behavior
========== ========
``y``      Enables batch mode
``n``      Default value, disables batch mode
========== ========

Example: ::

$config['email_batchmode'] = 'y';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Email Configuration`: Use Batch Mode


email_charset
-------------
:ref:`Email Character Encoding <email-character-encoding-label>` specifies the character encoding that the emails will be sent with.

========== ========
Values     Behavior
========== ========
``text``   Sets the encoding to be used by emails being sent
========== ========

Example: ::

$config['email_charset'] = 'utf-8';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Email Configuration`: Email Character Encoding


email_console_timelock
----------------------
The :ref:`Email Console Timelock <email-console-timelock-label>` sets the number of minutes that must lapse before a member is allowed to send another email.

.. NOTE::
   This only applies to the Email Console in the member profile pages.

========== ========
Values     Behavior
========== ========
``number`` sets the number of minutes that must lapse before a member is allowed to send another email
========== ========

Example: ::

$config['email_console_timelock'] = "300";

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Email Configuration`: Email Console Timelock


email_crlf
----------
If set, overrides the core Email class setting for crlf characters in quoted-printable encoded emails (Email class $crlf property).

========== ========
Values     Behavior
========== ========
``text``   Overrides the core Email class setting for crlf characters in quoted-printable encoded emails
========== ========

Example: ::

$config['email_crlf'] = "\r\n";


email_debug
-----------
When :ref:`Enable Email Debugging <email-enable-debugging-label>` is enabled, detailed messages will be displayed whenever you send an email using the Communicate page. This information can be useful in helping to track down any problems you may be experiencing. If you are having difficulty sending email you are encouraged to enable this option.

========== ========
Values     Behavior
========== ========
``y``      Enables email debugging
``n``      Default value, email debugging is not enabled
========== ========

Example: ::

$config['email_debug'] = "y";

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Email Configuration`: Enable Email Debugging


email_module_captchas
---------------------
With :ref:`Enable CAPTCHAs for Tell-a-Friend and Contact emails <email-enable-captchas-label>` enabled, users will need to fill out a CAPTCHA when using the Tell-a-Friend or Contact email forms. You will need to ensure that your tags for those forms contain the appropriate CAPTCHA code.

========== ========
Values     Behavior
========== ========
``y``      Enables CAPTCHAS on Tell-a-Friend and Contact email forms
``n``      Default value, CAPTCHAS are not required on Tell-a-Friend and Contact email forms
========== ========

Example: ::

$config['email_module_captchas'] = "y";

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Email Configuration`: Enable CAPTCHAs for Tell-a-Friend and Contact emails


email_newline
-------------
If set, overrides the core Email class setting for newline characters (Email class $newline property).

========== ========
Values     Behavior
========== ========
``text``   Overrides the core Email class setting for newline characters
========== ========

Example: ::

$config['email_newline'] = "\r\n";


email_smtp_port
---------------
:ref:`SMTP Server Port <email-smtp-server-port-label>` If you need to use a port other than 25 with your SMTP server, then fill out this field. If you’re planning on using port 25, you can leave this blank.

========== ========
Values     Behavior
========== ========
``number`` Specifies which port to use for SMTP
========== ========

Example: ::

$config['email_smtp_port'] = "2525";

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Email Configuration`: SMTP Server Port


emoticon_url
------------
The :ref:`URL to the folder containing your smileys <emoticon-url-folder-label>` setting specifies the URL of the folder where you have your smiley graphics located. This setting will automatically be filled in during installation, so you should only need to change it if you have altered where your smiley graphics are stored.

========== ========
Values     Behavior
========== ========
``URL``    Specifies the URL of the folder where you have your smiley graphics located
========== ========

Example: ::

$config['emoticon_url'] = "http://www.example.com/images/smileys/";

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> System Administration --> Emoticon Preferences`: URL to the folder containing your smileys


enable_avatars
--------------
:ref:`Enable Avatars <avatar-enable-label>` determines whether avatars are enabled for your site. If enabled, then users will be able to associate an image with their account that you can optionally display with entries, comments, and forum posts.

========== ========
Values     Behavior
========== ========
``y``      Default value, enables avatars for your ExpressionEngine site
``n``      Disables avatars for your ExpressionEngine site
========== ========

Example: ::

$config['enable_avatars'] = "n";

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Members --> Preferences`: Enable Avatars


enable_censoring
----------------
:ref:`Enable Word Censoring <censor-words-enable-label>` enables or disables word censoring. If you select “Yes”, the system will replace any specified words in channel entries, comments, forum posts, etc. according to your preference below

========== ========
Values     Behavior
========== ========
``y``      Enables word censoring
``n``      Default value, disables word censoring
========== ========

Example: ::

$config['enable_censoring'] = "y";

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Members --> Security and Privacy --> Word Censoring`: Enable Word Censoring


enable_db_caching
-----------------
Forces ExpressionEngine to cache the output of database queries to text files.

========== ========
Values     Behavior
========== ========
``y``      Enables database caching
``n``      Default value, disables database caching
========== ========

Example: ::

$config['enable_db_caching'] = "y";


enable_emoticons
----------------
With the :ref:`Display Smileys <emoticon-display-smileys-label>` preference you can choose whether or not the special codes for smileys are rendered as graphics on your site.


========== ========
Values     Behavior
========== ========
``y``      Default value, enables smileys
``n``      Disables Smileys
========== ========

Example: ::

$config['enable_emoticons'] = "y";

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Members --> System Administration --> Emoticon Preferences`: Display Smileys
   

enable_entry_view_tracking
--------------------------
When :ref:`Enable Channel Entry View Tracking <tracking-enable-channel-entry-view-label>` is set to “Y”, you can utilize the Entry “Views” Tracking Tag feature of the Channel module.

========== ========
Values     Behavior
========== ========
``y``      Enables tracking views
``n``      Default value, disables tracking views
========== ========

Example: ::

$config['enable_entry_view_tracking'] = "y";

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Members --> Security and Privacy --> Tracking Preferences`: Enable Channel Entry View Tracking
 

enable_hit_tracking
-------------------
When :ref:`Enable Template Hit Tracking <tracking-enable-template-hit-tracking-label>` is set to “Y”, hits to your templates will be tracked in your database on each page load.

========== ========
Values     Behavior
========== ========
``y``      Default value, enables template hit tracking
``n``      Disables template hit tracking
========== ========

Example: ::

$config['enable_hit_tracking'] = "y";

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Members --> Security and Privacy --> Tracking Preferences`: Enable Template Hit Tracking
 

enable_online_user_tracking
---------------------------
:ref:`Enable Online User Tracking <tracking-enable-online-user-tracking-label>` allows you yo determine whether tracking of online users is performed by the system. When you have this preference set to “Yes”, a database update will be performed for each page load so that the user statistics can be tracked and stored.

========== ========
Values     Behavior
========== ========
``y``      Enables enables online user tracking
``n``      Default value, disables online user tracking
========== ========

Example: ::

$config['enable_online_user_tracking'] = "y";

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Members --> Security and Privacy --> Tracking Preferences`: Enable Online User Tracking

 
enable_hooks
------------
If you would like to use the "hooks" feature you must enable it by setting this variable to TRUE (boolean)

========== ========
Values     Behavior
========== ========
``TRUE``   Enables "hooks" feature
``FALSE``  Default value, disables "hooks" feature
========== ========

Example: ::

$config['enable_hooks'] = "TRUE";


enable_photos
-------------
:ref:`Enable Member Photos <enable-member-photos-label>` determines whether member photos are enabled for your site. If enabled, then users will be able to upload an image to be displayed in their member profile area.

========== ========
Values     Behavior
========== ========
``y``      Enables member photos
``n``      Default value, disables member photos
========== ========

Example: ::

$config['enable_photos'] = "y";

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Members --> Preferences`: Enable Member Photos


enable_query_strings
--------------------
Setting :ref:`Force URL query strings <output-force-query-strings-label>` to “Yes” will force the system to use a standard query string in all your URLs.

========== ========
Values     Behavior
========== ========
``TRUE``   Forces query strings
``FALSE``  Default value, will not force query strings
========== ========

Example: ::

$config['enable_query_strings'] = "TRUE";

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> System Administration --> Output and Debugging`: Force URL query strings
 

enable_search_log
-----------------
:ref:`Enable Search Term Logging <enable-search-term-log-label>` specifies whether to log the search terms submitted by your users. When set to yes, each search term submitted will be stored so you can view it at: :menuselection:`Tools --> Logs --> Search Logs`

========== ========
Values     Behavior
========== ========
``y``      Default value, enables search term log
``n``      Disables search term log
========== ========

Example: ::

$config['enable_search_log'] = "TRUE";

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> System Administration --> Search Log Configuration`: Enable Search Term Logging
 

enable_sql_caching
------------------
The :ref:`Dynamic Channel Query Caching <caching-dynamic-channel-query-caching>` feature will improve the speed at which the {exp:channel:entries} tag is rendered by caching queries that are normally executed dynamically. This option cannot be used for all people, though.`

========== ========
Values     Behavior
========== ========
``y``      Enables query caching
``n``      Default value, query caching is not enabled
========== ========

Example: ::

$config['enable_sql_caching'] = "n";

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Channel Administration --> Global Preferences`: Cache Dynamic Channel Queries


enable_throttling
-----------------
:ref:`Enable Throttling <enable-throttling-label>` Allows you to enable or disable this feature.

========== ========
Values     Behavior
========== ========
``y``      Enables throttling
``n``      Default value, throttling is disabled
========== ========

Example: ::

$config['enable_throttling'] = "n";

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Security and Privacy --> Throttling Preferences`: Enable Throttling
 

encode_removed_text
-------------------
If set, when an {encode=”“} tag is encountered, but emails are not to be encoded, this text will be displayed in place of the tag.

========== ========
Values     Behavior
========== ========
``text``   Sets text to be used
========== ========

Example: ::

$config['encode_removed_text'] = 'Encoded emails not allowed';


filename_increment
------------------
When set to “y”, forces upload filenames to be unique. Re-uploads of existing files or uploads that share a filename with an existing file will have an incrementing number appended to them.

========== ========
Values     Behavior
========== ========
``y``      Forces upload filenames to be unique
``n``      Default value
========== ========

Example: ::

$config['filename_increment'] = "y";


hidden_template_indicator
-------------------------
Set the character(s) to use at the beginning of a template name to consider it a “hidden” template. Default is a period’.’

========== ========
Values     Behavior
========== ========
``text``   Sets the character(s) to use at the beginning of a template name to consider it a “hidden” template
========== ========

Example: ::

$config['hidden_template_indicator'] = '_';


image_library_path
------------------
Set the server path to the image library.

========== ========
Values     Behavior
========== ========
``text``   Sets path to image library
========== ========

Example: ::

$config['image_library_path'] = '/bin/gd2/';
 

image_resize_protocol
---------------------
:ref:`Image Resizing Protocol <image-resizing-protocol-label>` is where you indicate which resizing protocol to use. You may need to contact your Host or server admin to determine which protocols are installed and available on your server. The options are: GD, GD 2, ImageMagick, and NetPBM.

================ ========
Values           Behavior
================ ========
``gd``           Sets the GD Library to be used as Image Resizing Protocol
``gd2``          Sets the GD2 Library to be used as Image Resizing Protocol
``imagemagick``  Sets the ImageMagick Library to be used as Image Resizing Protocol
``netpbm``       Sets the NetPBM Library to be used as Image Resizing Protocol
================ ========

Example: ::

$config['image_resize_protocol'] = "gd2";

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> System Administration --> Image Resizing Preferences`: Image Resizing Protocol
 

index_page
----------
:ref:`Name of your site’s index page <general-config-index-name-label>`  is the filename of your site’s “index” page. By default, this will be index.php, which is located in the base folder. You will only need to alter this setting if you have changed the filename.

========== ========
Values     Behavior
========== ========
``text``   Sets the name of your site’s index page
========== ========

Example: ::

$config['index_page'] = '';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> General Configuration`: Name of your site’s index page


install_lock
------------
Prevents installing ExpressionEngine over an existing installation.

========== ========
Values     Behavior
========== ========
``1``      Install lock is enabled
========== ========

Example: ::

$config['install_lock'] = '1';


is_system_on
------------
:ref:`Is system on <general-config-system-on-label>` indicates whether or not your site is “live” and displayed to the public. If you set this preference to “No” only members of the Super Admin group will be able to see the site.

========== ========
Values     Behavior
========== ========
``y``      Sets the site to live
``n``      Sets the site to offline
========== ========

Example: ::

$config['is_system_on'] = "y";

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> General Configuration`: Is system on


language
--------
This determines which set of language files should be used. Make sure there is an available translation if you intend to use something other than english.

========== ========
Values     Behavior
========== ========
``text``   Indicated which language files should be used
========== ========

Example: ::

$config['language'] = "english";


license_number
------------
The :ref:`License Number <general-config-license-number-label>` you were issued upon purchasing ExpressionEngine.

========== ========
Values     Behavior
========== ========
``number`` Sets your ExpressionEngine license number
========== ========

Example: ::

$config['license_number'] = '4498-3348-9871-1123';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> General Configuration`: License Number


lockout_time
------------
The :ref:`Lockout Time <throttling-lockout-time-label>` is the length of time in seconds that a user will be unable to use your site.

========== ========
Values     Behavior
========== ========
``number`` Sets lockout time in seconds
========== ========

Example: ::

$config['lockout_time'] = '30';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Security and Privacy --> Throttling Preferences`: Lockout Time


log_email_console_msgs
------------
The :ref:`Log Email Console Messages <email-log-console-messages-label>` preference lets you log all messages sent via the Email Console in the member profile pages.

========== ========
Values     Behavior
========== ========
``y``      Default value, enables the logging of email console messages 
``n``      Disables the logging of email console messages
========== ========

Example: ::

$config['log_email_console_msgs'] = 'y';

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Email Configuration`: Log Email Console Messages

   ::

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