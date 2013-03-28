Member Module Settings Extension Hooks
======================================

.. contents::
  :local:
  :depth: 1


member_edit_preferences
-----------------------

.. function:: member_edit_preferences($element)

  Allows adding of preferences to user side preferences form by
  modifying the preference form template.

  How it's called::

    $element = $this->EE->extensions->call('member_edit_preferences', $element);

  :param string $element: Preference form template
  :returns: Modified preference form template (``$element``)
  :rtype: String

  .. versionadded:: 1.4.0

member_update_preferences
-------------------------

.. function:: member_update_preferences($data)

  Allows updating of added preferences via user side preferences form.

  How it's called::

    $this->EE->extensions->call('member_update_preferences', $data);
    if ($this->EE->extensions->end_script === TRUE) return;

  :param array $data: Array of data from standard form
  :rtype: Void

  .. versionadded:: 1.4.0
