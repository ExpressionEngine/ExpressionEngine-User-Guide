***********************************
ExpressionEngine 2.0 Module Changes
***********************************

In addition to the :doc:`syntax changes <syntax>` already discussed,
modules require some fundamental alterations to the control panel file.
A new update file (upd.package\_name.php) has been introduced to manage
installing, uninstalling and updating the module. The Display class has
also been deprecated and replaced by a new approach to formatting your
control panel output.

A fictional Fortune Cookies module is used in the following examples.
For more examples, see the `full Module Development
tutorial <../module_tutorial.html>`_.
      
.. contents::
	:local:
	
2.0 Module Overview
===================

Basic file structure
--------------------

The typical file structure for a third party module that employs a
control panel should look like (\* required):

-  \*expressionengine/third\_party/package\_name/

  -  \*expressionengine/third\_party/package\_name/mcp.package\_name.php
     (control panel file)
  -  \*expressionengine/third\_party/package\_name/mod.package\_name.php
     (front end file)
  -  \*expressionengine/third\_party/package\_name/upd.package\_name.php
     (installation, uninstall and updates)
  -  expressionengine/third\_party/package\_name/views/ (contains
     all views)

     -  expressionengine/third\_party/package\_name/views/index.php
     -  expressionengine/third\_party/package\_name/views/another\_page.php

-  \*expressionengine/third\_party/package\_name/language/english/package\_name\_lang.php

The reference page for `Add-on Packages <../packages.html>`_ gives
greater detail on the above changes.

Note: It is recommended to put a placeholder index.html file in any
of your folders.

URL Logic
---------

The back end urls are very easy for a human to parse. Using the
Referrer module as an example, the url to view your referrers looks
like: C=addons\_modules&M=show\_module\_cp&module=referrer&method=view.

**C=addons\_modules**
   C represents the **controller**, all of which are located in
   expressionengine/controllers/. In this example, the controller is
   'addons\_modules'. Controller names map directly to the urls.
**M=show\_module\_cp**
   M specifies the controller **method**- in this case the
   show\_module\_cp() function in the addons\_modules controller.
**module=referrer**
   The module control panel- as in pre-2.0 this is the name of your
   class, all lower case.
**method=view**
   Unlike pre-2.0, the **method** being called in the url maps
   directly to the method name in your control panel file. There is
   no need to route them manually.

The upd.module.php File
=======================

2.0 moves the install and uninstall functions from mcp.package\_name.php
to a new file upd.package\_name.php. You will want to remove these
functions and any dependencies from your current mcp.package\_name.php
file and place them in your newly created update file.

Remove install, uninstall, update functions and dependencies from mcp.package\_name.php
---------------------------------------------------------------------------------------

All EE modules had at a minimum a package\_name\_module\_install and
package\_name\_module\_uninstall function.

Add your renamed functions to your update file.
-----------------------------------------------

The update file has a slightly different naming convention, so rename
your methods install(), uninstall(), and update().

**Note:** The update file **requires** an update function.

Use Active Record and Database Forge for Queries.
-------------------------------------------------

All queries, inserts and updates should be altered to use the `active
record
class <http://codeigniter.com/user_guide/database/active_record.html>`_.
Table creation, alteration and deletion should be done using the
`database forge
class <http://codeigniter.com/user_guide/database/forge.html>`_.

Example Code
------------

