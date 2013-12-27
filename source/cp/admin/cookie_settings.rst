Cookie Settings
===============

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Security and Privacy --> Cookie Settings`

This section of the Control Panel allows you to define cookie settings
for your website.


.. _cookie-domain-label:

Cookie Domain
~~~~~~~~~~~~~

Optionally specify a domain the cookie is available to. By default, the
exact hostname of the requested page is set as the cookie domain. For
example, if the page at ``http://www.example.com/blog/an-entry-title``
is loaded and the cookie domain is left blank in ExpressionEngine's
configuration, the browser will use ``www.example.com`` as the cookie
domain. The browser will only make these cookies available when the
page's hostname is *exactly* ``www.example.com``.

If the cookie domain is explicitly specified, however, the browser will
make the cookie available whenever the requested page's hostname
*contains* the cookie domain. For example, setting the cookie domain to
``.example.com`` will ensure the cookie is shared whenever the requested
page's hostname includes ``example.com``, ``www.example.com``,
``admin.example.com``, ``blog.example.com``, and so on.

If you're running multiple subdomains on a single ExpressionEngine
installation and want member sessions to be valid across all subdomains,
you should explicitly set the cookie domain.

.. note:: There's an important difference between ``example.com`` and
    ``.example.com``. When the cookie domain begins with a dot, browsers
    match any hostname that *includes* the cookie domain. Without the
    dot prefix, browsers are looking for an exact hostname match in the
    URL, which means cookies will not be available to subdomains. A
    cookie set by PHP with an explicitly specified cookie domain will
    always include the dot prefix, whether or not one is included in
    this ExpressionEngine setting. For clarity's sake, the examples here
    include a leading dot when the cookie domain is being explicitly
    set.

.. note:: Browsers will not save cookies if the specified cookie domain
    isn't included in the request's hostname. In other words, a site can
    only set cookies for ``.example.com`` if its hostname actually
    includes ``example.com``.


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
