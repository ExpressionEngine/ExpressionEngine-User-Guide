Permission Service
==================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

Simple Example
--------------

The permission service checks for member authorization. For example::

  if (ee('Permission')->hasAll('can_edit_all_comments'))
  {
    $this->edit_comment_form();
  }

The service automatically takes takes member group overrides for Superadmins into account.



Permission Service Methods
--------------------------

.. namespace:: EllisLab\ExpressionEngine\Service\Permission

.. class:: Permission

.. method:: has()

  Checks a session object for a single permission

  :param string A single permission name
  :returns: TRUE if allowed FALSE if not
  :rtype: Boolean

.. method:: hasAny()

  Checks a session object for any matches against a collection of permissions, from one on up.

  :param mixed Any number of permission names
  :returns: TRUE if allowed FALSE if not
  :rtype: Boolean

.. method:: hasAll()

  Checks that session object matches all permissions in a collection of permissions, from one on up.

  :param mixed Any number of permission names
  :returns: TRUE if allowed FALSE if not
  :rtype: Boolean


