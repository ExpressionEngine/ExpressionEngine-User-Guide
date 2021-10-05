---
lang: ee
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://www.packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Add-on Installer

ExpressionEngine 6 has simplified the add-on installation procedure by allowing a module or extension extend the `Installer` service.

NOTE: **Note:** This feature is only available in ExpressionEngine 6 (and greater). For previous CMS versions, please use appropriate function for [Modules](development/modules.md#update-file-function-reference) and [Extensions](development/extensions.md#activating-and-updating).

## Module installer

To use the new installer service, the module's `upd.[module_name].php` file needs to include this code at a minimum.

    use ExpressionEngine\Service\Addon\Installer;

    class Query_upd extends Installer
    {

        public function __construct()
        {
            parent::__construct();
        }

    }

Additional functionality can be installed using the following guidelines:

    <?php

    use ExpressionEngine\Service\Addon\Installer; //required

    /**
    * Your _upd class must extend Installer
    */

    class Query_upd extends Installer
    {

        public $has_cp_backend = 'n';
        public $has_publish_fields = 'n';
        
        // defines the module's actions that should be installed.
        public $actions = [ 
                [
                    'class' => 'My_addon', 
                    'method' => 'action_function', // required
                    'csrf_exempt' => true
                ]
        ];

        // defines an extension's methods and hooks that should be installed
        public $methods = [
            [
                'method' => 'run', // will default to same as hook if not defined
                'hook' => 'template_fetch_template', // required
                'priority' => "",
                'enabled' => "" // y/n
            ],
            [
                'method' => 'cleanup', // will default to same as hook if not defined
                'hook' => 'template_post_parse' // required
            ]
        ];    


        /**
        * Constructor alone will install module and actions.
        */
        public function __construct()
        {
            parent::__construct();
        }

        /** 
        * install() and uninstall() are optional functions. 
        * Only use if additional install or uninstall functionality is needed.
        * If needed, must include parent::__construct();
        */

        public function install()
        {
            return parent::install();
        }

        public function uninstall()
        {
            return parent::uninstall();
        }

    }


## Extension installer


Extension files can now be as simplified as well. However they must include the `$methods` declaration.

    use ExpressionEngine\Service\Addon\Installer;

    class Query_ext extends Installer
    {
        // defines an extension's methods and hooks that should be installed
        public $methods = [
            [
                'method' => 'run', // will default to same as hook if not defined
                'hook' => 'template_fetch_template', // required
                'priority' => "",
                'enabled' => "" // y/n
            ],
            [
                'method' => 'cleanup', // will default to same as hook if not defined
                'hook' => 'template_post_parse' // required
            ]
        ]; 

        /** 
        * Notice that for extensions you must include $settings 
        * as a parameter in the constructor
        */    
        public function __construct($settings = [])
        {
            parent::__construct($settings);
        }

    }



Additionally you may use `activate_extension()` and `disable_extension()` if needed for additional functionality as shown below.

    <?php
    use ExpressionEngine\Service\Addon\Installer;

    class Query_ext extends Installer
    {
        // defines an extension's methods and hooks that should be installed
        public $methods = [
            [
                'method' => 'run', // will default to same as hook if not defined
                'hook' => 'template_fetch_template', // required
                'priority' => "",
                'enabled' => "" // y/n
            ],
            [
                'method' => 'cleanup', // will default to same as hook if not defined
                'hook' => 'template_post_parse' // required
            ]
        ]; 

        /** 
        * Notice that for extensions you must include $settings 
        * as a parameter in the constructor
        */    
        public function __construct($settings = [])
        {
            parent::__construct($settings);
        }

        /** 
        * activate_extension() and disable_extension() are optional functions. 
        * Only use if additional functionality is needed.
        * If needed, must include parent::__construct();
        */

        public function activate_extension()
        {
            parent::activate_extension();
        }

        public function disable_extension ()
        {
            parent::disable_extension();
        }


    }

