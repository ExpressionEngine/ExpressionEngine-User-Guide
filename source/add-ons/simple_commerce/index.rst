.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

###############
Simple Commerce
###############

.. contents::
  :local:
  :depth: 2

************
Introduction
************

The Simple Commerce Module is a basic but flexible module
that easily integrates ExpressionEngine with PayPal.

- Integrates with ExpressionEngine's Channel Module to define items for
  sale
- Tracks purchases automatically utilizing PayPal's `Instant Payment
  Notification <https://developer.paypal.com/docs/classic/ipn/integration-guide/IPNIntro/>`__
  (external link)
- Lets you create any number of customized email notification templates
  for both the administrator and customers, even a different
  email template for *every item*!
- Add and Edit multiple items at once
- Ability to assign sale prices to items, and easily mark items
  "on sale"
- Allows purchases of items to change the user's member group
- Supports PayPal Encrypted Payments
- Tab delimited export of items and purchases


.. _simple_commerce_purchase_tag:

****************************
Simple Commerce Purchase Tag
****************************

The Simple Commerce Purchase tag is the primary tag used to display
information about items in your store. It is designed to be used within
a Channel Entries tag, as store items are actually Channel Entries.

Here is a simple example::

   {exp:simple_commerce:purchase entry_id="{entry_id}" success="site/success" cancel="site/index"}
    <h3>{item_name}</h3>

    <p><strong>{item_sale_price}</strong></p>

    {if item_type == "purchase"}
      <p><a href="{buy_now_url}" onclick="window.open(this.href);return false;">Buy Now</a></p>
      <p><a href="{add_to_cart_url}" onclick="window.open(this.href);return false;">Add to Cart</a></p>
      <p><a href="{view_cart_url}" onclick="window.open(this.href);return false;">View Cart</a></p>
    {/if}
    {if item_type == "subscription"}
      <p><a href="{subscribe_now_url}" onclick="window.open(this.href);return false;">Subscribe Now</a></p>
    {/if}
   {/exp:simple_commerce:purchase}

Parameters
==========

.. contents::
  :local:

cancel=
-------

::

  cancel="store/cancel"

You may specify a particular Template to display if a purchase is
cancelled mid-transaction. This takes a standard
"Template\_Group/Template" as input, or you may provide a full URL, e.g.
https://example.com/store/cancel/. If this parameter is not
supplied, your site's main index template will be displayed.

country\_code=
--------------

::

  country_code="DE"

This parameter controls the language that will be used on the initial
PayPal shopping cart / log in screen when someone makes a purchase from
your store. Use the two letter country abbreviation, following the `ISO
3166
standard <http://en.wikipedia.org/wiki/ISO_3166-1#Current_codes>`_.
If no parameter is given, a default of 'US' will be used.

currency=
---------

::

  currency="USD"

The three letter representation of the currency for the item prices in
the store, using the ISO 4217 standard. Default is "USD" (U.S. Dollars).
For other currencies, please refer to `Wikipedia's ISO 4127
listing <http://en.wikipedia.org/wiki/ISO_4217#Active_codes>`_.

decimal=
--------

::

  decimal=","

Change the decimal separator for display. For example, instead of
display 3.95, you can have the price outputted as 3,95.

entry\_id=
----------

::

  entry_id="{entry_id}"

**REQUIRED**. As the Simple Commerce Purchase tag is designed to be used
inside a Channel Entries tag, the {entry\_id} variable of the Channel
Entries tag will normally be used to provide the value. You may also use
a specific entry id to display an item's information outside of a
Channel Entries tag.

show\_disabled=
---------------

::

  show_disabled="yes"

Allows the Simple Commerce Purchase tag to output information for store
items that are not enabled. This can be used in conjunction with an
item\_enabled conditional to display information for enabled / disabled
items. e.g.::

  {if item_enabled == 'n'}
    <p><strong>NOT AVAILABLE</strong></p>
  {if:else}
    <p>{item_sale_price}</p>
    <p><a href="{buy_now_url}" onclick="window.open(this.href);return false;">Buy Now</a></p>
    <p><a href="{add_to_cart_url}" onclick="window.open(this.href);return false;">Add to Cart</a></p>
    <p><a href="{view_cart_url}" onclick="window.open(this.href);return false;">View Cart</a></p>
  {/if}

success=
--------

::

  success="store/thank_you"

**REQUIRED**. You must specify a particular Template to display after a
successful purchase transaction. This takes a standard
"Template\_Group/Template" as input, or you may provide a full URL, e.g.
https://example.com/store/thank\_you/.


Variables
=========

.. contents::
  :local:

Item Details
------------

item\_id
~~~~~~~~

::

  {item_id}

The store item's id.

item\_name
~~~~~~~~~~

::

  {item_name}

The descriptive name of the item.

item\_enabled
~~~~~~~~~~~~~

::

  {item_enabled}

