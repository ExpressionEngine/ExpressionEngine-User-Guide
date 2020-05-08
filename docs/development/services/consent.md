---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Consent Service

[TOC]

Consent management is key to processing a user's personal data. The Consent service provides a simple API to manage requests for consent, and can be used to determine if a member has granted consent to a specific request.

The Consent service can help an add-on that processes personal data be compliant with regulations such as the [GDPR](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation). All consent requests registered through the service will be included in the [consent manager](control-panel/settings/consents.md). Consent for requests can be granted and withdrawn via a user's [control panel profile page](control-panel/member-profile.md#consents) or via the [Consent module](add-ons/consent.md) on the frontend. All consent grants and withdrawals made through the profile and the module will automatically be [logged](control-panel/system-logs.md#consent-logs).

## Creating Add-on Consent Requests

Anyone can check if a member has granted consent for a specific request, and gather all members who have consented for one. But you may only **write** and **grant** consents that your add-on manages. To be able to make and manage your own consents, you need to add your consents to your `addon_consent_requests`.

## Managing Consent via API

While the granting and withdrawal of consent will typically be done through the member profile page or the consent manager, the Consent service does provide simple methods for managing consents.

### Check a Single Consent

Check to see if consent has been granted by a user:

    if (ee('Consent')->hasGranted('my_addon:do_stuff'))
    {
      $this->doStuff();
    }

TIP: **Tip:** `ee('Consent')` acts on the currently logged in member. To act on a different member, pass the `member_id` or a member model object as the second parameter, i.e. `ee('Consent', $member)->hasGranted('my_addon:do_stuff')`.

### Get all Consents for a Request

Act on all members who granted a specific consent:

    $consents = ee('Consent')->getGrantedConsentsFor('my_addon:do_stuff');
    foreach ($consents as $consent)
    {
      $this->doStuffTo($consent->Member);

      // Log what we did for proper record keeping
      $message = ee()->session->userdata('username') . ' did stuff to member ' . $consent->Member->getId();
      $consent->log($message);
    }

TIP: **Tip:** Always use the Consent's `log()` method when processing personal data.

### Grant and Withdraw Consent

Typically users will manage their consent via the [Consent module](add-ons/consent.md). However, it is easy to grant and withdraw consent via the API as well.

Grant consent, from a POSTed opt-in:

    if (get_bool_from_string(ee()->input->post('allow_do_stuff')))
    {
      ee('Consent')->grant('my_addon:do_stuff');
    }

Withdraw consent:

    if ( ! get_bool_from_string(ee()->input->post('allow_do_stuff')))
    {
      ee('Consent')->withdraw('my_addon:do_stuff');
    }

## Consent Methods

**class `EllisLab\ExpressionEngine\Service\Consent\Consent`**

[TOC=3]

### `grant($request_ref, $via = 'online_form')`

Creates/updates a consent record for the member for the given consent request

| Parameter     | Type         | Description                         |
| ------------- | ------------ | ----------------------------------- |
| \$request_ref | `String|int` | The name or ID of a consent request |
| \$via         | `String`     | How the consent was granted         |
| Returns       | `Void`       |                                     |

### `withdraw($request_ref)`

Updates a consent record for the member for the given consent request to indicate that consent has been withdrawn

| Parameter     | Type         | Description                         |
| ------------- | ------------ | ----------------------------------- |
| \$request_ref | `String|int` | The name or ID of a consent request |
| Returns       | `Void`       |                                     |

### `hasGranted($request_ref)`

Has the member granted consent for a given consent request?

| Parameter     | Type         | Description                               |
| ------------- | ------------ | ----------------------------------------- |
| \$request_ref | `String|int` | The name or ID of a consent request       |
| Returns       | `Boolean`    | TRUE if they have, FALSE if they have not |

### `hasResponded($request_ref)`

Has the member responded to a given consent request?

| Parameter     | Type         | Description                               |
| ------------- | ------------ | ----------------------------------------- |
| \$request_ref | `String|int` | The name or ID of a consent request       |
| Returns       | `Boolean`    | TRUE if they have, FALSE if they have not |

### `getConsents()`

Gets all the consents the member (or anonymous visitor) has responded to.

| Parameter | Type     | Description                                                    |
| --------- | -------- | -------------------------------------------------------------- |
| Returns   | `Object` | A Collection of Consent objects (ConsentRequest for anonymous) |

### `getGrantedConsentsFor($request_ref)`

Gets all the granted consents for a specific request

| Parameter     | Type         | Description                         |
| ------------- | ------------ | ----------------------------------- |
| \$request_ref | `String|int` | The name or ID of a consent request |
| Returns       | `Object`     | A Collection of Consent objects     |

### `getConsentDataFor($request_ref)`

Gets the values for a specific request and the member's consent

| Parameter     | Type       | Description                                                 |
| ------------- | ---------- | ----------------------------------------------------------- |
| \$request_ref | `Intarray` | The name or an array of names, or id or array of ids        |
| Returns       | `Object`   | A Collection of associative arrays for each Consent Request |
