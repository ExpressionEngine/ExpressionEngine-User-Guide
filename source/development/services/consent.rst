Consent Service
===============

.. highlight:: php

Consent management is key to processing a user's personal data. The Consent service provides a simple API to manage requests for consent, and can be used to determine if a member has granted consent to a specific request.

The Consent service can help an add-on that processes personal data be compliant with regulations such as the |gdpr|. All consent requests registered through the service will be included in the :doc:`consent manager </cp/settings/consents>`.  Consent for requests can be granted and withdrawn via a user's :doc:`control panel profile page </cp/members/profile/consents>` or via the :doc:`Consent module </add-ons/consent/index>` on the frontend.  All consent grants and withdrawals made through the profile and the module will automatically be :doc:`logged </cp/logs/consent>`.

.. contents::
  :local:
  :depth: 1


Creating Add-on Consent Requests
--------------------------------

Anyone can check if a member has granted consent for a specific request, and gather all members who have consented for one. But you may only **write** and **grant** consents that your add-on manages. To be able to make and manage your own consents, you need to add your consents to your :ref:`addon.setup.php` file<addon_consent_requests>`.

Managing Consent via API
------------------------

While the granting and withdrawal of consent will typically be done through the member profile page or the consent manager, the Consent service does provide simple methods for managing consents.


Check a Single Consent
~~~~~~~~~~~~~~~~~~~~~~

Check to see if consent has been granted by a user::

  if (ee('Consent')->hasGranted('my_addon:do_stuff'))
  {
    $this->doStuff();
  }

.. tip:: ``ee('Consent')`` acts on the currently logged in member. To act on a different member, pass the ``member_id`` or a member model object as the second parameter, i.e. ``ee('Consent', $member)->hasGranted('my_addon:do_stuff')``.


Get all Consents for a Request
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Act on all members who granted a specific consent::

  $consents = ee('Consent')->getGrantedConsentsFor('my_addon:do_stuff');
  foreach ($consents as $consent)
  {
    $this->doStuffTo($consent->Member);

    // Log what we did for proper record keeping
    $message = ee()->session->userdata('username') . ' did stuff to member ' . $consent->Member->getId();
    $consent->log($message);
  }

.. tip:: Always use the Consent's ``log()`` method when processing personal data.

Grant and Withdraw Consent
~~~~~~~~~~~~~~~~~~~~~~~~~~

Typically users will manage their consent via the :doc:`Consent module </add-ons/consent/index>`.  However, it is easy to grant and withdraw consent via the API as well.

Grant consent, from a POSTed opt-in::

  if (get_bool_from_string(ee()->input->post('allow_do_stuff')))
  {
    ee('Consent')->grant('my_addon:do_stuff');
  }

Withdraw consent::

  if ( ! get_bool_from_string(ee()->input->post('allow_do_stuff')))
  {
    ee('Consent')->withdraw('my_addon:do_stuff');
  }


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

.. method:: hasResponded($request_ref)

  Has the member responded to a given consent request?

  :param string|int $request_ref: The name or ID of a consent request
  :returns: TRUE if they have, FALSE if they have not
  :rtype: Boolean

.. method:: getConsents()

  Gets all the consents the member (or anonymous visitor) has responded to.

  :returns: A Collection of Consent objects (ConsentRequest for anonymous)
  :rtype: Object

.. method:: getGrantedConsentsFor($request_ref)

  Gets all the granted consents for a specific request

  :param string|int $request_ref: The name or ID of a consent request
  :returns: A Collection of Consent objects
  :rtype: Object

.. method:: getConsentDataFor($request_ref)

  Gets the values for a specific request and the member's consent

  :param int|string|array  $request_ref: The name or an array of names, or id or array of ids
  :returns: A Collection of associative arrays for each Consent Request
  :rtype: Object
