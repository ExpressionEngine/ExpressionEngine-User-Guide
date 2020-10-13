<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Forgot Password Form Tag

[TOC]

## Overview

Output a forgotten password form that sends an email with instructions for resetting a member password when unable to login.

    {exp:member:forgot_password_form}

            <label>Your Email Address</label><br />
            <input type="email" name="email" value="" maxlength="120" size="40" />

			<input type="submit" name="submit" value="Submit" />

    {/exp:member:forgot_password_form}

## Parameters

### `inline=`

    inline_errors="yes"

Something something.


## Variables

### `{something}`

This variable yada yada.


## Variable Pairs

### `{errors}`

[TOC=4]

Errors are displayed using a "looping pair", as there can be more than 1 error in a form submission.

    {errors}
        <p>{error}</p>
    {/errors}

#### Error Tag Pair Parameters

[TOC=5]

##### `backspace=`

#### Error Tag Pair Variables

[TOC=5]

##### `{error}`

    {error}

Stuff



## Example

