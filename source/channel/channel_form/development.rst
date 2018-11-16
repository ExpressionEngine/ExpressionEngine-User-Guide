.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Channel Form Development
========================

.. contents::
   :local:
   :depth: 1

.. _channel_form_development_fieldtype:

Getting your custom fieldtype to work with the Channel Form
-----------------------------------------------------------

Use one or more of these methods to get javascript and css in your
display\_field method.

-  ::

       ee()->javascript->output();

-  ::

       ee()->cp->add_to_head();

-  ::

       ee()->cp->add_to_foot();

Place additional script files and stylesheets in the themes folder, so
we can access it outside of the CP.

If you need to use EE's built-in scripts, such as jQuery UI or some of
the other included jQuery plugins, you should make your dependency known
by::

	ee()->cp->add_js_script(array('ui' => array('sortable', 'tabs')));
	ee()->cp->add_js_script('plugin', 'tablesorter');

.. _channel_form_development_hooks:

Extension Hooks
---------------

.. contents::
   :local:

channel_form\_submit\_entry\_start
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

::

	ee()->extensions->call('channel_form_submit_entry_start', $this);

where **$this** is the Channel Form library object.

channel_form\_submit\_entry\_end
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

::

	ee()->extensions->call('channel_form_submit_entry_end', $this);

where **$this** is the Channel Form library object.

