Hidden Configuration Variables
==============================

Hidden configuration variables are placed in
system/expressionengine/config/config.php and are used to over-ride
default behavior. These are advanced configuration options that should
only be used by experienced ExpressionEngine users.


allow\_textarea\_tabs
~~~~~~~~~~~~~~~~~~~~~

**Value:** y/n

If not set the template editor and publish write mode allow for tabular
input. Set to n to disable all tab input, set to y to force tab
preservation in all publish textareas. ::

	$config['allow_textarea_tabs'] = 'y';

autosave\_interval\_seconds
~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Value:** number, in seconds

This variable controls the number of seconds between each attempted
"autosave" when editing an entry. ::

	$config['autosave_interval_seconds'] = '300';

autosave\_prune\_hours
~~~~~~~~~~~~~~~~~~~~~~

**Value:** number, in hours

This variable controls the number of hours that ExpressionEngine will
keep autosave data. ::

	$config['autosave_prune_hours'] = '6';

cp\_session\_ttl
~~~~~~~~~~~~~~~~

**Value:** time in seconds

Allows changing of the Control Panel Session Length to any number in
seconds. For instance, if users should be logged out after 10 minutes of
inactivity, the value would be: 600

::

	$config['cp_session_ttl'] = 600;

disable\_tag\_caching
~~~~~~~~~~~~~~~~~~~~~

**Value:** y/n

Disables tag caching, which if used unwisely on a high traffic site can
lead to disastrous disk i/o. This setting allows quick thinking admins
to temporarily disable it without hacking or modifying folder
permissions

::

	$config['disable_tag_caching'] = 'y';

encode\_removed\_text
~~~~~~~~~~~~~~~~~~~~~

**Value:** text string

If set, when an {encode=""} tag is encountered, but emails are not to be
encoded, this text will be displayed in place of the tag. ::

	$config['encode_removed_text'] = 'Encoded emails not allowed';

email\_crlf
~~~~~~~~~~~

**Value:** text string

If set, overrides the core Email class setting for crlf characters in
quoted-printable encoded emails (Email class $crlf property). ::

	$config['email_crlf'] = "\r\n";

email\_newline
~~~~~~~~~~~~~~

**Value:** text string

If set, overrides the core Email class setting for newline characters
(Email class $newline property). ::

	$config['email_newline'] = "\r\n";

hidden\_template\_404
~~~~~~~~~~~~~~~~~~~~~

**Value:** y/n

If a hidden template is encountered, the default behavior is to throw a
404. With this set to 'n', the template group's index page will be shown
instead. ::

	$config['hidden_template_404'] = 'n';

hidden\_template\_indicator
~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Value:** text string

Set the character(s) to use at the beginning of a template name to
consider it a "hidden" template. Default is a period'.'

::

	$config['hidden_template_indicator'] = '_';

include\_seconds
~~~~~~~~~~~~~~~~

**Value:** y/n

When set to "y" seconds are included on human-readable dates in the
Control Panel forms. ::

	$config['include_seconds'] = 'y';

login\_reminder
~~~~~~~~~~~~~~~

**Value:** y/n

Whether or not to display a notice when the CP Session is about to
expire, allowing the user to log back in. Default is 'y'. ::

	$config['login_reminder'] = 'n';

moblog\_allow\_nontextareas
~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Value:** y/n

Removes the textarea only restriction for fields in the moblog module. ::

	$config['moblog_allow_nontextareas'] = 'y';

popup\_link
~~~~~~~~~~~

**Value:** y/n

Determines whether or not links created by Typography class open in a
new window. ::

	$config['popup_link'] = 'y';

protect\_javascript
~~~~~~~~~~~~~~~~~~~

**Value:** y/n

Prevents the advanced conditionals parser from processing anything in
tags. By default, it's set to 'y'. ::

	$config['protect_javascript'] = 'y';

proxy\_ips
~~~~~~~~~~

**Value:** comma delimited list of IP addresses

Whitelist of reverse proxy servers that may forward the visitor's IP
address. ::

	$config['proxy_ips'] = '10.0.1.25,10.0.1.26';