::

	<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
	
	class Package_name_upd {
	
		var $version = '3.0';
	
		function __construct()
		{
			// Make a local reference to the ExpressionEngine super object
			$this->EE =& get_instance();
		}
	
		function install()
		{
			$this->EE->load->dbforge();
	
			$fields = array(
				'fortune_id'=>	array('type' => 'int',
								'constraint'	=>	'6',
								'unsigned'	=>	TRUE,
								'auto_increment'=>	TRUE),
				'fortune_text'	=>	array('type' => 'text'));
	
			$this->EE->dbforge->add_field($fields);
			$this->EE->dbforge->add_key('fortune_id', TRUE);
			$this->EE->dbforge->create_table('fortunes');
			
			$data = array(
				'module_name' => 'Fortunes' ,
				'module_version' => $this->version,
				'has_cp_backend' => 'y'
			);
			
			$this->db->insert('modules', $data);
			
			return TRUE;
		}
	
		function uninstall()
		{
			$this->EE->load->dbforge();
	
			$this->EE->db->select('module_id');
			$query = $this->EE->db->get_where('modules', array('module_name' => 'Fortunes'));
	
			$this->EE->db->where('module_id', $query->row('module_id'));
			$this->EE->db->delete('module_member_groups');
	
			$this->EE->db->where('module_name', 'Fortunes');
			$this->EE->db->delete('modules');
	
			$this->EE->db->where('class', 'Fortunes');
			$this->EE->db->delete('actions');
	
			$this->EE->db->where('class', 'Fortunes_mcp');
			$this->EE->db->delete('actions');
	
			$this->EE->dbforge->drop_table('fortunes');
	
			return TRUE;
		}
	
		function update($current='')
		{
			if ($current < 2.0)
			{
				// Do your 2.0 version update queries
			}
			if ($current < 3.0)
			{
				// Do your 3.0 v. update queries
			}
	
			return TRUE;
		}
	}
	/* END Class */
	
	/* End of file upd.package_name.php */
	/* Location: ./system/expressionengine/third_party/upd.package_name.php */

**Note:** Use $this->\_ee\_path.'third\_party/foo' as file path for
any required included files that reside within your module folder.

**Note:** If your module needs user intervention for first-time
setup, it should occur in the module's control panel on first-run,
and not the installer method. This will allow your module to be
installed during ExpressionEngine's application installation process.
See the Wiki module for an example if needed.

Passing Errors to the Wizard
----------------------------

If you want to pass notes to the user installing the system, you have
access to the property $this->install\_errors. For example, you may
want to attempt to create a folder on the server.

::

	function install()
	{
		var $errors = array();
	
		if (mkdir('/my/dir'))
		{
			$errors = array('Unable to create the directory, please manually add it before you use this module.');
		}
	
		if (count($errors) > 0)
		{
			$this->install_errors = $errors;
			return FALSE;
		}
		else
		{
			return TRUE;
		}
	}

When you pass errors, it is best practice to return FALSE.

Language Files
==============

Language Convention Changes
---------------------------

As noted in the :doc:`syntax guidelines <syntax>`, the $L array
containing language variables must be renamed to the $lang array.

Core Module File
================

For your core module file (mod.package\_name.php) you simply need to
:doc:`update the syntax <syntax>`. Be certain to change queries to use
`active
record <http://codeigniter.com/user_guide/database/active_record.html>`_.

Control Panel File (mcp.package\_name.php)
==========================================

If your module does not have a control panel, you still need an mcp file
in the format::
	
	<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
	
	class Package_name_mcp {
	
		var $version = '1.0';
	
		function __construct()
		{
			// Make a local reference to the ExpressionEngine super object
			$this->EE =& get_instance();
		}
	}
	/* END Class */
	
	/* End of file mcp.package_name.php */
	/* Location: ./system/expressionengine/third_party/package_name/mcp.package_name.php */

Class suffix change to \_mcp
----------------------------

To be consistent with other add-on suffixes, your module control
panel class should now use the suffix \_mcp instead of \_CP. In your
update script, don't forget to update the exp\_actions table if you
have any actions processed by your control panel class!

Changes to the constructor
--------------------------

With 2.0 there is no need to manually route your pages in the
constructor, and \_\_construct() should now be used::

	Old Syntax
	function Package_name_mcp( $switch = TRUE )
	{
		global $IN;
		
		if ($switch)
		{
			switch($IN->GBL('P'))
			{
				case 'home'	: $this->home();
					break;
			}
		}
	}
	
	NEW Syntax
	function __construct( $switch = TRUE )
	{
		// Make a local reference to the ExpressionEngine super object
		$this->EE =& get_instance();
	}

Load any helpers and libraries you may need in your view
--------------------------------------------------------

Since views are given all the existing references when they are
loaded, you may want to load certain libraries or helpers before
loading the view. This is discussed more in the `Views <#views>`_
section.

::

	$this->EE->load->helper('form');
	$this->EE->load->library('table');

Using Javascript in your control panel
--------------------------------------

