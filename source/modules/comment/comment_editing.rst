Allowing Members to Edit Comments on the Front End
==================================================

Example Code
------------

The available tags and variables allow you to write your own client side
code for implementing comment editing. The following is a simplified
example using the native
`{exp:jquery:script\_tag} <../jquery/jquery_tags.html#script_tag>`_.

The Comment Entries Tag Code
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

::

	{exp:comment:entries limit="20"}      <div class="comment" id="comment_{comment_id}">      <span class="comment_body">         {comment}     </span>      {if editable}         <a href="#" class="edit_link">Edit</a>          <div class="editCommentBox" style="display:none;">             <textarea cols="70" rows="8">{comment_stripped}</textarea><br />             <input type="submit" name="cancel" value="Cancel" class="cancel_edit">             <input type="submit" name="save" value="Save" class="submit_edit">         </div>     {/if}      {if can_moderate_comment}     <a href="#" class="mod_link">Close</a>     {/if}          </div>      {/exp:comment:entries}

The JavaScript Code
~~~~~~~~~~~~~~~~~~~

::

	{exp:jquery:script_tag} {exp:comment:comment_edit_script}

Tags and Variables
------------------

The Comment Edit Script
~~~~~~~~~~~~~~~~~~~~~~~

::

	{exp:comment:comment_edit_script}

This tag outputs a script tag that will include the necessary JavaScript
for your comment editor. This script requires jQuery, so you will
typically use it in conjunction with the
`{exp:jquery:script\_tag} <../jquery/jquery_tags.html#script_tag>`_.

The Ajax Edit URL tag
~~~~~~~~~~~~~~~~~~~~~

::

	{exp:comment:ajax_edit_url}

This tag outputs an action url that links to a method that processes the
submitted data. It is useful if you are `customizing the client-side
code <#customizing>`_. The method requires both a comment id and either
a comment or a status variable. For example::

	$.post("{exp:comment:ajax_edit_url}", {status: "close", comment_id: id, XID: hash});

**Note:** If secure forms is enabled, a proper security hash must be
sent in order to edit or close the comment.

A request for an edit will return a response array. In the case of an
error, an error key with a response message will be sent. If the request
is successful, an array with a new security hash will be sent with the
key of 'XID'. If the entry was closed, a 'moderated' key will be set. If
it was edited, a 'comment' key will be returned containing the updated
comment text.

Useful Comment Entry Tags
~~~~~~~~~~~~~~~~~~~~~~~~~

-  `{if editable} <entries.html#var_editable>`_
-  `{if
   can\_moderate\_comment} <entries.html#var_can_moderate_comment>`_
-  `{comment\_stripped} <entries.html#var_comment_stripped>`_

Editing Permissions
-------------------

The {if editable} conditional in the Comment Entries tag outputs content
when the viewing member has permission to edit the comment indicated
while the {if can\_moderate\_comment} outputs content if they have
permission to both edit the comment and close it.

For regular members, in order to edit comments they must be a logged in
member, the author of the comment, and the editing time limit must not
have expired.

Comment moderators may both edit the comment contents or close the
comment. Superadmins will always have {editable} and
{can\_moderate\_comment} permissions on any comment. If a member is in a
group with permission to edit comments to their own entries and the
comment is to one of their entries, they will have edit permissions.
Lastly, if a member is in a group with permission to edit comments in
any entry, they will have edit permissions. The edit time limit does not
apply to moderators.

Customizing Client-Side Code
----------------------------

If you need additional control or customized hooks in your markup and
JavaScript for the comment editor, you can forego the simplified jQuery
and {exp:comment:comment\_edit\_script} and roll your own. You can use
the example code below for reference. ::

	<script type="text/javascript" charset="utf-8">     $.fn.CommentEditor = function(options) {          var OPT;          OPT = $.extend({             url: "{exp:comment:ajax_edit_url}",             comment_body: '.comment_body',             showEditor: '.edit_link',             hideEditor: '.cancel_edit',             saveComment: '.submit_edit',             closeComment: '.mod_link'         }, options);          var view_elements = [OPT.comment_body, OPT.showEditor, OPT.closeComment].join(','),             edit_elements = '.editCommentBox',              hash = '{XID_HASH}';          return this.each(function() {             var id = this.id.replace('comment_', ''),             parent = $(this);              parent.find(OPT.showEditor).click(function() { showEditor(id); return false; });             parent.find(OPT.hideEditor).click(function() { hideEditor(id); return false; });             parent.find(OPT.saveComment).click(function() { saveComment(id); return false; });             parent.find(OPT.closeComment).click(function() { closeComment(id); return false; });         });          function showEditor(id) {             $("#comment_"+id)                 .find(view_elements).hide().end()                 .find(edit_elements).show().end();         }          function hideEditor(id) {             $("#comment_"+id)                 .find(view_elements).show().end()                 .find(edit_elements).hide();         }          function closeComment(id) {             var data = {status: "close", comment_id: id, XID: hash};              $.post(OPT.url, data, function (res) {                 if (res.error) {                     return $.error('Could not moderate comment.');                 }                  hash = res.XID;                 $('input[name=XID]').val(hash);                 $('#comment_' + id).hide();            });         }          function saveComment(id) {             var content = $("#comment_"+id).find('.editCommentBox'+' textarea').val(),                 data = {comment: content, comment_id: id, XID: hash};          $.post(OPT.url, data, function (res) {                 if (res.error) {                     return $.error('Could not save comment.');                 }                  hash = res.XID;                 $('input[name=XID]').val(hash);                 $("#comment_"+id).find('.comment_body').html(res.comment);                 hideEditor(id);             });         }     };       $(function() { $('.comment').CommentEditor(); }); </script>
