Constants Reference
===================

The ExpressionEngine core defines a variety of constants to ensure
consistency in several aspects. Please be aware that some of the
constants may not be defined, or have different meaning, in the context
of the ExpressionEngine installer.

Path Constants
--------------

-  **PATH\_THIRD** - Path to the system/expressionengine/third\_party
   directory.
-  **PATH\_THEMES** - Path to the /themes directory.
-  **APPPATH** - Path to the /expressionengine directory.
-  **BASEPATH** - Path to the system directory.
-  **PATH\_MOD** - Path to the first party modules directory.
-  **PATH\_PI** - Path to the first party plugins directory.
-  **PATH\_EXT** - Path to the first party extensions directory.
-  **PATH\_ACC** - Path to the first party accessories directory.
-  **PATH\_FT** - Path to the first party fieldtypes directory.
-  **PATH\_MBR\_THEMES** - Path to the member themes directory.
-  **PATH\_CP\_GBL\_IMG** - Path to the global image directory.
-  **PATH\_JAVASCRIPT** - Path to the javascript directory.
-  **PATH\_JQUERY** - Path to the jQuery directory.
-  **SELF** - Name of the bootstrap file
-  **FCPATH** - Path to the bootstrap file
-  **SYSDIR** - Name of the system directory

Version Constants
-----------------

-  **APP\_NAME** - Application Name
-  **APP\_VER** - Version number
-  **APP\_BUILD** - Build number
-  **CI\_VERSION** - CodeIgniter version

URL Constants
-------------

-  **BASE** - Base URL to the control panel
-  **AMP** - &amp;
-  **QUERY\_MARKER** - Question mark if forcing query strings, blank
   otherwise

HTML Constants
--------------

-  **NBS** - &nbsp;
-  **BR** - <br />
-  **NL** - \\n

Request Constants
-----------------

-  **REQ** - One of: 'PAGE', 'CP', 'ACT'
-  **AJAX\_REQUEST** - (bool) TRUE if request came from one of jQuery's
   ajax functions

Filesystem Mode Constants
-------------------------

These constants are located in expressionengine/config/constants.php,
and are user configurable to their hosts' requirements. You should
always use these constants for creating and writing to files so that you
do not have to worry about which permissions to use. Listed alongside
each is their default equivalency.

-  **FILE\_READ\_MODE** - Equivalent to 0644
-  **FILE\_WRITE\_MODE** - Equivalent to 0666
-  **DIR\_READ\_MODE** - Equivalent to 0755
-  **DIR\_WRITE\_MODE** - Equivalent to 0777
-  **FOPEN\_READ** - Equivalent to rb
-  **FOPEN\_READ\_WRITE** - Equivalent to r+b
-  **FOPEN\_WRITE\_CREATE\_DESTRUCTIVE** - Equivalent to wb
-  **FOPEN\_READ\_WRITE\_CREATE\_DESTRUCTIVE** - Equivalent to w+b
-  **FOPEN\_WRITE\_CREATE** - Equivalent to ab
-  **FOPEN\_READ\_WRITE\_CREATE** - Equivalent to a+b
-  **FOPEN\_WRITE\_CREATE\_STRICT** - Equivalent to xb
-  **FOPEN\_READ\_WRITE\_CREATE\_STRICT** - Equivalent to x+b

Others
------

-  **LD** - Left template tag delimiter (usually **{**)
-  **RD** - Right template tag delimiter (usually **}**)
-  **DEBUG** - (bool) TRUE if $debug is set to 1
-  **XID\_SECURE\_HASH** - XID Hash if secure forms is enabled, blank
   otherwise
-  **MASKED\_CP** - (bool) TRUE if the CP is masked for this request
-  **EXT** - File extension (.php)
-  **UTF8\_ENABLED** - Server has proper UTF-8 support
-  **MB\_ENABLED** - Server has multibyte function support

