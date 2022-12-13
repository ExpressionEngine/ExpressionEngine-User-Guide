# make:prolet

Prolet Generator -- Creates a new prolet for an add-on

## Options list:

```
    --addon=<value>
    -a <value>
        Folder for third-party add-on you want to add prolet to

    --description=<value>
    -d <value>
        Description of prolet

    --has-widget
    -w
        Create a widget for the add-on after generating the prolet (optional)

    --widget-name=<value>
    -n <value>
        Name of widget

```

## Examples:

### Generating a prolet:

`php eecli.php make:prolet MyNewProlet --addon=my_addon --description="This is my prolet description"`

TIP: For more information on using the `make:prolet` command to create new Prolet with your add-on, reference [Adding Prolets](development/prolets.md).
