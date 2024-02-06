<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2024, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Importing a License via the API

[TOC]

Importing a license into our system allows add-on developers to ensure that users who purchased their add-ons outside of our platform can validate their licenses. This documentation outlines the process for add-on developers to import licenses into our system.

## Requesting API Key

Before importing licenses, add-on developers must contact us to request an API key. The API key is necessary to authenticate requests made to our system. Once the API key is obtained, developers can proceed with the import process.

## API Endpoint

Add-on developers can import licenses by making a POST request to the following API endpoint:

```
POST https://expressionengine.com/vendor-api/import-license
```

## Required Data

The following data fields are required when making a POST request to import a license:

- `auth_key`: This is the API key obtained from us. It is required for authentication purposes.
- `addon_shortname`: The short name or identifier of the add-on for which the license is being imported.
- `customer_name`: The name of the customer who purchased the license.
- `email`: The email address of the customer.
- `license_key`: The license key associated with the purchase.
- `purchase_date`: The date when the license was purchased (format: 'YYYY-MM-DD').
- `expiration_date`: The expiration date of the license (format: 'YYYY-MM-DD').

## Optional Fields

In addition to the required fields, developers may include optional fields in the POST request:

- `notes`: Any additional notes or information related to the license.
- `price`: The price at which the license was purchased.

## Example Request

```json
{
    "auth_key": "your_api_key",
    "addon_shortname": "your_addon_shortname",
    "customer_name": "John Doe",
    "email": "john.doe@example.com",
    "license_key": "ABC123XYZ",
    "purchase_date": "2024-01-15",
    "expiration_date": "2025-01-15",
    "notes": "This is a test license import.",
    "price": 49.99
}
```

## Response

Upon successful import, the API will return a response indicating the success status. If there are any errors or issues with the import request, appropriate error messages will be returned along with the response.
