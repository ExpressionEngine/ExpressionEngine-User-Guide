Update Notes for Version 2.1.2
==============================


Global Theme Changes
--------------------

Themes were update to replace max_length with maxlength in form
elements.

Themes were update to ensure that the maxlength attribute in forms
properly reflected validation and database settings for each of the
standard member variables.

Profile Theme Changes
---------------------

This change was across profile themes. In the default themes, this
affected: themes/profile_themes/default/email_prefs_form.html.

Agile theme only: Added a missing quote to the Preview Messages Member
template.

If using the Agile theme, replace the existing preview\_messages.html
with.

::

    <!-- Template Private Message - Preview -->      
    <h3>{lang:preview_message}</h3> 
    <table class="member_table">
        <tr> 
            <td>{include:parsed_message}</td>
        </tr>
    </table> <!-- End Template Private Message - Preview -->


Language Additions
------------------

ExpressionEngine 2.1.2 has a number of language file additions. To
assist translators in updating their language packs, a :download:`language notes
text file <language_notes_2.1.2.txt>` has been provided. This text file
lists all of the new language keys, separated by the each language file
that contains changes. To update your language pack, you can download
this text file, make the changes, and simply copy the new keys to the
appropriate language files.

This change was across profile themes. In the default themes, this
affected: themes/profile_themes/default/email_prefs_form.html.

Agile theme only: Added a missing quote to the Preview Messages Member
template.


Comment Module Changes
----------------------

Alterations made to frontend Comment Editing

Edits are now run through the Secure Forms check (if enabled). If Secure
Forms is enabled, a proper security hash must be sent in order for the
edit to be accepted. This also required a change in the response. All
responses are now arrays. Your JavaScript will need to be updated in
response to these changes. Please see :ref:`Comment
Editing <comment-editing>` for a current
example.

Developers
----------

Alterations made to the entry_submission_absolute_end hook
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Added a new parameter $loc and moved the hook from the Channel Entries
API (where it was not being called) to Content Publish. See `Content
Publish Controller Extension
Hooks <../development/extension_hooks/cp/content_publish/index.html>`_.

New Fieldtype method settings_modify_column()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Added a new method settings_modify_column($params) to the custom field
types. See `Fieldtypes Functions
Reference <../development/fieldtypes.html#functions>`_.

:ref:`Return to Update Page <update-additional-steps>`


