Spam Class
===========

.. contents::
  :local:

.. highlight:: php

Introduction
------------

ExpressionEngine's Spam Class gives developers a general method for
classifying any text as spam or ham. The Spam Class requires the 
Spam Module to be installed.

Class Methods
-------------

::

  classify($text)

Classify takes a single parameter, a string, and returns TRUE if it's
classified as spam and FALSE otherwise. The classify method will use
the same classifier used for catching comment and forum spam. If you
wish to use a custom classifier please see the documentation for the
Spam Module. If the Spam Module is not installed this method will
always return FALSE.

::

  moderate($file, $class, $method, $data, $text)

The moderate method will store content flagged as spam. Once content is
stored Admins can use the Spam Module Control Panel page to flag false
positives and ensure the classifier is accurate. The moderate method 
essentially stores a callback to run when something is marked as a false
positive and the the original text. $file stores the path to the file
containing your call back, $class contains the class name your callback
method resides in, $method stores the method name of your callback, and
lastly $data is an array that stores any arguments you want to be
supplied to your callback.