ExpressionEngine comes with the jQuery javascript library included by
default. You should create and compile your JavaScript before loading
your view (or returning a string). For example, to round your buttons
using JavaScript, you'd use::

	$this->EE->load->library('javascript');
	$this->EE->javascript->output($this->EE->jquery->corner('.cp_button a'));
	$this->EE->javascript->compile();
	
	return $this->EE->load->view('index', $vars, TRUE);

Breadcrumbs, titles and the $EE->cp class
-----------------------------------------

Most markup is now handled in **views**. However, a few process such
as defining titles and breadcrumbs will still be done in your control
panel file. For the following functions, you will need to switch from
$DSP to $EE->CP

Theme urls::

       $this->EE->cp->cp\_theme\_url

Setting the base breadcrumb::

       $this->EE->cp->set\_breadcrumb(BASE.AMP.'C=addons\_modules'.AMP.'M=show\_module\_cp'.AMP.'module=package\_name',
       $this->EE->lang->line('name'));

Setting the title::

       $this->EE->cp->set\_variable('cp\_page\_title', 'page\_title');

Outputting Control Panel Pages
------------------------------

There are two ways to output your control panel pages. Similar to
pre-2.0, you may return a string, which will automatically be placed
inside the cp page's content container. In addition, 2.0 allows you
to use `views <#views>`_ to handle your display. Using views is the
preferred architecture as they are much easier to read and modify
than when your controller methods build the output mixed with the
logic.

Dynamic information in views is conveyed with view variables. They
are created by passing an associative array when you load the view
(array keys become the variable names in the view file). So in your
control panel file, focus on removing the Display class and creating
an array containing all of the data you will need to display. Once
you have your array, you simply pass it to the view. You can format
your page using plain HTML in the view file.

To load a view, you use::

	return $this->EE->load->view('index', $vars, TRUE);

Note in the above example that the third argument of view() is being
used so that instead of being added to existing output, it is
returned as a string, and that the value is being returned by the
method. In this example, the view file named index.php in the
module's views folder would be loaded, and variables are supplied to
it via the $vars array.

Data is passed from the controller to the view by way of an array or
an object in the second parameter of the view loading function. Here
is an example using an array::

	$data = array(
				   'title' => 'My Title',
				   'heading' => 'My Heading',
				   'message' => 'My Message'
			  );
	
	return $this->EE->load->view('name', $data, TRUE);

And here's an example using an object::

	$data = new Foo_class(); $this->EE->load->view('name', $data, TRUE);

Note: If you use an object, the class variables will be turned into
array elements.

You can also pass a variable using $this->EE->cp->set\_variable().
This allows you to set vars without needing to pass an array into the
view. This is used exclusively for setting control panel variables
such as page titles.

Don't forget to return your view when you load it, or the content
will not be placed into the appropriate section of the control panel
page!

Control panel file example
==========================

This all may sound daunting at first if you're not already used to
working with CodeIgniter, but you'll quickly see how simple it can be.
Going back to our Fortunes module, let's take a look at outputting a
simple control panel page. The Fortune module's home page is about as
simple as it gets, consisting of two links. To create the page , our
index() method would look like::

	function index($message = '') 
	{		 
		$this->EE->view->cp_page_title = lang('fortunes_module_name');
	
		$this->EE->load->library('javascript');
		$this->EE->javascript->output($this->EE->jquery->corner('.cp_button a'));
		$this->EE->javascript->compile();
	
		$vars['view_url'] = BASE.AMP.'C=addons_modules'.AMP.'M=show_module_cp'.AMP.'module=fortunes'.AMP.'method=view';  
		$vars['add_url'] = BASE.AMP.'C=addons_modules'.AMP.'M=show_module_cp'.AMP.'module=fortunes'.AMP.'method=add';
	
		return $this->EE->load->view('index', $vars, TRUE);
	} 

The page title is set using the CP class. To add a bit of style, the
javascript library is used to round some corners (on our cp\_button
links). And lastly, a view is loaded sending an array containing two
variables is returned. The view file might be as simple as::

	<ul>
		<li><div class="cp_button"><a href="<?=$add_url?>"><?=lang('add_fortune')?></a></div></li>
		<li><div class="cp_button"><a href="<?=$view_url?>"><?=lang('view_fortunes')?></a></div></li>
	</ul>

For an example of a more complex page, see the `Module
tutorial <../../development/module_tutorial.html#view_files>`_.

