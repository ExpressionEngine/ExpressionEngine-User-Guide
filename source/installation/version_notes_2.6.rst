Update Notes for Version 2.6
============================

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

Conditionals in Channel Entries Content
---------------------------------------

Channel entries will no longer parse EE conditionals. While we know that some
users relied on this functionality, the vast majority of users benefit by encoding
conditionals by default within Channel entries content. If you are using EE conditionals (or
similarly formated JavaScript, e.g. "``{if...``") in your entries, you will need to use the
`Allow EECode plugin <https://github.com/EllisLab/Allow-Eecode>`_ in your templates to
allow EE tags and conditionals to be parsed.

:ref:`Return to Update Page <update-additional-steps>`
