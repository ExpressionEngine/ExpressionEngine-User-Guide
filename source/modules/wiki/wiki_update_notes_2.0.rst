Wiki Module v. 2.0
------------------

**\* Released with ExpressionEngine 2.0**
Trailing Slashes Removed from URLs
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Note:** if you are using unmodified default themes, and have replaced
your themes with those that come with 2.0, you have no further steps to
take.

ExpressionEngine version 1.x used trailing slashes at the end of all
URLs; 2.0 does not, so you may have some theme changes to make for your
URLs to be correct. Notably, there is a new variable,
{path:wiki\_base\_url} which is the (surprise!) base URL to your wiki,
but includes a trailing slash. It replaces {path:wiki\_home} in your
theme templates when building URLs manually, e.g.::

	{path:wiki_base_url}{special_namespace}:Categories

The simplest method to update these is to open the Wiki theme files in a
text editor and do a find and replace, changing {path:wiki\_home} to
{path:wiki\_base\_url}. {path:wiki\_home} should still be used for links
to your wiki home page. You can either verify each one as you replace,
avoiding replacing those that link to the home page, or replace all of
them, and return to the following files: wiki\_page.html,
wiki\_special\_atom.html, and wiki\_special\_rss.html to put links to
the wiki home page back.

Lastly, in wiki\_page.html, remove the trailing slash from two form
action URLs::

	<form method="post" action="{path:wiki_base_url}{special_namespace}:Search_results">

``<form method="post" action="{path:wiki_base_url}{special_namespace}:Find_page">``
