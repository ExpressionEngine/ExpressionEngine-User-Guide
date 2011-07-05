Simple Commerce – Encrypted Website Payments
============================================

The Simple Commerce Module has the ability to utilize PayPal's Encrypted
Website Payments feature. In order to use these features, there are some
additional steps you will need to take to set up Encrypted Website
Payments with PayPal. A brief background on the process will also be
beneficial.

How Encrypted Payments Work
---------------------------

After exchanging public certificates with PayPal, the button or link
parameters of a purchase are encrypted with PayPal's public key, and
digitally signed with the merchant's private key. When a purchase
request is made from the encrypted form or link, PayPal checks the
authenticity of the information by using the merchant's uploaded public
certificate. PayPal then decrypts the information with their private
key, and the purchase transaction is allowed to continue.

The steps required to use Encrypted Website Payments with PayPal are to:

#. `Generate a private key <#private_key>`_
#. `Generate a public certificate <#public_cert>`_
#. `Upload your public certificate to PayPal <#upload_public_cert>`_
#. `Update your Certificate ID in your Simple Commerce control
   panel <#public_cert_id>`_
#. `Download PayPal's public certificate <#download_paypal_cert>`_
#. `Update the paths to the files in your Simple Commerce control
   panel <#update_paths>`_

For the most security, you may also wish to set up your PayPal account
so that it `only accepts encrypted payments <#encrypted_only>`_.

PayPal accepts only X.509 public certificates in OpenSSL PEM format,
from any established certificate authority, such as
`VeriSign <http://www.verisign.com/>`_ You can also create your own
private key and public certificate using the open source software
`OpenSSL <http://www.openssl.org/>`_. Most \*nix based operating systems
(including Macintosh OS X) will already have this software compiled and
ready to use. If you are running Windows, there are `pre-compiled
binaries <http://www.openssl.org/related/binaries.html>`_ available. The
sections that follow describe creating your public certificate and
private key using OpenSSL.

Generate a private key
~~~~~~~~~~~~~~~~~~~~~~

The **private key** is the portion of the encryption method that is kept
secret and not sent to anyone. To create your private key, key in the
following at the command line::

	openssl genrsa -out private_key.pem 1024

"private\_key.pem" is the name of the file that will be created in the
directory you are running the command from. You will need to upload this
file to *your server only*.

**Note:** ExpressionEngine must have read access to the directory you
upload the private key to, but for security it is highly recommended
that you use a location above the public HTML folder on your account so
that it is not accessible via the web.

Generate a public certificate
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The **public certificate** is the portion of the encryption method that
you provide PayPal to enable them to accept encrypted payments for you.
To create your public certificate, key in the following at the command
line::

	openssl req -new -key private_key.pem -x509 -days 730 -out public_certificate.pem

"private\_key.pem" is the name of the private key file generated in step
one. This command needs to be ran from the same directory, or provide a
path to the private key file. "public\_certificate.pem" is the name of
the public certificate file that will be created in the directory you
are running the command from.

You will be prompted to answer some questions. You should answer these
questions with the same information used by the PayPal merchant account.
Once the public certificate is created, you must upload it to your
server.

**Note:** ExpressionEngine must have read access to the directory you
upload the public certificate to, but for security it is highly
recommended that you use a location above the public HTML folder on your
account so that it is not accessible via the web.

Upload your public certificate to PayPal
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You must also upload your public certificate to PayPal at the following
URL:
`https://www.paypal.com/us/cgi-bin/webscr?cmd=\_profile-website-cert <https://www.paypal.com/us/cgi-bin/webscr?cmd=_profile-website-cert>`_,
or as follows:

#. Log into your PayPal account
#. Click the Profile subtab
#. In the Seller Preferences column, click Encrypted Payment Settings.
#. Click Add
#. Click browse and select the public certificate file you just created

When you have successfully uploaded your public certificate to PayPal,
it will be displayed under "Your Public Certificates". You will need
information from this screen in the following step.

Update your Certificate ID
~~~~~~~~~~~~~~~~~~~~~~~~~~

In the Encrypted Payment Settings section of your PayPal Seller
Preferences, the "Cert ID" column of the table showing your uploaded
public certificates displays the certificate ID that PayPal assigned to
the certificate. In your Simple Commerce control panel `PayPal
Settings <sc_cp_paypal_settings.html>`_, key in your certificate ID to
the field marked **ID Given to Public Certificate by PayPal**.

Download PayPal's public certificate
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In the same area of PayPal's website that you used in step 3 to upload
your public certificate, download PayPal's public certificate. Upload
this file to your server.

**Note:** ExpressionEngine must have read access to the directory you
upload the public certificate to, but for security it is highly
recommended that you use a location above the public HTML folder on your
account so that it is not accessible via the web.

Update paths to your certificates and key
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In your Simple Commerce control panel `PayPal
Settings <sc_cp_paypal_settings.html>`_, update the paths for the
certificates and key, as well as the folder used to temporarily store
encrypted files. As indicated in the notes, this path must be readable
by ExpressionEngine, but should not be accessible from the web.

Accept encrypted payments only
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For maximum security, you may wish to set up PayPal so that your account
only accepts encrypted payments. This will make it impossible for people
to alter the price or information for a purchase unless they obtain your
public certificate and private key (keep them safe!).

To block unencrypted payments, log in to PayPal and click the Profile
subtab. Click Website Payment Preferences in the right-hand menu, and
then select "On" next to "Block Non-encrypted Website Payments".
