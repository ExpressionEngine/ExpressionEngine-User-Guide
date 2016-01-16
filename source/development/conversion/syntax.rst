##############
Syntax Changes
##############

.. highlight:: php

This section is an overview of syntax changes for third party integration with
the new ExpressionEngine.

General Syntax Changes
======================

ExpressionEngine 3.0 adopts `PSR-1 <http://www.php-fig.org/psr/psr-1/>`_ and
`PSR-4 <http://www.php-fig.org/psr/psr-4/>`_, which means ``StudlyCaps`` for
class names, ``camelCase`` for method names, `namespaces
<http://php.net/namespace>`_, and `autoloading <http://php.net/autoload>`_.

CP URLs
-------

``cp_url(...)`` has been deprecated, please use ``ee('CP/URL', '...')``.
For the full documentation see :doc:`/development/cp_styles/index`.

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
