Security and Sessions
=====================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Security and Privacy --> Security and Sessions`

This section of the Control Panel allows you to define the basic
security-related settings for your website. These are security settings
that apply throughout the website/system.

.. _cp-session-type-label:

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

.. _website-session-type-label:

Website Session Type
~~~~~~~~~~~~~~~~~~~~

This determines how sessions are handled for the front-end of the site.
You may use cookies, session IDs, or a combination. The available
options are:

- **Cookies and session ID**: Both cookies and URL session ID
  parameters are used to track the user throughout their visit.
- **Cookies only**: Only cookies are used to track the user throughout
  their visit. This is the default setting, and generally the best
  option since it prevents URLs from showing session IDs.
- **Session ID only**: Only URL session IDs are used to track the user
  throughout their visit.

Deny Duplicate Data
~~~~~~~~~~~~~~~~~~~

This option prevents data submitted by users (such as comments) from
being processed if it is an exact duplicate of data that already exists.
This setting is designed to deter automated spam attacks as well as
multiple accidental submissions.

.. _security-apply-rank-denial-label:

Apply Rank Denial to User-submitted Links
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This option rewrites links submitted in comments so they first point to
an intermediary redirect page. This helps deter comment spam by
preventing linked sites from gaining a page rank advantage.

.. _allow-member-username-label:

Allow members to change their username
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

As the name suggests, this setting determines whether or not members are
allowed to change their own usernames after registration. (Members will
always be able to change their own screen names.)

.. _allow-multi-logins-label:

Allow Multiple Log-ins From a Single Account
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Set whether an account can have multiple active sessions at one time.

.. note::

   This feature is incompatible with the "Cookies Only" session type.

.. _require-ip-logins-label:

Require IP Address and User Agent for Login
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If this preference is set to "Yes", then users will not be able to log
in unless their browser (or other access device) correctly supplies
their IP address and User Agent (browser) information. Having this set
to "Yes" can help prevent hackers from logging in using direct socket
connections or from trying to access the system with a masked IP
address.

.. _require-ip-posting-submit-comments-label:

Require IP Address and User Agent for posting
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Similar to the previous setting, when turned on, this setting requires
IP address and user agent information to be supplied when submitting
comments.

.. _apply-xss-filtering-to-uploaded-files-label:

Apply XSS Filtering to Uploaded Files
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Checks all file uploads for code injection attempts before finalizing the upload.
Superadmins are exempt from image XSS filtering.


.. _security-enable-passwd-lockout-label:

Enable Password Lockout
~~~~~~~~~~~~~~~~~~~~~~~

When this preference is set to "Yes", the system will lock a member
account if more than four invalid login attempts are made within a
specified time period (see next setting). This preference is designed to
deter hackers from using collision attacks to guess poorly chosen
passwords. The account remains locked for the duration of the time
period. Once the period expires it becomes unlocked.

.. _security-passwd-lockout-int-label:

Time Interval for Lockout
~~~~~~~~~~~~~~~~~~~~~~~~~

This setting is used together with the previous preference. Here you can
determine, in minutes, the time interval over which more than four
invalid login attempts will trigger a lockout. You may use decimals to
indicate fractions of a minute: e.g. 1.5 equals one and a half minutes.

.. _security-require-secure-passwords-label:

Require Secure Passwords
~~~~~~~~~~~~~~~~~~~~~~~~

If this preference is set to "Yes", then users will be required to
choose a minimally "secure" password. In this case, a password
containing at least one uppercase character, one lowercase character,
and one numeric character. Passwords that follow this basic formula are
much more difficult to guess.

.. _dict-passwds-label:

Allow Dictionary Words as Passwords
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Set whether words commonly found in the dictionary can be used as
passwords. Disabling will make "dictionary attacks" by hackers much more
difficult.

.. note:: In order to be able to use this setting you must have :ref:`a
    dictionary file <dict-passwds-file-label>` installed.

.. _dict-passwds-file-label:

Name of Dictionary File
~~~~~~~~~~~~~~~~~~~~~~~

This is the filename of the dictionary file used for the previous
preference. Download the `dictionary file
<https://ellislab.com/asset/file/dictionary.zip>`__, unzip, and upload
the text file (:file:`dictionary.txt`) to
:file:`system/expressionengine/config/`.

Enter only the filename of the file (:file:`dictionary.txt`) in this
field.

.. _security-min-username-label:

Minimum Username Length
~~~~~~~~~~~~~~~~~~~~~~~

You may specify the minimum length required for a member username during
new member registration. Specify the minimum number of characters
required.

.. _security-min-password-label:

Minimum Password Length
~~~~~~~~~~~~~~~~~~~~~~~

You may specify the minimum length required for a member password during
new member registration. Specify the minimum number of characters
required. It is common practice to require passwords at least eight (8)
characters long.
