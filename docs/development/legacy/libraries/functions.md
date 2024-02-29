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

# Functions Class

**class `Functions`**

[TOC=3 hide]

The Functions class contains commonly required functions used throughout ExpressionEngine's scripts.

### `fetch_site_index([$add_slash = FALSE[, $sess_id = TRUE]])`

| Parameter   | Type      | Description                                                 |
| ----------- | --------- | ----------------------------------------------------------- |
| \$add_slash | `Boolean` | Set to `TRUE` to add a slash to the end of the return value |
| \$sess_id   | `Boolean` | Set to `FALSE` to exclude the session id                    |
| Returns     | `String`  | Site index URL                                              |

Returns the url of the main site index.

### `create_url($segment[, $sess_id = TRUE])`

| Parameter | Type      | Description                                        |
| --------- | --------- | -------------------------------------------------- |
| \$segment | `String`  | The desired URL's URI                              |
| \$sess_id | `Boolean` | If set to `FALSE`, session_id will not be included |
| Returns   | `String`  | Full site URL pointing to `$segment`               |

The segment passed to this function is parsed and added to the full site URL to create a full URL/URI.

    $memberlist_url = ee()->functions->create_url('member/memberlist');
    // returns "https://example.com/member/memberlist/"

### `fetch_current_uri()`

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| Returns   | `String` | Current URI |

Returns uri for current page.

### `extract_path($str)`

| Parameter | Type     | Description                     |
| --------- | -------- | ------------------------------- |
| \$str     | `String` | String to extract the path from |
| Returns   | `String` | Template group/name pair        |

Extract the template group/template name from `$str`, like `{some_var path='channel/index'}`, and returns just the path.

    // Parse permalink path
    $key = '{permalink path='channel/details'}'
    if (ee()->functions->extract_path($key) != '' && ee()->functions->extract_path($key) != 'SITE_INDEX')
    {
        $path = ee()->functions->extract_path($key).'/'.$row['entry_id'];
    }
    // function returns 'channel/details'

### `var_swap($str, $data)`

| Parameter | Type     | Description                                      |
| --------- | -------- | ------------------------------------------------ |
| \$str     | `String` | String to parse                                  |
| \$data    | `Array`  | Associative array of keys to replace with values |
| Returns   | `String` | `$str` parsed with `$data`                       |

Replace array of variables in string:

    $str = "Rick and Paul ate {meal} while sitting around the {item}";
    $swap = array('meal' => "Skittles", 'item' => "computer");
    $msg = ee()->functions->var_swap($str, $swap);
    // returns "Rick and Paul ate Skittles while sitting around the computer";

### `redirect($location[, $method = FALSE[, $status_code = NULL]])`

| Parameter     | Type      | Description                                                                                                    |
| ------------- | --------- | -------------------------------------------------------------------------------------------------------------- |
| \$location    | `String`  | URL to redirect to                                                                                             |
| \$method      | `String`  | Optionally choose a method to redirect with (can use `refresh`, otherwise defaults to using `Location` header) |
| \$status_code | `Integer` | Status code in the 300 block                                                                                   |
| Returns       | `Void`    |                                                                                                                |

Redirect to location.

### `random([$type = 'encrypt'[, $len = 8]])`

| Parameter | Type      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \$type    | `String`  | There are four possible values: <br>`basic` - just a random number <br>`alpha` - string with length of length using only letters (upper and lower case) of the alphabet <br>`numeric` - string with length of length using only numbers <br>`nozero` - string with length of length using all numbers except zero <br>`md5` - string of a random number that has been `md5`'ed <br>`encrypt` - string of a random number that has been hash'ed |
| \$len     | `Integer` | Length of the string                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Returns   | `String`  | Random string of characters                                                                                                                                                                                                                                                                                                                                                                                                                    |

Random number/password generator.

### `determine_return($go_to_index = false)`

| Parameter     | Type     | Description                                       |
| ------------- | -------- | ------------------------------------------------- |
| \$go_to_index | `Bool`   | When `true`, redirect to homepage                 |
| Returns       | `String` | URL to redirect to                                |

Discover the redirect link to return to upon form submission.

    $return_link = ee()->functions->determine_return();

### `determine_error_return()`

Discover the redirect link to return to upon form submission, if there have been validation errors and inline error handling was enabled in the form.

    $return_error_link = ee()->functions->determine_error_return();
    ee()->output->show_user_error('submission', $errors, '', $return_error_link);

### `form_declaration($data)`

