Shared Form View
================

.. highlight:: php

.. contents::
  :local:
  :depth: 1

Overview
--------

ExpressionEngine's control panel markup is very modular and consistent. Because of that, we were able to abstract out the creation of most form views to a single view file to save repeating ourselves and keeping our form markup maintainable. This view is also available to add-on developers and is recommended for use for easy style-guide adherence, built-in support for form validation, as well as never having to lift a finger to edit markup later should our style guide change.

Getting started
---------------

The concept is quite familiar. In an ExpressionEngine controller file, we will create a variable and pass it to a view. The variable will be a specifically-structured array that will describe the layout and contents of our form.

Let's get started creating a general settings form for ExpressionEngine. We'll start with a couple text inputs, as well as some other code necessary to render the view::

  // The data we'll want to populate our form fields with
  $site = ee('Model')->get('Site')
      ->filter('site_id', ee()->config->item('site_id'))
      ->first();

  // Form definition array
  $vars['sections'] = array(
    array(
      array(
        'title' => 'site_name',
        'desc' => 'site_name_desc',
        'fields' => array(
          'site_name' => array(
            'type' => 'text',
            'value' => $site->site_label,
            'required' => TRUE
          )
        )
      ),
      // Site short name field
      array(
        'title' => 'site_short_name',
        'desc' => 'site_short_name_desc',
        'fields' => array(
          'site_short_name' => array(
            'type' => 'text',
            'value' => $site->site_name,
            'required' => TRUE
          )
        )
      )
    )
  );

  // Final view variables we need to render the form
  $vars += array(
    'base_url' => ee('CP/URL', 'settings/general'),
    'cp_page_title' => lang('general_settings'),
    'save_btn_text' => 'btn_save_settings',
    'save_btn_text_working' = 'btn_saving'
  );

  ee()->cp->render('settings/form', $vars);

Assuming our language keys are defined above, we should end up with a form that looks like this:

.. figure:: ../images/shared_form_1.png

Fieldset definitions
--------------------

Let's dive in closer and take a look and what makes a fieldset definition::

  array(
    'title' => 'site_name',
    'desc' => 'site_name_desc',
    'fields' => array( ... )
  )

This is the first level in a fieldset definition. Here are what these keys and values mean, as well as others that can be set in this dimension of the array:

+--------------+----------------------------------------------------------------------+-----------------+---------------+
| Option name  | Description                                                          | Accepted values | Default value |
+==============+======================================================================+=================+===============+
| ``title``    | Name of field, required.                                             | String          | N/A           |
+--------------+----------------------------------------------------------------------+-----------------+---------------+
| ``desc``     | Description of field, required.                                      | String          | N/A           |
+--------------+----------------------------------------------------------------------+-----------------+---------------+
| ``fields``   | Array of field definitions, documented below, required.              | Array           | N/A           |
+--------------+----------------------------------------------------------------------+-----------------+---------------+
| ``security`` | Whether or not this field or setting is used to enhance security.    | Boolean         | ``FALSE``     |
|              | When ``TRUE``, applies a special style to denote as a security       |                 |               |
|              | enhancement, shown below. It's a good idea to explain the security   |                 |               |
|              | implications in the description of the field.                        |                 |               |
+--------------+----------------------------------------------------------------------+-----------------+---------------+
| ``caution``  | Whether or not users should use caution in setting this field,       | Boolean         | ``FALSE``     |
|              | typically used in ExpressionEngine to denote a setting that will     |                 |               |
|              | give access to certain content or abilities to certain users. It's a |                 |               |
|              | good idea to explain the possible effects of changing this field.    |                 |               |
|              | When ``TRUE``, applies a special style to prompt caution.            |                 |               |
+--------------+----------------------------------------------------------------------+-----------------+---------------+
| ``group``    | Fieldsets can be assigned a group with other fieldsets that are      | String          | ``NULL``      |
|              | shown or hidden based on the value of another field. This is         |                 |               |
|              | documented more below.                                               |                 |               |
+--------------+----------------------------------------------------------------------+-----------------+---------------+
| ``grid``     | Whether or not this fieldset is to have a Grid input, such as one    | Boolean         | ``FALSE``     |
|              | generated by the GridInput service. The fieldset needs some extra    |                 |               |
|              | styles and markup handling to show a Grid field.                     |                 |               |
+--------------+----------------------------------------------------------------------+-----------------+---------------+
| ``wide``     | Whether or not the fieldset's fields should take up the entire width | Boolean         | ``FALSE``     |
|              | of the fieldset. By default, fields are confined to a column to the  |                 |               |
|              | right of the field name and description. When ``TRUE``, fields will  |                 |               |
|              | have the full width of the fieldset *below* the field name and       |                 |               |
|              | description. It's a good idea to use this displaying a Grid input.   |                 |               |
+--------------+----------------------------------------------------------------------+-----------------+---------------+

