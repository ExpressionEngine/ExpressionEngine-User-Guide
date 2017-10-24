#######################
Version Notes for 4.0.0
#######################

Text field types that have been set to a number content type will now show zero by default when empty.

The control panel template setting 'Save templates as text files' has been removed from the control panel.  It now defaults to ``y`` and can only be overridden
via :ref:`configuration override <overrides-save-tmpl-files>`

The following fields are no longer default member fields: url, location, occupation, interests, bday_d, bday_m, bday_y, aol_im, yahoo_im, msn_im, icq, bio. Any of the fields that had content in them were replaced by custom member fields with the same name. The variables have been removed from the member templates, though they will display as custom field data if a custom field was created.

Member bday_d, bday_m, bday_y default member fields were replaced by a birthday date field.