View Folders and Files
----------------------

**Note:** If your module doesn't have a control panel, you may skip this
step.

A view is simply a web page or page fragment. To create your module
control panel using views to show the rendered output, you will start by
creating a views folder. In general, each page of your control panel
will have its own view file inside the views folder.

**NOTE:** You are not required to use a view file to create your output
markup. Any string that the method returns is placed inside the control
panel page's content container. For very simple pages, this may the
option you choose. However, views are the best architectural choice, as
they are modular and easy to read and modify. As such, they are the
recommended approach.

Since view files are really just HTML snippets with a bit of PHP added
to output your variables, one easy way to get started is by viewing the
rendered output of your current module. Using the 'Fortunes' demo module
as an example, here is the output html for the home page::

	<div id='contentNB'>
	
	<h1>Fortunes Control Panel</h1>
	
	<div class='itemWrapper' >
	<h5><a href='index.php?S=0&C=modules&M=fortunes&P=add' >Add Fortune</a></h5>
	</div>
	
	<div class='itemWrapper' >
	<h5><a href='index.php?S=0&C=modules&M=fortunes&P=view' >View Fortunes</a></h5>
	</div>
	
	</div>

Everything inside the contentNB division will be controlled by your view
file. Thus to replicate the current module, you could simply copy the
rendered html and replace the variable elements with, well, variables::

	<div class='itemWrapper'>
	<h5><a href="<?=BASE.AMP.'C=addons_modules'.AMP.'M=show_module_cp'.AMP.'module=fortunes'.AMP.'method=add'?>">
		<?=lang('add_fortune')?></a></h5>
	</div>
	
	<div class='itemWrapper'>
	<h5>href="<?=BASE.AMP.'C=addons_modules'.AMP.'M=show_module_cp'.AMP.'module=fortunes'.AMP.'method=view'?>">
		<?=lang('view_fortunes')?></a></h5>
	</div>

There are a few things to note in the above changeover:

#. Views are REALLY easy!
#. Use php `short tags <../guidelines/view_php_syntax.html>`_ in your
   views for increased legibility. If your server does not support short
   tags, ExpressionEngine will automatically rewrite them when
   processing your view file.
#. Module control panel URLs have been changed slightly. The structure
   is logical and easy to follow, but it's an easy tweak to miss when
   converting your module.
#. Note the use of constants and in particular the change from BASEPATH
   to BASE.
#. The ease of using your language variables:
   <?=lang('view\_fortunes')?>
#. The Fortunes sample module is kinda ugly.

Let's make the output a bit less ugly. The 'Referrer' module is a nice
example. Riffing on that, we end up with a completed view file that was
shown above::

	<ul>
	  <li><div class="cp_button"><a href="<?=$add_url?>"><?=lang('add_fortune')?></a></div></li>
	  <li><div class="cp_button"><a href="<?=$view_url?>"><?=lang('view_fortunes')?></a></div></li>
	</ul>

Easy to change the markup, isn't it? I also added a few variables to
help keep the view file simple and easy to read.

**Note:** jQuery should typically be handled in the controller and not
the view files. It's perfectly acceptable to do otherwise, but the
Javascript library has some automation that can help keep your view
files simple in this regard.

Display Tools
=============

The Table library and the Form helper may be particularly useful when
creating your output, so let's take a quick look at them.

The form helper
---------------

If you need a control panel, you will likely be dealing with forms.
The form helper provides the tools for creating quick, versatile
forms. (Think $FNS->form\_declaration() on steroids, or the legacy
Display class, but without requiring you to remember eight or ten
function arguments…)

While too extensive to go into great detail here, let's take a look
at a quick example of the form helper in action. Using the Fortunes
example module, there is a very simple form used to enter new
fortunes and edit existing ones. The rendered html looks like::

	<h1>Add Fortune</h1>
	
	<form method='post'  name='target' id='target'  action='index.php?S=0&C=modules&M=fortunes&P=update' >
	<div class='hidden'><input type='hidden' name='XID' value='0801a8c15ef3ad5a7c1318f232a210eb721464a1' /></div>
	
	
	<table border='0'  cellspacing='0' cellpadding='0' style='width:100%;'  class='tableBorder' >
	<tr>
	<td  class='tableCellOne' >
	<textarea  dir='ltr'  style='width:100%;' name='fortune_text' id='fortune_text' cols='90' rows='15' class='textarea' ></textarea>
	
	</td>
	</tr>
	</table>
	
	
	<div class='itemWrapper' ><br />
	
	<input  type='submit' class='submit' value='Add Fortune'  />
	</div>
	</form>

