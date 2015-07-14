Constants Reference
===================

.. todo:: Audit for 3.0

The ExpressionEngine core defines a variety of constants to ensure
consistency in several aspects. Please be aware that some of the
constants may not be defined, or have different meaning, in the context
of the ExpressionEngine installer.

Path Constants
--------------

- ``SELF`` - Name of the bootstrap file
- ``FCPATH`` - Path to the bootstrap file
- ``SYSDIR`` - Name of the system directory
- ``SYSPATH`` - Path of the system directory
- ``APPPATH`` and ``BASEPATH`` - Path to the ``system/ee/legacy`` directory

- ``PATH_ADDONS`` - Path to the first-party addons directory
- ``PATH_THEMES`` - Path to the themes directory
- ``PATH_MOD`` - Path to the first party modules directory
- ``PATH_PI`` - Path to the first party plugins directory
- ``PATH_EXT`` - Path to the first party extensions directory
- ``PATH_ACC`` - Path to the first party accessories directory
- ``PATH_FT`` - Path to the first party fieldtypes directory
- ``PATH_RTE`` - Path to the first party RTE tools directory
- ``PATH_MBR_THEMES`` - Path to the member themes directory
- ``PATH_CP_GBL_IMG`` - Path to the global image directory
- ``PATH_JAVASCRIPT`` - Path to the javascript directory
- ``PATH_JQUERY`` - Path to the jQuery directory

- ``PATH_THIRD`` - Path to third-party addons directory
- ``PATH_THIRD_THEMES`` - Path to the third-party themes directory

Version Constants
-----------------

- ``APP_NAME`` - Application Name
- ``APP_VER`` - Version number
- ``APP_BUILD`` - Build number
- ``CI_VERSION`` - CodeIgniter version

URL Constants
-------------

- ``BASE`` - Base URL to the control panel
- ``AMP`` - ``&amp;``
- ``QUERY_MARKER`` - Question mark if forcing query strings, blank
  otherwise
- ``URL_THEMES`` - URL to the theme folder
- ``URL_THIRD_THEMES`` - URL to the third party theme folder

HTML Constants
--------------

- ``NBS`` - ``&nbsp;``
- ``BR`` - ``<br />``
- ``NL`` - ``\\n``

Request Constants
-----------------

- ``REQ`` - One of: ``'PAGE'``, ``'CP'``, ``'ACT'``
- ``AJAX_REQUEST`` - (``bool``) ``TRUE`` if request came from one of
  jQuery's ajax functions

Filesystem Mode Constants
-------------------------

These constants are located in
``expressionengine/config/constants.php``, and are user configurable to
their hosts' requirements. You should always use these constants for
creating and writing to files so that you do not have to worry about
which permissions to use. Listed alongside each is their default
equivalency.

- ``FILE_READ_MODE`` - Equivalent to ``0644``
- ``FILE_WRITE_MODE`` - Equivalent to ``0666``
- ``DIR_READ_MODE`` - Equivalent to ``0755``
- ``DIR_WRITE_MODE`` - Equivalent to ``0777``
- ``FOPEN_READ`` - Equivalent to ``rb``
- ``FOPEN_READ_WRITE`` - Equivalent to ``r+b``
- ``FOPEN_WRITE_CREATE_DESTRUCTIVE`` - Equivalent to ``wb``
- ``FOPEN_READ_WRITE_CREATE_DESTRUCTIVE`` - Equivalent to ``w+b``
- ``FOPEN_WRITE_CREATE`` - Equivalent to ``ab``
- ``FOPEN_READ_WRITE_CREATE`` - Equivalent to ``a+b``
- ``FOPEN_WRITE_CREATE_STRICT`` - Equivalent to ``xb``
- ``FOPEN_READ_WRITE_CREATE_STRICT`` - Equivalent to ``x+b``

Others
------

- ``LD`` - Left template tag delimiter (usually ``{``)
- ``RD`` - Right template tag delimiter (usually ``}``)
- ``DEBUG`` - (``bool``) ``TRUE`` if ``$debug`` is set to 1
- ``CSRF_TOKEN`` - CSRF token, blank if csrf protection is disabled.
- ``XID_SECURE_HASH`` - previous name of ``CSRF_TOKEN``
- ``MASKED_CP`` - (``bool``) ``TRUE`` if the CP is masked for this
  request
- ``EXT`` - File extension (``.php``)
- ``UTF8_ENABLED`` - Server has proper UTF-8 support
- ``MB_ENABLED`` - Server has multibyte function support
- ``PASSWORD_MAX_LENGTH`` - Maximum number of characters for a password.
