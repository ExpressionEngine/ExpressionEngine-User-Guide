Design Controller Extension Hooks
=================================

.. contents::
  :local:
  :depth: 1


edit_template_start
-------------------

.. function:: edit_template_start($query, $template_id, $message)

  Additional processing / take over at the beginning of the
  ``edit_template()`` method.

  How it's called::

    $this->extensions->call('edit_template_start', $query, $template_id, $message);
    if ($this->extensions->end_script === TRUE) return;

  :param object $query: Database result object for the selected template
  :param int $template_id: Selected template's ID
  :param string $message: Update/error message from update action, if
    applicable
  :rtype: Void

  .. versionadded:: 1.6.0

template_types
--------------

.. function:: template_types()

  Add template types to ExpressionEngine's default set. In the Output
  library specifically, it is useful to return the appropriate content
  type header for the template type.

  How it's called::

    $template_types = $EE->extensions->call('template_types');

  :returns: The custom templates array (see below)
  :rtype: Array

  This hook must append a key to the :doc:`$last_call
  </development/extensions>` array in the following format::

      $custom_templates = $this->EE->extensions->last_call;

      $custom_templates['ical'] = array(             // Short name for database
          'template_name'           => 'iCal Feed',  // Display name for Template Type dropdown
          'template_file_extension' => '.ics',       // File extension for saving templates as files
          'template_headers'        => array(        // Custom headers for file type
              'Content-Type: text/ical',
              'Content-Disposition: attachment; filename="event.ics"'
          )
      );

  .. note:: It is good practice to clean up the templates table and
    remove your custom template type from templates using it upon
    extension uninstallation.

  .. versionadded:: 2.4.0

update_template_end
-------------------

.. function:: update_template_end($template_id, $message)

  Additional processing after a template is updated

  How it's called::

    $this->extensions->call('update_template_end', $template_id, $message);
    if ($this->extensions->end_script === TRUE) return;

  :param int $template_id: Selected template's ID
  :param string $message: Update/error message from update action, if
    applicable
  :rtype: Void

  .. versionadded:: 1.6.0
