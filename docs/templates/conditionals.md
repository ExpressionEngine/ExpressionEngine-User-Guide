<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Conditional Tags

[TOC]

Conditional Tags are pair tags, which allow you to conditionally show or hide information on your pages based on criteria being met. They take on this general form:

    {if condition} data to show if condition is met {/if}

The syntax available for the condition is comparable to most programming languages. Some examples:

    {!-- Basic truth tests --}
    {if logged_in}Welcome back.{/if}

    {!-- Comparisons --}
    {if username == 'Bob'}Welcome back, Bob!{/if}

    {!-- Math --}
    {if (age + 5) == 100}Five years to go!{/if}

    {!-- Logical operators --}
    {if age == 30 AND username == 'Bob'}Welcome back, Bob. 30 is the new 20.{/if}

    {!-- Branching --}
    {if age == 30}
      You are 30!
    {if:elseif username == 'Bob'}
      You are Bob!
    {if:else}
      You're not 30 or Bob. That's all we know.
    {/if}

## Protected Characters

Certain characters must be protected in conditionals to prevent them from being mistaken for regular ExpressionEngine tags:

| To evaluate          | Use instead |
| -------------------- | ----------- |
| {                    | `&#123;`    |
| }                    | `&#125;`    |
| \n (linebreaks)      | space       |
| \r (carriage return) | space       |
| \t (tab)             | space       |

If you are comparing a variable against a value that might include curly braces, then you should use the HTML entities listed in the table above instead. For example, if you want the conditional to evaluate whether the title is _Curly and the Braces: {}_, you would write the conditional like so:

    {if title == 'Curly and the Braces: &#123;&#125;'}

## Boolean Values (True and False)

When determining Boolean values the following are considered **FALSE**:

- the keyword `FALSE`
- the integer `0`
- the floating point number `0.0`
- an empty string `""` or `''`

Everything else is considered **TRUE**.

**Note:** The string `"0"` is considered **TRUE** since it is a non-empty string.

## Operators

The following operators are allowed within conditionals:

### Comparison Operators

You can use any of the following operators to compare a variable to a value:

| Operator | Name                               |
| -------- | ---------------------------------- |
| ==       | Equal                              |
| !=       | Not Equal                          |
| <>       | Not equal                          |
| <        | Less than                          |
| <=       | Less than or equal to              |
| >        | Greater than                       |
| >=       | Greater than or equal to           |
| ^=       | Begins with <begins_with_operator> |
| \*=      | Contains <contains_operator>       |
| \$=      | Ends with <ends_with_operator>     |
| ~        | Matches <matches_operator>         |

NOTE: **Note:** When comparing equality make sure to use **two** equal signs rather than one (e.g. **==**).

#### Begins With Operator

The begins with operator checks if a string begins with another string:

    {if "ExpressionEngine" ^= "Express"}Yes it does{/if}

#### Ends With Operator

The ends with operator checks if a string ends with another string:

    {if url $= ".fr"}Your website is from France.{/if}

#### Contains Operator

The contains operator checks if a string contains another string:

    {if body *= excerpt}Noone expected that.{/if}

#### Matches Operator

The matches operator checks if a string matches a regular expression:

    {if segment_3 ~ "/^P\d+/"}paginated{/if}

