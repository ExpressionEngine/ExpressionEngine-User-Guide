Consents
========

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Members --> Profile --> Consents`

.. Overview

ExpressionEngine creates consent requests for actions that may require user permission.  Third party addons and site administrators may also generate such permission requests.  The consent page allows you to manage your response to all existing consent requests.  Consent may be granted or withdrawn at any point and a record of the user action will be made.

A user may also manage their consent requests on the frontend using the :doc:`consent module </add-ons/consent/index>`.  Consent management is a primary tool for those who need to create :doc:`GDPR compliant</general/gdpr>` sites.

.. note:: In order for cookie consent requests to display, :ref:`require_cookie_consent` must be enabled.

.. Screenshot (optional)

.. Permissions

Permission Restrictions
-----------------------

* Access settings: Members
* Members Allowed actions: Edit Members

Actions
-------

.. contents::
  :local:

.. Each Action

Search Consent Requests
~~~~~~~~~~~~~~~~~~~~~~~

Search consent requests by date or by keywords in title; order by date, title or status.


View
~~~~

This button opens a modal where you will find a more detailed description of the consent request.  Permission may be granted or denied new consent requests and granted or revoked in the case of an edit.

Bulk Actions
~~~~~~~~~~~~

The checkbox in the right-most column of the table selects a button for a bulk
action. When at least one checkbox is checked the bulk action dropdown menu and
submit button will be made available in the lower righthand corner of the table.

Opt In
^^^^^^

Permission will be granted to all selected consent requests and a log of the actions will be made.

Opt Out
^^^^^^^

Permission will be denied to all selected consent requests and a log of the actions will be made.
