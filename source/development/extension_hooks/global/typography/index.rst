.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Typography Library Extension Hooks
==================================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

typography_parse_type_start
---------------------------

.. function:: typography_parse_type_start($str, $this, $prefs)

  Modify string prior to all other typography processing.

  How it's called::

    $str = $this->extensions->call('typography_parse_type_start', $str, $this, $prefs);

  :param string $str: The string currently being parsed
  :param object $this: The Typography library object
  :param array $prefs: Array of preferences sent to
    ``EE_Typography::parse_type``
  :returns: String to be parsed by ``EE_Typography::parse_type``
  :rtype: String

  .. versionadded:: 1.4.0

typography_parse_type_end
-------------------------

.. function:: typography_parse_type_end($str, $this, $prefs)

  Modify string after all other typography processing.

  How it's called::

    $str = $this->extensions->call('typography_parse_type_end', $str, $this, $prefs);

  :param string $str: The string currently being parsed
  :param object $this: The Typography library object
  :param array $prefs: Array of preferences sent to
    ``EE_Typography::parse_type``
  :returns: String passed out of ``EE_Typography::parse_type``
  :rtype: String

  .. versionadded:: 1.4.0
