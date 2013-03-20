############
Update Notes
############

.. contents::
	:local:

***********
Version 2.0
***********

**\* Released with ExpressionEngine 2.0**

Trailing Slashes Removed from URLs
==================================

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

	<form method="post" action="{path:wiki_base_url}{special_namespace}:Find_page">

***********
Version 1.2
***********

**\* Released with ExpressionEngine 1.6.1**

The changes made to version 1.2 of the Wiki module require updating your
themes. If you are using one of the two supplied themes, 'Default' or
'Azure', you can simply update your /themes/wiki\_themes/ folder. If you
are using a customized theme, you will need to make the changes
indicated below.

Edit Previews
=============

Starting with version 1.2, it is possible to preview article submissions
when editing. This requires a change to your Edit Template -
wiki\_edit(). Before the Form Declaration tag, add::

	{if preview} <div class="defaultBold">WARNING: You are viewing a preview of your submission.  No changes to the article have been made.</div> <div class="preview">{preview}</div> {/if}

Additionally, a few variables must be added to the value attributes of
the input fields. The new variables are in bold, shown in context. ::

	Notes:&nbsp; <input class="input" name="revision_notes" id="revision_notes" value="{revision_notes}" type="text" size="50" maxlength="80" />

``Rename:&nbsp; <input class="input" name="rename" id="rename" type="text" value="{rename}" size="50" maxlength="80" />``

Finally, the submit button needs to be replaced with::

	<input name="submit" class="submit" type="submit" value="Submit" onclick="is_preview = false;" />     <input name="preview" class="submit" type="submit" value="Preview" onclick="is_preview = true;" />

Associated Pages, i.e. What Links Here?
=======================================

A new Special page was added for articles to show what other articles in
the wiki link to the viewed article. A new template must be added to
accommodate this change. Before the closing PHP tag in your theme file
(the **?>**), add::

	/* ---------------------------------------- /*  Template - Special Page: Associated Pages /* ----------------------------------------*/  function wiki_special_associated_pages() {   ob_start();    ?>  {wiki:associated_pages}  {if no_results} <h3>No Articles Link to {article_title}</h3> {/if}  {header}<h3>Articles that link to {article_title}</h3> <p>The following pages link to <a href="{path:view_orig_article}">{article_title}</a>:</p> <ul> {/header}  <li><a href="{path:view_article}">{title}</a></li>  {footer}</ul>{/footer}  {/wiki:associated_pages}    <?php    $buffer = ob_get_contents();   ob_end_clean();    return $buffer; } /* END */  /** Variables List for wiki_special_associated_articles():  Along with the variables from wiki_page(), this template also has:  TAG VARIABLES: {wiki:associated_articles}  - Used for displaying list of recent changes   --- SINGLE VARIABLES:     {title}              - Page Title     {path:view_article}        - Link to View Article     {article_title}          - Page Title of the originating article     {path:view_orig_article}    - Link to view the originating article     {count}              - "count" of the current revision being displayed     {switch="one|two|three"}    - Rotate between any number of values, separated by a pipe symbol   --- PAIR VARIABLES:     {header}{/header}        - Content to go before this tag's content     {footer}{/footer}        - Content to go after this tag's content   --- CONDITIONAL VARIABLES:     {if no_results}          -- Content to display if there are no associated articles  */

Your Wiki Menu will need a link to access this page. Placement is
entirely up to you; the default themes choose to place this as the last
item on the Wiki menu. ::

	{if article}<li><a href="{path:wiki_home}{special_namespace}:Associated_Pages/{url_title}/" title="What Links Here">What Links Here</a></li>{/if}

Uncategorized Pages
===================

A new Special page was added to show articles that are not assigned to
any categories. A new template must be added to accommodate this change.
Before the closing PHP tag in your theme file (the **?>**), add::

	/* ---------------------------------------- /*  Template - Special Page: Uncategorized Pages /* ----------------------------------------*/  function wiki_special_uncategorized_pages() {   ob_start();    ?>  <div class='defaultLeft'> Choose Namespace:  <select onchange="location.href=this.value"> <option value="{path:wiki_home}{special_namespace}:Uncategorized/">{main_namespace}</option> {wiki:custom_namespaces_list} <option value="{path:wiki_home}{special_namespace}:Uncategorized/{namespace_short_name}/" {namespace_selected}>{namespace_label}</option> {/wiki:custom_namespaces_list} </select> </div>  {wiki:title_list columns="3"}  {if no_results} <div class="marginpad"><strong>Sorry, there seem to be no uncategorized articles for this namespace.</strong></div> {/if}  <table style="width:98%;">  {articles} {row_start}<tr>{/row_start}  {row_column} <td style="width:33%"> <a href="{path:view_article}">{title}</a><br /> </td> {/row_column}  {row_blank}<td>&nbsp;</td>{/row_blank}  {row_end}</tr>{/row_end}  {/articles}  </table>  {/wiki:title_list}    <?php    $buffer = ob_get_contents();   ob_end_clean();    return $buffer; } /* END */  /** Variables List for wiki_special_uncategorized_pages():  Along with the variables from wiki_page(), this template also has:  TAG VARIABLES: {wiki:title_list}   - Used for displaying list of titles   --- CONDITIONALS     {if no_results}  - If there are no articles to show   --- PARAMETERS     columns=""   - How many columns to display   -- VARIABLE PAIRS     {articles}   - Encloses the repeating portion of the tag     {row_start}   - What content to use at start of a row     {row_blank}   - What content to use if blank column     {row_end}   - What content to use at end of a row     {row_column} - Used for each column in a row     --- SINGLE VARIABLES       {title}            - Title of article       {last_updated format=""}  - When Article was last updated       {author}          - Screen Name of revision author       {email}            - Email for Revision Author       {url}            - URL for Revision Author       {revision_notes}      - Notes about revision, if any       {path:view_article}      - Link to View Article       {content}          - Content of revision       {article}          - Fully rendered article       {count}            - "count" of the current article being displayed       {switch="one|two|three"}  - Rotate between any number of values, separated by a pipe symbol  */

Your Wiki Menu will need a link to access this page. Placement is
entirely up to you; the default themes choose to place this following
the Title List on the Wiki menu. ::

	<li><a href="{path:wiki_home}{special_namespace}:Uncategorized" title="Uncategorized Pages">Uncategorized Pages</a></li>

***********
Version 1.1
***********

**\* Released with ExpressionEngine 1.5**

Namespace Support Added
=======================

Namespace was added to this version. Please read the documentation on
:doc:`Setting up Namespaces </modules/wiki/wiki_cp>` for more
information. Also, you will have to update your default theme to the new
version or, if you have modified your wiki theme, you will have to
follow the :doc:`Wiki Theme update instructions
</installation/version_notes_1.5>` for ExpressionEngine 1.5.
