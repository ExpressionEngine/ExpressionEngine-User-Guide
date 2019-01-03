.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Times, Localization, and Entry Dates
====================================

The Entry Time jumps when updating an entry.

Troubleshooting Localization
----------------------------

When setting up the ExpressionEngine installation ensure that several
settings are accurate:

-  :menuselection:`Settings --> General Settings` are set properly for the hosting
   server's environment.
-  :menuselection:`Profile --> Personal Settings` are set appropriately for the
   visiting user's environment.

.. note:: ExpressionEngine does not auto-detect localization settings
   so these must be updated by the administrator and user when they
   change in that environment's time zone.

If the time an entry was posted should not have any reference to the
localization of the author, then use
:ref:`channel_entries_gmt_entry_date`.


