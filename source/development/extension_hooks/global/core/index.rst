Core Library Extension Hooks
==================================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

core_boot
---------

.. function:: core_boot()

  Run tasks on every ExpressionEngine request.

  How it's called::

    ee()->extensions->call('core_boot');
    if (ee()->extensions->end_script === TRUE) return;

  :rtype: Void

  .. note:: This hook fires on every ExpressionEngine request, so be mindful of the speed and resource usage of your code here. If you need to run code based on the type of request, the ``REQ`` constant can be checked to determine the type of request. It will either be ``PAGE`` for front-end requests, ``CP`` for control panel requests, or ``ACTION`` for module action requests (``ACT=`` URLs). e.g.: ``if (REQ == 'CP') { // Do work only on control panel requests }``

  .. versionadded:: 3.5.0

core_template_route
-------------------

.. function:: core_template_route($uri_string)

  Reassign the template group and template loaded for parsing.

  How it's called::

    $edata = ee()->extensions->call('core_template_route', ee()->uri->uri_string);
    if (is_array($edata) && count($edata) == 2)
    {
        list($template_group, $template) = $edata;
    }

  :param string $uri_string: Current URI string
  :returns: Array containing the name of the template group and template
    (see below)
  :rtype: Array

  Example of array to return::

    array(
        'template_group', // Template group name
        'template'        // Template name
    );
