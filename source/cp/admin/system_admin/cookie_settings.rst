Cookie Settings
===============

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Security and Privacy --> Cookie Settings`

This section of the Control Panel allows you to define cookie settings
for your website.

Cookie Domain
~~~~~~~~~~~~~

This preference allows you to set your cookie domain. The vast majority
of people will want to set this to:

.example.com

Obviously you'll use your actual domain name instead of ".example.com".
Note the period at the beginning as it is very important. Setting the
cookie domain like this will allow the cookies to work regardless of
whether people specify your URL with the www part or only the
``http://`` part.

If you want to restrict your cookies to a single subdomain then you may
set that here as well:

.subdomain.example.com

Cookie Path
~~~~~~~~~~~

This is an optional setting. You will only need to set this if you
require a specific server path for your cookies. If you run multiple
installations, or have your installation in a lower folder you can
specify a folder from which to make the cooke available. If you set the
path to /joe/, the cookie will only be available in the "joe" folder and
any subdirectories of it. It will not be available in directories above
/joe/. The vast majrity of people will leave this setting blank.

Cookie Prefix
~~~~~~~~~~~~~

If you will be running multiple installations of ExpressionEngine on the
same server then you will want to specify a unique cookie prefix for
each installation. This cookie prefix will prevent the cookies from
interfering with each other.
