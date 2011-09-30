Forum Update Notes for Version 3.0.0 Public Beta
================================================

Discussion Forum 3.0.0 Public Beta requires version 2.0.0 Public Beta or
greater of ExpressionEngine.

If you have a customized forum theme that you wish to update to work
with 3.0.0 Public Beta's new forum theme format, you will need to make
some changes to the file structure.

Open your theme folder
For each file (e.g. theme\_css.php) create a corresponding directory
with the pattern forum\_css. ("theme\_" becomes "forum\_" and drop the
".php" extension.
Open the theme file in a text editor and for every method in the file,
create a correspondingly named .html file, and place that method’s
contents in that file.

Example: for theme\_category.php create a directory named
‘forum\_category’. In the original theme\_category.php file, you’ll
find::

	function category_page() {
		return <<< EOF
		
		{include:html_header}
		{include:top_bar}
		{include:page_header}
		{include:page_subheader}
		
		<div id="content">
			{include:main_forum_list}
			{include:forum_legend}
		</div>
		
		{include:html_footer}
		
	EOF;
	}
	 /* END */

Which will become a new file in the forum\_category directory named
category\_page.html, with the contents::

	{include:html_header}
	{include:top_bar}
	{include:page_header}
	{include:page_subheader}

	<div id="content">
		{include:main_forum_list}
		{include:forum_legend}
	</div>
	
	{include:html_footer}

There is also a small :download:`standalone script
utility <convert_forum_theme.zip>` to help you automate these
changes. If you have greatly deviated from structure and files in your
own theme, there may be some manual changes you will still need to make,
but on most themes, running this utility and moving the resulting files
will be all you need to do.

To utilize the standalone script, download and unzip it, and upload it
inside your forum theme folder, access it directly from your browser
(e.g.
http://example.com/themes/forum\_themes/your\_theme/convert\_forum\_theme.php)
and follow the included instructions.

`Return to Update Page <forum_update.html>`_
