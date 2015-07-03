Control Panel Styles
====================

.. contents::
  :local:

.. highlight:: php

General Guidelines
------------------

We have published an `ExpressionEngine 3.0 CP style-guide
<https://ellislab.com/style-guide>`_ which is what we use internally when
working on the Control Panel. Below are some PHP related guidelines.

External Links
~~~~~~~~~~~~~~

To protect the users control panel URL from ending up in web server
referrer logs, use :meth:`Cp::masked_url` from the Control Panel Class::

  ee()->cp->masked_url('http://www.google.com');

Will result in::

  http://example.com/index.php?URL=http://www.google.com

.. _cp_internal_links:

Internal Links
~~~~~~~~~~~~~~

Internal control panel links should be generated with the ``ee('CP/URL')``
helper function which generates control panel URLs based on parameters
passed in.

For example, to link to the ``publish`` controller, pass it in
as the first parameter to ``ee('CP/URL')``::

  ee('CP/URL', 'publish');

To link to a particular method in a controller, add it to the parameter
with a slash::

  ee('CP/URL', 'publish/method_name');

If the method accepts arguments, they can be passed in cleanly by adding
them on the end separated by a slash::

  ee('CP/URL', 'publish/method_name/5');

If the link requires any other GET parameters, they can be passed in via
an associative array in the second parameter::

  ee('CP/URL', 'publish/edit', array('filter_by_channel' => $channel_id));

See :doc:`/development/services/url` for the full documentation.

Control Panel Constants
~~~~~~~~~~~~~~~~~~~~~~~

- ``BASE`` - Name of control panel file with the users session id
- ``AMP`` - Will render ``&amp;``
- ``AJAX_REQUEST`` - Returns Boolean TRUE if a request was made via an
  Ajax Request
- ``QUERY_MARKER`` - Renders a query marker (``?``)
- ``APPPATH`` - Server path to the ``system/ee/legacy`` directory
- ``PATH_THIRD`` - Server path to the
  ``system/user/addons`` directory
- ``PATH_JQUERY`` - Server path to jQuery files at
  ``system/expressionengine/javascript/compressed/jquery``
