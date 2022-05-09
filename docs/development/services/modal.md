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

# CP/Modal Service

[TOC]

The Modal service organizes various modal views for presentation upon a trigger you specify.

## Simple example

Let's say we want to create a modal that says "Hello, world!". First, we need to construct the markup that displays the modal.  We'll then just use our shared modal view and pass in our content so we don't have to worry about maintaining markup:

    $modal_vars = array(
      'name' => 'hello',
      'contents' => '<p>Hello, world!</p>'
    );
    $modal_html = ee('View')->make('ee:_shared/modal')->render($modal_vars);

We had to specify two view variables: `name` and `contents`. `name` is just a unique identifier for the modal, we'll reference this later when we decide to show it. `contents` is the HTML content for the modal.

Great, we've got our modal markup, let's hand it off to the Modal service:

    ee('CP/Modal')->addModal('hello', $modal_html);

Now, the modal will be present in our page's DOM next time we load it, but will be hidden. How do we show it? A simple way is a link that looks like this:

    <a href="" class="m-link" rel="hello">Say hello</a>

What makes this link special is the `m-link` class, and then the following `rel=` attribute where we specify the unique name of our modal we created earlier. If we click the link, and we should see our modal!

## Delete confirmation modals

Probably the most common use case for a modal is a delete confirmation modal. There are two kinds of deletion in the CP: clicking a delete link next to the item to start the deletion process (common in folder lists in the sidebar), and bulk deletion, mostly-commonly used with a table UI where the user can select multiple items from a table, select "Remove" in the bulk action selector, then click "Submit" to display the modal. We'll cover how to do each.

### Single item deletion

Our code will look similar to our simple example, except we'll set up a placeholder hidden input for the content ID we'll be deleting, and we'll use another shared view file specifically for delete confirmations:

    $modal_vars = array(
      'name'    => 'modal-confirm-remove',
      'form_url'  => ee('CP/URL')->make('addons/myaddon/remove'),
      'hidden'  => array(
        'content_id' => ''
      )
    );
    $modal_html = ee('View')->make('ee:_shared/modal_confirm_remove')->render($modal_vars);
    ee('CP/Modal')->addModal('remove', $modal_html);

Constructing our link to display the modal will require a little bit more data than before, because we may have more than one delete link on a page, and we want our modal to say what is about to be deleted. Here's what our delete link will look like:

    <a class="m-link"
       rel="modal-confirm-remove"
       href=""
       data-confirm="Content Item: <b>My Entry</b>"
       data-content_id="23">Delete</a>

WARN: **Warning:** The `m-link` class is essential. You can add other classes to your link, but you must have the `m-link` class for the modal to work properly.

Finally, we need some JavaScript to tie it all together. We want to accomplish two goals: show the name of the item being deleted, and pass along relevant data to the form inside the modal so that our controller code knows which item is being deleted:

    $(document).ready(function () {
      $('a.m-link').click(function (e) {
        var modalIs = $('.' + $(this).attr('rel'));

        $('.checklist', modalIs)
          .html('') // Reset it
          .append('<li>' + $(this).data('confirm') + '</li>');
        $('input[name="content_id"]', modalIs).val($(this).data('content_id'));

        e.preventDefault();
      })
    });

With that, when we click our link, a modal should appear asking us to confirm we want to delete "My Entry", and when we submit the form, it will `POST` to our specified `form_url` with the `content_id` we passed along.

### Bulk item deletion

Bulk item deletion is assumed to be used with a table listing of content. Since that's how it's consistently used in ExpressionEngine's interface, these instructions will be based in that context. Our modal markup generation will look similar to our previous example, except we don't need to define any hidden inputs:

    $modal_vars = array(
      'name'    => 'modal-confirm-remove',
      'form_url'  => ee('CP/URL')->make('addons/myaddon/remove')
    );
    $modal_html = ee('View')->make('ee:_shared/modal_confirm_remove')->render($modal_vars);
    ee('CP/Modal')->addModal('remove', $modal_html);

Generating table listings is easiest with the [CP/Table Service](development/services/table.md), so we'll use that and add a column of type `Table::COL_CHECKBOX` so that users can select data they want to delete. Defining that column will look like this for us:

    $columns[] = array(
      'name' => 'content_ids[]',
      'value' => $content->getId(),
      'data'  => array(
        'confirm' => lang('content') . ': <b>' . htmlentities($content->title, ENT_QUOTES, 'UTF-8') . '</b>'
      )
    );

We give the checkboxes an input name of `content_ids[]`, which will then carry over to the modal automatically, so that when we submit the form in our modal, the `$_POST` key we'll grab the content IDs from will be `content_ids`. But we need JavaScript to facilitate this for us, and luckily, it's already written. Just include this in your controller:

    ee()->cp->add_js_script(array(
      'file' => array('cp/confirm_remove'),
    ));

Finally, we need to create our Bulk Action Controls with some special data attributes that know when to trigger the modal. You can embed shared view in your own view file to do that:

      <?php $this->embed('ee:_shared/form/bulk-action-bar', [
        'options' => [
          [
            'value' => "",
            'text' => '-- ' . lang('with_selected') . ' --'
          ],
          [
            'value' => "remove",
            'text' => lang('delete'),
            'attrs' => ' data-confirm-trigger="selected" rel="modal-confirm-remove"'
          ]
        ],
        'modal' => true
      ]); ?>

Now when a user selects some content in the table, the bulk action controls should appear, and when "Remove" is selected and submitted, a modal will appear showing a list of content about to be deleted, where they can then confirm the deletion and your `POST` handler will be fired.

## CP/Modal Service Methods

**class `ExpressionEngine\Service\Modal\ModalCollection`**

[TOC=3]

### `addModal($name, $data)`

Adds a named modal to the collection

| Parameter | Type              | Description               |
| --------- | ----------------- | ------------------------- |
| \$name    | `String`          | The name of the modal     |
| \$data    | `String`          | The contents of the modal |
| Returns   | `ModalCollection` | \$this                    |

### `startModal()`

This will start a new modal overwriting any previously defined modal of the same name.

| Parameter | Type     | Description           |
| --------- | -------- | --------------------- |
| \$name    | `String` | The name of the modal |
| Returns   | `Void`   |                       |

### `endModal()`

Ends the modal adding the modal to the collection based on the most recently specified name via startModal.

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| Returns   | `Void` |             |

### `getModal($name)`

Gets a named modal from the collection

| Parameter | Type     | Description                         |
| --------- | -------- | ----------------------------------- |
| \$name    | `String` | The name of the modal               |
| Returns   | `Mixed`  | The data stored for the named modal |

### `getAllModals()`

Gets all the modals stored in this collection

| Parameter | Type    | Description                   |
| --------- | ------- | ----------------------------- |
| Returns   | `Array` | An array of stored modal data |
