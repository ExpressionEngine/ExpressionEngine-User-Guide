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

# Text Formatter

[TOC]

The String Formatter is part of the [Format Service](development/services/format.md) and handles many common formatting needs for text-based content.

## Usage

[TOC=3]

### Accented Characters to Ascii

    $written_check = ee('Format')->make('Text', 'über crème brûlée')->accentsToAscii();
    // uber creme brulee

### Attribute Escaping

    $attr = ee('Format')->make('Text', 'A discussion about "Wonko the Sane"')->attributeEscape();
    // A discussion about &quot;Wonko the Sane&quot;

### Attribute Safe (escaping and other common utilities)

    // this is the same as attributeEscape(), but allows character limiting, unicode punctuation, etc. Note: limiting keeps whole words
    $str = 'A discussion about &quot;Wonko the Sane&quot;';
    $attr = ee('Format')->make('Text', $str)->attributeSafe(['limit' => 20]);
    // A discussion…

### Censor

    $text = ee('Format')->make('Text', 'A discussion about "Wonko the Sane"')->censor();
    // A discussion about "Wonko the ####" (presuming "sane" is a configured naughty word)

### Convert to Entities

    $text = ee('Format')->make('Text', '"über" crème brûlée')->convertToEntities();
    // &quot;&uuml;ber&quot; cr&egrave;me br&ucirc;l&eacute;e

### Encode ExpressionEngine Tags

    $str = '{exp:tag}{variable}{/exp:tag}';
    $text = ee('Format')->make('Text', $str)->encodeEETags();
    // &#123;exp:tag&#125;&#123;variable&#125;&#123;/exp:tag&#125;

### Encrypt

    $str = 'A discussion about "Wonko the Sane"';
    $encrypted = ee('Format')->make('Text', $str)->encrypt();
    // �1����j(QqS ���>}  ��1LU�䯏�u��u�%9�E0�3���tQhFsA�w[ZÈ�

    $encrypted = ee('Format')->make('Text', $str)->encrypt(['encode' => TRUE]);
    // UKEQBOdb+8DaznDlVTW1SHbrvTd2MsVNgoSJ7OxrIhqAYtyUfhOAih6ZvXXO0DTl+eV27tIV2bSrojMRYxA+4g==

### Form Prep

    $value = ee('Format')->make('Text', 'A discussion about "Wonko the Sane"')->formPrep();
    // A discussion about &quot;Wonko the Sane&quot;

### JSON

    $value = ee('Format')->make('Text', 'A discussion about "Wonko the Sane"')->json();
    // "A discussion about &quot;Wonko the Sane&quot;"

### Length

    $length = ee('Format')->make('Text', 'A discussion about "Wonko the Sane"')->length();
    // 35

### Limit Characters

    $text = ee('Format')->make('Text', '<h1>A <em>brief</em> discussion about "Wonko the Sane"</h1>')->limitChars(['characters' => 20]);
    // A brief discussion a&#8230;

### Replace

    $str = 'A discussion about "Wonko the Sane"';
    $text = ee('Format')->make('Text', $str)->replace(['find' => 'about', 'replace' => 'aboot']);
    // A discussion aboot "Wonko the Sane"

    $text = ee('Format')->make('Text', $str)->replace(['find' => '/ou?/', 'replace' => 'OH', 'regex' => TRUE]);
    // A discussiOHn abOHt "WOHnkOH the Sane"

### URL Decode

    $text = ee('Format')->make('Text', 'A%20discussion%20about%20%22Wonko%20the%20Sane%22')->urlDecode();
    // A discussion about "Wonko the Sane"

### URL Encode

    $str = 'A discussion about "Wonko the Sane"';
    $text = ee('Format')->make('Text', $str)->urlEncode();
    // A%20discussion%20about%20%22Wonko%20the%20Sane%22

    $text = ee('Format')->make('Text', $str)->urlEncode(['plus_encoded_spaces' => TRUE]);
    // A+discussion+about+%22Wonko+the+Sane%22

### URL Normalization

    $str = 'www.example.com';
    $url = ee('Format')->make('Text', $str)->url();
    // https://www.example.com

    $str = 'https://';
    $url = ee('Format')->make('Text', $str)->url();
    // empty string, URL is invalid

### URL Slug

    $url_title = ee('Format')->make('Text', 'A discussion about "Wonko the Sane"')->urlSlug();
    // a-discussion-about-wonko-the-sane

    $url_title = ee('Format')->make('Text', 'A discussion about "Wonko the Sane"')->urlSlug(['remove_stopwords' => TRUE]);
    // discussion-wonko-sane

## API Reference

**class `ExpressionEngine\Service\Formatter\Formats\Text`**

[TOC=3]

### `accentsToAscii()`

Converts accented / multi-byte characters, e.g. ü, é, ß to ASCII transliterations. Uses foreign_chars.php config, either the default or user override, as a map

| Parameter | Type     | Description        |
| --------- | -------- | ------------------ |
| Returns   | `Object` | A Formatter object |

### `attributeEscape($double_encode = TRUE)`

Escapes a string for use in an HTML attribute.

| Parameter       | Type     | Description                                     |
| --------------- | -------- | ----------------------------------------------- |
| \$double_encode | `Bool`   | Whether to double encode existing HTML entities |
| Returns         | `Object` | A Formatter object                              |

