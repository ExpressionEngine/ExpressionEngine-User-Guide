Consent Service
===============

.. contents::
  :local:
  :depth: 1

.. highlight:: php

The consent service records consent for consent requests, and can determine if
a member has granted consent to a request.

Simple Examples
---------------

Grant consent::

  ee('Consent')->grant('my_addon:do_stuff');

Withdraw consent::

  ee('Consent')->withdraw('my_addon:do_stuff');

Check to see if consent has been granted::

  if (ee('Consent')->hasGranted('my_addon:do_stuff'))
  {
    do_stuff();
  }

Act on all members who granted consent::

  $consents = ee('Consent')->getGrantedConsentsFor('my_addon:do_stuff');
  foreach ($consents as $consent)
  {
    do_stuff_to($consent->Member);

    // Log what we did for record keeping
    $consent->log('Did stuff.');
  }

.. note:: Use the Consent's ``log()`` method when processing personal data.

.. note:: ``ee('Consent')`` acts on the currently logged in member. To act on a different member, pass the ``member_id`` or a member model object as the second parameter, i.e. ``ee('Consent', $member)``.

Making A New Request
--------------------

When making a consent for your add-on namespace the ``consent_name`` by prefixing
it with your add-on's prefix (i.e. ``my_addon``) and a colon (``:``)::

  $request = ee('Model')->make('ConsentRequest');
  $request->source = 'a'; // App-generated request: cannot be deleted in the CP
  $request->title = 'Consent to do stuff';
  $request->consent_name = 'my_addon:do_stuff';
  $request->save();

Consent Methods
---------------

.. namespace:: EllisLab\ExpressionEngine\Service\Consent

.. class:: Consent

.. method:: grant($request_ref, $via = 'online_form')

  Creates/updates a consent record for the member for the given consent request

  :param string|int $request_ref: The name or ID of a consent request
  :param string $via: How the consent was granted
  :rtype: void

.. method:: withdraw($request_ref)

  Updates a consent record for the member for the given consent request to indicate that consent has been withdrawn

  :param string|int $request_ref: The name or ID of a consent request
  :rtype: void

.. method:: hasGranted($request_ref)

  Has the member granted consent for a given consent request?

  :param string|int $request_ref: The name or ID of a consent request
  :returns: TRUE if they have, FALSE if they have not
  :rtype: Boolean

.. method:: getGrantedRequests()

  Gets all the consent requests the member (or anonymous visitor) has granted consent.

  :returns: A Collection of ConsentRequest objects
  :rtype: Object

.. method:: getGrantedConsentsFor($request_ref)

  Gets all the granted consents for a specific request

  :param string|int $request_ref: The name or ID of a consent request
  :returns: A Collection of Consent objects
  :rtype: Object
