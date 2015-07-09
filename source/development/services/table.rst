CP/Table Service
================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

Overview
--------

Tables are the most common way to view and navigate data in the
ExpressionEngine control panel. Since tables share a lot of common
functionality, we've abstracted most of it out to a Table service to
handle tasks such as displaying the table markup, and sorting and
filtering tabular content. The Table service should handle most idioms
covered in the `style-guide for tables <https://ellislab.com/style-guide/c/listings#tables-common>`_.

Below, we'll cover the steps needed to create a table from inside a
controller.

Creating a new table
--------------------

The first thing we need to do is create our table object. This can be
done by reaching into the dependency injection container and optionally
passing along a few options that can affect the behavior and appearance
of the table::

  // Use default options
  $table = ee('CP/Table');

  // Specify other options
  $table = ee('CP/Table', array('autosort' => TRUE, 'autosearch' => TRUE));

Here are the available options:

+---------------------+--------------------------------------------------------+-----------------------+-------------------+
|     Option name     |                Description                             |    Accepted values    |   Default value   |
+=====================+========================================================+=======================+===================+
| **autosearch**      | Assuming the entire dataset is given to ``setData()``, | ``TRUE`` or ``FALSE`` | ``FALSE``         |
|                     | the Table service can automatically handle searching   | to enable or disable, |                   |
|                     | of the table's data. The Table service will            | respectively.         |                   |
|                     | automatically get a search term from the ``search``    |                       |                   |
|                     | key in ``POST`` or ``GET``, or a search term can be    |                       |                   |
|                     | specified via the ``search`` configuration option      |                       |                   |
|                     | outlined below. If you have a large data set, it's     |                       |                   |
|                     | recommended to disable ``autosearch`` and perform the  |                       |                   |
|                     | search via SQL or other means before handing the data  |                       |                   |
|                     | off to the table.                                      |                       |                   |
+---------------------+--------------------------------------------------------+-----------------------+-------------------+
| **autosort**        | Assuming the entire dataset is given to ``setData()``, | ``TRUE`` or ``FALSE`` | ``FALSE``         |
|                     | the Table service can automatically handle sorting     | to enable or disable, |                   |
|                     | of the table's data via column. The Table service will | respectively.         |                   |
|                     | automatically look for a sort column and direction in  |                       |                   |
|                     | ``GET``, or they can be set manually via the           |                       |                   |
|                     | ``sort_col`` and ``sort_dir`` configuration options    |                       |                   |
|                     | outlined below. If you have a large data set, it's     |                       |                   |
|                     | recommended to disable ``autosort`` and perform the    |                       |                   |
|                     | sort via SQL or other means before handing the data    |                       |                   |
|                     | off to the table.                                      |                       |                   |
+---------------------+--------------------------------------------------------+-----------------------+-------------------+
| **lang_cols**       | Whether or not to run passed column names through the  | ``TRUE`` or ``FALSE`` | ``TRUE``          |
|                     | ``lang()`` helper on the front-end.                    | to enable or disable, |                   |
|                     |                                                        | respectively.         |                   |
+---------------------+--------------------------------------------------------+-----------------------+-------------------+
| **limit**           | Number of table rows to limit the data display by for  | A natural number      | 20                |
|                     | the purposes of pagination.                            | greater than zero.    |                   |
|                     |                                                        |                       |                   |
+---------------------+--------------------------------------------------------+-----------------------+-------------------+
| **grid_input**      | Whether or not this table is to behave as Grid-like    | ``TRUE`` or ``FALSE`` | ``FALSE``         |
|                     | input interface.                                       | to enable or disable, |                   |
|                     |                                                        | respectively.         |                   |
+---------------------+--------------------------------------------------------+-----------------------+-------------------+
| **page**            | When ``autosort`` and optionally ``autosearch`` are    | A natural number      | 1                 |
|                     | set to ``TRUE``, specifies the page number to show in  | greater than zero.    |                   |
|                     | a set of paginated data. If ``page`` is found in the   |                       |                   |
|                     | page's query string, its value will be used.           |                       |                   |
+---------------------+--------------------------------------------------------+-----------------------+-------------------+
| **reorder**         | Whether or not to show a reorder handle on the left    | ``TRUE`` or ``FALSE`` | ``FALSE``         |
|                     | side of the table for reordering table rows. This can  | to enable or disable, |                   |
|                     | be used in conjunction with the ``eeTableReorder``     | respectively.         |                   |
|                     | jQuery plugin documented below.                        |                       |                   |
+---------------------+--------------------------------------------------------+-----------------------+-------------------+
| **search**          | When ``autosearch`` is set to ``TRUE``, specifies the  | String or integer     | ``NULL``          |
|                     | search term used to search table contents.             |                       |                   |
|                     | be used in conjunction with the ``eeTableReorder``     |                       |                   |
|                     | jQuery plugin documented below.                        |                       |                   |
+---------------------+--------------------------------------------------------+-----------------------+-------------------+
| **sort_col**        | Specifies the column the table is currently being      | String                | ``NULL``          |
|                     | sorted by, identified by the column identifier,        |                       |                   |
|                     | described below. If ``sort_col`` is found in the       |                       |                   |
|                     | page's query string, its value will be used. When      |                       |                   |
|                     | ``autosort`` is enabled, the Table library will        |                       |                   |
|                     | perform the sort. The ``sort_col`` value also          |                       |                   |
|                     | determines which column is visually highlighted on the |                       |                   |
|                     | table interface.                                       |                       |                   |
+---------------------+--------------------------------------------------------+-----------------------+-------------------+
| **sort_col_qs_var** | Specifies the query string variable used to specify    | String                | ``sort_col``      |
|                     | the column to sort the table by. This is typically     |                       |                   |
|                     | only used if more than one table is displayed on a     |                       |                   |
|                     | page.                                                  |                       |                   |
+---------------------+--------------------------------------------------------+-----------------------+-------------------+
| **sort_dir**        | Specifies the direction of the table sort.             | ``asc`` or ``desc``   | ``asc``           |
|                     | sorted by, identified by the column identifier,        |                       |                   |
|                     | described below. If ``sort_dir`` is found in the       |                       |                   |
|                     | page's query string, its value will be used. When      |                       |                   |
|                     | ``autosort`` is enabled, the Table library will        |                       |                   |
|                     | perform the sort. The ``sort_dir`` value also sets the |                       |                   |
|                     | visual indicator for sort direction on the table       |                       |                   |
|                     | interface.                                             |                       |                   |
+---------------------+--------------------------------------------------------+-----------------------+-------------------+
| **sort_dir_qs_var** | Specifies the query string variable used to specify    | String                | ``sort_dir``      |
|                     | the direction of the table sort. This is typically     |                       |                   |
|                     | only used if more than one table is displayed on a     |                       |                   |
|                     | page.                                                  |                       |                   |
+---------------------+--------------------------------------------------------+-----------------------+-------------------+
| **sortable**        | Whether or not the table should allow sorting via      | ``TRUE`` or ``FALSE`` | ``TRUE``          |
|                     | user interaction. When set to ``FALSE``, column        | to enable or disable, |                   |
|                     | headings will not be click-able, highlighted, or show  | respectively.         |                   |
|                     | the visual sort direction indicators.                  |                       |                   |
+---------------------+--------------------------------------------------------+-----------------------+-------------------+

