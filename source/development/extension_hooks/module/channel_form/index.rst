.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Channel Form Extension Hooks
============================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

channel_form_entry_form_absolute_start
--------------------------------------

.. function:: channel_form_entry_form_absolute_start($channel_form_obj)

  How it's called::

    ee()->extensions->call('channel_form_entry_form_absolute_start', $this);
    if (ee()->extensions->end_script === TRUE) return;

  :param object $channel_form_obj: Active channel form object
  :rtype: Void

  .. versionadded:: 2.7.0

channel_form_entry_form_tagdata_start
-------------------------------------

.. function:: channel_form_entry_form_tagdata_start($tagdata, $channel_form_obj)

  How it's called::

    ee()->TMPL->tagdata = ee()->extensions->call('channel_form_entry_form_tagdata_start', ee()->TMPL->tagdata, $this);
    if (ee()->extensions->end_script === TRUE) return;

  :param string $tagdata: Enclosed template chunk
  :param object $channel_form_obj: Active channel form object
  :rtype: String

  .. versionadded:: 2.7.0

channel_form_entry_form_tagdata_end
-----------------------------------

.. function:: channel_form_entry_form_tagdata_end($return_tagdata, $channel_form_obj)

  How it's called::

    $return = ee()->extensions->call('channel_form_entry_form_tagdata_end', $return, $this);
    if (ee()->extensions->end_script === TRUE) return;

  :param string $return_tagdata: Fully processed template tagdata
  :param object $channel_form_obj: Active channel form object
  :rtype: String

  .. versionadded:: 2.7.0

channel_form_submit_entry_start
-------------------------------

.. function:: channel_form_submit_entry_start($channel_form_obj)

  How it's called::

    ee()->extensions->call('channel_form_submit_entry_start', $this);
    if (ee()->extensions->end_script === TRUE) return;

  :param object $channel_form_obj: Active channel form object
  :rtype: Void

  .. versionadded:: 2.7.0

channel_form_submit_entry_end
-----------------------------

.. function:: channel_form_submit_entry_end($channel_form_obj)

  How it's called::

    ee()->extensions->call('channel_form_submit_entry_end', $this);
    if (ee()->extensions->end_script === TRUE) return;

  :param object $channel_form_obj: Active channel form object
  :rtype: Void

  .. versionadded:: 2.7.0
