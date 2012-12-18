#######
Add-Ons
#######

ExpressionEngine is built on CodeIgniter, Ellislab's Open Source PHP framework.
Having CodeIgniter as its foundation makes ExpressionEngine incredibly
extensible. 

Where to Find Add-Ons
=====================

EllisLab offers a collection of :ref:`Add-Ons <add-ons-available-for-download>` that are
available on GitHub. Many more are available from third-party developers.

Installation
============

Add-Ons typically come in ``.zip`` format. Once unzipped, you place the Add-On
folder in ``/system/third_party/``. If the Add-On includes a themes package,
you'll place that in ``/themes/third_party/``.

All Add-Ons must be *inside* a folder. That folder must be named exactly like
the Add-On file.

**xample:**   
You've found and downloaded "Most Amazing Plugin" and you've plced
the folder in the ``third_party`` folders.

You visit the Control Panel, click the Add-Ons menu and pick ``Plugins``.  "Most
Amazing Plugin" isn't anywhere to be seen? Let's go make sure eveything is in
good shape with the Add-On folder name.

You look in ``/system/third_party/`` and see ``most_amazing_plugin-THX113A``.
You open that folder and see a file named ``pi.most_amazing_plugin.php``. With
that, you change the name of the folder to match the *inner* part of the name,
excluding ``pi.`` and ``.php``. You should now have a folder named
``most_amazing_plugin``. Revisit the Control Panel and you should see "Most
Amazing Plugin" listed with any other Plugins you have.

Congratulations, "Most Amazing Plugin" is ready to use.






