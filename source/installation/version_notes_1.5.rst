Update Notes for Version 1.5
============================

ExpressionEngine 1.5 includes a number of new features and updates.
Reviewing the notes below will help you transition to 1.5 with as little
effort as possible.


            

Template Updates
----------------

In order to make sure ExpressionEngine always outputs valid XHTML
Strict, pMachine decided to remove the name="" attribute from all of its
<form> tags. This change means that the smiley popup javascript, used in
ExpressionEngine's default theme, needs to be modified in order to work
properly. The change is simple. Simply find the following code in your
'smileys' templates::

	opener.document.comment_form.comment.value += " " + smiley + " ";
	opener.window.document.comment_form.comment.focus();

And change it to this::

	opener.document.getElementById('comment_form').comment.value += " " + smiley + " ";
	opener.window.document.getElementById('comment_form').comment.focus();

Profile Theme Updates
---------------------

Version 1.5 has some changes in the member theme file
(./themes/profile\_themes/default/profile\_theme.php), so either replace
that file or if you have a customized the Member Profile theme add the
following code.

PM Link in Public Profile
~~~~~~~~~~~~~~~~~~~~~~~~~

**Public Profile** part of the theme after the email link row::

	{if can_private_message}
		<tr>
			<td class='tableCellTwo' style="width:42%;">
				<div class='defaultBold'>{lang:private_message}</div>
			</td>
			<td class='tableCellOne' style="width:58%;">
				<a href="{send_private_message}"><img src="{path:image_url}icon_pm.gif" width="56" height="14" alt="Send Private Message" title="Send Private Message" border="0" /></a>
			</td>
		</tr>
	{/if}

Member Search in Member List
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Member List** part of the theme at the very bottom::

	<!--- Begin Member Search -->
	<script type="text/javascript">
	
		var searchFieldCount = 1;
	
		function add_search_field() {
	
		    if (document.getElementById('search_field_1')) {
		        // Find last search field
		        var originalSearchField = document.getElementById('search_field_1');
		        searchFieldCount++;
		
		        // Clone it, change the id
		        var newSearchField = originalSearchField.cloneNode(true);
		        newSearchField.id = 'search_field_' + searchFieldCount;
		
		        // Zero the input and change the names of fields
		        var newFieldInputs = newSearchField.getElementsByTagName('input');
		        newFieldInputs[0].value = '';
		        newFieldInputs[0].name = 'search_keywords_' + searchFieldCount;
		
		        var newFieldSelects = newSearchField.getElementsByTagName('select');
		        newFieldSelects[0].name = 'search_field_' + searchFieldCount;
		
		        // Append it and we're done
		        originalSearchField.parentNode.appendChild(newSearchField);
		    }
		}
		
		function delete_search_field(obj) {
		
		    if (obj.parentNode && obj.parentNode.id != 'search_field_1') {
		        obj.parentNode.parentNode.removeChild(obj.parentNode)
		    }
		}
	</script>
	
	<table class='tableborder' border='0' cellspacing='0' cellpadding='0' style='width:100%'>
		<tr>
		    <td class='memberlistHead'>{lang:member_search}</td>
		</tr>
		<tr>
		    <td class='tableCellOne'>
		        {form:form_declaration:do_member_search}
		
		        <div id="member_search_fields">
			        <div id="search_field_1" class="itempadbig">
		    		    <input type="text" name="search_keywords_1" />
					        <select name='search_field_1' class='select' >
						        <option value='screen_name'>Search Field</option>
						        <option value='screen_name'>Screen Name</option>
						        <option value='email'>Email Address</option>
						        <option value='url'>URL</option>
						        <option value='location'>Location</option>
						        {custom_profile_field_options}
					        </select>
		
				        <a href="#" onclick="add_search_field(); return false;" class="defaultBold">+</a>
				        <a href="#" onclick="delete_search_field(this); return false;" class="defaultBold">-</a>
			        </div>
		        </div>
		
		        <select name='search_group_id' class='select' >
		        	{group_id_options}
		        </select>
		
		        <div class="itempadbig">  <input type='submit' value='Search' class='submit' /></div>
		        </form>
		    </td>
		</tr>
	</table>

