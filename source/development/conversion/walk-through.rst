Module Conversion Walk-through
==============================

#. `Create Update File <#update_file>`_
#. `Modify Language File <#lang_file>`_
#. `Modify Core Module File (mod.package\_name.php) <#module_file>`_
#. `Create View Files (Optional) <#views>`_
#. `Modify Control Panel File (mcp.package\_name.php) <#mcp_file>`_

Create Update File
------------------

Every module must have a upd.package\_name.php with at least three
methods: install(), uninistall(), update().

#. Copy your mcp.package\_name.php file and rename it
   upd.package\_name.php
#. Rename class upd.package\_name.php to Package\_name\_upd and
   constructor to \_\_construct()
#. Remove all methods except module\_install(), module\_deinstall(), any
   upgrade method, and any dependencies
#. Rename the methods: module\_install => install, module\_deinstall =>
   uninstall.
#. Make sure you have a method named update and that it accepts one
   argument $current, which will be the current installed version of the
   module in the database::

	function update($current = '')

#. Convert any relevant syntax to the :doc:`new format <syntax>`.
#. Make certain your queries are converted to use :ellislab:`active
   record </codeigniter/user-guide/database/active_record.html>`
   or :ellislab:`database forge 
   </codeigniter/user-guide/database/forge.html>` (for database 
   manipulation).
#. Save- you're done with your update file!

.. note:: If your module requires user input to complete the install,
   that should occur on first-run of the module control panel, and not
   the primary installer. This allows your module to be installed during
   the ExpressionEngine installer process. See the Wiki module for an
   example if needed.

Modify Language File
--------------------

#. The lang.package\_name.php file must be renamed
   package\_name\_lang.php.
#. Rename the $L array containing language variables to $lang.

Modify Core Module File (mod.package\_name.php)
-----------------------------------------------

Converting the mod.package\_name.php file is simply a matter of altering
the existing syntax. See :doc:`the syntax conversion notes <syntax>`
for more detail. Don't forget to:

-  Call the super object
-  Switch to active record for your queries
-  Take advantage of the new :doc:`Template variable parser 
   </development/usage/template>`

Modify Control Panel File (mcp.package\_name.php)
-------------------------------------------------

The control panel uses an MVC development approach, and your module can
take advantage of this by using view files instead of creating your
markup in your controller. If you've never worked with MVC or view files
before, please read the :ellislab:`overview of views
</codeigniter/user-guide/general/views.html>` in the CodeIgniter user
guide.

View files for your module will reside within a folder named views
within your module's folder. ExpressionEngine will automatically look in
that path to find your view files, allowing you to use them thusly::

	return $this->EE->load->view('index', $vars, TRUE);

Note in the above example that the third argument of view() is being
used so that instead of being added to existing output, it is returned
as a string, and that the value is being returned by the method. In this
example, the view file named index.php in the module's views folder
would be loaded, and variables are supplied to it via the $vars array.

If for some reason you do not wish to use views, you can still build
your output directly in the controller method and return it as a string.
In fact, you are still returning a string when you use view files, but
it is an easier to edit and more organized developmental strategy.

#. Rename class and constructor to use \_mcp suffix instead of \_CP.
#. Convert your syntax
#. Remove the deprecated Display class
#. Specify a few cp variables in each method that is accessed directly.
   You need to set the page title (cp\_page\_title variable) and the
   base breadcrumb link using this format::

	$this->EE->cp->set_breadcrumb(BASE.AMP.'C=addons_modules'.AMP.'M=show_module_cp'.AMP.'module=package_name', lang('package_name_module_name'));
	$this->EE->view->cp_page_title = lang('package_name_module_name');

#. If the method is loading a view, load any dependences (such as the
   table class or form helper) before loading the view.

::

	$this->EE->load->library('table');
	$this->EE->load->helper('form');

#. If you are using jQuery in your control panel, initialize and compile
   it in your controller before loading your view or returning your
   string.
#. If you are loading a view file, be certain all variables needed for
   display are defined in the $vars array. Array keys will correspond to
   the variable name in the view file.
#. Pass those variables to the appropriate view via::

	return $this->EE->load->view('view_filename', $vars, TRUE);

#. Celebrate, you're done!

