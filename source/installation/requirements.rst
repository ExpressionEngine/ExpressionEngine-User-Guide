###################
System Requirements
###################

*******************
Server Requirements
*******************

- `PHP <http://www.php.net/>`_ 5.3.10 or newer, compiled with the
  `GD (or GD 2) <http://www.php.net/manual/en/ref.image.php>`_ library

  .. note:: PHP 5.3.10 can also be read as five-point-three-point-*ten*.
    That means 5.3.10 is **greater than** 5.3.1, 5.3.2, 5.3.3, and all
    the way up to 5.3.9.

- `MySQL <http://www.mysql.com/>`_ 5.0.3 or newer
- At least 32 MB memory allocated to PHP
- At least 10 MB of available disk space for the ExpressionEngine
  software and modules
- At least 2 MB of database space

  .. note:: Disk space usage and the database size will increase as
     content is added.

- The MySQL user connecting to the database must have the following
  privileges:

  - ``SELECT``
  - ``INSERT``
  - ``UPDATE``
  - ``DELETE``
  - ``CREATE``
  - ``INDEX``
  - ``ALTER``
  - ``DROP``

- The `File Information (fileinfo)
  <http://php.net/manual/en/book.fileinfo.php>`_ PHP extension

.. note:: If you're on MediaTemple you will need `to create a phprc file <http://wiki.dreamhost.com/PHP.ini#How_to_add_a_phprc_file>`_ that contains the following::

    extension = fileinfo.so

  .. _server-wizard:

Server Compatibility Wizard
===========================

If you're not sure whether your server meets the minimum requirements,
the server wizard will run some tests and give you an answer.

-  `Download <https://ellislab.com/asset/file/ee_server_wizard.zip>`_
   and unzip the archive.
-  Upload the folder to your server.
-  Point your web browser to the folder. For example:
   ``http://example.com/ee_wizard``


***********************
CP Browser Requirements
***********************

ExpressionEngine's Control Panel is tested extensively with the
final-release versions of the web browsers listed here. Please note that
these are the minimum browser requirements necessary to use the Control
Panel. They will not apply to your site's front-end pages.

- Internet Explorer 8 and above
- Firefox 13
- Safari 5.1
- Chrome 19
- Opera 11.64

.. note:: JavaScript must be enabled to use the Control Panel.


*********************
Optional Requirements
*********************

Spell Check
===========

To use the spell check feature, your server must have PHP compiled with
`pspell <http://us2.php.net/pspell>`_ support or be able to contact
remote servers though PHP. If you are unsure if your server is set up
for this, ask your web host or server admin to check for you.

Multibyte Support
=================

For full support of multibyte encodings, ask your web host or server
admin to set ``mbstring.func_overload`` to ``6`` in your server
configuration by editing :file:`php.ini` as shown below::

	; overload(replace) single byte functions by mbstring functions.
	; mail(), ereg(), etc are overloaded by mb_send_mail(), mb_ereg(),
	; etc. Possible values are 0,1,2,4 or combination of them.
	; For example, 7 for overload everything.
	; 0: No overload
	; 1: Overload mail() function
	; 2: Overload str*() functions
	; 4: Overload ereg*() functions
	mbstring.func_overload = 6

*****
Notes
*****

Apache Server
=============

If you are hosted on an Apache server, the ``AcceptPathInfo`` option
needs to be enabled for URLs to work properly. Most servers are
configured this way by default, but if yours is not, you have a few
options:

- Include ``AcceptPathInfo On`` in your ``.htaccess`` file to enable it
- Ask your web host or server admin to enable the option
- Set your site's URLs to use :ref:`query strings <query-strings>`

URL Segment Support
===================

If the :ref:`Server Compatibility Wizard <server-wizard>` lists URL
Segment Support as *Unsupported*, you will need to set your site's URLs
to use :ref:`query strings <query-strings>`.
