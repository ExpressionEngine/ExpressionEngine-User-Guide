<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->
# ENV File Support

Config files can also be configured using [PHP Environment variables ($_ENV)](https://www.php.net/manual/en/reserved.variables.environment.php). To utilize this, create a file named `.env.php` close to the ExpressionEngine system folder. Add variables to your `.env.php` file as illustrated below:

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

$config['app_version'] = '7.2.0';
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

## MSM Example

If your ExpressionEngine installation is hosting multiple sites, you can specify different values for MSM sites configuration by using site short name as prefix.

The site short name can be accessed in the code using `$GLOBALS['assign_to_config']['site_name']` variable.

The below example demonstrates this approach, assuming you have 2 MSM sites with short names of `default_site` and `second_site`

```
# .env.php

# SITE-SPECIFIC SETTINGS

default_site.BASE_PATH=/home/sites/mysite.test/
default_site.BASE_URL=http://mysite.test/

second_site.BASE_PATH=/home/sites/anothersite.test/
second_site.BASE_URL=http://anothersite.test/

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

$config['base_path'] = $_ENV[$GLOBALS['assign_to_config']['site_name'] . '.' . 'BASE_PATH'];
$config['base_url'] = $_ENV[$GLOBALS['assign_to_config']['site_name'] . '.' . 'BASE_URL'];

$config['site_url'] = $config['base_url'];

$config['app_version'] = '7.2.0';
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
