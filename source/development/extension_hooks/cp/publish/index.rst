Publish Controller Extension Hooks
==================================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

entry_save_and_close_redirect
-----------------------------

.. function:: entry_save_and_close_redirect($entry)

  This hook is executed when a member clicks Save & Close on the publish form,
  and provides an opportunity to change where the member is redirected to.

  How it's called::

    $redirect_url = ee()->extensions->call('entry_save_and_close_redirect', $entry);

  :param ChannelEntry $entry: Model object of the channel entry being saved
  :rtype: String of the URL to redirect to

  .. versionadded:: 4.0.0
