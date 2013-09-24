Update Notes for Version 2.6
============================

Relationships
----------------------

Relationships was completely rewritten for this version, adding the ability to
create multiple relationships for each entry and introducing a friendly new tag
syntax. The template tags :doc:`described here </modules/channel/relationships>`
are not compatible with previous versions.

Altered Language Files
----------------------

The following language files were edited:

- system/expressionengine/language/english/fieldtypes_lang.php

  - Added key: 'rel_ft_options'
  - Added key: 'rel_ft_configure'
  - Added key: 'rel_ft_configure_subtext'
  - Added key: 'rel_ft_channels'
  - Added key: 'rel_ft_include'
  - Added key: 'rel_ft_include_expired'
  - Added key: 'rel_ft_include_future'
  - Added key: 'rel_ft_categories'
  - Added key: 'rel_ft_authors'
  - Added key: 'rel_ft_statuses'
  - Added key: 'rel_ft_limit_left'
  - Added key: 'rel_ft_limit_right'
  - Added key: 'rel_ft_limit_subtext'
  - Added key: 'rel_ft_order'
  - Added key: 'rel_ft_order_title'
  - Added key: 'rel_ft_order_date'
  - Added key: 'rel_ft_order_in'
  - Added key: 'rel_ft_order_asc'
  - Added key: 'rel_ft_order_desc'
  - Added key: 'rel_ft_allow_multi'
  - Added key: 'rel_ft_allow_multi_subtext'

- system/installer/language/english/installer_lang.php

  - Edited key: 'switch_hosts'

- system/expressionengine/language/english/filemanager_lang.php

  - Added key: 'php_max_filesize'

Altered View Files
------------------

- Changed all CP view files to inherit from a master template. Please
  check your view file overrides.

SafeCracker Relationship Formatting
-----------------------------------

If you're using the relationship conditional in a SafeCracker custom field
loop, please modify your template with the new format to allow for multiple
relationship selections. An example can be found in the
:ref:`Channel Form Documentation <channel_form_examples_custom_field_loop>`.

Conditionals in Channel Entries Content
---------------------------------------

We have removed parsing for conditionals within channel entry input
data. This change does not affect the use of conditionals in templates
or the :doc:`{exp:channel:entries} </modules/channel/channel_entries>` tag
pair. While we know that some users relied on this functionality, the
vast majority of users benefit by encoding conditionals by default
within Channel Entries content. If you are using EE conditionals (or
similarly formated JavaScript, e.g. "``{if...``") in your entries, you
will need to use the `Allow EECode plugin
<https://github.com/EllisLab/Allow-Eecode>`_ in your templates to allow
EE tags and conditionals to be parsed.

:ref:`Return to Update Page <update_cleanup>`
