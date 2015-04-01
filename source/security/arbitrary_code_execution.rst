########################
Arbitrary Code Execution
########################

`Arbitrary code execution
<http://en.wikipedia.org/wiki/Arbitrary_code_execution>`_ as defined by
Wikipedia is:

  an attacker's ability to execute any commands of the attacker's choice
  on a target machine or in a target process

Essentially, someone finds a way to run code of theirs on your site.
This is typically achieved by uploading a file to your server using
legitimate methods like forum attachments, private messages, or channel
forms. However, it's also possible for the attacker to execute code if
you have PHP enabled in your templates and allow user input to be
executed as PHP; or if an add-on somehow permitted the execution of the
attacker's code.

With these attacks, the attacker is bypassing ExpressionEngine's typical
safeguards like accounts and permissions.

.. danger:: This form of attack is the worst case scenario. If they can
  upload code and run it, they can take any data or files from your
  server.

**********
Prevention
**********

ExpressionEngine prevents the upload of code to your server when using
any of the native file upload tools including the custom file field in
the control panel and Channel Forms, forum attachments, and private
message attachments.

***************
Recommendations
***************

We have two recommendations when it comes to preventing arbitrary code
execution:

.. contents::
  :local:

File Types
==========

When setting up a file upload directory, forum attachments, or private
message attachments you should restrict it as much as you are able. If
this is something that should only ever be images, you should only allow
images.

.htaccess (or similar)
======================

.. note:: ``.htaccess`` files only work on Apache servers that permit
  their usage. You should test to see if this method actually prevents
  files from running by placing a simple PHP file in the same directory
  and test to see if it executes.

If you have to allow files other than images, then we recommend a simple
``.htaccess`` file at the root of the directory where you'll be allowing
user uploads::

  SetHandler default-handler

This forces the Apache server to send any files in that directory, and
any sub-directories, as if they were static content, completely
preventing the execution of any files in that directory.

Starting with ExpressionEngine 2.10 we ship with this exact
``.htaccess`` file in the ``images/`` directory. If you have any upload
directories outside of ``images/``, it's highly recommended that you
copy this ``.htaccess`` into that directory.

In the event that the above ``.htaccess`` doesn't work you can also try
the following ``.htaccess``::

  <FilesMatch "(?i)\.(php[s0-9]?|phtml)$">
    Order Deny,Allow
    Deny from All
  </FilesMatch>

In the event that neither ``.htaccess`` file works, contact your hosting
company or server administrator.

.. note:: Both ``.htaccess`` files prevent **all** files from being
  executed in the directory which they're located. You should aim to
  cover as many files and directories as possible with this
  ``.htaccess`` file for maximum security, but make sure you aren't
  preventing ExpressionEngine's ``index.php`` and ``admin.php`` files
  from running.
