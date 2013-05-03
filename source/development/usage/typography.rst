Typography Class
================

.. contents::
	:local:
	:depth: 1

Calling the Typography Class
----------------------------

The Typography class is used in ExpressionEngine to parse type,
providing tools for automatic XHTML, auto line-breaking, email encoding,
word censoring, decoding BBCode, syntax highlighting, and gateway access
to formatting plugins.

To use the these features in your modules, you need to first instantiate
the Typography Class

::

    ee()->load->library('typography');
    ee()->typography->initialize();

Note that after loading the Typography library you need to initialize it
with ee()->load->typography->initialize(); or you will be
inheriting the class properties of whatever code last used it.

Typography Class Properties
---------------------------

The Typography class has a number of class properties that you may wish
to set before calling any methods. Below is a description of available
class properties and their default values (in bold).

$allow\_img\_url
~~~~~~~~~~~~~~~~

(string) *[ y / **n** ]* — Allow inline images?

$allow\_js\_img\_anchors
~~~~~~~~~~~~~~~~~~~~~~~~

(bool) *[ TRUE / **FALSE** ]* — Whether to allow JavaScript
submitted within <a href> and <img> tags

$auto\_links
~~~~~~~~~~~~

(string) *[ **y** / n ]* — Auto-link URLs and email addresses? (Note
that auto-linking does not ever occur if $html\_format is "none")

$bounce
~~~~~~~

(string) — Used to construct redirect links, to prevent control
panel URLs from showing up in referrer logs, and on the front-end
for rank denial. This property is set dynamically based on site
preferences and is not necessary to set directly.

$censored\_replace
~~~~~~~~~~~~~~~~~~

(string) — String that censored words are replaced with, taken from
site preferences.

$censored\_words
~~~~~~~~~~~~~~~~

(array) — Array of words to be censored, taken from site
preferences.

$code\_chunks
~~~~~~~~~~~~~

(array) — Array of temporary markers and content used to prevent
formatting from being applied to syntax highlighted code.

$code\_counter
~~~~~~~~~~~~~~

(int) — Used as keys of the $code\_chunks array, to keep the
temporary markers organized.

$convert\_curly
~~~~~~~~~~~~~~~

(bool) *[ **TRUE** / FALSE ]* — Convert curly brackets ( "{" and "}") into entities?

$emoticon\_path
~~~~~~~~~~~~~~~

(string) — The preference setting for the URL path to the site's
emoticons. This property is set dynamically based on site
preferences and is not necessary to set directly.

$encode\_email
~~~~~~~~~~~~~~

(bool) *[ **TRUE** / FALSE ]* — Whether or not email addresses are
encoded.

$encode\_type
~~~~~~~~~~~~~

