System Configuration Overrides
******************************

By default, ExpressionEngine's system settings are managed in the
Control Panel and stored in the database, but these settings can be
overridden with one of 3 configuration files: the main configuration
file, the site index file, and the CP index file.

The **main configuration file**, found at
:file:`system/expressionengine/config/config.php`, is loaded every time
the system is run, meaning that config overrides set in
:file:`config.php` always affect the system's configuration.

The **site index file** is the :file:`index.php` file found in the web
root of the ExpressionEngine installation. This file acts like the
gateway to the front-end of the site. Since all web requests for a
site's front-end pass through the site index file, there are a set of
configuration overrides you can include in this file to alter
ExpressionEngine's configuration. Keep in mind that any overrides set in
the site index file only affect the system's behavior for front-end
pages. (Even if you have :doc:`removed index.php from your site's
URLs</urls/remove_index.php>`, all front-end web requests are still
handled by the site index file.)

.. note:: Overrides available for use in the site index file are limited
    to :ref:`cp_url <overrides-cp-url>`, :ref:`is_site_on
    <is_site_on>`, :ref:`newrelic_app_name
    <overrides-newrelic-app-name>`, :ref:`site_404
    <overrides-site-404>`, :ref:`site_index <overrides-site-index>`,
    :ref:`site_name <overrides-site-name>`, :ref:`site_url
    <overrides-site-url>`, :ref:`template <overrides-template>`, and
    :ref:`template_group <overrides-template-group>`.

