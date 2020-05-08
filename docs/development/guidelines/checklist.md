<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Developer Guidelines Checklist

- General Syntax and Correctness:
  - Classes and methods are properly named and cased
  - Variables are properly named and cased
  - Prolific and informative commenting using proper comment style
  - Capital letters used for all constants, e.g. `CONSTANT_NAME`
  - Capital letters used for the keywords: `TRUE`, `FALSE`, and `NULL`
  - Proper comparison of return values and variables (`===` and `!==` as necessary)
  - No debugging code leftover unless commented out
  - No whitespace before or after opening/closing PHP tags in files
  - No use of deprecated core methods (check the [Developer Log](control-panel/system-logs.md#developer-logs) to make sure no deprecation warnings have surfaced from your add-on)
  - All code is PHP 5.3.10+ compatible
  - Proper use of `ee()->session->set_cache()` and `ee()->session->cache()`
  - Class and filenames are prefixed to avoid overlap when the name and purpose may be common
  - Custom database tables all use `exp_` prefix, followed by unique prefix, then the table name, e.g.: `exp_pre_email_addresses`
  - Separate files used for unrelated classes.
  - Tabs for whitespacing, not spaces
  - File saved with Unix line breaks
  - Allman style indenting: braces placed on a line by themselves and indented at same level as the control statement
  - Text output in the control panel uses Language variables to allow localization
  - Private variables and methods start with an underscore: `_convert_text()` is a private method, `convert_text()` is public
  - Not using PHP functions that require non-default libraries unless an alternative is provided, or implicitly documented as a requirement.
  - Code executes error free for all users with `error_reporting(E_ALL);`
  - Full PHP opening tags used.
  - Multiple statements are not combined on a single line
  - Single quoted strings used unless variables are being parsed or string needs to contain single quotes
  - Variables inside double-quoted strings are braced, e.g. `{$foo}`
  - No overlap of tag parameters effecting the same thing
  - Long queries broken up into multiple lines for legibility.
  - Function argument defaults used when appropriate
- Performance:
  - POSIX extended (`ereg`, etc.) regular expression functions not being used
  - `?:` used at the start of a PCRE subpattern not being captured for use
  - `preg_replace()` is not being used where `str_replace()` would suffice
  - `strpos()` used before `str_replace()` to see if the replacement is necessary
  - `strncmp()` and `strncasecmp()` instead of `substr()` or `preg_match()` when comparing the start of strings
  - Calculations are not being made in the second expression of `for()` loops
  - `Heredoc` string syntax avoided whenever possible
  - No variables are being set for one-time use
  - Queries are not needlessly stuck in loops or being run redundantly on a single page load
- Security:
  - XSS Cleaning taking place for all front-side user input before inserting into the database or output to the screen.
  - PHP variables escaped in queries.
  - Manually written queries using `ee()->db->escape_str()`
  - `ee()->db->insert_string()` used for data `INSERT`
  - `ee()->db->update_string()` is used for `UPDATE`
  - Strings sent as the `WHERE` clause to `ee()->db->update_string()` are escaped with `ee()->db->escape_str()`
  - Security and required preference settings are stored in the database or `config.php` file.
  - Prefs and settings are not being used in hidden form fields
  - No unnecessary preferences being used
  - Tag parameters are validated before use
  - Tag parameters have default values to fall back on
  - User-side forms are created with `$this->functions->form_declaration()`
  - Checks and deletions of secure form hashes taking place appropriately
  - No unfiltered incoming data output to the screen.
  - Methods processing forms are thorough with regards to validation, security, and processing
  - File name security precautions are being taken for `include()`, `require()` and saving files to servers.
  - Typography class used for outputting blocks of user submitted data, with proper settings as security dictates.
  - Security exceptions not being made for Super Admins
  - Built in EE classes and methods used for tasks when possible
  - Least Privilege approach used
