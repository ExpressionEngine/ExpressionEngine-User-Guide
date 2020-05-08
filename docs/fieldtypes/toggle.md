<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Toggle Fieldtype

Toggle is a fieldtype for storing yes/no or on/off data.

## Template Tag

This field is primarily useful with conditionals:

    {if toggle_field}
      Yes
    {if:else}
      No
    {/if}

When used as a single variable, e.g. `{toggle_field}`, it will output a `1` for the "on" position and `0` for the "off" position. Handy if you are exporting channel data for later import or external use. Or writing templates for robot overlords. Or for switching between two images:

    <img src="/images/robot_{toggle_field}.png"> <!-- robot_0.png or robot_1.png -->
