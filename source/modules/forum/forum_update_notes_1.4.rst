Forum Update Notes for Version 1.4
==================================

The Discussion Forum Module Version 1.4 requires ExpressionEngine
Version 1.6 (or greater)

Version 1.4 has a number of template additions.

If you have **not** customized your existing forum templates:
-------------------------------------------------------------

Simply replace your entire forum theme folder with the new set:

themes/forum\_themes/

The update process is now complete. You can disregard the rest of the
information in this page.

If you **have** customized your existing templates:
---------------------------------------------------

If you have customized the look of your forum you will need to manually
add the new template features described below.

Incorporating New Features
==========================

The information below assumes you are running customized templates. If
you are using the default theme there is no need to use the information
below.


Move Reply
----------

Move Reply Theme File
~~~~~~~~~~~~~~~~~~~~~

Please add the following theme files to your current installation:

-  themes/forum\_themes/blue/theme\_move\_reply.php
-  themes/forum\_themes/default/theme\_move\_reply.php
-  themes/forum\_themes/developer/theme\_move\_reply.php
-  themes/forum\_themes/shares/theme\_move\_reply.php

Thread Rows
~~~~~~~~~~~

To add this feature you will need to add the following code to your
Thread Rows template in
/themes/forum\_themes/theme\_name/theme\_threads.php. Replace::

	{if can_post}     <td align="center"><div class="button100"><div class="buttonSmall" id="{id3}" onclick="navJump('{path:quote_reply}')" onmouseover="navHover(this);" onmouseout="navReset(this);">{lang:quote}</div></div></td>         {/if}

with::

	{if is_post}     {if can_move}         <td><div class="button100"><div class="buttonSmall" id="{id10}" onclick="navJump('{path:move_reply}')" onmouseover="navHover(this);" onmouseout="navReset(this);">{lang:move}</div></div></td>     {/if}     {/if}          {if can_post}     <td align="center"><div class="button100"><div class="buttonSmall" id="{id3}" onclick="navJump('{path:quote_reply}')" onmouseover="navHover(this);" onmouseout="navReset(this);">{lang:quote}</div></div></td>     {/if}

Search Results
--------------

Search results in Discussion Forum module version 1.4 can link directly
to the reply in which search terms were found, or even link to a
separate "search\_thread" for greater granularity in situations where
search terms are repeated many times in a given thread. This requires a
modification of your Search Results Rows template in
/themes/forum\_themes/theme\_name/theme\_search.php. The {if
reply\_results} conditionals can be used to give complete control to how
the results are presented. The default themes use the following.
Replace::

	{topic_type}<a href="{path:view_thread}" title="{topic_title}" ><b>{topic_title}</b></a>

with::

	{if reply_results == 0}     {topic_type}<a href="{path:view_thread}" title="{topic_title}" ><b>{topic_title}</b></a>     {if:elseif reply_results < 6}     {topic_type}<a href="{path:view_thread}" title="{topic_title}" ><b>{topic_title}</b></a>     <br /><span class="smallLinks">{lang:found_in} <ul>{include:reply_results}</ul></span>     {if:else}     {topic_type}<a href="{path:view_thread}" title="{topic_title}" ><b>{topic_title}</b></a>     <br /><span class="smallLinks">{lang:found_in_many} - <a href="{path:search_thread}">{lang:search_thread}</a></span>     {/if}

Additionally, there are some new templates that you need to add. You
will have to edit the
/themes/forum\_themes/theme\_name/theme\_search.php file directly for
this addition. Just before::

	}     // END CLASS     ?>

Add the following::

	//-------------------------------------     //  Search Thread Page     //-------------------------------------      function search_thread_page()     {     return <<< EOF     {include:html_header}     {include:top_bar}     {include:page_header}     {include:page_subheader}     <div id="content">     {include:thread_search_results}     </div>     {include:html_footer}     EOF;     }     /* END */            //-------------------------------------     //  Reply Results     //-------------------------------------      function reply_results()     {     return <<< EOF     <li><a href="{path:viewreply}">{snippet}&hellip;</a> by <a href="{path:member_profile}">{author}</a></li>     EOF;     }     /* END */        //-------------------------------------     //  Search Results     //-------------------------------------      function thread_search_results()     {     return <<< EOF      <table cellpadding="3" cellspacing="0" border="0" style="width:98%;" >     <tr>     <td valign="middle"><div class="itempadbig"><div class="defaultBold">{lang:keywords} {keywords}</div></div>     </td>     <td align="right"><div class="defaultBold">Total Results: {total_results}</div>     </td>     </tr>     </table>       <table class="tableBorderLeft" cellpadding="0" cellspacing="0" border="0" style="width:100%;" >     <tr>     <td class="tableHeadingBG" colspan="5"><div class="tableHeading">{lang:search_results}</div></td>     </tr><tr>     <td class="tableRowHeadingBold" colspan="2" style="width:62%;">{lang:replies_in_topic} <em>{topic_title}</em></td>     <td class="tableRowHeadingBold" style="width:38%;">{lang:reply_info_heading}</td>     </tr>     {include:thread_result_rows}     </table>       <table cellpadding="0" cellspacing="0" border="0" >     <tr>     <td class="itempadbig" valign="bottom">     {if paginate}     <table cellpadding="0" cellspacing="0" border="0" class="paginateBorder">     <tr>     <td><div class="paginateStat">{current_page} of {total_pages}</div></td>     {pagination_links}     </tr>     </table>     {/if}     </td>     </tr>     </table>     EOF;     }     /* END */        //-------------------------------------     //  Thread Result Rows     //-------------------------------------      function thread_result_rows()     {     return <<< EOF     <tr>     <td class="tableCellTwo" style="width:4%;" align="center"><a href="{path:view_thread}"><img src="{topic_marker}" width="24" height="18" border="0" alt="{topic_title}" title="{topic_title}" /></a></td>     <td class="tableCellOne" style="width:62%;">     <div class="topicTitle">     <a href="{path:viewreply}" title="{lang:view_reply}" >{snippet}&hellip;</a>     <div class="forumLightLinks">{lang:posted_by} <a href="{path:member_profile}">{author}</a></div>     </div>     </td>     <td class="tableCellOne" style="width:38%;">     <div class="tablePostInfo">     {lang:posted_on} {post_date format="%m-%d-%Y %h:%i %A"}     </div>     </td>     </tr>     EOF;     }     /* END */

`Return to Update Page <forum_update.html>`_

`ExpressionEngine <http://expressionengine.com/>`_ – Copyright ©
2002-2011 – `EllisLab, Inc. <http://ellislab.com/>`_
