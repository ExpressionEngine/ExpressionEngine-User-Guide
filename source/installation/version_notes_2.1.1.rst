Update Notes for Version 2.1.1
==============================


Comment Module
--------------

Moved Comment Management to the Comment Module Control Panel
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

With the addition of a :doc:`Control Panel for the Comments Module
</comment/control_panel/index>`, all comment management was
moved to the Comment CP. In order to moderate comments, a member group
must now have access to the Comment Module (set in :doc:`Member Groups -
Create/Edit </cp/members/groups/form>`).

Added Admin Notification of Comments Variables
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following variables were made available to the Admin Notification of
Comments Specialty Template:

-  {entry\_id}
-  {url\_title}
-  {channel\_id}
-  {comment\_url\_title\_auto\_path}
-  {close\_link}
-  {approve\_link}

Added User Comment Notification Variables
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following variables were made available to the Admin Notification of
Comments Specialty Template:

-  {entry\_id}
-  {url\_title}
-  {channel\_id}
-  {comment\_url\_title\_auto\_path}

Added a new Email Notification Template: User Comments Added Notification
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This template is used to send a single notifications to entry
subscribers when multiple comments for that entry are opened at the same
time during comment moderation.

Developers
----------

Alterations made to the delete\_comment\_additional hook
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Added a new parameter $comment\_ids and moved the hook above the delete
query.

Removed the comment\_form\_action hook
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This hook has been removed from mod.comment.php.

Field Type code deprecation warning
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We have noticed in a number of third party Field Types that developers
are accessing the field\_id via *$this->settings['field\_id']*. This is
incorrect and is not a supported property of that array. We have
included a hack for this point release to allow these Field Types to
continue working, however **this hack will be removed in
ExpressionEngine 2.1.2**.

Please update your code to use $this->field\_id :doc:`as documented
</development/fieldtypes>` as soon as possible so that sites using your
Field Types do not break in future releases.

:ref:`Return to Update Page <update_cleanup>`


