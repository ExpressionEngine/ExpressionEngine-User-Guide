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

The encrypt service provides two-way data encryption as well as signing and verification of signatures. The most common use is to encrypt parameters sent with form data.

## Simple Examples

Encrypting some data:

    $meta = array(
      'site_id' => 1,
      'entry_id' => 12,
      'author_id' => 23
      );
    $var['meta'] = ee('Encrypt')->encrypt(serialize($meta));

Decrypting the same data:

    $meta = ee('Encrypt')->decrypt($_POST['meta']);
    $meta = unserialize($meta);

NOTE: **Note:** Use `encode()` and `decode()` if you'd like the data automatically base64 encoded.

To sign data:

    $signed = ee('Encrypt')->sign($data);

To verify the data hasn't changed:

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
