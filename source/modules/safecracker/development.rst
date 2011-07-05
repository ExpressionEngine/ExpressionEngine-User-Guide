SafeCracker Development
=======================

-  `Getting your custom fieldtype to work with
   SafeCracker <#section_getting_it_to_work>`_

Getting your custom fieldtype to work with SafeCracker
------------------------------------------------------

Use one or more of these methods to get javascript and css in your
display\_field method.

-  ::

       $this->EE->javascript->output();

-  ::

       $this->EE->cp->add_to_head();

-  ::

       $this->EE->cp->add_to_foot();

Place additional script files and stylesheets in the themes folder, so
we can access it outside of the CP.

If you need to use EE's built-in scripts, such as jQuery UI or some of
the other included jQuery plugins, you should make your dependency known
by::

	$this->EE->cp->add_js_script(array('ui' => array('sortable', 'tabs'))); $this->EE->cp->add_js_script('plugin', 'tablesorter');

Extension Hooks
---------------

safecracker\_submit\_entry\_start
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

::

	$this->EE->extensions->call('safecracker_submit_entry_start', $this);

$this
    The SafeCracker library object

safecracker\_submit\_entry\_end
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

::

	$this->EE->extensions->call('safecracker_submit_entry_end', $this);

$this
    The SafeCracker library object

