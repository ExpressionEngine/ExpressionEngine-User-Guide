##############
Memory Service
##############

.. contents::
  :local:
  :depth: 1

.. highlight:: php

The Memory service provides some handy methods revolving around PHP's memory usage.

*****
Usage
*****

Get Memory Limit
----------------

PHP's ini setting for ``memory_limit`` could be in a variety of formats. This method standardizes the value and provides it to you in bytes::

  $current_limit = ee('Memory')->getMemoryLimitBytes();
  // e.g. 536870912

Set Memory For Image Manipulations
----------------------------------

When processing an uploaded image, the compressed filesize for the most part doesn't matter, as the PHP image libraries will create an uncompressed representation of the image for processing. So the physical dimensions and color space are a large determining factor for how much memory PHP will need to crop, resize, etc.

This method attempts to guess how much memory will be needed by examining some of the image's properties, and then set the memory limit for the current request to a high enough value to allow PHP to do its work::

  try
  {
    ee('Memory')->setMemoryForImageManipulation($file_path);
  }
  catch (\Exception $e)
  {
    show_error($e->getMessage());
  }

If the environment doesn't allow the memory limit to be increased, this method will throw an Exception that you can handle however you need in your code, avoiding a fatal memory error in PHP.

Memory Methods
--------------

.. namespace:: EllisLab\ExpressionEngine\Service\Memory

.. class:: Memory

.. method:: getMemoryLimitBytes()

  Gets the current memory limit, in bytes.

  :returns: Current memory limit, in bytes. (int -1 means no limit)
  :rtype: int

.. method:: setMemoryForImageManipulation($file_path, $tweak_multiplier = 1.8)

  Sets memory needed for image manipulations of a given file.

  :param string $file_path: The server path to the file
  :param float $tweak_multiplier: Multiplier used for estimated memory usage
  :returns: void, throws an Exception on failure
