Alert Service
=============

.. contents::
  :local:
  :depth: 1

.. highlight:: php

Simple Example
--------------

Alerts are for providing feedback on an action and calling attention to warnings
or errors. We describe, in detail, how to build different kinds of alerts in our
`CP style-guide <https://ellislab.com/style-guide/c/alerts>`_. We have also created
an Alert Service for creating alerts in your code. For example::

  ee('Alert')->makeInline('fortune-cookie-form')
	->asIssue()
	->withTitle(lang('fortune_cookie_save_error'))
	->addToBody(lang('fortune_cookie_save_error_desc'))
	->now();

Alert Service Methods
---------------------

.. class:: EllisLab\\ExpressionEngine\\Service\\Alert\\AlertCollection

.. method:: make($name, $type = 'inline')

  Makes a new named alert of the specified type.

  :param string $name: The name of the alert
  :param string $type: The type of the alert ('inline', 'banner', or 'standard')
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

.. method:: getAllStandard()

  Gets the rendered value of all standard alerts.

  :returns: The rendered HTML of the alert
  :rtype: String


Alert Object Methods
--------------------

.. class:: EllisLab\\ExpressionEngine\\Service\\Alert\\Alert

.. method:: asIssue()

  Marks the alert as an issue alert.

  :returns: $this
  :rtype: Alert

.. method:: asWarning()

  Marks the alert as a warning alert.

  :returns: $this
  :rtype: Alert

.. method:: asSuccess()

  Marks the alert as a success alert.

  :returns: $this
  :rtype: Alert

.. method:: withTitle($title)

  Adds a title to the alert.

  :param string $title: The title of the alert
  :returns: $this
  :rtype: Alert

.. method:: addToBody($item, $class = NULL)

  Adds content to the body of the alert.

  :param string $item: The item to display
  :param string $class: An optional CSS class to add to the item
  :returns: $this
  :rtype: Alert

.. method:: addSeparator()

  Adds a separator to the body of the alert.

  :returns: $this
  :rtype: Alert

.. method:: setSubAlert($alert)

  Adds an alert to the alert

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

  Renders the alert

  :returns: The rendered HTML of the alert
  :rtype: String

.. method:: defer()

  Defers rendering and displaying of the alert until the next CP request

  :rtype: Void

.. method:: now()

  Queues the alert to be rendered and displayed during this request

  :rtype: Void
