Preferences Array Update
------------------------

The way site pages are stored changed in this release to provide greater
flexibility. If you use :doc:`Pages </add-ons/pages/index>` and have any
add-ons that might make use of this array, be certain to update the add-
ons as part of this version update. Not doing so may result in broken
pages. Add-ons that may be affected include Structure, LG Better Meta,
and the Nested Menu Plugin.

For those using PHP in templates or using their own add-ons, you may
need to adjust your code to reflect changes to site\_pages array. The
array is now saved with an additional dimension, adding a reference to
the site\_id. In addition, another element has been added to the array,
containing the url for the particular site. ::

	 print_r($PREFS->ini("site_pages"));

In 1.6.9:

::

    Array
    (
       [1] => Array
           (
               [uris] => Array
                   (
                       [12] => /page.html
                   )

               [templates] => Array
                   (
                       [12] => 2
                   )

               [url] => http://127.0.0.1:8888/20/index.php/
           )

    )

Prior to 1.6.9:

::

    Array
    (
          [uris] => Array
              (
                  [12] => /page.html
              )

          [templates] => Array
              (
                  [12] => 2
              )
    )

Profile Theme Updates
---------------------

ExpressionEngine 1.6.9 includes a number of new localization variables
available for use in the member profile templates. If you have made no
customizations, you may skip this step and replace the profile theme
folder with a fresh copy.

The following words/phrases may now be replaced with localization
variables in your profile\_themes.php file (found in
themes/profile\_themes/default/ and any custom profile theme folders you
have installed:

Powered by ExpressionEngine
    {lang:powered\_by\_ee}
No Photo
    {lang:no\_photo}
Email Console
    {lang:email\_console}
Send Private Message
    {lang:send\_pm}
AOL IM
    {lang:mbr\_aim\_console}
ICQ
    {lang:mbr\_icq}
Yahoo Messenger
    {lang:mbr\_yahoo}
{current\_page} of {total\_pages}
    {current\_page} {lang:of} {total\_pages}
Search Field
    {lang:search\_field}
Screen Name
    {lang:mbr\_screen\_name}
Email Address
    {lang:mbr\_email\_address}
URL
    {lang:mbr\_url}
Location
    {lang:mbr\_location}
I am Online
    {lang:am\_online}
Add me to your Buddy List
    {lang:add\_to\_buddy}
KB
    {lang:kb}
Private Message
    {lang:private\_message}
value='Search'
    value='{lang:search}'
value='Submit'
    value='{lang:submit}'
