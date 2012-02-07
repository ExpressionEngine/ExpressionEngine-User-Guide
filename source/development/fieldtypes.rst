ExpressionEngine Fieldtypes
===========================


Basic File Structure
--------------------

All fieldtypes should be placed into the third\_party folder in a
package and be named after that package name. So in a packaged named
google\_maps the fieldtype file will be ft.google\_maps.php. All
fieldtypes must inherit from the EE\_Fieldtype base class and they must
provide an $info array with a name and version number.

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

Example - Google Maps
---------------------

The snippets below were truncated for clarity. The full example
fieldtype can be :download:`downloaded here <google_maps.zip>`.

Installation
~~~~~~~~~~~~

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
~~~~~~~~~~~

The installation method for this fieldtype does not create any
additional tables, so no cleanup work needs to be done. The default
uninstall() method provided by the EE\_Fieldtype parent class will
suffice. Most fieldtype methods have sensible defaults to help reduce
duplicate code.

Global Settings
~~~~~~~~~~~~~~~

The installer sets the default global settings, but currently there is
no way to change these from the control panel. We can use the
display\_global\_settings() method to return the contents of the
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
~~~~~~~~~~~~~~~~~~~~~~

In most instances saving the global settings is as easy as storing the
$\_POST array. Remember to include existing global settings if not
everything can be changed.

::

    function save_global_settings()
    {
        return array_merge($this->settings, $_POST);
    }

Individual Settings
~~~~~~~~~~~~~~~~~~~

The default map may not always be the desired choice for each map field,
so on the regular settings page it will display a similar configuration
screen. The individual settings are in a table, so they need to use
add\_row().

