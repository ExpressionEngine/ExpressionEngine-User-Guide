Publish Controller Extension Hooks
==================================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

entry_submission_redirect
-------------------------

.. function:: entry_submission_redirect($entry)

  This hook is executed when a member clicks Save & Finish on the publish form,
  and provides an opportunity to change where the member is redirected to.

  How it's called::

    $redirect_url = ee()->extensions->call('entry_submission_redirect', $entry);

  :param ChannelEntry $entry: Model object of the channel entry being saved
  :rtype: String of the URL to redirect to

  .. versionadded:: 4.0.0
