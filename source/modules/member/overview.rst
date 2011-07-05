Member Management Module Overview
=================================

Many of the member management features are integrated into the base
system itself, so unlike other modules, the Member Management module is
not managed from within the Modules area of the control panel. Instead,
its features are found in the following three places:

**Note:** The ExpressionEngine **Core** version does not come with the
member module, so some of the features described on this page do not
apply.

Members and Groups Area
-----------------------

The Admin area of the Control Panel has a dedicated `Members and
Groups <../../cp/members/index.html>`_ section. Here you'll find a
comprehensive suite of member management utilities, including the main
`Members and
Preferences <../../cp/members/membership_preferences.html>`_ page.

My Account Page
---------------

By default, the Control Panel My Account page shows member profile
information and preference settings for the person who is logged into
the control panel. It will also display information for any member if
you choose a particular member from this page:

Admin > Members and Groups > View Members

Site Member Profile Page
------------------------

The public side of your website also has a Member Profile area, enabling
your site members to manage their personal profile information without
having access to your Control Panel. Typically, this Member Profile area
is found at::

	http://example.com/index.php/member/profile/

Member Profile Templates
~~~~~~~~~~~~~~~~~~~~~~~~

The public profile area has its own set of templates which can be edited
to change the look. You'll find the templates located on your server
here:

themes/profile\_themes/default

These templates can be edited with a text editor, or you may choose to
edit them via your Control Panel at this page:

Design > Themes > Member Profile Templates

Note: In order to edit the templates via the Control Panel requires that
you set the file permissions for the template files to 777

A good strategy is to make a copy of the entire default templates
folder, then edit your copy so you can leave the default files intact.
In your Membership Preferences page you can set your new copy as the
site default. The Member Preferences page is located at:

Members > Membership Preferences
