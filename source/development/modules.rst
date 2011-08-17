ExpressionEngine Modules
========================

Modules are the most complex form of add-on. They can have their own
database tables, backend control panels, tabs and fields that are
included on the publish page, as well as their own tags for use in
templates.

.. contents::
	:local:
	:depth: 1

Basic File Structure
--------------------

Modules should be placed into the third\_party folder in a package and
be named after that package name. At a minimum, there are 4 required
files for any module:

-  third\_party/module\_name/upd.module\_name.php- installs, uninstalls
   and updates the module
-  third\_party/module\_name/mcp.module\_name.php - the backend control
   panel
-  third\_party/module\_name/mod.module\_name.php - the core module
   file, which process module tags used in templates
-  third\_party/module\_name/language/english/module\_name\_lang.php -
   holds all language variables, allowing multiple language versions of
   the module

In addition to these required files, there are a number of optional
files that may be useful for modules:

-  third\_party/module\_name/tab.module\_name.php - required to add a
   tab/fields to the publish page
-  third\_party/module\_name/views/anyname.html - multiple view files
   inside the view folder are the primary method of presenting the
   backend control panel pages
-  third\_party/module\_name/libraries/anyname.php - modules may make
   use of their own libraries, either extending existing libraries or
   adding new ones for use within the module

With the possible exception of library files, file names and folders
should be lower-case and contain no spaces.

The Update file (upd.module\_name.php)
--------------------------------------

The Update file for a module includes a class with a name that is a
combination of the package's name with a '\_upd' suffix. The first
letter and only the first letter of the class name should be
capitalized. There is only one required class variable is $version,
which should indicate the current version of this module. As always, be
sure you invoke the super object in your constructor.

