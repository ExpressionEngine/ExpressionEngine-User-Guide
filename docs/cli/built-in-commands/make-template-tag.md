# `make:template-tag`

Template Tag Generator -- Creates a new template tag for an add-on.

## Syntax

`php eecli.php make:template-tag <TagName> --addon=<addon_short_name>`

## Options list:

```
    --addon=<value>
    -a <value>
        Folder for third-party add-on you want to add tag to
```

## Examples:

Generate a template tag in an add-on:

`php eecli.php make:template-tag MyNewTag --addon=my_existing_addon`

Run interactively and pick the add-on when prompted:

`php eecli.php make:template-tag MyNewTag`
