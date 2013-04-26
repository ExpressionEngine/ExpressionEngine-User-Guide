Module Tutorial
===============

.. highlight:: php

The best way to understand ExpressionEngine modules is to dissect one.
Thus we present the 'third party' Download module. This module is fairly
typical, and includes a backend control panel, its own database tables,
adds a tab with fields to the publish page, and in general uses all of
the standard files used in module creation.

The Download module will allow an administrator to select files from the
upload directories and create a download record for them. As part of
that record, they will specify access restrictions based on member
groups. These 'downloads' can then be displayed or accessed through a
'forced download' without revealing the file's true path. Through a
'Download' tab to the publish page, multiple 'Downloads' can be
associated with an entry and displayed or linked inside a standard
channel entries tag.

The full example module can be `downloaded from GitHub
<https://github.com/EllisLab/ee-tuts-download-module>`_.

.. note:: if you have not already read the :doc:`Modules
  Overview </development/modules>`, you will want to do so in order to
  obtain the greatest value from the tutorial.

Required File Structure for the Download Module
-----------------------------------------------

Our module is named 'Download', and that name will form the basis for
much of our file naming conventions. Based on this name, we need to
create a folder named 'download' in ExpressionEngines's third party
package folder::

  /system/expressionengine/third_party/download/

Inside that folder, there are 4 required files. In addition, this module
adds a tab to the publish page, and we will have numerous view files
used in the display of our backend. The final file structure will be:

- ``third_party/download/upd.download.php`` - installs, uninstalls and
  updates the module
- ``third_party/download/mcp.download.php`` - the backend control panel
- ``third_party/download/mod.download.php`` - the core module file,
  which process module tags used in templates
- ``third_party/download/language/english/download_lang.php`` - the
  'english' language file
- ``third_party/download/tab.download.php`` - generates our tab on the
  publish page and process publish page submissions
- ``third_party/download/views/index.html`` - multiple view files inside
  the view folder

.. _module_update_file:

The Update file (upd.download.php)
----------------------------------

