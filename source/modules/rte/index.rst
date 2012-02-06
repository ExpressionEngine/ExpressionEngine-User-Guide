RTE Module
==========

.. contents::
   :local:
   :depth: 1
   
Introduction
------------

The main purpose of the RTE tag is to allow use of ExpressionEngine's
Rich Text Editor outside of the Control Panel.

The RSS Module Tag is intended to be used in conjunction with a
``textarea`` field which you want to turn into a Rich Text Editor.

Parameters
----------

.. contents::
   :local:

toolset\_id=
~~~~~~~~~~~~

::

	toolset_id="1"

**Required**. The RTE Toolset you want to load. The toolset must 
exist, of course.

selector=
~~~~~~~~~

::

	selector=".my-custom-class"

The ExpressionEngine Rich Text Editor, when included, will automatically
turn any element with a ``class`` of "rte" into a Rich Text Field. To 
override this behavior, you must define a different selector. Any valid 
jQuery selector is acceptable.