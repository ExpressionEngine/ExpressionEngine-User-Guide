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

# General Style and Syntax

NOTE: **Note:** All PHP code submitted to ExpressionEngine repository needs to conform to [PSR-12 coding standards](https://expressionengine.com/blog/expressionengine-adopts-psr-12).

## File Format

Files should be saved with Unicode (UTF-8) encoding. The BOM should _not_ be used. Unlike UTF-16 and UTF-32, there's no byte order to indicate in a UTF-8 encoded file, and the BOM can have a negative side effect in PHP of sending output, preventing the application from being able to set its own headers. Unix line endings should be used (LF).

## PHP Closing Tag

The PHP closing tag on a PHP document `?>` is optional to the PHP parser. However, if used, any whitespace following the closing tag, whether introduced by the developer, user, or an FTP application, can cause unwanted output, PHP errors, or if the latter are suppressed, blank pages. For this reason, all PHP files should **OMIT** the closing PHP tag, and instead use a comment to mark the end of the file. This allows you to still identify a file as being complete and not truncated. For files that contain a single class the end comment is optional.

INCORRECT:

    <?php
        echo "Here's my code!";
    ?>

CORRECT:

    <?php
        echo "Here's my code!";

    // EOF

## Class and Method Naming

New classes and methods should conform to the PHP standard library api format, which also matches the PSR-1 code standard. You will see old v2.10 code not following the format below. "When in Rome" applies when editing old files.

Class names should always have their first letter uppercase, and the constructor method should use `__construct()`. Multiple words should be PascalCased, and not separated with an underscore.

INCORRECT:

    class superclass
    class Super_class

CORRECT:

    class SuperClass

Class methods should be camelCased, starting with a lowercased letter, and named to clearly indicate their function, preferably including a verb. Try to avoid overly long and verbose names, these may indicate that the method has too much responsibility and should be split up.

Example of an improper and proper constructor method:

INCORRECT:

    class SuperClass {
        function SuperClass()      // does not use __construct()
        {
        }
    }

CORRECT:

    class SuperClass {
        function __construct()
        {
        }
    }

Examples of improper and proper method naming:

INCORRECT:

    function fileproperties()       // not descriptive, not camelCase
    function file_properties()      // not descriptive and not camelCase
    function get_file_properties()  // Better!  But still not camelCase
    function getTheFilePropertiesFromTheFile()  // wordy

CORRECT:

    function getFileProperties()  // descriptive, camelCase

## Namespaces and File Names

Filenames should match the name of the class, including case. When using namespaces the entire path and namespace should match the class naming conventions.:

    class Member                 // Member.php
    class Addon\Commerce\Gateway // Addon/Commerce/PaymentGateway.php

When using namespaces, the namespace declaration should be the first line in the code, before any comments. The namespace declaration and the import declarations should be separated by a blank line:

    <?php

    namespace MyAddon\Addon;

    use Vendor\ClassName;
    use Member\PrivateMessages;

    /**
     * Comment describing the class
     */
    class Awesome {

## Variable Names

The guidelines for variable naming is very similar to that used for class methods. Namely, variables should contain only lowercase letters, use underscore separators, and be reasonably named to indicate their purpose and contents. Very short, non-word variables should only be used as iterators in `for()` loops.

INCORRECT:

    $j = 'foo';       // single letter variables should only be used in for() loops
    $Str              // contains uppercase letters
    $bufferedText     // uses CamelCasing, and could be shortened without losing semantic meaning
    $groupid          // multiple words, needs underscore separator
    $name_of_last_city_used // too long

CORRECT:

    for ($j = 0; $j < 10; $j++)

    $str
    $buffer
    $group_id
    $last_city

## Commenting

In general, code should be commented prolifically. It not only helps describe the flow and intent of the code for less experienced programmers, but can prove invaluable when returning to your own code months down the line. There is not a required format for comments, but the following are recommended.

[DocBlock](https://docs.phpdoc.org/guide/guides/docblocks.html) style comments preceding class and method declarations so they can be picked up by IDEs:

    /**
    * Super Class
    *
    * @package Package Name
    * @subpackage  Subpackage
    * @category    Category
    * @author  Author Name
    * @link    https://example.com
    */
    class Super_class {

        /**
        * Encodes string for use in XML
        *
        * @param   string
        * @return  string
        */
        function xml_encode($str)

Use single line comments within code, leaving a blank line between large comment blocks and code:

    // break up the string by newlines
    $parts = explode("\n", $str);

    // A longer comment that needs to give greater detail on what is
    // occurring and why can use multiple single-line comments.  Try to
    // keep the width reasonable, around 70 characters is the easiest to
    // read.  Don't hesitate to link to permanent external resources
    // that may provide greater detail:
    //
    // https://example.com/information_about_something/in_particular/
    $parts = $this->foo($parts);

## Constants

Constants follow the same guidelines as do variables, except constants should always be fully uppercase. _Always use ExpressionEngine constants when appropriate, i.e. \`\`LD\`\`, \`\`RD\`\`, \`\`PATH_CACHE\`\`, etc._

INCORRECT:

    myConstant  // missing underscore separator and not fully uppercase
    N           // no single-letter constants
    S_C_VER     // not descriptive
    $str = str_replace('{foo}', 'bar', $str);   // should use LD and RD constants

CORRECT:

    MY_CONSTANT
    NEWLINE
    SUPER_CLASS_VERSION
    $str = str_replace(LD.'foo'.RD, 'bar', $str);

## TRUE, FALSE, and NULL

`TRUE`, `FALSE`, and `NULL` keywords should always be lowecase.

INCORRECT:

    if ($foo == true) $bar = false;
    function foo($bar = null)

CORRECT:

    if ($foo == TRUE) $bar = FALSE;
    function foo($bar = NULL)

## Logical Operators

Use of `||` is discouraged as its clarity on some output devices is low (looking like the number 11 for instance). `&&` is preferred over `AND` but either are acceptable, and a space should always precede and follow `!`.

INCORRECT:

    if ($foo || $bar)
    if ($foo AND $bar)  // okay but not recommended for common syntax highlighting applications
    if (!$foo)
    if (! is_array($foo))

CORRECT:

    if ($foo OR $bar)
    if ($foo && $bar) // recommended
    if ( ! $foo)
    if ( ! is_array($foo))

## Comparing Return Values and Typecasting

Some PHP functions return `FALSE` on failure, but may also have a valid return value of `""` or `0`, which would evaluate to `FALSE` in loose comparisons. Be explicit by comparing the variable type when using these return values in conditionals to ensure the return value is indeed what you expect, and not a value that has an equivalent loose-type evaluation.

Use the same stringency in returning and checking your own variables. Use `===` and `!==` as necessary.

INCORRECT:

    // If 'foo' is at the beginning of the string, strpos will return a 0,
    // resulting in this conditional evaluating as TRUE
    if (strpos($str, 'foo') == FALSE)

CORRECT:

    if (strpos($str, 'foo') === FALSE)

INCORRECT:

    function build_string($str = "")
    {
        if ($str == "")     // uh-oh!  What if FALSE or the integer 0 is passed as an argument?
        {
        }
    }

CORRECT:

    function build_string($str = "")
    {
        if ($str === "")
        {
        }
    }

See also information regarding [typecasting](https://us3.php.net/manual/en/language.types.type-juggling.php#language.types.typecasting), which can be quite useful. Typecasting has a slightly different effect which may be desirable. When casting a variable as a string, for instance, `NULL` and boolean `FALSE` variables become empty strings, 0 (and other numbers) become strings of digits, and boolean `TRUE` becomes `"1"`:

    $str = (string) $str; // cast $str as a string

NOTE: **Note:** When choosing return values for your own methods, prefer `NULL` over `FALSE` to indicate that a value does not exist. `FALSE` is a valid boolean value, whereas `NULL` has no value.

## Comparing Version Numbers

When comparing version numbers, whether it be for comparing MySQL versions for compatibility with a particular feature, or for comparing the installed version of a module with the current version, these comparisons should not be made with loose typing, or even assuming that the version number will be entirely numeric. Use `version_compare()` instead.

INCORRECT:

    if ($current < '2.3.1')

CORRECT:

    if (version_compare($current, '2.3.1', '<'))

One of the big advantages here is that this PHP function accounts for many standard version numbering schemes, including alpha and beta suffixes.

## Setting Strings from Method Calls

Sometimes it is desirable when setting a string from a method call to initialize with an empty string if the method returns `FALSE`. For speed and code legibility, instead of a ternary operator or conditional, simply cast the return value as a string.

INCORRECT:

    $foo = ($this->input->post('foo')) ? $this->input->post('foo') : '';

    $bar = $this->some_method();
    if ($bar === FALSE)
    {
        $bar = '';
    }

CORRECT:

    $foo = (string) $this->input->post('foo');

    $bar = (string) $this->some_method();

## Debugging Code

No debugging code can be left in place for submitted add-ons unless it is commented out, i.e. no `var_dump()`, `print_r()`, `die()`, and `exit()` calls that were used while creating the add-on, unless they are commented out.

    // print_r($foo);

## Whitespace in Files

No whitespace can precede the opening PHP tag. ExpressionEngine output is buffered, so whitespace in your files can cause output to begin before ExpressionEngine outputs its content, leading to errors and an inability for ExpressionEngine to send proper headers.

When aligning multiple lines (e.g. in an associative array), use spaces instead of tabs. This is helpful when displaying the code on the web, in a GitHub commit for instance.

## Compatibility

Unless specifically mentioned in your add-on's documentation, all code must be compatible with PHP version 7.2.5+. Additionally, do not use PHP functions that require non-default libraries to be installed unless your code contains an alternative method when the function is not available, or you explicitly document that your add-on requires said PHP libraries.

## Use of ee()-&gt;session-&gt;cache

`ee()->session->cache` is an array provided for you to use for "flash" content, i.e. values that you would like to persist during a page load, helping you eliminate redundant queries and PHP processing. To avoid conflicts with other first and third-party use of this array, always access it as a multi-dimensional array, using your class name as the primary array name, and your variables within. Naming conventions should follow that of other variables: lowercase letters, underscores for separators between words, and meaningful names.

INCORRECT:

    ee()->session->cache['admins']
    ee()->session->cache['Super_class']['admins']

CORRECT:

    ee()->session->cache['super_class']['admins']

Here is an example of how one might utilize the `$EE->session->cache` array. This way, no matter how many times this method is called on a given page load (for instance, a tag being used twice on a template, or within a tag that might loop, such as a plugin within the Channel entries tag), the query and loading of the array occurs only once:

    if ( ! isset(ee()->session->cache['super_class']['admins']))
    {
        $query = ee()->db->query("SELECT member_id FROM exp_super_class_admins");

        if ($query->num_rows()() > 0)
        {
            foreach($query->result_array() as $row)
            {
                ee()->session->cache['super_class']['admins'][] = $row['member_id'];
            }
        }
    }  // set a local variable from the cached

You can see an example of real-world usage of `$EE->session->cache` in the Channel module's `fetch_custom_channel_fields()` and `next_prev_entry()` methods, and the IP to Nation module's `get_country()` method.

## Class and File Names using Common Words

When your class or filename is a common word, or might quite likely be identically named in another PHP script, provide a unique prefix to help prevent collision. Always realize that your end users may be running other add-ons or third party PHP scripts. Choose a prefix that is unique to your identity as a developer or company.

NOTE: **Note:** This does not apply to namespaced classes.

INCORRECT:

    class Email
    pi.email.php
    class Xml
    ext.xml.php
    clasimport_request_variables()_request_variables()rt
    mod.import.php

CORRECT:

    class Pre_email
    pi.pre_email.php
    class Pre_xml
    ext.pre_xml.php
    class Pre_import
    mod.pre_import.php

## Database Table Names

Any tables that your add-on might use must use the `exp_` prefix, followed by a prefix uniquely identifying you as the developer or company, and then a short descriptive table name. You do not need to be concerned about the database prefix being used on the user's installation, as ExpressionEngine's database class will automatically convert `exp_` to what is actually being used.

INCORRECT:

    email_addresses     // missing both prefixe
    pre_email_addresses // missing exp_ prefix
    exp_email_addresses // missing unique prefix

CORRECT:

    exp_pre_email_addresses

NOTE: **Note:** Be mindful that MySQL has a limit of 64 characters for table names. This should not be an issue as table names that would exceed this would likely have unreasonable names. For instance, the following table name exceeds this limitation by one character. Silly, no:

exp_pre_email_addresses_of_registered_users_in_seattle_washington

## One Class per File

Use separate files for each class. This makes it much easier to find classes.

## Whitespace

Use tabs for whitespace in your code, not spaces. This may seem like a small thing, but using tabs instead of whitespace allows the developer looking at your code to have indentation at levels that they prefer and customize in whatever application they use.

## Line Breaks

Files must be saved with Unix line breaks. This is more of an issue for developers who work in Windows, but in any case ensure that your text editor is setup to save files with Unix line breaks.

## Code Indenting

Use Allman style indenting. With the exception of Class declarations, braces are always placed on a line by themselves, and indented at the same level as the control statement that "owns" them.

INCORRECT:

    function foo($bar) {
        // ...
    }

    foreach ($arr as $key => $val) {
        // ...
    }

    if ($foo == $bar) {
        // ...
    } else {
        // ...
    }

    for ($i = 0; $i < 10; $i++)
        {
        for ($j = 0; $j < 10; $j++)
            {
                // ...
            }
        }

CORRECT:

    function foo($bar)
    {
        // ...
    }

    foreach ($arr as $key => $val)
    {
        // ...
    }

    if ($foo == $bar)
    {
        // ...
    }
    else
    {
        // ...
    }

    for ($i = 0; $i < 10; $i++)
    {
        for ($j = 0; $j < 10; $j++)
        {
            // ...
        }
    }

## Bracket and Parenthetic Spacing

In general, parenthesis and brackets should not use any additional spaces. The exception is that a space should always follow PHP control structures that accept arguments with parenthesis (`declare`, `do- while`, `elseif`, `for`, `foreach`, `if`, `switch`, `while`), to help distinguish them from functions and increase readability:

    INCORRECT: $arr[ $foo ] = 'foo';
    CORRECT: $arr[$foo] = 'foo';     // no spaces around array keys

    INCORRECT: function foo ( $bar )
    CORRECT: function foo($bar)      // no spaces around parenthesis in function declarations

    INCORRECT: foreach( $query->result_array() as $row )
    CORRECT: foreach ($query->result_array() as $row)    // single space following PHP control structures, but not in interior parenthesis

## Long Lines and Indentation

In cases where the line length is longer than 80 characters and the line includes method calls with multiple parameters, put individual parameters (including additional method calls) on separate lines:

    return str_replace(
      $match[1],
      preg_replace(
        "#href=.*?(alert\(|alert&\#40;|javascript\:|livescript\:|mocha\:|charset\=|window\.|document\.|\.cookie|<script|<xss|base64\s*,)#si",
        "",
        $attributes
      ),
      $match[0]
    );

Also note that long strings don't need to be broken up and closing parenthesis always appear at the same indentation level as the opening parenthesis.

## Localized Text in Control Panel

Any text that is output in the control panel should use language variables in your module's lang file to allow localization:

    INCORRECT: return "Invalid Selection";
    CORRECT: return lang('invalid_selection');

## Private Methods and Variables

Methods and variables that are only accessed internally by your class should be declared as private or protected. If the methods are internal to the current package or namespace, it may be acceptable to follow the convention of marking the method or property with an underscore:

    public function convert_text()     // public method
    private function convert_text()    // private method

    public function _convert_text()    // internal method (not recommended)

## PHP Errors

Code must run error free and not rely on warnings and notices to be hidden to meet this requirement. For instance, never access a variable that you did not set yourself (such as `$_POST` array keys) without first checking to see that it `isset()`.

Make sure that while developing your add-on, error reporting is enabled for ALL users, and that display_errors is enabled in the PHP environment. You can check this setting with:

    if (ini_get('display_errors') == 1)
    {
      exit "Enabled";
    }

On some servers where display_errors is disabled, and you do not have the ability to change this in the `php.ini`, you can often enable it with:

    ini_set('display_errors', 1);

NOTE: **Note:** Setting the [display_errors](https://us.php.net/manual/en/ref.errorfunc.php#ini.display-errors) setting with `ini_set()` at runtime is not identical to having it enabled in the PHP environment. Namely, it will not have any effect if the script has fatal errors

## Short Open Tags

Always use full PHP opening tags, in case a server does not have `short_open_tag` enabled.

INCORRECT:

    <? echo $foo; ?>
    <?=$foo?>

CORRECT:

    <?php echo $foo; ?>

## One Statement Per Line

Never combine statements on one line.

INCORRECT:

    $foo = 'this'; $bar = 'that'; $bat = str_replace($foo, $bar, $bag);

CORRECT:

    $foo = 'this';
    $bar = 'that';
    $bat = str_replace($foo, $bar, $bag);

## Strings

Always use single quoted strings unless you need variables parsed, and in cases where you do need variables parsed, use braces to prevent greedy token parsing. You may also use double-quoted strings if the string contains single quotes, so you do not have to use escape characters.

INCORRECT:

    "My String"                 // no variable parsing, so no use for double quotes
    "My string $foo"            // needs braces
    'SELECT foo FROM bar WHERE baz = \'bag\''   // ugly

CORRECT:

    'My String'
    "My string {$foo}"
    "SELECT foo FROM bar WHERE baz = 'bag'"

## SQL Queries

MySQL keywords are always capitalized: `SELECT`, `INSERT`, `UPDATE`, `WHERE`, `AS`, `JOIN`, `ON`, `IN`, etc.

Break up long queries into multiple lines for legibility, preferably breaking for each clause:

INCORRECT:

    // keywords are lowercase and query is too long for
    // a single line (... indicates continuation of line)
    $query = ee()->db->query("select foo, bar, baz, foofoo, foobar as raboof, foobaz from exp_pre_email_addresses where foo != 'oof' and baz != 'zab' order by foobaz limit 5, 100");

CORRECT:

    $query = ee()->db->query("SELECT foo, bar, baz, foofoo, foobar AS raboof, foobaz
        FROM exp_pre_email_addresses
        WHERE foo != 'oof'
        AND baz != 'zab'
        ORDER BY foobaz
        LIMIT 5, 100");

## MySQL Table Key Naming

Table key definitions must be explicitly named, to avoid accidental duplicate keys or inadvertent operations on the wrong index. Multiple column keys should be named distinctly, and preferably use all column names, separated with an underscore. ([Additional info](https://www.percona.com/blog/2008/05/28/should-you-name-indexes-while-doing-alter-table/))

INCORRECT:

    PRIMARY KEY (`field_name`)
    PRIMARY KEY (`field_one`, `field_two`)

CORRECT:

    PRIMARY KEY `field_name` (`field_name`)
    PRIMARY KEY `field_one_field_two` (`field_one`, `field_two`)

## Default Function Arguments

Whenever appropriate, provide function argument defaults, which helps prevent PHP errors with mistaken calls and provides common fallback values which can save a few lines of code. Example:

    function foo($bar = '', $baz = FALSE)

## Overlapping Tag Parameters

Avoid multiple tag parameters that have effect on the same thing. For instance, instead of `include=` and `exclude=`, perhaps allow `include=` to handle the parameter alone, with the addition of "not", e.g. `include="not bar"`. This will prevent problems of parameters overlapping or having to worry about which parameter has priority over another.
