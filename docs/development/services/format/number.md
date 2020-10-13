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

# Number Formatter

[TOC]

The Number Formatter is part of the [Format Service](development/services/format.md) and handles many common formatting needs for numeric content.

## Usage

### Bytes

    $display_size = ee('Format')->make('Number', 76752)->bytes();
    // 75<abbr title="Kilobytes">KB</abbr>

    $display_size = ee('Format')->make('Number', 76752)->bytes(FALSE);
    // 75 kilobytes

### Currency

    $money = ee('Format')->make('Number', 4736234.5)->currency();
    // $4,736,234.58 (presuming default / US locale in the PHP environment)

    $money = ee('Format')->make('Number', 4736234.58)->currency(['locale' => 'de_DE', 'currency' => 'EUR']);
    // 4.736.234,58 €

WARN: **Warning:** For the greatest accuracy, the PHP intl extension must be available (PHP's default). Without it, the currency symbol may be placed in the wrong position for non-US locales. The fallback also relies on _strfmon_ which is not available on all systems, such as Windows.

### Duration

    $duration = ee('Format')->make('Number', 112358)->duration();
    // 31:12:38

### Number Format

    $number = ee('Format')->make('Number, 12345.67890)->number_format();
    // 12,346

### Ordinal

    $ordinal = ee('Format')->make('Number', 43)->ordinal();
    // 43rd

### Spellout

    $written_check = ee('Format')->make('Number', 112358.13)->spellout();
    // one hundred twelve thousand three hundred fifty-eight point one three

    $written_check = ee('Format')->make('Number', 112358.13)->spellout(['capitalize' => 'ucwords']);
    // One Hundred Twelve Thousand Three Hundred Fifty-eight Point One Three

    $written_check = ee('Format')->make('Number', 112358.13)->spellout(['locale' => 'de_DE']);
    // ein­hundert­zwölf­tausend­drei­hundert­acht­und­fünfzig Komma eins drei

WARN: **Warning:** This method requires the PHP intl extension (enabled by default).

## API Reference

**class `ExpressionEngine\Service\Formatter\Formats\Number`**

[TOC=3]

### `bytes($abbr = TRUE, $include_markup = TRUE)`

Formats a binary byte multiple into a human-readable measure of units, e.g. B, KB, MB, GB.

| Parameter        | Type     | Description                                                                |
| ---------------- | -------- | -------------------------------------------------------------------------- |
| \$abbr           | `Bool`   | (default: TRUE) Use the abbreviated form of the byte format                |
| \$include_markup | `Bool`   | (default: TRUE) Output with `<abbr>` HTML. Only affects abbreviated forms. |
| Returns          | `Object` | A Formatter object                                                         |

### `currency($options = [])`

Formats as currency. Greatest accuracy requires the PHP intl extension to be available

| Parameter | Type     | Description                                                                                                                                                        |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \$options | `Array`  | (string) **currency** code (USD, EUR, etc.) <br> (string) **decimals** decimal precision (default based on locale) <br> (string) **locale** (default: en_US.UTF-8) |
| Returns   | `Object` | A Formatter object                                                                                                                                                 |

### `duration($options = [])`

Formats as a duration using a rule-based format, e.g.: hh:mm:ss, mm:ss, or ss sec.

| Parameter | Type     | Description                                |
| --------- | -------- | ------------------------------------------ |
| \$options | `Array`  | (string) **locale** (default: en_US.UTF-8) |
| Returns   | `Object` | A Formatter object                         |

### `number_format($options = [])`

Formats with a number using typical options, e.g. `12,345.68`.

| Parameter | Type     | Description                                |
| --------- | -------- | ------------------------------------------ |
| \$options | `Array`  | (int) **decimals** decimal precision (default: 0) <br> (string) **decimal_point** character to use as the decimal separator (default: `.`) <br> (string) **thousands_separator** character to use as the thousands separator (default: `,`)|
| Returns   | `Object` | A Formatter object                         |

### `ordinal($options = [])`

Formats with an ordinal suffix, e.g. `127th`. Locales other than English require the PHP intl extension.

| Parameter | Type     | Description                                |
| --------- | -------- | ------------------------------------------ |
| \$options | `Array`  | (string) **locale** (default: en_US.UTF-8) |
| Returns   | `Object` | A Formatter object                         |

### `spellout($options = [])`

Spell out the number as words. Requires the PHP intl extension.

| Parameter | Type     | Description                                                                                    |
| --------- | -------- | ---------------------------------------------------------------------------------------------- |
| \$options | `Array`  | (string) **capitalize** 'ucfirst' or 'ucwords' <br> (string) **locale** (default: en_US.UTF-8) |
| Returns   | `Object` | A Formatter object                                                                             |
