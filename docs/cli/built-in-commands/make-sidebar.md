# `make:sidebar`

Add-on Sidebar Generator -- Creates a control panel sidebar scaffold for an add-on.

## Syntax

`php eecli.php make:sidebar --addon=<addon_short_name>`

## Options list:

```
    --addon=<value>
    -a <value>
        Folder for third-party add-on you want to add sidebar to
```

## Examples:

Generate a sidebar scaffold:

`php eecli.php make:sidebar --addon=my_existing_addon`

Run interactively and select the add-on when prompted:

`php eecli.php make:sidebar`
