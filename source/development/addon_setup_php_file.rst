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
  	'author_url'  => 'https://example.com',
  	'name'        => 'Hello World',
  	'description' => 'Displays a friendly "Hello world!" message.',
  	'version'     => '2.0.0',
  	'namespace'   => 'Example\HelloWorld'
  );

Available Keys
--------------

.. contents::
  :local:
  :depth: 1

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

  'author_url' => 'https://example.com'

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

  'docs_url' => 'https://example.com/hello_world/docs'

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
      $dependency = new SupportingClass();
      return new ServiceClass(dependency);
    }
  )

This is an associative array of services to register on the
:doc:`Dependency Injection Container<./core/dependencies>`. This is typically used to help you place class construction code in a single place that can be easily called throughout your app. If your service code is written to be unit-testable, you may have several classes you need to insert through dependency injection. Instead of having to copy and paste boiler plate code to set up your service throughout your add-on, you can just register it in the Dependency Injection Container and call it from your add-on like this::

  ee('example:MyService');

Where ``example`` is the short package name of your add-on.

.. note:: You may need to include your service code's namespace in the addon.setup.php file. Assuming it's stored in a Service directory in your addon, it may look like:
  ``use Example\HelloWorld\Service\ServiceClass;``

models
~~~~~~

::

  'models' => array(
    'Name' => 'Model\ClassName'
  )

This is an associate array of models exposed by this addon. The class name
should be relative to the addon namespace. Typically addons will be in a
``Model`` directory in the addon's folder.

.. _addon_consent_requests:

consent.requests
~~~~~~~~~~~~~~~~

::

  'consent.requests' => [
    'do_stuff' => [
      'title' => 'Do Stuff',
      'request' => 'We will *do stuff* with your data, okay?',
      'request_format' => 'markdown',
    ],
    'do_some_other_stuff' => [
      'title' => 'Do Some Other Stuff',
      'request' => 'We will *do some other stuff* with your data, okay?',
      'request_format' => 'markdown',
      'double_opt_in' => TRUE,
    ],
  ],

This will register your consent requests with your add-on namespace, and you can now grant and withdraw consent using your add-on's prefix (e.g. ``my_addon``) and a colon(``:``)::

  ee('Consent')->grant('my_addon:do_stuff');

.. note:: Consent requests in your ``addon.setup.php`` file will automatically be created when your add-on is installed. If you modify your ``consent.requests`` in your setup file, any **new** consent requests that do not already exist will automatically be created when the user updates your add-on. So make sure you increment your app version if you add new consent requests.

+----------------+----------------------------------------------------------------------------------------------------+
|      Key       |                                             Definition                                             |
+================+====================================================================================================+
| title          | (*required*) The display name for the consent request                                              |
+----------------+----------------------------------------------------------------------------------------------------+
| request        | (*required*) The explanatory text for the consent request.                                         |
|                | After installation, a site admin can modify this text                                              |
|                | as necessary to fit their needs, but you should provide a clear                                    |
|                | and direct explanation of what consenting to this request will allow.                              |
+----------------+----------------------------------------------------------------------------------------------------+
| request_format | (*optional*) Any valid format that will be used to parse                                           |
|                | your request text. (e.g. ``br``, ``markdown``, ``none``, ``xhtml``)                                |
+----------------+----------------------------------------------------------------------------------------------------+
| double_opt_in  | (*optional*) Boolean value, whether or not this consent requests                                   |
|                | requires a double opt-in (e.g. checking a checkbox and clicking a verification link sent by email) |
+----------------+----------------------------------------------------------------------------------------------------+

.. note:: The short name will also be used by a site builder in ``{exp:consent}`` tag parameters.

.. note:: ``double_opt_in`` will soon be handled automatically by this service. But if you choose to use this now (v4.3.0), you will need to build your own mechanism for the second verification before granting consent.


cookies
~~~~~~~

::

  'cookies.necessary' => [
    'unique_id',
  ],
  'cookies.functionality' => [
    'font_size',
  ],
  'cookies.performance' => [
    'analytics_id',
  ],
  'cookies.targeting' => [
    'advertising_tracker',
  ],

If your add-on sets any custom cookies, you must register the name of the cookie here within the array(s) of the appropriate type. This way if the site requires consent for cookies, the user's preferences can be respected. If you set a cookie that is not registered with your add-on, it will still set, but a warning will be generated in the Developer Log detailing the non-compliant cookie.

+-----------------------+--------------------------------------------------------------------------------------+
|          Type         |                                       Purpose                                        |
+=======================+======================================================================================+
| cookies.necessary     | Required to function properly. Does not contain personally identifiable information. |
+-----------------------+--------------------------------------------------------------------------------------+
| cookies.functionality | Enhances functionality, such as remembering a user's preferences or settings.        |
+-----------------------+--------------------------------------------------------------------------------------+
| cookies.performance   | Analytics, statistics, etc. Data should be aggregated and anonymous.                 |
+-----------------------+--------------------------------------------------------------------------------------+
| cookies.targeting     | Typically the only cookie type that can contain personally identifiable information. |
|                       | Marketing cookies that help establish profiles for ad delivery, for instance.        |
+-----------------------+--------------------------------------------------------------------------------------+