Whether or not the store item is enabled (y/n). This can be useful if
you use custom queries to access information about your store items. If
the item is not enabled ("n"), the {exp:simple\_commerce:purchase} tag
will not output information for that item.

item\_purchases
~~~~~~~~~~~~~~~

::

  {item_purchases}

The number of times the item has been purchased.

item\_regular\_price
~~~~~~~~~~~~~~~~~~~~

::

  {item_regular_price}

The item's regular price.

item\_sale\_price
~~~~~~~~~~~~~~~~~

::

  {item_sale_price}

The item's sale price.

item\_use\_sale
~~~~~~~~~~~~~~~

::

  {item_use_sale}

Whether or not the item is on sale (y/n). Useful in conditionals and
custom queries. If the item is marked as on sale, the PayPal purchase
links will automatically use the sale price.

item\_type
~~~~~~~~~~

::

  {item_type}

Whether item is a recurring item (subscription/purchase). Useful in
conditionals and custom queries.

.. note:: Recurring payments cannot be made using the shopping cart.
  Thus item\_type conditionals should be used if you offer cart links
  and are mixing recurring and non-recurring items.

Purchase Links
--------------

add\_to\_cart\_url
~~~~~~~~~~~~~~~~~~

::

  <a href="{add_to_cart_url}" onclick="window.open(this.href);return false;">Add to Cart</a>

The PayPal URL to add the item to the PayPal shopping cart. The example
shown is a typical usage as a popup link. Recurring payments *cannot* be
made using the cart.

.. note:: If using encrypted payments, this link may be cutoff in some
  browsers. Purchase buttons are recommended as an alternative.

buy\_now\_url
~~~~~~~~~~~~~

::

  <a href="{buy_now_url}" onclick="window.open(this.href);return false;">Buy Now</a>

.. note:: If using encrypted payments, this link may be cutoff in some
  browsers. Purchase buttons are recommended as an alternative.

view\_cart\_url
~~~~~~~~~~~~~~~

::

  <a href="{view_cart_url}" onclick="window.open(this.href);return false;">View Cart</a>

The PayPal URL to view the contents of the shopping cart. The example
shown is a typical usage as a popup link.

subscribe_now_url
~~~~~~~~~~~~~~~~~

::

  <a href="{subscribe_now_url}" onclick="window.open(this.href);return false;">Subscribe Now</a>

The "Subscribe Now" PayPal URL. The example shown is a typical usage as
a popup link.

.. note:: If using encrypted payments, this link may be cutoff in some
  browsers. Purchase buttons are recommended as an alternative.

Purchase Buttons
----------------

Purchase buttons are variable pairs, and enclose the text used for the
button label.

add\_to\_cart\_button
~~~~~~~~~~~~~~~~~~~~~

::

  {add_to_cart_button}Add to Cart{/add_to_cart_button}

A button that adds the item to the PayPal shopping cart.

buy\_now\_button
~~~~~~~~~~~~~~~~

::

  {buy_now_button}Buy Now{/buy_now_button}

A "Buy Now" PayPal button.

view\_cart\_button
~~~~~~~~~~~~~~~~~~

::

  {view_cart_button}View Cart{/view_cart_button}

A button to view the contents of the shopping cart.

.. _simple_commerce_recurring_payments:

******************
Recurring Payments
******************

The Simple Commerce Module supports Paypal `Subscriptions and Recurring
Payments <https://www.paypal.com/us/cgi-bin/?cmd=p/xcl/rec/subscr-intro-
outside>`_ (offsite link). Using recurring payments, you can offer your
users automatically recurring subscriptions. For purchases managed
through the module, you can specify emails to be sent upon a recurring
purchase, emails to be sent when a recurring payment is canceled, and
alter a member's group assignment based on their subscription status.

.. note:: Automatic emails and member group changes rely on :doc:`Instant
   Payment Notification <sc_cp_ipn>`. New subscription automated
   features will only work for purchases made by logged-in members of your
   site. Subscription termination automatic features will only work for
   purchases made by members.

Recurring Payment Variables in Template Tags
============================================

Paypal does not allow recurring payments to be added to the shopping
cart. It is therefore important to use the `item_type`_ variable in a
conditional if you use shopping cart links.

Recurring Payment Subscription Expiration Date
==============================================

There is no set expiration date for a recurring payment. In the control
panel display, ongoing recurring payments will be marked as such. An
expiration date is provided only for subscriptions that have been
terminated.

How Recurring Payments may be terminated
========================================

PayPal will send an instant payment notification if the purchaser has
canceled their subscription. You may also cancel a subscription through
the PayPal control panel, triggering an instant payment notification.
See the PayPal documentation for details.


*****************
Testing Purchases
*****************

When setting up your Simple Commerce store, it can be valuable to test
your settings by running fake purchases through your store. PayPal makes
this possible with a "sandbox" area, where fictitious purchases can be
made without anyone's credit card or PayPal account actually being used.

