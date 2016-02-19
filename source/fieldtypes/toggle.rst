######
Toggle
######

Toggle is a fieldtype for storing yes/no or on/off data.

*************
Field Options
*************

Default Value
=============

When creating a Channel Entry what is the default value for this toggle field?
Does it start in the "on" position or in the "off" position?

*************
Template Tags
*************

This field is primarily useful with conditionals::

  {if toggle_field}
  Yes
  {if:else}
  No
  {/if}

When used as a single variable it will output a ``1`` for the "on" position and
a ``0`` for the "off" position.
