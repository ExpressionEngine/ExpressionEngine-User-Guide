System Configuration Overrides
******************************

By default, ExpressionEngine's system settings are managed in the
Control Panel and stored in the database, but these settings can be
overridden with one of 3 configuration files: the site index file, the
CP index file, and the main configuration file.

The **site index file** is the ``index.php`` file found in the web root
of the ExpressionEngine installation. This file acts like the gateway to
the front-end of the site. Since all web requests for a site's front-end
pass through the site index file, there are a *limited set* of
configuration overrides you can include in this file to alter
ExpressionEngine's configuration. Keep in mind that any overrides set in
the site index file only affect the system's behavior for front-end
pages. (Even if you have :doc:`removed index.php from your site's
URLs</urls/remove_index.php>`, all front-end web requests are still
handled by the site index file.)

The **CP index file** is the ``admin.php`` file also found in the
installation's web root. The CP index file is similar to the site index
file except that it acts as the gateway for all web requests to the
Control Panel. And similarly, any overrides set in the CP index file
only affect the system's behavior for CP pages accessed through that
particular CP index file (e.g. ``http://example.com/admin.php``).

The **main configuration file**, found at
``system/expressionengine/config/config.php``, is loaded every time the
system is run, meaning that config overrides set in ``config.php``
always affect the system's configuration. Since ``config.php`` is loaded
last, it also means any settings in this file will override settings
loaded from the database *and* the relevant index file.

For serving up the front-end, ExpressionEngine loads settings in this
order:

#. Settings stored in the database are loaded.
#. Settings in ``index.php`` are loaded and override settings loaded
   from the database.
#. Settings in ``config.php`` are loaded and override any settings
   loaded from the database and the site index file.

For serving Control Panel pages, ExpressionEngine loads settings in
this order:

#. Settings stored in the database are loaded.
#. Settings in ``admin.php`` are loaded and override settings loaded
   from the database.
#. Settings in ``config.php`` are loaded and override any settings
   loaded from the database and the CP index file.


Configuration Variables
=======================

.. contents::
    :local:


allow_avatar_uploads
--------------------
Allows or disallows :ref:`avatar uploads <avatar-upload-label>`.

======== ===========
Values   Behavior
======== ===========
``y``    Yes, allow member to upload their own :ref:`avatar <avatar-upload-label>`
``n``    No, do not allow member to upload their own avatar.
======== ===========

Example Usage::


$config['allow_avatar_uploads'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
Allow members to upload their own avatars


allow_dictionary_pw
-------------------
:ref:`Allow Dictionary Words as Passwords <dict-passwds-label>` allows
or disallows members to use passwords that are based on dictionary
words.

======== ===========
Values   Behavior
======== ===========
``y``    Yes, allow user to members :ref:`dictionary based passwords <dict-passwds-label>`
``n``    No, do not allow members to use dictionary based passwords.
======== ===========

Example Usage::


$config['allow_dictionary_pw'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Design --> Security And
Privacy --> Security And Sessions`: Allow Dictionary Words as Passwords


allow_extensions
----------------
Enables or disables extensions in the Control Panel.

======== ===========
Values   Behavior
======== ===========
``y``    Enable Extensions
``n``    Disable extensions
======== ===========

Example Usage::


$config['allow_extensions'] = 'y';


allow_member_localization
-------------------------
:ref:`Allow members to set their own localization preferences
<allow-member-localization-label>` allows members to set their own
localization. If set to "no" all dates and times will be localized to
the master site default.


======== ===========
Values   Behavior
======== ===========
``y``    Allow members to set their own localization
``n``    Do not allow members to set their own localization
======== ===========

Example Usage::


$config['allow_member_localization'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences -->
Security And Sessions`: Allow members to set their own localization
preferences



allow_member_registration
-------------------------
Allow or disallow new :ref:`Member Registration
<allow-member-register-label>` on your ExpressionEngine website.

======== ===========
Values   Behavior
======== ===========
``y``    Allow members to register
``n``    Do not allow members to register
======== ===========

Example Usage::


$config['allow_member_registration'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
Allow New Member Registrations


allow_multi_logins
------------------
:ref:`Allow multiple log-ins from a single account
<allow-multi-logins-label>` determines whether more than one person can
simultaneously access the system using the same user account.

.. note::
   If your Session Type above is set to "Cookies Only" this feature will
   not work.

======== ===========
Values   Behavior
======== ===========
``y``    Allow members to register
``n``    Do not allow members to register
======== ===========

Example Usage::


$config['allow_multi_logins'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Design --> Security And
Privacy --> Security And Sessions`: Allow multiple log-ins from a single
account


allow_textarea_tabs
-------------------
If not set the template editor and publish write mode allow for tabular
input. Set to n to disable all tab input, set to y to force tab
preservation in all publish textareas.

======== ===========
Values   Behavior
======== ===========
``y``    Allow tabs in textareas
``n``    Do not allow tabs in textareaas
======== ===========

Example Usage::

$config['allow_textarea_tabs'] = 'y';


allow_signatures
----------------
Allow or disallow members to have their own :ref:`signatures
<allow-member-sigs-label>`.

======== ===========
Values   Behavior
======== ===========
``y``    Allow members to have their own signature
``n``    Do not allow members to have their own signature
======== ===========

Example Usage::


$config['allow_signatures'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
Allow Users to have Signatures


allow_username_change
---------------------
:ref:`Allow members to change their username
<allow-member-username-label>` allows or disallows members to change
their username.

========= ===========
Values    Behavior
========= ===========
``y``     Allow members to change their username
``n``     Do not allow members to change their username
========= ===========

Example Usage::


$config['allow_username_change'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Design --> Security And
Privacy --> Security And Sessions`: Allow members to change their
username


app_version
-----------
The currently installed ExpressionEngine version.

.. warning:: This configuration variable is automatically set by the
    system and should not be modified.


auto_assign_cat_parents
-----------------------
If the :ref:`Auto-Assign Category Parents <auto-assign-categoryP-label>`
option is set to "yes", when new entries that contain category
assignments are submitted, the "parent" category of any sub-categories
will be automatically assigned. If set to "no", the entry will only be
assigned to the child category.

========= ===========
Values    Behavior
========= ===========
``y``     The "parent" category will be automatically assigned
``n``     Entry will only be assigned to the child category
========= ===========

Example Usage::


$config['auto_assign_cat_parents'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Channel
Administration --> Global Channel Preferences`: Auto-Assign Category
Parents


avatar_max_height
-----------------
The :ref:`maximum height <avatar-max-height-label>` (in pixels) allowed
for user-uploaded avatars.

========= ===========
Values    Behavior
========= ===========
``Num``   Numerical value depicting max height in pixels
========= ===========

Example Usage::


$config['avatar_max_height'] = '120';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
Avatar Maximum Height


avatar_max_kb
-------------
The :ref:`Maximum File Size <avatar-max-kb-label>` allowed for
user-uploaded avatars.

========= ===========
Values    Behavior
========= ===========
``Num``   Numerical value depicting max size in Kilobytes
========= ===========

Example Usage::


$config['avatar_max_kb'] = '60';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
Avatar Maximum Size


avatar_max_width
----------------
The :ref:`Maximum Width <avatar-max-width-label>` (in pixels) allowed
for user-uploaded avatars.

========= ===========
Values    Behavior
========= ===========
``Num``   Numerical value depicting max width in pixels
========= ===========

Example Usage::


$config['avatar_max_width'] = '120';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
Avatar Maximum Width


avatar_path
-----------
The :ref:`Server Path <avatar-path-label>` to the Avatar Folder.

========= ===========
Values    Behavior
========= ===========
``Path``  Full server path to avatar folder
========= ===========

Example Usage::


$config['avatar_path'] = '/path/images/avatars/';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
Server Path to Avatar Folder


avatar_url
----------
The :ref:`URL <avatar-url-label>` to the Avatar Folder.

========= ===========
Values    Behavior
========= ===========
``URL``   URL to avatar folder
========= ===========

Example Usage::

$config['avatar_url'] = 'http://example.com/images/avatars';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
URL to Avatar Folder


ban_action
----------
The :ref:`Banned IP Action <member-banned-ip-label>` specifies what
action will be taken when a banned IP Address attempts to access your
ExpressionEngine website.

============= ===========
Values        Behavior
============= ===========
``restrict``  Restrict the user to viewing the site only
``message``   Show the user a specific message
``bounce``    Redirect the user to another specified site
============= ===========

Example Usage::

$config['ban_action'] = 'message';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> User Banning`:
When a banned IP tries to access the site


ban_destination
---------------
The :ref:`Banned IP Destination <member-banned-ip-label>` specifies what
URL you would like to redirect the user to.

.. note::
   This settings works with **$config['ban_action'] = 'bounce';**

========= ===========
Values    Behavior
========= ===========
``URL``   Send the user to this URL
========= ===========

Example Usage::


$config['ban_destination'] = 'http://www.example.com';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> User Banning`:
When a banned IP tries to access the site


ban_message
-----------
The :ref:`Banned IP Message <member-banned-ip-label>` specifies what
message to show the user.

.. note::
   This settings works with **$config['ban_action'] = 'message';**

========= ===========
Values    Behavior
========= ===========
``text``  Message to be shown to user
========= ===========

Example Usage::


$config['ban_message'] = 'This site is currently unavailable';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> User Banning`:
When a banned IP tries to access the site


banish_masked_ips
-----------------
If the :ref:`Require IP Address and User Agent for Login
<require-ip-logins-label>` option is set to "yes", then users will not
be able to log in unless their browser (or other access device)
correctly supplies their IP address and User Agent (browser)
information. Having this set to "Yes" can help prevent hackers from
logging in using direct socket connections or from trying to access the
system with a masked IP address.

========= ===========
Values    Behavior
========= ===========
``y``     IP address and User Agent must be present
``n``     Do not check IP address and User Agent
========= ===========

Example Usage::


$config['banish_masked_ips'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Security and Sessions`: Require IP Address and User Agent
for Login


banishment_message
------------------
When dealing with :ref:`Throttling Configuration <throttle-prefs-label>`
you may chose a custom message to show users when they have reached the
allowed page load frequency.

========= ===========
Values    Behavior
========= ===========
``text``  Custom message to show user
========= ===========

Example Usage::


$config['banishment_message'] = 'You have exceeded the allowed page load frequency.';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Throttling Preferences`: Custom Message


banishment_type
---------------
The :ref:`Banned Type <throttle-prefs-label>` specifies what action will
be taken when throttling is enabled on your ExpressionEngine website.

.. note::
   If Throttling is enabled the default **Action to Take** is to send
   404 headers.

============= ===========
Values        Behavior
============= ===========
``redirect``  Redirect the user to a specified URL
``message``   Show the user a custom message
============= ===========


Example Usage::


$config['banishment_type'] = 'message';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Security and
Privacy --> Throttling Preferences`: Action to Take


banishment_url
--------------
The :ref:`URL for Redirect <throttle-prefs-label>` specifies which URL
to redirect to.

========= ===========
Values    Behavior
========= ===========
``URL``   The URL to redirect to
========= ===========


Example Usage::


$config['banishment_url'] = 'http://www.example.com';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Security and
Privacy --> Throttling Preferences`: URL for Redirect


banned_emails
-------------
The :ref:`Banned Email Addresses <member-banned-email-label>` allows you
specify any email addresses you wish to ban. You may specify full email
addresses or use wildcards to specify partial email addresses. For
example, _*@example.com. Each address should be placed on a separate
line.

========= ===========
Values    Behavior
========= ===========
``email`` Email addresses or wildcard domain
========= ===========


Example Usage::


$config['banned_emails'] = 'user@example.com';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> User Banning`:
Banned Email Addresses


banned_ips
----------
The :ref:`Banned IP Addresses <member-banned-ip-label>` allow you to
specify any IP addresses you wish to ban. You may specify full IP
addresses or use wildcards to specify blocks of IP addresses. For
example, 123.321.*. Each IP address should be placed on a separate line.

====== ========
Values Behavior
====== ========
``IP`` IP address
====== ========


Example Usage::


$config['banned_ips'] = '123.321.*';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> User Banning`:
Banned IP Address


banned_screen_names
-------------------
The :ref:`Restricted Screen Names <member-banned-screename-label>` allow
you to list screen names, preventing their use. This can be handy if you
would like to reserve certain screen names for your own use.

================ ===========
Values           Behavior
================ ===========
``screen name``  Screen name or list of screen names to be restricted
================ ===========


Example Usage::


$config['banned_ips'] = 'garfield';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> User Banning`: Restricted Screen Names


banned_usernames
----------------
The :ref:`Restricted Usernames <member-banned-username-label>` allow you
to list usernames, preventing their use. This can be handy if you would
like to reserve certain usernames for your own use.

============ ========
Values       Behavior
============ ========
``username`` Username or list of usernames to be restricted
============ ========


Example Usage::


$config['banned_ips'] = 'dsmith';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> User Banning`: Restricted Usernames


base_url
--------
The :ref:`URL to the root directory of your site
<general-config-url-root-label>` is the full URL to the folder
containing your site's index page.

======== ========
Values   Behavior
======== ========
``URL``  URL to the root directory of your site
======== ========

Example Usage::

$config['base_url'] = 'http://www.example.com';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> General
Configuration`: URL to the root directory of your site


cache_path
----------
Leave this BLANK unless you would like to set something other than the
default system/cache/ folder.  Use a full server path with trailing
slash.

======== ========
Values   Behavior
======== ========
``text`` Sets the server path to your cache folder
======== ========

Example Usage::

$config['cache_path'] = '/path/to/cache/folder/';


captcha_font
------------
You can :ref:`use TrueType Font for CAPTCHA <captcha-notes-label>` on
your ExpressionEngine website by default. To disable set the value to
"n".

====== ========
Values Behavior
====== ========
``y``  Default value, enables the use of TrueType Fonts
``n``  Disables use of TrueType fonts
====== ========


Example Usage::


$config['captcha_font'] = 'n';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security And
Privacy --> CAPTCHA Preferences`: Use TrueType Font for CAPTCHA


captcha_path
------------
The :ref:`Server Path to you CAPTCHA Folder <captcha-notes-label>`.

======== ========
Values   Behavior
======== ========
``path`` Relative server path to CAPTCHA folder
======== ========


Example Usage::


$config['captcha_path'] = '/var/www/html/example/images/captchas';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security And
Privacy --> CAPTCHA Preferences`: Server Path to CAPTCHA Folder


captcha_rand
------------
You may specify whether to :ref:`Add Random Number to CAPTCHA Word
<captcha-notes-label>` or not. The default is "y".

====== ========
Values Behavior
====== ========
``y``  Default value, add a random number to CAPTCHA word
``n``  Do not add a random number to CAPTCHA word
====== ========


Example Usage::


$config['captcha_rand'] = 'n';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security And
Privacy --> CAPTCHA Preferences`: Add Random Number to CAPTCHA Word


captcha_require_members
-----------------------
:ref:`Require CAPTCHA with logged-in members <captcha-notes-label>`
allows you to specify whether logged in members must enter in a CAPTCHA
word or not.

====== ========
Values Behavior
====== ========
``y``  Require that logged-in users enter a CAPTCHA word before a form is submitted
``n``  Default value, does not require a logged-in member to enter a CAPTCHA word
====== ========


Example Usage::


$config['captcha_require_members'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security And
Privacy --> CAPTCHA Preferences`: Require CAPTCHA with logged-in members


captcha_url
-----------
The :ref:`Full URL to CAPTCHA Folder <captcha-notes-label>`.

======== ========
Values   Behavior
======== ========
``URL``  Full URL to the CAPTCHA folder
======== ========


Example Usage::


$config['captcha_url'] = 'http://www.example.com/images/captchas';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security And
Privacy --> CAPTCHA Preferences`: Full URL to CAPTCHA Folder


censor_replacement
------------------
You may optionally specify a word or phrase to be used when
:ref:`replacing censored words <censor-replace-label>`. For example, if
you set "tisk tisk" as your replacement word, and "shucks" is in your
censored list, then anytime "shucks" is used it will be replaced with
"tisk tisk". If you do not set this preference, a pound symbol will be
used for each character that is censored, so "shucks" would be converted
to "######".

======== ========
Values   Behavior
======== ========
``word`` Word to be used as a replacement for censored words
======== ========


Example Usage::


$config['censor_replacement'] = 'censored';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security And
Privacy --> Word Censoring`: Censoring Replacement Word


censored_words
--------------
You may list the words that you would like to :ref:`censor
<censor-words-label>`. Wild cards are allowed by adding a _* to the
beginning or end of a censored word. So, for example the wildcard test*
would censor the words test, testing, and tester, while the wildcard
_*gress would censor the words progress and congress.

======== ========
Values   Behavior
======== ========
``word`` Word to be censored
======== ========


Example Usage::


$config['censored_words'] = 'blanket';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security And
Privacy --> Word Censoring`: Censored Words


charset
-------
This determines which character set is used by default in various
methods that require a character set to be provided.

============ ========
Values       Behavior
============ ========
``charset``  character set to be used
============ ========


Example Usage::


$config['charset'] = 'UTF-8';


comment_edit_time_limit
-----------------------
The :ref:`Comment Editing Time Limit <comment-editing-time-label>`
specifies the length of time (in seconds) that non-Superadmins have
before comment editing is disallowed on the front end of the site. Set
to 0 for no limit.

========== ========
Values     Behavior
========== ========
``number`` Length of time (in seconds)
========== ========


Example Usage::


$config['comment_edit_time_limit'] = '120';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Add-Ons --> Modules -->
Comment`: Comment Editing Time Limit


comment_moderation_override
---------------------------
:ref:`Moderate expired entries <comment-expired-comments-label>` forces
moderation of comments once the Comment Expiration date for an entry is
passed, rather than closing comments entirely. The existing moderation
rules regarding whether members are exempt from moderation will be
followed.

====== ========
Values Behavior
====== ========
``y``  Forces moderation of comment instead of closing after expiration
``n``  Default value, does not force moderation
====== ========

Example Usage::


$config['comment_moderation_override'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Add-Ons --> Modules -->
Comment`: Moderate expired entries


comment_word_censoring
----------------------
:ref:`Word Censoring <censor-words-label>` normally applies to the
entire site, affecting both channel entries and comments. The
:ref:`force word censoring for comments <comment-force-censoring-label>`
setting allows you to apply word censoring to comments, even when it is
turn off for the site as a whole. The censored words and replacements
are still determined by the Administration preferences, and if site-wide
word censoring is enabled, comments will still be censored regardless of
this setting.

====== ========
Values Behavior
====== ========
``y``  Forces word censoring for comments
``n``  Default value, does not force censoring for comments
====== ========

Example Usage::

$config['comment_word_censoring'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Add-Ons --> Modules -->
Comment`: Force word censoring for comments


compress_output
---------------
Setting :ref:`Enable GZIP Output <output-enable-gzip-label>` to "Y" will
cause the web server to send out your pages in the compressed gzip
format. Browsers will automatically decompress the pages and display
them as normal; there will be no visible difference to your users apart
from a faster page loading time.

In order for this option to work your server must support the gzip
format. Additionally, the browser being used to view your site must also
support pages served in the gzip format. Many modern browser support
this, but not all do, so if you are concerned with wide-spread
compatibility you may want to set this to "n". (Also note that while
Internet Explorer does support this feature, it also contains bugs in
its implementation which can have adverse consequences.)

========= ========
Values    Behavior
========= ========
``y``     When enabled, your site will be shown in a compressed format for faster page loading
``n``     Default value, does not compress output
========= ========

Example Usage::

$config['compress_output'] = 'n';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> System
Administration --> Output and Debugging`: Enable GZIP Output


cookie_domain
-------------
The :ref:`Cookie Domain <cookie-domain-label>` variable allows you to
set your cookie domain.

========= ========
Values    Behavior
========= ========
``text``  Sets .yourdomain.com for site-wide cookies
========= ========

Example Usage::

$config['cookie_domain'] = '.example.com';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Cookie Settings`: Cookie Domain


cookie_path
-----------
The :ref:`Cookie Path <cookie-path-label>` is an optional setting. You
will only need to set this if you require a specific server path for
your cookies. If you run multiple installations, or have your
installation in a lower folder you can specify a folder from which to
make the cooke available. If you set the path to /joe/, the cookie will
only be available in the "joe" folder and any subdirectories of it. It
will not be available in directories above /joe/. The vast majority of
people will leave this setting blank.

========= ========
Values    Behavior
========= ========
``path``  Relative path to cookie folder on your ExpressionEngine web
server.
========= ========

Example Usage::

$config['cookie_path'] = '/folder/';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Cookie Settings`: Cookie Path


cookie_prefix
-------------
If you will be running multiple installations of ExpressionEngine on the
same server then you will want to specify a unique cookie prefix for
each installation. This :ref:`Cookie Prefix <cookie-prefix-label>` will
prevent the cookies from interfering with each other.

========= ========
Values    Behavior
========= ========
``text``  Sets the cookie prefix for cookies when running multiple installations
========= ========

Example Usage::

$config['cookie_prefix'] = 'site1';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Cookie Settings`: Cookie Prefix


cookie_secure
-------------
Secure cookies allow requiring a secure connection (HTTPS) in order to
set cookies.

========== ========
Values     Behavior
========== ========
``TRUE``   Requires a secure connection in order to set cookies
``FALSE``  Default value, does not require a secure connection to set cookies
========== ========

Example Usage::

$config['cookie_secure'] = 'TRUE';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Cookie Settings`: Cookie Prefix


cp_session_ttl
--------------
Allows changing of the Control Panel Session Length to any number in
seconds. For instance, if users should be logged out after 10 minutes of
inactivity, the value would be: 600

========== ========
Values     Behavior
========== ========
``number`` Sets the control panel session length in seconds
========== ========

Example Usage::

$config['cp_session_ttl'] = '300';


cp_session_type
---------------

Sets the :ref:`Control Panel session type <cp-session-type-label>`.

====== ========
Values Behavior
====== ========
``c``  Sets the Control Panel to use cookies only
``s``  Sets the Control Panel to use Session ID only
``cs`` Sets the Control Panel to use Cookies and Session ID
====== ========

Example Usage::

 $config['cp_session_type'] = 's';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security And
Privacy --> Security And Sessions`: Control Panel Session Type

.. versionchanged:: 2.8

   Variable was changed from ``admin_session_type`` to
   ``cp_session_type``.


cp_theme
--------
The :ref:`Default Control Panel Theme <general-config-cp-theme-label>`
is the theme that members will see when logged in to the Control Panel.

========== ========
Values     Behavior
========== ========
``text``   Name of theme to use for the Control Panel
========== ========

Example Usage::

$config['cp_theme'] = 'default';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> General
Configuration`: Default Control Panel Theme


cp_url
------
The :ref:`URL to your Control Panel index page
<general-config-url-cp-label>` is the full URL to your ExpressionEngine
Control Panel.


========== ========
Values     Behavior
========== ========
``URL``    Sets the URL to your ExpressionEngine Control Panel
========== ========

Example Usage::

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

Example Usage::

$config['csrf_protection'] = 'FALSE';


debug
-----
The :ref:`Debug Preference <output-debug-pref-label>` setting determines
how PHP or database error messages are displayed. Error messages are
often very useful during initial development, but they can be very
confusing to regular site visitors. There are two options:

========== ========
Values     Behavior
========== ========
``1``      Enables PHP/SQL error messages shown only to Super Admins
``2``      Enables PHP/SQL error messages shown to anyone - NOT SECURE
========== ========

Example Usage::

$config['debug'] = '1';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> System
Administration --> Output and Debugging`: Debug Preference


default_member_group
--------------------
The :ref:`Default Member Group Assigned to New Members
<default-member-group-label>` allows you to specify the Member Group to
which approved members will be assigned.

========== ========
Values     Behavior
========== ========
``number`` Group ID of desired default member group
========== ========

Example Usage::

$config['default_member_group'] = '6';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
Default Member Group Assigned to New Members


default_site_timezone
---------------------
The :ref:`Server Time Zone <default-member-group-label>` lets you
specify the time zone where your server is located. ExpressionEngine
uses native PHP functions to deal with dates and times, which base their
output on the timezone of the server. If you do not set this preference
so that it correctly reflects the location of your server it may cause
problems with your dates and times. If you are not sure where you server
is located please ask your hosting provider.

========== ========
Values     Behavior
========== ========
``NEED``   NEED
========== ========

Example Usage::

$config['default_site_timezone'] = '';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Localization
Settings`: Server Timezone


deny_duplicate_data
-------------------
The :ref:`Deny Duplicate Data <deny-duplicate-data-label>` feature
prevents a comment from being accepted if an identical one already
exists in your database. A malicious person can't submit the same
information more than once.

======= ========
Values  Behavior
======= ========
``y``   Default value, enables protection against comments being submitted twice
``n``   Disables protection against comments being submitted twice
======= ========

Example Usage::

$config['deny_duplicate_data'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Security and Sessions`: Deny Duplicate Data


disable_all_tracking
--------------------
Disable all tracking is an emergency system configuration only
preference which when set to 'y' will disable all tracking. This is
useful for server administrators who need a way to respond immediately
to table locks during a traffic spike to keep the site running smoothly.

======= ========
Values  Behavior
======= ========
``y``   Disables all tracking (User, Template, Channel, Referrer)
======= ========

Example Usage::

$config['disable_all_tracking'] = 'y';


disable_tag_caching
-------------------
Disables tag caching, which if used unwisely on a high traffic site can
lead to disastrous disk i/o. This setting allows quick thinking admins
to temporarily disable it without hacking or modifying folder
permissions.

======= ========
Values  Behavior
======= ========
``y``   Disables tag caching
``n``   Default value, tag caching is enabled
======= ========

Example Usage::

$config['disable_tag_caching'] = 'y';


doc_url
-------
The :ref:`URL to Documentation Directory
<general-config-URL-docs-label>` is the  full URL to location of the
ExpressionEngine User Guide. This URL is used to create the User Guide
link at the top of your Control Panel.

======= ========
Values  Behavior
======= ========
``URL`` Sets the URL to your documentation (User Guide link at the top of your Control Panel)
======= ========

Example Usage::

$config['doc_url'] = 'http://www.example.com/docs/';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> General
Configuration`: URL to Documentation Directory


dynamic_tracking_disabling
--------------------------
If a value is provided for :ref:`Suspend ALL tracking when number of
online visitors exceeds <suspend-tracking-label>`, when the number of
"online visitors" exceeds that value, all of the tracking features will
be temporarily disabled until the number of online visitors drops below
the indicated value. Recommended values for this feature will vary based
on your hosting environment. Check with your server administrator to
discuss reasonable limits for your site.

.. note::
   Online User Tracking must be enabled for this feature to work, or the
   information will not be available to ExpressionEngine to determine
   your site's traffic.

========== ========
Values     Behavior
========== ========
``number`` Sets the number of "online visitors" which will trigger the disabling of all tracking
========== ========

Example Usage::

$config['dynamic_tracking_disabling'] = '350';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Tracking Preferences`: Suspend ALL tracking when number of
online visitors exceeds:


email_batch_size
----------------
The :ref:`Number of Emails Per Batch <email-number-per-batch-label>`
setting is used in conjunction with the "Use Batch Mode?" preference.
This setting determines how many emails will be sent in each batch. The
batch size you should use depend on many things; among them the email
protocol you have chosen, the server configuration, and the server
power, so you may need to experiment a little to get it right.

If you are using one of the more robust mail protocols, like Sendmail or
SMTP, you can set a greater batch total, possibly as high as several
hundred or even more if you are on a dedicated server. A batch size of
300 in these cases is a good starting point. If you are having good
success you can increase it until you begin experiencing time-outs.

.. note::
   Unless your mailing list numbers in the thousands you won't gain much
   of a speed gain from setting large batches. If you are using the less
   efficient "PHP mail" protocol then you will usually need to set a
   lower batch size; 50-100 is typical.

========== ========
Values     Behavior
========== ========
``number`` Sets the number of emails to send in a batch (For average servers, 300 is a safe number)
========== ========

Example Usage::

$config['email_batch_size'] = '300';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Email
Configuration`: Number of Emails Per Batch


email_batchmode
---------------
ExpressionEngine's mail handling routine allows the use of a :ref:`Batch
Mode <email-use-batch-mode-label>` whenever it sends email via the
Communicate section of your Control Panel.

This mode splits up large numbers of emails into small batches which get
sent at short intervals. This gives you the ability to send email to
very large mailing lists without being in danger of exceeding your
server's execution time limit. By default, PHP limits any process to 30
seconds, which is not enough time to send a large amount of email.
Enabling the Batch Mode can prevent server time-outs. A secondary
benefit is that it is less taxing on your mail server and, in the case
of people on shared hosting accounts, less likely to cause problems with
your server administrator.

Batch mode is turned off by default in ExpressionEngine. To enable batch
mode, you must change the "Use Batch Mode" preference to Yes and then
set the number of emails per batch in the "Number of Emails Per Batch"
preference.

========== ========
Values     Behavior
========== ========
``y``      Enables batch mode
``n``      Default value, disables batch mode
========== ========

Example Usage::

$config['email_batchmode'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Email
Configuration`: Use Batch Mode


email_charset
-------------
:ref:`Email Character Encoding <email-character-encoding-label>`
specifies the character encoding that the emails will be sent with.

========== ========
Values     Behavior
========== ========
``text``   Sets the encoding to be used by emails being sent
========== ========

Example Usage::

$config['email_charset'] = 'utf-8';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Email
Configuration`: Email Character Encoding


email_console_timelock
----------------------
The :ref:`Email Console Timelock <email-console-timelock-label>` sets
the number of minutes that must lapse before a member is allowed to send
another email.

.. note::
   This only applies to the Email Console in the member profile pages.

========== ========
Values     Behavior
========== ========
``number`` sets the number of minutes that must lapse before a member is allowed to send another email
========== ========

Example Usage::

$config['email_console_timelock'] = "300";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Email
Configuration`: Email Console Timelock


email_crlf
----------
If set, overrides the core Email class setting for crlf characters in
quoted-printable encoded emails (Email class $crlf property).

========== ========
Values     Behavior
========== ========
``text``   Overrides the core Email class setting for crlf characters in quoted-printable encoded emails
========== ========

Example Usage::

$config['email_crlf'] = "\r\n";


email_debug
-----------
When :ref:`Enable Email Debugging <email-enable-debugging-label>` is
enabled, detailed messages will be displayed whenever you send an email
using the Communicate page. This information can be useful in helping to
track down any problems you may be experiencing. If you are having
difficulty sending email you are encouraged to enable this option.

========== ========
Values     Behavior
========== ========
``y``      Enables email debugging
``n``      Default value, email debugging is not enabled
========== ========

Example Usage::

$config['email_debug'] = "y";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Email
Configuration`: Enable Email Debugging


email_module_captchas
---------------------
With :ref:`Enable CAPTCHAs for Tell-a-Friend and Contact emails
<email-enable-captchas-label>` enabled, users will need to fill out a
CAPTCHA when using the Tell-a-Friend or Contact email forms. You will
need to ensure that your tags for those forms contain the appropriate
CAPTCHA code.

========== ========
Values     Behavior
========== ========
``y``      Enables CAPTCHAS on Tell-a-Friend and Contact email forms
``n``      Default value, CAPTCHAS are not required on Tell-a-Friend and Contact email forms
========== ========

Example Usage::

$config['email_module_captchas'] = "y";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Email
Configuration`: Enable CAPTCHAs for Tell-a-Friend and Contact emails


email_newline
-------------
If set, overrides the core Email class setting for newline characters
(Email class $newline property).

========== ========
Values     Behavior
========== ========
``text``   Overrides the core Email class setting for newline characters
========== ========

Example Usage::

$config['email_newline'] = "\r\n";


emoticon_url
------------
The :ref:`URL to the folder containing your smileys
<emoticon-url-folder-label>` setting specifies the URL of the folder
where you have your smiley graphics located. This setting will
automatically be filled in during installation, so you should only need
to change it if you have altered where your smiley graphics are stored.

========== ========
Values     Behavior
========== ========
``URL``    Specifies the URL of the folder where you have your smiley graphics located
========== ========

Example Usage::

$config['emoticon_url'] = "http://www.example.com/images/smileys/";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> System
Administration --> Emoticon Preferences`: URL to the folder containing your smileys


enable_avatars
--------------
:ref:`Enable Avatars <avatar-enable-label>` determines whether avatars
are enabled for your site. If enabled, then users will be able to
associate an image with their account that you can optionally display
with entries, comments, and forum posts.

========== ========
Values     Behavior
========== ========
``y``      Default value, enables avatars for your ExpressionEngine site
``n``      Disables avatars for your ExpressionEngine site
========== ========

Example Usage::

$config['enable_avatars'] = "n";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`: Enable Avatars


enable_censoring
----------------
:ref:`Enable Word Censoring <censor-words-enable-label>` enables or
disables word censoring. If you select "Yes", the system will replace
any specified words in channel entries, comments, forum posts, etc.
according to your preference below

========== ========
Values     Behavior
========== ========
``y``      Enables word censoring
``n``      Default value, disables word censoring
========== ========

Example Usage::

$config['enable_censoring'] = "y";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Security and
Privacy --> Word Censoring`: Enable Word Censoring


enable_db_caching
-----------------
Forces ExpressionEngine to cache the output of database queries to text
files.

========== ========
Values     Behavior
========== ========
``y``      Enables database caching
``n``      Default value, disables database caching
========== ========

Example Usage::

$config['enable_db_caching'] = "y";


enable_emoticons
----------------
With the :ref:`Display Smileys <emoticon-display-smileys-label>`
preference you can choose whether or not the special codes for smileys
are rendered as graphics on your site.


========== ========
Values     Behavior
========== ========
``y``      Default value, enables smileys
``n``      Disables Smileys
========== ========

Example Usage::

$config['enable_emoticons'] = "y";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> System
Administration --> Emoticon Preferences`: Display Smileys


enable_entry_view_tracking
--------------------------
When :ref:`Enable Channel Entry View Tracking
<tracking-enable-channel-entry-view-label>` is set to "Y", you can
utilize the Entry "Views" Tracking Tag feature of the Channel module.

========== ========
Values     Behavior
========== ========
``y``      Enables tracking views
``n``      Default value, disables tracking views
========== ========

Example Usage::

$config['enable_entry_view_tracking'] = "y";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Security and
Privacy --> Tracking Preferences`: Enable Channel Entry View Tracking


enable_hit_tracking
-------------------
When :ref:`Enable Template Hit Tracking
<tracking-enable-template-hit-tracking-label>` is set to "Y", hits to
your templates will be tracked in your database on each page load.

========== ========
Values     Behavior
========== ========
``y``      Default value, enables template hit tracking
``n``      Disables template hit tracking
========== ========

Example Usage::

$config['enable_hit_tracking'] = "y";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Security and
Privacy --> Tracking Preferences`: Enable Template Hit Tracking


enable_hooks
------------
If you would like to use the "hooks" feature you must enable it by
setting this variable to TRUE (boolean).  See the user guide for details.

========== ========
Values     Behavior
========== ========
``TRUE``   Enables hooks
``FALSE``  Default value, disables hooks
========== ========

Example Usage::

$config['enable_hooks'] = "y";


enable_online_user_tracking
---------------------------
:ref:`Enable Online User Tracking
<tracking-enable-online-user-tracking-label>` allows you yo determine
whether tracking of online users is performed by the system. When you
have this preference set to "Yes", a database update will be performed
for each page load so that the user statistics can be tracked and
stored.

========== ========
Values     Behavior
========== ========
``y``      Enables enables online user tracking
``n``      Default value, disables online user tracking
========== ========

Example Usage::

$config['enable_online_user_tracking'] = "y";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Security and
Privacy --> Tracking Preferences`: Enable Online User Tracking


enable_hooks
------------
If you would like to use the "hooks" feature you must enable it by
setting this variable to TRUE (boolean)

========== ========
Values     Behavior
========== ========
``TRUE``   Enables "hooks" feature
``FALSE``  Default value, disables "hooks" feature
========== ========

Example Usage::

$config['enable_hooks'] = "TRUE";


enable_photos
-------------
:ref:`Enable Member Photos <enable-member-photos-label>` determines
whether member photos are enabled for your site. If enabled, then users
will be able to upload an image to be displayed in their member profile
area.

========== ========
Values     Behavior
========== ========
``y``      Enables member photos
``n``      Default value, disables member photos
========== ========

Example Usage::

$config['enable_photos'] = "y";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
Enable Member Photos


enable_query_strings
--------------------
Toggles query strings

========== ========
Values     Behavior
========== ========
``TRUE``   Enables query strings
``FALSE``  Default value, disables query strings
========== ========

Example Usage::

$config['enable_query_strings'] = "TRUE";


force_query_string
------------------
Setting :ref:`Force URL query strings
<output-force-query-strings-label>` to "Yes" will force the system to
use a standard query string in all your URLs.

========== ========
Values     Behavior
========== ========
``TRUE``   Forces query strings
``FALSE``  Default value, will not force query strings
========== ========

Example Usage::

$config['force_query_string'] = "TRUE";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> System
Administration --> Output and Debugging`: Force URL query strings


enable_search_log
-----------------
:ref:`Enable Search Term Logging <enable-search-term-log-label>`
specifies whether to log the search terms submitted by your users. When
set to yes, each search term submitted will be stored so you can view it
at: :menuselection:`Tools --> Logs --> Search Logs`

========== ========
Values     Behavior
========== ========
``y``      Default value, enables search term log
``n``      Disables search term log
========== ========

Example Usage::

$config['enable_search_log'] = "TRUE";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> System
Administration --> Search Log Configuration`: Enable Search Term Logging


enable_sql_caching
------------------
The :ref:`Dynamic Channel Query Caching
<caching_dynamic_channel_query_caching>` feature will improve the speed
at which the {exp:channel:entries} tag is rendered by caching queries
that are normally executed dynamically.

========== ========
Values     Behavior
========== ========
``y``      Enables query caching
``n``      Default value, query caching is not enabled
========== ========

Example Usage::

$config['enable_sql_caching'] = "n";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Channel
Administration --> Global Preferences`: Cache Dynamic Channel Queries


enable_throttling
-----------------
:ref:`Enable Throttling <enable-throttling-label>` Allows you to enable
or disable this feature.

========== ========
Values     Behavior
========== ========
``y``      Enables throttling
``n``      Default value, throttling is disabled
========== ========

Example Usage::

$config['enable_throttling'] = "n";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Throttling Preferences`: Enable Throttling


encode_removed_text
-------------------
If set, when an {encode=""} tag is encountered, but emails are not to be
encoded, this text will be displayed in place of the tag.

========== ========
Values     Behavior
========== ========
``text``   Sets text to be used
========== ========

Example Usage::

$config['encode_removed_text'] = 'Encoded emails not allowed';


filename_increment
------------------
When set to "y", forces upload filenames to be unique. Re-uploads of
existing files or uploads that share a filename with an existing file
will have an incrementing number appended to them.

========== ========
Values     Behavior
========== ========
``y``      Forces upload filenames to be unique
``n``      Default value
========== ========

Example Usage::

$config['filename_increment'] = "y";


forum_trigger
-------------
Forum trigger word, requires that forums be installed.

========== ========
Values     Behavior
========== ========
``text``   Sets the forum trigger word
========== ========

Example Usage::

$config['forum_trigger'] = "eerox";


global_xss_filtering
--------------------
Enables XSS filtering for your ExpressionEngine website.

========== ========
Values     Behavior
========== ========
``y``      Enables XSS filtering
``n``      Default value, disables XSS filtering
========== ========

Example Usage::

$config['global_xss_filtering'] = "y";


hidden_template_indicator
-------------------------
Set the character(s) to use at the beginning of a template name to
consider it a "hidden" template. Default is a period'.'

========== ========
Values     Behavior
========== ========
``text``   Sets the character(s) to use at the beginning of a template name to consider it a "hidden" template
========== ========

Example Usage::

$config['hidden_template_indicator'] = '_';


htaccess_path
-------------------------
Used by the Blacklist Module to write rules to your .htaccess file. This
is the server path.

========== ========
Values     Behavior
========== ========
``text``   Sets the server path to your .htaccess file.
========== ========

Example Usage::

$config['htaccess_path'] = '/server/path/to/your/.htaccess/';


image_library_path
------------------
Set the server path to the image library.

========== ========
Values     Behavior
========== ========
``text``   Sets path to image library
========== ========

Example Usage::

$config['image_library_path'] = '/bin/gd2/';


image_resize_protocol
---------------------
:ref:`Image Resizing Protocol <image-resizing-protocol-label>` is where
you indicate which resizing protocol to use. You may need to contact
your Host or server admin to determine which protocols are installed and
available on your server. The options are: GD, GD 2, ImageMagick, and
NetPBM.

================ ========
Values           Behavior
================ ========
``gd``           Sets the GD Library to be used as Image Resizing Protocol
``gd2``          Sets the GD2 Library to be used as Image Resizing Protocol
``imagemagick``  Sets the ImageMagick Library to be used as Image Resizing Protocol
``netpbm``       Sets the NetPBM Library to be used as Image Resizing Protocol
================ ========

Example Usage::

$config['image_resize_protocol'] = "gd2";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> System
Administration --> Image Resizing Preferences`: Image Resizing Protocol


index_page
----------
:ref:`Name of your site's index page <general-config-index-name-label>`
is the filename of your site's "index" page. By default, this will be
index.php, which is located in the base folder. You will only need to
alter this setting if you have changed the filename.

========== ========
Values     Behavior
========== ========
``text``   Sets the name of your site's index page
========== ========

Example Usage::

$config['index_page'] = 'coolpage.php';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> General
Configuration`: Name of your site's index page


install_lock
------------
Prevents installing ExpressionEngine over an existing installation.

========== ========
Values     Behavior
========== ========
``1``      Install lock is enabled
========== ========

Example Usage::

$config['install_lock'] = '1';

is_site_on
----------
Is site on refers to both MSM installations and a single site. Setting
this variable to "n" will shut ExpressionEngine off allowing you to put
an index.php file in the root directory without ExpressionEngine trying
to use it.

========== ========
Values     Behavior
========== ========
``y``      Sets ExpressionEngine to on
``n``      Sets ExpressionEngine to off
========== ========

Example Usage::

$config['is_site_on'] = "y";


is_system_on
------------
:ref:`Is system on <general-config-system-on-label>` indicates whether
or not your site is "live" and displayed to the public. If you set this
preference to "No" only members of the Super Admin group will be able to
see the site.

========== ========
Values     Behavior
========== ========
``y``      Sets the site to live
``n``      Sets the site to offline
========== ========

Example Usage::

$config['is_system_on'] = "y";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> General
Configuration`: Is system on

language
--------
This determines which set of language files should be used. Make sure
there is an available translation if you intend to use something other
than ``english``.

========== ========
Values     Behavior
========== ========
``text``   Indicated which language files should be used
========== ========

Example Usage::

$config['language'] = "english";


license_number
--------------
The :ref:`License Number <general-config-license-number-label>` you were
issued upon purchasing ExpressionEngine.

========== ========
Values     Behavior
========== ========
``number`` Sets your ExpressionEngine license number
========== ========

Example Usage::

$config['license_number'] = '4498-3348-9871-1123';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> General
Configuration`: License Number


lockout_time
------------
The :ref:`Lockout Time <throttling-lockout-time-label>` is the length of
time in seconds that a user will be unable to use your site.

========== ========
Values     Behavior
========== ========
``number`` Sets lockout time in seconds
========== ========

Example Usage::

$config['lockout_time'] = '30';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Throttling Preferences`: Lockout Time


log_date_format
---------------
Each item that is logged has an associated date. You can use PHP date
codes to set your own date formatting

========== ========
Values     Behavior
========== ========
``text``   Sets log date format
========== ========

Example Usage::

$config['log_date_format'] = 'Y-m-d H:i:s';


log_email_console_msgs
----------------------
The :ref:`Log Email Console Messages <email-log-console-messages-label>`
preference lets you log all messages sent via the Email Console in the
member profile pages.

========== ========
Values     Behavior
========== ========
``y``      Default value, enables the logging of email console messages
``n``      Disables the logging of email console messages
========== ========

Example Usage::

$config['log_email_console_msgs'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Email
Configuration`: Log Email Console Messages


log_path
--------
Leave this BLANK unless you would like to set something other than the
default system/logs/ folder.  Use a full server path with trailing
slash.

========== ========
Values     Behavior
========== ========
``text``   Full server path to system log folder
========== ========

Example Usage::

$config['log_path'] = '/path/to/location/';


log_referrers
-------------
You can determine whether Referrer Tracking is performed by the system.
When you have this preference set to "Y", one additional database access
query will be performed for each page load so that the statistics can be
generated.

========== ========
Values     Behavior
========== ========
``y``      Default value, enables referrer tracking
``n``      Disables referrers tracking
========== ========

Example Usage::

$config['log_referrers'] = 'y';


log_threshold
-------------
If you have enabled error logging, you can set an error threshold to
determine what gets logged.

========== ========
Values     Behavior
========== ========
``0``      Disables logging, Error logging TURNED OFF
``1``      Error Messages (including PHP errors)
``2``      Debug Messages
``3``      Informational Messages
``4``      All Messages
========== ========

Example Usage::

$config['log_threshold'] = '1';


mail_format
-----------
The :ref:`Default Mail Format <email-default-format-label>`. When you
send email via the Communicate section of your Control Panel, you are
able to send HTML formatted emails. This preference sets whether the
Communicate section has "Plain text" or "HTML" selected by default.

========== ========
Values     Behavior
========== ========
``plain``  Sets default email format to Plain Text
``html``   Sets defauly email format to HTML
========== ========

Example Usage::

$config['mail_format'] = 'plain';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Email
Configuration`: Default Mail Format


mail_protocol
-------------
The :ref:`Email Protocol <email-protocol-label>`. Email can be sent by ExpressionEngine by one of three protocols.

============ ========
Values       Behavior
============ ========
``mail``     Sets email protocol to PHP Mail
``smtp``     Sets email protocol to SMTP
``sendmail`` Sets email protocol to Sendmail
============ ========

Example Usage::

$config['mail_protocol'] = 'smtp';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Email
Configuration`: Email Protocol


mailinglist_enabled
-------------------
Enables the mailing list.

======= ========
Values  Behavior
======= ========
``y``   Default value, enables mailing list
``n``   Disables mailing list
======= ========

Example Usage::

$config['mailinglist_enabled'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Add-Ons --> Modules -->
Mailing List`: Mailing List is Enabled


mailinglist_notify
------------------
Recipient list for notification of new mailing list sign-ups.

======= ========
Values  Behavior
======= ========
``y``   Enables recipient list for notification of new mailing list sign-ups
``n``   Default value, disables recipient list for notification of new mailing list sign-ups
======= ========

Example Usage::

$config['mailinglist_notify'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Add-Ons --> Modules -->
Mailing List`: Enable recipient list for notification of new mailing
list sign-ups


mailinglist_notify_emails
-------------------------
Email Address of Notification Recipient(s).

======== ========
Values   Behavior
======== ========
``text`` Email address Notification Recipient(s)
======== ========

Example Usage::

$config['mailinglist_notify_emails'] = 'joe@example.com';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Add-Ons --> Modules -->
Mailing List`: Email Address of Notification Recipient(s)


max_logged_searches
-------------------
The :ref:`Maximum number of recent search terms to save
<max-search-save-label>`. This prevents your database from getting too
large.

========== ========
Values     Behavior
========== ========
``number`` Sets maximum number of recent search terms to save
========== ========

Example Usage::

$config['max_logged_searches'] = '500';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> System
Administration --> Search Log Configuration`: Maximum number of recent
search terms to save


max_page_loads
--------------
:ref:`Maximum Number of Page Loads <throttling-max-page-load-label>` is
the total number of times a user is allowed to load your web pages
(within the time interval below) before being locked out. For example,
if you set this preference to 5 page loads within 10 seconds, a user can
not browse more than 5 pages within a 10 second interval or the
throttling feature will be triggered, locking them out of your site
according to the parameters you set below.

========== ========
Values     Behavior
========== ========
``number`` Sets maximum number of page loads
========== ========

Example Usage::

$config['max_page_loads'] = '10';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Throttling Preferences`: Maximum Number of Page Loads


max_tmpl_revisions
------------------
:ref:`Maximum Number of Revisions to Keep
<global-template-max-revisions-label>` for each template.

========== ========
Values     Behavior
========== ========
``number`` Sets maximum number of template revisions to keep
========== ========

Example Usage::

$config['max_tmpl_revisions'] = '10';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Design --> Templates -->
Global Template Preferences`: Maximum Number of Revisions to Keep


mbr_notification_emails
-----------------------
:ref:`Email address for notifications
<member-send-notifications-email-label>` allow you to specify the email
addresses which should receive notifications.

========== ========
Values     Behavior
========== ========
``text``   Email address Notification Recipient(s)
========== ========

Example Usage::

$config['mbr_notification_emails'] = 'joe@example.com';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
Email address for notifications


member_theme
------------
The :ref:`Default Member Profile Theme <member-default-theme-label>` to
be used in the Member Profile area of your site. Available, installed
themes are listed in the menu.

=========== ========
Values      Behavior
=========== ========
``text``    Sets the theme for the default member profile
=========== ========

Example Usage::

$config['member_theme'] = 'default';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
Default Member Profile Theme


memberlist_sort_order
---------------------
The :ref:`Member List - Order <member-list-order-label>` specifies
whether to show the list in Ascending or Descending order.

=========== ========
Values      Behavior
=========== ========
``asc``     Sorts member list in Ascending order
``desc``    Deafult value, sorts member list in Descending order
=========== ========

Example Usage::

$config['memberlist_sort_order'] = 'desc';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
Member List - Order


memberlist_row_limit
--------------------
The :ref:`Member List - Rows <member-list-rows-label>` specifies the
number of rows to return by default.

=========== ========
Values      Behavior
=========== ========
``number``  Sets the number of rows to return by default
=========== ========

Example Usage::

$config['memberlist_row_limit'] = '20';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
Member List - Rows


memberlist_order_by
-------------------
The :ref:`Member List - Sort By <member-list-rows-label>` specifies the
sorting criteria to be used. Choices are: Total Posts, Screen Name,
Total Comments, Total Entries, Join Date.

================== ========
Values             Behavior
================== ========
``total_posts``    Sorts member list by Total Posts
``screen_name``    Sorts member list by Screen Name
``total_comments`` Sorts member list by Total Comments
``total_entries``  Sorts member list by Total Entries
``join_date``      Sorts member list by Join Date
================== ========

Example Usage::

$config['memberlist_order_by'] = "total_posts";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
Member List - Sort By


name_of_dictionary_file
-----------------------
The :ref:`Name of Dictionary File <dict-passwds-file-label>` is the
filename of the dictionary file used for Dictionary Words as Passwords.

=========== ========
Values      Behavior
=========== ========
``text``    Indicates the filename of the dictionary file
=========== ========

Example Usage::

$config['name_of_dictionary_file'] = 'billy';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Security and Sessions`: Name of Dictionary File


new_member_notification
-----------------------
The :ref:`Send new member notifications
<member-send-notifications-label>`, if enabled, notifications will be
sent.

======= ========
Values  Behavior
======= ========
``y``   Enables notifications
``n``   Default value, notification will not be sent
======= ========

Example Usage::

$config['new_member_notification'] = "n";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
Send new member notifications


new_posts_clear_caches
----------------------
:ref:`Clear all caches when new entries are posted
<global-channel-clear-cache-label>`. You can determine whether your
caches will be cleared when you post an entry. If set to "n", the new
entry will not appear on your site until any cache expires.

======= ========
Values  Behavior
======= ========
``y``   Default value, new posts clear cache
``n``   New posts do not clear cache
======= ========

Example Usage::

$config['new_posts_clear_caches'] = "n";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Channel
Administration --> Global Channel Preferences`: Clear all caches when
new entries are posted

.. _advconfig-newrelic_app_name:

newrelic_app_name
-----------------
:ref:`Customizing the Application Name <sysadmin-newrelic_app_name>`.
If the New Relic extension is installed on your server, this sets the
application name reported in the New Relic dashboard. This variable is
also available to set via ``$assign_to_config`` for optionally setting
a different application name per MSM site.

======== ========
Values   Behavior
======== ========
``text`` Sets name of reported application name in New Relic dashboard
======== ========

Example Usage::

$config['newrelic_app_name'] = 'My Site';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> System
Administration --> Output and Debugging`


new_version_check
-----------------
:ref:`New Version Auto Check <general-config-new-version-label>`.
Enabling this feature will cause a message to be displayed in the
Control Panel when a new version of ExpressionEngine is available. It
will not automatically download and install a new version.

======= ========
Values  Behavior
======= ========
``y``   Default value, enables new version auto check
``n``   Disables new version auto check
======= ========

Example Usage::

$config['new_version_check'] = "n";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> General
Configuration`: New Version Auto Check


password_lockout
----------------
:ref:`Enable Password Lockout <security-enable-passwd-lockout-label>`.
When this preference is set to "y", the system will lock a member
account if more than four invalid login attempts are made within a
specified time period (see next setting). This preference is designed to
deter hackers from using collision attacks to guess poorly chosen
passwords. The account remains locked for the duration of the time
period. Once the period expires it becomes unlocked.

======= ========
Values  Behavior
======= ========
``y``   Default value, enables password lockouts
``n``   Disables password lockouts
======= ========

Example Usage::

$config['password_lockout'] = "n";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Security and Sessions`: Enable Password Lockout


password_lockout_interval
-------------------------
:ref:`Time Interval for Lockout <security-passwd-lockout-int-label>`.
When this preference is set to "y", the system will lock a member
account if more than four invalid login attempts are made within a
specified time period (see next setting). This preference is designed to
deter hackers from using collision attacks to guess poorly chosen
passwords. The account remains locked for the duration of the time
period. Once the period expires it becomes unlocked.

========== ========
Values     Behavior
========== ========
``number`` Number is set in minutes. You are allowed to use decimal fractions. Example: 1.5
========== ========

Example Usage::

$config['password_lockout_interval'] = "2.5";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Security and Sessions`: Time Interval for Lockout


permitted_uri_chars
-------------------
This lets you specify which characters are permitted within your URLs.
When someone tries to submit a URL with disallowed characters they will
get a warning message.

As a security measure you are STRONGLY encouraged to restrict URLs to as
few characters as possible.  By default only these are allowed: a-z
0-9~%.:_-

Leave blank to allow all characters -- but only if you are insane.

DO NOT CHANGE THIS UNLESS YOU FULLY UNDERSTAND THE REPERCUSSIONS!!

========== ========
Values     Behavior
========== ========
``text``   Sets the permitted URI characters
========== ========

Example Usage::

$config['permitted_uri_chars'] = 'a-z 0-9~%.:_\\-';


path_third_themes
-----------------
Overrides the third_party paths so you can move your third_party
directory outside of your system directory.

========== ========
Values     Behavior
========== ========
``text``   Sets path to third_party directory
========== ========

Example Usage::

$config['path_third_themes'] = "/valid/path/to/directory/";


photo_max_height
----------------
The :ref:`Photo Maximum Height <member-photo-max-height-label>` (in
pixels) allowed for user-uploaded member photos.

========== ========
Values     Behavior
========== ========
``number`` Sets the maximum hight (in pixels) for member photos
========== ========

Example Usage::

$config['photo_max_height'] = "100";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
Photo Maximum Height


photo_max_kb
------------
The :ref:`Photo Maximum Size (in Kilobytes)
<member-photo-max-size-kb-label>` allowed for user-uploaded member
photos.

========== ========
Values     Behavior
========== ========
``number`` Sets the maximum Size (in Kilobytes) allowed for user-uploaded member photos.
========== ========

Example Usage::

$config['photo_max_kb'] = "50";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
Photo Maximum Size (in Kilobytes)


photo_max_width
---------------
The :ref:`Photo Maximum Width <member-photo-max-width-label>` (in
pixels) allowed for user-uploaded member photos.

========== ========
Values     Behavior
========== ========
``number`` Sets the maximum width (in pixels) allowed for user-uploaded member photos
========== ========

Example Usage::

$config['photo_max_width'] = "150";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
Photo Maximum Width


photo_path
----------
The :ref:`Server Path to Photo Folder <member-photo-max-width-label>` is
where you set the full server path to the member photos folder. By
default, it is the member_photos folder inside the images folder.

.. note::
   Note: Must be a full server path, NOT a URL. Folder permissions must
   be set to 777.

========== ========
Values     Behavior
========== ========
``text``   Sets the full server path to the photos folder
========== ========

Example Usage::

$config['photo_path'] = "/path/to/folder/";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
Server Path to Photo Folder


photo_url
---------
The :ref:`URL to Photos Folder <member-photo-max-width-label>` on your
site that contains the member photos.

========== ========
Values     Behavior
========== ========
``text``   Sets the URL to the photos folder
========== ========

Example Usage::

$config['photo_url'] = "http://www.example.com/images/memberphotos/";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
URL to Photos Folder


popup_link
----------
Determines whether or not links created by Typography class open in a
new window.

======= ========
Values  Behavior
======= ========
``y``   Enables links created by Typography class open in a new window
``n``   Default value, disables links created by Typography class open in a new window
======= ========

Example Usage::

$config['popup_link'] = 'y';


profile_trigger
---------------
When the :ref:`Profile Triggering Word <profile-trigger-word-label>` is
encountered in your URL it will display your member profile area. The
word you choose can not be the name of an existing template group. The
default value of this is "member". That means that a URL like the
following would trigger ExpressionEngine to display the member profile
area:

========== ========
Values     Behavior
========== ========
``text``   Sets the profile trigger word
========== ========

Example Usage::

$config['profile_trigger'] = "fajkkalf89idjae8hjkfsldamvpp0";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
Profile Triggering Word


protect_javascript
------------------
Prevents the advanced conditionals parser from processing anything in
<script> tags. By default, it's set to 'y'.

========== ========
Values     Behavior
========== ========
``y``      Default value, prevents the advanced conditionals parser from processing anything in <script> tags
``n``      Disables protect_javacript
========== ========

Example Usage::

$config['protect_javascript'] = "y";


proxy_ips
---------
Whitelist of reverse proxy servers that may forward the visitor's IP
address.

========== ========
Values     Behavior
========== ========
``text``   Comma delimited list of IP addresses
========== ========

Example Usage::

$config['proxy_ips'] = '10.0.1.25,10.0.1.26';


pw_min_len
----------
You may specify the :ref:`Minimum Password Length
<profile-trigger-word-label>` required for a member password during new
member registration. Specify the minimum number of characters required.
It is common practice to require passwords at least eight (8) characters
long.

========== ========
Values     Behavior
========== ========
``number`` Sets the minimum password length
========== ========

Example Usage::

$config['pw_min_len'] = '5';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Security and Sessions`: Minimum Password Length


publish_page_title_focus
------------------------
Makes the title field gain focus when the page is loaded

========== ========
Values     Behavior
========== ========
``y``      Default value, makes the title field gain focus when the page is loaded
``n``      Disables focus
========== ========

Example Usage::

$config['publish_page_title_focus'] = 'n';


recount_batch_total
-------------------
Because the recounting of statistics can impose some load on your
server, the recounting is performed in batches. The Recount Preferences
page allows you to define how large each processing batch should be. For
most servers, a value of 1000 works well. For high-performance or
dedicated servers you can increase this number and if your server is low
on resources you may need to lower the number.

========== ========
Values     Behavior
========== ========
``number`` Sets the batch size
========== ========

Example Usage::

$config['recount_batch_total'] = '10000';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Tools --> Data --> Recount
Statistics --> Recount Preferences`: Total number of database rows
processed per batch


redirect_method
---------------
The :ref:`Redirection Method <output-debug-redirect-method-label>`
setting determines what method is used for page redirections. These
redirections are used relatively frequently throughout the system,
especially with things like logging in/out and other membership related
functions.

============ ========
Values       Behavior
============ ========
``redirect`` Sets the redirect method to Location (faster): This is the preferred method, which uses PHP's "location" functionality.
``refresh``  Sets the redirect method to Refresh (Windows servers) (Slower)
============ ========

Example Usage::

$config['redirect_method'] = 'redirect';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> System
Administration --> Output and Debugging`: Redirection Method


redirect_submitted_links
------------------------
The :ref:`Apply Rank Denial to User-submitted Links
<security-apply-rank-denial-label>` option rewrites links submitted in
comments so they first point to an intermediary redirect page. This
helps deter comment spam by preventing linked sites from gaining a page
rank advantage.

========== ========
Values     Behavior
========== ========
``y``      Applies rank denial to user-submitted Links
``n``      Default value, does not apply rank denial to user-submitted Links
========== ========

Example Usage::

$config['redirect_submitted_links'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Security and Sessions`: Apply Rank Denial to User-submitted
Links


relaxed_track_views
-------------------
Allows Entry View Tracking to work for ANY combination that results in
only one entry being returned by the tag, including channel query
caching.

========== ========
Values     Behavior
========== ========
``y``      Allows Entry View Tracking
``n``      Default value, does not allow Entry View Tracking
========== ========

Example Usage::

$config['relaxed_track_views'] = 'y';


remove_close_all_button
-----------------------
Removes the Close All button from the Publish/Edit page and user side
HTML formatting buttons. Useful because most browsers no longer need it
and Admins might want it gone.

========== ========
Values     Behavior
========== ========
``y``      Removes the close all button
``n``      Default value, does not remove the close all button
========== ========

Example Usage::

$config['remove_close_all_button'] = 'y';


remove_unparsed_vars
--------------------
Enables the stripping of unparsed ExpressionEngine variables in
templates when Debug has been forcibly set to 0 in your config file.

========== ========
Values     Behavior
========== ========
``y``      Enables stripping of unparsed ExpressionEngine variables
``n``      Default value, disables stripping of unparsed ExpressionEngine variables
========== ========

Example Usage::

$config['remove_unparsed_vars'] = 'y';


req_mbr_activation
------------------
With :ref:`Require Member Account Activation
<member-account-activation-label>` you can choose how membership
accounts are activated.

========== ========
Values     Behavior
========== ========
``none``   Sets member activation to no activation required: New members are automatically activated and approved for the site.
``email``  Sets member activation to self-activation via email: New members are sent an email.
``manual`` Sets member activation to manual activation by an administrator
========== ========

Example Usage::

$config['req_mbr_activation'] = 'none';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
Require Member Account Activation


require_ip_for_login
--------------------
If the :ref:`Require IP Address and User Agent for Login
<require-ip-logins-label>` preference is set to "y", then users will not
be able to log in unless their browser (or other access device)
correctly supplies their IP address and User Agent (browser)
information. Having this set to "y" can help prevent hackers from
logging in using direct socket connections or from trying to access the
system with a masked IP address.

========== ========
Values     Behavior
========== ========
``y``      Default value, requires IP Address for Login
``n``      Disables Require IP Address and User Agent for Login
========== ========

Example Usage::

$config['require_ip_for_login'] = 'n';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Security and Sessions`: Require IP Address and User Agent
for Login


require_ip_for_posting
----------------------
:ref:`Require IP Address and User Agent when receiving comments
<require-ip-posting-submit-comments-label>` when turned on requires IP
address and user agent information to be supplied when submitting
comments.

========== ========
Values     Behavior
========== ========
``y``      Default value, requires IP Address for submitting comments
``n``      Disables require IP Address and User Agent for submitting comments
========== ========

Example Usage::

$config['require_ip_for_posting'] = 'n';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Security and Sessions`: Require IP Address and User Agent
for posting


require_secure_passwords
------------------------
If :ref:`Require Secure Passwords
<security-require-secure-passwords-label>` is set to "y", then users
will be required to choose a minimally "secure" password. In this case,
a password containing at least one uppercase character, one lowercase
character, and one numeric character. Passwords that follow this basic
formula are much more difficult to guess.

========== ========
Values     Behavior
========== ========
``y``      Default value, requires secure password
``n``      Disables require secure passwords
========== ========

Example Usage::

$config['require_secure_passwords'] = 'n';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Security and Sessions`: Require Secure Passwords


require_terms_of_service
------------------------
When new members register through the site, a "terms of service" block
of text is displayed. The :ref:`Require Terms of Service
<member-require-tos-label>` preference determines whether new members
must indicate that they agree to abide by these terms before they can
register.

========== ========
Values     Behavior
========== ========
``y``      Default value, requires TOS
``n``      Disables require TOS
========== ========

Example Usage::

$config['require_terms_of_service'] = 'n';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Member --> Preferences`:
Require Terms of Service


reserved_category_word
----------------------
If you turn on :ref:`Category URL Indicator
<global-channel-category-url-indicator-label>`, you must designate a
special "indicator" word, which will be used in the URL whenever a
category is intended.

.. note::
   Whatever word you chose CANNOT be the name of a template group or a
   template.

========== ========
Values     Behavior
========== ========
``text``   Sets the category URL indicator
========== ========

Example Usage::

$config['reserved_category_word'] = 'category';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Channel
Administration --> Global Channel Preferences`: Category URL Indicator


rewrite_short_tags
----------------------
If your PHP installation does not have short tag support enabled CI can
rewrite the tags on-the-fly, enabling you to utilize that syntax in your
view files. Options are TRUE or FALSE (boolean).

========== ========
Values     Behavior
========== ========
``TRUE``   Enables rewrite short tags
``FALSE``  Disables rewrite short tags
========== ========

Example Usage::

$config['rewrite_short_tags'] = 'TRUE';


rte_default_toolset_id
----------------------
:ref:`Default Toolset <global-channel-category-url-indicator-label>`
determines which Toolset will be shown for any member that has not
specifically chosen one in Rich Text Editor Preferences.


========== ========
Values     Behavior
========== ========
``text``   Sets the default toolset id
========== ========

Example Usage::

$config['rte_default_toolset_id'] = '2';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Add-Ons --> Modules --> Rich
Text Editor`: Default Toolset


rte_enabled
-----------
:ref:`Enable the Rich Text Editor
<global-channel-category-url-indicator-label>` If "y", the Rich Text
Editor will be applied to any Channel Fields of the Textarea (Rich Text)
fieldtype. If "n", the field will appear as a normal textarea instead.

========== ========
Values     Behavior
========== ========
``y``      Default value, if installed, enables RTE
``n``      Disables RTE and shows the normal textarea
========== ========

Example Usage::

$config['rte_enabled'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Add-Ons --> Modules --> Rich
Text Editor`: Enable Rich Text Editor


save_tmpl_files
---------------
:ref:`Save templates as files
<global-template-save-templates-as-files-label>` determines whether your
Templates are saved to files in addition to the datbase, allowing easy
editing via the editor of your choice. See Saving Templates as Text
Files for more information.

========== ========
Values     Behavior
========== ========
``y``      Templates are saved as files
``n``      Default value, templates are not saved as files
========== ========

Example Usage::

$config['save_tmpl_files'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Design --> Templates -->
Global Template Preferences`: Save Templates as Files


save_tmpl_revisions
-------------------
If :ref:`Save Template Revisions
<global-template-save-templates-revisions-label>` is set to "y", then
any changes you make to one of your Templates will be saved. This allows
you to keep a record of all changes made so that you can easily revert
back to an earlier version of a Template if you need to do so.

========== ========
Values     Behavior
========== ========
``y``      Templates revisions are saved
``n``      Default value, templates revisions are not saved
========== ========

Example Usage::

$config['save_tmpl_revisions'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Design --> Templates -->
Global Template Preferences`: Save Template Revisions


secure_forms
------------
:ref:`Secure Mode <spam-protect-secure-mode-label>` prevents automated
scripts (the most common way spam is generated) from repeatedly
submitting comments or other form data. A submission is only allowed
when a user manually loads a page and submits the form from your site.
And once the form data is received, the user has to manually reload the
page before they can submit again.

========== ========
Values     Behavior
========== ========
``y``      Default value, enables secure form mode
``n``      Disables secure form mode
========== ========

Example Usage::

$config['secure_forms'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Security and Sessions`: Process form data in Secure Mode


send_headers
------------
:ref:`Generate HTTP Page Headers <generate-http-headers-label>` setting
determines whether or not the server should automatically send HTTP page
headers when it serves the pages to a user. Setting this preference to
"Yes" causes headers to be explicitly sent by the server. Sending
explicit headers is generally considered to be a good practice, although
in some cases it can cause some problems.

========== ========
Values     Behavior
========== ========
``y``      Default value, enables generate HTTP headers
``n``      Disables generate HTTP headers
========== ========

Example Usage::

$config['send_headers'] = 'n';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> System
Administration --> Output and Debugging`: Generate HTTP Page Headers


server_offset
-------------
When a server's clock is off and you are unable to correct it at the
server level, use this preference to correct the disparity. Use a
negative integer to correct a server clock that is too fast.

.. warning:: It's important to note that this preference permanently
    changes the value of timestamps as they are being written to the
    database. Changing this setting later on will not undo the offset
    already applied to existing timestamps. Rather than using this
    setting, we strongly urge you to work with your web host or sysadmin
    to correct the inaccurate server clock.

=========== ========
Values      Behavior
=========== ========
``integer`` Offsets the value of stored timestamps from given server time in minutes
=========== ========

Example Usage::

$config['server_offset'] = '-15';


show_profiler
-------------
If :ref:`Display Output Profiler <output-debug-display-profiler-label>`
is enabled, Super Admins will see benchmark results, SQL queries, and
submitted form data displayed at the bottom of the browser window. This
is useful for debugging.

========== ========
Values     Behavior
========== ========
``y``      Enables output profiler
``n``      Default value, disables output profiler
========== ========

Example Usage::

$config['show_profiler'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> System
Administration --> Output and Debugging`: Display Output Profiler


sig_allow_img_hotlink
---------------------
:ref:`Allow image hot linking in signatures
<member-signature-hot-linking-label>` specifies whether or not members
can "hot link" to images located on other sites or servers. Most sites
do not like other people to hot link to their content since it basically
"steals" their bandwidth.

========== ========
Values     Behavior
========== ========
``y``      Enables image hot linking protection
``n``      Default value, disables image hot linking protection
========== ========

Example Usage::

$config['sig_allow_img_hotlink'] = 'n';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
Allow image hot linking in signatures


sig_allow_img_upload
--------------------
:ref:`Allow users to upload an image in their signature
<member-signature-allow-upload-label>` determines whether or not members
will be allowed to upload images to be used in their signatures.

========== ========
Values     Behavior
========== ========
``y``      Enables image uploading for signatures
``n``      Default value, disables image uploading for signatures
========== ========

Example Usage::

$config['sig_allow_img_upload'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
Allow users to upload an image in their signature


sig_img_max_height
------------------
:ref:`Maximum Height of Signature Image
<member-signature-max-height-label>` is the maximum height (in pixels)
allowed for user-uploaded signature images.

========== ========
Values     Behavior
========== ========
``number`` Sets the maximum height (in pixels) for user-uploaded signature images
========== ========

Example Usage::

$config['sig_img_max_height'] = '150';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
Maximum Height of Signature Image


sig_img_max_width
-----------------
:ref:`Maximum Height of Signature Image
<member-signature-max-width-label>` is the maximum width (in pixels)
allowed for user-uploaded signature images.

========== ========
Values     Behavior
========== ========
``number`` Sets the maximum width (in pixels) for user-uploaded signature images
========== ========

Example Usage::

$config['sig_img_max_width'] = '150';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
Maximum Width of Signature Image


sig_img_max_kb
--------------
:ref:`Maximum Size (in Kilobytes) of Signature Image
<member-signature-max-size-label>` is the maximum file size allowed for
user-uploaded signature images.

========== ========
Values     Behavior
========== ========
``number`` Sets the maximum file size allowed for user-uploaded signature images
========== ========

Example Usage::

$config['sig_img_max_kb'] = '50';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
Maximum Size (in Kilobytes) of Signature Image


sig_img_path
------------
:ref:`Server path to Signature Image Upload Folder
<member-signature-server-path-label>` is where you set the full server
page (not the URL) to the signature image uploads folder. By default, it
is the signature_attachments folder inside the images folder.

.. note::
   Must be a full server path, NOT a URL. Folder permissions must be set
   to 777.

========== ========
Values     Behavior
========== ========
``text``   Sets full server path to the signature image uploads folder
========== ========

Example Usage::

$config['sig_img_path'] = '/path/to/image/folder/';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
Server path to Signature Image Upload Folder


sig_img_url
-----------
:ref:`URL to Signature Image Upload Folder <member-signature-URL-label>`
is the URL to the folder on your site that contains the signature image
uploads.

========== ========
Values     Behavior
========== ========
``text``   Sets the URL to the folder on your site that contains the signature image uploads
========== ========

Example Usage::

$config['sig_img_url'] = 'http://www.example.com/images/signatures/';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
URL to Signature Image Upload Folder


sig_maxlength
-------------
:ref:`Maximum number of characters per signature
<member-signature-max-chars-label>` is the maximum number of characters
allowed within a member's signature.

========== ========
Values     Behavior
========== ========
``number`` Sets the maximum number of characters allowed within a member's signature
========== ========

Example Usage::

$config['sig_maxlength'] = '500';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
Maximum number of characters per signature


site_404
--------
:ref:`Maximum number of characters per signature
<global-template-404-label>` determines which template should be
displayed when someone tries to access an invalid URL. If you choose
"None", a standard 404 message and server header will be shown.

========== ========
Values     Behavior
========== ========
``text``   Sets which template should be displayed when someone tries to access an invalid URL
========== ========

Example Usage::

$config['site_404'] = 'site/404';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Design --> Templates -->
Global Template Preferences`: 404 Page


site_description
----------------
Sets the site description.

========== ========
Values     Behavior
========== ========
``text``   Sets site description
========== ========

Example Usage::

$config['site_description'] = 'This is a website';


smart_static_parsing
--------------------
When enabled, parsing of embedded templates that are not set to the
template type "Static" will still be parsed as static if they can be
(i.e. if they have no PHP or ExpressionEngine tags in them). This
setting is enabled by default.

========== ========
Values     Behavior
========== ========
``y``      Default value, enables smart static parsing
``n``      Disables smart static parsing
========== ========

Example Usage::

$config['smart_static_parsing'] = 'n';


smtp_password
-------------
:ref:`SMTP Password <email-smtp-password-label>` When using SMTP as your
mail protocol, this sets the password ExpressionEngine will use to
authenticate with the SMTP server.

========== ========
Values     Behavior
========== ========
``text``   Sets the SMTP password
========== ========

Example Usage::

$config['smtp_password'] = 'ihateburpees';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Email
Configuration`: SMTP Password


smtp_server
-----------
:ref:`SMTP Server Address <email-smtp-server-label>` When using SMTP as
your mail protocol, this sets the server to be used. You can use SSL
servers as long as OpenSSL is installed on the server ExpressionEngine
is installed on. Check with your server administrator first.

========== ========
Values     Behavior
========== ========
``text``   Sets SMTP server address
========== ========

Example Usage::

$config['smtp_server'] = '10.2.3.12';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Email
Configuration`: SMTP Server Address


smtp_port
---------
:ref:`SMTP Server Port <email-smtp-server-port-label>` When using SMTP
as your mail protocol, this will override the core Email class setting
(25) for SMTP Port.

========== ========
Values     Behavior
========== ========
``number`` Specifies which port to use for SMTP
========== ========

Example Usage::

$config['smtp_port'] = "2525";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Email
Configuration`: SMTP Server Port


smtp_username
-------------
:ref:`SMTP Username <email-smtp-username-label>` When using SMTP as
your mail protocol, this sets the username ExpressionEngine will use to
authenticate with the SMTP server.

========== ========
Values     Behavior
========== ========
``text``   Specifies the SMTP username
========== ========

Example Usage::

$config['smtp_username'] = "joe@example.com";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Email
Configuration`: SMTP Username


spellcheck_language_code
------------------------
Allows you to specify the language used in the spellchecking functions.
Set the value to the two letter ISO 639 language code for the spellcheck
(ex: en, es, de)

========== ========
Values     Behavior
========== ========
``text``   Specifies the language used in the spellchecking functions
========== ========

Example Usage::

$config['spellcheck_language_code'] = 'en';


subclass_prefix
---------------
Allows you to set the filename/classname prefix when extending native
libraries.  For more information please see the CodeIgniter user guide.

========== ========
Values     Behavior
========== ========
``text``   Sets the subclass prefix
========== ========

Example Usage::

$config['subclass_prefix'] = "EE_";


template_debugging
------------------
If :ref:`Display Template Debugging
<output-debug-display-template-debug-label>` is enabled, a log of all
processing that occurs while a page is being created in the
ExpressionEngine Template parser will be shown to Super Admins at the
bottom of the browser window. This includes Global Variables,
Conditionals, Tags, PHP on Input/Ouput, Embeds, and Extension Hooks.
This is an excellent tool for debugging your templates.

========== ========
Values     Behavior
========== ========
``y``      Enables template debugging
``n``      Default value, disables template debugging
========== ========

Example Usage::

$config['template_debugging'] = "y";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> System
Administration --> Output and Debugging`: Display Template Debugging


========== ========
Values     Behavior
========== ========
``NEED``   NEED
========== ========

Example Usage::

$config['template_group'] = "NEED";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Design --> Templates -->
Template Manager --> Edit Template Group`: Make the index template in
this group your site's home page?


theme_folder_path
-----------------
:ref:`Theme Folder Path <general-config-theme-path-label>` is the server
path to the "themes" folder.

========== ========
Values     Behavior
========== ========
``text``   Sets the server path to the "themes" folder.
========== ========

Example Usage::

$config['theme_folder_path'] = "/home/usr/domain.com/public_html/themes/";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> General
Configuration`: Theme Folder Path


third_party_path
----------------
With the third_party_path config variable, you can keep your third_party
folders completely out of the system/ and themes/ directory, which will
make upgrading easier.

========== ========
Values     Behavior
========== ========
``text``   Sets the path to your third party folders.
========== ========

Example Usage::

$config['third_party_path'] = "/path/to/third_party/folders/";


tmpl_file_basepath
------------------
:ref:`Theme Folder Path <general-config-theme-path-label>`  is the
server path (not URL) to the folder that holds the Template files.

========== ========
Values     Behavior
========== ========
``text``   Sets the server path to the folder that holds the Template files
========== ========

Example Usage::

$config['tmpl_file_basepath'] = "/home/usr/domain.com/system/expressionengine/templates/";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Design --> Templates -->
Template Preferences`: Server path to site's templates


un_min_len
----------
:ref:`Minimum Username Length <security-min-username-label>`  is the
minimum length required for a member username during new member
registration. Specify the minimum number of characters required.

========== ========
Values     Behavior
========== ========
``number`` Sets the minimum length required for a member username during new member registration
========== ========

Example Usage::

$config['un_min_len'] = "5";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Security and Sessions`: Server path to site's templates


uri_protocol
------------
This item determines which server global should be used to retrieve the
URI string.  The default setting of "AUTO" works for most servers. If
your links do not seem to work, try one of the other delicious flavors.

=================== ========
Values              Behavior
=================== ========
``auto``            Default value, auto detects
``PATH_INFO``       Uses the PATH_INFO
``QUERY_STRING``    Uses the QUERY_STRING
``REQUEST_URI``     Uses the REQUEST_URI
``ORIG_PATH_INFO``  Uses the ORIG_PATH_INFO
=================== ========

Example Usage::

$config['uri_protocol'] = "PATH_INFO";


un_min_len
----------
:ref:`Minimum Username Length <security-min-username-label>` is the
minimum length required for a member username during new member
registration. Specify the minimum number of characters required.

========== ========
Values     Behavior
========== ========
``number`` Sets the minimum length required for a member username during new member registration
========== ========

Example Usage::

$config['un_min_len'] = "5";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Security and Sessions`: Server path to site's templates


url_third_themes
-----------------
Overrides the third_party URL so you can move your third_party directory
outside of your system directory.

========== ========
Values     Behavior
========== ========
``text``   Sets URL to third_party directory
========== ========

Example Usage::

$config['url_third_themes'] = "http://www.example.com/third_party/";


user_session_ttl
----------------
Allows changing of the Users Session Length to any number in seconds.
For instance, if users should be logged out after 10 minutes of
inactivity, the value would be: 600

========== ========
Values     Behavior
========== ========
``number`` Time in seconds for Users Session Length
========== ========

Example Usage::

$config['user_session_ttl'] = '600';


webmaster_email
---------------
Sets the Webmaster's email address.

========== ========
Values     Behavior
========== ========
``text``   Sets the webmaster's email address
========== ========

Example Usage::

$config['webmaster_email'] = "joe@example.com";


webmaster_name
--------------
Sets the Webmaster's email address.

========== ========
Values     Behavior
========== ========
``text``   Sets the webmaster's name
========== ========

Example Usage::

$config['webmaster_name'] = "Joe";


website_session_type
-----------------
:ref:`Website Session Type <website-session-type-label>` determines how
sessions are handled on the front-end of the site. You may use cookies,
session IDs, or a combination.

====== ========
Values Behavior
====== ========
``c``  Sets the User Session to use cookies only
``s``  Sets the User Session to use Session ID only
``cs`` Sets the User Session to use Cookies and Session ID
====== ========


Example Usage::

 $config['website_session_type'] = 's';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security And
Privacy --> Security And Sessions`: Website Session Type

.. versionchanged:: 2.8

   Variable was changed from ``user_session_type`` to
   ``website_session_type``.


word_separator
--------------

When creating an entry in the PUBLISH page, if you do not manually enter
a "URL Title" then the system will automatically create one based on the
entry Title. The :ref:`Word Separator for URL Titles
<global-channel-word-seperator-label>` preference determines whether
underscore characters (_) or dashes (-) should be used when
automatically creating the URL Title.

============== ========
Values         Behavior
============== ========
``dash``       Default value, sets Dash as the word separator
``underscore`` Sets underscore as the word separator
============== ========

Example Usage::

 $config['word_separator'] = 'dash';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Channel
Administration --> Global Channel Preferences`: Word Separator for URL
Titles


xml_lang
--------
The :ref:`Default XML Language <general-config-default-xml-label>`
setting is typically used when outputting RSS feeds. Your feed will
identify itself as having the language specified here.

============== ========
Values         Behavior
============== ========
``text``       Sets default XML language
============== ========

Example Usage::

 $config['xml_lang'] = 'en';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> General
Configuration`: Default XML Language


xss_clean_member_exception
--------------------------
Sets the member IDs to exclude XSS cleaning on.

========== ========
Values     Behavior
========== ========
``text``   Pipe delimeted list of member IDs
========== ========

Example Usage::

$config['xss_clean_member_exception'] = '3|14|83';


xss_clean_member_group_exception
--------------------------------
Sets the member IDs to exclude XSS cleaning on.

========== ========
Values     Behavior
========== ========
``text``   Pipe delimited list of member group IDs
========== ========

Example Usage::

$config['xss_clean_member_group_exception'] = '2|5';
