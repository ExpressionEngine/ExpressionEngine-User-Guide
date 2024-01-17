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

# String Helper

The String Helper file contains functions that assist in working with strings. This helper is loaded using the following code:

    ee()->load->helper('string');

## Available Functions

[TOC=3]

### `random_string([$type = 'alnum'[, $len = 8]])`

| Parameter | Type     | Description          |
| --------- | -------- | -------------------- |
| \$type    | `String` | Randomization type   |
| \$len     | `Int`    | Output string length |
| Returns   | `String` | A random string      |

Generates a random string based on the type and length you specify. Useful for creating passwords or generating random hashes.

The first parameter specifies the type of string, the second parameter specifies the length. The following choices are available:

- `alpha`: A string with lower and uppercase letters only.
- `alnum`: Alpha-numeric string with lower and uppercase characters.
- `basic`: A random number based on `mt_rand()`.
- `numeric`: Numeric string.
- `nozero`: Numeric string with no zeros.
- `md5`: An encrypted random number based on `md5()` (fixed length of 32).
- `sha1`: An encrypted random number based on `sha1()` (fixed length of 40).

Usage example:

    echo random_string('alnum', 16);

NOTE: **Note:** Usage of the `unique` and `encrypt` types is DEPRECATED. They are just aliases for `md5` and `sha1` respectively.

### `increment_string($str[, $separator = '_'[, $first = 1]])`

| Parameter   | Type     | Description                                 |
| ----------- | -------- | ------------------------------------------- |
| \$str       | `String` | Input string                                |
| \$separator | `String` | Separator to append a duplicate number with |
| \$first     | `Int`    | Starting number                             |
| Returns     | `String` | An incremented string                       |

Increments a string by appending a number to it or increasing the number. Useful for creating "copies" or a file or duplicating database content which has unique titles or slugs.

Usage example:

    echo increment_string('file', '_'); // "file_1"
    echo increment_string('file', '-', 2); // "file-2"
    echo increment_string('file_4'); // "file_5"

### `alternator($args)`

| Parameter | Type    | Description                    |
| --------- | ------- | ------------------------------ |
| \$args    | `Mixed` | A variable number of arguments |
| Returns   | `Mixed` | Alternated string(s)           |

Allows two or more items to be alternated between, when cycling through a loop. Example:

    for ($i = 0; $i < 10; $i++)
    {     
        echo alternator('string one', 'string two');
    }

You can add as many parameters as you want, and with each iteration of your loop the next item will be returned.

    for ($i = 0; $i < 10; $i++)
    {     
        echo alternator('one', 'two', 'three', 'four', 'five');
    }

NOTE: **Note:** To use multiple separate calls to this function simply call the function with no arguments to re-initialize.

### `reduce_double_slashes($str)`

| Parameter | Type     | Description                      |
| --------- | -------- | -------------------------------- |
| \$str     | `String` | Input string                     |
| Returns   | `String` | A string with normalized slashes |

Converts double slashes in a string to a single slash, except those found in URL protocol prefixes (e.g. https://).

Example:

    $string = "https://example.com//index.php";
    echo reduce_double_slashes($string); // results in "https://example.com"

### `strip_slashes($data)`

| Parameter | Type    | Description                         |
| --------- | ------- | ----------------------------------- |
| \$data    | `Mixed` | Input string or an array of strings |
| Returns   | `Mixed` | String(s) with stripped slashes     |

Removes any slashes from an array of strings.

Example:

    $str = array(
        'question'  => 'Is your name O\'reilly?',
        'answer' => 'No, my name is O\'connor.'
    );

    $str = strip_slashes($str);

The above will return the following array:

    array(
        'question'  => "Is your name O'reilly?",
        'answer' => "No, my name is O'connor."
    );

NOTE: **Note:** For historical reasons, this function will also accept and handle string inputs. This however makes it just an alias for `stripslashes()`.

### `trim_slashes($str)`

| Parameter | Type     | Description          |
| --------- | -------- | -------------------- |
| \$str     | `String` | Input string         |
| Returns   | `String` | Slash-trimmed string |

Removes any leading/trailing slashes from a string. Example:

    $string = "/this/that/theother/";
    echo trim_slashes($string); // results in this/that/theother

### `reduce_multiples($str[, $character = ''[, $trim = FALSE]])`

| Parameter   | Type     | Description                                  |
| ----------- | -------- | -------------------------------------------- |
| \$str       | `String` | Text to search in                            |
| \$character | `String` | Character to reduce                          |
| \$trim      | `Bool`   | Whether to also trim the specified character |
| Returns     | `String` | Reduced string                               |

Reduces multiple instances of a particular character occurring directly after each other. Example:

    $string = "Fred, Bill,, Joe, Jimmy";
    $string = reduce_multiples($string,","); //results in "Fred, Bill, Joe, Jimmy"

If the third parameter is set to `TRUE` it will remove occurrences of the character at the beginning and the end of the string. Example:

    $string = ",Fred, Bill,, Joe, Jimmy,";
    $string = reduce_multiples($string, ", ", TRUE); //results in "Fred, Bill, Joe, Jimmy"

### `quotes_to_entities($str)`

| Parameter | Type     | Description                                   |
| --------- | -------- | --------------------------------------------- |
| \$str     | `String` | Input string                                  |
| Returns   | `String` | String with quotes converted to HTML entities |

Converts single and double quotes in a string to the corresponding HTML entities. Example:

    $string = "Joe's \"dinner\"";
    $string = quotes_to_entities($string); //results in "Joe&#39;s &quot;dinner&quot;"

### `strip_quotes($str)`

| Parameter | Type     | Description                 |
| --------- | -------- | --------------------------- |
| \$str     | `String` | Input string                |
| Returns   | `String` | String with quotes stripped |

Removes single and double quotes from a string. Example:

    $string = "Joe's \"dinner\"";
    $string = strip_quotes($string); //results in "Joes dinner"

### `trim_nbs($string)`

| Parameter | Type     | Description        |
| --------- | -------- | ------------------ |
| \$string  | `String` | The string to trim |
| Returns   | `String` | The trimmed string |

Just like trim, but also removes non-breaking spaces

### `surrounding_character($string)`

| Parameter | Type     | Description                                              |
| --------- | -------- | -------------------------------------------------------- |
| \$string  | `String` | The string to check                                      |
| Returns   | `Mixed`  | The surrounding character, or `FALSE` if there isn't one |

Returns the surrounding character of a string, if it exists
