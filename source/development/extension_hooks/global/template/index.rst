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

    $this->EE->extensions->call('template_fetch_template', $row);

  :param array $row: Data for the current template
  :rtype: Void

  .. versionadded:: 2.4.0

template_post_parse
---------------------

.. function:: template_post_parse($final_template, $sub, $site_id)

  Modify template after tag parsing

  How it's called::

    $this->final_template = $this->EE->extensions->call(
        'template_post_parse',
        $this->final_template,
        $sub,
        $site_id
    );

  :param string $final_template: The template string after template tags
    have been parsed
  :param boolean $sub: ``TRUE`` if the current template is an embed
  :param string $site_id: Site ID of the current template
  :returns: The adjusted ``$final_template``
  :rtype: String

  .. versionadded:: 2.4.0
