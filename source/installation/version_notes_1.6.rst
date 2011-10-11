Update Notes for Version 1.6
============================

ExpressionEngine 1.6 includes a number of new features and updates.
Reviewing the notes below will help you transition to 1.6 with as little
effort as possible.


Category URL Titles
-------------------

During the update, all of your categories will be updated to have a
category URL title that is identical to their *current* Category Name.
Your category trigger, category links, etc. will continue to work
without requiring any modifications. So not until you are ready to go
into the category editor and assign URL safe category URL titles will
you need to do so.

When you edit a category, and submit your changes, the system will
automatically convert any existing value in the Category URL Title field
to a valid, URL safe value. Please note that this may change your URLs
if your category names had spaces, slashes, accented characters, or
other non-URL safe characters and you were previously using category
names in the URL. This may require that you eliminate .htaccess, hacks,
PHP, or Plugin workarounds that you may have been implementing in the
past to work around non-URL safe characters. This is a *good* thing, as
ExpressionEngine will now let you have "pretty" category names and URL
safe category URLs without any additional effort!

Control Panel Theme Updates
---------------------------

If you were using the "31Three" control panel theme from
`31three.com <http://31three.com/>`_, you should remove it, as it has
become the new default theme for ExpressionEngine 1.6, and has a number
of fixes and enhancements to that theme.

Version 1.6 has an entirely new default theme. **You must upload the
'default' and 'classic' (if you wish to retain the original theme)
folders to the /themes/cp\_themes/ folder**. The original theme is now
known as "Classic", and if you had modified that theme, you will need to
apply those changes to the renamed "Classic" theme.

For other themes, there is a minor change in the control panel CSS that
will require you to make this CSS modification, replacing::

	.uploadBox {

		   background-color:  #A5B2DC;  

		   border:            #6F7CA2 1px solid;

		   font-family:       Lucida Grande, Verdana, Geneva, Sans-serif;

		   font-size:         11px;

		   color:             #000;

		   text-align:        center;

		   margin:            2px 0 5px 14px;

		   padding:           5px 0 5px 0;

	}
	
with this::

	.uploadBox {

   background-color:  #A5B2DC;  

   border:            #6F7CA2 1px solid;

   font-family:       Lucida Grande, Verdana, Geneva, Sans-serif;

   font-size:         11px;

   color:             #000;

   text-align:        center;

   margin:            2px 0 5px 14px;

   padding:           5px 0 5px 0;

   height:            20px;

	}



	.uploadBox a {

   display:           block;

   font-weight:       bold;

	}



	.uploadBox a:hover {

   color:             #fff;

	}



	.uploadBox img {

   vertical-align:    bottom;

   margin-bottom:     -2px;

	}
	
Some CSS that was previously hard-coded in the control panel output has
been moved to the Control Panel theme CSS files to make this more
flexible to theme. Six variables have been added which are required to
allow the drop-down behavior of your choice to function properly for the
main navigation menus. If you are using a customized theme, you will
need to add this CSS to your theme::

	html>body .navCell:{publish_tab_selector} #publishdropmenu { {publish_tab_display} }

	html>body .navCell:{publish_tab_selector} #publishdropmenu ul { {publish_tab_ul_display} }

	html>body #publishdropmenu { display:none; position:absolute; }

	html>body #publishdropmenu,

	html>body #publishdropmenu * { list-style:none; width:200px; }

	html>body #publishdropmenu,

	html>body #publishdropmenu * { margin:0; padding:0; }

	html>body #publishdropmenu li { position: relative; }

	html>body #publishdropmenu ul { display:none; position:absolute; top:5px; left:190px; border-top:1px solid #B2B3CE; }

	html>body .navCell #publishdropmenu li:hover { background: #C0C3E2 url({path:image_url}bg_cell_hover.jpg) repeat-x left top; }



	html>body .navCell:{sites_tab_selector} #sitesdropmenu { {sites_tab_display} }

	html>body .navCell:{sites_tab_selector} #sitesdropmenu ul { {sites_tab_ul_display} }

	html>body #sitesdropmenu { display:none; position:absolute; }

	html>body #sitesdropmenu,

	html>body #sitesdropmenu * { list-style:none; width:200px; }

	html>body #sitesdropmenu,

	html>body #sitesdropmenu * { margin:0; padding:0; }

	html>body #sitesdropmenu li { position: relative; }

	html>body #sitesdropmenu ul { display:none; position:absolute; top:5px; left:190px; border-top:1px solid #B2B3CE; }

	html>body .navCell #sitesdropmenu li:hover { background: #C0C3E2 url({path:image_url}bg_cell_hover.jpg) repeat-x left top; }
	
Template Manager Icons
~~~~~~~~~~~~~~~~~~~~~~

New icons are used to indicate the template type and whether or not a
template is "hidden". You will need to either replace your
/themes/cp\_global\_images/ folder, or upload the following files from
the download to your /themes/cp\_global\_images/ folder::

	css_icon.png

	css_icon_hidden.png

	index_icon.png

	js_icon.png

	js_icon_hidden.png

	rss_icon_hidden.png

	rss_icon.png

	static_icon.png

	static_icon_hidden.png

	webpage_icon.png

	webpage_icon_hidden.png

	xml_icon.png

	xml_icon_hidden.png
	
Mailing List Activation Template
--------------------------------

ExpressionEngine 1.6 added a new variable to the Mailing List Activation
specialty template, {mailing\_list}. You may wish to update your
template to the new default or modify your customized template to
include the new variable::

	Thank you for joining the "{mailing_list}" mailing list!

	Please click the link below to confirm your email.

	If you do not want to be added to our list, ignore this email.

	{unwrap}{activation_url}{/unwrap}

	Thank You!

	{site_name}
	
Mailing List Templates
----------------------

ExpressionEngine 1.6 added a new variable to the Mailing List email
templates, {mailing\_list}. You may wish to update your templates to the
new default or modify your customized templates to include the new
variable::

	{message_text}

		To remove your email from the "{mailing_list}" mailing list, click here:

		{if html_email}<a href="{unsubscribe_url}">{unsubscribe_url}</a>{/if}

		{if plain_email}{unsubscribe_url}{/if}
	
Language Additions
------------------

ExpressionEngine 1.6 has a number of language file additions. To assist
translators in updating their language packs, a :download:`language notes text
file <language_notes_1.6.txt>` has been provided. This text file lists
all of the new language keys, separated by the each language file that
contains changes. To update your language pack, you can download this
text file, make the changes, and simply copy the new keys to the
appropriate language files.

:ref:`Return to Update Page <update-additional-steps>`
