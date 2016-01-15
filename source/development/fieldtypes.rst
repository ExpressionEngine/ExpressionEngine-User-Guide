###########################
ExpressionEngine Fieldtypes
###########################

.. contents::
  :local:
  :depth: 2

.. highlight:: php

********************
Basic File Structure
********************

All fieldtypes should be placed into the ``sysetm/user/addons`` folder in a
package and be named after that package name. So in a packaged named
google_maps the fieldtype file will be ``ft.google_maps.php``. All fieldtypes
must inherit from the ``EE_Fieldtype`` base class and they must provide an
$info array with a name and version number.

::

  <?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

  class Google_maps_ft extends EE_Fieldtype {

      var $info = array(
          'name'      => 'Google Maps',
          'version'   => '1.0'
      );

      // --------------------------------------------------------------------

      function display_field($data)
      {
          return form_input(array(
              'name'  => $this->field_name,
              'id'    => $this->field_id,
              'value' => $data
          ));
      }
  }
  // END Google_maps_ft class

  /* End of file ft.google_maps.php */
  /* Location: ./system/user/addons/google_maps/ft.google_maps.php */

.. note:: All add-ons are required to have an :doc:`addon.setup.php file <addon_setup_php_file>`. This is where Fieldtypes can declare their compatibility with other Fieldtypes.

*********************
Example - Google Maps
*********************

The snippets below were truncated for clarity. The full example
fieldtype can be :download:`downloaded here <google_maps.zip>`.

Installation
============

The google maps fieldtype is going to have 3 global settings. Latitude,
longitude, and zoom. These will determine what the default map looks
like. By returning an array from within install we can provide a default
set of global settings.

::

  function install()
  {
      // Somewhere in Oregon ...
      return array(
          'latitude'  => '44.06193297865348',
          'longitude' => '-121.27584457397461',
          'zoom'      => 13
      );
  }

Uninstaller
===========

The installation method for this fieldtype does not create any
additional tables, so no cleanup work needs to be done. The default
``uninstall()`` method provided by the EE_Fieldtype parent class will
suffice. Most fieldtype methods have sensible defaults to help reduce
duplicate code.

Global Settings
===============

The installer sets the default global settings, but currently there is
no way to change these from the control panel. We can use the
``display_global_settings()`` method to return the contents of the
settings form. Having this method also enables the global settings link
on the overview page.

::

  function display_global_settings()
  {
      $val = array_merge($this->settings, $_POST);

      $form = form_label('latitude', 'latitude').NBS.form_input('latitude', $val['latitude']).NBS.NBS.NBS.' ';
      $form .= form_label('longitude', 'longitude').NBS.form_input('longitude', $val['longitude']).NBS.NBS.NBS.' ';
      $form .= form_label('zoom', 'zoom').NBS.form_dropdown('zoom', range(1, 20), $val['zoom']);

      return $form;
  }

Manually entering longitudes and latitudes is inconvenient so the final
method in the example download also adds some javascript to let the user
choose from a map.

Saving Global Settings
======================

In most instances saving the global settings is as easy as storing the
``$_POST`` array. Remember to include existing global settings if not
everything can be changed.

::

  function save_global_settings()
  {
      return array_merge($this->settings, $_POST);
  }

.. _fieldtype_settings:

Individual Settings
===================

The default map may not always be the desired choice for each map field, so on the regular settings page it will display a similar configuration screen. We will use the familiar :doc:`/development/shared_form_view` format to display our settings.

