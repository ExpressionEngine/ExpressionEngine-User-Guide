# make:service

Service Generator -- Creates a new service for an add-on

## Options list:

```
    --addon=<value>
    -a <value>
        Name of the add-on you want to add the service to

    --singleton
    -s
        Register the generated service in `services.singletons`
```

## Examples:

### Generating a service:

`php eecli.php make:service MyService --addon=my_existing_addon`

### Generating a singleton service:

`php eecli.php make:service MyService --addon=my_existing_addon --singleton`
