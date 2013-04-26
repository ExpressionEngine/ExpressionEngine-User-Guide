Core Library Extension Hooks
==================================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

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