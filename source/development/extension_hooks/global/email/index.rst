Email Library Extension Hooks
=============================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

email_send
----------

.. function:: email_send(&$data)

  Modify email headers, recipients and body data, and optionally take
  over email sending completely.

  How it's called::

    $ret = $this->EE->extensions->call(
        'email_send',
        array(
            'headers'       => &$this->_headers,     // Email headers array
            'header_str'    => &$this->_header_str,  // Header string
            'recipients'    => &$this->_recipients,  // Recipients string
            'cc_array'      => &$this->_cc_array,    // CC recipients, populated by Email::cc(), used by SMTP
            'bcc_array'     => &$this->_bcc_array,   // BCC recipients, populated by Email::bcc(), used by SMTP
            'subject'       => &$this->_subject,     // Email subject
            'finalbody'     => &$this->_finalbody    // Final email body text
        )
    );

    if ($this->EE->extensions->end_script === TRUE)
    {
        return $ret;
    }

  .. note:: If the extension decides to take over sending of the email,
    ``end_script`` should be set to ``TRUE``, and ``_spool_email`` will
    return the extension's return value, preferably a boolean indicating
    success or failure

  :param array &$data: Array of data about email to be sent (see above)
    passed `by reference
    <http://php.net/manual/en/language.references.pass.php>`_ so data
    may be altered without needing to return the altered data
  :returns: ``TRUE`` if successfully sent, ``FALSE`` if not
  :rtype: Boolean

  .. versionadded:: 2.5.0
