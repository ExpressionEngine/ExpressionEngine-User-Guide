# CLI Usage

Commands can be called in the terminal of your choice in the format of:

`$ php system/eecli.php hello`

This will call `eecli` with a command of `hello`. This is the Hello World of EE commands, and will display:

`Hello world`

Commands can also request confirmation:

```
$ php system/eecli.php hello -c

Hello world
Are you liking these questions? (yes/no) [no]
yes
That's good to hear!
```

Commands are also able to take interaction:

```
$ php system/eecli.php hello -i

Hello world
What's your name? Andy
Pleasure to meet you, Andy!
```

## List All Commands

To view a list of all available commands, you may use the list command:

`php system/eecli.php list`

This will return a basic list of all available system and user-generated commands.

```
$ php system/eecli.php list

| Command             | Description                                                 |
-------------------------------------------------------------------------------------
| hello               | The most basic of commands                                  |
| list                | Lists all available commands                                |
| update              | Updates EE                                                  |
| cache:clear         | Clears all EE caches                                        |
```

## Get Help

You can get help information on any command by using the `--help` or `-h` parameter when running the command.

```
$ php system/eecli.php hello -h

SUMMARY
    Hello World -- This is a sample command used to test the CLI

USAGE
    Hello World php eecli.php hello

DESCRIPTION
    The most basic of commands

OPTIONS
    --verbose
    -v
        Hello world, but longer

    --interactive
    -i
        Let's interact!

    --confirm
    -c
        Test the confirmation
```


## System Commands

ExpressionEngine comes with a number of CLI commands already predefined.

- `hello`: The most basic of commands, a great command for you to learn about the CLI!
- `list`: Lists all available commands. This will display install commands if EE is not installed, and a full list of commands if it is.
- `update`: Gets most recent version of EE. This will pull from your local version if you have downloaded the most recent version, or the cloud version for the next major version of EE if not.
- `cache`:clear: Clears any one, or all, EE caches

### Advanced Use

The following commands are for advanced usage, used in conjunction with EE upgrades for major versions. It is highly recommended to back up both your database and filesystem before utilizing them

- `prepare-upgrade`: Prepare a different site to be upgraded using these files.
- `run-update-hook`: Runs specific update hooks from your upgrade.config file.
