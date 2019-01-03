.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Email Module Extension Hooks
============================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

email_module_send_email_end
---------------------------

.. function:: email_module_send_email_end($subject, $message, $approved_tos, $approved_recipients)

  After emails are sent, do some additional processing.

  How it's called::

    ee()->extensions->call('email_module_send_email_end', $subject, $message, $approved_tos, $approved_recipients);
    if (ee()->extensions->end_script === TRUE) return;

  :param string $subject: Sanitized and parsed subject of the email
  :param string $message: Sanitized and parsed body of the email
  :param array $approved_tos: Email addresses in the form's "to" field
  :param array $approved_recipients: Email addresses specified in the
    tag as recipients
  :rtype: Void

  .. versionadded:: 1.5.1

email_module_tellafriend_override
---------------------------------

.. function:: email_module_tellafriend_override($qstring, $this)

  Allow use of Tell-A-Friend for things besides channel entries.

  How it's called::

    $tagdata = ee()->extensions->call('email_module_tellafriend_override', $qstring, $this);
    if (ee()->extensions->end_script === TRUE) return $tagdata;

  :param string $qstring: Query string without comments or pagination
    information
  :param object $this: Email object
  :returns: Rendered tagdata
  :rtype: String

  .. versionadded:: 1.5.1
