<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Conditional Fields

[TOC]

Conditional Fields allow for fields to be conditionally shown or hidden on the entry publish form based on the value of other fields in a given entry. 

## Making Fields Conditional
To make a field conditional, Navigate to the field's settings in the Control Panel and toggle on the setting "Make Conditional?"

![conditional toggle](/_images/field-conditional-toggle.gif)

## Setting Field Conditions

### Basic Conditions
After enabling a field to be conditional, conditions can then be set through a series of rules and conditional sets. After first enabling conditional logic on a field, your first conditional set is displayed.

For example, to make the current field in the screenshot below only visible if the Content field has any value set the "Select a field" dropdown to Content, and choose "has any value" from the second dropdown.

![example condition](/_images/condition-example-1.png)

The result of this being our field (in this case the About Image field) is hidden when Content is empty on a given entry.

![example condition animation](/_images/example-conditional-1.gif)

### Adding Conditions
Additional conditions can be added to a set when needed. Click on "Add a Condition..." below your last condition and set the condition as needed. 

Adding to the example above, we are going to have the About Image show only when the Content field has any value and the SEO Title field has the value of "Example".

![example multiple condition](/_images/multiple-conditions.png)

Here is the result:
![example multiple condition animation](/_images/multiple-conditions.gif)

### Propositional Logic (AND / OR)

#### Matching ALL Conditions (AND Logic)
The default setting is for conditions for a field to use AND logic. This is set by selecting "all" from a set's Matching Conditions dropdown.
![all conditions](/_images/all-conditions.png)

When "Matching all conditions" is set, all conditions in the set must be TRUE for set to evaluate to TRUE and the field to be shown on the publish form. If any of the conditions are FALSE, the field will not show.

#### Matching ANY Conditions (OR Logic)
Conditions for a field can also be set to use OR logic. This is set by selecting "any" from a set's Matching Conditions dropdown.
![any conditions](/_images/any-conditions.png)

When "Matching any conditions" is set, only one of the conditions in the set must be TRUE for set to evaluate to TRUE and the field to be shown on the publish form. Only if none of the conditions are TRUE will the field will not show.

### Advanced Conditions with Conditional Sets
Similar to subsets in logic, conditional sets allow you to create multiple subsets of conditions that must be TRUE for a field to be displayed. 

Conditional Sets can be added by clicking the "Add another set..." link below your current set.

WARN: **NOTE:** All conditional sets must evaluate to TRUE for a field to be displayed.

Conditional fields are only displayed in the entry publish screen when all conditional sets evaluate to TRUE.

In the screenshot below, the current field will only show if the Content field has any value and the SEO Title has the value of "Example", and either the Contact Email field has any value or the Contact Phone field is empty. This can also be explained as (Content != "" && SEO Title == "Example") AND (Contact Email != "" OR Contact Phone == "")

![advanced conditional example](/_images/advanced-conditional.png)

![advanced conditional animation](/_images/advanced-conditional.gif)

## Front-End Templating
Conditional logic only manages if a field is displayed or not in the entry publish form. It does not automatically display or hide a field in a [template](/templates/overview.md) or in a [Channel Form](channels/channel-form/overview.md).

To show or hide a field in a template based on the field's conditional logic and data in the given entry, use the basic template conditional `{if_my_field}`.

Example: If the About Image field is conditional, to hide/show our About Image field in the template based on the current entry and the field's conditions then use the following:

```
{if about_image}
    {!-- content here will only be shown if About Image has data and is conditionally displayed --}
    <img src="{about_image}" />
    ...
{/if}

```

## Fieldtype Allowed Conditions and Defaults
Each native fieldtype has certain condition operators that are allowed to be used with it when it is used in a condition.

[TOC=3 hide]



### Checkboxes
| Operators (human readable) | Operators (logic) 
| -------------------------- | ----------------- 
| contains                   |                   
| does not contain           |                   
| is (default)               | \=                
| is not                     | !=                
| is empty                   |                   
| has any value              |                   

### Color Picker
| Operators (human readable) | Operators (logic) 
| -------------------------- | ----------------- 
| is                         | \=                             
| is not (default)           | !=               
| is empty                   |                  
| has any value              |
                
### Color Picker
| Operators (human readable) | Operators (logic) 
| -------------------------- | ----------------- 
| is                         | \=                             
| is not (default)           | !=               
| is empty                   |                  
| has any value              |

### Date
| Operators (human readable) | Operators (logic) 
| -------------------------- | ----------------- 
| is empty                   |                  
| has any value (default)    |

### Duration
| Operators (human readable) | Operators (logic) 
| -------------------------- | ----------------- 
| is                         | \=                             
| is not (default)           | !=               
| is empty                   |                  
| has any value              |

### Email Address
| Operators (human readable) | Operators (logic) 
| -------------------------- | ----------------- 
| is                         | \=                             
| is not (default)           | !=               
| is empty                   |                  
| has any value              |
| contains                   |


### File
| Operators (human readable) | Operators (logic) 
| -------------------------- | ----------------- 
| is empty                   |                  
| has any value (default)    |
| contains                   |


### Multi Select
| Operators (human readable) | Operators (logic) 
| -------------------------- | ----------------- 
| is (default)               | \=                             
| is not                     | !=               
| is empty                   |                  
| has any value              |
| contains                   |


### Radio Buttons
| Operators (human readable) | Operators (logic) 
| -------------------------- | ----------------- 
| is (default)               | \=                             
| is not                     | !=               
| is empty                   |                  
| has any value              |

### Rich Text Editor
| Operators (human readable) | Operators (logic) 
| -------------------------- | ----------------- 
| is empty                   |                  
| has any value (default)    |

### Select Dropdown
| Operators (human readable) | Operators (logic) 
| -------------------------- | ----------------- 
| is (default)               | \=                             
| is not                     | !=               
| is empty                   |                  
| has any value              |

### Text Input
| Operators (human readable) | Operators (logic) 
| -------------------------- | ----------------- 
| is                         | \=                             
| is not (default)           | !=               
| is empty                   |                  
| has any value              |
| contains                   |

### Textarea
| Operators (human readable) | Operators (logic) 
| -------------------------- | ----------------- 
| is                         | \=                             
| is not (default)           | !=               
| is empty                   |                  
| has any value              |
| contains                   |

### Toggle
| Operators (human readable) | Operators (logic) 
| -------------------------- | ----------------- 
| is (default)               | \=                             
| is not                     | !=  

### URL
| Operators (human readable) | Operators (logic) 
| -------------------------- | ----------------- 
| is                         | \=                             
| is not (default)           | !=               
| is empty                   |                  
| has any value              |
| contains                   |