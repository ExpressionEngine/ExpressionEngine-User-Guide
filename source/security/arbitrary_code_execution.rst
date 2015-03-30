########################
Arbitrary Code Execution
########################

`Arbitrary code execution
<http://en.wikipedia.org/wiki/Arbitrary_code_execution>`_ as defined by
Wikipedia is:

  an attacker's ability to execute any commands of the attacker's choice
  on a target machine or in a target process

Essentially, someone finds a way to upload an executable file to your
site and run it. In the case of ExpressionEngine, this means the
attacker is bypassing safeguards like accounts and permissions. The
worst case scenario is they manage to transfer all of your files and
database tables to a server they control, gaining all of your data and
your customers' data.

**********
Prevention
**********

We have two recommendations when it comes to preventing arbitrary code
execution:

.. contents::
  :local:

File Types
==========

When setting up a file upload directory, forum attachments, private
message attachments, or **[fill in the blanks here]** you should
restrict it as much as you are able. If this is something that should
only ever be images, you should only allow images.

.htaccess (or similar)
======================

If you have to allow files other than images, than we recommend a simple
``.htaccess`` file at the root of the directory where you'll be allowing
user uploads::

  <FilesMatch "(?i)\.(php[s0-9]?|phtml)$">
    Order Deny,Allow
    Deny from All
  </FilesMatch>

All this does is prevent any PHP files in this directory or any
sub-directories from running, essentially preventing arbitrary code
execution for those directories.

Starting with ExpressionEngine 2.10 we ship with this exact
``.htaccess`` file in the ``images/`` directory. If you have any upload
directories outside of ``images/``, it's highly recommended that you
copy this ``.htaccess`` into that directory.

.. note:: This .htaccess file prevents **all** php files from being
  executed in the directory which it's located. You should aim to cover
  as many files and directories as possible with this ``.htaccess`` file
  for maximum security, but make sure you aren't preventing
  ExpressionEngine's ``index.php`` and ``admin.php`` files from running.