The Update file for a module includes a class with a name that is a
combination of the package's name with `_upd` tacked on the end. So,
for our download module, we will create a class called ``Download_upd``.
There is only one required class variable for this class and that is
$version, which should indicate the current version of this module::

  <?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

  class Download_upd {

      var $version = '1.0';

Each Control Panel class has at a minimum three functions:
``install()``, ``uninstall()`` and ``update()``. These functions are
required even if your module has no Control Panel side functionality. In
addition, the Download module requires the ``tabs()`` function, as it
adds a tab to the publish page.

Installation Function
~~~~~~~~~~~~~~~~~~~~~

Here is what our Download module's installation function will look like.
Basically, it inserts the module's name, version, and whether it has a
backend and/or a tab into the exp_modules table (see :ellislab:`Active
Record class </codeigniter/user-guide/database/active_record.html>`).
Since our module will have a Control Panel backend, we set the third
field to ``'y'``, otherwise it should be set to ``'n'``. Since our
module will also add a tab to the publish field, we need to set
``has_publish_fields`` to ``'y'`` as well::

  function install()
  {
      ee()->load->dbforge();

      $data = array(
          'module_name' => 'Download' ,
          'module_version' => $this->version,
          'has_cp_backend' => 'y',
          'has_publish_fields' => 'y'
      );

      ee()->db->insert('modules', $data);

The Download module also requires that we generate an action id, to be
used to serve up files based on the id associated with a given file
record. Adding the following query to our installer will generate that
action id and tie it to the appropriate method::

      $data = array(
          'class'     => 'Download' ,
          'method'    => 'force_download'
      );

      ee()->db->insert('actions', $data);

.. note:: Because the action_id field in the actions table is
  auto-incremented, do not specify it in the query. If you include an
  auto-increment field and leave it empty, it will cause a database
  error if MySQL is running in "strict mode".

When the actions are entered into the exp_actions database table, they
are given a unique action_id that the system will recognize and use to
call the class and function required. If you need to use this id in the
control panel, you can use the CP class ``fetch_action_id()`` function
in your control panel files::

  $action_id  = ee()->cp->fetch_action_id('Download', 'force_download');

When using an action id on the frontend (in your mod.download.php file),
you use the Functions class ``fetch_action_id()``, which outputs the
appropriate tag for the template parser to process::

  $action_id  = ee()->functions->fetch_action_id('Download', 'force_download');

The installation function will also need to create the database tables
that we will use to store the download data and relationships (see
:ellislab:`Database Forge class </codeigniter/user-
guide/database/forge.html>`)::

      $fields = array(
          'file_id'   => array('type' => 'int', 'constraint' => '10', 'unsigned' => TRUE, 'auto_increment' => TRUE),
          'dir_id'    => array('type' => 'int', 'constraint'  => '4'),
          'file_name' => array('type' => 'varchar', 'constraint' => '250'),
          'file_title'    => array('type' => 'varchar', 'constraint' => '250', 'null' => TRUE, 'default' => NULL),
          'member_access' => array('type' => 'varchar', 'constraint' => '250', 'default' => 'all')
          );

      ee()->dbforge->add_field($fields);
      ee()->dbforge->add_key('file_id', TRUE);

      ee()->dbforge->create_table('download_files');

      unset($fields);

      $fields = array(
          'file_id'   => array('type' => 'int', 'constraint' => '10', 'unsigned' => TRUE),
          'entry_id'  => array('type' => 'int', 'constraint' => '10', 'unsigned' => TRUE)
          );

      ee()->dbforge->add_field($fields);
      ee()->dbforge->add_key('file_id', TRUE);
      ee()->dbforge->add_key('entry_id', TRUE);

      ee()->dbforge->create_table('download_posts');

Lastly, we ensure that any saved publish layouts have our new tab data
added to the saved layout via the layout library's
:doc:`add_layout_tabs() function </development/usage/layout>`. Once all
of this has completed, the function should return ``TRUE``::

      ee()->load->library('layout');
      ee()->layout->add_layout_tabs($this->tabs(), 'download');

      return TRUE;
  }

Uninstall Function
~~~~~~~~~~~~~~~~~~

The uninstall function in the Control Panel class for the module should
be pretty standard for every module. It clears out all mention of the
module in the standard ExpressionEngine database tables. If the module
created tables for its own usage, then those will also be deleted in
this function::

  function uninstall()
  {
      ee()->load->dbforge();

      ee()->db->select('module_id');
      $query = ee()->db->get_where('modules', array('module_name' => 'Download'));

      ee()->db->where('module_id', $query->row('module_id'));
      ee()->db->delete('module_member_groups');

      ee()->db->where('module_name', 'Download');
      ee()->db->delete('modules');

      ee()->db->where('class', 'Download');
      ee()->db->delete('actions');

      ee()->dbforge->drop_table('download_files');
      ee()->dbforge->drop_table('download_posts');

      // Required if your module includes fields on the publish page
      ee()->load->library('layout');
      ee()->layout->delete_layout_tabs($this->tabs(), 'download');

      return TRUE;
  }


Note the use of the layout library's :doc:`delete_layout_tabs() function
</development/usage/layout>` to remove our tab from saved layouts.

Update Function
~~~~~~~~~~~~~~~

The update function provides you with a mechanism for updating the
database automatically if you find you need new fields in the future.
The function is required, even if you don't need it yet. At a minimum,
your update function should look like::

  function update($current = '')
  {
      return FALSE;
  }

Our Download module is in its first iteration, so there's really nothing
to update. In this case, the function simply returns ``FALSE``. If the
update function returns ``TRUE``, the version number stored in
``exp_modules`` will automatically be updated as well, making sure the
update function only runs when it needs to.

Tab Function
~~~~~~~~~~~~

On install and uninstall, we called the tabs() function when updating
custom publish page layouts. This function returns a multidimensional
associative array. The top level key is the name of the tab. Within that
array, each field name acts is a key, and contains the default display
states to be added to any existing custom layouts::

  function tabs()
  {
      $tabs['download'] = array(
          'download_field_ids'    => array(
              'visible'   => 'true',
              'collapse'  => 'false',
              'htmlbuttons'   => 'false',
              'width'     => '100%'
          )
      );

      return $tabs;
  }

The Language File (download_lang.php)
-------------------------------------

The Language file contains no classes, simply an array named ``$lang``,
which is used along with the Language class to display text on a page in
whatever language is selected in the user's account settings. There are
two required lines in the language file for each module, which allows
the name and description of the module to be viewable on the MODULES
page. In addition, the Download module requires a number of ``key =>
value`` pairs for use in the control panel as well as frontend error
display (see the file).

The Control Panel file (mcp.download.php)
-----------------------------------------

The Control Panel file for a module includes a class with a name that is
a combination of the package's name with ``_mcp`` tacked on the end. So,
for our Download module, we will create a class called ``Download_mcp``.
There are no required class variables. Because the module requires
multiple pages, a link to the 'Add Files' page is added to the fourth
level navigation using the ``set_right_nav`` function::

  function __construct()
  {
      ee()->cp->set_right_nav(array(
          'add_download'  => BASE.AMP.'C=addons_modules'.AMP.'M=show_module_cp'
              .AMP.'module=download'.AMP.'method=file_browse'
      ));
  }

Module's Control Panel Homepage
-------------------------------

By default, if you do not specify a method in your url, ExpressionEngine
will attempt to load an index function, thus we make the ``index()`` our
module homepage. This page is fairly typical: a list of all existing
download records with the file name, assigned title, allowed member
groups, and a checkbox to allow editing/deleting of records. Let's start
with a simplified example, one where we leave the javascript
embellishments out for now.

The function starts by loading the libraries and helpers required later,
and defines some initial variables that will be used in the view file.
Also note the use of the CP ``set_variable`` method to set our page
title::

  function index()
  {
      ee()->load->library('javascript');
      ee()->load->library('table');
      ee()->load->helper('form');

      ee()->view->cp_page_title = lang('download_module_name');

      $vars['action_url'] = 'C=addons_modules'.AMP.'M=show_module_cp'.AMP.'module=download'.AMP.'method=edit_downloads';
      $vars['form_hidden'] = NULL;
      $vars['files'] = array();

      $vars['options'] = array(
          'edit'  => lang('edit_selected'),
          'delete'    => lang('delete_selected')
      );

Because we may need to paginate our list of files, we need to check for
the row number indicator and then use this in our main query. Make sure
to use the :ellislab:`active record class
</codeigniter/user-guide/database/active_record.html>` when constructing
your queries. This will enable your queries to work as support for more
database types are added::

      if ( ! $rownum = ee()->input->get_post('rownum'))
      {
          $rownum = 0;
      }

      ee()->db->order_by("file_id", "desc");
      $query = ee()->db->get('download_files', $this->perpage, $rownum);

We then loop through the query results and format a ``$vars['files']``
array for easy use in our view file::

      // get all member groups for the dropdown list
      $member_groups = ee()->member_model->get_member_groups();

      foreach($member_groups->result() as $group)
      {
          $member_group[$group->group_id] = $group->group_title;
      }

      foreach($query->result_array() as $row)
      {
          $vars['files'][$row['file_id']]['entry_title'] = $row['file_title'];
          $vars['files'][$row['file_id']]['edit_link'] = BASE.AMP.'C=addons_modules'.AMP
              .'M=show_module_cp'.AMP.'module=download'.AMP.'method=edit_downloads'.AMP.'file_id='.$row['file_id'];
          $vars['files'][$row['file_id']]['dir_id'] = $row['dir_id'];
          $vars['files'][$row['file_id']]['file_name'] = $row['file_name'];
          $vars['files'][$row['file_id']]['file_title'] = $row['file_title'];

          $access = '';
          $member_access = explode('|', $row['member_access']);

          foreach ($member_access as $group_id)
          {
              $access .= (isset($member_group[$group_id])) ? $member_group[$group_id] : $group_id;
              $access .= ', ';
          }

          $vars['files'][$row['file_id']]['member_access'] = rtrim($access, ', ');

          // Toggle checkbox
          $vars['files'][$row['file_id']]['toggle'] = array(
              'name'      => 'toggle[]',
              'id'        => 'edit_box_'.$row['file_id'],
              'value'     => $row['file_id'],
              'class'     =>'toggle'
          );
      }

All our variables aside from pagination are now in place. We need to
check our total number of files, configure our pagination, and then load
our view file. There's no need to create a separate function for our
pagination configuration. However, it makes this example a bit more
simple and reduces redundancy if you have multiple functions that you
need to paginate::

      //  Check for pagination
      $total = ee()->db->count_all('download_files');

      // Pass the relevant data to the paginate class so it can display the "next page" links
      ee()->load->library('pagination');
      $p_config = $this->pagination_config('index', $total);

      ee()->pagination->initialize($p_config);

      $vars['pagination'] = ee()->pagination->create_links();

      return ee()->load->view('index', $vars, TRUE);
  }

Here's the abstracted pagination_config method used by the above::

  function pagination_config($method, $total_rows)
  {
      // Pass the relevant data to the paginate class
      $config['base_url'] = BASE.AMP.'C=addons_modules'.AMP.'M=show_module_cp'.AMP.'module=download'.AMP.'method='.$method;
      $config['total_rows'] = $total_rows;
      $config['per_page'] = $this->perpage;
      $config['page_query_string'] = TRUE;
      $config['query_string_segment'] = 'rownum';
      $config['full_tag_open'] = '<p id="paginationLinks">';
      $config['full_tag_close'] = '</p>';
      $config['prev_link'] = '<img src="'.ee()->cp->cp_theme_url.'images/pagination_prev_button.gif" width="13" height="13" alt="<" />';
      $config['next_link'] = '<img src="'.ee()->cp->cp_theme_url.'images/pagination_next_button.gif" width="13" height="13" alt=">" />';
      $config['first_link'] = '<img src="'.ee()->cp->cp_theme_url.'images/pagination_first_button.gif" width="13" height="13" alt="< <" />';
      $config['last_link'] = '<img src="'.ee()->cp->cp_theme_url.'images/pagination_last_button.gif" width="13" height="13" alt="> >" />';

      return $config;
  }

Javascript
----------

While it is preferable that your module work for users who disable
javascript, you may well want to provide increased functionality for the
majority of users who don't. ExpressionEngine 2.x includes both its own
JavaScript library as well as the `The jQuery <http://jquery.com/>`_
JavaScript library, enabling developers to easily include JavaScript
enhancements. In the final version of our Download modules index
function, there is the ability to 'toggle all' checkboxes as well as an
enhanced table presentation that allows ajax sorting of columns as well
as pagination.

Adding 'toggle all' functionality is a simple matter::

  ee()->javascript->output(array(
      '$(".toggle_all").toggle(
          function(){
              $("input.toggle").each(function() {
                  this.checked = true;
              });
          }, function (){
              var checked_status = this.checked;
              $("input.toggle").each(function() {
                  this.checked = false;
              });
          }
      );'
  ));

