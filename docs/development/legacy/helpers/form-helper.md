---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Form Helper

The Form Helper file contains functions that assist in working with forms. This helper is loaded using the following code:

    ee()->load->helper('form');

## Available Functions

### `form_open([$action = ''[, $attributes = ''[, $hidden = array()]]])`

| Parameter    | Type     | Description                            |
| ------------ | -------- | -------------------------------------- |
| \$action     | `String` | Form action/target URI string          |
| \$attributes | `Array`  | HTML attributes                        |
| \$hidden     | `Array`  | An array of hidden fields' definitions |
| Returns      | `String` | An HTML form opening tag               |

Creates an opening form tag with a base URL **built from your config preferences**. It will optionally let you add form attributes and hidden input fields, and will always add the _accept-charset_ attribute based on the charset value in your config file.

The main benefit of using this tag rather than hard coding your own HTML is that it permits your site to be more portable in the event your URLs ever change.

Here's a simple example:

    echo form_open('email/send');

The above example would create a form that points to your base URL plus the "email/send" URI segments, like this:

    <form method="post" accept-charset="utf-8" action="https://example.com/email/send">

**Adding Attributes**

Attributes can be added by passing an associative array to the second parameter, like this:

     $attributes = array('class' => 'email', 'id' => 'myform');
     echo form_open('email/send', $attributes);

Alternatively, you can specify the second parameter as a string:

     echo form_open('email/send', 'class="email" id="myform"');

The above examples would create a form similar to this:

     <form method="post" accept-charset="utf-8" action="https://example.com/email/send" class="email" id="myform">

**Adding Hidden Input Fields**

Hidden fields can be added by passing an associative array to the third parameter, like this:

     $hidden = array('username' => 'Joe', 'member_id' => '234');
     echo form_open('email/send', '', $hidden);

You can skip the second parameter by passing any falsy value to it.

The above example would create a form similar to this:

     <form method="post" accept-charset="utf-8" action="https://example.com/email/send">
         <input type="hidden" name="username" value="Joe" />
         <input type="hidden" name="member_id" value="234" />

### `form_open_multipart([$action = ''[, $attributes = array()[, $hidden = array()]])`

| Parameter    | Type     | Description                            |
| ------------ | -------- | -------------------------------------- |
| \$action     | `String` | Form action/target URI string          |
| \$attributes | `Array`  | HTML attributes                        |
| \$hidden     | `Array`  | An array of hidden fields' definitions |
| Returns      | `String` | An HTML multipart form opening tag     |

This function is absolutely identical to `form_open()` above, except that it adds a _multipart_ attribute, which is necessary if you would like to use the form to upload files with.

### `form_hidden($name[, $value = ''])`

| Parameter | Type     | Description                    |
| --------- | -------- | ------------------------------ |
| \$name    | `String` | Field name                     |
| \$value   | `String` | Field value                    |
| Returns   | `String` | An HTML hidden input field tag |

Lets you generate hidden input fields. You can either submit a name/value string to create one field:

    form_hidden('username', 'johndoe');
    // Would produce: <input type="hidden" name="username" value="johndoe" />

... or you can submit an associative array to create multiple fields:

    $data = array(
        'name'  => 'John Doe',
        'email' => 'john@example.com',
        'url'   => 'https://example.com'
    );

    echo form_hidden($data);

    /*
        Would produce:
        <input type="hidden" name="name" value="John Doe" />
        <input type="hidden" name="email" value="john@example.com" />
        <input type="hidden" name="url" value="https://example.com" />
    */

You can also pass an associative array to the value field:

    $data = array(
        'name'  => 'John Doe',
        'email' => 'john@example.com',
        'url'   => 'https://example.com'
    );

    echo form_hidden('my_array', $data);

    /*
        Would produce:

        <input type="hidden" name="my_array[name]" value="John Doe" />
        <input type="hidden" name="my_array[email]" value="john@example.com" />
        <input type="hidden" name="my_array[url]" value="https://example.com" />
    */

If you want to create hidden input fields with extra attributes:

    $data = array(
        'type'  => 'hidden',
        'name'  => 'email',
        'id'    => 'hiddenemail',
        'value' => 'john@example.com',
        'class' => 'hiddenemail'
    );

    echo form_input($data);

    /*
        Would produce:

        <input type="hidden" name="email" value="john@example.com" id="hiddenemail" class="hiddenemail" />
    */

