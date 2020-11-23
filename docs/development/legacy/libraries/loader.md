---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://www.packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Loader Class

Loader, as the name suggests, is used to load elements. These elements can be libraries (classes) View files, [Drivers](development/legacy/drivers.md), [Helpers](development/legacy/helpers/index.md), Models, or your own files.

NOTE: **Note:** This class is initialized automatically by the system so there is no need to do it manually.

## Add-on Packages

An add-on allows for the easy distribution of complete sets of resources in a single directory, complete with its own libraries, models, helpers, config, and language files. The following is an example of a directory for an add-on named "Foo Bar"

    /system/user/addons/foo_bar
    ├─ config/
    ├─ helpers/
    ├─ language/
    ├─ libraries/
    └─ models/

Whatever the purpose of the "Foo Bar" add-on, it can have its own config files, helpers, language files, libraries, and models.

## Class Reference

**class `EE_Loader`**

[TOC=3]

### `library($library[, $params = NULL[, $object_name = NULL]])`

| Parameter     | Type         | Description                                                              |
| ------------- | ------------ | ------------------------------------------------------------------------ |
| \$library     | `Mixed`      | Library name as a string or an array with multiple libraries             |
| \$params      | `Array`      | Optional array of parameters to pass to the loaded library's constructor |
| \$object_name | `String`     | Optional object name to assign the library to                            |
| Returns       | `EE\_Loader` | EE_Loader instance (method chaining)                                     |

This method is used to load core classes.

NOTE: **Note:** We use the terms "class" and "library" interchangeably.

For example, if you would like to send email with your add-on, the first step is to load the email class within your controller:

    ee()->load->library('email');

Once loaded, the library will be ready for use, using `ee()->email`.

Library files can be stored in subdirectories within the main "libraries" directory, or within your personal _application/libraries_ directory. To load a file located in a subdirectory, simply include the path, relative to the "libraries" directory. For example, if you have file located at:

    libraries/flavors/Chocolate.php

You will load it using:

    ee()->load->library('flavors/chocolate');

You may nest the file in as many subdirectories as you want.

Additionally, multiple libraries can be loaded at the same time by passing an array of libraries to the load method:

    ee()->load->library(array('email', 'table'));

**Setting options**

The second (optional) parameter allows you to optionally pass configuration setting. You will typically pass these as an array:

    $config = array(
        'mailtype' => 'html',
        'charset'  => 'utf-8',
        'priority' => '1'
    );

    ee()->load->library('email', $config);

Config options can usually also be set via a config file. Each library is explained in detail in its own page, so please read the information regarding each one you would like to use.

Please take note, when multiple libraries are supplied in an array for the first parameter, each will receive the same parameter information.

**Assigning a Library to a different object name**

If the third (optional) parameter is blank, the library will usually be assigned to an object with the same name as the library. For example, if the library is named Calendar, it will be assigned to a variable named `ee()->calendar`.

If you prefer to set your own class names you can pass its value to the third parameter:

    ee()->load->library('calendar', NULL, 'my_calendar');

    // Calendar class is now accessed using:
    ee()->my_calendar

Please take note, when multiple libraries are supplied in an array for the first parameter, this parameter is discarded.

### `driver($library[, $params = NULL[, $object_name]])`

| Parameter     | Type        | Description                                                              |
| ------------- | ----------- | ------------------------------------------------------------------------ |
| \$library     | `Mixed`     | Library name as a string or an array with multiple libraries             |
| \$params      | `Array`     | Optional array of parameters to pass to the loaded library's constructor |
| \$object_name | `String`    | Optional object name to assign the library to                            |
| Returns       | `EE_Loader` | EE_Loader instance (method chaining)                                     |

This method is used to load driver libraries, acts very much like the `library()` method.

As an example, if you would like to use sessions with your add-on, the first step is to load the session driver within your controller:

    ee()->load->driver('session');

Once loaded, the library will be ready for use, using `ee()->session`.

Driver files must be stored in a subdirectory within the main "libraries" directory, or within your personal _application/libraries_ directory. The subdirectory must match the parent class name. Read the [Drivers](development/legacy/drivers.md) description for details.

Additionally, multiple driver libraries can be loaded at the same time by passing an array of drivers to the load method:

    ee()->load->driver(array('session', 'cache'));

**Setting options**

The second (optional) parameter allows you to optionally pass configuration settings. You will typically pass these as an array:

    $config = array(
        'sess_driver' => 'cookie',
        'sess_encrypt_cookie'  => true,
        'encryption_key' => 'mysecretkey'
    );

    ee()->load->driver('session', $config);

Config options can usually also be set via a config file. Each library is explained in detail in its own page, so please read the information regarding each one you would like to use.

**Assigning a Driver to a different object name**

If the third (optional) parameter is blank, the library will be assigned to an object with the same name as the parent class. For example, if the library is named Session, it will be assigned to a variable named `ee()->session`.

