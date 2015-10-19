Simple Commerce – PayPal Settings
=================================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Developer Tools --> Add-On Manager --> Simple Commerce --> Settings`

.. _sc-paypal-account-label:

PayPal Account Email
--------------------

Specify the primary email address associated with the PayPal account
processing payments for store purchases.

Encryption Settings
-------------------

.. _sc-encrypt-buttons-label:

Encrypt PayPal Buttons and Links?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Enable encryption for PayPal purchase links and buttons created by
Simple Commerce.

.. important:: Enabling this requires that your server have
    `OpenSSL <http://php.net/manual/en/ref.openssl.php>`_ support
    compiled in PHP. Ask your server administrator for this information.

.. note:: Enabling this requires that you use a public certificate and
	private key. Please read the section on
	:ref:`simple_commerce_encrypted_payments` for full details. To be the
	most effective, you should set your PayPal account settings to only
	accept encrypted payments.


.. _sc-certificate-id-label:

Public Certification ID
~~~~~~~~~~~~~~~~~~~~~~~

Specify the unique ID that is supplied by PayPal after providing them
with a public certificate.


.. _sc-public-certificate-path-label:

Public Certificate Path
~~~~~~~~~~~~~~~~~~~~~~~

Specify the path to the public certificate file. Please read the
section on :ref:`simple_commerce_encrypted_payments` for full details.

.. note:: ExpressionEngine must have read access to this directory, but
	for security we highly recommended you use a location above web	root
	so that the certificate and key files are not accessible via the web.


.. _sc-private-key-path-label:

Private Key Path
~~~~~~~~~~~~~~~~

Specify the path to the private key file. Please read the section on
:ref:`simple_commerce_encrypted_payments` for full details.

.. note:: ExpressionEngine must have read access to this directory, but
	for security we highly recommended you use a location above web	root
	so that the certificate and key files are not accessible via the web.


.. _sc-paypal-certificate-path-label:

PayPal Certificate Path
~~~~~~~~~~~~~~~~~~~~~~~

Specify the path to the PayPal-provided certificate file. Please read
the section on :ref:`simple_commerce_encrypted_payments` for full
details.

.. note:: ExpressionEngine must have read access to this directory, but
	for security we highly recommended you use a location above web	root
	so that the certificate and key files are not accessible via the web.


.. _sc-temp-path-label:

Temporary Encrypted Files Path
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Specify the path to the temporarily stored encrypted files. Please read
the section on :ref:`simple_commerce_encrypted_payments` for full
details.

.. note:: ExpressionEngine must have read access to this directory, but
  for security we highly recommended you use a location above web root
  so that the certificate and key files are not accessible via the web.