Setting up a Developer Account with PayPal
==========================================

To use the sandbox area, you will have to set up a free developer
account with PayPal.

#. Point your browser to
   `https://developer.paypal.com/ <https://developer.paypal.com/>`_
#. Click "Sandbox" and then "Create Test Accounts". Sandbox accounts are
   not tied to your PayPal account on www.paypal.com in any way.

   #. Create a Premier Account for Merchant. You can usually use the
      same information that your real merchant account uses. Remember
      that nothing on the Sandbox is tied to real world information or
      accounts.
   #. Create a Personal Account for a test purchaser. Keep this
      account's login information handy, as you will be using it to make
      test purchases.

#. Launch Sandbox for the Premier Account

   #. Set up :doc:`Instant Payment Notification <sc_cp_ipn>`.
   #. Add a Bank Account. Enter a fictional name, PayPal will
      automatically create fake account numbers for you.
   #. Confirm the Bank Account. Simply click confirm--no test deposits
      are made.

#. Launch Sandbox for the Personal Account

   #. Add a Credit Card. Again, you can use fictitious information, and
      allow PayPal to provide the false account numbers automatically.

Debug Mode
==========

In order for the Simple Commerce module to create purchase links that
utilize PayPal's Sandbox area instead of the real PayPal site, you need
to enable the module's debug mode. To do so, open
mod.simple\_commerce.php, and near the top where the class variables are
defined, set $debug to TRUE. ::

  var $debug                = TRUE;

Remember to set this variable to FALSE when you wish to take your store
live and route purchases to the real PayPal website.


.. _simple_commerce_encrypted_payments:

**************************
Encrypted Website Payments
**************************

The Simple Commerce Module has the ability to utilize PayPal's Encrypted
Website Payments feature. In order to use these features, there are some
additional steps you will need to take to set up Encrypted Website
Payments with PayPal. A brief background on the process will also be
beneficial.

How Encrypted Payments Work
===========================

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
======================

The **private key** is the portion of the encryption method that is kept
secret and not sent to anyone. To create your private key, key in the
following at the command line::

  openssl genrsa -out private_key.pem 1024

"private\_key.pem" is the name of the file that will be created in the
directory you are running the command from. You will need to upload this
file to *your server only*.

.. note:: ExpressionEngine must have read access to the directory you
   upload the private key to, but for security it is highly recommended
   that you use a location above the public HTML folder on your account so
   that it is not accessible via the web.

Generate a public certificate
=============================

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

.. note:: ExpressionEngine must have read access to the directory you
   upload the public certificate to, but for security it is highly
   recommended that you use a location above the public HTML folder on your
   account so that it is not accessible via the web.

Upload your public certificate to PayPal
========================================

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
==========================

In the Encrypted Payment Settings section of your PayPal Seller
Preferences, the "Cert ID" column of the table showing your uploaded
public certificates displays the certificate ID that PayPal assigned to
the certificate. In your Simple Commerce control panel :doc:`PayPal
Settings <sc_cp_paypal_settings>`, key in your certificate ID to
the field marked **ID Given to Public Certificate by PayPal**.

Download PayPal's public certificate
====================================

In the same area of PayPal's website that you used in step 3 to upload
your public certificate, download PayPal's public certificate. Upload
this file to your server.

.. note:: ExpressionEngine must have read access to the directory you
   upload the public certificate to, but for security it is highly
   recommended that you use a location above the public HTML folder on your
   account so that it is not accessible via the web.

Update paths to your certificates and key
=========================================

In your Simple Commerce control panel :doc:`PayPal
Settings <sc_cp_paypal_settings>`, update the paths for the
certificates and key, as well as the folder used to temporarily store
encrypted files. As indicated in the notes, this path must be readable
by ExpressionEngine, but should not be accessible from the web.

Accept encrypted payments only
==============================

For maximum security, you may wish to set up PayPal so that your account
only accepts encrypted payments. This will make it impossible for people
to alter the price or information for a purchase unless they obtain your
public certificate and private key (keep them safe!).

To block unencrypted payments, log in to PayPal and navigate to My Selling Tools > Website preferences (under “Selling online” heading) > Encrypted Website Payments, and then select "On" next to "Block Non-encrypted Website Payments".


*************
Control Panel
*************

See the :doc:`Simple Commerce Control Panel <sc_cp>` page for more information
on:

   -  :doc:`Managing Store Items <sc_cp_items>`
   -  :doc:`Managing Store Purchases <sc_cp_purchases>`
   -  :doc:`Store Email Templates <sc_cp_email_templates>`
   -  :doc:`Instant Payment Notification <sc_cp_ipn>`
   -  :doc:`PayPal Settings <sc_cp_paypal_settings>`


.. toctree::
  :glob:
  :titlesonly:
  :hidden:

  *
