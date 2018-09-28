ExpressionEngine v4 Change Log
==============================

.. contents::
   :local:
   :depth: 1

Version 4.3.5
-------------

Release Date: September 28, 2018

- Added some validation to the channel preview URL setting.
- All redirects to external sites will now display a redirect warning
- Encrypting the return GET parameter to prevent tampering
- Further hardened file upload security against remote code execution.
- Improved performance of Channel Entries tags that reference multiple channels.
- Improved performance of loading a publish form containing many Relationship fields, Channels, and nested categories.
- Improved performance of the File Manager when there is a large number of Member Groups
- Improved security and behavior related to attempted tampering of license key files.
- The ``{parents}`` tag now includes results from Grid columns and Fluid fields
- Fixed a PHP warning in PHP 7.1+ when using unformatted Date variables from a Grid field in conditionals.
- Fixed a bug (#23640) where filtering entries by date in the control panel would not work with a dd/mm/yyyy date format.
- Fixed a bug (#23719) where deleted templates were not removed from existing 'No Access' template settings.
- Fixed a bug (#23728) where closed or expired entries could not be previewed.
- Fixed a bug (#23735) where filters in the CP could not use upper case letters in their display
- Fixed a bug where some conditionals for Fluid fields would generate errors
- Fixed a bug where the language for insecure passwords were not consistenly being pulled from language files.
- Fixed a bug where unicode characters in language translations could cause system response messages to not be shown.
- Fixed a potential XSS vulnerability in the Category Manager's display
- Fixed a potential XSS vulnerability in the License & Registration Settings

Version 4.3.4
-------------

Release Date: August 17, 2018

- The Search and Replace utility can now search and replace Grid field contents (#22926).
- Improved entry editing with bad author data (#23642).
- Added validation to prevent template group changes that only change capitalization in group names (#23667).
- Fixed a bug (#23695) where deleting a member group and re-assigning its members would re-assign every member in the system.
- Fixed a bug (#23638) where the categories field might not load when uploading a file.
- Fixed a bug (#23692) where having the same Grid field inside and outside of a Fluid field may load the wrong data on the publish form.
- Fixed a bug where the "expiration" cookie wasn't registered.
- Fixed a bug where non-super admins were required to be in the author list in order to publish an entry.

Version 4.3.3
-------------

Release Date: July 26, 2018

- Colons (``:``) in filenames do not reliably work across all server platforms, so we are now filtering them out on upload.
- Enabled the Profiler in Live Preview to enhance debugging.
- Prevented image caching on the image editor pages.
- Tightened security for entry author assignment.
- Fixed a bug where avatars that exceeded the allowed filesize failed to upload with no error returned.
- Fixed a bug where the preview button didn't always show up when a page URI was available.
- Fixed a bug (#21996) where the channel settings saved the channel XML language in improper format.
- Fixed a bug (#22787) where the system folder name was not dynamically generated in an error message.
- Fixed a bug (#23659) where PHP errors could occur outputting grid fields with dashes in their short names.
- Fixed a bug (#23661) where the author list for entry heir reassignment would not filter if there were many members.
- Fixed a bug (#23662) where the allowed file size for avatars was hard coded on the member profile settings.
- Fixed a bug (#23663) where the member profile tag didn't allow relative dates in the default date variables.
- Developers: Added global :ref:`JavaScript events for live preview open and close <live_preview_js_events>`.

Version 4.3.2
-------------

Release Date: July 5, 2018

- The Translate utility now always shows English labels, shows missing language keys and highlights missing files from the pack you're editing.
- Checkbox/Radio/Select/Multi-select fields inside a Grid can now be populated by a channel field.
- Clicks on publish form buttons and tabs are disabled until JavaScript loads to prevent unintended actions.
- Optimized relationship field parsing of parent tags.
- Fixed a bug (#23627) where hiding the Pages tab confused Live Preview.
- Fixed a bug where changing the formatting of a textarea Member Field in the CP didn't stick.
- Fixed a bug where choosing Markdown as a default text format for a Member Field didn't work.
- Fixed a bug where the wrong error messages was shown for a CSRF failure with Consent grant/withdrawl links.
- Fixed a bug (#23655) where the utilities sidebar navigation could include a link to an page where access was denied.
- Fixed a bug (#23545) in the channel entry module where the 404 result was not triggered when hooks reduced the returned entries to 0.
- Fixed a bug (#23282) where the parent relationships category parameter didn't work properly with an inclusive stack (i.e., ``category="1&4"``).
- Added validation to the avatar filename in the member import (#23291).
- Fixed a bug (#23630) where including the ``{member_group}`` variable in the member module caused a PHP error.
- Fixed a PHP error on the category custom field edit page (#23633).
- Fixed a bug where the 'New Channel' button could show on the homepage to users without permission to access the channel manager, resulting in a permission error.
- Fixed a bug in the 4.0.0 update where a MySQL error could occur due to duplicate statuses.
- Fixed a bug (#23280) where some legacy member custom fields were missing a field format column, causing a PHP error.
- Fixed a bug (#21785) where the Moblog control panel did not show the names of available image size options in the select field.
- Fixed a bug (#23651) where file sync did not always resync custom image thumbnails when it should.
- Fixed a bug (#23637) where ordering the channel entry tag by view count could cause a MySQL error in MySQL 5.7.
- Fixed a bug (#23654) in publish layouts where comment fields couldn't be moved if comments were not enabled when the layout was created.

Version 4.3.1
-------------

Release Date: June 2, 2018

- Updated Emoji shortcode database to spuport Unicode 10 / Emoji 5. In addition to fixing an number of codepoints resulting in better renderings across all operating systems, real names were added for flags, and new shortcode support was added for Emoji 5's new emoji:

  + 🧑 ``:adult:``
  + 🧔 ``:bearded_person:``
  + 🧢 ``:billed_cap:``
  + 🥣 ``:bowl_with_spoon:``
  + 🧠 ``:brain:``
  + 🤱 ``:breast-feeding:``
  + 🥦 ``:broccoli:``
  + 🥫 ``:canned_food:``
  + 🧒 ``:child:``
  + 🥢 ``:chopsticks:``
  + 🧥 ``:coat:``
  + 🥥 ``:coconut:``
  + 🦗 ``:cricket:``
  + 🤞 ``:crossed_fingers:``
  + 🥤 ``:cup_with_straw:``
  + 🥌 ``:curling_stone:``
  + 🥩 ``:cut_of_meat:``
  + 🥟 ``:dumpling:``
  + 🧝 ``:elf:``
  + 🤯 ``:exploding_head:``
  + 🤮 ``:face_vomiting:``
  + 🤭 ``:face_with_hand_over_mouth:``
  + 🧐 ``:face_with_monocle:``
  + 🤨 ``:face_with_raised_eyebrow:``
  + 🤬 ``:face_with_symbols_on_mouth:``
  + 🧚 ``:fairy:``
  + 🧝‍♀️ ``:female_elf:``
  + 🧚‍♀️ ``:female_fairy:``
  + 🧞‍♀️ ``:female_genie:``
  + 🧙‍♀️ ``:female_mage:``
  + 🧛‍♀️ ``:female_vampire:``
  + 🧟‍♀️ ``:female_zombie:``
  + 🛸 ``:flying_saucer:``
  + 🥠 ``:fortune_cookie:``
  + 🧞 ``:genie:``
  + 🦒 ``:giraffe_face:``
  + 🧤 ``:gloves:``
  + 🦔 ``:hedgehog:``
  + 🤟 ``:i_love_you_hand_sign:``
  + 🧙 ``:mage:``
  + 🧝‍♂️ ``:male_elf:``
  + 🧚‍♂️ ``:male_fairy:``
  + 🧞‍♂️ ``:male_genie:``
  + 🧙‍♂️ ``:male_mage:``
  + 🧛‍♂️ ``:male_vampire:``
  + 🧟‍♂️ ``:male_zombie:``
  + 🧗‍♂ ``:man_climbing:``
  + 🧘‍♂️ ``:man_in_lotus_position:``
  + 🧖‍♂️ ``:man_in_steamy_room:``
  + ⚕️ ``:medical_symbol:``
  + 🧜‍♀️ ``:mermaid:``
  + 🧜‍♂️ ``:merman:``
  + 🧜 ``:merperson:``
  + 🤶 ``:mrs_claus:``
  + 🧓 ``:older_adult:``
  + 🧡 ``:orange_heart:``
  + 🤲 ``:palms_up_together:``
  + 🧗 ``:person_climbing:``
  + 🧘 ``:person_in_lotus_position:``
  + 🧖 ``:person_in_steamy_room:``
  + ⛹️ ``:person_with_ball:``
  + 🧕 ``:person_with_headscarf:``
  + 🥧 ``:pie:``
  + 🥨 ``:pretzel:``
  + 🥪 ``:sandwich:``
  + 🦕 ``:sauropod:``
  + 🧣 ``:scarf:``
  + 🤫 ``:shushing_face:``
  + 🛷 ``:sled:``
  + 🧦 ``:socks:``
  + 🤩 ``:star-struck:``
  + 🦖 ``:t-rex:``
  + 🥡 ``:takeout_box:``
  + ✌️ ``:v:``
  + 🧛 ``:vampire:``
  + 🧗‍♀️ ``:woman_climbing:``
  + 🧘‍♀️ ``:woman_in_lotus_position:``
  + 🧖‍♀️ ``:woman_in_steamy_room:``
  + 🤪 ``:zany_face:``
  + 🦓 ``:zebra_face:``
  + 🧟 ``:zombie:``

- Fixed a bug (#23460) where the 'allow comments' field on the channel entry form did not always default properly.
- Fixed a bug (#23577) where member and category fields could be changed to incompatible data types.
- Fixed a bug (#23613) with Grid field "exists" type conditionals (``{if content:foo}Do Something{/if}``) inside Fluid fields.
- Fixed a bug (#23614) where add-on language would not default to English if the add-on did not provide the requested translation.
- Fixed a bug (#23617) where the channel entry month and day values were saved incorrectly if the user's date format setting was 'dd/mm/yyyy'.
- Fixed a bug (#23623) where RTE fields in custom publish form tabs would not respect their rows/height setting.
- Fixed a bug where downloading the CSV mass notification export was empty.
- Fixed a bug where searchable Grid data inside a Fluid field would sometimes copy another Grid's data.
- Fixed a bug where the channel module search parameter did not search for '0'.
- Fixed a bug where the field type selection for a new Grid column was improperly filtered after a validation error.
- Fixed some incorrect langauge upon validation error when adding a new or editing a category.

Version 4.3.0
-------------

Release Date: May 25, 2018

Let's call it the GDPR-inspired release. :doc:`/general/gdpr`

- **GDPR** 🔏⚖️🇪🇺🏰

  + **Consent!** 🚦

    - NEW Consent module helps you gain, track, and act on user's consent for data processing. :doc:`Consent Module </add-ons/consent/index>`
    - Simple tags let you build forms or links to let users easily manage their own consents, while maintaing 100% control over the design.
    - Cookie consent is bundled with ExpressionEngine. Lets you require consent for setting non-necessary cookies, and even lets users selectively allow Functionality, Performance, and Targeting cookies. :doc:`Cookies in ExpressionEngine </general/cookies>`
    - User consents are available to create powerful logic in your templates to selectively add content, scripts, etc. based on their preferences. :doc:`/templates/globals/consent`.
    - Add-ons can easily add their own consents that the application can then leverage
    - Site builders can create any consent request they can imagine, and use it in templates to easily add functionality while respecting user consent. :doc:`Consent Manager </cp/settings/consents/index>`
    - Immutable logs of consent activity, and easy tools for Developers to log processing activities to said logs.
    - Permissions are discrete enough to allow a GDPR "Data Protection Officer" to manage consents, view audit logs, and deal with GDPR related requests without making them a Super Admin.

  + **Forget Me!** 🚮

    * You can now delete member records. Just kidding you could always do that.
    * You can now **anonymize** a member record, so you can comply with a user's request to be forgotten, while still retaining non-personally identifiable information that you need.
    * You have control over what fields are anonymized (since we have no idea what the purpose or source of your custom fields may be)
    * Developers have a new extension hook that lets their add-ons tie in and comply with an anonymization request.

  + **Breach!** 🛳

    * Added a :doc:`/cp/utilities/mass-notification-export` utility.
    * Notifying data subjects of a breach must happen quickly. Hopefully this never happens to you, but this tool gives you a CSV of all of your members' names and email addresses to facilitate notification.
    * The tool will also identify any obviously invalid email addresses, if any exist.
    * The valid email CSV can then be used with a responsible email service designed for handling mass notifications, keeping the burden off of your servers and preventing blacklisting from the sudden email volume.
    * Make sure you delete the CSV when you're done. 😘

- **Other Stuff** 📦

  + Added an 'author' filter and 'search in' setting to the entry manager page in the control panel.
  + Removed the unused 'expiration' cookie from the Session lib.
  + 🦗🦗🦗

- **Bug Fixes** 💃🐛

  + Fixed a bug where the search module could throw a MySQL error on sites with large numbers of custom fields.
  + Fixed a bug (#23593) where deleting a member group with no group reassignment would orphan its members in the database.
  + Fixed a bug in the spam module control panel when the author of an entry is no longer a member.
  + Fixed a bug (#23589) where the last login date on the homepage was incorrect for your very first login.
  + Fixed a bug (#23471) on the publisher where users without permission to assign entries to authors were presented with options in the author select.  Display issue only, as invalid selections were not saved.

- **Developers** 💻

  + New ``cookie.*`` keys in :doc:`/development/addon_setup_php_file` for registering your addon's cookies for consent compliance.
  + New ``consent.requests`` key in :doc:`/development/addon_setup_php_file` for adding an add-on managed consent.
  + Added a new :doc:`/development/services/consent`.
  + Added :doc:`member_anonymize </development/extension_hooks/model/member/index>` hook to respond to anonymization requests.
  + Added ``beforeBulkDelete`` and ``afterBulkDelete`` events and respective hooks to :doc:`models </development/services/building_models/index>`.
  + Added an :doc:`/development/services/ipaddress`.
  + Added ``throwAuthError()`` method to the output class to abstract Ajax return vs. HTML display of "You are not authorized to perform this action" errors.
  + Deprecated legacy ``member_model::delete_member`` method and corresponding ``member_delete`` hook.


Version 4.2.3
-------------

Release Date: May 16, 2018

- Added back themes/ee/site/default/asset/ folder for backward compatibility until it can be completely removed in the version 5 release.

Version 4.2.2
-------------

Release Date: May 16, 2018

- **Security:** Fixed potential reflected XSS issues.
- **Security:** Modified theme folders and files to prevent directory listings on improperly configured servers. See the :doc:`Version Notes </installation/version_notes_4.2.2>` for details.
- **Security:** Hardened security of member import utilities.
- Added a ``{theme_user_folder_url}`` :doc:`Global variable </templates/globals/single_variables>`.
- Switched debug profiler's highlight.js from a CDN to a local JavaScript file to support offline development. (Issue #23602)
- Fixed a bug where deleting a lot of members via the control panel might be really slow.
- Fixed a bug where Core installs would have the upgrade banner obscuring the Live Preview modal.
- Fixed a bug where a Grid field named ``url`` inside a conditional may show errors in live preview.
- Fixed a bug where private message folders could be renamed too liberally.
- Fixed a bug where uploading an invalid license file while using Core would generate PHP errors.
- Fixed a bug where searching for a really long search term could result in an SQL error.
- Fixed a bug (#23599) where Fluid field's search data was historical rather than current.🗿
- Prevent PHP error that could occur with malformed URLs in the Addon Manager.
- Fixed a bug where a 404 would occur in the background on the Member settings page when no avatar was set for a member.
- Fixed a bug (#23603) where the presence of some tags may cause Comment Entries date variables to be unparsed.
- Fixed a bug where Pages entry Live Previews might render entries in addition to the one being previewed.
- Fixed a bug where the Ajax file sync method had different permission requirements than access to the utility had.
- Fixed a bug where Fluid field meta variables might not work inside of a fields that use ``{content}{/content}`` as a tag pair.
- Fixed a bug where the ``{if avatar}`` conditional in the member profile tag was always ``TRUE`` if avatars were enabled.
- Fixed a bug in the comment form where the comment notification checkbox wouldn't set to ``yes``.
- Fixed a bug where the default "comment allowed" setting was ignored by the channel entry form when the field was not included on the form.
- **Developers:** You can now set a default of ``CURRENT_TIMESTAMP`` for ``datetime`` and ``timestamp`` columns using DB Forge.
- **Developers:** Fixed a bug in DB Forge that was not handling ``DEFAULT NULL`` properly.

Version 4.2.1
-------------

Release Date: April 18, 2018

- **Security:** Fixed a potential reflected XSS issue in the Default theme.
- **Security:** Fixed an error in the Discussion Forum module that could result in unauthorized editing of posts.
- **Security:** Improved external site redirect to help prevent users being fooled by an inception-like series of redirects.
- **Security:** Added CSRF protection to a method in the Blacklist Module to prevent accidental blacklist modification.
- **Security:** Made control panel login redirects tamper resistant.
- Added ``:current_field_name`` and ``:current_fieldtype`` to :ref:`Fluid Variables <fluid_field_meta_variables>`.
- Added some validation checks to the member template list display to avoid a possible PHP error (see discussion #23547).
- Member IDs can now be specified for new member records in the XML for the Member Import utility (previously only accepted IDs to update existing records).
- Improved validation for which authors may be assigned to entries.
- Fixed a PHP warning that could occur if you were using a formatted date variable in a conditional with quotes and braces.
- Fixed a SQL error in the Discussion Forum module when cookies were broken.
- Fixed a SQL error that could occur if you attempted to roll back to v3 and re-upgrade to v4 without properly restoring the database.
- Fixed a bug where the modal pubish form would be cut off by 30 pixels at the bottom.
- Fixed a bug where some control panel alerts would try to hide at the bottom of the page.
- Fixed a bug (#23565) where the file upload buttons for new textarea fields inside a Fluid field didn't cooperate.
- Fixed a bug (#23566) where the channel entry form's ``option`` tag pair could show non-enabled options.
- Fixed a bug (#23572) where the sequential edit mode would not load with a Cookies and Session ID session type.
- Fixed a bug (#23573) where Live Preview may show errors if a Grid column was named ``url``.
- Fixed a bug (#23576) where the link to edit templates in the developer logs was incorrect.

Version 4.2.0
-------------

Release Date: April 16, 2018

- **Security** 🔒

  - Fixed a bug on Windows servers where PHP errors might disclose the full path to the file.
  - Fixed a potential XSS vulnerability in Channel Sets.
  - Added a UI setting for the ``force_redirect`` hidden configuration item.

- **Sequential Editing** ✏️✏️✏️

  + Added an "Edit" bulk action to the Entry Manager.
  + Sequentially edit many entries at once without have to juggle multiple tabs or windows.
  + ExpressionEngine keeps track of the position so content editors know how many have been edited and how many are left to edit.

- **Relationships** 👨‍👩‍👧‍👦

  + You can now create new entries directly from a Relationship field on the Publish page.
  + Full-screen modal entry form frees content authors of constraints, while maintaining parent entry context.
  + Newly created entries from Relationsihp fields are automatically selected in the parent entry, no need to 🛑, 🆕, 💾, 🔙, 🔃, etc.

- **Fluid field Meta Variables** ⛲️

  + Power up your Fluid field output with new, flexible metadata variables.

    * ``:total_fields``
    * ``:count``
    * ``:index``
    * ``:next_field_name``
    * ``:prev_field_name``
    * ``:next_fieldtype``
    * ``:prev_fieldtype``
    * ``:first``
    * ``:last``

  + Use a ``type=`` parameter to constrain count, index, first, and last to a specific fieldtype.
  + Use a ``name=`` parameter to constrain count, index, first, and last to a specific field name.
  + All are available to use in conditionals.
  + See :ref:`Fluid Field Variables <fluid_field_meta_variables>` for more details.

- **Templating** 📐

  + New ``{variable_time}`` date variable

    * Apply Date Formatting to any date that you supply.
    * You can provide dates via any standard date format, or even relative to the current time, e.g. `2 weeks ago`.
    * See :ref:`global_variable_time` for more details.

  + Added ``{is_live_preview_request}`` global template variable for conditional usage in preview templates.
  + Added a :ref:`:url modifier <url_variable_modifier>` to normalize URLs for use in markup.

- **General Changes** 🆕

  + Modernized Comment module entries tag variable parsing, adding compatibility with Variable Modifiers.
  + Moved the logout button in the control panel to a more intuitive location.
  + Added the ability to set member group permissions for template group access when creating/editing template groups.

- **Bug Fixes** 💃🐛

  - Fixed Comment moderation / editing permissions to behave more intuitively.
  - Fixed Comment moderation URLs in admin notification emails
  - Fixed a bug where "Enable entry revisions?" was not rendered with a toggle field.
  - Fixed a bug where some third-party fieldtypes may not validate properly in Grid.
  - Fixed a bug where submitted content could be nullified on output if it contained non-unicode characters.
  - Fixed a bug where using a member custom field in a conditional on the member settings template could result in a PHP error.
  - Fixed a bug where importing a Channel Set that duplicates a Category Group name wouldn't let you rename the Category Group.
  - Fixed a bug where importing a Channel Set and renaming a Field Group would generate PHP errors.
  - Fixed a bug where the Create Template button did not show for member groups with permission to create templates.
  - Fixed a PHP error that could occur by fiddling with the URL and providing invalid filter input.
  - Fixed a warning that could occur on PHP 7.2 with the Memcached driver.
  - Fixed a bug (#23539) where Grid data inside a Fluid field wasn't searchable.
  - Fixed a bug (#23540) where ``{if fluid_field}`` would return false when there was only Grid fields inside it.
  - Fixed a bug (#23547) where custom member fields that should show up in the template editor did not show up in the template editor.
  - Fixed a bug (#23548) where Grid fields could be more cautious about checking for settings when used outside of channel entries.
  - Fixed a bug (#23553) where removing all rows of a Grid field may not stick after saving an entry.
  - Fixed a bug (#23559) where using a filter group with custom fields on a Model query may show an error.
  - Fixed a bug (#23560) where a fatal error would occur when trying to overwrite non-image files in an upload directory that contains manipulations.

- **Developers** 💻

  - Added :doc:`publish_live_preview_route </development/extension_hooks/cp/publish/index>` hook for altering the URI or template for live preview requests.
  - Added ``asImportant()`` :doc:`alert style </development/services/alert>`.
  - Added ``asAttention()`` :doc:`alert style </development/services/alert>`.
  - Added ``asLoading()`` :doc:`alert style </development/services/alert>`.
  - Added a ``url()`` method to the :doc:`Text Formatter </development/services/format/text>` to normalize URLs for use in markup.
  - Added a ``url()`` method to the Variable Service to simplify URL normalization in template variables.
  - Fixed a SQL error that would occur in a Model `filter()` that was comparing against the string ``'null'`` intending for a MySQL ``NULL`` comparison, e.g. ``->filter($col, 'null')``.
  - Deprecated the URL Helper ``prep_url()`` function. Use ``ee('Format')->make('Text', $str)->url()`` instead.
  - Deprecated the extension hook ``comment_entries_tagdata``, please see :doc:`Version Notes </installation/version_notes_4.2.0>` for details.

Version 4.1.3
-------------

Release Date: March 23, 2018

- **Security:** Strengthened warning for off-site redirects to help prevent phishing.
- **Security:** Improved blocking of reverse tabnabbing in user-submitted content.
- **Security:** Tightened Filesystem security.
- Fixed a bug (#23284) where deleting a field used for search excerpts didn't reset that setting in the channel(s).
- Fixed a bug (#23423) where Relationship meta tags in conditionals inside a Fluid field didn't parse unless braced and quoted.
- Fixed a bug (#23457) where existing Channel Layouts stuck newly added category groups in the third tab, rather than the categories tab.
- Fixed a bug (#23495) where the Search and Replace utility did not work with the new channel field database schema.
- Fixed a bug (#23520) where some cache keys may fail to write when using Docker for Windows.
- Fixed a bug (#23525) where OPcache path restrictions could cause a PHP warning when running the 1-Click Updater.
- Fixed a bug (#23526) where cloning a Grid column didn't accurately clone the text formatting setting.
- Fixed a bug (#23531) where the Preview icon would show in the Channel Entry listing when a preview wasn't available.
- Fixed a bug (#23532) where a Site's 404 Template setting included templates unavailable to that Site.
- Fixed a bug where removing a bunch of fields from a Fluid field overwhelmed the CP Log; the CP Log can handle it now.
- Fixed a bug where the Preview button for new entries would not work when the Pages module was installed but the Channel had no preview_url setting.
- Fixed a bug where in rare circumstances Channel Layout changes did not 'stick' on edit.
- Fixed a bug where new Template Partials and Variables files were only synced when requested on the front end.
- Fixed the Template export feature. It now includes Template Partials and Variables, exports templates from all Sites, and is only available to Super Admins.
- Fixed a fatal PHP error if you were beginning an update from a version older than 2.11.0.
- Fixed a bug where the Grid field ``:table`` modifier caused PHP errors when used.
- Fixed a bug where validation errors could occur when Select values were not in the original field options in 'Ajaxified' fields.
- Fixed a bug where Radio fields caused a PHP error on Channel Forms.


Version 4.1.2
-------------

Release Date: March 13, 2018

- **Security:** Tightened security to filter additional invisible control characters from input.
- Added a loading state to the Live Preview UI.
- The Communicate utility will now throw an error when the ``email_batch_size`` config override is set to an invalid value.
- For member and forum themes, only those themes in the themes/user directory are available in the control panel template editor.
- Fixed a bug (#23487) where clicking the reorder handle on a new column in the Grid field settings would refresh the page.
- Fixed a bug (#23498) where ``content`` was not a reserved word for fields. See :doc:`/installation/version_notes_4.0.0` for details on resolving this if you have an existing field with that name.
- Fixed a bug (#23509) where previewing a new entry with an empty Grid and Relationship would trigger PHP errors.
- Fixed a bug (#23519) to get a better result. #iseewhatyoudidthere
- Fixed a bug where ``-`` and other characters could not be used in Layout Variable names.
- Fixed a bug where importing a Grid field with a Relationship column disregarded the "allow multiple" setting.
- Fixed a bug where member custom field conditionals were not properly parsed on the member profile templates.
- Fixed a bug where member custom fields did not respect the display settings on the member profile templates.
- Fixed a bug where previewing a new entry was so exciting that new entry showed up in all your Channel Entries tags.
- Fixed a bug where renaming a Fluid field when importing a Channel Set would result in a PHP error.
- Fixed a bug where the "allow multiple" setting of Relationshp fileds was ignored on export.
- Fixed a bug where the Preview button would show when a Preview wasn't available.
- Fixed a bug where the new email and password change notification templates in 4.1.0 were only added to the primary site.
- Fixed a bug where the updater may show the wrong version is it updating to if the cache is stale.


Version 4.1.1
-------------

Release Date: March 2, 2018

- Fixed a bug (#23502) on iOS devices where the preview side of Live Preview refused to scroll.
- Fixed a bug when clicking the Live Preview button from the Entry Manager you might see a "phantom" row in the preview of your Grid fields until you start editing. 👻🔦
- Fixed a bug where Relationships inside a Grid inside a Fluid field didn't want to be previewed.
- Fixed a bug where autosave notices stacked.
- Made Live Preview modal text translateable.


Version 4.1.0
-------------

Release Date: March 1, 2018

- **Security** 🔒

  - Members are now emailed a confirmation when when their password is changed. See the new email notification template, "User — Password changed notification"
  - Members are now emailed a confirmation to their old address when their email is changed. See the new email notification template, "User — Email changed notification"
  - Fixed a bug where new Template Access restrictions redirects were saved incorrectly.

- **Live Preview** 🍾🎉

  - Added Live Preview!
  - Fully responsive, mobile and desktop friendly. Just click "Preview" from the publish form to get started.
  - See changes in real-time *prior* to publishing.
  - Works with all native field types.
  - Most third-party fields work out-of-the-box, others may need to make minor changes. Developers, see :ref:`Live Preview compatibilty <live_preview_compatibility>` for details.
  - Fully compatible with the Pages module.
  - Replaces "Live Look" methodology. To enable for a Channel, just set a Preview URL in the :doc:`/cp/channel/tab-settings`.

- **Powerful Bulk Editing** ✏️✏️✏️

  - Added Bulk Edit to bulk action menu in the Entry Manager.
  - Intuitive entry selection and filtering gives you confidence in the precision of your bulk edits.
  - Make mass changes on the fly to:

    + Status
    + Expiration Date
    + Sticky
    + Author
    + Allow comments?
    + Comment expiration date

  - You can now add categories to entries without destroying their existing category selections, via the new "Add Categories" bulk action in the Entry Manager.
  - You can also remove categories from entries intuitively, without affecting their other individual categories, via the new "Remove Categories" bulk action in the Entry Manager.

- **General Changes** 🆕

  - Added ``{entry_timestamp}`` ``{expiration_timestamp}``, and ``{comment_expiration_timestamp}`` variables to Channel Form for better compatibility with the datepicker. See :doc:`/channel/channel_form/index` for details.
  - Added the ``show=`` and ``show_group=`` parameters to Channel Form's ``{category_menu}`` variable pair (see bug #23459).
  - Added ``decimals`` parameter to the :doc:`Currency modifier </templates/variable_modifiers>` so you can override decimal precision, including ``decimals='0'`` to display whole numbers only.
  - Altered the behavior of Template Access restrictions so redirecting to a template that is restricted results in a 404.
  - Added tips to Email notification templates to better describe their purpose.
  - Added "Save & New" and "Save & Close" buttons throughout the CP.
  - Improved header and breadcrumbs on the publish page for clarity and consistency.

- **Bug Fixes** 💃🐛

  - Fixed a bug (#23278) in the frontend member settings where localization could not be set to use the default and changes to the 'show seconds' preference didn't stick.
  - Fixed a bug (#23287) where the Channel options on the control panel homepage redirect settings were not properly limited for Super Admins viewing non-Super Admin profiles.
  - Fixed a bug (#23399) where images with very large dimensions could cause a fatal PHP error when processing.
  - Fixed a bug (#23463) where EE may generate faulty ``CREATE TABLE`` syntax.
  - Fixed a bug (#23467) where fetching partial data from model wielded inconsistent results.
  - Fixed a bug (#23476) where the control panel allowed assigning illegal category relationships.
  - Fixed a bug (#23482) where creating a field with value/label pairs would create an extra empty pair.
  - Fixed a bug (#23494) where sorting templates in the Template Manager by "hits" resulted in PHP error.
  - Fixed a bug where Channel Entry notification emails were ignoring the Mail Format email preference.
  - Fixed a bug where doing a keyword search containing double quotes could trigger invalid GET data errors.
  - Fixed a bug where duplicating templates would sometimes throw an error.
  - Fixed a bug where some member fields didn't parse in the member templates.
  - Fixed a bug where a period would appear in empty toolbar cells.
  - Fixed a bug where repeat grid tags in a template could throw PHP errors.
  - Fixed a bug where phantom validation erorrs appeared on Grids with required columns in Fluid fields.
  - Fixed a bug where member custom field conditionals did not parse on the member profile page.
  - Fixed a bug where some private message pages failed to display in the frontend member pages.
  - Fixed a bug where template access redirect options were not 'Ajaxified'.
  - Fixed a bug where template debugging wasn't showing for Super Admins 'logged in' as non-Super Admins.
  - Fixed a bug where a PHP error occured when submitting a Channel Form with a category tag pair on it and no category selected.
  - Fixed a PHP error on the frontend member public profile page.

- **Developers** 💻

  - Added docs for :ref:`Live Preview compatibilty <live_preview_compatibility>`.
  - Added a new alert style: ``tip``. See the ``asTip()`` method in the :doc:`/development/services/alert` documentation.
  - Added a new :doc:`Memory service </development/services/memory>`.
  - Added ``decimals`` option to the :doc:`Currency Number formatter </development/services/format/number>` so you can override decimal precision.



Version 4.0.9
-------------

Release Date: February 5, 2018

- Fixed a bug (#23445) where multiple Fluid field tags in a template would multiply results.
- Fixed a bug (#23447) where a PHP error could occur creating new channels and duplicating an existing channel that had already been duplicated.
- Fixed a bug where a PHP error could occur when using relationship tags if parameter filters resulted in no valid relationships to return.
- Fixed a bug where custom member fields didn't parse in the member profile templates.
- Fixed a bug where member field conditionals were not properly parsed in the custom profile data tag.
- Fixed a bug where updating ExpressionEngine via the command line may not work.
- Fixed a bug with localization of placeholder text in the Duration fieldtype.
- Fixed a fatal PHP error when manually constructing Grid fields in a Channel Form (``{field:my_grid_field}`` is recommended over manual construction, incidentally).
- Fixed the Channel URL setting for the Blog channel when installing the default theme.
- Prevented a potential memory exhaustion error on the Profile page when you have hundreds of thousands of member records.


Version 4.0.8
-------------

Release Date: January 25, 2018

- A warning has been added if you've upgraded but forgotten to update your software license.
- Fixed a bug (#23433) where an external link did not open in a new window.
- Fixed a bug where the list of changed values passed to ``after`` model event hooks may not be complete.
- Fixed a bug where Textareas in Fluid fields didn't show their formatting bar on edit.
- Fixed a bug (#23435) where Channel Form would throw a fatal PHP error when using tag pairs instead of the standard `{field:fieldname}` Channel Form syntax.
- Fixed a bug (#23443) where `y-axis` was not translated in non-English language packs.
- Fixed a bug (#23427) where BBCode was being parsed in fields with formatting set to "None".
- Fixed a bug where there were errors on the frontend member registration page if custom date fields were on the form.
- Fixed a bug on the frontend member profile editor where superadmins could properly see fields not included publically but their edits didn't 'stick'.
- Fixed a bug (#23425) where file size limitation for uploads was not being enforced properly.
- Fixed a bug where validation did not force selecting an heir when deleting a member and ‘Reassign’ entries was selected.
- Fixed a bug where a PHP error could occur deleting a member who had entries if you chose to delete those entries too, resulting in the member not being deleted.


Version 4.0.7
-------------

Release Date: January 19, 2018

- Improved the OPcache conditional check to include opcache.restrict_api path restrictions so you don't get an anoying PHP error on oddly configured hosts.
- Core version: Fixed a missing Spam module error in comment moderation.
- Eliminated a PHP warning when deleting Grid fields that contain a Toggle column.
- Fixed a bug where variable modifiers didn't work with option field value and label variables.
- Fixed a bug (#23428) where one couldn't save a new Channel if there were more than eight existing Channels.
- Fixed a bug (#23431) where some Relationship field settings may not appear to stick.


Version 4.0.6
-------------

Release Date: January 16, 2018

- Changed the location on the toggle arrow in the publish form, to better show which field it works on.
- Tweaked spacing of section header
- Fixed the Contact Us page in the default theme for the Core version.
- Replaced fatal PHP error on PHP 7.1+ with a 404 page when fiddling around with some URLs in the control panel.
- Fixed a bug where the channel form could fail to display for non-logged in members despite allowing guest posting.
- Fixed a bug where the control panel may zoom when filling in forms on iOS.
- Fixed a bug where Checkboxes or Multi Select fields may save their selections out of order.
- Fixed a bug (#23397) where going to a member's publishing settings would show an error if the RTE wasn't installed.
- Fixed a bug (#23400) where parsing custom category fields may not work in certain Channel module tags.
- Fixed a bug (#23403) where the language in the "show" filter were not consistently pulled from language files.
- Fixed a bug (#23404) where front-end template error messages might parse tag samples (``{exp:email:contact_form}``) as emoji short codes. Though the ``{exp✉️}`` module is pretty rad.
- Fixed a bug (#23406) where some variables could not be used inside a Fluid field tag pair.
- Fixed a bug (#23407) where the Member module's member list may show an error if an invalid ``memberlist_order_by`` is set.
- Fixed a bug (#23408) where Channel Layouts got a bit dizzy and lightheaded and couldn't remember how you organized your fields.
- Fixed a bug (#23409) where custom field tags inside a Relationship field may show errors if the custom field doesn't belong to the related entry's channel.
- Fixed a bug (#23410) where the Auto Saved publish form tab was not appearing for new entries.
- Fixed a bug (#23412) where errors may show when saving an empty Fluid field.
- Fixed a bug (#23413) where the SMTP connection type option may have the wrong value selected.
- Fixed a bug when "Enable emoticons?" is enabled, and an HTML entity is immediately followed by a closing parenthesis (``&entity;)`` would become ``&entity:wink:``)
- Fixed a deprecation notice in the developer log for Fluid fields (#23418).


Version 4.0.5
-------------

Release Date: January 09, 2018

- Changed template selection UI for template routes to a dropdown.
- Made toggle fields accessible to screen readers.
- When editing a field, the groups the field is in now show as active in the field group navigation menu.
- Fixed a bug (#23372) where adding a Grid row may also alter the markup of some third-party fieldtypes within the Grid.
- Fixed a bug (#23368) where Grid variable modifiers may not render.
- Fixed a bug (#23364) where the Member Import utility would not import data into custom fields.
- Fixed a bug (#23376) where pressing the escape key to dismiss a modal may not always work.
- Fixed a bug where a template with conditionals may show an error under PHP 7.2.
- Fixed a bug where the filter on the Fluid field's Add button was not working.
- Fixed a bug (#23380) where saving a category field without entering a name would show a PHP error.
- Fixed a bug (#23380) where deleting a category group that has category fields may show an error.
- Fixed a bug (#23379) where saving a channel saved in EE 3 may show an error regarding the search excerpt.
- Fixed a bug (#23383) where the button text on the idle login modal may disappear.
- Fixed a bug (#23391) where you may not be able to limit a File field to a specific upload directory in a Grid.
- Fixed a bug (#23393) where applying a new field format to existing entries may fail.
- Fixed a bug where multi-channel Channel Entry tags would sometimes show a PHP error.
- Fixed a bug where Grid couldn't add new rows in Channel Form.
- Fixed a bug in the manual updater where the displayed update step was actually one step behind what it was running.
- Fixed a reference in the RSS module to the legacy Member "URL" field.
- Fixed a SQL error in Channel Form when using Dropdown fields pre-populated by newly created custom fields.
- Fixed a bug (#23375) where the Search and Replace utility was not saving Template changes to the filesystem.
- Fixed a bug (#23384) where accented characters (ä, ö, ü, ß, etc.) in Channel or Field names were not being translated to their ascii equivalents (ae, oe, ue, ss, etc.).
- Fixed a username length validation message (bug #23288).
- Fixed a bug (#23388) where a validation error was wrongly triggered when editing a Metaweblog configuration.
- Fixed a bug where a PHP error occurred when non-superadmins filtered the templates by a specific template group, even though they had permission to access the group.
- Fixed a bug (#23386) where new fields were not always assigned to a group when using 'Save & New' to create multiple fields in a group.
- Removed usage of PHP 7.2's deprecated ``each()`` function in the XSS library.
- **Developers:** Fixed some erroneous, old, hand-written SQL references to field groups in the legacy API. You won't notice, because you're using ExpressionEngine's modern APIs.

Version 4.0.4
-------------

Release Date: December 22, 2017

- Fixed a PHP error in the Metaweblog control panel where it erroneously tried to use a field group id to populate the fields.
- Fixed a PHP warning that could occur if you tried to update ExpressionEngine while unable to connect to the internet.
- Fixed a bug (#23353) where it may not be clear which site a template belongs to in the Duplicate Template list.
- Fixed a bug (#23354) where the first variable in a Layout list may not parse.
- Fixed a bug (#23357) where the Entry Manager listing may load in the wrong scroll position in Firefox.
- Fixed a bug (#23358) where Channels may have malformed category group associations saved to them.
- Fixed a bug (#23360) where the `base_path` config override may not be applied in some cases.
- Fixed a bug (#23365) where the 4.0.1 update routine may fail if there are orhpaned Channel layout records.
- Fixed a bug (#23367) where the Search module may show an SQL error if the `search_in=` parameter was set.
- Fixed a bug in the control panel member profile page, where the Avatar path was not correctly filtered for the current Site's preferences.
- Fixed a bug where Channel preferences like "Render URLs and Email addresses as links?" were not respected in Relationship variables.
- Fixed a bug where some third-party tables could cause an error when importing SQL backups made with the Database Backup utility.
- Fixed a bug where submitting the channel form could show an error if the URL title field was not included on the form.
- Fixed a bug where the Pages template dropdown may break if there is a numerically-named template group.
- Fixed some PHP warnings in the Comment module when certain variables were accessed (e.g. ``{comment_url_title_auto_path}``)
- **Developers:** Fixed a bug where the ``parseTagParameters()`` method returned an empty array rather than the default parameter array when there were no parameters set in the tag.


Version 4.0.3
-------------

Release Date: December 15, 2017

- Version checks are still cached if caching is disabled.
- Fixed a bug where the installer may not properly determine the correct database collation to use.
- Fixed a bug (#23340) where the Menu Manager would show JSON output when adding a menu item in Firefox.
- Fixed a bug where some drop down menus might have two scroll bars.
- Fixed a bug where deleting a Grid column that contained validation errors would not re-enable the Save buttons.
- Fixed a bug (#23346) where submitting the Fluid field settings form while the field list is filtered would show a field removal warning.
- Fixed a bug (#23347) where the Quick Links management page would show an error under PHP 7.2.
- Fixed a bug where a relationship to an entry with a Fluid field didn't parse the Fluid field tags.
- Fixed a bug (#23339) where a PHP warning was issued in the CP Logs utility.
- Fixed a bug in SimplePie that prevented the RSS Parser (and ExpressionEngine news feed) from working in CentOS 6 and other environments with outdated cURL libs. (Hey CentOS, they fixed that in 2010...)
- Fixed a bug where a channel form posting to a channel not on the current site could trigger an author validation error if guest posting was enabled.


Version 4.0.2
-------------

Release Date: December 13, 2017

- Increased security against potential environment information leakage.
- Adjusted the ``return=`` parameter of the contact form to accept template_group/template paths.
- Fixed a bug (#23318) where hiding the Channel selection field in an Entry would trigger a validation error on save.
- Fixed a bug (#23319) where a single relationship field could not have its selection deselected.
- Fixed a bug (#23320) where certain grid fields didn't always parse their variables.
- Fixed a bug (#23321) where the contact form would sometimes submit to an invalid URL.
- Fixed a bug (#23322) where members could not assign an RTE toolset.
- Fixed a bug (#23325) where an RTE field may appear twice inside a Grid inside a Fluid field.
- Fixed a bug (#23326) where hiding the author field in a layout could make autosaves throw an error on edit.
- Fixed a bug (#23327) where an empty custom layout tab refused to be deleted.
- Fixed a bug (#23329) where the sticky toggle in channel entries didn't stick.
- Fixed a bug in Channel Form where ``{status_menu}`` wouldn't include custom statii (as they say in dog-latin).
- Fixed a bug where populating fields with content from another channel could produce fatal errors.
- Fixed a bug where some tags were left unparsed in PHP 5.x.
- Fixed a fatal PHP error in the Core version that could occur when submitting a comment.


Version 4.0.1
-------------

Release Date: December 8, 2017

- The thumbnail view of the file picker now defaults to showing 25 at a time.
- Fixed a bug with ordering channel entries by custom fields.
- Fixed a bug where some file tags were left unparsed.
- Fixed a bug where relationshp fields threw errors when sorting by a relationship field.
- Fixed a bug (#23308) where settings for new channels had the wrong defaults applied, causing some entries to encode their HTML.
- Fixed a bug (#23307) where adding a field to an existing channel then editing an entry woudln't save the new field data.
- Fixed a bug where adding a field to an existing channel with a layout wouldn't always let you move that field in the layout.
- Fixed a bug where pagination forgot your filters in the Field Manager.
- Fixed a bug (#23313) where resolving a filename conflict on upload didn't work.
- Fixed a bug (#23303) where there was an HTML encoding issue on the CP Settings member profile page.
- Fixed a bug (#23309) where a textarea inside a Grid inside a Fluid field with formatting buttons showing would show an error on field render.
- Fixed a bug (#23312) where there might be an undefined constant error on some environments.


Version 4.0.0
--------------

Release Date: December 6, 2017

- One-click Updater

  - Simple, reliable, in-app updates let you easily keep up-to-date with the latest features, bug fixes, and security patches.
  - Get notifications right in your control panel, click update, blink, and enjoy the latest version!
  - Backs up your data before updating for safety.
  - Handles server issues or unanticipated problems gracefully, giving you a one-click restoration option.
  - Includes a command-line interface utility for scripting or performing updates without using the control panel.
  - Manual updates are still easy if needed, using the same two-folder replacement method as v3.

- Fluid Fieldtype

  - Added the :doc:`Fluid Fieldtype </fieldtypes/fluid>`, a special fieldtype that can contain multiple instances of other Fieldtypes!
  - Gives content authors 100% control over the order and types of content used to build an entry, while the site builder retains 100% control over the layout and markup. Goodbye WYSIWYG tag soup!
  - Yes, Fluid fields can contain Grids and Relationships. 😉

- Channel Fields, Unleashed!

  - Fields can now be assigned to Channels à la carte.
  - Field Groups are now optional and serve as an organizational convenience.
  - Channel Fields can be reused by multiple Channels and even in multiple Field Groups.
  - Channel Fields can be reused across all Sites when using the Site Manager. [#fields_all_sites]_
  - You can now have as many Channel Fields as you can dream up instead of having your database server complain about some esoteric limit.

- Control Panel

  - Polish, polish everywhere!
  - Channel Manager

    + Intuitively create your Channels all from one screen. No more waterfalls when designing your information architecture.
    + Add individual fields to a Channel, field groups, or a mix of both.
    + Create and assign fields and statuses seamlessly in one spot.
    + "Save & New" functionality allows you to quickly design new Channels that need many fields.

  - Menu Manager

    + Added a handy optional menu for Comments
    + When changing a Single Link menu set item to Dropdown, the first row will be auto-filled with the Single Link data.

  - Added a new utility for backing up your database.
  - Smart, filterable, ajaxified select fields everywhere you need them.
  - Radio fields now display with the first option selected by default on new entries.
  - Added a :ref:`CodeMirror height <codemirror_height>` config override to customize the height of the Template Editor.
  - Enable/disable settings now all use a toggle UI for a simpler, unified experience administrating preferences.
  - Dozens and dozens of UX refinements to the fully-responsive control panel.

- Templating

  - Custom fields and add-on variables have some new :doc:`global modifiers </templates/variable_modifiers>`, reducing the need for plugins!

    + ``:attr_safe``
    + ``:censor``
    + ``:currency``
    + ``:decrypt``
    + ``:encrypt``
    + ``:form_prep``
    + ``:json``
    + ``:length``
    + ``:limit``
    + ``:ordinal``
    + ``:raw_content``
    + ``:replace``
    + ``:rot13``
    + ``:spellout``
    + ``:url_decode``
    + ``:url_encode``
    + ``:url_slug``

  - Added an :doc:`{exp:http_header} </add-ons/http_header/index>` native plugin allowing you to set custom headers in your templates.
  - Layout Variables can now append and prepend to existing Layout Variables, opening up a new world of staying DRY!
  - Layout and embed variables that contain dates can now accept all parameters and modifiers available to date variables.
  - Added ``title`` as a valid option to the File Entries tag ``orderby=`` parameter.
  - ``{if toggle_field}`` conditionals now work as expected regardless of MySQL environment issues.
  - ``{if relationship_field}`` conditionals also now work as expected in all cases.
  - Channel Entries tag

    + Added ``show_expired="only"`` option to the Channel Entry ``show_expired`` parameter, which will bring back only expired entries.
    + Added ``sticky="only"`` option to the Channel Entry ``sticky`` parameter, which will bring back only entries marked sticky.
    + ``search:field=`` for numeric fields now supports piped values to allow ranges, e.g. ``search:year_discovered='>=1970|<1980'``
  - The search module now supports the site parameter, allowing searching across site.
  - Added ``{username}`` and ``{screen_name}`` variables to the Member Reset Password Form template.

- Emoji 😀🌐

  - Increased MySQL requirements to fully supports emoji. If you are upgrading, please see the :doc:`/installation/version_notes_4.0.0` for details.
  - Added support for emoji codes wherever Typography is performed (``:joy:`` becomes 😂). See `Emoji Catalog <https://unicodey.com/emoji-data/table.htm>`_ for a full list of supported short names.
  - Added an Emoji module. If you are using the Emoticon module, you should modernize and use the ``{exp:emoji}`` tags instead. The Emoticon module will be removed in the next major version. See the :doc:`/installation/version_notes_4.0.0` for details.

- Spam Module Improvements

  + Added a Spam overview section to the control panel Homepage for spam moderators.
  + Added a Spam Queue menu option to the Menu Manager.
  + Notifications are now sent when spam-trapped comments are approved.
  + Spam Queue is simpler to use and more clear on the actions that have taken place.
  + Fixed PHP errors in the spam Queue (#21917, #21911).
  + Fixed a PHP 7.1 incompatibility when training the Spam module.

- General Changes

  - Added the ability to set the image quality when specifying a resize or crop on your upload destinations.
  - User-level errors on the front end are now sent with 403 status codes.
  - Email module :doc:`Contact Form </add-ons/email/contact_form>` now has the ability to include a file attachment.
  - Eliminated some redundant queries when Channel Entries are saved.
  - Debugging errors no longer require an extra click to display the stack trace.
  - Error reporting can now be enabled for *all* site visitors from the control panel.
  - The :doc:`cookie path setting </cp/settings/security-privacy>` now defaults to ``/`` on new installations.
  - Removed the following default member fields, creating custom fields for any that had content: URL, location, occupation, interests, birthday, AOL IM, Yahoo IM, MSM IM, ICQ, bio.
  - Added the date field type to available member field types.
  - Channel display names now must be unique per-site.

- Security

  - Added an ``.htaccess`` file to the ``user/config`` folder to deny any web requests. But you've moved your system folder :doc:`above webroot </installation/best_practices>` anyway, right?

- Bug Fixes (only itemized bugs fixed in v4 that were *not* already backported to v3)

  - Fixed a bug (#22800) where the text fieldtype set to a number content type would not display its content if its value was zero.
  - Fixed a bug where entry comment stats could be incorrect.
  - Fixed a PHP error if the CP/URL service is called during an update.

- **Developers**

  + Please refer to :doc:`/development/v4_addon_migration` for details.

.. [#fields_all_sites] Applies to **new sites/fields only**. Upgrades from v3 will need to use a separate migration utility (coming soon) to allow existing fields to be shared across Sites.