### `attributeSafe($options = [])`

Makes content safe to use in an HTML attribute. In addition to escaping like attributeEscape(), it allows for character limiting, and unicode punctuation—handy for meta tags where entities may not be parsed.

| Parameter | Type     | Description                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \$options | `Array`  | (bool) **double_encode** (default: FALSE) - whether to double encode existing entities <br> (string) **end_char** (default: &\#8230;) - character to use when the limit terminates the string <br> (int) **limit** (default: no limit) - number of characters to limit to, retains whole words <br> (bool) **unicode_punctuation** (default: TRUE) - whether or not to use unicode punctuation characters instead of entities |
| Returns   | `Object` | A Formatter object                                                                                                                                                                                                                                                                                                                                                                                                            |

### `censor()`

Censor naughty words, respects application preferences

| Parameter | Type     | Description        |
| --------- | -------- | ------------------ |
| Returns   | `Object` | A Formatter object |

### `convertToEntities($options = [])`

Converts all applicable characters into HTML entities

| Parameter | Type     | Description        |
| --------- | -------- | ------------------ |
| Returns   | `Object` | A Formatter object |

### `encodeEETags($options = [])`

Encode ExpressionEngine Tags. By default encodes all curly braces so variables are also protected.

| Parameter | Type     | Description                                                                                                  |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| \$options | `Array`  | (bool) **encode_vars** (default: TRUE) - whether or not to convert curly braces on variables along with tags |
| Returns   | `Object` | A Formatter object                                                                                           |

### `encrypt($options = [])`

Encrypt the text

| Parameter | Type     | Description                                                                                                                                                                                                       |
| --------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \$options | `Array`  | (string) **key** (optional encryption key, when not provided, uses the application encryption key) <br> (bool) **encode** (default: TRUE) - whether or not to base64 encode the encrypted data for safe transport |
| Returns   | `Object` | A Formatter object                                                                                                                                                                                                |

### `formPrep()`

Preps the content for use in a form field

| Parameter | Type     | Description        |
| --------- | -------- | ------------------ |
| Returns   | `Object` | A Formatter object |

### `getLength()`

Replace the contents with the length of the string

| Parameter | Type     | Description        |
| --------- | -------- | ------------------ |
| Returns   | `Object` | A Formatter object |

### `json($options = [])`

Encode as JSON

| Parameter | Type     | Description                                                                                                                                                                                                                                                                                |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \$options | `Array`  | (bool) **double_encode** (default: TRUE) - whether to double encode already-encoded entities <br> (bool) **enclose with quotes** (default: TRUE) - whether or not to return the JSON enclosed in double quotes <br> (string) **options** Pipe-delimited list of PHP JSON bitmask constants |
| Returns   | `Object` | A Formatter object                                                                                                                                                                                                                                                                         |

### `limitChars($options = [])`

Limit to X characters, with an optional end character

| Parameter | Type     | Description                                                                                                                                                                                                  |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \$options | `Array`  | (int) **characters** (default: 500) - number of characters to limit to, does not preserve whole words <br> (string) **end_char** (default: &\#8230;) - character to use when the limit terminates the string |
| Returns   | `Object` | A Formatter object                                                                                                                                                                                           |

### `replace($options = [])`

Encrypt the text

| Parameter | Type     | Description                                                                                                                                                                                                                                                                                                                                                                                    |
| --------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \$options | `Array`  | (string) **find** - the text to be replaced <br> (string) **replace** - the replacement text <br> (bool) **case_sensitive** (default: TRUE) - whether or not the replacement is case-sensitive (has no effect if regex replacement is used, in those cases use the `i` regex flag) <br> (bool) **regex** (default: FALSE) - whether the find string should be processed as a regex replacement |
| Returns   | `Object` | A Formatter object                                                                                                                                                                                                                                                                                                                                                                             |

### `url()`

Normalize a URL for use in markup.

| Parameter | Type     | Description        |
| --------- | -------- | ------------------ |
| Returns   | `Object` | A Formatter object |

### `urlDecode($options = [])`

URL encode the text

| Parameter | Type     | Description                                                                              |
| --------- | -------- | ---------------------------------------------------------------------------------------- |
| \$options | `Array`  | (bool) **plus_encoded_spaces** (default: FALSE) - whether or not to decode `+` to spaces |
| Returns   | `Object` | A Formatter object                                                                       |

### `urlEncode($options = [])`

URL encode the text

| Parameter | Type     | Description                                                                                               |
| --------- | -------- | --------------------------------------------------------------------------------------------------------- |
| \$options | `Array`  | (bool) **plus_encoded_spaces** (default: FALSE) - whether or not to encode spaces as `+` instead of `%20` |
| Returns   | `Object` | A Formatter object                                                                                        |

### `urlSlug($options = [])`

Make a URL slug from the text

| Parameter | Type     | Description                                                                                                                                                                                                                                                                                                                        |
| --------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \$options | `Array`  | (string) **separator** (default: `-`) - the character used to separate words. If not specified, will respect the application preferences. <br> (bool) **lowercase** (default: TRUE) - whether or not to force lowercase <br> (bool) **remove_stopwords** (default: FALSE) - whether or not to remove stopwords (a, the, and, etc.) |
| Returns   | `Object` | A Formatter object                                                                                                                                                                                                                                                                                                                 |
