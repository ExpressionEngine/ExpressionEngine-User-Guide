Testing Purchases / Debug Mode
==============================

When setting up your Simple Commerce store, it can be valuable to test
your settings by running fake purchases through your store. PayPal makes
this possible with a "sandbox" area, where fictitious purchases can be
made without anyone's credit card or PayPal account actually being used.

Setting up a Developer Account with PayPal
------------------------------------------

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

   #. Set up `Instant Payment Notification <sc_cp_ipn.html>`_.
   #. Add a Bank Account. Enter a fictional name, PayPal will
      automatically create fake account numbers for you.
   #. Confirm the Bank Account. Simply click confirm--no test deposits
      are made.

#. Launch Sandbox for the Personal Account

   #. Add a Credit Card. Again, you can use fictitious information, and
      allow PayPal to provide the false account numbers automatically.

Enable Simple Commerce Module's Debug Mode
------------------------------------------

In order for the Simple Commerce module to create purchase links that
utilize PayPal's Sandbox area instead of the real PayPal site, you need
to enable the module's debug mode. To do so, open
mod.simple\_commerce.php, and near the top where the class variables are
defined, set $debug to TRUE. ::

	var $debug                = TRUE;

Remember to set this variable to FALSE when you wish to take your store
live and route purchases to the real PayPal website.
