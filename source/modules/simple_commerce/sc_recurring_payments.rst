Simple Commerce – Recurring Payments
====================================

The Simple Commerce Module supports Paypal `Subscriptions and Recurring
Payments <https://www.paypal.com/us/cgi-bin/?cmd=p/xcl/rec/subscr-intro-outside>`_
(offsite link). Using recurring payments, you can offer your users
automatically recurring subscriptions. For purchases managed through the
module, you can specify emails to be sent upon a recurring purchase,
emails to be sent when a recurring payment is cancelled, and alter a
member's group assignment based on their subscription status.

**Note:** Automatic emails and member group changes rely on `Instant
Payment Notification <sc_cp_ipn.html>`_. New subscription automated
features will only work for purchases made by logged-in members of your
site. Subscription termination automatic features will only work for
purchases made by members.

Notes on Recurring Payment Options
----------------------------------

Recurring Payment Variables in Template Tags
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Paypal does not allow recurring payments to be added to the shopping
cart. It is therefore important to use the `item\_type
variable <sc_variables.html#item_type>`_ in a conditional if you use
shopping cart links.

Recurring Payment Subscription Expiration Date
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

There is no set expiration date for a recurring payment. In the control
panel display, ongoing recurring payments will be marked as such. An
expiration date is provided only for subscriptions that have been
terminated.

How Recurring Payments may be terminated
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Paypal will send an instant payment notification if the purchaser has
cancelled their subscription. You may also cancel a subscription through
the paypal control panel, triggering an instant payment notification.
See the Paypal documentation for details.
