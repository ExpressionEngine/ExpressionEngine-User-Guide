Third Party Package Structure
=============================

Third Party Add-ons in ExpressionEngine are organized into "packages".
An add-on package can include Plugins, Modules, Extensions, and control
panel Accessories. Additionally, an add-on package can use its own
libraries, models, helpers, views, and language files. Below is a sample
map of an add-on package directory, with a break-down of each file's
purpose.

Sample Package "Foo Bar" Directory Map
--------------------------------------

The following is an example of a directory for an add-on package named
"Foo Bar". It's a dense add-on complete with an Accessory, an Extension,
a Module, its own helpers, libraries, models, views, and language
resources. Note that in this example that a Plugin file is also
included. In a real add-on, you would not have both a module and a
plugin, since the module's front-end file can handle any tasks that a
plugin is needed for except field formatting, and we strongly encourage
formatting plugins to be distributed as separate add-ons. ::

	/system/expressionengine/third_party/foo_bar
		acc.foo_bar.php
		config/
		ext.foo_bar.php
		helpers/
		javascript/
		language/
		libraries/
		mcp.foo_bar.php
		mod.foo_bar.php
		models/
		pi.foo_bar.php
		upd.foo_bar.php
		views/

Details of the "Foo Bar" Package Structure
------------------------------------------

Below are the details of the significance of each file and directory,
along with the required naming convention for the PHP class in each
add-on file.

acc.foo\_bar.php
~~~~~~~~~~~~~~~~

Control Panel Accessory File

**File Naming Convention:** acc.*package\_name*.php

**PHP Class Name:** Foo\_bar\_acc Package name with underscores in place
of spaces, capitalized first letter only, and **\_acc** suffix.

config/
~~~~~~~

(optional) Folder containing config files - see the CodeIgniter user
guide section on `Config
Files <http://codeigniter.com/user_guide/libraries/config.html>`_ for
details. You are responsible for uniquely prefixing your config keys.

See also `help\_menu.php <conversion/modules.html#help_menu>`_ - an
optional ExpressionEngine Help menu config file to provide context
sensitive help in your module control panel pages.

ext.foo\_bar.php
~~~~~~~~~~~~~~~~

Extension File

**File Naming Convention:** ext.*package\_name*.php

**PHP Class Name:** Foo\_bar\_ext Package name with underscores in place
of spaces, capitalized first letter only, and **\_ext** suffix.

helpers/
~~~~~~~~

(optional) Folder containing Helper files - see the CodeIgniter user
guide section on `Helper
Functions <http://codeigniter.com/user_guide/general/helpers.html>`_ for
details.

javascript/
~~~~~~~~~~~

(optional) Folder containing javascript files - refer to the `cp library
documentation <usage/cp.html#load_package_js>`_ on how to include these
files.

language/
~~~~~~~~~

Folder containing language files, with subfolders for each language.
Example::

	language/english/foo_bar_lang.php language/spanish/foo_bar_lang.php

mcp.foo\_bar.php
~~~~~~~~~~~~~~~~

Module Control Panel File

**File Naming Convention:** mcp.*package\_name*.php

**PHP Class Name:** Foo\_bar\_mcp Package name with underscores in place
of spaces, capitalized first letter only, and **\_mcp** suffix.

mod.foo\_bar.php
~~~~~~~~~~~~~~~~

Module Front End File

**File Naming Convention:** mod.*package\_name*.php

**PHP Class Name:** Foo\_bar Package name with underscores in place of
spaces, capitalized first letter only.

models/
~~~~~~~

(optional) Folder containing data model class files - see the
CodeIgniter user guide section on
`Models <http://codeigniter.com/user_guide/general/models.html>`_ for
more details.

pi.foo\_bar.php
~~~~~~~~~~~~~~~

Plugin File

**File Naming Convention:** pi.*package\_name*.php

**PHP Class Name:** Foo\_bar Package name with underscores in place of
spaces, capitalized first letter only.

upd.foo\_bar.php
~~~~~~~~~~~~~~~~

Module Installer / Update File

**File Naming Convention:** upd.*package\_name*.php

**PHP Class Name:** Foo\_bar\_upd Package name with underscores in place
of spaces, capitalized first letter only, and **\_upd** suffix.

views/
~~~~~~

(optional) Folder containing view files - see the CodeIgniter user guide
section on
`Views <http://codeigniter.com/user_guide/general/views.html>`_ for more
details.
