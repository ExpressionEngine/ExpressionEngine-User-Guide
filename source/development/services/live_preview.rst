LivePreview Service
===================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

Overview
--------

The LivePreview service provides a mechanism to check for, and fetch, preview data.

Simple example
--------------

If your fieldtype add-on fetches data when rendering a front-end request, you will want to check and see if there is any Live Preview entry data. If there is you'll want to use that data instead of what you would fetch from the database::

  if (ee('LivePreview')->hasEntryData())
  {
    $data = ee('LivePreview')->getEntryData();
    $entry_id = $data['entry_id'];
    $my_data[$entry_id] = $data;
  }

LivePreview Service Methods
---------------------------

.. namespace:: EllisLab\ExpressionEngine\Service\LivePreview

.. class:: LivePreview

.. method:: hasEntryData()

Check if there is preview entry data.

:returns: TRUE if it has preview entry data, FALSE if not
:rtype: Boolean

.. method:: getEntryData()

  Gets the preview entry data.

  :returns: An array of entry data, or ``FALSE`` if there is no data
  :rtype: Array/Boolean
