<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Managing Variables

[TOC=2-3]

## Variable Properties

There are a couple of extra properties you can assign to variables, other than their name and value. These are the general properties.

### Variable name

Name of the variable you can use in your templates. Example: `lv_my_special_var`.

### Variable label

The label a user sees when editing the contents of the variable.

### Variable notes

Adds notes or instructions to the variable label. If you enter 2 white lines (3 newlines) to the notes, the first part will be added as a header above the variable.

### Group

Select which group the variable belongs to.

### Hide variable

You can hide variables from regular users (non-managers) on a per-variable basis.

### Early parsing

You can enable early parsing on a per-variable basis.

### Variable type

Choose any variable type that suits your needs best. [Here’s a list of variable types that come with Pro Variables.](/add-ons/pro-variables/type.md) Each type will reveal additional type-specific properties.

## Variable creation options

When creating a new variable, you have two extra options you can use. First, you can **set the initial value** of the variable, so it has a value upon creation. Second, you can enter any amount of **suffixes**, separated by a space. A new variable will be created for each suffix entered, each with identical settings apart from the suffix.

When using the suffix option, you can use `{suffix}` in both the variable name as the variable label. This will be replaced by the actual suffix upon creation.

## Variable groups

You can create any number of groups to organize your variables. These groups will appear in the Group drop down for each variable, so you can assign a group to it. On the module home page, variable managers can sort the groups using drag and drop. Variable managers can also edit and delete the groups from here, by clicking on the edit or delete icon next to the group name. You can alter the variable order in a group by editing the group’s properties.


### Group label

The name of the group as it appears in the list.

### Group notes

Adds notes or instructions to the group.

### Variable display order

You can sort the variables in the group using drag and drop.

## Group duplication

Instead of saving changes to an existing variable group, you can choose to save the group as a _new_ group. Doing so will reveal a couple more options.


## Duplicate variables

Optionally duplicate all variables in given group.

## Variable suffix

If you want to duplicate the group variables, enter a single suffix to be applied to each new variable in the new group.

## Suffix options

You can choose to either _append_ the suffix to each new variable, or to _replace_ an existing suffix for each new variable. Please note that the suffix is considered to be the part of the variable name _after the last underscore_.