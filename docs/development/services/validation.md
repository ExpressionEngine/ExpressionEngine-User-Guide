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

# Validation Service

[TOC]

## Simple Example

Data validation is essential in all programming to ensure safety and correctness of all programs. The Validation service simplifies this task with a concise and extensible API.

    $rules = array(
      'username' => 'required|minLength[5]',
      'password' => 'required|minLength[5]'
    );

    $result = ee('Validation')->make($rules)->validate($_POST);

    if ($result->isValid())
    {
      // yay
    }

    // no :(

## Defining Rules

Which rules to apply is defined in a string of pipe delimited rule names. The rules are processed from left to right:

    "required|alphaNumeric"

Some rules may also take parameters. These are added in braces after the rule name:

    "required|enum[blue,red,yellow]" // only allow these three color names

## Required Fields

The _required_ rule is used to ensure that fields are set and not blank. A field is considered blank if it only contains whitespace.

If no required rule is encountered then a blank field is considered valid regardless of the other rules:

    "numeric|alpha" // despite conflicting rules, a blank field will pass

This means that you will usually want to use _required_ at the beginning of the rule string. The exception being conditional rules, which are covered later.

## Conditional Rules

There are times where you only want to apply validation if a certain value has been set. The `whenPresent` rule allows you to do this:

    $rules = array(
      'name' => 'whenPresent|minLength[45]'
    );

A more complex case of this is when certain fields rely on the presence of other fields. A common case for this are checkboxes that enable a functionality. For example, a checkbox to subscribe to an email newsletter may require an email address field that is otherwise optional. The `whenPresent` rule accepts a list of fields that must all be present for the rules to be applied:

    $rules = array(
      'email' => 'whenPresent[newsletter]|required|email'
    );

## Custom Rules

ExpressionEngine allows you to create one-off validation rules on any validator object. This is done by calling the `defineRule` method.

The validation rule may return boolean values of `true` (passed), `false` (failed) or string with error message (or corresponding language key). If the rule is associated with a field and you are using [Shared Form View](development/shared-form-view.md) the error message will be added to the field that failed validation.

    $validator = ee('Validation')->make();

    $validator->defineRule('impossible', function($key, $value, $parameters)
    {
      if ($value == 5 && $value == 6) {
        return true;
      }

      return 'this_is_impossible';
    });

    $validator->setRules(array(
      'age' => 'required|impossible'
    ));

    $result = $validator->validate($data);

## Custom Conditional Rules

Custom conditional rules can be created by calling `skip()` on the `ValidationRule` object. This can be useful, for example, if you need to conditionally validate a field based on the value of another field:

    use ExpressionEngine\Service\Validation\Validator;

    $data = $_POST;

    $validator->defineRule('whenNotifyTypeIs', function($key, $value, $parameters, $rule) use ($data)
    {
      return ($data['notify-type'] == $parameters[0]) ? TRUE : $rule->skip();
    });

    $validator->setRules(array(
      'notify-type' => 'required|enum[email,sms]',
      'email' => 'whenNotifyTypeIs[email]|required|email',
      'sms' => 'whenNotifyTypeIs[sms]|required|regex[/^\d{3}-\d{3}-\d{4}$/]',
    ));

## Checking a Single Rule

### `check($rule, $value)`

Occasionally, you might need to check whether a value passes a validation rule, you can do that using the `check()` method.