::

  function display_settings()
  {
      $latitude   = isset($data['latitude']) ? $data['latitude'] : $this->settings['latitude'];
      $longitude  = isset($data['longitude']) ? $data['longitude'] : $this->settings['longitude'];
      $zoom       = isset($data['zoom']) ? $data['zoom'] : $this->settings['zoom'];

      $settings = array(
          array(
              'title' => 'latitude',
              'desc' => 'latitude_desc',
              'fields' => array(
                  'latitude' => array(
                      'type' => 'text',
                      'value' => $latitude,
                  )
              )
          ),
          array(
              'title' => 'longitude',
              'desc' => 'longitude_desc',
              'fields' => array(
                  'longitude' => array(
                      'type' => 'text',
                      'value' => $longitude,
                  )
              )
          ),
          array(
              'title' => 'zoom',
              'desc' => 'zoom_desc',
              'fields' => array(
                  'zoom' => array(
                      'type' => 'select',
                      'choices' => range(1, 20),
                      'value' => $zoom,
                  )
              )
          ),
          array(
              'title' => 'preview',
              'desc' => 'preview_desc',
              'wide' => TRUE,
              'fields' => array(
                  'preview' => array(
                      'type' => 'html',
                      'content' => '<div style="height: 300px;"><div id="map_canvas" style="width: 100%; height: 100%"></div></div>'
                  )
              )
          )
      );

      // Map preview
      $this->_cp_js();
      ee()->javascript->output('$(window).load(gmaps);');

      return array('field_options_google_maps' => array(
          'label' => 'field_options',
          'group' => 'google_maps',
          'settings' => $settings
      ));
  }

Saving Individual Settings
==========================

Saving individual field settings works largely the same as saving global
settings. Keep be aware that they are later merged with global settings,
so they can override a global setting.

::

  function save_settings($data)
  {
      return array(
          'latitude'  => ee()->input->post('latitude'),
          'longitude' => ee()->input->post('longitude'),
          'zoom'      => ee()->input->post('zoom')
      );
  }

Displaying the Field (Publish Page)
===================================

With all the settings set up, it can now be displayed on the publish
screen. A key factor when you get to this stage is to decide in what
format the data should be stored. Since all three available values in
this case are numbers, this field will store them separated by pipes
(``lang|lat|zoom``).

::

  function display_field($data)
  {
      $data_points = array('latitude', 'longitude', 'zoom');

      if ($data)
      {
          list($latitude, $longitude, $zoom) = explode('|', $data);
      }
      else
      {
          foreach($data_points as $key)
          {
              $$key = $this->settings[$key];
          }
      }

      $zoom = (int) $zoom;
      $options = compact($data_points);

      // some javascript

      $value = implode('|', array_values($options));
      $hidden_input = form_input($this->field_name, $value, 'id="'.$this->field_name.'" style="display: none;"');

      return $hidden_input.'<div style="height: 500px;"><div id="map_canvas" style="width: 100%; height: 100%"></div></div>';
  }

Rendering the Tag
=================

Finally, the field needs a frontend display. For google maps this will
almost exclusively be javascript.

::

  function replace_tag($data, $params = array(), $tagdata = FALSE)
  {
      static $script_on_page = FALSE;
      $ret = '';

      list($latitude, $longitude, $zoom) = explode('|', $data);

      // google maps javascript ...

      return $ret.'<div style="height: 500px;"><div id="map_canvas_'.$this->field_id.'" style="width: 100%; height: 100%"></div></div>';
  }

Creating Multiple Rendering Options
===================================

Along with parameters a field can also provide tag modifiers to change
its output. In the template these are called by adding a colon to the
fieldname, followed by the modifier name. For example:
``{myfield:latitude}``. The advantage that field modifiers have over
parameters is that they can be used in conditionals.

Parsing the modifiers is identical to using the regular
``replace_tag()`` function. The method name must start with ``replace_``
followed by the modifier name. ::

    function replace_latitude($data, $params = array(), $tagdata = FALSE)
    {
        list($latitude, $longitude, $zoom) = explode('|', $data);
        return $latitude;
    }

There is also a function to catch ALL modifiers, whose declaration
includes the modifier name and looks like this::

   function replace_tag_catchall($file_info, $params = array(), $tagdata = FALSE, $modifier)

You can also use variable pairs to capture tag data for processing in
your modifier function. The syntax for using modifiers on variable pairs
in your templates is::

    {myfield:option}
        Tag data here
    {/myfield}

*********************
Development Reference
*********************

.. class:: EE_Fieldtype

Class Variables
===============

The base class provides a handful of base variables:

.. attr:: EE

  A reference to the controller instance.

.. deprecated:: 2.7.0

.. attr:: id

  The field identifier (unique for the current content type).

.. attr:: name

  The field name, used for the tag names.

.. attr:: content_id

  The unique id of the parent content that contains this field. Not
  available in install, settings, or other non-content environments.

