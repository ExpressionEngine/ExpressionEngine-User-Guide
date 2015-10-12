Forum Update Notes for Version 1.3.1
====================================

Version 1.3.1 has a number of template additions.

Forum on a Subdomain
--------------------

If you have set up your forum to run on a different domain or a
subdomain, then instead of modifying the $use\_forum\_url variable in
the file, there is a new config.php option available:

::

    $config['use_forum_url'] = "y";

Simply add the option to the config.php file for your site, and you will
no longer have to modify the file after updates.

If you have **not** customized your existing forum templates:
-------------------------------------------------------------

Simply replace your entire forum theme folder with the new set:

themes/forum\_themes/default/

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


Theme Switcher
--------------

The "theme switcher" feature permits you to display a pull-down menu on
your forum home page containing a list of all your installed themes.
Users can then choose from this menu to select a theme of their choice.

To add this feature you will need to add the following code to your HTML
Footer template in /themes/forum\_themes/default/theme\_global.php.
Change::

	{if in_forum}     <div class="itempadbig">     <select name="theme_switcher" class="select" onchange="if (this.value != '') location.href=this.value">     <option value="">{lang:select_theme}</option>     {include:theme_option_list}     </select>     </div>     {/if}

Post Anchors
------------

A couple of new variables were added to some of the templates in Version
1.3.1 which allows you to create post anchors.

Adding Post Anchors to Topic Rows
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To enable post anchors in the "Latest Post Info" area of your topic
listings ("**viewforum**" in the URL), you will need to make a small
modification to your Topic Rows template in
/themes/forum\_themes/default/theme\_topics.php. Change::

	<div class="tablePostInfo">     {lang:posted_on} {last_reply format="%m-%d-%Y %h:%i %A"}<br />     {lang:posted_by} <a href="{path:reply_member_profile}">{reply_author}</a> </div>

to::

	<div class="tablePostInfo">     {if is_topic}{lang:posted_on} {last_reply format="%m-%d-%Y %h:%i %A"}<br />{/if}     {if is_post}<a href="{path:post_link}">{lang:posted_on} {last_reply format="%m-%d-%Y %h:%i %A"}</a><br />{/if}     {lang:posted_by} <a href="{path:reply_member_profile}">{reply_author}</a> </div>

Adding Post Anchors to Thread Rows
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To enable post anchors on the posts in thread rows, you will need to
make a small modification to your Thread Rows template in
/themes/forum\_themes/default/theme\_threads.php. Change::

	{if is_topic}     {if can_change_status}&nbsp;&nbsp;<span class="smallLinks">[ <a href="{path:change_status}">{lang:change_status}</a> ]</span>{/if}     {/if}     {if can_ban}&nbsp;&nbsp;<span class="smallLinks">[ <a href="{path:ban_member}">{lang:ban_member}</a> ]{/if}     &nbsp;