::

    function display_settings()
    {
        $options = array(
            'latitude'      => $this->settings['latitude'],
            'longitude'     => $this->settings['longitude'],
            'zoom'          => (int) $this->settings['zoom']
        );

        $this->EE->cp->add_to_head('<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>');

        $this->EE->javascript->set_global('gmaps.'.$this->field_name.'.settings', $options);
        $this->EE->javascript->output('
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
~~~~~~~~~~~~~~~~~~~~~~~~~~

Saving individual field settings works largely the same as saving global
settings. Keep be aware that they are later merged with global settings,
so they can override a global setting.

::

    function save_settings($data)
    {
        return array(
            'latitude'  => $this->EE->input->post('latitude'),
            'longitude' => $this->EE->input->post('longitude'),
            'zoom'      => $this->EE->input->post('zoom')
        );
    }

Displaying the Field (Publish Page)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

With all the settings set up, it can now be displayed on the publish
screen. A key factor when you get to this stage is to decide in what
format the data should be stored. Since all three available values in
this case are numbers, this field will store them separated by pipes
(lang\|lat\|zoom).

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
~~~~~~~~~~~~~~~~~

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
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Along with parameters a field can also provide tag modifiers to change
its output. In the template these are called by adding a colon to the
fieldname, followed by the modifier name. For example:
{myfield:latitude}. The advantage that field modifiers have over
parameters is that they can be used in conditionals.

Parsing the modifiers is identical to using the regular replace\_tag()
function. The method name must start with replace\_ followed by the
modifier name.
::

    function replace_latitude($data, $params = array(), $tagdata = FALSE)
    {
        list($latitude, $longitude, $zoom) = explode('|', $data);
        return $latitude;
    }

Class Variables
---------------

The base class provides a handful of base variables:

-  **$EE** - a reference to the controller instance
-  **$field\_id** - the field's database id
-  **$field\_name** - the field short name
-  **$settings** - the field settings array

Allowing fields to be used as tag pairs requires some extra processing
to reduce the parsing overhead. So if you want to create such a field,
you need to explicitly tell the parser to pre-parse these pairs:

-  **$has\_array\_data** - TRUE if the field can be used as a tag pair

Function Reference
------------------

install()
~~~~~~~~~

Installs the fieldtype and sets initial global settings. Can return an
array of global variables.

uninstall()
~~~~~~~~~~~

Handle any cleanup needed to uninstall the fieldtype. Channel data is
dropped automatically.

display\_field($data)
~~~~~~~~~~~~~~~~~~~~~

Used to render the publish field.

$data contains the current field data. Blank for new entries.

validate($data)
~~~~~~~~~~~~~~~

Validates the field input

$data contains the submitted field data.

Must return TRUE or an error message

save($data)
~~~~~~~~~~~

Preps the data for saving

$data contains the submitted field data.

Must return the string to save.

post\_save($data)
~~~~~~~~~~~~~~~~~

Handles any custom logic after an entry is saved.

Called after an entry is added or updated. Available data is identical
to save, but the settings array includes an entry\_id.

$data Contains the submitted field data.

delete($ids)
~~~~~~~~~~~~

Handles any custom logic after an entry is deleted.

Called after one or more entries are deleted.

$ids is an array containing the ids of the deleted entries. Please note
that channel data is removed automatically so most fieldtypes will not
need this method.

pre_loop($data)
~~~~~~~~~~~~~~~

Sends field data for the entire channel entries loop to the fieldtype for
preprocessing or caching. This function is useful when your fieldtype
needs to query the database to render its tag. Instead of querying with
each loop of the channel entries tag, all data needed can be gathered up
front, therefore reducing queries and loadtime needed.

$data contains all field data for the current channel entries loop,
limited only to the fieldtype's own data.

replace\_tag($data, $params = array(), $tagdata = FALSE)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Replace the field tag on the frontend.

$data contains the field data (or prepped data, if using pre\_process)

$params contains field parameters (if any)

$tagdata contains data between tag (for tag pairs)

Must return the string to replace the tag. Example from the file field
type:

display\_settings($data)
~~~~~~~~~~~~~~~~~~~~~~~~

Display the settings page. The default ExpressionEngine rows can be
created using built in methods. All of these take the current $data and
the fieltype name as parameters:

::

    $this->field_formatting_row($data, 'google_maps');

-  **$this->text\_direction\_row()** - text direction toggle
-  **$this->field\_formatting\_row()** - field formatting options
   (xhtml, br, none)
-  **$this->field\_show\_smileys\_row()** - yes/no toggle to show
   smileys
-  **$this->field\_show\_glossary\_row()** - yes/no toggle to show the
   glossary
-  **$this->field\_show\_spellcheck\_row()** - yes/no toggle to show
   spellcheck
-  **$this->field\_show\_file\_selector\_row()** - yes/no toggle to show
   the file selector button
-  **$this->field\_show\_writemode\_row()** - yes/no toggle to show the
   writemode button

save\_settings($data)
~~~~~~~~~~~~~~~~~~~~~

Save the fieldtype settings.

$data contains the submitted settings for this field.

settings\_modify\_column($params)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Allows the specification of an array of fields to be added, modified or
dropped when fields are created, edited or deleted.

$data contains the settings for this field as well an indicator of the
action being performed ($data['ee\_action'] with a value of delete, add
or get\_info).

By default, when a new field is created, 2 fields are added to the
exp\_channel\_data table. The content field (field\_id\_x) is a text
field and the format field (field\_ft\_x) is a tinytext NULL default.
You may override or add to those defaults by including an array of
fields and field formatting options in this method. For example, the
date file type requires an additional field\_dt\_x field and different
content field type::

	function settings_modify_column($data)
	{
		$fields['field_id_'.$data['field_id']] = array(
			'type' 		=> 'INT',
			'constraint'	=> 10,
			'default'	=> 0
			);
	
		$fields['field_dt_'.$data['field_id']] = array(
			'type' 		=> 'VARCHAR',
			'constraint'	=> 8
			);			
		
		return $fields;
	}	

post\_save\_settings($data)
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Do additional processing after the field is created/modified.
$this->settings is fully available at this stage.

$data contains the submitted settings for this field.

display\_global\_settings()
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Display a global settings page. The current available global settings
are in $this->settings.

save\_global\_settings()
~~~~~~~~~~~~~~~~~~~~~~~~

Save the global settings. Return an array of global settings.

pre\_process($data)
~~~~~~~~~~~~~~~~~~~

Preprocess the data on the frontend. Multiple tag pairs in the same
weblog tag will cause replace\_tag to be called multiple times. To
reduce the processing required to extract the original data structure
from the string (i.e. unserializing), the pre\_process function is
called first.

$data contains the field data. Return the prepped data.