| Parameter | Type     | Description                                       |
| --------- | -------- | ------------------------------------------------- |
| \$data    | `Array`  | Associative array of data (see above for example) |
| Returns   | `String` | Opening form tag and hidden fields                |

Creates opening form tag and hidden variables.

Any form will accept the `form_class` and `form_id` parameters. Access the values with TMPL class properties of `form_id` and `form_class`.

    $form_details = array(
        'action'          => '',
        'name'            => 'upload',
        'id'              => ee()->TMPL->form_id,
        'class'           => ee()->TMPL->form_class,
        'hidden_fields'   => array('new' => 'y'),
        'secure'          => TRUE,
        'onsubmit'        => "validate_form(); return false;"
    );

    $r = ee()->functions->form_declaration($form_details);

{{embed:_tips/form-attributes.md}}

### `form_backtrack([$offset = ''])`

| Parameter | Type      | Description                                                                                                                                    |
| --------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| \$offset  | `Integer` | How many pages you want to backtrack: `0` is the current page, `-1` would be the form page, and `-2` would be the page prior to the form page. |
| Returns   | `String`  | Previous URL                                                                                                                                   |

Returns a URL that allows us to return a user to a previously visited page after submitting a form. ExpressionEngine keeps track of the last five pages viewed by a visitor, and the page returned is determined by the value of offset.

    $data = array(
        'title'   => 'Information Accepted',
        'heading' => 'Thank you',
        'content' => 'Thank you for the locale information',
        'link'    => array(ee()->functions->form_backtrack('-2'), 'Return to entry')
    );

    ee()->output->show_message($data);

### `evaluate($str)`

| Parameter | Type     | Description               |
| --------- | -------- | ------------------------- |
| \$str     | `String` | String to evaluate as PHP |
| Returns   | `String` | Resulting value           |

Evaluates a string as PHP:

    $str = "echo 3*4;";

    ob_start();

    echo ee()->functions->evaluate($str);
    $value = ob_get_contents();

    ob_end_clean();

    // $value is now equal to 12, since that is what would be outputted by the PHP.

### `char_limiter($str[, $num = 500])`

| Parameter | Type       | Description            |
| --------- | ---------- | ---------------------- |
| \$str     | `String`   | String to limit        |
| \$num     | `Integer`  | Characters to limit to |
| Returns   | `String`   | Limited string         |

Returns section of a string limited to a certain amount of characters but rounds the string up to the nearest word.

### `word_limiter($str[, $num = 100])`

| Parameter | Type       | Description       |
| --------- | ---------- | ----------------- |
| \$str     | `String`   | String to limit   |
| \$num     | `Integer`  | Words to limit to |
| Returns   | `String`   | Limited string    |

Returns section of a string based on number of words.

### `fetch_email_template($name)`

| Parameter | Type     | Description                                    |
| --------- | -------- | ---------------------------------------------- |
| \$name    | `String` | Name of the email template                     |
| Returns   | `String` | Email template parsed with the user's language |

Returns the contents of the email template requested based on the language settings of the user.

### `language_pack_names($default)`

| Parameter | Type     | Description                                                      |
| --------- | -------- | ---------------------------------------------------------------- |
| \$default | `String` | Currently selected or default language                           |
| Returns   | `String` | Div tag with a select tag that contains the listing of languages |

Returns form select menu of available language packs

### `clear_caching($which[, $sub_dir = ''])`

| Parameter | Type     | Description                                                    |
| --------- | -------- | -------------------------------------------------------------- |
| \$which   | `String` | `'page'`, `'tag'`, `'db'`, `'sql'`, `'relationships'`, `'all'` |
| \$sub_dir | `String` | Define a specific folder or file in the cache directory        |
| Returns   | `Void`   |                                                                |

Clears one or all of the main cache folders

### `delete_directory($path[, $del_root = FALSE])`

| Parameter  | Type      | Description                                                                                              |
| ---------- | --------- | -------------------------------------------------------------------------------------------------------- |
| \$path     | `String`  | Absolute path of the directory you wish to empty; remember to use the path constants to make this easier |
| \$del_root | `Boolean` | Set to `TRUE` to delete the directory as well                                                            |
| Returns    | `Void`    |                                                                                                          |

Empties a directory of any files.

### `fetch_assigned_channels()`

| Parameter | Type    | Description                                  |
| --------- | ------- | -------------------------------------------- |
| Returns   | `Array` | Array of channels accessible by current user |

Returns array of channels accessible by current user.

