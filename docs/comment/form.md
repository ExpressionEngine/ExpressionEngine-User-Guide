<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Comment Submission Form

[TOC]

The comment submission form is created very similar to a standard web form, only you don't specify the opening and closing form tags. There are a few variables that are required in order to enable people's personal information (name, email, url, etc.) to appear in the form. Here's how the comment form is typically created:

    {exp:comment:form channel="news" preview="channel/preview"}

      {if logged_out}
        <label for="name">Name:</label> <input type="text" name="name" value="{name}" size="50" /><br />
        <label for="email">Email:</label> <input type="text" name="email" value="{email}" size="50" /><br />
        <label for="location">Location:</label> <input type="text" name="location" value="{location}" size="50" /><br />
        <label for="url">URL:</label> <input type="text" name="url" value="{url}" size="50" /><br />
      {/if}

      <label for="comment">Comment:</label><br />
      <textarea name="comment" cols="70" rows="10">{comment}</textarea>
      <label><input type="checkbox" name="save_info" value="yes" {save_info} /> Remember my personal information</label><br />
      <label><input type="checkbox" name="notify_me" value="yes" {notify_me} /> Notify me of follow-up comments?</label><br />

      {if captcha}
        <label for="captcha">Please enter the word you see in the image below:</label><br />
        <p>{captcha}<br />
        <input type="text" name="captcha" value="{captcha_word}" maxlength="20" /></p>
      {/if}

      <input type="submit" name="submit" value="Submit" />
      <input type="submit" name="preview" value="Preview" />
      
      {!-- required to prevent EE from outputting form if commenting is disabled or expired --}
	  {if comments_disabled}Comments on the entry are currently disabled.{/if}
      {if comments_expired}Commenting on the entry has expired.{/if}

    {/exp:comment:form}

This form should be placed on a "single-entry" type page such as a comments page, of course.

TIP: **Tip:** Notice the variables in the "value" form fields? These allow us to show the user's information in the form automatically if they click the "remember personal info" option.

## Comment Form Tag

### Parameters

[TOC=4]

#### `entry_id=`

    entry_id="24"

You can hard code the comment form tag to display a comment form for a specific channel entry by its entry ID.

NOTE: **Note:** This parameter takes precedence over any entry specified dynamically in the URL, so when using this parameter you will want to make sure it is clear to the user which entry the displayed comment form belongs to.

#### `preview=`

    preview="channel/preview"

