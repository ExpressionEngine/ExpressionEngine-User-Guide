ExpressionEngine Forum Module Change Log
========================================


Version 3.1.4
-------------

Release Date: June 22, 2011

-  Fixed a bug (#15145) in the forum tab where manually adding a Forum
   Topic ID did not 'stick' and proper validation errors were not
   reported for missing titles and body text or invalid topic ids.
-  Fixed a bug in the forum tab where members were allowed to assign a
   forum topic to forums they did not have permission to post in.
-  Code refactoring and streamlining.
-  Fixed a bug (#15155) where moderation privileges could be
   inconsistent.
-  Fixed a bug (#15942) where a performance issue could occur in the
   active\_topic\_search query.

Version 3.1.3
-------------

Release Date: May 10, 2011

Build 20110510 (initial release)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Fixed a display bug (#15265) where the Forum Template list view could
   have a gap in it.
-  Fixed a bug where duplicate key errors could occur when upgrading
   forums from 2.2 to 3.0.

Version 3.1.2
-------------

Release Date: December 20, 2010

Build 20110101 (additional bugfixes)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Added {if enable\_avatars}{/if} and {if enable\_photos}{/if} to
   members and forums menu.html theme files. See update notes for more
   information.
-  Fixed a bug (#14917) where slashes could be stripped from the forum
   post body.
-  Fixed a bug (#15026) where a language variable was used that does not
   exist.

Build 20101220 (initial release)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Fixed a bug (#14798) where layouts caused PHP errors for Forum Module
   tabs.

Version 3.1.1
-------------

Release Date: December 15, 2010

-  Fixed a PHP syntax error.
-  Added a tab file to control custom fields.

Version 3.1.0
-------------

Release Date: July 12, 2010

Version 3.1.0 is a stable, non-beta release for ExpressionEngine 2.1.

Build 20101018 (additional bugfixes)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Fixed a bug (#13765) where the total replies count was performed
   incorrectly for the global forum statistics.
-  Fixed a bug (#13980) where a PHP error could occur on topic
   pagination when an announcement is reached.
-  Fixed a bug (#13945) where language variables were missing on the
   Forum Advanced Search page.
-  Fixed a bug (#13867) where a member group based administrators could
   not be added.

Build 20100916
~~~~~~~~~~~~~~

-  Fixed a bug (#13922) where the delete bulletin link was malformed.
-  Fixed a bug (#13909) where deleting the forums last topic reply
   caused MySQL errors.
-  Fixed a bug (#13614) where new file attachments would result in a
   MySQL error.
-  Fixed a bug where the board ID was not passed in the link to
   activate/close a thread, which could cause an "Unable to locate the
   forum theme folder." error if the boards do not share common themes.

Build 20100805
~~~~~~~~~~~~~~

-  Fixed a bug (#13216) where forum feed templates contained legacy
   syntax which led to invalid rss/atom feeds.
-  Fixed a bug (#13399) where the delete thread button would erroneously
   display.

Build 20100720
~~~~~~~~~~~~~~

-  Fixed a bug (#13231) where forum pagination did not work correctly.
-  Fixed a bug (#13146) where an undefined variable error was present
   when trying to delete a super administrators post.

Version 3.1.0 Public Beta
-------------------------

Release Date: June 25, 2010

Version 3.1.0 Public Beta is a required security and maintenance
release.

Build 20100702
~~~~~~~~~~~~~~

-  Fixed a bug (#12936) where a MySQL error would occur when splitting a
   forum thread.

Build 20100625
~~~~~~~~~~~~~~

-  **Addressed a security problem that could lead to the execution of
   arbitrary code.**
-  Fixed a bug (#12354) where the limit parameter was ignored on the
   topic\_titles tag.
-  Fixed a bug (#12380) where snippets were not properly processed on
   member templates.
-  Added global variables and conditionals for 'original\_board\_id',
   'board\_label', 'board\_name', 'board\_id', and 'board\_alias\_id'
-  Fixed a bug where any/all word searches were not ignoring "stopwords"
   (a, the, and, etc.)
-  Optimized any/all searches for better MySQL performance, including
   limiting considered words to 32

Version 3.0.1 Public Beta
-------------------------

Release Date: February 15, 2010

Build 20100430
~~~~~~~~~~~~~~

-  Fixed a bug (#12189) where the forum version was not updated in
   mod.forum.php
-  Fixed a bug (#12281) where the exp:forum:topic\_titles when using the
   forum="" parameter would result in a MySQL error.
-  Fixed a bug (#12313) where PHP errors would occur when Enable Online
   User Tracking was set to no.

Build 20100415
~~~~~~~~~~~~~~

-  Added {path:theme\_js} variable to a javascript directory that can be
   in the forum theme directory.
-  Fixed a Forum Control Panel rendering issue in the corporate theme
   (#11565)
-  Fixed a bug where the login redirect was incorrect when coming in
   from a link to thread in a forum with protected access.
-  Fixed a bug (#11092) where deleting a forum could result in a PHP
   error.
-  Fixed a bug (#11120) where member list pagination did not properly
   function.
-  Fixed a bug (#11423) where the wrong documentation was referenced in
   the modules Read Me file.
-  Fixed a bug (#11445) where the incorrect page title was displayed
   when editing forum preferences on an existing forum.
-  Fixed a bug (#11501) where an old changelog file was in the forum
   module folder.
-  Fixed a bug (#11820) where PHP errors were encountered when deleting
   a forum board.
-  Fixed a bug (#11882) where the update and update & return buttons are
   reversed when editing a forum template.

Build 20100215
~~~~~~~~~~~~~~

-  Fixed a bug (#11200) where an error message generated while creating
   a new topic could trigger a PHP error when running the forums in a
   template.
-  Fixed a bug (#11029) where the default category assignment was not
   always correct when creating a new forum.
-  Fixed a bug (#11092) where deleting a forum resulted in a MySQL
   error.
-  Fixed a bug (#11193) where forum notifications were not sent to
   moderators when moderation was assigned by member group.
-  Fixed a bug (#11247) where a MySQL error could occur on the forum
   member subscription pages.
-  Fixed a bug (#11250) where a MySQL error would occur when creating a
   Forum Alias when MySQL is run in Strict Mode.
-  Fixed a bug (#11266) where the custom field settings form would not
   display all settings correctly.
-  Fixed a bug (#11273) where the template notes textarea content was
   not prepped correctly.

Version 3.0.0 Public Beta
-------------------------

Release Date: December 2, 2009

3.0.0 Public Beta is an internal architectural change to run on
ExpressionEngine 2.0 Public Beta.

Build 20100121
~~~~~~~~~~~~~~

-  Fixed a bug where the page titles for "Create New Forum" and "Create
   New Category" were reversed.
-  Fixed a bug where theme switching may result in being redirected to a
   non-existent page.
-  Fixed a bug (#10990) where the spellcheck did not work on the Post
   Reply page due to javascript errors.
-  Fixed a bug (#10994) where undefined variable errors were present
   when previewing a post.
-  Fixed a bug (#10996) where you could not create new forums for boards
   other than the board with an id of 1.
-  Fixed a bug (#11047) where snippets were not parsed when the forum
   was run through the template parser.
-  Fixed a bug (#11077) where Forum Core Extension hooks that passed
   query results were not passing the proper Database Object to the
   hook.

Build 20091211
~~~~~~~~~~~~~~

-  Fixed PHP error on post submission if no moderators were assigned to
   a forum.
-  Fixed a bug (#10185) with the exp\_forum\_subscriptions table
   modification that could result in a failed 3.0.0 update.
-  Fixed a bug (#10627) with Admin new topic notification resulting in a
   PHP Notice error.

Build 20091207
~~~~~~~~~~~~~~

-  Fixed a critical bug (#10535) where data was not being properly
   escaped before use in a query.
-  Fixed a bug (#10524) which prevented proper deletion of a forum.
-  Fixed a bug (#9703) resulting in a MySQL error when creating a new
   Poll.
-  Fixed a bug (#9687) where splitting a topic would result in a "Page
   Not Found" error.
-  Fixed a bug in the Forum 3.0 updater where a column should have been
   changed to allow NULL input, causing a MySQL strict mode error when
   adding a group Moderator.
-  Fixed a bug (#9721) where unauthorized request error pages would
   still show the requested forum name in breadcrumbs instead of
   "Error".
-  Fixed bug (#9686) plural inflection on "Moderator" vs. "Moderators"
-  Related to bug (#9686):
   Modified the default themes to match the universal changes to the
   backspace= parameter (no longer ignores whitespace). If you have
   modified your forum themes, please find::

	{moderators backspace='1'}     <a href="{path:member_profile}">{name}</a>, {/moderators}

   and change to::

	{moderators backspace='1'}<a href="{path:member_profile}">{name}</a>,{/moderators}

-  Removed some extraneous debugging code from the Forum control panel.

Build 20091202 (initial release)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Forum themes are now all editable via the Template Editor.
-  Forum themes are easier to edit, using .html files instead of complex
   PHP theme files.

Version 2.1.2
-------------

Release Date: July 23, 2009

Version 2.1.2 is a maintenance release.

Build 20091202
~~~~~~~~~~~~~~

-  Updated to work with code changes in ExpressionEngine 1.6.8 Build
   20091201

Build 20091002
~~~~~~~~~~~~~~

-  Fixed a bug where the subscription date for forum subscriptions was
   incorrect when the 'Subscribe' link was used.
-  Fixed a bug in {exp:forum:topic\_titles} where a query error could
   result under certain circumstances.
-  Fixed a bug in a language variable where 'new\_messages' was defined
   as 'No new messages'.
-  Optimized queries used by {exp:forum:topic\_titles},
   {include:most\_recent\_topics} and {include:most\_popular\_posts}.

Build 20090916
~~~~~~~~~~~~~~

-  Fixed a bug where member statistics were not correctly recounted
   after deletion of a forum.

Build 20090723 (initial release)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Compatible with PHP 5.3.0
-  Added `'main\_forum\_table\_rows\_template' extension
   hook <http://expressionengine.com/developers/extension_hooks/main_forum_table_rows_template>`_
-  Added the {topic\_title} variable to the Post Submission Form when
   editing a reply.
-  Fixed a bug where the member trigger word was hardcoded to 'member'
   on a couple member profile pages.
-  Fixed a bug where entities in breadcrumbs could be double encoded.

Version 2.1.1
-------------

Release Date: October 24, 2008

Version 2.1.1 is a maintenance release containing bug fixes and security
enhancements, no new features have been added.

Build 20090320 (additional changes and fixes)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Fixed a bug where user banning could result in a MYSQL error.
-  Fixed a bug where it was possible to add an administrator or
   moderator without selecting either a member or a member group.
-  Updated applicable queries to escape LIKE wildcards.

Build 20090211 (additional changes and fixes)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Added 3 global variables to all forum templates:

   -  {current\_request} (viewthread, viewforum, etc.)
   -  {current\_id} (category id, forum id, thread id, etc.)
   -  {current\_page} (current pagination index)

Build 20090122 (additional changes and fixes)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Fixed a misleading error message when the short name of the submitted
   forum contained illegal characters.

Build 20081028 (additional changes and fixes)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Fixed a bug where forum attachments for a member were not deleted
   when the member is banned and deleted.

Build 20081024 (initial release)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Fixed a bug which would delete a thread if a moderator tried to merge
   it with itself.
-  Fixed a bug where member stats would not be updated after deleting a
   post.
-  Fixed a bug where in some environments uploads with uppercase file
   extensions would be rejected.

Version 2.1
-----------

Release Date: March 17, 2008

Version 2.1 is a maintenance release containing bug fixes and security
enhancements, no new features have been added.

Build 20080829 (additional changes and fixes)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Modified the post preview to be filtered so previews will show an
   accurate example of output.
-  Fixed a bug with pagination links in "search in thread" feature.
-  Moved message "You do not appear to be subscribed to the topic ID you
   submitted" to a language variable.
-  Fixed a bug where HTML in forum names was not being converted to
   entities in breadcrumbs, which could cause them to break.
-  Removed a restriction that prevented the use of HTML in category and
   forum descriptions.

Build 20080710 (additional changes and fixes)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Made {post\_total} and {views} available to conditionals in the Topic
   Titles tag.

Build 20080626 (additional changes and fixes)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Fixed a bug where member post totals were not updating upon deletion
   of a forum.
-  Fixed a bug where forum stats were not updating upon deletion of a
   forum.
-  Deja vu: fixed a bug with the display of submission form errors when
   running the forum through normal templates.
-  Fixed a bug with the {auto\_thread\_path} links (#4575).
-  Fixed a bug where replies would lose file attachments when moved.
-  Added $data array to 'forum\_submit\_post\_end' extension hook.
-  Changed the behavior of search so that closed posts are not excluded.
-  Fixed a bug where search results snippets and Poll questions/answers
   were not respecting the censored words filter.

Build 20080421 (additional changes and fixes)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Fixed a bug where Super Admins and Moderators with edit privileges
   could not delete others' file attachments.
-  Fixed a bug in Member Ranks that would not allow zero rank stars to
   be assigned to a Member Rank
-  Fixed a bug where Moderators could move topics to forums that they
   were not allowed to view
-  Fixed a bug where browsing behind a proxy might make it impossible to
   view search results

Build 20080317 (initial release)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Fixed an undefined variable PHP error on search thread pages.
-  Fixed a bug (#3429) on New Topic Search not properly tracking read
   topics.
-  Fixed a bug when using multiple Boards with empty Forum Triggers
-  Fixed a bug where keywords in searches were not being properly
   prepared for display.
-  Fixed a bug (#4286) where users could delete forum attachments that
   another user uploaded.
-  Fixed a bug where moved replies would display the wrong forum in the
   breadcrumb links when edited.
-  Removed some code added in 1.6 that wasn't compatible with PHP < 4.3
-  Fixed a bug where the removal of rank stars from a theme was also
   setting the rank title variable to empty
-  Fixed a bug where Super Admins could not view HTTP Authentication
   feeds
-  Added {lang} global variable to Forum theme templates
-  Fixed a bug with the display of submission form errors when running
   the forum through normal templates
-  Fixed a bug with mini login form return paths on profile pages
-  Fixed a bug where an announcement would have a broken breadcrumb when
   the forum\_id was not included in the URL
-  Fixed a bug where board, forum, and category names, and their
   descriptions were not having special characters converted to
   entities.
-  Fixed a bug where setting the forum trigger to a member profile
   segment word would prevent the profile pages from working.
-  Fixed a bug where email notification templates would not be created
   for Sites other than the primary Site.
-  Fixed a bug when deleting forum boards that would not log the board
   label in the Control Panel Log
-  Fixed a bug with authorization permissions on moving replies
-  Fixed a bug with reply results in searches that could incorrectly
   report no results found
-  Fixed a bug with reply results in searches involving the display of
   multi-byte characters.
-  Updated the install script to include indexes for all board\_id
   fields.
-  Modified some XSS Clean calls to be compatible with changes made in
   ExpressionEngine 1.6 - Build 20070626 (requires both ExpressionEngine
   and Discussion Forum module to be running most current builds)
-  Fixed a bug with viewreply pagination when using "Most Recent First"
   post display order
-  Fixed a very minor bug with topic title typography in forum feeds.
-  Fixed a bug where a PHP error could occur when previewing a new topic
   when the forum currently has no topics
-  Fixed a bug with forum attachment display when running user sessions
   as "Session ID Only"

Version 2.0
-----------

Release Date: June 19, 2007

-  Added `Forum Boards <forum_boards.html>`_
-  Added new forum theme: Grey
-  Added Text Formatting preference for posts
-  Added ability to move individual replies between threads
-  Added ability to link directly to reply in search results where the
   search terms were found in a reply (see `version update
   notes <forum_update_notes_2.0.html>`_).
-  Added `forums= <recent_forum_topics.html#par_forums>`_ and
   `boards= <recent_forum_topics.html#par_boards>`_ parameters to the
   Topic Titles tag
-  Added
   `{auto\_thread\_path} <recent_forum_topics.html#var_auto_thread_path>`_,
   `{board\_label} <recent_forum_topics.html#var_board_label>`_,
   `{board\_name} <recent_forum_topics.html#var_board_name>`_,
   `{body} <recent_forum_topics.html#var_body>`_,
   `{forum\_name} <recent_forum_topics.html#var_forum_name>`_,
   `{forum\_url} <recent_forum_topics.html#var_forum_url>`_, and
   `{last\_reply} <recent_forum_topics.html#var_last_reply>`_ variables
   to the Topic Titles tag
-  Added Basic HTTP Authentication for feeds when accessing a feed for a
   forum that you do not have permission to view. Authentication is only
   requested once so as to not be overly annoying.
-  Added separate preferences for email notification addresses to
   distinguish between replies and topics.
-  Added {site\_url} as an available variable to the Forum templates
-  Modified Subscription Removal to ask for confirmation when canceling
   a topic subscription via email notification link
-  Modified the forum themes to use language variables for "Edited":
   Edited: {edit\_date format="%d %F %Y %h:%i %A"} by changed to:
   {lang:edited}: {edit\_date format="%d %F %Y %h:%i %A"} {lang:by}
-  Removed Super Admins from the forum permissions page as they are
   omnipotent in EE and can do as they please.

Bug Fixes for Version 2.0 (includes bugs fixed since v1.3.2 release)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Fixed a bug where XML headers were being sent on RSS and Atom HTML
   error pages.
-  Fixed a bug where a PHP error would occur when using the Recent
   Topics tag on a disabled forum when not logged in as a SuperAdmin
-  Fixed a bug where {forum\_name} was not being XML encoded in feed
   templates.
-  Fixed a bug in the install script where the initial category was
   getting invalid search permissions.
-  Fixed a bug in forum email notifications where typography was not
   being performed.
-  Fixed a bug with file attachments when permissions on the server were
   not set properly.
-  Fixed a bug with "Edited By" on Announcements.
-  Fixed a javascript bug in the Forum control panel.
-  Fixed a bug with last post information that could occur when
   splitting threads.
-  Fixed a bug where titles used in next/previous topic links were not
   correctly encoded.
-  Fixed a bug where the Forum's overall topic, reply, and post stats
   were being improperly calculated in the Visitor Stats template.
-  Fixed a bug where certain globals were still being parsed in the
   Preview page's textarea field
-  Fixed a problem with split threads when they spanned more than two
   pages
-  Modified feeds to encode email addresses in a human readable format
   to avoid potential XML parsing errors.

Version 1.3.2
-------------

Release Date: November 28, 2006

-  Added an ignore member feature.
-  Added the ability for users to report posts to moderators.
-  Added a "switch" variable to the Thread Rows, Thread Review Rows,
   Topic Rows, and Search Results Rows templates. Syntax:
   {switch="one\|two\|..."}
-  Added ability to search by Member Group in the Advanced Search Form
-  Added {if is\_author}{/if} conditional to Thread Rows, Thread Review
   Rows, and Topic Rows templates to allow special content or markup to
   be used when the post was made by the currently logged in member.
-  Added a new variable, {post\_id} to the admin and user forum
   notification templates, which will dynamically point to either the
   topic, or the specific reply that triggered the notification.
-  Added new preference "Display Edit Dates" that works in conjunction
   with a new template conditional {if edited}{edit\_date format=}{/if}
-  Added new preference "Notify Moderators of New Replies?" and modified
   "Notify Moderators of New Posts?" to "Notify Moderators of New
   Topics?"
-  Added new extension hooks: forum\_topics\_loop\_start,
   forum\_topics\_loop\_end, forum\_topics\_absolute\_end,
   forum\_thread\_rows\_loop\_start, forum\_thread\_rows\_loop\_end,
   forum\_thread\_rows\_absolute\_end, forum\_submit\_post\_end
-  Added form option to not send notification emails with moderation
   actions.
-  Refined nomenclature for topics, replies, and posts (which is now
   consistently used as the sum of the topics and replies).
-  Modified the theme switcher to return you to the page you switched
   themes from, instead of the forum home page.
-  Fixed a bug where the word 'of' was hardcoded into the Threads theme
   file instead of using a language variable.
-  Fixed a bug where posting a new reply would return you to the topic's
   first page instead of the last page.
-  Fixed a bug where an image attachment thumbnail would mistakenly
   increase the dimensions of the image.
-  Fixed a bug where deleting a user's topics when banning them would
   cause other users' posts to the affected topics to be orphaned.
-  Fixed a bug where merging two topics would result in the topic being
   set by the newer thread instead of the older one.
-  Fixed a bug where attachments were not being connected properly on
   merge or split.
-  Fixed a bug where pagination was being added to the Topic Rows recent
   thread link when the Forum Post Order was set to "Most Recent First"
-  Fixed a bug where a Topic's edit date would change when any action
   was taken on the thread instead of only when the title or body was
   edited
-  Fixed a bug with one of the search form templates

Version 1.3.1
-------------

Release Date: August 20, 2006

-  Added theme switcher. This feature enables any user of your site to
   select which theme they would like to view the forum with. If the
   user is a logged-in member, the theme choice is saved in their
   profile data, if they are not logged-in, it is stored in a cookie. To
   use this feature you must update your templates as indicated in the
   update instructions.
-  Added new themes, including a "Developer" theme, which is a stripped
   down theme designed to make modification much easier for theme
   developers.
-  Added new email notification and template for Discussion Forum
   moderation actions (move, split, and merge)
-  Added the ability to use post anchors. See version specific notes in
   the User Guide for details.
-  Added pagination for when you are splitting long threads
-  Modified Private Message and Discussion Forum file attachments to use
   a hashed URL so file attachments have URLs that are difficult (nigh
   impossible) to guess.
-  Modified Private Message Box unread topics: it will now decrease the
   number of unread topics displayed when reading a new message instead
   of on the following page load.
-  Fixed a bug where previewing a new topic or reply would not observe
   the forum's HTML and auto/image link preferences
-  Fixed a bug where there was a colon missing from the Total Posts
   language variable in the forum
-  Fixed a bug where in certain circumstances the last post info was not
   being updated on a forum topic.
-  Fixed a bug that in the merging feature that prevented merging an
   earlier topic into a later one.
-  Fixed a bug with splitting threads where the original thread was not
   having its last\_update field reset.
-  Fixed a bug where the forums in a hidden category were still shown to
   those unable to view Hidden Forums.
-  Fixed a bug where Discussion Forum administrator groups were not seen
   as such in their public profiles
-  Fixed a bug with Quote Reply and the navigation breadcrumb
-  Fixed a bug where the body field content was not being prepped for
   forms.
-  Fixed a bug where comment counts were not updated when a member was
   deleted through the forum.
-  Fixed a validation bug with attachment URLs.

`Top of Page <#top>`_

Version 1.3
-----------

Release Date: May 20, 2006

-  Added "merge threads" feature
-  Added "split thread" feature
-  Added "next/previous thread" links in thread view page.
-  Added RSS support. Individual threads can be subscribed to, or the
   entire forum globally.
-  Added Show/hide capability to forum man page, enabling specific forum
   clusters you are interested to be shown.
-  Added "view today's active topics" link to main forum page.
-  Added search form to individual threads that is restricted to
   searching in that thread only.
-  Added "new topic" button in the thread view.
-  Added database storage of "read topic" IDs (rather then with cookies)
   so that you can use different browsers with different computers and
   retain your read topic info.
-  Changed the behavior of the input filter such that tabs are converted
   to four spaces so that code examples posted in the forums will retain
   indenting.
-  Fixed a bug with breadcrumbs when editing a reply.
-  Fixed a bug that was making the page scroll when the smileys link was
   opened.
-  Fixed a bug in which child forums were not always respecting the
   parent permissions (just like in real life...).

`Top of Page <#top>`_

Version 1.2.1
-------------

Release Date: March 08, 2006

-  Fixed a bug that was preventing closed forum topics to be searched
   for.
-  Fixed a bug where the {exp:forum} tag was used in a template of the
   default site group without the template group being in the URL
-  Changed it so the member area in the forum will have its URL
   structure based of the Member module's trigger word

`Top of Page <#top>`_

Version 1.2
-----------

Release Date: November 30, 2005

-  Improved the "read topic" tracker so that it works with non-logged-in
   users (Note: requires the EE 1.4 core)
-  Changed the "max post characters" limit to 5 characters
-  Fixed a problem that can occur if a user edits a post after a
   moderator has enabled it as sticky, closed, etc.
-  Fixed a problem displaying attachments if the attachment has a file
   extension in uppercase.
-  Added Post Reply and Post Topic permissions instead of the single
   Post permission
-  Added notification preferences for categories

`Top of Page <#top>`_

Version 1.1.1
-------------

Release Date: September 18, 2005

-  Made some internal changes to the template handler to allow more
   flexibility when nesting templates.
-  Removed references which were causing trouble with PHP version 4.4.0
-  Changed how the "last visit" date is calculated. It is now based on
   the "last activity" of a user, which is shows the time a given user
   visited within 5 minutes.
-  Change the submit button when editing posts and topics so that is
   displays "Update post".
-  Fixed a URL bug that was not returning users to the correct page when
   editing posts that spanned multiple pages.
-  Fixed an admin notification bug that we preventing notifications when
   new topics were posted.
-  Fixed a bug that causes screen names quoted in forum posts to be
   truncated if the name is two words.
-  Fixed a bug related to user Rank titles that can occur under certain
   conditions.
-  Fixed a bug that permitted polls to be submitted in announcements
   when they shouldn't be allowed to.
-  Fixed a javascript bug that prevented the "announcement" checkbox to
   be unchecked.
-  Added a few new variables that can be used in forum templates:
-  Fixed a bug that was incorrectly showing pending members in the
   "newest member" list.
-  Fixed a small oversight in which the text counter in the submission
   form was not retaining the value during previews.
-  Fixed a bug in the "backspace" parameter in the member stats
   function.
-  Fixed a small bug in the text counter on the submission page. The
   previous bug fix did not correct it properly.

`Top of Page <#top>`_

Version 1.1
-----------

Release Date: July 30, 2005

-  Added forum support to the channel module. You can now submit forum
   posts directly from the PUBLISH page of the control panel, or you can
   link existing forum posts with channel entries. This enables you to
   have a "discuss this in our forums" link in your channel entries.
-  Internally reconfigured how the member profile section is being
   triggered by the forum in order to reduce memory consumption.
-  Updated the preview page. It now honors the display preferences for
   the parent forum, and it renders [quotes]
-  Updated the [quote] feature so that the date is not required, only
   the author.
-  Fixed a problem in which some forum template variables were being
   rendered in posts instead of shown literally.
-  Fixed a problem with the secure forms feature that affected searching
   when no results were found.
-  Fixed a breadcrumb error in the "new topic" form
-  Fixed an admin notification problem.
-  Fixed an error message that occurs when deleting the only post in a
   forum
-  Fixed an error message when posting due to a bug in the notification
   function.
-  Removed all "posting" buttons when a user is not logged in, even if a
   guest member group is given privileges, since non-logged-in users can
   not post.
-  Removed posting permissions checkboxes for guests, pending, and
   banned members in the forum control panel since they don't apply.

