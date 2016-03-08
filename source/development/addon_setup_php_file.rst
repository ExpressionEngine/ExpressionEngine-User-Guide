The ``addon.setup.php`` File
============================

.. highlight:: php

Starting with version 3.0 each add-on in ExpressionEngine must have an
``addon.setup.php`` file in its package directory. This file provides
descriptive data about a specific add-on such as author, name, and version. See
the :doc:`./services/addon` for API access.


Format
------

The file must return an associative array. For example::

  <?php

  return array(
  	'author'      => 'Example, Inc',
  	'author_url'  => 'http://example.com',
  	'name'        => 'Hello World',
  	'description' => 'Displays a friendly "Hello world!" message.',
  	'version'     => '2.0.0',
  	'namespace'   => 'Example\HelloWorld'
  );

Available Keys
--------------

author
~~~~~~

::

  'author' => 'Example, Inc'

This is the name of the company or individual responsible for the add-on. This
value is used in the Add-On Manager for attribution as well as filtering. This
a **required** key.

author_url
~~~~~~~~~~

::

  'author_url' => 'http://example.com'

This is the URL associated with the add-on. This value is used in manual
display for plugins, as such this is a **required** key for all plugins.

name
~~~~

::

  'name' => 'Hello World'

This is the name of the add-on. This value is used in the Add-On Manager as the
display name for the add-on. This is a **required** key.

description
~~~~~~~~~~~

::

  'description' => 'Displays a friendly "Hello world!" message.'

This is a brief description of the add-on. This value is used in the manual
display for plugins, as such this is a **required** key for all plugins.

version
~~~~~~~

::

  'version' => '2.0.0'

This is the version number of the add-on. We recommend using `Semantic
Versioning <http://semver.org>`_. This is a **required** key.

namespace
~~~~~~~~~

::

  'namespace' => 'Example\HelloWorld'

This is the `PHP namespace <http://php.net/namespace>`_ for your add-on. This is
a **required** key.

This key associates your add-on directory with a namespace. ExpressionEngine
will will look inside your add-on directory any time it encounters a class name
that begins with this namespace.

settings_exist
~~~~~~~~~~~~~~

::

  'settings_exist' => TRUE

This indicates whether or not the add-on exposes settings to the Add-On
Manager. The default is ``FALSE``.

docs_url
~~~~~~~~

::

  'docs_url' => 'http://example.com/hello_world/docs'

This is an external URL for additional documentation.

plugin.typography
~~~~~~~~~~~~~~~~~

::

  'plugin.typography' => TRUE

This indicates whether or not the add-on provides a plugin that should be made
available as a text formatter to some Channel Fields. The default is ``FALSE``.

fieldtypes
~~~~~~~~~~

::

  'fieldtypes' => array(
    'hello_world' => array(
      'name' => 'Hello World',
      'compatibility' => 'text'
    )
  )

This is an associative array of the fieldtypes the add-on contains where the
key corresponds to the fieldtype, ``ft.hello_world.php`` in the above example.
Each fieldtype defines its name which is used when creating or editing Channel
Fields.

.. _fieldtype_compatibility_options:

As of 3.1.0 fieldtypes can specify their compatibility. When editing a Channel
Field the fieldtype options will be restricted to those fieldtypes that have
the same compatibility. ExpressionEngine's native fieldtypes have the following
compatibilities:

+---------------+------------------------------------------------------------------------------------+
| Compatibility | Fieldtypes                                                                         |
+===============+====================================================================================+
| date          | :doc:`/fieldtypes/date`                                                            |
+---------------+------------------------------------------------------------------------------------+
| file          | :doc:`/fieldtypes/file`                                                            |
+---------------+------------------------------------------------------------------------------------+
| grid          | :doc:`/fieldtypes/grid`                                                            |
+---------------+------------------------------------------------------------------------------------+
| list          | :doc:`/fieldtypes/select`                                                          |
+---------------+------------------------------------------------------------------------------------+
| relationship  | :doc:`/fieldtypes/relationships`                                                   |
+---------------+------------------------------------------------------------------------------------+
| text          | :doc:`/fieldtypes/email_address`, :doc:`/fieldtypes/rte`, :doc:`/fieldtypes/text`, |
|               | :doc:`/fieldtypes/textarea`, :doc:`/fieldtypes/url`                                |
+---------------+------------------------------------------------------------------------------------+

services
~~~~~~~~

::

  'services' => array(
    'MyService' => function($addon)
    {
      return new ServiceClass();
    }
  )

This is an associative array of services to register on the
:doc:`Dependency Container<./core/dependencies>`.

models
~~~~~~

::

  'models' => array(
    'Name' => 'Model\ClassName'
  )

This is an associate array of models exposed by this addon. The class name
should be relative to the addon namespace. Typically addons will be in a
``Model`` directory in the addon's folder.