If you prefer to set your own class names you can pass its value to the third parameter:

    ee()->load->library('session', '', 'my_session');

    // Session class is now accessed using:
    ee()->my_session

### `view($view[, $vars = array()[, return = FALSE]])`

| Parameter | Type     | Description                                                         |
| --------- | -------- | ------------------------------------------------------------------- |
| \$view    | `String` | View name                                                           |
| \$vars    | `Array`  | An associative array of variables                                   |
| \$return  | `Bool`   | Whether to return the loaded view                                   |
| Returns   | `Mixed`  | View content string if \$return is set to TRUE, otherwise EE_Loader |

The first parameter is required. It is the name of the view file you would like to load.

NOTE: **Note:** The `.php` file extension does not need to be specified unless you use something other than `.php`.

The second **optional** parameter can take an associative array or an object as input, which it runs through the PHP [extract()](http://www.php.net/extract) function to convert to variables that can be used in your view files.

The third **optional** parameter lets you change the behavior of the method so that it returns data as a string rather than sending it to your browser. This can be useful if you want to process the data in some way. If you set the parameter to TRUE (boolean) it will return data. The default behavior is FALSE, which sends it to your browser. Remember to assign it to a variable if you want the data returned:

    $string = ee()->load->view('myfile', '', TRUE);

### `vars($vars[, $val = ''])`

| Parameter | Type        | Description                                     |
| --------- | ----------- | ----------------------------------------------- |
| \$vars    | `Mixed`     | An array of variables or a single variable name |
| \$val     | `Mixed`     | Optional variable value                         |
| Returns   | `EE_Loader` | EE_Loader instance (method chaining)            |

This method takes an associative array as input and generates variables using the PHP [extract()](http://www.php.net/extract) function. This method produces the same result as using the second parameter of the `ee()->load->view()` method above. The reason you might want to use this method independently is if you would like to set some global variables in the constructor of your controller and have them become available in any view file loaded from any method. You can have multiple calls to this method. The data get cached and merged into one array for conversion to variables.

### `get_var($key)`

| Parameter | Type     | Description                        |
| --------- | -------- | ---------------------------------- |
| \$key     | `String` | Variable name key                  |
| Returns   | `Mixed`  | Value if key is found, NULL if not |

This method checks the associative array of variables available to your views. This is useful if for any reason a var is set in a library or another controller method using `ee()->load->vars()`.

### `get_vars()`

| Parameter | Type    | Description                             |
| --------- | ------- | --------------------------------------- |
| Returns   | `Array` | An array of all assigned view variables |

This method retrieves all variables available to your views.

### `clear_vars()`

| Parameter | Type        | Description                          |
| --------- | ----------- | ------------------------------------ |
| Returns   | `EE_Loader` | EE_Loader instance (method chaining) |

Clears cached view variables.

### `model($model[, $name = ''[, $db_conn = FALSE]])`

| Parameter | Type        | Description                                       |
| --------- | ----------- | ------------------------------------------------- |
| \$model   | `Mixed`     | Model name or an array containing multiple models |
| \$name    | `String`    | Optional object name to assign the model to       |
| \$db_conn | `String`    | Optional database configuration group to load     |
| Returns   | `EE_Loader` | EE_Loader instance (method chaining)              |

    ee()->load->model('model_name');

If your model is located in a subdirectory, include the relative path from your models directory. For example, if you have a model located at _application/models/blog/Queries.php_ you'll load it using:

    ee()->load->model('blog/queries');

If you would like your model assigned to a different object name you can specify it via the second parameter of the loading method:

    ee()->load->model('model_name', 'fubar');
    ee()->fubar->method();

### `database([$params = ''[, $return = FALSE[, $query_builder = NULL]]])`

| Parameter       | Type    | Description                                                           |
| --------------- | ------- | --------------------------------------------------------------------- |
| \$params        | `Mixed` | Database group name or configuration options                          |
| \$return        | `Bool`  | Whether to return the loaded database object                          |
| \$query_builder | `Bool`  | Whether to load the Query Builder                                     |
| Returns         | `Mixed` | Loaded CI_DB instance or FALSE on failure if \$return is set to TRUE, |

This method lets you load the database class. The two parameters are **optional**. Please see the [database](development/legacy/database/index.md) section for more info.

### `dbforge([$db = NULL[, $return = FALSE]])`

| Parameter | Type     | Description                                                                                            |
| --------- | -------- | ------------------------------------------------------------------------------------------------------ |
| \$db      | `Object` | Database object                                                                                        |
| \$return  | `Bool`   | Whether to return the Database Forge instance                                                          |
| Returns   | `Mixed`  | Loaded CI_DB_forge instance if \$return is set to TRUE, otherwise EE_Loader instance (method chaining) |

Loads the [Database Forge](development/legacy/database/forge.md) class, please refer to that manual for more info.

### `dbutil([$db = NULL[, $return = FALSE]])`

| Parameter | Type     | Description                                                                                              |
| --------- | -------- | -------------------------------------------------------------------------------------------------------- |
| \$db      | `Object` | Database object                                                                                          |
| \$return  | `Bool`   | Whether to return the Database Utilities instance                                                        |
| Returns   | `Mixed`  | Loaded CI_DB_utility instance if \$return is set to TRUE, otherwise EE_Loader instance (method chaining) |

Loads the [Database Utilities](development/legacy/database/utilities.md) class, please refer to that manual for more info.

### `helper($helpers)`

| Parameter | Type        | Description                                                     |
| --------- | ----------- | --------------------------------------------------------------- |
| \$helpers | `Mixed`     | Helper name as a string or an array containing multiple helpers |
| Returns   | `EE_Loader` | EE_Loader instance (method chaining)                            |

This method loads helper files, where file_name is the name of the file, without the `_helper.php` extension.

### `file($path[, $return = FALSE])`

| Parameter | Type     | Description                                                                              |
| --------- | -------- | ---------------------------------------------------------------------------------------- |
| \$path    | `String` | File path                                                                                |
| \$return  | `Bool`   | Whether to return the loaded file                                                        |
| Returns   | `Mixed`  | File contents if \$return is set to TRUE, otherwise EE_Loader instance (method chaining) |

This is a generic file loading method. Supply the filepath and name in the first parameter and it will open and read the file. By default the data is sent to your browser, just like a View file, but if you set the second parameter to boolean `TRUE` it will instead return the data as a string.

### `language($files[, $lang = ''])`

| Parameter | Type        | Description                                               |
| --------- | ----------- | --------------------------------------------------------- |
| \$files   | `Mixed`     | Language file name or an array of multiple language files |
| \$lang    | `String`    | Language name                                             |
| Returns   | `EE_Loader` | EE_Loader instance (method chaining)                      |

This method is an alias of `Language::loadfile()`.

### `config($file[, $use_sections = FALSE[, $fail_gracefully = FALSE]])`

| Parameter         | Type     | Description                                                          |
| ----------------- | -------- | -------------------------------------------------------------------- |
| \$file            | `String` | Configuration file name                                              |
| \$use_sections    | `Bool`   | Whether configuration values should be loaded into their own section |
| \$fail_gracefully | `Bool`   | Whether to just return FALSE in case of failure                      |
| Returns           | `Bool`   | TRUE on success, FALSE on failure                                    |

This method is an alias of `EE_Config::load()`.

### `is_loaded($class)`

| Parameter | Type     | Description                                    |
| --------- | -------- | ---------------------------------------------- |
| \$class   | `String` | Class name                                     |
| Returns   | `Mixed`  | Singleton property name if found, FALSE if not |

Allows you to check if a class has already been loaded or not.

NOTE: **Note:** The word "class" here refers to libraries and drivers.

If the requested class has been loaded, the method returns its assigned name in the `ee()` object and `FALSE` if it's not:

    ee()->load->library('form_validation');
    ee()->load->is_loaded('Form_validation');   // returns 'form_validation'

    ee()->load->is_loaded('Nonexistent_library');   // returns FALSE

NOTE: **Important:** If you have more than one instance of a class (assigned to different properties), then the first one will be returned.

    ee()->load->library('form_validation', $config, 'fv');
    ee()->load->library('form_validation');

    ee()->load->is_loaded('Form_validation');   // returns 'fv'

### `add_package_path($path[, $view_cascade = TRUE])`

| Parameter      | Type        | Description                          |
| -------------- | ----------- | ------------------------------------ |
| \$path         | `String`    | Path to add                          |
| \$view_cascade | `Bool`      | Whether to use cascading views       |
| Returns        | `EE_Loader` | EE_Loader instance (method chaining) |

Adding a package path instructs the Loader class to prepend a given path for subsequent requests for resources. As an example, the "Foo Bar" application package above has a library named Foo_bar.php. In our controller, we'd do the following:

    ee()->load->add_package_path(APPPATH.'addons/foo_bar/')
        ->library('foo_bar');

### `remove_package_path([$path = ''])`

| Parameter | Type        | Description                          |
| --------- | ----------- | ------------------------------------ |
| \$path    | `String`    | Path to remove                       |
| Returns   | `EE_Loader` | EE_Loader instance (method chaining) |

When your controller is finished using resources from an application package, and particularly if you have other application packages you want to work with, you may wish to remove the package path so the Loader no longer looks in that directory for resources. To remove the last path added, simply call the method with no parameters.

Or to remove a specific package path, specify the same path previously given to `add_package_path()` for a package.:

    ee()->load->remove_package_path(APPPATH.'addons/foo_bar/');

### `get_package_paths([$include_base = TRUE])`

| Parameter      | Type    | Description                 |
| -------------- | ------- | --------------------------- |
| \$include_base | `Bool`  | Whether to include BASEPATH |
| Returns        | `Array` | An array of package paths   |

Returns all currently available package paths.