Again, you can almost do a 'copy/paste' of your output html and then
just go in and replace your variable bits with actual php variables.
Let the form helper take care of the details of the form creation.

::

	<?php if ($message != ''):?>  
		<p class="notice"><?=$message?></p> 
	<?php endif;?>  
	
	<?=form_open($form_action, '', $hidden)?> 
	<table border='0' cellspacing='0' cellpadding='0' style='width:100%;' class='tableBorder' > <tr> <td class='tableCellOne' >  
		<?=form_textarea(array('id'=>'fortune_text','name'=>'fortune_text','class'=>'textarea','value'=>$fortune_text));?> 
	</td> </tr> </table> 
	
	<div class='itemWrapper' ><br />  
		<?=form_submit(array('name' => 'submit', 'value' => lang('update'), 'class' => 'submit'));?> 
	</div>  
	
	<?=form_close()?> 

That's all there is to it. You now have a view (fortune\_form.php)
that allows new entries, edits, and generates the appropriate
messages.

The Table library
-----------------

The Table library is the other resource you'll find invaluable when
creating your views. It will often prove easier and cleaner than hard
coding your table markup (though you can do that as well). Here's
another sample from or fortunes module: in this case, it's the
original 'view' page- where you can see your existing fortunes and
select fortunes to modify or delete. (**NOTE:** The `Module
tutorial <../../development/module_tutorial.html#view_files>`_
explains views further.)

Here's how we can use the table library to generate our somewhat
complex 'view fortunes' page::

	<?php if ($message != ''):?>
		<p class="notice"><?=$message?></p>
	<?php endif;?>
	
	<?php if(count($fortunes) > 0):?>
	
		<?=form_open($form_action)?>
	
		<?php
		$this->table->set_template($cp_table_template);
		$this->table->set_heading(
			lang('fortune_text'),
			lang('modify_fortune'),
			form_checkbox('select_all', 'true', FALSE, 'class="toggle_all" id="select_all"').NBS.lang('delete_fortune','select_all')
			);
	
		foreach($fortunes as $fortune)
		{
			$this->table->add_row(
					$fortune['fortune'],
					'<a href="'.$fortune['modify_link'].'">'.lang('modify_fortune').'</a>',
					form_checkbox($fortune['toggle'])
					);
		}
		?>
	
		<?=$this->table->generate()?>
		<div><?=form_submit(array('name' => 'submit', 'value' => lang('delete'), 'class' => 'submit'));?></div>
	
		<?=$pagination?>
	
		<?=form_close()?>
	<?php else: ?>
		<?=lang('no_fortunes')?>  
	<?php endif;?>

Using the Table library allows for easier changes to the dynamically
generated tabular data than it would be to hard code the table rows
and cells. It also ensures that your tables have the same markup and
styles applied to them as the rest of the theme the user has enabled
for their control panel.

Help Menu
---------

The control panel help menu item provides context sensitive links for
users to useful documentation. You can leverage this to have the help
menu take users to your add-on's documentation with the addition of a
very simple config file.

help\_menu.php Config File
--------------------------

In your add-on package's config folder, create a file named
help\_menu.php. The construction of the file is simple - a PHP file with
an associative array that maps your control panel class methods to
specific URLs. ::

	<?php
	
	$help_menu = array(
	
	'index'		=> 'http://example.com/user_guide/',
	'add'		=> 'http://example.com/user_guide/add_fortune.html',
	'view'		=> 'http://example.com/user_guide/view_fortune.html'
	
	);
	
	/* End of file help_menu.php */
	/* Location: ./system/expressionengine/third_party/package_name/config/help_menu.php */

For instance, whenever the method add() is called, the Help menu link
would direct the user to
*http://example.com/user\_guide/add\_fortune.html*.

**Tip:** Using the control panel Help menu link is a great way to check
to make sure that each page of your module's control panel is
documented!
