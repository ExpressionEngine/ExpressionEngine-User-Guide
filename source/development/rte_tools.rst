ExpressionEngine RTE tools API
==============================

Basic File Structure
--------------------

All RTE tools should be placed into the ``third\_party`` folder in a
package and be named after that package name. So in a packaged named
``strip\_tags`` the RTE tools file will be ``rte.strip\_tags.php``. All
RTE tools must provide an ``$info`` array with a name, version number,
description, and whether or not the RTE tool is allowable outside of
the Control Panel.

::

  	Class Strip_tags_rte {
		    
		    public $info = array(
  	        'name'        => 'Strip Tags',
  	        'version'     => '1.0',
  	        'description' => 'Triggers the RTE to strip all block and phrase-level formatting elements',
  	        'cp_only'     => 'n'
		    );
	
		    private $EE;
        
		    /** -------------------------------------
		    /**  Constructor
		    /** -------------------------------------*/
		    function __construct()
		    {
		    	// Make a local reference of the ExpressionEngine super object
		    	$this->EE =& get_instance();
		    }
		}
    // END Strip_tags_rte class

    /* End of file rte.strip_tags.php */
		/* Location: ./system/expressionengine/third_party/strip_tags/rte.strip_tags.php */


Example - Strip Tags
--------------------

The snippets below were truncated for clarity. The full example
RTE tool can be found in ``system/expressionengine/rte_tools/strip_tags``


Globals
~~~~~~~

At the very least, your RTE tool will need to supply global 
variables to aid in the translation of your tool into other
languages, but globals are useful whenever you want to pass
information from PHP into your tool's JavaScript. Globals are
accessible via the ``EE`` JavaScript object as demonstrated
in the Definition section.

::

    /** -------------------------------------
		/**  Globals we need defined
		/** -------------------------------------*/
		function globals()
		{
		    $this->EE->lang->loadfile('rte');
		    return array(
		        'rte.strip_tags.label' => lang('strip_tags')
		    );
		}
		

Definition
~~~~~~~~~~

The ExpressionEngine RTE makes use of the WysiHat plugin for jQuery.
More information on that plugin can be found `on Github <#>`.

In order for your RTE tool to do anything, it needs to be defined.
An RTE tool is defined in JavaScript and can be added to the RTE
toolbar in a number of ways, but the most common is via the toolbar's
``addButton()`` method. A button is typically defined using a definition
object with ``name`` and ``label`` properties and a ``handler`` method, but
other options are available as well. Consult the WysiHat documentation
for more details.

In your JavaScript snippet, ``toolbar`` will always be a reference to the
toolbar object, ``$editor`` will always be a reference to the WysiHat instance
(the RTE editor), and ``$field`` will always be a reference to the ``textarea``
that was replaced by the RTE.

Within the handler, a reference to the current WysiHat instance is
passed in as the first argument. A reference to the triggering event 
(typically a click) is passed in as the second argument.

In this example, you can see the label of the button is set to the
value of the global we set in the Globals section (above).

::

		/** -------------------------------------
		/**  RTE tool Definition
		/** -------------------------------------*/
		function definition()
		{
		    return '
		   
		    toolbar.addButton({
		        name:	"strip_tags",
		        label:	EE.rte.strip_tags.label,
		        handler: function( $ed ){
		            $ed.stripFormattingElements();
		            $ed.unformatContentBlock();
		        }
		    });
		   
		    ';
		}
		

Libraries
~~~~~~~~~

If you need to load in additional JavaScript libraries in order to
make your RTE tool functional, you can do so by defining the optional
``libraries()`` method. This method should return an array just like
one you would you would pass into the Control Panel Library's 
``add_js_script()`` method. Here's an example from the Image RTE tool::

		/** -------------------------------------
		/**  Libraries we need loaded
		/** -------------------------------------*/
		function libraries()
		{
		    return array(
		        'plugin' => 'ee_filebrowser',
		        'ui'     => 'dialog'
		    );
		}


Styles
~~~~~~

If your RTE tool requires some additional styles in order to work, you
can define a ``styles()`` method. The ``styles()`` method must return a 
string containing the CSS rule sets you wish to define. Here is an example
from the Link RTE tool::

		/** -------------------------------------
		/**  Styles we need loaded
		/** -------------------------------------*/
		function styles()
		{
		    return '
		        #rte_link_dialog p { margin-bottom:10px; }
				    #rte_link_dialog label { width: 90px; display: inline-block; }
				    #rte_link_dialog input, #rte_link_dialog select { width: 70%; margin-left: 10px; }
				    #rte_link_dialog .buttons { text-align: center; }
				    #rte_link_dialog button { cursor: pointer; }
		    ';
		}

**Note:** If you reference images in your custom CSS and your RTE tool can
be used outside of the Control Panel, make sure the file paths will work
properly. In the Image RTE tool, this is accomplished with simple string
replacement. It's also worth noting that this example uses a separate CSS
file to define the necessary styles. If you are dealing with more than a
few simple rule sets, that may be an easier way to go::


		/** -------------------------------------
		/**  Styles we need loaded
		/** -------------------------------------*/
		function styles()
		{
		    # load the external file
		    $styles = file_get_contents( 'rte.image.css', TRUE );
		    $theme  = $this->EE->session->userdata('cp_theme');
		    $theme  = $this->EE->config->item('theme_folder_url').'cp_themes/'.($theme ? $theme : 'default').'/';
		    return str_replace('{theme_folder_url}', $theme, $styles);
		}


Function Reference
------------------

definition()
~~~~~~~~~~~~

Defines the JavaScript for the RTE tool. Must return a string.

globals()
~~~~~~~~~

Defines global variables to be passed into JavaScript as part of the
``EE`` object. Optional. Must return an array.

libraries()
~~~~~~~~~~~

Defines any JavaScript libraries that need to be loaded. Optional.
Must return an array.

styles()
~~~~~~~~

Defines any additional style rules needed to define the look of the
RTE tool. Optional. Must return a string.