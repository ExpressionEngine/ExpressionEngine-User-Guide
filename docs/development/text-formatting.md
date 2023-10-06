<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Adding Text Formatting Options

ExpressionEngine allows any add-on to add a [text formatting](general/text-formatting.md) option in the Publish page of the Control Panel. In order to do this and add-on needs `pi` file also referred to as a plugin file. These files are not supported by the CLI, so we need to make our own. 

We'll start by creating a file named `pi.[addonname].php`. In our case, our add-on is named "Amazing Bold Add-on" so our file will be named `pi.amazing_bold_add_on.php`.

Now we'll need to our code, being sure to add a string as a parameter. In this case we'll use `$str` 

```
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
```

The above tag can then be assigned in the Publish page or fieldtype settings, allowing you to run your channel entries through it.

![text formatting options](_images/addons_text_formatting.png)

TIP: Plugins allow you to manipulate text much much like a [Template Tag](/development/custom-template-tags.md). 

