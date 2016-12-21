System Configuration Overrides
******************************

.. highlight:: php

.. warning:: This article covers advanced topics.

By default, ExpressionEngine's system settings are managed in the
Control Panel and stored in the database, but these settings can be
overridden with one of 3 configuration files: the main configuration
file, the site index file, and the CP index file.

The **main configuration file**, found at
:file:`system/user/config/config.php`, is loaded every time
the system is run, meaning that config overrides set in
:file:`config.php` always affect the system's configuration.


.. _site_index_file:

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


.. _cp_index_file:

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


Overrides
=========

.. contents::
    :local:


allow_avatar_uploads
--------------------

Set whether members can upload their own avatar.

======== ===========
Value    Behavior
======== ===========
``y``    Allow members to upload their own avatar
``n``    Do not allow members to upload their own avatar **(default)**
======== ===========

Example Usage::

$config['allow_avatar_uploads'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Settings --> Avatar Settings`:
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

**Also found in CP:** :menuselection:`Settings --> Security & Privacy`:
:ref:`Allow Dictionary Words as Passwords <dict-passwds-label>`


allow_extensions
----------------

Set whether extensions are enabled in the system. Disabling extensions
will *not* uninstall extensions.

======== ===========
Value    Behavior
======== ===========
``y``    Enable all extensions **(default)**
``n``    Disable all extensions
======== ===========

Example Usage::

$config['allow_extensions'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Utilities --> Debug Extensions`:
:doc:`Disable Extensions? </cp/utilities/extensions/>`


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

**Also found in CP:** :menuselection:`Settings --> Members`: :ref:`Allow members to set their own
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

**Also found in CP:** :menuselection:`Settings --> Members`:
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

**Also found in CP:** :menuselection:`Settings --> Security & Privacy`: :ref:`Allow multiple log-ins from a
single account <allow-multi-logins-label>`


.. _overrides-allow-pending-login:

allow_pending_login
-------------------

Set whether members of the Pending member group can log in or not.
By default, Pending members cannot log in.

======== ===========
Value    Behavior
======== ===========
``y``    Allow Pending member log in
``n``    Do not allow Pending members to log in **(default)**
======== ===========

Example Usage::

$config['allow_pending_login'] = 'y';


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

.. .. rst-class:: cp-path
..
.. **Also found in CP:** :menuselection:`Members --> Preferences`:
.. :ref:`Allow Users to have Signatures <allow-member-sigs-label>`


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

**Also found in CP:** :menuselection:`Settings --> Security & Privacy`: :ref:`Allow members to change their
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

**Also found in CP:** :menuselection:`Settings --> Content & Design`: :ref:`Auto-Assign
Category Parents <auto-assign-category-parents-label>`


autosave_interval_seconds
-------------------------

Set the interval between autosaves on the Publish Page.

=========== ===========
Value       Description
=========== ===========
``integer`` Autosave interval in seconds **(default is 60)**
=========== ===========

Example Usage::

$config['autosave_interval_seconds'] = '30';


autosave_prune_hours
--------------------

Set the age at which Channel Entry autosaves are automatically deleted.

=========== ===========
Value       Description
=========== ===========
``integer`` Pruning age in hours **(default is 6)**
=========== ===========

Example Usage::

$config['autosave_prune_hours'] = '4';


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

**Also found in CP:** :menuselection:`Settings --> Avatars`:
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

**Also found in CP:** :menuselection:`Settings --> Avatars`:
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

**Also found in CP:** :menuselection:`Settings --> Avatars`:
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

**Also found in CP:** :menuselection:`Settings --> Avatars`:
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

**Also found in CP:** :menuselection:`Settings --> Avatars`:
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

.. .. rst-class:: cp-path
..
.. **Also found in CP:** :menuselection:`Members --> User Banning`:
.. :ref:`When a banned IP tries to access the site
.. <member-banned-ip-label>`


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

.. .. rst-class:: cp-path
..
.. **Also found in CP:** :menuselection:`Members --> User Banning`:
.. :ref:`When a banned IP tries to access the site
.. <member-banned-ip-label>`


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

.. .. rst-class:: cp-path
.. **Also found in CP:** :menuselection:`Members --> User Banning`: :ref:`When a banned IP tries to access the site <member-banned-ip-label>`


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

**Also found in CP:** :menuselection:`Settings --> Access Throttling`: :ref:`Deny Access if No IP Address
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

**Also found in CP:** :menuselection:`Settings --> Access Throttling`: :ref:`Custom Message
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

**Also found in CP:** :menuselection:`Settings --> Access Throttling`: :ref:`Action to Take
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

**Also found in CP:** :menuselection:`Settings --> Access Throttling`: :ref:`URL for Redirect
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

**Also found in CP:** :menuselection:`Members --> Manage Bans`:
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

**Also found in CP:** :menuselection:`Members --> Manage Bans`:
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

**Also found in CP:** :menuselection:`Members --> Manage Bans`:
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

**Also found in CP:** :menuselection:`Members --> Manage Bans`:
:ref:`Restricted Usernames <member-banned-username-label>`


base_path
---------

Set your site's base server path for use in other path configurations. Once set,
this value is made available via a ``{base_path}`` variable that can be placed
in server path fields in the control panel for easy environment management.

================ ===========
Value            Description
================ ===========
``path``         Server path, typically to your site's root
================ ===========

Example Usage::

$config['base_path'] = '/var/www/html/';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Settings --> URL and Path Settings`:
:ref:`Default base path <general-config-base-path-label>`

base_url
--------

Set your site's base URL for use in other URL configurations. Once set, this
value is made available via a ``{base_url}`` variable that can be placed in
other URL configuration fields in the control panel for easy environment
management.

================ ===========
Value            Description
================ ===========
``URL``          URL to your site
================ ===========

Example Usage::

$config['base_url'] = 'http://example.com';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Settings --> URL and Path Settings`:
:ref:`Default base URL <general-config-base-url-label>`

.. _cache_driver_config:

cache_driver
------------

Specify a different :ref:`caching driver <caching_drivers>` to use.

============= ===========
Values        Description
============= ===========
``file``      File driver, ``/system/user/cache/`` **(default)**
``memcached`` Memcached driver, configured with `memcached`_ config
``redis``     Redis driver, configured with `redis`_ config
``dummy``     Dummy driver, will not cache
============= ===========

Example Usage::

$config['cache_driver'] = 'memcached';

.. _cache_driver_backup_config:

cache_driver_backup
-------------------

Specify a backup :ref:`caching driver <caching_drivers>` to use in case
the one specified in `cache_driver`_ isn't available. Same values
accepted and same default as `cache_driver`_.

Example Usage::

$config['cache_driver_backup'] = 'file';


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

**Also found in CP:** :menuselection:`Settings --> CAPTCHA`: :ref:`Use TrueType Font for CAPTCHA
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

**Also found in CP:** :menuselection:`Settings --> CAPTCHA`: :ref:`Server Path to CAPTCHA Folder
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

**Also found in CP:** :menuselection:`Settings --> CAPTCHA`: :ref:`Add Random Number to CAPTCHA
Word <captcha-add-random-number>`


captcha_require_members
-----------------------

Specify whether to require logged-in members to pass CAPTCHA validation
to submit front-end forms, such as Channel Form, comment forms and email
forms.

====== ========
Value  Behavior
====== ========
``y``  Require logged-in members pass CAPTCHA validation
``n``  Do not require logged-in members to pass CAPTCHA validation **(default)**
====== ========

Example Usage::

$config['captcha_require_members'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Settings --> CAPTCHA`:
:ref:`Require CAPTCHA with logged-in
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

**Also found in CP:** :menuselection:`Settings --> CAPTCHA`: :ref:`Full URL to CAPTCHA Folder
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

**Also found in CP:** :menuselection:`Settings --> Word Censoring`: :ref:`Censoring Replacement Word
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

**Also found in CP:** :menuselection:`Settings --> Word Censoring`: :ref:`Censored Words <censor-words-label>`


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


.. _code_block_wrappers:

code_block_pre
--------------

Custom markup to use wrap ``[code]`` blocks, works with ``code_block_post`` below to wrap the standard ``<pre><code>...</code></pre>`` with your custom markup.

================== ===========
Value              Description
================== ===========
``code_block_pre`` Markup to prepend to code blocks.
================== ===========

Example Usage::

$config['code_block_pre'] = '<div class="codeblock">';
$config['code_block_post'] = '</div>';

code_block_post
---------------

Custom markup to use wrap ``[code]`` blocks, works with ``code_block_pre`` above to wrap the standard ``<pre><code>...</code></pre>`` with your custom markup.

=================== ===========
Value               Description
=================== ===========
``code_block_post`` Markup to append to code blocks.
=================== ===========

Example Usage::

$config['code_block_pre'] = '<div class="codeblock">';
$config['code_block_post'] = '</div>';

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

**Also found in CP:** :menuselection:`Settings --> Comment Settings`: :ref:`Comment Editing Time Limit <comment-editing-time-label>`


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

**Also found in CP:** :menuselection:`Settings --> Comment Settings`: :ref:`Moderate expired entries
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

**Also found in CP:** :menuselection:`Settings --> Comment Settings`: :ref:`Force word censoring for comments
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

**Also found in CP:** :menuselection:`Settings --> Security &
Privacy`: :ref:`Cookie Domain <cookie-domain-label>`


.. _cookie_httponly_config:

cookie_httponly
---------------

Set the HttpOnly flag when setting a cookie. The HttpOnly flag is a
security feature for cookies that prevents a client side script from
accessing or deleting the cookie (if the browser supports it, as most
modern browsers do). `Learn more.
<https://www.owasp.org/index.php/HttpOnly>`__

======== ===========
Value    Behavior
======== ===========
``y``    Set HttpOnly flag **(default)**
``n``    Do not set HttpOnly flag
======== ===========

Example Usage::

$config['cookie_httponly'] = 'n';



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

**Also found in CP:** :menuselection:`Settings --> Security &
Privacy`: :ref:`Cookie Path <cookie-path-label>`


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

**Also found in CP:** :menuselection:`Settings --> Security &
Privacy`: :ref:`Cookie Prefix <cookie-prefix-label>`


cookie_secure
-------------

Require a secure connection (HTTPS) for ExpressionEngine to set cookies.

========== ========
Value      Behavior
========== ========
``y``      Require a secure connection to set cookies
``n``      Do not require a secure connection to set cookies **(default)**
========== ========

Example Usage::

$config['cookie_secure'] = 'y';


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
``cs`` Use both cookies and session ID **(default)**
====== ========

Example Usage::

 $config['cp_session_type'] = 's';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Settings --> Security &
Privacy`: :ref:`Control Panel Session Type
<cp-session-type-label>`

.. versionchanged:: 2.8

   Variable was changed from ``admin_session_type`` to
   ``cp_session_type``.


.. _overrides-cp-url:

cp_url
------

Set the full URL to your Control Panel.

========== ===========
Value      Description
========== ===========
``URL``    The full URL to your Control Panel
========== ===========

Example Usage::

$config['cp_url'] = 'http://example.com/admin.php';

Also available for use in the :ref:`site index file <site_index_file>`,
:file:`index.php`, and the :ref:`CP index file <cp_index_file>`,
:file:`admin.php`. Example Usage::

$assign_to_config['cp_url'] = 'http://domain2.com/admin.php';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Settings --> URL and Path Settings`:
:ref:`URL to your Control Panel index page
<general-config-url-cp-label>`


date_format
-----------

Set the default format for displaying dates. If
`allow_member_localization`_ is enabled and a member has their own
localization preference set, that will override this setting.

========== ===========
Value      Description
========== ===========
``code``   Format string using :ref:`date formatting codes <date-formatting-codes>`
========== ===========

Example Usage::

$config['date_format'] = '%F %d %Y';


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

**Also found in CP:** :menuselection:`Settings --> Debugging & Output`: :ref:`Debug Preference
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

**Also found in CP:** :menuselection:`Settings --> Members`:
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

**Also found in CP:** :menuselection:`Settings --> General Settings`: :ref:`Site Timezone <sysadmin-site-timezone-label>`


deft_lang
---------

Set the default language. ExpressionEngine ships with English, and
additional :doc:`language packs </general/languages>` are available for
download.

============ ===========
Value        Description
============ ===========
``language`` Name of language directory found in ``system/user/language/``
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

**Also found in CP:** :menuselection:`Settings --> Security & Privacy`: :ref:`Deny Duplicate Data
<deny-duplicate-data-label>`


disable_all_tracking
--------------------

This is an emergency override which will disable all tracking when enabled. This is useful for server administrators who need a way to respond immediately to a traffic spike to help keep the site running smoothly.

.. note:: Hit tracking features are disabled by default, so if you have not intentionally enabled them, you can ignore this setting. It is only useful if you have enabled :doc:`Hit Tracking </cp/settings/hit-tracking>` and can't access your control panel to disable them. In that rare instance, you can add this to your ``config.php`` file as an emergency override.

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
``y``      Disable CSRF protection
``n``      Enable CSRF protection **(default)**
========== ========

Example Usage::

$config['disable_csrf_protection'] = 'y';


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

**Also found in CP:** :menuselection:`Settings --> Hit Tracking`: :ref:`Suspend ALL tracking when number of
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

.. .. rst-class:: cp-path
..
.. **Also found in CP:** :menuselection:`Admin --> Email
.. Configuration`: :ref:`Number of Emails Per Batch
.. <email-number-per-batch-label>`


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

.. .. rst-class:: cp-path
..
.. **Also found in CP:** :menuselection:`Admin --> Email
.. Configuration`: :ref:`Use Batch Mode <email-use-batch-mode-label>`


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

**Also found in CP:** :menuselection:`Settings --> Outgoing Email`: :ref:`Email Character Encoding
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

.. .. rst-class:: cp-path
..
.. **Also found in CP:** :menuselection:`Admin --> Email
.. Configuration`: :ref:`Email Console Timelock
.. <email-console-timelock-label>`


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

$config['email_crlf'] = "\r\n";

.. note:: Double quotes must be used around this value, as per example.


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

$config['email_newline'] = "\r\n";

.. note:: Double quotes must be used around this value, as per example.


email_smtp_crypto
-----------------

Cryptographic protocol (Secure Sockets Layer or Transport Layer Security
allowed) for SMTP, when a secure connection is required.

========== ========
Value      Behavior
========== ========
``ssl``    Set the SMTP protocol to SSL
---------- --------
``tls``    Set the SMTP protocol to TLS
========== ========

Example Usage::

$config['email_smtp_crypto'] = 'tls';


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

**Also found in CP:** :menuselection:`Settings --> Content & Design`: :ref:`URL to the folder
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

**Also found in CP:** :menuselection:`Settings --> Avatar Settings`:
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

**Also found in CP:** :menuselection:`Settings --> Word Censorship`: :ref:`Enable Word Censoring
<censor-words-enable-label>`


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

**Also found in CP:** :menuselection:`Settings --> Content & Design`: :ref:`Display Smileys
<emoticon-display-smileys-label>`


enable_entry_view_tracking
--------------------------

If enabled, the :doc:`Entry "Views" Tracking Tag
</channel/entry_tracking>` feature of the Channel module is
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

**Also found in CP:** :menuselection:`Settings --> Hit Tracking`: :ref:`Enable Channel Entry View
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

**Also found in CP:** :menuselection:`Settings --> Hit Tracking`: :ref:`Enable Template Hit Tracking
<tracking-enable-template-hit-tracking-label>`


.. _enable_online_user_tracking:

enable_online_user_tracking
---------------------------

If enabled, online user statistics are tracked and the user-based
variables in the :doc:`Statistics </add-ons/statistics/index>` module
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

**Also found in CP:** :menuselection:`Settings --> Hit Tracking`: :ref:`Enable Online User Tracking
<tracking-enable-online-user-tracking-label>`


.. _enable_search_log:

enable_search_log
-----------------

If enabled, each searched term will be logged and can be viewed in the
:doc:`Search Log </cp/logs/search>`.

========== ========
Value      Behavior
========== ========
``y``      Enable search term log **(default)**
``n``      Disable search term log
========== ========

Example Usage::

$config['enable_search_log'] = 'n';

.. .. rst-class:: cp-path
..
.. **Also found in CP:** :menuselection:`Admin --> System
.. Administration --> Search Log Configuration`: :ref:`Enable Search Term
.. Logging <enable-search-term-log-label>`


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

**Also found in CP:** :menuselection:`Settings --> Content & Design`: :ref:`Cache Dynamic Channel
Queries <caching_dynamic_channel_query_caching>`


.. _enable_template_routes:

enable_template_routes
----------------------

This setting toggles whether or not Template Routes are used. If this
is set to no, templates will not be accessible by their routes. When
disabled the Template Route options will not appear in the Template
Manager.

========== ========
Value      Behavior
========== ========
``y``      Enable Template Routes **(default)**
``n``      Disable Template Routes
========== ========

Example Usage::

$config['enable_template_routes'] = 'y';

.. .. rst-class:: cp-path
..
.. **Also found in CP:** :menuselection:`Design --> Templates -->
.. Global Template Preferences`: :ref:`Enable Template Routes
.. <enable_template_routes_label>`

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

**Also found in CP:** :menuselection:`Settings --> Access Throttling`: :ref:`Enable Throttling
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


encryption_key
--------------

May be used by third parties as part of encoding and decoding encrypted data.
The recommended length of the key is 32 characters (128 bits).  The key should
include numbers and uppercase and lowercase letters.

========== ===========
Value      Description
========== ===========
``string`` Key value
========== ===========

Example Usage::

$config['encryption_key'] = 'sy22k6QK6JzH38u4nLZ65bHOdK6VL89d';


expire_session_on_browser_close
-------------------------------

Set the system to end a user's session when the browser is closed. (In
the case of Mac OS X, this means quitting the browser application.)

========== ========
Value      Behavior
========== ========
``y``      Expire user session when the browser closes
``n``      Do not expire user session when the browser closes **(default)**
========== ========

Example Usage::

$config['expire_session_on_browser_close'] = 'y';

.. versionchanged:: 2.8

   Replaced ``user_session_ttl`` and ``cp_session_ttl``. If either
   override had the value ``0`` in :file:`config.php` prior to the 2.8
   update, they were replaced with
   ``$config['expire_session_on_browser_close'] = 'y';`` during the
   update.


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
``y``      Forces query strings
``n``      Do not force query strings **(default)**
========== ========

Example Usage::

$config['force_query_string'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Settings --> Debugging & Output`: :ref:`Force URL query strings
<output-force-query-strings-label>`


.. _forum_is_installed:

forum_is_installed
------------------

Automatically enabled when the :doc:`Discussion Forum
</add-ons/forum/index>` module is installed.

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

**Also found in CP:** :menuselection:`Developer Tools --> Add-On Manager --> Discussion
Forum Settings --> Edit`: :ref:`Forum Triggering Word
<forum-forum_triggering_word>`


gmail_duplication_prevention
----------------------------

.. versionadded:: 3.4.0

Gmail email addresses can optionally include any number of ``.``'s and they're equivalent to the same address without ``.``'s. For example ``example@gmail.com`` is the same as ``e.x.a.m.p.l.e@gmail.com``. By default, ExpressionEngine prevents duplicate registration from the same address, but you can disable the prevention.

========= ========
Value     Behavior
========= ========
``y``     Prevent duplicate Gmail addresses from signing up **(default)**
``n``     Do not prevent duplicate Gmail addresses
========= ========

Example Usage::

  $config['gmail_duplication_prevention'] = 'n';

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

**Also found in CP:** :menuselection:`Settings --> Debugging & Output`: :ref:`Enable GZIP Output
<output-enable-gzip-label>`


hidden_template_indicator
-------------------------

Specify the character(s) that denote a :doc:`hidden template
</templates/hidden_templates>` when used to prefix a template name. The
default is an underscore, e.g. ``_my_hidden_template``.

========== ===========
Value      Description
========== ===========
``text``   Hidden template indicator characters
========== ===========

Example Usage::

$config['hidden_template_indicator'] = '.';


hidden_template_404
-------------------------

Set the system to show either a 404 page or the template group's index
page when a hidden template is directly loaded in a browser.

========= ========
Value     Behavior
========= ========
``y``     Show 404 **(default)**
``n``     Show template group's index page
========= ========

Example Usage::

$config['hidden_template_404'] = 'y';


htaccess_path
-------------------------

Set the server path used by the :doc:`Blacklist/Whitelist
</add-ons/blacklist/index>` module to :ref:`write rules to your
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

**Also found in CP:** :menuselection:`Settings --> Content & Design`: :ref:`Image Converter
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

**Also found in CP:** :menuselection:`Settings --> Content & Design`: :ref:`Image Resizing
Protocol <image-resizing-protocol-label>`


include_seconds
---------------

Set the system to include seconds when time is displayed in the
interface.

========== ========
Value      Behavior
========== ========
``y``      Include seconds
``n``      Do not include seconds **(default)**
========== ========

Example Usage::

$config['include_seconds'] = 'y';


ip2nation
---------

Enable checks against the :doc:`IP to Nation
</add-ons/ip_to_nation/index>` database.

========== ========
Value      Behavior
========== ========
``y``      Enable IP to Nation checks **(default)**
``n``      Disable IP to Nation checks
========== ========

Example Usage::

$config['ip2nation'] = 'n';


.. _is_site_on:

is_site_on
----------

Specify whether the site should be viewable by the general public or
taken offline. This can be helpful when performing maintenance on only
one of several MSM sites.

.. note:: This setting will have no effect unless :doc:`Multiple Site
    Manager </cp/msm/index>` is installed and :ref:`multiple sites are
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

Also available for use in the :ref:`site index file <site_index_file>`,
:file:`index.php`. Example Usage::

$assign_to_config['is_site_on'] = 'n';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Settings --> General Settings`: Is site on?


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

**Also found in CP:** :menuselection:`Settings --> General Settings`: :ref:`Is system on? <general-config-system-on-label>`

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

**Also found in CP:** :menuselection:`Settings --> Access Throttling`: :ref:`Lockout Time
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

.. .. rst-class:: cp-path
..
.. **Also found in CP:** :menuselection:`Admin --> Email
.. Configuration`: :ref:`Log Email Console Messages
.. <email-log-console-messages-label>`


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


log_search_terms
----------------

Unused in first party files, this configuration item exists to allow backwards
compatibility for any third party add-ons using it.


log_threshold
-------------

.. note:: In order to save anything to log files, you'll need to create the ``/system/user/log/`` directory and ensure it's writable.

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

**Also found in CP:** :menuselection:`Settings --> Outgoing Email`: :ref:`Default Mail Format <email-default-format-label>`


.. _mail_protocol:

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

**Also found in CP:** :menuselection:`Settings --> Outgoing Email`: :ref:`Email Protocol <email-protocol-label>`


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

.. .. rst-class:: cp-path
..
.. **Also found in CP:** :menuselection:`Admin --> System
.. Administration --> Search Log Configuration`: :ref:`Maximum number of
.. recent search terms to save <max-search-save-label>`


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

**Also found in CP:** :menuselection:`Settings --> Access Throttling`: :ref:`Maximum Number of Page Loads
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

**Also found in CP:** :menuselection:`Settings --> Template Settings`: :ref:`Maximum Number of Revisions to Keep
<global-template-max-revisions-label>`

.. _max_url_segments:

max_url_segments
----------------

Set the maximum number of URL segments allows in requests made to your site.

=========== ===========
Value       Description
=========== ===========
``integer`` Maximum number of URL segments to allow **(default is 12)**
=========== ===========

Example Usage::

$config['max_url_segments'] = '12';


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

**Also found in CP:** :menuselection:`Settings --> Members`:
:ref:`Email address for notifications
<member-send-notifications-email-label>`


.. _memcached_config:

memcached
---------

If Memcached is the specified `cache_driver`_, allows configuration of
multiple Memcached servers to be used for cache storage.

Example Usage::

  $config['memcached'] = array(
    array(
      'host' => '192.168.1.100',
      'port' => 11211,
      'weight' => 2,
    ),
    array(
      'host' => '192.168.1.101',
      'port' => 11211,
      'weight' => 1,
    )
  );


member_theme
------------

Set the default member profile theme.

============ ===========
Value        Description
============ ===========
``theme``    Name of theme directory found in ``themes/member``
============ ===========

Example Usage::

$config['member_theme'] = 'default';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Settings --> Members`:
:ref:`Default Member Profile Theme <member-default-theme-label>`


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

**Also found in CP:** :menuselection:`Settings --> Members`:
:ref:`Member List - Sort By <member-list-rows-label>`


.. _overrides-mime-whitelist-additions:

mime_whitelist_additions
------------------------

With an array, add Mime Types to the whitelist.

Example Usage::

  $config['mime_whitelist_additions'] = array(
    'image/vnd.adobe.photoshop'
  );


.. _overrides-mime-whitelist-member-exception:

mime_whitelist_member_exception
-------------------------------

Specify member IDs to exclude from Mime Type whitelist restrictions.

========== ===========
Value      Description
========== ===========
``text``   Comma-delimited list of member IDs
========== ===========

Example Usage::

$config['mime_whitelist_member_exception'] = '3, 14, 83';


.. _overrides-mime-whitelist-member-group-exception:

mime_whitelist_member_group_exception
-------------------------------------

Specify member group IDs to exclude from Mime Type whitelist restrictions.

========== ===========
Value      Description
========== ===========
``text``   Comma-delimited list of member group IDs
========== ===========

Example Usage::

$config['mime_whitelist_member_group_exception'] = '2, 5';


moblog_allow_nontextareas
-------------------------

Remove Moblog's textarea-only restriction for Channel Fields.

====== ========
Value  Behavior
====== ========
``y``  Remove textarea-only restriction
``n``  Allow only textarea fieldtypes **(default)**
====== ========

Example Usage::

$config['moblog_allow_nontextareas'] = 'y';


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

**Also found in CP:** :menuselection:`Settings --> Members`:
:ref:`Member List - Rows <member-list-rows-label>`


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

**Also found in CP:** :menuselection:`Settings --> Members`:
:ref:`Member List - Order <member-list-order-label>`


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

**Also found in CP:** :menuselection:`Settings --> General Settings`:


.. _name_of_dictionary_file:

name_of_dictionary_file
-----------------------

Filename for the dictionary file. The official dictionary file is
`available for download
<https://ellislab.com/asset/file/dictionary.zip>`__. Must be used in
combination with :ref:`allow_dictionary_pw <allow_dictionary_pw>`.

============ ===========
Value        Description
============ ===========
``filename`` Dictionary file found at :file:`system/user/config/`
============ ===========

Example Usage::

$config['name_of_dictionary_file'] = 'dictionary.txt';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Settings --> Security & Privacy`: :ref:`Name of Dictionary File
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

**Also found in CP:** :menuselection:`Settings --> Members`:
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

**Also found in CP:** :menuselection:`Settings --> Content & Design`: :ref:`Clear all caches
when new entries are posted <global-channel-clear-cache-label>`


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

**Also found in CP:** :menuselection:`Settings --> General Settings`: :ref:`New Version Auto Check
<general-config-new-version-label>`


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

Also available for use in the :ref:`site index file <site_index_file>`,
:file:`index.php`, and the :ref:`CP index file <cp_index_file>`,
:file:`admin.php`. Example Usage::

$assign_to_config['newrelic_app_name'] = 'My Second Site';

.. .. rst-class:: cp-path
..
.. **Also found in CP:** :menuselection:`Admin --> System
.. Administration --> Output and Debugging`: :ref:`New Relic Application
.. Name <sysadmin-newrelic_app_name>`


.. _overrides-newrelic-include-version-number:

newrelic_include_version_number
-------------------------------

Whether or not to append the version number to the Application name
in the New Relic dashboard.

.. versionadded:: 2.9.1

======= ========
Value   Behavior
======= ========
``y``   Append version number
``n``   Do not append version number **(default)**
======= ========

Example Usage::

$config['newrelic_include_version_number'] = 'y';


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

**Also found in CP:** :menuselection:`Settings --> Security & Privacy`: :ref:`Enable Password Lockout
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

**Also found in CP:** :menuselection:`Settings --> Security & Privacy`: :ref:`Time Interval for Lockout
<security-passwd-lockout-int-label>`

popup_link
----------

Specify whether links created by the :doc:`Typography class
</development/legacy/libraries/typography>` open in a new window.

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

**Also found in CP:** :menuselection:`Settings --> URL and Path Settings`:
:ref:`Profile Triggering Word <profile-trigger-word-label>`


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


prv_msg_throttling_period
-------------------------

Set the length of time users must wait between sending private messages.

.. note:: Restriction does not apply to members in the Super Admin
    group.

=========== ===========
Value       Description
=========== ===========
``integer`` Throttling period in seconds **(default is 30)**
=========== ===========

Example Usage::

$config['prv_msg_throttling_period'] = '60';

prv_msg_upload_path
-------------------

Set the server path to the private messages uploads directory.

========= ===========
Value     Description
========= ===========
``path``  Full server path to writable private message uploads directory
========= ===========

Example Usage::

$config['prv_msg_upload_path'] = '/path/images/pm_attachments/';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Settings --> Messages`:
:ref:`Server Path for Attachment Upload Directory
<server-path-for-attachment-upload-directory>`


prv_msg_waiting_period
----------------------

Set the length of time members must wait after registration before being
allowed to send private messages.

.. note:: Restriction does not apply to members in the Super Admin
    group.

=========== ===========
Value       Description
=========== ===========
``integer`` Wait time in hours **(default is 1)**
=========== ===========

Example Usage::

$config['prv_msg_waiting_period'] = '4';


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


pw_min_len
----------

Set the minimum number of characters allowed for member passwords.

=========== ===========
Value       Description
=========== ===========
``integer`` Minimum character length
=========== ===========

Example Usage::

$config['pw_min_len'] = '8';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Settings --> Security & Privacy`: :ref:`Minimum Password Length
<profile-trigger-word-label>`


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

.. .. rst-class:: cp-path
..
.. **Also found in CP:** :menuselection:`Tools --> Data --> Recount
.. Statistics --> Recount Preferences`: Total number of database rows
.. processed per batch


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

**Also found in CP:** :menuselection:`Settings --> Debugging & Output`: :ref:`Redirection Method
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

.. .. rst-class:: cp-path
..
.. **Also found in CP:** :menuselection:`Admin --> Security and
.. Privacy --> Security and Sessions`: :ref:`Apply Rank Denial to
.. User-submitted Links <security-apply-rank-denial-label>`


.. _redis_config:

redis
-----

If Redis is the specified `cache_driver`_, allows configuration of
a Redis server to be used for cache storage.

Example Usage::

  $config['redis'] = array(
    'host' => '127.0.0.1',
    'password' => NULL,
    'port' => 6379,
    'timeout' => 0
  );


relaxed_track_views
-------------------

Allow :doc:`Entry Views Tracking </channel/entry_tracking>` to
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

**Also found in CP:** :menuselection:`Settings --> Members`:
:ref:`Require Member Account Activation
<member-account-activation-label>`

.. _require_captcha:

require_captcha
---------------

When enabled, site visitors will be required to pass a CAPTCHA to submit
any front-end form, including Channel Form, comment forms, and member
registrations.

========== ========
Value      Behavior
========== ========
``y``      Enable CAPTCHAS front-end forms
``n``      Disable CAPTCHAS on front-end forms **(default)**
========== ========

**Also found in CP:** :menuselection:`Settings --> CAPTCHA`:
:ref:`Require CAPTCHA <captcha-require>`

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

**Also found in CP:** :menuselection:`Settings --> Security & Privacy`: :ref:`Require IP Address and User
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

**Also found in CP:** :menuselection:`Settings --> Security & Privacy`: :ref:`Require IP Address and User
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

**Also found in CP:** :menuselection:`Settings --> Security & Privacy`: :ref:`Require Secure Passwords
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

**Also found in CP:** :menuselection:`Settings --> Members`:
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

**Also found in CP:** :menuselection:`Settings --> URL and Path Settings`: :ref:`Category URL
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

**Also found in CP:** :menuselection:`Developer Tools --> Add-On Manager --> Rich
Text Editor Settings`: :ref:`Default Toolset
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

**Also found in CP:** :menuselection:`Developer Tools --> Add-On Manager --> Rich
Text Editor Settings`: :ref:`Enable Rich Text Editor
<global-channel-category-url-indicator-label>`


save_tmpl_files
---------------

Enable the saving of :doc:`templates as files
</templates/templates_as_files>`.

========== ========
Value      Behavior
========== ========
``y``      Templates are saved as files
``n``      Templates are not saved as files **(default)**
========== ========

Example Usage::

$config['save_tmpl_files'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Settings --> Template Settings`: :ref:`Save Templates as Files
<global-template-save-templates-as-files-label>`


.. _save_tmpl_revisions:

save_tmpl_revisions
-------------------

Enable template revisions. Template history is saved when changes are made
within the :doc:`template editor </cp/design/template/edit>`.

========== ========
Value      Behavior
========== ========
``y``      Templates revisions are saved
``n``      Templates revisions are not saved **(default)**
========== ========

Example Usage::

$config['save_tmpl_revisions'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Settings --> Template Settings`: :ref:`Save Template Revisions
<global-template-save-templates-revisions-label>`


sc_certificate_id
-----------------

Specify the unique ID that is supplied by PayPal after providing them
with a :ref:`public certificate <sc-public-certificate-path-label>`.

========== ===========
Value      Description
========== ===========
``string`` Certificate ID
========== ===========

Example Usage::

$config['sc_certificate_id'] = 'SX4DT7FDO1234';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Developer Tools --> Add-On Manager -->
Simple Commerce Settings`: :ref:`ID Given to Public Certificate by PayPal
<sc-certificate-id-label>`


sc_encrypt_buttons
------------------

Enable encryption for PayPal purchase links and buttons created by
Simple Commerce.

.. important:: Enabling this requires that your server have
    `OpenSSL <http://php.net/manual/en/ref.openssl.php>`_ support
    compiled in PHP. Ask your server administrator for this information.

.. note:: Enabling this requires that you use a public certificate and
	private key. Please read the section on
	:ref:`simple_commerce_encrypted_payments` for full details. To be the
	most effective, you should set your PayPal account settings to only
	accept encrypted payments.

======== ===========
Value    Behavior
======== ===========
``y``    Enable encryption
``n``    Disable encryption **(default)**
======== ===========

Example Usage::

$config['sc_encrypt_buttons'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Developer Tools --> Add-On Manager -->
Simple Commerce Settings`: :ref:`Encrypt PayPal Buttons and Links?
<sc-encrypt-buttons-label>`


sc_paypal_account
-----------------

Specify the primary email address associated with the PayPal account
processing payments for store purchases.

========== ===========
Value      Description
========== ===========
``string`` Primary PayPal email address
========== ===========

Example Usage::

$config['sc_paypal_account'] = 'paypal_email@example.com';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Developer Tools --> Add-On Manager -->
Simple Commerce Settings`: :ref:`PayPal Account
<sc-paypal-account-label>`


sc_paypal_certificate
---------------------

Specify the path to the PayPal-provided certificate file. Please read
the section on :ref:`simple_commerce_encrypted_payments` for full
details.

.. note:: ExpressionEngine must have read access to this directory, but
	for security we highly recommended you use a location above web	root
	so that the certificate and key files are not accessible via the web.

========= ===========
Value     Description
========= ===========
``path``  Full server path to PayPal certificate file
========= ===========

Example Usage::

$config['sc_paypal_certificate'] = "/path/to/paypal_certificate.pem";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Developer Tools --> Add-On Manager -->
Simple Commerce Settings`: :ref:`PayPal Certificate Path
<sc-paypal-certificate-path-label>`


sc_private_key
--------------

Specify the path to the private key file. Please read the section on
:ref:`simple_commerce_encrypted_payments` for full details.

.. note:: ExpressionEngine must have read access to this directory, but
	for security we highly recommended you use a location above web	root
	so that the certificate and key files are not accessible via the web.

========= ===========
Value     Description
========= ===========
``path``  Full server path to private key file
========= ===========

Example Usage::

$config['sc_private_key'] = "/path/to/private_key.pem";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Developer Tools --> Add-On Manager -->
Simple Commerce Settings`: :ref:`Private Key Path
<sc-private-key-path-label>`


sc_public_certificate
---------------------

Specify the path to the public certificate file. Please read the
section on :ref:`simple_commerce_encrypted_payments` for full details.

.. note:: ExpressionEngine must have read access to this directory, but
	for security we highly recommended you use a location above web	root
	so that the certificate and key files are not accessible via the web.

========= ===========
Value     Description
========= ===========
``path``  Full server path to public certificate file
========= ===========

Example Usage::

$config['sc_public_certificate'] = "/path/to/public_certificate.pem";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Developer Tools --> Add-On Manager -->
Simple Commerce Settings`: :ref:`Public Certificate Path
<sc-public-certificate-path-label>`


sc_temp_path
------------

Specify the path to the temporarily stored encrypted files. Please read
the section on :ref:`simple_commerce_encrypted_payments` for full
details.

.. note:: ExpressionEngine must have read access to this directory, but
	for security we highly recommended you use a location above web	root
	so that the certificate and key files are not accessible via the web.

========= ===========
Value     Description
========= ===========
``path``  Full server path to temporarily stored encrypted files
========= ===========

Example Usage::

$config['sc_temp_path'] = "/path/to/tmp";

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Developer Tools --> Add-On Manager -->
Simple Commerce Settings`: :ref:`Temporary Encrypted Files Path
<sc-temp-path-label>`


send_headers
------------

Specify whether the system should automatically send HTTP page headers
when it serves pages to a visitor.

========== ========
Value      Behavior
========== ========
``y``      System sends HTTP headers **(default)**
``n``      System does not send HTTP headers
========== ========

Example Usage::

$config['send_headers'] = 'n';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Settings --> Debugging & Output`: :ref:`Generate HTTP Page
Headers <generate-http-headers-label>`


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

Enable Output Profiler. When enabled, Super Admins will see benchmark
results, SQL queries, and submitted form data displayed at the bottom of
the browser window. Template debugging is included on the front end.

========== ========
Value      Behavior
========== ========
``y``      Enable output profiler
``n``      Disable output profiler **(default)**
========== ========

Example Usage::

$config['show_profiler'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Settings --> Debugging & Output`: :ref:`Display Output Profiler
<output-debug-display-profiler-label>`


sig_allow_img_hotlink
---------------------

Specify whether members can link to images hosted on other websites as
their signature image.

========== ========
Value      Behavior
========== ========
``y``      Allow linking to external sites' images
``n``      Do not allow linking to external sites' images **(default)**
========== ========

Example Usage::

$config['sig_allow_img_hotlink'] = 'n';

.. .. rst-class:: cp-path
..
.. **Also found in CP:** :menuselection:`Members --> Preferences`:
.. :ref:`Allow image hot linking in signatures
.. <member-signature-hot-linking-label>`


sig_allow_img_upload
--------------------

Set whether members can upload their own signature image.

======== ===========
Value    Behavior
======== ===========
``y``    Allow members to upload their own signature image
``n``    Do not allow members to upload their own signature image **(default)**
======== ===========

Example Usage::

$config['sig_allow_img_upload'] = 'y';

.. .. rst-class:: cp-path
..
.. **Also found in CP:** :menuselection:`Members --> Preferences`:
.. :ref:`Allow users to upload an image in their signature
.. <member-signature-allow-upload-label>`


sig_img_max_height
------------------

Set the maximum height (in pixels) allowed for user-uploaded signature
images.

=========== ===========
Value       Description
=========== ===========
``integer`` Max height (in pixels)
=========== ===========

Example Usage::

$config['sig_img_max_height'] = '150';

.. .. rst-class:: cp-path
..
.. **Also found in CP:** :menuselection:`Members --> Preferences`:
.. :ref:`Maximum Height of Signature Image
.. <member-signature-max-height-label>`


sig_img_max_kb
--------------

Set the maximum file size (in kilobytes) allowed for user-uploaded
signature images.

=========== ===========
Value       Description
=========== ===========
``integer`` Max file size (in kilobytes)
=========== ===========

Example Usage::

$config['sig_img_max_kb'] = '50';

.. .. rst-class:: cp-path
..
.. **Also found in CP:** :menuselection:`Members --> Preferences`:
.. :ref:`Maximum Size (in Kilobytes) of Signature Image
.. <member-signature-max-size-label>`


sig_img_max_width
-----------------

Set the maximum width (in pixels) allowed for user-uploaded signature
images.

=========== ===========
Value       Description
=========== ===========
``integer`` Max width (in pixels)
=========== ===========

Example Usage::

$config['sig_img_max_width'] = '150';

.. .. rst-class:: cp-path
..
.. **Also found in CP:** :menuselection:`Members --> Preferences`:
.. :ref:`Maximum Width of Signature Image
.. <member-signature-max-width-label>`


sig_img_path
------------

Set the server path to the signature images directory.

========= ===========
Value     Description
========= ===========
``path``  Full server path to writable signature images directory
========= ===========

Example Usage::

$config['sig_img_path'] = '/path/image/folder/';

.. .. rst-class:: cp-path
..
.. **Also found in CP:** :menuselection:`Members --> Preferences`:
.. :ref:`Server path to Signature Image Upload Folder
.. <member-signature-server-path-label>`


sig_img_url
-----------

Set the URL to the signature images directory.

========= ===========
Value     Description
========= ===========
``URL``   URL to signature images directory
========= ===========

Example Usage::

$config['sig_img_url'] = 'http://example.com/images/signatures/';

.. .. rst-class:: cp-path
..
.. **Also found in CP:** :menuselection:`Members --> Preferences`:
.. :ref:`URL to Signature Image Upload Folder <member-signature-URL-label>`


sig_maxlength
-------------

Set the maximum number of characters allowed in a member's signature.

=========== ===========
Value       Description
=========== ===========
``integer`` Max number of characters allowed in a signature
=========== ===========

Example Usage::

$config['sig_maxlength'] = '500';

.. .. rst-class:: cp-path
..
.. **Also found in CP:** :menuselection:`Members --> Preferences`:
.. :ref:`Maximum number of characters per signature
.. <member-signature-max-chars-label>`


.. _overrides-site-404:

site_404
--------

Set which template should be displayed when a visitor tries to access an
invalid URL.

================================ ===========
Value                            Description
================================ ===========
``template_group/template_name`` Template to show for 404s
================================ ===========

Example Usage::

$config['site_404'] = 'site/404';

Also available for use in the :ref:`site index file <site_index_file>`,
:file:`index.php`. Example Usage::

$assign_to_config['site_404'] = 'site/notfound';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Settings --> Template Settings`: :ref:`404 Page
<global-template-404-label>`


.. _overrides-site-index:

site_index
----------

Set the filename of the :ref:`site index file <site_index_file>`. By
default, this will be :file:`index.php`, which is located in the base
folder. You will only need to alter this setting if you have changed the
filename or you want to :doc:`remove index.php from your site's
URLs</urls/remove_index.php>`.

============ ========
Value        Description
============ ========
``filename`` Name of your sites index file
============ ========

Example Usage::

$config['site_index'] = 'coolpage.php';

Also available for use in the :ref:`site index file <site_index_file>`,
:file:`index.php`. Example Usage::

$assign_to_config['site_index'] = 'secondsite.php';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Settings --> URL and Path Settings`: :ref:`Name of your site's index page
<general-config-index-name-label>`


.. _overrides-site-name:

site_name
---------

Set the short name of the site. The site created upon installation is
named ``default_site``, so this is typically only helpful for additional
sites in :doc:`MSM-enabled installations </msm/index>`.

============= ========
Value         Description
============= ========
``shortname``   Site short name
============= ========

Available for use only in the :ref:`site index file <site_index_file>`,
:file:`index.php`, and the :ref:`CP index file <cp_index_file>`,
:file:`admin.php`. Example Usage::

$assign_to_config['site_name'] = 'domain2_short_name';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Developer Tools --> Site Manager --> Edit`: :doc:`Site Short Name </cp/msm/form>`


.. _overrides-site-url:

site_url
--------

Set the full URL to the site's web root.

========== ===========
Value      Description
========== ===========
``URL``    Full URL to the site's web root
========== ===========

Example Usage::

$config['site_url'] = 'http://example.com';

Also available for use in the :ref:`site index file <site_index_file>`,
:file:`index.php`. Example Usage::

$assign_to_config['site_url'] = 'http://domain2.com';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Settings --> URL and Path Settings`:
:ref:`URL to the root directory of your site
<general-config-url-root-label>`


smart_static_parsing
--------------------

When enabled, parsing of embedded templates that are not saved as
:ref:`static templates <template-type-label>` will still be parsed as if
they were, if at all possible (i.e. they contain no PHP or
ExpressionEngine tags). This setting is enabled by default.

========== ========
Value      Behavior
========== ========
``y``      Enable smart static parsing **(default)**
``n``      Disable smart static parsing
========== ========

Example Usage::

$config['smart_static_parsing'] = 'n';


smtp_password
-------------

If :ref:`mail protocol <mail_protocol>` is set to ``smtp``, this sets
the password the system will use to authenticate with the SMTP server.
This information can be obtained from your email provider.

============ ===========
Value        Description
============ ===========
``password`` SMTP password
============ ===========

Example Usage::

$config['smtp_password'] = 'ic6XpWJnv4ip';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Settings --> Outgoing Email`: :ref:`SMTP Password <email-smtp-password-label>`


smtp_port
---------

If :ref:`mail protocol <mail_protocol>` is set to ``smtp``, this sets
the mail server port. This information can be obtained from your email
provider.

========== ===========
Value      Description
========== ===========
``port``   SMTP port **(default is 25)**
========== ===========

Example Usage::

$config['smtp_port'] = '2525';

.. .. rst-class:: cp-path
..
.. **Also found in CP:** :menuselection:`Admin --> Email
.. Configuration`: :ref:`SMTP Server Port <email-smtp-server-port-label>`


smtp_server
-----------

If :ref:`mail protocol <mail_protocol>` is set to ``smtp``, this sets
the mail server hostname. This information can be obtained from your
email provider.

.. note:: You can connect to SSL servers as long as OpenSSL is installed
    on the server hosting ExpressionEngine. Please check with your
    server administrator to confirm.

============ ===========
Value        Description
============ ===========
``hostname`` SMTP server hostname
============ ===========

Example Usage::

$config['smtp_server'] = 'mail.example.com';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Settings --> Outgoing Email`: :ref:`SMTP Server Address <email-smtp-server-label>`


smtp_username
-------------

If :ref:`mail protocol <mail_protocol>` is set to ``smtp``, this sets
the username the system will use to authenticate with the SMTP server.
This information can be obtained from your email provider.

============ ===========
Value        Description
============ ===========
``username`` SMTP username
============ ===========

Example Usage::

$config['smtp_username'] = 'joe@example.com';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Settings --> Outgoing Email`: :ref:`SMTP Username <email-smtp-username-label>`


spellcheck_language_code
------------------------

Set the language used by spell check.

================= ===========
Value             Description
================= ===========
``language code`` 2 letter ISO 639 language code (e.g. ``en``, ``es``, ``de``)
================= ===========

Example Usage::

$config['spellcheck_language_code'] = 'en';


.. _strict_urls:

strict_urls
-----------

Set whether the system will allow templates from your default template
group to be directly accessed in the first URL segment. If enabled, the
system will require that the first URL segment be a valid template group
only or a 404 page will be shown.

========== ========
Value      Behavior
========== ========
``y``      Enable Strict URLs **(default)**
``n``      Disable Strict URLs
========== ========

Example Usage::

$config['strict_urls'] = 'n';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Settings --> Template Settings`: :ref:`Enable Strict URLs
<strict_url_label>`


.. _overrides-template:

template
--------

Sets the default template. Must be used with :ref:`template_group
<overrides-template-group>`, and the two overrides together set the
template group and template shown on the front-end when the site is
loaded without anything in the :doc:`URL segments
</templates/globals/url_segments>`.

============ ===========
Value        Description
============ ===========
``template`` Template name
============ ===========

Example Usage::

$config['template'] = 'index';

Also available for use in the :ref:`site index file <site_index_file>`,
:file:`index.php`. Example Usage::

$assign_to_config['template'] = 'index';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Developer Tools --> Template Manager --> New/Edit`: Make the index template in
this group your site's home page?


.. _overrides-template-group:

template_group
--------------

Sets the default template group. Must be used with :ref:`template
<overrides-template>`, and the two overrides together set the template
group and template shown on the front-end when the site is loaded
without anything in the :doc:`URL segments
</templates/globals/url_segments>`.

================== ===========
Value              Description
================== ===========
``template group`` Template group name
================== ===========

Example Usage::

$config['template_group'] = 'about';

Also available for use in the :ref:`site index file <site_index_file>`,
:file:`index.php`. Example Usage::

$assign_to_config['template_group'] = 'site_2';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Developer Tools --> Template Manager --> New/Edit`: Make the index template in
this group your site's home page?


theme_folder_path
-----------------

Set the server path to the :file:`themes` directory.

========== ===========
Value      Description
========== ===========
``path``   Server path to the :file:`themes` directory
========== ===========

Example Usage::

$config['theme_folder_path'] = '/home/usr/domain.com/public_html/themes/';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Settings --> URL and Path Settings`: :ref:`Theme Folder Path
<general-config-theme-path-label>`


theme_folder_url
----------------

Set the URL to the :file:`themes` directory.

========= ===========
Value     Description
========= ===========
``URL``   URL to the :file:`themes` directory
========= ===========

Example Usage::

$config['theme_folder_url'] = 'http://example.com/themes/';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Settings --> URL and Path Settings`: :ref:`URL to your "themes" folder
<general-config-theme-url-label>`


time_format
-----------

Set default time format to either 12- or 24-hour time format.

========== ===========
Value      Description
========== ===========
``12``     12-hour time format
``24``     24-hour time format
========== ===========

Example Usage::

$config['time_format'] = '24';


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

**Also found in CP:** :menuselection:`Settings --> Access Throttling`: :ref:`Time Interval
<throttling-time-interval-label>`


un_min_len
----------

Set the minimum number of characters allowed for member usernames.

=========== ===========
Value       Description
=========== ===========
``integer`` Minimum character length
=========== ===========

Example Usage::

$config['un_min_len'] = '5';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Settings --> Security & Privacy`: :ref:`Minimum Username Length
<security-min-username-label>`

.. _upload_file_name_blacklist:

upload_file_name_blacklist
--------------------------

With an array, add a case insensitive list of file names that cannot be uploaded.

Example Usage::

  $config['upload_file_name_blacklist'] = array(
    'logo.png',
  );


upload_preferences
------------------

With an associative array, specify upload destination paths, URLs, and
titles.

.. note:: Each key in the array is optional and only overrides existing
    values in the database. New upload destinations cannot be created
    using this config override.

Example Usage::

	$config['upload_preferences'] = array(
	    1 => array(                                                            // ID of upload destination
	        'name'        => 'Staging Image Uploads',                          // Display name in control panel
	        'server_path' => '/home/user/example.com/staging/images/uploads/', // Server path to upload directory
	        'url'         => 'http://staging.example.com/images/uploads/'      // URL of upload directory
	    )
	);

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Files`: :doc:`Edit Upload Destination
</cp/files/uploads/form>`


uri_protocol
------------

Specify which server global should be used to retrieve the URI string.
The default setting of ``AUTO`` works for most servers. `Learn more
<http://www.php.net/manual/en/reserved.variables.server.php>`__ about
these server globals.

=================== ========
Value               Behavior
=================== ========
``AUTO``            Default value, auto detects
``PATH_INFO``       Uses the PATH_INFO
``QUERY_STRING``    Uses the QUERY_STRING
``REQUEST_URI``     Uses the REQUEST_URI
``ORIG_PATH_INFO``  Uses the ORIG_PATH_INFO
=================== ========

Example Usage::

$config['uri_protocol'] = 'PATH_INFO';

.. _use_category_name:

use_category_name
-----------------

Set the system to generate category links with category URL titles
rather than the numeric category indicator (e.g. ``/C12/``).

======= ========
Value   Behavior
======= ========
``y``   Enable category links with category URL titles
``n``   Disable category links with category URL titles **(default)**
======= ========

Example Usage::

$config['use_category_name'] = 'y';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Settings --> URL and Path Settings`: :ref:`Use Category URL Titles In Links?
<global-channel-category-url-titles-label>`


use_forum_url
-------------

Set the system to use the forum URL specified in the :ref:`forum board
preferences <forum-boards-forum-url-label>` rather than the :ref:`the
main site URL <overrides-site-url>` to form the forum's URL.

======= ========
Value   Behavior
======= ========
``y``   Use forum URL from forum board preferences
``n``   Use main site URL **(default)**
======= ========

Example Usage::

$config['use_forum_url'] = 'y';


use_newrelic
------------

When enabled, New Relic will add `Real User Monitoring JavaScript
<https://newrelic.com/docs/features/real-user-monitoring>`__ to all
ExpressionEngine-powered pages on both the front-end and in the CP.

======= ========
Value   Behavior
======= ========
``y``   Enable New Relic RUM JavaScript **(default)**
``n``   Disable New Relic RUM JavaScript
======= ========

Example Usage::

$config['use_newrelic'] = 'y';

.. .. rst-class:: cp-path
..
.. **Also found in CP:** :menuselection:`Admin --> System Administration
.. --> Output and Debugging`: :ref:`Enable New Relic RUM JavaScript?
.. <output-debug-use-newrelic-label>`


webmaster_email
---------------

Set the site's return email address for auto-generated emails.

========== ===========
Value      Description
========== ===========
``email``  Return email address for auto-generated emails
========== ===========

Example Usage::

$config['webmaster_email'] = 'hello@example.com';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Settings --> Outgoing Email`:
:ref:`Return email address for auto-generated emails
<email-site-return-email-label>`


webmaster_name
--------------

Set the *From* name for auto-generated emails.

========== ===========
Value      Description
========== ===========
``string`` The *From* name for auto-generated emails.
========== ===========

Example Usage::

$config['webmaster_name'] = 'Your Favorite Website';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Settings --> Outgoing Email`:
:ref:`Webmaster or site name for auto-generated emails
<email-site-webmaster-name-label>`


website_session_type
--------------------

Specify how sessions are handled on the front-end of the site.

====== ========
Value  Behavior
====== ========
``c``  Use cookies only **(default)**
``s``  Use session ID only
``cs`` Use both cookies and session ID
====== ========

Example Usage::

$config['website_session_type'] = 'c';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Settings --> Security & Privacy`: :ref:`Website Session Type
<website-session-type-label>`

.. versionchanged:: 2.8

   Variable was changed from ``user_session_type`` to
   ``website_session_type``.


word_separator
--------------

Specify the character the system will use to replace spaces when
auto-generating a URL title based on the entry's title.

============== ========
Value          Behavior
============== ========
``dash``       Use a dash (``-``) as the word separator **(default)**
``underscore`` Use an underscore (``_``) as the word separator
============== ========

Example Usage::

 $config['word_separator'] = 'dash';

.. rst-class:: cp-path

**Also found in CP:** :menuselection:`Settings --> URL and Path Settings`: :ref:`Word Separator for
URL Titles <global-channel-word-seperator-label>`

.. _x_frame_options:

x_frame_options
---------------

Set the ``X-Frame-Options`` header to control where your site can be
included in frames or iframes. This setting only affects the frontend
of the site. The control panel will always use the default "SAMEORIGIN".

================= ===========
Value             Description
================= ===========
``NONE``          Disable the header, allow framing from anywhere (not recommended)
``SAMEORIGIN``    Only allow framing from the site itself **(default)**
``DENY``          Do not allow framing of any sort
================= ===========

xml_lang
--------

Set the default XML language, typically used when outputting RSS feeds.
Feeds will identify themselves as having the language specified here.

================= ===========
Value             Description
================= ===========
``language code`` 2 letter ISO 639 language code (e.g. ``en``, ``es``, ``de``)
================= ===========

Example Usage::

 $config['xml_lang'] = 'en';

.. .. rst-class:: cp-path
..
.. **Also found in CP:** :menuselection:`Admin --> General
.. Configuration`: :ref:`Default XML Language
.. <general-config-default-xml-label>`


xss_clean_member_exception
--------------------------

Specify member IDs to exclude from XSS cleaning.

========== ===========
Value      Description
========== ===========
``text``   Comma-delimited list of member IDs
========== ===========

Example Usage::

$config['xss_clean_member_exception'] = '3, 14, 83';


xss_clean_member_group_exception
--------------------------------

Specify member group IDs to exclude from XSS cleaning.

========== ===========
Value      Description
========== ===========
``text``   Comma-delimited list of member group IDs
========== ===========

Example Usage::

$config['xss_clean_member_group_exception'] = '2, 5';
