Field Settings
^^^^^^^^^^^^^^

Type
~~~~

ExpressionEngine includes the following types of fields for use
in your Channel Entries (add-ons can include their own as well):

#. **Checkboxes**: :doc:`Checkbox fields <../../../fieldtypes/select>` display a list of options in the
   publish form that you choose by clicking the checkboxes.
#. **Date**: :doc:`Date fields <../../../fieldtypes/date>` are designed to store dates. Next to the
   date field in your PUBLISH page you'll see a calendar and two options
   for your date:

   -  **Localized**: The date will be localized to the timezone of each
      user browsing your site.
   -  **Fixed**: The date will NOT be localized and instead shown at the
      exact date/time you submit.
#. **File**: :doc:`File fields <../../../fieldtypes/file>` store uploaded files and images, and utilize
   the build in file browser for your publishers to upload and insert
   files.
#. **Grid**: The :doc:`Grid field <../../../fieldtypes/grid>` in ExpressionEngine provides a way to group
   fieldtypes in repeatable rows.
#. **Multi Select**: :doc:`Multi Select field types <../../../fieldtypes/select>` give a list of options in
   a standard multiple selection form control, letting publishers choose
   any or none of the available items.
#. **Radio Buttons**: :doc:`Radio buttons <../../../fieldtypes/select>` are similar to Checkbox fields,
   except that you can only select one of the items from the list.
#. **Relationships**: The :doc:`Relationship field <../../../fieldtypes/relationships>` is a special and very powerful field type. It
   enables you to create relationships between two or more channels so
   you can show content from one entry within another.
#. **Rich Text Editor**: The :doc:`Rich Text Editor <../../../fieldtypes/rte>` is a text entry box with multiple
   lines that uses the built-in :doc:`/add-ons/rte/index`.
#. **Select Dropdown**: :doc:`Select fields <../../../fieldtypes/select>` are simply a standard HTML <select> drop-down
   list. You can define the contents of the list manually or
   pre-populate it from another field.
#. **Text**: The :doc:`Text field <../../../fieldtypes/text>` is a single input line for text. It is the type
   of field you might use for a title, name, or other short information.
#. **Textarea**: The :doc:`Textarea field <../../../fieldtypes/textarea>` is a standard text entry box with multiple lines.
   This is often used for the body text of entries.

Name
~~~~

This is the descriptive name for the field. This is a **required** field
and it may contain spaces or punctuation. Unlike the Field Name, the
label does not need to be unique within the system, so you can use the
same descriptive label on multiple fields in different field groups. The
label is what will be displayed next to the field on the entry form in
your PUBLISH page.

Short Name
~~~~~~~~~~

This is the internal or "short name" for the field. This is a
**required** field and must be a single word with no spaces or
punctuation. The field name must be unique within the system, which
means that you cannot have two field groups each containing a field with
the field name of "body". The short name is typically used as the
variable name in your :doc:`/channel/channel_entries`

.. note:: Some words are reserved and cannot be used. Please
   see :doc:`/general/reserved_words` for details.

Instructions
~~~~~~~~~~~~

These are instructions for authors on how or what to enter into the
field when submitting an entry. The instructions will appear below the
Field Label in your PUBLISH page.


Require field?
~~~~~~~~~~~~~~

You may determine whether this field is required. If the field is
required and the user leaves it blank, upon submission they will receive
an error message prompting them to correct it.

Include in search?
~~~~~~~~~~~~~~~~~~

This determines whether the contents of this field will be included in
searches if someone elects to search within the entry content. If you do
not select this field then searches will ignore content stored in this
field.

Hide field?
~~~~~~~~~~~

Here you determine whether or not the field will be shown or hidden on
the publish page by default. If you choose "No", the field will be
collapsed by default and in order to enter content into the field you
will first have to open using the link provided on the publish page.

Field Options
^^^^^^^^^^^^^

Each field type may have additional field options.  See the :doc:`individual field types <../../../fieldtypes/index>` for details.
