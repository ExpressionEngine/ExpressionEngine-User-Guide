Input Class
===========

-  `Calling the Input Class <input.html#calling>`_
-  `Fetching a Superglobal value <input.html#superglobals>`_
-  `Other Class Variables <input.html#other_vars>`_
-  `Cleaning Global Variables <input.html#cleaning_globals>`_

Calling the Input Class
-----------------------

ExpressionEngine uses the Input class for two main purposes:

#. To provide some helper functions for fetching input data and
   pre-processing it.
#. To pre-process global input data for security.

This class is initialized automatically.

Fetching a Superglobal value
----------------------------

You are not required to use this class to call the incoming data from
the superglobal arrays, it will still be available through the
superglobals themselves. However, the input class does offer some
benefits.

Since the ExpressionEngine function for creating cookies
[$this->EE->functions->set\_cookie();] adds a prefix automatically to
enable compatibility with other programs, it is recommended that you use
the Input Class, since it automatically strips out that prefix.

The superglobal functions all allow the specification of an optional
second parameter that lets you run the data through the `XSS
filter <security.html#xss_filter>`_. It's enabled by setting the second
parameter to boolean TRUE.

Lastly, the superglobal functions will check to see if the item is set
and return FALSE (boolean) if not. This lets you conveniently use data
without having to test whether an item exists first. In other words,
normally you might do something like this::

	 if ( ! isset($_POST['something'])) {     $something = FALSE; } else {     $something = $_POST['something']; }

With the built in functions you can simply do this::

	$something = $this->EE->input->post('something');

To automatically run the returned data through the xss\_clean()
function, simply specify the second parameter is TRUE::

	$something = $this->EE->input->post('something', TRUE);

The available superglobal functions are:

$this->EE->input->post()
^^^^^^^^^^^^^^^^^^^^^^^^

   The first parameter will contain the name of the POST item you are
   looking for::

	$this->EE->input->post('some_data');

$this->EE->input->get()
^^^^^^^^^^^^^^^^^^^^^^^

   This function is identical to the post function, only it fetches get
   data::

	$this->EE->input->get('some_data');

$this->EE->input->get\_post()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   This function will search through both the post and get streams for
   data, looking first in post, and then in get::

	$this->EE->input->get_post('some_data');

$this->EE->input->cookie()
^^^^^^^^^^^^^^^^^^^^^^^^^^

   This function is identical to the post function, only it fetches
   cookie data::

	$this->EE->input->cookie('some_data');

$this->EE->input->server()
^^^^^^^^^^^^^^^^^^^^^^^^^^

   This function is identical to the above functions, only it fetches
   server data::

	$this->EE->input->server('some_data');

Other Class Variables
---------------------

$this->EE->input->ip\_address()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   Returns the IP address for the current user. If the IP address is not
   valid, the function will return an IP of: 0.0.0.0

::

	echo $this->EE->input->ip_address();

$this->EE->input->valid\_ip($ip)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   Takes an IP address as input and returns TRUE or FALSE (boolean) if
   it is valid or not. Note: The $this->EE->input->ip\_address()
   function above validates the IP automatically.

::

	if ( ! $this->input->valid_ip($ip)) {      echo 'Not Valid'; } else  {      echo 'Valid'; }

$this->EE->input->user\_agent()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   Returns the user agent (web browser) being used by the current user.
   Returns FALSE if it's not available.

::

	echo $this->EE->input->user_agent();

Cleaning Superglobals
---------------------

The input class is loaded by EE core early in processing. It
automatically does the following:

-  Destroys all global variables in the event register\_globals is
   turned on.
-  Filters the POST/GET/COOKIE array keys, permitting only alpha-numeric
   (and a few other) characters.
-  Standardizes newline characters to \\n

