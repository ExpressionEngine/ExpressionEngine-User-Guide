Message Pages
=============

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Design --> Message Pages`

Message Pages are intended for specific purposes. There are three main
types of Specialty Templates:

Email Notification Templates
----------------------------

These Message Pages are for the various "notification" emails that are
sent by the system. For example, when someone registers at your site,
account activation instructions are emailed to them. The formatting of
the email is controlled in one of the Message Pages. The following
templates are available:

-  Admin Notification of Comments
-  Admin Notification of Forum Posts
-  Admin Notification of Mailing List Subscription
-  Admin Notification of New Entries
-  Admin Notification of New Member Registration
-  Forgotten Password Instructions
-  Mailing List Activation Instructions
-  Member Account Activation Instructions
-  Member Account Decline Notification
-  Member Account Validation Notification
-  Moderator Notification of Forum Post Report
-  Password Reset Notification
-  Private Message Notification
-  Private Message InBox Full Notification
-  User Comment Notification
-  User Notification of Forum Posts
-  User Notification of Forum Thread Moderation

In order to localize these messages for different languages, make
certain to uncheck the 'Enable This Template?' option and then edit each
language folder's email\_data.php file.

User Message Template
---------------------

Users often receive messages after performing actions in
ExpressionEngine: logging in, submitting a form, etc. In addition, they
may sometimes be shown error messages. This Message Page is designed to
allow you to determine how the page looks that displays these messages.

View default code for the :download:`User Message
Template <sample_code/user_message_template.txt>`

System Offline Template
-----------------------

In the `General
Configuration <../../admin/system_admin/general_configuration.html>`_
section of the Control Panel you can specify whether or not your site is
"Live". If the site is not live then people will be presented with a
message when they try to access your page. This can be useful if you are
performing maintenance or other such things. This Message Page allows
you to define the page that will be shown to people when your site is
not "Live".

View default code for the :download:`System Offline
Template <sample_code/system_offline.txt>`

