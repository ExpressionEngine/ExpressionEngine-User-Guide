Design Controller Extension Hooks
=================================

.. contents::
	:local:
	:depth: 1


edit\_template\_start
---------------------

Additional processing / take over at the beginning of the
edit\_template() method. ::

	$edata = $this->extensions->call('edit_template_start', $query, $template_id, $message); if ($this->extensions->end_script === TRUE) return;

$query
~~~~~~

Database result object for the selected template

$template\_id
~~~~~~~~~~~~~

Template ID of the selected template

$message
~~~~~~~~

Update / Error message from update action, if applicable

:returns:
    void

Added in v1.6.0

update\_template\_end
---------------------

Additional processing after a template is updated

::

	$edata = $this->extensions->call('update_template_end', $template_id, $message); if ($this->extensions->end_script === TRUE) return;

$template\_id
~~~~~~~~~~~~~

Template ID of the updated template

$message
~~~~~~~~

Update / Error message from update action

:returns:
    void

Added in v1.6.0