.. todo:: Link to style guide for security and caution items.

Individual field definitions
----------------------------

Fieldsets can contain multiple fields, and they are defined in the ``fields`` array mentioned above::

  'fields' => array(
    'site_name' => array(
      'type' => 'text',
      'value' => $site->site_label,
      'required' => TRUE
    )
  )

We'll dive deeper into that array to see how we can show and customize different kinds of fields. Here are the keys available to a field definition array:

+----------------+---------------------------------------------------------------------+-----------------+---------------+
| Option name    | Description                                                         | Accepted values | Default value |
+================+=====================================================================+=================+===============+
| ``type``       | Type of field, required. All field types are listed below.          | String name of  | N/A           |
|                |                                                                     | valid field     |               |
|                |                                                                     | type names      |               |
+----------------+---------------------------------------------------------------------+-----------------+---------------+
| ``value``      | Value of field to populate on page load.                            | String          | N/A           |
+----------------+---------------------------------------------------------------------+-----------------+---------------+
| ``required``   | Whether or not the field is required for form submission.           | Boolean         | ``FALSE``     |
+----------------+---------------------------------------------------------------------+-----------------+---------------+
| ``disabled``   | Whether or not the field input element is disabled.                 | Boolean         | ``FALSE``     |
+----------------+---------------------------------------------------------------------+-----------------+---------------+
| ``choices``    | For field types that have multiple options to choose from, such as  | Array           | ``NULL``      |
|                | radio buttons or checkboxes, sets the selectable choices for that   |                 |               |
|                | field. Array format is ``'value' => lang('label')``.                |                 |               |
+----------------+---------------------------------------------------------------------+-----------------+---------------+
| ``maxlength``  | Sets the ``maxlength=`` parameter on text inputs.                   | Boolean         | ``FALSE``     |
+----------------+---------------------------------------------------------------------+-----------------+---------------+
| ``no_results`` | For checkboxes, radio buttons and select fields, can be set to show | Array           | ``NULL``      |
|                | a "no results" message and a call-to-action link button to create   |                 |               |
|                | content that would populate options for the field.                  |                 |               |
+----------------+---------------------------------------------------------------------+-----------------+---------------+
| ``label``      | Normally, the label for the field is specified in the fieldset      | String          | ``NULL``      |
|                | definition, but some field types may allow a secondary label to be  |                 |               |
|                | set such as the ``sort-text`` field because it is normally paired   |                 |               |
|                | with other ``short-text`` fields and each may need their own label. |                 |               |
+----------------+---------------------------------------------------------------------+-----------------+---------------+
| ``wrap``       | Whether or not to wrap the field in a scrollable div, good for      | Boolean         | ``FALSE``     |
|                | potentially long lists of selectable options.                       |                 |               |
+----------------+---------------------------------------------------------------------+-----------------+---------------+
| ``content``    | When ``type`` is set to ``html``, allows for any freeform markup to | String          | ``NULL``      |
|                | be used as the field.                                               |                 |               |
+----------------+---------------------------------------------------------------------+-----------------+---------------+

.. todo:: Finish these docs.
