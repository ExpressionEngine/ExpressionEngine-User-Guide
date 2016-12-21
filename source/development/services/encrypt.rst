Encrypt Service
===============

.. contents::
  :local:
  :depth: 1

.. highlight:: php

The encrypt service provides two-way data encryption as well as signing and
verification of signatures. The most common use is to encrypt parameters sent
with form data.

Simple Examples
---------------

Encrypting some data::

  $meta = array(
    'site_id' => 1,
    'entry_id' => 12,
    'author_id' => 23
    );
  $var['meta'] = ee('Encrypt')->encrypt(serialize($meta));

Decrypting the same data::

  $meta = ee('Encrypt')->encrypt($_POST['meta']);
  $meta = unserialize($meta);

.. note:: Use ``encode()`` and ``decode()`` if you'd like the data automatically base64 encoded.

To sign data::

  $signed = ee('Encrypt')->sign($data);

To verify the data hasn't changed::

  $safe = ee('Encrypt')->verifySignature($data, $signed);

Encrypt Methods
---------------

.. namespace:: EllisLab\ExpressionEngine\Service\Encrypt

.. class:: Encrypt

.. method:: encrypt($string, $key = '')

  Takes a plain-text string and key and encrypts it

  :param string $string: The plaintext string
  :param string $key: The encryption key, if not defined we'll use a default key
  :returns: The encrypted string on success or FALSE on failure
  :rtype: string

.. method:: decode($data, $key = '')

  Takes an encrypted string and key and decrypts it.

  :param string $string: The encrypted string
  :param string $key: The encryption key, if not defined we'll use a default key
  :returns: The decrypted string on success or FALSE on failure
  :rtype: string

.. method:: encode($string, $key = '')

  Encodes the string with the set encryption driver and then base64 encodes that.

  :param string $string: The plaintext string
  :param string $key: The encryption key, if not defined we'll use a default key
  :returns: A base64 encoded encrypted string
  :rtype: string

.. method:: decode($data, $key = '')

  Decodes an encoded string by first base64 decodeing it, then passing the
  string off to the driver for its decoding process.

  :param string $string: A base64 encoded encrypted string
  :param string $key: The encryption key, if not defined we'll use a default key
  :returns: The plaintext string
  :rtype: string

.. method:: sign($data, $key = NULL, $algo = 'md5')

  Creates a signed hash value using hash_hmac()

  :param string $data: Content to hash
  :param string $key: The secret key, if not defined we'll use a default key
  :param string $algo: Hashing algorithm, defaults to md5
  :returns: String consisting of the calculated message digest as lowercase hexits or NULL if there is no data
  :rtype: string

.. method:: verifySignature($data, $signed_data, $key = NULL, $algo = 'md5')

  Verify the signed data hash

  :param string $data: Current content
  :param string $signed_data: Hashed content to compare to
  :param string $key: The secret key, if not defined we'll use a default key
  :param string $algo: Hashing algorithm, defaults to md5
  :returns: TRUE if the signed data is verified, FALSE if not, NULL if there is no data
  :rtype: bool