### `form_input([$data = ''[, $value = ''[, $extra = '']])`

| Parameter | Type     | Description                                     |
| --------- | -------- | ----------------------------------------------- |
| \$data    | `Array`  | Field attributes data                           |
| \$value   | `String` | Field value                                     |
| \$extra   | `String` | Extra attributes to be added to the tag _as is_ |
| Returns   | `String` | An HTML text input field tag                    |

Lets you generate a standard text input field. You can minimally pass the field name and value in the first and second parameter:

    echo form_input('username', 'johndoe');

Or you can pass an associative array containing any data you wish your form to contain:

    $data = array(
        'name'      => 'username',
        'id'        => 'username',
        'value'     => 'johndoe',
        'maxlength' => '100',
        'size'      => '50',
        'style'     => 'width:50%'
    );

    echo form_input($data);

    /*
        Would produce:

        <input type="text" name="username" value="johndoe" id="username" maxlength="100" size="50" style="width:50%"  />
    */

If you would like your form to contain some additional data, like JavaScript, you can pass it as a string in the third parameter:

    $js = 'onClick="some_function()"';
    echo form_input('username', 'johndoe', $js);

### `form_password([$data = ''[, $value = ''[, $extra = '']]])`

| Parameter | Type     | Description                                     |
| --------- | -------- | ----------------------------------------------- |
| \$data    | `Array`  | Field attributes data                           |
| \$value   | `String` | Field value                                     |
| \$extra   | `String` | Extra attributes to be added to the tag _as is_ |
| Returns   | `String` | An HTML password input field tag                |

This function is identical in all respects to the `form_input()` function above except that it uses the "password" input type.

### `form_upload([$data = ''[, $value = ''[, $extra = '']]])`

| Parameter | Type     | Description                                     |
| --------- | -------- | ----------------------------------------------- |
| \$data    | `Array`  | Field attributes data                           |
| \$value   | `String` | Field value                                     |
| \$extra   | `String` | Extra attributes to be added to the tag _as is_ |
| Returns   | `String` | An HTML file upload input field tag             |

This function is identical in all respects to the `form_input()` function above except that it uses the "file" input type, allowing it to be used to upload files.

### `form_textarea([$data = ''[, $value = ''[, $extra = '']]])`

| Parameter | Type     | Description                                     |
| --------- | -------- | ----------------------------------------------- |
| \$data    | `Array`  | Field attributes data                           |
| \$value   | `String` | Field value                                     |
| \$extra   | `String` | Extra attributes to be added to the tag _as is_ |
| Returns   | `String` | An HTML textarea tag                            |

This function is identical in all respects to the `form_input()` function above except that it generates a "textarea" type.

NOTE: **Note:** Instead of the _maxlength_ and _size_ attributes in the above example, you will instead specify _rows_ and _cols_.

### `form_dropdown([$name = ''[, $options = array()[, $selected = array()[, $extra = '']]]])`

| Parameter  | Type     | Description                                          |
| ---------- | -------- | ---------------------------------------------------- |
| \$name     | `String` | Field name                                           |
| \$options  | `Array`  | An associative array of options to be listed         |
| \$selected | `Array`  | List of fields to mark with the _selected_ attribute |
| \$extra    | `String` | Extra attributes to be added to the tag _as is_      |
| Returns    | `String` | An HTML dropdown select field tag                    |

Lets you create a standard drop-down field. The first parameter will contain the name of the field, the second parameter will contain an associative array of options, and the third parameter will contain the value you wish to be selected. You can also pass an array of multiple items through the third parameter, and CodeIgniter will create a multiple select for you.

Example:

    $options = array(
        'small'     => 'Small Shirt',
        'med'       => 'Medium Shirt',
        'large'     => 'Large Shirt',
        'xlarge'    => 'Extra Large Shirt',
    );

    $shirts_on_sale = array('small', 'large');
    echo form_dropdown('shirts', $options, 'large');

    /*
        Would produce:

        <select name="shirts">
            <option value="small">Small Shirt</option>
            <option value="med">Medium  Shirt</option>
            <option value="large" selected="selected">Large Shirt</option>
            <option value="xlarge">Extra Large Shirt</option>
        </select>
    */

    echo form_dropdown('shirts', $options, $shirts_on_sale);

    /*
        Would produce:

        <select name="shirts" multiple="multiple">
            <option value="small" selected="selected">Small Shirt</option>
            <option value="med">Medium  Shirt</option>
            <option value="large" selected="selected">Large Shirt</option>
            <option value="xlarge">Extra Large Shirt</option>
        </select>
    */