.. attr:: content_type

.. attr:: settings

  The field settings array

.. attr:: field_id

  Alias for id

.. attr:: field_name

  Alias for name

.. note:: Allowing fields to be used as tag pairs requires some extra
  processing to reduce the parsing overhead. So if you want to create
  such a field, you need to explicitly tell the parser to pre-parse
  these pairs:

  .. attr:: has_array_data

    ``TRUE`` if the field can be used as a tag pair

Function Reference
==================

.. method:: id()

  Getter for ``id``.

  :rtype: Integer/String

.. method:: name()

  Getter for ``name``.

  :rtype: String

.. method:: content_id()

  Getter for ``content_id``.

  :rtype: Integer/String

.. method:: content_type()

  Getter for ``content_type``.

  :rtype: String

.. method:: row($key [, $default = NULL ])

  Accessor for the current content type parent row. In the case of channel
  entries, this would be current entry row. If the key is not found, the
  value given in default is returned. Not all content types have all row
  keys.

  :param: string $key: The name of the row value to retrieve
  :param: mixed $default: The value to return if $key is not set
  :return: The value of the row element, or $default.
  :rtype: Mixed

.. method:: install()

  Installs the fieldtype and sets initial global settings. Can return an
  array of global variables.

  :rtype: Void

.. method:: uninstall()

  Handle any cleanup needed to uninstall the fieldtype. Channel data is
  dropped automatically.

  :rtype: Void

.. method:: display_field($data)

  Used to render the publish field.

  :param array $data: Current field data, blank for new entries
  :returns: The field to display on the publish page
  :rtype: String

.. method:: validate($data)

  Validates the field input

  :param array $data: Current field data, blank for new entries
  :returns: ``TRUE`` if the field validates, an error message otherwise
  :rtype: Boolean/String

.. method:: save($data)

  Preps the data for saving

  :param array $data: Current field data, blank for new entries
  :returns: Data to save to the database
  :rtype: String

.. method:: post_save($data)

  Handles any custom logic after an entry is saved.

  Called after an entry is added or updated. Available data is identical
  to save. This is a good method to implement if you need the content ID
  of the fieldtype's newly-saved parent content type.

  :param array $data: Current field data, blank for new entries
  :rtype: Void

.. method:: delete($ids)

  Handles any custom logic after an entry is deleted.

  Called after one or more entries are deleted.

  :param array $ids: IDs of deleted entries. Please note that channel
    data is removed automatically so most fieldtypes will not need this
    method.
  :rtype: Void

.. method:: pre_loop($data)

  Before the tag is rendered on the frontend, this function is called to
  pass field data for the entire channel entries loop to the fieldtype
  for preprocessing or caching. This function is useful when your
  fieldtype needs to query the database to render its tag. Instead of
  querying with each loop of the channel entries tag, all data needed
  can be gathered up front, therefore reducing queries and loadtime
  needed.

  :param array data: contains all field data for the current channel
    entries loop, limited only to the fieldtype's own data
  :rtype: Void

.. method:: replace_tag($data[, $params = array()[, $tagdata = FALSE]])

  Replace the field tag on the frontend.

  :param array $data: contains the field data (or prepped data, if using
    ``pre_process``)
  :param array $params: contains field parameters (if any)
  :param array $tagdata: contains data between tag (for tag pairs)
  :returns: String to replace the tag
  :rtype: String

.. method:: display_settings($data)

  Display the settings page.

  :param array $data: Field settings
  :returns: An array in the :doc:`/development/shared_form_view` format
  :rtype: Array

.. method:: validate_settings($data)

  Validate fieldtype settings. In this method, you can use the
  :doc:`/development/services/validation` to ensure values entered in
  your settings form are valid. Here is an example from our File field::

    function validate_settings($data)
    {
        $validator = ee('Validation')->make(array(
            'allowed_directories' => 'required|allowedDirectories'
        ));

        $validator->defineRule('allowedDirectories', array($this, '_validate_file_settings'));

        return $validator->validate($settings);
    }

  Callbacks may be specified as well, as you see above we are calling
  a method called ``_validate_file_settings`` to ensure upload
  destinations exist before creating a new file field.

  :param array $data: Submitted settings for this field
  :rtype: Validation result object

