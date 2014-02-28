Installation
============

The Discussion Forum Module is simple to install.

The Discussion Forum Module requires the latest version of
ExpressionEngine.

These instructions are **only** for first-time installations. **Do not
follow the instructions below if you need to *update* your forum
installation.** Instead, follow the :doc:`Forum Update <forum_update>`
instructions.

Step 1
------

The first step is simply to download the Discussion Forum software once
you purchase it. Unzip the software to your local computer.

Step 2
------

Inside the unzipped software, you will find a forum directory. Upload
this directory and everything inside it to your server and place it in
the system/expressionengine/modules directory. You should end up with it
located at system/expressionengine/add-ons/forum/.

Step 3
------

Inside the unzipped software, you will find a forum\_themes directory.
Upload this directory and everything inside it to your server and place
it in the themes directory. You should end up with it located at
themes/forum\_themes/.

Step 4
------

Inside the unzipped software, you will find a forum\_attachments
directory. Upload this directory and everything inside it to your server
and place it in the images directory. You should end up with it located
at images/forum\_attachments/.

Step 5
------

Set the permissions of the newly uploaded images/forum\_attachments/
directory to 777 so that ExpressionEngine can place the necessary files
in it if someone includes an attachment in their forum post. If you're
on a Windows-based server you will need to ensure that the directory is
"writable".

Step 6
------

Inside the unzipped software, you will find two language files:

-  forum\_lang.php
-  forum\_cp\_lang.php

Upload these two files into your
system/expressionengine/language/english/ directory on your server. You
should end up with:

-  system/expressionengine/language/english/forum\_lang.php
-  system/expressionengine/language/english/forum\_cp\_lang.php

Step 7
------

Log into your ExpressionEngine Control Panel with a SuperAdmin user. Go
to :menuselection:`Add-Ons --> Modules`. You will see an entry listed for the "Discussion
Forum". On the right side of the table, click the Install link
corresponding to the Discussion Forum Module. This will install the
necessary database tables and settings for the forum.

You are now ready to start using your new forum!
