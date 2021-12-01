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

# Performance Guidelines

[TOC]

## POSIX Extended Regular Expressions

**Do not use POSIX Extended regular expression functions**. When you _need_ a regular expression function, always use the Perl-compatible (PCRE) `preg_` functions.

NOTE: **Note:** **NEVER USE**: `ereg()`, `eregi()`, `ereg_replace()`, `eregi_replace()`, `split()`, `spliti()`, or `sql_regcase()`

## Perl-compatible (PCRE) Regular Expressions

**Do not use regular expression functions unless you need to.**

INCORRECT:

    $str = preg_replace('/foo/', 'bar', $str);
    $arr = preg_split('|', $str);
    $arr = preg_split('|', $str, -1, PREG_SPLIT_NO_EMPTY); // $str is '1|2|3|4|'

CORRECT:

    $str = str_replace('foo', 'bar', $str);
    $arr = explode('|', $str);
    $arr = explode('|', trim($str, '|')); // $str is '1|2|3|4|'

## PCRE Subpattern Capture Optimization

Use `?:` at the start of a subpattern if it does not need to be captured for faster execution and memory conservation.

INCORRECT:

    $str = preg_replace('/xyz([0-9]+)/', 'zyx', $str);  // not using the captured subpattern, so ?: should be used

CORRECT:

    $str = preg_replace('/xyz(?:[0-9]+)/', 'zyx', $str);    // correct use when not using the captured subpattern
    $str = preg_replace('/xyz([0-9]+)/', 'zyx\\1', $str);   // correct use of a captured subpattern

## PCRE Backreference Caution

When using backreferences from a capture pattern combined with a parsed PHP variable, it is necessary to use dollar-sign backreferences to prevent it from looking for a backreference that doesn't exist.

INCORRECT:

    $foo = '123 Any Street';
    $str = preg_replace('/(.*)/', "\\1{$foo}"); // expands to "\\1123 Any Street" and looks for backreference \\1123!

CORRECT:

    $foo = '123 Any Street';
    $str = preg_replace('/(.*)/', "${1}{$foo}");

## Avoid Unnecessary String Replacements

Do not perform string replacements unless you need to, and know that the _search_ string exists in the _subject_ string. Use `strpos()` to see if the replacement is necessary beforehand.

INCORRECT:

    foreach ($items as $name => $value)
    {
        $str = str_replace($name, $value, $str);
    }

CORRECT:

    foreach ($items as $name => $value)
    {
        if (strpos($str, $name) !== FALSE)
        {
            $str = str_replace($name, $value, $str);
        }
    }

Remarkably, even if a match occurs on each loop, the additional processing overhead for the `strpos()` is negligible (on a 100kb string it adds roughly 0.01 seconds for every _10,000_ loops). If there are loops that do not match, this method can approach 100% greater efficiency.

## Use sprintf instead of str_replace

When you need to add one or more variables to an existing string (e.g. lang values), make sure to use [sprintf](https://php.net/sprintf) instead of `str_replace`.

INCORRECT:

    str_replace('%s', $channel, 'Currently editing the %s channel.')

CORRECT:

    sprintf('Currently editing the %s channel.', $channel)
    sprintf('%s is currently editing the %s channel.', $member_name, $channel)

## Smart Substring Matching

When checking to see if a string has matching characters at the front of the string only, use `strncmp()` and `strncasecmp()` instead of `substr()`. Especially on non-case sensitive checks, these functions are much faster. Never use regular expression functions for this unless you actually need a regular expression match.

INCORRECT:

    if (substr($str, 0, 3) == 'foo')
    if (substr(strtolower($str), 0, 3) == 'foo')
    if (preg_match('/^foo/', $str))         // no need for regex match for this type of comparison
    if (ereg('^foo', $str))             // AAAAAH!  Never ever use ereg(), remember?

CORRECT:

    if (strncmp($str, 'foo', 3) == 0)
    if (strncasecmp($str, 'foo', 3) == 0)

[strncmp()](https://us3.php.net/manual/en/function.strncmp.php) and [strncasecmp()](https://us3.php.net/manual/en/function.strcasecmp.php) return &lt; 0 if `str1` is less than `str2`, &gt; 0 if `str1` is greater than `str2`, and **0 if they are equal**.

## for() Loops

Do not perform calculations in the second expression of `for()` loops, as they will be executed on each iteration of the loop. Perform them either in the first expression, or before entering the loop.

INCORRECT:

    for ($i = 0; $i < count($arr); $i++)

CORRECT:

    for ($i = 0, $foo = $count($arr); $i < $foo; $i++)

ALTERNATIVE:

    $foo = count($arr); for ($i = 0; $i < $foo; $i++)

## Heredoc Strings

Avoid [heredoc strings](https://us3.php.net/manual/en/language.types.string.php#language.types.string.syntax.heredoc) unless absolutely necessary. They are more intensive for PHP to parse than single or double-quoted strings, resulting in slower code execution and increased memory usage.

## One-time Use Variables

Avoid assigning new variables for one-time use. In the example below, `$foo` is never used again in the method.

INCORRECT:

    $foo = 'a';
    $str = $str.$foo;

CORRECT:

    $str = $str.'a';

## Redundant Queries

Avoid running queries in loops or running identical queries multiple times across page loads. Find a way to run such queries only once, outside of loops, by perhaps accessing all of the information your add-on will require for each iteration, storing it in a master array.

Make intelligent use of `ee()->session->cache <use_of_session_cache>` so these and other "meta" queries are executed only once no matter how many times a method is called on a page load.

NOTE: **Note:** To keep the code example simple, the values in the \$ids array below are assumed to have already been validated in the code prior to what is being shown. Do not neglect to validate and escape variables before using them in queries!

INCORRECT:

    foreach ($ids as $id)
    {
        $query = ee()->db->query("SELECT name FROM exp_pre_email_addresses WHERE id = {$id}");

        if ($query->num_rows() > 0)
        {
            $name = $query->row('name');
            // rest of the code
        }
    }

CORRECT:

    if ( ! isset(ee()->session->cache['super_class']['names']))
    {
        $query = ee()->db->query('SELECT id, name FROM exp_pre_email_addresses WHERE id IN ('.implode(',', $ids).')');

        if ($query->num_rows() > 0)
        {
            foreach ($query->result_array() as $row)
            {
                ee()->session->cache['super_class']['names'][$row['id']] = $row['name'];
            }
        }
    }

    $names = ee()->session->cache['super_class']['names'];

    // later in the code looped queries are no longer used
    foreach ($ids as $id)
    {
        $name = $names[$id];
        // rest of the code
    }
