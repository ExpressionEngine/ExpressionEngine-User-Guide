Simple Commerce – Email Templates
=================================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Developer Tools --> Add-On Manager --> Simple Commerce --> Email Templates`

Email templates allow you to create highly customized notification
templates that you can associate with store items. Email templates can
be created and used for both administrator notifications and customer
notifications.

Email Templates Home Page Options
---------------------------------

Add Email Template
~~~~~~~~~~~~~~~~~~

The **Create New** button allows you to create email notification
templates.

Edit Email Templates
~~~~~~~~~~~~~~~~~~~~

To edit email templates, click the edit button in the toolbar next to the name of the email template you wish to edit.

Add / Edit Email Template
-------------------------

Below is an example of a typical administrator purchase notification
email. ::

  Purchase completed!  QTY {quantity} - {item_name}
  Total Payment: {payment_gross}
  PayPal TransactionFee: {payment_fee}
  --------------------------
  Buyer ({payer_status}): {first_name} {last_name} {payer_business_name}
  Address ({address_status}): {address_name} {address_street} {address_city}, {address_state}  {address_zip} {address_country}

Name
~~~~

A descriptive name for the email template. This will be shown in the
email template drop-down menus of the store :doc:`item
creation <sc_cp_items>` form.

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
