Forum Update Notes for Version 1.3
==================================

Version 1.3 has a number of additional templates.

If you have **not** customized your existing forum templates:
-------------------------------------------------------------

Simply replace your entire forum theme folder with the new set:

themes/forum\_themes/default/

The update process is now complete. You can disregard the rest of the
information in this page.

If you **have** customized your existing templates:
---------------------------------------------------

If you have customized the look of your forum you will need to manually
add the new theme files and template features described below.

Please add the following theme files to your current installation:

-  themes/forum\_themes/default/theme\_atom.php
-  themes/forum\_themes/default/theme\_javascript.php
-  themes/forum\_themes/default/theme\_merge.php
-  themes/forum\_themes/default/theme\_rss.php
-  themes/forum\_themes/default/theme\_split.php

Incorporating New Features
==========================

The information below assumes you are running customized templates. If
you are using the default theme there is no need to use the information
below.

<body> Modification
-------------------

Version 1.3 requires a small change in the <body> tag. Open your HTML
Header template found in theme\_global.php and change::

	<body>

To this::

	<body {include:body_extra}>

RSS Feeds
---------

To show RSS links place the following code in your HTML Footer template,
found in theme\_global.php
``     {if feeds_enabled}     <a href="{path:rss}">{lang:rss_feed}</a>     <a href="{path:atom}">{lang:atom_feed}</a>     {/if}``

Merging and Splitting
---------------------

To take advantage of the merging and splitting features open your Thread
Rows template found in theme\_threads.php and change this::

	 {if is_topic}     {if can_move}         <td><div class="button100"><div class="buttonSmall" id="{id6}" onClick="navJump('{path:move_topic}')" onMouseOver="navHover(this);" onMouseOut="navReset(this);">{lang:move}</div></div></td>     {/if} {/if}

To this::

	{if is_topic}     {if can_move}         <td><div class="button100"><div class="buttonSmall" id="{id6}" onClick="navJump('{path:move_topic}')" onMouseOver="navHover(this);" onMouseOut="navReset(this);">{lang:move}</div></div></td>     {/if}     {if can_merge}         <td><div class="button100"><div class="buttonSmall" id="{id7}" onClick="navJump('{path:merge_topic}')" onMouseOver="navHover(this);" onMouseOut="navReset(this);">{lang:merge}</div></div></td>     {/if}     {if can_split}         <td><div class="button100"><div class="buttonSmall" id="{id8}" onClick="navJump('{path:split_topic}')" onMouseOver="navHover(this);" onMouseOut="navReset(this);">{lang:split}</div></div></td>     {/if} {/if}

Next/Previous Topic Links
-------------------------

To add next/previous topic links to your thread view, open your Thread
template found in theme\_threads.php and add this::

	 {if previous_topic} ‹‹ <a href="{path:previous_topic_url}">{previous_topic_title}</a>  {/if}  {if next_topic}      <a href="{path:next_topic_url}">{next_topic_title}</a> ›› {/if}

Active Topic Link
-----------------

To add the "view today's active topics" link to your forum, open your
Forum Homepage template found in theme\_index.php and add::

	<a href="{path:view_active_topics}">{lang:view_active_topics}</a>

Showing/Hiding forums on the home page
--------------------------------------

Version 1.3 allows each forum cluster on your home page to be
shown/hidden by your users. It utilizes some JavaScript and a cookie to
save the state of the home page. In order to add this feature open your
Table Heading template found in theme\_index.php and replace your
existing code with this::

	<div id="forum{category_id}off" style="display:none;"> <table class="tableBorder" cellpadding="0" cellspacing="0" border="0" style="width:100%;" > <tr> <td class="tableHeadingBG"><div class="tableHeading">{category_name}</div>     {if category_description}<div class="tableHeadingSmall">{category_description}</div>{/if} </td> <td class="tableHeadingBG" align="right"> <a href="javascript:void(0);" onclick="show_element('forum{category_id}')"><img src="{path:image_url}expand.gif" width="10" height="10" border="0" title="{lang:show_category}" alt="{lang:show_category}" /></a>  </td> </tr> </table> </div>  <div id="forum{category_id}on" style="display:block;"> <table class="tableBorderLeft" cellpadding="0" cellspacing="0" border="0" style="width:100%;" > <tr> <td class="tableHeadingBG" colspan="4"><div class="tableHeading">{category_name}</div>     {if category_description}<div class="tableHeadingSmall">{category_description}</div>{/if} </td> <td class="tableHeadingBG" colspan="1" align="right"> <a href="javascript:void(0);" onclick="hide_element('forum{category_id}')"><img src="{path:image_url}collapse.gif" width="10" height="10" border="0" title="{lang:hide_category}" alt="{lang:hide_category}" /></a> </td> </tr> <tr> <td class="tableRowHeadingBold" colspan="2">{lang:forum_name_heading}</td> <td class="tableRowHeadingBold" align="center">{lang:total_topics_heading}</td> <td class="tableRowHeadingBold" align="center">{lang:total_posts_heading}</td> <td class="tableRowHeadingBold">{lang:post_info_heading}</td> </tr>

Then, at the very bottom, before the end of the HTML in the Table Footer
template, add a closing </div> tag::

	</div>

:doc:`Return to Update Page <forum_update>`

`ExpressionEngine <http://expressionengine.com/>`_ – Copyright ©
2002-2011 – `EllisLab, Inc. <http://ellislab.com/>`_