The **CP index file** is the :file:`admin.php` file also found in the
installation's web root. The CP index file is similar to the site index
file except that it acts as the gateway for all web requests to the
Control Panel. And similarly, any overrides set in the CP index file
only affect the system's behavior for CP pages accessed through that
particular CP index file (e.g. ``http://example.com/admin.php``).

.. note:: Overrides available for use in the CP index file are limited
    to :ref:`cp_url <overrides-cp-url>`, :ref:`newrelic_app_name
    <overrides-newrelic-app-name>`, and :ref:`site_name
    <overrides-site-name>`.

ExpressionEngine's settings are loaded in this order at runtime:

#. Settings stored in the database are loaded.
#. Settings in :file:`config.php` are loaded and override settings
   loaded from the database.
#. If a front-end page is being served, a limited array of settings in
   :file:`index.php` are loaded and override any settings loaded from
   the database and the main configuration file.
#. If a CP page is being served, a limited array of settings in
   :file:`admin.php` are loaded and override any settings loaded from
   the database and the main configuration file.


Configuration Variables
=======================

.. contents::
    :local:


allow_avatar_uploads
--------------------

Set whether members can upload their own avatar.

======== ===========
Value    Behavior
======== ===========
``y``    Yes, allow members to upload their own avatar
``n``    No, do not allow members to upload their own avatar
======== ===========

Example Usage::

$config['allow_avatar_uploads'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
:ref:`Allow members to upload their own avatars <avatar-upload-label>`


.. _allow_dictionary_pw:

allow_dictionary_pw
-------------------

Set whether words commonly found in the dictionary can be used as
passwords. Must be used in combination with
:ref:`name_of_dictionary_file <name_of_dictionary_file>`.

======== ===========
Value    Behavior
======== ===========
``y``    Yes, allow dictionary words as passwords
``n``    No, do not allow dictionary words as passwords
======== ===========

Example Usage::

$config['allow_dictionary_pw'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Design --> Security and
Privacy --> Security and Sessions`:
:ref:`Allow Dictionary Words as Passwords <dict-passwds-label>`


allow_extensions
----------------

Set whether extensions are enabled in the system. Disabling extensions
will *not* uninstall extensions.

======== ===========
Value    Behavior
======== ===========
``y``    Enable all extensions
``n``    Disable all extensions
======== ===========

Example Usage::

$config['allow_extensions'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Add-Ons --> Extensions`:
:doc:`Disable Extensions? </cp/add-ons/extension_manager>`


allow_member_localization
-------------------------

Set whether dates and times are localized to each members' own
localization preferences.


======== ===========
Value    Behavior
======== ===========
``y``    Show dates and times localized to each members' preferences
``n``    Show all dates and times localized to the site default
======== ===========

Example Usage::

$config['allow_member_localization'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences -->
Security and Sessions`: :ref:`Allow members to set their own
localization preferences <allow-member-localization-label>`


allow_member_registration
-------------------------

Set whether site visitors are allowed to register for accounts.

======== ===========
Value    Behavior
======== ===========
``y``    Allow front-end member registration
``n``    Do not allow front-end member registration
======== ===========

Example Usage::

$config['allow_member_registration'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
:ref:`Allow New Member Registrations <allow-member-register-label>`


allow_multi_logins
------------------

Set whether an account can have multiple active sessions at one time.

.. note::

   This feature is incompatible with the "Cookies Only" session type.

======== ===========
Value    Behavior
======== ===========
``y``    Allow multiple active sessions per account
``n``    Do not allow multiple active sessions per account
======== ===========

Example Usage::

$config['allow_multi_logins'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Design --> Security and
Privacy --> Security and Sessions`: :ref:`Allow multiple log-ins from a
single account <allow-multi-logins-label>`


allow_textarea_tabs
-------------------

Set whether a tab keystroke produces a tab in Publish Page and Template
Editor textareas. This is the default behavior.

======== ===========
Value    Behavior
======== ===========
``y``    Insert tab on tab keystroke in textareas **(default)**
``n``    Normal browser behavior on tab keystroke in textareas
======== ===========

Example Usage::

$config['allow_textarea_tabs'] = 'y';


allow_signatures
----------------

Set whether member signatures are enabled.

======== ===========
Value    Behavior
======== ===========
``y``    Enable member signatures
``n``    Disable member signatures
======== ===========

Example Usage::

$config['allow_signatures'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
:ref:`Allow Users to have Signatures <allow-member-sigs-label>`


allow_username_change
---------------------

Set whether members can change their own usernames after registration.

========= ===========
Value     Behavior
========= ===========
``y``     Allow members to change their own usernames
``n``     Do not allow members to change their own usernames
========= ===========

Example Usage::

$config['allow_username_change'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Design --> Security and
Privacy --> Security and Sessions`: :ref:`Allow members to change their
username <allow-member-username-label>`


app_version
-----------

The installation's ExpressionEngine version.

.. warning:: This configuration variable is automatically set by the
    system and **should not be modified**.


auto_assign_cat_parents
-----------------------

Set whether to assign an entry to both the selected category and its
parent category.

========= ===========
Value     Behavior
========= ===========
``y``     Entry will be assigned to the selected category and its parent
          category
``n``     Entry will only be assigned to the selected category
========= ===========

Example Usage::

$config['auto_assign_cat_parents'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Channel
Administration --> Global Channel Preferences`: :ref:`Auto-Assign
Category Parents <auto-assign-categoryP-label>`


avatar_max_height
-----------------

Set the maximum height (in pixels) allowed for user-uploaded avatars.

=========== ===========
Value       Description
=========== ===========
``integer`` Max height (in pixels)
=========== ===========

Example Usage::

$config['avatar_max_height'] = '120';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
:ref:`Avatar Maximum Height <avatar-max-height-label>`


avatar_max_kb
-------------

Set the maximum file size (in kilobytes) allowed for user-uploaded
avatars.

=========== ===========
Value       Description
=========== ===========
``integer`` Max file size (in kilobytes)
=========== ===========

Example Usage::

$config['avatar_max_kb'] = '200';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
:ref:`Avatar Maximum Size <avatar-max-kb-label>`


avatar_max_width
----------------

Set the maximum width (in pixels) allowed for user-uploaded avatars.

=========== ===========
Value       Description
=========== ===========
``integer`` Max width (in pixels)
=========== ===========

Example Usage::

$config['avatar_max_width'] = '120';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
:ref:`Avatar Maximum Width <avatar-max-width-label>`


avatar_path
-----------

Set the server path to the avatar directory.

========= ===========
Value     Description
========= ===========
``path``  Full server path to writable avatar directory
========= ===========

Example Usage::

$config['avatar_path'] = '/path/images/avatars/';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
:ref:`Server Path to Avatar Folder <avatar-path-label>`


avatar_url
----------

Set the URL to the avatar directory.

========= ===========
Value     Description
========= ===========
``URL``   URL to avatar directory
========= ===========

Example Usage::

$config['avatar_url'] = 'http://example.com/images/avatars';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
:ref:`URL to Avatar Folder <avatar-url-label>`


.. _ban_action:

ban_action
----------

Set the action to be taken when a visitor with a banned IP address
attempts access.

============= ===========
Value         Behavior
============= ===========
``restrict``  Restrict the user to viewing the site only
``message``   Show the user a :ref:`specific message <ban_message>`
``bounce``    Redirect the user to a :ref:`specified site
              <ban_destination>`
============= ===========

Example Usage::

$config['ban_action'] = 'message';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> User Banning`:
:ref:`When a banned IP tries to access the site
<member-banned-ip-label>`


.. _ban_destination:

ban_destination
---------------

Set the redirect destination for visitors with banned IP addresses. Must
be used in conjunction with :ref:`ban_action <ban_action>` set to
``bounce``.

========= ===========
Value     Description
========= ===========
``URL``   Destination URL
========= ===========

Example Usage::

$config['ban_destination'] = 'http://www.example.com';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> User Banning`:
:ref:`When a banned IP tries to access the site
<member-banned-ip-label>`


.. _ban_message:

ban_message
-----------

Set the message shown to visitors with banned IP addresses. Must be used
in conjunction with :ref:`ban_action <ban_action>` set to ``message``.

========= ===========
Value     Description
========= ===========
``text``  Message to be shown to user
========= ===========

Example Usage::

$config['ban_message'] = 'This site is currently unavailable.';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> User Banning`:
:ref:`When a banned IP tries to access the site
<member-banned-ip-label>`


banish_masked_ips
-----------------

Set the system to deny a visitor access if the user's IP address cannot
be determined while :ref:`throttling is enabled <enable_throttling>`.

========= ===========
Value     Behavior
========= ===========
``y``     Deny access to visitors without IP addresses
``n``     Allow access to visitors without IP addresses
========= ===========

Example Usage::

$config['banish_masked_ips'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Security and Sessions`: :ref:`Deny Access if No IP Address
is Present <throttling-no-ip-address-label>`


.. _banishment_message:

banishment_message
------------------

Set a custom message to show throttled visitors. :ref:`Throttling must
be enabled <enable_throttling>` and :ref:`banishment_type
<banishment_type>` must be set to ``message``.

========= ===========
Value     Description
========= ===========
``text``  Custom message to show user
========= ===========

Example Usage::

$config['banishment_message'] = 'You have exceeded the allowed page load frequency.';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Throttling Preferences`: :ref:`Custom Message
<throttling-custom-message>`


.. _banishment_type:

banishment_type
---------------

Set the system's method for handling throttled web requests.

============= ===========
Value         Behavior
============= ===========
``404``       Respond to the request with standard 404 headers **(default)**
``redirect``  Redirect the user to a :ref:`specified URL <banishment_url>`
``message``   Show the user a :ref:`custom message <banishment_message>`
============= ===========

Example Usage::

$config['banishment_type'] = 'message';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Security and
Privacy --> Throttling Preferences`: :ref:`Action to Take
<throttling-action-to-take>`


.. _banishment_url:

banishment_url
--------------

Set a URL to serve as the redirect destination for throttled visitors.
:ref:`Throttling must be enabled <enable_throttling>` and
:ref:`banishment_type <banishment_type>` must be set to ``redirect``.

========= ===========
Value     Description
========= ===========
``URL``   Destination URL for throttled visitors
========= ===========

Example Usage::

$config['banishment_url'] = 'http://www.yahoo.com';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Security and
Privacy --> Throttling Preferences`: :ref:`URL for Redirect
<throttling-url-for-redirect>`


banned_emails
-------------

Specify email addresses to ban from site registration and login. Use
wildcards for partial email addresses.

========= ===========
Value     Description
========= ===========
``email`` Pipe-delimited list of email addresses and/or wildcard domains
========= ===========

Example Usage::

$config['banned_emails'] = 'user@example.com|johndoe@example.com|*@spammydomain.com';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> User Banning`:
:ref:`Banned Email Addresses <member-banned-email-label>`


banned_ips
----------

Specify IP addresses to ban from site registration and login. Use
wildcards to ban blocks of IP addresses.

====== ===========
Value  Description
====== ===========
``IP`` Pipe-delimited list of IP addresses
====== ===========

Example Usage::

$config['banned_ips'] = '123.456.789.1|123.321.*';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> User Banning`:
:ref:`Banned IP Address <member-banned-ip-label>`


banned_screen_names
-------------------

Specify screen names that cannot be used for member accounts, which can
be handy for reserving certain screen names for your own use.

================ ===========
Value            Description
================ ===========
``screen name``  Pipe-delimited list of screen names to restrict
================ ===========

Example Usage::

$config['banned_screen_names'] = 'Garfield|Snoopy|Hobbes';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> User Banning`:
:ref:`Restricted Screen Names <member-banned-screename-label>`


banned_usernames
----------------

Specify usernames that cannot be used for member accounts, which can
be handy for reserving certain usernames for your own use.

================ ===========
Value            Description
================ ===========
``username``     Pipe-delimited list of usernames to restrict
================ ===========

Example Usage::

$config['banned_usernames'] = 'garfield|snoopy|hobbes';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> User Banning`:
:ref:`Restricted Usernames <member-banned-username-label>`


cache_path
----------

Set the path to the system's cache directory. Leave blank to use the
system default ``system/expressionengine/cache/``.

.. note:: This directory must already exist.

======== ===========
Value    Description
======== ===========
``path`` Server path to cache directory
======== ===========

Example Usage::

$config['cache_path'] = '/path/to/cache/folder/';


captcha_font
------------

Set whether TrueType fonts should be used for CAPTCHA images.

====== ========
Value  Behavior
====== ========
``y``  Enables the use of TrueType fonts **(default)**
``n``  Disables use of TrueType fonts
====== ========

Example Usage::

$config['captcha_font'] = 'n';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> CAPTCHA Preferences`: :ref:`Use TrueType Font for CAPTCHA
<captcha-use-truetype>`


captcha_path
------------

Set the path to the directory containing CAPTCHA images.

======== ===========
Value    Description
======== ===========
``path`` Server path to CAPTCHA directory
======== ===========

Example Usage::

$config['captcha_path'] = '/path/to/captcha/folder/';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> CAPTCHA Preferences`: :ref:`Server Path to CAPTCHA Folder
<captcha-server-path>`


captcha_rand
------------

Specify whether to add a random three-digit number to the end of each
generated CAPTCHA word. This makes it more difficult for scripts to
guess or brute-force the form submission.

====== ========
Value  Behavior
====== ========
``y``  Add random numbers to CAPTCHA words **(default)**
``n``  Do not add random numbers to CAPTCHA words
====== ========

Example Usage::

$config['captcha_rand'] = 'n';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> CAPTCHA Preferences`: :ref:`Add Random Number to CAPTCHA
Word <captcha-add-random-number>`


captcha_require_members
-----------------------

Specify whether to require logged-in members to pass CAPTCHA validation
to post comments, assuming the CAPTCHA is already enabled for comments.

====== ========
Value  Behavior
====== ========
``y``  Require logged-in members pass CAPTCHA validation
``n``  Do not require logged-in members to pass CAPTCHA validation **(default)**
====== ========

Example Usage::

$config['captcha_require_members'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> CAPTCHA Preferences`: :ref:`Require CAPTCHA with logged-in
members <captcha-require-logged-in-members>`


captcha_url
-----------

Set the full URL to the directory containing CAPTCHA images.

======== ===========
Value    Description
======== ===========
``URL``  Full URL to the CAPTCHA directory
======== ===========

Example Usage::

$config['captcha_url'] = 'http://www.example.com/images/captchas';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> CAPTCHA Preferences`: :ref:`Full URL to CAPTCHA Folder
<captcha-full-url>`


.. _censor_replacement:

censor_replacement
------------------

You may optionally specify a word or phrase to be used when replacing
censored words. For example, if you set "tisk tisk" as your replacement
word, and "shucks" is in your censored list, then anytime "shucks" is
used it will be replaced with "tisk tisk". If you do not set this
preference, a pound symbol will be used for each character that is
censored, so "shucks" would be converted to "######".

======== ===========
Value    Description
======== ===========
``text`` Text to be used as a replacement for censored words
======== ===========

Example Usage::

$config['censor_replacement'] = 'tisk tisk';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Word Censoring`: :ref:`Censoring Replacement Word
<censor-replace-label>`


.. _censored_words:

censored_words
--------------

Specify a list of words to censor. Wildcards are allowed. For example,
``test*`` would censor the words "test", "testing", and "tester", while
``*gress`` would censor the words "progress" and "congress".

======== ===========
Value    Description
======== ===========
``word`` Pipe-delimited list of words to censor
======== ===========

Example Usage::

$config['censored_words'] = 'dagnabbit|consarnit|golly gee willikers';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Word Censoring`: :ref:`Censored Words <censor-words-label>`


charset
-------

Specify which character set for the system to use by default.

.. warning:: Unless you have good reason and you know what you're doing,
    leave this setting at its default value of ``UTF-8``.

============ ===========
Value        Description
============ ===========
``charset``  Character set to be used
============ ===========

Example Usage::

$config['charset'] = 'UTF-8';


comment_edit_time_limit
-----------------------

Set the length of time in seconds that members have to edit their
comments on the front end of the site. Set to ``0`` for no limit.
Members in the Super Admin group are exempt from this time limit.

=========== ===========
Value       Description
=========== ===========
``integer`` Length of time in seconds
=========== ===========

Example Usage::

$config['comment_edit_time_limit'] = '120';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Add-Ons --> Modules -->
Comment`: :ref:`Comment Editing Time Limit <comment-editing-time-label>`


comment_moderation_override
---------------------------

By default, comments are no longer accepted for entries after their
comment expiration date has passed. Set this preference to override that
behavior and allow moderated comments on entries after comment
expiration.

====== ========
Value  Behavior
====== ========
``y``  Allow *moderated* comments after comment expiration
``n``  Do not allow any comments after comment expiration **(default)**
====== ========

Example Usage::

$config['comment_moderation_override'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Add-Ons --> Modules -->
Comment`: :ref:`Moderate expired entries
<comment-expired-comments-label>`


comment_word_censoring
----------------------

Apply word censoring to comments, even if censoring is not :ref:`enabled
<enable_censoring>` system-wide.

====== ========
Value  Behavior
====== ========
``y``  Enable censoring for comments
``n``  Obey :ref:`system-wide setting <enable_censoring>` **(default)**
====== ========

Example Usage::

$config['comment_word_censoring'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Add-Ons --> Modules -->
Comment`: :ref:`Force word censoring for comments
<comment-force-censoring-label>`

.. _cookie_domain:

cookie_domain
-------------

Optionally specify a domain the cookie is available to. By default, the
exact hostname of the requested page is set as the cookie domain. For
example, if the page at ``http://www.example.com/blog/an-entry-title``
is loaded and the cookie domain is left blank in ExpressionEngine's
configuration, the browser will use ``www.example.com`` as the cookie
domain. The browser will only make these cookies available when the
page's hostname is *exactly* ``www.example.com``.

If the cookie domain is explicitly specified, however, the browser will
make the cookie available whenever the requested page's hostname
*contains* the cookie domain. For example, setting the cookie domain to
``.example.com`` will ensure the cookie is shared whenever the requested
page's hostname includes ``example.com``, ``www.example.com``,
``admin.example.com``, ``blog.example.com``, and so on.

If you're running multiple subdomains on a single ExpressionEngine
installation and want member sessions to be valid across all subdomains,
you should explicitly set the cookie domain.

.. note:: There's an important difference between ``example.com`` and
    ``.example.com``. When the cookie domain begins with a dot, browsers
    match any hostname that *includes* the cookie domain. Without the
    dot prefix, browsers are looking for an exact hostname match in the
    URL, which means cookies will not be available to subdomains. A
    cookie set by PHP with an explicitly specified cookie domain will
    always include the dot prefix, whether or not one is included in
    this ExpressionEngine setting. For clarity's sake, the examples here
    include a leading dot when the cookie domain is being explicitly
    set.

.. note:: Browsers will not save cookies if the specified cookie domain
    isn't included in the request's hostname. In other words, a site can
    only set cookies for ``.example.com`` if its hostname actually
    includes ``example.com``.

============= ========
Value         Behavior
============= ========
``.hostname`` Makes browser cookies available to web requests at the given domain
============= ========

Example Usage::

$config['cookie_domain'] = '.example.com';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Cookie Settings`: :ref:`Cookie Domain <cookie-domain-label>`


cookie_path
-----------

Optionally specify a cookie path. When a cookie path is set, the browser
will only share cookies with ExpressionEngine when the beginning of the
URL path matches the cookie path. For example, if the cookie path is set
to ``/blog/``, a cookie for the domain ``example.com`` will only be sent
by the browser if the URL begins with ``http://example.com/blog/``. This
can be useful if you have ExpressionEngine installed in a sub-directory
and want to ensure that only that particular installation has access to
the cookies it sets.

========= ========
Value     Behavior
========= ========
``path``  Restricts cookie sharing to pages with matching URL paths
========= ========

Example Usage::

$config['cookie_path'] = '/blog/';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Cookie Settings`: :ref:`Cookie Path <cookie-path-label>`


cookie_prefix
-------------

Specify a prefix for the cookie name set by ExpressionEngine. This
protects against collisions from separate ExpressionEngine installations
on the same :ref:`cookie domain <cookie_domain>`.

========= ===========
Value     Description
========= ===========
``text``  A word used as the prefix to the cookie name
========= ===========

Example Usage::

$config['cookie_prefix'] = 'site1';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Cookie Settings`: :ref:`Cookie Prefix <cookie-prefix-label>`


cookie_secure
-------------

Require a secure connection (HTTPS) for ExpressionEngine to set cookies.

========== ========
Value      Behavior
========== ========
``TRUE``   Require a secure connection to set cookies
``FALSE``  Do not require a secure connection to set cookies **(default)**
========== ========

Example Usage::

$config['cookie_secure'] = TRUE;


cp_session_ttl
--------------

Set the session length for members logging in through the Control Panel.

.. note:: This does not affect the timing of the idle session modal that
    appears when a CP page is left open and idle, and it is effectively
    irrelevant if the member selects *Auto log-in on future visits?* on
    the login page.

=========== ===========
Value       Description
=========== ===========
``integer`` Control Panel session length in seconds
=========== ===========

Example Usage::

$config['cp_session_ttl'] = '300';


cp_session_type
---------------

Set the method for session handling in the Control Panel.

.. note:: The *Auto log-in on future visits?* option appears on the CP
    login screen when the **cookies only** method is used, allowing
    users to remain logged-in to the CP for up to 2 weeks since their
    last visit.

====== ========
Value  Behavior
====== ========
``c``  Use cookies only
``s``  Use session ID only
``cs`` Use both cookies and session ID
====== ========

Example Usage::

 $config['cp_session_type'] = 's';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Security and Sessions`: :ref:`Control Panel Session Type
<cp-session-type-label>`

.. versionchanged:: 2.8

   Variable was changed from ``admin_session_type`` to
   ``cp_session_type``.


cp_theme
--------

Set the default theme that users will see when logged-in to the Control
Panel.

========== ===========
Value      Description
========== ===========
``string`` Name of CP theme
========== ===========

Example Usage::

$config['cp_theme'] = 'default';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> General
Configuration`: :ref:`Default Control Panel Theme
<general-config-cp-theme-label>`


.. _overrides-cp-url:

cp_url
------

Set the full URL to your Control Panel.

========== ========
Value      Description
========== ========
``URL``    The full URL to your Control Panel
========== ========

Example Usage::

$config['cp_url'] = 'http://example.com/admin.php';

Also available for use in the site index file, :file:`index.php`, and
the CP index file, :file:`admin.php`. Example Usage::

$assign_to_config['cp_url'] = 'http://domain2.com/admin.php';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> General Configuration`:
:ref:`URL to your Control Panel index page
<general-config-url-cp-label>`


.. _overrides-debug:

debug
-----

Set display preferences for PHP and database error messages.

.. note:: Error messages are helpful for troubleshooting and catching
    errors during development, but since they can contain confusing
    language or reveal sensitive system information like file paths, we
    strongly recommend only showing them to Super Admin-level users once
    the site is in production.

========== ========
Value      Behavior
========== ========
``0``      Hide PHP/SQL error messages
``1``      Show PHP/SQL error messages to only Super Admin users
``2``      Show PHP/SQL error messages all users **NOT SECURE**
========== ========

Example Usage::

$config['debug'] = '1';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> System
Administration --> Output and Debugging`: :ref:`Debug Preference
<output-debug-pref-label>`


default_member_group
--------------------

Set the member group to which new users will be assigned.

=========== ========
Value       Description
=========== ========
``integer`` Member group ID
=========== ========

Example Usage::

$config['default_member_group'] = '6';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
:ref:`Default Member Group Assigned to New Members
<default-member-group-label>`


default_site_timezone
---------------------

Set the default timezone. All dates and times displayed by
ExpressionEngine will be localized to this timezone unless overridden by
a member's own localization preferences.

============ ========
Value        Behavior
============ ========
``timezone`` A valid `timezone supported by PHP <http://php.net/manual/en/timezones.php>`__
============ ========

Example Usage::

$config['default_site_timezone'] = 'America/Los_Angeles';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Localization
Settings`: :ref:`Site Timezone <sysadmin-site-timezone-label>`


deft_lang
---------

Set the default language. ExpressionEngine ships with English, and
additional :doc:`language packs </general/languages>` are available for
download.

============ ===========
Value        Description
============ ===========
``language`` Name of language directory found in ``system/expressionengine/language/``
============ ===========

Example Usage::

$config['deft_lang'] = 'french';


deny_duplicate_data
-------------------

Set whether to reject duplicate data submissions. This feature blocks a
comment if an identical one already exists on the site.

======= ========
Value   Behavior
======= ========
``y``   Enable protection against duplicate data submissions **(default)**
``n``   Disable protection against duplicate data submissions
======= ========

Example Usage::

$config['deny_duplicate_data'] = 'n';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Security and Sessions`: :ref:`Deny Duplicate Data
<deny-duplicate-data-label>`


disable_all_tracking
--------------------

.. warning:: Use only under extreme circumstances.

This is an emergency override which will disable all tracking when
enabled. This is useful for server administrators who need a way to
respond immediately to table locks during a traffic spike to keep the
site running smoothly.

======= ========
Value   Behavior
======= ========
``y``   Disables all tracking (User, Template, Channel, Referrer)
======= ========

Example Usage::

$config['disable_all_tracking'] = 'y';


disable_csrf_protection
-----------------------

CSRF protection prevents automated scripts (the most common way spam is
generated) from repeatedly submitting comments or other form data. A
submission is only allowed when a user manually loads a page and submits
the form from your site.

========== ========
Value      Behavior
========== ========
``TRUE``   Disable CSRF protection
``FALSE``  Enable CSRF protection **(default)**
========== ========

Example Usage::

$config['disable_csrf_protection'] = TRUE;


disable_tag_caching
-------------------

.. warning:: Use only under extreme circumstances.

Disables tag caching, which if used unwisely on a high traffic site can
lead to disastrous disk i/o. This setting allows quick thinking admins
to temporarily disable it without hacking or modifying folder
permissions.

======= ========
Value   Behavior
======= ========
``y``   Disable tag caching
``n``   Enable tag caching **(default)**
======= ========

Example Usage::

$config['disable_tag_caching'] = 'y';


doc_url
-------

Set the URL to the ExpressionEngine User Guide, used in the Control
Panel to provide a direct link to the documentation.

======= ========
Value   Description
======= ========
``URL`` URL to ExpressionEngine User Guide
======= ========

Example Usage::

$config['doc_url'] = 'http://ellislab.com/expressionengine/user-guide/';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> General
Configuration`: :ref:`URL to Documentation Directory
<general-config-URL-docs-label>`


dynamic_tracking_disabling
--------------------------

Set a value for the maximum number of online visitors to track. Once
this value is exceeded, all of the tracking features will be temporarily
disabled until the number of online visitors drops below the indicated
value. Recommended values for this feature will vary based on your
hosting environment. Check with your server administrator to discuss
reasonable limits for your site.

.. note:: :ref:`Online User Tracking <enable_online_user_tracking>` must
    be enabled for this feature to work.

=========== ========
Value       Behavior
=========== ========
``integer`` Maximum number of online visitors to track
=========== ========

Example Usage::

$config['dynamic_tracking_disabling'] = '350';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Tracking Preferences`: :ref:`Suspend ALL tracking when number of
online visitors exceeds <suspend-tracking-label>`:


email_batch_size
----------------

Set the number of emails to be sent in each batch. The batch size you
should use depend on many things; among them the email protocol you have
chosen, the server configuration, and the server power, so you may need
to experiment a little to get it right.

.. note:: :ref:`Batch mode <email_batchmode>` must be enabled.

If you are using one of the more robust mail protocols, like Sendmail or
SMTP, you can set a greater batch total, possibly as high as several
hundred or even more if you are on a dedicated server. A batch size of
300 in these cases is a good starting point. If you are having good
success you can increase it until you begin experiencing time-outs.

.. note:: Unless your mailing list numbers in the thousands, you won't
    notice much of a speed gain from setting large batches. If you are
    using the less efficient "PHP mail" protocol then you will usually
    need to set a lower batch size; 50-100 is typical.

=========== ===========
Value       Description
=========== ===========
``integer`` The number of emails per batch
=========== ===========

Example Usage::

$config['email_batch_size'] = '300';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Email
Configuration`: :ref:`Number of Emails Per Batch
<email-number-per-batch-label>`


.. _email_batchmode:

email_batchmode
---------------

Set whether to send email via the Communicate section of the Control
Panel in batches.

This mode splits up large numbers of emails into small batches which are
sent at short intervals. This gives you the ability to send email to
very large mailing lists without running up against your server's
execution time limit. By default, PHP limits any process to 30 seconds,
which is not enough time to send a large amount of email. Enabling the
batch mode can prevent server time-outs. A secondary benefit is that it
is less taxing on your mail server and, in the case of people on shared
hosting accounts, less likely to cause problems with your server
administrator.

========== ========
Value      Behavior
========== ========
``y``      Enable batch mode
``n``      Disable batch mode **(default)**
========== ========

Example Usage::

$config['email_batchmode'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Email
Configuration`: :ref:`Use Batch Mode <email-use-batch-mode-label>`


email_charset
-------------

Set the character encoding used on the content of outgoing messages.

============ ===========
Value        Description
============ ===========
``encoding`` Encoding to use for content of outgoing emails
============ ===========

Example Usage::

$config['email_charset'] = 'utf-8';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Email
Configuration`: :ref:`Email Character Encoding
<email-character-encoding-label>`


email_console_timelock
----------------------

Set the number of minutes that must lapse before a member is allowed to
send another email.

.. note::
   This only applies to the Email Console in the member profile pages.

=========== ===========
Value       Description
=========== ===========
``integer`` Number of minutes that must lapse before a member is allowed to send another email
=========== ===========

Example Usage::

$config['email_console_timelock'] = '300';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Email
Configuration`: :ref:`Email Console Timelock
<email-console-timelock-label>`


email_crlf
----------

If set, this overrides the core Email class setting for crlf characters in
quoted-printable encoded emails (Email class $crlf property).

========== ========
Value      Behavior
========== ========
``text``   Overrides the core Email class setting for crlf characters in quoted-printable encoded emails
========== ========

Example Usage::

$config['email_crlf'] = '\r\n';


email_debug
-----------

When enabled, detailed debugging information will be displayed whenever
you send an email using the Communicate page. This information can be
useful in helping to track down any problems you may be experiencing.

========== ========
Value      Behavior
========== ========
``y``      Enable email debugging
``n``      Disable email debugging **(default)**
========== ========

Example Usage::

$config['email_debug'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Email
Configuration`: :ref:`Enable Email Debugging
<email-enable-debugging-label>`


email_module_captchas
---------------------

When enabled, users will need to fill out a :doc:`CAPTCHA
</security/captchas>` when using the Tell-a-Friend or Contact email
forms. You will need to ensure that your tags for those forms contain
the appropriate CAPTCHA code.

========== ========
Value      Behavior
========== ========
``y``      Enable CAPTCHAS on Tell-a-Friend and Contact email forms
``n``      Disable CAPTCHAS on Tell-a-Friend and Contact email forms **(default)**
========== ========

Example Usage::

$config['email_module_captchas'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Email
Configuration`: :ref:`Enable CAPTCHAs for Tell-a-Friend and Contact
emails <email-enable-captchas-label>`


email_newline
-------------

If set, overrides the core Email class setting for newline characters
(Email class $newline property).

========== ========
Value      Behavior
========== ========
``text``   Overrides the core Email class setting for newline characters
========== ========

Example Usage::

$config['email_newline'] = '\r\n';


emoticon_url
------------

Set the URL to the base folder where smiley graphics are stored.

========== ===========
Value      Description
========== ===========
``URL``    URL to the location of smiley graphics
========== ===========

Example Usage::

$config['emoticon_url'] = 'http://example.com/images/smileys/';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> System
Administration --> Emoticon Preferences`: :ref:`URL to the folder
containing your smileys <emoticon-url-folder-label>`


enable_avatars
--------------

If enabled, users can associate an image with their account that you can
optionally display with entries, comments, and forum posts.

========== ========
Value      Behavior
========== ========
``y``      Enable avatars **(default)**
``n``      Disable avatars
========== ========

Example Usage::

$config['enable_avatars'] = 'n';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
:ref:`Enable Avatars <avatar-enable-label>`


.. _enable_censoring:

enable_censoring
----------------

If enabled, the system will censor any :ref:`specified words
<censored_words>` in channel entries, comments, forum posts, etc.
Censored words will be replaced with the :ref:`censoring replacement
word <censor_replacement>`.

========== ========
Value      Behavior
========== ========
``y``      Enable word censoring
``n``      Disable word censoring **(default)**
========== ========

Example Usage::

$config['enable_censoring'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Security and
Privacy --> Word Censoring`: :ref:`Enable Word Censoring
<censor-words-enable-label>`


enable_db_caching
-----------------

If enabled, the system will cache the output of database queries to text
files.

========== ========
Value      Behavior
========== ========
``y``      Enable database caching
``n``      Disable database caching **(default)**
========== ========

Example Usage::

$config['enable_db_caching'] = 'y';


enable_emoticons
----------------

If enabled, smileys entered as text will be displayed with graphic
representations.


========== ========
Value      Behavior
========== ========
``y``      Enable emoticons **(default)**
``n``      Disable emoticons
========== ========

Example Usage::

$config['enable_emoticons'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> System
Administration --> Emoticon Preferences`: :ref:`Display Smileys
<emoticon-display-smileys-label>`


enable_entry_view_tracking
--------------------------

If enabled, the :doc:`Entry "Views" Tracking Tag
</addons/channel/entry_tracking>` feature of the Channel module is
available for use.

========== ========
Value      Behavior
========== ========
``y``      Enable tracking views
``n``      Disable tracking views **(default)**
========== ========

Example Usage::

$config['enable_entry_view_tracking'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Security and
Privacy --> Tracking Preferences`: :ref:`Enable Channel Entry View
Tracking <tracking-enable-channel-entry-view-label>`


enable_hit_tracking
-------------------

If enabled, the hit will be tracked each time a template is loaded.

========== ========
Value      Behavior
========== ========
``y``      Enable template hit tracking **(default)**
``n``      Disable template hit tracking
========== ========

Example Usage::

$config['enable_hit_tracking'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Security and
Privacy --> Tracking Preferences`: :ref:`Enable Template Hit Tracking
<tracking-enable-template-hit-tracking-label>`


.. _enable_online_user_tracking:

enable_online_user_tracking
---------------------------

If enabled, online user statistics are tracked and the user-based
variables in the :doc:`Statistics </addons/statistics/index>` module
are available for use.

========== ========
Value      Behavior
========== ========
``y``      Enable online user tracking
``n``      Disable online user tracking **(default)**
========== ========

Example Usage::

$config['enable_online_user_tracking'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Security and
Privacy --> Tracking Preferences`: :ref:`Enable Online User Tracking
<tracking-enable-online-user-tracking-label>`


enable_photos
-------------

If enabled, users can upload an image to be displayed in their member
profile area.

========== ========
Value      Behavior
========== ========
``y``      Enable member photos
``n``      Disable member photos **(default)**
========== ========

Example Usage::

$config['enable_photos'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
:ref:`Enable Member Photos <enable-member-photos-label>`


.. _enable_search_log:

enable_search_log
-----------------

If enabled, each searched term will be logged and can be viewed in the
:doc:`Search Log </cp/tools/logs/search_log>`.

========== ========
Value      Behavior
========== ========
``y``      Enable search term log **(default)**
``n``      Disable search term log
========== ========

Example Usage::

$config['enable_search_log'] = 'n';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> System
Administration --> Search Log Configuration`: :ref:`Enable Search Term
Logging <enable-search-term-log-label>`


enable_sql_caching
------------------

Improves the speed at which the Channel Entries tag is rendered by
caching queries that are normally executed dynamically.

========== ========
Value      Behavior
========== ========
``y``      Enable query caching
``n``      Disable query caching **(default)**
========== ========

Example Usage::

$config['enable_sql_caching'] = 'n';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Channel
Administration --> Global Preferences`: :ref:`Cache Dynamic Channel
Queries <caching_dynamic_channel_query_caching>`


.. _enable_throttling:

enable_throttling
-----------------

If enabled, the system will throttle excessive web requests from
potentially malicious users.

========== ========
Value      Behavior
========== ========
``y``      Enable throttling
``n``      Disable throttling **(default)**
========== ========

Example Usage::

$config['enable_throttling'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Throttling Preferences`: :ref:`Enable Throttling
<enable-throttling-label>`


encode_removed_text
-------------------

If set and ``$this->encode_email`` is set to ``FALSE`` in the Template
class---which is not the default---this text will replace all instances
of the :ref:`encode <global-encode>` global variable.

========== ===========
Value      Description
========== ===========
``text``   Replacement text
========== ===========

Example Usage::

$config['encode_removed_text'] = 'Encoded emails not allowed';


filename_increment
------------------

Forces filenames of uploaded files to be unique. Secondary uploads of
existing files or uploads that share a filename with an existing file
will have an incrementing number appended to the filename.

========== ========
Value      Behavior
========== ========
``y``      Force upload filenames to be unique
``n``      Allow duplicate filenames **(default)**
========== ========

Example Usage::

$config['filename_increment'] = 'y';


force_query_string
------------------

If enabled, ExpressionEngine will render URLs with a question mark
following ``index.php`` in order to pass along segment information as a
standard query string::

    http://example.com/index.php?/channel/joe/

This is necessary for only a few types of web servers to process
ExpressionEngine's URLs correctly. ExpressionEngine's default is a much
more search-engine friendly format::

    http://example.com/index.php/channel/joe/


In rare circumstances, you may need to use this variable in conjunction
with editing the ``$qtype`` variable in your main site ``index.php``
file.

========== ========
Value      Behavior
========== ========
``TRUE``   Forces query strings
``FALSE``  Do not force query strings **(default)**
========== ========

Example Usage::

$config['force_query_string'] = 'TRUE';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> System
Administration --> Output and Debugging`: :ref:`Force URL query strings
<output-force-query-strings-label>`


.. _forum_is_installed:

forum_is_installed
------------------

Automatically enabled when the :doc:`Discussion Forum
</addons/forum/index>` module is installed.

========== ===========
Value      Description
========== ===========
``y``      Forum is installed **(default)**
``n``      Forum is not installed
========== ===========

Example Usage::

$config['forum_is_installed'] = 'y';


forum_trigger
-------------

Sets the forum triggering word if the :ref:`Discussion Forum module is
installed <forum_is_installed>`.

========== ===========
Value      Description
========== ===========
``text``   Forum triggering word
========== ===========

Example Usage::

$config['forum_trigger'] = 'eerox';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Add-Ons --> Modules --> Discussion
Forum --> Default Preferences`: :ref:`Forum Triggering Word
<forum-forum_triggering_word>`


gzip_output
-----------

Set the system to serve compressed front-end pages for faster load times
as long as the requesting browser supports gzip compression, PHP's zlib
extension is loaded, and the web server is not already serving
compressed pages. It's a good idea to enable this setting in most
production environments.

.. note:: This setting only controls whether ExpressionEngine itself
    serves up compressed front-end pages. If the web server is
    configured to serve compressed pages, this setting will have no
    effect.

========= ========
Value     Behavior
========= ========
``y``     Compress front-end pages if possible
``n``     Do not compress front-end pages **(default)**
========= ========

Example Usage::

$config['gzip_output'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> System
Administration --> Output and Debugging`: :ref:`Enable GZIP Output
<output-enable-gzip-label>`


hidden_template_indicator
-------------------------

Specify the character(s) that denote a :doc:`hidden template
</templates/hidden_templates>` when used to prefix a template name.
The default is a dot, e.g. ``.my_hidden_template``.

========== ===========
Value      Description
========== ===========
``text``   Hidden template indicator characters
========== ===========

Example Usage::

$config['hidden_template_indicator'] = '_';


htaccess_path
-------------------------

Set the server path used by the :doc:`Blacklist/Whitelist
</addons/blacklist/index>` module to :ref:`write rules to your
.htaccess file <blacklist-writing_to_htaccess>`.

========== ===========
Value      Description
========== ===========
``path``   Server path to ``.htaccess`` file.
========== ===========

Example Usage::

$config['htaccess_path'] = '/server/path/to/your/.htaccess/';


.. _image_library_path:

image_library_path
------------------

Set the path to the selected image library.

.. note:: If you choose ImageMagick or NetPBM as the
    :ref:`image_resize_protocol <image_resize_protocol>`, you must
    specify the server path to that image library.

========== ===========
Value      Description
========== ===========
``path``   Path to image library
========== ===========

Example Usage::

$config['image_library_path'] = '/usr/bin/';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> System
Administration --> Image Resizing Preferences`: :ref:`Image Converter
Path <image-converter-path-label>`


.. _image_resize_protocol:

image_resize_protocol
---------------------

Specify the image manipulation library to use. You may need to contact
your web host or sysadmin to determine which protocols are installed and
available on your server.

.. note:: If you choose ImageMagick or NetPBM, you must set
    :ref:`image_library_path <image_library_path>` in the configuration
    as well.

================ ===========
Value            Description
================ ===========
``gd``           GD library
``gd2``          GD2 library
``imagemagick``  ImageMagick library
``netpbm``       NetPBM library
================ ===========

Example Usage::

$config['image_resize_protocol'] = 'netpbm';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> System
Administration --> Image Resizing Preferences`: :ref:`Image Resizing
Protocol <image-resizing-protocol-label>`


.. _is_site_on:

is_site_on
----------

Specify whether the site should be viewable by the general public or
taken offline. This can be helpful when performing maintenance on only
one of several MSM sites.

.. note:: This setting will have no effect unless :doc:`Multiple Site
    Manager </cp/sites/index>` is installed and :ref:`multiple sites are
    enabled <multiple_sites_enabled>`.

.. note:: When used in the main configuration file, :file:`config.php`,
    this setting has the same effect as :ref:`is_system_on
    <is_system_on>` since it will apply to all sites in the system.

========== ========
Value      Behavior
========== ========
``y``      Makes site available to everyone
``n``      Makes site only available to Super Admins
========== ========

Example Usage::

$config['is_site_on'] = 'n';

Also available for use in the site index file, :file:`index.php`.
Example Usage::

$assign_to_config['is_site_on'] = 'n';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> General
Configuration`: Is site on?


.. _is_system_on:

is_system_on
------------

Specify whether the system's front-end should be viewable by the general
public or taken offline. This can be helpful when performing
maintenance.

========== ========
Value      Behavior
========== ========
``y``      Makes system available to everyone
``n``      Makes system only available to Super Admins
========== ========

Example Usage::

$config['is_system_on'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> General
Configuration`: :ref:`Is system on? <general-config-system-on-label>`


license_number
--------------

Specify the software license number. You can find a record of your
license number in your `EllisLab.com account
<https://store.ellislab.com/manage>`__.

.. important:: A properly licensed ExpressionEngine installation
    **must** include a valid license number.

========== ===========
Value      Description
========== ===========
``number`` License number
========== ===========

Example Usage::

$config['license_number'] = '1234-1234-1234-1234';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> General
Configuration`: :ref:`License Number
<general-config-license-number-label>`


.. _lockout_time:

lockout_time
------------

Set the length of time a throttled visitor will be locked out of the
site.

=========== ===========
Value       Description
=========== ===========
``integer`` Length of lockout time in seconds
=========== ===========

Example Usage::

$config['lockout_time'] = '30';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Throttling Preferences`: :ref:`Lockout Time
<throttling-lockout-time-label>`


log_date_format
---------------

Set the timestamp format for all items added to the log file.

========== ===========
Value      Description
========== ===========
``string`` `PHP date format <http://www.php.net/manual/en/function.date.php>`__
========== ===========

Example Usage::

$config['log_date_format'] = 'Y-m-d H:i:s';


log_email_console_msgs
----------------------

Enable logging of all messages sent via the email console in the member
profile pages.

========== ========
Value      Behavior
========== ========
``y``      Enable logging **(default)**
``n``      Disable logging
========== ========

Example Usage::

$config['log_email_console_msgs'] = 'n';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Email
Configuration`: :ref:`Log Email Console Messages
<email-log-console-messages-label>`


log_path
--------

Set the path to the system log directory. Use a full server path with
trailing slash.

========== ========
Value      Behavior
========== ========
``path``   Full server path to system log folder
========== ========

Example Usage::

$config['log_path'] = '/path/to/location/';


log_referrers
-------------

Enable referrer tracking. When enabled, one additional database access
query will be performed for each page load so that the statistics can be
generated.

========== ========
Value      Behavior
========== ========
``y``      Enable referrer tracking **(default)**
``n``      Disable referrers tracking
========== ========

Example Usage::

$config['log_referrers'] = 'n';


log_threshold
-------------

Set an error threshold to determine how much information is logged.

========== ========
Value      Behavior
========== ========
``0``      Disables logging
``1``      Errors (including PHP errors)
``2``      Errors & debug messages
``3``      Errors, debug messages, & informational messages
``4``      All messages
========== ========

Example Usage::

$config['log_threshold'] = '1';


mail_format
-----------

Set the default mail format selection for emails sent via the
Communicate section.

========== ===========
Value      Description
========== ===========
``plain``  Plain Text
``html``   HTML
========== ===========

Example Usage::

$config['mail_format'] = 'plain';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Email
Configuration`: :ref:`Default Mail Format <email-default-format-label>`


mail_protocol
-------------

Set the system's method for sending email.

============ ========
Value        Behavior
============ ========
``mail``     PHP Mail
``smtp``     SMTP
``sendmail`` Sendmail
============ ========

Example Usage::

$config['mail_protocol'] = 'smtp';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Email
Configuration`: :ref:`Email Protocol <email-protocol-label>`


mailinglist_enabled
-------------------

Enable the mailing list.

======= ========
Value   Behavior
======= ========
``y``   Enable mailing list **(default)**
``n``   Disable mailing list
======= ========

Example Usage::

$config['mailinglist_enabled'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Add-Ons --> Modules -->
Mailing List --> Mailing List Preferences`: Mailing List is Enabled


mailinglist_notify
------------------

Enable notification of a given :ref:`recipient list
<mailinglist_notify_emails>` when new subscribers sign up.

======= ========
Value   Behavior
======= ========
``y``   Enable notification
``n``   Disable notification **(default)**
======= ========

Example Usage::

$config['mailinglist_notify'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Add-Ons --> Modules -->
Mailing List --> Mailing List Preferences`: Enable recipient list for
notification of new mailing
list sign-ups


.. _mailinglist_notify_emails:

mailinglist_notify_emails
-------------------------

List of email addresses to notify when new subscribers sign up for the
mailing list.

========== ===========
Value      Description
========== ===========
``string`` Comma-delimited list of email addresses
========== ===========

Example Usage::

$config['mailinglist_notify_emails'] = 'joe@example.com, jane@example.com';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Add-Ons --> Modules -->
Mailing List --> Mailing List Preferences`: Email Address of
Notification Recipient(s)


max_logged_searches
-------------------

Set the maximum number of most recent search terms to save in the
:ref:`search log <enable_search_log>`.

=========== ===========
Value       Description
=========== ===========
``integer`` Maximum number of search terms to save
=========== ===========

Example Usage::

$config['max_logged_searches'] = '500';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> System
Administration --> Search Log Configuration`: :ref:`Maximum number of
recent search terms to save <max-search-save-label>`


.. _max_page_loads:

max_page_loads
--------------

Set the maximum number of times a visitor is allowed to load your web
pages within a given :ref:`time interval <time_interval>` before being
locked out. If you set this preference to 5 page loads within 10
seconds, a user can not browse more than 5 pages within a 10 second
interval or the throttling feature will be triggered, locking them out
for the given :ref:`lockout time <lockout_time>`.

=========== ===========
Value       Description
=========== ===========
``integer`` Maximum number of page loads
=========== ===========

Example Usage::

$config['max_page_loads'] = '10';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Throttling Preferences`: :ref:`Maximum Number of Page Loads
<throttling-max-page-load-label>`


max_tmpl_revisions
------------------

Set the maximum number of template revisions to save if :ref:`template
revisions are enabled <save_tmpl_revisions>`.

=========== ===========
Value       Description
=========== ===========
``integer`` Maximum number of template revisions to save
=========== ===========

Example Usage::

$config['max_tmpl_revisions'] = '10';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Design --> Templates -->
Global Template Preferences`: :ref:`Maximum Number of Revisions to Keep
<global-template-max-revisions-label>`


.. _mbr_notification_emails:

mbr_notification_emails
-----------------------

List of email addresses to notify if :ref:`notification is enabled
<new_member_notification>` for new member registrations.

========== ===========
Value      Description
========== ===========
``string`` Comma-delimited list of email addresses
========== ===========

Example Usage::

$config['mbr_notification_emails'] = 'joe@example.com, jane@example.com';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
:ref:`Email address for notifications
<member-send-notifications-email-label>`


member_theme
------------

Set the default member profile theme.

============ ===========
Value        Description
============ ===========
``theme``    Name of theme directory found in ``themes/profile_themes``
============ ===========

Example Usage::

$config['member_theme'] = 'default';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
:ref:`Default Member Profile Theme <member-default-theme-label>`


memberlist_sort_order
---------------------

Set the default member list sort order.

=========== ========
Value       Behavior
=========== ========
``asc``     Sorts in ascending order
``desc``    Sorts in descending order **(default)**
=========== ========

Example Usage::

$config['memberlist_sort_order'] = 'desc';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
:ref:`Member List - Order <member-list-order-label>`


memberlist_row_limit
--------------------

Set the default number of rows for the member list to display.

=========== ===========
Value       Description
=========== ===========
``integer`` Default number of rows
=========== ===========

Example Usage::

$config['memberlist_row_limit'] = '20';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
:ref:`Member List - Rows <member-list-rows-label>`


memberlist_order_by
-------------------

Set the default sorting criteria for the member list.

================== ========
Value              Behavior
================== ========
``total_posts``    Sorts by Total Posts
``screen_name``    Sorts by Screen Name
``total_comments`` Sorts by Total Comments
``total_entries``  Sorts by Total Entries
``join_date``      Sorts by Join Date
================== ========

Example Usage::

$config['memberlist_order_by'] = 'total_posts';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
:ref:`Member List - Sort By <member-list-rows-label>`


.. _multiple_sites_enabled:

multiple_sites_enabled
----------------------

Enable Multiple Site Manager.

======= ========
Value   Behavior
======= ========
``y``   Enable MSM
``n``   Disable MSM
======= ========

Example Usage::

$config['multiple_sites_enabled'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> General Configuration`:
:doc:`Enable Multiple Site Manager </cp/sites/install>`


.. _name_of_dictionary_file:

name_of_dictionary_file
-----------------------

Filename for the dictionary file. The official dictionary file is
`available for download
<http://ellislab.com/asset/file/dictionary.zip>`__. Must be used in
combination with :ref:`allow_dictionary_pw <allow_dictionary_pw>`.

============ ===========
Value        Description
============ ===========
``filename`` Dictionary file found at :file:`system/expressionengine/config/`
============ ===========

Example Usage::

$config['name_of_dictionary_file'] = 'dictionary.txt';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Security and Sessions`: :ref:`Name of Dictionary File
<dict-passwds-file-label>`


.. _new_member_notification:

new_member_notification
-----------------------

Enables notification of a :ref:`given notification list
<mbr_notification_emails>` for new member registrations.

======= ========
Value   Behavior
======= ========
``y``   Enable notification
``n``   Disable notification **(default)**
======= ========

Example Usage::

$config['new_member_notification'] = 'n';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
:ref:`Send new member notifications <member-send-notifications-label>`


new_posts_clear_caches
----------------------

Set caches to clear when new entries are posted.

.. note:: If disabled, new entries will not appear until the cache
    expires.

======= ========
Value   Behavior
======= ========
``y``   New posts clear cache **(default)**
``n``   New posts do not clear cache
======= ========

Example Usage::

$config['new_posts_clear_caches'] = 'n';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Channel
Administration --> Global Channel Preferences`: :ref:`Clear all caches
when new entries are posted <global-channel-clear-cache-label>`


.. _overrides-newrelic-app-name:

newrelic_app_name
-----------------

Sets the application name that is reported in the New Relic dashboard.
If you're using New Relic to monitor the performance of multiple
ExpressionEngine installations, you'll likely want those installations
to show up separately in your New Relic dashboard.

========== ===========
Value      Description
========== ===========
``string`` Application name
========== ===========

Example Usage::

$config['newrelic_app_name'] = 'My Site';

Also available for use in the site index file, :file:`index.php`, and
the CP index file, :file:`admin.php`. Example Usage::

$assign_to_config['newrelic_app_name'] = 'My Second Site';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> System
Administration --> Output and Debugging`: :ref:`New Relic Application
Name <sysadmin-newrelic_app_name>`


new_version_check
-----------------

Set ExpressionEngine to periodically check for available updates.

======= ========
Value   Behavior
======= ========
``y``   Enable version check **(default)**
``n``   Disable version check
======= ========

Example Usage::

$config['new_version_check'] = 'n';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> General
Configuration`: :ref:`New Version Auto Check
<general-config-new-version-label>`


.. _password_lockout:

password_lockout
----------------

If enabled, the system will lock a member account if more than four
invalid login attempts are made within a :ref:`specified time period
<password_lockout_interval>`. This is designed to deter hackers from
using collision attacks to guess poorly chosen passwords. The account
remains locked for the duration of the password lockout time period.

======= ========
Value   Behavior
======= ========
``y``   Enable password lockouts **(default)**
``n``   Disable password lockouts
======= ========

Example Usage::

$config['password_lockout'] = 'n';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Security and Sessions`: :ref:`Enable Password Lockout
<security-enable-passwd-lockout-label>`


.. _password_lockout_interval:

password_lockout_interval
-------------------------

Set the time period for measuring :ref:`invalid login attempts
<password_lockout>` and locking accounts.

========== ========
Value      Behavior
========== ========
``number`` Lockout interval, in minutes. (Decimals allowed.)
========== ========

Example Usage::

$config['password_lockout_interval'] = '2.5';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Security and Sessions`: :ref:`Time Interval for Lockout
<security-passwd-lockout-int-label>`


path_third_themes
-----------------

Set the path to the :file:`third_party` directory.

========== ===========
Value      Description
========== ===========
``text``   Path to third_party directory
========== ===========

Example Usage::

$config['path_third_themes'] = '/valid/path/to/directory/';


photo_max_height
----------------

Set the maximum height (in pixels) allowed for user-uploaded member
photos.

=========== ===========
Value       Description
=========== ===========
``integer`` Max height (in pixels)
=========== ===========

Example Usage::

$config['photo_max_height'] = '100';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
:ref:`Photo Maximum Height <member-photo-max-height-label>`


photo_max_kb
------------

Set the maximum file size (in kilobytes) allowed for user-uploaded
member photos.

=========== ===========
Value       Description
=========== ===========
``integer`` Max file size (in kilobytes)
=========== ===========

Example Usage::

$config['photo_max_kb'] = '50';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
:ref:`Photo Maximum Size (in Kilobytes)
<member-photo-max-size-kb-label>`


photo_max_width
---------------

Set the maximum width (in pixels) allowed for user-uploaded member
photos.

=========== ===========
Value       Description
=========== ===========
``integer`` Max width (in pixels)
=========== ===========

Example Usage::

$config['photo_max_width'] = '150';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
:ref:`Photo Maximum Width <member-photo-max-width-label>`


photo_path
----------

Set the server path to the member photo directory.

========= ===========
Value     Description
========= ===========
``path``  Full server path to writable member photo directory
========= ===========

Example Usage::

$config['photo_path'] = '/path/images/member_photos/';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
:ref:`Server Path to Photo Folder <member-photo-max-width-label>`


photo_url
---------

Set the URL to the member photo directory.

========= ===========
Value     Description
========= ===========
``URL``   URL to member photo directory
========= ===========

Example Usage::

$config['photo_url'] = 'http://example.com/images/member_photos/';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
:ref:`URL to Photos Folder <member-photo-max-width-label>`


popup_link
----------

Specify whether links created by the :doc:`Typography class
</development/usage/typography>` open in a new window.

======= ========
Value   Behavior
======= ========
``y``   Links automatically open in new window
``n``   Links do not automatically open in new window **(default)**
======= ========

Example Usage::

$config['popup_link'] = 'y';


profile_trigger
---------------

Set the triggering word for the front-end members section. The default
is "member", and the word you set cannot be the name of an existing
template group.

========== ===========
Value      Description
========== ===========
``text``   Profile triggering word
========== ===========

Example Usage::

$config['profile_trigger'] = 'accounts';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
:ref:`Profile Triggering Word <profile-trigger-word-label>`


protect_javascript
------------------

Prevents the advanced conditionals parser from processing anything
inside ``<script>`` tags.

========== ========
Value      Behavior
========== ========
``y``      Enable **(default)**
``n``      Disable
========== ========

Example Usage::

$config['protect_javascript'] = 'n';


proxy_ips
---------

Whitelist of reverse proxy servers that may forward the visitor's IP
address.

================ ===========
Value            Description
================ ===========
``IP addresses`` Comma-delimited list of IP addresses
================ ===========

Example Usage::

$config['proxy_ips'] = '10.0.1.25, 10.0.1.26';


pw_min_len
----------

Set the minimum character length allowed for member passwords.

=========== ===========
Value       Description
=========== ===========
``integer`` Minimum character length
=========== ===========

Example Usage::

$config['pw_min_len'] = '8';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Security and Sessions`: :ref:`Minimum Password Length
<profile-trigger-word-label>`


publish_page_title_focus
------------------------

Specify whether the title field should gain focus when the publish page
is loaded.

========== ========
Value      Behavior
========== ========
``y``      Title field gains focus when the publish page is loaded **(default)**
``n``      Title field does not gain focus when the publish page is loaded
========== ========

Example Usage::

$config['publish_page_title_focus'] = 'n';


recount_batch_total
-------------------

Set the batch size for recounting statistics.

Because the recounting of statistics can impose some load on your
server, the recounting is performed in batches. This setting allows you
to define how large each processing batch should be. For most servers, a
value of 1000 works well. For high-performance or dedicated servers you
can increase this number and if your server is low on resources you may
need to lower the number.

=========== ===========
Value       Description
=========== ===========
``integer`` Batch size
=========== ===========

Example Usage::

$config['recount_batch_total'] = '200';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Tools --> Data --> Recount
Statistics --> Recount Preferences`: Total number of database rows
processed per batch


redirect_method
---------------

Set the method the system uses for page redirection.

============ ========
Value        Behavior
============ ========
``redirect`` Use ``header('Location: http://www.example.com/');`` **(default)**
``refresh``  Use ``header('Refresh: 0;url=http://www.example.com/');`` (Windows servers) (slower)
============ ========

Example Usage::

$config['redirect_method'] = 'redirect';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> System
Administration --> Output and Debugging`: :ref:`Redirection Method
<output-debug-redirect-method-label>`


redirect_submitted_links
------------------------

Apply rank denial to user-submitted links. This feature rewrites links
submitted in comments so they first point to an intermediate redirect
page, helping deter comment spammers by preventing linked sites from
gaining a search engine page rank advantage.

========== ========
Value      Behavior
========== ========
``y``      Enable rank denial
``n``      Disable rank denial **(default)**
========== ========

Example Usage::

$config['redirect_submitted_links'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Security and Sessions`: :ref:`Apply Rank Denial to
User-submitted Links <security-apply-rank-denial-label>`


relaxed_track_views
-------------------

Allow :doc:`Entry Views Tracking </addons/channel/entry_tracking>` to
work for ANY combination that results in only one entry being returned
by the tag, including Channel query caching.

========== ========
Value      Behavior
========== ========
``y``      Enable relaxed Entry Views Tracking
``n``      Disable relaxed Entry Views Tracking **(default)**
========== ========

Example Usage::

$config['relaxed_track_views'] = 'y';


remove_close_all_button
-----------------------

Remove the button to close all HTML tags from the publish page and
user-side HTML formatting buttons. Most browsers no longer need it.

========== ========
Value      Behavior
========== ========
``y``      Remove the close all button
``n``      Display the close all button **(default)**
========== ========

Example Usage::

$config['remove_close_all_button'] = 'y';


remove_unparsed_vars
--------------------

Remove unparsed ExpressionEngine variables upon output when the
:ref:`debug <overrides-debug>` has been set to ``0``.

========== ========
Value      Behavior
========== ========
``y``      Remove unparsed ExpressionEngine variables
``n``      Leave unparsed ExpressionEngine variables untouched **(default)**
========== ========

Example Usage::

$config['remove_unparsed_vars'] = 'y';


req_mbr_activation
------------------

Specify whether new member activation is automatic, requires email
verification, or requires an administrator's approval.

========== ===========
Value      Behavior
========== ===========
``none``   Automatically activate new member accounts
``email``  Require email verification for new member accounts
``manual`` Require administrator's approval
========== ===========

Example Usage::

$config['req_mbr_activation'] = 'none';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
:ref:`Require Member Account Activation
<member-account-activation-label>`


.. _require_ip_for_login:

require_ip_for_login
--------------------

Require users have a valid IP address and browser user agent when
logging in. This helps prevent hackers from logging in using direct
socket connections or trying to access the system with a masked IP
address.

========== ========
Value      Behavior
========== ========
``y``      Require IP address and user agent for login **(default)**
``n``      Do not require IP address and user agent for login
========== ========

Example Usage::

$config['require_ip_for_login'] = 'n';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Security and Sessions`: :ref:`Require IP Address and User
Agent for Login <require-ip-logins-label>`


require_ip_for_posting
----------------------

Require users have a valid IP address and browser user agent when
posting comments or Channel Form entries.

========== ========
Value      Behavior
========== ========
``y``      Require IP address and user agent for posting **(default)**
``n``      Do not require IP address and user agent for posting
========== ========

Example Usage::

$config['require_ip_for_posting'] = 'n';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Security and Sessions`: :ref:`Require IP Address and User
Agent for posting <require-ip-posting-submit-comments-label>`


require_secure_passwords
------------------------

Require users' passwords to contain at least one uppercase character,
one lowercase character, and one numeric character. Passwords that
follow this basic formula are much more difficult to guess.

========== ========
Value      Behavior
========== ========
``y``      Require secure password **(default)**
``n``      Do not require secure passwords
========== ========

Example Usage::

$config['require_secure_passwords'] = 'n';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Security and Sessions`: :ref:`Require Secure Passwords
<security-require-secure-passwords-label>`


require_terms_of_service
------------------------

Require new members to agree to your terms of service upon registration.

========== ========
Value      Behavior
========== ========
``y``      Require TOS **(default)**
``n``      Do not require TOS
========== ========

Example Usage::

$config['require_terms_of_service'] = 'n';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Member --> Preferences`:
:ref:`Require Terms of Service <member-require-tos-label>`


reserved_category_word
----------------------

If :ref:`use_category_name <use_category_name>` is enabled, specify a
word to use in category URLs to indicate to the system that the
following segment is the category URL title. For example, if the
indicator is set to "category" and the category URL title is
"blogging"::

    http://example.com/index.php/site/category/blogging/

The word you set cannot be
the name of an existing template group or template.

========== ========
Value      Description
========== ========
``text``   Category URL indicator
========== ========

Example Usage::

$config['reserved_category_word'] = 'category';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Channel
Administration --> Global Channel Preferences`: :ref:`Category URL
Indicator <global-channel-category-url-indicator-label>`


rte_default_toolset_id
----------------------

Set the default RTE toolset shown for any member that has not
specifically chosen one in Rich Text Editor Preferences.


============== ===========
Value          Description
============== ===========
``toolset ID`` Default RTE toolset ID
============== ===========

Example Usage::

$config['rte_default_toolset_id'] = '2';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Add-Ons --> Modules --> Rich
Text Editor`: :ref:`Default Toolset
<global-channel-category-url-indicator-label>`


rte_enabled
-----------

If enabled, the Rich Text Editor will be applied to any *Textarea (Rich
Text)* Channel Field. Otherwise, the field will appear as a normal
textarea instead.

========== ========
Value      Behavior
========== ========
``y``      Enable RTE **(default)**
``n``      Disable RTE and show normal textarea
========== ========

Example Usage::

$config['rte_enabled'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Add-Ons --> Modules --> Rich
Text Editor`: :ref:`Enable Rich Text Editor
<global-channel-category-url-indicator-label>`


save_tmpl_files
---------------
:ref:`Save templates as files
<global-template-save-templates-as-files-label>` determines whether your
Templates are saved to files in addition to the datbase, allowing easy
editing via the editor of your choice. See Saving Templates as Text
Files for more information.

========== ========
Value      Behavior
========== ========
``y``      Templates are saved as files
``n``      Default value, templates are not saved as files
========== ========

Example Usage::

$config['save_tmpl_files'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Design --> Templates -->
Global Template Preferences`: Save Templates as Files


.. _save_tmpl_revisions:

save_tmpl_revisions
-------------------
If :ref:`Save Template Revisions
<global-template-save-templates-revisions-label>` is set to "y", then
any changes you make to one of your Templates will be saved. This allows
you to keep a record of all changes made so that you can easily revert
back to an earlier version of a Template if you need to do so.

========== ========
Value      Behavior
========== ========
``y``      Templates revisions are saved
``n``      Default value, templates revisions are not saved
========== ========

Example Usage::

$config['save_tmpl_revisions'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Design --> Templates -->
Global Template Preferences`: Save Template Revisions


send_headers
------------
:ref:`Generate HTTP Page Headers <generate-http-headers-label>` setting
determines whether or not the server should automatically send HTTP page
headers when it serves the pages to a user. Setting this preference to
"Yes" causes headers to be explicitly sent by the server. Sending
explicit headers is generally considered to be a good practice, although
in some cases it can cause some problems.

========== ========
Value      Behavior
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
positive integer to correct a server clock that is too slow, and a
negative integer to correct a server clock that is too fast.

.. warning:: This preference permanently changes the value of timestamps
    as they are being written to the database. Changing this setting
    later on will not undo the offset already applied to existing
    timestamps. Rather than using this setting, we strongly urge you to
    work with your web host or sysadmin to correct the inaccurate server
    clock. In almost all cases, that's the best solution.

=========== ========
Value       Behavior
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
Value      Behavior
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
Value      Behavior
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
Value      Behavior
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
Value      Behavior
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
Value      Behavior
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
Value      Behavior
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
Value      Behavior
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
Value      Behavior
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
Value      Behavior
========== ========
``number`` Sets the maximum number of characters allowed within a member's signature
========== ========

Example Usage::

$config['sig_maxlength'] = '500';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Members --> Preferences`:
Maximum number of characters per signature


.. _overrides-site-404:

site_404
--------
The :ref:`404 page <global-template-404-label>` determines which
template should be displayed when someone tries to access an invalid
URL.

================================ ========
Value                            Behavior
================================ ========
``template_group/template_name`` Sets which template should be displayed when someone tries to access an invalid URL
================================ ========

Example Usage::

$config['site_404'] = 'site/404';

Also available for use in the site index file, :file:`index.php`.
Example Usage::

$assign_to_config['site_404'] = 'site/notfound';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Design --> Templates -->
Global Template Preferences`: 404 Page


site_description
----------------
Sets the site description.

========== ========
Value      Behavior
========== ========
``text``   Sets site description
========== ========

Example Usage::

$config['site_description'] = 'This is a website';


.. _overrides-site-index:

site_index
----------
:ref:`Name of your site's index page <general-config-index-name-label>`
is the filename of your site's "index" page. By default, this will be
index.php, which is located in the base folder. You will only need to
alter this setting if you have changed the filename or you want to
:doc:`remove index.php from your site's URLs</urls/remove_index.php>`.

============ ========
Value        Behavior
============ ========
``filename`` Sets the name of your site's index page
============ ========

Example Usage::

$config['site_index'] = 'coolpage.php';

Also available for use in the site index file, :file:`index.php`.
Example Usage::

$assign_to_config['site_index'] = 'secondsite.php';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> General
Configuration`: Name of your site's index page


.. _overrides-site-name:

site_name
---------
Sets the short name of the website. The site created upon
ExpressionEngine installation is called ``default_site`` by default, so
this is typically only helpful for additional sites in :doc:`MSM-enabled
installations </cp/sites/createsite>`.

========== ========
Value      Behavior
========== ========
``text``   Sets site short name
========== ========

Available for use only in the site index file, :file:`index.php`, and
the CP index file, :file:`admin.php`. Example Usage::

$assign_to_config['site_name'] = 'domain2_short_name';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Site Name --> Edit Sites -->
Create New Site`: Site Short Name


.. _overrides-site-url:

site_url
--------

Sets the full URL to the site's web root.

========== ========
Value      Behavior
========== ========
``text``   Sets the value for the full URL to the site's web root
========== ========

Example Usage::

$config['site_url'] = 'http://example.com';

Also available for use in the site index file, :file:`index.php`.
Example Usage::

$assign_to_config['site_url'] = 'http://domain2.com';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> General Configuration`: URL to the root directory of your site


smart_static_parsing
--------------------
When enabled, parsing of embedded templates that are not set to the
template type "Static" will still be parsed as static if they can be
(i.e. if they have no PHP or ExpressionEngine tags in them). This
setting is enabled by default.

========== ========
Value      Behavior
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
Value      Behavior
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
Value      Behavior
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
Value      Behavior
========== ========
``number`` Specifies which port to use for SMTP
========== ========

Example Usage::

$config['smtp_port'] = '2525';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Email
Configuration`: SMTP Server Port


smtp_username
-------------
:ref:`SMTP Username <email-smtp-username-label>` When using SMTP as
your mail protocol, this sets the username ExpressionEngine will use to
authenticate with the SMTP server.

========== ========
Value      Behavior
========== ========
``text``   Specifies the SMTP username
========== ========

Example Usage::

$config['smtp_username'] = 'joe@example.com';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Email
Configuration`: SMTP Username


spellcheck_language_code
------------------------
Allows you to specify the language used in the spellchecking functions.
Set the value to the two letter ISO 639 language code for the spellcheck
(ex: en, es, de)

========== ========
Value      Behavior
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
Value      Behavior
========== ========
``text``   Sets the subclass prefix
========== ========

Example Usage::

$config['subclass_prefix'] = 'EE_';


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
Value      Behavior
========== ========
``y``      Enables template debugging
``n``      Default value, disables template debugging
========== ========

Example Usage::

$config['template_debugging'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> System
Administration --> Output and Debugging`: Display Template Debugging


.. _overrides-template:

template
--------
Sets the default template. Must be used with :ref:`template_group
<overrides-template-group>`, and the two overrides together set the
template group and template shown on the front-end when the site is
loaded without anything in the :doc:`URL segments
</templates/globals/url_segments>`.

========== ========
Value      Behavior
========== ========
``text``   Sets the default template
========== ========

Example Usage::

$config['template'] = 'index';

Also available for use in the site index file, :file:`index.php`.
Example Usage::

$assign_to_config['template'] = 'index';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Design --> Templates -->
Template Manager --> Edit Template Group`: Make the index template in
this group your site's home page?

.. _overrides-template-group:

template_group
--------------
Sets the default template group. Must be used with :ref:`template
<overrides-template>`, and the two overrides together set the template
group and template shown on the front-end when the site is loaded
without anything in the :doc:`URL segments
</templates/globals/url_segments>`.

========== ========
Value      Behavior
========== ========
``text``   Sets the default template group
========== ========

Example Usage::

$config['template_group'] = 'about';

Also available for use in the site index file, :file:`index.php`.
Example Usage::

$assign_to_config['template_group'] = 'site_2';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Design --> Templates -->
Template Manager --> Edit Template Group`: Make the index template in
this group your site's home page?


theme_folder_path
-----------------
:ref:`Theme Folder Path <general-config-theme-path-label>` is the server
path to the "themes" folder.

========== ========
Value      Behavior
========== ========
``text``   Sets the server path to the "themes" folder.
========== ========

Example Usage::

$config['theme_folder_path'] = '/home/usr/domain.com/public_html/themes/';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> General
Configuration`: Theme Folder Path


third_party_path
----------------
With the third_party_path config variable, you can keep your third_party
folders completely out of the system/ and themes/ directory, which will
make upgrading easier.

========== ========
Value      Behavior
========== ========
``text``   Sets the path to your third party folders.
========== ========

Example Usage::

$config['third_party_path'] = '/path/to/third_party/folders/';


.. _time_interval:

time_interval
-------------

Set the time interval for measuring the :ref:`number of page loads
<max_page_loads>` that will trigger throttling. If you set this
preference to 5 page loads within 10 seconds, a user can not browse more
than 5 pages within a 10 second interval or the throttling feature will
be triggered, locking them out for the given :ref:`lockout time
<lockout_time>`.

=========== ===========
Value       Description
=========== ===========
``integer`` Time interval in seconds
=========== ===========

Example Usage::

$config['max_page_loads'] = '10';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Throttling Preferences`: :ref:`Time Interval
<throttling-time-interval-label>`


tmpl_file_basepath
------------------
:ref:`Theme Folder Path <general-config-theme-path-label>`  is the
server path (not URL) to the folder that holds the Template files.

========== ========
Value      Behavior
========== ========
``text``   Sets the server path to the folder that holds the Template files
========== ========

Example Usage::

$config['tmpl_file_basepath'] = '/home/usr/domain.com/system/expressionengine/templates/';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Design --> Templates -->
Template Preferences`: Server path to site's templates


un_min_len
----------
:ref:`Minimum Username Length <security-min-username-label>`  is the
minimum length required for a member username during new member
registration. Specify the minimum number of characters required.

========== ========
Value      Behavior
========== ========
``number`` Sets the minimum length required for a member username during new member registration
========== ========

Example Usage::

$config['un_min_len'] = '5';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Security and Sessions`: Server path to site's templates


uri_protocol
------------
This item determines which server global should be used to retrieve the
URI string.  The default setting of "AUTO" works for most servers. If
your links do not seem to work, try one of the other delicious flavors.

=================== ========
Value               Behavior
=================== ========
``auto``            Default value, auto detects
``PATH_INFO``       Uses the PATH_INFO
``QUERY_STRING``    Uses the QUERY_STRING
``REQUEST_URI``     Uses the REQUEST_URI
``ORIG_PATH_INFO``  Uses the ORIG_PATH_INFO
=================== ========

Example Usage::

$config['uri_protocol'] = 'PATH_INFO';


un_min_len
----------
:ref:`Minimum Username Length <security-min-username-label>` is the
minimum length required for a member username during new member
registration. Specify the minimum number of characters required.

========== ========
Value      Behavior
========== ========
``number`` Sets the minimum length required for a member username during new member registration
========== ========

Example Usage::

$config['un_min_len'] = '5';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Security and Sessions`: Server path to site's templates


url_third_themes
-----------------
Overrides the third_party URL so you can move your third_party directory
outside of your system directory.

========== ========
Value      Behavior
========== ========
``text``   Sets URL to third_party directory
========== ========

Example Usage::

$config['url_third_themes'] = 'http://www.example.com/third_party/';


.. _use_category_name:

use_category_name
-----------------


webmaster_email
---------------
Sets the Webmaster's email address.

========== ========
Value      Behavior
========== ========
``text``   Sets the webmaster's email address
========== ========

Example Usage::

$config['webmaster_email'] = 'joe@example.com';


webmaster_name
--------------
Sets the Webmaster's email address.

========== ========
Value      Behavior
========== ========
``text``   Sets the webmaster's name
========== ========

Example Usage::

$config['webmaster_name'] = 'Joe';


website_session_ttl
-------------------

Set the session length for members logging in through the front-end.

.. note:: This is effectively irrelevant if the member chooses the
    :ref:`auto-login option <if-auto-login>` on the login page.

=========== ===========
Value       Description
=========== ===========
``integer`` Front-end session length in seconds
=========== ===========

Example Usage::

$config['website_session_ttl'] = '600';

.. versionchanged:: 2.8

   Variable was changed from ``user_session_ttl`` to
   ``website_session_ttl``.


website_session_type
--------------------
:ref:`Website Session Type <website-session-type-label>` determines how
sessions are handled on the front-end of the site. You may use cookies,
session IDs, or a combination.

====== ========
Value  Behavior
====== ========
``c``  Sets the User Session to use cookies only
``s``  Sets the User Session to use Session ID only
``cs`` Sets the User Session to use Cookies and Session ID
====== ========

Example Usage::

 $config['website_session_type'] = 's';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Admin --> Security and
Privacy --> Security and Sessions`: Website Session Type

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
Value          Behavior
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
Value          Behavior
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
Value      Behavior
========== ========
``text``   Pipe delimeted list of member IDs
========== ========

Example Usage::

$config['xss_clean_member_exception'] = '3|14|83';


xss_clean_member_group_exception
--------------------------------
Sets the member IDs to exclude XSS cleaning on.

========== ========
Value      Behavior
========== ========
``text``   Pipe delimited list of member group IDs
========== ========

Example Usage::

$config['xss_clean_member_group_exception'] = '2|5';