If you would like the opening &lt;select&gt; to contain additional data, like an id attribute or JavaScript, you can pass it as a string in the fourth parameter:

    $js = 'id="shirts" onChange="some_function();"';
    echo form_dropdown('shirts', $options, 'large', $js);

If the array passed as `$options` is a multidimensional array, then `form_dropdown()` will produce an &lt;optgroup&gt; with the array key as the label.

### `form_multiselect([$name = ''[, $options = array()[, $selected = array()[, $extra = '']]]])`

| Parameter  | Type     | Description                                          |
| ---------- | -------- | ---------------------------------------------------- |
| \$name     | `String` | Field name                                           |
| \$options  | `Array`  | An associative array of options to be listed         |
| \$selected | `Array`  | List of fields to mark with the _selected_ attribute |
| \$extra    | `String` | Extra attributes to be added to the tag _as is_      |
| Returns    | `String` | An HTML dropdown multiselect field tag               |

Lets you create a standard multiselect field. The first parameter will contain the name of the field, the second parameter will contain an associative array of options, and the third parameter will contain the value or values you wish to be selected.

The parameter usage is identical to using `form_dropdown()` above, except of course that the name of the field will need to use POST array syntax, e.g. `foo[]`.

### `form_fieldset([$legend_text = ''[, $attributes = array()]])`

| Parameter     | Type     | Description                                      |
| ------------- | -------- | ------------------------------------------------ |
| \$legend_text | `String` | Text to put in the &lt;legend&gt; tag            |
| \$attributes  | `Array`  | Attributes to be set on the &lt;fieldset&gt; tag |
| Returns       | `String` | An HTML fieldset opening tag                     |

Lets you generate fieldset/legend fields.

Example:

    echo form_fieldset('Address Information');
    echo "<p>fieldset content here</p>\n";
    echo form_fieldset_close();

    /*
        Produces:

            <fieldset>
                <legend>Address Information</legend>
                    <p>form content here</p>
            </fieldset>
    */

Similar to other functions, you can submit an associative array in the second parameter if you prefer to set additional attributes:

    $attributes = array(
        'id'    => 'address_info',
        'class' => 'address_info'
    );

    echo form_fieldset('Address Information', $attributes);
    echo "<p>fieldset content here</p>\n";
    echo form_fieldset_close();

    /*
        Produces:

        <fieldset id="address_info" class="address_info">
            <legend>Address Information</legend>
            <p>form content here</p>
        </fieldset>
    */

### `form_fieldset_close([$extra = ''])`

| Parameter | Type     | Description                                       |
| --------- | -------- | ------------------------------------------------- |
| \$extra   | `String` | Anything to append after the closing tag, _as is_ |
| Returns   | `String` | An HTML fieldset closing tag                      |

Produces a closing &lt;/fieldset&gt; tag. The only advantage to using this function is it permits you to pass data to it which will be added below the tag. For example:

    $string = '</div></div>';
    echo form_fieldset_close($string);
    // Would produce: </fieldset></div></div>

### `form_checkbox([$data = ''[, $value = ''[, $checked = FALSE[, $extra = '']]]])`

| Parameter | Type     | Description                                     |
| --------- | -------- | ----------------------------------------------- |
| \$data    | `Array`  | Field attributes data                           |
| \$value   | `String` | Field value                                     |
| \$checked | `Bool`   | Whether to mark the checkbox as being _checked_ |
| \$extra   | `String` | Extra attributes to be added to the tag _as is_ |
| Returns   | `String` | An HTML checkbox input tag                      |

Lets you generate a checkbox field. Simple example:

    echo form_checkbox('newsletter', 'accept', TRUE);
    // Would produce:  <input type="checkbox" name="newsletter" value="accept" checked="checked" />

