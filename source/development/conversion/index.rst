ExpressionEngine 2.0 Conversion Guidelines
==========================================

Overview
--------

ExpressionEngine 2.0 leverages the CodeIgniter framework, which is a
Module-View-Controller (MVC) approach to object oriented programming
(OOP). For third party developers making the transition from pre-2.0
code, you will find a a number of changes to the core code. Some classes
are now libraries, others have been moved to helper functions, and still
others have been deprecated. 2.0 also introduces the 'super object'
pseudo-namespace, which replaces the global object references.
Fortunately, updating your modules and plugins to work with
ExpressionEngine 2.0 is a fairly simple task. This guide is an overview
of the changes you will need to make to have your add-ons up and running
under 2.0.

Guidelines
----------

-  `Add-on Package File Structure <../packages.html>`_
-  `General Syntax Changes <syntax.html>`_
-  `Module Specific Changes <modules.html>`_
-  `Module Conversion Walk-through <walk-through.html>`_

Downloadable Conversion Tools
-----------------------------

-  :download:`TextMate syntax conversion macro <ee_textmate_macro.zip>` -
   convenient way to hit some of the more banal syntax changes
   automatically.

.. toctree::
	:glob:
	:hidden:
	:titlesonly:

	*