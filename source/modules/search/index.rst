Search Module Tags
==================

The Search Module of ExpressionEngine has several individual tags
available for use. Each tag is explained in a separate section.
Furthermore, there is a section devoted to explaining the syntax that
can be used in the search field.

-  `Search Keywords <keywords.html>`_
-  `Total Results <total_results.html>`_

Simple Search Form
------------------

The `Simple Search Form <simple.html>`_ tag allows you to easily add a
single-form search field to your site. This allows you to have a simple
search box in a sidebar of your site. Example::

	{exp:search:simple_form channel="news"}  <p><label for="keywords">Search:</label><br /> <input type="text" name="keywords" id="keywords" value="" size="18" maxlength="100" /></p>  <p><a href="{path='search/index'}">Advanced Search</a></p>  <p><input type="submit" value="submit" class="submit" /></p>  {/exp:search:simple_form}

Advanced Search Form
--------------------

The `Advanced Search Form <advanced.html>`_ tag allows you to display a
detailed search form that will allow your users to make "power searches"
to find the information they need. Example::

	{exp:search:advanced_form result_page="search/results"}      <table cellpadding='4' cellspacing='6' border='0' width='100%'>     <tr>         <td>             <fieldset class="fieldset">                 <legend>{lang:search_by_keyword}</legend>                 <input type="text" class="input" maxlength="100" size="40" name="keywords" style="width:100%;" />                 <div class="default">                     <select name="search_in">                         <option value="titles" selected="selected">{lang:search_in_titles}</option>                         <option value="entries" selected="selected">{lang:search_in_entries}</option>                         <option value="everywhere" >{lang:search_everywhere}</option>                     </select>                 </div>                  <div class="default">                     <select name="where">                         <option value="exact" selected="selected">{lang:exact_phrase_match}</option>                         <option value="any">{lang:search_any_words}</option>                         <option value="all" >{lang:search_all_words}</option>                         <option value="word" >{lang:search_exact_word}</option>                     </select>                 </div>             </fieldset>         </td>         <td>             <fieldset class="fieldset">                 <legend>{lang:search_by_member_name}</legend>                 <input type="text" class="input" maxlength="100" size="40" name="member_name" style="width:100%;" />                 <div class="default"><input type="checkbox" class="checkbox" name="exact_match" value="y"  /> {lang:exact_name_match}</div>             </fieldset>         </td>     </tr>     </table>      <table cellpadding='4' cellspacing='6' border='0' width='100%'>         <tr>         <td valign="top" width="50%">             <table cellpadding='0' cellspacing='0' border='0'>                 <tr>                     <td valign="top">                         <div class="defaultBold">{lang:channels}</div>                         <select id="channel_id" name='channel_id[]' class='multiselect' size='12' multiple='multiple' onchange='changemenu(this.selectedIndex);'>                             {channel_names}                         </select>                     </td>                     <td valign="top" width="16"> </td>                     <td valign="top">                         <div class="defaultBold">{lang:categories}</div>                         <select name='cat_id[]' size='12'  class='multiselect' multiple='multiple'>                             <option value='all' selected="selected">{lang:any_category}</option>                         </select>                     </td>                 </tr>             </table>         </td>         <td valign="top" width="50%">             <fieldset class="fieldset">                 <legend>{lang:search_entries_from}</legend>                 <select name="date" style="width:150px">                     <option value="0" selected="selected">{lang:any_date}</option>                     <option value="1" >{lang:today_and}</option>                     <option value="7" >{lang:this_week_and}</option>                     <option value="30" >{lang:one_month_ago_and}</option>                     <option value="90" >{lang:three_months_ago_and}</option>                     <option value="180" >{lang:six_months_ago_and}</option>                     <option value="365" >{lang:one_year_ago_and}</option>                 </select>                 <div class="default">                     <input type='radio' name='date_order' value='newer' class='radio' checked="checked" /> {lang:newer}                     <input type='radio' name='date_order' value='older' class='radio' /> {lang:older}                 </div>             </fieldset>             <div class="default"><br /></div>             <fieldset class="fieldset">                 <legend>{lang:sort_results_by}</legend>                 <select name="orderby">                     <option value="date" >{lang:date}</option>                     <option value="title" >{lang:title}</option>                     <option value="most_comments" >{lang:most_comments}</option>                     <option value="recent_comment" >{lang:recent_comment}</option>                 </select>                 <div class="default">                     <input type='radio' name='sort_order' class="radio" value='desc' checked="checked" /> {lang:descending}                     <input type='radio' name='sort_order' class="radio" value='asc' /> {lang:ascending}                 </div>             </fieldset>         </td>     </tr>     </table>      <div class='searchSubmit'>         <input type='submit' value='Search' class='submit' />     </div>     {/exp:search:advanced_form}

Search Results
--------------

The `Search Results <results.html>`_ tag controls how you display
results from your searches. Example::

	<table border="0" cellpadding="6" cellspacing="1" width="100%"> <tr> <th>{lang:title}</th> <th>{lang:excerpt}</th> <th>{lang:author}</th> <th>{lang:date}</th> <th>{lang:total_comments}</th> <th>{lang:recent_comments}</th> </tr>  {exp:search:search_results switch="resultRowOne|resultRowTwo"}  <tr class="{switch}"> <td width="30%" valign="top"><b><a href="{auto_path}">{title}</a></b></td> <td width="30%" valign="top">{excerpt}</td> <td width="10%" valign="top"><a href="{member_path='member/index'}">{author}</a></td> <td width="10%" valign="top">{entry_date format="%m/%d/%y"}</td> <td width="10%" valign="top">{comment_total}</td> <td width="10%" valign="top">{recent_comment_date format="%m/%d/%y"}</td> </tr>  {/exp:search:search_results}  </table>  {if paginate}  <div class='paginate'>  <span class='pagecount'>{page_count}</span>&nbsp; {paginate}  </div>  {/if}

Search Syntax
-------------

In addition to the options you have available for selection on the
Advanced Search Form, you can also narrow down your searches by using
special syntax with in the search keyword field.

-  To search for a phrase, place the words inside double quotes. e.g.
   "Lance Armstrong"
-  To search for entries without certain words or phrases, place a
   negative sign ("-") before it. e.g. "Lance Armstrong" -charity

.. toctree::
	:glob:
	:titlesonly:
	:hidden:

	*