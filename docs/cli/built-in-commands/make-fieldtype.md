# `make:fieldtype`

Fieldtype Generator -- Creates a new fieldtype for an add-on.

## Syntax

`php eecli.php make:fieldtype <FieldtypeName> --addon=<addon_short_name>`

## Options list:

```
    --addon=<value>
    -a <value>
        Folder for third-party add-on you want to add fieldtype to
```

## Examples:

Generate a fieldtype in an existing add-on:

`php eecli.php make:fieldtype StatusPicker --addon=my_existing_addon`

Run interactively and choose the add-on when prompted:

`php eecli.php make:fieldtype StatusPicker`
