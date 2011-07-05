Forum Update Notes for Version 1.3.2
====================================

The Discussion Forum Module Version 1.3.2 requires ExpressionEngine
Version 1.5.2 (or greater)

Version 1.3.2 has a number of template additions.

If you have **not** customized your existing forum templates:
-------------------------------------------------------------

Simply replace your entire forum theme folder with the new set:

themes/forum\_themes/

The update process is now complete. You can disregard the rest of the
information in this page.

If you **have** customized your existing templates:
---------------------------------------------------

If you have customized the look of your forum you will need to manually
add the new template features described below. Version 1.3.2 has a great
deal of small changes due to a refinement in semantic meaning of topics,
replies, and posts. Depending on the extent of your own customizations,
you may find it easier to start from a fresh copy of the default themes
and add your own changes back in.

Incorporating New Features
==========================

The information below assumes you are running customized templates. If
you are using the default theme there is no need to use the information
below.


Edit Date Indicators
--------------------

In conjunction with the new "Display Edit Dates" preference setting, the
following template additions allow you to display the date a post was
edited. You can use the markup and CSS styling that you wish; the
following is the suggested presentation, and is what was used in the
default themes.

Thread Rows
~~~~~~~~~~~

To add this feature you will need to add the following code to your
Thread Rows template in
/themes/forum\_themes/theme\_name/theme\_threads.php. Add the following
in-between the body and the signature & attachment section::

	{if edited}<div class="edited"><em>[ {lang:edited}: {edit_date format="%d %F %Y %h:%i %A"} {lang:by} <a href="{path:edit_author_profile}">{edit_author}</a> ]</em></div>{/if}

In its context, it should look like::

	<td class="tableCellOne" valign="top" colspan="2"><div class="post">{body}</div>     {if edited}<div class="edited"><em>[ {lang:edited}: {edit_date format="%d %F %Y %h:%i %A"} {lang:by} <a href="{path:edit_author_profile}">{edit_author}</a> ]</em></div>{/if}     {if attachments}     {include:post_attachments}     {/if}     {if signature}     {include:signature}     {/if}     </td>

CSS Stylesheet
~~~~~~~~~~~~~~

