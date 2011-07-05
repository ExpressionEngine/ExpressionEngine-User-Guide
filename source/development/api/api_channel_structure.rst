ExpressionEngine Channel Structure API
======================================

-  **Function Reference**

            
Calling the Class
-----------------

The Channel Structure class is called with the api->instantiate()
function.

::

	$this->EE->load->library('api'); $this->EE->api->instantiate('channel_structure');

Function Reference
------------------

Get Channel Info
~~~~~~~~~~~~~~~~

::

	$this->EE->api_channel_structure->get_channel_info((int) $channel_id);

*Return value*
    Database result object or FALSE on error.

Get Channels
~~~~~~~~~~~~

::

	$this->EE->api_channel_structure->get_channels([(int) $site_id]);

*Return value*
    Database result object or FALSE on error.

Delete Channel
~~~~~~~~~~~~~~

::

	$this->EE->api_channel_structure->delete_channel((int) $channel_id, [(int) $site_id]);

*Return value*
    Channel Title on successful delete or FALSE on error.

Create Channel
~~~~~~~~~~~~~~

::

	$this->EE->api_channel_structure->create_channel((array) $data);

*Return value*
    ID of newly created channel or FALSE on error.

At the minimum, **channel\_title** and **channel\_name** must be in the
$data array.

Values that may be passed in the data array include:

-  **site\_id**, (int)
-  **channel\_title**, (string)
-  **channel\_name**, (string a-zA-Z0-9\_- only)
-  **url\_title\_prefix**, (string a-zA-Z0-9\_- only)
-  **comment\_expiration**, (int)
-  **create\_templates**, (string yes/no)
    **Also Requires:**

   -  **old\_group\_id**
   -  **group\_name**, (string a-zA-Z0-9\_- only)
   -  **template\_theme**

-  **cat\_group**, (int or array of category group ids)
-  **dupe\_id**
-  **status\_group**
-  **field\_group**
-  **channel\_url**
-  **channel\_lang**
-  **group\_order**

Example Usage
^^^^^^^^^^^^^

::

	$data = array(     'channel_title'     => 'News',     'channel_name'      => 'news',     'field_group'       => 2,     'channel_url'       => 'http://example.com/index.php/news/',     'status_group'      => 1, );  if ($this->EE->api_channel_structure->create_channel($data) === FALSE) {     show_error('An Error Occurred Creating the Channel'); }

Modify Channel
~~~~~~~~~~~~~~

::

	$this->EE->api_channel_structure->modify_channel((array) $data);

*Return value*
    ID of newly created channel or FALSE on error.

The channel\_id of the channel to be modified is required in the $data
array. channel\_title and channel\_name are also required.

In addition to values in the exp\_channels table, values that may be
modified include:

-  **apply\_expiration\_to\_existing**, (bool) only if
   comment\_expiration is set
-  **clear\_versioning\_data**, (bool)

