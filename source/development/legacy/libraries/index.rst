.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

#########
Libraries
#########

.. highlight:: php

All of the available libraries are located in your ``system/ee/legacy/libraries/`` directory. In most cases, to use one of these classes involves initializing it within a :doc:`controller </development/legacy/controllers>` using the following initialization method::

  ee()->load->library('class_name');

Where 'class_name' is the name of the class you want to invoke. For example, to load the :doc:`Form Validation Library <form_validation>` you would do this::

  ee()->load->library('form_validation');

Once initialized you can use it as indicated in the user guide page corresponding to that class.

Additionally, multiple libraries can be loaded at the same time by passing an array of libraries to the load method.

Example::

  ee()->load->library(array('email', 'table'));


***************************
Creating Your Own Libraries
***************************

Please read the section of the user guide that discusses how to :doc:`create your own libraries <creating_libraries>`.

*******************
Available Libraries
*******************

.. toctree::
  :glob:
  :titlesonly:
  :maxdepth: 1

  *
