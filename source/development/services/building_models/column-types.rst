Creating Custom Column Types
============================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

.. todo:: This article is a STUB and needs to be completed.

Defining Custom Types
---------------------

When you create a custom type, you will be creating a class to handle your data
conversions. To make your model aware of this new class, specify it in a
``$_type_classes`` metadata array, with a descriptive name as the key::

  // this is the actual definition of the int column
  protected static $_type_classes = array(
    'int' => 'EllisLab\ExpressionEngine\Service\Model\Column\Scalar\Integer',
  );

Static Types
------------

Static column types are the most efficient. They are stateless, and can be
implemented entirely statically. Their values are stored directly on the model
property. All of the built in scalar column types are static.

Serialized Types
----------------

Serialized types should be used when dealing with stateful data, such as objects
or arrays.

Fully Custom Types
------------------

If neither of those two simple types fits your needs, you can also create a
completely custom type.
