---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://www.packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Text Helper

The Text Helper file contains functions that assist in working with text. This helper is loaded using the following code:

    ee()->load->helper('text');

## Available Functions

[TOC=3]

### `word_limiter($str[, $limit = 100[, $end_char = '&#8230;']])`

| Parameter  | Type     | Description                         |
| ---------- | -------- | ----------------------------------- |
| \$str      | `String` | Input string                        |
| \$limit    | `Int`    | Limit                               |
| \$end_char | `String` | End character (usually an ellipsis) |
| Returns    | `String` | Word-limited string                 |

Truncates a string to the number of _words_ specified. Example:

    $string = "Here is a nice text string consisting of eleven words.";
    $string = word_limiter($string, 4);
    // Returns:  Here is a nice

The third parameter is an optional suffix added to the string. By default it adds an ellipsis.

### `character_limiter($str[, $n = 500[, $end_char = '&#8230;']])`

| Parameter  | Type     | Description                         |
| ---------- | -------- | ----------------------------------- |
| \$str      | `String` | Input string                        |
| \$n        | `Int`    | Number of characters                |
| \$end_char | `String` | End character (usually an ellipsis) |
| Returns    | `String` | Character-limited string            |

Truncates a string to the number of _characters_ specified. It maintains the integrity of words so the character count may be slightly more or less than what you specify.

Example:

    $string = "Here is a nice text string consisting of eleven words.";
    $string = character_limiter($string, 20);
    // Returns:  Here is a nice text string

The third parameter is an optional suffix added to the string, if undeclared this helper uses an ellipsis.

NOTE: **Note:** If you need to truncate to an exact number of characters please see the `ellipsize()` function below.

### `ascii_to_entities($str)`

| Parameter | Type     | Description                                      |
| --------- | -------- | ------------------------------------------------ |
| \$str     | `String` | Input string                                     |
| Returns   | `String` | A string with ASCII values converted to entities |

Converts ASCII values to character entities, including high ASCII and MS Word characters that can cause problems when used in a web page, so that they can be shown consistently regardless of browser settings or stored reliably in a database. There is some dependence on your server's supported character sets, so it may not be 100% reliable in all cases, but for the most part it should correctly identify characters outside the normal range (like accented characters).

Example:

    $string = ascii_to_entities($string);

### `entities_to_ascii($str[, $all = TRUE])`

| Parameter | Type     | Description                                               |
| --------- | -------- | --------------------------------------------------------- |
| \$str     | `String` | Input string                                              |
| \$all     | `Bool`   | Whether to convert unsafe entities as well                |
| Returns   | `String` | A string with HTML entities converted to ASCII characters |

This function does the opposite of `ascii_to_entities()`. It turns character entities back into ASCII.

### `convert_accented_characters($str)`

| Parameter | Type     | Description                                 |
| --------- | -------- | ------------------------------------------- |
| \$str     | `String` | Input string                                |
| Returns   | `String` | A string with accented characters converted |

Transliterates high ASCII characters to low ASCII equivalents. Useful when non-English characters need to be used where only standard ASCII characters are safely used, for instance, in URLs.

Example:

    $string = convert_accented_characters($string);

NOTE: **Note:** This function uses a companion config file `system/ee/legacy/config/foreign_chars.php` to define the to and from array for transliteration.

### `word_censor($str, $censored[, $replacement = ''])`

| Parameter     | Type     | Description                    |
| ------------- | -------- | ------------------------------ |
| \$str         | `String` | Input string                   |
| \$censored    | `Array`  | List of bad words to censor    |
| \$replacement | `String` | What to replace bad words with |
| Returns       | `String` | Censored string                |

Enables you to censor words within a text string. The first parameter will contain the original string. The second will contain an array of words which you disallow. The third (optional) parameter can contain a replacement value for the words. If not specified they are replaced with pound signs: `####`.

Example:

    $disallowed = array('darn', 'shucks', 'golly', 'phooey');
    $string = word_censor($string, $disallowed, 'Beep!');

### `highlight_code($str)`

| Parameter | Type     | Description                           |
| --------- | -------- | ------------------------------------- |
| \$str     | `String` | Input string                          |
| Returns   | `String` | String with code highlighted via HTML |

Colorizes a string of code (PHP, HTML, etc.). Example:

    $string = highlight_code($string);

The function uses PHP's `highlight_string()` function, so the colors used are the ones specified in your `php.ini` file.

### `highlight_phrase($str, $phrase[, $tag_open = '<mark>'[, $tag_close = '</mark>']])`

| Parameter   | Type     | Description                               |
| ----------- | -------- | ----------------------------------------- |
| \$str       | `String` | Input string                              |
| \$phrase    | `String` | Phrase to highlight                       |
| \$tag_open  | `String` | Opening tag used for the highlight        |
| \$tag_close | `String` | Closing tag for the highlight             |
| Returns     | `String` | String with a phrase highlighted via HTML |

Will highlight a phrase within a text string. The first parameter will contain the original string, the second will contain the phrase you wish to highlight. The third and fourth parameters will contain the opening/closing HTML tags you would like the phrase wrapped in.

Example:

    $string = "Here is a nice text string about nothing in particular.";
    echo highlight_phrase($string, "nice text", '<span style="color:#990000;">', '</span>');

The above code prints:

    Here is a <span style="color:#990000;">nice text</span> string about nothing in particular.

### `word_wrap($str[, $charlim = 76])`

| Parameter | Type     | Description         |
| --------- | -------- | ------------------- |
| \$str     | `String` | Input string        |
| \$charlim | `Int`    | Character limit     |
| Returns   | `String` | Word-wrapped string |

Wraps text at the specified _character_ count while maintaining complete words.

Example:

    $string = "Here is a simple string of text that will help us demonstrate this function.";
    echo word_wrap($string, 25);

    // Would produce:  Here is a simple string of text that will help us demonstrate this function

### `ellipsize($str, $max_length[, $position = 1[, $ellipsis = '&hellip;']])`

| Parameter    | Type     | Description                           |
| ------------ | -------- | ------------------------------------- |
| \$str        | `String` | Input string                          |
| \$max_length | `Int`    | String length limit                   |
| \$position   | `Mixed`  | Position to split at (int or float)   |
| \$ellipsis   | `String` | What to use as the ellipsis character |
| Returns      | `String` | Ellipsized string                     |

This function will strip tags from a string, split it at a defined maximum length, and insert an ellipsis.

The first parameter is the string to ellipsize, the second is the number of characters in the final string. The third parameter is where in the string the ellipsis should appear from 0 - 1, left to right. For example. a value of 1 will place the ellipsis at the right of the string, .5 in the middle, and 0 at the left.

An optional forth parameter is the kind of ellipsis. By default, `&hellip;` will be inserted.

Example:

    $str = 'this_string_is_entirely_too_long_and_might_break_my_design.jpg';
    echo ellipsize($str, 32, .5);

Produces:

    this_string_is_e&hellip;ak_my_design.jpg
