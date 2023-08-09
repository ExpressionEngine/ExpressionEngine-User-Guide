<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2023, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Developing Variable Modifiers

Add-ons can provide their own [variable modifiers](templates/variable-modifiers.md) for use in templates.

Each variable modifier needs be created as a separate file in the `Modifiers` directory within the add-on's root folder, and registered in `addon.setup.php`.

The file name, which is also the PHP class name, should be the modifier's name with the first letter capitalized.

All modifier files are required to implement `ExpressionEngine\Service\Template\Variables\ModifierInterface`.

Each modifier should have a `namespace` definition, which consists of the add-on's namespace as defined in `addon.setup.php` followed by `\Modifiers`.

Lastly, the modifier's name should be registered in `addon.setup.php`.

TIP: **Tip:** Modifiers provided by add-ons can be called by their name as well as by their name prefixed with add-on's name and underscore. For example, below we can use `{title:hacker}` and `{title:seeo_hacker}` to achieve the same result.

### Example

Let's create the `:hacker` modifier, which would make text look geeky by converting some of the letters to similar looking numbers. This example modifier is part of the "Seeo" add-on.

    <?php

    /**
    * namespace is required and must be add-on's namespace + 'Modifiers'
    * 
    */
    namespace EEHarbor\Seeo\Modifiers;

    use ExpressionEngine\Service\Template\Variables\ModifierInterface;

    class Hacker implements ModifierInterface
    {
        public function modify($data, $params = array(), $tagdata = false)
        {
            return str_replace(['e', 'o', 'l'], ['3', '0', '1'], (string) $data);
        }
    }

Next, we'll add the following to `addon.setup.php`

    'modifiers' => array(
        'hacker'
    ),

And now, let's call it in a template.

    {exp:channel:entries entry_id="1"}
        <div class="title">
            <span>{title}</span> - Hello
        </div>
        <div class="hacker">
            <span>{title:hacker}</span> - H3110
        </div>
        <div class="seeo_hacker">
            <span>{title:seeo_hacker}</span> - H3110
        </div>
    {/exp:channel:entries}
