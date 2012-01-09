Template Library Extension Hooks
==================================

.. contents::
	:local:
	:depth: 1


template\_fetch\_template
-------------------------

Access template data prior to template parsing

::

	$this->EE->extensions->call('template_fetch_template', $row);

$row
~~~~

Array of data for the current template

:returns:
    void

Added in v2.4.0

template\_post\_parse
---------------------

Modify template after tag parsing

::

	$this->final_template = $this->EE->extensions->call('template_post_parse', $this->final_template, $sub, $site_id);

$this->final_template
~~~~~~~~~~~~~~~~~~~~~

The template string after template tags have been parsed

$sub
~~~~

Whether or not the current template is an embed

$site_id
~~~~~~~~

The site_id of the current template

:returns:
    String

Added in v2.4.0