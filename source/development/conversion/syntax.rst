###################################
ExpressionEngine 3.0 Syntax Changes
###################################

.. highlight:: php

ExpressionEngine 3.0 introduces a new API for interacting with models. The
majority of the 2.x style models are now deprecated. In addition to a new
models API we have a dependency injection container. This section is an
overview of syntax changes for third party integration with the new
ExpressionEngine.

General Syntax Changes
======================

Model Service
-------------

The model service helps smooth out interacting with ExpressionEngine's data
types by providing an API that mimics their natural language description as
closely as is feasible. You do not query for ``channel_data`` joined on
``channel_titles``; instead, you simply get a channel entry::

  $oscar = ee('Model')->get('Member')
    ->filter('screen_name’, ‘Oscar')
    ->first();

  $oscar->bio = 'I got this.';
  $oscar->save();

For the full documentation see :doc:`/development/services/model`.

CP URLs
-------

Instead of using ``cp_url(...)`` we recommend using ``ee('CP/URL', '...')``.
