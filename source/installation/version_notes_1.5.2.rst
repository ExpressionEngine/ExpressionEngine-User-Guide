Update Notes for Version 1.5.2
==============================

ExpressionEngine 1.5.2 includes a number of new features and updates.
Reviewing the notes below will help you transition to 1.5.2 with as
little effort as possible.


            

Profile Theme Updates
---------------------

Version 1.5.2 has some changes in the member theme file
/themes/profile\_themes/default/profile\_theme.php, so either replace
that file or if you have a customized the Member Profile theme add the
following code.

Ignore List Form
~~~~~~~~~~~~~~~~

There are two new templates that need to be added. You will have to edit
the /themes/profile\_themes/theme\_name/profile\_theme.php file directly
for this addition. Just before::

	}     // END CLASS     ?>

Put the following::

	/* -------------------------------------     /*  Edit Ignore List Form     /* -------------------------------------*/      function edit_ignore_list_form()     {     return <<<PHARLEY      {include:toggle_js}      <div class='menuHeadingBG'><div class="tableHeading">{include:member_search} {lang:ignore_list}</div></div>      {if success_message}<div class='tableCellOne'><div class='success'>{lang:message}</div></div>{/if}      {form:form_declaration}      <table border='0'  cellspacing='0' cellpadding='0' style='width:100%;'  class='tableBorderTopLeft' >      <tr>      <td  class='tableCellOne'  style='width:80%;'>     <div class='defaultBold'>{lang:screen_name}</div>     </td>      <td  class='tableCellOne'  style='width:5%;'>     <div class='defaultBold'><input class='checkbox' type='checkbox' name='toggleflag' value='' onclick="toggle(this);" />     </div>     </td>      </tr>      {include:edit_ignore_list_rows}      </table>      <div class="itempad">     <div class='defaultRight'>{form:add_button}&nbsp;&nbsp;{form:delete_button}&nbsp;&nbsp;</div>     </div>      </form>     PHARLEY;     }     /* END */       /* -------------------------------------     /*  Edit Ignore List Rows     /* -------------------------------------*/      function edit_ignore_list_rows()     {     return <<<PHARLEY     <tr>     <td class="{class}"><a href="{path:profile_link}">{name}</a></td>     <td class="{class}"><input type='checkbox' name='toggle[]' value='{member_id}' /> </td>     </tr>     PHARLEY;     }     /* END */

Member Profile Home Page Template - home\_page()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Change::

	</tr><tr>      <td class='tableCellOne'><div class='defaultBold'>{lang:total_forum_posts}</div></td>     <td class='tableCellOne'>{total_posts}</td>      {/if}      </tr><tr>      <td class='tableCellTwo'><div class='defaultBold'>{lang:total_entries}</div></td>     <td class='tableCellTwo'>{total_entries}</td>      </tr><tr>      <td class='tableCellOne'><div class='defaultBold'>{lang:total_comments}</div></td>     <td class='tableCellOne'>{total_comments}</td>

to::

	</tr><tr>      <td class='tableCellOne'><div class='defaultBold'>{lang:total_forum_replies}</div></td>     <td class='tableCellOne'>{total_replies}</td>      </tr><tr>      <td class='tableCellTwo'><div class='defaultBold'>{lang:total_forum_posts}</div></td>     <td class='tableCellTwo'>{total_posts}</td>      {/if}      </tr><tr>      <td class='tableCellOne'><div class='defaultBold'>{lang:total_entries}</div></td>     <td class='tableCellOne'>{total_entries}</td>      </tr><tr>      <td class='tableCellTwo'><div class='defaultBold'>{lang:total_comments}</div></td>     <td class='tableCellTwo'>{total_comments}</td>

Member Profile Menu - menu()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Change::

	<div class='borderTopBot'><div class='profileHead'>{lang:subscriptions}</div></div>      <div class='profileMenuInner'>     <div class='menuItem'><a href='{path:subscriptions}' >{lang:edit_subscriptions}</a></div>     </div>

to::

	<div class='borderTopBot'><div class='profileHead'>{lang:utilities}</div></div>      <div class='profileMenuInner'>     <div class='menuItem'><a href='{path:subscriptions}' >{lang:edit_subscriptions}</a></div>     <div class='menuItem'><a href='{path:ignore_list}' >{lang:ignore_list}</a></div>     </div>

Public Member Profile Template - public\_profile()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Change::

	<div class='itempadbig'><a href="{search_path}"><b>{lang:view_posts_by_member}</b></a>

to::

	<div class='itempadbig'><a href="{search_path}"><b>{lang:view_posts_by_member}</b></a></div>     {if ignore}       <div class='itempad'><b>{ignore_link}</b></div>     {/if}

change::

	</tr><tr>      <td class='tableCellTwo'><div class='defaultBold'>{lang:total_forum_posts}</div></td>     <td class='tableCellOne'><div class='default'>{total_forum_posts}</div></td>

to::

	</tr><tr>      <td class='tableCellTwo'><div class='defaultBold'>{lang:total_forum_topics}</div></td>     <td class='tableCellOne'><div class='default'>{total_forum_topics}</div></td>      </tr><tr>      <td class='tableCellTwo'><div class='defaultBold'>{lang:total_forum_posts}</div></td>     <td class='tableCellOne'><div class='default'>{total_forum_posts}</div></td>

Language Additions
------------------

ExpressionEngine 1.5.2 has a number of language file additions. To
assist translators in updating their language packs, a :download:`language notes
text file <language_notes_1.5.2.txt>` has been provided. This text file
lists all of the new language keys, separated by the each language file
that contains changes. To update your language pack, you can download
this text file, make the changes, and simply copy the new keys to the
appropriate language files.

`Return to Update Page <update.html>`_

`ExpressionEngine <http://expressionengine.com/>`_ – Copyright ©
2002-2011 – `EllisLab, Inc. <http://ellislab.com/>`_