.. method:: save_settings($data)

  Save the fieldtype settings.

  :param array $data: Submitted settings for this field
  :returns: Settings for the field
  :rtype: Array

.. method:: settings_modify_column($data)

  Allows the specification of an array of fields to be added, modified
  or dropped when fields are created, edited or deleted.

  :param array $data: settings for this field as well an indicator of
    the action being performed (``$data['ee_action']`` with a value of
    ``delete``, ``add`` or ``get_info``).
  :returns: Fields to be created, modified or dropped when fields are
    created
  :rtype: Array

  By default, when a new field is created, 2 fields are added to the
  exp_channel_data table. The content field (``field_id_x``) is a text
  field and the format field (``field_ft_x``) is a ``tinytext NULL
  default``. You may override or add to those defaults by including an
  array of fields and field formatting options in this method. For
  example, the date file type requires an additional ``field_dt_x``
  field and different content field type::

    function settings_modify_column($data)
    {
        $fields['field_id_'.$data['field_id']] = array(
            'type'      => 'INT',
            'constraint'    => 10,
            'default'   => 0
            );

        $fields['field_dt_'.$data['field_id']] = array(
            'type'      => 'VARCHAR',
            'constraint'    => 8
            );

        return $fields;
    }

.. method:: post_save_settings($data)

  Do additional processing after the field is created/modified.

  ``$this->settings`` is fully available at this stage.

  :param array $data: submitted settings for this field
  :rtype: Void

.. method:: display_global_settings()

  Display a global settings page. The current available global settings
  are in ``$this->settings``.

  :returns: Global settings form
  :rtype: String

.. method:: save_global_settings()

  Save the global settings. Return an array of global settings.

  :returns: Global settings
  :rtype: Array

.. method:: pre_process($data)

  Preprocess the data on the frontend. Multiple tag pairs in the same
  weblog tag will cause ``replace_tag`` to be called multiple times. To
  reduce the processing required to extract the original data structure
  from the string (i.e. unserializing), the ``pre_process`` function is
  called first.

  :param array $data: Field data
  :returns: Prepped ``$data``
  :rtype: Array

*************************
Content Type Independence
*************************

Fieldtypes can be used to describe fields in many different types of
content. For most fieldtypes adding support simply means overriding the
:meth:`~EE_Fieldtype::accepts_content_type` method to always return TRUE.

.. method:: accepts_content_type($name)

  Returns TRUE or FALSE based on whether or not the content type is
  supported. By default all fieldtypes support the `channel` content type.::

    public function accepts_content_type($name)
    {
      return ($name == 'channel');
    }

  :param string $name: The name of the content type
  :returns: Supports the given content type?
  :rtype: Boolean

However, if your fieldtype stores its own data, then you must make sure
to clearly separate the data by content type. You can do this by accessing
the current content type with the :meth:`~EE_Fieldtype::content_type` getter
method, and using it as an additional parameter everywhere you store or retrieve data.

You must also handle the complete out removal of a content type.

.. method:: unregister_content_type($name)

  Remove a content type from the current fieldtype.

  :param string $name: Name of the content type to remove.
  :rtype: void

If your fieldtype creates columns or tables dynamically, you may also
want to implement the opposite case of when a fieldtype is added.

.. method:: register_content_type($name)

  Add a content type from the current fieldtype.

  :param string $name: Name of the content type to add.
  :rtype: void

**************************
Grid Fieldtype Development
**************************

In order to make your fieldtypes compatible with Grid, a few more
methods as well as Javascript callbacks are available.

To make your fieldtype recognized by Grid as a Grid-compatible
fieldtype, you need to modify your implementation of
:meth:`~EE_Fieldtype::accepts_content_type` to accept the ``grid``
content type. For example::

  public function accepts_content_type($name)
  {
      return ($name == 'channel' || $name == 'grid');
  }

Once that's done, your fieldtype will show up in the list
of fieldtypes available for use when setting up a new Grid column.å

Grid Fieldtype Events
=====================

