<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2022, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Main Configuration File

The main configuration settings are stored in the for of PHP array in `system/user/config/config.php` file.

This file is populated automatically during the installation process and contains the most important settings that are used by ExpressionEngine.

The main configuration file is being loaded every time the system is run, meaning that [config overrides](general/system-configuration-overrides.md) set in `config.php`` always affect the system’s configuration.

At the minimum, the configuration file contains the following settings:

#### `app_version`

The installation's ExpressionEngine version. This value is set automatically and normally should not be modified. 

However  if for a certain reason you need to run the update script again, you can change this value to a lower version number so the system would "see" the update available.

    $config['app_version'] = '7.4.0';

#### `encryption_key`

This is the secret key used by the [Encrypt service](development/services/encrypt.md) to protected sensitive data in the database. It is set automatically during the installation process. If you need to use your own key please refer to [Troubleshooting guide](troubleshooting/error-messages.md#generating-new-encryption-keys) on how to generate a new one.

    $config['encryption_key'] = '26791dcd5c7cc9e569cc05b16b96235985cc9f03';

#### `session_crypt_key`

Similar to `encryption_key`, but used to protected session data.

    $config['session_crypt_key'] = 'd9e776dc9a5de0cd83e7c76a76756daa64ff4b8b';

#### `database`

This is probably most important setting in the configuration file. It contains the database connection details. The array is required to have element with key `expressionengine`, which in turn needs to be array with the following keys:

 - `hostname` - The hostname or IP address of database server
 - `database` - The name of the database to connect to
 - `username` - The username used to connect to the database
 - `password` - The password used to connect to the database
 - `dbprefix` - The prefix used for all database tables (default is `exp_`)
 - `char_set` - The character set used in communicating with the database (default is `utf8mb4`)
 - `dbcollat` - The character collation used in communicating with the database (default is `utf8mb4_unicode_ci`)
 - `port` - The port used to connect to the database (default is `3306`)

    ```php
    $config['database'] = array(
        'expressionengine' => array(
            'hostname' => 'localhost',
            'database' => 'ee740',
            'username' => 'root',
            'password' => '',
            'dbprefix' => 'exp_',
            'char_set' => 'utf8mb4',
            'dbcollat' => 'utf8mb4_unicode_ci',
            'port'     => ''
        ),
    );
    ```

In addition, you can use following keys inside `expressionengine`:

 - `pconnect` - Whether to use persistent connections (default is `true`)

The following keys can be specified that will be converted to [PDO constants](https://www.php.net/manual/en/ref.pdo-mysql.php#pdo-mysql.constants) and passed to the database driver:

 - `MYSQL_ATTR_LOCAL_INFILE`
 - `MYSQL_ATTR_LOCAL_INFILE_DIRECTORY`
 - `MYSQL_ATTR_READ_DEFAULT_FILE`
 - `MYSQL_ATTR_READ_DEFAULT_GROUP`
 - `MYSQL_ATTR_MAX_BUFFER_SIZE`
 - `MYSQL_ATTR_INIT_COMMAND`
 - `MYSQL_ATTR_COMPRESS`
 - `MYSQL_ATTR_SSL_CA`
 - `MYSQL_ATTR_SSL_CAPATH`
 - `MYSQL_ATTR_SSL_CERT`
 - `MYSQL_ATTR_SSL_CIPHER`
 - `MYSQL_ATTR_SSL_KEY`
 - `MYSQL_ATTR_SSL_VERIFY_SERVER_CERT`