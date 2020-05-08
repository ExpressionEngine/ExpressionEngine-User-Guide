---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Working with Relationships

[TOC]

## Accessing Related Models

Related models are available on the model directly using the relationship name. They are easily differentiated by their `CamelCase` naming conventions:

    $group = $member->MemberGroup;

## Setting Relationships

To set a relationship, simply assign the model or collection that you want to relate, and then `save()` to commit the change:

    $member->MemberGroup = ee('Model')->get('MemberGroup', 1)->first();
    $member->save();

## Adding Related Models

To add additional models to a `HasMany` or `HasAndBelongsToMany` relationship, simply use PHP's array syntax, or call `add()` with a model to add:

    $member_group[] = $member;
    $member_group->add($member);

## Removing Related Models

To unset a relationship, simply assign `NULL`:

    $member->MemberGroup = NULL;

NOTE: **Caution:** Unsetting a relationship may result in the deletion of the child, where it would otherwise be orphaned. This can be prevented by establishing a new relationship before calling `save()`.

To remove a related model from a collection, call `remove()` with the related model or its primary key value:

    $member_group->remove($member);
    $member_group->remove(5); // remove member_id 5
