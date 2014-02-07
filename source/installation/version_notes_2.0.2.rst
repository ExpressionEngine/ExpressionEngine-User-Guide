Update Notes for Version 2.0.2
==============================

index.php Updated
-----------------

The index.php file has been updated for Version 2.0.2, so you will need
to overwrite your existing index.php file with the new file from Version
2.0.2, however, any custom configuration variables must be transferred
to the new file.

mimes.php Updated
-----------------

The mimes.php file has been updated for 2.0.2. You will need to
overwrite your existing system/expressionengine/config/mimes.php file
with the new file from Version 2.0.2.

Redundant Channel Preferences Removed
-------------------------------------

Due to the ability to control publish field displays with :doc:`custom
layouts </cp/content/publish_page_layouts>`, a number of now irrelevant
channel preferences for the publish page were removed.

Preferences Array Update
------------------------

The site\_pages array was encoded in keeping with other site
preferences. New pages created in the 2.x versions will already be
encoded, however imported data may not have been. Further, this update
checks that page data is stored consistent with the 1.6.9 update.

If you use :doc:`Pages </addons/pages/index>` and have any add-ons that
might make use of this array, be certain to update the add-ons as part
of this version update. Not doing so may result in broken pages. Add-ons
that may be affected include Structure, LG Better Meta, and the Nested
Menu Plugin.

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

:ref:`Return to Update Page <update_cleanup>`


