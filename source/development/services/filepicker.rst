.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

CP/FilePicker Service
=====================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

Simple Example
--------------

Controlling user uploads can be tricky. To help ease the process, the file picker
service can be used to create simple file upload UIs::

  $filepicker = ee('CP/FilePicker')->make();

This creates a file picker object for all upload directories that the user has
access to. It creates up the required modal html and injects the correct javascript
into the output of the page.

Now we need to create a link to actually pop the file picker modal::

  $link = $filepicker->getLink('Click me!');

And we need to show this link to the user::

  <?=$link->render()?>

.. tip:: If you aren't further manipulating the ``$link`` object, you can chain the methods to generate an HTML string in a one liner::

   $link = $filepicker->getLink('Click me!')->render();

That's all there is to it! Clicking this link will pop open a file picker and allow
the user to choose an existing file or upload a new file. Of course, this is not
helpful unless that choice is populated somewhere.

Usually, the information we need is the file id that they chose. We can automatically populate this in a hidden form element. First we need to tell the link what id we will use for this hidden input::

  $link->withValueTarget('my-file');

Then we will add a hidden input, and we'll put it near the link for clarity::

  <input name="my-file" id="my-file" type="hidden">
  <?=$link->render()?>

You can also control this behavior more carefully by using a :ref:`callback<filepicker_javascript_callback>`.

Link Methods
------------

The link class has several utility methods to change the display and behavior of
the file picker.

``setAttribute()``
~~~~~~~~~~~~~~~~~~

Set an html attribute on your link::

  $link->setAttribute('id', 'my-upload');

``addAttributes()``
~~~~~~~~~~~~~~~~~~~

Set an array of html attributes on your link::

  $link->addAttributes(array(
    'id' => 'my-upload',
    'class' => 'myclass'
  ));

``setText()``
~~~~~~~~~~~~~

Change the text inside the link. Any html in this text will be encoded::

  $link->setText('Choose a file!');

``setHtml()``
~~~~~~~~~~~~~

An alternative to ``setText`` for when you need to show other html elements inside
your link::

  $link->setHtml('Choose <b>one</b> file!');

``asThumbs()``
~~~~~~~~~~~~~~

Change the file picker list style to thumbnails::

  $link->asThumbs();

``asList()``
~~~~~~~~~~~~

Change the file picker list style back to a simple table. This is the default::

  $link->asList();

``disableFilters()``
~~~~~~~~~~~~~~~~~~~~

Disable the file picker's filtering UI::

  $link->disableFilters();

``enableFilters()``
~~~~~~~~~~~~~~~~~~~

Re-enable the file picker's filtering UI. This is the default::

  $link->enableFilters();

``disableUploads()``
~~~~~~~~~~~~~~~~~~~~

Disable the file picker's upload UI::

  $link->disableUploads();

``enableUploads()``
~~~~~~~~~~~~~~~~~~~

Re-enable the file picker's upload UI. This is the default::

  $link->enableUploads();

.. _filepicker_javascript_callback:

JavaScript Callbacks
--------------------

The default javascript callbacks do not work for all cases. You can add your own
using the ``$(...).FilePicker`` jQuery plugin. For this plugin to work you must
still load the filepicker library in your controller. Then, simply call the plugin
on your newly created link::

  $('#my-upload').FilePicker({
    callback: function(data, references) {
      // Close the modal
      references.modal.find('.m-close').click();

      // do work with data
    }
  });

The references will contain jQuery objects of the modal and the image tags and
bound inputs, if any were specified. The data will contain a json representation
of the selected file.
