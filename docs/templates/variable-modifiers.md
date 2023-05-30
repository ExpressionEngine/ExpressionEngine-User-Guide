<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Variable Modifiers

Most template variables can be modified for common formatting and output needs without requiring any plugins. For instance, making user-submitted content safe for use in a `<meta>` tag attribute, limiting to a certain number of characters, displaying currency, or as JSON to create structured data for SEO (search engine optimization). These modifiers apply to:

- All Channel Fields
- [URL Segment Variables](templates/globals/url-segments.md)
- [Embed Variables](templates/embedding.md#embedding-variables)
- [Layout Variables](templates/layouts.md#layout-variables)
- [Template Route Variables](templates/routes.md)
- [Standard Global Variables](templates/globals/single-variables.md)
- User-defined [Template Variables](templates/variable.md)
- All add-ons that use native APIs for parsing variables in templates

NOTE: **Note:** Some add-ons and components may have modifiers not listed here. For instance the [File Fieldtype](fieldtypes/file.md) has its own file information-related modifiers. The modifiers listed here are just those universally available.

## Modifiers

[TOC=3]

### `:attr_safe`

| Parameter            | Default   |                                                                                                                             |
| -------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------- |
| double_encode=       | `no`      | Whether or not to double encode already-encoded entities, e.g. should `&quot;` become `&amp;quot;`?                         |
| end_char=            | `&#8230;` | Character to append when a limit terminates the content                                                                     |
| limit=               |           | number of characters to limit to (retains whole words)                                                                      |
| unicode_punctuation= | `yes`     | Whether HTML entities for ’, ‘, ”, “, —, …, or non-breaking spaces should be decoded to the normal unicode characters. |

Makes content safe for use in an HTML attribute. It strips HTML tags, encodes special HTML characters, and can optionally limit the length of the content.

    <meta name="description" content="{seo_descrip:attr_safe limit='150'}">

### `:censor`

Censor naughty words, using the site's [Word Censorship](control-panel/settings/word-censor.md) settings.

    {variable:censor}
    {!-- Some ####### content with naughty words censored --}

### `:currency`

| Parameter | Default                   |                             |
| --------- | ------------------------- | --------------------------- |
| currency= | `USD`                     | International currency code |
| decimals= | `standard for ICU locale` | Decimal precision           |
| locale=   | `en_US.UTF-8`             | The ICU locale ID           |

Format a number as currency.

    {cost:currency}
    {!-- $142.73 --}

    {cost:currency currency='EUR' locale='de_DE'}
    {!-- 142,73 € --}

    {cost:currency decimals='0'}
    {!-- $399,000 --}

NOTE: **Note:** For non-US locale support, the PHP `intl` extension must be installed. Thankfully the PHP intl extension is available by default, so your environment would have had to intentionally disabled it (why??) for it to be unavailable.

### `:decrypt`

| Parameter | Default |                                                                                                                                                                                           |
| --------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| encode=   | `yes`   | Base64-decode the content (necessary for safe transport, e.g. submitted in a form)                                                                                                        |
| key=      |         | Custom encryption key to use. Allows you to potentially share encrypted data with another party without having to compromise your ExpressionEngine installation's primary encryption key. |

Decrypt the content.

    {secret:decrypt}
    {!-- No more secrets --}

### `:encrypt`

| Parameter | Default |                                                                                                                                                                                           |
| --------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| encode=   | `yes`   | Base64-decode the content (necessary for safe transport, e.g. submitted in a form)                                                                                                        |
| key=      |         | Custom encryption key to use. Allows you to potentially share encrypted data with another party without having to compromise your ExpressionEngine installation's primary encryption key. |

Encrypt the content.

    {secret:encrypt}
    {!-- H8JwSqsqVYUCvYBUmKqaXjO4VzLsyj791dtim3EfJT8= --}

### `:form_prep`

Make the content safe to use as the value of a form field.

    <input name="myField" type="text" value="{excerpt:form_prep}">
    {!-- <input name="myField" type="text" value="A &lt;em&gt;brief&lt;/em&gt; discussion about &quot;Wonko the Sane&quot;"> --}

### `:json`

Encode the content for JSON output.

    "headline": {title:json},
    // "headline": "Greatest Crash in Wall Street\u2019s History",

### `:length`

Outputs the length of the content in characters.

    {excerpt:length}
    {!-- 217 --}

### `:limit`

| Parameter   | Default   |                                                         |
| ----------- | --------- | ------------------------------------------------------- |
| characters= | `500`     | Number of characters to limit to                        |
| preserve_words=   | `y` | Retain whole words |
| end_char=   | `&#8230;` | character to append when a limit terminates the content |

Limits the content to the specified number of characters. Without `preserve_words='n'` may be fewer than the exact limit, as this retains whole words.

    {excerpt:limit characters='20'}
    {!-- A discussion&#8230; --}

### `:number_format`

| Parameter              | Default   |                                             |
| ---------------------- | --------- | ------------------------------------------- |
| decimals=              | `0`       | Number of decimal precision                 |
| decimal_point=         | `.`       | character to use as the decimal point       |
| thousands_separator=   | `,`       | character to use as the thousands separator |

Formats a number using typical options.

    {volume:number_format decimals='2'}
    {!-- 1,234.56 --}

### `:ordinal`

| Parameter | Default       |                   |
| --------- | ------------- | ----------------- |
| locale=   | `en_US.UTF-8` | The ICU locale ID |

Formats a number with its ordinal suffix.

    {rank:ordinal}
    {!-- 42nd --}

    {rank:ordinal locale='es_ES'}
    {!-- 42.º --}

NOTE: **Note:** For non-US locale support, the PHP `intl` extension must be installed. Thankfully the PHP intl extension is available by default, so your environment would have had to intentionally disabled it (why??) for it to be unavailable.

### `:raw_content`

Output the raw, unparsed content of the variable, for example as stored in the database with no typography variable interpolation. Useful for creating content export templates.

    {checkbox:raw_content}
    {!-- IL|OR|HI --}

### `:replace`

| Parameter       | Default |                                                                                                                                                               |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| case_sensitive= | `yes`   | Whether the Find pattern is treated as case-sensitive. Has no impact if the `regex=` parameter is used, since the regex pattern will define case-sensitivity. |
| find=           |         | The text to search for                                                                                                                                        |
| regex=          | `no`    | Whether the Find pattern should be handled as a regular expression                                                                                            |
| replace=        |         | The text to replace the Find pattern with                                                                                                                     |

Replace text within the content.

    {content:replace find='vegetables' replace='pizza'}
    {!-- You should eat pizza every day. --}

    {full_name:replace find='/(.*?),\s*(.*)/' replace='$2 $1' regex='yes'}
    {!-- John Doe (presuming {full_name} is "Doe, John") --}
    
    {!-- Getting thumbnails from a Youtube URL --}
    srcset="
        {src:replace find='/^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*$/' replace='https://i.ytimg.com/vi/$1/default.jpg' regex='yes'} 120w,
        {src:replace find='/^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*$/' replace='https://i.ytimg.com/vi/$1/mqdefault.jpg' regex='yes'} 320w,
        {src:replace find='/^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*$/' replace='https://i.ytimg.com/vi/$1/hqdefault.jpg' regex='yes'} 480w
    "

### `:rot13`

Perform a ROT13 substitution cypher to the content.

    <span class="spoiler" data-secret="{spoiler:attr_safe}">{content:rot13}</span>
    {!-- <span class="spoiler" data-secret="He was dead the whole time!">Ur jnf qrnq gur jubyr gvzr!</span> --}

### `:spellout`

| Parameter   | Default       |                                                                                              |
| ----------- | ------------- | -------------------------------------------------------------------------------------------- |
| capitalize= | `none`        | One of `ucfirst` (uppercase first letter) or `ucwords` (uppercase first letter of each word). Might not work for multibyte encodings. |
| locale=     | `en_US.UTF-8` | The ICU locale ID                                                                            |

    {rank:spellout}
    {!-- forty-two --}

    {rank:spellout capitalize='ucfirst'}
    {!-- Forty-two --}

    {rank:spellout locale='de_DE'}
    {!-- zwei­und­vierzig --}

### `:trim`

Returns a string with whitespace stripped from its beginning and its end.

| Parameter   | Default       |                                                                                              |
| ----------- | ------------- | -------------------------------------------------------------------------------------------- |
| characters= | ` \n\r\t\v\0` | As defined by [PHP documentation](https://www.php.net/manual/en/function.trim.php)           |

    {if layout:header_image:trim}
        <style>
        .main-header-and-search-form {
            background-image: url('{layout:header_image:trim}');
        }
        </style>
    {/if}

    {hello:trim characters='Hdle'}
    {!-- o Wor --}


### `:url`

Normalize a URL to use in markup. Primarily to make sure it contains a valid protocol. For instance if `{website}` was `www.example.com`:

    {website:url}
    {!-- https://www.example.com/ --}

Note that it is best to use a [URL](fieldtypes/url.md) field, so this is more useful for values coming from plugins or outside sources.

### `:url_decode`

URL decode the contents.

    <h1>Location: {segment_2:url_decode}</h1>
    {!-- <h1>Location: New Zealand</h1> --}

### `:url_encode`

| Parameter            | Default |                                                         |
| -------------------- | ------- | ------------------------------------------------------- |
| plus_encoded_spaces= | `no`    | whether or not to encode spaces as `+` instead of `%20` |

URL encode the contents.

    <a href="{path='view/{location:url_encode}'}">{location}</a>
    {!-- <a href="https://example.com/view/New%20Zealand}">New Zealand</a> --}

### `:url_slug`

| Parameter         | Default                                                  |                                                                                              |
| ----------------- | -------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| lowercase=        | `yes`                                                    | Whether to force a lowercase URL slug                                                        |
| remove_stopwords= | `no`                                                     | Whether to remove common words (obeys site configuration `system/user/config/stopwords.php`) |
| separator=        | `global-channel-word-separator-label` (typically a dash) | The character to use as a word separator                                                     |

Create a URL slug from the content.

    {excerpt:url_slug}
    {!-- a-phrase-with-words-from-the-stopwords-list --}

    {excerpt:url_slug remove_stopwords='yes'}
    {!-- phrase-words-stopwords-list --}
