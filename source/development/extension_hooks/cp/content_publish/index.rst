Content Publish Controller Extension Hooks
==========================================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

entry_submission_absolute_end
--------------------------------

.. function:: entry_submission_absolute_end($entry_id, $meta, $data, $view_url)

  Additional processing after entry submission, after all processing,
  prior to redirect.

  How it's called::

    // In system/expressionengine/controllers/cp/content_publish.php
    if ($this->api_channel_entries->trigger_hook('entry_submission_absolute_end', $view_url) === TRUE)
    {
       return TRUE;
    }

    ...

    // In system/expressionengine/libraries/api/Api_channel_entries.php
    $this->EE->extensions->call('entry_submission_absolute_end', $this->entry_id, $this->meta, $this->data, $orig_var);
    ...
    if ($this->EE->extensions->end_script === TRUE)
    {
        return TRUE;
    }

  :param int $entry_id: Entry ID of submitted entry
  :param array $meta: Entry's metadata (``channel_id``, ``entry_date``,
    i.e. fields for ``exp_channel_titles``)
  :param array $data: Entry's field data
  :param string $view_url: Control Panel URL to view submitted entry
  :rtype: Void

  Set ``$this->EE->extensions->end_script`` to ``TRUE`` to prevent an
  automatic redirect to the ``$view_url``.

  .. versionadded:: 2.0

entry_submission_redirect
-------------------------

.. function:: entry_submission_redirect($entry_id, $meta, $data, $cp_call, $view_url)

  Set the URL that the user will be redirected to after a successful
  entry submission.

  How it's called::

    // In system/expressionengine/controllers/cp/content_publish.php
    $view_url = $this->api_channel_entries->trigger_hook('entry_submission_redirect', $view_url);

    ...

    // In system/expressionengine/libraries/api/Api_channel_entries.php
    $loc = $this->extensions->call('entry_submission_redirect', $this->entry_id, $this->meta, $this->data, $cp_call, $orig_loc);
    if ($this->EE->extensions->end_script === TRUE)
    {
        return $loc;
    }
    return $loc;

  :param int $entry_id: Entry ID of submitted entry
  :param array $meta: Entry's metadata (``channel_id``, ``entry_date``,
    i.e. fields for ``exp_channel_titles``)
  :param array $data: Entry's field data
  :param boolean $cp_call: ``TRUE`` if the call came from the control
    panel
  :param string $view_url: Control Panel URL to view submitted entry
  :returns: URL to return to instead of ``$view_url``
  :rtype: String

  .. versionadded:: 2.0

foreign_character_conversion_array
----------------------------------

.. function:: foreign_character_conversion_array()

  Allows you to set the foreign character conversion array used to
  transliterate non-English characters for use in URLs.

  How it's called::

    $foreign_characters = $CI->extensions->call('foreign_character_conversion_array');

  :returns: Array of character ASCII values as keys and what they should
    translate to as values
  :rtype: String

  .. note:: If you only need to use one non-dynamically controlled
    array, you can simply modify
    ``system/expressionengine/config/foreign_chars.php``

  .. versionadded:: 2.0

publish_form_channel_preferences
--------------------------------

.. function:: publish_form_channel_preferences($row)

  Allows modification of channel preferences used on the publish form
  page.

  How it's called::

    $row = $this->extensions->call('publish_form_channel_preferences', $row);

  :param array $row: Selected channel preferences
  :returns: Manipulated channel preferences (``$row``)
  :rtype: Array

  .. versionadded:: 1.4.1

publish_form_entry_data
-----------------------

.. function:: publish_form_entry_data($result)

  Allows modification of entry data for the publish form when editing an
  existing entry.

  How it's called::

    $result = $this->extensions->call('publish_form_entry_data', $result);

  :param array $result: Entry data
  :returns: Manipulated entry data (``$result``)
  :rtype: Array

  .. versionadded:: 1.4.1
