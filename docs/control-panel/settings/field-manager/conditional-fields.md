<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Conditional Fields

Conditional Fields allow for fields to be conditionally shown or hidden on the entry publish form based on the value of other fields in a given entry. 

## Making Fields Conditional
To make a field conditional, Navigate to the field's settings in the Control Panel and toggle on the setting "Make Conditional?"

![conditional toggle](/_images/field-conditional-toggle.gif)

## Setting Field Conditions

### Basic Conditions
After enabling a field to be conditional, conditions can then be set through a series of rules and conditional sets. After first enabling conditional logic on a field, your first conditional set is displayed.

For example, to make the current field in the screenshot below only visible if the Content field has any value set the "Select a field" dropdown to Content, and choose "has any value" from the second dropdown.

!(example condition)[/_images/condition-example-1.png]

The result of this being our field (in this case the About Image field) is hidden when Content is empty on a given entry.

!(example condition animation)[/_images/example-condition-1.png]

### Adding Conditions
Additional conditions can be added to a set when needed. Click on "Add another set..." below your last condition and set the condition as needed. 

Adding to the example above, we are going to have the About Image show only when the Content field has any value and the SEO Title field has the value of "Example".

!(example multiple condition)[/_images/multiple-conditions.png]

Here is the result:
!(example multiple condition animation)[/_images/multiple-conditions.gif]

### Propositional Logic (AND / OR)

#### Matching ALL Conditions (AND Logic)
The default setting is for conditions for a field to use AND logic. This is set by selecting "all" from a set's Matching Conditions dropdown.
!(all conditions)[/_images/all-conditions.png]

When "Matching all conditions" is set, all conditions in the set must be TRUE for set to evaluate to TRUE and the field to be shown on the publish form. If any of the conditions are FALSE, the field will not show.

#### Matching ANY Conditions (OR Logic)
Conditions for a field can also be set to use OR logic. This is set by selecting "any" from a set's Matching Conditions dropdown.
!(any conditions)[/_images/any-conditions.png]

When "Matching any conditions" is set, only one of the conditions in the set must be TRUE for set to evaluate to TRUE and the field to be shown on the publish form. Only if none of the conditions are TRUE will the field will not show.

### Advanced Conditions with Conditional Sets
Similar to subsets in logic, conditional sets allow you to create multiple subsets of conditions that must be TRUE for a field to be displayed. 

WARN: **NOTE:** All conditional sets must evaluate to TRUE for a field to be displayed.

Conditional fields are displayed when all conditional sets evaluate to TRUE.

In the screenshot below, the current field will only show if the Content field has any value and the SEO Title has the value of "Example", and either the Contact Email field has any value or the Contact Phone field is empty. This can also be explained as (Content != "" && SEO Title == "Example") AND (Contact Email != "" OR Contact Phone == "")

!(advanced conditional example)[_images/advanced-conditional.png]

!(advanced conditional animation)[_images/advanced-conditional.gif]


## Required Fields
A note about required fields. Required fields are still required whether they are currently be conditionally shown or hidden. This means that if a required field is hidden and currently contains no value, the entry validation will fail and the entry cannot be saved. 

If a required field has data before it is hidden by a condition, the entry will validate and save.


## Front-End Templating
Conditional logic only manages if a field is displayed or not in the entry publish form. It does not automatically display or hide a field in a [template](/templates/overview.md) or in a [Channel Form](channels/channel-form/overview.md).

To show or hide a field in a template based on the field's conditional logic and data in the given entry.