In order to add the sortable ajax paginated table, we make use of the
`DataTables jQuery plugin <http://www.datatables.net/>`_. When using a
plugin, it must first be loaded::

  ee()->cp->add_js_script(array('plugin' => 'dataTables'));

The details of how to use this particular plugin can be seen in the
attached module files, and in this case, the bulk of the coding is again
abstracted to the ``ajax_filters()`` function::

  ee()->javascript->output($this->ajax_filters('edit_items_ajax_filter', 4));

In order to display the javascript, the last step is to compile it::

  ee()->javascript->compile();

The View files
--------------

Given the complexity of our backend pages, we use view files to handle
the display and formatting as seen in the ``index()`` above::

  return ee()->load->view('index', $vars, TRUE);

This would return the index.php view page, located in a ``views``
folder::

  <?php if (count($files) > 0): ?>
  <?=form_open($action_url, '', $form_hidden)?>


  <?php
      $this->table->set_template($cp_table_template);
      $this->table->set_heading(
          lang('file_title'),
          lang('file_name'),
          lang('access'),
          form_checkbox('select_all', 'true', FALSE, 'class="toggle_all" id="select_all"'));

      foreach($files as $file)
      {
          $this->table->add_row(
                  '<a href="'.$file['edit_link'].'">'.$file['file_name'].'</a>',
                  $file['file_title'],
                  $file['member_access'],
                  form_checkbox($file['toggle'])
              );
      }

  echo $this->table->generate();

  ?>

  <div class="tableFooter">
      <div class="tableSubmit">
          <?=form_submit(array('name' => 'submit', 'value' => lang('submit'), 'class' => 'submit')).NBS.NBS.form_dropdown('action', $options)?>
      </div>

      <span class="js_hide"><?=$pagination?></span>
      <span class="pagination" id="filter_pagination"></span>
  </div>

  <?=form_close()?>

  <?php else: ?>
  <?=lang('no_matching_files')?>
  <?php endif; ?>

