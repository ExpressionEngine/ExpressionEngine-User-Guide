<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->
# ENV File Support

Config files can also be configured using [PHP Environment variables ($_ENV)](https://www.php.net/manual/en/reserved.variables.environment.php). To utilize this, create a file named `.env.php` in the root of your ExpressionEngine install. Add variables to your `.env.php` file as illustrated below:

```
DB_HOSTNAME=localhost
```

This variable can now be used in your `/system/user/config.php` as illustrated below:

```
...
'hostname' => $_ENV['DB_HOSTNAME'],
...
```

## Example

Here is an example of what it might look like to manage all your database connection settings, and Base URL in `.env.php`

```
# .env.php

#URLs
BASE_URL=http://mysite.test/

# DATABASE SETTINGS
# # # # # # # # # # # #
DB_HOSTNAME=db
DB_DATABASE=db
DB_USERNAME=db
DB_PASSWORD=db
DB_PORT=3306
```

```
// system/user/config.php
<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

$config['save_tmpl_files'] = 'y';

$config['base_url'] = $_ENV['BASE_URL'];
$config['site_url'] = $config['base_url'];

$config['app_version'] = '7.0.0-rc.1';
$config['encryption_key'] = 'bb748b72de235352315122d00';
$config['session_crypt_key'] = '985796e4444444563463e2c80242';

$config['database'] = array(
	'expressionengine' => array(
		'hostname' => $_ENV['DB_HOSTNAME'],
		'database' => $_ENV['DB_DATABASE'],
		'username' => $_ENV['DB_USERNAME'],
		'password' => $_ENV['DB_PASSWORD'],
		'dbprefix' => 'exp_',
		'char_set' => 'utf8mb4',
		'dbcollat' => 'utf8mb4_unicode_ci',
		'port'     => $_ENV['DB_PORT'],
	),
);
$config['show_ee_news'] = 'y';

// EOF
```