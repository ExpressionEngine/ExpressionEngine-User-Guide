Setup Domains and Sub-domains
=============================

It is recommended that you `Create a Site <createsite.html>`_ before
setting up the domain or sub-domain.

Step 1
------

Create the domain or subdomain using your webhost's tools. Typically
this will automatically create a new folder on the server that the
site's files will be served from. Please contact your host if you need
assistance with this step.

The new folder must allow files within it to access your installation's
system folder. Check with your host to ensure you don't have
"open\_basedir" or other restrictions in place which could prevent this.

Step 2
------

Copy the following files from your first (default) site's folder to your
new site's folder. We'll call the new site domain2 for the purposes of
this example.

-  admin.php
-  index.php

Example
~~~~~~~

Your single-site installation might have looked like:

::

    └── domain1.com
        ├── admin.php
        ├── index.php
        ├── images
        ├── system
        └── themes

Now that domain2 has been added, your folders might look like:

::

    └── domain1.com
        ├── admin.php
        ├── index.php
        ├── images
        ├── system
        └── themes
    └── domain2.com
        ├── admin.php
        └── index.php

Step 3
------

Open domain2's new admin.php file (this is the file that allows Control
Panel access on the new site) and make the following changes:

**Tip:** In some multi-site situations, you may not want to allow
Control Panel access from anyhere other than domain1. This file can be
removed in those cases.

System Path
~~~~~~~~~~~

Update the $system\_path variable to indicate the path from this file to
your installation's system folder. Typically this can be a relative
path, but some servers may require a full, absolute path. For example,
given the folder structure above::

	  $system_path = '../domain1.com/system/';

Multiple Site Manager
~~~~~~~~~~~~~~~~~~~~~

Uncomment the following $assign\_to\_config variables. Set the Short
Name of the site this file will log into, and this file's URL. For
example::

	  $assign_to_config['site_name'] = 'domain2_short_name';     $assign_to_config['cp_url']    = 'http://domain2.com/admin.php';

Step 4
------

Open domain2's new index.php file and make the following changes:

System Path
~~~~~~~~~~~

Update the $system\_path variable to indicate the path from this file to
your installation's system folder. Typically this can be a relative
path, but some servers may require a full, absolute path. For example::

	  $system_path = '../domain1.com/system/';

Multiple Site Manager
~~~~~~~~~~~~~~~~~~~~~

Uncomment the following $assign\_to\_config variables. Set the Short
Name of the site this file will display, the URL of this site's
admin.php file, and the main URL of the site (without index.php). For
example::

	  $assign_to_config['site_name'] = 'domain2_short_name';     $assign_to_config['cp_url']    = 'http://domain2.com/admin.php';     $assign_to_config['site_url']  = 'http://domain2.com';

Next: `Sites Variables and Parameters <code.html>`_
===================================================