| Parameter | Type      | Description                                              |
| --------- | --------- | -------------------------------------------------------- |
| \$rule    | `String`  | The rule to check, see [Built-in Rules](#built-in-rules) |
| \$value   | `String`  | The value to check                                       |
| Returns   | `Boolean` | TRUE if the `$value` is valid                            |

    $valid = ee('Validation')->check('uniqueEmail', 'email@example.com');

## Built-in Rules

| Rule name       | Description                                                                    | Example               |
| --------------- | ------------------------------------------------------------------------------ | --------------------- |
| alpha           | Any alphabetical character                                                     | alpha                 |
| alphaDash       | Alpha plus dashes and underscores                                              | alphaDash             |
| alphaDashPeriodEmoji       | Alpha, dashes, underscores, periods and emoji                       | alphaDashPeriodEmoji  |
| alphaNumeric    | Alpha plus numbers                                                             | alphaNumeric          |
| authenticated   | Chech that member is authenticated                                             | authenticated         |
| boolean         | Must be of boolean type                                                        | boolean               |
| email           | Email addresses                                                                | email                 |
| enum            | Any in a given list                                                            | enum[blue, red, pink] |
| exactLength     | Input must have exactly n characters                                           | exactLength[4]        |
| fileExists      | File or path must exist                                                        | fileExists            |
| greaterOrEqualThan     | Value greater than x, or equal to x                                     | greaterOrEqualThan[5] |
| greaterThan     | Value greater than x                                                           | greaterThan[5]        |
| hexColor        | A three or six-character hex code without a pound sign                         | hexColor              |
| integer         | Must be an integer                                                             | integer               |
| ipAddress       | Ip address. Optional parameters: ipv4, ipv6, public                            | ipAddress             |
| isNatural       | Natural number                                                                 | isNatural             |
| isNaturalNoZero | Natural number except zeros                                                    | isNaturalNoZero       |
| lessOrEqualThan | Value less than x, or equal to x                                               | lessOrEqualThan[5]    |
| lessThan        | Value less than x                                                              | lessThan[5]           |
| limitHtml       | Limits the kind of HTML tags that can be present in a string                   | limitHtml[a,b,i,span] |
| maxLength       | No more than n characters                                                      | maxLength[5]          |
| minLength       | No fewer than n characters                                                     | minLength[8]          |
| noHtml          | Must not contain HTML                                                          | noHtml                |
| notBanned       | Chech that member is not banned from using the site                            | notBanned             |
| notNumeric      | Not a number, natural or decimal                                               | notNumeric            |
| notStartsWith   | Does not start with given string                                               | notStartsWith[_]      |
| numeric         | Any number, including decimals                                                 | numeric               |
| passwordMatchesSecurityPolicy         | Password matches security policy defined for site        | passwordMatchesSecurityPolicy |
| regex           | Match a regular expression                                                     | regex[/^exp.*?ine$/]  |
| required        | Must not be blank. See validation-service-required                             | required              |
| startsWith      | Starts with given string                                                       | startsWith[_]         |
| uniqueEmail     | Must be a unique email. Gmail addresses strip . before checking for uniqueness | uniqueEmail           |
| uniqueUsername  | Must be a unique username                                                      | uniqueUsername        |
| url             | Must be a valid URL                                                            | url                   |
| validBase64     | Base64 character set only                                                      | validBase64           |
| validPassword   | Valid password                                                                 | validPassword         |
| validScreenName | Valid screen name                                                              | validScreenName       |
| validUsername   | Valid username                                                                 | validUsername         |
| whenPresent     | Only validate if field was sent. See validation-service-when-present           | whenPresent           |
| writable        | File or path must be writable                                                  | writable              |
| xss             | Must not contain content that looks like XSS (Cross Site Scripting)            | xss                   |

## Handling Results

Handling validation results can be as fine grained as you need it to be. A call to `validate()` will return a result object:

    $result = $validator->validate($data);

### Passed? Failed.

The most basic result check is to see if validation passed or failed. This is done with `isValid()` and `isNotValid()`:

    $result->isValid(); // true | false
    $result->isNotValid(); // false | true

### Checking Individual Fields

To check if an individual field failed validation, use `hasErrors()` with the name of the field:

    $result->hasErrors('username'); // true | false

### Getting Error Messages

Error messages can be read directly from the result object using `getAllErrors()`. This will return an array that is keyed first by the field name, then by the rule name, and lastly contains the localized failure message:

    $errors = $result->getAllErrors(); // $errors['fieldname']['rulename'] = 'Message';

This will return an empty array if nothing has failed.

Individual field errors can either be read by accessing the `getAllErrors()` result array or by using `getErrors` with the field name as the first parameter:

    // either:
    $errors = $result->getAllErrors();
    $username_errors = $errors['username'];

    // or better:
    $username_errors = $result->getErrors('username');

The latter will return an empty array if there were no errors.
