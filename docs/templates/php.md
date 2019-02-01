<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# PHP in Templates

[TOC]

NOTE: **Important:** Enabling PHP in a template will enable anyone with editing rights for that template to become a de-facto Super Admin since they can execute any PHP they want in that template, including PHP that can reveal information about your system, PHP that can delete data from your database, etc. Exercise extreme caution before enabling this option if you permit others to edit your templates.

ExpressionEngine allows you to place [PHP](http://www.php.net/) code within your Templates so that it can be executed, allowing more dynamic capability with your content.

PHP preferences can be set for each Template individually, which means that you can decide which of your Templates, if any, will be able to parse PHP code inside it. You can access the settings for this under the Preferences link for any Template Group in the Templates section.

PHP settings for each Template are honored on a per-Template basis, which means that you can embed a Template that has PHP enabled into another Template which does **not** have PHP enabled.

## Preferences

### Allow PHP?

Setting this preference to "Yes" will allow you to have PHP code parsed within your Template.

### PHP Parsing Stage

There are two choices for when PHP gets parsed:

**Input**: PHP parsed at the "input" stage will be parsed early in the [template parsing order](templates/engine.md), before ExpressionEngine Tags get parsed. Parsing PHP on Input will allow you to do things such as:

    {exp:channel:entries limit="<?php echo $limit; ?>"}

or:

    <?php
    if ($size == "big")
    {
        echo "{exp:channel:entries limit='50'}";
    }
    else
    {
        echo "{exp:channel:entries limit='2'}";
    }
    ?>

**Output**: PHP parsed at the "output" stage happens later in the [template parsing order](templates/engine.md), which means it will be parsed _after_ the ExpressionEngine Tags are interpreted. This will allow you to use PHP to affect the "rendered Template".