to::

	{if is_topic}     {if can_change_status}&nbsp;&nbsp;<span class="smallLinks">[ <a href="{path:change_status}">{lang:change_status}</a> ]</span>{/if}     {/if}     {if can_ban}&nbsp;&nbsp;<span class="smallLinks">[ <a href="{path:ban_member}">{lang:ban_member}</a> ]{/if}     {if is_post}&nbsp;&nbsp;<span class="smallLinks">[ <a name="{post_id}" href="{path:post_link}" title="{lang:post_permalink}"># {post_number}</a> ]</span>{/if}     &nbsp;

Pagination for Thread Splitting
-------------------------------

Due to extremely long threads causing memory issues in PHP, we added
pagination to the Split page (the page where an admin can choose what
posts to split off into new threads).

To add this pagination you will need to modify the code for Split Data
in /themes/forum\_themes/default/theme\_split.php. Change:

Pagination Links
~~~~~~~~~~~~~~~~

::

	     <td class="tableCellOne"><div class="itempadbig"><input type="submit" name="submit" class="submit" value="{lang:split_thread}" /></div></td>

To this::

	     <td class="tableCellOne"><div class="itempadbig">     {if previous_page}     <input type="submit" name="previous_page" class="submit" value="‹‹ {lang:previous}" />     {/if}           <input type="submit" name="submit" class="submit" value="{lang:split_thread}" />           {if next_page}     <input type="submit" name="next_page" class="submit" value="{lang:next} ››" />     {/if}     </div>     </td>

Checkboxes Keep State When Changing Pages
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You will also need to modify the code for Split Thread Rows in
/themes/forum\_themes/default/theme\_split.php. Change::

	      <input type="checkbox" name="post_id[]" value="{post_id}" /> {lang:split}

To this::

	     <input type="checkbox" name="post_id[]" value="{post_id}" {checked} /> {lang:split}

PM Link in Public Profile
-------------------------

In the Public Member Profile template in
/themes/forum\_themes/default/theme\_member.php, insert the following
after the email link row::

	{if can_private_message} <tr>  <td class='tableCellTwo' style="width:42%;"><div class='defaultBold'>{lang:private_message}</div></td> <td class='tableCellOne' style="width:58%;"> <a href="{send_private_message}"><img src="{path:image_url}icon_pm.gif" width="56" height="14" alt="Send Private Message" title="Send Private Message" border="0" /></a> </td>  </tr> {/if}

Member Search in Member List
----------------------------

In the Member List template in
/themes/forum\_themes/default/theme\_member.php, add at the very bottom
after the </form> tag::

	<!--- Begin Member Search -->  <script type="text/javascript"> <!--  var searchFieldCount = 1;  function add_search_field() {     if (document.getElementById('search_field_1'))     {         // Find last search field         var originalSearchField = document.getElementById('search_field_1');         searchFieldCount++;                  // Clone it, change the id         var newSearchField = originalSearchField.cloneNode(true);         newSearchField.id = 'search_field_' + searchFieldCount;                  // Zero the input and change the names of fields         var newFieldInputs = newSearchField.getElementsByTagName('input');         newFieldInputs[0].value = '';         newFieldInputs[0].name = 'search_keywords_' + searchFieldCount;                  var newFieldSelects = newSearchField.getElementsByTagName('select');         newFieldSelects[0].name = 'search_field_' + searchFieldCount;                  // Append it and we're done         originalSearchField.parentNode.appendChild(newSearchField);     } }  function delete_search_field(obj) {     if (obj.parentNode && obj.parentNode.id != 'search_field_1')     {         obj.parentNode.parentNode.removeChild(obj.parentNode)     } }  //--> </script>  <table class='tableborder' border='0' cellspacing='0' cellpadding='0' style='width:100%'> <tr>     <td class='memberlistHead'>{lang:member_search}</td> </tr> <tr>     <td class='tableCellOne'>         {form:form_declaration:do_member_search}                  <div id="member_search_fields">                  <div id="search_field_1" class="itempadbig">         <input type="text" name="search_keywords_1" />         <select name='search_field_1' class='select' >         <option value='screen_name'>Search Field</option>         <option value='screen_name'>Screen Name</option>         <option value='email'>Email Address</option>         <option value='url'>URL</option>         <option value='location'>Location</option>         {custom_profile_field_options}         </select>         <a href="#" onclick="add_search_field(); return false;" class="defaultBold">+</a>         <a href="#" onclick="delete_search_field(this); return false;" class="defaultBold">-</a>         </div>                  </div>                  <select name='search_group_id' class='select' >         {group_id_options}         </select>                  <div class="itempadbig">  <input type='submit' value='Search' class='submit' /></div>                  </form>     </td> </tr> </table>

Member Accounts - Self Deletion
-------------------------------

A new feature in ExpressionEngine 1.5 is the ability to allow members in
particular member groups to delete their own accounts. Please see the
:doc:`Member Groups </cp/members/groups/form>` section of the
User Guide for details on this feature.

In order for your Discussion Forum profile pages to allow this new
ability, you need to make the following template changes:

Adding a "Delete" Link to the Profile Menu
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In the Member Profile Menu template in
/themes/forum\_themes/default/theme\_member.php, change::

	{if allow_localization}     <div class='menuItem'><a href='{path:localization}'>{lang:localization}</a></div>     {/if}          </div>

to::

	{if allow_localization}     <div class='menuItem'><a href='{path:localization}'>{lang:localization}</a></div>     {/if}     {if can_delete}     <div class="menuItem"><a href="{path:delete}">{lang:mbr_delete}</a></div>     {/if}          </div>

Adding the Delete Confirmation Form
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You will need to add a new template to
/themes/forum\_themes/default/theme\_member.php, which will require you
to modify the file via FTP. At the end of the file, just before::

	}     // END CLASS     ?>

Place::

	/* -------------------------------------     /*  delete_confirmation_form     /* -------------------------------------*/          function delete_confirmation_form()     {     return <<< EOF          {form_declaration}          <table class="tableBorder" cellpadding="0" cellspacing="0" border="0" style="width:560px;" align="center">     <tr>         <td class="profileAlertHeadingBG" colspan="2">{lang:mbr_delete}</td>     </tr>     <tr>         <td class="tableRowHeadingBold" colspan="2">{lang:confirm_password}</td>     </tr>     <tr>         <td class="tableCellOne" align="right"><b>{lang:password}</b></td>         <td class="tableCellOne"><input type="password" style="width:80%" class="input" name="password" size="20" value="" maxlength="32" /></td>     </tr>     <tr>         <td class="tableCellOne" colspan="2">             <div class="itempadbig">{lang:mbr_delete_blurb}</div>             <div class="itempadbig alert">{lang:mbr_delete_warning}</div>         </td>     </tr>     <tr>         <td class="tableCellTwo" colspan="2"><div class="itempadbig"><input type="submit" class="submit" value="{lang:submit}" /></div></td>     </tr>     </table>          </form>          EOF;     }     /* END */

Bulletin Board
--------------

There are three new templates associated with Bulletin Boards in the
Private Messaging area. Like the Delete Account Confirmation Form above,
you will need to edit your
/themes/forum\_themes/default/theme\_member.php file via FTP. At the end
of the file, just before::

	     }     // END CLASS     ?>

Add::

	         // -----------------------------------         //  Bulletin Board - USER         // -----------------------------------                         function bulletin_board()         {             return <<<ONEIL                      <div class='menuHeadingBG'><div class="tableHeading">{lang:bulletin_board}</div></div>                  {if can_post_bulletin}         <table border='0'  cellspacing='0' cellpadding='0' style='width:100%;' >         <tr><td class='tableCellOne'>         <span class="defaultBold">» <a href='{path:send_bulletin}' >{lang:send_bulletin}</a></span>         </td></tr>         </table>         {/if}                  {if no_bulletins}         <div class="tableCellOne">         <span class="defaultBold">{lang:message_no_bulletins}</span>         {/if}                           {if bulletins}         {include:bulletins}         {/if}                  {if paginate}         <table border='0'  cellspacing='5' cellpadding='0' class='tablePad' >         <tr>         <td  class='default' >         {include:pagination_link}         </td>         </tr>         </table>         {/if}                          ONEIL;                  }         // END                           // -----------------------------------         //  Single Bulletin         // -----------------------------------                         function bulletin()         {             return <<<JAFFA                  <div class="{style}" id="bulletin_div_{bulletin_id}">                  <span class="defaultBold">{lang:message_sender}</span>: {bulletin_sender}<br />         <span class="defaultBold">{lang:message_date}</span>: {bulletin_date}<br />                  <div class="itempadbig">         <textarea name='bulletin_{bulletin_id}' readonly='readonly' style='width:100%' class='textarea' rows='8' cols='90'>{bulletin_message}</textarea>         </div>                  </div>                          JAFFA;                  }         // END                                    //-------------------------------------         //  Bulletin Sending Form         //-------------------------------------                  function bulletin_form()         {         return <<< EOF                  {form:form_declaration:sending_bulletin}                  {if message}         <div class='tableCellOne'><div class='success'>{include:message}</div></div>         {/if}                  <table border='0' cellspacing='0' cellpadding='0' style='width:100%'>                  <tr>         <td class='profileHeadingBG' colspan="2"><div class="tableHeading">{lang:send_bulletin}</div></td>         </tr>                  <tr>         <td class='tableCellOne' style="width:20%;"><div class='defaultBold'>{lang:member_group}</div></td>         <td class='tableCellOne' style="width:80%;">         <select name="group_id">         {group_id_options}         </select>         </td>         </tr>                  <tr>         <td class='tableCellTwo' style="width:20%;"><div class='defaultBold'>{lang:bulletin_message}</div></td>         <td class='tableCellTwo' style="width:80%;"><textarea name='bulletin_message' style='width:100%' class='textarea' rows='10' cols='90'></textarea></td>         </tr>                  <tr>         <td class='tableCellOne' style="width:20%;"><div class='defaultBold'>{lang:bulletin_date}</div></td>         <td class='tableCellOne' style="width:80%;">         <input type="text" style="width:80%" class="input" name="bulletin_date" size="20" value="{input:bulletin_date}" maxlength="50" />         </td>         </tr>                           <tr>         <td class='tableCellOne' style="width:20%;"><div class='defaultBold'>{lang:bulletin_expires}</div></td>         <td class='tableCellOne' style="width:80%;">         <input type="text" style="width:80%" class="input" name="bulletin_expires" size="20" value="{input:bulletin_expires}" maxlength="50" />         </td>         </tr>                  <tr>         <td class='tableCellTwo' colspan="2">         <div class='marginpad'>         <input type='submit' class='submit' value='{lang:submit}' />         </div>         </td>         </tr>                  </table>                  </form>         EOF;         }         // END

:doc:`Return to Update Page <forum_update>`
