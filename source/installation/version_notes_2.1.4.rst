Update Notes for Version 2.1.4
==============================

Member Templates Path Changes
-----------------------------

In order to fix `this
bug <http://expressionengine.com/bug_tracker/bug/14989/>`_ where "Member
Profile template links do not reflect changed Profile Triggering Word",
the following changes have been made in the default member theme.

breadcrumb.html
^^^^^^^^^^^^^^^

::

    <table border='0' cellpadding='0' cellspacing='0' style="width:99%;"> 
        <tr>
            <td>
                <div class='breadcrumb'>{breadcrumb_links}</div>
            </td>
            {if logged_in}
            <td align="right">
            {lang:logged_in_as} <span class="defaultBold"><a href="{path:your_profile}">{name}</a></span>  &nbsp;|&nbsp;  <span class="default"><a href="{path:your_control_panel}">{lang:your_control_panel}</a></span>  &nbsp;|&nbsp;  <span class="default"><a href="{path:memberlist}">{lang:memberlist}</a></span>  &nbsp;|&nbsp;  <span class="default"><a href="{path="LOGOUT"}">{lang:logout}</a></span>  &nbsp;|&nbsp;  
            </td>
            {/if}
        </tr>
    </table>


Member Template Menu Conditionals
---------------------------------

menu.html in member and forum themes, can now contain the following
conditional variables to show or hide links depending on member
preferences. 

::

    {if enable_avatars}
        <div class='menuItem'>
            <a href='{path:avatar}'>{lang:edit_avatar}</a>
        </div>
    {/if}
    {if enable_photos}
        <div class='menuItem'>
            <a href='{path:photo}'>{lang:edit_photo}</a>
        </div>
    {/if}

Edited Views
------------

The following views were edited:

-  themes/cp\_themes/default/\_shared/filebrowser.php
-  themes/cp\_themes/default/\_shared/footer.php
-  themes/cp\_themes/default/\_shared/sidebar.php
-  themes/cp\_themes/default/account/\_account\_header.php
-  themes/cp\_themes/default/addons/accessory\_preferences.php
-  themes/cp\_themes/default/admin/channel\_edit.php
-  themes/cp\_themes/default/content/\_assets/categories.php
-  themes/cp\_themes/default/content/edit.php
-  themes/cp\_themes/default/content/file\_browse.php
-  themes/cp\_themes/default/content/file\_delete\_confirm.php
-  themes/cp\_themes/default/content/multi\_edit.php
-  themes/cp\_themes/default/content/publish.php
-  themes/cp\_themes/default/design/manager.php
-  themes/cp\_themes/default/design/snippets.php
-  themes/cp\_themes/default/members/view\_members.php
-  themes/cp\_themes/default/tools/sql\_results.php
-  themes/cp\_themes/default/tools/sql\_run\_table\_action.php
-  themes/cp\_themes/default/tools/sql\_view\_database.php
-  themes/cp\_themes/mobile/addons/accessory\_preferences.php
-  themes/cp\_themes/mobile/content/publish.php

`Return to Update Page <update.html#additional-steps>`_