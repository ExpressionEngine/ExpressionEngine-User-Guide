######
Toggle
######

Toggle is a fieldtype for storing yes/no or on/off data.

*************
Field Options
*************

Default Value
=============

When creating a Channel Entry does the field start in the "on" position or in
the "off" position?

*************
Template Tags
*************

This field is primarily useful with conditionals::

  {if toggle_field}
    Yes
  {if:else}
    No
  {/if}

When used as a single variable, e.g. ``{toggle_field}``, it will output a ``1`` for the "on" position and ``0`` for the "off" position. Handy if you are exporting channel data for later import or external use. Or writing templates for robot overlords. Or for switching between two images::

  <img src="/images/robot_{toggle_field}.png"> <!-- robot_0.png or robot_1.png -->