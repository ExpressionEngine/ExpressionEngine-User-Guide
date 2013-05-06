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

All fieldtypes should be placed into the third_party folder in a package
and be named after that package name. So in a packaged named google_maps
the fieldtype file will be ``ft.google_maps.php``. All fieldtypes must
inherit from the ``EE_Fieldtype`` base class and they must provide an
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
  /* Location: ./system/expressionengine/third_party/google_maps/ft.google_maps.php */

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

Individual Settings
===================

The default map may not always be the desired choice for each map field,
so on the regular settings page it will display a similar configuration
screen. The individual settings are in a table, so they need to use
``add_row()``.

::

  function display_settings()
  {
      $options = array(
          'latitude'      => $this->settings['latitude'],
          'longitude'     => $this->settings['longitude'],
          'zoom'          => (int) $this->settings['zoom']
      );

      ee()->cp->add_to_head('<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>');

      ee()->javascript->set_global('gmaps.'.$this->field_name.'.settings', $options);
      ee()->javascript->output('
          var fieldOpts = EE.gmaps.'.$this->field_name.'.settings,
              myLatlng = new google.maps.LatLng(fieldOpts.latitude, fieldOpts.longitude);

          var myOptions = {
              zoom: fieldOpts.zoom,
              center: myLatlng,
              scrollwheel: false,
              mapTypeId: google.maps.MapTypeId.ROADMAP
          }

          map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
      ');

      return '<div style="height: 500px;"><div id="map_canvas" style="width: 100%; height: 100%"></div></div>';
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

  a reference to the controller instance

.. attr:: field_id

  the field's database id

.. attr:: field_name

  the field short name

.. attr:: settings

  the field settings array

.. note:: Allowing fields to be used as tag pairs requires some extra
  processing to reduce the parsing overhead. So if you want to create
  such a field, you need to explicitly tell the parser to pre-parse
  these pairs:

  .. attr:: has_array_data

    ``TRUE`` if the field can be used as a tag pair

Function Reference
==================

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
  to save, but the settings array includes an ``entry_id``.

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

  Display the settings page. The default ExpressionEngine rows can be
  created using built in methods. All of these take the current
  ``$data`` and the fieldtype name as parameters::

    $this->field_formatting_row($data, 'google_maps');

  - ``$this->text_direction_row()`` - text direction toggle
  - ``$this->field_formatting_row()`` - field formatting options
    (xhtml, br, none)
  - ``$this->field_show_smileys_row()`` - yes/no toggle to show
    smileys
  - ``$this->field_show_glossary_row()`` - yes/no toggle to show the
    glossary
  - ``$this->field_show_spellcheck_row()`` - yes/no toggle to show
    spellcheck
  - ``$this->field_show_file_selector_row()`` - yes/no toggle to show
    the file selector button
  - ``$this->field_show_writemode_row()`` - yes/no toggle to show the
    writemode button

  :param array $data: Field settings
  :returns: Either nothing, or a string for your settings fields
  :rtype: Void/String

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
