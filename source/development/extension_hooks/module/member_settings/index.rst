Member Module Settings Extension Hooks
======================================

.. contents::
	:local:
	:depth: 1


member\_edit\_preferences
-------------------------

Allows adding of preferences to user side preferences form by modifying
the preference form template

::

	$element = $this->extensions->call('member_edit_preferences', $element);

$element
~~~~~~~~

Preference form template

:returns:
    String

Added in v1.4.0

member\_update\_preferences
---------------------------

Allows updating of added preferences via user side preferences form

::

	$edata = $this->extensions->call('member_update_preferences', $data); if ($this->extensions->end_script === TRUE) return;

$data
~~~~~

Array of data from standard form

:returns:
    void

Added in v1.4.0
