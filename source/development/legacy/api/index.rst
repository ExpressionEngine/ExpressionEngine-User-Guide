ExpressionEngine API
====================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

Overview
--------

The API libraries attempt to provide a simple, unified abstraction to
common ExpressionEngine operations. This includes managing templates and
channels, as well as creating, editing, and deleting channel entries.
Typically operations of this sort are complex with multiple steps to
maintain database consistency. That makes them prone to errors and
difficult to maintain. Making use of the provided APIs removes the
burden of staying up-to-date with all of the required steps and ensures
that your add-ons will remain functional even if the underlying
architecture changes.

Calling the API
---------------

.. class:: Api

  ::

    ee()->load->library('api');

  After loading the parent API library, the child classes are loaded with
  ``instantiate()``::

    ee()->legacy_api->instantiate('channel_entries');

  At this point, methods within the api\_channel\_entries api are callable
  via ``ee()->api_channel_entries->method_name();``

Available APIs
--------------

- :doc:`Channel Categories </development/legacy/api/api_channel_categories>` – Retrieve
  information on Channel Categories.
- :doc:`Channel Entries </development/legacy/api/api_channel_entries>` – Retrieve
  information on Channel Entries.
- :doc:`Channel Fields </development/legacy/api/api_channel_fields>` – Retrieve information
  on Channel Fields.
- :doc:`Channel Structure </development/legacy/api/api_channel_structure>` – Create, Modify,
  Delete & Update Channels.
- :doc:`Template Structure </development/legacy/api/api_template_structure>` – Retrieve
  information on Template Groups.

Function Reference
------------------

The following public functions are accessible:

.. contents::
  :local:

Instantiate
~~~~~~~~~~~

.. method:: instantiate($which)

  Instantiate an API::

    ee()->legacy_api->instantiate('channel_entries');

  :param string $which: Name of the API to instantiate. Options: ``channel_categories``, ``channel_entries``, ``channel_fields``, ``channel_structure``, and ``template_structure``.
  :exception: Raises an exception if the specified API doesn't exist
  :rtype: Void

Error Count
~~~~~~~~~~~

.. method:: error_count()

  Get the number of API errors::

    ee()->legacy_api->error_count();

  :returns: The number of errors generated in API functions
  :rtype: Integer

Make URL Safe
~~~~~~~~~~~~~

.. method:: make_url_safe($str)

  Makes a string safe for use in a URL segment::

    ee()->load->library('api');
    $str = 'this is a string that's not URL safe.  (we will clean it for $5).';
    $str = ee()->legacy_api->make_url_safe($str); // Result thisisastringthatsnotURLsafe.wewillcleanitfor5.

  .. note:: Valid Characters are: a-zA-Z0-9\_-.

  :param string $str: String to make URL safe
  :returns: Cleansed string
  :rtype: String

Is String URL Safe?
~~~~~~~~~~~~~~~~~~~

.. method:: is_url_safe($str)

  Checks if a string is safe for use in a URL segment::

    ee()->load->library('api');
    $str = 'this is a string that\'s not URL safe.  (we will clean it for $5).';
    if ( ! ee()->legacy_api->is_url_safe($str))
    {
        // Do additional Processing on the string to make it URL safe
    }

  :param string $str: String to verify URL safety
  :returns: ``TRUE`` on success, ``FALSE`` on failure
  :rtype: Boolean

.. toctree::
  :glob:
  :hidden:
  :titlesonly:

  *
