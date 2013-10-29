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
formatting plugins to be distributed as separate add-ons::

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

acc.foo_bar.php
~~~~~~~~~~~~~~~

Control Panel Accessory File

**File Naming Convention:** ``acc.package_name.php``

**PHP Class Name:** ``Foo_bar_acc`` Package name with underscores in
place of spaces, capitalized first letter only, and ``_acc`` suffix.

config/
~~~~~~~

(optional) Folder containing config files - see the CodeIgniter user
guide section on :ellislab:`Config Files
</codeigniter/user-guide/libraries/config.html>` for details. You are
responsible for uniquely prefixing your config keys.

See also :doc:`help_menu.php </development/conversion/modules>` - an
optional ExpressionEngine Help menu config file to provide context
sensitive help in your module control panel pages.

ext.foo_bar.php
~~~~~~~~~~~~~~~

Extension File

**File Naming Convention:** ``ext.package_name.php``

**PHP Class Name:** ``Foo_bar_ext`` Package name with underscores in
place of spaces, capitalized first letter only, and ``_ext`` suffix.

helpers/
~~~~~~~~

(optional) Folder containing Helper files - see the CodeIgniter user
guide section on :ellislab:`Helper Functions
</codeigniter/user-guide/general/helpers.html>` for details.

javascript/
~~~~~~~~~~~

(optional) Folder containing javascript files - refer to the :doc:`cp
library documentation </development/usage/cp>` on how to include these
files.

language/
~~~~~~~~~

Folder containing language files, with subfolders for each language.
Example::

  language/english/foo_bar_lang.php language/spanish/foo_bar_lang.php

mcp.foo_bar.php
~~~~~~~~~~~~~~~

Module Control Panel File

**File Naming Convention:** ``mcp.package_name.php``

**PHP Class Name:** ``Foo_bar_mcp`` Package name with underscores in place
of spaces, capitalized first letter only, and ``_mcp`` suffix.

mod.foo_bar.php
~~~~~~~~~~~~~~~

Module Front End File

**File Naming Convention:** ``mod.package_name.php``

**PHP Class Name:** ``Foo_bar`` Package name with underscores in place
of spaces, capitalized first letter only.

models/
~~~~~~~

(optional) Folder containing data model class files - see the
CodeIgniter user guide section on :ellislab:`Models
</codeigniter/user-guide/general/models.html>` for more details.

pi.foo_bar.php
~~~~~~~~~~~~~~

Plugin File

**File Naming Convention:** ``pi.package_name.php``

**PHP Class Name:** ``Foo_bar`` Package name with underscores in place of
spaces, capitalized first letter only.

upd.foo_bar.php
~~~~~~~~~~~~~~~

Module Installer/Update File

**File Naming Convention:** ``upd.package_name.php``

**PHP Class Name:** ``Foo_bar_upd`` Package name with underscores in place
of spaces, capitalized first letter only, and ``_upd`` suffix.

views/
~~~~~~

(optional) Folder containing view files - see the CodeIgniter user guide
section on :ellislab:`Views
</codeigniter/user-guide/general/views.html>` for more details.