::

    class Module_name_upd { 

        var $version        = '1.0'; 
         
        function __construct() 
        { 
            $this->EE =& get_instance();
        }

Update File Function Reference
------------------------------

install() \*
~~~~~~~~~~~~

Installs the module, adding a record to the exp\_modules table, creates
and populates and necessary database tables, adds any necessary records
to the exp\_actions table, and if custom tabs are to be used, adds those
fields to any saved publish layouts. Returns TRUE.

-  Add the module to the exp\_modules table- this step is required. Note
   has\_cp\_backend should be 'y' if the module has a control panel, 'n'
   otherise; has\_publish\_fields' should be 'y' if the module adds
   tabs/fields to the publish page, 'n' otherwise:
   ::

       $data = array(
           'module_name' => 'Module_name' ,
           'module_version' => $this->version,
           'has_cp_backend' => 'y',
           'has_publish_fields' => 'y'
       );

           $this->EE->db->insert('modules', $data);

-  Optionally add records to the exp\_actions table- used if your module
   needs to invoke actions based on frontend behavior such as form
   submission:
   ::

       $data = array(
           'class'     => 'Module_name' ,
           'method'    => 'method_to_call'
       );

       $this->EE->db->insert('actions', $data);

-  Optionally add the publish page tab fields to any saved publish
   layouts. This is ONLY used if the module adds a tab to the publish
   page and it requires the tabs() function:
   ::

       $this->EE->load->library('layout');
       $this->EE->layout->add_layout_tabs($this->tabs(), 'module_name');

update($current = '') \*
~~~~~~~~~~~~~~~~~~~~~~~~

This function is checked on any visit to the module's control panel, and
compares the current version number in the file to the recorded version
in the database. This allows you to easily make database or other
changes as new versions of the module come out. Returns FALSE if no
update was necessary, TRUE otherwise.

$current the last recorded version of the module in the exp\_modules
table.

::

    function update($current = '')
    {
        if ($current == $this->version)
        {
            return FALSE;
        }
            
        if ($current < 2.0) 
        {
            // Do your update code here
        } 
        
        return TRUE; 
    }

uninstall() \*
~~~~~~~~~~~~~~

Deletes the module record from exp\_modules, any associated actions from
exp\_actions, and uninstalls any tables created by the module. Returns
TRUE

-  Optionally delete any publish page tab fields saved in publish
   layouts. This is ONLY used if the module adds a tab to the publish
   page and it requires the tabs() function:
   ::

       $this->EE->load->library('layout');
       $this->EE->layout->delete_layout_tabs($this->tabs(), 'module_name');

tabs()
~~~~~~

An optional function, included only if the module adds a tab to the
publish page. This function should return an multidimensional
associative array, the top array key consisting of the tab name,
followed by any field names, with each field having a variety of default
settings. Note that when the fields are added to the publish page, they
are namespaced to prevent variable collisions.

::

    function tabs()
    {
        $tabs['tab_name'] = array(
            'field_name_one'=> array(
                'visible'   => 'true',
                'collapse'  => 'false',
                'htmlbuttons'   => 'true',
                'width'     => '100%'
                ),
            'field_name_two'=> array(
                'visible'   => 'true',
                'collapse'  => 'false',
                'htmlbuttons'   => 'true',
                'width'     => '100%'
                ),                          
            );  
                    
        return $tabs;   
    }

The Language File (module\_name\_lang.php)
------------------------------------------

The Language file contains an array named $lang, which is used along
with the Language class to display text on a page in whatever language
is selected in the user's account settings. There are two required lines
in the language file for each module, which allows the name and
description of the module to be viewable on the MODULES page:

::

    $lang = array(

    // Required for MODULES page

    'my_module_module_name'     => 'Module Name',
    'my_module_module_description'  => 'Brief description of the module- displayed on the Modules page',

    //----------------------------------------

    // Additional Key => Value pairs go here

    // END
    ''=>''
    );

module tab label
~~~~~~~~~~~~~~~~

In addition to the two required fields you can have a custom tab label
for your publish fields. Just assign the desired label to a key which
shares the name of your module name.

::

    // Additional Key => Value pairs go here
        
    /**
     * Tab Label for publish fields
     *
     * Assign the label you wish to use to the module_name array key
     * Remember only alphanumeric characters, underscores, dashes and spaces are allowed. 
     */

    'module_name'=>'Tab label'

The Tab File (tab.module\_name.php)
-----------------------------------

This is an optional file, required only if your module needs to include
a tab on the publish page. It must have a class with a name that is a
combination of the package's name with a '\_tab' suffix. There are no
required class variables, though be sure you invoke the super object in
your constructor. Because multiple modules may be adding fields to the
publish page, all third party tab fields are namespaced using the
package name when displayed on the publish page. This namespacing will
be stripped prior to any data being returned to the tab functions.

Note: if your module includes a tab, do not forget to indicate this in
the update file when installing the module. Further, be sure to include
the tabs() function in the update file, and use it when updating custom
layouts on installation and uninstallation.

Tab File Function Reference
---------------------------

publish\_tabs($channel\_id, $entry\_id = '') \*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This function creates the fields that will be displayed on the publish
page. It must return $settings, a multidimensional associative array
specifying the display settings and values associated with each of your
fields.

$channel\_id the channel\_id the entry is currently being created in.

$entry\_id the entry\_id if this is an edit, empty otherwise.

The settings array elements:

field\_id
^^^^^^^^^^

The name of the field

field\_label
^^^^^^^^^^^^

The field label- typically a language variable is used here

field\_required
^^^^^^^^^^^^^^^

Indicates whether to include the 'required' class next to the field label: y/n

field\_data
^^^^^^^^^^^

The current data, if applicable.

field\_list\_items
^^^^^^^^^^^^^^^^^^

An array of options, otherwise an empty string.

options
^^^^^^^

An array of options, otherwise an empty string.

selected
^^^^^^^^

The selected value if applicable to the field\_type

field\_fmt
^^^^^^^^^^

Allowed field format options, if applicable: an associative array or empty string.

field\_instructions
^^^^^^^^^^^^^^^^^^^

Instructions to be displayed for this field in the publish page

field\_show\_fmt
^^^^^^^^^^^^^^^^

Determines whether the field format dropdown shows: y/n. Note- if
'y', you must specify the options available in field\_fmt

field\_pre\_populate
^^^^^^^^^^^^^^^^^^^^

Allows you to pre-populate a field when it is a new entry.

field\_text\_direction
^^^^^^^^^^^^^^^^^^^^^^

The direction of the text: ltr/rtl

field\_type
^^^^^^^^^^^

May be any existing field type

validate\_publish($params) \*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Allows you to validate the data after the publish form has been
submitted but before any additions to the database. Returns FALSE if
there are no errors, an array of errors otherwise.

$params a multidimensional associative array containing all of the data
available on the current submission. Note the array structure used in
the field check below:

::

    function validate_publish($params)
    {
        $errors = FALSE;
            
        if ( ! isset($params[0]['revision_post']['field_name_one']))
        {
            $errors = array(lang('required') => 'field__name_one');
        }

        return $errors;
    }

publish\_data\_db($params) \*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Allows the insertion of data after the core insert/update has been done,
thus making available the current $entry\_id. Returns nothing.

$params an associative array, the top level arrays consisting of:
'meta', 'data', 'mod\_data', and 'entry\_id'.

::

    function publish_data_db($params)
    {
        if (! isset($params['mod_data']['field_name_one'])  OR $params['mod_data']['field_name_one'] == '')
        {
            return;
        }
        
        $data = array(
            'entry_id' => $params['entry_id'],
            'file_id' => $params['mod_data']['field_name_one']
            );

            $this->EE->db->insert('table_name', $data); 
    }

publish\_data\_delete\_db($params) \*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Called near the end of the entry delete function, this allows you to
sync your records if any are tied to channel entry\_ids. Returns
nothing.

$params an array of entry\_ids.

The Control Panel File (mcp.module\_name.php)
---------------------------------------------

Used to create the backend control panel, it includes a class with a
name that is a combination of the package's name with a '\_mcp' suffix.
The first letter and only the first letter of the class name should be
capitalized. There are no required class variables. As always, be sure
you invoke the super object in your constructor. The control panel file
for a module without a backend control panel would look like:

::

    <?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

    class Module_name_mcp {

        function __construct()
        {
            $this->EE =& get_instance();
        }
    }
    // END CLASS

    /* End of file mcp.module_name.php */
    /* Location: ./system/expressionengine/third_party/modules/module_name/mcp.module_name.php */

Control Panel URLS
~~~~~~~~~~~~~~~~~~

If your module does have a backend, the url logic is very easy for a
human to parse. For example:

C=addons\_modules&M=show\_module\_cp&module=module\_name&method=add\_record.

**C=addons\_modules**
    C represents the **controller**, all of which are located in
    expressionengine/controllers/. In this example, the controller is
    'addons\_modules'. Controller names map directly to the urls.
**M=show\_module\_cp**
    M specifies the controller **method**- in this case the
    show\_module\_cp() method in the addons\_modules controller.
**module=module\_name**
    The module control panel- this is the name of your class, all lower
    case.
**method=add\_record**
    The **method** being called in the url maps directly to the method
    name in your control panel file. There is no need to route them
    manually.

Thus the above url would output whatever is returned by the
add\_record() method in your Module\_name\_mcp class. If no method is
specified, it will output the index() method by default.

Useful Control Panel Functions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

While all of the libraries and helpers from CodeIgniter and
ExpressionEngine (as well as your own libraries) are available, there
are a few CP library functions that will typically be used in any
control panel file:

-  Set the page title, which is also displayed in the breadcrumb. Any
   displayed control panel page should include a title:
   ::

       $this->EE->cp->set_variable('cp_page_title', $this->EE->lang->line('mymodule_module_name'));

-  For interior pages, you will want to add to the breadcrumb, allowing
   easy navigation back to your main page:
   ::

       $this->EE->cp->set_breadcrumb(BASE.AMP.'C=addons_modules'.AMP.'M=show_module_cp'.AMP.'module=module_name',
            $this->EE->lang->line('mymodule_module_name'));

-  If your module backend has multiple pages, you may want to create
   fourth level navigation. This is easily done in the constructor using
   the set\_right\_nav() function:
   ::

       $this->EE->cp->set_right_nav(array(
               'add_record'        => BASE.AMP.'C=addons_modules'.AMP.'M=show_module_cp'.AMP.'module=module_name'.AMP.'method=add_record'
           ));

Javascript
~~~~~~~~~~

While it is preferable that your module work for users who disable
javascript, you may well want to provide increased functionality for the
majority of users who don't. ExpressionEngine 2.x includes both its own
JavaScript library as well as the `The jQuery <http://jquery.com/>`_
JavaScript library, enabling developers to easily include JavaScript
enhancements. It is worth noting some 'best practices' when using
JavaScript in your control panel:

-  Loading jQuery plugins:
   ::

       $this->EE->cp->add_js_script(array('plugin' => 'dataTables'));

-  Outputting JavaScript to the browser:
   ::

       $this->EE->javascript->output();

-  After defining any JavaScript output, you must compile in order to
   display it.
   ::

       $this->EE->javascript->compile();

Working with Forms
~~~~~~~~~~~~~~~~~~

While creating forms for the backend is fairly routine, there are
several differences/additions worth noting:

-  The `Form Validation library <./usage/form_validation.html>`_ is the
   best means of checking submitted form data and returning in-line
   errors in the case of failed validation.
-  After form submission, you will generally want to output a success
   (or failure) message and redirect to a new page.
   ::

       $this->EE->session->set_flashdata('message_success', $this->EE->lang->line('record_added'));
       $this->EE->functions->redirect(BASE.AMP.'C=addons_modules'.AMP.'M=show_module_cp'.AMP.'module=module_name');    

Outputting Pages
~~~~~~~~~~~~~~~~

There are two ways to output content to the screen. For very simple
pages, you may want to simply return the desired output in a string. Any
string that the method returns is placed inside the cp page's content
container. With all but the simplest of output, the use of View files
will be the preferred method for handling your markup and presentation.

View Files
----------

While you aren't required to use views to create your backend pages,
they are the most modular and easy to read, modify, and edit approach to
building control panel pages. A view is simply an html page, or snippet
of a page, with some minimal php used to output variables. The variables
are passed to the view in an array when you load it. Setting the third
parameter of the load call to true will return the view to you as a
string:

::

    return $this->EE->load->view('index', $vars, TRUE); 

This would return the index.php view page, located in a **views**
folder. The view file is passed an array with all of the variables used
by the view, and those variables are simple 'plugged into' the html.

It is recommended that in view pages only, you use the `PHP's alternate
syntax <./guidelines/view_php_syntax.html>`_ in your views, as it makes
them easier to read and limits the amount of php. If this is not
supported by your server, ExpressionEngine will automatically rewrite
the tags.

The Core Module File (mod.module\_name.php)
-------------------------------------------

The Core Module file is used for outputting content via the Templates
and doing any processing that is required by both the Control Panel and
any module tags contained in a template. It includes a class with a name
that is a combination of the package's name with a '\_mod' suffix. The
first letter and only the first letter of the class name should be
capitalized. There is one required class variable, $return\_data, which
will contain the module's outputted content and is retrieved by the
Template parser after the module is done processing. As always, be sure
you invoke the super object in your constructor.

The tag structure of a module follows the same rules as the `Plugins
API <plugins.html>`_:

::

    {exp:module_name:method}

