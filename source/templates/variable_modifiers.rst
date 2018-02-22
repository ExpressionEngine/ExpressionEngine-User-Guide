******************
Variable Modifiers
******************

Most template variables can be modified for common formatting and output needs without requiring any plugins. For instance, making user-submitted content safe for use in a `<meta>` tag attribute, limiting to a certain number of characters, displaying currency, or as JSON to create structured data for :abbr:`SEO (search engine optimization)`. These modifiers apply to:

- All Channel Fields
- :doc:`globals/url_segments`
- :ref:`Embed Variables <embed_variables>`
- :ref:`layout_variables`
- :doc:`Template Route Variables </urls/template_routes>`
- :doc:`globals/single_variables`
- User-defined :doc:`globals/template_variable`
- All add-ons that use native APIs for parsing variables in templates

Available variable modifiers:

.. contents::
  :local:
  :depth: 1

.. note:: Some add-ons and components may have modifiers not listed here. For instance the :doc:`File Fieldtype </fieldtypes/file>` has its own file information-related modifiers. The modifiers listed here are just those universally available.

:attr_safe
**********

Makes content safe for use in an HTML attribute. It strips HTML tags, encodes special HTML characters, and can optionally limit the length of the content.

::

  <meta name="description" content="{seo_descrip:attr_safe limit='150'}">

