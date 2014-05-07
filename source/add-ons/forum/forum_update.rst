Updating to a Newer Version
===========================

  .. note:: Before updating to a new version of the Discussion Forum
   module insure that you are running the latest version of
   ExpressionEngine.

These instructions are only applicable for
*updating* an existing installation. If you have not installed the
Discussion Forum Module yet, follow the :doc:`Installation
Instructions <forum_installation>`.

Step 1
------

The first step is to
`download <https://store.ellislab.com/manage>`_ the most
current version of the Discussion Forum Module. Once you have downloaded
it, Unzip the software to your local computer.

Step 2
------

Inside the unzipped software, you will find a folder called forum.

Using an FTP program, upload this folder and everything inside it to
your server at this location:

system/expressionengine/modules/

You will replace the existing forum folder with the new one,
ending up with this:

system/expressionengine/modules/forum/

Step 3
------

Inside the unzipped software you will also find two language files:

-  forum_lang.php
-  forum_cp_lang.php

Upload these two files into your
system/expressionengine/language/english/ directory on your server,
replacing the existing ones. You should end up with:

-  system/expressionengine/language/english/forum_lang.php
-  system/expressionengine/language/english/forum_cp_lang.php

Step 4
------

Log into your ExpressionEngine Control Panel and visit
:menuselection:`Add-ons --> Modules --> Discussion Forum`.
This will cause ExpressionEngine to automatically perform
any internal updates that are needed for the new version.

.. important:: When you click on the link to the Discussion Forum
   module, the update will begin taking place. Do not close your browser
   window or click on any links until the page has finished loading.
   Depending on the size of your forums, the update may take several
   seconds to complete.

Step 5: Version Specific Notes
------------------------------

Please view the update notes that apply to any versions that are newer
than the version you have been running.

-  :doc:`Version Notes 3.1.16 <forum_update_notes_3.1.16>`
-  :doc:`Version Notes 3.1.15 <forum_update_notes_3.1.15>`
-  :doc:`Version Notes 3.1.14 <forum_update_notes_3.1.14>`
-  :doc:`Version Notes 3.1.5 <forum_update_notes_3.1.5>`
-  :doc:`Version Notes 3.1.4 <forum_update_notes_3.1.4>`
-  :doc:`Version Notes 3.1.3 <forum_update_notes_3.1.3>`
-  :doc:`Version Notes 3.1.2 <forum_update_notes_3.1.2>`
-  :doc:`Version Notes 3.1.1 <forum_update_notes_3.1.1>`
-  :doc:`Version Notes 3.1.0 <forum_update_notes_3.1.0>`
-  :doc:`Version Notes 3.0.1 <forum_update_notes_3.0.1>`
-  :doc:`Version Notes 3.0.0 <forum_update_notes_3.0.0>`
-  :doc:`Version Notes 2.1.2 <forum_update_notes_2.1.2>`
-  :doc:`Version Notes 2.1.1 <forum_update_notes_2.1.1>`
-  :doc:`Version Notes 2.1 <forum_update_notes_2.1>`
-  :doc:`Version Notes 2.0 <forum_update_notes_2.0>`
-  :doc:`Version Notes 1.3.2 <forum_update_notes_1.3.2>`
-  :doc:`Version Notes 1.3.1 <forum_update_notes_1.3.1>`
-  :doc:`Version Notes 1.3 <forum_update_notes_1.3>`
-  :doc:`Version Notes 1.2 <forum_update_notes_1.2>`
-  :doc:`Version Notes 1.1.1 <forum_update_notes_1.1.1>`
-  :doc:`Version Notes 1.1 <forum_update_notes_1.1>`

*You're done!*
--------------

