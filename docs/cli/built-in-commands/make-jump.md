# `make:jump`

Add Jumps File Generator -- Creates an add-on jump menu file.

## Syntax

`php eecli.php make:jump --addon=<addon_short_name>`

## Options list:

```
    --addon=<value>
    -a <value>
        Folder for third-party add-on you want to add Jump Menu file to
```

## Examples:

Generate jumps for an add-on:

`php eecli.php make:jump --addon=my_existing_addon`

Run interactively and choose the add-on when prompted:

`php eecli.php make:jump`
