File Permissions
================

When configuring a web app, there are often files and directories on the server that the app needs to be able to read and write to. Image uploads, caches, etc. Anywhere that ExpressionEngine indicates that it needs *write* access needs the permissions below.

Unix-based Systems
~~~~~~~~~~~~~~~~~~

Unix-based systems are the most common to find hosting PHP/MySQL applications. When referring to file permission modes, we are using a 3-digit (octal) representation of Unix file permissions, which are separated into three scopes: owner, group, and others (world).

+----------+-------+-------+-------+
|          | Owner | Group | World |
+==========+=======+=======+=======+
| Octal    | 7     | 5     | 5     |
+----------+-------+-------+-------+
| Symbolic | rwx   | r-x   | r-x   |
+----------+-------+-------+-------+

In the table below note how the symbolic notation--that you would see when using ``ls -l`` on a Unix system--maps to the numeric representation.

* ``-``: doesn't allow
* ``r``: allows read
* ``w``: allows write
* ``x``: allows execute, or on directories, allows access to contents

+--------+--------------------------------------------+-------------------+
| Number | Permission                                 | Symbolic Notation |
+========+============================================+===================+
| 0      | None                                       | ---               |
+--------+--------------------------------------------+-------------------+
| 1      | Execute only                               | --x               |
+--------+--------------------------------------------+-------------------+
| 2      | Write only                                 | -w-               |
+--------+--------------------------------------------+-------------------+
| 3      | Execute *and* write (1 + 2 = 3)            | -wx               |
+--------+--------------------------------------------+-------------------+
| 4      | Read only                                  | r--               |
+--------+--------------------------------------------+-------------------+
| 5      | Read *and* execute (4 + 1 = 5)             | r-x               |
+--------+--------------------------------------------+-------------------+
| 6      | Read *and* write (4 + 2 = 6)               | rw-               |
+--------+--------------------------------------------+-------------------+
| 7      | Read, write, *and* execute (4 + 2 + 1 = 7) | rwx               |
+--------+--------------------------------------------+-------------------+

.. note:: Always use the **least permissive settings** that your web server allows. Contact your host for details.

Directory/Folder Permissions
----------------------------

Directories need to allow for access to their contents, so for each scope (owner, group, world), directory permissions will nearly always be one of the *execute* permissions: 1, 3, 5, or 7.

On servers that are configured with security in mind, **only the owner** needs write permissions, and group/world just need read.

**Most secure: 755**

**Least secure: 777**

File Permissions
----------------

In a web app like ExpressionEngine, no files themselves need execute privileges because the web server is controlling the process that actually executes the PHP. So the typical options will be 4 or 6.

Again, on servers that are configured with security in mind, **only the owner** needs write permissions, and group/world just need read.

**Most secure: 644**

**Least secure: 666**

IIS Servers
~~~~~~~~~~~

IIS manages permissions using access control lists, and the needs can vary depending on the IIS version and how the administrator has configured the server for PHP applications. Commonly, the app folder should have **Full control** set for the **IUSR** user.

Please consult your system administrator to determine what the least privilege is necessary for the IIS user in order to have the ability to read, write, create, and delete folders and files.