All of the regular fieldtype methods (``display_field()``,
``replace_tag()``, etc.) are available prefixed with "grid\_" for
special handling when being used in the context of the Grid field, with
a few exceptions noted below. For
example::

  // Only called when being used as a normal fieldtype:
  public function display_field($data)
  {
      // Display code
  }

  // Only called when being rendered in a Grid field cell:
  public function grid_display_field($data)
  {
      // Display code for Grid cell
  }

However, if a fieldtype does NOT implement ``grid_display_field()``,
Grid will call ``display_field()`` to display the field's form in the
cell. This applies to all fieldtype methods except for the following:

============================= ==========================
Method                        Exception
============================= ==========================
``install()``                 No unique Grid method required
``uninstall()``               No unique Grid method required
``display_global_settings()`` No unique Grid method required
``save_global_settings()``    No unique Grid method required
``settings_modify_column()``  Must use ``grid_settings_modify_column()``
============================= ==========================

The idea is that most fieldtypes should be able to use the same code to
handle their field operations for both Grid and the normal publish form,
but if not, you can easily override the behavior and run special
operations when in the context of Grid.

If you use ``grid_*`` methods, you may want to look for ways to refactor
your fieldtype where there is overlapping logic to run. For example,
some of our native fieldtypes require slightly different code to render
the HTML needed to display fields in ``display_field()`` and
``grid_display_field()``, so we try to centralize the the common logic
between them for better code maintainability.

Grid Fieldtype Settings Class Property
======================================

When your fieldtype is in the context of Grid, it will have a few more
items available to you in your fieldtype's ``$settings`` class property.

+-----------------------+----------------------------------------------+
| Settings Key Name     | Description                                  |
+=======================+==============================================+
| ``col_id``            | The ID of the column your fieldtype is in    |
|                       | publish form                                 |
+-----------------------+----------------------------------------------+
| ``col_name``          | The short name of the column your fieldtype  |
|                       | is in                                        |
+-----------------------+----------------------------------------------+
| ``col_required``      | Whether or not the column is required (y/n), |
|                       | ``field_required`` will also be set to this  |
+-----------------------+----------------------------------------------+
| ``grid_field_id``     | Field ID of the column's parent Grid field   |
+-----------------------+----------------------------------------------+
| ``grid_row_name``     | In certain instances, such as saving data,   |
|                       | will be set to a unique row name when a row  |
|                       | ID might not be available for new rows       |
+-----------------------+----------------------------------------------+
| ``grid_row_id``       | When available, ID of the current row being  |
|                       | processed                                    |
+-----------------------+----------------------------------------------+

These are accessed as array keys of your ``$settings`` class property
like so::

  $this->settings['col_id'];


Grid Javascript Events
======================

Several Javascript events are fired on certain actions to let your
fieldtypes know when those actions have taken place. Here is an
overview.

+-----------------------+-----------+---------------------------------+
| Event Name            | Description                                 |
+=======================+===========+=================================+
| **display**           | Called when a row is displayed on the       |
|                       | publish form                                |
+-----------------------+-----------+---------------------------------+
| **remove**            | Called when a row is deleted from the       |
|                       | publish form                                |
+-----------------------+-----------+---------------------------------+
| **beforeSort**        | Called before a row starts sorting on the   |
|                       | publish form                                |
+-----------------------+-----------+---------------------------------+
| **afterSort**         | Called after a row finishes sorting on the  |
|                       | publish form                                |
+-----------------------+-----------+---------------------------------+
| **displaySettings**   | Called when a fieldtype's settings form is  |
|                       | displayed on the Grid field settings page   |
+-----------------------+-----------+---------------------------------+

To bind an event, use the below Javascript as an example::

  Grid.bind("date", "display", function(cell)
  {
      // Act on event
  });

Here are the usage details for this function:

.. js:function:: Grid.bind(fieldtype, event, callback)

  :param string fieldtype: Your short fieldtype name
  :param string: Event name
  :param callback: Callback function to use for the event
  :rtype: Void

A jQuery object of the cell being affected by the current event (or
settings form in the case of ``displaySettings``) is passed to the
callback function. There are a few data attributes available on the
cell object such as ``fieldtype``, ``column-id`` and ``row-id``
(``row-id`` will be undefined for new rows). Plus since it's a jQuery
object, you have all DOM traversal methods available to act upon.
