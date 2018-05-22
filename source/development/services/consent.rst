Consent Service
===============

.. highlight:: php

Consent management is key to processing a user's personal data. The Consent service provides a simple API to manage requests for consent, and can be used to determine if a member has granted consent to a specific request.

The Consent service can help an add-on that processes personal data be compliant with regulations such as the |gdpr|. It also enables administrators to display and manage member consents for your add-on consistenly in ExpressionEngine, including retaining proper records of when personal data is processed.

.. contents::
  :local:
  :depth: 1

Simple Examples
---------------

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

Check to see if consent has been granted::

  if (ee('Consent')->hasGranted('my_addon:do_stuff'))
  {
    $this->doStuff();
  }

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

.. tip:: ``ee('Consent')`` acts on the currently logged in member. To act on a different member, pass the ``member_id`` or a member model object as the second parameter, i.e. ``ee('Consent', $member)->hasGranted('my_addon:do_stuff')``.

Creating Add-on Consent Requests
--------------------------------

Anyone can check if a member has granted consent for a specific request, and gather all members who have consented for one. But you may only **write** and **grant** consents that your add-on manages. To be able to make and manage your own consents, you need to add your consents to your ``addon.setup.php`` file::

  'consent.requests' => [
    'do_stuff' => [
      'title' => 'Do Stuff',
      'request' => 'We will *do stuff* with your data, okay?',
      'request_format' => 'markdown',
    ],
    'do_some_other_stuff' => [
      'title' => 'Do Some Other Stuff',
      'request' => 'We will *do some other stuff* with your data, okay?',
      'request_format' => 'markdown',
      'double_opt_in' => TRUE,
    ],
  ],

This will register your consent requests with your add-on namespace, and you can now grant and withdraw consent using your add-on's prefix (e.g. ``my_addon``) and a colon(``:``)::

  ee('Consent')->grant('my_addon:do_stuff');

.. note:: Consent requests in your ``addon.setup.php`` file will automatically be created when your add-on is installed. If you modify your ``consent.requests`` in your setup file, any **new** consent requests that do not already exist will automatically be created when the user updates your add-on. So make sure you increment your app version if you add new consent requests.

Anatomy of the ``consent.requests`` array
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The ``consent.requests`` array takes the short name of your consent request as a key, and the properties of your consent request as an array. Here is a definition of the available keys:


+----------------+----------------------------------------------------------------------------------------------------+
|      Key       |                                             Definition                                             |
+================+====================================================================================================+
| title          | (*required*) The display name for the consent request                                              |
+----------------+----------------------------------------------------------------------------------------------------+
| request        | (*required*) The explanatory text for the consent request.                                         |
|                | After installation, a site admin can modify this text                                              |
|                | as necessary to fit their needs, but you should provide a clear                                    |
|                | and direct explanation of what consenting to this request will allow.                              |
+----------------+----------------------------------------------------------------------------------------------------+
| request_format | (*optional*) Any valid format that will be used to parse                                           |
|                | your request text. (e.g. ``br``, ``markdown``, ``none``, ``xhtml``)                                |
+----------------+----------------------------------------------------------------------------------------------------+
| double_opt_in  | (*optional*) Boolean value, whether or not this consent requests                                   |
|                | requires a double opt-in (e.g. checking a checkbox and clicking a verification link sent by email) |
+----------------+----------------------------------------------------------------------------------------------------+

.. note:: The short name will also be used by a site builder in ``{exp:consent}`` tag parameters.

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
