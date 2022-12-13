# Creating a CLI Command

[TOC]

## Overview
The ExpressionEngine [Command Line Inferface (CLI)](/cli/intro.md) makes it simple and more efficent to do many things inside of ExpressionEngine. In fact, if you're following the docs to build your own custom add-on then you're probably using the CLI to build out the architecture of your add-on.

You can also build your own commands that will enable users to interact with your add-on or do other things inside of ExpressionEngine. Commands are created to live within add-ons, and are registered as part of the add-on process.

NOTE:Before adding a custom CLI Command to your add-on, you need to already have an add-on in place. See [Building An Add-On: Getting Started](development/addon-development-overview.md#getting-started) for how to generate the starter files for your add-on.

## Creating An Amazing Command
We add custom commands to the CLI when our add-on is installed by using the CLI.

```
php system/ee/eecli.php make:command
```

Follow the prompts to add a CLI command to your add-on. 

This will create a `Commands` folder in your add-on along with a class and file based on your command name.

```
amazing_add_on
 ┣ Commands
 ┃ ┣ Command[CommandName].php
```

CLI Commands are installed through an add-on's `addon.setup.php` file. The CLI takes care of this for us. We can see here that CLI creates the `$commands` array inside the array that gets returned from our `addon.setup.php` file.

```
<?php

return [
    'author'            => 'Expressionengine Developer',
    'author_url'        => 'https://www.expressionengine.com',
    'name'              => 'Amazing Add-on',
    'description'       => 'asdfjasdf',
    'version'           => '1.0.0',
    'namespace'         => 'ExpressionengineDeveloper\AmazingAddon',
    'settings_exist'    => true,
    'commands' => [
        'amazing_add_on:make:amazing-things' => ExpressionengineDeveloper\AmazingAddon\Commands\CommandAnAmazingCommand::class,
    ],

    ],
 
];

```

Now when our add-on is installed, users will have access to our new command.

## Anatomy of a Command - `/Commands/Command[CommandName]`
Inside of our add-on we now have a file named with our command's name (in PascalCase).

In this example we have created a new command named "An Amazing Command" to our Amazing Add-on:

```
<?php

namespace ExpressionengineDeveloper\AmazingAddon\Commands;

use ExpressionEngine\Cli\Cli;

class CommandAnAmazingCommand extends Cli
{
    /**
     * name of command
     * @var string
     */
    public $name = 'an amazing command';

    /**
     * signature of command
     * @var string
     */
    public $signature = 'amazing_add_on:make:amazing-things';

    /**
     * Public description of command
     * @var string
     */
    public $description = 'This command does amazing things';

    /**
     * Summary of command functionality
     * @var [type]
     */
    public $summary = 'This command does amazing things';

    /**
     * How to use command
     * @var string
     */
    public $usage = 'php eecli.php amazing_add_on:make:amazing-things';

    /**
     * options available for use in command
     * @var array
     */
    public $commandOptions = [

    ];

    /**
     * Run the command
     * @return mixed
     */
    public function handle()
    {
        $this->info('Hello World!');
    }
}
```

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