### `fetch_action_id($class, $method)`

| Parameter | Type     | Description                              |
| --------- | -------- | ---------------------------------------- |
| \$class   | `String` | Class that contains the `$method`        |
| \$method  | `String` | Name of the method that has an action ID |
| Returns   | `String` | Valid action ID tag                      |

Returns a tag in the format `{AID:class:method}` for use in the frontend. (See also [EE->cp->fetch_action_id](development/legacy/libraries/cp.md)).

    $action_id = ee()->functions->fetch_action_id('Comment', 'insert_new_comment');

### `create_captcha($old_world = '')`

| Parameter  | Type     | Description                                 |
| ---------- | -------- | ------------------------------------------- |
| \$old_word | `String` | Can specify the word to appear as a captcha |
| Returns    | `String` | `<img>` tag                                 |

Using a random word chosen from the array stored in the `config/captcha.php` file, this function will create a captcha image and then store that word and the IP address of the current user in the database. You can then put the returned `<img>` tag in your form along with a text input field for the user submitted word. When the form is submitted you can check the submitted word against the database for the user's IP. If it matches, you continue processing the form data. If it does not, then the form should fail. This is used to prevent automated spamming tools from submitting spam.

### `sql_andor_string($str, $field[, $prefix = ''[, $null = FALSE]])`

| Parameter | Type      | Description                                                                                                      |
| --------- | --------- | ---------------------------------------------------------------------------------------------------------------- |
| \$str     | `String`  | Pipe delimited string from the tag parameter                                                                     |
| \$field   | `String`  | Name of the database field                                                                                       |
| \$prefix  | `String`  | Field prefix, used when working with multiple tables to define the table (e.g. `database_table_name.field_name`) |
| \$null    | `Boolean` | Allow for null values in the `$field`                                                                            |
| Returns   | `String`  | Partial query string containing some of the `WHERE` clause                                                       |

Certain tag parameters have the option to be in the form of `'value1|value2'` or `'not value1|value2'`, which allows the acceptance of multiple values. This function takes that parameter as `$str` and the `$field` to check, along with the (optional) `$prefix` of the table containing the field, and returns the query string required:

    $str  = 'channel|news|sports';
    $sql  = "SELECT * FROM exp_channels WHERE site_id = 1 ";
    $sql .= ee()->functions->sql_andor_string($str, 'channel_name');
    // $sql equals:
    // SELECT * FROM exp_channels WHERE site_id = 1
    // AND channel_name = 'channel' OR channel_name = 'news' OR channel_name = 'sports'

### `assign_variables([$str = ''[, $slash = '/']])`

| Parameter | Type     | Description                                                   |
| --------- | -------- | ------------------------------------------------------------- |
| \$str     | `String` | String to parse                                               |
| \$slash   | `String` | What kind of backslash is in the string (`/` or `&#47;`)      |
| Returns   | `Array`  | Associative array containing both `var_single` and `var_pair` |

This function extracts the variables contained within the current tag being parsed and assigns them to one of two arrays which are returned to you: `var_single` or `var_pair`.

### `fetch_date_variables($datestr)`

| Parameter | Type     | Description                                    |
| --------- | -------- | ---------------------------------------------- |
| \$datestr | `String` | The string to look for a single date format in |
| Returns   | `String` | Date format string                             |

Fetch the date format (e.g. `%Y %m %d`) from a date variable (e.g. `{date format="%Y %m %d"}`).

### `assign_parameters($str)`

| Parameter | Type     | Description                                                         |
| --------- | -------- | ------------------------------------------------------------------- |
| \$str     | `String` | String containing tag parameters directly from the `TMPL::$tagdata` |
| Returns   | `Array`  | Associative array containing the tag parameters                     |

Fetch parameters for tag

### `prep_conditionals($str, $vars[, $safety = 'n'[, $prefix = '']])`

| Parameter | Type     | Description                                                                                            |
| --------- | -------- | ------------------------------------------------------------------------------------------------------ |
| \$str     | `String` | Template `TMPL::$tagdata` to parse                                                                     |
| \$vars    | `Array`  | Associative array of conditionals to parse                                                             |
| \$safety  | `String` | Set to `'y'` to ensure that some safety checks are performed to make sure conditionals are well formed |
| \$prefix  | `String` | Used when your variables have a prefix, parses both prefixed and non-prefixed variables                |
| Returns   | `String` | `$str` with the conditionals from `$var` parsed                                                        |

Parses conditionals and preps conditional for evaluation
