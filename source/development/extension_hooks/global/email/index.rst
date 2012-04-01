Email Library Extension Hooks
=============================

.. contents::
	:local:
	:depth: 1


email_send
----------

Modify email headers, recipients and body data, and optionally take over
email sending completely. ::

	$ret = $this->EE->extensions->call(
	    'email_send',
	    array(
	        &$this->_headers,     // Email headers array
	        &$this->_header_str,  // Header string
	        &$this->_recipients,  // Recipients string
	        &$this->_cc_array,    // CC recipients, populated by Email::cc()
	        &$this->_bcc_array,   // BCC recipients, populated by Email::bcc()
	        &$this->_subject,     // Email subject
	        &$this->_finalbody    // Final email body text
	    )
	);
	
	// If the extension decides to take over sending of the email,
	// end_script should be set to TRUE, and _spool_email will return
	// the extension's return value, preferably a boolean indicating
	// success or failure
	if ($this->EE->extensions->end_script === TRUE)
	{
	    return $ret;
	}

The email data is sent in a single array
`by reference <http://php.net/manual/en/language.references.pass.php>`_ so
data may be altered without needing to return the altered data.

:returns:
    Boolean

Added in v2.5.0