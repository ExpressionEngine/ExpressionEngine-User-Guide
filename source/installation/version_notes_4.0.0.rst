#######################
Version Notes for 4.0.0
#######################

Text field types that have been set to a number content type will now show zero by default when empty.

The control panel template setting 'Save templates as text files' has been removed from the control panel.  It now defaults to ``y`` and can only be overridden
via :ref:`configuration override <overrides-save-tmpl-files>`

Developers: The default character set for the database has changed to ``utf8mb4``. If you have an INDEX on any text column that is larger than 191, you will need either resize the column, drop the index, or resize the index to 191 characters.
