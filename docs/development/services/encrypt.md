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

# Encrypt Service

[TOC]

The Encrypt service provides two-way encryption, authenticated tokens, and methods for signing and verifying data.

## Simple Examples

### Authenticated form data

In ExpressionEngine 7.6 and later, use an authenticated token to send server-generated metadata in a hidden field. Choose a purpose that identifies the add-on and form. Use the same purpose and key when creating and reading the token.

```php
$metadata = json_encode(['entry_id' => 12]);
$token = ee('Encrypt')->encodeAuthenticated($metadata, 'my_addon:edit_entry');
```

Render the token in the form.

```php
<input type="hidden" name="meta" value="<?= htmlspecialchars($token, ENT_QUOTES, 'UTF-8') ?>">
```

Verify and decode the token on submission.

```php
$payload = ee('Encrypt')->decodeAuthenticated(
    ee()->input->post('meta'),
    'my_addon:edit_entry'
);

if ($payload === false) {
    show_error('Reload the form and try again.', 400);
}

$metadata = json_decode($payload, true);
```

Continue to validate the submitted data, check the member's permissions, and apply the normal CSRF checks for the form.

### Sign and verify data

    $signed = ee('Encrypt')->sign($data);
    $safe = ee('Encrypt')->verifySignature($data, $signed);

## Encrypt Methods

**class `ExpressionEngine\Service\Encrypt\Encrypt`**

[TOC=3]

### `encrypt($string, $key = '')`

Takes a plain-text string and key and encrypts it

| Parameter | Type     | Description                                                |
| --------- | -------- | ---------------------------------------------------------- |
| \$string  | `String` | The plaintext string                                       |
| \$key     | `String` | The encryption key, if not defined we'll use a default key |
| Returns   | `String` | The encrypted string on success or FALSE on failure        |

### `decrypt($data, $key = '')`

Takes an encrypted string and key and decrypts it.

| Parameter | Type     | Description                                                |
| --------- | -------- | ---------------------------------------------------------- |
| \$string  | `String` | The encrypted string                                       |
| \$key     | `String` | The encryption key, if not defined we'll use a default key |
| Returns   | `String` | The decrypted string on success or FALSE on failure        |

### `encode($string, $key = '')`

Encodes the string with the set encryption driver and then base64 encodes that.

| Parameter | Type     | Description                                                |
| --------- | -------- | ---------------------------------------------------------- |
| \$string  | `String` | The plaintext string                                       |
| \$key     | `String` | The encryption key, if not defined we'll use a default key |
| Returns   | `String` | A base64 encoded encrypted string                          |

### `decode($data, $key = '')`

Decodes an encoded string by first base64 decoding it, then passing the string off to the driver for its decoding process.

| Parameter | Type     | Description                                                |
| --------- | -------- | ---------------------------------------------------------- |
| \$string  | `String` | A base64 encoded encrypted string                          |
| \$key     | `String` | The encryption key, if not defined we'll use a default key |
| Returns   | `String` | The plaintext string                                       |

### `encodeAuthenticated($string, $purpose, $key = '')`

Encrypts a string, authenticates it for the supplied purpose, and returns a versioned, Base64-encoded token.

| Parameter | Type | Description |
| --- | --- | --- |
| \$string | `String` | Plaintext to protect. |
| \$purpose | `String` | Identifier for the context in which this token will be used. |
| \$key | `String` | Optional encryption key. An empty value uses the default key. |
| Returns | `String` | The token. |

### `decodeAuthenticated($token, $purpose, $key = '')`

Verifies an authenticated token for the supplied purpose and key before decrypting it.

| Parameter | Type | Description |
| --- | --- | --- |
| \$token | `String` | Token from `encodeAuthenticated()`. |
| \$purpose | `String` | The purpose used to create the token. |
| \$key | `String` | The same optional key used to create the token. |
| Returns | `String` or `False` | Decrypted plaintext or `false` if verification or decryption fails. |

### `sign($data, $key = NULL, $algo = 'md5')`

Creates a signed hash value using hash_hmac()

| Parameter | Type     | Description                                                            |
| --------- | -------- | ---------------------------------------------------------------------- |
| \$data    | `String` | Content to hash                                                        |
| \$key     | `String` | The secret key, if not defined we'll use a default key                 |
| \$algo    | `String` | Hashing algorithm, defaults to md5                                     |
| Returns   | `String` | String consisting of the calculated message digest as lowercase hexits |

### `verifySignature($data, $signed_data, $key = NULL, $algo = 'md5')`

Verify the signed data hash

| Parameter     | Type     | Description                                                            |
| ------------- | -------- | ---------------------------------------------------------------------- |
| \$data        | `String` | Current content                                                        |
| \$signed_data | `String` | Hashed content to compare to                                           |
| \$key         | `String` | The secret key, if not defined we'll use a default key                 |
| \$algo        | `String` | Hashing algorithm, defaults to md5                                     |
| Returns       | `Bool`   | TRUE if the signed data is verified, FALSE if not, NULL if there is no |
