---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Table Class

[TOC]

## Calling the Table Class

**class `Table`**

The Table class provides a simplified means to quickly build html tables that usually require a large amount of boilerplate code. The base functionality for the Table class is inherited from the corresponding CodeIgniter library. Refer to the [HTML Table](https://www.codeigniter.com/userguide2/libraries/table.html) documentation in the CodeIgniter user guide for details on basic table creation.

    ee()->load->library('table');

## Example: Improving Usability for Large Amounts of Data

This document will walk you through an example of how to add this functionality step-by-step, starting from a basic table. For more general documentation, refer to the method reference below.

When dealing with large amounts of data, displaying a single table will almost always lead to bad usability and performance. The Table class allows you to take a few additional steps to add Ajax pagination, column sorting, and responsive live filtering.

### Named Columns

For the sake of example, we assume that we have a very bland existing table. In your add-on this will probably be more complex, with potentially thousands of rows coming from the database.

    ee()->table->set_heading('Name', 'Color', 'Size');

    ee()->table->add_row('Fred', 'Blue', 'Small');
    ee()->table->add_row('Mary', 'Red', 'Large');
    ee()->table->add_row('John', 'Green', 'Medium');

    echo ee()->table->generate();

To start out we need to add some structure to our row and column setup. This will allow us to assign sort and filtering preferences later. Most importantly, we want to get to a point where we can access individual data points in a row through an identifying key. To achieve this goal, we want to name our columns, instead of just specifying headings. Change the first line to use `set_columns()` instead of `set_heading()`.

    ee()->table->set_columns(array(
        'name'  => array('header' => 'Name'),
        'color' => array('header' => 'Color'),
        'size'  => array('header' => 'Size')
    ));

Let's add this same structure to our data and pass it to _set_data()_ instead of _set_columns()_.

    ee()->table->set_data(array(
        array('name' => 'Fred', 'color' => 'Blue',  'size' => 'Small'),
        array('name' => 'Mary', 'color' => 'Red',   'size' => 'Large'),
        array('name' => 'John', 'color' => 'Green', 'size' => 'Medium'),
    ));

Initially this may seem more verbose than the original, but with database results this format is actually easier to achieve. You can simply call `result_array()` on the result object.

### Using a Datasource

If we try to add asynchronous elements to this setup, we will quickly run into a lot of boilerplate code to check what data we need to return to the browser, what format it expects, and then a conversion to that format. By moving our data to separate datasource method we can make the Table class do the heavy lifting for us.

Additionally, it lets us keep the sorting, filtering, and pagination logic separate from our main page setup code. A datasource is simply a new method on your current class. This method should return our filtered and sorted data. To allow the Table class to handle our ajax request we need to agree on a return structure. The table class accepts several values in return argument, but for now we will just return the required `rows`.

    function _datasource()
    {
        $rows = array(
            array('name' => 'Fred', 'color' => 'Blue',  'size' => 'Small'),
            array('name' => 'Mary', 'color' => 'Red',   'size' => 'Large'),
            array('name' => 'John', 'color' => 'Green', 'size' => 'Medium'),
        );

        return array(
            'rows' => $rows
        );
    }

Of course, we need to tell the Table class where to look for the data. So our old `set_data()` and `generate()` calls change into a single pointer to the datasource.

    $data = ee()->table->datasource('_datasource');
    echo $data['table_html'];

Remember that our asynchronous calls will stop here, so the Table class has everything it needs to build the HTML at this point. It does so on all calls and will return the initial table html to you. You no longer need to call `generate()`.

### Pagination

The real fun begins when we start to add dynamic elements to our table. To show this we will add some fake pagination to our table. This will require a little more work on our datasource. Every datasource receives information about the table's current state in its first parameter. One of the elements this contains is the current page offset.

    function _datasource($state)
    {
        $offset = $state['offset'];

Let's use that information to cut down our data to just the expected row. We will also return the total rows and some basic configuration that is required by the pagination class.

    return array(
        'rows' => array_slice($rows, $offset, 1),
        'pagination' => array(
            'per_page'   => 1,
            'total_rows' => count($rows),
        ),
    );

Lastly, our pagination html will be added in the same way that we received our table html, so let's output that.

    $data = ee()->table->datasource('_datasource');
    echo $data['table_html'];
    echo $data['pagination_html'];

If everything went as planned we should now have a table that spans three pages and paginates without refreshing.

**What happened to our sorting?**

Now that we have split our data across multiple pages, the table javascript no longer has enough information to simply sort on the table contents. It is now trying to pass sort information to our datasource. Let's add the code to handle that now.

### Datasource Sorting

The sorting preferences will be part of the table state that is passed to our datasource method. The Table class supports sorting on more than one column at a time by holding down the shift key to add additional columns. As result, the sort parameter may have more than one sort column :

    // example sort parameter
    array(
        'name' => 'asc',
        'color' => 'desc'
    )

For a MySql application you would simply add these sorts to Active Record using the `order_by()` method. Since our example deals with arrays, we will make use of PHP's [usort()](https://php.net/usort) method. To do that we will need a custom sorting method, which requires exposing the current sort as a class variable. Add this between your `$rows` array and the datasource return value.

    $this->sort = $state['sort'];
    usort($rows, array($this, '_sort_rows'));

Of course we need an implementation for our `_sort_rows()` method that supports sorting on multiple keys. If this method seems complex, don't worry, most of your applications will make use of Active Record.

    function _sort_rows($a, $b)
    {
      foreach ($this->sort as $key => $dir)
      {
          if ($a[$key] === $b[$key])
          {
              return 0;
          }

          if ($dir == 'desc')
          {
              return ($a[$key] < $b[$key]) ? 1 : -1;
          }
          else
          {
              return ($a[$key] > $b[$key]) ? 1 : -1;
          }
      }
    }

If you reload the page, you should now have clickable headers that sort your table dynamically using the information from your datasource. One small detail that would be nice is to have an initial sort on our name column. We can add defaults to our datasource by passing them as a parameter. The default options parameter will be of the same format as the current table state. This keeps the parameters you pass and receive largely consistent. So adding a default sort is as simple as passing a sort order.

    $defaults = array(
        'sort' => array('name' => 'asc')
    );

    $data = ee()->table->datasource('_datasource', $defaults);

Do some experimenting with the `$defaults` array. Try including a secondary sort on the size column. Also try adding a default offset, like the one we retrieved from `$state` in our pagination code.

### Filtering

As a last step you can add dynamic filtering to our table. To make this work you will need to write some javascript. The [table plugin](development/control-panel-js/table.md) will provide simple access to everything you need to do.

At this point it becomes easier to work with a database. The filtering information will be added to your `$state` array. Doing a like query will let you fetch the correct information.

## Method Reference

[TOC=3]

This documents the ExpressionEngine additions to the table class. Refer to the [HTML Table](https://www.codeigniter.com/userguide2/libraries/table.html) documentation in the CodeIgniter user guide for the base table class reference.

### `datasource($func[, $options = array()[, $params = array()]])`

| Parameter | Type     | Description                                                                                                                                                                     |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \$func    | `String` | Name of the callback function                                                                                                                                                   |
| \$options | `Array`  | Default state of the data table                                                                                                                                                 |
| \$params  | `Array`  | Initial parameters to pass to the callback                                                                                                                                      |
| Returns   | `Array`  | Array containing the rendered table and pagination to prime your view: <pre>'table_html' => (string) Rendered Table,<br>'pagination_html' => (string) Rendered Pagination</pre> |

This method lets you define a datasource for your table contents. When called asynchronously, the request will stop here and the table data will be returned as JSON.

Example Usage:

    $custom_params = array('my_key' => $my_value);
    $default_state = array('sort' => array('name' => 'asc'));

    $this->table->datasource('_source', $default_state, $custom_params);

    function _source($state, $params)
    {
      // do work

      return array(
        'rows' => $rows,
        'pagination' => array(
          'total_rows' = $total
        )
      );
    }

### `set_base_url($url)`

| Parameter | Type     | Description                                           |
| --------- | -------- | ----------------------------------------------------- |
| \$url     | `String` | The callback URL if it's not discovered automatically |
| Returns   | `Void`   |                                                       |

Define the callback url. Usually this can be auto discovered, but sometimes providing it manually is more robust.

Example Usage:

    $this->table->set_base_url('C=addons_modules&M=show_module_cp&module=example');

### `set_columns($cols = array())`

| Parameter | Type    | Description                                                                                                                                                                                                                |
| --------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \$cols    | `Array` | Associative array that defines the columns and behavior <br> - `header` - (`string`) Heading Contents <br> - `sort` - (`bool`) Allow Sorting \[default = `true`\] <br> - `html` - (`bool`) Allow HTML \[default = `true`\] |
| Returns   | `Void`  |                                                                                                                                                                                                                            |

Define the table columns and their behavior.

Example Usage:

    ee()->table->set_columns(array(
        'name'  => array('header' => 'Name'),
        'color' => array('header' => 'Color'),
        'size'  => array('header' => 'Size')
    ));

### `set_data($table_data = NULL)`

| Parameter    | Type    | Description                 |
| ------------ | ------- | --------------------------- |
| \$table_data | `Array` | Array containing table data |
| Returns      | `Void`  |                             |

If you only need single page sorting, this method lets you set the named column data directly :

    ee()->table->set_data(array(
        array('name' => 'Fred', 'color' => 'Blue',  'size' => 'Small'),
        array('name' => 'Mary', 'color' => 'Red',   'size' => 'Large'),
        array('name' => 'John', 'color' => 'Green', 'size' => 'Medium'),
    ));
