Cookie Settings
===============

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Security and Privacy --> Cookie Settings`

This section of the Control Panel allows you to define cookie settings
for your website.


.. _cookie-domain-label:

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


.. _cookie-path-label:

Cookie Path
~~~~~~~~~~~

Optionally specify a cookie path. When a cookie path is set, the browser
will only share cookies with ExpressionEngine when the beginning of the
URL path matches the cookie path. For example, if the cookie path is set
to ``/blog/``, a cookie for the domain ``example.com`` will only be sent
by the browser if the URL begins with ``http://example.com/blog/``. This
can be useful if you have ExpressionEngine installed in a sub-directory
and want to ensure that only that particular installation has access to
the cookies it sets.


.. _cookie-prefix-label:

Cookie Prefix
~~~~~~~~~~~~~

If you will be running multiple installations of ExpressionEngine on the
same server then you will want to specify a unique cookie prefix for
each installation. This cookie prefix will prevent the cookies from
interfering with each other.
