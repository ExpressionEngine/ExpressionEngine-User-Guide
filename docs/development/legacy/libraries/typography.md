---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Typography Class

[TOC]

## Calling the Typography Class

**class `Typography`**

The Typography class is used in ExpressionEngine to parse type, providing tools for automatic XHTML, auto line-breaking, email encoding, word censoring, decoding BBCode, syntax highlighting, and gateway access to formatting plugins.

To use the these features in your modules, you need to first instantiate the Typography Class:

    ee()->load->library('typography');
    ee()->typography->initialize();

Note that after loading the Typography library you need to initialize it with `ee()->load->typography->initialize();` or you will be inheriting the class properties of whatever code last used it.

## Typography Class Properties

[TOC=3]

The Typography class has a number of class properties that you may wish to set before calling any methods. Below is a description of available class properties and their default values (in bold).

### `$allow_img_url`

(`string`) \[ y / **n** \] — Allow inline images?

### `$allow_js_img_anchors`

(`bool`) \[ TRUE / **FALSE** \] — Whether to allow JavaScript submitted (within `<a href>` and `<img>` tags

### `$auto_links`

(`string`) \[ **y** / n \] — Auto-link URLs and email addresses? (Note that auto-linking does not ever occur if `$html_format` is "none")

### `$bounce`

(`string`) — Used to construct redirect links, to prevent control panel URLs from showing up in referrer logs, and on the front-end for rank denial. This property is set dynamically based on site preferences and is not necessary to set directly.

### `$censored_replace`

(`string`) — String that censored words are replaced with, taken from site preferences.

### `$censored_words`

(`array`) — Array of words to be censored, taken from site preferences.

### `$code_chunks`

(`array`) — Array of temporary markers and content used to prevent formatting from being applied to syntax highlighted code.

### `$code_counter`

(`int`) — Used as keys of the \$code_chunks array, to keep the temporary markers organized.

### `$convert_curly`

(`bool`) \[ **TRUE** / FALSE \] — Convert curly brackets ( "{" and "}") into entities?

### `$emoticon_path`

(`string`) — The preference setting for the URL path to the site's emoticons. This property is set dynamically based on site preferences and is not necessary to set directly.

### `$encode_email`

(`bool`) \[ **TRUE** / FALSE \] — Whether or not email addresses are encoded.

### `$encode_type`

(`string`) \[ **javascript** / noscript \] — Type of encoding applied to email addresses if email address encoding is enabled. `"noscript"` renders in a human readable format (e.g. "name at example dot com)", suitable for use where JavaScript is inappropriate, such as in a feed.

### `$file_paths`

(`array`) — Array of file upload directories in `key (ids) => value (urls)` pairs.

### `$highlight_code`

(`bool`) \[ **TRUE** / FALSE \] — Perform PHP syntax highlighting on `[pre]` and `[code]` blocks?

### `$html_fmt_types`

(`array`) \[ **array('safe', 'all', 'none')** \] — Array of standard HTML handling types available to the Typography class.

### `$html_format`

(`string`) \[ **safe** / all / none \] — Controls how HTML is handled in text.

- `"safe"` allows the following HTML tags to be rendered in the DOM, while all other HTML tags are removed from the content.
 - `h2`, `h3`, `h4`, `h5`, `h6`
 - `abbr`
 - `b`
 - `blockquote`
 - `cite`
 - `code`
 - `del`
 - `em`
 - `i`
 - `ins`
 - `mark`
 - `pre`
 - `span`
 - `strong`
 - `sub`
 - `sup`
- `"all"` allows all HTML tags to be rendered in the DOM. This is not recommended because it may allow users (who may not otherwise have access to edit templates) to inject HTML in unexpected places. For example, if the template is defined as `<p>{content}</p>`, but `{content}` itself is `<form><input></form>`, that will be rendered in the DOM as `<p><form><input></form></p>` which would essentially allow a user to add a form to a page via a `content` field that was probably not intended to be used in this way.
- `"none"` converts all HTML tags to their encoded values (e.g. `<h1>` becomes `&lt;h1&gt;`) and will output it as text. This is the safest option because it prevents any unexpected HTML to be rendered in the DOM.

### `$parse_images`

(`bool`) \[ **TRUE** / FALSE \] — Whether or not `{file:XX:url}` and `{filedir_#}` variables are to be parsed.

### `$parse_smileys`

(`bool`) \[ **TRUE** / FALSE \] — Replace text smileys with smiley images?

### `$popup_links`

(`bool`) \[ TRUE / **FALSE** \] — Create links as popups?

### `$single_line_pgfs`

(`bool`) \[ **TRUE** / FALSE \] — Whether to treat single lines as paragraphs in auto-XHTML

### `$smiley_array`

(`mixed`) \[ **FALSE** \] — If emoticons are enabled for the site, this property will contain an array of smiley conversions in `key (smiley) => value (image)` pairs. If emoticons are not enabled, this will be set to `FALSE`.

### `$text_fmt_plugins`

(`array`) — Array of available installed plugins.

### `$text_fmt_types`

(`array`) \[ **array('xhtml', 'br', 'none', 'lite')** \] — Array of standard formatting types available to the Typography class.

### `$text_format`

(`string`) \[ **xhtml** / br / none / lite \] — Controls what formatting is applied to text.

### `$use_span_tags`

(`bool`) \[ **TRUE** / FALSE \] — Use `<span>` tags for font color and size BBCode? Setting to `FALSE` uses `<font>` tags.

### `$word_censor`

(`bool`) \[ **FALSE** \] — Whether or not word censoring is applied. This property is set dynamically based on site preferences and is not necessary to set directly.

### `$yes_no_syntax`

(`array`) \[ **array('y', 'n')** \] — Array of valid Yes / No strings for use in properties. Used to ensure that valid settings are being provided for a Yes / No type preference.

## Parsing Type

### `parse_type($str[, $prefs = ''])`

| Parameter | Type     | Description                                                  |
| --------- | -------- | ------------------------------------------------------------ |
| \$str     | `String` | String to parse                                              |
| \$prefs   | `Array`  | Associative array containing parsing preferences (see below) |
| Returns   | `String` | Parsed string                                                |

This method returns a string of parsed type. It is the most common use of the Typography class, and many of the individual methods also described in this document are used within the parse_type() method. The format the string is returned in is determined by both the class properties and the array of properties provided in the second argument.:

    $str = ee()->typography->parse_type($str);

You may override class properties directly in the \$prefs array for the following:

- `text_format`
- `html_format`
- `auto_links`
- `allow_img_url`

<!-- -->

    $prefs = array(
        'text_format'   => 'xhtml',
        'html_format'   => 'all',
        'auto_links'    => 'y',
        'allow_img_url' => 'y'
    );

    $str = ee()->typography->parse_type($str, $prefs);

### Using a Plugin for Text Formatting

Any installed formatting plugin may be used to parse type. Simply use the class name of the plugin, in lowercase letters:

    $str = ee()->typography->parse_type($str, array('text_format' => 'markdown'));

If you attempt to use a plugin that is not installed, no text formatting will be performed. It may be wise to check for the existence of plugins before using them, so if they are not installed, you can fall back on one of the native formatting types:

    $text_format = (in_array('markdown', ee()->typography->text_fmt_plugins)) ? 'markdown' : 'xhtml';
    $str = ee()->typography->parse_type($str, array('text_format' => $text_format));

## Encode Email Addresses

### `encode_email($email[, $title = ''[, $anchor = TRUE]])`

| Parameter | Type      | Description                               |
| --------- | --------- | ----------------------------------------- |
| \$email   | `String`  | Email address                             |
| \$title   | `String`  | Text to use as the title of the link      |
| \$anchor  | `Boolean` | Whether to create a clickable link or not |
| Returns   | `String`  | Encoded email address                     |

This method encodes email addresses with Javascript, to assist in prevention of email harvesting by bots.:

    $str = "brett.bretterson@example.com";
    $str = ee()->typography->encode_email($str, "Email Brett Bretterson");

If you want to return a human readable "encoded" email address instead, you can also set the `Typography::$encode_type` class property to `"noscript"`.

## Auto (XTHML) Typography

### `auto_typography($str[, $reduce_linebreaks = FALSE])`

| Parameter           | Type      | Description                                                       |
| ------------------- | --------- | ----------------------------------------------------------------- |
| \$str               | `String`  | Text to apply XHTML typography to                                 |
| \$reduce_linebreaks | `Boolean` | Set to `TRUE` to reduce more than two consecutive newlines to two |
| Returns             | `String`  | Formatted and cleaned text                                        |

This method takes a string of text and returns typographically correct XHTML:

    $str = ee()->typography->auto_typography($str);

Its primary modifications are:

- It turns double spaces into paragraphs.
- It adds line breaks where there are single spaces.
- It turns single and double quotes into curly quotes.
- It turns three dots into ellipsis.
- It turns double dashes into em-dashes.

## Formatting Characters for XHTML ("Light" Typography)

### `format_characters($str)`

| Parameter | Type     | Description                           |
| --------- | -------- | ------------------------------------- |
| \$str     | `String` | Text to apply character formatting to |
| Returns   | `String` | Character formatted text              |

This method performs the character transformation portion of the XHTML typography only, i.e. curly quotes, ellipsis, ampersand, etc.:

    $str = ee()->typography->format_characters($str);

## Markdown

### `markdown($str[, $options = array()])`

| Parameter | Type     | Description                                                                                                                                                                     |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \$str     | `String` | String to parse                                                                                                                                                                 |
| \$options | `Array`  | Associative array containing options: <br>- `encode_ee_tags` (`yes`/`no`) can be used to disable ee tag encoding <br>- `smartypants` (`yes`/`no`) enable or disable smartypants |
| Returns   | `String` | Parsed Markdown content                                                                                                                                                         |

This method lets you parse your content using Markdown and Smartypants:

    $str = ee()->typography->markdown($str);
