# make:command

Command Generator -- Creates a new CLI command for an add-on

## Options list:

```
    --addon=<value>
    -a <value>
        Folder for third-party add-on you want to add command to

    --description=<value>
    -d <value>
        Description of command

    --signature=<value>
    -s <value>
        Signature for command (i.e. make:magic)

```

## Examples:

### Generating a command:

`php eecli.php make:command "Awesome CLI Command" --addon=my_example_addon --description='This command is awesome' --signature='my_addon:awesome-example'`
