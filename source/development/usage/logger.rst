Logger Class
============

.. contents::
	:local:
	:depth: 1

Calling the Logger Class
------------------------

Load the Logger library. ::

	$this->EE->load->library('logger');

Developer Log
-------------

The control panel contains a developer log, which is a log for
ExpressionEngine and its third-party developers to bring notices or
warnings to the attention of the Super Admin.

**Control Panel Location:** :menuselection:`Tools --> Logs --> Developer Log`

For example, EllisLab uses the developer log to warn developers if a core
function that is planned to be deprecated is being used by any third-party
add-ons.

To use the developer log to log your own events, notices or warnings that
need to be brought to the attention of the Super Admin, call this function
and pass the string of the notice::

	$this->EE->logger->developer('Log message.');

A second boolean parameter may be passed to specify if the message should
be unique in the log and not duplicated. This is good for situations where
a notice does not need to be logged each time it's triggered, but still
needs the Super Admin's attention. In the case that a message is sent to
developer() with the update flag set to TRUE, it will find the last
message that matches the string of the message, set it's viewed status to
not viewed, and update the timestamp. ::

	$this->EE->logger->developer('Unique log message.', TRUE);

A third parameter may be set if the log item should only be logged every
so often. If the second parameter is set to TRUE, the third parameter is
the amount of time in seconds to have elapsed from the initial logging to
mark as unread and alert Super Admin again. For example, if an item should
only show once per week, an item is logged with an expires time of 604800
seconds. If the developer function is called with the same data within
that period of time, it will hold off displaying a notice to the Super
Admin until the developer function is called again after the interval has
completed. This is designed to make log item alerts less annoying to the
user. ::

	$this->EE->logger->developer('Unique log message.', TRUE, 604800);

.. note:: Be conscious of how often the developer() function is used so as
	not to clutter the developer log and run unnecessary queries.
