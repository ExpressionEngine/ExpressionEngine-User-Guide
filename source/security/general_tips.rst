#####################
General Security Tips
#####################

There are a few basic things you can do to enhance the overall security
of your web site.

.. contents::
  :local:
  :depth: 1

****************
Update Regularly
****************

Keeping your installation up-to-date is the easiest way to keep your
site secure. ExpressionEngine's security measures are routinely updated
to stay ahead of the ever evolving exploit landscape.

**********************
Limit User Permissions
**********************

You should only provide people with the minimum permissions they need to
do what they need to do. In ExpressionEngine parlance, don't put everyone
in the Super Admin member group.

This also applies to access to your webserver. Do not provide others with
FTP or SSL access unless it is absolutely necessary. Periodically review
your access settings and revoke any accounts and permissions that are no
longer required.

********************
Use SSL Certificates
********************

If possible, you should use an SSL certificate on your site and restrict
all traffic to https only. This can help prevent password sniffing on
insecure networks such as public wifi hotspots.

************************
Create a Password Policy
************************

ExpressionEngine's password requirements are customizable. We recommend
implementing a reasonable policy:

  - Require :ref:`a minimum password length <security-min-password-label>` of at least 8 characters
  - Require :ref:`secure passwords <security-require-secure-passwords-label>` that include at least one lowercase and uppercase letter, and one number
  - Enable :ref:`password lockouts <security-enable-passwd-lockout-label>`

*******************
Restrict File Types
*******************

When setting up a file upload directory, forum attachments, or private
message attachments you should restrict it as much as you are able. If
you only expect images to be uploaded, you should only allow images. Be
as strict as you can be initially, and loosen requirements on a
case-by-case basis.

**************************************
Remove Unused Add-ons and Applications
**************************************

When an add-on or other application on the server is no longer used, we
recommend removing the associated code.

.. _arbitrary_code_execution:

****************************
Disable Uploaded Executables
****************************

ExpressionEngine prevents the upload of code to your server when using
any of the native file upload tools including the custom file field in
the control panel and Channel Forms, forum attachments, and private
message attachments.

However, in the unlikely event that ExpressionEngine's default safeguards
are bypassed, an insecure addon is installed, outdated code is exploited,
or your server is compromised in any other way, we recommend using your
web-servers native security features to further lock down file upload
directories.

We recommend a simple ``.htaccess`` file at the root of the directory
where you'll be allowing user uploads::

  SetHandler default-handler

.. note:: ``.htaccess`` files only work on Apache servers that permit
  their usage. You should test to see if this method actually prevents
  files from executing by placing a simple PHP file in the same
  directory and test to see if it executes, like the following::

    <?php echo "This should not be visible.";

This forces the Apache server to send any files in that directory, and
any sub-directories, as if they were static content, completely
preventing the execution of any files in that directory.

Starting with ExpressionEngine 2.10 we ship with this exact
``.htaccess`` file in the ``images/`` directory. If you have any upload
directories outside of ``images/``, it's highly recommended that you
copy this ``.htaccess`` into that directory.

In the event that the above ``.htaccess`` doesn't work you can also try
the following ``.htaccess``:

.. code-block:: apache

  <FilesMatch "(?i)\.(php[s0-9]?|phtml)">
    Order Deny,Allow
    Deny from All
  </FilesMatch>

Both ``.htaccess`` files will prevent PHP files from being executed in
the directory which they're located, however the former ``.htaccess``
file has the added benefit that it prevents any and all code from being
executed.

In the event that neither ``.htaccess`` file works, contact your hosting
company or server administrator.
