.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

URI Class
=========

.. class:: URI

The URI Class provides methods that help you retrieve information from
your URI strings. This class is initialized automatically.

.. contents::
  :local:

.. highlight:: php

ee()->uri->segment()
--------------------

.. method:: segment($n[, $no_result = FALSE])

  Permits you to retrieve a specific segment, where ``$n`` is the
  segment number you wish to retrieve. Segments are numbered from left
  to right. For example, if your full URL is this::

    https://example.com/news/local/metro/crime_is_up

  The segment numbers would be this:

  #. ``news``
  #. ``local``
  #. ``metro``
  #. ``crime_is_up``

  By default the method returns ``FALSE`` (boolean) if the segment
  does not exist. There is an optional second parameter that permits you
  to set your own default value if the segment is missing. For example,
  this would tell the method to return the number zero in the event of
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

  :param integer $n: The segment number you want to retrieve
  :param mixed $no_result: Default to use if the segment does not exist
  :returns: The segment
  :rtype: String

ee()->uri->slash_segment()
--------------------------

.. method:: slash_segment($n[, $where = 'trailing'])

  This method is almost identical to :meth:`URI::segment` except it
  adds a trailing and/or leading slash based on the second parameter. If
  the parameter is not used, a trailing slash added. Examples::

    ee()->uri->slash_segment(3); // returns segment/
    ee()->uri->slash_segment(3, 'leading'); // returns /segment
    ee()->uri->slash_segment(3, 'both'); // returns /segment/

  :param integer $n: The segment number you want to retrieve
  :param string $where: ``'trailing'`` if you want the slash at the end,
    ``'leading'`` if you want it at the beginning, ``'both'`` if you
    want both
  :returns: Segment with a slash
  :rtype: String

ee()->uri->uri_to_assoc()
-------------------------

.. method:: uri_to_assoc([$n = 3[, $default = array()]])

  This method lets you turn URI segments into an associative array of
  key/value pairs. Consider this URI::

    index.php/user/search/name/joe/location/UK/gender/male

  Using this method you can turn the URI into an associative array with
  this prototype::

    [array]
    (
        'name' => 'joe'
        'location'  => 'UK'
        'gender'  => 'male'
    )

  The first parameter of the method lets you set an offset. By default
  it is set to 3 since your URI will normally contain a
  controller/function in the first and second segments. Example::

   $array = ee()->uri->uri_to_assoc(3);
   echo $array['name'];

  The second parameter lets you set default key names, so that the array
  returned by the method will always contain expected indexes, even if
  missing from the URI. Example::

   $default = array('name', 'gender', 'location', 'type', 'sort');
   $array = ee()->uri->uri_to_assoc(3, $default);

  If the URI does not contain a value in your default, an array index
  will be set to that name with a value of ``FALSE``.

  Lastly, if a corresponding value is not found for a given key (if
  there is an odd number of URI segments) the value will be set to
  ``FALSE`` (boolean).

  :param integer $n: Starting segment number
  :param array $default: Array of default values
  :returns: Key value pair of the URI
  :rtype: Array

ee()->uri->assoc_to_uri()
-------------------------

.. method:: associ_to_uri($array)

  Takes an associative array and generates a URI string from it. The
  array keys will be included in the string. Example::

    // Produces:  product/shoes/size/large/color/red

    $array = array('product' => 'shoes', 'size' => 'large', 'color' => 'red');
    $str = ee()->uri->assoc_to_uri($array);

  :param array $array: Associative array containing key and value pairs
  :returns: Joined array
  :rtype: Array

ee()->uri->uri_string()
-----------------------

.. method:: uri_string()

  Returns a string with the complete current URI. For example, if this
  is your current URL::

    https://example.com/news/local/345

  The method would return this::

    /news/local/345

  :returns: URI String
  :rtype: String

ee()->uri->total_segments()
---------------------------

.. method:: total_segments()

  Returns the total number of segments in the current URI.

  :returns: Total number of segments in current URI
  :rtype: Integer

ee()->uri->segment_array()
--------------------------

.. method:: segment_array()

  Returns an array containing the URI segments. For example::

    $segs = ee()->uri->segment_array();

    foreach ($segs as $segment)
    {
        echo $segment;
        echo '<br />';
    }

  :returns: Array of current segments
  :rtype: Array