prv\_msg\_throttling\_period
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Value:** number, in seconds

How many seconds between PMs?

::

	$config['prv_msg_throttling_period'] = '60';

prv\_msg\_waiting\_period
~~~~~~~~~~~~~~~~~~~~~~~~~

**Value:** number, in hours

How many hours after becoming a member until they can PM?

::

	$config['prv_msg_waiting_period'] = '48';

publish\_page\_title\_focus
~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Value:** y/n

Makes the title field gain focus when the page is loaded

::

	$config['publish_page_title_focus'] = 'n';

relaxed\_track\_views
~~~~~~~~~~~~~~~~~~~~~

**Value:** y/n

Allows Entry View Tracking to work for ANY combination that results in
only one entry being returned by the tag, including channel query
caching. ::

	$config['relaxed_track_views'] = 'y';

remove\_close\_all\_button
~~~~~~~~~~~~~~~~~~~~~~~~~~

**Value:** y/n

Removes the Close All button from the Publish/Edit page and user side
HTML formatting buttons. Useful because most browsers no longer need it
and Admins might want it gone

::

	$config['remove_close_all_button'] = 'y';

remove\_unparsed\_vars
~~~~~~~~~~~~~~~~~~~~~~

**Value:** y/n

Enables the stripping of unparsed ExpressionEngine variables in
templates when Debug has been forcibly set to 0 in your config file.

::
	$config['remove_unparsed_vars'] = 'y';

smart\_static\_parsing
~~~~~~~~~~~~~~~~~~~~~~

**Value:** y/n

When enabled, parsing of embedded templates that are not set to the
template type "Static" will still be parsed as static if they can be
(i.e. if they have no PHP or ExpressionEngine tags in them). This
setting is enabled by default. ::

	$config['smart_static_parsing'] = 'n';

spellcheck\_language\_code
~~~~~~~~~~~~~~~~~~~~~~~~~~

**Value:** two letter language code

Allows you to specify the language used in the spellchecking functions.
Set the value to the two letter ISO 639 language code for the spellcheck
(ex: en, es, de)

``$config['spellcheck_language_code'] = 'de';``

use\_compressed\_js
~~~~~~~~~~~~~~~~~~~

**Value:** y/n

If set to no, forces the control panel to serve javascript from the src
directory. Useful for debugging. ::

	$config['use_compressed_js'] = 'n';

use\_forum\_url
~~~~~~~~~~~~~~~

**Value:** y/n

Determines whether the forums run at a different base URL than the main
site. Useful for running forums as a subdomain. ::

	$config['use_forum_url'] = 'y';

use\_mobile\_control\_panel
~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Value:** y/n

Disables checks within the control panel to look for the existence of
the themes/cp\_themes/mobile directory, allowing for any theme to be
used when viewing on a mobile device. ::

	$config['use_mobile_control_panel'] = 'n';

user\_session\_ttl
~~~~~~~~~~~~~~~~~~

**Value:** time in seconds

Allows changing of the Users Session Length to any number in seconds.
For instance, if users should be logged out after 10 minutes of
inactivity, the value would be: 600

::

	$config['user_session_ttl'] = 600;

view\_comment\_chars
~~~~~~~~~~~~~~~~~~~~

**Value:** Number of characters to display

Sets how many characters to display when viewing comments in the control
panel. ::

	$config['view_comment_chars'] = '50';

view\_comment\_leave\_breaks
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Value:** y/n

When set to 'y', creates <br />'s based on line breaks when viewing
comments in the control panel. ::

	$config['view_comment_leave_breaks'] = 'y';

xss\_clean\_member\_exception
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Value:** Pipe delimeted list of member IDs

Sets the member IDs to exclude XSS cleaning on. ::

	$config['xss_clean_member_exception'] = '3|14|83';

xss\_clean\_member\_group\_exception
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Value:** Pipe delimited list of member group IDs

Sets the member group IDs to exclude XSS cleaning on. ::

	$config['xss_clean_member_group_exception'] = '2|5';
