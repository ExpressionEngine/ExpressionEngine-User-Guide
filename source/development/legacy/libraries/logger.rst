.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Logger Class
============

.. contents::
  :local:
  :depth: 1

.. highlight:: php

Calling the Logger Class
------------------------

.. class:: Logger

  Load the Logger library. ::

    ee()->load->library('logger');

Developer Log
-------------

The control panel contains a developer log, which is a log for
ExpressionEngine and its third-party developers to bring notices or
warnings to the attention of the Super Admin.

**Control Panel Location:** :menuselection:`Developer --> Logs --> Developer`

For example, EllisLab uses the developer log to warn developers if a core
function that is planned to be deprecated is being used by any third-party
add-ons.

.. method:: developer($data[, $update = FALSE[, $expires = 0]])

  To use the developer log to log your own events, notices or warnings that
  need to be brought to the attention of the Super Admin, call this method
  and pass the string of the notice::

    ee()->logger->developer('Log message.');

  :param string $data: Message to send to the developer log
  :param boolean $update: ``TRUE`` if you want to update a previous
    message instead of creating a new one. This is good for situations
    where a notice does not need to be logged each time it's triggered,
    but still needs the Super Admin's attention.
  :param integer $expires: Amount of time where you should only show one
    meessage. For example, if an item should only show once per week, an
    item is logged with an expires time of 604800 seconds.
  :returns: Array of data for the log message
  :rtype: Array

  .. note:: Be conscious of how often the developer() method is used so as
    not to clutter the developer log and run unnecessary queries.
