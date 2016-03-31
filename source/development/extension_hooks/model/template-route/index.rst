TemplateRoute Model Extension Hooks
===================================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

before_template_route_insert
----------------------------

.. function:: before_template_route_insert($template_route, $values)

  Called before the template route object is inserted. Changes made to the object will be saved automatically.

  How it's called::

    ee()->extensions->call('before_template_route_insert', $this, $this->getValues());

  :param object $template_route: Current TemplateRoute model object
  :param array $values: The TemplateRoute model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

after_template_route_insert
---------------------------

.. function:: after_template_route_insert($template_route, $values)

  Called after the template route object is inserted. Changes made to the object object will **not** be saved automatically. Saving the object may trigger the save and update hooks.

  How it's called::

    ee()->extensions->call('after_template_route_insert', $this, $this->getValues());

  :param object $template_route: Current TemplateRoute model object
  :param array $values: The TemplateRoute model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

before_template_route_update
----------------------------

.. function:: before_template_route_update($template_route, $values, $modified)

  Called before the template route object is updated. Changes made to the object will be saved automatically.

  How it's called::

    ee()->extensions->call('before_template_route_update', $this, $this->getValues(), $modified);

  :param object $template_route: Current TemplateRoute model object
  :param array $values: The TemplateRoute model object data as an array
  :param array $modified: An array of all the old values that were changed
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

after_template_route_update
---------------------------

.. function:: after_template_route_update($template_route, $values, $modified)

  Called after the template route object is updated. Changes made to the object will **not** be saved automatically. Calling save may fire additional hooks.

  How it's called::

    ee()->extensions->call('after_template_route_update', $this, $this->getValues(), $modified);

  :param object $template_route: Current TemplateRoute model object
  :param array $values: The TemplateRoute model object data as an array
  :param array $modified: An array of all the old values that were changed
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0


before_template_route_save
--------------------------

.. function:: before_template_route_save($template_route, $values)

  Called before the template route object is inserted or updated. Changes made to the object will be saved automatically.

  How it's called::

    ee()->extensions->call('before_template_route_save', $this, $this->getValues());

  :param object $template_route: Current TemplateRoute model object
  :param array $values: The TemplateRoute model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

after_template_route_save
-------------------------

.. function:: after_template_route_save($template_route, $values)

  Called after the template route object is inserted or updated. Changes made to the object will **not** be saved automatically. Calling save may fire additional hooks.

  How it's called::

    ee()->extensions->call('after_template_route_save', $this, $this->getValues());

  :param object $template_route: Current TemplateRoute model object
  :param array $values: The TemplateRoute model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

before_template_route_delete
----------------------------

.. function:: before_template_route_delete($template_route, $values)

  Called before the template route object is deleted. If you are conditionally deleting one of your own models, please consider creating an :ref:`inverse relationship <third_party_relationships>` instead. This will provide better performance and strictly enforce data consistency.

  How it's called::

    ee()->extensions->call('before_template_route_delete', $this, $this->getValues());

  :param object $template_route: Current TemplateRoute model object
  :param array $values: The TemplateRoute model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

after_template_route_delete
---------------------------

.. function:: after_template_route_delete($template_route, $values)

  Called after the template route object is deleted. If you are conditionally deleting one of your own models, please consider creating an :ref:`inverse relationship <third_party_relationships>` instead. This will provide better performance and strictly enforce data consistency.

  How it's called::

    ee()->extensions->call('after_template_route_delete', $this, $this->getValues());

  :param object $template_route: Current TemplateRoute model object
  :param array $values: The TemplateRoute model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0
