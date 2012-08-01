Hidden Configuration Variables
==============================

Hidden configuration variables are placed in
system/expressionengine/config/config.php and are used to over-ride
default behavior. These are advanced configuration options that should
only be used by experienced ExpressionEngine users. More
performance-related configuration options can be found in
`Handling Extreme Traffic with ExpressionEngine <handling_extreme_traffic.html>`_.

.. contents::
	:local:
	
allow_textarea_tabs
~~~~~~~~~~~~~~~~~~~

**Value:** y/n

If not set the template editor and publish write mode allow for tabular
input. Set to n to disable all tab input, set to y to force tab
preservation in all publish textareas.

::

	$config['allow_textarea_tabs'] = 'y';

autosave_interval_seconds
~~~~~~~~~~~~~~~~~~~~~~~~~

**Value:** number, in seconds

This variable controls the number of seconds between each attempted
"autosave" when editing an entry

::

	$config['autosave_interval_seconds'] = '300';

autosave_prune_hours
~~~~~~~~~~~~~~~~~~~~

**Value:** number, in hours

This variable controls the number of hours that ExpressionEngine will
keep autosave data.

::

	$config['autosave_prune_hours'] = '6';

cp_session_ttl
~~~~~~~~~~~~~~

**Value:** time in seconds

Allows changing of the Control Panel Session Length to any number in
seconds. For instance, if users should be logged out after 10 minutes of
inactivity, the value would be: 600

::

	$config['cp_session_ttl'] = 600;

disable_tag_caching
~~~~~~~~~~~~~~~~~~~

**Value:** y/n

Disables tag caching, which if used unwisely on a high traffic site can
lead to disastrous disk i/o. This setting allows quick thinking admins
to temporarily disable it without hacking or modifying folder
permissions

::

	$config['disable_tag_caching'] = 'y';

encode_removed_text
~~~~~~~~~~~~~~~~~~~

**Value:** text string

If set, when an {encode=""} tag is encountered, but emails are not to be
encoded, this text will be displayed in place of the tag.

::

	$config['encode_removed_text'] = 'Encoded emails not allowed';

email_crlf
~~~~~~~~~~

**Value:** text string

If set, overrides the core Email class setting for crlf characters in
quoted-printable encoded emails (Email class $crlf property).

::

	$config['email_crlf'] = "\r\n";

email_newline
~~~~~~~~~~~~~

**Value:** text string

If set, overrides the core Email class setting for newline characters
(Email class $newline property).

::

	$config['email_newline'] = "\r\n";

email_smtp_port
~~~~~~~~~~~~~~~

**Value:** numeric string

If set, overrides the core Email class setting (25) for SMTP Port.
(Email class $smtp_port property).

::

	$config['email_smtp_port'] = "2525";

enable_db_caching
~~~~~~~~~~~~~~~~~

Forces ExpressionEngine to cache the output of database queries to text
files.

::

$config['enable_db_caching'] = "y";

When your visitors access your web pages, the cache files are
examined to see if the particular queries being requested exist in
cached form. If they do, ExpressionEngine uses the cached data instead
of querying your database.

In most environments, the database server is better suited to handle
its own caching. Therefore, we do not recommend that this option be
enabled unless it is specifically required.

Furthermore, some queries can not be cached this way because the syntax
of the query changes dynamically every time the query is run. A Channel
Entries query, for example, always matches the expiration date against
the current time in order to determine if entries have expired. This causes
the query to change slightly with each page load; thus it cannot use this
caching method. (See :ref:`dynamic-channel-query-caching` for an
alternative that can be used in many cases.)

hidden_template_404
~~~~~~~~~~~~~~~~~~~

**Value:** y/n

If a hidden template is encountered, the default behavior is to throw a
404. With this set to 'n', the template group's index page will be shown
instead.

::

	$config['hidden_template_404'] = 'n';

hidden_template_indicator
~~~~~~~~~~~~~~~~~~~~~~~~~

**Value:** text string

Set the character(s) to use at the beginning of a template name to
consider it a "hidden" template. Default is a period'.'

::

	$config['hidden_template_indicator'] = '_';

include_seconds
~~~~~~~~~~~~~~~

**Value:** y/n

When set to "y" seconds are included on human-readable dates in the
Control Panel forms.

::

	$config['include_seconds'] = 'y';

login_reminder
~~~~~~~~~~~~~~

**Value:** y/n

Whether or not to display a notice when the CP Session is about to
expire, allowing the user to log back in. Default is 'y'.

::

	$config['login_reminder'] = 'n';

moblog_allow_nontextareas
~~~~~~~~~~~~~~~~~~~~~~~~~

**Value:** y/n

Removes the textarea only restriction for fields in the moblog module.

::

	$config['moblog_allow_nontextareas'] = 'y';

popup_link
~~~~~~~~~~

**Value:** y/n

Determines whether or not links created by Typography class open in a
new window.

::

	$config['popup_link'] = 'y';

protect_javascript
~~~~~~~~~~~~~~~~~~

**Value:** y/n

Prevents the advanced conditionals parser from processing anything in
tags. By default, it's set to 'y'.

::

	$config['protect_javascript'] = 'y';

proxy_ips
~~~~~~~~~

**Value:** comma delimited list of IP addresses

Whitelist of reverse proxy servers that may forward the visitor's IP
address.

