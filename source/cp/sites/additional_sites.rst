Add Sites to MSM
================

When the :doc:`Multiple Site Manager </cp/sites/index>` expansion is added to an
ExpressionEngine installation, it enables the software to power up to 3
MSM Sites. Follow these steps to add more Sites to your ExpressionEngine
installation.

Purchase Additional Sites
-------------------------

Pull up the `manage purchases <https://store.ellislab.com/manage>`__ page in
your account on EllisLab.com. (Make sure you're logged into the same EllisLab
account used to purchase the Multiple Site Manager license.) Next to the MSM
license in question, you'll see the option to *Add Sites*. Follow the checkout
process in the store.

When you purchase additional Sites, your Multiple Site Manager files are
automatically updated with the appropriate number of Sites.

Download New MSM Build
----------------------

After completing the order, head back to your `manage purchases
<https://store.ellislab.com/manage>`__ page and download a copy of the Multiple
Site Manager license with the newly added Sites. You'll need this new MSM build
to unlock the additional Sites in your software.

Upload to Your Installation
---------------------------

After unzipping the downloaded package, you'll find a directory with these
files:

-  ``system/expressionengine/libraries/Sites.php``
-  ``system/expressionengine/controllers/cp/sites.php``
-  ``system/expressionengine/language/english/sites_lang.php``

Upload each of these files to their respective directories within your ExpressionEngine installation.

Now your installation will have the ability to power that many more MSM
Sites. The next step is to :doc:`set up the new MSM Site <createsite>` in your installation.

.. note:: There is no explicit limit on the number of MSM sites that can be installed on
   a single installation of ExpressionEngine.  However, there is a technical
   limit on the size of your MySQL database tables (see the `MySQL documentation <http://dev.mysql.com/doc/refman/5.0/en/column-count-limit.html>`__).
   This effectively limits the total number of custom channel fields, and thus
   ultimately the number of sites you can install.  Depending on the types of
   fields and the MySQL storage engine, row size limits could pose a problem with
   anywhere between 500 - 2,000 custom fields.  If you are concerned you may be
   using too many custom fields, our support team can help you decide whether more
   sites can be supported.


