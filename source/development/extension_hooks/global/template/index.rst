.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Template Library Extension Hooks
==================================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

template_fetch_template
-----------------------

.. function:: template_fetch_template($row)

  Access template data prior to template parsing.

  How it's called::

    ee()->extensions->call('template_fetch_template', $row);

  :param array $row: Data for the current template
  :rtype: Void

  .. versionadded:: 2.4.0

template_post_parse
---------------------

.. function:: template_post_parse($final_template, $is_partial, $site_id)

  Modify template after tag parsing

  How it's called::

    $this->final_template = ee()->extensions->call(
        'template_post_parse',
        $this->final_template,
        $is_partial,
        $site_id
    );

  :param string $final_template: The template string after template tags
    have been parsed
  :param boolean $is_partial: ``TRUE`` if the current template is an
    embed or a layout
  :param string $site_id: Site ID of the current template
  :returns: The adjusted ``$final_template``
  :rtype: String

  .. note:: Before 2.8.0 ``$is_partial`` was called ``$is_sub`` and only
    applied to embeds.

  .. versionadded:: 2.4.0