Setting the columns
-------------------

Now that our Table object is set up, let's start describing our data.
First, we'll set up the headings for each column. Let's say we want to
show a list of Channels, we'll then pass in an array of language keys
that represent the relevant columns::

  $table->setColumns(
    array(
      'id',
      'channel',
      'short_name',
      'manage' => array(
        'type'  => CP\Table::COL_TOOLBAR
      ),
      array(
        'type'  => CP\Table::COL_CHECKBOX
      )
    )
  );

Notice we specified some extra parameters for two of the columns. The
"Manage" column is going to be of type ``COL_TOOLBAR`` which can have
various action buttons related to the individual Channel. And our last
column is just for checkboxes, so that a user can select Channels to
perform actions on them in bulk.

While we're here, let's set the no results text. This is the message
that appears in the table when there are no items to display, and also
provides a call-to-action to add items to the table::

  $table->setNoResultsText('no_channels', 'create_channel', ee('CP/URL', 'channels/create'));

The first parameter is the language key that lets the user know there
are no Channels to display. The second parameter is the text for the
call-to-action button, and the third parameter is the URL for the
button.

We should be at a point where we can see how our table is coming along.
To show the table in a view, we'll ask the Table object to compile data
to be consumed by a view, and then pass that data to our view::

  // Pass in a base URL to create sorting links
  $vars['table'] = $table->viewData(ee('CP/URL', 'channels'));

  ee()->cp->render('channels/index', $vars);

In our view, we'll take the data and render the table markup by loading
a shared view::

  <?php $this->view('_shared/table', $table); ?>

Given what we've done so far, our table looks like this:

.. figure:: ../../images/table_service_1.png

TODO: List table column options

Setting the data
----------------

For the purposes of this guide, we'll get all the Channels for the
current site::

  $channels = ee('Model')->get('Channel')
    ->filter('site_id', ee()->config->item('site_id'))
    ->all();

Next, we'll construct an array with the Channel data we want to
display::

  $data = array();
  foreach ($channels as $channel)
  {
    $data[] = array(
      $channel->getId(),
      $channel->channel_title,
      $channel->channel_name,
      array('toolbar_items' => array(
        'edit' => array(
          'href' => ee('CP/URL', 'channels/edit/'.$channel->getId()),
          'title' => lang('edit')
        ),
        'settings' => array(
          'href' => ee('CP/URL', 'channels/settings/'.$channel->getId()),
          'title' => lang('settings')
        )
      )),
      array(
        'name' => 'channels[]',
        'value' => $channel->getId(),
        'data'  => array(
          'confirm' => lang('channel') . ': <b>' . htmlentities($channel->channel_title, ENT_QUOTES) . '</b>'
        )
      )
    );
  }

Notice the data is in the same order we set the columns. For the toolbar
column, we pass a specifically-formatted array that tells the Table
service what kind of button to show, as well as the link but the button
and its title text. For the checkbox column, we need to specify the
input name for the checkboxes, its value, as well as any optional data
like the data we set here to work with an action modal.

Finally, we'll tell our Table object about our data::

  $table->setData($data);

Our table should now be filled with the available data and look the way
we've configured:

.. figure:: ../../images/table_service_2.png

TODO:
Reorder javascript
Using as Grid input
