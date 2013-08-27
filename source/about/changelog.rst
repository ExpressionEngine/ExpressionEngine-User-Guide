ExpressionEngine 2.x Change Log
===============================

.. contents::
   :local:
   :depth: 1

Version 2.7.0
-------------

Release Date: August 27, 2013

- General Changes:

  - Added a new fieldtype called :doc:`Grid </modules/channel/grid>` for
    grouping fieldtypes in repeatable rows.
  - Added support for New Relic performance monitoring
  - Added Markdown plugin and field formatting option.
  - Added <, >, <=, and >= numeric comparison operators to the Channel
    Entries search parameter.
  - Added ``{entry_id}`` and ``{url_title}`` variables to the channel
    category archive tag.
  - Added ``{current_query_string}`` global variable
  - Merged the safecracker_file field into the default file field.
  - All files regardless of type are now linked for viewing in the File
    Manager.
  - Added GET support for Dynamic Parameters in Channel Entries tags
  - Removed the Updated Sites module
  - Removed the ability to ping other sites
  - Removed the Corporate theme
  - Removed the ``use_mobile_control_panel`` hidden configuration item.
  - Renamed SafeCracker to Channel Form
  - Added a second file type match to the mime configuration for docx files.

- Bug Fixes:

  - Added a second file type match to the mime configuration for docx files.
  - Quoted-printable encoding of email Subject line made more intelligent.
  - Fixed a bug (#19433) where there were problems submitting a channel
    field form that had failed form validation.
  - Fixed a bug where SafeCracker did not respect the default_entry_title
    and url_title_prefix settings.
  - Fixed a bug where SafeCracker validation would not correctly set the
    new value from a prepping validation function.
  - Updated the relationship parser to handle a few of the more esoteric
    nesting cases more gracefully.
  - Fixed a bug (#19351) where some conditionals with multiple prefixes
    were not parsed correctly if the channel was related to itself.
  - Fixed a bug (#19414) where the forgotten password tool on the front end
    redirected to a blank page on submit due to the installer putting the wrong
    actions in the database.
  - Fixed a bug (#19405) where the Rich Text Editor did not always render with XHTML.
  - Fixed a bug (#19425) where the Rich Text Editor reduced extraneous whitespace
    too greedily.
  - Fixed a bug where PHP 5.3 did not correctly sort relationship entries.
  - Fixed a bug (#19353) where a PHP error could occur when switch database
    debug settings in the control panel.
  - Fixed a bug (#19352) where new sites had incorrect forgotten password
    instructions added to their specialty templates.
  - Fixed a bug (#19363) where a JavaScript error occurred on SafeCracker forms.
  - Fixed a bug (#19360) where BBCode could create bad links when rank denial
    was on and all HTML was allowed.
  - Fixed a bug (#19367) where a MySQL error could occur when adding a new field
    if no member groups were included in the publish author list.
  - Fixed a bug (#19374) where a PHP error could occur using parent relationship
    tags.
  - Fixed a bug (#19378) where control panel redirects to the homepage could be
    missing an ampersand.
  - Fixed a bug (#19375) where the File Manager directory dropdown was not
    limited to the current site.
  - Fixed a bug (#19371) where removing the site themes directory would cause a
    PHP error during installation.
  - Fixed a bug (#19398) where a MySQL error could occur when editing an entry
    with a relationship field sorted by date.
  - Fixed a bug (#19382) where the 'Can change the author name' member group
    permission was not properly implemented when editing entries by others.
  - Fixed a bug (#19401) where a PHP notice of an undefined constant REQ in
    Core.php could occur.
  - Fixed a bug (#19410) where an error was falsely triggered when editing in
    SafeCracker with the author_only parameter on.
  - Fixed a bug (#19406) where a PHP error could occur when viewing someone
    else's member profile on the frontend.
  - Prefixed some RTE language keys to avoid collisions on the publish page
    (#19444).
  - Fixed a bug (#19453) where a PHP error could occur when editing old format
    file fields that contain the full path instead of a file directory indicator.
  - Fixed a bug (#19451) where the Communicate form did not default properly on
    the member permission checkbox.
  - Fixed a bug (#19448) in the member import where a PHP error could occur.
  - Fixed a bug (#19458) where the update script created for 2.0 large databases
    output improper database credentials.
  - Fixed a bug (#19472) in the channel entries tag where month, day and year
    parameters were not localized prior to use.
  - Fixed a bug (#19460) where Super Admins could not login as another member if
    using both cookies and sessions.
  - Fixed a bug (#19489) where publish layouts weren't always properly updated
    when field group assignments were switched.
  - Fixed a bug (#19488) in the SafeCracker module where the dynamic_title
    parameter had no effect.
  - Fixed a bug (#19506) where the {comment_url_title_auto_path} variable in the
    Next/Previous tags used the channel URL instead of the comment path URL.
  - Fixed a bug (#19509) in the comment entries tag where dynamic="no" did not
    affect the returned data.
  - Fixed a security bug where certain form parameters could be changed.
  - Fixed a bug (#19553) in the forgotten password email where the name variable
    was replaced with the username, which was inconsistent with other email
    notification templates.
  - Fixed a bug (#19528) in the Simple Commerce module where a PHP error
    occurred on the purchases page of the control panel.
  - Fixed a bug (#19529) where a PHP error could occur when viewing a member
    profile other than your own on the frontend.
  - Fixed a bug where if the current time is midnight, hours in date
    fields were represented as zero for the US time format.
  - Fixed a bug (#19578) where IP search results in the control panel had
    incorrect links to the user profiles.
  - Fixed a bug (#19590) in the 2.0 updater where the large database shell script
    utf8 conversion did not specifically convert table columns.
  - Altered the column size of site_preferences in the 2.0 update to prevent
    possible truncation of data.
  - Altered the 2.6.0 updater to be more specific when changing the forgotten
    password action records (#19586).
  - Altered relationship fields to have an integer type column in 
    exp_channel_data.
  - Altered default text type columns in exp_channel_data to allow NULL 
    consistently.
  - Fixed a bug (#19615) where the channel calendar could show day of the week 
    occurring on the wrong day due to localizing the days of the week.
  - Fixed a bug (#19612) where the File Browser on the publish page did not 
    limit the directories shown in the directory dropdown to the current site.
  - Fixed a reference to a removed view (#19611).
  - Fixed a bug (#19621) where the latest comment date for an entry was being 
    set incorrectly whenever it needed to be recalculated.

- Developers:

  - New fieldtype method: :meth:`~EE_Fieldtype::validate_settings` fieldtype settings
    can now be validated using the Form Validation library.
  - Made the parent element's content type available to fieldtypes.
  - Entry versioning now works more like autosave in that it stores
    entry POST data, so it is easier for fieldtypes with external
    storage strategies to support revisions.
  - Added ``category_save`` hook that fires upon saving a new category
    or editing an existing category.
  - Added ``category_delete`` hook that fires when a category or its
    parent category group is deleted.
  - Fixed a bug (#19500) in the File_field::browser() where the file_field
    parameter was output as a variable name rather than a string in the resulting
    JavaScript.
  - Renamed the safecracker hooks to use the ``channel_form_`` prefix
    instead of ``safecracker_``. The old hooks are now deprecated.
  - Removed ``server_timezone`` please always use the ``default_site_timezone``
    config item.
  - Removed ``server_timezone`` from the sites config array
  - Removed ``default_site_dst`` from the sites config array
  - Removed ``honor_entry_dst`` from the sites config array
  - Dropped ``localization_is_site_default`` from the members table
  - Dropped ``ping_return_url`` from the channel table
  - Removed the following jquery tools plugins: ``overlay.apple``,
    ``toolbox.history``, ``toolbox.mousewheel``, ``tooltip``, ``scrollable``
  - Removed the following jquery plugins: ``crypt``, ``ee_focus``,
    ``ee_upload``, ``fancybox``, ``simplemodal``, ``thickbox``
  - Removed the example markitup button set.
  - Added a ``custom_field_modify_data`` hook to modify custom field
    information before it gets sent to the field.
  - Deprecated Methods

    - ``Api_channel_entries::send_pings``
    - ``Member_model::get_localization_default``
    - ``Filebrowser::frontend_filebrowser``


Version 2.6.1
-------------

Release Date: May 6, 2013

- General Changes:

  - Increased the size of the Relationships reordering drag target.
  - Made the Relationships field search box more conspicuous.
  - Publish tabs that contain fields with form submission errors are now
    marked with a flag.

- Bug Fixes:

  - Fixed a bug (#19322) where specifying ``custom_fields`` in the
    disable parameter would cause an error.
  - Fixed a bug (#17895) where the Rich Text Editor did not properly
    apply heading changes.
  - Fixed a bug (#18272) where text copied into an empty Rich Text
    Editor was wrapped in span elements instead of paragraphs.
  - Fixed bugs (#19225, #17932, #17956) where the Rich Text Editor did
    not always handle newlines correctly.
  - Fixed a bug (#19321) where updated Relationship fields would cause
    an error if they were sorted by date.
  - Fixed a bug (#19196) where Internet Explorer did not load jQuery
    into an iframe unless the ``src`` attribute was set after adding the
    iframe to the DOM.
  - Fixed a bug (#19257) where hitting enter in the filebrowser search
    box would submit the publish form.
  - Fixed a bug (#19339) where ``{date_footer}`` was shown improperly.
  - Fixed a bug (#19337) where variables added to the channel row data
    from an extension hook where not always replaced correctly.
  - Fixed a bug (#19346) where ``{page_url}`` was not replaced
    correctly.
  - Fixed a bug (#19326) where email could generate a PHP error when
    using Sendmail.
  - Fixed a bug (#19327) in the 2.0 updater where an error could occur
    if a template was set to a custom template type.
  - Fixed a bug (#19328) where a MySQL error could occur on the publish
    page if no member groups were assigned to the author dropdown.
  - Fixed a bug (#19331) where a PHP error occurred when exporting
    template groups.
  - Fixed a bug (#19335) where status was not properly set using a
    SafeCracker form.
  - Fixed a bug (#19342) where a PHP errors was thrown when importing
    members with custom fields.
  - Fixed a bug(#19338) introduced in 2.6.0 where certain sessions could
    not be destroyed by logging out.
  - Altered SmartForge library to ignore strict mode warnings when
    altering database fields (bug #19330).
  - Fixed a security bug where a non Super Admin with Member
    Administration access could create Super Admins.
  - Fixed a bug (#19329) where the installer may fail in earlier
    versions of PHP.


Version 2.6.0
-------------

Release Date: April 23, 2013

- General Changes:

  - ExpressionEngine now requires PHP 5.2.4 and MySQL 5.0.3.
  - Relationships field improvements:

    - New interface
    - Supports multiple relationships
    - Provides infinitely nestable relationship tags
    - Provides access to siblings and parents
    - SafeCracker support
  - Timezone selection menus now include all timezones for automatic date
    localization and handling of Daylight Saving Time rules.
  - Added Subscriber List tag to the :doc:`Comment Module </modules/comment/index>`
  - Added ``inline`` option to ``paginate`` parameter.
  - Added new variables to the Channel Next/Previous tags:

    - ``{channel_short_name}``
    - ``{channel}``
    - ``{channel_url}``
    - ``{comment_entry_id_auto_path}``
    - ``{comment_url_title_auto_path}``
  - Added new variable ``{comment_subscriber_total}`` to the Channel Entries tag.
  - Modified channel entries to no longer allow conditional parsing within content
    (See :doc:`/installation/version_notes_2.6` for details)
  - Entry View Tracking is now disabled by default.
  - Server offset setting has been removed from Localization Settings and is
    now a hidden configuration variable only, called ``server_offset``.
  - Added SMTP Server Port to the Email Configuration page.
  - Added a hidden config, ``email_smtp_crypto``, that allows you to specify an
    encryption protocol for SMTP email.
  - PHP's upload_max_filesize setting is now displayed in the File Upload
    Preferences form.
  - Added a status_code="" parameter to the {redirect} tag allowing you to specify
    the status code of the redirect.  Currently only accepts 3xx status
    codes.
  - smtp_password is now an input of type="password" in Admin->Email Configuration.
  - Added category_url_title to the category edit page table after Category Name.
  - Changed password reset flow to remove an unnecessary step and force them to change
    their password.
  - Added ``channel_short_name`` variable to the comment entries tag.
  - Added the ability to use the system default thumbnails inside file field
    variable pairs.
  - Template manager no longer automatically adds files starting with ``._``.

- Bug Fixes:

  - Fixed (#16355) Remember Me (FINALLY)
  - Fixed bugs (#16939, #17363, #19133) where the DST setting may
    incorrectly shift stored and displayed times by one hour.
  - Fixed an issue where JSON responses in the control panel were not not
    always sent as UTF-8
  - Fixed a bug (#18107) where email links may not render correctly in the
    Forum module.
  - Fixed a bug (#18230) where the edit date was being saved to the database
    as a localized date on initial entry save.
  - Fixed a bug (#18308) where an entry's edit date was incorrectly tied to
    the entry date on the initial save.
  - Fixed a bug with the Channel Entries API when trying to save a custom
    field with type "real" and no data.
  - Fixed a bug (#19105) where the updater may have problems updating from
    EE 1.x due to config settings.
  - Fixed a bug (#16951) where the search module ignored the search form's where
    field selection and defaulted to searching for all words.
  - Fixed a bug (#16985) where ExpressionEngine tags were not encoded in some
    category fields.
  - Fixed a bug (#17283) where setting the comment edit time limit to 0 did not
    result in no time limit on editing.
  - Fixed a bug (#19110) where a MySQL error occurred when using an exact search
    parameter in the channel entries tag and not including a search term.
  - Fixed a bug (#19130) where an improper cookie domain could be used when
    switching MSM sites, making it impossible to switch sites via the control
    panel.
  - Fixed a very rare bug (#19140) where a PHP error could occur when sending
    comment notifications after a comment status change.
  - Fixed a bug (#19158) where a PHP error could occur when submitting an RTE
    field with code tags in it.
  - Fixed a bug (#17032) where changes to the Admin localization settings did
    not affect the default user localization.
  - Fixed a bug (#19180) in SafeCracker File where it was not MSM compatible
    when used in SafeCracker.
  - Fixed a bug (#19192) where IP country searches and ban checks could trigger
    a MySQL error using some IPs.
  - Fixed a bug (#18278) in SafeCracker where it was possible to manipulate the
    parameter behavior.
  - Fixed a bug in SafeCracker where checks on the posted status did not follow
    member group preference settings.
  - Fixed a bug (#17259) in SafeCracker where the relationships options variable
    pair was not parsed outside the custom field loop.
  - Modified string cleaning to accommodate an iconv bug that could result in
    form data being lost it contained invalid characters (#19134).
  - Fixed a bug in the IP to Nation module where environmental factors could
    cause an erroneous cache full error when attempting to update the IP
    database.
  - Fixed a bug (#19223) in the Metaweblog API where failed new entries did not
    elicit a proper fault code.
  - Fixed a bug (#19220) in the Simple Commerce module where a MySQL error could
    occur after an update from 1.x due to a missing field.
  - Fixed a bug (#19193) in the Comment Module where closing a comment via front
    end editing did not properly update all associated statistics.
  - Fixed a bug (#19170) where a PHP error could result when $_GET variables
    included an array.
  - Fixed a bug (#19241) where a PHP error could occur when calling the Channel
    Structure API's modify_channel() method.
  - Removed unused error array from the batch update method (#19251).
  - Fixed a bug (#19250) in the file field output where non-existent variables
    were parsed as if a path existed.
  - Fixed a bug (#19114) where the forgot password language was ambiguous.
  - Fixed a bug where uploading multiple files using the multiple="multiple"
    attribute would cause an error in SafeCracker.
  - Fixed a bug (#19063) where URLs mentioned in module descriptions may not
    be masked.
  - Fixed a bug (#18353) where showing an RTE field as an excerpt in a
    Search Results tag may be missing spaces between words.
  - Fixed a bug (#18102) where members could only edit entries if the
    publishing was was enabled.
  - Fixed a bug (#19094) where using the RTE via SafeCracker may show PHP
    errors upon submission.
  - Fixed a bug (#19231) where SafeCracker File would fail to upload a second
    file if the file names differed only on suffix.
  - Fixed a bug (#18244) where duplicating a site's entries via MSM would
    have duplicate entry data for the newly-created entries in the
    channel_data table.
  - Fixed a bug (#18221) where using the date-picker in a SafeCracker tool
    would lose the leading zero on the hour segment.
  - Fixed a bug (#18270) where trying to edit a file with some special
    characters in the file name would show an Unauthorized error.
  - Fixed a bug (#19102) where the ``{excerpt}`` and ``{full_text}`` tags in
    the Search Results tag pair showed regular expression escape characters.
  - Fixed a bug (#19062) where autosaving an empty File field would save the
    incorrect data and may show a PHP error when editing the entry.
  - Fixed a bug (#18217) where an "Invalid GET Data" error may appear when
    certain safe characters where part of a query string value.
  - Fixed a bug (#19271) where accessing member logout when already logged
    out could destroy other user's sessions.
  - Fixed a bug (#19237) where duplicate field names could be created due
    to the name being truncated for length.
  - Fixed a bug (#16256) where the status dropdown on the Content Edit
    page was not always populated with the correct custom statuses.
  - Fixed a bug where variable pairs could be incompletely parsed due to
    naming conflicts.  See bugs #17915, #17673, #19249.

- Developers

  - The Localize class has been rewritten to use PHP's DateTime class for
    better localization and daylight savings time handling.
  - Added ``Localize::string_to_timestamp`` method for converting a
    pre-localized or non-localized time string into a Unix timestamp.
  - Added ``Localize::format_date`` to convert a Unix timestamp into a
    formatted date string.
  - ``Localize::$now`` property now accounts for server offset.
  - Changed the CP view file structure to inherit from a master template.
    Please check your view file overrides.
  - Added global ``ee()`` function for easy access to the EE super
    object.
  - String helper is now loaded automatically.
  - Updated underscore.js to version 1.4.4
  - Updated the Email library to be more consistent with CI, including a number
    of CI bug fixes.  Please see the documentation for full details on usage
    recommendations.
  - Added ``Email::set_headers()``.
  - Added the following public Email class variables: ``smtp_keepalive``,
    ``smtp_crypto`` and ``dsn``.
  - Added an override for ``Email::_mime_types()`` that uses the mimes config
    file to define mimes.
  - Email::send() now automatically clears parameters if the request was
    successful, which may have implications for success messages.
  - Email::clear() should be used instead of Email:initialize() to manually
    clear parameters.
  - Channel Entries API now allows new or updated entry edit date to be
    explicitly set.
  - Channel Entries API will use current time as the default entry date when
    adding or updating an entry if the entry date is not explicitly set.
  - Channel Entries API will use current time as the default edit date when
    adding or updating an entry if the edit date is not explicitly set.
  - Added SmartForge library, making the Update Wizard's database changes far
    more fault-tolerant.
  - Added an update log to record notices, exceptions, and failures from the
    Updater.
  - ``Functions::convert_curlies()`` now also encodes EE conditionals
  - **Reactor:** Added ability to have multiple fieldtypes in one add-on package.
  - **Reactor:** Added ``relationships_display_field`` hook to alter
    related entries displayed in the publish field of a muti-select
    Relationships field.
  - **Reactor:** Added ``relationships_post_save`` hook to alter the
    entry IDs that get saved upon saving an entry with a Relationships
    field.
  - **Reactor:** Added ``relationships_query`` hook to alter the entry
    IDs returned when parsing nested Relationships field tree tags.
  - Deprecated methods:

    - Calls to load the Security library---it's automatically loaded
    - Using the class name as the constructor for Fieldtypes
    - Modifying ``load::_view_path``, use ``load::add_package_path``
      instead
    - Accessing the EE super object reference on one of the core classes. Please
      use ``ee()`` or ``get_instance()`` instead.
    - ``Api_channel_entries::submit_new_entry`` and
      ``Api_channel_entries::update_entry``, use ``Api_channel_entries::save_entry`` instead.
    - ``Cp::add_to_head`` should only be used for styles, use ``Cp::add_to_foot`` for scripts.
    - ``Cp::delete_layout_tabs``, use ``Layout::delete_layout_tabs`` instead.
    - ``Cp::delete_layout_fields``, use ``Layout::delete_layout_fields`` instead.
    - ``Cp::set_variable``, set the variable directly on the view object instead, e.g.
      ``ee()->view->$name = $value;``
    - ``Cp::secure_forms``, use ``EE_Security::have_valid_xid`` instead.
    - ``Cp::fetch_cp_themes``, use ``Admin_model::get_cp_theme_list`` instead.
    - ``Email::_get_ip``, use ``Input::ip_address`` instead.
    - ``Email::_set_header``, use `instead.`Email::set_header``
    - Email hidden configuration variable
      ``$config['email_smtp_port']``, use ``$config['smtp_port']``
      instead
    - ``Functions::remove_double_slashes``, use String helper's ``reduce_double_slashes()`` instead.
    - ``Functions::compile_relationship``
    - ``EE_Javascript::generate_json``, use ``json_encode()`` instead
    - ``Localize::timestamp_to_gmt``, use Date helper's ``mysql_to_unix()`` instead.
    - ``Localize::set_localized_time``.
    - ``Localize::set_server_time``.
    - ``Localize::set_server_offset``.
    - ``Localize::set_localized_offset``.
    - ``Localize::set_human_time``, use ``Localize::human_time`` instead.
    - ``Localize::convert_human_date_to_gmt``, use ``Localize::string_to_timestamp`` instead.
    - ``Localize::simpl_offset``
    - ``Localize::format_timespan``, use Date helper's ``timespan()`` instead.
    - ``Localize::fetch_date_params``.
    - ``Localize::decode_date``, use ``Localize::format_date`` instead.
    - ``Localize::convert_timestamp``, use ``Localize::format_date`` instead.
    - ``Localize::zone_offset``.
    - ``Localize::zones`` method and property.
    - ``Localize::set_localized_timezone``.
    - ``Localize::fetch_days_in_month``, use Date helper's ``days_in_month()`` instead.
    - ``Localize::adjust_date``, use ``Calendar::adjust_date`` instead.
    - ``Output::show_user_error``, use ``show_error()`` instead
    - ``Services_json::json_decode`` use ``json_decode()`` instead
    - ``SafeCracker_lib::decrypt_input``
    - ``SafeCracker_lib::encrypt_input``
    - Security helper's ``do_hash()``, use PHP's hashing functions instead.
    - ``Session::update_cookies``
    - ``Template::assign_relationship_data``
    - ``Channel::related_entries``, use
      ``Channel::related_category_entries()`` instead
    - ``Safecracker_lib::decrypt_input``
    - ``Safecracker_lib::encrypt_input``

  - Removed Methods:

    - ``Channel_model::get_channel_categories()``
    - ``Cp::add_layout_fields()``
    - ``Cp::add_layout_tabs()``
    - ``EE_Typography::xhtml_typography()``
    - ``EE_XMLParser::data2xml()``
    - ``File_upload_preferences_model::get_upload_preferences()``
    - ``Functions::clone_object()``
    - ``Functions::create_directory_map()``
    - ``Functions::encoding_menu()``
    - ``Functions::hash()``
    - ``Localize::offset_entry_dst()``
    - ``Localize::set_gmt()``
    - ``Login::login_form()``
    - ``Member_model::get_authors_simple()``
    - ``Template::template_authentication_basic()``
    - ``Template::template_authentication_check_basic()``
    - ``Tools_model::delete_upload_preferences()``
    - ``Tools_model::get_files()``
    - ``Tools_model::get_upload_preferences()``


Version 2.5.5
-------------

Release Date: December 20, 2012

- General Changes:

  - Fixed a bug where date single variables with colons in their names would
    not render.
  - Fixed a bug (#18268) where PayPal addresses may fail validation in the
    Simple Commerce module.
  - Fixed a bug (#19075) where entries posted via SafeCracker weren't
    honoring the channel's entry versioning setting.
  - Fixed a bug (#19088) where ``url_title`` could not be set via dynamic
    parameters in the Channel Entries tag.

- Developers

  - Fixed a bug where the Member_model::member_delete() method would have issues
    deleting single members not passed within arrays.

Version 2.5.4
-------------

Release Date: December 18, 2012

- Important:

  - Custom main menu items are now XSS cleaned.
  - Quick links are now XSS cleaned.
  - Added X-Frame-Options header to deny attempts at iframing the Control Panel.
  - Super Admins are required to re-authenticate before they can login as another
    user.
  - Super Admins are required to enter their password when changing another user's
    email address, username, or password.
  - Generate salt, salted password, and crypt key on user registration.
  - Changed Forgot your Password logic so it always responds with the same message
    so email addresses aren't confirmed and denied for spammers.

- General Changes:

  - Added the ability to use status in the Channel Entry tag's orderby
    parameter.
  - Added ``{current_url}`` standard global variable.
  - Added ``{current_path}`` standard global variable.
  - Changed HTTP Auth realm from 'ExpressionEngine Template' to 'Restricted
    Content'.
  - Added the ``disable="pagination"`` parameter to the Comment Entries
    tag to disable pagination overhead.
  - Altered member validation to ensure duplicate username checks are case
    insensitive regardless of database settings.

- Bug Fixes:

  - Fixed a bug (#18238) where a temp\_ prefix was added to duplicate file names
    when using SafeCracker File.
  - Fixed a bug where a PHP error could occur when overwriting unsynced files.
  - Fixed a bug where XSS filters in certain browsers could break javascript on
    the template edit page under rare circumstances.
  - Fixed a bug (#18280) where referrer tracking was not disabled when the
    Referrer module was uninstalled, causing a MySQL error.
  - Fixed a bug (#18309) where the IP to Nation module did not properly update
    the update date.
  - Fixed a bug (#18201) where the IP to Nation module updater could call no
    longer included files, resulting in an error.
  - Fixed a bug (#18313) where IP to Nation database updates could fail silently
    when the host site is unavailable.
  - Fixed a bug (#18341) where backslashes could be improperly stripped from the
    View Entry page in the control panel.
  - Fixed a bug where backslashes could be improperly stripped when inside the
    Next/Previous tags.
  - Fixed a bug (#16862) where the Wiki module returned both categorized and
    uncategorized entries on the uncategorized entries page.
  - Fixed a bug (#18314) in the Wiki module where the check for duplicate
    titles when renaming an article was not wiki specific.
  - Fixed a bug (#18344) where the Wiki's category page could display improperly
    under certain server environments.
  - Fixed a bug (#18304) where a 404 redirect could result in a PHP error on
    some versions of PHP.
  - Fixed a bug (#19046) where backslashes were improperly stripped from search
    results.
  - Fixed a bug (#18199) where IP to Nation was missing a few countries on
    the ban list.
  - Fixed a bug (#18194) where the total entries and comments fields in the
    members table could max out before the fields in the channel and stats
    tables.
  - Fixed a bug where some valid date-based conditionals may show an
    "Invalid EE Conditional Variable" error.
  - Fixed a bug (#18222) where the comments module could not display
    comments with a status of closed.
  - Fixed a bug (#18208) where the ``include_seconds`` configuration would
    not be respected after changing the date in a date field.
  - Fixed a bug (#18210) where the File module would improperly show
    protocol-relative URL paths.
  - Fixed a bug (#18234) where some member permissions may be reset when
    saving permissions for other member groups.
  - Fixed a bug where formatted date variables in conditionals may not
    always parse correctly.
  - Fixed a bug (#17802) where the using the legacy ``$conf`` variable in
    ``config.php`` may cause the updater to have wrong information.
  - Fixed a bug (#18236) where the ``cp_url`` config override may be
    overwritten by saving the General Configuration form.
  - Fixed a bug (#18265) where file field entries displayed from other sites
    may not render correctly.
  - Fixed a bug (#18239) where custom settings initialized in the
    Typography class would not persist through multiple calls of
    ``parse_type()``.
  - Fixed a bug (#18289) where filenames with spaces may not be properly
    encoded for display on the front-end when synced via the file manager.
  - Fixed a bug (#18285) where the RTE's image tool may place an image at
    the top of the editor if browser selection data changes.
  - Fixed a bug (#18263) where PHP may claim an object wasn't passed by
    reference to an extension hook.
  - Fixed a bug (#19050) where members sharing the same IP address and user
    agent may be locked out of the control panel if one of those members
    triggered a password lockout.
  - Fixed a bug (#18343) where an old javascript plugin was still
    attempting to be loaded in the control panel.
  - Fixed a bug (#18337) where the ``{absolute_count}`` variable in the
    search results tag returned the value of ``{count}`` instead.
  - Fixed a bug (#19056) where the ``{local_time}`` variable may not show
    the correct time in ``{exp:member:custom_profile_data}``.
  - Fixed a bug (#19055) where javascript sent via the ``cp_js_end`` hook
    may be incorrectly cached.
  - Fixed a bug (#18319) where PHP may not be rendered in templates with a
    SafeCracker ``{custom_fields}`` loop.
  - Fixed a bug (#19047) where setting the site URL to a protocol-relative
    URL would break ``{path=}`` variables.
  - Fixed a bug (#17951) where SafeCracker may overwrite another form's
    action ID if the SafeCracker form fails to load.
  - Fixed a bug (#19061) where PHP errors may not be shown on the extensions
    page regardless of the ``debug`` config item.
  - Fixed a bug (#18303) where the ``{edit_date}`` variable in comment
    entries may show the wrong date.
  - Fixed a bug (#16814) where the Datepicker field on a multiple entry edit
    screen would not allow AM to be manually typed into the field.
  - Fixed a bug (#18250) where forum member templates may not fully render
    when accessing the forum through the forum module tag.
  - Fixed bugs (#18233, #18237) where submitting a SafeCracker form that
    didn't include checkbox fields would cause an undefined index error.
  - Fixed a bug (#18248) where the SafeCracker tag's ``{status_menu}``
    variable didn't output statuses in the order designated in the CP status
    management screen.
  - Fixed a bug (#18264) where the ``{absolute_count}`` variable in the
    comment entries tag didn't return the correct result.
  - Fixed a bug (#18245) in which member groups were not being created on
    all sites when Multisite Manager was enabled.
  - Fixed a bug (#18259) where ``{if editable}`` in the Comment Entries
    tag was failing to account for edit timeout.
  - Fixed a bug (#18276) in which members in a user group with out upload
    permissions on a certain file directory could not view files in that
    directory when logged in.
  - Fixed a bug (#18258) where file paths with special characters in them
    were being url encoded and then saved to the database, resulting in
    the references to them in channel entries being corrupted.
  - Fixed a bug (#18350) where File Manager search was defaulting to
    filename only search when a search of all fields was expected default.
  - Fixed a bug (#18351) where the username field length was too short in
    the session time out login form.
  - Fixed a bug (#18321) where "Can administrate design preferences" was not
    properly controller access to design preferences.

- Developers:

  - Moved the cp_member_login hook so that it is called after control panel
    logins are logged.
  - Fixed a bug (#19058) where api_channel_structure::get_channels($site_id)
    ignored the site_id parameter.

Version 2.5.3
-------------

Release Date: September 11, 2012

- General Changes:

  - Added field searching across multiple sites to Channel Entries. When more than
    one site is specified along with a field search, all fields with the specified
    name used in all sites specified will be searched and entries returned.
    Related to bugs #17298 and #18074.
  - Changed Forgot your Password logic so it always responds with the same message
    so email addresses aren't confirmed and denied for spammers.
  - Added autocomplete="off" to all email, username, and password fields.
  - Altered the display of Standard Global variables to output an empty string
    rather than the unparsed variable when not set.
  - Added an ID of expressionengine_template_debug to the division containing
    template debugging output.
  - **Reactor:** Added ``path_third_themes`` and ``url_third_themes`` hidden config
    variables.

- Bug Fixes:

  - Fixed a bug where template files were not checked for a maximum length of 50
    characters, which could result in the creation of duplicate template groups.
  - Fixed a bug (#17896) where existing image links could break when a field was
    switched to a Rich Text field.
  - Fixed a bug (#17995) where a PHP error could occur on the frontend when the
    category URL indicator was left blank.
  - Fixed a bug (#18129) in the channel entries tag where the parent_id variable
    was always zero if a subcategories parent was not included in the assigned
    categories.
  - Fixed a bug (#18131) where the Channel module's reverse related entries
    could treat numbers as strings, resulting in improper ordering.
  - Fixed a bug (#18080) where the Channel Entries tag was not properly ignoring
    category indicators in the URL when dynamic was set to 'no'.
  - Fixed a bug (#17445) where Ping servers were only populated on the publish
    page if the user had saved their individual ping preferences.
  - Fixed a bug (#17507) where Subscription pagination was incorrect for
    administrators viewing a user's subscriptions.
  - Fixed a bug (#17952) where Communicate's batch mode displayed unstyled.
  - Fixed a bug (#17762) where the Simple Commerce module could reject a valid
    ping due to the use of capital letters in the account email.
  - Fixed a bug (#18120) where the Simple Commerce module could reject a valid
    ping due to slashes added when magic_quotes are turned on.
  - Fixed a bug (#16950) in the Simple Commerce module where entering a purchase
    manually could cause a MySQL error in strict mode.
  - Fixed a bug (#16607) in the Simple Commerce module where subscriptions could
    be rejected if Paypal sent the payment notification too soon.
  - Fixed a bug (#18171) where the Content Edit page javascript could silently
    fail to paginate and filter in rare circumstances.
  - Fixed a bug where the JavaScript on the Template Manager page loaded all
    template options, slowing page load in some circumstances.
  - Fixed a security issue that could have caused issues in the template manager.
  - Fixed a bug (#18004) where member groups able to create channels were
    not able to access channels they have created.
  - Fixed a bug (#18087) where some spam filters may falsely mark an email
    from ExpressionEngine as spam due to extra encoding of the subject line.
  - Fixed a bug (#18069) where modules may not be updated if previous
    version number contained alpha or beta designation.
  - Fixed a bug (#17989) where some conditionals that contained single
    quotes no longer worked.
  - Fixed a bug (#17946) where the Template Structure API could not
    duplicate a template group.
  - Fixed a bug (#17935) where the Typography class may try to include an
    invalid path.
  - Fixed a bug (#17623) where Functions::delete_directory may fail.
  - Fixed a bug (#16339) where determining a unique URL title may run an
    unnecessary query.
  - Fixed a bug (#18128) where publish form validation errors regarding the
    author field would not show an error message.
  - Fixed a bug (#16832) where the Extensions class had some unnecessary
    code for PHP 4.
  - Fixed a bug (#16909) where cleaning cookie keys may show a "Disallowed
    Key Characters" error.
  - Fixed a bug (#18073) where clicking a formatting button in an empty rich
    text editor may output "undefined" in the text area.
  - Fixed a bug (#18054) where RAR files could not be uploaded.
  - Fixed a bug (#18044) where deleting a channel field group would not
    disassociate the field group from channels.
  - Fixed a bug (#18036) where having the Mailing List module installed but
    no mailing lists may show a PHP error on the Communicate screen.
  - Fixed a bug (#18040) where the Referrer module wouldn't log referrers
    unless the IP to Nation module was installed.
  - Fixed a bug (#18085) where the Database Query Form link would appear for
    non-super admins.
  - Fixed a bug (#18022) where uploading an animated GIF may produce a PHP
    error in the File Manager.
  - Fixed bugs (#17878, #18094) where sorting entries by status or paging on
    the edit screen with a restricted account may fail.
  - Fixed a bug (#16904) where photo_url may not be parsed in a channel
    entries loop if photos were enabled but avatars were disabled.
  - Fixed a bug (#17966) where hidden templates could not be used as
    templates for Pages entries.
  - Fixed a bug (#17684) where removing a member photo when avatars were
    disabled showed an error.
  - Fixed a bug (#18002) where a quote mismatch in a single variable in a
    channel entries loop may show a PHP error.
  - Fixed a bug (#18012) where Api_channel_entries::delete_entry() may show
    the wrong error messages for certain member permissions checks.
  - Fixed a bug (#18145) where the RTE extension used the cp_menu_array
    hook without checking last_call.
  - Fixed a bug (#18092) where the RTE fieldtype wouldn't automatically turn
    URLs and email addresses into links if the channel preference was on.
  - Fixed a bug (#17795) where the throttle table may not be automatically
    truncated if online user tracking was turned off.
  - Fixed a bug (#17775) where the comment form could be validated using
    whitespace.
  - Fixed a bug (#17903) where custom menu bar links may not work depending
    on the path saved and the path used to access the control panel.
  - Fixed a bug (#17785) where variables in conditionals were not trimmed
    for whitespace while the rendered variable was.
  - Fixed a bug (#18071) where masked URLs in the control panel were not
    URL-encoded to protect characters like ampersands.
  - Fixed a bug (#18032) where the "Invalid GET Data" error would appear to
    site guests, it now only appears for super admins.
  - Fixed a bug (#17832) where conditionals could not be spanned over
    multiple lines.
  - Fixed a bug (#18056) where URL titles at least 70 characters long with
    one hundred thousand duplicates would fail to validate.
  - Fixed a bug (#18157) where pre formatting, post formatting, and
    properties were not rendering with wrapped file fields on the front end.
  - Fixed a bug (#17954) where the category archive tag would not output
    markup outside of {categories} and {entry_titles} variable pairs.
  - Fixed a bug (#17766) where having a custom 404 template set would have
    template fetching behave as if Strict URLs was turned on.
  - Fixed a bug (#18063) where entry titles could contain invisible
    characters.
  - Fixed a bug (#18096) where conditionals may strip script tags from the
    evaluated variable.
  - Fixed a bug (#18163) where orphaned categories may not be sorted
    correctly when sorting alphabetically.
  - Fixed a bug (#17619) where having multiple HTML image formatting buttons
    with different markup would all output the same markup.
  - Fixed a bug (#18001) where the limit to the amount of banned IPs or
    emails could be reached easily.
  - Fixed a bug (#18147) where having many member groups may slow down
    loading of the member group editing page.
  - Fixed a bug (#18165) where custom member select fields with quotes in
    the selected value would fail validation on the front end.
  - Fixed a bug (#18170) where category groups from other MSM sites may
    appear as an option in the channel group assignments.
  - Fixed a bug (#17999) where upgrading from pre-1.x versions may show a
    database error.
  - Fixed a bug (#17433) where the "img" HTML button was still present even
    after removing all image buttons in the settings.
  - Fixed a bug (#17645) where filtering entries may show a PHP error.
  - Fixed a bug (#17974) where member registration validation may show the
    wrong error message.
  - Fixed a bug (#17669) where an uploaded file with special characters in
    its file name may not appear correctly.
  - Fixed a bug (#17670) where a maximum file upload size of 5 or less would
    allow a file of any size to be uploaded.
  - Fixed a bug (#18172) where saving Rich Text Editor toolsets for other
    members appeared not to work.
  - Fixed a bug (#17910) where the XML Encode plugin would allow email
    email addresses to be converted into links.
  - Fixed a bug (#17837) where using modifiers on variable pairs would not
    work.
  - Fixed a bug (#17557) where pagination links in the file manager were not
    updated when filters were applied.
  - Fixed a bug (#17992) where the file type and date range filters were not
    working on the File Manager screen.
  - Fixed a bug (#17554) where syncing an upload directory would not update
    file sizes in the database.
  - Fixed a bug (#18141) where setting preserve_checkboxes to "yes" on a
    SafeCracker form would not save the values of on-screen checkboxes if
    they were unchecked.
  - Fixed a bug (#18133) where values of a SafeCracker form were not being
    escaped which could break form markup.
  - Fixed a bug (#17936) where the Table library may show a PHP error about
    an undefined property.
  - Fixed a bug (#18182) where Template::parse_variables() may not parse
    variables in variable pairs under certain conditions.
  - Fixed a bug (#18184) where the output profiler did not display in the
    control panel.
  - Fixed a bug (#17646) where SafeCracker form validation for required
    checkbox fields would fail.
  - Fixed a bug (#18132) where SafeCracker form validation would pass if the
    encrypted hidden fields containing the rules were edited.
  - Fixed a bug (#18000) where SafeCracker form validation would fail if a
    file field was required but filled in.
  - Fixed a bug (#18185) where the recent comment date for an entry would be
    set to zero upon editing the entry.
  - Fixed bugs (#18018, #18019, #18020) where there were unnecessary
    queries when loading a SafeCracker form.
  - Fixed a bug (#16838) where categories in a SafeCracker tag pair did not
    have access to category images or descriptions.
  - Fixed a bug (#18118) where WMV files could not be uploaded.
  - Fixed a bug (#17958) where users were not allowed to move an entry between
    identical channels when the category was "none" due to "none" having two
    different representations in the db.
  - Fixed a bug (#18104) where the publish page tab translation file was not
    being loaded, and thus tabs were not being correctly localized.
  - Fixed a bug (#18033) that was causing the option "None" to be absent from the
    formatting options for category's custom textarea fields.
  - Fixed a bug (#17298) where field searching was not working when searching
    across sites using the multiple site manager.
  - Fixed a bug (#18124) that was causing author_id="CURRENT_USER" in the channel
    module to fail when Dynamic Channel Query Caching was enabled.
  - Fixed a bug (#18058) where SafeCracker's settings were not being properly
    translated and saved from the settings form, result being that users
    couldn't uncheck any of the settings checkboxes once checked.
  - Fixed a bug (#17753) where Safecracker was inconsistently formatting large
    numbers.
  - Fixed a bug where the set of valid category groups was being incorrectly
    determined in in the channel:entries and channel:category_headings tags when
    a text category url parameter was given.
  - Fixed a bug where the default form ID for the Tell-A-Friend form was
    'contact_form' instead of 'tellafriend_form'.
  - Fixed a documentation error (#17783) where the cp_menu_array hook was
    not documented.
  - Fixed a documentation error (#17232) where some hidden configuration
    variables weren't mentioned on the main hidden configuration variables
    page.
  - Fixed a documentation error (#17451) where the exp:forum tag's board
    parameter was not documented.

- Developers:

  - Added ``api_channel_entries_custom_field_query`` hook for altering the
    custom fields query array result.
  - **Reactor:** Added ``file_after_save`` hook in File_model.
  - **Reactor:** Moved RTE display code to its library file to be more accessible
    by third parties.

Version 2.5.2
-------------

Release Date: June 6, 2012

- General Changes:

  - One-click updating of IP to Nation database, as well as support for
    IPv6 addresses for nations.
  - Improvements to Blacklist/Whitelist module to handle uncollapsed IPv6
    addresses.

- Bug Fixes:

  - Fixed a bug (#17978) where the control panel would sometimes show an error
    for older versions of PHP.
  - Fixed a bug (#17968) where the Referrer module was attempting to update the
    comments table instead of the referrer table.
  - Fixed a bug (#17971) where accessing a site with a 'site_name'
    configuration variable set may show errors on older versions of PHP.

Version 2.5.1
-------------

Release Date: May 29, 2012

- Important:

  - Fixed a potential cross site scripting vulnerability in the member module.

- General Changes:

  - Added support for IPv6 IP addresses
  - Rich Text Editor fields are now available for use with the Metaweblog API
    module.
  - Made Communicate file uploads more resistant to malformed file names.

- Bug Fixes:

  - Fixed a bug (#17348) preventing field formatting types provided by some
    plugins from working with the MetaWeblog API module, and especially
    MarsEdit.
  - Fixed a bug (#17499) where changing a username or password from the
    front-end did not behave as expected in some cases.
  - Fixed a bug (#16995) where Pages module URIs were case sensitive.
  - Fixed bugs (#17026, #17378) where the Pages module and page_url tags
    still displayed trailing slashes in some cases.
  - Fixed a bug (#17424) where a "too many URL segments" error would not
    return a 404 status code.
  - Fixed a bug (#17597) where the email encode tag did not output valid HTML5.
  - Fixed a bug (#17459) where safecracker could be tricked into posting a
    new entry instead of editing the specified entry.
  - Fixed bugs (#16802, #17442) where package paths were not added
    consistently.
  - Fixed a bug (#17911) where comments did not expand correctly in the
    comment control panel.
  - Fixed a bug (#17857) where http authentication did not correctly block
    some member groups.
  - Fixed a bug (#17140) where set_image_memory always assumed MB.
  - Fixed a bug (#17937) where the admin overview page did not list a
    description for the RTE settings.
  - Fixed a bug (#17812) where conditional comparisons with strings containing
    certain punctuation and special characters did not evaluate correctly.
  - Fixed a bug (#17901) where pasting into the rte sometimes did not result
    in the expected paragraph markup.
  - Fixed a bug (#16548) where publish page permissions were not being observed.
  - Fixed a bug (#16593) where advanced search ignored the status parameter.
  - Fixed a bug (#16619) where saving the SafeCracker extension settings would
    clear out settings for other MSM sites.
  - Fixed a bug (#16708) where there was an unnecessary query when building the
    category list for new entries.
  - Fixed a bug (#16610) where importing members would not correctly set the
    time format.
  - Fixed a bug (#16798) where safecracker file was not obeying the required
    rule.
  - Fixed a bug (#17892) where the password lockout notice may show number
    of minutes as a hexadecimal number.
  - Fixed a bug (#17875) where the word 'or' was not called from a language
    file on the RTE toolset editor dialog.
  - Fixed a bug (#17876) where viewing the Search Log without the Search
    Module installed would show a PHP error.
  - Fixed a bug (#17882) where sort and search on the members table would
    not work if the initial sort was set to a column not in the table.
  - Fixed a bug (#16989) where SafeCracker categories were not filtered by
    its group_id parameter.
  - Fixed a bug (#17877) where saving a category image would save the file
    field data incorrectly in the database.
  - Fixed a bug (#17781) where deleting a member without the Comment
    module installed would show PHP errors.
  - Fixed a bug where when deleting a member, the option to delete all the
    member's entries shows up even if the member has no entries.
  - Fixed a bug (#17906) where the code view of the Rich Text Editor on the
    front-end may appear too narrow.
  - Fixed a bug (#17905) where some language was not being referenced from
    language files.
  - Fixed bugs (#17902, #17912) where some subclass method signatures
    differed from their superclass, causing warnings in PHP 5.4.
  - Fixed a bug where submitting a publish form while the category editor
    was visible would result in loss of category selections for that entry.
  - Fixed a bug (#17914) where textarea rows setting could not be updated.
  - Fixed a bug (#17918) where the ``edit_date`` of an entry wouldn't update
    after editing an entry.
  - Fixed a bug (#17898) where trying to add a link to the start of a bullet
    list item in the RTE sometimes would claim text wasn't selected.
  - Fixed a bug (#17817) where the template manager table may move to the
    bottom of the page at high browser window resolutions.
  - Fixed a bug (#17831) where image manipulations may resize image to one
    pixel larger than desired dimension.
  - Fixed a bug (#17907) where the Rich Text Editor would pass publish form
    validation even if field was set to be required.
  - Fixed a bug (#17931) where saving an empty RTE field inserts empty
    paragraph tags into the database, making template conditionals not work.
  - Fixed a bug (#17934) where a textarea with formatting buttons showing
    wasn't able to be resized when editing the publish layout.
  - Fixed a bug (#17939) where using the backspace parameter on a categories
    variable pair in the File Entries tag would not work.
  - Fixed a bug (#17940) where saving an entry with a hidden Rich Text
    Field would result in loss of new data in that field.
  - Fixed a bug (#17942) where the Help link on third-party module pages was
    not correct.
  - Fixed a bug (#17929) where sending an email to a member group or mailing
    list with an attachment may fail.
  - Fixed a bug (#17944) where editing an entry belonging to a non-existent
    author would show PHP errors.
  - Fixed a bug where the hostname used to access the control panel may
    affect which tools are loaded in the Rich Text Editor.
  - Fixed a documentation error (#17633) where the example path to the server
    wizard was not correct.

- Developers:

  - Variable pairs passed to ``Template::parse_variables()`` or
    ``Template::parse_variables_row()`` can make use of a backspace and
    limit parameter.


Version 2.5.0
-------------

Release Date: May 7, 2012

- Important:

  - Improved XSS filtering of input data to prevent an XSS vulnerability.
  - Improved redirect function to prevent a CRLF injection attack.

- General Changes:

  - :doc:`Rich Text Editor </modules/rte/control_panel/index>`

    - Added new module and fieldtype for the new rich text editor.
    - Added user preferences for rich text editor under my preferences.

  - Added a Cookie Consent Module, available in the ExpressionEngine Add-on
    Library.
  - Dropdown for "Preview Layout" in publish layouts sidebar updates to the
    member group being viewed.
  - When editing publish layouts, the checkbox for the member group being
    viewed defaults to being checked.
  - Removed IP requirement from sessions check to prevent logout issues for
    revolving IP addresses.
  - Altered language keys on the New Template page to be consistent with the
    New Template Group page in the control panel.
  - **Reactor:** Changed "edit member group" screen to show prefs for the MSM
    site you are presently using.
  - **Reactor:** Added option to member delete confirmation page to delete all
    entries associated with the member being deleted

- Bug Fixes:

  - Fixed a bug (#16519) where adding a pre-defined HTML formatting button
    could result in the button being added to the wrong member account.
  - Fixed a bug where the Browse Files button had no effect after uploading
    via the File Manager page.
  - Fixed a bug where the currently selected upload folder on the File
    Manager page was not used as the default in the Upload File dialog.
  - Fixed bugs (#16802, #17442) where package paths were not added consistently.
  - Fixed a bug (#17391) where the localization link did not show in the My
    Account menu in the control panel unless the member also had permission to
    administer members.
  - Fixed a bug (#17443) where the recipient parameter in the Tell-a-Friend tag
    was ignored.
  - Fixed a bug (#17523) where a PHP error could occur when a member group had
    permission to create new channels but no channels had been assigned to that
    group.
  - Fixed a bug (#17523) where a permission error could occur when a group had
    permission to create new channels but did not have template access.
  - Fixed a bug (#17644) where the codeblock division added to code tags could
    be converted to entities when allowed HTML formatting was set to none.
  - Fixed a bug (#17647) where deleting a status group did not remove a
    reference to that group id in the exp_channels table.
  - Fixed a bug where the per page setting in Content Edit did not stick once
    navigating away from the page.
  - Fixed a bug (#17365) where setting your Default HTML formatting to Convert
    HTML and turning Automatically turn URLS into links on would cause the auto
    linking not to work.
  - Fixed a bug (#17440) where Safecracker was attempting to load the file
    browser even though it can't use it.
  - Fixed a bug (#17690) where SafeCracker could not use the valid_ip form
    validation rule.
  - Fixed a bug (#17577) where filtered comments in the control panel may
    appear out of order.
  - Fixed a bug in the version helper that would display PHP errors if
    unexpected data was returned from the server.
  - Fixed a bug (#17380) where editing entries while the comment module is
    disabled would show PHP errors.
  - Fixed a bug (#17375) where loading the file manager with no upload
    destinations set would show a PHP error.
  - Fixed a bug (#17381) where upload preferences in config.php would be
    overwritten when preferences were saved via the Control Panel.
  - Fixed a bug (#17390) where backspace parameter would remove pagination
    markup.
  - Fixed a bug (#17387) where the Simple Commerce module performed an
    unnecessary query.
  - Fixed a bug (#17392) where file field tags referencing files in other
    sites' upload destinations may not render.
  - Fixed a bug (#17402) where template restriction redirects would redirect
    users to the wrong template.
  - Fixed a bug (#17400) where having third_party_path defined while running
    the installer will show a PHP error.
  - Fixed a bug (#17406) where the category archives tag may show PHP
    errors.
  - Fixed a bug (#17417) where the edit entries screen would show a PHP
    error when converting high ASCII text to entities.
  - Fixed a bug (#17415) where having a category URL trigger word in a URL
    would show a PHP error if no category URL title was present.
  - Fixed a bug (#17414) where searching the template manager for "0" would
    show PHP errors.
  - Fixed a bug (#17435) where search parameter in Channel module would not
    work if keywords used a URI segment that contained special characters.
  - Fixed a bug (#17420) where some error messages did not return an the
    correct status code, thus improperly handled by some reverse proxies.
  - Fixed a bug (#17453) where listing entries in an MSM site by category
    URL title would fail if another site used the same category URL title.
  - Fixed bugs (#17449, #17497) where updating template preferences from the
    template edit screen would update the template type to "undefined".
  - Fixed a bug (#17450) where where a file field without a file would cause
    Warnings.
  - Fixed a bug (#17421) where the file field was running excessive queries
    in the channel entries loop.
  - Fixed a bug (#17500) where changing an entry's author would not update
    the last_entry_date field for the authors.
  - Fixed a bug (#17510) where the file entires tag wouldn't honor the
    directory_id parameter if the directory ID belonged to another site.
  - Fixed a bug (#17534) where the "Return to Filtered Entries" link was
    missing after saving an entry selected from a filtered edit screen.
  - Fixed a bug (#17600) where saving a channel field with an field order
    value of zero would show a PHP error.
  - Fixed a bug (#17601) where the ``{total_comments}`` tag would only show
    the correct number if pagination was enabled.
  - Fixed a bug (#17607) where deleting a member from MySQL servers in
    ``ONLY_FULL_GROUP_BY`` mode would show a query error.
  - Fixed a bug (#17564) where the file manager modal may not fit in smaller
    browser sizes.
  - Fixed a bug (#17588) where category image tags would render as blank on
    the front end.
  - Fixed a bug (#17462) where users in GMT-6 or earlier timezones would
    have their autosaved entries deleted.
  - Fixed a bug (#17454) where users could not switch sites in the control
    panel if cookie domains were set for each site.
  - Fixed a bug (#17609) where publish layouts may not save correctly and
    show a PHP error on the publish page.
  - Fixed a bug (#17411) where the table header on the template manager
    screen may appear improperly styled.
  - Fixed a bug (#17736) where member list initial order by and sort
    preferences were not honored on member list screen.
  - Fixed a bug (#17732) where thumbnail preview of file fields would fail
    if a protocol-agnostic URL was entered for the upload destination.
  - Fixed a bug (#17719) where control panel menus were too low in the
    document z-order, not giving enough flexibility to CP add-ons.
  - Fixed a bug (#17715) where year, month and day fields in channel_titles
    table may be incorrect depending on a number of timezone factors.
  - Fixed a bug (#16948) where cropped images may sometimes be framed by
    black bars.
  - Fixed a bug (#17734) where deleting a field from a publish layout may
    result in PHP errors on the publish screen.
  - Fixed a bug (#17695) where the version helper cached version information
    in a hard-coded directory instead of using the cache_path config item.
  - Fixed a bug (#17627) where submitting a publish form that fails
    validation may delete data in that entry's file fields.
  - Fixed a bug (#16583) where auto-linker behavior differed from 1.x,
    causing links without a protocol not to be converted.
  - Fixed a bug where the channel calendar day_path did not always match the
    calendar day shown due to differences in localization.
  - Fixed a bug where the Updated Sites module was rejecting valid pings.
  - **Reactor:** Fixed a bug where 3rd party module tab fields did not have their
    data set after an autosave.

- Developers:

  - **Reactor:** Added $member_ids, an array of members deleted, to the
    cp_members_member_delete_end hook.
  - **Reactor:** Re-exposed channel->pager_sql in the channel module.
  - **Reactor:** Added parameter to ``Api_channel_fields::field_edit_vars`` to
    specify which field types to present as options.
  - **Reactor:** Altered the Template class to allow plugins/modules to use
    __call() magic method.
  - Added ``myaccount_nav_setup`` hook to modify My Account navigation. See
    :doc:`documentation </development/extension_hooks//cp/myaccount/index>` for
    more information.
  - Added ``email_send`` hook to modify emails or take over email sending
    completely.
  - Added ``member_member_register_errors`` hook to allow additional error
    checking to the member registration form.
  - Added ``set_cookie_end`` hook which allows full control of setting cookies
    after cookie parameters have been normalized according to the cookie
    configuration settings.
  - Added ``pre_loop()`` function to fieldtypes for preprocessing of
    channel data before the entries loop runs.


Version 2.4.0
-------------

Release Date: Jan 24, 2012

- Important:

  - Fixed a security issue that could have caused all mailing list subscribers
    to be unsubscribed.

- General Changes:

  - Removed the ability to enable SQL Query Caching via the Control Panel. It
    is now only accessible via the 'enable_db_caching' hidden configuration
    variable. Note that this form of caching is **not** recommended in most
    environments.
  - Added the ability to apply image watermarks without having to also
    resize the image.
  - Added the ability to use image manipulations in custom file fields, using both
    a single tag and a tag pair.
  - Changed the member module to display a proper 404 page when an action
    could not be found.
  - Altered the handling of the control panel cookie domain for MSM sites.
  - Optimized the encode_ee_tags() method in the Functions library.
  - Disabled the ability to type over the field shortname on the 'Admin- Channel
    Fields' main page when selecting a field short name.
  - Abstracted file browser and file field into the File_field library.
  - Changed the category image field to use the new File_field library and image
    browser.
  - Abstracted channel pagination into the EE Pagination library.
  - Implemented new EE Pagination library with comment pagination.
  - Implemented new EE Pagination library with search pagination.
  - Added file metadata to the file upload modal.
  - Removed accordions from image edit in the file upload modal.
  - Added check to make sure that version constant matches version in config file.
  - File upload paths can now be overridden via configuration variables.
  - Added ``active`` conditional variable to category listings for
    determining the active category.
  - Added link to publish another entry after publishing an entry.
  - Added "credit" and "location" metadata fields to files.
  - Added url_title parameter to Channel module's next_entry and prev_entry.
  - Channel Categories and Category Archive tags now support multiple
    channels in the channel parameter.
  - Files in file browser modal can now be sorted and filtered by keywords.
  - **Reactor:** Added the list of Channels to dropdown under Edit.
  - **Reactor:** Added third_party_path config item.
  - **Reactor:** Changed default text formatting from XHTML to none.
  - Fixed an issue where remember me functionality was not working correctly.

- Bug Fixes:

  - Fixed a bug (#16814) where the Datepicker would not allow AM to be
    manually typed into the field.
  - Fixed a bug where more than one Member Group could have the same name.
  - Fixed a bug (#16277) where extra line breaks were not handled in some
    Moblog tags.
  - Fixed a bug (#16401) where setting a Text Input's maximum length to zero
    or empty could result in invalid markup.
  - Fixed a bug (#16402) where SafeCracker would not use a Channel's 'Allow
    Comments' preference if the allow_comments= parameter was not specified.
  - Fixed a bug (#16436) where the installer could incorrectly determine the
    theme path if the base path contained the name of the system folder.
  - Fixed a bug (#16431) where a Fieldtype's settings would default to NULL
    instead of an empty array when not specified.
  - Fixed a bug (#16434) where SafeCracker's CAPTCHA could fail to appear in
    some cases.
  - Fixed a bug (#16488) where IP Search results could fail to display members
    with a matching IP.
  - Fixed a bug (#16578) where editing an image could result in a PHP error in
    some rare cases.
  - Fixed a bug (#16846) where some standard member groups could be assigned
    privileges that did not make sense.
  - Fixed a bug (#16563) where comment edit dates were not correctly updated.
  - Fixed a bug (#16799) where the list of Moblogs in the Moblog Module did
    not paginate if there were more than 100 Moblogs.
  - Fixed a bug (#17057) where the Channel Field Management table did not
    span correctly if there were no Channel Fields.
  - Fixed a bug (#17051) where some characters were not allowed to be used
    in the database password when installing ExpressionEngine.
  - Fixed a bug (#17106) in the installation wizard where some inputs that
    could not logically allow spaces were not trimmed.
  - Fixed a bug where date fields containing a date prior to 1970 were not
    displayed in the preview shown after creating or editing an entry.
  - Fixed a bug (#17231) where Moscow Time was still represented as UTC+03:00
    instead of UTC+04:00.
  - Fixed a bug (#17142) by improving the grammar of messages in some areas.
  - Fixed a bug (#17157) where a member could not delete their own account.
  - Removed a stray Thumbs.db file from the download (#16748).
  - Fixed an issue with thumbnail creation where the image was not resized if
    one of the sides was smaller than the thumbnail size.
  - Fixed a bug (#16747) where the Translation Utility showed a PHP error.
  - Fixed a bug (#16644) where the blacklist module returned errors as
    language keys.
  - Fixed a bug (#16752) where [email= tag output resulted in a javascript
    error.
  - Fixed a bug (#16356) where http authentication did not always work on
    IIS servers.
  - Fixed a bug (#16562) where "view all posts by this member" link resulted
    in a permission error when using secure forms.
  - Fixed a bug (#16504) where multiple versions of the same email on a
    page were not decoded correctly.
  - Fixed a bug (#16759) where categories with lots of channel fields were
    difficult to edit from the publish page.
  - Fixed a bug (#16801) where members were always logged in as anonymous.
  - Fixed a bug (#16865) where upper case BBCode was not being parsed.
  - Fixed a bug (#16738) in the File Module where a PHP error could occur
    when there were no results.
  - Fixed a bug (#16754) in the SafeCracker Module where relationship data
    was not maintained on edit if the field was not included in the forum.
  - Fixed a PHP error in the ud_009 update file.
  - Fixed a PHP error in the ud_100 update file.
  - Fixed a bug (#17134) where the file upload could report that a file already
    exists when it did not.
  - Fixed a bug where the Moblog Module check reported rejected entries as
    successful and failed to count saved entries.
  - Fixed a bug (#17141) where a MySQL error could occur due to SafeCracker
    adding a stray where clause to random queries.
  - Fixed a bug (#17156) where using loading entry version and then saving the
    entry could result in a duplicate entry being created.
  - Fixed a bug (#17160) where uploaded files and generated thumbnails had the
    wrong permissions applied.
  - Fixed a bug (#17006) where performing a search, then going back in your
    browser and searching again would cause an invalid action error.
  - Fixed a bug (#16034) where SafeCracker would insert an empty option into
    dropdown menus when using the {options} tag pair.
  - Fixed a bug (#17213) where the automatically generated field short name could
    contain periods
  - Fixed a bug (#16333) where synchronized files in file manager would show
    date synchronized instead of date created.
  - Fixed a bug (#16549) where uploading a file over the maximum upload size
    would clear out all POST headers and show an incorrect error message.
  - Fixed a bug (#16415) where long filenames in file manager would expand
    table cells and move all other cells and controls off screen.
  - Fixed a bug (#15771) where editing a transparent PNG in the file manager
    wouldn't process the transparency properly.
  - Fixed a bug (#16596) where existing image thumbnails weren't updated to
    reflect external modifications after upload folder synchronization.
  - Fixed a bug (#16429) where publish layouts would not save if the tabs
    contained certain special characters, as is the case in some languages.
  - Fixed a bug (#16348, #16347) where query that builds author list could
    be simplified.
  - Fixed a bug (#16479) where members with no access to member groups
    weren't notified they couldn't add members without correct permissions.
  - Fixed a bug (#16823) where some image names in the theme CSS weren't in
    the same case as the file name.
  - Fixed a bug (#16781) where some forms in My Account would not give
    confirmation of update after submission.
  - Fixed a bug (#16707) where uninstalling a fieldtype would not delete all
    its fields from publish layouts if the layout had more than one of it.
  - Fixed a bug (#16674) where using Recount Statistics would provide
    incorrect numbers for private messages and total forum posts.
  - Fixed a bug (#16841) where editing the Super Admin group would unlock
    it.
  - Fixed a bug (#16594) where the incorrect label was being shown under
    "Template Editing Privileges" for editable template groups.
  - Fixed a bug (#16669) where template group name form validation would
    return contradictory rules for naming template groups.
  - Fixed a bug (#16386) where sorting by channel or screen name on edit
    listing would not work.
  - Fixed a bug (#16385) where selected entry categories would be unselected
    if they were edited from the publish screen.
  - Fixed a bug (#16936) where SQL Manager would return inconsistent results
    when using "SELECT" vs. "select".
  - Fixed a bug (#16960) where Member module's ignore_list would output an
    SQL error.
  - Fixed a bug (#16947) where contact form with user_recipients set to
    "yes" and nothing specified in recipients would return an error.
  - Fixed a bug (#16919) where image manipulation names could be named
    "thumbs" or contain forward slashes.
  - Fixed a bug (#16971) where a SafeCracker File field would show a PHP
    error if it was set to show existing files and there were none.
  - Fixed a bug (#16976) where file upload success window wasn't using
    language keys for labels.
  - Fixed a bug (#16260) where tag pairs inside of related_entries would
    throw a PHP warning.
  - Fixed a bug (#15533) where Tell-A-Friend form wouldn't work on pages
    accessed through Pages module.
  - Fixed a bug (#16201) where the default highlight color for new statuses
    was white, making it difficult to see.
  - Fixed a bug (#17040) where IP to Nation module would throw PHP errors if
    an invalid file path was provided on import form.
  - Fixed a bug (#17020) where padding and offset settings for watermarks
    were not respected.
  - Fixed a bug (#16984) where cp_themes directory did not contain
    index.html files to block directory access.
  - Fixed a bug (#17047) where error message fonts may look inconsistent in
    different scenarios.
  - Fixed a bug (#17128) where sorting by certain fields in
    ``reverse_related_entries`` may produce incorrect results.
  - Fixed a bug (#17226) where error about a module not being installed did
    not include module name.
  - Fixed a bug (#17205) where "Most Recent Entry" link in control panel did
    not respect member groups' assigned channels.
  - Fixed a bug (#17127) where a member group with no assigned channels may
    experience PHP errors in the control panel.
  - Fixed a bug (#17007) where template groups created by non-Super Admin
    member groups could not be accessed by its creator.
  - Fixed a bug (#16983) where uncategorized_entries parameter in Channel
    Entries tag had no effect.
  - **Reactor:** Fixed a bug with autosave where the save() method would be called for third
    party add-ons on autosave.
  - Fixed a bug (#16973) where the "Show Existing Files" link on a
    SafeCracker file field would claim the upload directory didn't exist.
  - Fixed a bug (#16237) where File module pagination was not working
    correctly.
  - Fixed a documentation error (#16932) where a Plugin code sample was
    incorrect.
  - Fixed a documentation error (#16335) where an API usage example was
    incorrect.
  - Fixed a documentation error (#16965) where the old Batch Upload Location
    preference was still referenced.
  - Fixed a documentation error (#17151) where several items in General
    Configuration were not documented.
  - Fixed a documentation error (#17153) where a preference was incorrectly
    named in Output and Debugging Preferences.
  - Fixed a documentation error (#17180) where there was some outdated
    information for the Publish page.
  - Fixed a documentation error (#16547) where there was some outdated
    information for the Comment Module page.
  - Fixed a documentation error (#16547) where there was some outdated
    information for the File Manager page.

- Developers:

  - Added URL_THIRD_THEMES and PATH_THIRD_THEMES constants for add-on developers.
  - Added Developer Log to log notices that need Super Admin attention.
  - Deprecated ``Member_model::get_authors_simple()``, use
    ``Member_model::get_authors()`` instead.
  - Deprecated ``File_upload_preferences_model::get_upload_preferences()``,
    use ``File_upload_preferences_model::get_file_upload_preferences()``
    instead.
  - Deprecated ``Tools_model::get_upload_preferences()``, use
    ``File_upload_preferences_model::get_file_upload_preferences()`` instead.
  - Added ``template_types`` Extension Hook to add custom template types.
  - Added ``member_delete`` Extension Hook to execute code before member
    deletion and to modify member IDs to delete.
  - **Reactor:** Added ``core_template_hook`` that lets you change the template to be loaded
    based on the uri_string.
  - **Reactor:** Added ``template_post_parse`` hook that lets you modify templates after parsing.
  - **Reactor:** Added ``template_fetch_template`` hook that lets you see what template is being loaded.
  - **Reactor:** Added option to suppress errors thrown by loading language files.
  - **Reactor:** Added all plugins to default text formatting list when creating a new field.
  - **Reactor:** Abstracted field edit/create logic to the Channel Fields API.


Version 2.3.1
-------------

Release Date: October 17, 2011

- Important:

  - Fixed a potential cross site scripting vulnerability.
  - Modified a URL character check that was affecting third party addons to be less strict.

- Bug Fixes:

  - Fixed several minor documentation errors including #16770, #16772, #16783,
    #16771, #16761 and #16318.

Version 2.3.0
-------------

Release Date: October 11, 2011

- Important:

  - Fixed a potential cross site scripting vulnerability.
  - Fixed a potential cross site request forgery vulnerability.
  - Fixed a bug where using the MSM multi-site login feature would
    sometimes latch onto the wrong session.

- General Changes:

  - Removed accordions from Member Groups, Member Preferences and
    Channel Preferences.
  - Forum search now uses board default pagination per page settings
    instead of using a hardcoded 20 items per page.
  - Updated pagination variable pair that allows much more control over
    pagination within channel entries and comments.
  - Member search tokens that allow you to specify different information
    to search for (e.g. email:ellislab.com username:test screen_name:'John Doe')
  - Added quick way to copy and paste custom field tags from the
    Custom Field Group's page
  - Added a hidden config variable ``remove_unparsed_vars`` which, when
    set to 'n' in conjunction with debug = 0, will not remove unparsed
    ExpressionEngine Variables.
  - Modified legacy debug 0 setting to only remove unparsed template
    variables when the 'remove_unparsed_vars' hidden config is set to
    'y', fixing some common issues with JavaScript and JSON getting
    "eaten" on sites using that legacy debug setting.
  - Fixed a bug in the Metaweblog API module that was causing
    authentication errors.
  - Fixed a bug in parsing image tag attributes that could lead to a PHP
    notice error when only "Safe HTML" is allowed.
  - Fixed a bug in the template parser that was preventing the minified
    jQuery from being used in an ExpressionEngine template
  - Fixed a bug where a PHP notice error would occur when debug is enabled
    and an invalid ExpressionEngine tag occurs on the page that only has
    one tag segment.
  - Fixed a cosmetic IE JavaScript error (#15196) on the publish page.
  - Fixed a display error in the file upload modal of the Corporate theme.
  - Fixed a bug where reassignment of entries when deleting a member was
    limited to superadmins.
  - Fixed a bug (#16083) where editing or adding categories from the
    Publish page did not work properly in IE7.
  - Fixed a bug (#15530) where a registering member could supply a value
    that was not an option in a Select List member field.
  - Fixed a bug (#16214) where new categories would be sorted
    alphabetically when the group was using a custom sort order instead.
  - Fixed a bug (#16232) where the multi-entry editor did not update
    entry edit dates.
  - Fixed a bug (#16246) where the Date fieldtype could not show an
    error if an invalid date was entered.
  - Fixed a bug (#16239) where some buttons in the Control Panel had
    minor display issues.
  - Fixed a bug (#16038) where the File Manager had display issues when
    the Corporate theme was used.
  - Fixed a bug (#16265) where the Email Contact Form could fail to
    send in some cases if the user_recipients parameter was not specified.
  - Fixed a bug (#16422) where some colors appeared incorrectly in
    the Datepicker.
  - Fixed a bug (#16288) where ``http://`` could be undesirably prepended
    to some General Configuration URLs.
  - Fixed a bug (#16397) where the Add Category dialog could appear
    incorrectly in some cases.
  - Fixed a bug (#16639) where non-Super Admins with group administration
    privileges could change a Super Admin's member group.
  - Fixed a bug (#16626) where non-Super Admins with profile editing
    privileges could edit a Super Admin's profile.
  - Fixed a documentation error (#16213) where some parameters available
    to exp:member:login_form were not listed.
  - Fixed a documentation error (#16564) where the tag for generating
    comment editing Javascript was incorrectly listed.
  - Fixed a typo in the Control Panel (#16403)
  - Fixed a breadcrumb language key issue in the Control Panel (#16229)
  - Fixed a bug where the private message inbox only displayed 5
    messages per page.
  - Fixed various jQuery UI display issues in the corporate theme.
  - Fixed a bug where Datepicker hours before 10 were not consistently
    prefixed with a zero.
  - Fixed a bug where sorting channel entries on entry_date instead
    of date ignored additional sort fields.
  - Fixed a bug (#16149) where File Manager permissions would prevent
    someone from uploading files on the Publish page.
  - Fixed a bug (#16157) where Template Access preferences would show
    up as being unaccessible in the File manager.
  - Fixed a bug (#16183) where Wikis would show an error if all tracking
    was disabled. Thanks to Erik Reagan for the fix.
  - Fixed a bug (#16193) where uninstalling the Moblog would cause an
    error due to a misnamed variable.
  - Fixed a bug (#16202) where the backspace parameter in the
    category_archive tag was removing characters from the whole loop,
    not each iteration.
  - Fixed a bug (#16204) where setting permissions on the closed status
    would not be obeyed.
  - Fixed a bug (#16211) where file size was not being updated after
    any image manipulation.
  - Fixed a bug (#16179) where images were being upsized instead of
    restricting the width.
  - Fixed a bug (#16114) where if $config['debug'] was set to 0, it
    would not show up as an option in Output and Debugging Preferences.
  - Fixed a bug (#15158) where the search excerpt field could only
    be selected from searchable fields.
  - Fixed a bug (#15510) where creating a channel via the API could
    cause an error if there were no existing channels.
  - Fixed a bug where syncing a directory with files that have
    spaces in their names would break links to existing File fields
    and textarea fields.
  - Fixed a bug (#16264) where pending members were allowed to log in.
  - Fixed a bug where groups in an MSM site that didn't have CP access
    to the main site couldn't login to the CP of any other sites.
  - Fixed a bug (#16200) where forum search was returning inconsistent
    and incorrect results.
  - Fixed a bug (#16322) where the Upload File button wasn't working
    in the File Manager.
  - Fixed a bug (#16380) where the arrow from an accordion was
    overlapping the text in the accordion header.
  - Fixed a bug (#15525) where the date picker on a SafeCracker date
    field would always use US date formatting even when European date
    formatting was chosen.
  - Fixed a bug where the channel names in the Agile Records themes were
    incorrect for both the comments and comment_preview templates within
    the news template group.
  - Fixed a bug (#16414) where the RSS feed for a forum would only
    output the first forum's posts.
  - Fixed a bug (#16406) where publish layouts were breaking if you
    disabled comments after creating a layout. Thanks to John D. Wells
    for supplying the fix.
  - Fixed a bug (#16363) where items on the calendar were being placed
    on the wrong day.
  - Fixed a bug (#16388) where the file manager modal required scrolling
    up to view in IE7 (updated the jQuery UI theme).
  - Fixed a bug (#16525) where password reset did not honor the password
    length requirements.
  - Fixed a bug (#16539) where auto generated passwords did not honor
    the secure password configuration setting.
  - Fixed a bug (#16116) where image files could be upsized if either,
    but not both, max height or max width was specified for the directory.
  - Fixed a bug (#16159) where you could not edit channel entries when
    the forum tab's forum topic id had been specified a 0.
  - Fixed a bug (#16389) where a MySQL error occurred when displaying
    comments with dynamic set to off and pagination on.
  - Fixed a bug (#16349) where a PHP error could occur when changing
    comment status and the ``update_comment_additional`` hook was being used.
  - Fixed a bug (#16620) where multi-site login did not respect the
    return parameter.
  - Fixed a bug (#16611) where a PHP error could occur when recounting
    member statistics if private messages existed.
  - Fixed a bug where a PHP error could occur when sending private
    messages with attachments.
  - Fixed a bug (#16515) in the comments control panel where the second
    page of comments for a single entry was not limited to that entry.
  - Fixed a bug (#16420) where the reset_password was not properly
    cleared from the database once successfully changed in the forgotten
    password routine.
  - Fixed a bug (#16592) where the file selector button on the
    publish page did not work when no image button was defined in the
    users' html buttons.
  - Fixed a bug (#16267) where the publish page spellcheck iframe did
    not display properly due to the failure to load a stylesheet.
  - Fixed a bug (#16650) where the Moblog did not include files with
    upper case extensions.
  - Fixed a bug (#16107) where user notepad content did not properly
    display.
  - Fixed a bug (#16115) where the "Upload File" button on the File
    Manager home page was unable to be translated.
  - Fixed a bug (#16144) where an incorrect error message appeared on
    unsuccessful authentication on the front end.
  - Fixed a bug (#16102) where the file manager category filtering did
    not function properly.
  - Fixed a bug (#16163) where the Comment Module Control Panel page was
    unable to limit to specific entry ids.
  - Fixed a bug (#16143) where a PHP error occurred on the Edit Member
    Group page when MSM was active.
  - Fixed a bug (#16180) where the CP Menu Help Links in the File
    Manager pointed to incorrect URLs.
  - Fixed a bug (#15909) where usernames did not have leading or
    trailing whitespace trimmed.
  - Fixed a bug (#16112) where a MySQL error could occur when creating
    a channel field and not including the ordering field.
  - Fixed a bug (#16228) where a PHP error occurred in the member
    importer.

- Developers:

  - Deprecated ``Channel_model::get_channel_categories()``.
  - Deprecated ``Localize::set_gmt()``.
  - Modified routing behavior to no longer require query strings to be
    enabled on the frontend. Please make sure you do not use ``$_GET``
    variables on the frontend (exceptions: ACT, URL, css).
  - Fixed a bug (#16350) where the *update_comment_additional* hook
    in ``change_comment_status()`` was being passed an object instead of
    the documented array.
  - Fixed a bug (#16366) where the ``can_access_module()`` method in the
    member model did not automatically return TRUE for superadmins.
  - Fixed a bug (#16383) where the ``get_channel_categories`` method in the
    channel_model was not working properly due to an invalid where clause.
  - Fixed a bug in ``Auth::verify()`` where it was checking for CP access
    permissions on front end requests.


Version 2.2.2
-------------

Release Date: August 1, 2011

ExpressionEngine version 2.2.2 is a maintenance update recommended only for
membership based sites who require administrator approval for new member
accounts.  Version 2.2.2 fixes a critical bug on these sites where Pending
members could log in and have similar permissions to members in the default
Member group.

- Removed accordions from Member Groups, Member Preferences and Channel
  Preferences.
- Temporarily disabled the Profiler in the installer / updater while
  investigating an issue in certain environments where the Profiler may
  throw an exception and halt the installer.
- Fixed a bug (#16143) where a PHP error occurred on the Edit Member Group
  page when MSM was active.
- Fixed a bug (#16144) where an incorrect error message appeared on
  unsuccessful authentication on the front end.
- Fixed a bug (#16264) where Pending members were allowed to log in.
- Fixed a bug where groups in an MSM site that didn't have CP access to
  the main site couldn't login to the CP of any other sites.
- Fixed a bug where syncing a directory with files that have spaces in
  their names would break links to existing File fields and textarea fields.


Version 2.2.1
-------------

Release Date: June 30, 2011

-  Turned off Template Debugging by default in new installations.
-  Added short name auto creation behavior to channel and custom field
   pages.
-  Moved the build date next to version number in the footer.
-  Fixed a bug where new members were not logged in automatically if
   confirmation was disabled.
-  Removed Survey from the updater, fixing a PHP bug (#15770).
-  Fixed a bug (#16062) where frontend member registrations did not
   assign a group id to the new member.
-  Fixed a bug (#16068) where the channel dropdown was truncated if it
   did not fit the viewport.
-  Fixed a bug (#16095) where trying to change your email settings
   resulted in an invalid password error.
-  Fixed a bug (#16066) where super admins could not be demoted by
   another super admin.
-  Fixed a bug (#15534) where navigating the template manager with ctrl
   + arrow keys resulted in javascript errors.
-  Fixed a bug (#16047) where {elapsed\_time} and {memory\_usage} were
   being removed with debug set to 0.
-  Fixed a bug (#16094) where the query result table did not scroll
   horizontally.
-  Fixed an incomplete bug (#15369) where the autosave interval config
   was not cast to an integer when set to 0.
-  Fixed a bug (#15986) where watermarks still had a dropshadow with
   'Enable Dropshadow' set to 'no'.
-  Fixed a bug where the 'Dropshadow Distance' setting in Watermark
   Preferences didn't stick.
-  Fixed a bug (#16086) where the password lockout persisted past the
   specified lockout time.
-  Fixed a bug (#16076) where the file uploader did not properly resize
   when the max height or width was exceeded.
-  Fixed a bug (#16043) where a database error would occur in the lost
   password form.
-  Fixed a bug (#15991) where a PHP error would occur when deleting a
   file watermark preference.
-  Fixed a bug where a PHP error would occur in the email module.
-  Fixed a bug (#16044) where a MySQL error would occur when creating an
   Integer Field when MySQL is running in Strict Mode.
-  Fixed a bug (#16057) where changing passwords in the member profile
   themes would fail for non-superadmin users.
-  Fixed a bug (#16040) where the file manager modal was limited to the
   first 100 files in a directory.
-  Fixed a bug (#16056) where lang keys were not being used for the file
   browser.
-  Fixed a bug (#16074) where global variables would be parsed in an
   order that you couldn't use them inside path variables.
-  Fixed a bug (#16046) where new upload directories would not have
   their path and URL pre-populated.
-  Fixed a bug (#16098) where field shortnames could be duplicated
   within the same field group when editing.

Version 2.2.0
-------------

Release Date: June 22, 2011

-  General Changes:

   -  Added a :doc:`File Module </modules/file/index>` to display file
      information on the frontend.
   -  Added ability to edit file metadata from the File Manager.
   -  Added several file types to the mimetype listing. **Please update
      system/expressionengine/config/mimes.php.**
   -  Altered Sessions handling and removed the uniqueid and userhash
      cookies.
   -  Removed the Debug: 0 option from Output and Debugging Preferences.
   -  Turned on Show SQL Queries and Template Debugging by default in a
      new installation.
   -  Altered Control Panel sidebar to be hidden on new installations by
      default.
   -  Added memory usage to each template log item so cumulative effect
      of memory used can be seen.
   -  Numerous optimizations in control panel and front-end queries.
   -  Altered CSS templates to send one week expires headers when the
      "Send HTTP Headers" option is set to yes.
   -  Added additional checking to help prevent a fatal error in the
      event a third\_party plugin is placed in the wrong directory.
   -  Added configuration overrides (user\_session\_ttl and
      cp\_session\_ttl) to allow site developers the ability to change
      the default user and control panel session TTL.
   -  File synchronization now ensures all added files conform to our
      filename standards (spaces replaced by underscores, disallowed
      characters removed).
   -  Added the ability to limit a file field to a single directory.
   -  Altered Design permissions so that members with permission to edit
      templates in a given template group may also add templates to that
      group without needing administrative privileges.
   -  Updated the publish page fullscreen editor to remember cursor
      locations.
   -  Updated the login routine to salt and rehash all passwords with a
      SHA-2 hash function if available.
   -  Removed automatic pmachine.com to expressionengine.com ping url
      rewriting. Please make sure your ping servers do not include
      pmachine.com.
   -  Added Config Overrides (user\_session\_ttl and cp\_session\_ttl)
      to allow site developers the ability to change the default user
      and control panel session TTL.
   -  Changed CSS rendering for form fields to give more contrast,
      larger font size and an obvious focus style
   -  Changed "View Rendered Template" to open in a new window
   -  Removed corners.js from the CP header

-  Developers:

   -  Developers: Added getter and setter method for accessing the
      Sessions Class $cache property. Accessing the class property
      directly is deprecated and developers are encouraged to update as
      soon as possible.
   -  Developers: Removed the explicit instantiation of the jQuery Table
      Sorter plugin on admin\_content::field\_edit(), as it could
      interfere with Fieldtype View files using tables.
   -  Altered the saved entry revision data to store custom field data
      after custom field 'save' processing.
   -  Added an auth library to simplify user authentication.
   -  Modifying \_ci\_view\_path has been worked around following
      developer concerns about upgrades. However, it is deprecated and
      quickly nearing end of support. Use set\_package\_path, please.
   -  Deprecated functions::create\_directory\_map(), please use the
      CodeIgniter directory helper.
   -  Removed previously deprecated member\_model::update\_layouts()
   -  Removed previously deprecated layout::remove\_module\_layout()
   -  Removed previously deprecated content\_edit methods:
      change\_comment\_status, delete\_comment\_confirm, view\_comments,
      view\_comment.
   -  Removed usage of the EXT constant in EE, as it has been deprecated
      in CodeIgniter.
   -  Added ability to send a settings object to
      $.ee\_filebrowser.add\_trigger to restrict files based on file
      type and directory.
   -  Increased PHP memory requirement to 32M from 16M.

-  Bug fixes

   -  Fixed a bug (#15841) where a PHP error would occur when attempting
      to create a Custom Member Field.
   -  Fixed a bug (#15825) where documentation references to index.php
      were too ambiguous. ExpressionEngine now ships with an admin.php
      (masked access) file by default, and all documentation references
      that.
   -  Fixed a bug (#15401) where some settings (such as the webmaster
      email) could be set to blank, impacting functionality.
      ExpressionEngine now performs form validation on several settings.
   -  Fixed a bug (#15478) where the entry\_id in the autosave JSON
      response could be incomplete or incorrect.
   -  Fixed a bug #(15866) where the Channel API could not accept an
      integer value of 0.
   -  Fixed a bug (#15557) where upgrading could fail if a custom active
      group was specified in database.php.
   -  Fixed a bug (#15077) where a PHP error could occur when deleting
      the only Channel Field group.
   -  Fixed a bug (#15896) where a PHP error could occur when deleting a
      Channel Field group containing certain Fieldtypes.
   -  Fixed a bug where dragging fields could produce highlighting on
      the Publish page in WebKit-based browsers.
   -  Fixed a documentation error (#15149) where options for creating
      extension setting fields were not well documented.
   -  Fixed a bug where the control panel search behaved unpredictably
      with secure forms enabled.
   -  Fixed a bug where using only session ids on the frontend could
      result in 404s in some environments.
   -  Fixed a bug (#15718) where the close button had no effect on the
      publish page fullscreen editor.
   -  Fixed a bug (#15256) where large numbers were displayed in
      scientific notation.
   -  Fixed a bug (#15369) where setting the autosave interval to 0
      caused it to continually fire instead of disabling it.
   -  Fixed a bug (#15164) where errors on the publish page category
      editor were not displayed.
   -  Fixed a bug (#15103) where some modules did not respect the IP and
      User Agent security setting.
   -  Fixed a bug (#15756) where the Communicate re-send did not restore
      the sender correctly.
   -  Fixed a bug (#15809) where the MSM menu did not display correctly.
   -  Fixed a bug (#15810) where exported template group folders did not
      include the .group suffix.
   -  Fixed a bug (#15212) where the login success notification did not
      hide automatically.
   -  Fixed a bug (#15744) where editing categories on the publish page
      deselected all of them.
   -  Fixed a bug (#15246) where certain characters would cause the
      control panel search to bail out.
   -  Fixed a bug (#15696) where the category loop was always empty
      inside relationship tags.
   -  Fixed a bug where saving banned members could overwrite MSM
      configuration settings.
   -  Fixed a bug (#15304) where Admin -> Channel Administration
      settings showed for members without Channel Administration
      privileges.
   -  Fixed a bug (#15347) where file fields did not display saved data
      when viewing a revision.
   -  Fixed a bug (#15465) where the Simple Commerce module did not
      properly end subscriptions.
   -  Fixed a bug (#15863) where entry dates did not display correctly
      when using a saved revision.
   -  Fixed a bug (#15851) where submitting the 'Convert delimited text
      to XML' page in the member import generated a 404.
   -  Fixed a bug (#15629) where members with permission to change the
      group that a member is assigned to were unable to activate members
      unless they also had permission to delete members.
   -  Fixed a bug (#15563) where the advanced search form did not honor
      the 'Search in' field selection.
   -  Fixed a bug (#15232) on the publish page where the default day
      shown in the date picker calendar was improperly localized.
   -  Fixed a bug (#15790) where the Filemanager library could
      incorrectly calculate available memory.
   -  Fixed a bug (#15455) in the Wiki module where categories with the
      same name but in different branches could be created with an
      incorrect parent.
   -  Fixed a bug (#15549) where the Search module was not searching in
      comments.
   -  Fixed a bug (#15674, #15782) where package paths could be
      incorrectly set for Extensions.
   -  Fixed a bug (#15318) where the autolinker may attempt to create a
      URL into a link when inside an html anchor tag.
   -  Fixed a bug (#15840) where the get\_plugins() method in the
      addons\_model could throw an error under some circumstances.
   -  Fixed bugs (#15773, #15832) where a Fatal PHP Error would occur in
      the SafeCracker File Addon.
   -  Fixed a display bug on the Custom Field Groups page when no field
      groups exist.
   -  Fixed a bug (#15562) where when entries are deleted, corresponding
      entries in the autosave and versioning tables are not removed.
   -  Fixed a bug (#15871) where the view files in the SafeCracker File
      Extension did not load properly.
   -  Fixed a bug (#15836) where the email contact form would not
      properly return to SSL encrypted urls.
   -  Fixed a bug (#15337) where the corporate theme publish fields
      could not be resized.
   -  Fixed a bug (#15574) where the next/prev month button were missing
      from the Safecracker Calendar.
   -  Fixed a bug (#15811) where the comments control panel would fail
      to load due with large datasets.
   -  Fixed a bug where custom themes would not properly load under
      certain circumstances.
   -  Fixed a bug (#15924) where the "Can view comments in channel
      entries authored by others" member group option was ignored in the
      comments control panel.
   -  Fixed a bug (#15009) where the SAEF CSS contained relative links
   -  Fixed a bug where total channel entries reported in My Account
      were not accurate on a new install.
   -  Fixed a bug (#15117) where the Save Revisions button was not
      showing up on the Publish page.
   -  Fixed a bug (#15752) where the IS\_EMPTY value would not work on
      newly added custom fields.
   -  Fixed a bug (#15500) where database configuration values were not
      being escaped on install.
   -  Fixed a bug (#15577) where SafeCracker wasn't respecting status
      group assignments for member groups.
   -  Fixed a bug where uploading a file to a textarea and then to a
      file field would result in a bad link in the file field pointing
      to the same file from the textrea.
   -  Fixed a bug (#15529) where autosaved entries couldn't be edited.
   -  Fixed a bug (#15745) where images would be incorrectly outputted
      when the channel’s HTML formatting was set to ‘Allow only safe
      HTML’.
   -  Fixed a bug (#15778) where SafeCracker forms would cause a
      Javascript error by attempting to load a view for the file
      chooser.
   -  Fixed a bug (#15737) where SafeCracker forms would cause a
      Javascript error when there was no logged in user and no logged in
      user ID supplied.
   -  Fixed a bug where user errors would not be sent using the selected
      charset.
   -  Fixed a bug (#15758) where the Advanced Search form wouldn't obey
      'search\_in' or 'where' values if they were in standard inputs.
   -  Fixed a bug where the Advanced Search form wouldn't obey the
      'category' parameter.
   -  Added error conditionals to SafeCracker’s form when using
      error\_handling="inline".
   -  Fixed a bug (#15764, #15507) where SafeCracker would not respect
      the channel parameter.
   -  Fixed a bug where MSM sites with a domain in the form of .. (e.g.
      .us.com) couldn't set cookies.
   -  Fixed a bug (#15206) where the upload location dropdowns were
      inconsistent between the modal on the Publish page and the File
      Manager.
   -  Fixed a bug (#15656) where SafeCracker file fields would output a
      period if they were empty.
   -  Fixed a bug (#15936) where SafeCracker wouldn't display captchas
      if the form submitted didn't validated and error\_handling was set
      to inline.
   -  Fixed a bug (#15496) where during the install of the Agile theme,
      the path to the /images/uploads strips out slashes altogether.
   -  Updated styles on comment edit page.

-  Developers

   -  Added ability to send a settings object to
      $.ee\_filebrowser.add\_trigger to restrict files based on file
      type and directory.
   -  Removed usage of the EXT constant in EE, as it has been deprecated
      in CodeIgniter.
   -  Altered the saved entry revision data to store custom field data
      after custom field 'save' processing.
   -  Added getter and setter method for accessing the Sessions Class
      $cache property. Accessing the class property directly is
      deprecated and developers are encouraged to update as soon as
      possible.
   -  Removed the explicit instantiation of the jQuery Table Sorter
      plugin on admin\_content::field\_edit(), as it could interfere
      with Fieldtype View files using tables.
   -  Added an auth library to simplify user authentication.
   -  Added path variable handling to the Template Library's
      parse\_variables() method.
   -  Modifying \_ci\_view\_path has been worked around following
      developer concerns about upgrades. However, it is deprecated and
      quickly nearing end of support. Use set\_package\_path, please.
   -  Deprecated functions::create\_directory\_map(), please use the
      CodeIgniter directory helper.
   -  Removed previously deprecated member\_model::update\_layouts()
   -  Removed previously deprecated layout::remove\_module\_layout()
   -  Removed previously deprecated content\_edit methods:
      change\_comment\_status, delete\_comment\_confirm, view\_comments,
      view\_comment.

Version 2.1.5
-------------

Release Date: May 12, 2011

Build 20110512
~~~~~~~~~~~~~~

-  General Changes:

   -  File Manager Changes (see :doc:`Version Update
      Notes </installation/version_notes_2.1.5>`):

      -  Moved file information storage to the database
      -  Moved File Upload Preferences to the File Manager
      -  Added a 'Can administrate file upload preferences' setting to
         Member Group settings
      -  Added the ability to create custom image thumbnails on image
         upload
      -  Added the ability to watermark custom image thumbnails
      -  Altered the behavior of the minimum and maximum dimension
         settings in File Upload Preferences so that images that exceed
         the maximum will be automatically resized.
      -  Added back the hidden configuration variables
         xss\_clean\_member\_group\_exception and
         xss\_clean\_member\_exception
      -  Wiki now uses the new database based file system.
      -  Moblog now uses the new database based file system.
      -  Migrated Moblog image and thumbnail sizes to upload dimensions.
      -  MetaWeblog API now uses the new databased file system.
      -  SafeCracker File now uses the new database based file system.
      -  Added a new modal upload form for the File Manager and File
         Chooser on the publish page.

   -  Added $config['force\_redirect'] to the config file to force an
      intermediate confirmation page on all forwarded urls.
   -  Added $config['cookie\_secure'] to the config file to allow
      requiring a secure (HTTPS) in order to set cookies.
   -  Added :forum_thread:`theme\_folder\_url <183306>` as a Global
      Variable.
   -  Added :forum_thread:`Feature Request <162694>`: rel="external" to
      control panel help links so they open in a new window.
   -  Added :forum_thread:`Feature Request <174119>` to allow parsing of
      global variables within snippets.
   -  Removed the Blogger API module.
   -  Moved SafeCracker into native modules, **please see the** :doc:`version
      notes </installation/version_notes_2.2.0>` **about how to
      upgrade**.

-  Bug Fixes:

   -  Fixed a bug (#15590) where view files did not properly cascade.
   -  Fixed a bug (#15013) where files ending in ".jpeg" were not
      allowed image types.
   -  Fixed a bug (#15049) where the Publish Page Glossary would not
      properly show when the Emotions Module is not installed.
   -  Fixed a bug (#15214) where the view path for accessories was
      improperly set.
   -  Fixed a bug (#15226) where an incorrect language key was used in
      the error message when trying to create a custom field group when
      a group with the same name already exists.
   -  Fixed a bug (#15115) where plugins using PHP5 style constructors,
      would not properly parse in some circumstances.
   -  Fixed a bug (#15298) where double slashes could appear in the
      comment form action in some situations.
   -  Fixed a bug (#14870) where the module class name was displayed
      instead of the actual module name in member group module
      permissions.
   -  Fixed a bug (#14850) where disabling signatures and member photos
      did disable for existing members.
   -  Fixed a bug (#15221) where weblog previous/next entry tags did not
      properly convert special characters in the title tag, which could
      lead to HTML validation errors in some cases.
   -  Fixed a bug (#14780) where comments belonging to expired entries
      would display when using the dynamic="no" parameter in
      exp:comment:entries tags
   -  Fixed a bug (#15086) where an empty RSS feed could lead to PHP
      notices.
   -  Fixed a bug (#15242) where duplicating a template would not
      properly fill the template data on the resulting template.
   -  Fixed a bug (#15269) where an error existed in the valid\_title
      check.
   -  Fixed a bug (#15319) where PHP notices could occur on the Template
      Manager under certain circumstances.
   -  Fixed a bug (#15375) where the "Add HTML Button" on the Publish
      Page was missing it's link title text.
   -  Fixed a bug (#15445) where a PHP error could be thrown in the
      send\_ajax\_response() method if the javascript library had not
      been loaded.
   -  Fixed a bug (#15487) where the update\_comment\_additional
      extension hook did not fire on bulk comment update.
   -  Fixed a bug (#15299) where package libraries could not be loaded
      in an Accessories class constructor.
   -  Fixed a bug (#12044) where embedded variables were not properly
      parsed within module or plugin tags.
   -  Fixed a bug (#15611) where PHP errors could occur on member
      profile pages.
   -  Fixed a bug (#15617) where a help link for custom member profile
      fields was incorrect.
   -  Fixed a bug (#15122) where the avatar upload path was incorrectly
      reported in the member preferences when the directory was not
      writeable.
   -  Fixed a bug (#15409) where the help link on new member
      registration page was incorrect.
   -  Fixed a bug (#15435) when creating a new channel it will assign a
      field group even though none is selected.
   -  Fixed a bug (#15440) where the open status was not properly hidden
      when no status group was assigned to a channel.
   -  Fixed a bug (#15538) where the relationships cache was not updated
      following deleting an entry.
   -  Fixed a bug (#15413) where certain types of email address links
      were incorrectly converted by the Typography Parser.
   -  Fixed a bug (#15166) where libraries, models and helpers were
      unable to be loaded in an Accessories Class Constructor.
   -  Fixed a bug (#15697) where the rendered Wiki Module version number
      was incorrect.
   -  Fixed a bug (#15202) where saving an entry with a date in DST
      while you're not in DST (or the opposite) caused the date to
      increase or decrease by an hour.
   -  Fixed a bug (#15417) where the drop down menus off of the top
      level navigation would not work for Firefox 4.
   -  Fixed a bug (#15513) where image rotation was going the wrong
      direction.
   -  Fixed a bug (#15635) where SafeCracker File output was being
      formatted as xhtml, instead of having no formatting.
   -  Fixed a bug (#15676) where the channel name was not listed on the
      Edit Group Assignments page.
   -  Fixed a bug (#15358) where EE\_Email class message() method not
      chainable.
   -  Fixed a bug (#15380) where email\_data.php was returning PHP
      errors in the translation utility.
   -  Fixed a bug (#15249) in the typography class where a line
      consisting of a single character did not always have line breaks
      properly applied.
   -  Fixed a bug (#15711) where the author\_id parameter of
      exp:comment:entries would not work if the dynamic parameter was
      not explicitly disabled.
   -  Fixed a bug (#15599) where a PHP error could occur if an exp:stats
      tag was used and online user tracking was disabled.
   -  Fixed a bug (#15403) where permissions were not explicitly set on
      files uploaded from places other than the File Manager.
   -  Fixed a bug (#15093) where comment notification emails could
      contain comments from other entries.
   -  Fixed a bug (#13339) where autolinking would sometimes result in
      invalid bbcode.
   -  Fixed a bug where a PHP error could be thrown when relationships
      are used.
   -  Fixed a bug where bad relationships could be stored when using
      SafeCracker.
   -  Fixed a bug where the status group name did not appear on the edit
      status group admin page.
   -  Fixed a bug where the URL to the site home page was incorrect when
      updating.
   -  Fixed a bug where the form\_class and form\_id parameters were non
      functional on the exp:member:login\_form tag.
   -  Fixed a bug where using a conditional inside a variable pair could
      result in the tag pair not being parsed in certain circumstances.
   -  Fixed a bug where Superadmin permissions for categories were not
      properly set when upgrading from 1.x.
   -  Fixed a bug where the Datepicker would default to 1969/1970 when
      launched on a field that contained an invalid date.
   -  Fixed a bug where the currently selected date of a date field was
      not highlighted correctly inside the Datepicker.
   -  Fixed a bug where search form XID checking would fail to check in
      some cases which could lead to lack of garbage collection in the
      security\_hashes table.
   -  Fixed a bug in the Channel module where date headings were
      calculated incorrectly.
   -  Fixed a bug (related to #15199) where member registration in the
      control panel would cause a MySQL error when strict mode was
      enabled.
   -  Refactored inefficient conditional statements in the channel
      module. (#15293)

-  Developers:

   -  Moved application view files to expressionengine/views/
   -  All loader variables are now private. Package view paths are
      handled by CodeIgniter's add\_package\_path.
   -  Fixed a bug (#15383) where the Template Library could remove the
      wrong application package after parsing.
   -  Removed undocumented and long deprecated Typography class function
      light\_xhtml\_typography().
   -  Deprecated undocumented Typography Class Method
      xhtml\_typography(), use auto\_typography() instead.
   -  Altered native ExpressionEngine modules to work as packages for
      field types and extensions.
   -  Moved the 'field\_content\_type' data in exp\_channel\_fields to
      the settings array for native field types that need it. The
      field\_content\_type field will be removed in the future.

Version 2.1.4
-------------

Release Date: February 1, 2011

Build 20110405
~~~~~~~~~~~~~~

-  Important:

   -  Improved XSS filtering of input data to prevent an XSS
      vulnerability.
   -  Fixed a security issue that in certain circumstances could allow
      manipulation of the Email module's recipients parameter.
   -  Eliminated a vulnerability in the comment preview that occurred
      only when secure forms was turned off.
   -  Improved randomization of temporary template markers.

-  Bug Fixes:

   -  Fixed a bug (#15416) in the template parser where nested tags
      could result in PHP errors.
   -  Fixed a bug (#15202) where saving an entry with a date in DST
      while you're not in DST (or the opposite) caused the date to
      increase or decrease by an hour.
   -  Fixed a bug (#15199) where member registration in the control
      panel would cause a MySQL error when strict mode was enabled.
   -  Fixed a bug (#15199) in the installer where TYPE= is not supported
      by MySQL 5.5+.
   -  Fixed a bug (#15115) where plugins using PHP5 style constructors,
      would not properly parse in some circumstances.

-  Developers:

   -  The security library has been moved to the CodeIgniter core.
      Loading it is deprecated and will result in PHP errors in future
      releases.
   -  Fixed a bug (#15383) where the Template Library could remove the
      wrong application package after parsing.

Build 20110101 (initial release)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  File management overhaul stage one completed.
-  Added {exp:comment:edit\_comment\_script} tag to output comment
   editor via a <script> tag.
-  Added {if enable\_avatars}{/if} and {if enable\_photos}{/if} to
   members and forums menu.html theme files.
-  Optimized the Channel Entries tag to consistently not perform page
   related queries when the pagination tag is missing.
-  Fixed a bug in the Metaweblog API settings page where PHP errors
   could occur if no additional statuses had been created.
-  Fixed a bug in the Metaweblog API settings page where some dropdown
   menus could populate incorrectly in Internet Explorer.
-  Fixed a bug (#14904) where links to edit entries could be incorrect
   if the entry list was not fully loaded.
-  Fixed a bug (#13217) where file upload buttons did not submit in
   Internet Explorer 7.
-  Fixed a bug (#15125) where jQuery effects were not correctly
   combo-loaded.
-  Fixed a documentation error (#14913) where some update instructions
   still advised forcing ASCII mode when uploading.
-  Fixed a documentation error (#15128) where a set of parameters was
   out of order in the Module Tutorial.
-  Fixed a documentation error (#14883) where instructions for creating
   a new theme did not mention the images directory.
-  Fixed a bug (#14876) where some channel preference input fields were
   not clickable in the corporate theme.
-  Fixed a bug (#14708) where the control panel login did not redirect
   with a session ids, breaking access in some cases.
-  Fixed a bug (#14868) in the Moblog where the field formatting
   settings were not respected.
-  Fixed a bug (#14851) in the Moblog where field overrides did not work
   properly.
-  Fixed a bug in the Moblog where email data were not properly stripped
   from the body content when no upload directory was specified in the
   Moblog settings.
-  Fixed a bug (#14952) in the Channel Entries API where formatting
   specifications were removed.
-  Fixed a bug (#14884) in the Comment Entries tag where the channel
   parameter was not honored when dynamic was set to 'no'.
-  Fixed a bug where a comment could have an incorrect site\_id if
   entered from a different MSM site.
-  Fixed a bug (#14869) where Page URLs did not work properly using a
   legacy multiple site setup.
-  Altered the behavior of the Publish Page's write mode editor to
   always publish to field when the modal is closed as per #13164.
-  Fixed a bug (#14417) in the Metaweblog API where categories were not
   properly entered when creating a new entry.
-  Fixed a bug (#13752) where disabled fields were forced to an enabled
   state when the Publish Page's toolbar was toggled.
-  Fixed a bug (#14888) where the comments module would ignore the sort
   parameter in certain cases.
-  Fixed a bug (#14902) where a PHP Error could occur on the publish
   page for non-super admin users.
-  Fixed a bug (#14882) where the Stats module incorrectly reported
   last\_entry\_date when filtering to a specific channel.
-  Fixed a bug (#14299) where PHP errors would occur on the Blogger API
   control panel pages.
-  Fixed a bug (#14968) where a PHP error could occur when searching for
   all member entries.
-  Fixed a bug (#14176) where libraries were unable to be loaded in the
   upd file during installation.
-  Fixed a bug (#14856) where load\_package\_css would not properly load
   for themes other than default.
-  Fixed a bug (#14945) where improper breadcrumb trail was show in
   admin\_content area.
-  Fixed a bug (#14628) where the DATE\_ISO8601 variable was returning
   an incorrectly formatted date string.
-  Fixed a bug (#14788) where a language variable contained improper
   capitalization.
-  Fixed a bug (#14855, #14999) where open fields in a saved layout
   could be closed when the custom field settings are altered.
-  Fixed a bug (#14779) where pagination's {previous\_page} and
   {next\_page} variables were only evaluated once to check for
   conditional usage.
-  Fixed a bug (#14576) where some date variables returned nothing when
   no format was given. No format will now result in a timestamp.
-  Fixed a bug (#14777) where the incorrect channel title was displayed
   in the Autosaved Entries List.
-  Fixed a bug (#14989) where Member Profile template links do not
   reflect changed Profile Triggering Word.
-  Fixed a bug (#14822) where statuses were not properly filtered by
   status order on the publish page.
-  Fixed a bug (#14703) where the edit photo link would show regardless
   of member photo settings in the member & forum themes.
-  Fixed a bug (#14951) where a PHP error would occur on the Publish
   Pages Categories tab when a category group was deleted.
-  Fixed a bug (#14782) where publishing autosaved entries could result
   in a Fatal Error Message.
-  Fixed a bug (#12167) where the "Edit Categories" link was not removed
   from view after being clicked to edit categories on the publish page.
-  Fixed a bug (#14947) where the revisions checkbox was not checked by
   default in the publish page revisions tab.
-  Fixed a bug (#14549) where when duplicate from Existing Template
   function creates from database and not from file.
-  Fixed a bug (#14821) where the category tree would not properly sort
   by a custom order.
-  Fixed a bug (#14778) where the result from the file upload
   preferences query was not properly caching.
-  Fixed a bug (#14536) where comment preview did not maintain the page
   URI, resulting in improper page rendering.
-  Fixed a bug (#14814) where legacy multi-site setups did not properly
   function.
-  Fixed a bug (#12413, #14801) where the preview layout was not
   working.
-  Fixed a bug (#14682) where hidden custom fields were being shown
   after being edited.
-  Fixed a bug where field visibility wasn't being accounted for in the
   Fields sidebar on the publish page.
-  Fixed a bug where field width wasn't being retained when fields are
   hidden in publish layouts.
-  Fixed a bug (#14934) where the resize handle was missing from the
   Corporate theme
-  Fixed a bug (#14967) where wildcard email addresses in the member
   banning preferences weren't working properly.
-  Fixed a bug (#14896) where parse\_variable\_rows was not handling
   single variables with typography options.
-  Fixed a bug (#14877) where reverse related entries wouldn't properly
   sort on numeric fields.
-  Fixed a bug (#12442) where wrapping HTML buttons were overflowing out
   of their toolbar.
-  Fixed a bug (#13579) where the category url title would not be
   created automatically on the publish page.
-  Fixed a bug (#15025) that would result in a PHP error when uploading
   a member signature photo on the front end.
-  Fixed a submission error spelling error (#15024) in the private
   messaging system.
-  Fixed a bug (#15016) with front end comment editing when non-super
   admin users could not edit their own comments unless they had comment
   moderation privileges.

Version 2.1.3
-------------

Release Date: December 20, 2010

Build 20101220 (initial release)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Added a special hidden fieldtype to allow modules to dynamically
   define tab fields without breaking layouts.
-  Pages Module Updated to version 2.2 to fix an error with publish page
   layouts.
-  Fixed a bug where a PHP error could be triggered if the
   publish\_form\_entry\_data hook was used.
-  Fixed a bug (#14792) where the Forum version was incorrectly
   identified.
-  Fixed a bug (#14723) where category and status dropdowns on the Edit
   page were not populated in Internet Explorer.
-  Fixed a bug (#14786) on the Publish page where field formatting
   options would not show nor would they respect default settings.
-  Fixed a bug (#14794) where publishing an entry with a live view
   template resulted in a PHP error.
-  Fixed a bug (#14785) where you could not successfully save an entry
   with a required image field.
-  Documentation: Updated to use \_\_construct in development examples;
   fixes #14787.
-  Documentation: Developer Guidelines Checklist still referenced PHP
   4.3; fixes #14789.

Version 2.1.2
-------------

Release Date: December 15, 2010

Build 20101215 (initial release)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Important:

-  PHP 4 support has ended. ExpressionEngine requires PHP 5.1.6

General Changes:

-  Added an overview page of available autosave data.
-  Added a tab file to the Pages module to control custom fields.
-  Added automatic pruning of cached searches to the Wiki Module.
-  Added automatic pruning of autosaved data every 6 hours, controlled
   by the autosave\_prune\_hours hidden config variable.
-  Added an importer to the IP to Nations Module that allows updating
   the IP records directly from the ip2nations SQL file.
-  Added secure forms check to the frontend Comment Editor. See the
   :doc:`Version Notes </installation/version_notes_2.1.2>` and
   update your :ref:`JavaScript <comment_editing>` if needed.
-  Added a setting to group preferences to disallow editing of html
   formatting buttons.
-  Added to the default message text for forwarded private messages to
   indicate the original message's author, date and subject.
-  Added all default member fields and the option to include selected
   custom fields to the control panel's Register a New Member form.
-  Added a new option to Custom Member Field creation/editing 'Is field
   visible in the control panel's administrative registration page?'.
-  Added a link to the View Entry page that returns to a pre-filtered
   list of entries on the Edit page (if a filter was used to select the
   entry).
-  Reenabled autosave
-  Altered autosave to work on new entries as well as existing ones.
-  Altered "Allow New Member Registrations?" to be 'off' by default on
   new installations.
-  Altered Template Manager Search to display the number of results
   returned, and display terms searched for.
-  Altered the New Template form in Design to remove redundant radio
   options and make the duplication process consistent with the New
   Template Group form.
-  Altered the ExpressionEngine Info Accessory to clearly indicate the
   latest released version and the currently installed version.
-  Modified the autosave success message to be less intrusive.
-  Made the state of the sidebar persistent across sessions.
-  Updated the IP to Nations database.
-  Removed the ability to allow duplicate email addresses for different
   members.
-  Removed the "Honor Entry DST" setting.
-  Removed the "Convert High ASCII" setting.
-  Removed all unused language keys pertaining to the Gallery module
   (#14094).

Developers:

-  Added cp\_js\_end and cp\_css\_end Extension Hook to the Javascript
   Controller.
-  Added a new method
   :doc:`settings\_modify\_column() </installation/version_notes_2.1.2>`
   to Custom Fieldtypes.
-  Changed the API's initialize method visibility to protected.
-  Moved Javascript files to themes/javascript/compressed/.
-  Deprecated localize::offset\_entry\_dst, will now return the passed
   in date. Please remove any calls to it.
-  Deprecated functions::clone\_object(), as it was a work around for
   PHP4.
-  Fixed a bug (#14741) where ci\_view\_path and package paths were not
   properly set in Addons\_accessories::process\_request().
-  Abstracted the secure forms check to a new function
   secure\_forms\_check() in the Security Library.
-  Moved the :doc:`entry\_submission\_absolute\_end
   hook </installation/version_notes_2.1.2>`
   from the Channel Entries API to Content Publish and added a new
   parameter.
-  CodeIgniter system folder set to ``
   0a18e0f60784``

Bugs:

-  Changed the 'Forgotten Password' emails for the Control Panel login
   to use the existing email notification templates (see bug #14691).
-  Fixed a bug where file uploads would not be run through xss\_clean in
   some cases.
-  Fixed a bug where cache directory deletion could result in a PHP
   error in certain environments.
-  Fixed a bug where channel total\_entries counts could become
   incorrect after batch-editing entries.
-  Fixed a bug where the File Manager showed showed links to the File
   Preferences for members without access to that section.
-  Fixed a bug on installation where an incorrect path was examined to
   load language files for modules.
-  Fixed a bug in the Comment control panel where validation did not
   work correctly when editing comments.
-  Fixed a bug in the Logs area where a trailing comma in JSON caused
   warning messages in Internet Explorer.
-  Fixed a bug in the Comment Module where the location could go in as
   '0' for logged in members who had no location specified.
-  Fixed a bug in the Search Module where results for channels
   disallowed in the channel parameter could be included under rare
   circumstances.
-  Fixed a bug in the Wiki Module where Category names could
   inadvertently include a trailing space when created using a link with
   an alternate display text.
-  Fixed a bug (#14404) where checkboxes on the Account/View
   Subscriptions were not visible.
-  Fixed a bug (#14418) where a language key did not properly parse on
   the category edit page.
-  Fixed a bug (#14419) where the Multi-Category Edit Pages had display
   issues in all themes.
-  Fixed a bug (#14464) where the member\_group\_id tag did not properly
   parse in the Comments Entries tag.
-  Fixed a bug (#14410) where the nav\_bubble\_top.png image was a
   consistent height with the other themes.
-  Fixed a bug (#13534) where an upload location path was incorrect when
   using the Agile Records Theme.
-  Fixed a bug (#14319) where the Control Panel logs did not properly
   use localized dates.
-  Fixed a bug (#14505) where the stylesheet parameter would display the
   incorrect timestamp when the template is saved as a file.
-  Fixed a bug (#14302) where language keys did not properly parse on
   the Edit Member Group Preferences page if the site\_id was over 9.
-  Fixed a bug (#13979) where pluralization of the phrase "Private
   Messages" was not consistent between the member and forum modules.
-  Fixed a bug (#14522) where a low column limit in the accessories
   table would prevent some member groups from being included on sites
   with a high number of member groups.
-  Fixed a bug (#14467) in the Channel Categories API where class
   members were not correctly re-initialized on subsequent calls to
   category\_tree().
-  Fixed a bug (#14540) where dynamic\_start was improperly implemented
   in the RSS Module.
-  Fixed a bug (#14544) where Default Publish Tabs did not properly
   render language variables.
-  Fixed a bug (#14545) where Email Class language variables were not
   properly parsed.
-  Fixed a bug (#14449) where Internet Explorer cached XMLHttpRequests,
   in certain instances, producing inaccurate data results in the
   control panel.
-  Fixed a bug (#14235) in the Comment Entries tag where a MySQL error
   occurred when the entry\_id parameter was specified.
-  Fixed a bug (#14236) in the Comment Entries tag where the
   {total\_results} count was inaccurate.
-  Fixed a bug (#14452) where the Wiki Module tags ignored the paginate
   parameter.
-  Fixed a bug (#14471) in the Wiki Module where renaming could result
   in an improper title when namespaces were used.
-  Fixed a bug (#14141) where the Throttle log did not display or sort
   correctly.
-  Fixed a bug (#13418) where the maximum file size was not always
   checked properly (File Browser, Publish, and Wiki affected).
-  Fixed a bug (#14477) where related entries were not fully removed
   from custom fields on edit, resulting in placeholder data showing in
   frontend tags.
-  Fixed a bug (#13549) where the Channel Entries API was not properly
   resetting variables on repeated calls.
-  Fixed a bug (#14422) where an improper field name was being used in
   the Channel Entries API, resulting in incorrect data being sent to
   some third party modules on entry update.
-  Fixed a bug (#14135) where the Channel Entries API was not properly
   resetting the category data on repeated calls.
-  Fixed a bug (#14138) in the Field Types uninstaller where a PHP error
   could occur when attempting to remove the field from custom layouts.
-  Fixed a bug (#14513) in the Wiki Module where page links were not
   created properly when HTML formatting was set to 'Convert HTML into
   character entities'.
-  Fixed a bug (#14310) where disabling comments for a channel could
   result in a PHP error on the Publish page when a custom layout was
   used.
-  Fixed a bug (#13938) where the formatting buttons were set not to
   show by default when initially imported.
-  Fixed a bug (#14613) in the Wiki Module where Category URLS could be
   truncated prematurely.
-  Fixed a bug (#14591) where date fields could have the wrong field
   type in exp\_channel\_data, resulting in improper ordering by date.
-  Fixed a bug (#14686) in comment notifications where the
   {comment\_url} variable could be incorrect due to a missing slash.
-  Fixed a bug (#14611) where MySQL errors on the front end could cause
   a memory error when displayed.
-  Fixed a bug (#14237) in the Comment Entries tag where the comment\_id
   parameter did nothing.
-  Fixed a bug (#14738) where the category URL title changed on edit
   when the category title was changed.
-  Fixed a bug (#13740) where smiley replacements in the Member and
   Forum module did not work in Internet Explorer.
-  Fixed a bug (#14316) in the Wiki module where namespaces could not be
   deleted.
-  Fixed a bug (#14175) where the Moblog module was unable to post when
   using pings.
-  Fixed a bug (#13782) where downloading files from the file manager
   broke the delete action.
-  Fixed a bug (#14349) in the ExpressionEngine Info accessory, where
   the current version and build were displayed incorrectly.
-  Fixed a bug (#14133) in the Filemanager where the table did not
   correctly sort on the date column.
-  Fixed a bug (#14439) where the directory helper was used without
   explicitly being loaded in the current method.
-  Fixed a bug (#14432) where custom date fields defaulted to 1/1/1970
   under certain circumstances.
-  Fixed a bug (#12966) where menu items did not display correctly when
   creating a new Moblog in Internet Explorer.
-  Fixed a bug (#14515) where publish page fields could be offset in
   Internet Explorer for some users.
-  Fixed a bug (#14671) where a MySQL error could occur when attempting
   to access the frontend member pages with an improper URL.
-  Fixed a bug (#14592) where version information was not displayed on
   the Extensions page.
-  Fixed a bug (#14733) where the Add Tab dialog on the Publish page did
   not work properly in Internet Explorer.
-  Fixed a bug (#14663) where the file size in File Manager was
   incorrect.

Version 2.1.1
-------------

Release Date: October 18, 2010

Build 20101020 (additional changes and fixes)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Temporarily disabled the autosave feature.
-  Fixed a bug where third party field types did not have access to all
   of the fieldtype settings.
-  Fixed a bug where javascript failed to load due to overzealous data
   sanitization.
-  Fixed a bug (#14235) in the Comment Entries tag where a MySQL error
   occurred when the entry\_id parameter was specified.
-  Fixed a bug (#14236) in the Comment Entries tag where the
   {total\_results} count was inaccurate.
-  Fixed a bug (#14183) where the 30 day trial was referenced in
   Installer Language Files.

Build 20101018 (initial release)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  General changes:

   -  Fixed a security issue that in certain circumstances could result
      in arbitrary code execution.
   -  Altered version update notification to notify users if a new
      ExpressionEngine release is a security release.
   -  Altered the behavior of the :doc:`Channel Category tag's </modules/channel/categories>` show_empty=
      parameter channel specific. (Waits for the cheering to die down....)
   -  Altered member profile fields to disallow HTML.
   -  Altered final file permissions on uploads to compensate for
      certain hosting environments. (#13930)
   -  Added {last\_segment} global variable.
   -  Added a way to trigger module updates from the main module listing
      page, so developers do not have to come up with their own sneaky
      methods of updating modules that do not have control panels (issue
      #13568).
   -  Added a template synchronization warning in the Search and Replace
      tool for users saving templates as files (issue #13551).
   -  Added a restrict_channel= parameter
      to the :doc:`Channel Category tag </modules/channel/categories>`, which allows overriding the new
      default behavior of its show_empty= parameter.
   -  Added a :doc:`Control
      Panel </modules/comment/control_panel/index>` to the Comment
      Module.
   -  Added a new status for comments. Moderated comments will no go in
      with a status of 'Pending' rather than 'Closed' (though moderators
      may still set a comment to 'Closed' status.
   -  Added new variables to the Comment Notification Templates (see
      :doc:`Version Notes </installation/version_notes_2.1.1>`).
   -  Added new
      :doc:`Settings </modules/comment/control_panel/index>` to
      the Comment Module (Force word censoring for comments and Moderate
      expired comments).
   -  Added new variables to the :doc:`Comment Entries tag </modules/comment/index>`
      ({member\_group\_id}, {username}, {if editable}, {if can\_moderate\_comment}, {comment\_stripped}).
   -  Added new parameters to the :doc:`Comment Entries tag </modules/comment/index>`
      (comment\_id=, entry\_status=, status=, author\_id=_).
   -  Added a random option to the Comment Entries :ref:`comment_entries_orderby` parameter.
   -  Added a new parameter to the :ref:`Comment Form tag <comment_submission_form>`
      (return=).
   -  Added new conditionals to the :ref:`Comment Form tag <comment_submission_form>` ({if
      comments\_expired}, {if comments\_disabled}).
   -  Added a Comment Notification tag to the :doc:`Comment Module </modules/comment/index>`
      which gives members the ability to subscribe to comment
      notifications for an entry without commenting.
   -  Added the ability to :ref:`Allow Members to Edit Comments on the Front
      End <comment_editing>`.
   -  Added a new notification template to the Comment Module to send a
      single digest when moderated comments are opened.)
   -  Moved stats mcp file logic to a library for greater code
      portability.
   -  Modified the Moblog module to work with POP3 over SSL (including
      GMail)
   -  Modified the comment module subscriptions to respect a user's
      smart notification setting.
   -  Modified the Image formatting button to allow extra text in front
      of or behind the file URL.
   -  Modified the wording in the Comment module of the error message
      when someone submits an empty comment.
   -  Changed the name of the zip file for multiple file download in the
      File Manager from "images.zip" to "downloaded\_files.zip" (#13482)
   -  Corrected case of some home page language variables for
      consistency (#13532)
   -  Renamed references of the Tab Manager to Main Menu Manager.
      (#13926)
   -  Removed the trailing slash at the end of the URL produced by the
      comment\_url\_title\_auto\_path and comment\_entry\_id\_auto\_path
      variables in the Comment Entries Tag.
   -  Removed the Authors section from the Publish toolbar because it
      was not a per-layout setting.
   -  Removed required flag from the url title field so that it can be
      hidden.
   -  Updated the publish page sidebar to list publish fields
      alphabetically.
   -  Updated the publish page field sorting to allow dragging publish
      fields directly to different tabs.

-  Developers

   -  Altered Api::is\_url\_safe() to return an explicit boolean
      response.
   -  Altered functions->fetch\_file\_paths() to return an empty array
      if no file upload directories exist. (#13737)
   -  Modified EE\_Output::send\_ajax\_response() to ensure the
      JavaScript library is loaded.
   -  Deprecated the old lang.name.php language file naming convention
      in favor of CodeIgniter's name\_lang.php.
   -  Added a parameter to the :doc:`delete\_comment\_additional
      hook </installation/version_notes_2.1.1>`.
   -  Removed the :doc:`comment\_form\_action
      hook </installation/version_notes_2.1.1>`.
   -  Fixed a bug in the API where child drivers were not being
      initialized before consecutive instantiations.
   -  Fixed a bug (#14009) in the Channel Entries API where
      \_fetch\_channel\_preferences() did not honor the $channel\_id
      parameter.
   -  Fixed a bug (#14008) in the Channel Entries API where missing ping
      data could cause a PHP error.
   -  Fixed a bug (#13483) in the Channel Entries API where the required
      $channel\_id parameter for submit\_new\_entry() was not being
      added to the data array.
   -  Fixed a bug (#13610) where the FieldType update() method was not
      being called properly.
   -  CodeIgniter system folder set to ``0b88a4ed5303``

-  Bug Fixes

   -  Fixed a minor issue with the module's displayed name on the Module
      uninstall confirmation screen (#13766)
   -  Fixed a bug where an inconsistent number of max URI segments were
      allowed.
   -  Fixed a bug where the hover state of the navigation in Internet
      Explorer was improperly styled.
   -  Fixed html validation errors on the Config File Editor page.
   -  Fixed a bug where the default comment expiration date for a
      channel did not show on the Publish page for new entries.
   -  Fixed a bug where files uploaded to the Wiki had the wrong file
      size recorded.
   -  Fixed a bug where a MySQL error could occur when a member group
      had no access to file uploads and was publishing to a channel with
      a file fields.
   -  Fixed a bug (#13175) in the publish page datepicker where AM and
      PM could not be modified.
   -  Fixed a bug (#13699) where a PHP error could occur when using
      variable pairs and MSM.
   -  Fixed a bug (#13724) where the Channel Entries tag's search
      parameter did not always work for IS\_EMPTY.
   -  Fixed a bug (#13701) where mode on the publish page would not
      close for fields other than the first.
   -  Fixed a bug (#13319) in the Channel Entries module where an
      improperly formatted custom variable could result in a PHP error.
   -  Fixed a bug (#13536) where the Search Results tag produced a MySQL
      error when on pages other than the first.
   -  Fixed a bug (#13687) on the publish page where forum fields were
      not properly hidden when editing.
   -  Fixed a bug (#13250) where form validation results were not
      properly displayed when creating/editing categories.
   -  Fixed a bug (#13761) in the Member Module's Custom Profile tag
      where {last\_activity} would not format properly and {last\_visit}
      showed the last activity date rather than the last visit date.
   -  Fixed a bug (#13570) in the Translation Utility where file
      permissions were incorrectly interpreted.
   -  Fixed a bug (#13697) on the Publish page where date validation was
      different for custom fields as compared to entry dates.
   -  Fixed a bug (#13704) where undefined variable error could occur in
      the Typography Class.
   -  Fixed a bug (#13714) where the multi-edit page styling was
      inconsistent from the rest of the UI.
   -  Fixed a bug (#13854) where a PHP notice could occur in the Simple
      Commerce Module if the add items form was submitted with no items
      marked to add.
   -  Fixed a bug (#13829) where snippets could be saved with spaces in
      the snippet name.
   -  Fixed a bug (#13890) where comment\_url\_title\_auto\_path and
      comment\_entry\_id\_auto\_path variables produced malformed links
      when used inside the comment entries tag.
   -  Fixed a bug (#13506) where the showToolBar link on the publish
      page rendered incorrectly in Internet Explorer.
   -  Fixed a bug (#13691) where the number of URI segments entered in
      the Pages URI input on the publish page allowed for an unlimited
      number of URI Segments.
   -  Fixed a bug (#13682) where category management permissions for
      non-super administrators were inconsistent.
   -  Fixed a bug (#13685) where a few special characters were being
      removed from entry titles in the edit entry form.
   -  Fixed a bug (#13497) where some modal confirmation dialogs were
      not displaying in IE8.
   -  Fixed a bug (#13498) where Bookmarklets were not inserting the
      title and content into the publish form.
   -  Fixed a bug (#13071) with HTML formatting buttons where the
      shortcut keys (Ctrl+key) were not working.
   -  Fixed a bug (#13384) where the filtering menus for statuses and
      fields in the MetaWeblog API weren't working.
   -  Fixed a bug (#13655) with multi-site member login.
   -  Fixed a bug (#13611) which could result in a PHP error from a
      Required Entry 404 redirect in edge cases.
   -  Fixed a bug (#13503) where deleting tabs from the publish layout
      could cause kept tabs to be mislabeled.
   -  Fixed a bug (#13585) where the Wiki would not accept uploads if
      the allowed types was set to "Images only"
   -  Fixed a bug (#13618) where a JavaScript error was preventing the
      saving of template Access settings. (hotfixed on August 17th)
   -  Fixed a bug (#13613) which would result in a MySQL error when
      Session ID based sessions in the control panel expired.
   -  Fixed a bug (#13575) where the CP search was looking in the wrong
      location for language keys.
   -  Fixed a bug (#13518) where using multiple {categories} tags with
      different limit= parameters inside the same entries tag would
      misbehave.
   -  Fixed a bug (#13598) where a redundant Upload language file was
      preventing translation of Upload error messages.
   -  Fixed a bug (#13201) where beta installations did not have their
      user guide URL updated to the new location at ExpressionEngine.com
   -  Fixed a bug (#13363) where {page\_url} variables were not
      respecting the "Force Query Strings" setting.
   -  Fixed a bug (#13465) where the 'Open' status was available in the
      Multi-Entry Editor in cases where no status group was assigned to
      the entry.
   -  Fixed a bug (#13924) where the file field's file type restriction
      was ignored.
   -  Fixed a bug (#13995) in the Channel Module where an improper
      segment could be used as the category url title.
   -  Fixed a bug (#13977) where the display of the default statuses was
      inconsistent.
   -  Fixed a bug (#14012) in the Channel Entries tag where the
      allow\_comments conditional ignored the channel permissions.
   -  Fixed a bug (#13309) on the Publish page where file fields could
      lose the correct file directory when form validation failed.
   -  Fixed a bug (#14046) in the Template Edit page where clicking the
      View Revision History button without selecting a revision would
      take you to a user error page.
   -  Fixed a bug (#13636) in the Channel Entries tag where pagination
      did not work correctly with date indicators in the URL.
   -  Fixed a bug (#14032) where you could not save a custom layout for
      member groups with edit only permissions.
   -  Fixed a bug (#13948) in the Channel Entries tag where formatted
      dates could be displayed using the wrong date field under certain
      naming conventions.
   -  Fixed a bug (#13986) where a language variable was not properly
      parsed in the member module.
   -  Fixed a bug (#13975) where a display error occurred in modal
      dialogues on the file edit page.
   -  Fixed a bug (#14026) where entry pagination on the content edit
      page in the corporate theme was not functional.
   -  Fixed a bug (#14016) where the first and last link pagination text
      was not able to be translated.
   -  Fixed a bug (#14198) where the browse button was missing when a
      publisher clicks on Add File.

Version 2.1.0
-------------

Release Date: July 12, 2010

Build 20100810 (additional changes and fixes)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Fixed a potential security issue in build 20100805 where in certain
   circumstances guest users might be incorrectly recognized as an
   authentic member.
-  Fixed a bug (#13516) where the language translation utility failed
   due to new language file naming scheme created in the last build.
-  Fixed a bug (#13517) where the deprecated gallery modules language
   file was still present.

Build 20100805 (additional changes and fixes)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Added the ability to localize custom tabs on the Publish page.
-  Changed default installation value for Database Caching to be 'off'.
-  Changed File Manager Modal to use jQuery Tools Overlay instead of
   FancyBox.
-  Renamed all language files to match the CodeIgniter naming
   conventions.
-  Temporarily disabled db caching for all installations until all db
   caching issues are resolved.
-  Fixed a bug where the correct field format was not selected on edit
   for custom category fields.
-  Fixed a bug where reverse related entries did not always sort
   properly when field names were duplicated across sites.
-  Fixed visual bugs (#13294) in the corporate theme control panel.
-  Fixed various bugs (#13150, #13160, #13329) where entry dates were
   changing into the future on edit.
-  Fixed a bug (#13300 and #13230) where Publish tabs did not work
   properly when the tab name was more than one word long.
-  Fixed a bug (#13258) where CodeIgniter language files could not be
   localized consistently.
-  Fixed a bug (#13281) where the upload button magic markup was not
   working on text input fields.
-  Fixed a bug (#13213) where glossary items could not be selected if
   formatting buttons were disabled.
-  Fixed a bug (#13301) where Snippets could not be named using only a
   number.
-  Fixed a bug (#13308) where caches were not cleared after editing a
   user defined global variable.
-  Fixed a bug (#13139) where members with access to the control panel
   could erroneously be denied access to control panel action requests.
-  Fixed a bug (#13354) in the Tab Manager where tabs did not always
   sort correctly.
-  Fixed a bug (#13347) in the Channel Entries tag where setting
   show\_pages="no" would result in no entries returned when no pages
   had been created.
-  Fixed a bug (#13386) where only a single category could be assigned
   to a channel during channel creation.
-  Fixed a bug (#12967) where the Moblog settings did not always
   properly reflect the selected Upload Directory.
-  Fixed a bug (#13434) in Communicate where batched emails sent to
   Mailing Lists could result in PHP errors and an incorrect message
   text.
-  Fixed a bug (#13262) where a fatal PHP error occurred when updating a
   Custom Field Group Name.
-  Fixed a bug (#13285) where a PHP error occurred on the advanced
   search page if categories were specified as a search parameter.
-  Fixed a bug (#13259) where a language key for the word 'or' was
   missing.
-  Fixed a bug (#13224) where an image 404 occurred when viewing a
   members edit avatar page as a super admin when the member had not
   chosen an avatar.
-  Fixed a bug (#13379) where an undefined variable error occurred on
   the search results page.
-  Fixed a bug (#13174) where some form validation error messages were
   not ID10N compatible.
-  Fixed a bug (#13401) where field instructions where not hidden when a
   field was.
-  Fixed a bug (#13383) where no error message was displayed when a file
   to translate is not writable.
-  Fixed a bug (#13156) where img width/height attributes could create
   broken image links in the Typography class.
-  Fixed a bug (#13249) where some stats would not update due to overly
   aggressive database caching.
-  Fixed a bug (#13436) where a display error occurred in the Pages
   Module control panel.
-  Fixed a bug (#13444) where a display error occurred on the Edit
   Profile screen when custom member profile fields were present.
-  Fixed a bug (#13467) where a zIndex error made the file manager
   hidden if the publish write mode overlay was in use.
-  Fixed a bug (#13464) where long filenames in the Publish File Browser
   were cutoff.
-  Fixed a bug (#13472) where long paths to the template directory would
   be cut off in global template preferences.

Build 20100720 (additional changes and fixes)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Fixed a bug where the installer produced a javascript error with a
   renamed index file.
-  Fixed a bug where a language key was missing in the admin\_content
   language file.
-  Fixed a bug where deleting a field group did not remove relationships
   to or from those fields.
-  Fixed a bug where emails were sent using the CodeIgniter instead of
   ExpressionEngine as the user agent.
-  Fixed a bug where the show template revisions links were present even
   when template revision were disabled.
-  Fixed bugs (#13135, #13125) where the system directory constant was
   incorrectly set when installing with a renamed system directory.
-  Fixed a bug (#13128) where some sites would show a PHP error on the
   channel preferences page.
-  Fixed a bug (#13161) where the file manager sidebar could not be
   hidden.
-  Fixed a bug (#13150) where channel entry dates were not localized
   correctly.
-  FIxed a bug (#13185) where the upload field of the stand-alone entry
   form did not work in some browsers.
-  Fixed a bug (#13106) where Channel pagination rendered an incorrect
   value for {total\_pages} when on the first page of results.
-  Fixed a bug (#13140) where caches were not being cleared when editing
   Snippets.
-  Fixed a bug (#13129) where uninstalling the Comment Module could
   cause a PHP error when custom layouts exist.
-  Fixed a bug (#13116) where stray fields were left in the database
   when custom fields were deleted.
-  Fixed a bug (#13176) where duplicate templates could be created when
   saving templates as text files and using SQL caching.
-  Fixed a bug (#13234) in the Wiki Moduel where a PHP error could occur
   when pagination was needed.
-  Fixed a bug (#13170) where the installed fieldtype array
   inconsistently defined paths for first party fields.
-  Fixed a bug (#13109) where the jQuery Module incorrectly referenced
   jQuery UI files.
-  Fixed a bug (#13151) where a MySQL error could occur on the
   content\_edit page.
-  Fixed a bug (#13163) where z-index of the publish page file browser
   was less than the write mode modal window.
-  Fixed a bug (#13184) where the Moblog Module would not properly
   create an entry.
-  Fixed a bug (#13203) where a language key was duplicated in the
   content language file.

Build 20100712 (initial release)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  PHP 4 support is deprecated.
-  Updated jQuery to 1.4 and various javascript plugins to their latest
   versions.
-  Added site name to 'from' email in Simple Commerce emails. (#12466)
-  Added additional checks on saved layouts for the publish page to
   ensure proper formatting (see bug #12859).
-  Added a warning if custom field names were greater than 32
   characters, as MySQL would silently truncate the string. (#12920)
-  Added an additional check on the site pages data to prevent possible
   PHP errors that could occur due to malformed data (see #12351).
-  Added checks for duplicate records in the exp\_category\_posts,
   exp\_upload\_no\_access and exp\_message\_folders tables to the 2.0
   updater.
-  Added two variables to the Simple Commerce Module
   ($debug\_incoming\_ipn, $debug\_email\_address) to allow debugging of
   the incoming IPN data.
-  Refined file manager UI that was causing unexpected behavior.(#12212)
-  Refined clickable target area for expand/collapse buttons on the
   publish page (#12324).
-  Altered database caching to occur per site in order to prevent
   conflicts in MSM.
-  Altered the exp\_wiki\_page table to use an empty string as the
   default page namespace.
-  Removed deprecated Display Class.
-  Removed Categories library, Api\_channel\_categories should be used.
-  Removed the Thickbox jQuery plugin. Use the jQuery tools overlay
   instead.
-  Removed reference to the Template Library on the Create New Template
   page.
-  Fixed various bugs (#12587, #11246, #11930) related to quirky
   functionality of the html image buttons.
-  Fixed various bugs (#12504, #12396) related to the display of the
   control panel's pagination numbers.
-  Fixed various bugs (#11256, #12393, #12256) where custom date fields
   did not respect a users localization settings consistently.
-  Fixed a bug where database caches were not always properly cleared.
-  Fixed a bug where frontend member logout did not work correctly
   across all browsers.
-  Fixed a bug in the installer/updater where an error message could
   trigger a PHP error.
-  Fixed a bug where autosaved entry data did not always load properly
   in the Publish form.
-  Fixed a bug where parsing nested arrays with identical keys would
   sometimes result in stray unparsed tags.
-  Fixed a bug on the Content Edit page where the search filter did not
   work properly for custom date ranges.
-  Fixed a bug where a MySQL error could occur when deleting a channel
   and the Comment Module is not installed.
-  Fixed a bug on the channel preferences page, where having no assigned
   category groups could result in a php error.
-  Fixed a bug in Channel Administration where a MySQL error could
   result when no category group was assigned to the channel.
-  Fixed a bug where deleting a channel could result in a PHP error
   resulting in stray records in the exp\_relationships table.
-  Fixed a bug where the CI Profiler would be output on "JavaScript"
   type templates, breaking JS when viewing the front end of the site
   with debugging on.
-  Fixed a bug in the Wiki where filesnames greater than 60 characters
   were allowed to be uploaded, resulting in missing files once the
   names were truncated for the database.
-  Fixed a bug (#12977) where a PHP error occurred on the IP To Nation
   Ban Country page.
-  Fixed a bug (#12457) where invalid tags in commented out code
   triggered template warning.
-  Fixed a bug (#12834) where load\_package\_css() and
   load\_package\_js() did not work in a module's constructor.
-  Fixed a bug (#12507) where the url title prefix was not honored by
   the publish page javascript.
-  Fixed a bug (#12374) where file fields were not saved correctly in
   the standalone entry form.
-  Fixed a bug (#12385) where upload directory formatting properties
   were not included when using the publish page filebrowser.
-  Fixed a bug (#12883) where field settings were not available to
   fieldtypes in the replace\_tag method.
-  Fixed a bug (#12948) where entry comments were not removed if their
   parent entry was deleted.
-  Fixed a bug (#12808) where third party tabs did not have access to
   their package resources.
-  Fixed a bug (#12630) where empty category groups could not be edited
   from the publish page.
-  Fixed a bug (#12013) where tag parameters were not passed to the
   fieldtype correctly.
-  Fixed a bug (#12731) where logged in members without upload
   privileges were not able to view uploaded Wiki images.
-  Fixed a bug (#12884) where smilies could be parsed inside <pre> and
   <code> tags.
-  Fixed a bug (#12267) in the Wiki Module where there were unparsed
   tags when editing a revision.
-  Fixed a bug (#12010) where the show\_pages="only" parameter was
   ignored when no pages exist.
-  Fixed a bug (#12375) where a new entry always had DST set to 'no'.
-  Fixed a bug (#12345) where the Pages tab display on the Publish page
   was not dependent on the module being installed.
-  Fixed a bug (#12373) in the Channel Module where custom category
   field conditionals did not work in the Channel Entries tag.
-  Fixed a bug (#12368) where the Channel Module's heading tags were not
   always consistent with their corresponding entry dates.
-  Fixed a bug (#12505) where custom field conditionals in the Channel
   Module's Category Heading tag did not work properly.
-  Fixed a bug (#12178) where folder permissions were incorrect for
   expressionengine\_info and ee\_version cache folders.
-  Fixed a bug (#12229) in the Channel Module where the require\_entry
   parameter could erroneously result in no results being found when
   both the entry\_id and pagination indicators were in the URL.
-  Fixed a bug (#12706) where unset custom profile field variables were
   not parsed in the custom\_profile\_data tag.
-  Fixed a bug (#12722) in the Search and Replace Tool where the list of
   custom fields by group was incorrect.
-  Fixed a bug (#12704) where checkbox type custom fields that were
   pre-populated had an empty field placeholder option added.
-  Fixed a bug (#12588) where non-member module conditionals were
   stripped from the public\_html template before being parsed.
-  Fixed a bug (#12663) where the View Template Revisions dropdown did
   not work in all browsers by adding a submit button.
-  Fixed a bug (#12733) where the {week\_date} variable was not parsed
   in the channel entries tag.
-  Fixed a bug (#12736) where the Multi Entry Editor never showed 'Allow
   Comments' and 'Make Entry Sticky' to show as checked.
-  Fixed a bug (#12559) in the channel entries tag where member
   variables were not parsed if left NULL.
-  Fixed a bug (#12767) where permitted channels were not present in the
   channel dropdown on the Publish/Edit pages.
-  Fixed a bug (#12428) in the Metaweblog API Module where the custom
   field select options did not properly reflect the chosen channel.
-  Fixed a bug (#12601) where the Date Range selection on the Content
   Edit page was unclear.
-  Fixed a bug (#12383) where deleting a tab in a saved layout could
   result in a custom field being erroneously dropped from the layout in
   certain browsers.
-  Fixed a bug (#12797) in the Next/Previous Entry Linking where a PHP
   error could when the categories parameter was specified.
-  Fixed a bug where Database SQL Query Caching was never enabled,
   regardless of the setting.
-  Fixed a bug where edited images could not always be saved on Windows
   servers.
-  Fixed a bug (#12878) where the Simple Commerce Module erroneously
   required that the Purchase Identification Number (TXN ID) be numeric.
-  Fixed a bug (#12351) in the Pages Module where a PHP error could
   occur on the module configuration page when channels existed but no
   template groups had been created.
-  Fixed a bug where the Daylight Savings Time setting in the Control
   Panel always shows as 'yes' regardless of the individual's setting.
-  Fixed a bug (#12788) where autosaved publish data for file fields
   could have the wrong file upload folder associated with the image.
-  Fixed a bug (#12436) where Forum Administrators were allowed to edit
   and delete posts by Superadmins.
-  Fixed a bug (#12730) in the custom layouts where you could not re-add
   a tab that had been deleted without saving the layout first.
-  Fixed a bug (#9540) where MySQL column data types were not altered
   when selecting a Numeric or Integer text field.
-  Fixed a bug (#12348) where MySQL data types were not consistently
   altered in the creation/edit of member custom fields.
-  Fixed a bug (#12372) where a limit of 0 on a Channel Entries tag
   would produce a PHP error.
-  Fixed a bug (#12406) where the maxlength input attribute did not
   properly appear on custom member profile text inputs.
-  Fixed a bug (#12449) where a typographical error caused a PHP error
   on the publish page.
-  Fixed a bug (#12456) where a language key was missing on the
   illegal\_characters fatal error when category groups are created.
-  Fixed a bug (#12474) where members without access to Fieldtypes would
   still have a navigation option for fieldtypes.
-  Fixed a bug (#12562) where a fatal PHP error was encountered when
   attempting to load the Blogger API module.
-  Fixed a bug (#12526) where a PHP error could occur on a Stand-Alone
   Entry Form submission.
-  Fixed a bug (#12626) where when installing a module, the success
   message would link to module control panels that did not exist.
-  Fixed a bug (#12510) where third party modules could not load models
   in uninstall methods in the upd file.
-  Fixed a bug (#12617) where a display error occurred on the CP Search
   Results page in the Default & Fruit Themes.
-  Fixed a bug (#12468) where a fatal error occurred on the mobile theme
   publish page.
-  Fixed a bug (#12558) where a PHP error occurred when using template
   caching.
-  Fixed a bug (#12687) where a default value was not selected on the
   clear caches page.
-  Fixed a bug (#12629) where deleting a custom field group would not
   remove all field columns in the channel\_data table.
-  Fixed a bug (#12346) where CSS template calls would count towards
   throttling checks.
-  Fixed a bug (#12718) where XSS Checks on image uploads would produce
   a PHP error.
-  Fixed a bug (#12734) where a MySQL error would occur when using the
   search and replace tool.
-  Fixed a bug (#12453) where the comment expiration date field would
   display on the publish page when commenting was disabled for the
   channel.
-  Fixed a bug (#12367) where ExpressionEngine.com could not be pinged
   on entry submission.
-  Fixed a bug (#12765) where a spelling error occurred on the custom
   field pages.
-  Fixed a bug (#12644) where CP textareas displayed with serif fonts.
-  Fixed a bug (#12693) where [img] tags were malforming urls with
   spaces in the file names.
-  Fixed a bug (#12777) where the dialog 'close' button would produce a
   javascript error on the add author dialog.
-  Fixed a bug (#9417) where hidden templates are not a lower opacity in
   the template manager.
-  Fixed a bug (#12467) where a display error could occur upon prefs
   submission in the Simple Commerce Module.
-  Fixed a bug (#12509) where a PHP error could occur when Automatically
   Convert High ASCII Text to Entities is set to 'yes'.
-  Fixed a bug (#12519) where a PHP error would occur when the publish
   page admin toolbar is exposed and the entry autosaves.
-  Fixed a bug (#12393) where date fields would populate with incorrect
   dates when using autosaved data.
-  Fixed a bug (#12746) where setting the form class & id on the Comment
   Form did not properly function.
-  Fixed a bug (#12478) where a thumbnail was missing from the front
   page of the publish page file manager.
-  Fixed a bug (#12408) where case sensitive databases would not
   properly look up Stand Alone Entry Form action ids.
-  Fixed a bug (#12837) where member imports could fail due to max
   username/password fields not being consistent with database settings.
-  Fixed a bug (#12830) where a super administrator is improperly
   redirected following editing a members email settings.
-  Fixed a bug (#12829) where the admin\_content language file was not
   loaded prior to checking for illegal characters in field group names.
-  Fixed a bug (#12819) where an incorrect language variable was used
   when a member does not have permission to view the email cache.
-  Fixed a bug (#12789) where a PHP error would occur sending emails
   from the communicate tool to member groups not allowed to be in
   mailing lists.
-  Fixed a bug (#12828) where the number of emails sent in the
   communicate tab would be incorrect.
-  Fixed a bug (#11152) where the File Manager rotate function would
   fail.
-  Fixed a bug (#12816) where the publish page file manager would be
   hidden if opened while in write mode.
-  Fixed a bug (#12018) where a malformed ExpressionEngine tag inside an
   entry would cause an error.
-  Fixed a bug (#12926) where the forgot password form had a maxlength
   of 32 characters. Increased to 80.
-  Fixed a bug (#12622) where a MySQL error would occur when editing an
   entry with autosaved data after making changes to fieldtypes.
-  Fixed a bug (#12831) where the 'edit categories' link was present on
   the publish page to member groups who do not have permission to edit
   categories.
-  Fixed a bug (#12909) where moblog check would result in
   'unathorized\_for\_this\_channel' errors.

Version 2.0.2 Public Beta
-------------------------

Release Date: April 15, 2010

Build 20100430 (additional changes and fixes)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Removed \_to\_be\_replaced/lib.upload.php.
-  Removed system/expressionengine/config/CI\_mimes.php file.
-  Deprecated \_to\_be\_replaced/lib.image\_lib.php.
-  Added post\_save\_settings() method to the Fieldtype Api.
-  Added the ability to define multiple parsing functions in fieldtypes.
-  Applied the user selected date formatting to the jquery date picker.
-  Made the PATH\_THIRD constant available in the installer.
-  Modified the File Manager to no longer display sub folders.
-  Changed the category delete confirmation text to be less confusing
   (#12166).
-  Modified show\_error() to be ajax aware, it will now only return the
   error message.
-  Optimized the Channel module's parsing of reverse related entries to
   reduce memory consumption.
-  Altered error message behavior when a user attempts to post in a
   channel they are not authorized for. (#12164)
-  Fixed a bug on the field edit page, where save\_settings() did not
   receive the documented parameter data.
-  Fixed a bug in the Template Preferences Manager where a PHP error
   could result when saving templates as files was not allowed.
-  Fixed a bug in the File Manager where sorting by file size was not
   working correctly.
-  Fixed a bug (#12179, #12201) where the reported APP\_VER constant was
   formatted incorrectly on new installations.
-  Fixed a bug (#12168) where the entry date was localized twice when
   repopulating the field on edit.
-  Fixed a bug (#12234) where users needed access to the category admin
   pages to edit categories from the publish page.
-  Fixed a bug (#12216) where PHP errors could occur after submitting
   the Stand Alone Entry Form.
-  Fixed a bug (#12151) where XML-RPC responses could result in a PHP
   error.
-  Fixed a bug (#12163) where frontend member registration did not
   default to the proper localization settings.
-  Fixed a bug (#12186) where Pages with no trailing slash were not
   shown on the frontend.
-  Fixed a bug (#12204) where deleting an entry with no assigned group,
   or an assigned group but no fields, resulted in a PHP error.
-  Fixed a bug (#12213) where installing/uninstalling the Comments
   module did not properly sync the comment fields on the publish page
   to saved layouts.
-  Fixed a bug (#12176) with saved publish layouts where two publish
   tabs with the same name could accidentally be created when adding
   fields.
-  Fixed a bug (#12181) in the template manager where access restriction
   settings did not always show the correct selected state.
-  Fixed a bug (#12260) where the member search filter did not always
   function properly and added a default 'All' filter.
-  Fixed a bug (#12253) where the Simple Commerce module did not send
   Administrator emails properly.
-  Fixed a bug (#12332) on the Content Edit page where the category and
   status dropdowns did not change in concert with the channel
   selection.
-  Fixed a bug (#12207) where a database error could occur when visiting
   HTML Buttons in My Account.
-  Fixed a bug (#12199) where the 'new\_version\_notice' language
   variable in lang.homepage.php has \\n in a single quoted string.
-  Fixed a bug (#12177) where adding default HTML button redirects to
   File Upload Preferences.
-  Fixed a bug (#12228) where a MySQL error would occur when changing a
   Screen Name in My Account when the Comment Module was not installed.
-  Fixed a bug (#12230) where the Fieldtypes page had incorrect bread
   crumb navigation.
-  Fixed a bug (#12255) where Logs incorrectly displayed minutes as the
   month.
-  Fixed a bug (#12276) where a javascript error on the advanced search
   form prevented the category multi-selects from changing.
-  Fixed a bug (#12284) where Simple Commerce settings would not
   properly save or update.
-  Fixed a bug (#12296) where a language key was missing in when publish
   ping errors occurred.
-  Fixed a bug (#12124) where conditionals in member templates result in
   a PHP error.
-  Fixed a bug (#12318) where a MySQL error would occur when updating
   member profiles if the comments module was not installed.
-  Fixed a bug (#12309) where a PHP error would occur on the edit ignore
   list member page when accept messages was off.
-  Fixed a bug (#11244) where the Stand Alone Entry Form's file upload
   was not functional.

Build 20100415 (initial release)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  **Developers:** Added form\_class and form\_id class properties to
   the Template Library.
-  **Developers:** Added original redirect location to the
   entry\_submission\_redirect hook. (#11919)
-  Added additional results to control panel search. (#11448)
-  Added error checking when loading module tab files. (#11664)
-  Added default custom field settings to the Agile Records Installer.
-  Added ability to edit the email subject in Control Panel generated
   emails. (#11540)
-  Added the channel\_entries\_query\_result and channel\_entries\_row
   hooks to the channel module.
-  Added form class and id parameters to contact, tell-a-friend, simple
   and advanced search, stand alone entry form, comment, mailing list
   forms.
-  Added missing language keys on publish page.
-  Added a check for required fields when saving custom layouts for the
   publish page.
-  Added a {exp:pages:load_site_pages} tag to the :doc:`/modules/pages/index`
   for use with the Multiple Site Manager.
-  Added a class variable to the xmlrpc library to increase consistency
   between the Metaweblog/Blogger modules and publishing using the
   control panel.
-  Added 'Site Name' $assign\_to\_config variable in index.php to assist
   in site setup under the Multiple Site Manager.
-  Updated IP to Nation module database, incrementing to v2.2.
-  Improved the blacklist IP check to be more specific in its matching.
-  Enhanced Password Lockout feature, improving protection against brute
   force attacks (hat tip to Jim at `Transmodern
   Media <http://transmodern.net/>`_)
-  Altered the email field in the member table to 72 characters,
   consistent with the RFC2822 recommended header line limit.
-  Deprecated the 'Enable Image Resizing' global channel configuration
   item. (#11861)
-  Removed unused cp\_page\_id variable from control panel controllers.
-  Removed new line characters from Encoded Email inline javascript.
   (#11991)
-  Removed the word "hell" from the captcha dictionary.
-  Removed the Publish Page Customization option for the channel
   adminstration area due to redundancy. This also resolved a bug where
   removing fields through the administration page could cause PHP
   errors when custom layouts were in use (#11523) and (#11513).
-  Changed behavior of the Control Panel Timeout reminder. (#11632)
-  Changed behavior in publish autosave so error messages did not
   continue to repeat when missing required fields. (#11881)
-  Fixed various bugs relating to editing categories from the publish
   screen (#10168, #11329, #10740).
-  Fixed a language variable (#11978) in the member module.
-  Fixed a request to a non-existent image in the file manager.
-  Fixed a php error in the 200 installer when 1.x templates were saved
   as files.
-  Fixed a rare bug in the conditional parser that could cause an
   T\_CONSTANT\_ENCAPSED\_STRING error.
-  Fixed a number of bugs in the default date fields (#11797, #12013).
-  Fixed a number of related custom layout bugs that could result in PHP
   errors (#11512) or an inability to access fields (#11040).
-  Fixed a PHP Strict Standards Error in the index.php files.
-  Fixed a bug introduced in build 20100121 where under PHP4 using
   certain extension hooks would result in PHP errors.
-  Fixed a bug in the Simple Commerce Module where the default path to
   the encryption folder was incorrectly processed.
-  Fixed a bug on the publish page (#12066) where certain custom fields
   (selects, radios, checkboxes) would not properly show the selected
   value when it had special characters in it.
-  Fixed a bug where a message was not displayed when activating new
   members.
-  Fixed a bug where a PHP error resulted when unsubscribing from
   comment notification.
-  Fixed a bug where a PHP notice could occur with Checkbox Fieldtypes
   under certain conditions.
-  Fixed a bug where a PHP notice could occur on the extensions page if
   no extensions are loaded.
-  Fixed a bug where a language key was missing on the Member Profile
   Templates Design page.
-  Fixed a bug where a large number of members could cause content
   truncation on the publish page when logged in as a super
   administrator.
-  Fixed a bug where the Package Path was being improperly set for
   Accessories in some cases.
-  Fixed a bug where the homepage "create a page" link would be shown
   with the pages module uninstalled.
-  Fixed a bug where the Stand-Alone Entry Form's DST option did not
   default based on the user's DST setting.
-  Fixed a bug where the spellcheck/glossary/smiley/writemode buttons
   would show below a publish textarea when the field was collapsed.
-  Fixed a bug where relationship field types were not updated to
   channel nomenclature, which could lead to {REL...marker} output.
-  Fixed a bug where some publish form fields would not properly
   populate when loaded from autosaved data.
-  Fixed a bug where file modification time was not correctly read on
   Windows servers.
-  Fixed a bug where proper category privileges were not assigned when
   creating a new member group as a clone of the Super Admin member
   group.
-  Fixed a bug where date variables without formatting were not being
   output.
-  Fixed a bug (#11549) CSS Bugs on Member Preferences Page.
-  Fixed a bug (#12094) where Wiki moderation email links were
   incorrect.
-  Fixed a bug (#12111) where Wiki link creation did not always use the
   specified case.
-  Fixed a bug (#12121) where when editing a members HTML buttons as a
   super admin, the super admin users html buttons would be updated.
-  Fixed a bug (#12017) where deleting purchases in the Simple Commerce
   module resulted in a PHP error.
-  Fixed a bug (#12123) where an empty parameter on channel:entries
   fixed\_order would create a MySQL error.
-  Fixed a bug (#12062) where dynamic filtering on the Content Edit page
   would fail in Internet Explorer.
-  Fixed a bug (#9354) where image thumbnails were not remade following
   the editing of an original image.
-  Fixed a bug (#9080) where setting templates to not save as text files
   in the template preferences manager did not remove the corresponding
   text file.
-  Fixed a bug (#9611) where the 2.00 upgrade did not default to English
   when unable to retrieve the language setting from the 1.6
   configuration settings.
-  Fixed a bug (#10518) where the create a new custom field page had a
   PHP error when channels existed that had no custom fields.
-  Fixed a bug (#12078) where 404 templates with embeds would not
   properly parse if redirected to from a channel entries tag.
-  Fixed a bug (#11115) where pre tags in "safe HTML" would not properly
   render.
-  Fixed a bug (#12036) where PHP errors would occur on the Accessories
   page when more than 4 Member Groups have access to the Control Panel.
-  Fixed a bug (#11439) where the ordering by add-on name in the Add-on
   main pages was inconsistent.
-  Fixed a bug (#11488) where the mailing list template editor's email
   message field was encoded.
-  Fixed a bug (#11504) where saved layouts could have invalid
   characters added, breaking the layouts.
-  Fixed a bug (#11651) where the comment expiration setting in the
   channel preferences did not properly update existing entries when
   reset to zero.
-  Fixed a bug (#11660) where file field data was lost if form
   validation failed.
-  Fixed a bug (#11711) where the notify authors of comments option was
   missing from the channel preferences page.
-  Fixed a bug (#11718) where adding forums to some categories of a
   non-default board would fail.
-  Fixed a bug (#11732) where the live look link did not show on the
   content edit page.
-  Fixed a bug (#11772) where third party fields could erroneously be
   treated as core fields on entry submission, resulting in a MySQL
   error.
-  Fixed a bug (#11774) where an improper check for existing classes
   could cause a PHP error when submitting an entry.
-  Fixed a bug (#11789) where changing the default index page resulted
   in an undefined index error.
-  Fixed a bug (#11798) where the publish page autosave did not properly
   handle all fields.
-  Fixed a bug (#11985) where misssing language files did not always
   revert to using the default files instead of showing an error.
-  Fixed a bug (#11577) where sessions extension hooks that did not
   exist would trigger PHP errors while trying to parse the error
   message.
-  Fixed a bug (#11568) where the time format for Member XML Import
   would not change from "European format".
-  Fixed a bug (#11527) where escaped characters were removed when
   saving templates as files, and php errors could occur.
-  Fixed a bug (#11594) where an incorrect page title was set when
   submitting the reset password form.
-  Fixed a bug (#11622) where the phrase search was not able to be
   translated in the sidebar.
-  Fixed a bug (#11570) where textareas on the publish page marked with
   right to left text did not allow right to left text.
-  Fixed a bug (#11634) where the Corporate Theme Simple Commerce
   Module, Add Item pages submit button rendered incorrectly.
-  Fixed a bug (#11630) where class collision caused errors when using
   the jQuery module.
-  Fixed a bug (#11680) where snippet names were not checked to ensure
   they were not reserved words.
-  Fixed a bug (#11730) where a MySQL error could occur when uploading a
   Private Message Attachment.
-  Fixed a bug (#11708) where a Fatal PHP Error was encountered when
   uploading a Private Message Attachment.
-  Fixed a bug (#12126) where a language key was missing in the Simple
   Commerce Module's "Add Purchase" Page.
-  Fixed a bug (#11120) where member list pagination did not properly
   function.
-  Fixed a bug (#11435) where uninstalling a fieldtype resulted in a PHP
   error.
-  Fixed a bug (#11831) where a PHP error occurred in the Search Module,
   Advanced Search.
-  Fixed a bug (#11830) where trailing slashes were inserted into URLs
   on the search module and {comment\_url\_title\_auto\_path} in the
   channel calendar.
-  Fixed a bug (#11792) where the addons language file was missing a
   language key for 'fieldtype'.
-  Fixed a bug (#11515) where logout modals did not function properly in
   Internet Explorer.
-  Fixed a bug (#11866) where feed templates did display properly in
   template preferences dropdown on the template edit page.
-  Fixed a bug (#11810) where the autosave message could be confusing to
   an end user.
-  Fixed a bug (#11870) where changing a members password or username in
   the control panel could result in a PHP error.
-  Fixed a bug (#11199) where exported templates resulted in file dates
   in the past.
-  Fixed a bug (#11703) where an invalid field type would lead to a
   fatal PHP error.
-  Fixed a bug (#11912) where the max-length setting on text input
   custom fields were ignored on the publish page.
-  Fixed a bug (#11936) where case sensitivity was forcing the renaming
   of a template group to fail form validation in some cases.
-  Fixed a bug (#11840) where checkbox fieldtypes would not properly
   update when an entry was edited.
-  Fixed a bug (#11655) where image uploading on the publish page would
   not convert file name to lowercase.
-  Fixed a bug (#11618) where index.php was hard-coded into the forgot
   password url, breaking the forgot password link if the system folder
   is installed above the web root.
-  Fixed a bug (#11702) where php errors could occur if all settings
   array variables were not passed to checkboxes and radio fieldtypes in
   third-party addons.
-  Fixed a bug (#11471) where no user selected when clicking member from
   "Blocked List".
-  Fixed a bug (#11319) where alert notification icons were not
   rendering properly in WebKit browsers.
-  Fixed a bug (#11452) where the writemode button appeared even if
   turned off in the custom field preference.
-  Fixed a bug (#11475) where no\_related\_entries and
   no\_reverse\_related\_entries conditionals with opening and ending
   tags on the same line were not properly parsed.
-  Fixed a bug (#11474) where action requests coming from module control
   panel files were not properly loaded, resulting in "The action you
   have requested is invalid." errors.
-  Fixed a bug (#11502) where the PayPal IPN Link was not clickable, and
   linked to an old page on the PayPal website.
-  Fixed a bug (#11507\|#11627) where selecting a template group to be
   the home page for a site did not deselect the previous site home
   page.
-  Fixed a bug (#11511) where Search Term Log linked to member has
   member\_id instead of id.
-  Fixed a bug (#11522) where snippets could not be changed between all
   or a single site when running the Multiple Site Manager.
-  Fixed a bug (#11560) where setting the publish autosave interval to 0
   would automatically reset the value to 60, or 1 minute.
-  Fixed a bug (#11901) where an unselected dropdown field could trigger
   a validation warning when not required.
-  Fixed a bug (#11945) where spaces were converted to underscores in
   custom publish page tabs.
-  Fixed a bug (#11956) where rendered source code on category archive
   tag did not have newlines in proper locations.
-  Fixed a bug (#11960) where member avatar, photo & signatures were not
   properly parsed using the member:custom\_profile\_data tags.
-  Fixed a bug (#11973) where a PHP Fatal Error could occur when using
   the jQuery module.
-  Fixed a bug (#11773) in the third party tabs where publish\_tabs()
   was not always passed the correct arguments.
-  Fixed a bug (#11482) in the RSS module where the empty\_feed
   conditional would not properly parse if the opening and ending tags
   were on the same line.
-  Fixed a bug (#12025) where an undefined constant PHP Error could
   exist on member pages.
-  Fixed a bug (#12064) where loading jQuery UI effects via the jQuery
   module would fail.
-  Fixed a bug (#11639) where deleting entries in the Metaweblog API
   Module would fail.
-  Fixed a bug (#12061) where an error in the jQuery UI CSS files would
   lead to invalid CSS.
-  Fixed a bug (#12070) where the path to ImageMagick binaries were not
   properly passed to the image libraries, producing an error when
   manipulating images.
-  Fixed a bug (#11566) where the publish page file browser did not
   correctly insert images into text inputs.
-  Fixed a bug (#12075) where sending empty arrays to
   $TMPL->parse\_variables() would cause a PHP error.
-  Fixed a bug (#12056) where the content edit page did not properly
   sort if the comment column was not shown.

Version 2.0.1 Public Beta
-------------------------

Release Date: January 21, 2010

Build 20100215 (additional changes and fixes)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Added a warning if the control panel session has timed out, allowing
   the user to log back in and prevent data loss (#11167).
-  Change to login procedure to redirect to page requested in the
   browser address bar upon successful login.
-  Changed Checkbox Fieldtype to allow for text format overrides on the
   publish page (#10578).
-  Fixed a bug (#10943) where the {weblog} tag was not replaced with
   {channel} in saved templates.
-  Fixed a bug (#10763) where the content edit page ignored channel
   access privileges.
-  Fixed a missing language key (#11062) and trimmed white space from
   emails on the new member registration form.
-  Fixed a bug (#11195) where a typographical error in the comments
   table name resulted in a MySQL error.
-  Fixed a bug (#11192) in custom member field editing where some fields
   did not reflect their correct saved state.
-  Fixed a bug (#11198) where the EE Info Accessory was not caching the
   current version and build number.
-  Fixed a bug (#11203) where snippets were not parsed in the Wiki
   Module themes.
-  Fixed a bug (#11190) where Custom Member Fields that were textareas
   did not have the correct CSS class applied in the control panel.
-  Fixed a missing language key in admin\_content.
-  Changed wording in installer if the database configuration file is
   not writeable. (#11178)
-  Fixed a bug (#11196) where a PHP would occur in the Template Manager
   if no templates existed.
-  Fixed a bug (#11141) caused by a PHP 5.2.1 bug (#40705) where a PHP
   error would occur in the control panel if comments existed.
-  Fixed a bug (#11229) where a PHP error would occur when updating
   member Username/Password when the Discussion Forum is installed.
-  Fixed a bug (#11216) where a MySQL error would occur when deleting a
   channel with the comments module not installed.
-  Fixed a bug (#11212) where the EE Form Helper was not adding proper
   enctype and method attributes to file upload form declarations.
-  Fixed a bug (#11237) where legacy upload library more than once would
   lead to PHP errors.
-  Fixed a bug (#11225) where removing a publish page layout did not
   work.
-  Fixed a bug (#11171) where Upload Directory URL was not marked as
   required on the Preference Page.
-  Fixed a spelling error in the ExpressionEngine Info Accessory
   (#11241).
-  Fixed a bug (#11211) where there channel parameters custom\_fields
   and member\_data, used with related\_categories\_mode, did not always
   work.
-  Fixed a bug (#11032) where the moblog module would incorrectly munge
   all nested tags.
-  Fixed a bug (#11259) where the Add Author modal on the publish page
   would render incorrectly in Safari.
-  Fixed a bug (#11248) where reverse related entries only showed open
   status entries, regardless of the status parameter.
-  Fixed a bug (#11156) where if the username or password did not meet
   admin defined minimum length, a blank screen could occur when logging
   in.
-  Fixed a bug where the user was not redirected back to the login
   screen when changing their password in My Account.
-  Fixed a bug (#10192) where the File Manager's Help link was a 404
   error.
-  Fixed a bug (#9581) where if a Metaweblog API client did not send a
   status to ExpressionEngine, the default status of the post will be
   NULL.
-  Fixed a bug (#10698) where the sidebar show/hide animation caused the
   content to jump in non-webkit browsers.
-  Fixed a bug (#11272) where comments might not be shown when
   url\_titles were identical across channels and the channel parameter
   was specified.
-  Fixed a bug (#10775) where the category dropdown was not properly
   populated on the edit page when there was a single category.
-  Fixed a bug (#11073) on the edit page ajax search when the server
   default charset is not UTF-8
-  Fixed a bug (#11283) where a PHP error would occur sending an email
   to a member group with an attachment.
-  Fixed a bug where a MySQL error would occur when updating a members
   email when the comments module is not installed.
-  Fixed a bug (#11285) where MSM Global Variables were not parsing
   correctly.
-  Fixed a bug (#11217) where templates groups beginning with non-alpha
   numeric characters were permitted to be made via the template syncing
   tool.
-  Fixed a bug (#11117) where there was invalid HTML on the installer
   templates.
-  Fixed a bug (#11292) where populating a select dropdown from another
   field could result in a PHP error.
-  Fixed a bug (#11296) where renaming a newly created field group would
   sometimes trigger a MySQL error.
-  Fixed a bug (#10893) where a channel with no status group assignment
   would display all statuses when publishing an entry.
-  Fixed a bug (#11309) where an incorrect avatar folder path could
   result in a PHP error.
-  Fixed a bug (#11317) where the error icon on the login page was
   referencing a missing image.
-  Fixed a bug where the find and replace utility was not clickable.
-  Fixed a bug (#11323) where Control Panel Logs were displayed in
   Ascending Order.
-  Fixed a bug where external Control Panel Quick Links were not opening
   in new windows.
-  Fixed a bug (#11310) where the Pages Tab on the Publish Screen was
   not configurable in Channel Preferences.
-  Fixed a bug (#11207) where the Magpie plugin did not correctly handle
   the port of a redirect response.
-  Fixed a bug (#11333) where the path to jQuery UI css was incorrect
   under the Multiple Site Manager.
-  Fixed a bug (#11282) where Tools Logs lacked pagination.
-  Fixed a bug (#11324) where debugging code was present in the
   Accessory Installer.
-  Fixed a bug (#10792) where the revisions tab for entry versioning was
   not displayed.
-  Fixed a bug in the control panel where viewing subscriptions resulted
   in a PHP error.
-  Fixed a bug (#11348) where the template type for feed templates was
   not set correctly.
-  Fixed a bug (#10868) where duplicate templates could be created when
   saving templates as text files.
-  Fixed a bug (#11350) where member profile conditionals were not
   properly parsing.
-  Fixed a bug (#11337) where the template preferences manager only
   opened the template select fields on click events.
-  Fixed a bug (#11321) where flashdata notifications with inline colors
   were not displayed in Firefox 3.6.
-  Fixed a bug (#11365) where access to the Pages Module on the CP Home
   Page was not respecting member group preferences.
-  Fixed a bug (#11336) where navigation tabs did not stay at an active
   state when hovering on dropdown in the Corporate Theme.
-  Fixed a bug (#11134) where some of the parsing helper methods did not
   prep all conditionals.
-  Fixed a bug (#11206) where the custom field edit page was not showing
   the field formatting option for some fields, and the setting was not
   sticking.
-  Fixed a bug (#11406) where the category editor was not limiting the
   available categories per site.
-  Fixed a bug (#11379) where a MySQL error would occur in the Stats
   Module.
-  Fixed a bug (#11400) where no page title was present after a user
   reset their password.
-  Fixed a bug (#11398) where total comments were set to 0 after recount
   stats was run.
-  Fixed a bug (#11234) where javascript errors in Internet Explorer
   rendered the Control Panel unusable
-  Fixed a bug (#11405) where Channel Management Publish Page
   Customizations would not accurately display on the publish page.
-  Fixed a bug (#11246) where the file browser would not properly insert
   files when triggered from under the publish field.
-  Fixed a bug where the channel info tag's {channel\_encoding} tag was
   not properly replaced.
-  Fixed a bug (#10903) where links tags entered in the translation tool
   translated HTML Characters to Entities.
-  Fixed a bug where a PHP error could result when performing Recount
   Statistics when the Forum Module is installed.
-  Fixed a bug (#10979) where bad system paths in some config items
   could render the control panel unusable.
-  Fixed a bug (#11425) where when altering a members Photo or Avatar as
   a Super Administrator would redirect to the Super Admin's profile
   page, not the profile of the user being edited.
-  Fixed a bug (#11307) where layouts save in Google Chrome did not
   order fields correctly.
-  Fixed a bug (#11429) where changing a template name did not update
   the template view link.
-  Fixed a bug (#9792) where the wiki was not consistently treating urls
   in a case insensitive manner.
-  Altered File Manager upload behavior to convert accented characters
   in filenames to ensure cross-browser support. (#10862)
-  Optimized javascript loading on template manager to mitigate flicker
   of the jQuery UI Accordion as the DOM loads. (#11427)
-  Fixed a bug (#10876) where file uploads on the publish page ignored
   the site thumbnail prefix.
-  Added conditional parsing for the total\_pages variable inside
   {paginate} tags.
-  **Developers:** Deprecated layout functions in the cp library.
   Relocating to the Layout Library, but retained in the CP class for
   backwards compatibility.
-  **Developers:** Added tablesorter plugin to the global javascript,
   you no longer need to load it explicitly.
-  **Developers:** Added delete() and post\_save() methods to the custom
   field api.

Build 20100121 (initial release)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Modified control panel notifications to be less intrusive.
-  Updated send\_ajax\_response to json encode arrays and correctly
   convert native data types to their javascript equivalents.
-  Added new ExpressionEngine version notice to CP Homepage.
-  Added template export feature in the Template Manager.
-  Renamed the 'option\_group' fieldtype to 'checkboxes' for clarity.
-  Increased the allowed length for fieldtype names.
-  Removed help pages, which were deprecated in leu of per-page help
   links.
-  Updated Wiki Module Preferences styling.
-  Added missing styles to the memberlist page to bring it more in line
   with the styles of the default theme.
-  When using rotate or flip from the File Manager, manual submission is
   now disabled, and the tool ensures the form gets submitted.
-  Removed specialty templates that were leftovers from 1.x (#11128).
-  Changed system configuration variable method\_trigger to
   function\_trigger, consistent with CI.
-  Added additional XML validation into member import (per #9669).
-  Added a language key into communicate for "View Previously Sent Email" and "Add" in the Nav Menu (bug #10739).
-  Removed unneeded "files" tool from the admin sidebar of publish (#9985).
-  Reverted an earlier bugfix that was creating more problems than it fixed ("Fixed a bug with conditionals that would result in a PHP error when a variable used does not exist, but part of that variable's name does, e.g. foo\_bar is not a valid variable, but foo is.")
-  Changed the behaviour of url\_title to mimic EE1, where it will be automatically inserted if inserted blank for a new entry (#10889 \| #10644).
-  Fixed some code that was incompatible with PHP4 in the Channel SAEF, Moblog, and MetaWeblog API modules. This also resolves an issue with these modules not working with the Trial version.
-  Added a language key into communicate for "View Previously Sent
   Email" and "Add" in the Nav Menu (bug #10739).
-  Removed unneeded "files" tool from the admin sidebar of publish
   (#9985).
-  Reverted an earlier bugfix that was creating more problems than it
   fixed:

      -  Fixed a bug with conditionals that would result in a PHP error
         when a variable used does not exist, but part of that variable's
         name does, e.g. foo\_bar is not a valid variable, but foo is.

-  Changed the behaviour of url\_title to mimic EE1, where it will be
   automatically inserted if inserted blank for a new entry (#10889 \|
   #10644).
-  Fixed some code that was incompatible with PHP4 in the Channel SAEF,
   Moblog, and MetaWeblog API modules. This also resolves an issue with
   these modules not working with the Trial version.
-  Fixed a bug where adding an HTML button would result in 404 error.
-  Fixed a bug in the XML Member Import where the default member group
   was option was being nullified.
-  Fixed a bug where if a member was moved to another group before
   completing self-activation, the self-activation process would still
   move them from Pending to Members
-  Fixed a bug where viewing subscriptions in My Account would result in
   a MySQL error if the comments module was not installed.
-  Fixed a bug where the Agile Records site theme's email contact form
   used 'email' instead of 'from' for the 'Your email' field
   (about/contact template).
-  Fixed a bug where a PHP error could occur on the content edit page
   when no statuses existed.
-  Fixed a bug where PHP errors were present when adding an item in the
   Simple Commerce Module.
-  Fixed a bug preventing MetaWeblog API from being able to post new
   entries in some cases.
-  Fixed a bug in the XML-RPC library causing the MetaWeblog API to send
   empty fields as the word "Array" rather than an empty string.
-  Fixed a bug where the sticky parameter was being ignored in the
   channel entries tag.
-  Fixed a bug where the word weblog was not replaced with channel in
   Specialty Templates.
-  Fixed bugs (#10902, #11005) where some CSS rules where affecting
   translation keys unintentionally.
-  Fixed bugs (#10710 / #10215) where Learning EE Accessory contained
   broken links.
-  Fixed a bug (#10684) where pings sent when publishing could generate
   a PHP error.
-  Fixed a bug (#10681) where non-images uploaded from the file custom
   field type could load broken thumbnail previews.
-  Fixed a bug (#10680) where the icon for "image" in the html button
   bar was missing in the corporate theme.
-  Fixed a bug (#10678) where deleting a member generated PHP errors if
   the comment module wasn't installed.
-  Fixed a bug (#10654) where the themes folder was required to be set
   with permissions of 777 in order to update site preferences.
-  Fixed a bug (#10637) where viewing member subscriptions resulted in a
   PHP error when forum module was enabled.
-  Fixed a bug (#10652) where pages generated from the Pages module
   would trigger a 404 error.
-  Fixed a bug (#10162) where EE Info Accessory was not reporting the
   correct version/build of EE 2.0.
-  Fixed a bug (#10650) where simple search pagination would result in a
   MySQL error.
-  Fixed a bug (#10661) where custom category fields in the Category
   Heading tag would not correctly render.
-  Fixed a bug (#10665) where the mobile theme could be chosen as a CP
   Theme for the desktop.
-  Fixed a bug (#9808) where a link to the documentation was missing
   from the Template Preferences Manager.
-  Fixed a bug (#10239) where the Template Preferences Manager was not
   displaying correctly in all browsers.
-  Fixed a bug (#10704) where item edit in the Simple Commerce Module is
   not being properly displayed.
-  Fixed a bug (#10721) where editing a member profile as a Super Admin
   would not return the user to said profile upon form submission.
-  Fixed a bug (#10719) where publish tabs would render incorrectly for
   non-super admins.
-  Fixed a bug (#10725) where templates protected with HTTP Auth were
   not properly indicated in the Template Manager.
-  Fixed a bug (#10738) submitting the contact form triggered in a PHP
   error.
-  Fixed a bug (#10724) where thumbnails generated when uploading an
   image on the publish page had their dimensions over-ridden.
-  Fixed a bug (#10740) where members with only access to edit
   categories could not edit categories on the publish page.
-  Fixed a bug (#10756) where clicking the "Create New Page" link on the
   homepage would not load.
-  Fixed a bug (#10749) where having comment images disabled could lead
   to a PHP error in certain situations.
-  Fixed a bug (#10748) where the Pages URI in the Pages Publish Tab
   would empty on focus when a valid Pages URI was present.
-  Fixed a bug (#10752) where updating field formatting options would
   not update for existing entries.
-  Fixed a bug (#10737) where the return link following sending an email
   did not contain a slash between index.php and the template group
   name.
-  Fixed a bug (#10735) where default textarea formatting options were
   not updated on the publish page when changed in the field
   preferences.
-  Fixed a bug (#10750) where comment deleting after dynamic filtering
   led to a 404 error.
-  Fixed a bug (#9546) where template names were allowed to contain
   slashes.
-  Fixed a bug (#9415) where multiple selections for user/administrator
   groups in the wiki preferences could not be made.
-  Fixed a bug (#9060) where a user with no channels assigned to the
   member group could not edit their HTML buttons.
-  Fixed a bug (#10789) where the name of the Template creator wasn't
   saved correctly when creating new Templates.
-  Fixed a bug (#10787) where content in the no\_results block could be
   truncated.
-  Fixed a bug (#10781) where the logged in Super Admin's avatar would
   display for other members while viewing their profiles in My Account.
-  Fixed a bug (#10793) where a PHP error could occur in Member
   Registration.
-  Fixed a bug (#10772) to show a warning in the control panel if
   javascript is disabled.
-  Fixed a bug (#10791) where the sticky checkbox would not be properly
   checked when editing a sticky entry.
-  Fixed a bug (#10804) where a super admin was not redirected to a
   members profile in My Account when submitting an edit.
-  Fixed a bug (#9345) where templates saved as files were not synced
   with the database on a version update from 1.x to 2.x.
-  Fixed a bug (#9840) where the textarea resize handle could be hidden
   on the publish page.
-  Fixed a bug (#10812) where file sizes were not sorted correctly by
   the Table Sorter in the File Manager.
-  Fixed a bug (#10828) where the path to the language directory was
   incorrectly pluralized.
-  Fixed a bug (#10819) where channel\_info tags variables were not
   properly updated to 2.x nomenclature.
-  Fixed a bug (#10736) updated functions->remove\_double\_slashes and
   reduce\_double\_slashes (string helper) to properly remove duplicate
   leading slashes.
-  Fixed a bug (#10640) where html button reordering would fail at
   times.
-  Fixed a bug (#9673) where Recount Preferences page was missing.
-  Fixed a bug (#10514) display changes in the Corporate Theme template
   manager.
-  Fixed a bug (#9798) replaced delete text in channel manager with
   icon.
-  Fixed a bug (#10427) where there was an unclosed <div> tag on the
   Corporate Theme Add/Edit Custom Fields page.
-  Fixed a bug (#9648) where the item\_id was incorrectly referenced in
   Simple Commerce subscriptions.
-  Fixed a bug (#9577) where \_weblog was not properly converted to
   \_channel by the update script.
-  Fixed a bug (#10858) where a more descriptive error message was added
   on the home page create template link if no template groups exist.
-  Fixed a bug (#10855) where deleting a channel entry could result in a
   MySQL error if the comments module was not installed.
-  Fixed a bug (#10848) where option dropdowns on custom profile field
   edit page were not set to correct option.
-  Fixed a bug (#10881) where member profile fields were not visible in
   profile pages.
-  Fixed a bug (#10851) where Session FlashData was not available on
   front end requests.
-  Fixed a bug (#10895) where the Stats tag could produce a MySQL error.
-  Fixed a bug (#10880) with a missing image in the jQuery UI theme for
   "Default".
-  Fixed a bug (#10942) where the replyto parameter in the email module
   was ignored when using the recommended tag syntax.
-  Fixed a bug (#10936) where multiple instances of the same encoded
   email on a template would produce the same span id, thus breaking the
   javascript encoding.
-  Fixed a bug (#10591) where MySQL errors could be encountered when
   using the Recount Statistics Utility.
-  Fixed a bug (#10927) where CP Quick tab links could cause invalid
   session ids in the URL and log the user out.
-  Fixed a bug (#10857) where the search form was not searching in
   comments.
-  Fixed a bug (#10958) where selecting a number from a select field on
   the publish page always resulted in an 'Invalid Selection' message.
-  Fixed a bug (#10946) where the help link on Admin -> Database
   Settings was pointing to the incorrect documentation page.
-  Fixed a bug (#10951) where channel entries pagination could have
   malformed previous/next page URLs.
-  Fixed a bug (#10956) where query caching in the comments module was
   not properly stopped, thus producing malformed queries.
-  Fixed a bug (#10969) where there was a typo in the Simple Commerce
   Module control panel.
-  Fixed a bug (#10967) where images uploaded via the MetaWeblog API
   would be corrupted.
-  Fixed a bug (#10965), an SQL error that was preventing the editing of
   entries via the MetaWeblog API.
-  Fixed a bug (#10973) preventing custom field variable pairs from
   outputting correct content.
-  Fixed a bug (#10977) where the image editing options after uploading
   a file on the Publish page where misaligned.
-  Fixed a bug (#10760) where member groups could access upload
   directories they didn't have permission to view in the File Manager.
-  Fixed a bug (#10984) where a fatal PHP error was present on the
   mobile theme plugin manager.
-  Fixed a bug (#10677) where custom HTML buttons can be inserted
   malformed.
-  Fixed a bug (#10983) where a incorrect avatar path could cause
   excessive memory usage.
-  Fixed a bug (#10952) where the channel parameter was ignored on the
   comments form tag.
-  Fixed a bug (#10978) where multiple Extensions using the same hook in
   PHP 5.3 would lose the ability to modify variables by reference.
-  Fixed a bug in CodeIgniter's Table library where an associative array
   with only a single item would cause an "undefined offset" error. This
   was in response to an SQL error reported on member\_data (#10907).
-  Fixed a bug (#11008) where Control Panel Quick Links where not
   functioning properly when linked to a page within the control panel.
-  Fixed a bug (#11024) where incorrect output could happen when there
   were empty lines in the Word Censoring configuration.
-  Fixed a bug (#9967) where File Browser pagination could appear twice
   under some situations.
-  Fixed a bug (#11041) where related\_categories\_mode was not properly
   parsing in channel:entries.
-  Fixed a bug (#10863) where certain combinations of member preferences
   resulted in PHP errors.
-  Fixed a bug (#11045) where no template icon was used for XML
   templates.
-  Fixed a bug (#9938) where the moblog spinner would stay displayed
   after the moblog posted due to php errors.
-  Fixed a bug (#9936) where category overrides were not properly
   working in the moblog module.
-  Fixed a bug (#10900) where the File Browser on the publish page did
   not reset itself to the first page of any paginated directory.
-  Fixed a bug (#11074) where writemode would not display if spellcheck
   was disabled.
-  Fixed a bug (#10871) where some member profile fields didn't fit into
   the allotted page space.
-  Fixed a bug (#10950) where field group selection in the Metaweblog
   API module was broken.
-  Fixed a bug (#9937) where field overrides and the allow nontextareas
   hidden config in the Moblog Module were not functioning.
-  Fixed a bug where the comment count for an entry was not always
   properly recounted after deleting a member.
-  Fixed a bug (#11075) where text formatting was not available to
   select dropdown field types.
-  Fixed a bug (#9024) where 1.x quick tabs were not removed in the
   upgrade to 2.x.
-  Fixed a bug (#9046) where some elements were able to be clicked when
   the admin toolbar was expanded on the publish page.
-  Fixed a bug (#10645) where a blank url title could cause the entry
   date to be set to January 1, 1970.
-  Fixed a bug (#10998) where field formatting select option was
   displaying on relationship fields.
-  Fixed a bug (#10376) where "Not Authorized" error message on comment
   administration was being truncated.
-  Fixed a bug (#10814) Display error in the publish page image manager.
-  Fixed a bug (#9101) Autoresizing notepad was not working correctly in
   Internet Explorer.
-  Fixed a bug (#10608) where modal windows in Internet Explorer were
   not correctly rendering.
-  Fixed a bug (#9968) where javascript errors in Internet Explorer on
   the template edit page caused the accordion to not function properly.
-  Fixed a bug (#10874) where javascript errors on the Template Manager
   could make the page unusable in Internet Explorer.
-  Fixed a bug (#11143) where submission of the wiki update form when
   multiple wikis exist would return to the first wiki created.
-  Fixed a bug (#11155) where conditionals were not parsed in the
   channel info tag.
-  Fixed a bug (#10600) where pagination in file manager was not
   displayed.
-  Fixed a bug (#9504) in the member importer where custom member field
   data were not imported.
-  Fixed a bug (#9502) in the member importer where some of the
   confirmation page settings information was left blank.
-  **Developers:**

   -  Added masked\_url() method to the CP Library.
   -  Added load\_package\_css() method to the CP Library.
   -  Added $member\_id to member\_member\_register extension hook.
   -  Added a new field to the exp\_modules table: has\_publish\_fields.
   -  Added a fieldtype overview page to install, uninstall, and set
      global settings.
   -  Added per field settings for showing smileys, spellcheck, etc.,
      please see the :doc:`Fieldtype
      documentation </development/fieldtypes>` for details.

Version 2.0.0 Public Beta
-------------------------

Release Date: December 2, 2009

Build 20091211
~~~~~~~~~~~~~~

-  Added default Member Profile Themes in the style of the CP theme
   "Default".
-  Added a notification when an image is successfully edited via the
   Image Editor.
-  Added {switch=} variable to Member Profile Templates.
-  Changed the register member pages of Default, Fruit and Corporate
   themes so that error messages display more nicely.
-  Added button to access Snippets from the Template Manager
-  Updated IP to Nation module to 2.1 for a countries database update.
-  Modified Help menu item to always be the last top level nav item,
   after custom items.
-  Changed the language displayed on the submit button of "Create/Edit
   Upload Destination" to be more consistent with the rest of the
   control panel (bug #10566).
-  Fixed a bug (#10558) resulting in a PHP error on the Forums tab of
   the publish page.
-  Fixed a bug (#10508) resulting in a PHP error when using the channel
   module under PHP 4.
-  Fixed a bug where Strict URLs option was not displayed on Global
   Template Preferences Page. Also moved language keys from admin to
   design language file.
-  Fixed bug where spellcheck did not work for the Forum body field on
   the control panel publish page.
-  Fixed bug where Write Mode did not work for the Forum body field on
   the control panel publish page.
-  Fixed a bug where prepopulating from another custom field would
   result in a PHP error.
-  Fixed a bug (#9328) where ajax requests returned the login form in
   their response text.
-  Fixed a bug (#10512) showed a flash of the notice text before moving
   it to the notification dropdown.
-  Fixed a bug (#9552) where flashdata sent to the publish page was not
   automatically displayed in a notification.
-  Fixed a bug (#10499) where custom field formatting options were not
   shown on edit.
-  Fixed a bug (#10550, #10609) where field formatting options showed
   for relationship and file fields.
-  Fixed a bug (#10568) where the RSS icon didn't show in the template
   manager of the Fruit theme.
-  Fixed a bug (#10570) where a language file wasn't loaded in Edit
   Channel Group Assignments.
-  Fixed bug (#10520) where tables did not have right borders.
-  Fixed bug (#10556) where white-space:nowrap being applied to tables
   forced the table out of the content area.
-  Fixed bug (#10543) where unauthorized access template and HTTP
   authentication settings were missing from the Template Manager and
   Editor, preventing either feature from working.
-  Fixed bug (#10571) where uploading an avatar could result in a PHP
   error.
-  Fixed bug (#10583) where changing custom fields into different types
   could result in a PHP error.
-  Ported a 1.6 bug fix (#9997) where anchor links processed by BBCode
   had http: appended.
-  Fixed bug (#10581) resulting in a PHP error in the Channel Calendar.
-  Fixed bug (#10442) where submitting a category with the same name as
   a category in another category group would incorrectly report that
   the name was taken.
-  Fixed a missing language key in category creation.
-  Fixed bug (#10581) resulting in a PHP error in the Channel Calendar.
-  Fixed bug (#10582) added RSS Autodiscovery link to Agile Records
   Theme.
-  Fixed a bug where Segment and Embed variables were not parsed in
   Snippets
-  Fixed a bug in the Template Debugging log where Snippets were being
   referred to as Path.php Globals.
-  Fixed a bug (#10593) resulting in a PHP error when using the
   corporate theme.
-  Fixed a bug (#10534) where default Category selection was not
   honoured.
-  Fixed a bug (#10580) where Smileys, Spellcheck, and Glossary would
   sometimes not be displayed with textarea custom fields.
-  Fixed a bug (#10585) where {weblog...} was listed as an acceptable
   variable in Email Notification Template editor.
-  Fixed a bug (#10496) improved performance of corner rounding in
   browsers that have native support for border-radius.
-  Fixed a bug (#9794) where the Template Editor tag validator would
   give an incorrect error message for module tags that do not have a
   closing tag.
-  Fixed a bug (#10599) where empty numeric fields always triggered a
   validation failure.
-  Fixed a bug (#9097) where toggling checkboxes required an extra click
   per cycle.
-  Fixed a bug (#10579) where "undefined" is inserted as the filename
   when uploading an image from the Publish page.
-  Fixed a bug (#10604) where the Help link for the Category Management
   area led to a 404 Not Found.
-  Provided a warning if no edit operation is selected when "Save Image"
   is chosen from the File Manager Image Editor (bug #9410).
-  Fixed bug (#10510) Error on edit page dynamic filtering if Comment
   module was disabled.
-  Fixed bug (#10430) Where comment expiration date was displayed on the
   publish page when the comment module was not installed.
-  Fixed bug (#9534) Table overflow on Default Ping Servers
   Administration Page.
-  Fixed a bug where the public Profile page would display a link to
   send a Private Message to a user who has Private Messages disabled.
-  Fixed a bug in Agile Records profile themes that was not utilizing
   the {if accept\_email} and {if can\_private\_message} conditionals.
-  Fixed bug (#10503) which produced a PHP error on the publish page if
   forums were enabled.
-  Fixed a bug where if the last custom field rendered on the publish
   page was collapsed, all subsequent fields (categories, options,
   forums, etc.) would also start out collapsed.
-  Fixed a bug (#10601) where the theme folder path was not being
   validated before being accepted when the General Configuration, which
   could result in an unusable control panel.
-  Fixed a bug (#10599) on member profile pages that could result in
   many PHP error messages.
-  Fixed bug (#10616) where the unique\_id being generated buy the
   Member Import Utility was incorrect.
-  Fixed a bug (#10520) where renaming a template with the inline
   preference editor would not rename the associated file.
-  Fixed Template Manager / Editor inline preference editor
   notifications to have proper error / success notifications.
-  Added validation for template renaming for uniqueness, reserved
   words, and attempts to rename the index template.
-  Fixed a bug where the wrong variable was being used to generate the
   "View Site" link in the CP main menu.
-  Fixed a bug (#9765) where visiting the logout url without a valid
   session would add logout entries to the cp log.
-  Fixed a bug (#10426) Field formatting change message showed on all
   field types.
-  Fixed a bug (#10632) where index.php $assign\_to\_config
   'template\_group' and 'template' were not being utilized.
-  Changed addon installer to set proper paths for packages when
   installed from the control panel.
-  As Channel preferences to hide various aspects of the Publish page
   are toggled in Channel Preferences, custom layouts will be altered to
   accommodate this.
-  Fixed bug (#10588) where a PHP error would appear on the categories
   page.
-  Display cleanup on the category custom fields page.
-  Disabled plugin feed and remote installation. Currently no 2.0 feed
   exists and 1.6 plugins are incompatible.
-  Fixed bug (#10634) where ImageMagick was misspelled.
-  Fixed bug (#10639) where the jQuery module was not outputting
   non-jQuery JavaScript from the correct location.
-  Fixed a bug where the Publish page would throw a warning if the
   Status menu was hidden via Channel Preferences.
-  **Developers:** added send\_ajax\_response() method to Output class.

Build 20091207
~~~~~~~~~~~~~~

-  Changed the default field type when creating a new Custom Field to
   "text".
-  Added missing Simple Commerce change log items to the 2.0.0 Public
   Beta change log.
-  Fixed a bug (#9649) where Simple Commerce subscriptions would be
   ended when the user cancelled the subscription, instead of only when
   the subscription ran out.
-  Fixed a bug where the search excerpt field for a channel was not
   updated if a custom field or group was deleted.
-  Fixed a bug where the exp\_field\_formatting table was not being
   pruned when a custom field group is deleted.
-  Fixed a bug (#10513) where ascii\_to\_entities() was undefined when
   viewing comments.
-  Fixed a bug (#10517) where clicking into the Pages URI field doesn't
   make it go blank.
-  Fixed a bug (#10474) where selecting all files in the File Manager
   wasn't restricted to the current upload location.
-  Fixed a bug (#10525) where emails selected for deletion in the
   Mailing List manager simply refreshed the page without deleting.
-  Fixed a bug (#10530) where some missing line breaks created odd
   layout/spacing on the Mailing List batch subscribe page.
-  Fixed an error in the Zip library that didn't allow downloading on
   PHP 4 servers.
-  Fixed a language key in the profiler: "profiler\_no\_memory\_usage"
   to "profiler\_no\_memory".
-  Fixed a bug (#10521) where author could not be changed on a channel
   entry.
-  Fixed bug (#9206) - Updated language keys for Config File Editor for
   consistency.
-  Fixed a bug (#10516) Changed button colour in Template Editor syntax
   warning table.
-  Fixed a bug (#10518) where Custom Field groups without existing
   fields would error on PHP 4.
-  Fixed a bug (#10577) with a typo in a PHP variable when uploading an
   avatar
-  Removed some extraneous 'locked' language keys in the Members
   language file (lang.members.php, bug #10548).
-  Removed the duplicate language key "plain\_text" from lang.admin.php
   as per bug #10509.

Build 20091204
~~~~~~~~~~~~~~

-  Updated the forum version and build numbers as per bug #10423.
-  Fixed typo on php include() in upd.ip\_to\_nation.php.
-  Various visual refinements (#9357, #10468)
-  Added db\_test.php and email\_test.php into
   system/expressionengine/utilities to assist with diagnosing problems.
-  Changed the default sort order of :menuselection:`Content --> Edit`
   to be entry id, descending.
-  Added the ability to create new categories from the publish page as
   per bug (#10431).
-  Changed control panel JavaScript and CSS to send far-future expires
   headers on static resources when ExpressionEngine is configured to
   send HTTP Headers.
-  Fixed bug (#10382) Fixing dropdown on New Template Form next to
   "Duplicate an existing template" so it says focused after clicking.
-  Fixed bug (#9532) where the default field formatting setting was not
   being honored on the publish page.
-  Fixed bug (#10405) - removed extraneous development files from the
   templates directory.
-  Fixed bug (#10388) Forgot password email provided an incorrect URL to
   reset the password
-  Fixed bug (#10207 and #10241) Cleaned up display of module buttons in
   Corporate theme.
-  Fixed bug (#10410) addons/extensions\_settings\_custom.php view file
   missing in corporate theme.
-  Fixed bug (#10420) Fixed PHP Error when updating specialty templates.
-  Fixed bug (#10181) Front end login redirect did not include slash
   between index.php and the template group.
-  Fixed bug (#10205) where a link to global template preferences in
   synchronize templates pointed to the wrong page.
-  Fixed bug (#9347) where hiding a publish field in a non-active tab
   had no effect.
-  Fixed bug (#10180) where a required file field would always cause
   form validation to fail.
-  Fixed bug (#10435) Publishing failed if the pages module was
   installed, but no templates had been defined.
-  Fixed bug (#10229) Limiting text input fields to numeric or integer
   resulted in a PHP error.
-  Fixed bug (#10461) A typo in the snippets description.
-  Fixed bug (#9742) Creating a new template group while adding a
   channel forced the template group name to be lowercase.
-  Fixed bug (#9580) Some tags were causing invalid template warnings.
-  Fixed bug (#10469) Textarea fields were not respecting the "Textarea
   Rows" property.
-  Fixed bug (#10432) Smiley link showing up in control panel despite
   emotion module not being installed.
-  Fixed bug (#10157) Due to a bug in certain versions of PHP, the
   ExpressionEngine Info Accessory would display an SSL related PHP
   error.
-  Fixed bug (#10472) A country was not correctly added to the array
   when managing banned countries, resulting in a PHP error.
-  Fixed bug (#10476) where the CP theme was not properly refreshing the
   new theme when switched.
-  Fixed bug (#10482) the Content Edit page was sorting in a different
   initial order then page load, causing the entries to "jump".
-  Fixed bug (#10483) where the docs link in the ExpressionEngine Info
   accessory pointed to 1.x documentation instead of 2.0 Public Beta
   documentation.
-  Fixed bug (#10484) Nested display configuration in pages module did
   not produce nested display of pages on the Pages module home page.
-  Fixed bug where {redirect=} variables were parsed in entries

Build 20091203
~~~~~~~~~~~~~~

-  Fixed bug (#10164) Updating language text in installer that
   referenced Core Installations.
-  Fixed bug (#10179) Moved "Create New Custom Field" button to the
   right of the page to be more consistent with other pages.
-  Fixed bug (#10189) Resolved PHP Error in Fruit Theme Template Manager
-  Fixed bug (#10368) Resolved an error where clicking links in the News
   and Stats accessory would cause you to leave the page.
-  Fixed bug (#10378) Resolved an write mode would not close due to
   javascript error.
-  Fixed bug (#10184) Resolved an error where custom fields were not
   being added to the correct field group.
-  Fixed bug (#10333) PHP error in the custom profile data tag.
-  Fixed bug (#10342) Incorrect success message content in the mailing
   list editor.
-  Fixed bug (#10380) Fixed an error where a selected page would not
   re-populate when editing an entry.
-  Fixed bug (#10175) Resolved PHP error on global variables manager.
-  Changed home page 'modify' section links for pages module to link to
   the module's home page
-  Fixed a bug with default accessory installation in the Trial version.
-  Fixed a bug where My Account area will produce an error in PHP4
   environments.
-  Fixed a bug (#10367) where the default channel assignment in the
   channel options could be wrong when editing an entry.

Build 20091202 (initial release)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  **General changes**

   -  ExpressionEngine is now powered by
      :ellislab:`CodeIgniter </codeigniter>`, the open source PHP
      framework from EllisLab, Inc.
   -  "Weblogs" are now known as "Channels"
   -  ExpressionEngine now runs fully (and only) on UTF-8.
   -  Added :doc:`Snippets </templates/globals/snippets>`, a new
      early-parsed type of global variable which can be reused
      throughout your templates and can include any dynamic information.
   -  New custom field types: Multi-select, Checkbox, Radio, and Upload
   -  Included jQuery and numerous plugins, themes, and UI effects as
      standard.
   -  Added a :doc:`jQuery module </modules/jquery/index>` to simplify
      access to jQuery script files in your ExpressionEngine
      installation.
   -  Added additional security measures to help alert you if
      unauthorized changes to your index.php file are made.
   -  ExpressionEngine generated URLs are even prettier, no longer use a
      trailing slash.
   -  Added the {absolute_results} :ref:`variable <channel_entries_single_variables>` to the Channel Entries tag.
   -  Changed the behavior of the backspace parameter so that it no
      longer ignores whitespace.
   -  Made "yes/no" tag parameters consistent.
   -  ExpressionEngine :doc:`Template Comments </templates/comments>`
      can now be used in Global Variables and Snippets.
   -  Added CodeIgniter Output Profiler for improved debugging.
   -  Changed system offline message to output 503 headers with a 1 hour
      retry time.
   -  {assign\_variable:} changed to
      :doc:`{preload\_replace:foo="bar"} </templates/globals/preload_replacement>`
      and documentation clarified.
   -  The Simple Commerce Module now supports :ref:`subscriptions and
      recurring payments <simple_commerce_recurring_payments>`
   -  The Trackback module has been removed from ExpressionEngine. See
      the :doc:`version update
      notes </installation/version_notes_2.0>` for details.
   -  The Photo Gallery module has been removed from ExpressionEngine.
      See the :doc:`version update
      notes </installation/version_notes_2.0>` for details.

-  **Control Panel**

   -  **General**

      -  Four impressive new Control Panel themes.
      -  Completely redesigned navigation.
      -  Improved UI, including new table filtering and sorting
         capabilities.
      -  Added :doc:`Accessories </cp/add-ons/accessory_manager>`, a
         brand new control panel add-on type.
      -  My Account sidebar gives quick access to personal settings.
      -  Added context sensitive Help system.

   -  **Content**

      -  Publish page layout can be easily customized per Channel to fit
         your data entry needs, including adding your own tabs.
      -  New Write Mode provides uncluttered full-browser writing
         environment.
      -  Added autosave feature to publish page to prevent content loss
         while editing an entry due to closing a browser window /
         session timeouts, etc.
      -  Improved text entry (tab preservation in textareas and Write
         Mode)
      -  Improved HTML buttons utilizing MarkItUp
      -  Added ability to add Authors without leaving the publish page.
      -  Category selection now uses checkboxes for easier input
      -  Added brand new File Manager
      -  Ability to edit images with a visual editor directly in the
         control panel.

   -  **Design**

      -  Improved Template Manager, including drag and drop group
         ordering, and inline preference and access settings.
      -  Member Profile templates, System Offline Templates, Email
         Notification templates, User Message templates, Wiki themes,
         and Forum themes are now all editable via the Template Editor.
      -  Template Editor includes inline preference and access settings.
      -  Improved code/markup entry in the Template Editor (tab
         preservation).
      -  Added tag validator to Template Editor, alerts you when you've
         misspelled a tag or used a tag for a plugin or module that is
         not installed.
      -  Added "create and edit" option when creating new templates.
      -  Dramatically changed :doc:`flat-file template
         system </templates/templates_as_files>`

         -  When using this feature, templates and groups will be
            created automatically when you add them to the template
            folder
         -  Template Editor will indicate whether the loaded template is
            sourced from a file or the database
         -  Easy to use :doc:`Synchronization
            Tool </cp/design/templates/synchronize_templates>` to
            keep your database and files in sync.
         -  Files are now saved with the proper file extension, making
            syntax highlighting simpler in your favorite text/HTML/CSS
            editor.

      -  Improved Template search allows for more complex searches for
         tags, HTML, scripts, etc.
      -  New navigation menu allows you to access and edit any template
         directly from any page in the control panel.

   -  **Add-ons**

      -  Accessories can be restricted to a specific control panel page
         and/or to specific member groups.
      -  Improved Plugin manager
      -  Context sensitive Help extends to add-ons, including
         third-party add-ons.

   -  **Members**

      -  Reorganized navigation so all pages relevant to member
         administration are under a single top-level menu.

   -  **Admin**

      -  Greatly improved navigation and preference separation.
      -  Added Config Editor allowing you to edit your config.php file
         directly in the control panel.

   -  **Tools**

      -  Moved Communicate, Utilities, Logs, and Data management tools
         to the "Tools" area.
      -  Communicate page now allows file attachments with emails.
      -  Improved Batch Email resuming after failure.
      -  Recount Statistics utilities much more performance friendly and
         requires less user interaction.

-  **Themes**

   -  Member Profile, Wiki, and Forum themes are easier to edit, using
      .html files instead of complex PHP theme files.
   -  Member Profile pages are now parsed through the full template
      parser, allowing the use of any tags and variables you desire in
      your member profile themes.
   -  Site themes are much easier to create and redistribute, following
      the same file structure as the new
      :doc:`flat-file template system </templates/templates_as_files>`.

-  **Installer**

   -  Brand new example site helps introduce and teach ExpressionEngine.
   -  Ability to perform an "Empty Installation" - no channels, fields,
      templates, etc. - a pure blank slate to use as a starting point.
   -  Can now pre-select modules to install while installing
      ExpressionEngine, including third party modules.
   -  Improved validation of installation form.
   -  Updater provides real-time progress status during upgrade.
   -  Update script automatically converts old tags to the new syntax
      where necessary.

-  **Development changes**

   -  Add-ons now come in :doc:`packages </development/packages>`,
      increasing flexibility and simplifying updates and maintenance.
   -  Add-ons can have their own CodeIgniter libraries, models, config,
      javascript, view files, etc.
   -  Single third party folder for all add-on types.
   -  New control panel add-on type:
      :doc:`Accessories </development/accessories>`.
   -  New Custom Field API lets you create your own custom field types.
      *Contact the development
      team for alpha
      documentation*.
   -  Added simple methods for tags to :doc:`parse their template
      variables </development/usage/template>`.
   -  Added :doc:`CP library </development/usage/cp>` which has many
      assistive methods and handles many things for you automatically.
   -  Display class is deprecated!
   -  CodeIgniter core increase ease and power of developing add-ons,
      with many helpful tools such as Active Record, a Table library,
      etc.

-  **And much much more...**

   -  ExpressionEngine 2.0 was entirely refactored to run on
      CodeIgniter, and in doing so, many code improvements and
      architectural changes were made. Under the hood, there are too
      many changes to itemize!

-  ExpressionEngine 2.0 features a new set of default avatars. We'd like
   to gratefully acknowledge the following users for their wonderful
   contributions:

   -  `Cliff Persaud <http://www.cubist.ca/>`_
   -  `David Genesse <http://www.davidgenesse.com/>`_
   -  `Benedikte Vanderweeën <http://www.bene.be/>`_
   -  `Colin Williams <http://wllmscncpts.tumblr.com/>`_
   -  Charles Neely
