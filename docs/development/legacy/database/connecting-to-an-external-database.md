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

# Connecting to an External Database

[TOC=2-3]

If your app needs to interact with a database other than the ExpressionEngine database, you can still use our classes to ensure good security and unified syntax in your app.

The basic pattern is to:

1.  Create a `DBConfig` object from your database's connection settings
2.  Create a new `Database` object using the `DBConfig` object
3.  Issue queries to a `Query` object on the new database with `->newQuery()`, using all standard methods (`select()`, `get()`, etc.)

For example, given an `other_db` block alongside `expressionengine` in the `$config['database']` array of your primary config file:

    $db_config = \ExpressionEngine\Service\Database\DBConfig(ee('Config')->getFile());
    $db_config->getGroupConfig('other_db');
    $db = new \ExpressionEngine\Service\Database\Database($db_config);
    $query = $db->newQuery()->get('my_table');

NOTE: **Note:** Your class can `use ExpressionEngine\Service\Database;` and then reference `Database\DBConfig` and `Database\Database` without typing out the full namespace.

In actual practice you will want to make sure you are only spinning up one connection per request, and you will want to use cleaner and clearer syntax. To that end, here is a complete, simple example using a plugin we will call "Help Desk".

## Complete Add-on Example

### External Database Config

First let's add a new config file, `system/user/config/help_desk_database.php`. In this example, the database name is `help_desk`, and the tables are all prefixed with `hd_`. Replace the hostname, username and password as well with the correct credentials:

    <?php
    $config['database'] = array(
      'help_desk' => array(
        'hostname' => 'localhost',
        'database' => 'help_desk',
        'username' => 'dbusername',
        'password' => 'dbpassword',
        'dbprefix' => 'hd_',
        'port'     => ''
      ),
    );

### addon.setup.php Services

To keep our syntax simple and explicit, we will make our external database available to our add-on via services in our [The addon.setup.php File.](development/addon-setup-php-file.md). The complete file is as follows:

    <?php

    use ExpressionEngine\Service\Database;

    return array(
      'author'      => 'My Vendor',
      'author_url'  => 'https://example.com/',
      'name'        => 'Help Desk',
      'description' => 'Plugin Tag Access to My Help Desk Software',
      'version'     => '1.0.0',
      'namespace'   => 'MyVendor\HelpDesk',

      'services' => array(

        // This service will be used to query our external database
        // e.g., ee('help_desk:db')->select()
        'db' => function($addon)
        {
          return $addon->make('help_desk:Database')->newQuery();
        },

        // This service manages our external database connection
        // e.g., ee('help_desk:Database')->getLog()
        'Database' => function($addon)
        {
          // Makes sure we only do this work once per page request
          static $db;

          if (empty($db))
          {
            // fetch config from system/user/config/help_desk_database.php
            $config = ee('Config')->getFile('help_desk_database');

            // create the DBConfig object
            $db_config = new Database\DBConfig($config);

            // select the database connection group
            $db_config->getGroupConfig('help_desk');

            // connect to and make the Database object
            $db = new Database\Database($db_config);
          }

          return $db;
        }

      )
    );

    // EOF

NOTE: **Note:** Note that you can also include the database connection group in your main config file, as an additional block alongside the `expressionengine` group. If you choose to go that route instead of separating the settings into their own config file, when fetching the configuration simply leave out the config file name, e.g. `$config = ee('Config')->getFile();`. Everything else is the same.

### Plugin File

This simple plugin has only one tag, `{exp:help_desk:ticket}`, which fetches a help desk ticket from the external database, and makes its columns from the `hd_tickets` table available as template variables:

    <?php

    namespace MyVendor\HelpDesk;

    /**
     * Help Desk Plugin
     */
    class Help_desk {

      public $return_data;

      public function ticket()
      {
        $ticket_id = ee()->TMPL->fetch_param('ticket_id');

        // here's the magic
        $query = ee('help_desk:db')
          ->where('ticket_id', $ticket_id)
          ->get('tickets');

        if ($query->num_rows() == 0)
        {
          return ee()->TMPL->no_results();
        }

        ee()->load->library('typography');
        $typo_prefs = array(
          'text_format'   => 'markdown',
          'html_format'   => 'all',
          'auto_links'    => TRUE,
          'allow_img_url' => TRUE,
        );

        $vars = array();
        foreach ($query->result() as $row)
        {
          $vars[] = array(
            'content'     => ee()->typography->parse_type($row->content, $typo_prefs),
            'resolved'    => ($row->status == 5) ? TRUE : FALSE,
            'status'      => ucfirst($row->status),
            'ticket_date' => ee()->localize->string_to_timestamp($row->ticket_date_gmt, FALSE),
            'ticket_id'   => $row->ticket_id,
            'title'       => ee()->typography->formatTitle($row->content),
          );
        }

        return ee()->TMPL->parse_variables(ee()->TMPL->tagdata, $vars);
      }
    }
    // END CLASS

    // EOF

Notice that the syntax is identical to using the ExpressionEngine database, with the small namespacing change of `ee('db')` to `ee('help_desk:db')`. Now your add-on can use all of the query builder and database methods with simple, legible, and consistent syntax, thanks to the services we created in our `addon.setup.php` file.
