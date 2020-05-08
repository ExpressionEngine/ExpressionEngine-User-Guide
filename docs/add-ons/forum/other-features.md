<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Other Features

[TOC]

## Using PHP in the Forum Templates

You can enable PHP to be used in the Forum Templates if you wish. This is done under Default Preferences. You can do this if you wish to include other PHP scripts, such as banner ads. As with regular ExpressionEngine Templates, you can choose whether the [PHP is executed](templates/overview.md#php-in-templates) on "Input" or "Output".

## Running the Forums Through Regular Templates

By default, the Forum Module utilizes its own light-weight template display engine, rather than utilizing main templating system in ExpressionEngine. The consequence of this, though, is that you can't use general EE Tags, global variables, conditionals, or similar in the forum templates since they won't be parsed.

In the Default Preferences you set a "triggering" word for the forums, which by default is "forums". When the trigger word is encountered in the URL by ExpressionEngine, your forums will display. Your trigger word cannot be the same as any existing Template Group name.

If you absolutely must, there _is_ a way to run your Forum through the standard EE template engine:

1.  Create a Template as normal in the main Templates tab of the Control Panel. Name it as you want.
2.  Inside that new Template, place this code and **only** this code:

        {exp:forum}

If you have multiple forums, you can specify which forum to load using the "board" parameter, like so:

    {exp:forum board="board_name"}

And you can also specify a theme using the "theme" parameter:

    {exp:forum theme="my_theme"}

Your forum will then be run inside the regular EE template engine, which means that you can include standard EE Tags in the forum theme Templates. The forum is then accessed through whichever Template you created above, so the Template name is used in place of the "trigger" word mentioned earlier. Note that due to the nature of forum URLs, segment globals are not parsed when used in the forum templates.

The down side of this approach is that it adds more processing overhead, so it's not recommended unless users really need this capability. Since the forum can't be cached, on very busy sites this can create some unwanted server load.

Do not cache the Template you create for the forum. If you do so, your forum will not behave dynamically.
