Simple Commerce – Email Templates
=================================

Email templates allow you to create highly customized notification
templates that you can associate with store items. Email templates can
be created and used for both administrator notifications and customer
notifications.

Simple Commerce Home Page Options
---------------------------------

|Simple Commerce Purchases|

Add Email Template
~~~~~~~~~~~~~~~~~~

The **Add Email Template** link allows you to create email notification
templates.

Edit Email Templates
~~~~~~~~~~~~~~~~~~~~

The **Edit Email Templates** link allows you to view and edit existing
email templates.

Add / Edit Email Template
-------------------------

Below is an example of a typical administrator purchase notification
email. ::

	Purchase completed!  QTY {quantity} - {item_name}  Total Payment: {payment_gross} PayPal Transaction Fee: {payment_fee}  --------------------------  Buyer ({payer_status}):  {first_name} {last_name} {payer_business_name}  Address ({address_status}):  {address_name} {address_street} {address_city}, {address_state}  {address_zip} {address_country}

Email Template Name
~~~~~~~~~~~~~~~~~~~

A descriptive name for the email template. This will be shown in the
email template drop-down menus of the store `item
creation <sc_cp_items.html>`_ form.

Email Subject
~~~~~~~~~~~~~

The subject that will be used for the notification email.

Email Body
~~~~~~~~~~

The message body that will be used for the notification email.

Available Variables
~~~~~~~~~~~~~~~~~~~

The following variables can be used anywhere in either the email subject
or the email body.

-  {address\_city}
-  {address\_country}
-  {address\_name}
-  {address\_state}
-  {address\_status}
-  {address\_street}
-  {address\_zip}
-  {business}
-  {custom}
-  {exchange\_rate}
-  {first\_name}
-  {invoice}
-  {item\_name}
-  {item\_number}
-  {last\_name}
-  {mc\_currency}
-  {mc\_fee}
-  {mc\_gross}
-  {memo}
-  {notify\_version}
-  {num\_cart\_items}
-  {option\_name1}
-  {option\_name2}
-  {option\_selection1}
-  {option\_selection2}
-  {payer\_business\_name}
-  {payer\_email}
-  {payer\_id}
-  {payer\_status}
-  {payment\_date}
-  {payment\_fee}
-  {payment\_status}
-  {payment\_type}
-  {pending\_reason}
-  {quantity}
-  {reason\_code}
-  {receiver\_email}
-  {receiver\_id}
-  {settle\_amount}
-  {settle\_currency}
-  {tax}
-  {txn\_id}
-  {txn\_type}
-  {verify\_sign}

.. |Simple Commerce Purchases| image:: ../../images/sc_cp_emails.png