Member Self-Delete Ability
~~~~~~~~~~~~~~~~~~~~~~~~~~

**Member Profile Menu** after {if localization}…{/if} clause::

	 {if can_delete} <div class="menuItem"><a href="{path:delete}">{lang:mbr_delete}</a></div> {/if}

Finally, you will need to add a new template, **Delete Account
Confirmation Form** which will require you to edit your
profile\_theme.php file via FTP. At the end of the file, just before::

	 } // END CLASS ?>

Add::

	/* -------------------------------------

	/*  delete_confirmation_form

	/* -------------------------------------*/

	

	function delete_confirmation_form()

	{

	return <<< EOF

	

	{form_declaration}

	

	<table class="tableborder" cellpadding="0" cellspacing="0" border="0" style="width:560px;" align="center">

	<tr>

	    <td class="profileAlertHeadingBG" colspan="2">{lang:mbr_delete}</td>

	</tr>

	<tr>

	    <td class="tableRowHeadingBold" colspan="2">{lang:confirm_password}</td>

	</tr>

	<tr>

	    <td class="tableCellOne" align="right"><b>{lang:password}</b></td>

	    <td class="tableCellOne"><input type="password" style="width:80%" class="input" name="password" size="20" value="" maxlength="32" /></td>

	</tr>

	<tr>

	    <td class="tableCellOne" colspan="2">

	        <div class="itempadbig">{lang:mbr_delete_blurb}</div>

	        <div class="itempadbig alert">{lang:mbr_delete_warning}</div>

	    </td>

	</tr>

	<tr>

	    <td class="tableCellTwo" colspan="2"><div class="itempadbig"><input type="submit" class="submit" value="{lang:submit}" /></div></td>

	</tr>

	</table>

	

	</form>

	

	EOF;

	}

	/* END */

Bulletin Board
~~~~~~~~~~~~~~

There are three new templates associated with Bulletin Boards in the
Private Messaging area. Like the Delete Account Confirmation Form above,
you will need to edit your profile\_theme.php via FTP. At the end of the
file, just before::

	 } // END CLASS ?>

