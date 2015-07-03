Module Conversion Walk-through
==============================

.. highlight:: php

#. `Create addon.setup.php File`_
#. `Modify Control Panel File (mcp.package_name.php)`_
#. `Modify Plugin File (pi.package_name.php)`_

Create ``addon.setup.php`` File
-------------------------------

Modify Control Panel File (``mcp.package_name.php``)
----------------------------------------------------

.. note:: The following text needs to be edited for it is wrong for 3.0

The control panel uses an MVC development approach, and your module can
take advantage of this by using view files instead of creating your
markup in your controller. If you've never worked with MVC or view files
before, please read the :ellislab:`overview of views
</codeigniter/user-guide/general/views.html>` in the CodeIgniter user
guide.

View files for your module will reside within a folder named views
within your module's folder. ExpressionEngine will automatically look in
that path to find your view files, allowing you to use them thusly::

  return ee()->load->view('index', $vars, TRUE);

Note in the above example that the third argument of ``view()`` is being
used so that instead of being added to existing output, it is returned
as a string, and that the value is being returned by the method. In this
example, the view file named ``index.php`` in the module's views folder
would be loaded, and variables are supplied to it via the ``$vars``
array.

If for some reason you do not wish to use views, you can still build
your output directly in the controller method and return it as a string.
In fact, you are still returning a string when you use view files, but
it is an easier to edit and more organized developmental strategy.

#. Rename class and constructor to use ``_mcp`` suffix instead of
   ``_CP``.
#. Convert your syntax
#. Remove the deprecated Display class
#. Specify a few cp variables in each method that is accessed directly.
   You need to set the page title (``cp_page_title`` variable) and the
   base breadcrumb link using this format::

    ee()->cp->set_breadcrumb(BASE.AMP.'C=addons_modules'.AMP.'M=show_module_cp'.AMP.'module=package_name', lang('package_name_module_name'));
    ee()->view->cp_page_title = lang('package_name_module_name');

#. If the method is loading a view, load any dependences (such as the
   table class or form helper) before loading the view::

    ee()->load->library('table');
    ee()->load->helper('form');

#. If you are using jQuery in your control panel, initialize and compile
   it in your controller before loading your view or returning your
   string.
#. If you are loading a view file, be certain all variables needed for
   display are defined in the ``$vars`` array. Array keys will
   correspond to the variable name in the view file.
#. Pass those variables to the appropriate view via::

    return ee()->load->view('view_filename', $vars, TRUE);

#. Celebrate, you're done!


Modify Plugin File (``pi.package_name.php``)
--------------------------------------------