It is recommended that in view pages only, you use the :doc:`PHP's
alternate syntax </development/guidelines/view_php_syntax>` in your
views, as it makes them easier to read and limits the amount of php. If
this is not supported by your server, ExpressionEngine will
automatically rewrite the tags.

This is a fairly complex page, but it is easy to change the layout and
style, even for someone who isn't a PHP pro. The view uses the table
class to generate tables, though pure html would work just as well. It
also uses the form helper to create certain form elements. While not
required, the form helper is strongly recommended. All that is needed to
make this page work is for the function loading it to pass an array with
all of the variables used by the view.

The Tab File (tab.download.php)
-------------------------------

Because our module adds a tab to the publish page, it will need to
include the optional Tab file::

  <?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

  class Download_tab {

The tab class must include 4 required functions: ``publish_tabs()``,
``validate_publish()``, ``publish_data_db()`` and
``publish_data_delete_db()``.

Publish Tabs Function
~~~~~~~~~~~~~~~~~~~~~

This required function allows you to create the fields on the publish
page. In this case, there is only a single multiselect field named
``download_field_ids``. The field is populated by the existing file
records::

      function publish_tabs($channel_id, $entry_id = '')
      {
          $settings = array();
          $selected = array();
          $existing_files = array();

          $query = ee()->db->get('download_files');

          foreach ($query->result() as $row)
          {
              $existing_files[$row->file_id] = $row->file_name;
          }

          if ($entry_id != '')
          {
              $query = ee()->db->get_where('download_posts', array('entry_id' => $entry_id));

              foreach ($query->result() as $row)
              {
                  $selected[] = $row->file_id;
              }
          }

          $id_instructions = lang('id_field_instructions');

          // Load the module lang file for the field label
          ee()->lang->loadfile('download');

          $settings[] = array(
                  'field_id'      => 'download_field_ids',
                  'field_label'       => lang('download_files'),
                  'field_required'    => 'n',
                  'field_data'        => $selected,
                  'field_list_items'  => $existing_files,
                  'field_fmt'     => '',
                  'field_instructions'    => $id_instructions,
                  'field_show_fmt'    => 'n',
                  'field_pre_populate'    => 'n',
                  'field_text_direction'  => 'ltr',
                  'field_type'        => 'multi_select'
              );

          return $settings;
      }

Publish Validation Function
~~~~~~~~~~~~~~~~~~~~~~~~~~~

The validation function allows you to validate the data for your publish
page fields prior to any publish data being entered or updated. It has
one parameter, ``$params``, which is an associative array of all the data
available. The download module doesn't require any validation, so can
simply return ``FALSE``.

Publish Data Function
~~~~~~~~~~~~~~~~~~~~~

The publish data function allows you to manipulate the submitted data
after the main data entry has occurred. Typically this will involve
creating a record in the module's database, as is the case here. The
single parameter is an associative array, the top level arrays
consisting of: ``meta``, ``data``, ``mod_data``, and ``entry_id``::

      function publish_data_db($params)
      {
          // Remove existing
          ee()->db->where('entry_id', $params['entry_id']);
          ee()->db->delete('download_posts');

          if (isset($params['mod_data']['download_field_ids']) &&
              is_array($params['mod_data']['download_field_ids']) &&
              count($params['mod_data']['download_field_ids']) > 0)
          {
              foreach ($params['mod_data']['download_field_ids'] as $val)
              {
                  $data = array(
                      'entry_id' => $params['entry_id'],
                      'file_id' => $val
                      );
              }

              ee()->db->insert('download_posts', $data);
          }
      }

Publish Data Delete Function
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This function is called when entries are deleted, and allows you to
synchronize your module tables and make any other adjustments necessary
when an entry that may be associated with module data is deleted. In the
case of the Download module, we need to remove any records for deleted
entry ids from our ``exp_download_posts`` table::

      function publish_data_delete_db($params)
      {
          // Remove existing
          ee()->db->where_in('entry_id', $params['entry_ids']);
          ee()->db->delete('download_posts');
      }

The Core Module file (mod.download.php)
---------------------------------------

In ExpressionEngine, a typical module or plugin tag has an appearance
similar to this::

  {exp:module_name:method}

Our Download module's main tag is a tag pair, designed to be nested
inside a channel entries tag. The tag has a required parameter
``entry_id``, and an optional ``limit`` parameter. Thus all download
images associated with a given entry can be displayed along with the
entry's standard data::

  {exp:channel:entries limit="10"}
      {title}
      {exp:download:entries entry_id="{entry_id}"}
          {file_title} - {file_download}
      {/exp:download:entries}
  {/exp:channel:entries}

The Core Module file is called by any tag that designates the 'download'
module. The file consists of a class using the same name of the module
and containing at least one class variable, ``$return_data``, which will
contain the module's outputted content and is retrieved by the Template
parser after the module is done processing. The basic class at this
point looks like::

  <?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

  class Download {

      var $return_data    = '';

  }

Next, we need to add a function that outputs our download data. Note
that according to our tag, this function is expected to be named
``entries``::

      function entries()
      {
          if (($entry_id = ee()->TMPL->fetch_param('entry_id')) === FALSE) return;

          $limit  = ( ! isset($params['limit']) OR ! is_numeric($params['limit'])) ? 100 : $params['limit'];

          ee()->db->select('*');
          ee()->db->limit($limit);
          ee()->db->where('entry_id', $entry_id);
          ee()->db->from('download_files');
          ee()->db->join('download_posts', 'download_files.file_id = download_posts.file_id', 'right');

          $query = ee()->db->get();


          if ($query->num_rows() == 0)
          {
              return ee()->TMPL->no_results();
          }

The function first checks for the existence of the required
``entry_id``, queries to find all download records for that id, and
returns the ``no_results`` function if no records exist. If there are
records to parse, the :doc:`Typography class <usage/typography>` is
initialized and the data parsed out and returned.

The :doc:`Template class <usage/template>`, offers two general
approaches to parsing out the data. Here we use the simple
``parse_variables`` method, where we simply need to pass a
multidimensional associative array where our tags are the keys and the
values our replacement data::

          //  Instantiate Typography class

          ee()->load->library('typography');
          ee()->typography->initialize();
          ee()->typography->parse_images = TRUE;
          ee()->typography->allow_headings = FALSE;

          $base_url = ee()->functions->fetch_site_index(0, 0).QUERY_MARKER.'ACT='.ee()->functions->fetch_action_id('Download', 'force_download');

          foreach ($query->result_array() as $id => $row)
          {
              $variables[] = array(
                  'file_title' => $row['file_title'],
                  'file_link' => '{filedir_'.$row['dir_id'].'}',
                  'file_download' => $base_url.AMP.'id='.$row['file_id']
              );

          }

          return ee()->TMPL->parse_variables(ee()->TMPL->tagdata, $variables);
      }

Lastly, this module needs to force downloads and obscure image paths,
and it does so by use of the action id. During installation, we added
the function ``force_download`` into the exp_actions table. Thus we need
to include that function in our module. The method should pull the
``file_id`` as get data, look up the correct path, and deliver that file
with appropriate headers to users who meet the access requirements::

      function force_download()
      {
          $file_id = ee()->input->get('id');
          ee()->lang->loadfile('download');


          if ($file_id === FALSE)
          {
              return ee()->output->show_user_error('general', lang('invalid_download'));
          }

          $group_id = ee()->session->userdata['group_id'];

          ee()->load->helper('download');

          ee()->db->select('file_name, file_title, member_access, server_path, url');
          ee()->db->from('download_files');
          ee()->db->join('upload_prefs', 'upload_prefs.id = download_files.dir_id');
          ee()->db->where('file_id', $file_id);

          $query = ee()->db->get();

          if ($query->num_rows() > 0)
          {
              $row = $query->row();

              $allowed = explode('|', $row->member_access);

              if ( ! in_array('all', $allowed) && ! in_array($group_id, $allowed))
              {
                  return ee()->output->show_user_error('general', lang('no_permission'));
              }

              $file_name = $row->file_name;
              $file_path = $row->server_path.$file_name;

              $data = file_get_contents($file_path); // Read the file's contents

              force_download($file_name, $data);
          }