Add::

	// -----------------------------------

	//  Bulletin Board - USER

	// -----------------------------------   

	    

	function bulletin_board()

	{

	    return <<<ONEIL

	    

	<div class='menuHeadingBG'><div class="tableHeading">{lang:bulletin_board}</div></div>

	

	{if can_post_bulletin}

	<table border='0'  cellspacing='0' cellpadding='0' style='width:100%;' >

	<tr><td class='tableCellOne'>

	<span class="defaultBold">» <a href='{path:send_bulletin}' >{lang:send_bulletin}</a></span>

	</td></tr>

	</table>

	{/if}

	

	{if no_bulletins}

	<div class="tableCellOne">

	<span class="defaultBold">{lang:message_no_bulletins}</span>

	{/if}

	

	

	{if bulletins}

	{include:bulletins}

	{/if}

	

	{if paginate}

	<table border='0'  cellspacing='5' cellpadding='0' class='tablePad' >

	<tr>

	<td  class='default' >

	{include:pagination_link}

	</td>

	</tr>

	</table>

	{/if}

	        

	ONEIL;

	

	}

	// END

	

	

	// -----------------------------------

	//  Single Bulletin

	// -----------------------------------   

	    

	function bulletin()

	{

	    return <<<JAFFA

	

	<div class="{style}" id="bulletin_div_{bulletin_id}">

	

	<span class="defaultBold">{lang:message_sender}</span>: {bulletin_sender}<br />

	<span class="defaultBold">{lang:message_date}</span>: {bulletin_date}<br />

	

	<div class="itempadbig">

	<textarea name='bulletin_{bulletin_id}' readonly='readonly' style='width:100%' class='textarea' rows='8' cols='90'>{bulletin_message}</textarea>

	</div>

	

	</div>

	        

	JAFFA;

	

	}

	// END

	

	

	

	//-------------------------------------

	//  Bulletin Sending Form

	//-------------------------------------

	

	function bulletin_form()

	{

	return <<< EOF

	

	{form:form_declaration:sending_bulletin}

	

	{if message}

	<div class='tableCellOne'><div class='success'>{include:message}</div></div>

	{/if}

	

	<table border='0' cellspacing='0' cellpadding='0' style='width:100%'>

	

	<tr>

	<td class='profileHeadingBG' colspan="2"><div class="tableHeading">{lang:send_bulletin}</div></td>

	</tr>

	

	<tr>

	<td class='tableCellOne' style="width:20%;"><div class='defaultBold'>{lang:member_group}</div></td>

	<td class='tableCellOne' style="width:80%;">

	<select name="group_id">

	{group_id_options}

	</select>

	</td>

	</tr>

	

	<tr>

	<td class='tableCellTwo' style="width:20%;"><div class='defaultBold'>{lang:bulletin_message}</div></td>

	<td class='tableCellTwo' style="width:80%;"><textarea name='bulletin_message' style='width:100%' class='textarea' rows='10' cols='90'></textarea></td>

	</tr>

	

	<tr>

	<td class='tableCellOne' style="width:20%;"><div class='defaultBold'>{lang:bulletin_date}</div></td>

	<td class='tableCellOne' style="width:80%;">

	<input type="text" style="width:80%" class="input" name="bulletin_date" size="20" value="{input:bulletin_date}" maxlength="50" />

	</td>

	</tr>

	

	

	<tr>

	<td class='tableCellOne' style="width:20%;"><div class='defaultBold'>{lang:bulletin_expires}</div></td>

	<td class='tableCellOne' style="width:80%;">

	<input type="text" style="width:80%" class="input" name="bulletin_expires" size="20" value="{input:bulletin_expires}" maxlength="50" />

	</td>

	</tr>

	

	<tr>

	<td class='tableCellTwo' colspan="2">

	<div class='marginpad'>

	<input type='submit' class='submit' value='{lang:submit}' />

	</div>

	</td>

	</tr>

	

	</table>

	

	</form>

	EOF;

	}

	// END
	
Wiki Theme Updates
------------------

Namespaces Displaying
~~~~~~~~~~~~~~~~~~~~~

In **wiki\_special\_titles()** template function at the very top, after::

	ob_start();
	
	?>

add::

	<div class='defaultLeft'>
	
	Choose Namespace:  <select onchange="location.href=this.value">
	
	<option value="{path:wiki_home}{special_namespace}:Titles/">Main</option>
	
	{wiki:custom_namespaces_list}
	
	<option value="{path:wiki_home}{special_namespace}:Titles/{namespace_short_name}/" {namespace_selected}>{namespace_label}</option>
	
	{/wiki:custom_namespaces_list}
	
	</select>
	
	</div>

In **wiki\_special\_titles()** template function within the
{wiki:title\_list} tag

::

	{if no_results}
	<div class="marginpad">
		<strong>Sorry, there seem to be no articles for this namespace.</strong>
	</div>
	{/if}

In **wiki\_edit()** template, change the {wiki:files} tag from::

	{wiki:files limit="10"}

to::

	{wiki:files limit="10" orderby="upload_date" sort="desc"}

Language Additions
------------------

ExpressionEngine 1.5 has a number of language file additions. To assist
translators in updating their language packs, a :download:`language notes text
file <language_notes_1.5.txt>` has been provided. This text file lists
all of the new language keys, separated by the each language file that
contains changes. To update your language pack, you can download this
text file, make the changes, and simply copy the new keys to the
appropriate language files.

`Return to Update Page <update.html#additional-steps>`_
