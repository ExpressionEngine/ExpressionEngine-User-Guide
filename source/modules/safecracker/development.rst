SafeCracker Development
=======================

.. contents::
   :local:
   :depth: 1

.. _safecracker_development_fieldtype:

Getting your custom fieldtype to work with SafeCracker
------------------------------------------------------

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

.. _safecracker_development_hooks:

Extension Hooks
---------------

.. contents::
   :local:

safecracker\_submit\_entry\_start
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

::

	ee()->extensions->call('safecracker_submit_entry_start', $this);

where **$this** is the SafeCracker library object.

safecracker\_submit\_entry\_end
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

::

	ee()->extensions->call('safecracker_submit_entry_end', $this);

where **$this** is the SafeCracker library object.