You will also need to add the following code to your CSS Stylesheet
template in /themes/forum\_themes/theme\_name/theme\_css.php. It is
suggested that you add this style rule to the "Forum related text
formatting" section::

	.edited {     font-size:    9px;     color:          #555;     }

Ignore Feature
--------------

Version 1.3.2 has added the ability for members to "ignore" other
members, which will automatically hide any posts made by members on
their ignore list. The following templates will need to be modified with
the recommended presentation as follows.

Topics
~~~~~~

At the very top of the Topics template in
/themes/forum\_themes/theme\_name/theme\_topics.php (after return <<<
EOF if you are editing the PHP file), add::

	<script type="text/javascript">     <!--      function showHideRow(el)     {     if (document.getElementById(el).style.display == "")     {         document.getElementById(el).style.display = "none";     }     else     {         document.getElementById(el).style.display = "";     }        }     //-->     </script>

Topic Rows
~~~~~~~~~~

At the top of the Topic Rows template in
/themes/forum\_themes/theme\_name/theme\_topics.php, change::

	<tr>

to::

	{if is_ignored}     <tr>  <td class="tableCellOne" colspan="5">   {lang:topic_hidden} <strong>{author}</strong> {lang:is_ignored}.   <span style="float:right"><a href="#" onclick="showHideRow('{id1}');return false;">{lang:view_hide}</a> &bull;   <a href="{path:ignore}">{lang:stop_ignoring} {author}</a></span>  </td>     </tr>     {/if}          <tr id="{id1}" {if is_ignored}style="display: none;"{/if}>

Threads
~~~~~~~

At the top of the Threads template in
/themes/forum\_themes/theme\_name/theme\_threads.php, change::

	function showfastreply()     {     if (document.getElementById('fastreply').style.display == "block")     {         document.getElementById('fastreply').style.display = "none";     }     else     {         document.getElementById('fastreply').style.display = "block";     }     }      //-->     </script>

to::

	function showfastreply()     {     if (document.getElementById('fastreply').style.display == "block")     {         document.getElementById('fastreply').style.display = "none";     }     else     {         document.getElementById('fastreply').style.display = "block";     }     }      function showHideRow(el)     {     if (document.getElementById(el).style.display == "")     {         document.getElementById(el).style.display = "none";     }     else     {         document.getElementById(el).style.display = "";     }        }     //-->     </script>

Also, in the Threads template in
/themes/forum\_themes/theme\_name/theme\_threads.php, change any cases
of the word "of" to {lang:of}.

Thread Rows
~~~~~~~~~~~

At the top of the Thread Rows template in
/themes/forum\_themes/theme\_name/theme\_threads.php, change::

	<tr>

to::

	{if is_ignored}     <tr>  <td colspan="3">   <table class="ignored" style="width:100%">    <tr>    <td class="tableCellOne" colspan="3">     {lang:post_hidden} <strong>{author}</strong> {lang:is_ignored}.     <span style="float:right"><a href="#" onclick="showHideRow('{id9}');return false;">{lang:view_hide}</a> &bull;     <a href="{path:ignore}">{lang:stop_ignoring} {author}</a></span>    </td>    </tr>   </table>  </td>     </tr>     {/if}      <tr id="{id9}" {if is_ignored}style="display: none;"{/if}>

and just before the post permalink (shown below)

``{if is_post}&nbsp;&nbsp;<span class="smallLinks">[ <a name="{post_id}" href="{path:post_link}" title="{lang:post_permalink}"># {post_number}</a> ]</span>{/if}``

Add::

	&nbsp;&nbsp;<span class="smallLinks">[ <a href="{path:ignore}" title="{lang:ignore}">{lang:ignore}</a> ]</span>

Thread Review
~~~~~~~~~~~~~

At the top of the Thread Review template in
/themes/forum\_themes/theme\_name/theme\_threads.php, change::

	function showhide_topic_review()     {     if (document.getElementById('review_on').style.display == "block")     {         document.getElementById('review_on').style.display = "none";         document.getElementById('review_off').style.display = "block";                   }     else     {         document.getElementById('review_on').style.display = "block";         document.getElementById('review_off').style.display = "none";     }     }      //-->     </script>

to::

	function showhide_topic_review()     {     if (document.getElementById('review_on').style.display == "block")     {         document.getElementById('review_on').style.display = "none";         document.getElementById('review_off').style.display = "block";                   }     else     {         document.getElementById('review_on').style.display = "block";         document.getElementById('review_off').style.display = "none";     }     }      function showHideRow(el)     {     if (document.getElementById(el).style.display == "")     {         document.getElementById(el).style.display = "none";     }     else     {         document.getElementById(el).style.display = "";     }        }     //-->     </script>

Thread Review Rows
~~~~~~~~~~~~~~~~~~

At the top of the Thread Review Rows template in
/themes/forum\_themes/theme\_name/theme\_threads.php, change::

	<tr>

to::

	{if is_ignored} <tr>  <td colspan="3">   <table class="ignored" style="width:100%">    <tr>    <td class="tableCellOne">     {lang:post_hidden} <strong>{author}</strong> {lang:is_ignored}.     <span style="float:right"><a href="#" onclick="showHideRow('{id1}');showHideRow('{id2}');return false;">{lang:view_hide}</a> &bull;     <a href="{path:ignore}">{lang:stop_ignoring} {author}</a></span>    </td>    </tr>   </table>  </td>     </tr>     {/if}      <tr id="{id1}" {if is_ignored}style="display: none;"{/if}>

and about sixteen lines below that, you will find and change

::

	</tr><tr>

to::

	</tr><tr id="{id2}" {if is_ignored}style="display: none;"{/if}>

CSS Stylesheet
~~~~~~~~~~~~~~

You will also need to add the following code to your CSS Stylesheet
template in /themes/forum\_themes/theme\_name/theme\_css.php. Change the
border color, margins, and other styling as necessary to match your
customized theme. It is suggested that you add this style rule to the
"Table Formatting" section::

	.ignored {   border:               1px solid #B2B3CE;   padding:             0;   margin-top:        1px;   margin-bottom:  8px;     }

Member Profile Templates
~~~~~~~~~~~~~~~~~~~~~~~~

The following changes apply to Member Profile Templates

Member Profile Menu - menu()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Change::

	<div class='borderTopBot'><div class='profileHead'>{lang:subscriptions}</div></div>      <div class='profileMenuInner'>     <div class='menuItem'><a href='{path:subscriptions}' >{lang:edit_subscriptions}</a></div>     </div>

to::

	<div class='borderTopBot'><div class='profileHead'>{lang:utilities}</div></div>      <div class='profileMenuInner'>     <div class='menuItem'><a href='{path:subscriptions}' >{lang:edit_subscriptions}</a></div>     <div class='menuItem'><a href='{path:ignore_list}' >{lang:ignore_list}</a></div>     </div>

Public Member Profile - public\_profile()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Change::

	<div class='itempadbig'><a href="{search_path}"><b>{lang:view_posts_by_member}</b></a></div>

to::

	<div class='itempadbig'><a href="{search_path}"><b>{lang:view_posts_by_member}</b></a></div>     {if ignore}   <div class='itempad'><b>{ignore_link}</b></div>     {/if}

Finally, there are two new templates that need to be added. You will
have to edit the /themes/forum\_themes/theme\_name/theme\_member.php
file directly for this addition. Just before::

	}     // END CLASS     ?>

Put the following::

	/* -------------------------------------     /*  Edit Ignore List Form     /* -------------------------------------*/      function edit_ignore_list_form()     {     return <<<PHARLEY      {include:toggle_js}      <div class='menuHeadingBG'><div class="tableHeading">{include:member_search} {lang:ignore_list}</div></div>      {if success_message}<div class='tableCellOne'><div class='success'>{lang:message}</div></div>{/if}      {form:form_declaration}      <table border='0'  cellspacing='0' cellpadding='0' style='width:100%;'  class='tableBorderTopLeft' >      <tr>      <td  class='tableCellOne'  style='width:80%;'>     <div class='defaultBold'>{lang:screen_name}</div>     </td>      <td  class='tableCellOne'  style='width:5%;'>     <div class='defaultBold'><input class='checkbox' type='checkbox' name='toggleflag' value='' onclick="toggle(this);" />     </div>     </td>      </tr>      {include:edit_ignore_list_rows}      </table>      <div class="itempad">     <div class='defaultRight'>{form:add_button}&nbsp;&nbsp;{form:delete_button}&nbsp;&nbsp;</div>     </div>      </form>     PHARLEY;     }     /* END */       /* -------------------------------------     /*  Edit Ignore List Rows     /* -------------------------------------*/      function edit_ignore_list_rows()     {     return <<<PHARLEY     <tr>     <td class="{class}"><a href="{path:profile_link}">{name}</a></td>     <td class="{class}"><input type='checkbox' name='toggle[]' value='{member_id}' /> </td>     </tr>     PHARLEY;     }     /* END */

Theme Ignore
~~~~~~~~~~~~

There is also a new template file,
/themes/forum\_themes/default/theme\_ignore.php that you will need to
copy to your customized theme folder. One you have uploaded the file to
your theme folder, it will be available in the Templates section of the
Discussion Forum Control Panel. Remember that to edit it in that
location, the permissions will need to be set to 666.

Language Changes for Topics, Replies, and Posts
-----------------------------------------------

In previous versions of the Discussion Forum module, the term "Posts"
had multiple meanings depending on the context. It could mean either
"replies" to a topic, or a sum of both "topics" and "replies". Version
1.3.2 refines this and simply specifies that "topic" means the topic,
"replies" means the replies to the topic, and "posts" is the sum of
"topics" and "replies". This creates a number of areas that need minor
modifications in your templates, as follows:

Archive Templates /themes/forum\_themes/theme\_name/theme\_archive.php
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In the Recent Post Table template, replace both instances of::

	{lang:total_posts_heading}

with::

	{lang:total_replies_heading}

In both the Most Popular Post Item and Most Recent Topics Item
templates, replace::

	{posts}

with::

	{replies}

Index Templates /themes/forum\_themes/theme\_name/theme\_index.php
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In the Forum Table Heading template, replace::

	{lang:total_posts_heading}

with::

	{lang:total_replies_heading}

In the Forum Table Rows template, replace::

	{total_posts}

with::

	{total_replies}

Stats Templates /themes/forum\_themes/theme\_name/theme\_stats.php
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In the Visitor Stats template, replace::

	<div class="itempad">{lang:total_posts} {total_forum_posts}</div>

with::

	<div class="itempad">{lang:total_replies} {total_forum_replies}</div>     <div class="itempad">{lang:total_posts} {total_forum_posts}</div>

Topic View Templates /themes/forum\_themes/theme\_name/theme\_topics.php
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In the Topics template, replace::

	{lang:total_posts_heading}

with::

	{lang:total_replies_heading}

In the Topic Rows template, replace::

	{total_posts}

with::

	{total_replies}

Member Profile Templates
/themes/forum\_themes/theme\_name/theme\_member.php
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In the Member Profile Home Page template, replace::

	</tr><tr>      <td class='tableCellOne'><div class='defaultBold'>{lang:total_forum_posts}</div></td>     <td class='tableCellOne'>{total_posts}</td>      {/if}      </tr><tr>      <td class='tableCellTwo'><div class='defaultBold'>{lang:total_entries}</div></td>     <td class='tableCellTwo'>{total_entries}</td>      </tr><tr>      <td class='tableCellOne'><div class='defaultBold'>{lang:total_comments}</div></td>     <td class='tableCellOne'>{total_comments}</td>

with::

	</tr><tr>      <td class='tableCellOne'><div class='defaultBold'>{lang:total_forum_replies}</div></td>     <td class='tableCellOne'>{total_replies}</td>      </tr><tr>      <td class='tableCellTwo'><div class='defaultBold'>{lang:total_forum_posts}</div></td>     <td class='tableCellTwo'>{total_posts}</td>      {/if}      </tr><tr>      <td class='tableCellOne'><div class='defaultBold'>{lang:total_entries}</div></td>     <td class='tableCellOne'>{total_entries}</td>      </tr><tr>      <td class='tableCellTwo'><div class='defaultBold'>{lang:total_comments}</div></td>     <td class='tableCellTwo'>{total_comments}</td>

In the Public Member Profile template, replace::

	</tr><tr>      <td class='tableCellTwo'><div class='defaultBold'>{lang:total_forum_posts}</div></td>     <td class='tableCellOne'><div class='default'>{total_forum_posts}</div></td>

with::

	</tr><tr>      <td class='tableCellTwo'><div class='defaultBold'>{lang:total_forum_replies}</div></td>     <td class='tableCellOne'><div class='default'>{total_forum_replies}</div></td>          </tr><tr>      <td class='tableCellTwo'><div class='defaultBold'>{lang:total_forum_posts}</div></td>     <td class='tableCellOne'><div class='default'>{total_forum_posts}</div></td>

Notification Option for Moderation Actions
------------------------------------------

This feature allows you to choose whether or not you wish a notification
email to be sent to the thread owner when performing a moderation
action, such as moving, merging, or splitting the thread.

Merge Topics
~~~~~~~~~~~~

To add this feature you will need to add the following code to your
Merge Interface template in
/themes/forum\_themes/theme\_name/theme\_merge.php. Just before the
submit button, you will add a new table row and form element. Change::

	</tr><tr>      <td class="tableCellTwo">     <div class="itempadbig"><input type="submit" name="submit" class="submit" value="{lang:merge_threads}" /></div>     </td>

to::

	</tr><tr>      <td class="tableCellTwo">     <div class="itempad"><input type="checkbox" class="checkbox" name="notify" value="1" checked="checked" /> {lang:notify_thread_owner}</div>     </td>      </tr><tr>      <td class="tableCellTwo">     <div class="itempadbig"><input type="submit" name="submit" class="submit" value="{lang:merge_threads}" /></div>     </td>

Move Topics
~~~~~~~~~~~

To add this feature you will need to add the following code to your Move
Topic Confirmation template in
/themes/forum\_themes/theme\_name/theme\_move\_topic.php. Change::

	<td class="tableCellTwo"><input type="checkbox" class="checkbox" name="redirect" value="1" checked="checked" /> {lang:retain_move_link}</td>

to::

	<td class="tableCellTwo">     <div class="itempad"><input type="checkbox" class="checkbox" name="redirect" value="1" checked="checked" /> {lang:retain_move_link}</div>     <div class="itempad"><input type="checkbox" class="checkbox" name="notify" value="1" checked="checked" /> {lang:notify_thread_owner}</div>     </td>

Split Topics
~~~~~~~~~~~~

To add this feature you will need to add the following code to your
Split Data template in
/themes/forum\_themes/theme\_name/theme\_split.php. You will need to add
a new table row and form element. Change::

	{if forums_exist}         <tr>         <td class="tableCellOne"><div class="itempadbig">{lang:forum}          <select name="forum_id" class="select">         {split_select_options}         </select>         </div></td>         </tr>     {/if}      <tr>

to::

	{if forums_exist}         <tr>         <td class="tableCellOne"><div class="itempadbig">{lang:forum}          <select name="forum_id" class="select">         {split_select_options}         </select>         </div></td>         </tr>     {/if}      <tr>      <td class="tableCellOne">     <div class="itempad"><input type="checkbox" class="checkbox" name="notify" value="1" checked="checked" /> {lang:notify_thread_owner}</div>     </td>      </tr><tr>

Report Post Feature
-------------------

Thread Rows
~~~~~~~~~~~

To add this feature you will need to add the following code to your
Thread Rows template in
/themes/forum\_themes/theme\_name/theme\_threads.php. Change::

	 {if can_ban}&nbsp;&nbsp;<span class="smallLinks">[ <a href="{path:ban_member}">{lang:ban_member}</a> ]</span>{/if}

to::

	{if can_ban}&nbsp;&nbsp;<span class="smallLinks">[ <a href="{path:ban_member}">{lang:ban_member}</a> ]</span>{/if}      {if can_report}&nbsp;&nbsp;<span class="smallLinks">[ <a href="{path:report}" title="{lang:report}">{lang:report}</a> ]</span>{/if}

Theme Report
~~~~~~~~~~~~

There is also a new template file,
/themes/forum\_themes/default/theme\_report.php that you will need to
copy to your customized theme folder. One you have uploaded the file to
your theme folder, it will be available in the Templates section of the
Discussion Forum Control Panel. Remember that to edit it in that
location, the permissions will need to be set to 666.

Search by Member Group
----------------------

Advanced Search Form
~~~~~~~~~~~~~~~~~~~~

To add this feature you will need to add the following code to your
Advanced Search Form template in
/themes/forum\_themes/theme\_name/theme\_search.php. Change::

	<fieldset class="searchBox">     <legend class="searchBoxTitle">{lang:search_by_member_name}</legend>      <input type="text" class="input" maxlength="100" size="40" name="member_name" style="width:100%;" />     <div class="searchpad"><input type="checkbox" class="checkbox" name="exact_match" value="y"  /> {lang:exact_name_match}</div>     </fieldset>

to::

	<script type="text/javascript" charset="utf-8">     function switchto(el)     {         if (el == 'byMemberGroup')         {             document.getElementById('byMemberGroup').style.display = "";             document.getElementById('byMemberName').style.display = "none";         }         else         {             document.getElementById('byMemberGroup').style.display = "none";             document.getElementById('byMemberName').style.display = "";                      }     }     </script>      <fieldset id="byMemberName" class="searchBox">     <legend class="searchBoxTitle">{lang:search_by_member_name} - (<a href="#" onclick="switchto('byMemberGroup'); return false;">{lang:switch_to_group}</a>)</legend>      <input type="text" class="input" maxlength="100" size="40" name="member_name" style="width:100%;" />     <div class="searchpad"><input type="checkbox" class="checkbox" name="exact_match" value="y"  /> {lang:exact_name_match}</div>     </fieldset>      <fieldset id="byMemberGroup" class="searchBox" style="display: none;">     <legend class="searchBoxTitle">{lang:search_by_member_group} - (<a href="#" onclick="switchto('byMemberName'); return false;">{lang:switch_to_name}</a>)</legend>      <select name='member_group[]' class='multiselect' size='5' style="width:100%;" multiple='multiple'>     {member_group_select_options}     </select>     </fieldset>

`Return to Update Page <forum_update.html>`_

`ExpressionEngine <http://expressionengine.com/>`_ – Copyright ©
2002-2011 – `EllisLab, Inc. <http://ellislab.com/>`_