The third parameter contains a boolean TRUE/FALSE to determine whether the box should be checked or not.

Similar to the other form functions in this helper, you can also pass an array of attributes to the function:

    $data = array(
        'name'      => 'newsletter',
        'id'        => 'newsletter',
        'value'     => 'accept',
        'checked'   => TRUE,
        'style'     => 'margin:10px'
    );

    echo form_checkbox($data);
    // Would produce: <input type="checkbox" name="newsletter" id="newsletter" value="accept" checked="checked" style="margin:10px" />

Also as with other functions, if you would like the tag to contain additional data like JavaScript, you can pass it as a string in the fourth parameter:

    $js = 'onClick="some_function()"';
    echo form_checkbox('newsletter', 'accept', TRUE, $js)

### `form_radio([$data = ''[, $value = ''[, $checked = FALSE[, $extra = '']]]])`

| Parameter | Type     | Description                                         |
| --------- | -------- | --------------------------------------------------- |
| \$data    | `Array`  | Field attributes data                               |
| \$value   | `String` | Field value                                         |
| \$checked | `Bool`   | Whether to mark the radio button as being _checked_ |
| \$extra   | `String` | Extra attributes to be added to the tag _as is_     |
| Returns   | `String` | An HTML radio input tag                             |

This function is identical in all respects to the `form_checkbox()` function above except that it uses the "radio" input type.

### `form_label([$label_text = ''[, $id = ''[, $attributes = array()]]])`

| Parameter    | Type     | Description                                          |
| ------------ | -------- | ---------------------------------------------------- |
| \$label_text | `String` | Text to put in the &lt;label&gt; tag                 |
| \$id         | `String` | ID of the form element that we're making a label for |
| \$attributes | `String` | HTML attributes                                      |
| Returns      | `String` | An HTML field label tag                              |

Lets you generate a &lt;label&gt;. Simple example:

    echo form_label('What is your Name', 'username');
    // Would produce:  <label for="username">What is your Name</label>

Similar to other functions, you can submit an associative array in the third parameter if you prefer to set additional attributes.

Example:

    $attributes = array(
        'class' => 'mycustomclass',
        'style' => 'color: #000;'
    );

    echo form_label('What is your Name', 'username', $attributes);
    // Would produce:  <label for="username" class="mycustomclass" style="color: #000;">What is your Name</label>

### `form_submit([$data = ''[, $value = ''[, $extra = '']]])`

| Parameter | Type     | Description                                     |
| --------- | -------- | ----------------------------------------------- |
| \$data    | `String` | Button name                                     |
| \$value   | `String` | Button value                                    |
| \$extra   | `String` | Extra attributes to be added to the tag _as is_ |
| Returns   | `String` | An HTML input submit tag                        |

Lets you generate a standard submit button. Simple example:

    echo form_submit('mysubmit', 'Submit Post!');
    // Would produce:  <input type="submit" name="mysubmit" value="Submit Post!" />

Similar to other functions, you can submit an associative array in the first parameter if you prefer to set your own attributes. The third parameter lets you add extra data to your form, like JavaScript.

### `form_reset([$data = ''[, $value = ''[, $extra = '']]])`

| Parameter | Type     | Description                                     |
| --------- | -------- | ----------------------------------------------- |
| \$data    | `String` | Button name                                     |
| \$value   | `String` | Button value                                    |
| \$extra   | `String` | Extra attributes to be added to the tag _as is_ |
| Returns   | `String` | An HTML input reset button tag                  |

Lets you generate a standard reset button. Use is identical to `form_submit()`.

### `form_button([$data = ''[, $content = ''[, $extra = '']]])`

| Parameter | Type     | Description                                     |
| --------- | -------- | ----------------------------------------------- |
| \$data    | `String` | Button name                                     |
| \$content | `String` | Button label                                    |
| \$extra   | `String` | Extra attributes to be added to the tag _as is_ |
| Returns   | `String` | An HTML button tag                              |

Lets you generate a standard button element. You can minimally pass the button name and content in the first and second parameter:

    echo form_button('name','content');
    // Would produce: <button name="name" type="button">Content</button>

