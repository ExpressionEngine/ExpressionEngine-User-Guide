<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Form Fields

[TOC]

Every Field Set consists of one or more Fields. The below covers everything about Fields.

## Usage

When working with Fields, you'll always request it from the [Field Set](development/services/cp-form/field-sets.md) object to request it, initially. Once you have it, you'll decorate it like everything else. For example: 

```
$form = ee('CP/Form');
$field_group = $form->getGroup('General Settings');
$field_set = $field_group->getFieldSet('First Name');

$field = $field_set->getField('first_name', 'text')
    ->setPlaceholder('First Name')
    ->setRequired(true);
```

The above will attach a `text` Input field onto the Field Set "First Name". 

## Available Input Types

fdsa

## API Reference

**class `ExpressionEngine\Library\Cp\Form\Field`**

All input fields are based on the `Field` object. 