::

	$config['proxy_ips'] = '10.0.1.25,10.0.1.26';

prv_msg_throttling_period
~~~~~~~~~~~~~~~~~~~~~~~~~

**Value:** number, in seconds

How many seconds between PMs?

::

	$config['prv_msg_throttling_period'] = '60';

prv_msg_waiting_period
~~~~~~~~~~~~~~~~~~~~~~

**Value:** number, in hours

How many hours after becoming a member until they can PM?

::

	$config['prv_msg_waiting_period'] = '48';

publish_page_title_focus
~~~~~~~~~~~~~~~~~~~~~~~~

**Value:** y/n

Makes the title field gain focus when the page is loaded

::

	$config['publish_page_title_focus'] = 'n';

relaxed_track_views
~~~~~~~~~~~~~~~~~~~

**Value:** y/n

Allows Entry View Tracking to work for ANY combination that results in
only one entry being returned by the tag, including channel query
caching.

::

	$config['relaxed_track_views'] = 'y';

remove_close_all_button
~~~~~~~~~~~~~~~~~~~~~~~

**Value:** y/n

Removes the Close All button from the Publish/Edit page and user side
HTML formatting buttons. Useful because most browsers no longer need it
and Admins might want it gone

::

	$config['remove_close_all_button'] = 'y';

remove_unparsed_vars
~~~~~~~~~~~~~~~~~~~~

**Value:** y/n

Enables the stripping of unparsed ExpressionEngine variables in
templates when Debug has been forcibly set to 0 in your config file.

::

	$config['remove_unparsed_vars'] = 'y';


session_ip_accuracy
~~~~~~~~~~~~~~~~~~~

**Value:** 0-4

When checking the session table, we make sure that the user's IP address and
user agent (browser) haven't changed. If you or one of your user's had a dynamic
IP that changed frequently then they could be logged out when the IP changes.
Using this hidden config you can decide how accurate you want the check to be.
For example, If their IP changed from 192.168.1.1 to 192.168.200.200, and the
accuracy was ``2`` they would **not** be logged out, but if the accuracy was
``3`` they would be logged out.

::

	$config['session_ip_accuracy'] = 4;


smart_static_parsing
~~~~~~~~~~~~~~~~~~~~

**Value:** y/n

When enabled, parsing of embedded templates that are not set to the
template type "Static" will still be parsed as static if they can be
(i.e. if they have no PHP or ExpressionEngine tags in them). This
setting is enabled by default.

::

	$config['smart_static_parsing'] = 'n';

spellcheck_language_code
~~~~~~~~~~~~~~~~~~~~~~~~

**Value:** two letter language code

Allows you to specify the language used in the spellchecking functions.
Set the value to the two letter ISO 639 language code for the spellcheck
(ex: en, es, de)

::

	$config['spellcheck_language_code'] = 'de';

third_party_path
~~~~~~~~~~~~~~~~

**Value:** Valid path to ``third_party`` directory.

Overrides the ``third_party`` paths so you can move your ``third_party``
directory outside of your system directory.

upload_preferences
~~~~~~~~~~~~~~~~~~

**Value:** Array

Overrides file upload destination paths, URLs and titles. Each key in the
array is optional and only overrides existing values in the database, new
upload destinations cannot be created using this configuration variable.

::

	$config['upload_preferences'] = array(
	    1 => array(                                                            // ID of upload destination
	        'name'        => 'Staging Image Uploads',                          // Display name in control panel
	        'server_path' => '/home/user/example.com/staging/images/uploads/', // Server path to upload directory
	        'url'         => 'http://staging.example.com/images/uploads/'      // URL of upload directory
	    )
	);

use_forum_url
~~~~~~~~~~~~~

**Value:** y/n

Determines whether the forums run at a different base URL than the main
site. Useful for running forums as a subdomain.

::

	$config['use_forum_url'] = 'y';

use_mobile_control_panel
~~~~~~~~~~~~~~~~~~~~~~~~

**Value:** y/n

Disables checks within the control panel to look for the existence of
the themes/cp\_themes/mobile directory, allowing for any theme to be
used when viewing on a mobile device.

::

	$config['use_mobile_control_panel'] = 'n';

user_session_ttl
~~~~~~~~~~~~~~~~

**Value:** time in seconds

Allows changing of the Users Session Length to any number in seconds.
For instance, if users should be logged out after 10 minutes of
inactivity, the value would be: 600

::

	$config['user_session_ttl'] = 600;

view_comment_chars
~~~~~~~~~~~~~~~~~~

**Value:** Number of characters to display

Sets how many characters to display when viewing comments in the control
panel.

::

	$config['view_comment_chars'] = '50';

view_comment_leave_breaks
~~~~~~~~~~~~~~~~~~~~~~~~~

**Value:** y/n

When set to 'y', creates <br />'s based on line breaks when viewing
comments in the control panel.

::

	$config['view_comment_leave_breaks'] = 'y';

xss_clean_member_exception
~~~~~~~~~~~~~~~~~~~~~~~~~~

**Value:** Pipe delimeted list of member IDs

Sets the member IDs to exclude XSS cleaning on.

::

	$config['xss_clean_member_exception'] = '3|14|83';

xss_clean_member_group_exception
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Value:** Pipe delimited list of member group IDs

Sets the member group IDs to exclude XSS cleaning on.

::

	$config['xss_clean_member_group_exception'] = '2|5';
