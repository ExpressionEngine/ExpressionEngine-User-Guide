# `make:cp-route`

Control Panel Route Generator -- Creates a control panel route for an add-on.

## Syntax

`php eecli.php make:cp-route <RouteName> --addon=<addon_short_name>`

## Options list:

```
    --addon=<value>
    -a <value>
        Folder for third-party add-on you want to add MCP route to
```

## Examples:

Generate a new CP route in an existing add-on:

`php eecli.php make:cp-route Orders --addon=my_existing_addon`

Run interactively and pick the add-on when prompted:

`php eecli.php make:cp-route Orders`
