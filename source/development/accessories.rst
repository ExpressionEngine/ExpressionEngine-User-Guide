Accessory Development
=====================


Overview
--------

Third-party accessories should be placed in the
/system/expressionengine/third\_party/<package\_name>/ directory and are
enabled via the `Accessories
Manager <../cp/add-ons/accessory_manager.html>`_ in the Add-Ons section.
Accessories can have their own database tables, if necessary, but it is
not required. Accessories do not have their own individual control
panel.

Naming Convention
-----------------

Accessories have a file naming convention similar to ExpressionEngine
plugins and extensions. There is only a single file required for an
extension and inside this file should be a PHP class. The name of the
class is the file name plus the suffix \_acc so that the name of the
file is the *lower-cased* class name with the prefix 'acc.', the \_acc
suffix, and the standard PHP suffix of '.php'. So, if our class is
called '**Example\_acc**', then our file name for this accessory would
be '**acc.example.php**'.

Inside the Accessory
--------------------

Class Variables
~~~~~~~~~~~~~~~

Inside an accessory file should be a class, which will be called by
ExpressionEngine whenever this particular accessory is required. There
are five other required class variables that your accessories should
have. These variables output meta information to the Accessories Manager
so that it can describe your accessory and manage display settings.

::

    class Example_acc {

        var $name       = 'My Example Accessory';
        var $id         = 'example';
        var $version        = '1.0';
        var $description    = 'My accessory has a lovely description.';
        var $sections       = array();

        /**
         * Constructor
         */
        function __construct()
        {
            $this->EE =& get_instance();
        }
    }
    // END CLASS

Here is a quick run down each variable:

-  **$name** - the name of the accessory, used in the accessory manager
   display and on the accessory's tab.
-  **$id** - the class id automatically associated with the accessory
   tab.
-  **$version** - the current version of the accessory.
-  **$description** - the accessory description, used in the accessory
   manager display.
-  **$sections** - an array of data to be displayed when the accessory
   tab is displayed.

If your accessory has a language file, then you the $name and
$description class variables can be set in the constructor by calling
the language file and variables using the :doc:`Language ($LANG)
class </development/usage/language>`. If your accessory is likely to be used
internationally and by non-English speakers this is a recommended course
of action.

Required Functions
~~~~~~~~~~~~~~~~~~

In addition to the constructor function, which must reference the super
object, you will also need a set\_sections() function. This function
defines the various sections in your accessory and populates the
content.

::

        /**
         * Set Sections
         *
         * Set content for the accessory
         *
         * @access  public
         * @return  void
         */
        function set_sections()
        {
            $this->sections['My Heading'] = 'I made an accessory!'; 
        }

Each element of the array represents a section. The array key will be
the section heading, the array contents will be the accessory's
contents. This can be as simple or complex as you need it to be.

Activating and Updating
-----------------------

No special functions are required to install your accessory. If you're
following the naming conventions above, include your required class
variables, and have a set\_sections() function, ExpressionEngine will
automatically handle the installation and deinstallation. However, in
some cases, you may need to add on to the installation/deinstallation
routines. For example, your accessory may have its own database table
that should be installed when the accessory is installed. If you do
require additional processing, you can specify an install() function. If
an install() function is included, the accessory controller will
automatically include it during installation. Similarly, while no
uninstall function is required, if your accessory needs additional
process on deinstallation, the contents of an uninstall() will
automatically be included.

To update your accessory, you should create an optional update()
function. It will run if the $version in your file is newer then the
version the user has installed. Errors should be trapped, and return
FALSE if something fails. On a successful update, the installed version
will be updated in the database. If all you required was to have a
$version flag updated, then an empty function will suffice:

::

    function update()
    {
        return TRUE;
    }

View Files
----------

Accessories can utilize View files as a more intuitive way to create the
content for each section. For greater detail on utilizing views from
your add-on, see the modules tutorial section on `using view
files <modules.html#view_files>`_.

Processing Requests
-------------------

Accessories have the ability to process requests for actions like AJAX
calls. Methods designed for this purpose must have a *process_* prefix.
For example, the the following URL could be called
C=addons\_accessories&M=process\_request&accessory=my\_accessory&method=process\_sample\_process
that requests the process\_sample\_process method in my\_accessory.
