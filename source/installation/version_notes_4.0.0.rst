#######################
Version Notes for 4.0.0
#######################

.. contents::
   :local:
   :depth: 1

==================================
PHP & MySQL Requirements Increased
==================================

Please see the :doc:`/installation/requirements` for details.' The MySQL version increase was largely to allow Emoji support, details below.

===================================
Templates Now Always Saved as Files
===================================

Saving templates as files is the new gold standard. As part of this, the control panel template setting 'Save templates as text files' has been removed from the control panel.  It now defaults to ``y`` and can only be overridden
via :ref:`configuration override <overrides-save-tmpl-files>`

====================================
Emoji Support for Third-party Tables
====================================

Third-party Developers: The default character set for the database has changed to ``utf8mb4``. If you have an INDEX on any text column that is larger than 191, you will need either resize the column, drop the index, or resize the index to 191 characters. To update an existing ExpressionEngine install that was using ``utf``, you can convert your database to take advantage of this using the `Emoji Support utility <https://github.com/EllisLab/Emoji-Support>`_.

====================
Member Field Changes
====================

The following fields are no longer default member fields: url, location, occupation, interests, bday_d, bday_m, bday_y, aol_im, yahoo_im, msn_im, icq, bio. Any of the fields that had content in them were replaced by custom member fields with the same name. The variables have been removed from the member templates, though they will display as custom field data if a custom field was created.

Member bday_d, bday_m, bday_y default member fields were replaced by a birthday date field.

===============
Emoticon Module
===============

The Emoticon module has been replaced with the Emoji module. The Emoticon module will be removed in ExpressionEngine 5, so you will want to replace your ``{exp:emoticon}`` tags with ``{exp:emoji:emoji_list}`` tags. The Emoji module's tags are vastly superior to the old Emoticon module. Please see the :doc:`/add-ons/emoji/index` module documentation for details.

=======================
Reserved Word Additions
=======================

- ``content`` is now a reserved word and will conflict with your Fluid Fields. Rename the field(s) and update your templates accordingly.

=============
Other Changes
=============

- Text field types that have been set to a number content type will now show zero by default when empty.
- The underlying storage schema for Channel Entries has changed. Existing fields will not be modified, as trying to perform the necessary MySQL options via an HTTP request with the updater would not be reliable. In time, a migration utility will be made available for those who want their pre-v4 channel fields to use the new storage schema. In the meantime, there are **no functional differences** between legacy fields and new, except that legacy fields cannot be shared across Sites in the Site Manager. All of your channel entries tags and even manual SQL that accesses legacy fields will continue to work as normal.
