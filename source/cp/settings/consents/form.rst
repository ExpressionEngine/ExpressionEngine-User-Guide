.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Create/Edit Consents
====================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Settings --> Consents`

.. Overview

This section of the Control Panel allows you to create and edit custom consent requests and edit the title and content of programmatically generated consents.

.. note:: Editing a consent creates a new consent request and nullifies all prior user consents to the request, regardless of whether they consented to an earlier version of the request.  

.. Screenshot (optional)

.. Permissions

Permission Restrictions
-----------------------

* Access settings: General Settings
* Access settings: Consent Requests

Fields
------

.. contents::
  :local:
  :depth: 1

.. Each Field

Consent Title
~~~~~~~~~~~~~

The title of the consent request. For example, 'Terms of Service'.

Consent Name
~~~~~~~~~~~~

The short name of the consent request, used in the :doc:`consent module </add-ons/consent/index>` tags. For example, 'tos'.

Request
~~~~~~~

A description of the consent being requested. In the case of a Terms of Service consent request, this would be the complete terms consent is being requested for.

