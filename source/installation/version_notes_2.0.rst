Update Notes for Version 2.0
============================

ExpressionEngine 2.0.0 brings an immense amount of changes, most of
which are handled for you automatically in the update process (such as
the change of terminology from 'weblog' to 'channel'). A few items here
may require manual changes to be made.

The following list are items that are changing that you will want to be
aware of prior to upgrading.

-  Third-party add-ons from the version 1.x will not work with
   ExpressionEngine 2.0. Please contact each add-on's author for a 2.0
   compliant version before upgrading, or your site will not function
   properly.
-  The Trackback module has been removed from ExpressionEngine. If you
   are using Trackbacks, you will be given the opportunity to export
   your existing trackbacks to an archive or convert them to comments
   before they are deleted.
-  The Photo Gallery module has been removed from ExpressionEngine. If
   your installation of 1.x utilizes the Photo Gallery module, it is not
   recommended that you upgrade at this time, as a conversion to a new
   solution is not available in v2.0.0
-  The features of the first-party Fresh Variables add-on have been
   incorporated natively into ExpressionEngine 2.0. If you have the
   Fresh Variables module installed, its content will be converted to
   :doc:`Snippets </templates/globals/snippets>`.
-  ExpressionEngine generated URLs no longer use a trailing slash.
-  The deprecated HTML tags <strike> and <u> (and deprecated in v1.6.5
   typography), will no longer render as inline tags when using XHTML
   typography. You will need to replace <strike> and <u> with the valid
   corresponding tags <del> and <em> to avoid unwanted paragraph breaks.
   If you need assistance with this modification, please contact
   ExpressionEngine support.

:ref:`Return to Update Page <update_additional_steps>`


