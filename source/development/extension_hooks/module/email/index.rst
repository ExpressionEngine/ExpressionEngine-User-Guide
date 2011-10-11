Email Module Extension Hooks
============================

.. contents::
	:local:
	:depth: 1


email\_module\_send\_email\_end
-------------------------------

After emails are sent, do some additional processing

::

	$edata = $this->extensions->call('email_module_send_email_end', $subject, $message, $approved_tos, $approved_recipients); if ($this->extensions->end_script === TRUE) return;

$subject
~~~~~~~~

The sanitized and parsed subject of the email

$message
~~~~~~~~

The sanitized and parsed body of the email

$approved\_tos
~~~~~~~~~~~~~~

Array of email addresses sent from the form's "to" field

$approved\_recipients
~~~~~~~~~~~~~~~~~~~~~

Array of email addresses specified in the tag as recipients

:returns:
    void

Added in v1.5.1

email\_module\_tellafriend\_override
------------------------------------

Allow use of Tell-A-Friend for things besides channel entries

::

	$tagdata = $this->extensions->call('email_module_tellafriend_override', $qstring, $this); if ($this->extensions->end_script === TRUE) return $tagdata;

$qstring
~~~~~~~~

Query string without comments or pagination information

$this
~~~~~

The Email class object with its various variables

:returns:
    String

Added in v1.5.1
