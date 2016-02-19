Permission Service
==================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

Simple Example
--------------

The permission service checks for member authorization as indicated in the session userdata. Superadmins automatically have permission.

To check for exactly 1 permission::

  if (ee('Permission')->has('can_edit_all_comments'))
  {
    $this->show_form();
  }

To check for the existence of at least one permission among a list of permissions::

  if (ee('Permission')->hasAny('can_create_template_partials', 'can_edit_template_partials', 'can_delete_template_partials'))
  {
    $this->show_header();
  }

To check for the existence of all listed permissions::

  $can_delete = ee('Permission')->hasAll('can_delete_all_comments', 'can_delete_own_comments')


Permission Service Methods
--------------------------

.. namespace:: EllisLab\ExpressionEngine\Service\Permission

.. class:: Permission

.. method:: has($permission)

  Checks a session object for a single permission

  :param string $permission: A single permission name
  :returns: TRUE if allowed FALSE if not
  :rtype: Boolean

.. method:: hasAny($permission)

  Checks a session object for any matches against a collection of permissions, from one on up.

  :param mixed $permission: Any number of permission names
  :returns: TRUE if allowed FALSE if not
  :rtype: Boolean

.. method:: hasAll($permission)

  Checks a session object matches all permissions in a collection of permissions, from one on up.

  :param mixed $permission: Any number of permission names
  :returns: TRUE if allowed FALSE if not
  :rtype: Boolean