(string) *[ **javascript** / noscript ]* — Type of encoding applied
to email addresses if email address encoding is enabled. "noscript"
renders in a human readable format (e.g. "name at example dot com)",
suitable for use where JavaScript is inappropriate, such as in a
feed.

$file\_paths
~~~~~~~~~~~~

(array) — Array of file upload directories in key (ids) => value
(urls) pairs.

$highlight\_code
~~~~~~~~~~~~~~~~

(bool) *[ **TRUE** / FALSE ]* — Perform PHP syntax highlighting on
[pre] and [code] blocks?

$html\_fmt\_types
~~~~~~~~~~~~~~~~~

(array) *[ **array('safe', 'all', 'none')** ]* — Array of standard
HTML handling types available to the Typography class.

$html\_format
~~~~~~~~~~~~~

(string) *[ **safe** / all / none ]* — Controls how HTML is handled
in text.

$parse\_images
~~~~~~~~~~~~~~

(bool) *[ **TRUE** / FALSE ]* — Whether or not {filedir\_#}
variables are to be parsed.

$parse\_smileys
~~~~~~~~~~~~~~~

(bool) *[ **TRUE** / FALSE ]* — Replace text smileys with smiley
images?

$popup\_links
~~~~~~~~~~~~~

(bool) *[ TRUE / **FALSE** ]* — Create links as popups?

$single\_line\_pgfs
~~~~~~~~~~~~~~~~~~~

(bool) *[ **TRUE** / FALSE ]* — Whether to treat single lines as
paragraphs in auto-XHTML

$site\_index
~~~~~~~~~~~~

(string) — Deprecated.

$smiley\_array
~~~~~~~~~~~~~~

(mixed) *[ **FALSE** ]* — If emoticons are enabled for the site,
this property will contain an array of smiley conversions in key
(smiley) => value (image) pairs. If emoticons are not enabled, this
will be set to FALSE.

$text\_fmt\_plugins
~~~~~~~~~~~~~~~~~~~

(array) — Array of available installed plugins.

$text\_fmt\_types
~~~~~~~~~~~~~~~~~

(array) *[ **array('xhtml', 'br', 'none', 'lite')** ]* — Array of
standard formatting types available to the Typography class.

$text\_format
~~~~~~~~~~~~~

(string) *[ **xhtml** / br / none / lite ]* — Controls what
formatting is applied to text.

$use\_span\_tags
~~~~~~~~~~~~~~~~

(bool) *[ **TRUE** / FALSE ]* — Use <span> tags for font color and
size BBCode? Setting to FALSE uses <font> tags.

$word\_censor
~~~~~~~~~~~~~

(bool) *[ **FALSE** ]* — Whether or not word censoring is applied.
This property is set dynamically based on site preferences and is
not necessary to set directly.

$yes\_no\_syntax
~~~~~~~~~~~~~~~~

(array) *[ **array('y', 'n')** ]* — Array of valid Yes / No strings
for use in properties. Used to ensure that valid settings are being
provided for a Yes / No type preference.

Parsing Type
------------

*str* **ee()->typography->parse\_type** ( *str* $str, *array*
$prefs )

This function returns a string of parsed type. It is the most common use
of the Typography class, and many of the individual functions also
described in this document are used within the parse\_type() method. The
format the string is returned in is determined by both the class
properties and the array of properties provided in the second argument.::

    $str = ee()->typography->parse_type($str);

Example of Parsing Type with Preferences
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You may override class properties directly in the $prefs array for the
following:

-  text\_format
-  html\_format
-  auto\_links
-  allow\_img\_url

::

    $prefs = array(
            'text_format'   => 'xhtml',
            'html_format'   => 'all',
            'auto_links'    => 'y',
            'allow_img_url' => 'y'
            );

    $str = ee()->typography->parse_type($str, $prefs);

Using a Plugin for Text Formatting
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Any installed formatting plugin may be used to parse type. Simply use
the class name of the plugin, in lowercase letters.

::

    $str = ee()->typography->parse_type($str, array('text_format' => 'markdown'));

If you attempt to use a plugin that is not installed, no text formatting
will be performed. It may be wise to check for the existence of plugins
before using them, so if they are not installed, you can fall back on
one of the native formatting types.

::

    $text_format = (in_array('markdown', ee()->typography->text_fmt_plugins)) ? 'markdown' : 'xhtml';
    $str = ee()->typography->parse_type($str, array('text_format' => $text_format));

Encode Email Addresses
----------------------

*str* **ee()->typography->encode\_email** ( *str* $email, *str*
$title, *bool* $anchor )

This function encodes email addresses with Javascript, to assist in
prevention of email harvesting by bots.::

    $str = "brett.bretterson@example.com";
    $str = ee()->typography->encode_email($str, "Email Brett Bretterson");

$email
~~~~~~

(string) — Email address. *Required*

$title
~~~~~~

(string) *[ **empty string** ]* — The text to use as the title of
the email link.

$anchor
~~~~~~~

(bool) *[ **TRUE** / FALSE ]* — Whether or not a clickable link is
created for the email address.

If you want to return a human readable "encoded" email address instead,
you can also set the $encode\_type class property to "noscript".

::

    $str = "brett.bretterson@example.com";
    ee()->typography->encode_type = "noscript";
    $str = ee()->typography->encode_email($str, '', FALSE);

Returns::

	brett dot bretterson at example dot com

Auto (XTHML) Typography
-----------------------

*str* **ee()->typography->auto\_typography** ( *str* $str )

This function takes a string of text and returns typographically correct
XHTML.::

    $str = ee()->typography->auto_typography($str);

 Its primary modifications are:

- It turns double spaces into paragraphs.
- It adds line breaks where there are single spaces.
- It turns single and double quotes into curly quotes.
- It turns three dots into ellipsis.
- It turns double dashes into em-dashes.

$str
~~~~

(string) Text to apply XHTML typography to


Formatting Characters for XHTML ("Light" Typography)
----------------------------------------------------

*str* **ee()->typography->format\_characters** ( *str* $str )

This function performs the character transformation portion of the XHTML
typography only, i.e. curly quotes, ellipsis, ampersand, etc.::

    $str = ee()->typography->format_characters($str);

$str
~~~~

(string) Text to apply character formatting to