This is a **required** parameter if you are using comment previews indicating which template should be used for comment previews. Like other "path" variables in ExpressionEngine you will use the Template Group/Template name. More on previewing can be found in the [Comment Previewing](#comment-previewing) section.

#### `url_title=`

    url_title="my_wedding"

You can hard code the comment for tag to display a comment form for a specific channel entry by its URL title.

NOTE: **Note:** This parameter takes precedence over any entry specified dynamically in the URL, so when using this parameter you will want to make sure it is clear to the user which entry the displayed comment form belong to.

#### `channel=`

    channel="news"

With this parameter you can specify exactly which channel you want the submitted comment associated to. This is an important, but optional, parameter.

If you link to your comment form page using the entry's URL Title, then you are **strongly encouraged** to include this parameter in your tag.

Because you can have the same URL Title in different channels, using this parameter will ensure that the comment submitted will be associated with the correct entry. Without this parameter, it is possible that the comment could be associated with an entry in a different channel that happens to have the same URL Title.

#### `form_class=`

    form_class="news_comment_form"

With this parameter, you can specify the css class you want the form to have, enabling fine-grained styling of the comment form.

#### `form_id=`

    form_id="news_comment_form"

With this parameter, you can specify the css id you want the form to have. The default value is 'comment_form'

#### `return=`

    return="template_group/template/url_title"

This parameter allows you to define where the user will be returned after submitting a comment. The parameter can be defined in two ways:

1.  Use the standard Template_Group/Template syntax to specify where to return the user. For instance, if you want the user to be returned to the "local" Template in the "news" Template Group, you would use: return="news/local"
2.  Use a full URL. For example: return="<https://example.com/return.html>"

If this parameter is not defined, they will be returned to the form page.

### Conditionals

[TOC=4]

#### `{if captcha}`

As noted in the [captcha section](security/captchas.md), the contents of the conditional ({if captcha}) tag will only appear if you have the CAPTCHA preference turned on for front-end forms, although it can be disabled for logged in users.

#### `{if comments_expired}`

If commenting has expired (and expiration is not set to be [overridden by moderation](comment/control-panel.md)), the contents of this conditional will replace all other tag contents.

#### `{if comments_disabled}`

If commenting has been disabled, the contents of this conditional will replace all other tag contents.

## Comment Previewing

To preview a comment requires that you create a specific Template for it. This Template will contain at minimum two tags. The first is the tag that shows the preview:

    {exp:comment:preview}
      {comment}
    {/exp:comment:preview}

The second is the [Comment Submission Form](#comment-submission-form) tag. This allows the comment to be displayed as well as the form containing the info so it can be previewed again or submitted.

### Variables

[TOC=4]

#### `{comment}`

The body of the comment.

#### `{comment_date}`

    {comment_date format="%Y %m %d"}

The date of the comment. As with other date variables, this requires the "format" parameter in order to define how the date should be displayed. See the [date variable formatting](templates/date-variable-formatting.md) page for more information.

#### `{email}`

The email address of the comment author.

#### `{location}`

The author's location as entered in their profile or the comment entry form.

#### `{name}`

Name of the author.

#### Conditionals

The following conditionals are available:

- {if email}
- {if location}
- {if logged_in}
- {if logged_out}
- {if name}
- {if url}

## Allowing Members to Edit Comments on the Front End

The available tags and variables allow you to write your own client side code for implementing comment editing. The following is a simplified example using jQuery.

### Example Code

The Comment Entries Tag Code:

    {exp:comment:entries limit="20"}
      <div class="comment" id="comment_{comment_id}">
        <span class="comment_body">
          {comment}
        </span>

        {if editable}
          <a href="#" class="edit_link">Edit</a>

          <div class="editCommentBox" style="display:none;">
            <textarea cols="70" rows="8">{comment_stripped}</textarea><br />
            <input type="submit" name="cancel" value="Cancel" class="cancel_edit">
            <input type="submit" name="save" value="Save" class="submit_edit">
          </div>
        {/if}

        {if can_moderate_comment}
        <a href="#" class="mod_link">Close</a>
        {/if}
      </div>
    {/exp:comment:entries}

The JavaScript Code:

    <script src="/themes/ee/asset/javascript/compressed/jquery/jquery.js" type="text/javascript"></script>
    {exp:comment:edit_comment_script}

### Comment Edit Script Tag

    {exp:comment:edit_comment_script}

This tag outputs a script tag that will include the necessary JavaScript for your comment editor. This script requires jQuery, so you will need to include taht as well.

### AJAX Edit URL Tag

    {exp:comment:ajax_edit_url}

This tag outputs an action url that links to a method that processes the submitted data. It is useful if you are [customizing the client-side code](#customizing-client-side-code). The method requires both a comment id and either a comment or a status variable. For example:

    $.post("{exp:comment:ajax_edit_url}", {status: "close", comment_id: id, XID: hash});

NOTE: **Note:** If secure forms is enabled, a proper security hash must be sent in order to edit or close the comment.

A request for an edit will return a response array. In the case of an error, an error key with a response message will be sent. If the request is successful, an array with a new security hash will be sent with the key of 'XID'. If the entry was closed, a 'moderated' key will be set. If it was edited, a 'comment' key will be returned containing the updated comment text.

### Editing Permissions

The {if editable} conditional in the Comment Entries tag outputs content when the viewing member has permission to edit the comment indicated while the {if can_moderate_comment} outputs content if they have permission to close the comment.

For regular members, in order to edit comments they must be a logged in member, the author of the comment, and the editing time limit must not have expired.

Comment moderators may close the comment. Superadmins will always have {editable} and {can_moderate_comment} permissions on any comment.

Lastly, if a member is in a group with permission to edit comments in any entry, they will have edit permissions. The edit time limit does not apply to moderators.

### Customizing Client-Side Code

If you need additional control or customized hooks in your markup and JavaScript for the comment editor, you can forego the simplified jQuery and [{exp:comment:edit_comment_script}](#comment-edit-script-tag) and roll your own. You can use the example code below for reference, or download and fork from our [GitHub repo](https://github.com/EllisLab/CommentEditor).

    <script type="text/javascript">
      $.fn.CommentEditor = function(options) {

        var OPT;

        OPT = $.extend({
          url: "{exp:comment:ajax_edit_url}",
          comment_body: '.comment_body',
          showEditor: '.edit_link',
          hideEditor: '.cancel_edit',
          saveComment: '.submit_edit',
          closeComment: '.mod_link'
        }, options);

        var view_elements = [OPT.comment_body, OPT.showEditor, OPT.closeComment].join(','),
          edit_elements = '.editCommentBox',
          hash = '{XID_HASH}';

        return this.each(function() {
          var id = this.id.replace('comment_', ''),
          parent = $(this);

          parent.find(OPT.showEditor).click(function() { showEditor(id); return false; });
          parent.find(OPT.hideEditor).click(function() { hideEditor(id); return false; });
          parent.find(OPT.saveComment).click(function() { saveComment(id); return false; });
          parent.find(OPT.closeComment).click(function() { closeComment(id); return false; });
        });

        function showEditor(id) {
          $("#comment_"+id)
            .find(view_elements).hide().end()
            .find(edit_elements).show().end();
        }

        function hideEditor(id) {
          $("#comment_"+id)
            .find(view_elements).show().end()
            .find(edit_elements).hide();
        }

        function closeComment(id) {
          var data = {status: "close", comment_id: id, XID: hash};

          $.post(OPT.url, data, function (res) {
            if (res.error) {
              return $.error('Could not moderate comment.');
            }

            hash = res.XID;
            $('input[name=XID]').val(hash);
            $('#comment_' + id).hide();
           });
        }

        function saveComment(id) {
          var content = $("#comment_"+id).find('.editCommentBox'+' textarea').val(),
            data = {comment: content, comment_id: id, XID: hash};

        $.post(OPT.url, data, function (res) {
            if (res.error) {
              return $.error('Could not save comment.');
            }

            hash = res.XID;
            $('input[name=XID]').val(hash);
            $("#comment_"+id).find('.comment_body').html(res.comment);
            hideEditor(id);
            });
        }
      };


      $(function() { $('.comment').CommentEditor(); });
    </script>
