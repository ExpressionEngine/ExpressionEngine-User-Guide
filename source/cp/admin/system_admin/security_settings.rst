Security and Sessions
=====================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Security and Privacy --> Security and Sessions`

This section of the Control Panel allows you to define the basic
security-related settings for your website. These are security settings
that apply throughout the website/system.

Control Panel Session Type
~~~~~~~~~~~~~~~~~~~~~~~~~~

This determines how sessions are handled for the Control Panel. You may
use cookies, session IDs, or a combination. The available options are:

- **Cookies and session ID**: Both cookies and URL session ID
  parameters are used to track the admin user. This is the default
  setting, and is the most secure since it relies on two individual
  cookies and a URL session ID.
- **Cookies only**: Only cookies are used to track the admin user. When
  this setting is used a "remember me" checkbox will appear next to the
  Control Panel login page, enabling users to stay permanently logged
  in.
- **Session ID only**: Only URL session IDs are used to track the admin
  user. This option should only be used if your desktop computer
  prevents you from accepting cookies in the event you are behind a
  firewall or due to some other technical issue.

User Session Type
~~~~~~~~~~~~~~~~~

This determines how sessions for regular users on your website are
handled. You may use cookies, session IDs, or a combination. The
available options are:

- **Cookies and session ID**: Both cookies and URL session ID
  parameters are used to track the user throughout their visit.
- **Cookies only**: Only cookies are used to track the user throughout
  their visit. This is the default setting, and generally the best
  option since it prevents URLs from showing session IDs.
- **Session ID only**: Only URL session IDs are used to track the user
  throughout their visit.

Process Form Data in Secure Mode
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This setting determines how form data is processed. When this preference
is set to "Yes", forms are processed in `Secure
Mode <../../../general/spam_protection.html>`_. This setting is designed
to deter automated spam attacks as well as multiple accidental
submissions. Enabling this feature does add one additional database
query for each form submission.

Deny Duplicate Data
~~~~~~~~~~~~~~~~~~~

This option prevents data submitted by users (such as comments) from
being processed if it is an exact duplicate of data that already exists.
This setting is designed to deter automated spam attacks as well as
multiple accidental submissions.

Apply Rank Denial to User-submitted Links
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This option rewrites links submitted in comments so they first point to
an intermediary redirect page. This helps deter comment spam by
preventing linked sites from gaining a page rank advantage.

Allow members to change their username
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

As the name suggests, this setting determines whether or not members are
allowed to change their "username" after they register. Members will
always be able to change their "screen name" if they choose to use one.

Allow Multiple Log-ins From a Single Account
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This setting determines whether more than one person can simultaneously
log-in and use ExpressionEngine with the same membership account.

**Note:** If the Session Type above is set to "Cookies Only" this
feature will not work. The system can only track multiple people using
the same account if a session is generated, which does not happen when
only cookies are used.

Require IP Address and User Agent for Login
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If this preference is set to "Yes", then users will not be able to log
in unless their browser (or other access device) correctly supplies
their IP address and User Agent (browser) information. Having this set
to "Yes" can help prevent hackers from logging in using direct socket
connections or from trying to access the system with a masked IP
address.

Require IP Address and User Agent when receiving comments
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Similar to the previous setting, when turned on, this setting requires
IP address and user agent information to be supplied when submitting
comments.

Enable Password Lockout
~~~~~~~~~~~~~~~~~~~~~~~

When this preference is set to "Yes", the system will lock a member
account if more than four invalid login attempts are made within a
specified time period (see next setting). This preference is designed to
deter hackers from using collision attacks to guess poorly chosen
passwords. The account remains locked for the duration of the time
period. Once the period expires it becomes unlocked.

Time Interval for Lockout
~~~~~~~~~~~~~~~~~~~~~~~~~

This setting is used together with the previous preference. Here you can
determine, in minutes, the time interval over which more than four
invalid login attempts will trigger a lockout. You may use decimals to
indicate fractions of a minute: e.g. 1.5 equals one and a half minutes.

Require Secure Passwords
~~~~~~~~~~~~~~~~~~~~~~~~

If this preference is set to "Yes", then users will be required to
choose a minimally "secure" password. In this case, a password
containing at least one uppercase character, one lowercase character,
and one numeric character. Passwords that follow this basic formula are
much more difficult to guess.

Allow Dictionary Words as Passwords
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Setting this preference to "No" will prevent users from being able to
set their password using words and names that are commonly found in a
dictionary. This will make "dictionary attacks" by hackers much more
difficult. **Note:** In order to be able to use this setting you must
have a dictionary file installed for the system. See below.

Name of Dictionary File
~~~~~~~~~~~~~~~~~~~~~~~

This is the filename of the dictionary file used for the previous
preference.

You may download a 230,000 word `dictionary
file <http://expressionengine.com/files/dictionary.zip>`_ from
ExpressionEngine.com. Simply unzip the download and place the text file
(dictionary.txt) in the following location on your server:

system/expressionengine/config/

Submit the **name** of the file in this setting.

Minimum Username Length
~~~~~~~~~~~~~~~~~~~~~~~

You may specify the minimum length required for a member username during
new member registration. Specify the minimum number of characters
required.

Minimum Password Length
~~~~~~~~~~~~~~~~~~~~~~~

You may specify the minimum length required for a member password during
new member registration. Specify the minimum number of characters
required. It is common practice to require passwords at least eight (8)
characters long.
