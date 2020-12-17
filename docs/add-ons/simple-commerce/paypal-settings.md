<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://www.packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Simple Commerce – PayPal Settings

**Control Panel Location:** `Developer --> Add-Ons --> Simple Commerce --> Settings`

## PayPal Account Email

Specify the primary email address associated with the PayPal account processing payments for store purchases.

## Encryption Settings

### Encrypt PayPal Buttons and Links?

Enable encryption for PayPal purchase links and buttons created by Simple Commerce.

NOTE: **Important:** Enabling this requires that your server have [OpenSSL](http://php.net/manual/en/ref.openssl.php) support compiled in PHP. Ask your server administrator for this information.

NOTE: **Note:** Enabling this requires that you use a public certificate and private key. Please read the section on `simple_commerce_encrypted_payments` for full details. To be the most effective, you should set your PayPal account settings to only accept encrypted payments.

### Public Certification ID

Specify the unique ID that is supplied by PayPal after providing them with a public certificate.

### Public Certificate Path

Specify the path to the public certificate file. Please read the section on `simple_commerce_encrypted_payments` for full details.

NOTE: **Note:** ExpressionEngine must have read access to this directory, but for security we highly recommended you use a location above web root so that the certificate and key files are not accessible via the web.

### Private Key Path

Specify the path to the private key file. Please read the section on `simple_commerce_encrypted_payments` for full details.

NOTE: **Note:** ExpressionEngine must have read access to this directory, but for security we highly recommended you use a location above web root so that the certificate and key files are not accessible via the web.

### PayPal Certificate Path

Specify the path to the PayPal-provided certificate file. Please read the section on `simple_commerce_encrypted_payments` for full details.

NOTE: **Note:** ExpressionEngine must have read access to this directory, but for security we highly recommended you use a location above web root so that the certificate and key files are not accessible via the web.

### Temporary Encrypted Files Path

Specify the path to the temporarily stored encrypted files. Please read the section on `simple_commerce_encrypted_payments` for full details.

NOTE: **Note:** ExpressionEngine must have read access to this directory, but for security we highly recommended you use a location above web root so that the certificate and key files are not accessible via the web.
