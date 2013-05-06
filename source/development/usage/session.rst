Session Class
=============

.. contents::
	:local:

Calling the Session Class
-------------------------

.. class:: Session

ExpressionEngine uses the Session class for storing information about
the user currently visiting the ExpressionEngine site. If the user is a
member and is logged in, then their various preferences and privileges
are loading into variables, which are then immediately available
throughout the entire program without the use of a query. This class is
initialized automatically.
::

    function session_example()
    {
        if (ee()->session->userdata('group_id') != 1)
        {
            exit('Not a Superadmin');
        }
        else
        {
            $admin_email = ee()->session->userdata('email')
        }
    }

The Functions class has numerous functions that use the information in
the Session class variables to provide useful information for modules
and plugins, such as allowed channels and access to areas. Make sure to
check out the Functions class reference file for more information on
these functions

User Data Information
---------------------

The ``ee()->session->userdata`` variable is an array that contains
information about that specific user, and it will likely be the most
used part of this class for any module. Below is a list of the variables
that it contains.

.. note:: If a user has a ``group_id`` of 1, then they can access
  anything, no matter the other settings.

-  **username** - Username of user
-  **screen\_name** - Screename of user, if any
-  **email** - Email Address
-  **url** - Homepage, if any
-  **location** - Location, if any
-  **language** - Chosen Language
-  **timezone** - Chosen Timezone (UM12 - UTC - UP12)
-  **time\_format** - eu/us
-  **group\_id** - Group ID number (1-Superadmin, 2-Banned, 3-Guests,
   4-Pending, 5-Members, 6+ Other Member Groups
-  **access\_cp** - y/n
-  **is\_banned** - 0/1
-  **channel\_id** - Default channel's channel\_id number
-  **tmpl\_group\_id** - Default template's group\_id number
-  **member\_id** - User's unique member\_id
-  **last\_visit** - Last visit of user in Unixtime
-  **total\_entries** - Total entries
-  **total\_comments** - Total comments
-  **total\_forum\_posts** - Total Forum Posts for User (sum of topics
   and replies)
-  **total\_forum\_topics** - Total topics posted by user
-  **total\_forum\_replies** - Total replies posted by user
-  **last\_forum\_post\_date** - Last time user posted in forum in GTM
   Unix timestamp
-  **profile\_theme** - Selected member profile theme, if blank then
   default
-  **forum\_theme** - Select forum theme, if blank then default
-  **private\_messages** - Number of unread private messages
-  **accept\_messages** - (y/n) Accept Private Messages
-  **display\_signatures** - (y/n)
-  **display\_avatars** - (y/n)
-  **last\_email\_date** - Last time an email was sent
-  **notify\_by\_default** - Notify of comments by default
-  **ignore\_list** - Array containing member\_id's that the logged in
   user wishes to ignore
-  **group\_title** - Name of Group
-  **is\_locked** - (y/n) Is member group access locked and only
   available to Superadmins?
-  **can\_view\_offline\_system** - (y/n)
-  **can\_view\_online\_system** - (y/n)
-  **can\_access\_cp** - (y/n)
-  **can\_access\_publish** - (y/n)
-  **can\_access\_edit** - (y/n)
-  **can\_access\_design** - (y/n)
-  **can\_access\_comm** - (y/n)
-  **can\_access\_modules** - (y/n)
-  **can\_access\_admin** - (y/n)
-  **can\_admin\_channels** - (y/n)
-  **can\_admin\_members** - (y/n)
-  **can\_delete\_members** - (y/n)
-  **can\_admin\_mbr\_groups** - (y/n)
-  **can\_admin\_mbr\_templates** - (y/n)
-  **can\_ban\_users** - (y/n)
-  **can\_admin\_utilities** - (y/n)
-  **can\_admin\_preferences** - (y/n)
-  **can\_admin\_modules** - (y/n)
-  **can\_admin\_templates** - (y/n)
-  **can\_view\_other\_entries** - (y/n)
-  **can\_edit\_other\_entries** - (y/n)
-  **can\_assign\_post\_authors** - (y/n)
-  **can\_delete\_self\_entries** - (y/n)
-  **can\_delete\_all\_entries** - (y/n)
-  **can\_view\_other\_comments** - (y/n)
-  **can\_edit\_own\_comments** - (y/n)
-  **can\_delete\_own\_comments** - (y/n)
-  **can\_edit\_all\_comments** - (y/n)
-  **can\_delete\_all\_comments** - (y/n)
-  **can\_moderate\_comments** - (y/n)
-  **can\_send\_email** - (y/n)
-  **can\_send\_cached\_email** - (y/n)
-  **can\_email\_members** - (y/n)
-  **can\_email\_member\_groups** - (y/n)
-  **can\_email\_mailinglist** - (y/n)
-  **can\_email\_from\_profile** - (y/n)
-  **can\_view\_profiles** - (y/n)
-  **can\_post\_comments** - (y/n)
-  **exclude\_from\_moderation** - (y/n)
-  **can\_search** - (y/n)
-  **search\_flood\_control** - Number of seconds between searches
-  **can\_send\_private\_messages** - (y/n)
-  **can\_attach\_in\_private\_messages** - (y/n)
-  **include\_in\_memberlist** - (y/n)
-  **display\_photos** - (y/n)
-  **session\_id** - Session ID number
-  **admin\_sess** - (0/1) Admin Session (0 => no, 1 => yes)
-  **ip\_address** - IP Address of user
-  **user\_agent** - HTTP User Agent of user

On the Control Panel side of ExpressionEngine a few more variables are
included:

-  **theme** - Chosen Control Panel theme
-  **quick\_links** - Quick Links for member
-  **template\_size** - Size of Template textarea
-  **assigned\_channels** - Array containing channel\_id's of assigned
   channels for member.
-  **assigned\_modules** - Array where the keys are the module\_id's and
   the values determine if access is allowed (0 => no, 1=> yes). For
   Superadmins it will be empty, since they have unlimited access.
-  **show\_sidebar** - (y/n) The state of the Control Panel sidebar.

Flash Data for Redirects
------------------------

.. method:: set_flashdata()

You may sometimes need to store small pieces of data, such as language
keys, across page requests to show as result messages. You can do this
using redirect flash data.

::

    ee()->session->set_flashdata('result_message', 'Entry Deleted!');
    ee()->functions->redirect(BASE.AMP.'C=addons_modules'.AMP.'M=show_module_cp'.AMP.'module=fortune');

    // On the new page
    $message = ee()->session->flashdata('result_message');

Flash data will often be used to specify a :doc:`Control panel class
</development/usage/cp>` $cp\_message variable, as such default view
variables are displayed automatically.

Please note that due to internal limitations this will only work in
combination with the redirect method of the functions class. Also keep
in mind that this data is stored in a cookie, which have limited
capacity.

Cache Array
-----------

ee()->session->cache is an array provided for you to use for
"flash" content, i.e. values that you would like to persist during a
page load, helping you eliminate redundant queries and PHP processing.
To avoid conflicts with other first and third-party use of this array,
always access it as a multi-dimensional array, using your class name as
the primary array name, and your variables within. Naming conventions
should follow that of other variables: lowercase letters, underscores
for separators between words, and meaningful names.

Here is an example of how one might utilize the $EE->session->cache
array. This way, no matter how many times this method is called on a
given page load (for instance, a tag being used twice on a template, or
within a tag that might loop, such as a plugin within the Channel
entries tag), the query and loading of the array occurs only once.

::

    if ( ! ee()->session->cache('super_class', 'admins'))
    {
        $query = ee()->db->select('member_id')->get('super_class_admins');

        if ($query->num_rows() > 0)
        {
            $cache = array();

            foreach ($query->result() as $row)
            {
                $cache[] = $row->member_id;
            }

            ee()->session->set_cache('super_class', 'admins', $cache);
        }
    }

    // set a local variable from the cached

You can see an example of real-world usage of $EE->session->cache in the
Channel module's fetch\_custom\_channel\_fields() and
next\_prev\_entry() methods, and the IP to Nation module's
get\_country() method.

Tracker Array
-------------

The Session class has one more useful variable that is only available on
the user side of the site. **ee()->session->tracker** is an array
that contains the last five ExpressionEngine pages viewed by this user
in the form of a ExpresionEngine query string (i.e. '/channel/comments/'
or 'index' for main site page). The array's keys ranges from 0-5.

::

    $current_page = ee()->session->tracker['0'];
    $last_page = ee()->session->tracker['1'];
    $two_pages_ago = ee()->session->tracker['2'];

If a page is constantly reloaded, ExpressionEngine will not allow the
array to fill up with just the page's query string but waits until the
user visits another page before updating the tracker array.
