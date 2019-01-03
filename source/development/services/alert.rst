.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

CP/Alert Service
================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

Simple Example
--------------

Alerts are for providing feedback on an action and calling attention to warnings or errors. We describe, in detail, how to build different kinds of alerts in our :style_guide:`CP style-guide <c/alerts>`. We have also created an Alert Service for creating alerts in your code. For example::

  ee('CP/Alert')->makeInline('fortune-cookie-form')
	->asIssue()
	->withTitle(lang('fortune_cookie_save_error'))
	->addToBody(lang('fortune_cookie_save_error_desc'))
	->now();

CP/Alert Service Methods
------------------------

.. namespace:: EllisLab\ExpressionEngine\Service\Alert

.. class:: AlertCollection

.. method:: make($name, $type = 'inline')

  Makes a new named alert of the specified type.

  :param string $name: The name of the alert
  :param string $type: The type of the alert ('inline', 'banner', 'standard', or 'alert')
  :returns: An alert
  :rtype: Alert

.. method:: makeInline($name)

  Makes a new named inline alert.

  :param string $name: The name of the alert
  :returns: An alert
  :rtype: Alert

.. method:: makeBanner($name)

  Makes a new named banner alert.

  :param string $name: The name of the alert
  :returns: An alert
  :rtype: Alert

.. method:: makeStandard($name)

  Makes a new named standard alert.

  :param string $name: The name of the alert
  :returns: An alert
  :rtype: Alert

.. method:: get($name, $type = 'inline')

  Gets the rendered value of a named alert of a certain type.

  :param string $name: The name of the alert
  :param string $type: The type of the alert ('inline', 'banner', or 'standard')
  :returns: The rendered HTML of the alert
  :rtype: String

.. method:: getAllBanners()

  Gets the rendered value of all banner alerts.

  :returns: The rendered HTML of the alert
  :rtype: String

.. method:: getAllInlines()

  Gets the rendered value of all inline alerts.

  :returns: The rendered HTML of the alert
  :rtype: String

.. method:: getStandard()

  Gets the rendered value of the standard alert.

  :returns: The rendered HTML of the alert
  :rtype: String


Alert Object Methods
--------------------

.. class:: EllisLab\\ExpressionEngine\\Service\\Alert\\Alert

.. method:: asAttention()

  Marks the alert as one that provides general information about what you are viewing.

  :returns: $this
  :rtype: Alert

  .. versionadded:: 4.2.0

.. method:: asLoading()

  Creates an alert with a loading style and animation, typically to be shown while AJAXs requests are processing.

  :returns: $this
  :rtype: Alert

  .. versionadded:: 4.2.0

.. method:: asImportant()

  Marks the alert as an important alert. This alert style is the same as the Warning style but cannot be closed by default.

  :returns: $this
  :rtype: Alert

  .. versionadded:: 4.2.0

.. method:: asIssue()

  Marks the alert as an issue alert.

  :returns: $this
  :rtype: Alert

.. method:: asSuccess()

  Marks the alert as a success alert.

  :returns: $this
  :rtype: Alert

.. method:: asTip()

  Marks the alert as a tip alert. This should be used very sparingly, if at all. For instance, in the entire application, it is **only** used natively in the Email Notification templates, to advise the site builder of what variables are available to the template without having to look in the documentation.

  :returns: $this
  :rtype: Alert

  .. versionadded:: 4.1.0

.. method:: asWarning()

  Marks the alert as a warning alert.

  :returns: $this
  :rtype: Alert

.. method:: withTitle($title)

  Sets the title of the alert.

  :param string $title: The title of the alert
  :returns: $this
  :rtype: Alert

.. method:: addToBody($item, $class = NULL)

  Adds content to the body of the alert.

  :param string|array $item: The item to display. If it's an array it will be rendred as a list.
  :param string $class: An optional CSS class to add to the item
  :returns: $this
  :rtype: Alert

.. method:: addSeparator()

  Adds a separator to the body of the alert.

  :returns: $this
  :rtype: Alert

.. method:: setSubAlert($alert)

  Adds an alert to the alert.

  :param string $alert: An alert to render in this alert
  :returns: $this
  :rtype: Alert

.. method:: canClose()

  Allows the alert to be closed by rendering a close icon.

  :returns: $this
  :rtype: Alert

.. method:: cannotClose()

  Does not render a close icon in the alert.

  :returns: $this
  :rtype: Alert

.. method:: render()

  Renders the alert to HTML

  :returns: The rendered HTML of the alert.
  :rtype: String

.. method:: defer()

  Defers rendering and displaying of the alert until the next control panel request.

  :returns: $this
  :rtype: Alert

.. method:: now()

  Saves the alert to be rendered and displayed during this request.

  :returns: $this
  :rtype: Alert
