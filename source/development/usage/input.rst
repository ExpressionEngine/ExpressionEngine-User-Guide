Input Class
===========

.. contents::
  :local:

.. highlight:: php

Calling the Input Class
-----------------------

.. class:: Input

  ExpressionEngine uses the Input class for two main purposes:

  #. To provide some helper methods for fetching input data and
     pre-processing it.
  #. To pre-process global input data for security.

  This class is initialized automatically.

Fetching a Superglobal value
----------------------------

You are not required to use this class to call the incoming data from
the superglobal arrays, it will still be available through the
superglobals themselves. However, the input class does offer some
benefits.

Since the ExpressionEngine method for creating cookies---
:meth:`Functions::set_cookie`---adds a prefix automatically to enable
compatibility with other programs, it is recommended that you use the
Input Class, since it automatically strips out that prefix.

The superglobal methods all allow the specification of an optional
second parameter that lets you run the data through the :doc:`XSS filter
</development/usage/security>`. It's enabled by setting the second
parameter to boolean TRUE.

Lastly, the superglobal methods will check to see if the item is set
and return ``FALSE`` (boolean) if not. This lets you conveniently use
data without having to test whether an item exists first. In other
words, normally you might do something like this::

  if ( ! isset($_POST['something']))
  {
      $something = FALSE;
  }
  else
  {
      $something = $_POST['something'];
  }

With the built-in methods you can simply do this::

  $something = ee()->input->post('something');

To automatically run the returned data through the
:meth:`Security::xss_clean` method, simply specify the second
parameter is ``TRUE``::

  $something = ee()->input->post('something', TRUE);

The available superglobal methods are:

.. method:: post($index[, $xss_clean = FALSE])

  The first parameter will contain the name of the ``POST`` item you are
  looking for::

    ee()->input->post('some_data');

  :param string $index: Name of the input in the ``$_POST`` array
  :param boolean $xss_clean: If set to ``TRUE`` the value will be run
    through :meth:`Security::xss_clean`
  :returns: Value stored in ``$_POST``
  :rtype: String

.. method:: get($index[, $xss_clean = FALSE])

  This method is identical to the post method, only it fetches get
  data::

    ee()->input->get('some_data');

  :param string $index: Name of the input in the ``$_GET`` array
  :param boolean $xss_clean: If set to ``TRUE`` the value will be run
    through :meth:`Security::xss_clean`
  :returns: Value stored in ``$_GET``
  :rtype: String

.. method:: get_post($index[, $xss_clean = FALSE])

  This method will search through both the post and get streams for
  data, looking first in post, and then in get::

    ee()->input->get_post('some_data');

  :param string $index: Name of the input in the ``$_POST`` or ``$_GET``
    array
  :param boolean $xss_clean: If set to ``TRUE`` the value will be run
    through :meth:`Security::xss_clean`
  :returns: Value stored in ``$_POST`` or ``$_GET``
  :rtype: String

.. method:: cookie($index[, $xss_clean = FALSE])

  This method is identical to the post method, only it fetches
  cookie data::

    ee()->input->cookie('some_data');

  :param string $index: Name of the input in the ``$_COOKIE`` array
  :param boolean $xss_clean: If set to ``TRUE`` the value will be run
    through :meth:`Security::xss_clean`
  :returns: Value stored in ``$_COOKIE``
  :rtype: String

.. method:: server($index[, $xss_clean = FALSE])

  This method is identical to the above method, only it fetches
  server data::

    ee()->input->server('some_data');

  :param string $index: Name of the input in the ``$_SERVER`` array
  :param boolean $xss_clean: If set to ``TRUE`` the value will be run
    through :meth:`Security::xss_clean`
  :returns: Value stored in ``$_SERVER``
  :rtype: String

.. method:: ip_address()

  Returns the IP address for the current user. If the IP address is not
  valid, the method will return an IP of: 0.0.0.0::

    echo ee()->input->ip_address();

  :returns: IP address for the current user
  :rtype: String

.. method:: valid_ip($ip[, $which = ''])

  Takes an IP address as input and returns ``TRUE`` or ``FALSE``
  (boolean) if it is valid or not.

  .. note:: The :meth:`Input::ip_address` method above validates
    the IP automatically.

  ::

    if ( ! $this->input->valid_ip($ip))
    {
        echo 'Not Valid';
    }
    else
    {
        echo 'Valid';
    }

  :param string $ip: IP address to validate
  :param string $which: Specify ``'ipv4'`` or ``'ipv6'`` to validate
    a specific type of IP address
  :returns: ``TRUE`` if valid, ``FALSE`` otherwise
  :rtype: Boolean

.. method:: user_agent()

  Returns the user agent (web browser) being used by the current user::

    echo ee()->input->user_agent();

  :returns: The user agent, otherwise ``FALSE``
  :rtype: Mixed

Cleaning Superglobals
---------------------

The input class is loaded by EE core early in processing. It
automatically does the following:

- Destroys all global variables in the event ``register_globals`` is
  turned on.
- Filters the ``POST``/``GET``/``COOKIE`` array keys, permitting only
  alpha-numeric (and a few other) characters.
- Standardizes newline characters to ``\\n``
