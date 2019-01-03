.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Comment Settings
================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Settings --> Comment Settings`

.. Overview

This section of the Control Panel allows you to define comment
settings of your site. If you are using the :doc:`/cp/msm/index`, note that
these settings are per-site.

.. Screenshot (optional)

.. Permissions

Permission Restrictions
-----------------------

* Access settings: General Settings

Settings
--------

.. contents::
  :local:
  :depth: 1

.. Each Action/Section

Enable comment module?
~~~~~~~~~~~~~~~~~~~~~~

When set to enable, channels will be able to use the comment module.

Enable word censoring?
~~~~~~~~~~~~~~~~~~~~~~

When set to "enable", commenting will use the :doc:`word censoring <word-censor>` filters.

Moderate expired entires?
~~~~~~~~~~~~~~~~~~~~~~~~~

If this option is enabled, then comments will not immediately appear on
the site. Instead, the comments will go into a queue and await
review/moderation by an administrator.

Member Groups (such as the SuperAdmin Group by default) can be set to
bypass comment moderation and have their comments posted immediately.
That option can be set at :menuselection:`Members --> Member Groups`.

Comment edit time limit (in seconds)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This is the optional number of seconds that must lapse after a comment
is posted before that same user can post another comment. This setting
can help reduce comment "spam". The preference can be left blank or set
to 0 (zero) if you do not want to impose a limit.