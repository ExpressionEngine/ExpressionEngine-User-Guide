# `update:run-hook`

Run Update Hook -- Runs one or more upgrade hooks defined in `upgrade.config.php`.

This command loads preflight/postflight hooks from your upgrade config and executes the hook names you pass as arguments.

## Syntax

`php eecli.php update:run-hook <hook_name> [additional_hook_names...]`

## Options list:

This command does not define command-specific options.

## Examples:

Run a single hook:

`php eecli.php update:run-hook preflightCacheClear`

Run multiple hooks in one invocation:

`php eecli.php update:run-hook preflightCacheClear postflightRebuildCaches`

When prompted, provide the path to your `upgrade.config.php` (or press Enter to use the default system path).
