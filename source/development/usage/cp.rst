CP Class
========

.. contents::
	:local:

Calling the CP Class
--------------------

This class is initialized automatically in the control panel.

Breadcrumbs
-----------

Adds a new breadcrumb to the initial breadcrumb array. The system will
automatically output the final array. ::

	$this->EE->cp->set_breadcrumb($url, $title);

Sub Navigation
--------------

The right hand subnavigation can be used as the main navigation for a
module. This function takes an associative array where the keys are
language keys and the values are the full url to link to. ::

	$this->EE->cp->set_right_nav(array(
		'edit_avatar' => BASE.AMP.'C=my_account'.AMP.'M=edit_avatar',
		'edit_profile' => BASE.AMP.'C=my_account'.AMP.'M=edit_profile'
	));

Set Variables
-------------

This is a simple alternative for setting a page variable. It is used
almost exclusively for setting the title of a control panel page::

	$this->EE->cp->set_variable('cp_page_title', $this->EE->lang->line('page_title'));

Adding Header Data
------------------

The <head> tag of the control panel can be extended with new styles,
meta tags, and other data. Multiple calls to this function are additive. ::

	$this->EE->cp->add_to_head('<style type="text/css" media="screen">div { display: none; }</style>');

Loading Javascript Files
------------------------

The javascript library will only load files from the main javascript
directory. This function includes files from the current package's
javascript folder. It takes a simple file name, .js will be appended
automatically. ::

	$this->EE->cp->load_package_js('my_file');

Add a javascript file or files to the javascript combo loader
-------------------------------------------------------------

This function allows you to include scripts in the 'combo load' routine,
thus reducing HTTP requests. The first parameter specifies the
directories (if needed) and files to be added and the optional second
parameter determines the placement of the resulting javascript link,
defaulting to TRUE to place in the footer. ::

	$this->EE->add_js_script(
		array(
			'ui' => array('core', 'widget', 'position', 'autocomplete'),
			'plugin' => array('fancybox')
		)
	);

Masking the Control Panel URL in links
--------------------------------------

When creating external links in the users Control Panel, the system
folder should not show in server referral logs. ::

	$this->EE->cp->masked_url('http://example.com');

Creates the a the following link:
http://example.com/index.php?URL=http://example.com

Control Panel Messages
----------------------

The control panel class creates a default view variable $cp\_messages,
which you will typically use to display messages after form submission.
By default, this is an empty array. Using the Session Class's
`set\_flashdata() <../usage/session.html#flash_data>`_ (requires a
redirect), you may specify a success and/or failure message. The message
content will be displayed using the
./themes/cp\_themes/default/\_shared/message.php view, with a class of
'success' or 'failure' as needed. If javascript is enabled, the html
notification will automatically be hidden and the message will be
displayed by the `notification
plugin <../cp_javascript/notification.html>`_ with the appropriate
message type indicated. ::

	$this->EE->session->set_flashdata('message_success', $this->EE->lang->line('updated'));
	$this->EE->session->set_flashdata('message_failure', $this->EE->lang->line('write_failed'));
	$this->EE->functions->redirect(BASE.AMP.'C=addons_modules'.AMP.'M=show_module_cp'.AMP.'module=my_module');

After redirecting, a javascript success notification bar would show
briefly, followed by an error message. Error messages, if shown, remain
visible until manually closed.

Allowed Group
-------------

When a user or logged in member visits an EE site, the Session class
ascribes user data to them that, among other things, pertains to their
member groups's access to various parts of the site. Returns FALSE if
they have access, TRUE if they do. ::

	if ( ! $this->EE->cp->allowed_group('can_delete_all_entries'))
	{
		show_error($this->lang->line('unauthorized_to_delete_others'));
	}

Safe Refresh
------------

Some pages of the control panel can only be reached after the user
submits a form. If you need to perform an action elsewhere and the
redirect to the current page, get\_safe\_refresh() will return a url
that takes these considerations into account. To use the result, prefix
it with BASE.AMP

::

	<?=form_open('C=myaccount'.AMP.'M=notepad_update', array('id' => 'notepad_form'), array('redirect_to' => $this->cp->get_safe_refresh()))?>

Fetch an Action ID
------------------

Modules have certain actions for forms, links, etc. that are recognized
via an action ids that are inserted into the database upon installation
of that module. This function returns the action id number from the
database. (See also
`functions->fetch\_action\_id <../reference/functions.html#action_id>`_)

	$aid = $this->EE->cp->fetch_action_id($class, $method);

Publish Page Layout Functions
-----------------------------

Administrators may extensively customize publish pages on a per member
group and per channel basis. Since these custom layouts are saved as a
serialized array in the database, any additions or deletions to publish
page tabs and fields must be synced to any saved layouts. The control
panel library provides 4 functions to facilitate custom layout updates.
(See also `Module Tutorial: Update
file. <../module_tutorial.html#update_file>`_)
