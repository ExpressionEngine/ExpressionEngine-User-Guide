########################
ExpressionEngine Add-ons
########################

ExpressionEngine is built on CodeIgniter, Ellislab's Open Source PHP framework.
Having CodeIgniter as its foundation makes ExpressionEngine incredibly
extensible. Along with the Core framework, ExpressionEngine offers developers an
API. This has allowed the EllisLab Community to develop and offer an amazing
number of ExpressionEngine Add-ons!

ExpressionEngine Add-ons come in two flavors. Add-ons made by EllisLab are
:term:`first-party`, Add-ons made by outside developers are :term:`third-party`.

No matter where they come from, there are six distinct types of ExpressionEngine
Add-ons. The type of Add-on is important to know, since when and how the Add-on
works with ExpressionEngine is key to undertanding what to expect.

************
Add-on Types
************

.. contents::
	:local:

Expansion
=========

Expansions are the most far-reaching type of Add-on. They change they way
ExpressionEngine works on a foundational level. Currently, the only Expansion
available is the first-party :doc:`Multiple Site Manager </cp/sites/index>`.


Module
======

Modules allow for three types of interacton with ExpressionEngine. A module can
us any combination of those interactions that the developer needs.

Control Panel interface
-----------------------

A module typically has settings and data associated with it. Its Control Panel
is where you will interact with those features.


Module template tags
--------------------

Template tags are what you use to pull the module's data into your templates.
The :doc:`Channel module </modules/channel/channel_entries>` is one well known
example.


`?ACT=` URLs
------------

ExpressionEngine `?ACT=` URLs, short for "Action" allow modules to recived
information from the front of the site. Think about a module that accepts user
input, like :doc:`SafeCracker </modules/safecracker/index>`. SafeCracker sends
the data the user inputs into the form and posts that to an ACTion URL that
ExpressionEngine uses to hand the submitted data over to SafeCracker so that it
can create the cahnnel entry.


Fieldtype
=========

Plugin
======

Extension
=========

Accessory
=========