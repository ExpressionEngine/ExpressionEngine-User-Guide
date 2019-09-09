---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# System Configuration Overrides

[TOC]

WARN: **Warning:** This article covers advanced topics.

By default, ExpressionEngine's system settings are managed in the Control Panel and stored in the database, but these settings can be overridden with one of 3 configuration files: the main configuration file, the site index file, and the CP index file.

##### Main configuration file

The **main configuration file**, found at `system/user/config/config.php`, is loaded every time the system is run, meaning that config overrides set in `config.php` always affect the system's configuration.

##### Site Index File

The **site index file** is the `index.php` file found in the web root of the ExpressionEngine installation. This file acts like the gateway to the front-end of the site. Since all web requests for a site's front-end pass through the site index file, there are a set of configuration overrides you can include in this file to alter ExpressionEngine's configuration. Keep in mind that any overrides set in the site index file only affect the system's behavior for front-end pages. (Even if you have [removed index.php from your site's URLs](installation/best-practices.md#removing-indexphp-from-your-urls), all front-end web requests are still handled by the site index file.)

NOTE: **Note:** Overrides available for use in the site index file are limited to [cp_url](#cp_url), [is_site_on](#is_site_on), [newrelic_app_name](#newrelic_app_name), [site_404](#site_404), [site_index](#site_index), [site_name](#site_name), [site_url](#site_url), [template](#template), and [template_group](#template_group).

##### CP Index File

The **CP index file** is the `admin.php` file also found in the installation's web root. The CP index file is similar to the site index file except that it acts as the gateway for all web requests to the Control Panel. And similarly, any overrides set in the CP index file only affect the system's behavior for CP pages accessed through that particular CP index file (e.g. `https://example.com/admin.php`).

NOTE: **Note:** Overrides available for use in the CP index file are limited to [cp_url](#cp_url), [newrelic_app_name](#newrelic_app_name), and [site_name](#site_name).

ExpressionEngine's settings are loaded in this order at runtime:

1.  Settings stored in the database are loaded.
2.  Settings in `config.php` are loaded and override settings loaded from the database.
3.  If a front-end page is being served, a limited array of settings in `index.php` are loaded and override any settings loaded from the database and the main configuration file.
4.  If a CP page is being served, a limited array of settings in `admin.php` are loaded and override any settings loaded from the database and the main configuration file.

## Overrides

[TOC=3 hide]

### `allow_avatar_uploads`

Set whether members can upload their own avatar.

| Value | Behavior                                                  |
| ----- | --------------------------------------------------------- |
| y     | Allow members to upload their own avatar                  |
| n     | Do not allow members to upload their own avatar (default) |

Example Usage:

    $config['allow_avatar_uploads'] = 'y';

**Also found in CP:** `Settings --> Avatar Settings`: [Allow members to upload their own avatars](control-panel/settings/avatars.md#allow-avatar-uploads)

### `allow_dictionary_pw`

Set whether words commonly found in the dictionary can be used as passwords. Must be used in combination with [name_of_dictionary_file](#name_of_dictionary_file).

| Value | Behavior                                       |
| ----- | ---------------------------------------------- |
| y     | Yes, allow dictionary words as passwords       |
| n     | No, do not allow dictionary words as passwords |

Example Usage:

    $config['allow_dictionary_pw'] = 'y';

**Also found in CP:** `Settings --> Security & Privacy`: [Allow Dictionary Words as Passwords](control-panel/settings/security-privacy.md#allow-dictionary-words-in-passwords)

### `allow_extensions`

Set whether extensions are enabled in the system. Disabling extensions will _not_ uninstall extensions.

| Value | Behavior                        |
| ----- | ------------------------------- |
| y     | Enable all extensions (default) |
| n     | Disable all extensions          |

Example Usage:

    $config['allow_extensions'] = 'y';

**Also found in CP:** `Utilities --> Debug Extensions`: [Disable Extensions? ](control-panel/utilities.md#manage-add-on-extensions)

### `allow_member_localization`

Set whether dates and times are localized to each members' own localization preferences.

| Value | Behavior                                                    |
| ----- | ----------------------------------------------------------- |
| y     | Show dates and times localized to each members' preferences |
| n     | Show all dates and times localized to the site default      |

Example Usage:

    $config['allow_member_localization'] = 'y';

**Also found in CP:** `Settings --> Members`: [Allow members to set their own localization preferences](control-panel/settings/members.md#allow-members-to-set-time-preferences)

### `allow_member_registration`

Set whether site visitors are allowed to register for accounts.

| Value | Behavior                                   |
| ----- | ------------------------------------------ |
| y     | Allow front-end member registration        |
| n     | Do not allow front-end member registration |

Example Usage:

    $config['allow_member_registration'] = 'y';

**Also found in CP:** `Settings --> Members`: [Allow New Member Registrations](control-panel/settings/members.md#allow-registrations)

### `allow_multi_logins`

Set whether an account can have multiple active sessions at one time.

NOTE: **Note:** This feature is incompatible with the "Cookies Only" session type.

| Value | Behavior                                          |
| ----- | ------------------------------------------------- |
| y     | Allow multiple active sessions per account        |
| n     | Do not allow multiple active sessions per account |

Example Usage:

    $config['allow_multi_logins'] = 'y';

**Also found in CP:** `Settings --> Security & Privacy`: [Allow multiple log-ins from a single account](control-panel/settings/security-privacy.md#allow-multiple-logins)

### `allow_pending_login`

Set whether members of the Pending member group can log in or not. By default, Pending members cannot log in.

| Value | Behavior                                         |
| ----- | ------------------------------------------------ |
| y     | Allow Pending member log in                      |
| n     | Do not allow Pending members to log in (default) |

Example Usage:

    $config['allow_pending_login'] = 'y';

### `allow_signatures`

Set whether member signatures are enabled.

| Value | Behavior                  |
| ----- | ------------------------- |
| y     | Enable member signatures  |
| n     | Disable member signatures |

Example Usage:

    $config['allow_signatures'] = 'y';

### `allow_textarea_tabs`

Set whether a tab keystroke produces a tab in Publish Page and Template Editor textareas. This is the default behavior.

| Value | Behavior                                              |
| ----- | ----------------------------------------------------- |
| y     | Insert tab on tab keystroke in textareas (default)    |
| n     | Normal browser behavior on tab keystroke in textareas |

Example Usage:

    $config['allow_textarea_tabs'] = 'y';

### `allow_username_change`

Set whether members can change their own usernames after registration.

| Value | Behavior                                           |
| ----- | -------------------------------------------------- |
| y     | Allow members to change their own usernames        |
| n     | Do not allow members to change their own usernames |

Example Usage:

    $config['allow_username_change'] = 'y';

**Also found in CP:** `Settings --> Security & Privacy`: [Allow members to change their username](control-panel/settings/security-privacy.md#allow-members-to-change-username)

### `app_version`

The installation's ExpressionEngine version.

WARN: **Warning:** This configuration variable is automatically set by the system and **should not be modified**.

### `auto_assign_cat_parents`

Set whether to assign an entry to both the selected category and its parent category.

| Value | Behavior                                                                |
| ----- | ----------------------------------------------------------------------- |
| y     | Entry will be assigned to the selected category and its parent category |
| n     | Entry will only be assigned to the selected category                    |

Example Usage:

    $config['auto_assign_cat_parents'] = 'y';

**Also found in CP:** `Settings --> Content & Design`: [Auto-Assign Category Parents](control-panel/settings/content-design.md#assign-category-parents)

### `autosave_interval_seconds`

Set the interval between autosaves on the Publish Page.

| Value   | Description                                  |
| ------- | -------------------------------------------- |
| integer | Autosave interval in seconds (default is 60) |

Example Usage:

    $config['autosave_interval_seconds'] = '30';

### `autosave_prune_hours`

Set the age at which Channel Entry autosaves are automatically deleted.

| Value   | Description                         |
| ------- | ----------------------------------- |
| integer | Pruning age in hours (default is 6) |

Example Usage:

    $config['autosave_prune_hours'] = '4';

### `avatar_max_height`

Set the maximum height (in pixels) allowed for user-uploaded avatars.

| Value   | Description            |
| ------- | ---------------------- |
| integer | Max height (in pixels) |

Example Usage:

    $config['avatar_max_height'] = '120';

**Also found in CP:** `Settings --> Avatars`: [Avatar Maximum Height](control-panel/settings/avatars.md#maximum-height)

### `avatar_max_kb`

Set the maximum file size (in kilobytes) allowed for user-uploaded avatars.

| Value   | Description                  |
| ------- | ---------------------------- |
| integer | Max file size (in kilobytes) |

Example Usage:

    $config['avatar_max_kb'] = '200';

**Also found in CP:** `Settings --> Avatars`: [Avatar Maximum Size](control-panel/settings/avatars.md#maximum-file-size-kb)

### `avatar_max_width`

Set the maximum width (in pixels) allowed for user-uploaded avatars.

| Value   | Description           |
| ------- | --------------------- |
| integer | Max width (in pixels) |

Example Usage:

    $config['avatar_max_width'] = '120';

**Also found in CP:** `Settings --> Avatars`: [Avatar Maximum Width](control-panel/settings/avatars.md#maximum-width)

### `avatar_path`

Set the server path to the avatar directory.

| Value | Description                                   |
| ----- | --------------------------------------------- |
| path  | Full server path to writable avatar directory |

Example Usage:

    $config['avatar_path'] = '/path/images/avatars/';

**Also found in CP:** `Settings --> Avatars`: [Server Path to Avatar Folder](control-panel/settings/avatars.md#avatar-path)

### `avatar_url`

Set the URL to the avatar directory.

| Value | Description             |
| ----- | ----------------------- |
| URL   | URL to avatar directory |

Example Usage:

    $config['avatar_url'] = 'https://example.com/images/avatars';

**Also found in CP:** `Settings --> Avatars`: [URL to Avatar Folder](control-panel/settings/avatars.md#avatar-directory)

### `ban_action`

Set the action to be taken when a visitor with a banned IP address attempts access.

| Value    | Behavior                                                |
| -------- | ------------------------------------------------------- |
| restrict | Restrict the user to viewing the site only              |
| message  | Show the user a specific message `ban_message`          |
| bounce   | Redirect the user to a specified site `ban_destination` |

Example Usage:

    $config['ban_action'] = 'message';

### `ban_destination`

Set the redirect destination for visitors with banned IP addresses. Must be used in conjunction with [ban_action](#ban_action) set to `bounce`.

| Value | Description     |
| ----- | --------------- |
| URL   | Destination URL |

Example Usage:

    $config['ban_destination'] = 'http://www.example.com';

### `ban_message`

Set the message shown to visitors with banned IP addresses. Must be used in conjunction with [ban_action](#ban_action) set to `message`.

| Value | Description                 |
| ----- | --------------------------- |
| text  | Message to be shown to user |

Example Usage:

    $config['ban_message'] = 'This site is currently unavailable.';

### `banish_masked_ips`

Set the system to deny a visitor access if the user's IP address cannot be determined while [throttling is enabled](#enable_throttling).

| Value | Behavior                                      |
| ----- | --------------------------------------------- |
| y     | Deny access to visitors without IP addresses  |
| n     | Allow access to visitors without IP addresses |

Example Usage:

    $config['banish_masked_ips'] = 'y';

**Also found in CP:** `Settings --> Access Throttling`: [Deny Access if No IP Address is Present](control-panel/settings/throttling.md#require-ip)

### `banishment_message`

Set a custom message to show throttled visitors. [Throttling must be enabled](#enable_throttling) and [banishment_type](#banishment_type) must be set to `message`.

| Value | Description                 |
| ----- | --------------------------- |
| text  | Custom message to show user |

Example Usage:

    $config['banishment_message'] = 'You have exceeded the allowed page load frequency.';

**Also found in CP:** `Settings --> Access Throttling`: [Custom Message](control-panel/settings/throttling.md#message)

### `banishment_type`

Set the system's method for handling throttled web requests.

| Value    | Behavior                                                   |
| -------- | ---------------------------------------------------------- |
| 404      | Respond to the request with standard 404 headers (default) |
| redirect | Redirect the user to a specified URL `banishment_url`      |
| message  | Show the user a custom message `banishment_message`        |

Example Usage:

    $config['banishment_type'] = 'message';

**Also found in CP:** `Settings --> Access Throttling`: [Action to Take](control-panel/settings/throttling.md#lock-out-action)

### `banishment_url`

Set a URL to serve as the redirect destination for throttled visitors. [Throttling must be enabled](#enable_throttling) and [banishment_type](#banishment_type) must be set to `redirect`.

| Value | Description                            |
| ----- | -------------------------------------- |
| URL   | Destination URL for throttled visitors |

Example Usage:

    $config['banishment_url'] = 'http://www.yahoo.com';

**Also found in CP:** `Settings --> Access Throttling`: [URL for Redirect](control-panel/settings/throttling.md#redirect)

### `banned_emails`

Specify email addresses to ban from site registration and login. Use wildcards for partial email addresses.

| Value | Description                                                    |
| ----- | -------------------------------------------------------------- |
| email | Pipe-delimited list of email addresses and/or wildcard domains |

Example Usage:

    $config['banned_emails'] = 'user@example.com|johndoe@example.com|*@spammydomain.com';

**Also found in CP:** `Members --> Ban Settings`: [Banned Email Addresses](control-panel/member-manager.md#ban-settings)

### `banned_ips`

Specify IP addresses to ban from site registration and login. Use wildcards to ban blocks of IP addresses.

| Value | Description                         |
| ----- | ----------------------------------- |
| IP    | Pipe-delimited list of IP addresses |

Example Usage:

    $config['banned_ips'] = '123.456.789.1|123.321.*';

**Also found in CP:** `Members --> Ban Settings`: [Banned IP Address](control-panel/member-manager.md#ban-settings)

### `banned_screen_names`

Specify screen names that cannot be used for member accounts, which can be handy for reserving certain screen names for your own use.

| Value       | Description                                     |
| ----------- | ----------------------------------------------- |
| screen name | Pipe-delimited list of screen names to restrict |

Example Usage:

    $config['banned_screen_names'] = 'Garfield|Snoopy|Hobbes';

**Also found in CP:** `Members --> Ban Settings`: [Restricted Screen Names](control-panel/member-manager.md#ban-settings)

### `banned_usernames`

Specify usernames that cannot be used for member accounts, which can be handy for reserving certain usernames for your own use.

| Value    | Description                                  |
| -------- | -------------------------------------------- |
| username | Pipe-delimited list of usernames to restrict |

Example Usage:

    $config['banned_usernames'] = 'garfield|snoopy|hobbes';

**Also found in CP:** `Members --> Ban Settings`: [Restricted Usernames](control-panel/member-manager.md#ban-settings)

### `base_path`

Set your site's base server path for use in other path configurations. Once set, this value is made available via a `{base_path}` variable that can be placed in server path fields in the control panel for easy environment management.

| Value | Description                                |
| ----- | ------------------------------------------ |
| path  | Server path, typically to your site's root |

Example Usage:

    $config['base_path'] = '/var/www/html/';

**Also found in CP:** `Settings --> URL and Path Settings`: [Default base path](control-panel/settings/urls.md#default-base-path)

### `base_url`

Set your site's base URL for use in other URL configurations. Once set, this value is made available via a `{base_url}` variable that can be placed in other URL configuration fields in the control panel for easy environment management.

| Value | Description      |
| ----- | ---------------- |
| URL   | URL to your site |

Example Usage:

    $config['base_url'] = 'https://example.com';

**Also found in CP:** `Settings --> URL and Path Settings`: [Default base URL](control-panel/settings/urls.md#default-base-url)

### `cache_driver`

Specify a different [caching driver](optimization/caching.md#caching-drivers) to use.

| Values    | Description                                        |
| --------- | -------------------------------------------------- |
| file      | File driver, /system/user/cache/ (default)         |
| memcached | Memcached driver, configured with memcached config |
| redis     | Redis driver, configured with redis config         |
| dummy     | Dummy driver, will not cache                       |

Example Usage:

    $config['cache_driver'] = 'memcached';

### `cache_driver_backup`

Specify a backup [caching driver](optimization/caching.md#caching-drivers) to use in case the one specified in [cache_driver](#cache_driver) isn't available. Same values accepted and same default as [cache_driver](#cache_driver).

Example Usage:

    $config['cache_driver_backup'] = 'file';

### `captcha_font`

Set whether TrueType fonts should be used for CAPTCHA images.

| Value | Behavior                                    |
| ----- | ------------------------------------------- |
| y     | Enables the use of TrueType fonts (default) |
| n     | Disables use of TrueType fonts              |

Example Usage:

    $config['captcha_font'] = 'n';

**Also found in CP:** `Settings --> CAPTCHA`: [Use TrueType Font for CAPTCHA](control-panel/settings/captcha.md#use-truetype-font)

### `captcha_path`

Set the path to the directory containing CAPTCHA images.

| Value | Description                      |
| ----- | -------------------------------- |
| path  | Server path to CAPTCHA directory |

Example Usage:

    $config['captcha_path'] = '/path/to/captcha/folder/';

**Also found in CP:** `Settings --> CAPTCHA`: [Server Path to CAPTCHA Folder](control-panel/settings/captcha.md#captcha-path)

### `captcha_rand`

Specify whether to add a random three-digit number to the end of each generated CAPTCHA word. This makes it more difficult for scripts to guess or brute-force the form submission.

| Value | Behavior                                      |
| ----- | --------------------------------------------- |
| y     | Add random numbers to CAPTCHA words (default) |
| n     | Do not add random numbers to CAPTCHA words    |

Example Usage:

    $config['captcha_rand'] = 'n';

**Also found in CP:** `Settings --> CAPTCHA`: [Add Random Number to CAPTCHA Word](control-panel/settings/captcha.md#add-random-number)

### `captcha_require_members`

Specify whether to require logged-in members to pass CAPTCHA validation to submit front-end forms, such as Channel Form, comment forms and email forms.

| Value | Behavior                                                              |
| ----- | --------------------------------------------------------------------- |
| y     | Require logged-in members pass CAPTCHA validation                     |
| n     | Do not require logged-in members to pass CAPTCHA validation (default) |

Example Usage:

    $config['captcha_require_members'] = 'y';

**Also found in CP:** `Settings --> CAPTCHA`: [Require CAPTCHA with logged-in members](control-panel/settings/captcha.md#require-captcha-while-logged-in)

### `captcha_url`

Set the full URL to the directory containing CAPTCHA images.

| Value | Description                       |
| ----- | --------------------------------- |
| URL   | Full URL to the CAPTCHA directory |

Example Usage:

    $config['captcha_url'] = 'http://www.example.com/images/captchas';

**Also found in CP:** `Settings --> CAPTCHA`: [Full URL to CAPTCHA Folder](control-panel/settings/captcha.md#captcha-path)

### `censor_replacement`

You may optionally specify a word or phrase to be used when replacing censored words. For example, if you set "tisk tisk" as your replacement word, and "shucks" is in your censored list, then anytime "shucks" is used it will be replaced with "tisk tisk". If you do not set this preference, a pound symbol will be used for each character that is censored, so "shucks" would be converted to "\#\#\#\#\#\#".

| Value | Description                                         |
| ----- | --------------------------------------------------- |
| text  | Text to be used as a replacement for censored words |

Example Usage:

    $config['censor_replacement'] = 'tisk tisk';

**Also found in CP:** `Settings --> Word Censoring`: [Censoring Replacement Word](control-panel/settings/word-censor.md#replacement-characters)

### `censored_words`

Specify a list of words to censor. Wildcards are allowed. For example, `test*` would censor the words "test", "testing", and "tester", while `*gress` would censor the words "progress" and "congress".

| Value | Description                            |
| ----- | -------------------------------------- |
| word  | Pipe-delimited list of words to censor |

Example Usage:

    $config['censored_words'] = 'dagnabbit|consarnit|golly gee willikers';

**Also found in CP:** `Settings --> Word Censoring`: [Censored Words](control-panel/settings/word-censor.md#words-to-censor)

### `channel_form_overwrite`

Allows Channel Form authors to overwrite *their own files only* when uploading files named the same as files previously uploaded by that author.

| Value | Behavior                                                                 |
|-------|--------------------------------------------------------------------------|
| y     | Allow Channel Form authors to overwrite their own files                  |
| n     | Files are appended with a number, leaving existing files alone (default) |

Example Usage:

    $config['channel_form_overwrite'] = 'y';

### `charset`

Specify which character set for the system to use by default.

WARN: **Warning:** Unless you have good reason and you know what you're doing, leave this setting at its default value of `UTF-8`.

| Value   | Description              |
| ------- | ------------------------ |
| charset | Character set to be used |

Example Usage:

    $config['charset'] = 'UTF-8';

### `code_block_pre`

Custom markup to use wrap `[code]` blocks, works with `code_block_post` below to wrap the standard `<pre><code>...</code></pre>` with your custom markup.

| Value          | Description                       |
| -------------- | --------------------------------- |
| code_block_pre | Markup to prepend to code blocks. |

Example Usage:

    $config['code_block_pre'] = '<div class="codeblock">';
    $config['code_block_post'] = '</div>';

### `code_block_post`

Custom markup to use wrap `[code]` blocks, works with `code_block_pre` above to wrap the standard `<pre><code>...</code></pre>` with your custom markup.

| Value           | Description                      |
| --------------- | -------------------------------- |
| code_block_post | Markup to append to code blocks. |

Example Usage:

    $config['code_block_pre'] = '<div class="codeblock">';
    $config['code_block_post'] = '</div>';

### `codemirror_height`

Set the height of any CodeMirror textareas in the control panel, such as the Template Editor.

| Value             | Description                  |
| ----------------- | ---------------------------- |
| codemirror_height | Height to use, in CSS units. |

Example Usage:

    $config['codemirror_height'] = '18em';

### `comment_edit_time_limit`

Set the length of time in seconds that members have to edit their comments on the front end of the site. Set to `0` for no limit. Members in the Super Admin group are exempt from this time limit.

| Value   | Description               |
| ------- | ------------------------- |
| integer | Length of time in seconds |

Example Usage:

    $config['comment_edit_time_limit'] = '120';

**Also found in CP:** `Settings --> Comment Settings`: [Comment Editing Time Limit](comment/control-panel.md#comment-editing-time-limit)

### `comment_moderation_override`

By default, comments are no longer accepted for entries after their comment expiration date has passed. Set this preference to override that behavior and allow moderated comments on entries after comment expiration.

| Value | Behavior                                                     |
| ----- | ------------------------------------------------------------ |
| y     | Allow moderated comments after comment expiration            |
| n     | Do not allow any comments after comment expiration (default) |

Example Usage:

    $config['comment_moderation_override'] = 'y';

**Also found in CP:** `Settings --> Comment Settings`: [Moderate expired entries](comment/control-panel.md#moderate-after-comments-expire)

### `comment_word_censoring`

Apply word censoring to comments, even if censoring is not [enabled](general/system-configuration-overrides.md#enable_censoring) system-wide.

| Value | Behavior                                              |
| ----- | ----------------------------------------------------- |
| y     | Enable censoring for comments                         |
| n     | Obey system-wide setting `enable_censoring` (default) |

Example Usage:

    $config['comment_word_censoring'] = 'y';

**Also found in CP:** `Settings --> Comment Settings`: [Force word censoring for comments](comment/control-panel.md#enable-word-censoring)

### `cookie_domain`

Optionally specify a domain the cookie is available to. By default, the exact hostname of the requested page is set as the cookie domain. For example, if the page at `http://www.example.com/blog/an-entry-title` is loaded and the cookie domain is left blank in ExpressionEngine's configuration, the browser will use `www.example.com` as the cookie domain. The browser will only make these cookies available when the page's hostname is _exactly_ `www.example.com`.

If the cookie domain is explicitly specified, however, the browser will make the cookie available whenever the requested page's hostname _contains_ the cookie domain. For example, setting the cookie domain to `.example.com` will ensure the cookie is shared whenever the requested page's hostname includes `example.com`, `www.example.com`, `admin.example.com`, `blog.example.com`, and so on.

If you're running multiple subdomains on a single ExpressionEngine installation and want member sessions to be valid across all subdomains, you should explicitly set the cookie domain.

NOTE: **Note:** There's an important difference between `example.com` and `.example.com`. When the cookie domain begins with a dot, browsers match any hostname that _includes_ the cookie domain. Without the dot prefix, browsers are looking for an exact hostname match in the URL, which means cookies will not be available to subdomains. A cookie set by PHP with an explicitly specified cookie domain will always include the dot prefix, whether or not one is included in this ExpressionEngine setting. For clarity's sake, the examples here include a leading dot when the cookie domain is being explicitly set.

NOTE: **Note:** Browsers will not save cookies if the specified cookie domain isn't included in the request's hostname. In other words, a site can only set cookies for `.example.com` if its hostname actually includes `example.com`.

| Value     | Behavior                                                            |
| --------- | ------------------------------------------------------------------- |
| .hostname | Makes browser cookies available to web requests at the given domain |

Example Usage:

    $config['cookie_domain'] = '.example.com';

**Also found in CP:** `Settings --> Security & Privacy`: [Cookie Domain](control-panel/settings/security-privacy.md#domain)

### `cookie_httponly`

Set the HttpOnly flag when setting a cookie. The HttpOnly flag is a security feature for cookies that prevents a client side script from accessing or deleting the cookie (if the browser supports it, as most modern browsers do). [Learn more.](https://www.owasp.org/index.php/HttpOnly)

| Value | Behavior                    |
| ----- | --------------------------- |
| y     | Set HttpOnly flag (default) |
| n     | Do not set HttpOnly flag    |

Example Usage:

    $config['cookie_httponly'] = 'n';

### `cookie_path`

Optionally specify a cookie path. When a cookie path is set, the browser will only share cookies with ExpressionEngine when the beginning of the URL path matches the cookie path. For example, if the cookie path is set to `/blog/`, a cookie for the domain `example.com` will only be sent by the browser if the URL begins with `https://example.com/blog/`. This can be useful if you have ExpressionEngine installed in a sub-directory and want to ensure that only that particular installation has access to the cookies it sets.

| Value | Behavior                                                  |
| ----- | --------------------------------------------------------- |
| path  | Restricts cookie sharing to pages with matching URL paths |

Example Usage:

    $config['cookie_path'] = '/blog/';

**Also found in CP:** `Settings --> Security & Privacy`: [Cookie Path](control-panel/settings/security-privacy.md#path)

### `cookie_prefix`

Specify a prefix for the cookie name set by ExpressionEngine. This protects against collisions from separate ExpressionEngine installations on the same [cookie domain](#cookie_domain).

| Value | Description                                  |
| ----- | -------------------------------------------- |
| text  | A word used as the prefix to the cookie name |

Example Usage:

    $config['cookie_prefix'] = 'site1';

**Also found in CP:** `Settings --> Security & Privacy`: [Cookie Prefix](control-panel/settings/security-privacy.md#prefix)

### `cookie_secure`

Require a secure connection (HTTPS) for ExpressionEngine to set cookies.

| Value | Behavior                                                    |
| ----- | ----------------------------------------------------------- |
| y     | Require a secure connection to set cookies                  |
| n     | Do not require a secure connection to set cookies (default) |

Example Usage:

    $config['cookie_secure'] = 'y';

### `cp_session_type`

Set the method for session handling in the Control Panel.

NOTE: **Note:** The _Auto log-in on future visits?_ option appears on the CP login screen when the **cookies only** method is used, allowing users to remain logged-in to the CP for up to 2 weeks since their last visit.

| Value | Behavior                                  |
| ----- | ----------------------------------------- |
| c     | Use cookies only                          |
| s     | Use session ID only                       |
| cs    | Use both cookies and session ID (default) |

Example Usage:

    $config['cp_session_type'] = 's';

**Also found in CP:** `Settings --> Security & Privacy`: [Control Panel Session Type](control-panel/settings/security-privacy.md#cp-session-type)

### `cp_url`

Set the full URL to your Control Panel.

| Value | Description                        |
| ----- | ---------------------------------- |
| URL   | The full URL to your Control Panel |

Example Usage:

    $config['cp_url'] = 'https://example.com/admin.php';

Also available for use in the [site index file](#site-index-file), `index.php`, and the [CP index file](#cp-index-file), `admin.php`. Example Usage:

    $assign_to_config['cp_url'] = 'http://domain2.com/admin.php';

**Also found in CP:** `Settings --> URL and Path Settings`: [URL to your Control Panel index page](control-panel/settings/urls.md#control-panel-directory)

### `date_format`

Set the default format for displaying dates. If [allow_member_localization](#allow_member_localization) is enabled and a member has their own localization preference set, that will override this setting.

| Value | Description                                                                                                                    |
| ----- | ------------------------------------------------------------------------------------------------------------------------------ |
| code  | Format string using date formatting codes [date formatting codes](templates/date-variable-formatting.md#date-formatting-codes) |

Example Usage:

    $config['date_format'] = '%F %d %Y';

### `db_backup_row_limit`

When using the [Database Backup Utility](control-panel/utilities.md#database-backup-utility), some databases and PHP configurations may cause the backup utility to run out of memory while creating the backup. This config sets the maximum number of rows that will be queried and written to the backup file at a time. If you run into an out-of-memory error, try setting this to a lower number than the default to have the utility work in smaller batches.

| Value    | Description                     |
| -------- | ------------------------------- |
| integer  | Number of rows, default is 4000 |

Example Usage:

    $config['db_backup_row_limit'] = 2000;

### `debug`

Set display preferences for PHP and database error messages.

NOTE: **Note:** Error messages are helpful for troubleshooting and catching errors during development, but since they can contain confusing language or reveal sensitive system information like file paths, we strongly recommend only showing them to Super Admin-level users once the site is in production.

| Value | Behavior                                              |
| ----- | ----------------------------------------------------- |
| 0     | Hide PHP/SQL error messages                           |
| 1     | Show PHP/SQL error messages to only Super Admin users |
| 2     | Show PHP/SQL error messages all users NOT SECURE      |

Example Usage:

    $config['debug'] = '1';

**Also found in CP:** `Settings --> Debugging & Output`: [Debug Preference](control-panel/settings/debug-output.md#enable-error-reporting)

### `default_member_group`

Set the member group to which new users will be assigned.

| Value   | Description     |
| ------- | --------------- |
| integer | Member group ID |

Example Usage:

    $config['default_member_group'] = '6';

**Also found in CP:** `Settings --> Members`: [Default Member Group Assigned to New Members](control-panel/settings/members.md#default-member-group)

### `default_site_timezone`

Set the default timezone. All dates and times displayed by ExpressionEngine will be localized to this timezone unless overridden by a member's own localization preferences.

| Value    | Behavior                          |
| -------- | --------------------------------- |
| timezone | A valid timezone supported by PHP |

Example Usage:

    $config['default_site_timezone'] = 'America/Los_Angeles';

**Also found in CP:** `Settings --> General Settings`: [Site Timezone](control-panel/settings/general.md#timezone)

### `deft_lang`

Set the default language. ExpressionEngine ships with English, and additional [language packs](general/languages.md) are available for download.

| Value    | Description                                               |
| -------- | --------------------------------------------------------- |
| language | Name of language directory found in system/user/language/ |

Example Usage:

    $config['deft_lang'] = 'french';

### `deny_duplicate_data`

Set whether to reject duplicate data submissions. This feature blocks a comment if an identical one already exists on the site.

| Value | Behavior                                                       |
| ----- | -------------------------------------------------------------- |
| y     | Enable protection against duplicate data submissions (default) |
| n     | Disable protection against duplicate data submissions          |

Example Usage:

    $config['deny_duplicate_data'] = 'n';

**Also found in CP:** `Settings --> Security & Privacy`: [Deny Duplicate Data](security/spam-protection.md#deny-duplicate-data)

### `disable_all_tracking`

This is an emergency override which will disable all tracking when enabled. This is useful for server administrators who need a way to respond immediately to a traffic spike to help keep the site running smoothly.

NOTE: **Note:** Hit tracking features are disabled by default, so if you have not intentionally enabled them, you can ignore this setting. It is only useful if you have enabled [Hit Tracking](control-panel/settings/hit-tracking.md) and can't access your control panel to disable them. In that rare instance, you can add this to your `config.php` file as an emergency override.

| Value | Behavior                                                  |
| ----- | --------------------------------------------------------- |
| y     | Disables all tracking (User, Template, Channel, Referrer) |

Example Usage:

    $config['disable_all_tracking'] = 'y';

### `disable_csrf_protection`

CSRF protection prevents automated scripts (the most common way spam is generated) from repeatedly submitting comments or other form data. A submission is only allowed when a user manually loads a page and submits the form from your site.

| Value | Behavior                         |
| ----- | -------------------------------- |
| y     | Disable CSRF protection          |
| n     | Enable CSRF protection (default) |

Example Usage:

    $config['disable_csrf_protection'] = 'y';

### `disable_tag_caching`

WARN: **Warning:** Use only under extreme circumstances.

Disables tag caching, which if used unwisely on a high traffic site can lead to disastrous disk i/o. This setting allows quick thinking admins to temporarily disable it without hacking or modifying folder permissions.

| Value | Behavior                     |
| ----- | ---------------------------- |
| y     | Disable tag caching          |
| n     | Enable tag caching (default) |

Example Usage:

    $config['disable_tag_caching'] = 'y';

### `dynamic_tracking_disabling`

Set a value for the maximum number of online visitors to track. Once this value is exceeded, all of the tracking features will be temporarily disabled until the number of online visitors drops below the indicated value. Recommended values for this feature will vary based on your hosting environment. Check with your server administrator to discuss reasonable limits for your site.

NOTE: **Note:** [Online User Tracking](#enable_online_user_tracking) must be enabled for this feature to work.

| Value   | Behavior                                   |
| ------- | ------------------------------------------ |
| integer | Maximum number of online visitors to track |

Example Usage:

    $config['dynamic_tracking_disabling'] = '350';

**Also found in CP:** `Settings --> Hit Tracking`: [Suspend ALL tracking when number of online visitors exceeds](control-panel/settings/hit-tracking.md#suspend-threshold):

### `email_batch_size`

Set the number of emails to be sent in each batch. The batch size you should use depend on many things; among them the email protocol you have chosen, the server configuration, and the server power, so you may need to experiment a little to get it right.

NOTE: **Note:** [Batch mode](#email_batchmode) must be enabled.

If you are using one of the more robust mail protocols, like Sendmail or SMTP, you can set a greater batch total, possibly as high as several hundred or even more if you are on a dedicated server. A batch size of 300 in these cases is a good starting point. If you are having goo$1 $2uccess you can increase it until you begin experiencing time-outs.

NOTE: **Note:** Unless your mailing list numbers in the thousands, you won't notice much of a speed gain from setting large batches. If you are using the less efficient "PHP mail" protocol then you will usually need to set a lower batch size; 50-100 is typical.

| Value   | Description                    |
| ------- | ------------------------------ |
| integer | The number of emails per batch |

Example Usage:

    $config['email_batch_size'] = '300';

### `email_batchmode`

Set whether to send email via the Communicate section of the Control Panel in batches.

This mode splits up large numbers of emails into small batches which are sent at short intervals. This gives you the ability to send email to very large mailing lists without running up against your server's execution time limit. By default, PHP limits any process to 30 seconds, which is not enough time to send a large amount of email. Enabling the batch mode can prevent server time-outs. A secondary benefit is that it is less taxing on your mail server and, in the case of people on shared hosting accounts, less likely to cause problems with your server administrator.

| Value | Behavior                     |
| ----- | ---------------------------- |
| y     | Enable batch mode            |
| n     | Disable batch mode (default) |

Example Usage:

    $config['email_batchmode'] = 'y';

### `email_charset`

Set the character encoding used on the content of outgoing messages.

| Value    | Description                                    |
| -------- | ---------------------------------------------- |
| encoding | Encoding to use for content of outgoing emails |

Example Usage:

    $config['email_charset'] = 'utf-8';

**Also found in CP:** `Settings --> Outgoing Email`: [Email Character Encoding](control-panel/settings/email.md#character-encoding)

### `email_console_timelock`

Set the number of minutes that must lapse before a member is allowed to send another email.

NOTE: **Note:** This only applies to the Email Console in the member profile pages.

| Value   | Description                                                                        |
| ------- | ---------------------------------------------------------------------------------- |
| integer | Number of minutes that must lapse before a member is allowed to send another email |

Example Usage:

    $config['email_console_timelock'] = '300';

### `email_crlf`

If set, this overrides the core Email class setting for crlf characters in quoted-printable encoded emails (Email class \$crlf property).

| Value | Behavior                                                                                      |
| ----- | --------------------------------------------------------------------------------------------- |
| text  | Overrides the core Email class setting for crlf characters in quoted-printable encoded emails |

Example Usage:

    $config['email_crlf'] = "\r\n";

NOTE: **Note:** Double quotes must be used around this value, as per example.

### `email_newline`

If set, overrides the core Email class setting for newline characters (Email class \$newline property).

| Value | Behavior                                                                                      |
| ----- | --------------------------------------------------------------------------------------------- |
| text  | Overrides the core Email class setting for crlf characters in quoted-printable encoded emails |

Example Usage:

    $config['email_newline'] = "\r\n";

NOTE: **Note:** Double quotes must be used around this value, as per example.

### `email_smtp_crypto`

Cryptographic protocol for SMTP, when a secure connection is required.

| Value      | Behavior                                              |
| ---------- | ----------------------------------------------------- |
| ssl        | Set the SMTP protocol to SSL (ssl://)                 |
| ---------- | --------                                              |
| tls        | Set the SMTP protocol to Opportunistic TLS (STARTTLS) |

Example Usage:

    $config['email_smtp_crypto'] = 'tls';

### `emoticon_url`

Set the URL to the base folder where smiley graphics are stored.

| Value | Description                            |
| ----- | -------------------------------------- |
| URL   | URL to the location of smiley graphics |

Example Usage:

    $config['emoticon_url'] = 'https://example.com/images/smileys/';

**Also found in CP:** `Settings --> Content & Design`: [URL to the folder containing your smileys](control-panel/settings/content-design.md#url)

### `enable_avatars`

If enabled, users can associate an image with their account that you can optionally display with entries, comments, and forum posts.

| Value | Behavior                 |
| ----- | ------------------------ |
| y     | Enable avatars (default) |
| n     | Disable avatars          |

Example Usage:

    $config['enable_avatars'] = 'n';

**Also found in CP:** `Settings --> Avatar Settings`: [Enable Avatars](control-panel/settings/avatars.md#allow-avatars)

### `enable_censoring`

If enabled, the system will censor any [specified words](#censored_words) in channel entries, comments, forum posts, etc. Censored words will be replaced with the [censoring replacement word](#censor_replacement).

| Value | Behavior                         |
| ----- | -------------------------------- |
| y     | Enable word censoring            |
| n     | Disable word censoring (default) |

Example Usage:

    $config['enable_censoring'] = 'y';

**Also found in CP:** `Settings --> Word Censorship`: [Enable Word Censoring](control-panel/settings/word-censor.md#enable-censorship)

### `enable_emoticons`

If enabled, smileys entered as text will be replaced by emoji.

| Value | Behavior                   |
| ----- | -------------------------- |
| y     | Enable emoticons (default) |
| n     | Disable emoticons          |

Example Usage:

    $config['enable_emoticons'] = 'y';

**Also found in CP:** `Settings --> Content & Design`: [Enable emoticons?](control-panel/settings/content-design.md#enable-emoticons)

### `enable_entry_view_tracking`

If enabled, the [Entry "Views" Tracking Tag](channels/entry-tracking.md) feature of the Channel module is available for use.

| Value | Behavior                         |
| ----- | -------------------------------- |
| y     | Enable tracking views            |
| n     | Disable tracking views (default) |

Example Usage:

    $config['enable_entry_view_tracking'] = 'y';

**Also found in CP:** `Settings --> Hit Tracking`: [Enable Channel Entry View Tracking](control-panel/settings/hit-tracking.md#enable-entry-view-tracking)

### `enable_hit_tracking`

If enabled, the hit will be tracked each time a template is loaded.

| Value | Behavior                               |
| ----- | -------------------------------------- |
| y     | Enable template hit tracking (default) |
| n     | Disable template hit tracking          |

Example Usage:

    $config['enable_hit_tracking'] = 'y';

**Also found in CP:** `Settings --> Hit Tracking`: [Enable Template Hit Tracking](control-panel/settings/hit-tracking.md#enable-template-hit-tracking)

### `enable_online_user_tracking`

If enabled, online user statistics are tracked and the user-based variables in the [Statistics](add-ons/statistics.md) module are available for use.

| Value | Behavior                               |
| ----- | -------------------------------------- |
| y     | Enable online user tracking            |
| n     | Disable online user tracking (default) |

Example Usage:

    $config['enable_online_user_tracking'] = 'y';

**Also found in CP:** `Settings --> Hit Tracking`: [Enable Online User Tracking](control-panel/settings/hit-tracking.md#enable-online-user-tracking)

### `enable_search_log`

If enabled, each searched term will be logged and can be viewed in the [Search Log](control-panel/system-logs.md#search-logs).

| Value | Behavior                         |
| ----- | -------------------------------- |
| y     | Enable search term log (default) |
| n     | Disable search term log          |

Example Usage:

    $config['enable_search_log'] = 'n';

### `enable_sql_caching`

Improves the speed at which the Channel Entries tag is rendered by caching queries that are normally executed dynamically.

| Value | Behavior                        |
| ----- | ------------------------------- |
| y     | Enable query caching            |
| n     | Disable query caching (default) |

Example Usage:

    $config['enable_sql_caching'] = 'n';

**Also found in CP:** `Settings --> Content & Design`: [Cache Dynamic Channel Queries](optimization/caching.md#dynamic-channel-query-caching)

### `enable_template_routes`

This setting toggles whether or not Template Routes are used. If this is set to no, templates will not be accessible by their routes. When disabled the Template Route options will not appear in the Template Manager.

| Value | Behavior                         |
| ----- | -------------------------------- |
| y     | Enable Template Routes (default) |
| n     | Disable Template Routes          |

Example Usage:

    $config['enable_template_routes'] = 'y';

### `enable_throttling`

If enabled, the system will throttle excessive web requests from potentially malicious users.

| Value | Behavior                     |
| ----- | ---------------------------- |
| y     | Enable throttling            |
| n     | Disable throttling (default) |

Example Usage:

    $config['enable_throttling'] = 'y';

**Also found in CP:** `Settings --> Access Throttling`: [Enable Throttling](control-panel/settings/throttling.md#enable-throttling)

### `encode_removed_text`

If set and `$this->encode_email` is set to `FALSE` in the Template class---which is not the default---this text will replace all instances of the [encode](templates/globals/single-variables.md#encode) global variable.

| Value | Description      |
| ----- | ---------------- |
| text  | Replacement text |

Example Usage:

    $config['encode_removed_text'] = 'Encoded emails not allowed';

### `encryption_key`

May be used by third parties as part of encoding and decoding encrypted data. The recommended length of the key is 32 characters (128 bits). The key should include numbers and uppercase and lowercase letters.

| Value  | Description |
| ------ | ----------- |
| string | Key value   |

Example Usage:

    $config['encryption_key'] = 'sy22k6QK6JzH38u4nLZ65bHOdK6VL89d';

### `expire_session_on_browser_close`

Set the system to end a user's session when the browser is closed. (In the case of Mac OS X, this means quitting the browser application.)

| Value | Behavior                                                     |
| ----- | ------------------------------------------------------------ |
| y     | Expire user session when the browser closes                  |
| n     | Do not expire user session when the browser closes (default) |

Example Usage:

    $config['expire_session_on_browser_close'] = 'y';

### `filename_increment`

Forces filenames of uploaded files to be unique. Secondary uploads of existing files or uploads that share a filename with an existing file will have an incrementing number appended to the filename.

| Value | Behavior                            |
| ----- | ----------------------------------- |
| y     | Force upload filenames to be unique |
| n     | Allow duplicate filenames (default) |

Example Usage:

    $config['filename_increment'] = 'y';

### `force_query_string`

If enabled, ExpressionEngine will render URLs with a question mark following `index.php` in order to pass along segment information as a standard query string:

    https://example.com?/channel/joe/

This is necessary for only a few types of web servers to process ExpressionEngine's URLs correctly. ExpressionEngine's default is a much more search-engine friendly format:

    https://example.com/channel/joe/

In rare circumstances, you may need to use this variable in conjunction with editing the `$qtype` variable in your main site `index.php` file.

| Value | Behavior                             |
| ----- | ------------------------------------ |
| y     | Forces query strings                 |
| n     | Do not force query strings (default) |

Example Usage:

    $config['force_query_string'] = 'y';

**Also found in CP:** `Settings --> Debugging & Output`: [Force URL query strings](control-panel/settings/debug-output.md#force-url-query-strings)

### `force_redirect`

If `redirect_submitted_links` is set to `y`, this setting can be used to show an interstitial message to the user to confirm they want to visit the link they clicked. This can prevent issues where a link looks like it leads to one place, but actually leads to another.

| Value | Behavior                                                                        |
| ----- | ------------------------------------------------------------------------------- |
| y     | Show interstitial redirect confirmation screen when a submitted link is clicked |
| n     | Do not force the interstitial screen                                            |

Example Usage:

    $config['force_redirect'] = 'y';

**Also found in CP:** `Settings --> Security & Privacy`: [Force redirect confirmation on submitted links? ](control-panel/settings/security-privacy.md#enable-rank-denial-to-submitted-links)

### `forum_is_installed`

Automatically enabled when the [Discussion Forum](add-ons/forum/index.md) module is installed.

| Value | Description                  |
| ----- | ---------------------------- |
| y     | Forum is installed (default) |
| n     | Forum is not installed       |

Example Usage:

    $config['forum_is_installed'] = 'y';

### `forum_trigger`

Sets the forum triggering word if the [Discussion Forum module is installed](add-ons/forum/index.md).

| Value | Description           |
| ----- | --------------------- |
| text  | Forum triggering word |

Example Usage:

    $config['forum_trigger'] = 'eerox';

**Also found in CP:** `Developer --> Add-Ons --> Discussion Forum Settings --> Edit`: [Forum Triggering Word](add-ons/forum/boards.md#forum-triggering-word)

### `gmail_duplication_prevention`

Gmail email addresses can optionally include any number of `.`'s and they're equivalent to the same address without `.`'s. For example `example@gmail.com` is the same as `e.x.a.m.p.l.e@gmail.com`. By default, ExpressionEngine prevents duplicate registration from the same address, but you can disable the prevention.

| Value | Behavior                                                    |
| ----- | ----------------------------------------------------------- |
| y     | Prevent duplicate Gmail addresses from signing up (default) |
| n     | Do not prevent duplicate Gmail addresses                    |

Example Usage:

    $config['gmail_duplication_prevention'] = 'n';

### `gzip_output`

Set the system to serve compressed front-end pages for faster load times as long as the requesting browser supports gzip compression, PHP's zlib extension is loaded, and the web server is not already serving compressed pages. It's a good idea to enable this setting in most production environments.

NOTE: **Note:** This setting only controls whether ExpressionEngine itself serves up compressed front-end pages. If the web server is configured to serve compressed pages, this setting will have no effect.

| Value | Behavior                                  |
| ----- | ----------------------------------------- |
| y     | Compress front-end pages if possible      |
| n     | Do not compress front-end pages (default) |

Example Usage:

    $config['gzip_output'] = 'y';

**Also found in CP:** `Settings --> Debugging & Output`: [Enable GZIP Output](control-panel/settings/debug-output.md#enable-gzip-compression)

### `hidden_template_indicator`

Specify the character(s) that denote a [hidden template](templates/overview.md#hidden-templates) when used to prefix a template name. The default is an underscore, e.g. `_my_hidden_template`.

| Value | Description                          |
| ----- | ------------------------------------ |
| text  | Hidden template indicator characters |

Example Usage:

    $config['hidden_template_indicator'] = '.';

### `hidden_template_404`

Set the system to show either a 404 page or the template group's index page when a hidden template is directly loaded in a browser.

Example Usage:

    $config['hidden_template_404'] = 'y';

### `htaccess_path`

Set the server path used by the [Blacklist/Whitelist](add-ons/blacklist.md) module to [write rules to your .htaccess file](add-ons/blacklist.md#writing-blacklist-to-htaccess-file).

| Value | Description                    |
| ----- | ------------------------------ |
| path  | Server path to .htaccess file. |

Example Usage:

    $config['htaccess_path'] = '/server/path/to/your/.htaccess/';

### `image_library_path`

Set the path to the selected image library.

NOTE: **Note:** If you choose ImageMagick or NetPBM as the [image_resize_protocol](#image_resize_protocol), you must specify the server path to that image library.

| Value | Description           |
| ----- | --------------------- |
| path  | Path to image library |

Example Usage:

    $config['image_library_path'] = '/usr/bin/';

**Also found in CP:** `Settings --> Content & Design`: [Image Converter Path](control-panel/settings/content-design.md#converter-path)

### `image_resize_protocol`

Specify the image manipulation library to use. You may need to contact your web host or sysadmin to determine which protocols are installed and available on your server.

NOTE: **Note:** If you choose ImageMagick or NetPBM, you must set [image_library_path](#image_library_path) in the configuration as well.

| Value       | Description         |
| ----------- | ------------------- |
| gd          | GD library          |
| gd2         | GD2 library         |
| imagemagick | ImageMagick library |
| netpbm      | NetPBM library      |

Example Usage:

    $config['image_resize_protocol'] = 'netpbm';

**Also found in CP:** `Settings --> Content & Design`: [Image Resizing Protocol](control-panel/settings/content-design.md#protocol)

### `include_seconds`

Set the system to include seconds when time is displayed in the interface.

| Value | Behavior                         |
| ----- | -------------------------------- |
| y     | Include seconds                  |
| n     | Do not include seconds (default) |

Example Usage:

    $config['include_seconds'] = 'y';

### ip2nation

Enable checks against the [IP to Nation](add-ons/ip-to-nation.md) database.

| Value | Behavior                             |
| ----- | ------------------------------------ |
| y     | Enable IP to Nation checks (default) |
| n     | Disable IP to Nation checks          |

Example Usage:

    $config['ip2nation'] = 'n';

### `is_site_on`

Specify whether the site should be viewable by the general public or taken offline. This can be helpful when performing maintenance on only one of several MSM sites.

NOTE: **Note:** This setting will have no effect unless [Multiple Site Manager](msm/overview.md) is installed and [multiple sites are enabled](#multiple_sites_enabled).

NOTE: **Note:** When used in the main configuration file, `config.php`, this setting has the same effect as [is_system_on](#is_system_on) since it will apply to all sites in the system.

| Value | Behavior                                  |
| ----- | ----------------------------------------- |
| y     | Makes site available to everyone          |
| n     | Makes site only available to Super Admins |

Example Usage:

    $config['is_site_on'] = 'n';

Also available for use in the [site index file](#site-index-file), `index.php`. Example Usage:

    $assign_to_config['is_site_on'] = 'n';

**Also found in CP:** `Settings --> General Settings`: Is site on?

### `is_system_on`

Specify whether the system's front-end should be viewable by the general public or taken offline. This can be helpful when performing maintenance.

| Value | Behavior                                    |
| ----- | ------------------------------------------- |
| y     | Makes system available to everyone          |
| n     | Makes system only available to Super Admins |

Example Usage:

    $config['is_system_on'] = 'y';

**Also found in CP:** `Settings --> General Settings`: [Is system on? ](control-panel/settings/general.md#website-online)

### `lockout_time`

Set the length of time a throttled visitor will be locked out of the site.

| Value   | Description                       |
| ------- | --------------------------------- |
| integer | Length of lockout time in seconds |

Example Usage:

    $config['lockout_time'] = '30';

**Also found in CP:** `Settings --> Access Throttling`: [Lockout Time](control-panel/settings/throttling.md#lockout-time)

### `log_date_format`

Set the timestamp format for all items added to the log file.

| Value  | Description     |
| ------ | --------------- |
| string | PHP date format |

Example Usage:

    $config['log_date_format'] = 'Y-m-d H:i:s';

### `log_email_console_msgs`

Enable logging of all messages sent via the email console in the member profile pages.

| Value | Behavior                 |
| ----- | ------------------------ |
| y     | Enable logging (default) |
| n     | Disable logging          |

Example Usage:

    $config['log_email_console_msgs'] = 'n';

### `log_referrers`

Enable referrer tracking. When enabled, one additional database access query will be performed for each page load so that the statistics can be generated.

| Value | Behavior                           |
| ----- | ---------------------------------- |
| y     | Enable referrer tracking (default) |
| n     | Disable referrers tracking         |

Example Usage:

    $config['log_referrers'] = 'n';

### `log_search_terms`

Unused in first party files, this configuration item exists to allow backwards compatibility for any third party add-ons using it.

### `log_threshold`

NOTE: **Note:** In order to save anything to log files, you'll need to create the `/system/user/log/` directory and ensure it's writable.

Set an error threshold to determine how much information is logged.

| Value | Behavior                                         |
| ----- | ------------------------------------------------ |
| 0     | Disables logging                                 |
| 1     | Errors (including PHP errors)                    |
| 2     | Errors & debug messages                          |
| 3     | Errors, debug messages, & informational messages |
| 4     | All messages                                     |

Example Usage:

    $config['log_threshold'] = '1';

### `mail_format`

Set the default mail format selection for emails sent via the Communicate section.

| Value | Description |
| ----- | ----------- |
| plain | Plain Text  |
| html  | HTML        |

Example Usage:

    $config['mail_format'] = 'plain';

**Also found in CP:** `Settings --> Outgoing Email`: [Default Mail Format](control-panel/settings/email.md#mail-format)

### `mail_protocol`

Set the system's method for sending email.

| Value    | Behavior |
| -------- | -------- |
| mail     | PHP Mail |
| smtp     | SMTP     |
| sendmail | Sendmail |

Example Usage:

    $config['mail_protocol'] = 'smtp';

**Also found in CP:** `Settings --> Outgoing Email`: [Email Protocol](control-panel/settings/email.md#protocol)

### `max_logged_searches`

Set the maximum number of most recent search terms to save in the [search log](#enable_search_log).

| Value   | Description                            |
| ------- | -------------------------------------- |
| integer | Maximum number of search terms to save |

Example Usage:

    $config['max_logged_searches'] = '500';

### `max_page_loads`

Set the maximum number of times a visitor is allowed to load your web pages within a given [time interval](#time_interval) before being locked out. If you set this preference to 5 page loads within 10 seconds, a user can not browse more than 5 pages within a 10 second interval or the throttling feature will be triggered, locking them out for the given [lockout time](#lockout_time).

| Value   | Description                  |
| ------- | ---------------------------- |
| integer | Maximum number of page loads |

Example Usage:

    $config['max_page_loads'] = '10';

**Also found in CP:** `Settings --> Access Throttling`: [Maximum Number of Page Loads](control-panel/settings/throttling.md#maximum-page-loads)

### `max_tmpl_revisions`

Set the maximum number of template revisions to save if [template revisions are enabled](#save_tmpl_revisions).

| Value   | Description                                  |
| ------- | -------------------------------------------- |
| integer | Maximum number of template revisions to save |

Example Usage:

    $config['max_tmpl_revisions'] = '10';

**Also found in CP:** `Settings --> Template Settings`: [Maximum Number of Revisions to Keep](control-panel/settings/template.md#maximum-revisions)

### `max_url_segments`

Set the maximum number of URL segments allows in requests made to your site.

| Value   | Description                                             |
| ------- | ------------------------------------------------------- |
| integer | Maximum number of URL segments to allow (default is 12) |

Example Usage:

    $config['max_url_segments'] = '12';

### `mbr_notification_emails`

List of email addresses to notify if [notification is enabled](#new_member_notification) for new member registrations.

| Value  | Description                             |
| ------ | --------------------------------------- |
| string | Comma-delimited list of email addresses |

Example Usage:

    $config['mbr_notification_emails'] = 'joe@example.com, jane@example.com';

**Also found in CP:** `Settings --> Members`: [Email address for notifications](control-panel/settings/members.md#notification-recipients)

### memcached

If Memcached is the specified [cache_driver](#cache_driver), allows configuration of multiple Memcached servers to be used for cache storage.

Example Usage:

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

### `member_theme`

Set the default member profile theme.

| Value | Description                                    |
| ----- | ---------------------------------------------- |
| theme | Name of theme directory found in themes/member |

Example Usage:

    $config['member_theme'] = 'default';

**Also found in CP:** `Settings --> Members`: [Default Member Profile Theme](control-panel/settings/members.md#member-profile-theme)

### `memberlist_order_by`

Set the default sorting criteria for the member list.

| Value          | Behavior                |
| -------------- | ----------------------- |
| total_posts    | Sorts by Total Posts    |
| screen_name    | Sorts by Screen Name    |
| total_comments | Sorts by Total Comments |
| total_entries  | Sorts by Total Entries  |
| join_date      | Sorts by Join Date      |

Example Usage:

    $config['memberlist_order_by'] = 'total_posts';

**Also found in CP:** `Settings --> Members`: [Member List - Sort By](control-panel/settings/members.md#sort-by)

### `mime_whitelist_additions`

With an array, add Mime Types to the whitelist.

Example Usage:

    $config['mime_whitelist_additions'] = array(
      'image/vnd.adobe.photoshop'
    );

### `mime_whitelist_member_exception`

Specify member IDs to exclude from Mime Type whitelist restrictions.

| Value | Description                        |
| ----- | ---------------------------------- |
| text  | Comma-delimited list of member IDs |

Example Usage:

    $config['mime_whitelist_member_exception'] = '3, 14, 83';

### `mime_whitelist_member_group_exception`

Specify member group IDs to exclude from Mime Type whitelist restrictions.

| Value | Description                              |
| ----- | ---------------------------------------- |
| text  | Comma-delimited list of member group IDs |

Example Usage:

    $config['mime_whitelist_member_group_exception'] = '2, 5';

### `moblog_allow_nontextareas`

Remove Moblog's textarea-only restriction for Channel Fields.

| Value | Behavior                                 |
| ----- | ---------------------------------------- |
| y     | Remove textarea-only restriction         |
| n     | Allow only textarea fieldtypes (default) |

Example Usage:

    $config['moblog_allow_nontextareas'] = 'y';

### `memberlist_row_limit`

Set the default number of rows for the member list to display.

| Value   | Description            |
| ------- | ---------------------- |
| integer | Default number of rows |

Example Usage:

    $config['memberlist_row_limit'] = '20';

**Also found in CP:** `Settings --> Members`: [Member List - Rows](control-panel/settings/members.md#total-results)

### `memberlist_sort_order`

Set the default member list sort order.

| Value | Behavior                            |
| ----- | ----------------------------------- |
| asc   | Sorts in ascending order            |
| desc  | Sorts in descending order (default) |

Example Usage:

    $config['memberlist_sort_order'] = 'desc';

**Also found in CP:** `Settings --> Members`: [Member List - Order](control-panel/settings/members.md#order-by)

### `multi_login_sites`

Sets the frontend login to apply to multiple sites.

| Value | Description            |
| ----- | ---------------------- |
| URLs  | URLs to frontend sites |

Example Usage:

    $config['multi_login_sites'] = 'https://example.com|http://different_example.com';

For more information, see [MSM multi site login](msm/overview.md#multi-site-login)

### `multiple_sites_enabled`

Enable Multiple Site Manager.

| Value | Behavior    |
| ----- | ----------- |
| y     | Enable MSM  |
| n     | Disable MSM |

Example Usage:

    $config['multiple_sites_enabled'] = 'y';

**Also found in CP:** `Settings --> General Settings`:

### `name_of_dictionary_file`

Filename for the dictionary file. The official dictionary file is [available for download](https://ellislab.com/asset/file/dictionary.zip). Must be used in combination with [allow_dictionary_pw](#allow_dictionary_pw).

| Value    | Description                                  |
| -------- | -------------------------------------------- |
| filename | Dictionary file found at system/user/config/ |

Example Usage:

    $config['name_of_dictionary_file'] = 'dictionary.txt';

**Also found in CP:** `Settings --> Security & Privacy`: [Name of Dictionary File](control-panel/settings/security-privacy.md#dictionary-file)

### `new_member_notification`

Enables notification of a [given notification list](#mbr_notification_emails) for new member registrations.

| Value | Behavior                       |
| ----- | ------------------------------ |
| y     | Enable notification            |
| n     | Disable notification (default) |

Example Usage:

    $config['new_member_notification'] = 'n';

**Also found in CP:** `Settings --> Members`: [Send new member notifications](control-panel/settings/members.md#enable-new-member-notifications)

### `new_posts_clear_caches`

Set caches to clear when new entries are posted.

NOTE: **Note:** If disabled, new entries will not appear until the cache expires.

| Value | Behavior                        |
| ----- | ------------------------------- |
| y     | New posts clear cache (default) |
| n     | New posts do not clear cache    |

Example Usage:

    $config['new_posts_clear_caches'] = 'n';

**Also found in CP:** `Settings --> Content & Design`: [Clear all caches when new entries are posted](control-panel/settings/content-design.md#clear-cache-for-new-entries)

### `new_version_check`

Set ExpressionEngine to periodically check for available updates.

| Value | Behavior                       |
| ----- | ------------------------------ |
| y     | Enable version check (default) |
| n     | Disable version check          |

Example Usage:

    $config['new_version_check'] = 'n';

**Also found in CP:** `Settings --> General Settings`: [New Version Auto Check](control-panel/settings/general.md#new-version-auto-check)

### `newrelic_app_name`

Sets the application name that is reported in the New Relic dashboard. If you're using New Relic to monitor the performance of multiple ExpressionEngine installations, you'll likely want those installations to show up separately in your New Relic dashboard.

| Value  | Description      |
| ------ | ---------------- |
| string | Application name |

Example Usage:

    $config['newrelic_app_name'] = 'My Site';

Also available for use in the [site index file](#site-index-file), `index.php`, and the [CP index file](#cp-index-file), `admin.php`. Example Usage:

    $assign_to_config['newrelic_app_name'] = 'My Second Site';

### `newrelic_include_version_number`

Whether or not to append the version number to the Application name in the New Relic dashboard.

| Value | Behavior                               |
| ----- | -------------------------------------- |
| y     | Append version number                  |
| n     | Do not append version number (default) |

Example Usage:

    $config['newrelic_include_version_number'] = 'y';

### `password_lockout`

If enabled, the system will lock a member account if more than four invalid login attempts are made within a [specified time period](#password_lockout_interval). This is designed to deter hackers from using collision attacks to guess poorly chosen passwords. The account remains locked for the duration of the password lockout time period.

| Value | Behavior                           |
| ----- | ---------------------------------- |
| y     | Enable password lockouts (default) |
| n     | Disable password lockouts          |

Example Usage:

    $config['password_lockout'] = 'n';

**Also found in CP:** `Settings --> Security & Privacy`: [Enable Password Lockout](control-panel/settings/security-privacy.md#enable-password-lock-out)

### `password_lockout_interval`

Set the time period for measuring [invalid login attempts](#password_lockout) and locking accounts.

| Value  | Behavior                                          |
| ------ | ------------------------------------------------- |
| number | Lockout interval, in minutes. (Decimals allowed.) |

Example Usage:

    $config['password_lockout_interval'] = '2.5';

**Also found in CP:** `Settings --> Security & Privacy`: [Time Interval for Lockout](control-panel/settings/security-privacy.md#password-lock-out-interval)

### `popup_link`

Specify whether links created by the [Typography class](development/legacy/libraries/typography.md) open in a new window.

| Value | Behavior                                                |
| ----- | ------------------------------------------------------- |
| y     | Links automatically open in new window                  |
| n     | Links do not automatically open in new window (default) |

Example Usage:

    $config['popup_link'] = 'y';

### `profile_trigger`

Set the triggering word for the front-end members section. The default is "member", and the word you set cannot be the name of an existing template group.

| Value | Description             |
| ----- | ----------------------- |
| text  | Profile triggering word |

Example Usage:

    $config['profile_trigger'] = 'accounts';

**Also found in CP:** `Settings --> URL and Path Settings`: [Profile Triggering Word](control-panel/settings/urls.md#profile-url-segment)

### `proxy_ips`

Whitelist of reverse proxy servers that may forward the visitor's IP address.

| Value        | Description                          |
| ------------ | ------------------------------------ |
| IP addresses | Comma-delimited list of IP addresses |

Example Usage:

    $config['proxy_ips'] = '10.0.1.25, 10.0.1.26';

### `prv_msg_throttling_period`

Set the length of time users must wait between sending private messages.

NOTE: **Note:** Restriction does not apply to members in the Super Admin group.

| Value   | Description                                  |
| ------- | -------------------------------------------- |
| integer | Throttling period in seconds (default is 30) |

Example Usage:

    $config['prv_msg_throttling_period'] = '60';

### `prv_msg_upload_path`

Set the server path to the private messages uploads directory.

| Value | Description                                                    |
| ----- | -------------------------------------------------------------- |
| path  | Full server path to writable private message uploads directory |

Example Usage:

    $config['prv_msg_upload_path'] = '/path/images/pm_attachments/';

**Also found in CP:** `Settings --> Messages`: [Server Path for Attachment Upload Directory](control-panel/settings/messages.md#upload-path)

### `prv_msg_waiting_period`

Set the length of time members must wait after registration before being allowed to send private messages.

NOTE: **Note:** Restriction does not apply to members in the Super Admin group.

| Value   | Description                       |
| ------- | --------------------------------- |
| integer | Wait time in hours (default is 1) |

Example Usage:

    $config['prv_msg_waiting_period'] = '4';

### `publish_page_title_focus`

Specify whether the title field should gain focus when the publish page is loaded.

| Value | Behavior                                                          |
| ----- | ----------------------------------------------------------------- |
| y     | Title field gains focus when the publish page is loaded (default) |
| n     | Title field does not gain focus when the publish page is loaded   |

Example Usage:

    $config['publish_page_title_focus'] = 'n';

### `pw_min_len`

Set the minimum number of characters allowed for member passwords.

| Value   | Description              |
| ------- | ------------------------ |
| integer | Minimum character length |

Example Usage:

    $config['pw_min_len'] = '8';

**Also found in CP:** `Settings --> Security & Privacy`: [Minimum Password Length](control-panel/settings/urls.md#profile-url-segment)

### `recount_batch_total`

Set the batch size for recounting statistics.

Because the recounting of statistics can impose some load on your server, the recounting is performed in batches. This setting allows you to define how large each processing batch should be. For most servers, a value of 1000 works well. For high-performance or dedicated servers you can increase this number and if your server is low on resources you may need to lower the number.

| Value   | Description |
| ------- | ----------- |
| integer | Batch size  |

Example Usage:

    $config['recount_batch_total'] = '200';

### `redirect_method`

Set the method the system uses for page redirection.

| Value    | Behavior                                                                         |
| -------- | -------------------------------------------------------------------------------- |
| redirect | Use header('Location: http://www.example.com/'); (default)                       |
| refresh  | Use header('Refresh: 0;url=http://www.example.com/'); (Windows servers) (slower) |

Example Usage:

    $config['redirect_method'] = 'redirect';

**Also found in CP:** `Settings --> Debugging & Output`: [Redirection Method](control-panel/settings/debug-output.md#redirection-type)

### `redirect_submitted_links`

Apply rank denial to user-submitted links. This feature rewrites links submitted in comments so they first point to an intermediate redirect page, helping deter comment spammers by preventing linked sites from gaining a search engine page rank advantage.

| Value | Behavior                      |
| ----- | ----------------------------- |
| y     | Enable rank denial            |
| n     | Disable rank denial (default) |

Example Usage:

    $config['redirect_submitted_links'] = 'y';

**Also found in CP:** `Settings --> Security & Privacy`: [Enable Rank Denial to submitted links? ](control-panel/settings/security-privacy.md#enable-rank-denial-to-submitted-links)

### redis

If Redis is the specified [cache_driver](#cache_driver), allows configuration of a Redis server to be used for cache storage.

Example Usage:

    $config['redis'] = array(
      'host' => '127.0.0.1',
      'password' => NULL,
      'port' => 6379,
      'timeout' => 0
    );

### `relaxed_track_views`

Allow [Entry Views Tracking](channels/entry-tracking.md) to work for ANY combination that results in only one entry being returned by the tag, including Channel query caching.

| Value | Behavior                                       |
| ----- | ---------------------------------------------- |
| y     | Enable relaxed Entry Views Tracking            |
| n     | Disable relaxed Entry Views Tracking (default) |

Example Usage:

    $config['relaxed_track_views'] = 'y';

### `remove_close_all_button`

Remove the button to close all HTML tags from the publish page and user-side HTML formatting buttons. Most browsers no longer need it.

| Value | Behavior                               |
| ----- | -------------------------------------- |
| y     | Remove the close all button            |
| n     | Display the close all button (default) |

Example Usage:

    $config['remove_close_all_button'] = 'y';

### `remove_unparsed_vars`

Remove unparsed ExpressionEngine variables upon output when the [debug](#debug) has been set to `0`.

| Value | Behavior                                                      |
| ----- | ------------------------------------------------------------- |
| y     | Remove unparsed ExpressionEngine variables                    |
| n     | Leave unparsed ExpressionEngine variables untouched (default) |

Example Usage:

    $config['remove_unparsed_vars'] = 'y';

### `req_mbr_activation`

Specify whether new member activation is automatic, requires email verification, or requires an administrator's approval.

| Value  | Behavior                                           |
| ------ | -------------------------------------------------- |
| none   | Automatically activate new member accounts         |
| email  | Require email verification for new member accounts |
| manual | Require administrator's approval                   |

Example Usage:

    $config['req_mbr_activation'] = 'none';

**Also found in CP:** `Settings --> Members`: [Require Member Account Activation](control-panel/settings/members.md#account-activation-type)

### `require_captcha`

When enabled, site visitors will be required to pass a CAPTCHA to submit any front-end form, including Channel Form, comment forms, and member registrations.

| Value | Behavior                                      |
| ----- | --------------------------------------------- |
| y     | Enable CAPTCHAS front-end forms               |
| n     | Disable CAPTCHAS on front-end forms (default) |

**Also found in CP:** `Settings --> CAPTCHA`: [Require CAPTCHA](control-panel/settings/captcha.md#require-captcha)

### `require_ip_for_login`

Require users have a valid IP address and browser user agent when logging in. This helps prevent hackers from logging in using direct socket connections or trying to access the system with a masked IP address.

| Value | Behavior                                              |
| ----- | ----------------------------------------------------- |
| y     | Require IP address and user agent for login (default) |
| n     | Do not require IP address and user agent for login    |

Example Usage:

    $config['require_ip_for_login'] = 'n';

**Also found in CP:** `Settings --> Security & Privacy`: [Require IP Address and User Agent for Login](control-panel/settings/security-privacy.md#require-user-agent-and-ip-for-login)

### `require_ip_for_posting`

Require users have a valid IP address and browser user agent when posting comments or Channel Form entries.

| Value | Behavior                                                |
| ----- | ------------------------------------------------------- |
| y     | Require IP address and user agent for posting (default) |
| n     | Do not require IP address and user agent for posting    |

Example Usage:

    $config['require_ip_for_posting'] = 'n';

**Also found in CP:** `Settings --> Security & Privacy`: [Require IP Address and User Agent for posting](control-panel/settings/security-privacy.md#require-user-agent-and-ip-for-posting)

### `require_secure_passwords`

Require users' passwords to contain at least one uppercase character, one lowercase character, and one numeric character. Passwords that follow this basic formula are much more difficult to guess.

| Value | Behavior                          |
| ----- | --------------------------------- |
| y     | Require secure password (default) |
| n     | Do not require secure passwords   |

Example Usage:

    $config['require_secure_passwords'] = 'n';

**Also found in CP:** `Settings --> Security & Privacy`: [Require Secure Passwords](control-panel/settings/security-privacy.md#require-secure-passwords)

### `require_terms_of_service`

Require new members to agree to your terms of service upon registration.

| Value | Behavior              |
| ----- | --------------------- |
| y     | Require TOS (default) |
| n     | Do not require TOS    |

Example Usage:

    $config['require_terms_of_service'] = 'n';

**Also found in CP:** `Settings --> Members`: [Require Terms of Service](control-panel/settings/members.md#require-terms-of-service)

### `reserved_category_word`

If [use_category_name](#use_category_name) is enabled, specify a word to use in category URLs to indicate to the system that the following segment is the category URL title. For example, if the indicator is set to "category" and the category URL title is "blogging":

    https://example.com/site/category/blogging/

The word you set cannot be the name of an existing template group or template.

| Value | Description            |
| ----- | ---------------------- |
| text  | Category URL indicator |

Example Usage:

    $config['reserved_category_word'] = 'category';

**Also found in CP:** `Settings --> URL and Path Settings`: [Category URL Indicator](control-panel/settings/urls.md#category-url-segment)

### `rte_default_toolset_id`

Set the default RTE toolset shown for any member that has not specifically chosen one in Rich Text Editor Preferences.

| Value      | Description            |
| ---------- | ---------------------- |
| toolset ID | Default RTE toolset ID |

Example Usage:

    $config['rte_default_toolset_id'] = '2';

**Also found in CP:** `Developer --> Add-Ons --> Rich Text Editor Settings`: [Default Toolset](control-panel/settings/urls.md#category-url-segment)

### `rte_enabled`

If enabled, the Rich Text Editor will be applied to any _Textarea (Rich Text)_ Channel Field. Otherwise, the field will appear as a normal textarea instead.

| Value | Behavior                             |
| ----- | ------------------------------------ |
| y     | Enable RTE (default)                 |
| n     | Disable RTE and show normal textarea |

Example Usage:

    $config['rte_enabled'] = 'y';

**Also found in CP:** `Developer --> Add-Ons --> Rich Text Editor Settings`: [Enable Rich Text Editor](control-panel/settings/urls.md#category-url-segment)

### `save_tmpl_files`

Enable the saving of templates as files.

| Value | Behavior                               |
| ----- | -------------------------------------- |
| y     | Templates are saved as files (default) |
| n     | Templates are not saved as files       |

Example Usage:

    $config['save_tmpl_files'] = 'y';

### `save_tmpl_globals`

Enable the saving of template global variables as files.

| Value | Behavior                                      |
| ----- | --------------------------------------------- |
| y     | Template globals are saved as files (default) |
| n     | Template globals are not saved as files       |

Example Usage:

    $config['save_tmpl_globals'] = 'y';

### `save_tmpl_revisions`

Enable template revisions. Template history is saved when changes are made within the [template editor](control-panel/template-manager.md#edit-template).

| Value | Behavior                                    |
| ----- | ------------------------------------------- |
| y     | Templates revisions are saved               |
| n     | Templates revisions are not saved (default) |

Example Usage:

    $config['save_tmpl_revisions'] = 'y';

**Also found in CP:** `Settings --> Template Settings`: [Save Template Revisions](control-panel/settings/template.md#save-template-revisions)

### `sc_certificate_id`

Specify the unique ID that is supplied by PayPal after providing them with a [public certificate](add-ons/simple-commerce/paypal-settings.md#public-certificate-path).

| Value  | Description    |
| ------ | -------------- |
| string | Certificate ID |

Example Usage:

    $config['sc_certificate_id'] = 'SX4DT7FDO1234';

**Also found in CP:** `Developer --> Add-Ons --> Simple Commerce Settings`: [ID Given to Public Certificate by PayPal](add-ons/simple-commerce/paypal-settings.md#public-certification-id)

### `sc_encrypt_buttons`

Enable encryption for PayPal purchase links and buttons created by Simple Commerce.

NOTE: **Important:** Enabling this requires that your server have [OpenSSL](http://php.net/manual/en/ref.openssl.php) support compiled in PHP. Ask your server administrator for this information.

NOTE: **Note:** Enabling this requires that you use a public certificate and private key. Please read the section on [Encrypted Website Payments](add-ons/simple-commerce/index.md#encrypted-website-payments) for full details. To be the most effective, you should set your PayPal account settings to only accept encrypted payments.

| Value | Behavior                     |
| ----- | ---------------------------- |
| y     | Enable encryption            |
| n     | Disable encryption (default) |

Example Usage:

    $config['sc_encrypt_buttons'] = 'y';

**Also found in CP:** `Developer --> Add-Ons --> Simple Commerce Settings`: [Encrypt PayPal Buttons and Links? ](add-ons/simple-commerce/paypal-settings.md#encrypt-paypal-buttons-and-links)

### `sc_paypal_account`

Specify the primary email address associated with the PayPal account processing payments for store purchases.

| Value  | Description                  |
| ------ | ---------------------------- |
| string | Primary PayPal email address |

Example Usage:

    $config['sc_paypal_account'] = 'paypal_email@example.com';

**Also found in CP:** `Developer --> Add-Ons --> Simple Commerce Settings`: [PayPal Account](add-ons/simple-commerce/paypal-settings.md#paypal-account-email)

### `sc_paypal_certificate`

Specify the path to the PayPal-provided certificate file. Please read the section on `simple_commerce_encrypted_payments` for full details.

NOTE: **Note:** ExpressionEngine must have read access to this directory, but for security we highly recommended you use a location above web root so that the certificate and key files are not accessible via the web.

| Value | Description                                 |
| ----- | ------------------------------------------- |
| path  | Full server path to PayPal certificate file |

Example Usage:

    $config['sc_paypal_certificate'] = "/path/to/paypal_certificate.pem";

**Also found in CP:** `Developer --> Add-Ons --> Simple Commerce Settings`: [PayPal Certificate Path](add-ons/simple-commerce/paypal-settings.md#paypal-certificate-path)

### `sc_private_key`

Specify the path to the private key file. Please read the section on `simple_commerce_encrypted_payments` for full details.

NOTE: **Note:** ExpressionEngine must have read access to this directory, but for security we highly recommended you use a location above web root so that the certificate and key files are not accessible via the web.

| Value | Description                          |
| ----- | ------------------------------------ |
| path  | Full server path to private key file |

Example Usage:

    $config['sc_private_key'] = "/path/to/private_key.pem";

**Also found in CP:** `Developer --> Add-Ons --> Simple Commerce Settings`: [Private Key Path](/add-ons/simple-commerce/paypal-settings.md#private-key-path)

### `sc_public_certificate`

Specify the path to the public certificate file. Please read the section on `simple_commerce_encrypted_payments` for full details.

NOTE: **Note:** ExpressionEngine must have read access to this directory, but for security we highly recommended you use a location above web root so that the certificate and key files are not accessible via the web.

| Value | Description                                 |
| ----- | ------------------------------------------- |
| path  | Full server path to public certificate file |

Example Usage:

    $config['sc_public_certificate'] = "/path/to/public_certificate.pem";

**Also found in CP:** `Developer --> Add-Ons --> Simple Commerce Settings`: [Public Certificate Path](add-ons/simple-commerce/paypal-settings.md#public-certificate-path)

### `sc_temp_path`

Specify the path to the temporarily stored encrypted files. Please read the section on `simple_commerce_encrypted_payments` for full details.

NOTE: **Note:** ExpressionEngine must have read access to this directory, but for security we highly recommended you use a location above web root so that the certificate and key files are not accessible via the web.

| Value | Description                                            |
| ----- | ------------------------------------------------------ |
| path  | Full server path to temporarily stored encrypted files |

Example Usage:

    $config['sc_temp_path'] = "/path/to/tmp";

**Also found in CP:** `Developer --> Add-Ons --> Simple Commerce Settings`: [Temporary Encrypted Files Path](add-ons/simple-commerce/paypal-settings.md#temporary-encrypted-files-path)

### `send_headers`

Specify whether the system should automatically send HTTP page headers when it serves pages to a visitor.

| Value | Behavior                            |
| ----- | ----------------------------------- |
| y     | System sends HTTP headers (default) |
| n     | System does not send HTTP headers   |

Example Usage:

    $config['send_headers'] = 'n';

**Also found in CP:** `Settings --> Debugging & Output`: [Generate HTTP Page Headers](control-panel/settings/debug-output.md#use-http-page-headers)

### `server_offset`

When a server's clock is off and you are unable to correct it at the server level, use this preference to correct the disparity. Use a positive integer to correct a server clock that is too slow, and a negative integer to correct a server clock that is too fast.

WARN: **Warning:** This preference permanently changes the value of timestamps as they are being written to the database. Changing this setting later on will not undo the offset already applied to existing timestamps. Rather than using this setting, we strongly urge you to work with your web host or sysadmin to correct the inaccurate server clock. In almost all cases, that's the best solution.

| Value   | Behavior                                                                 |
| ------- | ------------------------------------------------------------------------ |
| integer | Offsets the value of stored timestamps from given server time in minutes |

Example Usage:

    $config['server_offset'] = '-15';

### `show_profiler`

Enable Output Profiler. When enabled, Super Admins will see benchmark results, SQL queries, and submitted form data displayed at the bottom of the browser window. Template debugging is included on the front end.

| Value | Behavior                          |
| ----- | --------------------------------- |
| y     | Enable output profiler            |
| n     | Disable output profiler (default) |

Example Usage:

    $config['show_profiler'] = 'y';

**Also found in CP:** `Settings --> Debugging & Output`: [Display Output Profiler](control-panel/settings/debug-output.md#enable-debugging)

### `sig_allow_img_hotlink`

Specify whether members can link to images hosted on other websites as their signature image.

| Value | Behavior                                                 |
| ----- | -------------------------------------------------------- |
| y     | Allow linking to external sites' images                  |
| n     | Do not allow linking to external sites' images (default) |

Example Usage:

    $config['sig_allow_img_hotlink'] = 'n';

### `sig_allow_img_upload`

Set whether members can upload their own signature image.

| Value | Behavior                                                           |
| ----- | ------------------------------------------------------------------ |
| y     | Allow members to upload their own signature image                  |
| n     | Do not allow members to upload their own signature image (default) |

Example Usage:

    $config['sig_allow_img_upload'] = 'y';

### `sig_img_max_height`

Set the maximum height (in pixels) allowed for user-uploaded signature images.

| Value   | Description            |
| ------- | ---------------------- |
| integer | Max height (in pixels) |

Example Usage:

    $config['sig_img_max_height'] = '150';

### `sig_img_max_kb`

Set the maximum file size (in kilobytes) allowed for user-uploaded signature images.

| Value   | Description                  |
| ------- | ---------------------------- |
| integer | Max file size (in kilobytes) |

Example Usage:

    $config['sig_img_max_kb'] = '50';

### `sig_img_max_width`

Set the maximum width (in pixels) allowed for user-uploaded signature images.

| Value   | Description           |
| ------- | --------------------- |
| integer | Max width (in pixels) |

Example Usage:

    $config['sig_img_max_width'] = '150';

### `sig_img_path`

Set the server path to the signature images directory.

| Value | Description                                             |
| ----- | ------------------------------------------------------- |
| path  | Full server path to writable signature images directory |

Example Usage:

    $config['sig_img_path'] = '/path/image/folder/';

### `sig_img_url`

Set the URL to the signature images directory.

| Value | Description                       |
| ----- | --------------------------------- |
| URL   | URL to signature images directory |

Example Usage:

    $config['sig_img_url'] = 'https://example.com/images/signatures/';

### `sig_maxlength`

Set the maximum number of characters allowed in a member's signature.

| Value   | Description                                     |
| ------- | ----------------------------------------------- |
| integer | Max number of characters allowed in a signature |

Example Usage:

    $config['sig_maxlength'] = '500';

### `site_404`

Set which template should be displayed when a visitor tries to access an invalid URL.

| Value                        | Description               |
| ---------------------------- | ------------------------- |
| template_group/template_name | Template to show for 404s |

Example Usage:

    $config['site_404'] = 'site/404';

Also available for use in the [site index file](#site-index-file), `index.php`. Example Usage:

    $assign_to_config['site_404'] = 'site/notfound';

**Also found in CP:** `Settings --> Template Settings`: [404 Page](control-panel/settings/template.md#404-page)

### `site_index`

Set the filename of the [site index file](#site-index-file). By default, this will be `index.php`, which is located in the base folder. You will only need to alter this setting if you have changed the filename or you want to [remove index.php from your site's URLs](installation/best-practices.md#removing-indexphp-from-your-urls).

| Value    | Description                   |
| -------- | ----------------------------- |
| filename | Name of your sites index file |

Example Usage:

    $config['site_index'] = 'coolpage.php';

Also available for use in the [site index file](#site-index-file), `index.php`. Example Usage:

    $assign_to_config['site_index'] = 'secondsite.php';

**Also found in CP:** `Settings --> URL and Path Settings`: [Name of your site's index page](control-panel/settings/urls.md#website-index-page)

### `site_name`

Set the short name of the site. The site created upon installation is named `default_site`, so this is typically only helpful for additional sites in [MSM-enabled installations](msm/overview.md).

| Value     | Description     |
| --------- | --------------- |
| shortname | Site short name |

Available for use only in the [site index file](#site-index-file), `index.php`, and the [CP index file](#cp-index-file), `admin.php`. Example Usage:

    $assign_to_config['site_name'] = 'domain2_short_name';

**Also found in CP:** `Developer --> Site Manager --> Edit`

### `site_url`

Set the full URL to the site's web root.

| Value | Description                     |
| ----- | ------------------------------- |
| URL   | Full URL to the site's web root |

Example Usage:

    $config['site_url'] = 'https://example.com';

Also available for use in the [site index file](#site-index-file), `index.php`. Example Usage:

    $assign_to_config['site_url'] = 'http://domain2.com';

**Also found in CP:** `Settings --> URL and Path Settings`: [URL to the root directory of your site](control-panel/settings/urls.md#website-root-directory)

### `smart_static_parsing`

When enabled, parsing of embedded templates that are not saved as [static templates](control-panel/template-manager.md#create-template) will still be parsed as if they were, if at all possible (i.e. they contain no PHP or ExpressionEngine tags). This setting is enabled by default.

| Value | Behavior                              |
| ----- | ------------------------------------- |
| y     | Enable smart static parsing (default) |
| n     | Disable smart static parsing          |

Example Usage:

    $config['smart_static_parsing'] = 'n';

### `smtp_password`

If [mail protocol](#mail_protocol) is set to `smtp`, this sets the password the system will use to authenticate with the SMTP server. This information can be obtained from your email provider.

| Value    | Description   |
| -------- | ------------- |
| password | SMTP password |

Example Usage:

    $config['smtp_password'] = 'ic6XpWJnv4ip';

**Also found in CP:** `Settings --> Outgoing Email`: [SMTP Password](control-panel/settings/email.md#password)

### `smtp_port`

If [mail protocol](#mail_protocol) is set to `smtp`, this sets the mail server port. This information can be obtained from your email provider.

| Value | Description               |
| ----- | ------------------------- |
| port  | SMTP port (default is 25) |

Example Usage:

    $config['smtp_port'] = '2525';

### `smtp_server`

If [mail protocol](#mail_protocol) is set to `smtp`, this sets the mail server hostname. This information can be obtained from your email provider.

NOTE: **Note:** You can connect to SSL servers as long as OpenSSL is installed on the server hosting ExpressionEngine. Please check with your server administrator to confirm.

| Value    | Description          |
| -------- | -------------------- |
| hostname | SMTP server hostname |

Example Usage:

    $config['smtp_server'] = 'mail.example.com';

**Also found in CP:** `Settings --> Outgoing Email`: [SMTP Server Address](control-panel/settings/email.md#server-address)

### `smtp_username`

If [mail protocol](#mail_protocol) is set to `smtp`, this sets the username the system will use to authenticate with the SMTP server. This information can be obtained from your email provider.

| Value    | Description   |
| -------- | ------------- |
| username | SMTP username |

Example Usage:

    $config['smtp_username'] = 'joe@example.com';

**Also found in CP:** `Settings --> Outgoing Email`: [SMTP Username](control-panel/settings/email.md#username)

### `spellcheck_language_code`

Set the language used by spell check.

| Value         | Description                                      |
| ------------- | ------------------------------------------------ |
| language code | 2 letter ISO 639 language code (e.g. en, es, de) |

Example Usage:

    $config['spellcheck_language_code'] = 'en';

### `strict_urls`

Set whether the system will allow templates from your default template group to be directly accessed in the first URL segment. If enabled, the system will require that the first URL segment be a valid template group only or a 404 page will be shown.

| Value | Behavior                     |
| ----- | ---------------------------- |
| y     | Enable Strict URLs (default) |
| n     | Disable Strict URLs          |

Example Usage:

    $config['strict_urls'] = 'n';

**Also found in CP:** `Settings --> Template Settings`: [Enable Strict URLs](control-panel/settings/template.md#enable-strict-urls)

### `template`

Sets the default template. Must be used with [template_group](#template_group), and the two overrides together set the template group and template shown on the front-end when the site is loaded without anything in the [URL segments](templates/globals/url-segments.md).

| Value    | Description   |
| -------- | ------------- |
| template | Template name |

Example Usage:

    $config['template'] = 'index';

Also available for use in the [site index file](#site-index-file), `index.php`. Example Usage:

    $assign_to_config['template'] = 'index';

**Also found in CP:** `Developer --> Templates --> New/Edit`: Make the index template in this group your site's home page?

### `template_group`

Sets the default template group. Must be used with [template](#template), and the two overrides together set the template group and template shown on the front-end when the site is loaded without anything in the [URL segments](templates/globals/url-segments.md).

| Value          | Description         |
| -------------- | ------------------- |
| template group | Template group name |

Example Usage:

    $config['template_group'] = 'about';

Also available for use in the [site index file](#site-index-file), `index.php`. Example Usage:

    $assign_to_config['template_group'] = 'site_2';

**Also found in CP:** `Developer --> Templates --> New/Edit`: Make the index template in this group your site's home page?

### `theme_folder_path`

Set the server path to the `themes` directory.

| Value | Description                         |
| ----- | ----------------------------------- |
| path  | Server path to the themes directory |

Example Usage:

    $config['theme_folder_path'] = '/home/usr/domain.com/public_html/themes/';

**Also found in CP:** `Settings --> URL and Path Settings`: [Theme Folder Path](control-panel/settings/urls.md#themes-path)

### `theme_folder_url`

Set the URL to the `themes` directory.

| Value | Description                 |
| ----- | --------------------------- |
| URL   | URL to the themes directory |

Example Usage:

    $config['theme_folder_url'] = 'https://example.com/themes/';

**Also found in CP:** `Settings --> URL and Path Settings`: [URL to your "themes" folder](control-panel/settings/urls.md#themes-directory)

### `time_format`

Set default time format to either 12- or 24-hour time format.

| Value | Description         |
| ----- | ------------------- |
| 12    | 12-hour time format |
| 24    | 24-hour time format |

Example Usage:

    $config['time_format'] = '24';

### `time_interval`

Set the time interval for measuring the [number of page loads](#max_page_loads) that will trigger throttling. If you set this preference to 5 page loads within 10 seconds, a user can not browse more than 5 pages within a 10 second interval or the throttling feature will be triggered, locking them out for the given [lockout time](#lockout_time).

| Value   | Description              |
| ------- | ------------------------ |
| integer | Time interval in seconds |

Example Usage:

    $config['max_page_loads'] = '10';

**Also found in CP:** `Settings --> Access Throttling`: [Time Interval](control-panel/settings/throttling.md#time-interval)

### `un_min_len`

Set the minimum number of characters allowed for member usernames.

| Value   | Description              |
| ------- | ------------------------ |
| integer | Minimum character length |

Example Usage:

    $config['un_min_len'] = '5';

**Also found in CP:** `Settings --> Security & Privacy`: [Minimum Username Length](control-panel/settings/security-privacy.md#minimum-username-length)

### `upload_file_name_blacklist`

With an array, add a case insensitive list of file names that cannot be uploaded.

Example Usage:

    $config['upload_file_name_blacklist'] = array(
      'logo.png',
    );

### `upload_preferences`

With an associative array, specify upload destination paths, URLs, and titles.

NOTE: **Note:** Each key in the array is optional and only overrides existing values in the database. New upload destinations cannot be created using this config override.

Example Usage:

    $config['upload_preferences'] = array(
        1 => array(                                                            // ID of upload destination
            'name'        => 'Staging Image Uploads',                          // Display name in control panel
            'server_path' => '/home/user/example.com/staging/images/uploads/', // Server path to upload directory
            'url'         => 'http://staging.example.com/images/uploads/'      // URL of upload directory
        )
    );

**Also found in CP:** `Files`: [Edit Upload Destination](control-panel/file-manager.md#createedit-upload-directory)

### `uri_protocol`

Specify which server global should be used to retrieve the URI string. The default setting of `AUTO` works for most servers. [Learn more](http://www.php.net/manual/en/reserved.variables.server.php) about these server globals.

| Value          | Behavior                    |
| -------------- | --------------------------- |
| AUTO           | Default value, auto detects |
| PATH_INFO      | Uses the PATH_INFO          |
| QUERY_STRING   | Uses the QUERY_STRING       |
| REQUEST_URI    | Uses the REQUEST_URI        |
| ORIG_PATH_INFO | Uses the ORIG_PATH_INFO     |

Example Usage:

    $config['uri_protocol'] = 'PATH_INFO';

### `use_category_name`

Set the system to generate category links with category URL titles rather than the numeric category indicator (e.g. `/C12/`).

| Value | Behavior                                                  |
| ----- | --------------------------------------------------------- |
| y     | Enable category links with category URL titles            |
| n     | Disable category links with category URL titles (default) |

Example Usage:

    $config['use_category_name'] = 'y';

**Also found in CP:** `Settings --> URL and Path Settings`: [Use Category URL Titles In Links? ](control-panel/settings/urls.md#category-url)

### `use_forum_url`

Set the system to use the forum URL specified in the [forum board preferences](add-ons/forum/boards.md#forum-url) rather than the [the main site URL](#site_url) to form the forum's URL.

| Value | Behavior                                   |
| ----- | ------------------------------------------ |
| y     | Use forum URL from forum board preferences |
| n     | Use main site URL (default)                |

Example Usage:

    $config['use_forum_url'] = 'y';

### `use_newrelic`

When enabled, New Relic will add [Real User Monitoring JavaScript](https://newrelic.com/docs/features/real-user-monitoring) to all ExpressionEngine-powered pages on both the front-end and in the CP.

| Value | Behavior                                  |
| ----- | ----------------------------------------- |
| y     | Enable New Relic RUM JavaScript (default) |
| n     | Disable New Relic RUM JavaScript          |

Example Usage:

    $config['use_newrelic'] = 'y';

### `webmaster_email`

Set the site's return email address for auto-generated emails.

| Value | Description                                    |
| ----- | ---------------------------------------------- |
| email | Return email address for auto-generated emails |

Example Usage:

    $config['webmaster_email'] = 'hello@example.com';

**Also found in CP:** `Settings --> Outgoing Email`: [Return email address for auto-generated emails](control-panel/settings/email.md#address)

### `webmaster_name`

Set the _From_ name for auto-generated emails.

| Value  | Description                              |
| ------ | ---------------------------------------- |
| string | The From name for auto-generated emails. |

Example Usage:

    $config['webmaster_name'] = 'Your Favorite Website';

**Also found in CP:** `Settings --> Outgoing Email`: [Webmaster or site name for auto-generated emails](control-panel/settings/email.md#from-name)

### `website_session_type`

Specify how sessions are handled on the front-end of the site.

| Value | Behavior                        |
| ----- | ------------------------------- |
| c     | Use cookies only (default)      |
| s     | Use session ID only             |
| cs    | Use both cookies and session ID |

Example Usage:

    $config['website_session_type'] = 'c';

**Also found in CP:** `Settings --> Security & Privacy`: [Website Session Type](control-panel/settings/security-privacy.md#website-session-type)

### `word_separator`

Specify the character the system will use to replace spaces when auto-generating a URL title based on the entry's title.

| Value      | Behavior                                       |
| ---------- | ---------------------------------------------- |
| dash       | Use a dash (-) as the word separator (default) |
| underscore | Use an underscore (\_) as the word separator   |

Example Usage:

    $config['word_separator'] = 'dash';

**Also found in CP:** `Settings --> URL and Path Settings`: [Word Separator for URL Titles](control-panel/settings/urls.md#url-title-separator)

### `x_frame_options`

Set the `X-Frame-Options` header to control where your site can be included in frames or iframes. This setting only affects the frontend of the site. The control panel will always use the default "SAMEORIGIN".

| Value      | Description                                                       |
| ---------- | ----------------------------------------------------------------- |
| NONE       | Disable the header, allow framing from anywhere (not recommended) |
| SAMEORIGIN | Only allow framing from the site itself (default)                 |
| DENY       | Do not allow framing of any sort                                  |

### `xml_lang`

Set the default XML language, typically used when outputting RSS feeds. Feeds will identify themselves as having the language specified here.

| Value         | Description                                      |
| ------------- | ------------------------------------------------ |
| language code | 2 letter ISO 639 language code (e.g. en, es, de) |

Example Usage:

    $config['xml_lang'] = 'en';

### `xss_clean_member_exception`

Specify member IDs to exclude from XSS cleaning.

| Value | Description                        |
| ----- | ---------------------------------- |
| text  | Comma-delimited list of member IDs |

Example Usage:

    $config['xss_clean_member_exception'] = '3, 14, 83';

### `xss_clean_member_group_exception`

Specify member group IDs to exclude from XSS cleaning.

| Value | Description                              |
| ----- | ---------------------------------------- |
| text  | Comma-delimited list of member group IDs |

Example Usage:

    $config['xss_clean_member_group_exception'] = '2, 5';
