Output and Debugging Preferences
================================

Control Panel Location: Admin > System Preferences > Output and
Debugging Preferences
This section of the Control Panel allows you to define how your site is
output from the server to the user. This includes how debugging
information is handled for your website. These are general settings that
apply throughout the website/system.

Generate HTTP Page Headers?
~~~~~~~~~~~~~~~~~~~~~~~~~~~

This setting determines whether or not the server should automatically
send HTTP page headers when it serves the pages to a user. Setting this
preference to "Yes" causes headers to be explicitly sent by the server.
Sending explicit headers is generally considered to be a good practice,
although in some cases it can cause some problems.

Enable GZIP Output?
~~~~~~~~~~~~~~~~~~~

Setting this preference to "Yes" will cause the web server to send out
your pages in the compressed gzip format. Browsers will automatically
decompress the pages and display them as normal; there will be no
visible difference to your users apart from a faster page loading time.

In order for this option to work your server must support the gzip
format. Additionally, the browser being used to view your site must also
support pages served in the gzip format. Many modern browser support
this, but not all do, so if you are concerned with wide-spread
compatibility you may want to set this to "no". (Also note that while
Internet Explorer does support this feature, it also contains bugs in
its implementation which can have adverse consequences.)

Force URL query strings?
~~~~~~~~~~~~~~~~~~~~~~~~

Setting this to "Yes" will force the system to use a standard query
string in all your URLs like this:

http://example.com/index.php?/channel/joe/ (notice the question mark).

When set to "No", the system uses a more search-engine friendly format
similar to:

http://example.com/index.php/channel/joe/

The majority of servers will be able to use the default ("No") method,
which is almost universally preferred by users. Some Windows servers
(and very occasionally other types) do not support this feature and will
have to be set to "Yes". You'll know if this affects you if none of your
links seem to work.

In addition, some people will need to use this variable in conjunction
with editing the $qtype variable in your main site index.php file.

Redirection Method
~~~~~~~~~~~~~~~~~~

This setting determines what method is used for page redirections. These
redirections are used relatively frequently throughout the system,
especially with things like logging in/out and other membership related
functions. There are two options:

#. **Location (faster)**: This is the preferred method, which uses PHP's
   "location" functionality.
#. **Refresh (Windows servers)**: The "refresh" method is often
   necessary for windows-based servers due to the poor way they handle
   PHP's "location" functionality. This method is usually slightly
   slower than the other method.

Debug Preference
~~~~~~~~~~~~~~~~

This setting determines how PHP/database error messages are displayed.
Error messages are often very useful during initial development, but
they can be very confusing to regular site visitors. There are two
options:

1. **PHP/SQL error messages shown only to Super Admins**: Error messages
and warnings are shown only to logged members of the Super Admin group.
All other users will not see anything.

2. **PHP/SQL error messages shown to anyone - NOT SECURE**: As the name
suggests, error messages and warnings are shown to all site visitors.
These messages can sometimes have configuration information in them,
making this option a security risk.

.. tip:: We recommend always keeping this Debug Preference set to "1:
	PHP/SQL error messages shown only to Super Admins." This may greatly
	reduce the time needed to troubleshoot issues as you will receive an
	error instead of a blank screen.

Furthermore, for those utilizing Javascript that may resemble EE code,
including curly brackets, this setting must be 1 in order for the
Javascript to function, or ExpressionEngine will hide Javascript output
believing it to be an error.

Display SQL Queries?
~~~~~~~~~~~~~~~~~~~~

If this preference is set to "Yes", all members of the Super Admin group
will see, at the bottom of the page, a list of the database queries used
to generate the page. All other users will see nothing. This output can
be useful during site development or for debugging purposes.

Display Template Debugging?
~~~~~~~~~~~~~~~~~~~~~~~~~~~

If this preference is set to "Yes", a log of all processing that occurs
while a a page is being created in the ExpressionEngine Template parser
will be created and outputted to SuperAdmins. This includes but is not
limited to Global Variables, Conditionals, Tags, PHP on Input/Ouput,
Embeds, and Extension Hooks. Excellent tool for debugging your
templates.