NOTE: **Note:** The second value must be a valid regular expression. All [PHP PCRE pattern modifiers](http://us1.php.net/manual/en/reference.pcre.pattern.modifiers.php) are allowed.

##### Using Comparison Operators with Numbers

These operators will work with both numbers and strings, but with numbers it's important to remember that they will be turned into an unambiguous representation. This means that redundant leading and trailing zeros are removed. Floating point numbers &lt; 1 will have a leading zero added if it is not present:

    .7 becomes 0.7
    1. becomes 7
    .20 becomes 0.2
    0002 becomes 2
    002.5000 becomes 2.5

This can be avoided by quoting your numbers:

    {if 42.7 $= .7} - false, 42.7 does not end with 0.7
    {if 42.7 $= '.7'} - true
    {if '42.7' $= '.7'} - true

    {if 42.70 $= 70} - false, 42.7 does not end in 70
    {if '42.70' $= 70} - true
    {if '42.70' $= '70'} - true

### Logical Operators

You can use the following operators to compare true / false (boolean) values. In this context strings that are not empty, numbers that are not 0, and the TRUE keyword are all true. Everything else is false.

| Operator | Name | Result                                      |
| -------- | ---- | ------------------------------------------- |
| !        | Not  | TRUE if the following value is FALSE.       |
| &&       | And  | TRUE if both values are TRUE.               |
|          |      |                                             | Or | TRUE if either value is TRUE. |
| AND      | And  | TRUE if both values are TRUE.               |
| XOR      | Xor  | TRUE if either value is TRUE, but not both. |
| OR       | Or   | TRUE if either value is TRUE.               |

These operators let you create complex rules for your templates:

    {if member_id != '1' && member_group != "5" OR username == "Billy"} Hi! {/if}

### Mathematic Operators

You can use the following mathematical operators to compute values:

| Operator   | Name                                       |
| ---------- | ------------------------------------------ |
| +          | Addition                                   |
| -          | Subtraction / Negation                     |
| \*         | Multiplication                             |
| \*\* and ^ | Exponentiation                             |
| /          | Division                                   |
| %          | Remainder of one number divided by another |

NOTE: **Note:** When using these mathematical operators be sure to surround them with whitespace. Consider that `foo-bar` is a valid variable while `foo - bar` indicates subtraction.

#### Modulus Operator

A modulus operator finds the remainder of division of one number by another. This can be handy when you want to do something every nth iteration of a loop. For example, if we want to display a horizontal rule for every 5th entry in a [Channel Entries](channels/entries.md) loop, we would write this conditional:

    {if count % 5 == 0}
      <hr>
    {/if}

This works because the remainder of 5 divided by 5 is 0.

#### Exponent Operators

There are two exponent operators: `**` and `^`. They are treated the same, so use whichever you prefer:

    {if count ** 2 == 25}What a strange way ...{/if}
    {if count ^ 2 == 25}... to check if count is 5{/if}

### Exponentiation of Negatives

Negation happens _after_ exponentiation. The following are true:

    -5 ** 2 == -25
    (-5) ** 2 == 25

This is easy to remember, by keeping in mind that subtraction always happens after exponentiation. Of course, if the minus is itself in the exponent, then it is applied first:

    5 ** -2 == 0.04

### Multiple Exponentiation

Exponents are processed from right to left. This means that `2 ^ 3 ^ 2` is treated as `2 ^ 9`, not as `8 ^ 2`:

    {if 2 ^ 3 ^ 2 == 512}this{/if}
    {if 2 ^ 3 ^ 2 == 64}not this{/if}

### String Concatenation Operator

You can use the string concatenation operator (`.`) to concatenate values:

    {if segment_1 . '/' . segment_2 == 'site/index'}

### Parentheses in Conditionals

You can use parentheses to group parts of a conditional together to have the part of the conditional between the parentheses evaluate before being compared to the part of the conditional outside the parentheses. For example, in the code below, the two member group parts are evaluated _first_ before their result is compared to the channel_id part of the conditional:

    {if (member_id == '1' OR member_id == '2') && channel_id == '5'}

So, if the member id of the visitor is either 1 or 2, and they are viewing the channel with id of 5, then they can see the contents of that conditional.

## Else and Elseif

You can use two additional control structures to help tailor your results:

    {if:elseif}

And:

    {if:else}

These work similar to standard PHP else and elseif constructs. Here is an example:

    {if username == "Joe"}
      <h1>Hey, Joe! Where were you Tuesday?</h1>
    {if:elseif username == "Bob"}
      <h1>Hey, Bob! Thanks for the tickets!</h1>
    {if:else}
      <h1>Welcome to our site.</h1>
    {/if}

In the above example, if the currently logged in user has the username of "joe" he receives the first message. If not, ExpressionEngine evaluates the second conditional for the username of "bob". If the username is neither joe nor bob a default message is shown.

NOTE: **Note:** Don't be confused by the _{if:_ prefix. This simply helps the parsing engine identify each control structure. The information to the _right_ of the prefix is what determines which conditional you are using.

## Embedding Tags

We recommend not wrapping variables in braces (`{}`) for example, do this:

    {if my_snippet == "hello world"}

instead of these:

    {if {my_snippet} == "hello world"}
    {if "{my_snippet}" == "hello world"}

TIP: **Tip:** As a general rule, you should never brace your conditional variables, which allows ExpressionEngine to optimize for the best performance and security.

☣ **Technical content ahead:** Braced variables in a conditional are literally output to the template like they are anywhere else before evaluating. So rather than being able to use a lightweight internal PHP variable, ExpressionEngine has to compare string literals. If a lot of text-based content is involved, then you could be creating strain on the application due to internal constraints of PHP and the server's regular expression libraries.

There are a few exceptions to this where bracing is required or even recommended. This is the case for certain types of metadata, where the type, length, and nature of the content is known. In other words, variables that belong to the system, and whose contents are not influenced or created by a content author. For example, comparing formatted dates:

    {if "{entry_date format='%Y'}" == "{current_time format='%'}"}

When using tags pay special attention to your quote marks. If you need more than one level of quotation you will need to either alternate between single and double quote marks, or escape your quotes. For example, instead of this (the problem should be apparent by the syntax highlighting):

    {if "{current_time format="%F"}" == "May"}

do this:

    {if "{current_time format='%F'}" == "May"}

or this:

    {if "{current_time format=\"%F\"}" == "May"}

Tags that output numeric content will work fine with quotes, but also do not need them, e.g. [Fluid field count variables](fieldtypes/fluid.md):

    {if {fluid_content:count type="long_form_text"} == 3}

## Short Conditionals

Certain conditionals exist in a shortened form in order to improve template readability. These conditionals are usually checking to see if a certain thing is true or exists:

### Examples

#### `if logged_in`

    {if logged_in}  Welcome back to the site!<br /> <a href="{path='LOGOUT'}">Logout</a>  {/if}

This tag pair will display content within the pair if the person viewing the page is currently a logged in member.

NOTE: **Note:** This only tests whether or not someone is logged in. If you want to restrict a particular page based on the member group assignment you'll do that in your Template preferences in the Control Panel.

#### `if logged_out`

    {if logged_out}
        You aren't a member or aren't logged in.<br />
        <a href="{path='member/login'}">Login</a>  | <a href="{path='member/register'}">Register</a>
    {/if}

This tag pair will display content within the pair if the person viewing the page is **not** currently a logged in member.

You'll notice in the "logout" link above that a special path is used: {path='LOGOUT'}. This is a special-case path value that will automatically render the correct path for someone to log out.

## Global Conditional Variables

There are a handful of variables that are always available to conditionals.

### `logged_in_email`

    {if logged_in_email $= 'example.com'}  One of us! One of us!  {/if}

You can test against the email address of the currently logged in user.

### `logged_in_group_description`

    {if logged_in_group_description *= 'games'}  Shall we play a game?  {/if}

You can test against the group description of the currently logged in user.

### `logged_in_group_id`

    {if logged_in_group_id == '7'}  You're an "Editor"!  {/if}

You can test against the Member Group of the currently logged in user.

### `logged_in_ip_address`

    {if logged_in_ip_address == '127.0.0.1'}  There's no place like home.  {/if}

You can test against the IP address of the currently logged in user.

### `logged_in_location`

    {if logged_in_location *= 'Vulcan'}  Live long and prosper.  {/if}

You can test against the location of the currently logged in user.

### `logged_in_member_id`

    {if logged_in_member_id == '147'}  Ooh, you're really special, Frank!!  {/if}

Test for the member ID of the currently logged in user.

### `logged_in_private_messages`

    {if logged_in_private_messages > 0}  You have unread private messages.  {/if}

Test against the number of unread private messages.

### `logged_in_screen_name`

    {if logged_in_screen_name == "Mr. Ed"}  Thanks for all your hard work on the site, Ed!  {/if}

You can test against the screen name of the currently logged in user.

### `logged_in_total_comments`

    {if logged_in_total_comments < 1}  Care to comment?  {/if}

Test against the total number of comments submitted by the currently logged in user.

### `logged_in_total_entries`

    {if logged_in_total_entries > 1000}  Gold star contributor!  {/if}

Test against the total number of entries submitted by the currently logged in user.

### `logged_in_total_forum_posts`

    {if logged_in_total_forum_posts > 1000}  Loquacious aren't we?  {/if}

Test against the total number of forum posts by the currently logged in user.

### `logged_in_total_forum_topics`

    {if logged_in_total_forum_topics < 1}  Care to start something?  {/if}

Test against the total number of forum topics by the currently logged in user.

### `logged_in_username`

    {if username != "HAL9000"}  I'm sorry Dave, I'm afraid I can't do that.  {/if}

You can test against the username of the currently logged in user.

### `segment_*X*`

    {if segment_3 == "private"}  You're seeing something private!  {/if}

You can test against one of the [URL Segments](templates/globals/url-segments.md) that are available. The conditional should be replaced with the correct segment name. e.g. if you're interested in URL Segment 3, then use `{if segment_3}`.

### `total_comments`

    {if total_comments < 1}  What??  No one has commented on my site at all?!?!  {/if}

Test against the total number of comments submitted for the entire site.

### `total_entries`

    {if total_entries > 1000}  Yowza!  This is one hot site!  {/if}

Test against the total number of entries submitted for the entire site.

## Errors

In the event that there is a problem parsing or evaluating a conditional an error will be displayed based on your [debug preferences](control-panel/settings/debug-output.md#enable-error-reporting). Errors are triggered in the following scenarios:

- `{if:` is encountered in the template without it being either `if:else` or `if:elseif`. For example:

<!-- -->

    {if:foo}

- `{/if}` cannot be found. All `{/if}` inside a string (single or double-quoted) are ignored. For example:

      {if segment_1 == 'site'}HELLO WORLD

- There is an unclosed single or double-quoted string. For example:

<!-- -->

    {if segment_1 == "site}HELLO WORLD{/if}

- A closing `}` is not found. For example:

<!-- -->

    {if segment_1 == "site" HELLO WORLD{/if}

- A valid operator is not found. For example:

      {if segment_1 "site"}HELLO WORLD{/if}

  or:

      {if segment_1 ==== "site"}HELLO WORLD{/if}

- A number followed by a colon (`:`) was found. For example:

<!-- -->

    {if 5:2}

- A number has too many periods (`.`). For example:

      {if 1.2.3}
