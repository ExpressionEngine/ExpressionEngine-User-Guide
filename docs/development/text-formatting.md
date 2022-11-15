<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

## Passing Data Directly

ExpressionEngine allows any template tag to be assigned as a text formatting choice in the Publish page of the Control Panel. In order to allow a template tag to be used this way it needs to be able to accept data directly. 

Add a parameter to the function. It's best to make the parameter conditional so it will know whether it's being used in a template or directly as a formatting choice:

    class Bold
    {
        public $return_data = '';

        function __construct($str = NULL)
        {
            if (empty($str))
            {
                $str = ee()->TMPL->tagdata;
            }

            $this->return_data = "<b>".$str."</b>";
        }
    }

The above tag can then be assigned in the Publish page, allowing you to run your channel entries through it.