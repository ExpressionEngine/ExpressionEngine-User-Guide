Times, Localization, and Entry Dates
====================================

The Entry Time jumps when updating an entry.

Troubleshooting Localization
----------------------------

When setting up the ExpressionEngine installation ensure that several
settings are accurate:

-  :menuselection:`Admin --> Localization Settings` are set properly for the hosting
   server's environment.
-  :menuselection:`My Account --> Localization Settings` are set appropriately for the
   visiting user's environment.

.. note:: ExpressionEngine does not auto-detect localization settings
   so these must be updated by the administrator and user when they
   change in that environment's time zone.

If the time an entry was posted should not have any reference to the
localization of the author, then use
:ref:`channel_entries_gmt_entry_date`.


