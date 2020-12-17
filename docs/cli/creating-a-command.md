# Creating a Command

Commands are created to live within add-ons, and are registered as part of the add-on process.

## addon.setup.php

In order to add commands to your addon, you should add the `commands` parameter as an associative array to your `addon.setup.php` file with the handle as the key, and the class of your command as the value.

```
return array(
    'author'             => 'Awesome Developer',
    'author_url'         => 'https://example.com/',
    'name'               => 'My Amazing Module',
    'description'        => 'Does amazing things',
    'version'            => '1.0',
    'namespace'          => 'Awesome\AmazingModule',
    'settings_exist'     => true,
    'commands'            => [
        'amazing:run'            => Awesome\AmazingModule\Commands\DoThings::class,
        'amazing:more-things'    => 'Awesome\AmazingModule\Commands\DoMoreThings',
    ]
);
```

It is best practice to namespace your commands, so as not to conflict with other addons.

## Anatomy of a Command

Creating commands is simple. Each commands is built in a similar way as part of a custom add-on:

### Class Structure

Your class can have any name, and should be namespaced to your addon. When creating your class, make sure to include:
`use ExpressionEngine\Cli\Cli;`

You class should also extend the `Cli` class.

```
use EllisLab\ExpressionEngine\Cli\Cli;

class CommandHelloWorld extends Cli {
}
```

### Required Variables

Each commmand is required to have a nummber of public variables that are required for finding and executing, as well as displaying pertinent information.

`$name`: The name of your Command.
`$description`: The basic gist of what your command does. This should be limited to one line
`$summary`: This is a more detailed explanation of what your command does or how to use it. This is displayed in the `--help` calls.
`$usage`: A oneline explanation of how to use your command.
`$commandOptions = []`: An array of available arguments and options, along with their description, as a key:value pair. ie. `'verbose,v' => 'Show all output'`

In addition, the `handle` function is required, and does all of the work when the command is run.

```
use EllisLab\ExpressionEngine\Cli\Cli;

class CommandHelloWorld extends Cli {

    /**
     * name of command
     * @var string
     */
    public $name = 'Hello World';

    /**
     * Public description of command
     * @var string
     */
    public $description = 'The most basic of commands';

    /**
     * Summary of command functionality
     * @var [type]
     */
    public $summary = 'This is a sample command used to test the CLI';

    /**
     * How to use command
     * @var string
     */
    public $usage = 'php eecli.php hello';

    /**
     * options available for use in command
     * @var array
     */
    public $commandOptions = [
        'verbose,v'    => 'Hello world, but longer',
    ];

    /**
     * Run the command
     * @return mixed
     */
    public function handle()
    {

        // This is where the magic happens

    }
    
}
```