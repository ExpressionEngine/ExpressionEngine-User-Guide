# CLI Usage

Commands can be called in the terminal of your choice in the format of:

`$ php system/ee/eecli.php hello`

This will call `eecli` with a command of `hello`. This is the Hello World of ExpressionEngine commands, and will display:

`Hello world`

Commands can also request confirmation:

```
$ php system/ee/eecli.php hello -c

Hello world
Are you liking these questions? (yes/no) [no]
yes
That's good to hear!
```

Commands are also able to take interaction:

```
$ php system/ee/eecli.php hello -i

Hello world
What's your name? Andy
Pleasure to meet you, Andy!
```

WARN: **Important:** The CLI is available to every user that has SSH or terminal access to your site's webserver. It does not handle authorization inside ExpressionEngine and is relying on your server's authorization method instead. 

If you want to disable CLI globally, it can be done by setting `cli_enabled` [configuration override](general/system-configuration-overrides.md#cli_enabled) to `n`.

## List All Commands

To view a list of all available commands, you may use the list command:

`php system/ee/eecli.php list`

This will return a basic list of all available system and user-generated commands.

```
$ php system/ee/eecli.php list

| Command             | Description                              |
------------------------------------------------------------------
| hello               | The most basic of commands               |
| list                | Lists all available commands             |
| update              | Updates ExpressionEngine                 |
| cache:clear         | Clears all ExpressionEngine caches       |
...
```

## Get Help

You can get help information on any command by using the `--help` or `-h` parameter when running the command.

```
$ php system/ee/eecli.php hello -h

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
