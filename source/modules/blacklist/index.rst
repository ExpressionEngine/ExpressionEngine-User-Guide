Blacklist/Whitelist
===================

.. contents::
   :local:

Introduction
------------

The Blacklist/Whitelist Module is one of ExpressionEngine's native spam
prevention systems. It helps prevent spam from occuring in comments,
referrers, and other posted information. Used in combination with other
:doc:`Spam Prevention Features </security/spam_protection>`, the
occurrence of spam on your site should be rare.

.. note:: The Blacklist/Whitelist Module is available only with a
   `purchased <https://store.ellislab.com/>`_ ExpressionEngine license.

This Module is accessed via :menuselection:`Admin --> Modules --> Blacklist/Whitelist` in your
Control Panel. This will bring up a screen where you can access either
the Blacklist or the Whitelist, which are explained below.


Blacklist
---------

The Blacklist lets you specify content that will trigger
ExpressionEngine to deny or delete a comment, referrer, or other posted
information. For instance, if you are receiving spam from a particular
IP address, then you can place that address into the Blacklist and EE
will no longer accept data originating from that IP address.

Specifying Blacklisted Content
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

There are three types of content that you can add to the Blacklist:

#. **IP Address:** You may place IP addresses on separate lines. For
   example, you could place 127.255.0.123 in the list. You may also
   place partial IP addresses, which means that ExpressionEngine will
   match all of the addresses contained within that submask. For
   instance, if you specify 127.255.0 then EE will match "127.255.0.0"
   through "127.255.0.255".
#. **URL:** URLs or URL fragments can be placed here, with each entry on
   a separate line. For instance, you could specify www.spam-king.com
   and EE would match any incoming URLs from that domain to block.
   Likewise, you could specify simply the word spam and EE would match
   any URL that contained that word, whether it was "www.spam-king.com"
   or "www.i-eat-spam.com".
#. **User-Agent:** A "user agent" is the actual program or script that
   accesses your website. This could be a browser, search engine spider,
   RSS aggregator, or something else. These all identify themselves in
   some way with a user agent name. You may specify user agents to
   block/deny here, with each entry on a separate line. For instance,
   the user agent "Popdexter" is included in the downloadable
   ExpressionEngine.com Blacklist. As with the other settings, you may
   specify partial strings and EE will match any user agent that
   contains that string.

Whitelist
---------

The Whitelist is effectively the opposite of the Blacklist. It allows
you to specify items that you *do* want to allow. For instance, let's
say that you specify the word spam in the "URL" section of the
Blacklist. However, you actually really love the food Spam and thus you
want to make sure that your friend over at www.i-eat-spam.com can post
comments to your site. So, you can add i-eat-spam.com to your Whitelist
to make sure that she isn't blocked.

Specifying Whitelisted Content
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

There are three types of content that you can add to the Whitelist.
These are identical to the ones in the Blacklist:

#. **IP Address:** You may place IP addresses on separate lines. For
   example, you could place 127.255.0.123 in the list. You may also
   place partial IP addresses, which means that ExpressionEngine will
   match all of the addresses contained within that submask. For
   instance, if you specify 127.255.0 then EE will match "127.255.0.0"
   through "127.255.0.255".
#. **URL:** URLs or URL fragments can be placed here, with each entry on
   a separate line. For instance, you could specify www.spam-king.com
   and EE would match any incoming URLs from that domain to allow.
   Likewise, you could specify simply the word spam and EE would allow
   any URL that contained that word, whether it was "www.spam-king.com"
   or "www.i-eat-spam.com".
#. **User-Agent:** A "user agent" is the actual program or script that
   accesses your website. This could be a browser, search engine spider,
   RSS aggregator, or something else. These all identify themselves in
   some way with a user agent name. You may specify user agents to allow
   here, with each entry on a separate line. As with the other settings,
   you may specify partial strings and EE will match any user agent that
   contains that string.

Updating your Blacklist
-----------------------

When you update the Blacklist with new items (i.e. when you hit the
Update button or download the ExpressionEngine.com Blacklist),
ExpressionEngine will determine what new items have been added and
search through previously posted referrers looking for matches. If any
matches are found, EE will check to ensure that they do not match any
items in your Whitelist before automatically deleting them. This means
that as you update your Blacklist you can automatically clean out
existing referrers that match your new entries.

.. note:: ExpressionEngine does **not** search through comments and
   delete them when new items are added to the Blacklist. Mass deleting
   of comments via a simple search of a term is not recommended, since
   it might have unforeseen results and the deleted comments are not
   retrievable.

Downloading ExpressionEngine.com Lists
--------------------------------------

EllisLab, Inc. maintains its own Blacklist and Whitelist, which are
available for licensed purchasers of ExpressionEngine. These lists are
maintained with the help of our users. If you have an item that you
believe should be added to the Blacklist or Whitelist, please email
blacklist@ellislab.com.

To download the ExpressionEngine Lists, you must have your License
Number entered into the :menuselection:`Admin --> General Configuration`
area of the Control Panel. To download the Lists, go into the
:menuselection:`Add-Ons --> Modules` and choose *Blacklist/Whitelist*.
In the main menu for the module are links that you can click to
automatically download and add the ExpressionEngine.com Lists to your
own.

ExpressionEngine will compare the downloaded list to your local list and
add any new entries to the end of your lists. EE will not delete or
alter any of your existing items in your lists.

.. note:: Downloading the ExpressionEngine.com Blacklist and Whitelist
   requires that your host have outgoing socket connections enabled on
   your server and the 'fsockopen()' PHP function available. This
   configuration is quite common on most web hosts and default server
   configurations.

Writing Blacklist to .htaccess File
-----------------------------------

If you are on an Apache-based webserver, you can have ExpressionEngine
copy your Blacklist URLs and IP addresses to a .htaccess file so that
visitors matching those Blacklist terms are completely blocked from
accessing your site. In order to use this feature several things must be
done.

#. You must be on an Apache-based webserver. Further, the server must be
   set up to allow you to use .htaccess files. If you are unsure whether
   this applies to you, check with your Host. This method *will not*
   work on non-Apache servers such as those using Windows' IIS server.
#. You must have a .htaccess file at your site root. If you do not have
   one already, create a blank text file and name it .htaccess. If you
   already have a .htaccess file, don't worry since ExpressionEngine
   will not overwrite existing content or delete the file; it will only
   add new content.
#. Once you have a .htaccess file at the site root on your server, you
   will need to **change its permissions to 666** so that it is
   "writable" and ExpressionEngine can add content to it.
#. In your ExpressionEngine Control Panel, go to :menuselection:`Admin --> Modules --> Blacklist/Whitelist`.
   At the bottom of the table you'll see a "Write
   Blacklist to .htaccess file?" setting. In this setting, you will need
   to place the *full server path* to the .htaccess file. The full server
   path might look something like

   :dfn:`/home/example.com/public\_html/.htaccess`

   You **must** include the .htaccess filename, so be sure to include it.
   If you do not know what to use for your full server path, contact your
   Host or server admin.

#. Press the Submit button on the form and ExpressionEngine will add the
   contents of your Blacklist to the .htaccess file, blocking them from
   being able to access your site at all.

Also note that an "override" is included for any referrers that include
your own server name (i.e. example.com) to make sure that there is no
chance that you block your own site by accident. In order to include
this "override" you need to ensure that your "Cookie Domain" preference
is set under :menuselection:`Admin --> Security and Privacy --> Cookie Settings`.