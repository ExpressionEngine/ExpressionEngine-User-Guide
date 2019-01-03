.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

################
Pagination Class
################

.. contents::
  :local:

.. highlight:: php

*********************
Generating Pagination
*********************

.. class:: Pagination_object

  The pagination library (and object) is a flexible way to create
  pagination for many different instances. More often then not, you will
  not be using all of it's features and options, but they're there
  because we've run into situations where they're needed.

  Your first step will be using ExpressionEngine's pagination library to
  create a :class:`Pagination_object`::

    ee()->load->library('pagination');
    $pagination = ee()->pagination->create();

  This instance of a :class:`Pagination_object` represents the various
  conditions, template, and parameters for a specific group of things,
  whether it's channel entries, comments, files, forum threads, or
  otherwise.

  Once you've created the object, you need to `prepare the template`_.

Prepare the Template
====================

.. method:: prepare($template)

  ``prepare()`` determines if ``{paginate}`` is in the template data and
  if so, stores it in the object and removes it from the template. If
  you're using field pagination (you most likely aren't) then we also do
  some work to find additional tags needed for that kind of pagination::

    ee()->TMPL->tagdata = $pagination->prepare(ee()->TMPL->tagdata);

  The above line removes the pagination template from
  :attr:`TMPL::$tagdata` parses any parameters set on
  ``{pagination_links}``. In addition, if you're using inline pagination
  (using the :attr:`Pagination_object::$position`) we replace the
  pagination with a marker instead of removing it entirely.

  :param string $template: The template data you want to prepare for
    pagination, typically :attr:`TMPL::$tagdata`.
  :returns: The prepared template, typically with it's pagination tags
    removed.
  :rtype: String

Build the Pagination
====================

.. method:: build($total_items, $per_page)

  The next step in the process is building the pagination. This is most
  of the heavy lifting in the process and consists of figuring out
  offsets, how many pages should exist given the ``$total_items`` and
  ``$per_page``, the basepath and URLs, and then generates the necessary
  data to later :meth:`render <Pagination_object::render>`::

    $total_items = $query->num_rows();
    $per_page = ee()->TMPL->fetch_param('limit');
    $pagination->build($total_items, $per_page);

  It's recommended that you don't run this step if pagination isn't
  necessary, so you can to see if :attr:`$Pagination_object::$paginate`
  is ``TRUE`` before running :meth:`Pagination_object::build`::

    if ($pagination->paginate === TRUE)
    {
      ...
      $pagination->build($total_items, $per_page);
    }

  :param int $total_items: The total number of items being paginated.
  :param int $per_page: The number of items to show per page.
  :returns: ``TRUE`` if everything was successful, ``FALSE`` otherwise.
  :rtype: Boolean

Render the Pagination
=====================

.. method:: render($return_data)

  The last step is rendering the pagination into your template. Normally
  the pagination will be added to the top, bottom, or both top and
  bottom of your tag pair depending upon the
  :attr:`Pagination_object::$position` property::

    $this->return_data = $pagination->render($this->return_data);

  .. note:: Unless you've manually set
    :attr:`Pagination_object::$position` to ``hidden``, you should always
    run :meth:`Pagination_object::render`. It will remove the unused
    pagination template and tags.

  :param string $return_data: Template with all individual items parsed,
    about to be output.
  :returns: ``$return_data`` with pagination added back if required. If
    pagination was unnecessary, nothing is added and the inline template
    is removed if necessary.
  :rtype: String

**********
Properties
**********

.. attr:: paginate

  This property is set once :meth:`Pagination_object::prepare` and is
  useful for checking whether subsequent pagination calls should run.
  It's triggered by finding a ``{paginate}`` tag, so if you're using
  something else, you'll need to force the :class:`Pagination_object`'s
  hand and set this to ``TRUE``.

.. attr:: current_page

  The current page number, should be 1 through ``n``.

.. attr:: offset

  The current offset, the number of items past the first. For example,
  if you're showing 10 items per page and you're on page 3, your offset
  should be 20.

.. attr:: total_items

  The total number of **items** being paginated.

.. attr:: total_pages

  The total number of **pages** being paginated.

.. attr:: per_page

  The number of **items** per page.

.. attr:: basepath

  The basepath URL for the pagination links. Normally this is
  automatically determined, but in some cases you will have to specify
  a basepath.

.. attr:: prefix

  The letter used to prefix the offset in pagination URLs (e.g.
  ``blog/archive/P30``, ``P`` is the prefix and ``30`` is the offset).
  If changed, ensure this is fairly unique to URL segments.

.. attr:: position

  **Can only be set, not retrieved.** Manually set the position of the
  pagination. Only options are ``top``, ``bottom``, ``both``,
  ``inline``, or ``hidden``.

.. attr:: type

  **Can only be retrieved, not set.** This is the name of the calling
  class and is useful for when using the pagination extension hooks so
  you can only run your hook for specific modules.

Field Pagination Specific
=========================

.. attr:: field_pagination

  This property is set once :meth:`Pagination_object::prepare` and is
  only ``TRUE`` in the case of field pagination, which will happen if
  ``{multi_field="..."}`` is found in ``$template``.

.. attr:: cfields

  **Only used with :attr:`Pagination_object::$field_pagination`.** The
  custom fields that we're potentially paginating over.

.. attr:: field_pagiation_query

  **Only used with :attr:`Pagination_object::$field_pagination`.** This
  is the query for the individual item that is being field paginated
  over.
