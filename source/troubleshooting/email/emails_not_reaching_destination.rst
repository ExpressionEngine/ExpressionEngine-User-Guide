Emails sent via ExpressionEngine are never reaching their destination
=====================================================================

Troubleshooting
---------------

#. Navigate to :menuselection:`Admin --> Email Configuration`.
#. Check that Return email address for auto-generated emails contains a
   valid e-mail address. (Some servers may require outgoing emails to be
   sent from an email address on the domain that EE is running on. If
   debugging shows a 553 error, make certain the return address complies
   with this requirement.)
#. Try a different Email Protocol.
#. Change **Enable Email Debugging?** to *On*. Attempt to send an email
   via :menuselection:`Tools --> Communicate`. If that fails it will
   output an error that will assist with troubleshooting the problem.
#. If Enable Email Debugging is on and no error message is received it
   means that EE is successfully opening a socket to the email server,
   writing the email headers and data to the mail queue, and closing the
   connection. In this case, the next step is to contact the hosting
   provider or server administrator for further troubleshooting.