Or you can pass an associative array containing any data you wish your form to contain:

    $data = array(
        'name'      => 'button',
        'id'        => 'button',
        'value'     => 'true',
        'type'      => 'reset',
        'content'   => 'Reset'
    );

    echo form_button($data);
    // Would produce: <button name="button" id="button" value="true" type="reset">Reset</button>

If you would like your form to contain some additional data, like JavaScript, you can pass it as a string in the third parameter:

    $js = 'onClick="some_function()"';
    echo form_button('mybutton', 'Click Me', $js);

### `form_close([$extra = ''])`

| Parameter | Type     | Description                                       |
| --------- | -------- | ------------------------------------------------- |
| \$extra   | `String` | Anything to append after the closing tag, _as is_ |
| Returns   | `String` | An HTML form closing tag                          |

Produces a closing `</form>` tag. The only advantage to using this function is it permits you to pass data to it which will be added below the tag. For example:

    $string = '</div></div>';
    echo form_close($string);
    // Would produce:  </form> </div></div>

### `form_prep([$str = ''[, $is_textarea = FALSE]])`

| Parameter     | Type     | Description                                                         |
| ------------- | -------- | ------------------------------------------------------------------- |
| \$str         | `String` | Value to escape                                                     |
| \$is_textarea | `Bool`   | Whether we're preparing for &lt;textarea&gt; or a regular input tag |
| Returns       | `String` | Escaped value                                                       |

Allows you to safely use HTML and characters such as quotes within form elements without breaking out of the form.

Consider this example:

    $string = 'Here is a string containing "quoted" text.';
    <input type="text" name="myform" value="$string" />

Since the above string contains a set of quotes it will cause the form to break. The `form_prep()` function converts HTML so that it can be used safely:

    <input type="text" name="myform" value="<?php echo form_prep($string); ?>" />

NOTE: **Note:** If you use any of the form helper functions listed in this page the form values will be prepped automatically, so there is no need to call this function. Use it only if you are creating your own form elements.

### `set_value([$field = ''[, $default = ''[, $is_textarea = FALSE]]])`

| Parameter     | Type     | Description                                    |
| ------------- | -------- | ---------------------------------------------- |
| \$field       | `String` | Field name                                     |
| \$default     | `String` | Default value                                  |
| \$is_textarea | `Bool`   | Whether we're setting &lt;textarea&gt; content |
| Returns       | `String` | Field value                                    |

Permits you to set the value of an input form or textarea. You must supply the field name via the first parameter of the function. The second (optional) parameter allows you to set a default value for the form.

Example:

    <input type="text" name="quantity" value="<?=set_value('quantity', '0');?>" size="50" />

The above form will show "0" when loaded for the first time.

### `set_select([$field = ''[, $value = ''[, $default = FALSE]]])`

| Parameter | Type     | Description                             |
| --------- | -------- | --------------------------------------- |
| \$field   | `String` | Field name                              |
| \$value   | `String` | Value to check for                      |
| \$default | `String` | Whether the value is also a default one |
| Returns   | `String` | 'selected' attribute or an empty string |

If you use a &lt;select&gt; menu, this function permits you to display the menu item that was selected.

The first parameter must contain the name of the select menu, the second parameter must contain the value of each item, and the third (optional) parameter lets you set an item as the default (use boolean TRUE/FALSE).

Example:

    <select name="myselect">
        <option value="one" <?php echo  set_select('myselect', 'one', TRUE); ?> >One</option>
        <option value="two" <?php echo  set_select('myselect', 'two'); ?> >Two</option>
        <option value="three" <?php echo  set_select('myselect', 'three'); ?> >Three</option>
    </select>

### `set_checkbox([$field = ''[, $value = ''[, $default = FALSE]]])`

| Parameter | Type     | Description                             |
| --------- | -------- | --------------------------------------- |
| \$field   | `String` | Field name                              |
| \$value   | `String` | Value to check for                      |
| \$default | `String` | Whether the value is also a default one |
| Returns   | `String` | 'checked' attribute or an empty string  |

Permits you to display a checkbox in the state it was submitted.

The first parameter must contain the name of the checkbox, the second parameter must contain its value, and the third (optional) parameter lets you set an item as the default (use boolean TRUE/FALSE).

Example:

    <input type="checkbox" name="mycheck" value="1" <?php echo set_checkbox('mycheck', '1'); ?> />
    <input type="checkbox" name="mycheck" value="2" <?php echo set_checkbox('mycheck', '2'); ?> />

