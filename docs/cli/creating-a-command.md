# Creating a Command

Commands are created inside add-ons and registered through the add-on setup file.

[TOC]

## Prerequisite: Existing Add-on

Before creating a command, make sure you already have an add-on directory in `system/user/addons/[addon_short_name]`. If needed, create one first with [`make:addon`](cli/built-in-commands/make-addon.md).

## Generate a Command with `make:command`

The recommended workflow is to use the command generator:

```
php eecli.php make:command "Sync Orders" --addon=my_example_addon --description="Sync orders from an API" --signature="sync-orders"
```

You can also run it interactively:

```
php eecli.php make:command
Let's build your command!
Command name? Sync Orders
What add-on do you want to add this to? my_example_addon
Command description? Sync orders from an API
Command signature? (i.e. make:magic) sync-orders
Let's build!
Your command has been created successfully!
```

NOTE: The generator prefixes the command signature with the add-on short name.  
For example, `sync-orders` becomes `my_example_addon:sync-orders`.

For all options, see [`make:command`](cli/built-in-commands/make-command.md).

## What Gets Generated

`make:command` creates a command class file in your add-on:

```
system/user/addons/my_example_addon/Commands/CommandSyncOrders.php
```

It also updates `addon.setup.php` by adding your command to the `commands` array:

```
return [
    // ...
    'namespace' => 'Vendor\MyExampleAddon',
    'commands' => [
        'my_example_addon:sync-orders' => Vendor\MyExampleAddon\Commands\CommandSyncOrders::class,
    ],
];
```

## Anatomy of the Generated Class

The generated class extends `ExpressionEngine\Cli\Cli` and includes all required properties:

```php
<?php

namespace Vendor\MyExampleAddon\Commands;

use ExpressionEngine\Cli\Cli;

class CommandSyncOrders extends Cli
{
    public $name = 'Sync Orders';
    public $signature = 'my_example_addon:sync-orders';
    public $description = 'Sync orders from an API';
    public $summary = 'Sync orders from an API';
    public $usage = 'php eecli.php my_example_addon:sync-orders';
    public $commandOptions = [];

    public function handle()
    {
        $this->info('Hello World!');
    }
}
```

You can now replace the `handle()` contents with your command logic and add options to `$commandOptions` as needed.

## Advanced: Manual Registration

Manual registration is optional, but if you add command classes yourself, register them in `addon.setup.php` under the `commands` key using `::class` values:

```php
'commands' => [
    'my_example_addon:sync-orders' => Vendor\MyExampleAddon\Commands\CommandSyncOrders::class,
],
```
