<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# XML Encode

[TOC]

This plugin converts reserved XML characters to entities.  It is useful in RSS and XML templates and as a custom field formatting option.

    {exp:xml_encode}
        text you want processed
    {/exp:xml_encode}

**Note: Because quotes are converted into &amp;quot; and &amp;apos; by this plugin, you cannot use ExpressionEngine conditionals inside of this plugin tag.**

## Parameters

### `protect_entities=`

    protect_entities="yes"

If you have existing entities in the text that you do not wish to be converted, you may use the parameter `protect_entities="yes"`, e.g.::

    {exp:xml_encode}
        Text &amp; Entities
    {/exp:xml_encode}

results in `Text &amp;amp; Entities`

    {exp:xml_encode protect_entities="yes"}
        Text &amp; Entities
    {/exp:xml_encode}

results in `Text &amp; Entities`