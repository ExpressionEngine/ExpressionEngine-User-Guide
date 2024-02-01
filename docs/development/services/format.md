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

# Format Service

[TOC]

The Format service offers a number of common formatting tasks as a convenience and consolidated way for ExpressionEngine handles these tasks. The Formatter handles common string and number presentational needs.

    $display_size = ee('Format')->make('Number', $content)->bytes();

The Format service is a factory to the various formatters available. If you need the factory, use `ee('Format')`. If you need a Formatter, use `ee('Format')->make($formatter, $content)`.

## Format Factory

**class `ExpressionEngine\Service\Formatter\FormatterFactory`**

### `make($formatter_name, $content)`

Makes a Formatter object.

| Parameter        | Type        | Description                 |
| ---------------- | ----------- | --------------------------- |
| \$formatter_name | `String`    | Formatter name              |
| \$content        | `Mixed`     | The content to be formatted |
| Returns          | `Formatter` | A Formatter object          |

## All Formatters

### `compile()`

Compiles and returns the content as a string. Typically this is used when you need to use a content as an array key, or want to json_encode() the content.

| Parameter | Type          | Description |
| --------- | ------------- | ----------- |
| Returns   | `The content` | string      |

### `_toString()`

When accessed as a string simply compile the content and return that.

| Parameter | Type          | Description |
| --------- | ------------- | ----------- |
| Returns   | `The content` | string      |

NOTE: **Note:** When using Formatters, if you just need the string and not the object for further processing, you can use PHP's type casting:

    $array = array('size' => (string) ee('Format')->make('Number', $content)->bytes());

## Number Formatter

See [Number Formatter](development/services/format/number.md) for details.

## Text Formatter

See [Text Formatter](development/services/format/text.md) for details.

## When to use `compile()`

The Formatter object has a magic `__toString()` method that compiles the object into a string when the object is treated as a string (see: PHP's documentation on the magic [\_\_toString() method](https://php.net/manual/en/language.oop5.magic.php#object.tostring) for more information). The `compile()` method exists for those occasions when the object is treated as an object but you need a string instead. As per [PHP's documentation on arrays](https://php.net/manual/en/language.types.array.php): "Arrays and objects can not be used as keys. Doing so will result in a warning: _Illegal offset type._" You will also want to compile the object when you want to JSON encode the content otherwise you will get a JSON object instead of a string.

For example:

    ee()->javascript->set_global(array(
      'form.some_input.value' => ee('Format')->make('String', $content)->attribute_escape()->compile()
    ));