### `set_radio([$field = ''[, $value = ''[, $default = FALSE]]])`

| Parameter | Type     | Description                             |
| --------- | -------- | --------------------------------------- |
| \$field   | `String` | Field name                              |
| \$value   | `String` | Value to check for                      |
| \$default | `String` | Whether the value is also a default one |
| Returns   | `String` | 'checked' attribute or an empty string  |

Permits you to display radio buttons in the state they were submitted. This function is identical to the `set_checkbox()` function above.

Example:

    <input type="radio" name="myradio" value="1" <?php echo  set_radio('myradio', '1', TRUE); ?> />
    <input type="radio" name="myradio" value="2" <?php echo  set_radio('myradio', '2'); ?> />

NOTE: **Note:** If you are using the Form Validation class, you must always specify a rule for your field, even if empty, in order for the `set_*()` functions to work. This is because if a Form Validation object is defined, the control for `set_*()` is handed over to a method of the class instead of the generic helper function.

### `form_error([$field = ''[, $prefix = ''[, $suffix = '']]])`

| Parameter | Type     | Description                                     |
| --------- | -------- | ----------------------------------------------- |
| \$field   | `String` | Field name                                      |
| \$prefix  | `String` | Error opening tag                               |
| \$suffix  | `String` | Error closing tag                               |
| Returns   | `String` | HTML-formatted form validation error message(s) |

Returns a validation error message from the [Form Validation Library](development/legacy/libraries/form-validation.md), associated with the specified field name. You can optionally specify opening and closing tag(s) to put around the error message.

Example:

    // Assuming that the 'username' field value was incorrect:
    echo form_error('myfield', '<div class="error">', '</div>');

    // Would produce: <div class="error">Error message associated with the "username" field.</div>

### `validation_errors([$prefix = ''[, $suffix = '']])`

| Parameter | Type     | Description                                     |
| --------- | -------- | ----------------------------------------------- |
| \$prefix  | `String` | Error opening tag                               |
| \$suffix  | `String` | Error closing tag                               |
| Returns   | `String` | HTML-formatted form validation error message(s) |

Similarly to the `form_error()` function, returns all validation error messages produced by the `../libraries/form_validation`, with optional opening and closing tags around each of the messages.

Example:

    echo validation_errors('<span class="error">', '</span>');

    /*
        Would produce, e.g.:

        <span class="error">The "email" field doesn't contain a valid e-mail address!</span>
        <span class="error">The "password" field doesn't match the "repeat_password" field!</span>

     */

### `form_yes_no_toggle($name, $value)`

| Parameter | Type          | Description                                |
| --------- | ------------- | ------------------------------------------ |
| \$name    | `String`      | The name of the inputs                     |
| \$value   | `String/bool` | Checked state as `y`/`n` or `TRUE`/`FALSE` |
| Returns   | `String`      | Form inputs as HTML                        |

Creates the typical EE yes/no options for a form

### `form_preference($name, $details)`

| Parameter | Type        | Description                                                                                                          |
| --------- | ----------- | -------------------------------------------------------------------------------------------------------------------- |
| \$name    | `String`    | The name of the field                                                                                                |
| \$details | `Mixed\[\]` | The details related to the field (e.g. `array('type' => 'r', 'value' => 'us', 'subtext' => '', 'selected' => 'us')`) |
| Returns   | `String`    | Form input as HTML                                                                                                   |

Parses the data from `ee()->config->prep_view_vars()` and returns the appropriate form control.

### `cp_form_submit($value, $work_text[, $name = NULL[, $invalid = FALSE]])`

| Parameter   | Type     | Description                                   |
| ----------- | -------- | --------------------------------------------- |
| \$value     | `String` | Standard text for the button                  |
| \$work_text | `String` | Text to display when form is submitting       |
| \$name      | `String` | The value of a name="" attribute              |
| \$invalid   | `String` | Force an invalid/disabled state on the button |
| Returns     | `String` | Button HTML                                   |

Outputs a standard CP form submit button in the current state of the form validation result. If there are errors, this button will be in a disabled state on load. Button text will be "Errors Found" if there are errors, otherwise the value of \$value will be used.
