############
Output Class
############

.. highlight:: php

The Output class is a core class with one main function: To send the finalized web page to the requesting browser. It is also responsible for caching web pages.

.. note:: This class is initialized automatically by the system so there is no need to do it manually.

Under normal circumstances you won't even notice the Output class since it works transparently without your intervention. For example, when you use the :doc:`Loader </development/legacy/libraries/loader>` class to load a view file, it's automatically passed to the Output class, which will be called automatically by ExpressionEngine at the end of system execution. It is possible, however, for you to manually intervene with the output if you need to.

***************
Class Reference
***************

.. class:: EE_Output

.. attr:: parse_exec_vars

	Defaults to ``TRUE``.

	Enables/disables parsing of the ``{elapsed_time}`` and ``{memory_usage}`` pseudo-variables.

	ExpressionEngine will parse those tokens in your output by default. To disable this, set this property to ``FALSE`` in your controller.
	::

		ee()->output->parse_exec_vars = FALSE;

.. method:: set_output($output)

	:param	string	$output: String to set the output to
	:returns:	EE_Output instance (method chaining)
	:rtype:	EE_Output

	Permits you to manually set the final output string. Usage example::

		ee()->output->set_output($data);

	.. important:: If you do set your output manually, it must be the last thing done in the function you call it from. For example, if you build a page in one of your controller methods, don't set the output until the end.


.. method:: get_output()

	:returns:	Output string
	:rtype:	string

	Permits you to manually retrieve any output that has been sent for storage in the output class. Usage example::

		$string = ee()->output->get_output();

	Note that data will only be retrievable from this function if it has been previously sent to the output class by one of the ExpressionEngine functions like ``ee()->load->view()``.

.. method:: append_output($output)

	:param	string	$output: Additional output data to append
	:returns:	EE_Output instance (method chaining)
	:rtype:	EE_Output

	Appends data onto the output string.
	::

		ee()->output->append_output($data);

.. method:: set_header($header[, $replace = TRUE])

	:param	string	$header: HTTP response header
	:param	bool	$replace: Whether to replace the old header value, if it is already set
	:returns:	EE_Output instance (method chaining)
	:rtype:	EE_Output

	Permits you to manually set server headers, which the output class will send for you when outputting the final rendered display. Example::

		ee()->output->set_header('HTTP/1.0 200 OK');
		ee()->output->set_header('HTTP/1.1 200 OK');
		ee()->output->set_header('Last-Modified: '.gmdate('D, d M Y H:i:s', $last_update).' GMT');
		ee()->output->set_header('Cache-Control: no-store, no-cache, must-revalidate');
		ee()->output->set_header('Cache-Control: post-check=0, pre-check=0');
		ee()->output->set_header('Pragma: no-cache');

.. method:: set_status_header([$code = 200[, $text = '']])

	:param	int	$code: HTTP status code
	:param	string	$text: Optional message
	:returns:	EE_Output instance (method chaining)
	:rtype:	EE_Output

	Permits you to manually set a server status header. Example::

		ee()->output->set_status_header('401');
		// Sets the header as:  Unauthorized

	`See here <http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html>`_ for a full list of headers.

	.. note:: This method is an alias for :func:`set_status_header()`.

.. method:: enable_profiler([$val = TRUE])

	:param	bool	$val: Whether to enable or disable the Profiler
	:returns:	EE_Output instance (method chaining)
	:rtype:	EE_Output

	Permits you to enable/disable the Output Debugger, which will display benchmark and other data at the bottom of your pages for debugging and optimization purposes.

	To enable the profiler place the following line anywhere within your
	:doc:`Controller </development/legacy/controllers>` methods::

		ee()->output->enable_profiler(TRUE);

	When enabled a report will be generated and inserted at the bottom of your pages.

	To disable the profiler you would use::

		ee()->output->enable_profiler(FALSE);

.. method:: cache($time)

	:param	int	$time: Cache expiration time in seconds
	:returns:	EE_Output instance (method chaining)
	:rtype:	EE_Output

	Caches the current page for the specified amount of seconds.

	For more information, please see the :doc:`caching documentation </development/legacy/libraries/cache>`.

.. method:: _display([$output = ''])

	:param	string	$output: Output data override
	:returns:	void
	:rtype:	void

	Sends finalized output data to the browser along with any server headers. It also stops benchmark timers.

	.. note:: This method is called automatically at the end of script execution, you won't need to call it manually unless you are aborting script execution using ``exit()`` or ``die()`` in your code.

	.. note:: Calling this method manually without aborting script execution will result in duplicated output.
