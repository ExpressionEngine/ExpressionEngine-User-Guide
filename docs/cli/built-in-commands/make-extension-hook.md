# make:extension-hook

Extension Hook Generator -- Implements an EE extension hook in an add-on

## Options list:

```
    --addon=<value>
    -a <value>
        Folder for third-party add-on you want to add extension hook to
```

## Examples:

### Implementing the sessions_start extension hook:

`php eecli.php make:extension-hook sessions_start --addon=my_existing_addon`

TIP: For more information on using the `make:extension-hook` command to create new action, reference [Extending The Core](development/extensions.md).
