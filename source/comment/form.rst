#######################
Comment Submission Form
#######################

.. contents::
  :local:
  :depth: 2

The comment submission form is created very similar to a standard web form, only
you don't specify the opening and closing form tags. There are a few
variables that are required in order to enable people's personal
information (name, email, url, etc.) to appear in the form. Here's how
the comment form is typically created::

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

  {/exp:comment:form}

This form should be placed on a "single-entry" type page such as a
comments page, of course.

.. tip:: Notice the variables in the "value" form fields? These allow us to show
   the user's information in the form automatically if they click the
   "remember personal info" option.

****************
Comment Form Tag
****************

Parameters
==========

.. contents::
  :local:

entry\_id=
----------

::

  entry_id="24"

You can hard code the comment form tag to display a comment form for a
specific channel entry by its entry ID.

.. note:: This parameter takes precedence over any entry specified
  dynamically in the URL, so when using this parameter you will want
  to make sure it is clear to the user which entry the displayed
  comment form belongs to.

preview=
--------

::

  preview="channel/preview"

This is a **required** parameter if you are using comment previews
indicating which template should be used for comment previews. Like
other "path" variables in ExpressionEngine you will use the Template
Group/Template name. More on previewing can be found in the `Comment
Previewing`_ section.

url\_title=
-----------

::

  url_title="my_wedding"

You can hard code the comment for tag to display a comment form for a
specific channel entry by its URL title.

.. note:: This parameter takes precedence over any entry specified
  dynamically in the URL, so when using this parameter you will want
  to make sure it is clear to the user which entry the displayed
  comment form belong to.

channel=
--------

::

  channel="news"

With this parameter you can specify exactly which channel you want the
submitted comment associated to. This is an important, but optional,
parameter.

If you link to your comment form page using the entry's URL Title, then
you are **strongly encouraged** to include this parameter in your tag.

Because you can have the same URL Title in different channels, using
this parameter will ensure that the comment submitted will be associated
with the correct entry. Without this parameter, it is possible that the
comment could be associated with an entry in a different channel that
happens to have the same URL Title.

form\_class=
------------

::

  form_class="news_comment_form"

With this parameter, you can specify the css class you want the form to
have, enabling fine-grained styling of the comment form.

form\_id=
---------

::

  form_id="news_comment_form"

With this parameter, you can specify the css id you want the form to
have. The default value is 'comment\_form'

return=
-------

::

  return="template_group/template/url_title"

This parameter allows you to define where the user will be returned
after submitting a comment. The parameter can be defined in two ways:

#. Use the standard Template\_Group/Template syntax to specify where to
   return the user. For instance, if you want the user to be returned to
   the "local" Template in the "news" Template Group, you would use:
   return="news/local"
#. Use a full URL. For example: return="http://example.com/return.html"

If this parameter is not defined, they will be returned to the form
page.


Conditionals
============

.. contents::
  :local:

captcha
-------

::

  {if captcha}

As noted in the :doc:`captcha section </security/captchas>`, the contents
of the conditional ({if captcha}) tag will only appear if you have the
CAPTCHA preference turned on for comments in the channel the entry is
associated with.

comments_expired
-----------------

::

  {if comments_expired}

If commenting has expired (and expiration is not set to be
:doc:`overridden by moderation </comment/control_panel/index>`),
the contents of this conditional will replace all other tag contents.

comments_disabled
------------------

::

  {if comments_disabled}

If commenting has been disabled, the contents of this conditional will
replace all other tag contents.


******************
Comment Previewing
******************

To preview a comment requires that you create a specific Template for
it. This Template will contain at minimum two tags. The first is the tag
that shows the preview::

  {exp:comment:preview}
    {comment}
  {/exp:comment:preview}

The second is the `Comment Submission Form`_ tag. This
allows the comment to be displayed as well as the form containing the
info so it can be previewed again or submitted.

Variables
=========

.. contents::
  :local:

comment
-------

::

  {comment}

The body of the comment.

comment\_date
-------------

::

  {comment_date format="%Y %m %d"}

The date of the comment. As with other date variables, this requires the
"format" parameter in order to define how the date should be displayed.
See the :doc:`date variable formatting
</templates/date_variable_formatting>` page for more information.

email
-----

::

  {email}

The email address of the comment author.

location
--------

::

  {location}

The author's location as entered in their profile or the comment entry
form.

name
----

::

  {name}

Name of the author.

Conditionals
------------

The following conditionals are available:

-  {if email}
-  {if location}
-  {if logged\_in}
-  {if logged\_out}
-  {if name}
-  {if url}


.. _comment_editing:

**************************************************
Allowing Members to Edit Comments on the Front End
**************************************************

The available tags and variables allow you to write your own client side
code for implementing comment editing. The following is a simplified
example using the native :ref:`{exp:jquery:script\_tag} <jquery_script_tag>`.

Example Code
============

The Comment Entries Tag Code::

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


The JavaScript Code::

  {exp:jquery:script_tag}
  {exp:comment:edit_comment_script}


Comment Edit Script Tag
=======================

::

  {exp:comment:edit_comment_script}

This tag outputs a script tag that will include the necessary JavaScript
for your comment editor. This script requires jQuery, so you will
typically use it in conjunction with the :ref:`jquery_script_tag`.

AJAX Edit URL Tag
=================

::

  {exp:comment:ajax_edit_url}

This tag outputs an action url that links to a method that processes the
submitted data. It is useful if you are `customizing the client-side
code <#customizing-client-side-code>`_. The method requires both a comment id and either
a comment or a status variable. For example:

.. code-block:: js

  $.post("{exp:comment:ajax_edit_url}", {status: "close", comment_id: id, XID: hash});

.. note:: If secure forms is enabled, a proper security hash must be
  sent in order to edit or close the comment.

A request for an edit will return a response array. In the case of an
error, an error key with a response message will be sent. If the request
is successful, an array with a new security hash will be sent with the
key of 'XID'. If the entry was closed, a 'moderated' key will be set. If
it was edited, a 'comment' key will be returned containing the updated
comment text.


Editing Permissions
===================

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
============================

If you need additional control or customized hooks in your markup and
JavaScript for the comment editor, you can forego the simplified jQuery
and `{exp:comment:edit\_comment\_script} <#comment-edit-script-tag>`_ and roll your own. You can use
the example code below for reference, or download and fork from our `GitHub repo <https://github.com/EllisLab/CommentEditor>`_.

.. code-block:: html

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
