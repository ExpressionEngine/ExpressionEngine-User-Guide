ExpressionEngine Template Structure API
=======================================

-  **Function Reference**

         
Calling the Class
-----------------

The Template Structure class is called with the api->instantiate()
function.

::

	$this->EE->load->library('api'); $this->EE->api->instantiate('template_structure');

Function Reference
------------------

Get Group Info
~~~~~~~~~~~~~~

::

	$this->EE->api_template_structure->get_group_info($group_id);

*Return value*
    Database result object or returns FALSE on error.

Create Template Group
~~~~~~~~~~~~~~~~~~~~~

::

	$this->EE->api_template_structure->create_template_group((array) $data, (int) $duplicate)

Example Usage
^^^^^^^^^^^^^

::

	$data = array('group_name'        => 'home',          'group_order'       => 2,          'is_site_default'   => 'n',          'site_id'       => 1);          $this->EE->api_template_structure->create_template_group($data, 1);

*Return value*
    Returns id of newly created group or FALSE on error.

File Extensions
~~~~~~~~~~~~~~~

::

	$this->EE->api_template_structure->file_extensions((str) $template_type);

Template Types
^^^^^^^^^^^^^^

-  webpage
-  static
-  feed
-  css
-  js
-  xml

*Return value*
    Returns file extension if template type exists, or an empty string

