URI Class
=========

The URI Class provides functions that help you retrieve information from
your URI strings. This class is initialized automatically.

.. contents::
	:local:

.. highlight:: php

ee()->uri->segment(n)
--------------------------

Permits you to retrieve a specific segment, where n is the segment
number you wish to retrieve. Segments are numbered from left to right.
For example, if your full URL is this::

	http://example.com/index.php/news/local/metro/crime_is_up

The segment numbers would be this:

#. news
#. local
#. metro
#. crime\_is\_up

By default the function returns FALSE (boolean) if the segment does not
exist. There is an optional second parameter that permits you to set
your own default value if the segment is missing. For example, this
would tell the function to return the number zero in the event of
failure::

	$product_id = ee()->uri->segment(3, 0);

It helps avoid having to write code like this::

	if (ee()->uri->segment(3) === FALSE)
	{
	    $product_id = 0;
	}
	else
	{
	    $product_id = ee()->uri->segment(3);
	}

ee()->uri->slash\_segment(n)
---------------------------------

This function is almost identical to ee()->uri->segment() except it
adds a trailing and/or leading slash based on the second parameter. If
the parameter is not used, a trailing slash added. Examples::

	ee()->uri->slash_segment(3);

	ee()->uri->slash_segment(3, 'leading');

	ee()->uri->slash_segment(3, 'both');

Returns:

#. segment/
#. /segment
#. /segment/

ee()->uri->uri\_to\_assoc(n)
---------------------------------

This function lets you turn URI segments into an associative array of
key/value pairs. Consider this URI::

	index.php/user/search/name/joe/location/UK/gender/male

Using this function you can turn the URI into an associative array with
this prototype::

	[array]
	(
	    'name' => 'joe'
	    'location'	=> 'UK'
	    'gender'	=> 'male'
	)

The first parameter of the function lets you set an offset. By default
it is set to 3 since your URI will normally contain a
controller/function in the first and second segments. Example::

	 $array = ee()->uri->uri_to_assoc(3);
	 echo $array['name'];

The second parameter lets you set default key names, so that the array
returned by the function will always contain expected indexes, even if
missing from the URI. Example::

	 $default = array('name', 'gender', 'location', 'type', 'sort');
	 $array = ee()->uri->uri_to_assoc(3, $default);

If the URI does not contain a value in your default, an array index will
be set to that name with a value of FALSE.

Lastly, if a corresponding value is not found for a given key (if there
is an odd number of URI segments) the value will be set to FALSE
(boolean).

ee()->uri->assoc\_to\_uri($array)
--------------------------------------

Takes an associative array and generates a URI string from it. The array
keys will be included in the string. Example::

	// Produces:  product/shoes/size/large/color/red

	$array = array('product' => 'shoes', 'size' => 'large', 'color' => 'red');
	$str = ee()->uri->assoc_to_uri($array);


ee()->uri->uri\_string()
-----------------------------

Returns a string with the complete current URI. For example, if this is
your current URL::

	http://example.com/index.php/news/local/345

The function would return this::

	/news/local/345

ee()->uri->total\_segments()
---------------------------------

Returns the total number of segments in the current URI.

ee()->uri->segment\_array()
--------------------------------

Returns an array containing the URI segments. For example::

	$segs = ee()->uri->segment_array();

	foreach ($segs as $segment)
	{
	    echo $segment;
	    echo '<br />';
	}

