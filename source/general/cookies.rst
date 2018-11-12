.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Cookies
#######


.. contents::
  :local:
  :depth: 1

.. highlight:: php

Overview
--------

HTTP cookies are small bits of data set by a website or app and stored on the user's computer while the user is browsing. ExpressionEngine uses a number of cookies to help create a nicer user experience, both for guests and logged in members.

Cookies that are necessary to the functioning

By default, ExpressionEngine cookies are prefixed with ``exp_``, so the session cookie would be named 'exp_sessionid'.  However, the prefix can be configured in :doc:`/cp/settings/security-privacy`.

.. note:: This should not be considered an exhaustive list of cookies that might be in use on a given site. Third party addons may have their own cookies and cookies may be set outside of ExpressionEngine entirely.


.. csv-table:: Basic Cookies
   :file: cookie-csv/basic-cookies.csv
   :widths: 20, 50, 10, 20
   :header-rows: 1

.. csv-table:: Comment Cookies
   :file: cookie-csv/comment-cookies.csv
   :widths: 20, 50, 10, 20
   :header-rows: 1

* Cookie is set only if the user opts in via the 'save_info' field.

.. csv-table:: Forum Cookies
   :file: cookie-csv/forum-cookies.csv
   :widths: 20, 50, 10, 20
   :header-rows: 1