:Parameters:

  - **double_encode=** (default: 'no') Whether or not to double encode already-encoded entities, e.g. should ``&quot;`` become ``&amp;quot;``?
  - **end_char=** (default: ``&#8230;``) character to append when a limit terminates the content
  - **limit=** number of characters to limit to (retains whole words)
  - **unicode_punctuation=** (default: 'yes') Whether HTML entities for ’, ‘, ”, “, —, …, or non-breaking spaces should be decoded to the normal unicode characters.

:censor
*******

Censor naughty words, using the site's :doc:`/cp/settings/word-censor` settings.

::

  {variable:censor}
  {!-- Some ####### content with naughty words censored --}

:currency
*********

Format a number as currency.

::

  {cost:currency}
  {!-- $142.73 --}

  {cost:currency currency='EUR' locale='de_DE'}
  {!-- 142,73 € --}

:Parameters:

  - **currency=** (default: USD) International currency code
  - **decimals=** (default, standard for ICU locale) Decimal precision
  - **locale=** (default: en_US.UTF-8) The ICU locale ID

.. note:: |PHP-intl-recommended|

:decrypt
********

Decrypt the content.

::

  {secret:decrypt}
  {!-- No more secrets --}

:Parameters:

  - **encode=** (default: 'yes') Base64-decode the content (necessary for safe transport, e.g. submitted in a form)
  - **key=** Custom encryption key to use. Allows you to potentially share encrypted data with another party without having to compromise your ExpressionEngine installation's primary encryption key.

:encrypt
********

Encrypt the content.

::

  {secret:encrypt}
  {!-- H8JwSqsqVYUCvYBUmKqaXjO4VzLsyj791dtim3EfJT8= --}

:Parameters:

  - **encode=** (default: 'yes') Base64-encode the content (necessary for safe transport, e.g. submitted in a form)
  - **key=** Custom encryption key to use. Allows you to potentially share encrypted data with another party without having to compromise your ExpressionEngine installation's primary encryption key.

:form_prep
**********

Make the content safe to use as the value of a form field.

::

  <input name="myField" type="text" value="{excerpt:form_prep}">
  {!-- <input name="myField" type="text" value="A &lt;em&gt;brief&lt;/em&gt; discussion about &quot;Wonko the Sane&quot;"> --}

:json
*****

Encode the content for JSON output.

.. code-block:: javascript

  "headline": {title:json},
  // "headline": "Greatest Crash in Wall Street\u2019s History",

:length
*******

Outputs the length of the content in characters.

::

  {excerpt:length}
  {!-- 217 --}

:limit
******

Limits the content to the specified number of characters. May be fewer than the exact limit, as this retains whole words.

::

  {excerpt:limit characters='20'}
  {!-- A discussion&#8230; --}

:Parameters:

  - **characters=** (default 500) Number of characters to limit to
  - **end_char=** (default ``&#8230;``) character to append when a limit terminates the content

:ordinal
********

Formats a number with its ordinal suffix.

::

  {rank:ordinal}
  {!-- 42nd --}

  {rank:ordinal locale='es_ES'}
  {!-- 42.º --}

:Parameters:

  - **locale=** (default: en_US.UTF-8) The ICU locale ID

.. note:: |PHP-intl-recommended|

:raw_content
************

Output the raw, unparsed content of the variable, for example as stored in the database with no typography variable interpolation. Useful for creating content export templates.

::

  {checkbox:raw_content}
  {!-- IL|OR|HI --}

:replace
********

Replace text within the content.

::

  {content:replace find='the cloud' replace='my butt'}
  {!-- ...enabling you to easily store mass volumes of data in my butt. --}

  {full_name:replace find='/(.*?),\s*(.*)/' replace='$2 $1' regex='yes'}
  {!-- John Doe (presuming {full_name} is "Doe, John") --}

:Parameters:

  - **case_sensitive=** (default: 'yes') Whether the Find pattern is treated as case-sensitive. Has no impact if the ``regex=`` parameter is used, since the regex pattern will define case-sensitivity.
  - **find=** The text to search for
  - **regex=** (default: 'no') Whether the Find pattern should be handled as a regular expression
  - **replace=** The text to replace the Find pattern with

:rot13
******

Perform a ROT13 substitution cypher to the content.

::

  <span class="spoiler" data-secret="{spoiler:attr_safe}">{content:rot13}</span>
  {!-- <span class="spoiler" data-secret="He was dead the whole time!">Ur jnf qrnq gur jubyr gvzr!</span> --}

:spellout
*********

::

  {rank:spellout}
  {!-- forty-two --}

  {rank:spellout capitalize='ucfirst'}
  {!-- Forty-two --}

  {rank:spellout locale='de_DE'}
  {!-- zwei­und­vierzig --}

:Parameters:

  - **capitalize=** (default: none) One of ``ucfirst`` (uppercase first letter) or ``ucwords`` (uppercase first letter of each word)
  - **locale=** (default: en_US.UTF-8) The ICU locale ID

:url_decode
***********

URL decode the contents.

::

  <h1>Location: {segment_2:url_decode}</h1>
  {!-- <h1>Location: New Zealand</h1> --}

:Parameters:

  - **plus_encoded_spaces=** (default: 'no') - whether or not to encode spaces as ``+`` instead of ``%20``

:url_encode
***********

URL encode the contents.

::

  <a href="{path='view/{location:url_encode}'}">{location}</a>
  {!-- <a href="https://example.com/view/New%20Zealand}">{location}</a> --}

:Parameters:

  - **plus_encoded_spaces=** (default: 'no') - whether or not to encode spaces as ``+`` instead of ``%20``

:url_slug
*********

Create a URL slug from the content.

::

  {excerpt:url_slug}
  {!-- a-phrase-with-words-from-the-stopwords-list --}

  {excerpt:url_slug remove_stopwords='yes'}
  {!-- phrase-words-stopwords-list --}

:Parameters:

  - **lowercase=** (default: 'yes') Whether to force a lowercase URL slug
  - **remove_stopwords=** (default: 'no') Whether to remove common words (obeys site configuration `system/user/config/stopwords.php`)
  - **separator=** (default: :ref:`global-channel-word-seperator-label`, typically a dash) The character to use as a word separator



.. |PHP-intl-recommended| replace:: For non-US locale support, the PHP ``intl`` extension must be installed. Thankfully the PHP intl extension is available by default, so your environment would have had to intentionally disabled it (why??) for it to be unavailable.

.. |PHP-intl-required| replace:: This modifier requires that the PHP ``intl`` extension is installed.

